var ye=(i,e,t)=>new Promise((s,a)=>{var n=v=>{try{f(t.next(v))}catch(F){a(F)}},o=v=>{try{f(t.throw(v))}catch(F){a(F)}},f=v=>v.done?s(v.value):Promise.resolve(v.value).then(n,o);f((t=t.apply(i,e)).next())});import{a8 as at,M as ve,l as Se,a9 as Ie,g as ce,aa as we,V as K,W as Re,ab as Ae,N as nt,ac as st,o as Ze,ad as ot,ae as rt,af as lt,ag as dt,ah as ct,ai as ut,G as Je,aj as pt,ak as ht,al as ft,e as T,p as mt,q as gt,r as vt,z as wt,s as xt,t as Be,u as St,v as _t,w as Ne,x as re,L as Fe,y as Ue,A as yt,S as ue,H as bt,f as Ct,P as Et,I as Dt,J as Tt,K as Pt,O as Lt,Q as Mt,X as be,Y as Rt,a6 as At,Z as zt,_ as Oe,$ as Gt,a0 as It,a2 as Bt,a3 as Nt,a4 as je,a5 as Ft,i as ke,m as Ve,a7 as Ut}from"./index-e95a829a.js";import{P as Ot,d as jt,s as kt,a as Vt,L as He,b as Ce,c as We,C as $e,e as Ht,f as Wt,g as le,_ as $t,h as Xt,i as Kt,j as Qt}from"./loading-bj-70c2cdde.js";import{n as et,l as Yt,a as Xe}from"./index-f2458451.js";class oe{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qt=new at(-1,1,1,-1,0,1);class Zt extends Se{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}}const Jt=new Zt;class ze{constructor(e){this._mesh=new ve(Jt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}var de=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(L){L.preventDefault(),s(++i%e.children.length)},!1);function t(L){return e.appendChild(L.dom),L}function s(L){for(var R=0;R<e.children.length;R++)e.children[R].style.display=R===L?"block":"none";i=L}var a=(performance||Date).now(),n=a,o=0,f=t(new de.Panel("FPS","#0ff","#002")),v=t(new de.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var F=t(new de.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:e,addPanel:t,showPanel:s,begin:function(){a=(performance||Date).now()},end:function(){o++;var L=(performance||Date).now();if(v.update(L-a,200),L>=n+1e3&&(f.update(o*1e3/(L-n),100),n=L,o=0,F)){var R=performance.memory;F.update(R.usedJSHeapSize/1048576,R.jsHeapSizeLimit/1048576)}return L},update:function(){a=this.end()},domElement:e,setMode:s}};de.Panel=function(i,e,t){var s=1/0,a=0,n=Math.round,o=n(window.devicePixelRatio||1),f=80*o,v=48*o,F=3*o,L=2*o,R=3*o,I=15*o,B=74*o,k=30*o,V=document.createElement("canvas");V.width=f,V.height=v,V.style.cssText="width:80px;height:48px";var C=V.getContext("2d");return C.font="bold "+9*o+"px Helvetica,Arial,sans-serif",C.textBaseline="top",C.fillStyle=t,C.fillRect(0,0,f,v),C.fillStyle=e,C.fillText(i,F,L),C.fillRect(R,I,B,k),C.fillStyle=t,C.globalAlpha=.9,C.fillRect(R,I,B,k),{dom:V,update:function(r,u){s=Math.min(s,r),a=Math.max(a,r),C.fillStyle=t,C.globalAlpha=1,C.fillRect(0,0,f,I),C.fillStyle=e,C.fillText(n(r)+" "+i+" ("+n(s)+"-"+n(a)+")",F,L),C.drawImage(V,R+o,I,B-o,k,R,I,B-o,k),C.fillRect(R+B-o,I,o,k),C.fillStyle=t,C.globalAlpha=.9,C.fillRect(R+B-o,I,o,n((1-r/u)*k))}}};const ei=de,ti={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xe extends oe{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ce?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=we.clone(e.uniforms),this.material=new ce({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ze(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ke extends oe{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const a=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let o,f;this.inverse?(o=0,f=1):(o=1,f=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,o,4294967295),n.buffers.stencil.setClear(f),n.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,4294967295),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}}class ii extends oe{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ai{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new K);this._width=s.width,this._height=s.height,t=new Re(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ae}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xe(ti),this.copyPass.material.blending=nt,this.clock=new st}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let a=0,n=this.passes.length;a<n;a++){const o=this.passes[a];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),o.needsSwap){if(s){const f=this.renderer.getContext(),v=this.renderer.state.buffers.stencil;v.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),v.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Ke!==void 0&&(o instanceof Ke?s=!0:o instanceof ii&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(s,a),this.renderTarget2.setSize(s,a);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(s,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ni extends oe{constructor(e,t,s=null,a=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=a,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,s){const a=e.autoClear;e.autoClear=!1;let n,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=a}}const si={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class oi extends oe{constructor(){super();const e=si;this.uniforms=we.clone(e.uniforms),this.material=new ot({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ze(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ct?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ut?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Je?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ht&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Qe={name:"ConvolutionShader",defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new K(.001953125,0)},cKernel:{value:[]}},vertexShader:`

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

		}`,buildKernel:function(i){let t=2*Math.ceil(i*3)+1;t>25&&(t=25);const s=(t-1)*.5,a=new Array(t);let n=0;for(let o=0;o<t;++o)a[o]=ri(o-s,i),n+=a[o];for(let o=0;o<t;++o)a[o]/=n;return a}};function ri(i,e){return Math.exp(-(i*i)/(2*e*e))}class X extends oe{constructor(e=1,t=25,s=4){super(),this.renderTargetX=new Re(1,1,{type:Ae}),this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new Re(1,1,{type:Ae}),this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=we.clone(pe.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new ce({name:pe.name,uniforms:this.combineUniforms,vertexShader:pe.vertexShader,fragmentShader:pe.fragmentShader,blending:ft,transparent:!0});const a=Qe;this.convolutionUniforms=we.clone(a.uniforms),this.convolutionUniforms.uImageIncrement.value=X.blurX,this.convolutionUniforms.cKernel.value=Qe.buildKernel(s),this.materialConvolution=new ce({name:a.name,uniforms:this.convolutionUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new ze(null)}render(e,t,s,a,n){n&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=s.texture,this.convolutionUniforms.uImageIncrement.value=X.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=X.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,n&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(s),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const pe={name:"CombineShader",uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

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

		}`};X.blurX=new K(.001953125,0);X.blurY=new K(0,.001953125);const li={name:"LUTShader",uniforms:{lut:{value:null},lutSize:{value:0},tDiffuse:{value:null},intensity:{value:1}},vertexShader:`

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

	`};class di extends xe{set lut(e){const t=this.material;e!==this.lut&&(t.uniforms.lut.value=null,e&&(t.uniforms.lutSize.value=e.image.width,t.uniforms.lut.value=e))}get lut(){return this.material.uniforms.lut.value}set intensity(e){this.material.uniforms.intensity.value=e}get intensity(){return this.material.uniforms.intensity.value}constructor(e={}){super(li),this.lut=e.lut||null,this.intensity="intensity"in e?e.intensity:1}}const ci={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new K(1/1024,1/512)}},vertexShader:`

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
			
		}`},ui={name:"ColorCorrectionShader",uniforms:{tDiffuse:{value:null},powRGB:{value:new T(2,2,2)},mulRGB:{value:new T(1,1,1)},addRGB:{value:new T(0,0,0)}},vertexShader:`

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

		}`};ve.prototype.raycast=wt;Se.prototype.computeBoundsTree=mt;Se.prototype.disposeBoundsTree=gt;let M,S,_,c,H,he,j,h,q,fe,Z,Ee=[];window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[];let pi=new vt,Ye=new T,De=new T,J,Te,me,Pe=!0,ee=!0,te=!0,ie=!0,Le=!0,d,$,W,ae,A,ne,ge,qe,se;const Me={},hi={components:{Peripheralmap:Ot,disclaimer:jt,loading:xt,sunshadow:kt,debugcesium:Vt},props:{header:{type:String,default:""},jsonUrls:{type:Object,default:null}},data(){return{cesiumshow:!1,mapError:"",init:null,proinit:!0,threedata:{},mapdata:[],maplistdata:null,maplist:[],progress:0,autoVidoe:{show:!1,count:0,time:null,name:""},distance:0,explain:"",value1:!1,rimVisible:!1,coordinate:{},dataName:""}},watch:{value1:{handler(i){this.condition=i?1:-1,i?this.rimVisible=!0:this.rimVisible=!1,ee=!i,te=!i,ie=!i},immediate:!0},rimVisible:{handler(i){if(i)hideset.forEach(e=>setOpacityRecursive(e,1)),trees.forEach(e=>setOpacityRecursive(e,1));else{if(this.distance>d.distance4)return;hideset.forEach(e=>setOpacityRecursive(e,0)),trees.forEach(e=>setOpacityRecursive(e,0))}}}},created(){return ye(this,null,function*(){let i=this;const e=this.jsonUrls||{};if(Be.mobile()){window.devicetype.phone=!0;let a=e.phone||this.header+"/cesiunjsonpadiphone.json";yield t(a)}else if(Be.tablet()){window.devicetype.pad=!0;let a=e.pad||this.header+"/cesiunjsonpad.json";yield t(a)}else{window.devicetype.pc=!0;let a=e.pc||this.header+"/cesiunjson.json";yield t(a)}function t(a){return new Promise((n,o)=>ye(this,null,function*(){try{const f=yield St.get(a);f.data=Yt(f.data),i.threedata=f.data,d=f.data.initmap,$=f.data.modelbox,W=f.data.croping,qe=f.data.NewPlanColor,ae=f.data.path;for(let v=0;v<ae.length;v++)Me[`x${v+1}`]=ae[v][0],Me[`y${v+1}`]=ae[v][1],Me[`z${v+1}`]=ae[v][2];n(!0)}catch(f){}}))}let s=!sessionStorage.getItem("agree");this.init=s,this.$nextTick(()=>{if(this._isDestroyed||this._isBeingDestroyed)return;const a=new _t,n=new K;a.firstHitOnly=!0,window.threeMapImg=(r,u)=>{if(threeclearimg(),Te==r)return Te="",this.removeline(),!1;if(u){let g=this.xyz(u.longitudeAndLatitude.split(",")[0],u.longitudeAndLatitude.split(",")[1],$.mapheight);this.gsapTo(g.x,g.y,g.z),this.addgoogelmap(u.googelmap),window.threeMapImg(r);return}let p=document.querySelector(`.dataid${r}`);p.style.visibility="visible",p.style.pointerEvents="all",Te=r},window.threeclearimg=()=>{let r=document.querySelectorAll(".arrow_box");for(let u=0;u<r.length;u++){const p=r[u];p.style.visibility="hidden",p.style.pointerEvents="none"}};function o(){var x,E,y,b;c&&(S.remove(c.group),c.dispose(),c=null),c=Rt({enabled:!!i.threedata.isgis,onError:D=>{i.mapError=D}}),c.visible=!1,c.errorTarget=d.errorTarget,c.lruCache.maxBytesSize=(x=window.devicetype)!=null&&x.pc?c.lruCache.maxBytesSize*2:c.lruCache.maxBytesSize,c.lruCache.minBytesSize=(E=window.devicetype)!=null&&E.pc?c.lruCache.minBytesSize*2:c.lruCache.minBytesSize,c.lruCache.minSize=(y=window.devicetype)!=null&&y.pc?c.lruCache.minSize*2:c.lruCache.minSize,c.lruCache.maxSize=(b=window.devicetype)!=null&&b.pc?c.lruCache.maxSize*2:c.lruCache.maxSize,c.setLatLonToYUp(d.lat*re.DEG2RAD,d.lon*re.DEG2RAD),F(),c.visible=!0;const r=new At(()=>{const D=setInterval(()=>{S.background!==null&&(he.dispose(),_.info.reset(),clearInterval(D))},500)},(D,l,z)=>{const P=l/z*100;i.progress=P.toFixed(0)/1}),u=new zt;u.setDecoderPath("/vendor/three/draco/gltf/");const p=new Oe(c.manager);p.register(()=>new Gt),p.setDRACOLoader(u),he=new It(r).setTranscoderPath("/vendor/three/basis/").detectSupport(_),i.skyBox(S,he,r);const g=new Oe(r);g.setKTX2Loader(he),g.setDRACOLoader(u);let w=[],m=`https://oss.homevista.jp/custom/model/csmodel/${i.$route.params.id}/model.gltf`;g.load(m,D=>{q=D.scene,q.traverse(l=>{var z;l.castShadow=d.modelcastShadow,l.receiveShadow=d.modelreceiveShadow,(z=l==null?void 0:l.material)!=null&&z.transparent&&(l.material.depthWrite=!0,l.renderOrder=1,l.material.ColorSpace=ue),l.name==d.modelHome?A=l:l.name==d.modelTrees?trees.push(l):l.name==d.modelLight?l.traverse(P=>{var Q,Y;P.type!=="Object3D"&&(P.intensity=d.modelLightintensity,P.shadow.mapSize.width=(Q=window.devicetype)!=null&&Q.pc?4096:2048,P.shadow.mapSize.height=(Y=window.devicetype)!=null&&Y.pc?4096:2048,P.shadow.camera.left=-1500,P.shadow.camera.right=1500,P.shadow.camera.top=1500,P.shadow.camera.bottom=-1500,P.shadow.bias=-.005)}):l.name.indexOf(d.modelGIS)!==-1||l.name.indexOf("m-gis")!==-1?hideset.push(l):l.name==d.modelbox&&l.traverse(P=>{P.isMesh&&w.push(P)})}),S.add(D.scene),q.position.set(W.ModelPositionX,W.ModelPositionY,W.ModelPositionZ),q.rotation.set(W.ModelRotationX,W.ModelRotationY,W.ModelRotationZ),Bt(c,q,W,$.terrainAlignment).catch(()=>{i.mapError="在线高度参考暂不可用，已使用本地模型高度。"}),w.map(l=>{l.isMesh&&(l.receiveShadow=!1,l.castShadow=!1,l.geometry.boundsTree=new Nt(l.geometry),l.geometry.computeBoundsTree(),Ee.push(l),l.material.opacity=0,l.material.transparent=!0,l.material.depthWrite=!1,l.material.ColorSpace=ue)}),setTimeout(()=>{if(!A){i.threedata.Selectlist.map(l=>{l.name=="户型"&&(l.visible=!1)});return}A.traverse(l=>{if(!l.isMesh)return;let z=qe.find(_e=>l.name.toLowerCase().includes(_e.type.toLowerCase()));const P=new T,Q=new be,Y=new T;l.matrixWorld.decompose(P,Q,Y),l.material=new je({color:z.color,opacity:0,transparent:!0,depthWrite:!1})})},1e3)},()=>{},D=>{i.$router.push("/404")}),c.manager.addHandler(/\.gltf$/,p),S.add(c.group),c.setResolutionFromRenderer(h,_),c.setCamera(h)}let f=()=>{_=new yt({antialias:!0}),_.localClippingEnabled=!0,_.toneMapping=Je,_.toneMappingExposure=d.toneMappingExposure,_.outputColorSpace=ue,_.outputEncoding=ue,_.physicallyCorrectLights=!0,_.shadowMap.enabled=!0,_.shadowMap.type=bt,_.setPixelRatio(window.devicePixelRatio),document.querySelector("#three").appendChild(_.domElement),H=new Kt,H.setSize(window.innerWidth,window.innerHeight),H.domElement.style.position="absolute",H.domElement.style.top="0px",H.domElement.style.pointerEvents="none",document.querySelector("#three").appendChild(H.domElement),S=new Ct,h=new Et(60,window.innerWidth/window.innerHeight,1,16e5),h.position.set(d.position.x,d.position.y,d.position.z);const r=new Dt(4210752,1);S.add(r);const u=new oi,p=new ni(S,h);j=new ai(_),j.setPixelRatio(window.devicePixelRatio),j.setSize(window.innerWidth,window.innerHeight),j.addPass(new X),j.addPass(new di);const g=new xe(ci);g.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight);const w=new xe(ui);w.uniforms.powRGB.value.set(1.4,1.4,1.4),j.addPass(w),j.addPass(g),j.addPass(u),j.addPass(p);let m=new ve(new Tt(3,32,32),new Pt);m.material.opacity=0,m.material.transparent=!0,m.material.depthWrite=!1,m.material.needsUpdate=!0,S.add(m),M=new Lt(h,_.domElement),M.target.set(d.target.x,d.target.y,d.target.z),M.minDistance=d.controls.minDistance,M.maxDistance=d.controls.maxDistance,M.minPolarAngle=d.controls.minPolarAngle,M.maxPolarAngle=d.controls.maxPolarAngle,M.enableDamping=d.controls.enableDamping,M.enablePan=d.controls.enablePan,M.update(),o(),L(),window.addEventListener("resize",L,!1);let x=d.controls.minHeight,E=d.controls.maxHeight;M.addEventListener("change",()=>{if(i.distance<=d.controls.distance){const y=d.controls.maxMoveSpeed,b=new T().subVectors(h.position,De);b.length()>y&&(b.setLength(y),h.position.copy(De).add(b))}if(h.position.y<x&&(h.position.y=x),h.position.y>E&&(h.position.y=E),q&&Ee.length>0&&Pe){const y=new T;h.getWorldPosition(y),m.position.copy(y),m.lookAt(h.position);const b=Ee[0];m.updateMatrixWorld();let D=pi.copy(b.matrixWorld).invert().multiply(m.matrixWorld);b.geometry.boundsTree.intersectsGeometry(m.geometry,D)?h.position.copy(Ye):Ye.copy(h.position)}De.copy(h.position),M.target.y=35}),this.addpoint(),d.initPoint&&this.addInitPoint(),this.cesiumshow=!0};v();function v(){J=new ei,J.showPanel(0),document.body.appendChild(J.dom)}function F(){var g;let r=d.clipping;r=r.map(w=>i.xyz(w[0],w[1],0));let u=[];new Ft;function p(w){const m=[];for(let x=0;x<w.length-1;x++){const E=new T().subVectors(w[x],w[x+1]),y=new T(E.z,0,-E.x).normalize();w[x].dot(y);const b=new Ut().setFromNormalAndCoplanarPoint(y,w[x]);m.push(b)}return m}u=p(r),(g=c.getPluginByName("CESIUM_ION_IMAGERY"))==null||g.setClippingPlanes(u),c.addEventListener("load-model",w=>{w.scene.traverse(m=>{m.isMesh&&(m.material.clippingPlanes=u,m.material.clipIntersection=!0,m.material.clipShadows=!0,m.material.alphaToCoverage=!0)})})}function L(){h.aspect=window.innerWidth/window.innerHeight,_.setSize(window.innerWidth,window.innerHeight),H.setSize(window.innerWidth,window.innerHeight),h.updateProjectionMatrix(),j.setSize(window.innerWidth,window.innerHeight),_.setPixelRatio(window.devicePixelRatio)}function R(r,u,p=.5){le.to(r,{opacity:u,duration:p,ease:"power1.inOut",onStart:()=>{r.transparent=!0,r.visible=!0},onComplete:()=>{r.transparent=!0,u==0&&(r.visible=!1)}})}function I(r,u){r.isMesh?R(r.material,u):r.children.forEach(p=>I(p,u))}window.animateOpacity=R,window.setOpacityRecursive=I,i.condition=-1;function B(r,u=1){c.group&&(c.group.visible=r,i.rimVisible||(hideset.forEach(p=>I(p,u)),trees.forEach(p=>I(p,u))))}window.updateVisibility=B;function k(){if(requestAnimationFrame(k),!c)return;M.update(),c.setResolutionFromRenderer(h,_),c.setCamera(h),h.updateMatrixWorld(),c.update(),planesel.forEach(w=>{w.lookAt(h.position)}),se&&se.lookAt(h.position);let r=new T(-h.position.x,0,-h.position.z).normalize(),u=Math.atan2(-r.x,-r.z);i.$refs.compass&&(i.$refs.compass.style.transform="rotateZ("+(re.radToDeg(u)+90)+"deg)");const p=new T;h.getWorldPosition(p);const g=p.distanceTo(new T(0,0,0));i.distance=g,i.condition==-1?g<=d.distance1&&ee?(ee=!1,te=!0,ie=!0,B(!1,0)):g>d.distance2&&g<=d.distance3&&te?(te=!1,ee=!0,ie=!0,B(!1,1)):g>d.distance4&&ie&&(ie=!1,te=!0,ee=!0,B(!0,1)):Le&&(B(!0,1),Le=!1,setTimeout(()=>{Le=!0},500)),g<=d.columndistance&&Z&&Z.uniforms&&(g-100>=0&&(Z.uniforms.u_height.value=(g-100)/2),Z.uniforms.u_opacity.value=g/1e3),i.coordinate={camera:{x:h.position.x,y:h.position.y,z:h.position.z},target:{x:M.target.x,y:M.target.y,z:M.target.z},distance:g,devicetype:window.devicetype},V(),j.render(),H.render(S,h),J==null||J.update()}function V(){if(c){const r=c.group.matrixWorld.clone().invert(),u=h.position.clone().applyMatrix4(r),p={};Mt.getPositionToCartographic(u,p),(c==null?void 0:c.getAttributions().length)>0&&(i.explain=Qt(c.getAttributions()))}}function C(){fe&&S.remove(fe);const r=({height:p=10,color:g=d.columncolor,opacity:w=.5,speed:m=5})=>{const x=`
          uniform vec3 u_color;

          uniform float time;
          uniform float u_height;
          varying float v_opacity;

          void main() {
              vec3 vPosition = position;
              v_opacity = mix(1.0, 0.0, position.y / u_height * 1.0) * (1.0 + sin(time) * 0.5);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1);
          }
       `,E=`
          uniform vec3 u_color;
          uniform float u_opacity;
          varying float v_opacity;
          void main() {
              gl_FragColor = vec4(u_color, v_opacity * u_opacity);
          }
        `;return new ce({uniforms:{u_height:{value:p},u_opacity:{value:w},u_color:{value:new Ze(g)},time:{value:0},speed:{value:m}},transparent:!0,depthWrite:!1,depthTest:!1,side:ke,vertexShader:x,fragmentShader:E})},u=({height:p=10,path:g=[],wallMeshmaterial:w,expand:m=!0})=>{let x=null;m?x=g.reduce((G,[N,U,O])=>G.concat([[[N,U,O],[N,U+p,O]]]),[]):x=g;const y=x.reduce((G,N,U)=>U===x.length-1?G:G.concat([[N,x[U+1]]]),[]).reduce((G,N)=>{const[[U,O],[it,Ge]]=N;return G.concat(...O,...U,...Ge,...U,...it,...Ge)},[]),b=new Se,D=new Float32Array(y);b.setAttribute("position",new Ve(D,3));const z=new Array(y.length/3/6).fill(0).map((G,N)=>y.slice(N*3*6,(N+1)*3*6)).map((G,N)=>new Array(G.length/3).fill(0).map((U,O)=>G.slice(O*3,(O+1)*3)));b.computeBoundingBox();const{min:P,max:Q}=b.boundingBox,Y=Q.x-P.x,_e=[].concat(...z.map(G=>{const N=G[0],U=G[5],O=new T(...N).distanceTo(new T(...U))/(Y/10);return[0,1,0,0,O,1,0,0,O,0,O,1]}));b.setAttribute("uv",new Ve(new Float32Array(_e),2));const tt=w||new je({color:65535,side:ke});return new ve(b,tt)};Z=r({height:100,speed:5}),fe=u({path:ae,wallMeshmaterial:Z,height:500}),S.add(fe)}f(),k(),d.columnvisibility&&C(),document.querySelector("#three").addEventListener("mousedown",r=>{if(r.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;r.preventDefault(),ne&&(S.remove(ne),this.dataName=""),n.x=r.clientX/_.domElement.clientWidth*2-1,n.y=-(r.clientY/_.domElement.clientHeight)*2+1,a.setFromCamera(n,h);var u=a.intersectObjects(S.children,!0);if(u.length>0&&(A!=null&&A.children)){let m=0;for(let x=0;x<u.length;x++){if(m)return!1;const E=u[x];let y=A.children.find(b=>{if(b.name==E.object.name)return b});if(y&&i.$refs.sunshadow.houses){this.dataName=y.name,E.object.updateMatrix(),E.object.updateMatrixWorld(!0);const b=new T,D=new be,l=new T;E.object.matrixWorld.decompose(b,D,l);const z=new Ne(E.object.geometry);var p=new He().fromEdgesGeometry(z),g=new Ce({color:d.EdgeLinecolor,linewidth:d.Edgelinewidth}),w=new We(p,g);w.position.copy(b),w.rotation.copy(D),w.scale.copy(l),S.add(w),ne=w,m++}}}}),document.querySelector("#three").addEventListener("mousemove",r=>{if(r.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;r.preventDefault(),ge&&S.remove(ge);let u={};u.x=r.clientX/_.domElement.clientWidth*2-1,u.y=-(r.clientY/_.domElement.clientHeight)*2+1,a.setFromCamera(u,h);var p=a.intersectObjects(S.children,!0);if(p.length>0&&(A!=null&&A.children)){let x=0;for(let E=0;E<p.length;E++){if(x)return!1;const y=p[E];if(A.children.find(D=>{if(D.name==y.object.name)return D})&&i.$refs.sunshadow.houses){y.object.updateMatrix(),y.object.updateMatrixWorld(!0);const D=new T,l=new be,z=new T;y.object.matrixWorld.decompose(D,l,z);const P=new Ne(y.object.geometry);var g=new He().fromEdgesGeometry(P),w=new Ce({color:d.EdgeLinecolor,linewidth:d.Edgelinewidth,transparent:!0,opacity:.5}),m=new We(g,w);m.position.copy(D),m.rotation.copy(l),m.scale.copy(z),S.add(m),ge=m,x++}}}})})})},methods:{imageLoad(){this.$store.commit("global/SET_LOADING",!1)},setmap(){this.condition=this.value1?1:-1,this.condition==-1&&(ee=!0,te=!0,ie=!0)},initmap(){this.CustomPerspective(d)},addpoint(){this.threedata.Selectlist.find(i=>i.name=="周边").visible&&(this.threedata.mapdata.map((i,e)=>{i.iconShow=!1;let t=Xe(`https://oss.homevista.jp/custom/model${i.icon}`);i.mapPerimeters.map((s,a)=>{const n=document.createElement("div");let o=JSON.stringify(s);n.innerHTML=`
             <div class="into" id="into" >
                <div class="mapimg" style="background:url('${t}') no-repeat;"  onclick='threeMapImg("${""+e+a}",${o})' ></div>
              <div class='arrow_box dataid${""+e+a}'>
                <div class="into-img" >
                   <div  style="background:url('${Xe(s.img)}') no-repeat center center;background-size:cover;"  ></div>
                </div>
                <div class="into-close" onclick="threeclearimg()">
                </div>
                <div class="into-headline">
                ${s.name}
                </div>
                <div class="into-introduce">
                    ${s.address}
                </div>
              </div>
            </div>
          `;const f=new $e(n);f.name="mapPoint"+e+a;let v=this.xyz(s.longitudeAndLatitude.split(",")[0],s.longitudeAndLatitude.split(",")[1],$.mapheight);f.scale.set(.25,.25,.25),f.position.set(v.x,v.y,v.z),f.visible=!1,S.add(f),planesel.push(f)})}),this.mapdata=this.threedata.mapdata)},addInitPoint(){let i=new URL("/assets/point-0fa1876a.png",self.location).href;const e=document.createElement("div");e.innerHTML=`
          <div class="into" id="into" >
                <div  style="position: absolute; top: 0; left: 0; width:15px; height:15px; background:url('${i}') no-repeat; background-size:100% 100%;" ></div>
          </div>`,se=new $e(e);let t=this.xyz(d.lat/1,d.lon/1,d.y);se.scale.set(1,1,1),se.position.set(t.x,t.y,t.z),S.add(se)},xyz(i,e,t){const s=new T;c.ellipsoid.getCartographicToPosition(re.degToRad(i),re.degToRad(e),t,s);const a=c.group.matrixWorld.clone();return s.applyMatrix4(a),s},skyBox(i,e){e.load($.sky2,t=>{t.minFilter=Fe,t.mapping=Ue,i.background=t,_.initTexture(t),t.dispose()}),e.load($.sky1,t=>{t.minFilter=Fe,t.mapping=Ue,i.environment=t,_.initTexture(t),t.dispose()})},ckmap(i){let{item:e,i:t,index:s}=i;this.addgoogelmap(e.googelmap);let a=this.xyz(e.longitudeAndLatitude.split(",")[0],e.longitudeAndLatitude.split(",")[1],100);this.gsapTo(a.x,a.y,a.z),window.threeMapImg(""+s+t)},removeline(){me&&S.remove(me)},removemodeledges(){ne&&(S.remove(ne),this.dataName=""),ne&&S.remove(ge)},addgoogelmap(i){if(!i||i.length==0)return;this.removeline();let e=[];i.map(a=>{const n=this.xyz(a.split(",")[0],a.split(",")[1],$.mapline);e.push(n.x,n.y,n.z)});const t=new Ht;t.setPositions(e);let s=new Ce({color:d.Linecolor,linewidth:d.linewidth});me=new Wt(t,s),S.add(me)},CustomPerspective(i){let{target:e,position:t}=i;Pe=!1,le.to(M.target,{x:e.x,y:e.y,z:e.z,duration:2,onUpdate:()=>{M.update()},onComplete:()=>{Pe=!0}}),le.to(h.position,{x:t.x,y:t.y,z:t.z,duration:2})},auto(i){this.autoVidoe.show=!0;let e=()=>{this.autoVidoe.name=i[this.autoVidoe.count].name,this.CustomPerspective(i[this.autoVidoe.count]),this.autoVidoe.count++,this.autoVidoe.count==i.length&&(this.autoVidoe.count=0)};e(),this.autoVidoe.time=setInterval(()=>{e()},6e3)},exitAuto(){this.autoVidoe.name="",this.autoVidoe.count=0,this.autoVidoe.show=!1,clearInterval(this.autoVidoe.time)},gsapTo(i,e,t){le.to(M.target,{x:i,y:e,z:t,duration:2,onUpdate:()=>{M.update()}}),le.to(h.position,{x:i<0?i-200:i+200,y:e,z:t<0?t-200:t+200,duration:2})},setHouse(i,e){A.traverse(t=>{t.isMesh&&t.name.split("-")[0].toLowerCase()==i.toLowerCase()&&(t.material.opacity=e?.6:0)})},showHouse(i){i?A.traverse(e=>{e.isMesh&&(e.material.opacity=.6)}):A.traverse(e=>{e.isMesh&&(e.material.opacity=0)})}},beforeDestroy(){c&&(S.remove(c.group),c.dispose(),c=null),window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[]}};var fi=function(){var e=this,t=e._self._c;return Object.keys(e.threedata).length>0?t("div",{attrs:{id:"three"}},[e.mapError?t("div",{staticClass:"cesium-map-error",attrs:{role:"alert"}},[e._v(e._s(e.mapError))]):e._e(),e.proinit?t("loading",{attrs:{loadingdata:e.threedata.loadingdata,loadnum:e.progress},on:{imageLoad:e.imageLoad}}):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.autoVidoe.show&&e.progress==100,expression:"!autoVidoe.show && progress == 100"}]},[e.cesiumshow?t("sunshadow",{ref:"sunshadow",attrs:{threedata:e.threedata,mapdata:e.mapdata,sunshadowdata:e.threedata.sunshadowdata,maplist:e.maplist,explain:e.explain},on:{ckmap:e.ckmap}}):e._e(),e.init?t("disclaimer",{on:{agree:function(s){e.init=!1}}}):e._e(),t("img",{ref:"compass",attrs:{id:"compass",src:$t,alt:""}}),Object.keys(e.coordinate).length>0?t("div"):e._e()],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.autoVidoe.show,expression:"autoVidoe.show"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%","z-index":"1"}},[t("img",{staticClass:"vidoeshowBj",attrs:{src:Xt,alt:""}}),t("span",{staticClass:"vidoeshowName"},[e._v(e._s(e.autoVidoe.name))]),t("span",{staticClass:"vidoeshowClose",on:{click:e.exitAuto}})])],1):e._e()},mi=[],gi=et(hi,fi,mi,!1,null,"c8994fe1",null,null);const vi=gi.exports,wi="/assets/cesiunjson-8f8408af.json",xi="/assets/cesiunjsonpad-f6f3d0b8.json",Si="/assets/cesiunjsonpadiphone-adffcd36.json";const _i={components:{ThreeGis:vi},data(){return{header:null,jsonUrls:{pc:wi,pad:xi,phone:Si}}},created(){this.header="https://oss.homevista.jp/custom/model/csmodel"}};var yi=function(){var e=this,t=e._self._c;return t("div",[t("ThreeGis",{attrs:{header:e.header,"json-urls":e.jsonUrls}})],1)},bi=[],Ci=et(_i,yi,bi,!1,null,"bbf260a0",null,null);const Li=Ci.exports;export{Li as default};
