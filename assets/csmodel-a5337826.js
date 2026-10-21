var _e=(i,e,t)=>new Promise((a,s)=>{var r=b=>{try{f(t.next(b))}catch(B){s(B)}},o=b=>{try{f(t.throw(b))}catch(B){s(B)}},f=b=>b.done?a(b.value):Promise.resolve(b.value).then(r,o);f((t=t.apply(i,e)).next())});import{a8 as it,M as ge,l as xe,a9 as Ge,g as de,aa as ve,V as X,W as Me,ab as Re,N as at,ac as nt,o as qe,ad as st,ae as ot,af as rt,ag as lt,ah as dt,ai as ct,G as Ze,aj as ut,ak as pt,al as ht,e as D,p as ft,q as mt,r as gt,z as vt,s as wt,t as Be,u as xt,v as St,w as Ie,x as oe,L as Ne,y as Fe,A as _t,S as ce,H as yt,f as bt,P as Ct,I as Et,J as Dt,K as Tt,O as Pt,Q as Lt,X as ye,Y as Mt,a6 as Rt,Z as At,_ as Ue,$ as zt,a0 as Gt,a2 as Bt,a3 as It,a4 as Oe,a5 as Nt,i as je,m as ke,a7 as Ft}from"./index-d7b6fcce.js";import{P as Ut,s as Ot,d as jt,L as Ve,a as be,b as He,C as We,c as kt,e as Vt,g as re,_ as Ht,f as Wt,h as $t,i as Xt}from"./loading-bj-fba8b181.js";import{n as Je,l as Kt,a as $e}from"./index-060738a6.js";class se{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Qt=new it(-1,1,1,-1,0,1);class Yt extends xe{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}const qt=new Yt;class Ae{constructor(e){this._mesh=new ge(qt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}var le=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(P){P.preventDefault(),a(++i%e.children.length)},!1);function t(P){return e.appendChild(P.dom),P}function a(P){for(var L=0;L<e.children.length;L++)e.children[L].style.display=L===P?"block":"none";i=P}var s=(performance||Date).now(),r=s,o=0,f=t(new le.Panel("FPS","#0ff","#002")),b=t(new le.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var B=t(new le.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:e,addPanel:t,showPanel:a,begin:function(){s=(performance||Date).now()},end:function(){o++;var P=(performance||Date).now();if(b.update(P-s,200),P>=r+1e3&&(f.update(o*1e3/(P-r),100),r=P,o=0,B)){var L=performance.memory;B.update(L.usedJSHeapSize/1048576,L.jsHeapSizeLimit/1048576)}return P},update:function(){s=this.end()},domElement:e,setMode:a}};le.Panel=function(i,e,t){var a=1/0,s=0,r=Math.round,o=r(window.devicePixelRatio||1),f=80*o,b=48*o,B=3*o,P=2*o,L=3*o,A=15*o,O=74*o,j=30*o,k=document.createElement("canvas");k.width=f,k.height=b,k.style.cssText="width:80px;height:48px";var n=k.getContext("2d");return n.font="bold "+9*o+"px Helvetica,Arial,sans-serif",n.textBaseline="top",n.fillStyle=t,n.fillRect(0,0,f,b),n.fillStyle=e,n.fillText(i,B,P),n.fillRect(L,A,O,j),n.fillStyle=t,n.globalAlpha=.9,n.fillRect(L,A,O,j),{dom:k,update:function(u,p){a=Math.min(a,u),s=Math.max(s,u),n.fillStyle=t,n.globalAlpha=1,n.fillRect(0,0,f,A),n.fillStyle=e,n.fillText(r(u)+" "+i+" ("+r(a)+"-"+r(s)+")",B,P),n.drawImage(k,L+o,A,O-o,j,L,A,O-o,j),n.fillRect(L+O-o,A,o,j),n.fillStyle=t,n.globalAlpha=.9,n.fillRect(L+O-o,A,o,r((1-u/p)*j))}}};const Zt=le,Jt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class we extends se{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof de?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ve.clone(e.uniforms),this.material=new de({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ae(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xe extends se{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,f;this.inverse?(o=0,f=1):(o=1,f=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(f),r.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ei extends se{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ti{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const a=e.getSize(new X);this._width=a.width,this._height=a.height,t=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Re}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new we(Jt),this.copyPass.material.blending=at,this.clock=new nt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let a=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),o.needsSwap){if(a){const f=this.renderer.getContext(),b=this.renderer.state.buffers.stencil;b.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),b.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Xe!==void 0&&(o instanceof Xe?a=!0:o instanceof ei&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const a=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(a,s),this.renderTarget2.setSize(a,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(a,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ii extends se{constructor(e,t,a=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,a){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const ai={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ni extends se{constructor(){super();const e=ai;this.uniforms=ve.clone(e.uniforms),this.material=new st({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ae(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ct?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ze?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ut?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pt&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ke={name:"ConvolutionShader",defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new X(.001953125,0)},cKernel:{value:[]}},vertexShader:`

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

		}`,buildKernel:function(i){let t=2*Math.ceil(i*3)+1;t>25&&(t=25);const a=(t-1)*.5,s=new Array(t);let r=0;for(let o=0;o<t;++o)s[o]=si(o-a,i),r+=s[o];for(let o=0;o<t;++o)s[o]/=r;return s}};function si(i,e){return Math.exp(-(i*i)/(2*e*e))}class $ extends se{constructor(e=1,t=25,a=4){super(),this.renderTargetX=new Me(1,1,{type:Re}),this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new Me(1,1,{type:Re}),this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=ve.clone(ue.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new de({name:ue.name,uniforms:this.combineUniforms,vertexShader:ue.vertexShader,fragmentShader:ue.fragmentShader,blending:ht,transparent:!0});const s=Ke;this.convolutionUniforms=ve.clone(s.uniforms),this.convolutionUniforms.uImageIncrement.value=$.blurX,this.convolutionUniforms.cKernel.value=Ke.buildKernel(a),this.materialConvolution=new de({name:s.name,uniforms:this.convolutionUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new Ae(null)}render(e,t,a,s,r){r&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=a.texture,this.convolutionUniforms.uImageIncrement.value=$.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=$.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(a),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const ue={name:"CombineShader",uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

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

		}`};$.blurX=new X(.001953125,0);$.blurY=new X(0,.001953125);const oi={name:"LUTShader",uniforms:{lut:{value:null},lutSize:{value:0},tDiffuse:{value:null},intensity:{value:1}},vertexShader:`

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

	`};class ri extends we{set lut(e){const t=this.material;e!==this.lut&&(t.uniforms.lut.value=null,e&&(t.uniforms.lutSize.value=e.image.width,t.uniforms.lut.value=e))}get lut(){return this.material.uniforms.lut.value}set intensity(e){this.material.uniforms.intensity.value=e}get intensity(){return this.material.uniforms.intensity.value}constructor(e={}){super(oi),this.lut=e.lut||null,this.intensity="intensity"in e?e.intensity:1}}const li={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new X(1/1024,1/512)}},vertexShader:`

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
			
		}`},di={name:"ColorCorrectionShader",uniforms:{tDiffuse:{value:null},powRGB:{value:new D(2,2,2)},mulRGB:{value:new D(1,1,1)},addRGB:{value:new D(0,0,0)}},vertexShader:`

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

		}`};ge.prototype.raycast=vt;xe.prototype.computeBoundsTree=ft;xe.prototype.disposeBoundsTree=mt;let M,x,S,c,V,pe,U,h,Y,he,q,Ce=[];window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[];let ci=new gt,Qe=new D,Ee=new D,Z,De,fe,Te=!0,J=!0,ee=!0,te=!0,Pe=!0,d,W,H,ie,R,ae,me,Ye,ne;const Le={},ui={components:{Peripheralmap:Ut,loading:wt,sunshadow:Ot,debugcesium:jt},props:{header:{type:String,default:""},jsonUrls:{type:Object,default:null}},data(){return{cesiumshow:!1,mapError:"",proinit:!0,threedata:{},mapdata:[],maplistdata:null,maplist:[],progress:0,autoVidoe:{show:!1,count:0,time:null,name:""},distance:0,explain:"",value1:!1,rimVisible:!1,coordinate:{},dataName:""}},watch:{value1:{handler(i){this.condition=i?1:-1,i?this.rimVisible=!0:this.rimVisible=!1,J=!i,ee=!i,te=!i},immediate:!0},rimVisible:{handler(i){if(i)hideset.forEach(e=>setOpacityRecursive(e,1)),trees.forEach(e=>setOpacityRecursive(e,1));else{if(this.distance>d.distance4)return;hideset.forEach(e=>setOpacityRecursive(e,0)),trees.forEach(e=>setOpacityRecursive(e,0))}}}},created(){return _e(this,null,function*(){let i=this;const e=this.jsonUrls||{};if(Be.mobile()){window.devicetype.phone=!0;let a=e.phone||this.header+"/cesiunjsonpadiphone.json";yield t(a)}else if(Be.tablet()){window.devicetype.pad=!0;let a=e.pad||this.header+"/cesiunjsonpad.json";yield t(a)}else{window.devicetype.pc=!0;let a=e.pc||this.header+"/cesiunjson.json";yield t(a)}function t(a){return new Promise((s,r)=>_e(this,null,function*(){try{const o=yield xt.get(a);o.data=Kt(o.data),i.threedata=o.data,d=o.data.initmap,W=o.data.modelbox,H=o.data.croping,Ye=o.data.NewPlanColor,ie=o.data.path;for(let f=0;f<ie.length;f++)Le[`x${f+1}`]=ie[f][0],Le[`y${f+1}`]=ie[f][1],Le[`z${f+1}`]=ie[f][2];s(!0)}catch(o){}}))}this.$nextTick(()=>{if(this._isDestroyed||this._isBeingDestroyed)return;const a=new St,s=new X;a.firstHitOnly=!0,window.threeMapImg=(n,u)=>{if(threeclearimg(),De==n)return De="",this.removeline(),!1;if(u){let g=this.xyz(u.longitudeAndLatitude.split(",")[0],u.longitudeAndLatitude.split(",")[1],W.mapheight);this.gsapTo(g.x,g.y,g.z),this.addgoogelmap(u.googelmap),window.threeMapImg(n);return}let p=document.querySelector(`.dataid${n}`);p.style.visibility="visible",p.style.pointerEvents="all",De=n},window.threeclearimg=()=>{let n=document.querySelectorAll(".arrow_box");for(let u=0;u<n.length;u++){const p=n[u];p.style.visibility="hidden",p.style.pointerEvents="none"}};function r(){var w,C,_,y;c&&(x.remove(c.group),c.dispose(),c=null),c=Mt({enabled:!!i.threedata.isgis,onError:E=>{i.mapError=E}}),c.visible=!1,c.errorTarget=d.errorTarget,c.lruCache.maxBytesSize=(w=window.devicetype)!=null&&w.pc?c.lruCache.maxBytesSize*2:c.lruCache.maxBytesSize,c.lruCache.minBytesSize=(C=window.devicetype)!=null&&C.pc?c.lruCache.minBytesSize*2:c.lruCache.minBytesSize,c.lruCache.minSize=(_=window.devicetype)!=null&&_.pc?c.lruCache.minSize*2:c.lruCache.minSize,c.lruCache.maxSize=(y=window.devicetype)!=null&&y.pc?c.lruCache.maxSize*2:c.lruCache.maxSize,c.setLatLonToYUp(d.lat*oe.DEG2RAD,d.lon*oe.DEG2RAD),b(),c.visible=!0;const n=new Rt(()=>{const E=setInterval(()=>{x.background!==null&&(pe.dispose(),S.info.reset(),clearInterval(E))},500)},(E,l,z)=>{const T=l/z*100;i.progress=T.toFixed(0)/1}),u=new At;u.setDecoderPath("/vendor/three/draco/gltf/");const p=new Ue(c.manager);p.register(()=>new zt),p.setDRACOLoader(u),pe=new Gt(n).setTranscoderPath("/vendor/three/basis/").detectSupport(S),i.skyBox(x,pe,n);const g=new Ue(n);g.setKTX2Loader(pe),g.setDRACOLoader(u);let v=[],m=`https://oss.homevista.jp/custom/model/csmodel/${i.$route.params.id}/model.gltf`;g.load(m,E=>{Y=E.scene,Y.traverse(l=>{var z;l.castShadow=d.modelcastShadow,l.receiveShadow=d.modelreceiveShadow,(z=l==null?void 0:l.material)!=null&&z.transparent&&(l.material.depthWrite=!0,l.renderOrder=1,l.material.ColorSpace=ce),l.name==d.modelHome?R=l:l.name==d.modelTrees?trees.push(l):l.name==d.modelLight?l.traverse(T=>{var K,Q;T.type!=="Object3D"&&(T.intensity=d.modelLightintensity,T.shadow.mapSize.width=(K=window.devicetype)!=null&&K.pc?4096:2048,T.shadow.mapSize.height=(Q=window.devicetype)!=null&&Q.pc?4096:2048,T.shadow.camera.left=-1500,T.shadow.camera.right=1500,T.shadow.camera.top=1500,T.shadow.camera.bottom=-1500,T.shadow.bias=-.005)}):l.name.indexOf(d.modelGIS)!==-1||l.name.indexOf("m-gis")!==-1?hideset.push(l):l.name==d.modelbox&&l.traverse(T=>{T.isMesh&&v.push(T)})}),x.add(E.scene),Y.position.set(H.ModelPositionX,H.ModelPositionY,H.ModelPositionZ),Y.rotation.set(H.ModelRotationX,H.ModelRotationY,H.ModelRotationZ),Bt(c,Y,H,W.terrainAlignment).catch(()=>{i.mapError="在线高度参考暂不可用，已使用本地模型高度。"}),v.map(l=>{l.isMesh&&(l.receiveShadow=!1,l.castShadow=!1,l.geometry.boundsTree=new It(l.geometry),l.geometry.computeBoundsTree(),Ce.push(l),l.material.opacity=0,l.material.transparent=!0,l.material.depthWrite=!1,l.material.ColorSpace=ce)}),setTimeout(()=>{if(!R){i.threedata.Selectlist.map(l=>{l.name=="户型"&&(l.visible=!1)});return}R.traverse(l=>{if(!l.isMesh)return;let z=Ye.find(Se=>l.name.toLowerCase().includes(Se.type.toLowerCase()));const T=new D,K=new ye,Q=new D;l.matrixWorld.decompose(T,K,Q),l.material=new Oe({color:z.color,opacity:0,transparent:!0,depthWrite:!1})})},1e3)},()=>{},E=>{i.$router.push("/404")}),c.manager.addHandler(/\.gltf$/,p),x.add(c.group),c.setResolutionFromRenderer(h,S),c.setCamera(h)}let o=()=>{S=new _t({antialias:!0}),S.localClippingEnabled=!0,S.toneMapping=Ze,S.toneMappingExposure=d.toneMappingExposure,S.outputColorSpace=ce,S.outputEncoding=ce,S.physicallyCorrectLights=!0,S.shadowMap.enabled=!0,S.shadowMap.type=yt,S.setPixelRatio(window.devicePixelRatio),document.querySelector("#three").appendChild(S.domElement),V=new $t,V.setSize(window.innerWidth,window.innerHeight),V.domElement.style.position="absolute",V.domElement.style.top="0px",V.domElement.style.pointerEvents="none",document.querySelector("#three").appendChild(V.domElement),x=new bt,h=new Ct(60,window.innerWidth/window.innerHeight,1,16e5),h.position.set(d.position.x,d.position.y,d.position.z);const n=new Et(4210752,1);x.add(n);const u=new ni,p=new ii(x,h);U=new ti(S),U.setPixelRatio(window.devicePixelRatio),U.setSize(window.innerWidth,window.innerHeight),U.addPass(new $),U.addPass(new ri);const g=new we(li);g.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight);const v=new we(di);v.uniforms.powRGB.value.set(1.4,1.4,1.4),U.addPass(v),U.addPass(g),U.addPass(u),U.addPass(p);let m=new ge(new Dt(3,32,32),new Tt);m.material.opacity=0,m.material.transparent=!0,m.material.depthWrite=!1,m.material.needsUpdate=!0,x.add(m),M=new Pt(h,S.domElement),M.target.set(d.target.x,d.target.y,d.target.z),M.minDistance=d.controls.minDistance,M.maxDistance=d.controls.maxDistance,M.minPolarAngle=d.controls.minPolarAngle,M.maxPolarAngle=d.controls.maxPolarAngle,M.enableDamping=d.controls.enableDamping,M.enablePan=d.controls.enablePan,M.update(),r(),B(),window.addEventListener("resize",B,!1);let w=d.controls.minHeight,C=d.controls.maxHeight;M.addEventListener("change",()=>{if(i.distance<=d.controls.distance){const _=d.controls.maxMoveSpeed,y=new D().subVectors(h.position,Ee);y.length()>_&&(y.setLength(_),h.position.copy(Ee).add(y))}if(h.position.y<w&&(h.position.y=w),h.position.y>C&&(h.position.y=C),Y&&Ce.length>0&&Te){const _=new D;h.getWorldPosition(_),m.position.copy(_),m.lookAt(h.position);const y=Ce[0];m.updateMatrixWorld();let E=ci.copy(y.matrixWorld).invert().multiply(m.matrixWorld);y.geometry.boundsTree.intersectsGeometry(m.geometry,E)?h.position.copy(Qe):Qe.copy(h.position)}Ee.copy(h.position),M.target.y=35}),this.addpoint(),d.initPoint&&this.addInitPoint(),this.cesiumshow=!0};f();function f(){Z=new Zt,Z.showPanel(0),document.body.appendChild(Z.dom)}function b(){var g;let n=d.clipping;n=n.map(v=>i.xyz(v[0],v[1],0));let u=[];new Nt;function p(v){const m=[];for(let w=0;w<v.length-1;w++){const C=new D().subVectors(v[w],v[w+1]),_=new D(C.z,0,-C.x).normalize();v[w].dot(_);const y=new Ft().setFromNormalAndCoplanarPoint(_,v[w]);m.push(y)}return m}u=p(n),(g=c.getPluginByName("CESIUM_ION_IMAGERY"))==null||g.setClippingPlanes(u),c.addEventListener("load-model",v=>{v.scene.traverse(m=>{m.isMesh&&(m.material.clippingPlanes=u,m.material.clipIntersection=!0,m.material.clipShadows=!0,m.material.alphaToCoverage=!0)})})}function B(){h.aspect=window.innerWidth/window.innerHeight,S.setSize(window.innerWidth,window.innerHeight),V.setSize(window.innerWidth,window.innerHeight),h.updateProjectionMatrix(),U.setSize(window.innerWidth,window.innerHeight),S.setPixelRatio(window.devicePixelRatio)}function P(n,u,p=.5){re.to(n,{opacity:u,duration:p,ease:"power1.inOut",onStart:()=>{n.transparent=!0,n.visible=!0},onComplete:()=>{n.transparent=!0,u==0&&(n.visible=!1)}})}function L(n,u){n.isMesh?P(n.material,u):n.children.forEach(p=>L(p,u))}window.animateOpacity=P,window.setOpacityRecursive=L,i.condition=-1;function A(n,u=1){c.group&&(c.group.visible=n,i.rimVisible||(hideset.forEach(p=>L(p,u)),trees.forEach(p=>L(p,u))))}window.updateVisibility=A;function O(){if(requestAnimationFrame(O),!c)return;M.update(),c.setResolutionFromRenderer(h,S),c.setCamera(h),h.updateMatrixWorld(),c.update(),planesel.forEach(v=>{v.lookAt(h.position)}),ne&&ne.lookAt(h.position);let n=new D(-h.position.x,0,-h.position.z).normalize(),u=Math.atan2(-n.x,-n.z);i.$refs.compass&&(i.$refs.compass.style.transform="rotateZ("+(oe.radToDeg(u)+90)+"deg)");const p=new D;h.getWorldPosition(p);const g=p.distanceTo(new D(0,0,0));i.distance=g,i.condition==-1?g<=d.distance1&&J?(J=!1,ee=!0,te=!0,A(!1,0)):g>d.distance2&&g<=d.distance3&&ee?(ee=!1,J=!0,te=!0,A(!1,1)):g>d.distance4&&te&&(te=!1,ee=!0,J=!0,A(!0,1)):Pe&&(A(!0,1),Pe=!1,setTimeout(()=>{Pe=!0},500)),g<=d.columndistance&&q&&q.uniforms&&(g-100>=0&&(q.uniforms.u_height.value=(g-100)/2),q.uniforms.u_opacity.value=g/1e3),i.coordinate={camera:{x:h.position.x,y:h.position.y,z:h.position.z},target:{x:M.target.x,y:M.target.y,z:M.target.z},distance:g,devicetype:window.devicetype},j(),U.render(),V.render(x,h),Z==null||Z.update()}function j(){if(c){const n=c.group.matrixWorld.clone().invert(),u=h.position.clone().applyMatrix4(n),p={};Lt.getPositionToCartographic(u,p),(c==null?void 0:c.getAttributions().length)>0&&(i.explain=Xt(c.getAttributions()))}}function k(){he&&x.remove(he);const n=({height:p=10,color:g=d.columncolor,opacity:v=.5,speed:m=5})=>{const w=`
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
        `;return new de({uniforms:{u_height:{value:p},u_opacity:{value:v},u_color:{value:new qe(g)},time:{value:0},speed:{value:m}},transparent:!0,depthWrite:!1,depthTest:!1,side:je,vertexShader:w,fragmentShader:C})},u=({height:p=10,path:g=[],wallMeshmaterial:v,expand:m=!0})=>{let w=null;m?w=g.reduce((G,[I,N,F])=>G.concat([[[I,N,F],[I,N+p,F]]]),[]):w=g;const _=w.reduce((G,I,N)=>N===w.length-1?G:G.concat([[I,w[N+1]]]),[]).reduce((G,I)=>{const[[N,F],[tt,ze]]=I;return G.concat(...F,...N,...ze,...N,...tt,...ze)},[]),y=new xe,E=new Float32Array(_);y.setAttribute("position",new ke(E,3));const z=new Array(_.length/3/6).fill(0).map((G,I)=>_.slice(I*3*6,(I+1)*3*6)).map((G,I)=>new Array(G.length/3).fill(0).map((N,F)=>G.slice(F*3,(F+1)*3)));y.computeBoundingBox();const{min:T,max:K}=y.boundingBox,Q=K.x-T.x,Se=[].concat(...z.map(G=>{const I=G[0],N=G[5],F=new D(...I).distanceTo(new D(...N))/(Q/10);return[0,1,0,0,F,1,0,0,F,0,F,1]}));y.setAttribute("uv",new ke(new Float32Array(Se),2));const et=v||new Oe({color:65535,side:je});return new ge(y,et)};q=n({height:100,speed:5}),he=u({path:ie,wallMeshmaterial:q,height:500}),x.add(he)}o(),O(),d.columnvisibility&&k(),document.querySelector("#three").addEventListener("mousedown",n=>{if(n.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;n.preventDefault(),ae&&(x.remove(ae),this.dataName=""),s.x=n.clientX/S.domElement.clientWidth*2-1,s.y=-(n.clientY/S.domElement.clientHeight)*2+1,a.setFromCamera(s,h);var u=a.intersectObjects(x.children,!0);if(u.length>0&&(R!=null&&R.children)){let m=0;for(let w=0;w<u.length;w++){if(m)return!1;const C=u[w];let _=R.children.find(y=>{if(y.name==C.object.name)return y});if(_&&i.$refs.sunshadow.houses){this.dataName=_.name,C.object.updateMatrix(),C.object.updateMatrixWorld(!0);const y=new D,E=new ye,l=new D;C.object.matrixWorld.decompose(y,E,l);const z=new Ie(C.object.geometry);var p=new Ve().fromEdgesGeometry(z),g=new be({color:d.EdgeLinecolor,linewidth:d.Edgelinewidth}),v=new He(p,g);v.position.copy(y),v.rotation.copy(E),v.scale.copy(l),x.add(v),ae=v,m++}}}}),document.querySelector("#three").addEventListener("mousemove",n=>{if(n.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;n.preventDefault(),me&&x.remove(me);let u={};u.x=n.clientX/S.domElement.clientWidth*2-1,u.y=-(n.clientY/S.domElement.clientHeight)*2+1,a.setFromCamera(u,h);var p=a.intersectObjects(x.children,!0);if(p.length>0&&(R!=null&&R.children)){let w=0;for(let C=0;C<p.length;C++){if(w)return!1;const _=p[C];if(R.children.find(E=>{if(E.name==_.object.name)return E})&&i.$refs.sunshadow.houses){_.object.updateMatrix(),_.object.updateMatrixWorld(!0);const E=new D,l=new ye,z=new D;_.object.matrixWorld.decompose(E,l,z);const T=new Ie(_.object.geometry);var g=new Ve().fromEdgesGeometry(T),v=new be({color:d.EdgeLinecolor,linewidth:d.Edgelinewidth,transparent:!0,opacity:.5}),m=new He(g,v);m.position.copy(E),m.rotation.copy(l),m.scale.copy(z),x.add(m),me=m,w++}}}})})})},methods:{imageLoad(){this.$store.commit("global/SET_LOADING",!1)},setmap(){this.condition=this.value1?1:-1,this.condition==-1&&(J=!0,ee=!0,te=!0)},initmap(){this.CustomPerspective(d)},addpoint(){this.threedata.Selectlist.find(i=>i.name=="周边").visible&&(this.threedata.mapdata.map((i,e)=>{i.iconShow=!1;let t=$e(`https://oss.homevista.jp/custom/model${i.icon}`);i.mapPerimeters.map((a,s)=>{const r=document.createElement("div");let o=JSON.stringify(a);r.innerHTML=`
             <div class="into" id="into" >
                <div class="mapimg" style="background:url('${t}') no-repeat;"  onclick='threeMapImg("${""+e+s}",${o})' ></div>
              <div class='arrow_box dataid${""+e+s}'>
                <div class="into-img" >
                   <div  style="background:url('${$e(a.img)}') no-repeat center center;background-size:cover;"  ></div>
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
          `;const f=new We(r);f.name="mapPoint"+e+s;let b=this.xyz(a.longitudeAndLatitude.split(",")[0],a.longitudeAndLatitude.split(",")[1],W.mapheight);f.scale.set(.25,.25,.25),f.position.set(b.x,b.y,b.z),f.visible=!1,x.add(f),planesel.push(f)})}),this.mapdata=this.threedata.mapdata)},addInitPoint(){let i=new URL("/assets/point-0fa1876a.png",self.location).href;const e=document.createElement("div");e.innerHTML=`
          <div class="into" id="into" >
                <div  style="position: absolute; top: 0; left: 0; width:15px; height:15px; background:url('${i}') no-repeat; background-size:100% 100%;" ></div>
          </div>`,ne=new We(e);let t=this.xyz(d.lat/1,d.lon/1,d.y);ne.scale.set(1,1,1),ne.position.set(t.x,t.y,t.z),x.add(ne)},xyz(i,e,t){const a=new D;c.ellipsoid.getCartographicToPosition(oe.degToRad(i),oe.degToRad(e),t,a);const s=c.group.matrixWorld.clone();return a.applyMatrix4(s),a},skyBox(i,e){e.load(W.sky2,t=>{t.minFilter=Ne,t.mapping=Fe,i.background=t,S.initTexture(t),t.dispose()}),e.load(W.sky1,t=>{t.minFilter=Ne,t.mapping=Fe,i.environment=t,S.initTexture(t),t.dispose()})},ckmap(i){let{item:e,i:t,index:a}=i;this.addgoogelmap(e.googelmap);let s=this.xyz(e.longitudeAndLatitude.split(",")[0],e.longitudeAndLatitude.split(",")[1],100);this.gsapTo(s.x,s.y,s.z),window.threeMapImg(""+a+t)},removeline(){fe&&x.remove(fe)},removemodeledges(){ae&&(x.remove(ae),this.dataName=""),ae&&x.remove(me)},addgoogelmap(i){if(!i||i.length==0)return;this.removeline();let e=[];i.map(s=>{const r=this.xyz(s.split(",")[0],s.split(",")[1],W.mapline);e.push(r.x,r.y,r.z)});const t=new kt;t.setPositions(e);let a=new be({color:d.Linecolor,linewidth:d.linewidth});fe=new Vt(t,a),x.add(fe)},CustomPerspective(i){let{target:e,position:t}=i;Te=!1,re.to(M.target,{x:e.x,y:e.y,z:e.z,duration:2,onUpdate:()=>{M.update()},onComplete:()=>{Te=!0}}),re.to(h.position,{x:t.x,y:t.y,z:t.z,duration:2})},auto(i){this.autoVidoe.show=!0;let e=()=>{this.autoVidoe.name=i[this.autoVidoe.count].name,this.CustomPerspective(i[this.autoVidoe.count]),this.autoVidoe.count++,this.autoVidoe.count==i.length&&(this.autoVidoe.count=0)};e(),this.autoVidoe.time=setInterval(()=>{e()},6e3)},exitAuto(){this.autoVidoe.name="",this.autoVidoe.count=0,this.autoVidoe.show=!1,clearInterval(this.autoVidoe.time)},gsapTo(i,e,t){re.to(M.target,{x:i,y:e,z:t,duration:2,onUpdate:()=>{M.update()}}),re.to(h.position,{x:i<0?i-200:i+200,y:e,z:t<0?t-200:t+200,duration:2})},setHouse(i,e){R.traverse(t=>{t.isMesh&&t.name.split("-")[0].toLowerCase()==i.toLowerCase()&&(t.material.opacity=e?.6:0)})},showHouse(i){i?R.traverse(e=>{e.isMesh&&(e.material.opacity=.6)}):R.traverse(e=>{e.isMesh&&(e.material.opacity=0)})}},beforeDestroy(){c&&(x.remove(c.group),c.dispose(),c=null),window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[]}};var pi=function(){var e=this,t=e._self._c;return Object.keys(e.threedata).length>0?t("div",{attrs:{id:"three"}},[e.mapError?t("div",{staticClass:"cesium-map-error",attrs:{role:"alert"}},[e._v(e._s(e.mapError))]):e._e(),e.proinit?t("loading",{attrs:{loadingdata:e.threedata.loadingdata,loadnum:e.progress},on:{imageLoad:e.imageLoad}}):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.autoVidoe.show&&e.progress==100,expression:"!autoVidoe.show && progress == 100"}]},[e.cesiumshow?t("sunshadow",{ref:"sunshadow",attrs:{threedata:e.threedata,mapdata:e.mapdata,sunshadowdata:e.threedata.sunshadowdata,maplist:e.maplist,explain:e.explain},on:{ckmap:e.ckmap}}):e._e(),t("img",{ref:"compass",attrs:{id:"compass",src:Ht,alt:""}}),Object.keys(e.coordinate).length>0?t("div"):e._e()],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.autoVidoe.show,expression:"autoVidoe.show"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%","z-index":"1"}},[t("img",{staticClass:"vidoeshowBj",attrs:{src:Wt,alt:""}}),t("span",{staticClass:"vidoeshowName"},[e._v(e._s(e.autoVidoe.name))]),t("span",{staticClass:"vidoeshowClose",on:{click:e.exitAuto}})])],1):e._e()},hi=[],fi=Je(ui,pi,hi,!1,null,"ac3a2f91",null,null);const mi=fi.exports,gi="/assets/cesiunjson-8f8408af.json",vi="/assets/cesiunjsonpad-f6f3d0b8.json",wi="/assets/cesiunjsonpadiphone-adffcd36.json";const xi={components:{ThreeGis:mi},data(){return{header:null,jsonUrls:{pc:gi,pad:vi,phone:wi}}},created(){this.header="https://oss.homevista.jp/custom/model/csmodel"}};var Si=function(){var e=this,t=e._self._c;return t("div",[t("ThreeGis",{attrs:{header:e.header,"json-urls":e.jsonUrls}})],1)},_i=[],yi=Je(xi,Si,_i,!1,null,"bbf260a0",null,null);const Ti=yi.exports;export{Ti as default};
