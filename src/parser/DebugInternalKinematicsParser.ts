// Generated from src/parser/DebugInternalKinematics.g by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
// import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
// import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
// import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
// import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
// import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { DebugInternalKinematicsListener } from "./DebugInternalKinematicsListener";
import { DebugInternalKinematicsVisitor } from "./DebugInternalKinematicsVisitor";


export class DebugInternalKinematicsParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly RULE_BOOLEAN = 69;
	public static readonly RULE_DOUBLE = 70;
	public static readonly RULE_DECINT = 71;
	public static readonly RULE_JOINTTYPE = 72;
	public static readonly RULE_ID = 73;
	public static readonly RULE_INT = 74;
	public static readonly RULE_STRING = 75;
	public static readonly RULE_ML_COMMENT = 76;
	public static readonly RULE_SL_COMMENT = 77;
	public static readonly RULE_WS = 78;
	public static readonly RULE_ANY_OTHER = 79;
	public static readonly RULE_ruleRobot = 0;
	public static readonly RULE_ruleMacro = 1;
	public static readonly RULE_ruleParameter = 2;
	public static readonly RULE_ruleParameterValue = 3;
	public static readonly RULE_ruleLinkRef = 4;
	public static readonly RULE_ruleParameterString = 5;
	public static readonly RULE_ruleParameterPose = 6;
	public static readonly RULE_ruleParameterLink = 7;
	public static readonly RULE_ruleParameterType = 8;
	public static readonly RULE_ruleParameterStringType = 9;
	public static readonly RULE_ruleParameterLinkRefType = 10;
	public static readonly RULE_ruleParameterPoseType = 11;
	public static readonly RULE_ruleBody = 12;
	public static readonly RULE_ruleMacroCall = 13;
	public static readonly RULE_ruleParameterCall = 14;
	public static readonly RULE_ruleJoint = 15;
	public static readonly RULE_ruleLink = 16;
	public static readonly RULE_rulePose = 17;
	public static readonly RULE_ruleVector3 = 18;
	public static readonly RULE_ruleLimit = 19;
	public static readonly RULE_ruleInertial = 20;
	public static readonly RULE_ruleVisual = 21;
	public static readonly RULE_ruleCollision = 22;
	public static readonly RULE_ruleMass = 23;
	public static readonly RULE_ruleInertia = 24;
	public static readonly RULE_ruleGeometry = 25;
	public static readonly RULE_ruleBox = 26;
	public static readonly RULE_ruleCylinder = 27;
	public static readonly RULE_ruleSphere = 28;
	public static readonly RULE_ruleMesh = 29;
	public static readonly RULE_ruleDouble0 = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"ruleRobot", "ruleMacro", "ruleParameter", "ruleParameterValue", "ruleLinkRef", 
		"ruleParameterString", "ruleParameterPose", "ruleParameterLink", "ruleParameterType", 
		"ruleParameterStringType", "ruleParameterLinkRefType", "ruleParameterPoseType", 
		"ruleBody", "ruleMacroCall", "ruleParameterCall", "ruleJoint", "ruleLink", 
		"rulePose", "ruleVector3", "ruleLimit", "ruleInertial", "ruleVisual", 
		"ruleCollision", "ruleMass", "ruleInertia", "ruleGeometry", "ruleBox", 
		"ruleCylinder", "ruleSphere", "ruleMesh", "ruleDouble0",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'Robot'", "'{'", "'name'", "'version'", "'macro'", "','", 
		"'}'", "'macroCall'", "'body'", "'Macro'", "'parameter'", "'Parameter'", 
		"'type'", "'value'", "'String'", "'LinkRef'", "'Pose'", "'Body'", "'link'", 
		"'joint'", "'MacroCall'", "'ParameterCall'", "'Joint'", "'parent'", "'child'", 
		"'origin'", "'axis'", "'limit'", "'Link'", "'inertial'", "'visual'", "'collision'", 
		"'rpy'", "'xyz'", "'Vector3'", "'Limit'", "'effort'", "'lower'", "'upper'", 
		"'velocity'", "'Inertial'", "'mass'", "'inertia'", "'Visual'", "'geometry'", 
		"'Collision'", "'Mass'", "'Inertia'", "'ixx'", "'ixy'", "'ixz'", "'iyy'", 
		"'iyz'", "'izz'", "'Geometry'", "'box'", "'cylinder'", "'sphere'", "'mesh'", 
		"'Box'", "'size'", "'Cylinder'", "'length'", "'radius'", "'Sphere'", "'Mesh'", 
		"'filename'", "'scale'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "RULE_BOOLEAN", 
		"RULE_DOUBLE", "RULE_DECINT", "RULE_JOINTTYPE", "RULE_ID", "RULE_INT", 
		"RULE_STRING", "RULE_ML_COMMENT", "RULE_SL_COMMENT", "RULE_WS", "RULE_ANY_OTHER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DebugInternalKinematicsParser._LITERAL_NAMES, DebugInternalKinematicsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DebugInternalKinematicsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DebugInternalKinematics.g"; }

	// @Override
	public get ruleNames(): string[] { return DebugInternalKinematicsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DebugInternalKinematicsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DebugInternalKinematicsParser._ATN, this);
	}
	// @RuleVersion(0)
	public ruleRobot(): RuleRobotContext {
		let _localctx: RuleRobotContext = new RuleRobotContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DebugInternalKinematicsParser.RULE_ruleRobot);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(DebugInternalKinematicsParser.T__0);
			this.state = 63;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 64;
			this.match(DebugInternalKinematicsParser.T__2);
			this.state = 65;
			this.match(DebugInternalKinematicsParser.RULE_ID);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__3) {
				{
				this.state = 66;
				this.match(DebugInternalKinematicsParser.T__3);
				this.state = 67;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
			}

			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__4) {
				{
				this.state = 70;
				this.match(DebugInternalKinematicsParser.T__4);
				this.state = 71;
				this.match(DebugInternalKinematicsParser.T__1);
				this.state = 72;
				this.ruleMacro();
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DebugInternalKinematicsParser.T__5) {
					{
					{
					this.state = 73;
					this.match(DebugInternalKinematicsParser.T__5);
					this.state = 74;
					this.ruleMacro();
					}
					}
					this.state = 79;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 80;
				this.match(DebugInternalKinematicsParser.T__6);
				}
			}

			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__7) {
				{
				this.state = 84;
				this.match(DebugInternalKinematicsParser.T__7);
				this.state = 85;
				this.match(DebugInternalKinematicsParser.T__1);
				this.state = 86;
				this.ruleMacroCall();
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DebugInternalKinematicsParser.T__5) {
					{
					{
					this.state = 87;
					this.match(DebugInternalKinematicsParser.T__5);
					this.state = 88;
					this.ruleMacroCall();
					}
					}
					this.state = 93;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 94;
				this.match(DebugInternalKinematicsParser.T__6);
				}
			}

			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__8) {
				{
				this.state = 98;
				this.match(DebugInternalKinematicsParser.T__8);
				this.state = 99;
				this.ruleBody();
				}
			}

			this.state = 102;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleMacro(): RuleMacroContext {
		let _localctx: RuleMacroContext = new RuleMacroContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DebugInternalKinematicsParser.RULE_ruleMacro);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(DebugInternalKinematicsParser.T__9);
			this.state = 105;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 106;
			this.match(DebugInternalKinematicsParser.T__2);
			this.state = 107;
			this.match(DebugInternalKinematicsParser.RULE_ID);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__10) {
				{
				this.state = 108;
				this.match(DebugInternalKinematicsParser.T__10);
				this.state = 109;
				this.match(DebugInternalKinematicsParser.T__1);
				this.state = 110;
				this.ruleParameter();
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DebugInternalKinematicsParser.T__5) {
					{
					{
					this.state = 111;
					this.match(DebugInternalKinematicsParser.T__5);
					this.state = 112;
					this.ruleParameter();
					}
					}
					this.state = 117;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 118;
				this.match(DebugInternalKinematicsParser.T__6);
				}
			}

			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__8) {
				{
				this.state = 122;
				this.match(DebugInternalKinematicsParser.T__8);
				this.state = 123;
				this.ruleBody();
				}
			}

			this.state = 126;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameter(): RuleParameterContext {
		let _localctx: RuleParameterContext = new RuleParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DebugInternalKinematicsParser.RULE_ruleParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(DebugInternalKinematicsParser.T__11);
			this.state = 129;
			this.match(DebugInternalKinematicsParser.RULE_ID);
			this.state = 130;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 131;
			this.match(DebugInternalKinematicsParser.T__12);
			this.state = 132;
			this.ruleParameterType();
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__13) {
				{
				this.state = 133;
				this.match(DebugInternalKinematicsParser.T__13);
				this.state = 134;
				this.ruleParameterValue();
				}
			}

			this.state = 137;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameterValue(): RuleParameterValueContext {
		let _localctx: RuleParameterValueContext = new RuleParameterValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DebugInternalKinematicsParser.RULE_ruleParameterValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DebugInternalKinematicsParser.RULE_ID:
				{
				this.state = 139;
				this.match(DebugInternalKinematicsParser.RULE_ID);
				}
				break;
			case DebugInternalKinematicsParser.T__16:
				{
				this.state = 140;
				this.rulePose();
				}
				break;
			case DebugInternalKinematicsParser.RULE_STRING:
				{
				this.state = 141;
				this.ruleLinkRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleLinkRef(): RuleLinkRefContext {
		let _localctx: RuleLinkRefContext = new RuleLinkRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DebugInternalKinematicsParser.RULE_ruleLinkRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(DebugInternalKinematicsParser.RULE_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameterString(): RuleParameterStringContext {
		let _localctx: RuleParameterStringContext = new RuleParameterStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DebugInternalKinematicsParser.RULE_ruleParameterString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.RULE_STRING) {
				{
				this.state = 146;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
			}

			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.RULE_ID) {
				{
				this.state = 149;
				this.match(DebugInternalKinematicsParser.RULE_ID);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameterPose(): RuleParameterPoseContext {
		let _localctx: RuleParameterPoseContext = new RuleParameterPoseContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DebugInternalKinematicsParser.RULE_ruleParameterPose);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DebugInternalKinematicsParser.RULE_STRING:
				{
				this.state = 152;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
				break;
			case DebugInternalKinematicsParser.T__16:
				{
				this.state = 153;
				this.rulePose();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameterLink(): RuleParameterLinkContext {
		let _localctx: RuleParameterLinkContext = new RuleParameterLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DebugInternalKinematicsParser.RULE_ruleParameterLink);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			_la = this._input.LA(1);
			if (!(_la === DebugInternalKinematicsParser.RULE_ID || _la === DebugInternalKinematicsParser.RULE_STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameterType(): RuleParameterTypeContext {
		let _localctx: RuleParameterTypeContext = new RuleParameterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DebugInternalKinematicsParser.RULE_ruleParameterType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DebugInternalKinematicsParser.T__14:
				{
				this.state = 158;
				this.ruleParameterStringType();
				}
				break;
			case DebugInternalKinematicsParser.T__15:
				{
				this.state = 159;
				this.ruleParameterLinkRefType();
				}
				break;
			case DebugInternalKinematicsParser.T__16:
				{
				this.state = 160;
				this.ruleParameterPoseType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameterStringType(): RuleParameterStringTypeContext {
		let _localctx: RuleParameterStringTypeContext = new RuleParameterStringTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DebugInternalKinematicsParser.RULE_ruleParameterStringType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(DebugInternalKinematicsParser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameterLinkRefType(): RuleParameterLinkRefTypeContext {
		let _localctx: RuleParameterLinkRefTypeContext = new RuleParameterLinkRefTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DebugInternalKinematicsParser.RULE_ruleParameterLinkRefType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(DebugInternalKinematicsParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameterPoseType(): RuleParameterPoseTypeContext {
		let _localctx: RuleParameterPoseTypeContext = new RuleParameterPoseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DebugInternalKinematicsParser.RULE_ruleParameterPoseType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(DebugInternalKinematicsParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleBody(): RuleBodyContext {
		let _localctx: RuleBodyContext = new RuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, DebugInternalKinematicsParser.RULE_ruleBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.match(DebugInternalKinematicsParser.T__17);
			this.state = 170;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__18) {
				{
				this.state = 171;
				this.match(DebugInternalKinematicsParser.T__18);
				this.state = 172;
				this.match(DebugInternalKinematicsParser.T__1);
				this.state = 173;
				this.ruleLink();
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DebugInternalKinematicsParser.T__5) {
					{
					{
					this.state = 174;
					this.match(DebugInternalKinematicsParser.T__5);
					this.state = 175;
					this.ruleLink();
					}
					}
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 181;
				this.match(DebugInternalKinematicsParser.T__6);
				}
			}

			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__19) {
				{
				this.state = 185;
				this.match(DebugInternalKinematicsParser.T__19);
				this.state = 186;
				this.match(DebugInternalKinematicsParser.T__1);
				this.state = 187;
				this.ruleJoint();
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DebugInternalKinematicsParser.T__5) {
					{
					{
					this.state = 188;
					this.match(DebugInternalKinematicsParser.T__5);
					this.state = 189;
					this.ruleJoint();
					}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 195;
				this.match(DebugInternalKinematicsParser.T__6);
				}
			}

			this.state = 199;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleMacroCall(): RuleMacroCallContext {
		let _localctx: RuleMacroCallContext = new RuleMacroCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DebugInternalKinematicsParser.RULE_ruleMacroCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(DebugInternalKinematicsParser.T__20);
			this.state = 202;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 203;
			this.match(DebugInternalKinematicsParser.T__4);
			this.state = 204;
			this.match(DebugInternalKinematicsParser.RULE_STRING);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__10) {
				{
				this.state = 205;
				this.match(DebugInternalKinematicsParser.T__10);
				this.state = 206;
				this.match(DebugInternalKinematicsParser.T__1);
				this.state = 207;
				this.ruleParameterCall();
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DebugInternalKinematicsParser.T__5) {
					{
					{
					this.state = 208;
					this.match(DebugInternalKinematicsParser.T__5);
					this.state = 209;
					this.ruleParameterCall();
					}
					}
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 215;
				this.match(DebugInternalKinematicsParser.T__6);
				}
			}

			this.state = 219;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleParameterCall(): RuleParameterCallContext {
		let _localctx: RuleParameterCallContext = new RuleParameterCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, DebugInternalKinematicsParser.RULE_ruleParameterCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(DebugInternalKinematicsParser.T__21);
			this.state = 222;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 223;
			this.match(DebugInternalKinematicsParser.T__10);
			this.state = 224;
			this.match(DebugInternalKinematicsParser.RULE_STRING);
			this.state = 225;
			this.match(DebugInternalKinematicsParser.T__13);
			this.state = 226;
			this.ruleParameterValue();
			this.state = 227;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleJoint(): RuleJointContext {
		let _localctx: RuleJointContext = new RuleJointContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, DebugInternalKinematicsParser.RULE_ruleJoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(DebugInternalKinematicsParser.T__22);
			this.state = 230;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 231;
			this.match(DebugInternalKinematicsParser.T__2);
			this.state = 232;
			this.ruleParameterString();
			this.state = 233;
			this.match(DebugInternalKinematicsParser.T__12);
			this.state = 234;
			this.match(DebugInternalKinematicsParser.RULE_JOINTTYPE);
			this.state = 235;
			this.match(DebugInternalKinematicsParser.T__23);
			this.state = 236;
			this.ruleParameterLink();
			this.state = 237;
			this.match(DebugInternalKinematicsParser.T__24);
			this.state = 238;
			this.ruleParameterLink();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__25) {
				{
				this.state = 239;
				this.match(DebugInternalKinematicsParser.T__25);
				this.state = 240;
				this.ruleParameterPose();
				}
			}

			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__26) {
				{
				this.state = 243;
				this.match(DebugInternalKinematicsParser.T__26);
				this.state = 244;
				this.ruleVector3();
				}
			}

			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__27) {
				{
				this.state = 247;
				this.match(DebugInternalKinematicsParser.T__27);
				this.state = 248;
				this.ruleLimit();
				}
			}

			this.state = 251;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleLink(): RuleLinkContext {
		let _localctx: RuleLinkContext = new RuleLinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, DebugInternalKinematicsParser.RULE_ruleLink);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(DebugInternalKinematicsParser.T__28);
			this.state = 254;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 255;
			this.match(DebugInternalKinematicsParser.T__2);
			this.state = 256;
			this.ruleParameterString();
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__29) {
				{
				this.state = 257;
				this.match(DebugInternalKinematicsParser.T__29);
				this.state = 258;
				this.ruleInertial();
				}
			}

			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__30) {
				{
				this.state = 261;
				this.match(DebugInternalKinematicsParser.T__30);
				this.state = 262;
				this.ruleVisual();
				}
			}

			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__31) {
				{
				this.state = 265;
				this.match(DebugInternalKinematicsParser.T__31);
				this.state = 266;
				this.ruleCollision();
				}
			}

			this.state = 269;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rulePose(): RulePoseContext {
		let _localctx: RulePoseContext = new RulePoseContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, DebugInternalKinematicsParser.RULE_rulePose);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(DebugInternalKinematicsParser.T__16);
			this.state = 272;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__32) {
				{
				this.state = 273;
				this.match(DebugInternalKinematicsParser.T__32);
				this.state = 274;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
			}

			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__33) {
				{
				this.state = 277;
				this.match(DebugInternalKinematicsParser.T__33);
				this.state = 278;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
			}

			this.state = 281;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleVector3(): RuleVector3Context {
		let _localctx: RuleVector3Context = new RuleVector3Context(this._ctx, this.state);
		this.enterRule(_localctx, 36, DebugInternalKinematicsParser.RULE_ruleVector3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(DebugInternalKinematicsParser.T__34);
			this.state = 284;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__33) {
				{
				this.state = 285;
				this.match(DebugInternalKinematicsParser.T__33);
				this.state = 286;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
			}

			this.state = 289;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleLimit(): RuleLimitContext {
		let _localctx: RuleLimitContext = new RuleLimitContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, DebugInternalKinematicsParser.RULE_ruleLimit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.match(DebugInternalKinematicsParser.T__35);
			this.state = 292;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__36) {
				{
				this.state = 293;
				this.match(DebugInternalKinematicsParser.T__36);
				this.state = 294;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
			}

			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__37) {
				{
				this.state = 297;
				this.match(DebugInternalKinematicsParser.T__37);
				this.state = 298;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
			}

			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__38) {
				{
				this.state = 301;
				this.match(DebugInternalKinematicsParser.T__38);
				this.state = 302;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
			}

			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__39) {
				{
				this.state = 305;
				this.match(DebugInternalKinematicsParser.T__39);
				this.state = 306;
				this.match(DebugInternalKinematicsParser.RULE_STRING);
				}
			}

			this.state = 309;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleInertial(): RuleInertialContext {
		let _localctx: RuleInertialContext = new RuleInertialContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, DebugInternalKinematicsParser.RULE_ruleInertial);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(DebugInternalKinematicsParser.T__40);
			this.state = 312;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__25) {
				{
				this.state = 313;
				this.match(DebugInternalKinematicsParser.T__25);
				this.state = 314;
				this.rulePose();
				}
			}

			this.state = 319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__41) {
				{
				this.state = 317;
				this.match(DebugInternalKinematicsParser.T__41);
				this.state = 318;
				this.ruleMass();
				}
			}

			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__42) {
				{
				this.state = 321;
				this.match(DebugInternalKinematicsParser.T__42);
				this.state = 322;
				this.ruleInertia();
				}
			}

			this.state = 325;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleVisual(): RuleVisualContext {
		let _localctx: RuleVisualContext = new RuleVisualContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, DebugInternalKinematicsParser.RULE_ruleVisual);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.match(DebugInternalKinematicsParser.T__43);
			this.state = 328;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__25) {
				{
				this.state = 329;
				this.match(DebugInternalKinematicsParser.T__25);
				this.state = 330;
				this.rulePose();
				}
			}

			this.state = 333;
			this.match(DebugInternalKinematicsParser.T__44);
			this.state = 334;
			this.ruleGeometry();
			this.state = 335;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleCollision(): RuleCollisionContext {
		let _localctx: RuleCollisionContext = new RuleCollisionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, DebugInternalKinematicsParser.RULE_ruleCollision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(DebugInternalKinematicsParser.T__45);
			this.state = 338;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__25) {
				{
				this.state = 339;
				this.match(DebugInternalKinematicsParser.T__25);
				this.state = 340;
				this.rulePose();
				}
			}

			this.state = 343;
			this.match(DebugInternalKinematicsParser.T__44);
			this.state = 344;
			this.ruleGeometry();
			this.state = 345;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleMass(): RuleMassContext {
		let _localctx: RuleMassContext = new RuleMassContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, DebugInternalKinematicsParser.RULE_ruleMass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(DebugInternalKinematicsParser.T__46);
			this.state = 348;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__13) {
				{
				this.state = 349;
				this.match(DebugInternalKinematicsParser.T__13);
				this.state = 350;
				this.ruleDouble0();
				}
			}

			this.state = 353;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleInertia(): RuleInertiaContext {
		let _localctx: RuleInertiaContext = new RuleInertiaContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, DebugInternalKinematicsParser.RULE_ruleInertia);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(DebugInternalKinematicsParser.T__47);
			this.state = 356;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__48) {
				{
				this.state = 357;
				this.match(DebugInternalKinematicsParser.T__48);
				this.state = 358;
				this.ruleDouble0();
				}
			}

			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__49) {
				{
				this.state = 361;
				this.match(DebugInternalKinematicsParser.T__49);
				this.state = 362;
				this.ruleDouble0();
				}
			}

			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__50) {
				{
				this.state = 365;
				this.match(DebugInternalKinematicsParser.T__50);
				this.state = 366;
				this.ruleDouble0();
				}
			}

			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__51) {
				{
				this.state = 369;
				this.match(DebugInternalKinematicsParser.T__51);
				this.state = 370;
				this.ruleDouble0();
				}
			}

			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__52) {
				{
				this.state = 373;
				this.match(DebugInternalKinematicsParser.T__52);
				this.state = 374;
				this.ruleDouble0();
				}
			}

			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__53) {
				{
				this.state = 377;
				this.match(DebugInternalKinematicsParser.T__53);
				this.state = 378;
				this.ruleDouble0();
				}
			}

			this.state = 381;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleGeometry(): RuleGeometryContext {
		let _localctx: RuleGeometryContext = new RuleGeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, DebugInternalKinematicsParser.RULE_ruleGeometry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(DebugInternalKinematicsParser.T__54);
			this.state = 384;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__55) {
				{
				this.state = 385;
				this.match(DebugInternalKinematicsParser.T__55);
				this.state = 386;
				this.ruleBox();
				}
			}

			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__56) {
				{
				this.state = 389;
				this.match(DebugInternalKinematicsParser.T__56);
				this.state = 390;
				this.ruleCylinder();
				}
			}

			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__57) {
				{
				this.state = 393;
				this.match(DebugInternalKinematicsParser.T__57);
				this.state = 394;
				this.ruleSphere();
				}
			}

			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__58) {
				{
				this.state = 397;
				this.match(DebugInternalKinematicsParser.T__58);
				this.state = 398;
				this.ruleMesh();
				}
			}

			this.state = 401;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleBox(): RuleBoxContext {
		let _localctx: RuleBoxContext = new RuleBoxContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, DebugInternalKinematicsParser.RULE_ruleBox);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(DebugInternalKinematicsParser.T__59);
			this.state = 404;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__60) {
				{
				this.state = 405;
				this.match(DebugInternalKinematicsParser.T__60);
				this.state = 406;
				this.ruleParameterString();
				}
			}

			this.state = 409;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleCylinder(): RuleCylinderContext {
		let _localctx: RuleCylinderContext = new RuleCylinderContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, DebugInternalKinematicsParser.RULE_ruleCylinder);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(DebugInternalKinematicsParser.T__61);
			this.state = 412;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 413;
			this.match(DebugInternalKinematicsParser.T__62);
			this.state = 414;
			this.ruleDouble0();
			this.state = 415;
			this.match(DebugInternalKinematicsParser.T__63);
			this.state = 416;
			this.ruleDouble0();
			this.state = 417;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleSphere(): RuleSphereContext {
		let _localctx: RuleSphereContext = new RuleSphereContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, DebugInternalKinematicsParser.RULE_ruleSphere);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.match(DebugInternalKinematicsParser.T__64);
			this.state = 420;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 421;
			this.match(DebugInternalKinematicsParser.T__63);
			this.state = 422;
			this.ruleDouble0();
			this.state = 423;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleMesh(): RuleMeshContext {
		let _localctx: RuleMeshContext = new RuleMeshContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, DebugInternalKinematicsParser.RULE_ruleMesh);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.match(DebugInternalKinematicsParser.T__65);
			this.state = 426;
			this.match(DebugInternalKinematicsParser.T__1);
			this.state = 427;
			this.match(DebugInternalKinematicsParser.T__66);
			this.state = 428;
			this.match(DebugInternalKinematicsParser.RULE_STRING);
			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DebugInternalKinematicsParser.T__67) {
				{
				this.state = 429;
				this.match(DebugInternalKinematicsParser.T__67);
				this.state = 430;
				this.ruleDouble0();
				}
			}

			this.state = 433;
			this.match(DebugInternalKinematicsParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleDouble0(): RuleDouble0Context {
		let _localctx: RuleDouble0Context = new RuleDouble0Context(this._ctx, this.state);
		this.enterRule(_localctx, 60, DebugInternalKinematicsParser.RULE_ruleDouble0);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(DebugInternalKinematicsParser.RULE_DOUBLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Q\u01B8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x05\x02G\n\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x07\x02N\n\x02\f\x02\x0E\x02Q\v\x02\x03\x02\x03\x02\x05\x02U" +
		"\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\\\n\x02\f\x02\x0E" +
		"\x02_\v\x02\x03\x02\x03\x02\x05\x02c\n\x02\x03\x02\x03\x02\x05\x02g\n" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03t\n\x03\f\x03\x0E\x03w\v\x03\x03\x03\x03\x03" +
		"\x05\x03{\n\x03\x03\x03\x03\x03\x05\x03\x7F\n\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x8A\n\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05\x91\n\x05\x03\x06\x03" +
		"\x06\x03\x07\x05\x07\x96\n\x07\x03\x07\x05\x07\x99\n\x07\x03\b\x03\b\x05" +
		"\b\x9D\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xA4\n\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x07\x0E\xB3\n\x0E\f\x0E\x0E\x0E\xB6\v\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\xBA\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xC1\n\x0E\f" +
		"\x0E\x0E\x0E\xC4\v\x0E\x03\x0E\x03\x0E\x05\x0E\xC8\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\xD5\n\x0F\f\x0F\x0E\x0F\xD8\v\x0F\x03\x0F\x03\x0F\x05\x0F\xDC" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xF4\n\x11\x03\x11\x03" +
		"\x11\x05\x11\xF8\n\x11\x03\x11\x03\x11\x05\x11\xFC\n\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0106\n\x12\x03" +
		"\x12\x03\x12\x05\x12\u010A\n\x12\x03\x12\x03\x12\x05\x12\u010E\n\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0116\n\x13\x03\x13" +
		"\x03\x13\x05\x13\u011A\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x05\x14\u0122\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x05\x15\u012A\n\x15\x03\x15\x03\x15\x05\x15\u012E\n\x15\x03\x15\x03\x15" +
		"\x05\x15\u0132\n\x15\x03\x15\x03\x15\x05\x15\u0136\n\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u013E\n\x16\x03\x16\x03\x16\x05" +
		"\x16\u0142\n\x16\x03\x16\x03\x16\x05\x16\u0146\n\x16\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x05\x17\u014E\n\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0158\n\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0162\n\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u016A\n\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u016E\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0172\n\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u0176\n\x1A\x03\x1A\x03\x1A\x05\x1A\u017A\n\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u017E\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x05\x1B\u0186\n\x1B\x03\x1B\x03\x1B\x05\x1B\u018A\n\x1B\x03\x1B" +
		"\x03\x1B\x05\x1B\u018E\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0192\n\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u019A\n\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x05\x1F\u01B2\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
		" \x02\x02\x02!\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02\x02" +
		"\x03\x04\x02KKMM\x02\u01CE\x02@\x03\x02\x02\x02\x04j\x03\x02\x02\x02\x06" +
		"\x82\x03\x02\x02\x02\b\x90\x03\x02\x02\x02\n\x92\x03\x02\x02\x02\f\x95" +
		"\x03\x02\x02\x02\x0E\x9C\x03\x02\x02\x02\x10\x9E\x03\x02\x02\x02\x12\xA3" +
		"\x03\x02\x02\x02\x14\xA5\x03\x02\x02\x02\x16\xA7\x03\x02\x02\x02\x18\xA9" +
		"\x03\x02\x02\x02\x1A\xAB\x03\x02\x02\x02\x1C\xCB\x03\x02\x02\x02\x1E\xDF" +
		"\x03\x02\x02\x02 \xE7\x03\x02\x02\x02\"\xFF\x03\x02\x02\x02$\u0111\x03" +
		"\x02\x02\x02&\u011D\x03\x02\x02\x02(\u0125\x03\x02\x02\x02*\u0139\x03" +
		"\x02\x02\x02,\u0149\x03\x02\x02\x02.\u0153\x03\x02\x02\x020\u015D\x03" +
		"\x02\x02\x022\u0165\x03\x02\x02\x024\u0181\x03\x02\x02\x026\u0195\x03" +
		"\x02\x02\x028\u019D\x03\x02\x02\x02:\u01A5\x03\x02\x02\x02<\u01AB\x03" +
		"\x02\x02\x02>\u01B5\x03\x02\x02\x02@A\x07\x03\x02\x02AB\x07\x04\x02\x02" +
		"BC\x07\x05\x02\x02CF\x07K\x02\x02DE\x07\x06\x02\x02EG\x07M\x02\x02FD\x03" +
		"\x02\x02\x02FG\x03\x02\x02\x02GT\x03\x02\x02\x02HI\x07\x07\x02\x02IJ\x07" +
		"\x04\x02\x02JO\x05\x04\x03\x02KL\x07\b\x02\x02LN\x05\x04\x03\x02MK\x03" +
		"\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02PR\x03" +
		"\x02\x02\x02QO\x03\x02\x02\x02RS\x07\t\x02\x02SU\x03\x02\x02\x02TH\x03" +
		"\x02\x02\x02TU\x03\x02\x02\x02Ub\x03\x02\x02\x02VW\x07\n\x02\x02WX\x07" +
		"\x04\x02\x02X]\x05\x1C\x0F\x02YZ\x07\b\x02\x02Z\\\x05\x1C\x0F\x02[Y\x03" +
		"\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^`" +
		"\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x07\t\x02\x02ac\x03\x02\x02\x02b" +
		"V\x03\x02\x02\x02bc\x03\x02\x02\x02cf\x03\x02\x02\x02de\x07\v\x02\x02" +
		"eg\x05\x1A\x0E\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02gh\x03\x02\x02\x02" +
		"hi\x07\t\x02\x02i\x03\x03\x02\x02\x02jk\x07\f\x02\x02kl\x07\x04\x02\x02" +
		"lm\x07\x05\x02\x02mz\x07K\x02\x02no\x07\r\x02\x02op\x07\x04\x02\x02pu" +
		"\x05\x06\x04\x02qr\x07\b\x02\x02rt\x05\x06\x04\x02sq\x03\x02\x02\x02t" +
		"w\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02" +
		"wu\x03\x02\x02\x02xy\x07\t\x02\x02y{\x03\x02\x02\x02zn\x03\x02\x02\x02" +
		"z{\x03\x02\x02\x02{~\x03\x02\x02\x02|}\x07\v\x02\x02}\x7F\x05\x1A\x0E" +
		"\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80" +
		"\x81\x07\t\x02\x02\x81\x05\x03\x02\x02\x02\x82\x83\x07\x0E\x02\x02\x83" +
		"\x84\x07K\x02\x02\x84\x85\x07\x04\x02\x02\x85\x86\x07\x0F\x02\x02\x86" +
		"\x89\x05\x12\n\x02\x87\x88\x07\x10\x02\x02\x88\x8A\x05\b\x05\x02\x89\x87" +
		"\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C" +
		"\x07\t\x02\x02\x8C\x07\x03\x02\x02\x02\x8D\x91\x07K\x02\x02\x8E\x91\x05" +
		"$\x13\x02\x8F\x91\x05\n\x06\x02\x90\x8D\x03\x02\x02\x02\x90\x8E\x03\x02" +
		"\x02\x02\x90\x8F\x03\x02\x02\x02\x91\t\x03\x02\x02\x02\x92\x93\x07M\x02" +
		"\x02\x93\v\x03\x02\x02\x02\x94\x96\x07M\x02\x02\x95\x94\x03\x02\x02\x02" +
		"\x95\x96\x03\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x99\x07K\x02\x02" +
		"\x98\x97\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\r\x03\x02\x02\x02" +
		"\x9A\x9D\x07M\x02\x02\x9B\x9D\x05$\x13\x02\x9C\x9A\x03\x02\x02\x02\x9C" +
		"\x9B\x03\x02\x02\x02\x9D\x0F\x03\x02\x02\x02\x9E\x9F\t\x02\x02\x02\x9F" +
		"\x11\x03\x02\x02\x02\xA0\xA4\x05\x14\v\x02\xA1\xA4\x05\x16\f\x02\xA2\xA4" +
		"\x05\x18\r\x02\xA3\xA0\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA2" +
		"\x03\x02\x02\x02\xA4\x13\x03\x02\x02\x02\xA5\xA6\x07\x11\x02\x02\xA6\x15" +
		"\x03\x02\x02\x02\xA7\xA8\x07\x12\x02\x02\xA8\x17\x03\x02\x02\x02\xA9\xAA" +
		"\x07\x13\x02\x02\xAA\x19\x03\x02\x02\x02\xAB\xAC\x07\x14\x02\x02\xAC\xB9" +
		"\x07\x04\x02\x02\xAD\xAE\x07\x15\x02\x02\xAE\xAF\x07\x04\x02\x02\xAF\xB4" +
		"\x05\"\x12\x02\xB0\xB1\x07\b\x02\x02\xB1\xB3\x05\"\x12\x02\xB2\xB0\x03" +
		"\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03" +
		"\x02\x02\x02\xB5\xB7\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x07" +
		"\t\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9\xAD\x03\x02\x02\x02\xB9\xBA\x03" +
		"\x02\x02\x02\xBA\xC7\x03\x02\x02\x02\xBB\xBC\x07\x16\x02\x02\xBC\xBD\x07" +
		"\x04\x02\x02\xBD\xC2\x05 \x11\x02\xBE\xBF\x07\b\x02\x02\xBF\xC1\x05 \x11" +
		"\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02" +
		"\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02" +
		"\x02\xC5\xC6\x07\t\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xBB\x03\x02\x02" +
		"\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x07\t\x02" +
		"\x02\xCA\x1B\x03\x02\x02\x02\xCB\xCC\x07\x17\x02\x02\xCC\xCD\x07\x04\x02" +
		"\x02\xCD\xCE\x07\x07\x02\x02\xCE\xDB\x07M\x02\x02\xCF\xD0\x07\r\x02\x02" +
		"\xD0\xD1\x07\x04\x02\x02\xD1\xD6\x05\x1E\x10\x02\xD2\xD3\x07\b\x02\x02" +
		"\xD3\xD5\x05\x1E\x10\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02" +
		"\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x03\x02\x02\x02" +
		"\xD8\xD6\x03\x02\x02\x02\xD9\xDA\x07\t\x02\x02\xDA\xDC\x03\x02\x02\x02" +
		"\xDB\xCF\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02" +
		"\xDD\xDE\x07\t\x02\x02\xDE\x1D\x03\x02\x02\x02\xDF\xE0\x07\x18\x02\x02" +
		"\xE0\xE1\x07\x04\x02\x02\xE1\xE2\x07\r\x02\x02\xE2\xE3\x07M\x02\x02\xE3" +
		"\xE4\x07\x10\x02\x02\xE4\xE5\x05\b\x05\x02\xE5\xE6\x07\t\x02\x02\xE6\x1F" +
		"\x03\x02\x02\x02\xE7\xE8\x07\x19\x02\x02\xE8\xE9\x07\x04\x02\x02\xE9\xEA" +
		"\x07\x05\x02\x02\xEA\xEB\x05\f\x07\x02\xEB\xEC\x07\x0F\x02\x02\xEC\xED" +
		"\x07J\x02\x02\xED\xEE\x07\x1A\x02\x02\xEE\xEF\x05\x10\t\x02\xEF\xF0\x07" +
		"\x1B\x02\x02\xF0\xF3\x05\x10\t\x02\xF1\xF2\x07\x1C\x02\x02\xF2\xF4\x05" +
		"\x0E\b\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF7\x03" +
		"\x02\x02\x02\xF5\xF6\x07\x1D\x02\x02\xF6\xF8\x05&\x14\x02\xF7\xF5\x03" +
		"\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xFA\x07" +
		"\x1E\x02\x02\xFA\xFC\x05(\x15\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03" +
		"\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x07\t\x02\x02\xFE!\x03\x02" +
		"\x02\x02\xFF\u0100\x07\x1F\x02\x02\u0100\u0101\x07\x04\x02\x02\u0101\u0102" +
		"\x07\x05\x02\x02\u0102\u0105\x05\f\x07\x02\u0103\u0104\x07 \x02\x02\u0104" +
		"\u0106\x05*\x16\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02" +
		"\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0108\x07!\x02\x02\u0108\u010A" +
		"\x05,\x17\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02" +
		"\u010A\u010D\x03\x02\x02\x02\u010B\u010C\x07\"\x02\x02\u010C\u010E\x05" +
		".\x18\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u010F\x03\x02\x02\x02\u010F\u0110\x07\t\x02\x02\u0110#\x03\x02\x02\x02" +
		"\u0111\u0112\x07\x13\x02\x02\u0112\u0115\x07\x04\x02\x02\u0113\u0114\x07" +
		"#\x02\x02\u0114\u0116\x07M\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116" +
		"\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0118\x07$\x02\x02" +
		"\u0118\u011A\x07M\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03" +
		"\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x07\t\x02\x02\u011C" +
		"%\x03\x02\x02\x02\u011D\u011E\x07%\x02\x02\u011E\u0121\x07\x04\x02\x02" +
		"\u011F\u0120\x07$\x02\x02\u0120\u0122\x07M\x02\x02\u0121\u011F\x03\x02" +
		"\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123" +
		"\u0124\x07\t\x02\x02\u0124\'\x03\x02\x02\x02\u0125\u0126\x07&\x02\x02" +
		"\u0126\u0129\x07\x04\x02\x02\u0127\u0128\x07\'\x02\x02\u0128\u012A\x07" +
		"M\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
		"\u012D\x03\x02\x02\x02\u012B\u012C\x07(\x02\x02\u012C\u012E\x07M\x02\x02" +
		"\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0131\x03" +
		"\x02\x02\x02\u012F\u0130\x07)\x02\x02\u0130\u0132\x07M\x02\x02\u0131\u012F" +
		"\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02" +
		"\u0133\u0134\x07*\x02\x02\u0134\u0136\x07M\x02\x02\u0135\u0133\x03\x02" +
		"\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137" +
		"\u0138\x07\t\x02\x02\u0138)\x03\x02\x02\x02\u0139\u013A\x07+\x02\x02\u013A" +
		"\u013D\x07\x04\x02\x02\u013B\u013C\x07\x1C\x02\x02\u013C\u013E\x05$\x13" +
		"\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0141" +
		"\x03\x02\x02\x02\u013F\u0140\x07,\x02\x02\u0140\u0142\x050\x19\x02\u0141" +
		"\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0145\x03\x02" +
		"\x02\x02\u0143\u0144\x07-\x02\x02\u0144\u0146\x052\x1A\x02\u0145\u0143" +
		"\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02" +
		"\u0147\u0148\x07\t\x02\x02\u0148+\x03\x02\x02\x02\u0149\u014A\x07.\x02" +
		"\x02\u014A\u014D\x07\x04\x02\x02\u014B\u014C\x07\x1C\x02\x02\u014C\u014E" +
		"\x05$\x13\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02" +
		"\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x07/\x02\x02\u0150\u0151\x05" +
		"4\x1B\x02\u0151\u0152\x07\t\x02\x02\u0152-\x03\x02\x02\x02\u0153\u0154" +
		"\x070\x02\x02\u0154\u0157\x07\x04\x02\x02\u0155\u0156\x07\x1C\x02\x02" +
		"\u0156\u0158\x05$\x13\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03" +
		"\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x07/\x02\x02\u015A" +
		"\u015B\x054\x1B\x02\u015B\u015C\x07\t\x02\x02\u015C/\x03\x02\x02\x02\u015D" +
		"\u015E\x071\x02\x02\u015E\u0161\x07\x04\x02\x02\u015F\u0160\x07\x10\x02" +
		"\x02\u0160\u0162\x05> \x02\u0161\u015F\x03\x02\x02\x02\u0161\u0162\x03" +
		"\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x07\t\x02\x02\u0164" +
		"1\x03\x02\x02\x02\u0165\u0166\x072\x02\x02\u0166\u0169\x07\x04\x02\x02" +
		"\u0167\u0168\x073\x02\x02\u0168\u016A\x05> \x02\u0169\u0167\x03\x02\x02" +
		"\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016D\x03\x02\x02\x02\u016B\u016C" +
		"\x074\x02\x02\u016C\u016E\x05> \x02\u016D\u016B\x03\x02\x02\x02\u016D" +
		"\u016E\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u0170\x075\x02" +
		"\x02\u0170\u0172\x05> \x02\u0171\u016F\x03\x02\x02\x02\u0171\u0172\x03" +
		"\x02\x02\x02\u0172\u0175\x03\x02\x02\x02\u0173\u0174\x076\x02\x02\u0174" +
		"\u0176\x05> \x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02" +
		"\u0176\u0179\x03\x02\x02\x02\u0177\u0178\x077\x02\x02\u0178\u017A\x05" +
		"> \x02\u0179\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017D" +
		"\x03\x02\x02\x02\u017B\u017C\x078\x02\x02\u017C\u017E\x05> \x02\u017D" +
		"\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02" +
		"\x02\x02\u017F\u0180\x07\t\x02\x02\u01803\x03\x02\x02\x02\u0181\u0182" +
		"\x079\x02\x02\u0182\u0185\x07\x04\x02\x02\u0183\u0184\x07:\x02\x02\u0184" +
		"\u0186\x056\x1C\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02" +
		"\x02\u0186\u0189\x03\x02\x02\x02\u0187\u0188\x07;\x02\x02\u0188\u018A" +
		"\x058\x1D\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02" +
		"\u018A\u018D\x03\x02\x02\x02\u018B\u018C\x07<\x02\x02\u018C\u018E\x05" +
		":\x1E\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E" +
		"\u0191\x03\x02\x02\x02\u018F\u0190\x07=\x02\x02\u0190\u0192\x05<\x1F\x02" +
		"\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x03" +
		"\x02\x02\x02\u0193\u0194\x07\t\x02\x02\u01945\x03\x02\x02\x02\u0195\u0196" +
		"\x07>\x02\x02\u0196\u0199\x07\x04\x02\x02\u0197\u0198\x07?\x02\x02\u0198" +
		"\u019A\x05\f\x07\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02" +
		"\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x07\t\x02\x02\u019C7\x03" +
		"\x02\x02\x02\u019D\u019E\x07@\x02\x02\u019E\u019F\x07\x04\x02\x02\u019F" +
		"\u01A0\x07A\x02\x02\u01A0\u01A1\x05> \x02\u01A1\u01A2\x07B\x02\x02\u01A2" +
		"\u01A3\x05> \x02\u01A3\u01A4\x07\t\x02\x02\u01A49\x03\x02\x02\x02\u01A5" +
		"\u01A6\x07C\x02\x02\u01A6\u01A7\x07\x04\x02\x02\u01A7\u01A8\x07B\x02\x02" +
		"\u01A8\u01A9\x05> \x02\u01A9\u01AA\x07\t\x02\x02\u01AA;\x03\x02\x02\x02" +
		"\u01AB\u01AC\x07D\x02\x02\u01AC\u01AD\x07\x04\x02\x02\u01AD\u01AE\x07" +
		"E\x02\x02\u01AE\u01B1\x07M\x02\x02\u01AF\u01B0\x07F\x02\x02\u01B0\u01B2" +
		"\x05> \x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3\u01B4\x07\t\x02\x02\u01B4=\x03\x02\x02\x02" +
		"\u01B5\u01B6\x07H\x02\x02\u01B6?\x03\x02\x02\x026FOT]bfuz~\x89\x90\x95" +
		"\x98\x9C\xA3\xB4\xB9\xC2\xC7\xD6\xDB\xF3\xF7\xFB\u0105\u0109\u010D\u0115" +
		"\u0119\u0121\u0129\u012D\u0131\u0135\u013D\u0141\u0145\u014D\u0157\u0161" +
		"\u0169\u016D\u0171\u0175\u0179\u017D\u0185\u0189\u018D\u0191\u0199\u01B1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DebugInternalKinematicsParser.__ATN) {
			DebugInternalKinematicsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DebugInternalKinematicsParser._serializedATN));
		}

		return DebugInternalKinematicsParser.__ATN;
	}

}

