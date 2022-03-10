import * as antlr4ts from 'antlr4ts';
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
// import { RuleNode } from "antlr4ts/tree/RuleNode";

import { DebugInternalKinematicsLexer } from './parser/DebugInternalKinematicsLexer';
import { DebugInternalKinematicsParser, RuleJointContext, RuleLinkContext, RuleMeshContext, RuleVisualContext} from './parser/DebugInternalKinematicsParser';
import { DebugInternalKinematicsListener } from './parser/DebugInternalKinematicsListener';

import { UrdfModel, UrdfJoint, UrdfLink, UrdfVisual, UrdfMesh } from './urdf/urdf'
import { Vector3, Quaternion, Pose } from 'roslib';
// import { RuleNode } from 'antlr4ts/tree/RuleNode';
import * as THREE from 'three';


function extendRadians(rad: string) {
    if(!rad.includes('radians')) {
        return rad;
    }

    return rad.replace(/^\${radians\(/g, '').replace(/\)\}/g, '');
}

// how to use these meshfiles? Make a list? Can I at least visualize the first one?
// also need to get the origin; there are 2 origins - visual / collision and joint - which one to use?
class TreeShapeListener implements DebugInternalKinematicsListener {
    model: UrdfModel;
    private linkMap = new Map<String, UrdfLink>();

    constructor(model: UrdfModel) {
        this.model = model;
    }

    public enterRuleJoint(ctx: RuleJointContext): void {
        let parent_link = ctx.getChild(7).text.replace(/"/g, '');
        let child_link = ctx.getChild(9).text.replace(/"/g, '');
        // for(let i = 0; i < ctx.childCount; i++) {
        //     // console.log(i);
        //     console.log(i + " " + ctx.getChild(i).text);
        // }

        let rpy = ctx.getChild(11).getChild(0).getChild(3).text.replace(/"/g, '').split(' ');
        let xyz = ctx.getChild(11).getChild(0).getChild(5).text.replace(/"/g, '').split(' ');
        // console.log("rpy: " + rpy);
        // console.log("xyz: " + xyz[0] + " " + ctx.getChild(11).getChild(0).getChild(5).text);

        let joint = new UrdfJoint();
        joint.name = ctx.getChild(3).text.replace(/"/g, '');
        joint.type = ctx.getChild(5).text;
        joint.parent = this.linkMap.get(parent_link);
        joint.child = this.linkMap.get(child_link);

        var position = new Vector3({
            x : parseFloat(xyz[0]),
            y : parseFloat(xyz[1]),
            z : parseFloat(xyz[2])
        });

        // convert '$radian{deg}' to radians in float
        let r = parseFloat(extendRadians(rpy[0])) * (Math.PI/180);
        let p = parseFloat(extendRadians(rpy[1])) * (Math.PI/180);
        let y = parseFloat(extendRadians(rpy[2])) * (Math.PI/180);

        var rot = new THREE.Quaternion().setFromEuler(new THREE.Euler(r, p, y, 'XYZ'));

        var orientation = new Quaternion({
            x : rot.x,
            y : rot.y,
            z : rot.z,
            w : rot.w
        });
        var origin = new Pose({
            position : position,
            orientation : orientation
        });
        joint.origin = origin;
        this.model.add_joint(joint);
    }

    // links may not have geometries. So it is necessary
    // to parse them independently
    public enterRuleLink(ctx: RuleLinkContext): void {
        let name = ctx.getChild(3).text.replace(/"/g, '');
        let link = new UrdfLink(name!);

        this.linkMap.set(link.name, link);
        this.model.add_link(link);
    }

    // ideally all geometries (links) should be parsed before the joints
    // since links are referenced in the joints
    public enterRuleVisual(ctx: RuleVisualContext): void {
        let visual = new UrdfVisual();
        // let rpy = ctx.getChild(3).getChild(3).text.split(' ');;
        let xyz = ctx.getChild(3).getChild(5).text.split(' ');;

        var position = new Vector3({
            x : parseFloat(xyz[0]),
            y : parseFloat(xyz[1]),
            z : parseFloat(xyz[2])
        });
        var orientation = new Quaternion({
            x : 0,
            y : 0,
            z : 0,
            w : 1
        });
        var origin = new Pose({
            position : position,
            orientation : orientation
        });
        visual.origin = origin;

        // get link name to update link obj
        let name = ctx.parent?.getChild(3).text.replace(/"/g, '');
        let link = this.linkMap.get(name!);

        let geom = ctx.getChild(5).getChild(3);

        // the same steps need to be repeated for other geometries
        if (geom instanceof RuleMeshContext) {
            let uri = geom.getChild(3).text  // id=3 is hardcoded; not a good idea
                .replace('package://', '')
                .replace(/"/g, '');

            let mesh = new UrdfMesh();
            mesh.filename = uri;
            visual.geometry = mesh;
        }
        // update link with visual (geometry)
        link!.visual = visual;
        Object.assign(this.linkMap, {name: link});
    }
}


export async function getModel(modelStr: string) {
    console.log("Initializing model")

    // Create the lexer and parser
    let inputStream = antlr4ts.CharStreams.fromString(modelStr);
    let lexer = new DebugInternalKinematicsLexer(inputStream);
    let tokenStream = new antlr4ts.CommonTokenStream(lexer);
    let parser = new DebugInternalKinematicsParser(tokenStream);
    
    parser.buildParseTree = true;
    let tree = parser.ruleRobot();

    var model = new UrdfModel();
    ParseTreeWalker.DEFAULT.walk(new TreeShapeListener(model) as ParseTreeListener, tree);
    return model;

}
