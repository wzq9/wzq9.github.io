var ye=(i,e,t)=>new Promise((a,s)=>{var r=b=>{try{f(t.next(b))}catch(I){s(I)}},o=b=>{try{f(t.throw(b))}catch(I){s(I)}},f=b=>b.done?a(b.value):Promise.resolve(b.value).then(r,o);f((t=t.apply(i,e)).next())});import{ak as at,M as ge,l as xe,al as Ge,g as de,am as ve,V as $,W as Me,an as Re,N as nt,ao as st,o as Ze,ap as ot,aq as rt,ar as lt,as as dt,at as ut,au as ct,a0 as Je,av as pt,aw as ht,ax as mt,e as E,p as ft,q as gt,r as vt,s as wt,t as xt,u as St,v as yt,w as _t,x as Ie,y as bt,z as Be,A as Fe,G as _e,H as Ne,I as Oe,J as se,L as Ue,K as ke,O as Ct,Q as Et,X as oe,_ as Dt,Y as Tt,Z as Pt,$ as Lt,S as ue,a1 as Mt,a2 as Rt,f as At,P as zt,a3 as Gt,a4 as It,a5 as Bt,a6 as Ft,a7 as Nt,a8 as be,a9 as Ot,aa as Ve,ab as Ut,ac as He,ad as kt,af as Vt,ag as We,ah as Ht,i as je,m as $e,ai as Wt,aj as jt}from"./loading-bj-f9317e75.js";import{n as et,a as $t}from"./index-94a21cf1.js";import"./tip-c9e56a80.js";class ne{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xt=new at(-1,1,1,-1,0,1);class Kt extends xe{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}const Qt=new Kt;class Ae{constructor(e){this._mesh=new ge(Qt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}var le=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(T){T.preventDefault(),a(++i%e.children.length)},!1);function t(T){return e.appendChild(T.dom),T}function a(T){for(var P=0;P<e.children.length;P++)e.children[P].style.display=P===T?"block":"none";i=T}var s=(performance||Date).now(),r=s,o=0,f=t(new le.Panel("FPS","#0ff","#002")),b=t(new le.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var I=t(new le.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:e,addPanel:t,showPanel:a,begin:function(){s=(performance||Date).now()},end:function(){o++;var T=(performance||Date).now();if(b.update(T-s,200),T>=r+1e3&&(f.update(o*1e3/(T-r),100),r=T,o=0,I)){var P=performance.memory;I.update(P.usedJSHeapSize/1048576,P.jsHeapSizeLimit/1048576)}return T},update:function(){s=this.end()},domElement:e,setMode:a}};le.Panel=function(i,e,t){var a=1/0,s=0,r=Math.round,o=r(window.devicePixelRatio||1),f=80*o,b=48*o,I=3*o,T=2*o,P=3*o,A=15*o,U=74*o,k=30*o,V=document.createElement("canvas");V.width=f,V.height=b,V.style.cssText="width:80px;height:48px";var n=V.getContext("2d");return n.font="bold "+9*o+"px Helvetica,Arial,sans-serif",n.textBaseline="top",n.fillStyle=t,n.fillRect(0,0,f,b),n.fillStyle=e,n.fillText(i,I,T),n.fillRect(P,A,U,k),n.fillStyle=t,n.globalAlpha=.9,n.fillRect(P,A,U,k),{dom:V,update:function(c,h){a=Math.min(a,c),s=Math.max(s,c),n.fillStyle=t,n.globalAlpha=1,n.fillRect(0,0,f,A),n.fillStyle=e,n.fillText(r(c)+" "+i+" ("+r(a)+"-"+r(s)+")",I,T),n.drawImage(V,P+o,A,U-o,k,P,A,U-o,k),n.fillRect(P+U-o,A,o,k),n.fillStyle=t,n.globalAlpha=.9,n.fillRect(P+U-o,A,o,r((1-c/h)*k))}}};const Yt=le,qt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class we extends ne{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof de?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ve.clone(e.uniforms),this.material=new de({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ae(this.material)}render(e,t,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xe extends ne{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,a){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,f;this.inverse?(o=0,f=1):(o=1,f=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(f),r.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Zt extends ne{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Jt{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const a=e.getSize(new $);this._width=a.width,this._height=a.height,t=new Me(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Re}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new we(qt),this.copyPass.material.blending=nt,this.clock=new st}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let a=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),o.needsSwap){if(a){const f=this.renderer.getContext(),b=this.renderer.state.buffers.stencil;b.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),b.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Xe!==void 0&&(o instanceof Xe?a=!0:o instanceof Zt&&(a=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const a=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(a,s),this.renderTarget2.setSize(a,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(a,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ei extends ne{constructor(e,t,a=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=a,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,a){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const ti={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ii extends ne{constructor(){super();const e=ti;this.uniforms=ve.clone(e.uniforms),this.material=new ot({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ae(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ut?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ct?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Je?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ht&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ke={name:"ConvolutionShader",defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new $(.001953125,0)},cKernel:{value:[]}},vertexShader:`

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

		}`,buildKernel:function(i){let t=2*Math.ceil(i*3)+1;t>25&&(t=25);const a=(t-1)*.5,s=new Array(t);let r=0;for(let o=0;o<t;++o)s[o]=ai(o-a,i),r+=s[o];for(let o=0;o<t;++o)s[o]/=r;return s}};function ai(i,e){return Math.exp(-(i*i)/(2*e*e))}class j extends ne{constructor(e=1,t=25,a=4){super(),this.renderTargetX=new Me(1,1,{type:Re}),this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new Me(1,1,{type:Re}),this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=ve.clone(ce.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new de({name:ce.name,uniforms:this.combineUniforms,vertexShader:ce.vertexShader,fragmentShader:ce.fragmentShader,blending:mt,transparent:!0});const s=Ke;this.convolutionUniforms=ve.clone(s.uniforms),this.convolutionUniforms.uImageIncrement.value=j.blurX,this.convolutionUniforms.cKernel.value=Ke.buildKernel(a),this.materialConvolution=new de({name:s.name,uniforms:this.convolutionUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new Ae(null)}render(e,t,a,s,r){r&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=a.texture,this.convolutionUniforms.uImageIncrement.value=j.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=j.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(a),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const ce={name:"CombineShader",uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

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

		}`};j.blurX=new $(.001953125,0);j.blurY=new $(0,.001953125);const ni={name:"LUTShader",uniforms:{lut:{value:null},lutSize:{value:0},tDiffuse:{value:null},intensity:{value:1}},vertexShader:`

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

	`};class si extends we{set lut(e){const t=this.material;e!==this.lut&&(t.uniforms.lut.value=null,e&&(t.uniforms.lutSize.value=e.image.width,t.uniforms.lut.value=e))}get lut(){return this.material.uniforms.lut.value}set intensity(e){this.material.uniforms.intensity.value=e}get intensity(){return this.material.uniforms.intensity.value}constructor(e={}){super(ni),this.lut=e.lut||null,this.intensity="intensity"in e?e.intensity:1}}const oi={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

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
			
		}`},ri={name:"ColorCorrectionShader",uniforms:{tDiffuse:{value:null},powRGB:{value:new E(2,2,2)},mulRGB:{value:new E(1,1,1)},addRGB:{value:new E(0,0,0)}},vertexShader:`

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

		}`};ge.prototype.raycast=Pt;xe.prototype.computeBoundsTree=ft;xe.prototype.disposeBoundsTree=gt;let M,w,x,u,H,pe,O,m,re,he,Q,Ce=[];window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[];let li=new vt,Qe=new E,Ee=new E,Y,De,me,Te=!0,q=!0,Z=!0,J=!0,Pe=!0,l,ee,W,te,Ye,R,ie,fe,qe,ae;const Le={},di={components:{Peripheralmap:wt,disclaimer:xt,loading:St,sunshadow:yt,debugcesium:_t},props:{header:{type:String,default:""}},data(){return{cesiumshow:!1,init:null,proinit:!0,threedata:{},mapdata:[],maplistdata:null,maplist:[],progress:0,autoVidoe:{show:!1,count:0,time:null,name:""},distance:0,explain:"",value1:!1,rimVisible:!1,coordinate:{},dataName:""}},watch:{value1:{handler(i){this.condition=i?1:-1,i?this.rimVisible=!0:this.rimVisible=!1,q=!i,Z=!i,J=!i},immediate:!0},rimVisible:{handler(i){if(i)hideset.forEach(e=>setOpacityRecursive(e,1)),trees.forEach(e=>setOpacityRecursive(e,1));else{if(this.distance>l.distance4)return;hideset.forEach(e=>setOpacityRecursive(e,0)),trees.forEach(e=>setOpacityRecursive(e,0))}}}},created(){return ye(this,null,function*(){let i=this;if(Ie.mobile()){window.devicetype.phone=!0;let a=this.header+"/cesiunjsonpadiphone.json";yield e(a)}else if(Ie.tablet()){window.devicetype.pad=!0;let a=this.header+"/cesiunjsonpad.json";yield e(a)}else{window.devicetype.pc=!0;let a=this.header+"/cesiunjson.json";yield e(a)}function e(a){return new Promise((s,r)=>ye(this,null,function*(){try{const o=yield $t.get(a);i.threedata=o.data,l=o.data.initmap,ee=o.data.modelbox,W=o.data.croping,qe=o.data.NewPlanColor,te=o.data.path;for(let f=0;f<te.length;f++)Le[`x${f+1}`]=te[f][0],Le[`y${f+1}`]=te[f][1],Le[`z${f+1}`]=te[f][2];Ye={apiKey:l.apiKey},s(!0)}catch(o){}}))}let t=!sessionStorage.getItem("agree");this.init=t,this.$nextTick(()=>{const a=new bt,s=new $;a.firstHitOnly=!0,window.threeMapImg=(n,c)=>{if(threeclearimg(),De==n)return De="",this.removeline(),!1;if(c){let p=this.xyz(c.longitudeAndLatitude.split(",")[0],c.longitudeAndLatitude.split(",")[1],ee.mapheight);this.gsapTo(p.x,p.y,p.z),this.addgoogelmap(c.googelmap),window.threeMapImg(n);return}let h=document.querySelector(`.dataid${n}`);h.style.visibility="visible",h.style.pointerEvents="all",De=n},window.threeclearimg=()=>{let n=document.querySelectorAll(".arrow_box");for(let c=0;c<n.length;c++){const h=n[c];h.style.visibility="hidden",h.style.pointerEvents="none"}};function r(){var S,C,y,_;u&&(w.remove(u.group),u.dispose(),u=null),u=new Ot,i.threedata.isgis?u.registerPlugin(new Ve({apiToken:Ye.apiKey})):u.registerPlugin(new Ve({apiToken:"0"})),u.visible=!1,u.errorTarget=l.errorTarget,u.lruCache.maxBytesSize=(S=window.devicetype)!=null&&S.pc?u.lruCache.maxBytesSize*2:u.lruCache.maxBytesSize,u.lruCache.minBytesSize=(C=window.devicetype)!=null&&C.pc?u.lruCache.minBytesSize*2:u.lruCache.minBytesSize,u.lruCache.minSize=(y=window.devicetype)!=null&&y.pc?u.lruCache.minSize*2:u.lruCache.minSize,u.lruCache.maxSize=(_=window.devicetype)!=null&&_.pc?u.lruCache.maxSize*2:u.lruCache.maxSize,u.setLatLonToYUp(l.lat*se.DEG2RAD,l.lon*se.DEG2RAD),b(),u.visible=!0;const n=new Wt(()=>{const L=setInterval(()=>{w.background!==null&&(pe.dispose(),x.info.reset(),clearInterval(L))},500)},(L,d,z)=>{const D=d/z*100;i.progress=D.toFixed(0)/1}),c=new Ut;c.setDecoderPath("https://unpkg.com/three@0.170.0/examples/jsm/libs/draco/gltf/");const h=new He(u.manager);h.setDRACOLoader(c),pe=new kt(n).setTranscoderPath("https://unpkg.com/three@0.170.0/examples/jsm/libs/basis/").detectSupport(x),i.skyBox(w,pe,n);const p=new He(n);p.setKTX2Loader(pe),p.setDRACOLoader(c);let v=[],g=`https://oss.homevista.jp/custom/model/csmodel/${i.$route.params.id}/model.gltf`;p.load(g,L=>{re=L.scene,re.traverse(d=>{var z;d.castShadow=l.modelcastShadow,d.receiveShadow=l.modelreceiveShadow,(z=d==null?void 0:d.material)!=null&&z.transparent&&(d.material.depthWrite=!0,d.renderOrder=1,d.material.ColorSpace=ue),d.name==l.modelHome?R=d:d.name==l.modelTrees?trees.push(d):d.name==l.modelLight?d.traverse(D=>{var X,K;D.type!=="Object3D"&&(D.intensity=l.modelLightintensity,D.shadow.mapSize.width=(X=window.devicetype)!=null&&X.pc?4096:2048,D.shadow.mapSize.height=(K=window.devicetype)!=null&&K.pc?4096:2048,D.shadow.camera.left=-1500,D.shadow.camera.right=1500,D.shadow.camera.top=1500,D.shadow.camera.bottom=-1500,D.shadow.bias=-.005)}):d.name.indexOf(l.modelGIS)!==-1||d.name.indexOf("m-gis")!==-1?hideset.push(d):d.name==l.modelbox&&d.traverse(D=>{D.isMesh&&v.push(D)})}),w.add(L.scene),re.position.set(W.ModelPositionX,W.ModelPositionY,W.ModelPositionZ),re.rotation.set(W.ModelRotationX,W.ModelRotationY,W.ModelRotationZ),v.map(d=>{d.isMesh&&(d.receiveShadow=!1,d.castShadow=!1,d.geometry.boundsTree=new Vt(d.geometry),d.geometry.computeBoundsTree(),Ce.push(d),d.material.opacity=0,d.material.transparent=!0,d.material.depthWrite=!1,d.material.ColorSpace=ue)}),setTimeout(()=>{if(!R){i.threedata.Selectlist.map(d=>{d.name=="户型"&&(d.visible=!1)});return}R.traverse(d=>{if(!d.isMesh)return;let z=qe.find(Se=>d.name.toLowerCase().includes(Se.type.toLowerCase()));const D=new E,X=new be,K=new E;d.matrixWorld.decompose(D,X,K),d.material=new We({color:z.color,opacity:0,transparent:!0,depthWrite:!1})})},1e3)},()=>{},L=>{i.$router.push("/404")}),u.manager.addHandler(/\.gltf$/,h),w.add(u.group),u.setResolutionFromRenderer(m,x),u.setCamera(m)}let o=()=>{x=new Lt({antialias:!0}),x.localClippingEnabled=!0,x.toneMapping=Je,x.toneMappingExposure=l.toneMappingExposure,x.outputColorSpace=ue,x.outputEncoding=ue,x.physicallyCorrectLights=!0,x.shadowMap.enabled=!0,x.shadowMap.type=Mt,x.setPixelRatio(window.devicePixelRatio),document.querySelector("#three").appendChild(x.domElement),H=new Rt,H.setSize(window.innerWidth,window.innerHeight),H.domElement.style.position="absolute",H.domElement.style.top="0px",H.domElement.style.pointerEvents="none",document.querySelector("#three").appendChild(H.domElement),w=new At,m=new zt(60,window.innerWidth/window.innerHeight,1,16e5),m.position.set(l.position.x,l.position.y,l.position.z);const n=new Gt(4210752,1);w.add(n);const c=new ii,h=new ei(w,m);O=new Jt(x),O.setPixelRatio(window.devicePixelRatio),O.setSize(window.innerWidth,window.innerHeight),O.addPass(new j),O.addPass(new si);const p=new we(oi);p.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight);const v=new we(ri);v.uniforms.powRGB.value.set(1.4,1.4,1.4),O.addPass(v),O.addPass(p),O.addPass(c),O.addPass(h);let g=new ge(new It(3,32,32),new Bt);g.material.opacity=0,g.material.transparent=!0,g.material.depthWrite=!1,g.material.needsUpdate=!0,w.add(g),M=new Ft(m,x.domElement),M.target.set(l.target.x,l.target.y,l.target.z),M.minDistance=l.controls.minDistance,M.maxDistance=l.controls.maxDistance,M.minPolarAngle=l.controls.minPolarAngle,M.maxPolarAngle=l.controls.maxPolarAngle,M.enableDamping=l.controls.enableDamping,M.enablePan=l.controls.enablePan,M.update(),r(),I(),window.addEventListener("resize",I,!1);let S=l.controls.minHeight,C=l.controls.maxHeight;M.addEventListener("change",()=>{if(i.distance<=l.controls.distance){const y=l.controls.maxMoveSpeed,_=new E().subVectors(m.position,Ee);_.length()>y&&(_.setLength(y),m.position.copy(Ee).add(_))}if(m.position.y<S&&(m.position.y=S),m.position.y>C&&(m.position.y=C),re&&Ce.length>0&&Te){const y=new E;m.getWorldPosition(y),g.position.copy(y),g.lookAt(m.position);const _=Ce[0];g.updateMatrixWorld();let L=li.copy(_.matrixWorld).invert().multiply(g.matrixWorld);_.geometry.boundsTree.intersectsGeometry(g.geometry,L)?m.position.copy(Qe):Qe.copy(m.position)}Ee.copy(m.position),M.target.y=35}),this.addpoint(),l.initPoint&&this.addInitPoint(),this.cesiumshow=!0};f();function f(){Y=new Yt,Y.showPanel(0),document.body.appendChild(Y.dom)}function b(){let n=l.clipping;n=n.map(p=>i.xyz(p[0],p[1],0));let c=[];new Ht;function h(p){const v=[];for(let g=0;g<p.length-1;g++){const S=new E().subVectors(p[g],p[g+1]),C=new E(S.z,0,-S.x).normalize();p[g].dot(C);const y=new jt().setFromNormalAndCoplanarPoint(C,p[g]);v.push(y)}return v}c=h(n),u.addEventListener("load-model",p=>{p.scene.traverse(v=>{v.isMesh&&(v.material.clippingPlanes=c,v.material.clipIntersection=!0,v.material.clipShadows=!0,v.material.alphaToCoverage=!0)})})}function I(){m.aspect=window.innerWidth/window.innerHeight,x.setSize(window.innerWidth,window.innerHeight),H.setSize(window.innerWidth,window.innerHeight),m.updateProjectionMatrix(),O.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(window.devicePixelRatio)}function T(n,c,h=.5){oe.to(n,{opacity:c,duration:h,ease:"power1.inOut",onStart:()=>{n.transparent=!0,n.visible=!0},onComplete:()=>{n.transparent=!0,c==0&&(n.visible=!1)}})}function P(n,c){n.isMesh?T(n.material,c):n.children.forEach(h=>P(h,c))}window.animateOpacity=T,window.setOpacityRecursive=P,i.condition=-1;function A(n,c=1){u.group&&(u.group.visible=n,i.rimVisible||(hideset.forEach(h=>P(h,c)),trees.forEach(h=>P(h,c))))}window.updateVisibility=A;function U(){if(requestAnimationFrame(U),!u)return;M.update(),u.setResolutionFromRenderer(m,x),u.setCamera(m),m.updateMatrixWorld(),u.update(),planesel.forEach(v=>{v.lookAt(m.position)}),ae&&ae.lookAt(m.position);let n=new E(-m.position.x,0,-m.position.z).normalize(),c=Math.atan2(-n.x,-n.z);i.$refs.compass&&(i.$refs.compass.style.transform="rotateZ("+(se.radToDeg(c)+90)+"deg)");const h=new E;m.getWorldPosition(h);const p=h.distanceTo(new E(0,0,0));i.distance=p,i.condition==-1?p<=l.distance1&&q?(q=!1,Z=!0,J=!0,A(!1,0)):p>l.distance2&&p<=l.distance3&&Z?(Z=!1,q=!0,J=!0,A(!1,1)):p>l.distance4&&J&&(J=!1,Z=!0,q=!0,A(!0,1)):Pe&&(A(!0,1),Pe=!1,setTimeout(()=>{Pe=!0},500)),p<=l.columndistance&&Q&&Q.uniforms&&(p-100>=0&&(Q.uniforms.u_height.value=(p-100)/2),Q.uniforms.u_opacity.value=p/1e3),i.coordinate={camera:{x:m.position.x,y:m.position.y,z:m.position.z},target:{x:M.target.x,y:M.target.y,z:M.target.z},distance:p,devicetype:window.devicetype},k(),O.render(),H.render(w,m),Y==null||Y.update()}function k(){if(u){const n=u.group.matrixWorld.clone().invert(),c=m.position.clone().applyMatrix4(n),h={};Nt.getPositionToCartographic(c,h),(u==null?void 0:u.getAttributions().length)>0&&(i.explain=u.getAttributions()[0].value)}}function V(){he&&w.remove(he);const n=({height:h=10,color:p=l.columncolor,opacity:v=.5,speed:g=5})=>{const S=`
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
        `;return new de({uniforms:{u_height:{value:h},u_opacity:{value:v},u_color:{value:new Ze(p)},time:{value:0},speed:{value:g}},transparent:!0,depthWrite:!1,depthTest:!1,side:je,vertexShader:S,fragmentShader:C})},c=({height:h=10,path:p=[],wallMeshmaterial:v,expand:g=!0})=>{let S=null;g?S=p.reduce((G,[B,F,N])=>G.concat([[[B,F,N],[B,F+h,N]]]),[]):S=p;const y=S.reduce((G,B,F)=>F===S.length-1?G:G.concat([[B,S[F+1]]]),[]).reduce((G,B)=>{const[[F,N],[it,ze]]=B;return G.concat(...N,...F,...ze,...F,...it,...ze)},[]),_=new xe,L=new Float32Array(y);_.setAttribute("position",new $e(L,3));const z=new Array(y.length/3/6).fill(0).map((G,B)=>y.slice(B*3*6,(B+1)*3*6)).map((G,B)=>new Array(G.length/3).fill(0).map((F,N)=>G.slice(N*3,(N+1)*3)));_.computeBoundingBox();const{min:D,max:X}=_.boundingBox,K=X.x-D.x,Se=[].concat(...z.map(G=>{const B=G[0],F=G[5],N=new E(...B).distanceTo(new E(...F))/(K/10);return[0,1,0,0,N,1,0,0,N,0,N,1]}));_.setAttribute("uv",new $e(new Float32Array(Se),2));const tt=v||new We({color:65535,side:je});return new ge(_,tt)};Q=n({height:100,speed:5}),he=c({path:te,wallMeshmaterial:Q,height:500}),w.add(he)}o(),U(),l.columnvisibility&&V(),document.querySelector("#three").addEventListener("mousedown",n=>{if(n.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;n.preventDefault(),ie&&(w.remove(ie),this.dataName=""),s.x=n.clientX/x.domElement.clientWidth*2-1,s.y=-(n.clientY/x.domElement.clientHeight)*2+1,a.setFromCamera(s,m);var c=a.intersectObjects(w.children,!0);if(c.length>0&&(R!=null&&R.children)){let g=0;for(let S=0;S<c.length;S++){if(g)return!1;const C=c[S];let y=R.children.find(_=>{if(_.name==C.object.name)return _});if(y&&i.$refs.sunshadow.houses){this.dataName=y.name,C.object.updateMatrix(),C.object.updateMatrixWorld(!0);const _=new E,L=new be,d=new E;C.object.matrixWorld.decompose(_,L,d);const z=new Be(C.object.geometry);var h=new Fe().fromEdgesGeometry(z),p=new _e({color:l.EdgeLinecolor,linewidth:l.Edgelinewidth}),v=new Ne(h,p);v.position.copy(_),v.rotation.copy(L),v.scale.copy(d),w.add(v),ie=v,g++}}}}),document.querySelector("#three").addEventListener("mousemove",n=>{if(n.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;n.preventDefault(),fe&&w.remove(fe);let c={};c.x=n.clientX/x.domElement.clientWidth*2-1,c.y=-(n.clientY/x.domElement.clientHeight)*2+1,a.setFromCamera(c,m);var h=a.intersectObjects(w.children,!0);if(h.length>0&&(R!=null&&R.children)){let S=0;for(let C=0;C<h.length;C++){if(S)return!1;const y=h[C];if(R.children.find(L=>{if(L.name==y.object.name)return L})&&i.$refs.sunshadow.houses){y.object.updateMatrix(),y.object.updateMatrixWorld(!0);const L=new E,d=new be,z=new E;y.object.matrixWorld.decompose(L,d,z);const D=new Be(y.object.geometry);var p=new Fe().fromEdgesGeometry(D),v=new _e({color:l.EdgeLinecolor,linewidth:l.Edgelinewidth,transparent:!0,opacity:.5}),g=new Ne(p,v);g.position.copy(L),g.rotation.copy(d),g.scale.copy(z),w.add(g),fe=g,S++}}}})})})},methods:{imageLoad(){this.$store.commit("global/SET_LOADING",!1)},setmap(){this.condition=this.value1?1:-1,this.condition==-1&&(q=!0,Z=!0,J=!0)},initmap(){this.CustomPerspective(l)},addpoint(){this.threedata.Selectlist.find(i=>i.name=="周边").visible&&(this.threedata.mapdata.map((i,e)=>{i.iconShow=!1;let t=`https://oss.homevista.jp/custom/model${i.icon}`;i.mapPerimeters.map((a,s)=>{const r=document.createElement("div");let o=JSON.stringify(a);r.innerHTML=`
             <div class="into" id="into" >
                <div class="mapimg" style="background:url('${t}') no-repeat;"  onclick='threeMapImg("${""+e+s}",${o})' ></div>
              <div class='arrow_box dataid${""+e+s}'>
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
          `;const f=new Oe(r);f.name="mapPoint"+e+s;let b=this.xyz(a.longitudeAndLatitude.split(",")[0],a.longitudeAndLatitude.split(",")[1],ee.mapheight);f.scale.set(.25,.25,.25),f.position.set(b.x,b.y,b.z),f.visible=!1,w.add(f),planesel.push(f)})}),this.mapdata=this.threedata.mapdata)},addInitPoint(){let i=new URL("/assets/point-0fa1876a.png",self.location).href;const e=document.createElement("div");e.innerHTML=`
          <div class="into" id="into" >
                <div  style="position: absolute; top: 0; left: 0; width:15px; height:15px; background:url('${i}') no-repeat; background-size:100% 100%;" ></div>
          </div>`,ae=new Oe(e);let t=this.xyz(l.lat/1,l.lon/1,l.y);ae.scale.set(1,1,1),ae.position.set(t.x,t.y,t.z),w.add(ae)},xyz(i,e,t){const a=new E;u.ellipsoid.getCartographicToPosition(se.degToRad(i),se.degToRad(e),t,a);const s=u.group.matrixWorld.clone();return a.applyMatrix4(s),a},skyBox(i,e){e.load(ee.sky2,t=>{t.minFilter=Ue,t.mapping=ke,i.background=t,x.initTexture(t),t.dispose()}),e.load(ee.sky1,t=>{t.minFilter=Ue,t.mapping=ke,i.environment=t,x.initTexture(t),t.dispose()})},ckmap(i){let{item:e,i:t,index:a}=i;this.addgoogelmap(e.googelmap);let s=this.xyz(e.longitudeAndLatitude.split(",")[0],e.longitudeAndLatitude.split(",")[1],100);this.gsapTo(s.x,s.y,s.z),window.threeMapImg(""+a+t)},removeline(){me&&w.remove(me)},removemodeledges(){ie&&(w.remove(ie),this.dataName=""),ie&&w.remove(fe)},addgoogelmap(i){if(!i||i.length==0)return;this.removeline();let e=[];i.map(s=>{const r=this.xyz(s.split(",")[0],s.split(",")[1],ee.mapline);e.push(r.x,r.y,r.z)});const t=new Ct;t.setPositions(e);let a=new _e({color:l.Linecolor,linewidth:l.linewidth});me=new Et(t,a),w.add(me)},CustomPerspective(i){let{target:e,position:t}=i;Te=!1,oe.to(M.target,{x:e.x,y:e.y,z:e.z,duration:2,onUpdate:()=>{M.update()},onComplete:()=>{Te=!0}}),oe.to(m.position,{x:t.x,y:t.y,z:t.z,duration:2})},auto(i){this.autoVidoe.show=!0;let e=()=>{this.autoVidoe.name=i[this.autoVidoe.count].name,this.CustomPerspective(i[this.autoVidoe.count]),this.autoVidoe.count++,this.autoVidoe.count==i.length&&(this.autoVidoe.count=0)};e(),this.autoVidoe.time=setInterval(()=>{e()},6e3)},exitAuto(){this.autoVidoe.name="",this.autoVidoe.count=0,this.autoVidoe.show=!1,clearInterval(this.autoVidoe.time)},gsapTo(i,e,t){oe.to(M.target,{x:i,y:e,z:t,duration:2,onUpdate:()=>{M.update()}}),oe.to(m.position,{x:i<0?i-200:i+200,y:e,z:t<0?t-200:t+200,duration:2})},setHouse(i,e){R.traverse(t=>{t.isMesh&&t.name.split("-")[0].toLowerCase()==i.toLowerCase()&&(t.material.opacity=e?.6:0)})},showHouse(i){i?R.traverse(e=>{e.isMesh&&(e.material.opacity=.6)}):R.traverse(e=>{e.isMesh&&(e.material.opacity=0)})}},beforeDestroy(){u&&(w.remove(u.group),u.dispose(),u=null),window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[]}};var ui=function(){var e=this,t=e._self._c;return Object.keys(e.threedata).length>0?t("div",{attrs:{id:"three"}},[e.proinit?t("loading",{attrs:{loadingdata:e.threedata.loadingdata,loadnum:e.progress},on:{imageLoad:e.imageLoad}}):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.autoVidoe.show&&e.progress==100,expression:"!autoVidoe.show && progress == 100"}]},[e.cesiumshow?t("sunshadow",{ref:"sunshadow",attrs:{threedata:e.threedata,mapdata:e.mapdata,sunshadowdata:e.threedata.sunshadowdata,maplist:e.maplist,explain:e.explain},on:{ckmap:e.ckmap}}):e._e(),e.init?t("disclaimer",{on:{agree:function(a){e.init=!1}}}):e._e(),t("img",{ref:"compass",attrs:{id:"compass",src:Dt,alt:""}}),Object.keys(e.coordinate).length>0?t("div"):e._e()],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.autoVidoe.show,expression:"autoVidoe.show"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%","z-index":"1"}},[t("img",{staticClass:"vidoeshowBj",attrs:{src:Tt,alt:""}}),t("span",{staticClass:"vidoeshowName"},[e._v(e._s(e.autoVidoe.name))]),t("span",{staticClass:"vidoeshowClose",on:{click:e.exitAuto}})])],1):e._e()},ci=[],pi=et(di,ui,ci,!1,null,"ccd8aadd",null,null);const hi=pi.exports;const mi={components:{ThreeGis:hi},data(){return{header:null}},created(){this.header="https://oss.homevista.jp/custom/model/csmodel"}};var fi=function(){var e=this,t=e._self._c;return t("div",[t("ThreeGis",{attrs:{header:e.header}})],1)},gi=[],vi=et(mi,fi,gi,!1,null,"d0d559a0",null,null);const _i=vi.exports;export{_i as default};