export class RuleRobotContext extends ParserRuleContext {
	public RULE_ID(): TerminalNode { return this.getToken(DebugInternalKinematicsParser.RULE_ID, 0); }
	public RULE_STRING(): TerminalNode | undefined { return this.tryGetToken(DebugInternalKinematicsParser.RULE_STRING, 0); }
	public ruleMacro(): RuleMacroContext[];
	public ruleMacro(i: number): RuleMacroContext;
	public ruleMacro(i?: number): RuleMacroContext | RuleMacroContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleMacroContext);
		} else {
			return this.getRuleContext(i, RuleMacroContext);
		}
	}
	public ruleMacroCall(): RuleMacroCallContext[];
	public ruleMacroCall(i: number): RuleMacroCallContext;
	public ruleMacroCall(i?: number): RuleMacroCallContext | RuleMacroCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleMacroCallContext);
		} else {
			return this.getRuleContext(i, RuleMacroCallContext);
		}
	}
	public ruleBody(): RuleBodyContext | undefined {
		return this.tryGetRuleContext(0, RuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleRobot; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleRobot) {
			listener.enterRuleRobot(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleRobot) {
			listener.exitRuleRobot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleRobot) {
			return visitor.visitRuleRobot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleMacroContext extends ParserRuleContext {
	public RULE_ID(): TerminalNode { return this.getToken(DebugInternalKinematicsParser.RULE_ID, 0); }
	public ruleParameter(): RuleParameterContext[];
	public ruleParameter(i: number): RuleParameterContext;
	public ruleParameter(i?: number): RuleParameterContext | RuleParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleParameterContext);
		} else {
			return this.getRuleContext(i, RuleParameterContext);
		}
	}
	public ruleBody(): RuleBodyContext | undefined {
		return this.tryGetRuleContext(0, RuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleMacro; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleMacro) {
			listener.enterRuleMacro(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleMacro) {
			listener.exitRuleMacro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleMacro) {
			return visitor.visitRuleMacro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterContext extends ParserRuleContext {
	public RULE_ID(): TerminalNode { return this.getToken(DebugInternalKinematicsParser.RULE_ID, 0); }
	public ruleParameterType(): RuleParameterTypeContext {
		return this.getRuleContext(0, RuleParameterTypeContext);
	}
	public ruleParameterValue(): RuleParameterValueContext | undefined {
		return this.tryGetRuleContext(0, RuleParameterValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameter; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameter) {
			listener.enterRuleParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameter) {
			listener.exitRuleParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameter) {
			return visitor.visitRuleParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterValueContext extends ParserRuleContext {
	public RULE_ID(): TerminalNode | undefined { return this.tryGetToken(DebugInternalKinematicsParser.RULE_ID, 0); }
	public rulePose(): RulePoseContext | undefined {
		return this.tryGetRuleContext(0, RulePoseContext);
	}
	public ruleLinkRef(): RuleLinkRefContext | undefined {
		return this.tryGetRuleContext(0, RuleLinkRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameterValue; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameterValue) {
			listener.enterRuleParameterValue(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameterValue) {
			listener.exitRuleParameterValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameterValue) {
			return visitor.visitRuleParameterValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleLinkRefContext extends ParserRuleContext {
	public RULE_STRING(): TerminalNode { return this.getToken(DebugInternalKinematicsParser.RULE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleLinkRef; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleLinkRef) {
			listener.enterRuleLinkRef(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleLinkRef) {
			listener.exitRuleLinkRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleLinkRef) {
			return visitor.visitRuleLinkRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterStringContext extends ParserRuleContext {
	public RULE_STRING(): TerminalNode | undefined { return this.tryGetToken(DebugInternalKinematicsParser.RULE_STRING, 0); }
	public RULE_ID(): TerminalNode | undefined { return this.tryGetToken(DebugInternalKinematicsParser.RULE_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameterString; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameterString) {
			listener.enterRuleParameterString(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameterString) {
			listener.exitRuleParameterString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameterString) {
			return visitor.visitRuleParameterString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterPoseContext extends ParserRuleContext {
	public RULE_STRING(): TerminalNode | undefined { return this.tryGetToken(DebugInternalKinematicsParser.RULE_STRING, 0); }
	public rulePose(): RulePoseContext | undefined {
		return this.tryGetRuleContext(0, RulePoseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameterPose; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameterPose) {
			listener.enterRuleParameterPose(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameterPose) {
			listener.exitRuleParameterPose(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameterPose) {
			return visitor.visitRuleParameterPose(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterLinkContext extends ParserRuleContext {
	public RULE_ID(): TerminalNode | undefined { return this.tryGetToken(DebugInternalKinematicsParser.RULE_ID, 0); }
	public RULE_STRING(): TerminalNode | undefined { return this.tryGetToken(DebugInternalKinematicsParser.RULE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameterLink; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameterLink) {
			listener.enterRuleParameterLink(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameterLink) {
			listener.exitRuleParameterLink(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameterLink) {
			return visitor.visitRuleParameterLink(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterTypeContext extends ParserRuleContext {
	public ruleParameterStringType(): RuleParameterStringTypeContext | undefined {
		return this.tryGetRuleContext(0, RuleParameterStringTypeContext);
	}
	public ruleParameterLinkRefType(): RuleParameterLinkRefTypeContext | undefined {
		return this.tryGetRuleContext(0, RuleParameterLinkRefTypeContext);
	}
	public ruleParameterPoseType(): RuleParameterPoseTypeContext | undefined {
		return this.tryGetRuleContext(0, RuleParameterPoseTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameterType; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameterType) {
			listener.enterRuleParameterType(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameterType) {
			listener.exitRuleParameterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameterType) {
			return visitor.visitRuleParameterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterStringTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameterStringType; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameterStringType) {
			listener.enterRuleParameterStringType(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameterStringType) {
			listener.exitRuleParameterStringType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameterStringType) {
			return visitor.visitRuleParameterStringType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterLinkRefTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameterLinkRefType; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameterLinkRefType) {
			listener.enterRuleParameterLinkRefType(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameterLinkRefType) {
			listener.exitRuleParameterLinkRefType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameterLinkRefType) {
			return visitor.visitRuleParameterLinkRefType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterPoseTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameterPoseType; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameterPoseType) {
			listener.enterRuleParameterPoseType(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameterPoseType) {
			listener.exitRuleParameterPoseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameterPoseType) {
			return visitor.visitRuleParameterPoseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleBodyContext extends ParserRuleContext {
	public ruleLink(): RuleLinkContext[];
	public ruleLink(i: number): RuleLinkContext;
	public ruleLink(i?: number): RuleLinkContext | RuleLinkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleLinkContext);
		} else {
			return this.getRuleContext(i, RuleLinkContext);
		}
	}
	public ruleJoint(): RuleJointContext[];
	public ruleJoint(i: number): RuleJointContext;
	public ruleJoint(i?: number): RuleJointContext | RuleJointContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleJointContext);
		} else {
			return this.getRuleContext(i, RuleJointContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleBody; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleBody) {
			listener.enterRuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleBody) {
			listener.exitRuleBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleBody) {
			return visitor.visitRuleBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleMacroCallContext extends ParserRuleContext {
	public RULE_STRING(): TerminalNode { return this.getToken(DebugInternalKinematicsParser.RULE_STRING, 0); }
	public ruleParameterCall(): RuleParameterCallContext[];
	public ruleParameterCall(i: number): RuleParameterCallContext;
	public ruleParameterCall(i?: number): RuleParameterCallContext | RuleParameterCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleParameterCallContext);
		} else {
			return this.getRuleContext(i, RuleParameterCallContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleMacroCall; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleMacroCall) {
			listener.enterRuleMacroCall(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleMacroCall) {
			listener.exitRuleMacroCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleMacroCall) {
			return visitor.visitRuleMacroCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleParameterCallContext extends ParserRuleContext {
	public RULE_STRING(): TerminalNode { return this.getToken(DebugInternalKinematicsParser.RULE_STRING, 0); }
	public ruleParameterValue(): RuleParameterValueContext {
		return this.getRuleContext(0, RuleParameterValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleParameterCall; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleParameterCall) {
			listener.enterRuleParameterCall(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleParameterCall) {
			listener.exitRuleParameterCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleParameterCall) {
			return visitor.visitRuleParameterCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleJointContext extends ParserRuleContext {
	public ruleParameterString(): RuleParameterStringContext {
		return this.getRuleContext(0, RuleParameterStringContext);
	}
	public RULE_JOINTTYPE(): TerminalNode { return this.getToken(DebugInternalKinematicsParser.RULE_JOINTTYPE, 0); }
	public ruleParameterLink(): RuleParameterLinkContext[];
	public ruleParameterLink(i: number): RuleParameterLinkContext;
	public ruleParameterLink(i?: number): RuleParameterLinkContext | RuleParameterLinkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleParameterLinkContext);
		} else {
			return this.getRuleContext(i, RuleParameterLinkContext);
		}
	}
	public ruleParameterPose(): RuleParameterPoseContext | undefined {
		return this.tryGetRuleContext(0, RuleParameterPoseContext);
	}
	public ruleVector3(): RuleVector3Context | undefined {
		return this.tryGetRuleContext(0, RuleVector3Context);
	}
	public ruleLimit(): RuleLimitContext | undefined {
		return this.tryGetRuleContext(0, RuleLimitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleJoint; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleJoint) {
			listener.enterRuleJoint(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleJoint) {
			listener.exitRuleJoint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleJoint) {
			return visitor.visitRuleJoint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleLinkContext extends ParserRuleContext {
	public ruleParameterString(): RuleParameterStringContext {
		return this.getRuleContext(0, RuleParameterStringContext);
	}
	public ruleInertial(): RuleInertialContext | undefined {
		return this.tryGetRuleContext(0, RuleInertialContext);
	}
	public ruleVisual(): RuleVisualContext | undefined {
		return this.tryGetRuleContext(0, RuleVisualContext);
	}
	public ruleCollision(): RuleCollisionContext | undefined {
		return this.tryGetRuleContext(0, RuleCollisionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleLink; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleLink) {
			listener.enterRuleLink(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleLink) {
			listener.exitRuleLink(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleLink) {
			return visitor.visitRuleLink(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulePoseContext extends ParserRuleContext {
	public RULE_STRING(): TerminalNode[];
	public RULE_STRING(i: number): TerminalNode;
	public RULE_STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DebugInternalKinematicsParser.RULE_STRING);
		} else {
			return this.getToken(DebugInternalKinematicsParser.RULE_STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_rulePose; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRulePose) {
			listener.enterRulePose(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRulePose) {
			listener.exitRulePose(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRulePose) {
			return visitor.visitRulePose(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleVector3Context extends ParserRuleContext {
	public RULE_STRING(): TerminalNode | undefined { return this.tryGetToken(DebugInternalKinematicsParser.RULE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleVector3; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleVector3) {
			listener.enterRuleVector3(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleVector3) {
			listener.exitRuleVector3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleVector3) {
			return visitor.visitRuleVector3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleLimitContext extends ParserRuleContext {
	public RULE_STRING(): TerminalNode[];
	public RULE_STRING(i: number): TerminalNode;
	public RULE_STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DebugInternalKinematicsParser.RULE_STRING);
		} else {
			return this.getToken(DebugInternalKinematicsParser.RULE_STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleLimit; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleLimit) {
			listener.enterRuleLimit(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleLimit) {
			listener.exitRuleLimit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleLimit) {
			return visitor.visitRuleLimit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleInertialContext extends ParserRuleContext {
	public rulePose(): RulePoseContext | undefined {
		return this.tryGetRuleContext(0, RulePoseContext);
	}
	public ruleMass(): RuleMassContext | undefined {
		return this.tryGetRuleContext(0, RuleMassContext);
	}
	public ruleInertia(): RuleInertiaContext | undefined {
		return this.tryGetRuleContext(0, RuleInertiaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleInertial; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleInertial) {
			listener.enterRuleInertial(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleInertial) {
			listener.exitRuleInertial(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleInertial) {
			return visitor.visitRuleInertial(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleVisualContext extends ParserRuleContext {
	public ruleGeometry(): RuleGeometryContext {
		return this.getRuleContext(0, RuleGeometryContext);
	}
	public rulePose(): RulePoseContext | undefined {
		return this.tryGetRuleContext(0, RulePoseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleVisual; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleVisual) {
			listener.enterRuleVisual(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleVisual) {
			listener.exitRuleVisual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleVisual) {
			return visitor.visitRuleVisual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleCollisionContext extends ParserRuleContext {
	public ruleGeometry(): RuleGeometryContext {
		return this.getRuleContext(0, RuleGeometryContext);
	}
	public rulePose(): RulePoseContext | undefined {
		return this.tryGetRuleContext(0, RulePoseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleCollision; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleCollision) {
			listener.enterRuleCollision(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleCollision) {
			listener.exitRuleCollision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleCollision) {
			return visitor.visitRuleCollision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleMassContext extends ParserRuleContext {
	public ruleDouble0(): RuleDouble0Context | undefined {
		return this.tryGetRuleContext(0, RuleDouble0Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleMass; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleMass) {
			listener.enterRuleMass(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleMass) {
			listener.exitRuleMass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleMass) {
			return visitor.visitRuleMass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleInertiaContext extends ParserRuleContext {
	public ruleDouble0(): RuleDouble0Context[];
	public ruleDouble0(i: number): RuleDouble0Context;
	public ruleDouble0(i?: number): RuleDouble0Context | RuleDouble0Context[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleDouble0Context);
		} else {
			return this.getRuleContext(i, RuleDouble0Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleInertia; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleInertia) {
			listener.enterRuleInertia(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleInertia) {
			listener.exitRuleInertia(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleInertia) {
			return visitor.visitRuleInertia(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleGeometryContext extends ParserRuleContext {
	public ruleBox(): RuleBoxContext | undefined {
		return this.tryGetRuleContext(0, RuleBoxContext);
	}
	public ruleCylinder(): RuleCylinderContext | undefined {
		return this.tryGetRuleContext(0, RuleCylinderContext);
	}
	public ruleSphere(): RuleSphereContext | undefined {
		return this.tryGetRuleContext(0, RuleSphereContext);
	}
	public ruleMesh(): RuleMeshContext | undefined {
		return this.tryGetRuleContext(0, RuleMeshContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleGeometry; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleGeometry) {
			listener.enterRuleGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleGeometry) {
			listener.exitRuleGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleGeometry) {
			return visitor.visitRuleGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleBoxContext extends ParserRuleContext {
	public ruleParameterString(): RuleParameterStringContext | undefined {
		return this.tryGetRuleContext(0, RuleParameterStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleBox; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleBox) {
			listener.enterRuleBox(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleBox) {
			listener.exitRuleBox(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleBox) {
			return visitor.visitRuleBox(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleCylinderContext extends ParserRuleContext {
	public ruleDouble0(): RuleDouble0Context[];
	public ruleDouble0(i: number): RuleDouble0Context;
	public ruleDouble0(i?: number): RuleDouble0Context | RuleDouble0Context[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleDouble0Context);
		} else {
			return this.getRuleContext(i, RuleDouble0Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleCylinder; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleCylinder) {
			listener.enterRuleCylinder(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleCylinder) {
			listener.exitRuleCylinder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleCylinder) {
			return visitor.visitRuleCylinder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleSphereContext extends ParserRuleContext {
	public ruleDouble0(): RuleDouble0Context {
		return this.getRuleContext(0, RuleDouble0Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleSphere; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleSphere) {
			listener.enterRuleSphere(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleSphere) {
			listener.exitRuleSphere(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleSphere) {
			return visitor.visitRuleSphere(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleMeshContext extends ParserRuleContext {
	public RULE_STRING(): TerminalNode { return this.getToken(DebugInternalKinematicsParser.RULE_STRING, 0); }
	public ruleDouble0(): RuleDouble0Context | undefined {
		return this.tryGetRuleContext(0, RuleDouble0Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleMesh; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleMesh) {
			listener.enterRuleMesh(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleMesh) {
			listener.exitRuleMesh(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleMesh) {
			return visitor.visitRuleMesh(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleDouble0Context extends ParserRuleContext {
	public RULE_DOUBLE(): TerminalNode { return this.getToken(DebugInternalKinematicsParser.RULE_DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DebugInternalKinematicsParser.RULE_ruleDouble0; }
	// @Override
	public enterRule(listener: DebugInternalKinematicsListener): void {
		if (listener.enterRuleDouble0) {
			listener.enterRuleDouble0(this);
		}
	}
	// @Override
	public exitRule(listener: DebugInternalKinematicsListener): void {
		if (listener.exitRuleDouble0) {
			listener.exitRuleDouble0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DebugInternalKinematicsVisitor<Result>): Result {
		if (visitor.visitRuleDouble0) {
			return visitor.visitRuleDouble0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


