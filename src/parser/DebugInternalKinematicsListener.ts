// Generated from src/parser/DebugInternalKinematics.g by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { RuleRobotContext } from "./DebugInternalKinematicsParser";
import { RuleMacroContext } from "./DebugInternalKinematicsParser";
import { RuleParameterContext } from "./DebugInternalKinematicsParser";
import { RuleParameterValueContext } from "./DebugInternalKinematicsParser";
import { RuleLinkRefContext } from "./DebugInternalKinematicsParser";
import { RuleParameterStringContext } from "./DebugInternalKinematicsParser";
import { RuleParameterPoseContext } from "./DebugInternalKinematicsParser";
import { RuleParameterLinkContext } from "./DebugInternalKinematicsParser";
import { RuleParameterTypeContext } from "./DebugInternalKinematicsParser";
import { RuleParameterStringTypeContext } from "./DebugInternalKinematicsParser";
import { RuleParameterLinkRefTypeContext } from "./DebugInternalKinematicsParser";
import { RuleParameterPoseTypeContext } from "./DebugInternalKinematicsParser";
import { RuleBodyContext } from "./DebugInternalKinematicsParser";
import { RuleMacroCallContext } from "./DebugInternalKinematicsParser";
import { RuleParameterCallContext } from "./DebugInternalKinematicsParser";
import { RuleJointContext } from "./DebugInternalKinematicsParser";
import { RuleLinkContext } from "./DebugInternalKinematicsParser";
import { RulePoseContext } from "./DebugInternalKinematicsParser";
import { RuleVector3Context } from "./DebugInternalKinematicsParser";
import { RuleLimitContext } from "./DebugInternalKinematicsParser";
import { RuleInertialContext } from "./DebugInternalKinematicsParser";
import { RuleVisualContext } from "./DebugInternalKinematicsParser";
import { RuleCollisionContext } from "./DebugInternalKinematicsParser";
import { RuleMassContext } from "./DebugInternalKinematicsParser";
import { RuleInertiaContext } from "./DebugInternalKinematicsParser";
import { RuleGeometryContext } from "./DebugInternalKinematicsParser";
import { RuleBoxContext } from "./DebugInternalKinematicsParser";
import { RuleCylinderContext } from "./DebugInternalKinematicsParser";
import { RuleSphereContext } from "./DebugInternalKinematicsParser";
import { RuleMeshContext } from "./DebugInternalKinematicsParser";
import { RuleDouble0Context } from "./DebugInternalKinematicsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DebugInternalKinematicsParser`.
 */
