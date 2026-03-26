var ye=(i,e,t)=>new Promise((a,n)=>{var s=E=>{try{f(t.next(E))}catch(F){n(F)}},o=E=>{try{f(t.throw(E))}catch(F){n(F)}},f=E=>E.done?a(E.value):Promise.resolve(E.value).then(s,o);f((t=t.apply(i,e)).next())});import{ak as nt,M as ve,l as Se,al as Ie,g as ce,am as we,V as Q,W as Re,an as Ae,N as st,ao as ot,o as Je,ap as rt,aq as lt,ar as dt,as as ut,at as ct,au as ht,a0 as et,av as pt,aw as mt,ax as ft,e as T,p as gt,q as vt,r as wt,s as xt,t as St,u as _t,v as yt,w as bt,x as Ne,y as Et,z as Be,A as Fe,G as be,H as Oe,I as Ue,J as re,L as ke,K as Ve,O as Ct,Q as Tt,X as le,_ as Dt,Y as Pt,Z as Lt,$ as Mt,S as he,a1 as Rt,a2 as At,f as zt,P as Gt,a3 as It,a4 as Nt,a5 as Bt,a6 as Ft,a7 as Ot,a8 as Ee,a9 as Ut,aa as He,ab as kt,ac as We,ad as Vt,af as Ht,ag as je,ah as Wt,i as $e,m as Xe,ai as jt,aj as $t}from"./loading-bj-a3f5d839.js";import{n as tt,a as Xt}from"./index-4fbf8981.js";import"./tip-c9e56a80.js";class oe{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kt=new nt(-1,1,1,-1,0,1);class Qt extends Se{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}}const Yt=new Qt;class ze{constructor(e){this._mesh=new ve(Yt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}var ue=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(P){P.preventDefault(),a(++i%e.children.length)},!1);function t(P){return e.appendChild(P.dom),P}function a(P){for(var A=0;A<e.children.length;A++)e.children[A].style.display=A===P?"block":"none";i=P}var n=(performance||Date).now(),s=n,o=0,f=t(new ue.Panel("FPS","#0ff","#002")),E=t(new ue.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var F=t(new ue.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:e,addPanel:t,showPanel:a,begin:function(){n=(performance||Date).now()},end:function(){o++;var P=(performance||Date).now();if(E.update(P-n,200),P>=s+1e3&&(f.update(o*1e3/(P-s),100),s=P,o=0,F)){var A=performance.memory;F.update(A.usedJSHeapSize/1048576,A.jsHeapSizeLimit/1048576)}return P},update:function(){n=this.end()},domElement:e,setMode:a}};ue.Panel=function(i,e,t){var a=1/0,n=0,s=Math.round,o=s(window.devicePixelRatio||1),f=80*o,E=48*o,F=3*o,P=2*o,A=3*o,I=15*o,N=74*o,H=30*o,W=document.createElement("canvas");W.width=f,W.height=E,W.style.cssText="width:80px;height:48px";var y=W.getContext("2d");return y.font="bold "+9*o+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=t,y.fillRect(0,0,f,E),y.fillStyle=e,y.fillText(i,F,P),y.fillRect(A,I,N,H),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(A,I,N,H),{dom:W,update:function(r,c){a=Math.min(a,r),n=Math.max(n,r),y.fillStyle=t,y.globalAlpha=1,y.fillRect(0,0,f,I),y.fillStyle=e,y.fillText(s(r)+" "+i+" ("+s(a)+"-"+s(n)+")",F,P),y.drawImage(W,A+o,I,N-o,H,A,I,N-o,H),y.fillRect(A+N-o,I,o,H),y.fillStyle=t,y.globalAlpha=.9,y.fillRect(A+N-o,I,o,s((1-r/c)*H))}}};const Zt=ue,qt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class xe extends oe{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ce?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=we.clone(e.uniforms),this.material=new ce({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ze(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ke extends oe{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,f;this.inverse?(o=0,f=1):(o=1,f=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(f),s.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Jt extends oe{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ei{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const a=e.getSize(new Q);this._width=a.width,this._height=a.height,t=new Re(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ae}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xe(qt),this.copyPass.material.blending=st,this.clock=new ot}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let a=!1;for(let n=0,s=this.passes.length;n<s;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),o.needsSwap){if(a){const f=this.renderer.getContext(),E=this.renderer.state.buffers.stencil;E.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),E.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Ke!==void 0&&(o instanceof Ke?a=!0:o instanceof Jt&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const a=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(a,n),this.renderTarget2.setSize(a,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(a,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ti extends oe{constructor(e,t,a=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,a){const n=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const ii={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ai extends oe{constructor(){super();const e=ii;this.uniforms=we.clone(e.uniforms),this.material=new rt({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ze(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ut?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ct?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ht?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===et?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mt&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Qe={name:"ConvolutionShader",defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new Q(.001953125,0)},cKernel:{value:[]}},vertexShader:`

		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float cKernel[ KERNEL_SIZE_INT ];

		uniform sampler2D tDiffuse;
		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vec2 imageCoord = vUv;
			vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );

			for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {

				sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];
				imageCoord += uImageIncrement;

			}

			gl_FragColor = sum;

		}`,buildKernel:function(i){let t=2*Math.ceil(i*3)+1;t>25&&(t=25);const a=(t-1)*.5,n=new Array(t);let s=0;for(let o=0;o<t;++o)n[o]=ni(o-a,i),s+=n[o];for(let o=0;o<t;++o)n[o]/=s;return n}};function ni(i,e){return Math.exp(-(i*i)/(2*e*e))}class K extends oe{constructor(e=1,t=25,a=4){super(),this.renderTargetX=new Re(1,1,{type:Ae}),this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new Re(1,1,{type:Ae}),this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=we.clone(pe.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new ce({name:pe.name,uniforms:this.combineUniforms,vertexShader:pe.vertexShader,fragmentShader:pe.fragmentShader,blending:ft,transparent:!0});const n=Qe;this.convolutionUniforms=we.clone(n.uniforms),this.convolutionUniforms.uImageIncrement.value=K.blurX,this.convolutionUniforms.cKernel.value=Qe.buildKernel(a),this.materialConvolution=new ce({name:n.name,uniforms:this.convolutionUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new ze(null)}render(e,t,a,n,s){s&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=a.texture,this.convolutionUniforms.uImageIncrement.value=K.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=K.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(a),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const pe={name:"CombineShader",uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float strength;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = strength * texel;

		}`};K.blurX=new Q(.001953125,0);K.blurY=new Q(0,.001953125);const si={name:"LUTShader",uniforms:{lut:{value:null},lutSize:{value:0},tDiffuse:{value:null},intensity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform float lutSize;
		uniform sampler3D lut;

		varying vec2 vUv;
		uniform float intensity;
		uniform sampler2D tDiffuse;
		void main() {

			vec4 val = texture2D( tDiffuse, vUv );
			vec4 lutVal;

			// pull the sample in by half a pixel so the sample begins
			// at the center of the edge pixels.
			float pixelWidth = 1.0 / lutSize;
			float halfPixelWidth = 0.5 / lutSize;
			vec3 uvw = vec3( halfPixelWidth ) + val.rgb * ( 1.0 - pixelWidth );


			lutVal = vec4( texture( lut, uvw ).rgb, val.a );

			gl_FragColor = vec4( mix( val, lutVal, intensity ) );

		}

	`};class oi extends xe{set lut(e){const t=this.material;e!==this.lut&&(t.uniforms.lut.value=null,e&&(t.uniforms.lutSize.value=e.image.width,t.uniforms.lut.value=e))}get lut(){return this.material.uniforms.lut.value}set intensity(e){this.material.uniforms.intensity.value=e}get intensity(){return this.material.uniforms.intensity.value}constructor(e={}){super(si),this.lut=e.lut||null,this.intensity="intensity"in e?e.intensity:1}}const ri={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Q(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		// FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins
		// http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
		// https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;
			
			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {
				
				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );
			
		}`},li={name:"ColorCorrectionShader",uniforms:{tDiffuse:{value:null},powRGB:{value:new T(2,2,2)},mulRGB:{value:new T(1,1,1)},addRGB:{value:new T(0,0,0)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 powRGB;
		uniform vec3 mulRGB;
		uniform vec3 addRGB;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.rgb = mulRGB * pow( ( gl_FragColor.rgb + addRGB ), powRGB );

		}`};ve.prototype.raycast=Lt;Se.prototype.computeBoundsTree=gt;Se.prototype.disposeBoundsTree=vt;let M,w,x,u,j,me,k,m,de,fe,q,Ce=[];window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[];let di=new wt,Ye=new T,Te=new T,J,De,ge,Pe=!0,ee=!0,te=!0,ie=!0,Le=!0,l,ae,$,ne,Ze,R,X,V,qe,se;const Me={},ui={components:{Peripheralmap:xt,disclaimer:St,loading:_t,sunshadow:yt,debugcesium:bt},props:{header:{type:String,default:""}},data(){return{cesiumshow:!1,init:null,proinit:!0,threedata:{},mapdata:[],maplistdata:null,maplist:[],progress:0,autoVidoe:{show:!1,count:0,time:null,name:""},distance:0,explain:"",value1:!1,rimVisible:!1,coordinate:{},dataName:""}},watch:{value1:{handler(i){this.condition=i?1:-1,i?this.rimVisible=!0:this.rimVisible=!1,ee=!i,te=!i,ie=!i},immediate:!0},rimVisible:{handler(i){if(i)hideset.forEach(e=>setOpacityRecursive(e,1)),trees.forEach(e=>setOpacityRecursive(e,1));else{if(this.distance>l.distance4)return;hideset.forEach(e=>setOpacityRecursive(e,0)),trees.forEach(e=>setOpacityRecursive(e,0))}}}},created(){return ye(this,null,function*(){let i=this;if(R=null,X=null,V=null,Ne.mobile()){window.devicetype.phone=!0;let a=this.header+"/cesiunjsonpadiphone.json";yield e(a)}else if(Ne.tablet()){window.devicetype.pad=!0;let a=this.header+"/cesiunjsonpad.json";yield e(a)}else{window.devicetype.pc=!0;let a=this.header+"/cesiunjson.json";yield e(a)}function e(a){return new Promise((n,s)=>ye(this,null,function*(){try{const o=yield Xt.get(a);i.threedata=o.data,l=o.data.initmap,ae=o.data.modelbox,$=o.data.croping,qe=o.data.NewPlanColor,ne=o.data.path;for(let f=0;f<ne.length;f++)Me[`x${f+1}`]=ne[f][0],Me[`y${f+1}`]=ne[f][1],Me[`z${f+1}`]=ne[f][2];Ze={apiKey:l.apiKey},n(!0)}catch(o){}}))}let t=!sessionStorage.getItem("agree");this.init=t,this.$nextTick(()=>{const a=this.$refs.threeRoot;if(!a)return;const n=new Et,s=new Q;n.firstHitOnly=!0,window.threeMapImg=(r,c)=>{if(threeclearimg(),De==r)return De="",this.removeline(),!1;if(c){let h=this.xyz(c.longitudeAndLatitude.split(",")[0],c.longitudeAndLatitude.split(",")[1],ae.mapheight);this.gsapTo(h.x,h.y,h.z),this.addgoogelmap(c.googelmap),window.threeMapImg(r);return}let p=document.querySelector(`.dataid${r}`);if(!p)return!1;p.style.visibility="visible",p.style.pointerEvents="all",De=r},window.threeclearimg=()=>{let r=document.querySelectorAll(".arrow_box");for(let c=0;c<r.length;c++){const p=r[c];p.style.visibility="hidden",p.style.pointerEvents="none"}};function o(){var S,C,_,b;u&&(w.remove(u.group),u.dispose(),u=null),u=new Ut,i.threedata.isgis?u.registerPlugin(new He({apiToken:Ze.apiKey})):u.registerPlugin(new He({apiToken:"0"})),u.visible=!1,u.errorTarget=l.errorTarget,u.lruCache.maxBytesSize=(S=window.devicetype)!=null&&S.pc?u.lruCache.maxBytesSize*2:u.lruCache.maxBytesSize,u.lruCache.minBytesSize=(C=window.devicetype)!=null&&C.pc?u.lruCache.minBytesSize*2:u.lruCache.minBytesSize,u.lruCache.minSize=(_=window.devicetype)!=null&&_.pc?u.lruCache.minSize*2:u.lruCache.minSize,u.lruCache.maxSize=(b=window.devicetype)!=null&&b.pc?u.lruCache.maxSize*2:u.lruCache.maxSize,u.setLatLonToYUp(l.lat*re.DEG2RAD,l.lon*re.DEG2RAD),F(),u.visible=!0;const r=new jt(()=>{const L=setInterval(()=>{w.background!==null&&(me.dispose(),x.info.reset(),clearInterval(L))},500)},(L,d,z)=>{const D=d/z*100;i.progress=D.toFixed(0)/1}),c=new kt;c.setDecoderPath("https://unpkg.com/three@0.170.0/examples/jsm/libs/draco/gltf/");const p=new We(u.manager);p.setDRACOLoader(c),me=new Vt(r).setTranscoderPath("https://unpkg.com/three@0.170.0/examples/jsm/libs/basis/").detectSupport(x),i.skyBox(w,me,r);const h=new We(r);h.setKTX2Loader(me),h.setDRACOLoader(c);let v=[],g=`https://oss.homevista.jp/custom/model/csmodel/${i.$route.params.id}/model.gltf`;h.load(g,L=>{de=L.scene,de.traverse(d=>{var z;d.castShadow=l.modelcastShadow,d.receiveShadow=l.modelreceiveShadow,(z=d==null?void 0:d.material)!=null&&z.transparent&&(d.material.depthWrite=!0,d.renderOrder=1,d.material.ColorSpace=he),d.name==l.modelHome?R=d:d.name==l.modelTrees?trees.push(d):d.name==l.modelLight?d.traverse(D=>{var Y,Z;D.type!=="Object3D"&&(D.intensity=l.modelLightintensity,D.shadow.mapSize.width=(Y=window.devicetype)!=null&&Y.pc?4096:2048,D.shadow.mapSize.height=(Z=window.devicetype)!=null&&Z.pc?4096:2048,D.shadow.camera.left=-1500,D.shadow.camera.right=1500,D.shadow.camera.top=1500,D.shadow.camera.bottom=-1500,D.shadow.bias=-.005)}):d.name.indexOf(l.modelGIS)!==-1||d.name.indexOf("m-gis")!==-1?hideset.push(d):d.name==l.modelbox&&d.traverse(D=>{D.isMesh&&v.push(D)})}),w.add(L.scene),de.position.set($.ModelPositionX,$.ModelPositionY,$.ModelPositionZ),de.rotation.set($.ModelRotationX,$.ModelRotationY,$.ModelRotationZ),v.map(d=>{d.isMesh&&(d.receiveShadow=!1,d.castShadow=!1,d.geometry.boundsTree=new Ht(d.geometry),d.geometry.computeBoundsTree(),Ce.push(d),d.material.opacity=0,d.material.transparent=!0,d.material.depthWrite=!1,d.material.ColorSpace=he)}),setTimeout(()=>{if(!R){i.threedata.Selectlist.map(d=>{d.name=="户型"&&(d.visible=!1)});return}R.traverse(d=>{if(!d.isMesh)return;let z=qe.find(_e=>d.name.toLowerCase().includes(_e.type.toLowerCase()));const D=new T,Y=new Ee,Z=new T;d.matrixWorld.decompose(D,Y,Z),d.material=new je({color:z.color,opacity:0,transparent:!0,depthWrite:!1})}),i.clearHouseVisualState()},1e3)},()=>{},L=>{i.$router.push("/404")}),u.manager.addHandler(/\.gltf$/,p),w.add(u.group),u.setResolutionFromRenderer(m,x),u.setCamera(m)}let f=()=>{x=new Mt({antialias:!0}),x.localClippingEnabled=!0,x.toneMapping=et,x.toneMappingExposure=l.toneMappingExposure,x.outputColorSpace=he,x.outputEncoding=he,x.physicallyCorrectLights=!0,x.shadowMap.enabled=!0,x.shadowMap.type=Rt,x.setPixelRatio(window.devicePixelRatio),a.appendChild(x.domElement),j=new At,j.setSize(window.innerWidth,window.innerHeight),j.domElement.style.position="absolute",j.domElement.style.top="0px",j.domElement.style.pointerEvents="none",a.appendChild(j.domElement),w=new zt,m=new Gt(60,window.innerWidth/window.innerHeight,1,16e5),m.position.set(l.position.x,l.position.y,l.position.z);const r=new It(4210752,1);w.add(r);const c=new ai,p=new ti(w,m);k=new ei(x),k.setPixelRatio(window.devicePixelRatio),k.setSize(window.innerWidth,window.innerHeight),k.addPass(new K),k.addPass(new oi);const h=new xe(ri);h.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight);const v=new xe(li);v.uniforms.powRGB.value.set(1.4,1.4,1.4),k.addPass(v),k.addPass(h),k.addPass(c),k.addPass(p);let g=new ve(new Nt(3,32,32),new Bt);g.material.opacity=0,g.material.transparent=!0,g.material.depthWrite=!1,g.material.needsUpdate=!0,w.add(g),M=new Ft(m,x.domElement),M.target.set(l.target.x,l.target.y,l.target.z),M.minDistance=l.controls.minDistance,M.maxDistance=l.controls.maxDistance,M.minPolarAngle=l.controls.minPolarAngle,M.maxPolarAngle=l.controls.maxPolarAngle,M.enableDamping=l.controls.enableDamping,M.enablePan=l.controls.enablePan,M.update(),o(),P(),window.addEventListener("resize",P,!1);let S=l.controls.minHeight,C=l.controls.maxHeight;M.addEventListener("change",()=>{if(i.distance<=l.controls.distance){const _=l.controls.maxMoveSpeed,b=new T().subVectors(m.position,Te);b.length()>_&&(b.setLength(_),m.position.copy(Te).add(b))}if(m.position.y<S&&(m.position.y=S),m.position.y>C&&(m.position.y=C),de&&Ce.length>0&&Pe){const _=new T;m.getWorldPosition(_),g.position.copy(_),g.lookAt(m.position);const b=Ce[0];g.updateMatrixWorld();let L=di.copy(b.matrixWorld).invert().multiply(g.matrixWorld);b.geometry.boundsTree.intersectsGeometry(g.geometry,L)?m.position.copy(Ye):Ye.copy(m.position)}Te.copy(m.position),M.target.y=35}),this.addpoint(),l.initPoint&&this.addInitPoint(),this.cesiumshow=!0};E();function E(){J=new Zt,J.showPanel(0),document.body.appendChild(J.dom)}function F(){let r=l.clipping;r=r.map(h=>i.xyz(h[0],h[1],0));let c=[];new Wt;function p(h){const v=[];for(let g=0;g<h.length-1;g++){const S=new T().subVectors(h[g],h[g+1]),C=new T(S.z,0,-S.x).normalize();h[g].dot(C);const _=new $t().setFromNormalAndCoplanarPoint(C,h[g]);v.push(_)}return v}c=p(r),u.addEventListener("load-model",h=>{h.scene.traverse(v=>{v.isMesh&&(v.material.clippingPlanes=c,v.material.clipIntersection=!0,v.material.clipShadows=!0,v.material.alphaToCoverage=!0)})})}function P(){m.aspect=window.innerWidth/window.innerHeight,x.setSize(window.innerWidth,window.innerHeight),j.setSize(window.innerWidth,window.innerHeight),m.updateProjectionMatrix(),k.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(window.devicePixelRatio)}function A(r,c,p=.5){le.to(r,{opacity:c,duration:p,ease:"power1.inOut",onStart:()=>{r.transparent=!0,r.visible=!0},onComplete:()=>{r.transparent=!0,c==0&&(r.visible=!1)}})}function I(r,c){r.isMesh?A(r.material,c):r.children.forEach(p=>I(p,c))}window.animateOpacity=A,window.setOpacityRecursive=I,i.condition=-1;function N(r,c=1){u.group&&(u.group.visible=r,i.rimVisible||(hideset.forEach(p=>I(p,c)),trees.forEach(p=>I(p,c))))}window.updateVisibility=N;function H(){if(requestAnimationFrame(H),!u)return;M.update(),u.setResolutionFromRenderer(m,x),u.setCamera(m),m.updateMatrixWorld(),u.update(),planesel.forEach(v=>{v.lookAt(m.position)}),se&&se.lookAt(m.position);let r=new T(-m.position.x,0,-m.position.z).normalize(),c=Math.atan2(-r.x,-r.z);i.$refs.compass&&(i.$refs.compass.style.transform="rotateZ("+(re.radToDeg(c)+90)+"deg)");const p=new T;m.getWorldPosition(p);const h=p.distanceTo(new T(0,0,0));i.distance=h,i.condition==-1?h<=l.distance1&&ee?(ee=!1,te=!0,ie=!0,N(!1,0)):h>l.distance2&&h<=l.distance3&&te?(te=!1,ee=!0,ie=!0,N(!1,1)):h>l.distance4&&ie&&(ie=!1,te=!0,ee=!0,N(!0,1)):Le&&(N(!0,1),Le=!1,setTimeout(()=>{Le=!0},500)),h<=l.columndistance&&q&&q.uniforms&&(h-100>=0&&(q.uniforms.u_height.value=(h-100)/2),q.uniforms.u_opacity.value=h/1e3),i.coordinate={camera:{x:m.position.x,y:m.position.y,z:m.position.z},target:{x:M.target.x,y:M.target.y,z:M.target.z},distance:h,devicetype:window.devicetype},W(),k.render(),j.render(w,m),J==null||J.update()}function W(){if(u){const r=u.group.matrixWorld.clone().invert(),c=m.position.clone().applyMatrix4(r),p={};Ot.getPositionToCartographic(c,p),(u==null?void 0:u.getAttributions().length)>0&&(i.explain=u.getAttributions()[0].value)}}function y(){fe&&w.remove(fe);const r=({height:p=10,color:h=l.columncolor,opacity:v=.5,speed:g=5})=>{const S=`
          uniform vec3 u_color;

          uniform float time;
          uniform float u_height;
          varying float v_opacity;

          void main() {
              vec3 vPosition = position;
              v_opacity = mix(1.0, 0.0, position.y / u_height * 1.0) * (1.0 + sin(time) * 0.5);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1);
          }
       `,C=`
          uniform vec3 u_color;
          uniform float u_opacity;
          varying float v_opacity;
          void main() {
              gl_FragColor = vec4(u_color, v_opacity * u_opacity);
          }
        `;return new ce({uniforms:{u_height:{value:p},u_opacity:{value:v},u_color:{value:new Je(h)},time:{value:0},speed:{value:g}},transparent:!0,depthWrite:!1,depthTest:!1,side:$e,vertexShader:S,fragmentShader:C})},c=({height:p=10,path:h=[],wallMeshmaterial:v,expand:g=!0})=>{let S=null;g?S=h.reduce((G,[B,O,U])=>G.concat([[[B,O,U],[B,O+p,U]]]),[]):S=h;const _=S.reduce((G,B,O)=>O===S.length-1?G:G.concat([[B,S[O+1]]]),[]).reduce((G,B)=>{const[[O,U],[at,Ge]]=B;return G.concat(...U,...O,...Ge,...O,...at,...Ge)},[]),b=new Se,L=new Float32Array(_);b.setAttribute("position",new Xe(L,3));const z=new Array(_.length/3/6).fill(0).map((G,B)=>_.slice(B*3*6,(B+1)*3*6)).map((G,B)=>new Array(G.length/3).fill(0).map((O,U)=>G.slice(U*3,(U+1)*3)));b.computeBoundingBox();const{min:D,max:Y}=b.boundingBox,Z=Y.x-D.x,_e=[].concat(...z.map(G=>{const B=G[0],O=G[5],U=new T(...B).distanceTo(new T(...O))/(Z/10);return[0,1,0,0,U,1,0,0,U,0,U,1]}));b.setAttribute("uv",new Xe(new Float32Array(_e),2));const it=v||new je({color:65535,side:$e});return new ve(b,it)};q=r({height:100,speed:5}),fe=c({path:ne,wallMeshmaterial:q,height:500}),w.add(fe)}f(),H(),l.columnvisibility&&y(),this._handleThreeMouseDown=r=>{if(r.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;r.preventDefault(),X&&(w.remove(X),this.dataName=""),s.x=r.clientX/x.domElement.clientWidth*2-1,s.y=-(r.clientY/x.domElement.clientHeight)*2+1,n.setFromCamera(s,m);var c=n.intersectObjects(w.children,!0);if(c.length>0&&(R!=null&&R.children)){let g=0;for(let S=0;S<c.length;S++){if(g)return!1;const C=c[S];let _=R.children.find(b=>{if(b.name==C.object.name)return b});if(_&&i.$refs.sunshadow.houses){this.dataName=_.name,C.object.updateMatrix(),C.object.updateMatrixWorld(!0);const b=new T,L=new Ee,d=new T;C.object.matrixWorld.decompose(b,L,d);const z=new Be(C.object.geometry);var p=new Fe().fromEdgesGeometry(z),h=new be({color:l.EdgeLinecolor,linewidth:l.Edgelinewidth}),v=new Oe(p,h);v.position.copy(b),v.rotation.copy(L),v.scale.copy(d),w.add(v),X=v,g++}}}},a.addEventListener("mousedown",this._handleThreeMouseDown),this._handleThreeMouseMove=r=>{if(r.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;r.preventDefault(),V&&(w.remove(V),V=null);let c={};c.x=r.clientX/x.domElement.clientWidth*2-1,c.y=-(r.clientY/x.domElement.clientHeight)*2+1,n.setFromCamera(c,m);var p=n.intersectObjects(w.children,!0);if(p.length>0&&(R!=null&&R.children)){let S=0;for(let C=0;C<p.length;C++){if(S)return!1;const _=p[C];if(R.children.find(L=>{if(L.name==_.object.name)return L})&&i.$refs.sunshadow.houses){_.object.updateMatrix(),_.object.updateMatrixWorld(!0);const L=new T,d=new Ee,z=new T;_.object.matrixWorld.decompose(L,d,z);const D=new Be(_.object.geometry);var h=new Fe().fromEdgesGeometry(D),v=new be({color:l.EdgeLinecolor,linewidth:l.Edgelinewidth,transparent:!0,opacity:.5}),g=new Oe(h,v);g.position.copy(L),g.rotation.copy(d),g.scale.copy(z),w.add(g),V=g,S++}}}},a.addEventListener("mousemove",this._handleThreeMouseMove),this._handleThreeMouseLeave=()=>{V&&(w.remove(V),V=null)},a.addEventListener("mouseleave",this._handleThreeMouseLeave)})})},methods:{clearHouseVisualState(){this.removemodeledges(),R&&(R.traverse(i=>{i.isMesh&&(i.material.opacity=0)}),this.dataName="")},imageLoad(){this.$store.commit("global/SET_LOADING",!1)},setmap(){this.condition=this.value1?1:-1,this.condition==-1&&(ee=!0,te=!0,ie=!0)},initmap(){this.CustomPerspective(l)},addpoint(){this.threedata.Selectlist.find(i=>i.name=="周边").visible&&(this.threedata.mapdata.map((i,e)=>{i.iconShow=!1;let t=`https://oss.homevista.jp/custom/model${i.icon}`;i.mapPerimeters.map((a,n)=>{const s=document.createElement("div");let o=JSON.stringify(a);s.innerHTML=`
             <div class="into" id="into" >
                <div class="mapimg" style="background:url('${t}') no-repeat;"  onclick='threeMapImg("${""+e+n}",${o})' ></div>
              <div class='arrow_box dataid${""+e+n}'>
                <div class="into-img" >
                   <div  style="background:url('${a.img}?x-oss-process=image/resize,w_750,m_lfit,p_100') no-repeat center center;background-size:cover;"  ></div>
                </div>
                <div class="into-close" onclick="threeclearimg()">
                </div>
                <div class="into-headline">
                ${a.name}
                </div>
                <div class="into-introduce">
                    ${a.address}
                </div>
              </div>
            </div>
          `;const f=new Ue(s);f.name="mapPoint"+e+n;let E=this.xyz(a.longitudeAndLatitude.split(",")[0],a.longitudeAndLatitude.split(",")[1],ae.mapheight);f.scale.set(.25,.25,.25),f.position.set(E.x,E.y,E.z),f.visible=!1,w.add(f),planesel.push(f)})}),this.mapdata=this.threedata.mapdata)},addInitPoint(){let i=new URL("/assets/point-0fa1876a.png",self.location).href;const e=document.createElement("div");e.innerHTML=`
          <div class="into" id="into" >
                <div  style="position: absolute; top: 0; left: 0; width:15px; height:15px; background:url('${i}') no-repeat; background-size:100% 100%;" ></div>
          </div>`,se=new Ue(e);let t=this.xyz(l.lat/1,l.lon/1,l.y);se.scale.set(1,1,1),se.position.set(t.x,t.y,t.z),w.add(se)},xyz(i,e,t){const a=new T;u.ellipsoid.getCartographicToPosition(re.degToRad(i),re.degToRad(e),t,a);const n=u.group.matrixWorld.clone();return a.applyMatrix4(n),a},skyBox(i,e){e.load(ae.sky2,t=>{t.minFilter=ke,t.mapping=Ve,i.background=t,x.initTexture(t),t.dispose()}),e.load(ae.sky1,t=>{t.minFilter=ke,t.mapping=Ve,i.environment=t,x.initTexture(t),t.dispose()})},ckmap(i){let{item:e,i:t,index:a}=i;this.addgoogelmap(e.googelmap);let n=this.xyz(e.longitudeAndLatitude.split(",")[0],e.longitudeAndLatitude.split(",")[1],100);this.gsapTo(n.x,n.y,n.z),window.threeMapImg(""+a+t)},removeline(){ge&&w.remove(ge)},removemodeledges(){X&&(w.remove(X),X=null,this.dataName=""),V&&(w.remove(V),V=null)},addgoogelmap(i){if(!i||i.length==0)return;this.removeline();let e=[];i.map(n=>{const s=this.xyz(n.split(",")[0],n.split(",")[1],ae.mapline);e.push(s.x,s.y,s.z)});const t=new Ct;t.setPositions(e);let a=new be({color:l.Linecolor,linewidth:l.linewidth});ge=new Tt(t,a),w.add(ge)},CustomPerspective(i){let{target:e,position:t}=i;Pe=!1,le.to(M.target,{x:e.x,y:e.y,z:e.z,duration:2,onUpdate:()=>{M.update()},onComplete:()=>{Pe=!0}}),le.to(m.position,{x:t.x,y:t.y,z:t.z,duration:2})},auto(i){this.autoVidoe.show=!0;let e=()=>{this.autoVidoe.name=i[this.autoVidoe.count].name,this.CustomPerspective(i[this.autoVidoe.count]),this.autoVidoe.count++,this.autoVidoe.count==i.length&&(this.autoVidoe.count=0)};e(),this.autoVidoe.time=setInterval(()=>{e()},6e3)},exitAuto(){this.autoVidoe.name="",this.autoVidoe.count=0,this.autoVidoe.show=!1,clearInterval(this.autoVidoe.time)},gsapTo(i,e,t){le.to(M.target,{x:i,y:e,z:t,duration:2,onUpdate:()=>{M.update()}}),le.to(m.position,{x:i<0?i-200:i+200,y:e,z:t<0?t-200:t+200,duration:2})},setHouse(i,e){R&&R.traverse(t=>{t.isMesh&&t.name.split("-")[0].toLowerCase()==i.toLowerCase()&&(t.material.opacity=e?.6:0)})},showHouse(i){R&&(i?R.traverse(e=>{e.isMesh&&(e.material.opacity=.6)}):R.traverse(e=>{e.isMesh&&(e.material.opacity=0)}))}},beforeDestroy(){const i=this.$refs.threeRoot;i&&this._handleThreeMouseDown&&i.removeEventListener("mousedown",this._handleThreeMouseDown),i&&this._handleThreeMouseMove&&i.removeEventListener("mousemove",this._handleThreeMouseMove),i&&this._handleThreeMouseLeave&&i.removeEventListener("mouseleave",this._handleThreeMouseLeave),u&&(w.remove(u.group),u.dispose(),u=null),window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[]}};var ci=function(){var e=this,t=e._self._c;return t("div",{ref:"threeRoot",attrs:{id:"three"}},[Object.keys(e.threedata).length>0?[e.proinit?t("loading",{attrs:{loadingdata:e.threedata.loadingdata,loadnum:e.progress},on:{imageLoad:e.imageLoad}}):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.autoVidoe.show&&e.progress==100,expression:"!autoVidoe.show && progress == 100"}]},[e.cesiumshow?t("sunshadow",{ref:"sunshadow",attrs:{threedata:e.threedata,mapdata:e.mapdata,sunshadowdata:e.threedata.sunshadowdata,maplist:e.maplist,explain:e.explain},on:{ckmap:e.ckmap}}):e._e(),e.init?t("disclaimer",{on:{agree:function(a){e.init=!1}}}):e._e(),t("img",{ref:"compass",attrs:{id:"compass",src:Dt,alt:""}}),Object.keys(e.coordinate).length>0?t("div"):e._e()],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.autoVidoe.show,expression:"autoVidoe.show"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%","z-index":"1"}},[t("img",{staticClass:"vidoeshowBj",attrs:{src:Pt,alt:""}}),t("span",{staticClass:"vidoeshowName"},[e._v(e._s(e.autoVidoe.name))]),t("span",{staticClass:"vidoeshowClose",on:{click:e.exitAuto}})])]:e._e()],2)},hi=[],pi=tt(ui,ci,hi,!1,null,"534c8191",null,null);const mi=pi.exports;const fi={components:{ThreeGis:mi},data(){return{header:null}},created(){this.header="https://oss.homevista.jp/custom/model/csmodel"}};var gi=function(){var e=this,t=e._self._c;return t("div",[t("ThreeGis",{attrs:{header:e.header}})],1)},vi=[],wi=tt(fi,gi,vi,!1,null,"d0d559a0",null,null);const bi=wi.exports;export{bi as default};
