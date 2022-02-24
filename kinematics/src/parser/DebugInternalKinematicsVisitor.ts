// Generated from src/parser/DebugInternalKinematics.g by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DebugInternalKinematicsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DebugInternalKinematicsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleRobot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleRobot?: (ctx: RuleRobotContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleMacro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleMacro?: (ctx: RuleMacroContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameter?: (ctx: RuleParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameterValue?: (ctx: RuleParameterValueContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleLinkRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleLinkRef?: (ctx: RuleLinkRefContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameterString?: (ctx: RuleParameterStringContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterPose`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameterPose?: (ctx: RuleParameterPoseContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterLink`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameterLink?: (ctx: RuleParameterLinkContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameterType?: (ctx: RuleParameterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterStringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameterStringType?: (ctx: RuleParameterStringTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterLinkRefType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameterLinkRefType?: (ctx: RuleParameterLinkRefTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterPoseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameterPoseType?: (ctx: RuleParameterPoseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleBody?: (ctx: RuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleMacroCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleMacroCall?: (ctx: RuleMacroCallContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleParameterCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleParameterCall?: (ctx: RuleParameterCallContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleJoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleJoint?: (ctx: RuleJointContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleLink`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleLink?: (ctx: RuleLinkContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.rulePose`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRulePose?: (ctx: RulePoseContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleVector3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleVector3?: (ctx: RuleVector3Context) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleLimit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleLimit?: (ctx: RuleLimitContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleInertial`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleInertial?: (ctx: RuleInertialContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleVisual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleVisual?: (ctx: RuleVisualContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleCollision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleCollision?: (ctx: RuleCollisionContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleMass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleMass?: (ctx: RuleMassContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleInertia`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleInertia?: (ctx: RuleInertiaContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleGeometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleGeometry?: (ctx: RuleGeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleBox`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleBox?: (ctx: RuleBoxContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleCylinder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleCylinder?: (ctx: RuleCylinderContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleSphere`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleSphere?: (ctx: RuleSphereContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleMesh`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleMesh?: (ctx: RuleMeshContext) => Result;

	/**
	 * Visit a parse tree produced by `DebugInternalKinematicsParser.ruleDouble0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleDouble0?: (ctx: RuleDouble0Context) => Result;
}