export interface DebugInternalKinematicsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleRobot`.
	 * @param ctx the parse tree
	 */
	enterRuleRobot?: (ctx: RuleRobotContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleRobot`.
	 * @param ctx the parse tree
	 */
	exitRuleRobot?: (ctx: RuleRobotContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleMacro`.
	 * @param ctx the parse tree
	 */
	enterRuleMacro?: (ctx: RuleMacroContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleMacro`.
	 * @param ctx the parse tree
	 */
	exitRuleMacro?: (ctx: RuleMacroContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameter`.
	 * @param ctx the parse tree
	 */
	enterRuleParameter?: (ctx: RuleParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameter`.
	 * @param ctx the parse tree
	 */
	exitRuleParameter?: (ctx: RuleParameterContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameterValue`.
	 * @param ctx the parse tree
	 */
	enterRuleParameterValue?: (ctx: RuleParameterValueContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterValue`.
	 * @param ctx the parse tree
	 */
	exitRuleParameterValue?: (ctx: RuleParameterValueContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleLinkRef`.
	 * @param ctx the parse tree
	 */
	enterRuleLinkRef?: (ctx: RuleLinkRefContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleLinkRef`.
	 * @param ctx the parse tree
	 */
	exitRuleLinkRef?: (ctx: RuleLinkRefContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameterString`.
	 * @param ctx the parse tree
	 */
	enterRuleParameterString?: (ctx: RuleParameterStringContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterString`.
	 * @param ctx the parse tree
	 */
	exitRuleParameterString?: (ctx: RuleParameterStringContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameterPose`.
	 * @param ctx the parse tree
	 */
	enterRuleParameterPose?: (ctx: RuleParameterPoseContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterPose`.
	 * @param ctx the parse tree
	 */
	exitRuleParameterPose?: (ctx: RuleParameterPoseContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameterLink`.
	 * @param ctx the parse tree
	 */
	enterRuleParameterLink?: (ctx: RuleParameterLinkContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterLink`.
	 * @param ctx the parse tree
	 */
	exitRuleParameterLink?: (ctx: RuleParameterLinkContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameterType`.
	 * @param ctx the parse tree
	 */
	enterRuleParameterType?: (ctx: RuleParameterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterType`.
	 * @param ctx the parse tree
	 */
	exitRuleParameterType?: (ctx: RuleParameterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameterStringType`.
	 * @param ctx the parse tree
	 */
	enterRuleParameterStringType?: (ctx: RuleParameterStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterStringType`.
	 * @param ctx the parse tree
	 */
	exitRuleParameterStringType?: (ctx: RuleParameterStringTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameterLinkRefType`.
	 * @param ctx the parse tree
	 */
	enterRuleParameterLinkRefType?: (ctx: RuleParameterLinkRefTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterLinkRefType`.
	 * @param ctx the parse tree
	 */
	exitRuleParameterLinkRefType?: (ctx: RuleParameterLinkRefTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameterPoseType`.
	 * @param ctx the parse tree
	 */
	enterRuleParameterPoseType?: (ctx: RuleParameterPoseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterPoseType`.
	 * @param ctx the parse tree
	 */
	exitRuleParameterPoseType?: (ctx: RuleParameterPoseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleBody`.
	 * @param ctx the parse tree
	 */
	enterRuleBody?: (ctx: RuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleBody`.
	 * @param ctx the parse tree
	 */
	exitRuleBody?: (ctx: RuleBodyContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleMacroCall`.
	 * @param ctx the parse tree
	 */
	enterRuleMacroCall?: (ctx: RuleMacroCallContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleMacroCall`.
	 * @param ctx the parse tree
	 */
	exitRuleMacroCall?: (ctx: RuleMacroCallContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleParameterCall`.
	 * @param ctx the parse tree
	 */
	enterRuleParameterCall?: (ctx: RuleParameterCallContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterCall`.
	 * @param ctx the parse tree
	 */
	exitRuleParameterCall?: (ctx: RuleParameterCallContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleJoint`.
	 * @param ctx the parse tree
	 */
	enterRuleJoint?: (ctx: RuleJointContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleJoint`.
	 * @param ctx the parse tree
	 */
	exitRuleJoint?: (ctx: RuleJointContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleLink`.
	 * @param ctx the parse tree
	 */
	enterRuleLink?: (ctx: RuleLinkContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleLink`.
	 * @param ctx the parse tree
	 */
	exitRuleLink?: (ctx: RuleLinkContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.rulePose`.
	 * @param ctx the parse tree
	 */
	enterRulePose?: (ctx: RulePoseContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.rulePose`.
	 * @param ctx the parse tree
	 */
	exitRulePose?: (ctx: RulePoseContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleVector3`.
	 * @param ctx the parse tree
	 */
	enterRuleVector3?: (ctx: RuleVector3Context) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleVector3`.
	 * @param ctx the parse tree
	 */
	exitRuleVector3?: (ctx: RuleVector3Context) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleLimit`.
	 * @param ctx the parse tree
	 */
	enterRuleLimit?: (ctx: RuleLimitContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleLimit`.
	 * @param ctx the parse tree
	 */
	exitRuleLimit?: (ctx: RuleLimitContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleInertial`.
	 * @param ctx the parse tree
	 */
	enterRuleInertial?: (ctx: RuleInertialContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleInertial`.
	 * @param ctx the parse tree
	 */
	exitRuleInertial?: (ctx: RuleInertialContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleVisual`.
	 * @param ctx the parse tree
	 */
	enterRuleVisual?: (ctx: RuleVisualContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleVisual`.
	 * @param ctx the parse tree
	 */
	exitRuleVisual?: (ctx: RuleVisualContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleCollision`.
	 * @param ctx the parse tree
	 */
	enterRuleCollision?: (ctx: RuleCollisionContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleCollision`.
	 * @param ctx the parse tree
	 */
	exitRuleCollision?: (ctx: RuleCollisionContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleMass`.
	 * @param ctx the parse tree
	 */
	enterRuleMass?: (ctx: RuleMassContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleMass`.
	 * @param ctx the parse tree
	 */
	exitRuleMass?: (ctx: RuleMassContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleInertia`.
	 * @param ctx the parse tree
	 */
	enterRuleInertia?: (ctx: RuleInertiaContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleInertia`.
	 * @param ctx the parse tree
	 */
	exitRuleInertia?: (ctx: RuleInertiaContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleGeometry`.
	 * @param ctx the parse tree
	 */
	enterRuleGeometry?: (ctx: RuleGeometryContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleGeometry`.
	 * @param ctx the parse tree
	 */
	exitRuleGeometry?: (ctx: RuleGeometryContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleBox`.
	 * @param ctx the parse tree
	 */
	enterRuleBox?: (ctx: RuleBoxContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleBox`.
	 * @param ctx the parse tree
	 */
	exitRuleBox?: (ctx: RuleBoxContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleCylinder`.
	 * @param ctx the parse tree
	 */
	enterRuleCylinder?: (ctx: RuleCylinderContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleCylinder`.
	 * @param ctx the parse tree
	 */
	exitRuleCylinder?: (ctx: RuleCylinderContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleSphere`.
	 * @param ctx the parse tree
	 */
	enterRuleSphere?: (ctx: RuleSphereContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleSphere`.
	 * @param ctx the parse tree
	 */
	exitRuleSphere?: (ctx: RuleSphereContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleMesh`.
	 * @param ctx the parse tree
	 */
	enterRuleMesh?: (ctx: RuleMeshContext) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleMesh`.
	 * @param ctx the parse tree
	 */
	exitRuleMesh?: (ctx: RuleMeshContext) => void;

	/**
	 * Enter a parse tree produced by `DebugInternalKinematicsParser.ruleDouble0`.
	 * @param ctx the parse tree
	 */
	enterRuleDouble0?: (ctx: RuleDouble0Context) => void;
	/**
	 * Exit a parse tree produced by `DebugInternalKinematicsParser.ruleDouble0`.
	 * @param ctx the parse tree
	 */
	exitRuleDouble0?: (ctx: RuleDouble0Context) => void;
}

