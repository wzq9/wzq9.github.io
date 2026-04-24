var _e=(i,e,t)=>new Promise((s,a)=>{var n=v=>{try{m(t.next(v))}catch(N){a(N)}},o=v=>{try{m(t.throw(v))}catch(N){a(N)}},m=v=>v.done?s(v.value):Promise.resolve(v.value).then(n,o);m((t=t.apply(i,e)).next())});import{ak as nt,M as ve,l as Se,al as Ie,g as ue,am as we,V as X,W as Re,an as Ae,N as st,ao as ot,o as Je,ap as rt,aq as lt,ar as dt,as as ut,at as ct,au as pt,a0 as et,av as ht,aw as ft,ax as mt,e as D,p as gt,q as vt,r as wt,Z as xt,s as St,t as yt,u as _t,v as bt,w as Ct,x as Be,y as Et,z as Fe,A as Ne,G as be,H as Ue,I as Oe,J as oe,L as ke,K as je,O as Dt,Q as Tt,X as re,_ as Pt,Y as Lt,$ as Mt,S as ce,a1 as Rt,a2 as At,f as zt,P as Gt,a3 as It,a4 as Bt,a5 as Ft,a6 as Nt,a7 as Ut,a8 as Ce,a9 as Ot,aa as Ve,ai as kt,ab as jt,ac as He,ad as Vt,af as Ht,ag as We,ah as Wt,i as $e,m as Xe,aj as $t}from"./loading-bj-1419b8e1.js";import{n as tt,a as Xt}from"./index-88647539.js";import"./tip-c9e56a80.js";class se{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kt=new nt(-1,1,1,-1,0,1);class Qt extends Se{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}}const Yt=new Qt;class ze{constructor(e){this._mesh=new ve(Yt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}var de=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(P){P.preventDefault(),s(++i%e.children.length)},!1);function t(P){return e.appendChild(P.dom),P}function s(P){for(var R=0;R<e.children.length;R++)e.children[R].style.display=R===P?"block":"none";i=P}var a=(performance||Date).now(),n=a,o=0,m=t(new de.Panel("FPS","#0ff","#002")),v=t(new de.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var N=t(new de.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:e,addPanel:t,showPanel:s,begin:function(){a=(performance||Date).now()},end:function(){o++;var P=(performance||Date).now();if(v.update(P-a,200),P>=n+1e3&&(m.update(o*1e3/(P-n),100),n=P,o=0,N)){var R=performance.memory;N.update(R.usedJSHeapSize/1048576,R.jsHeapSizeLimit/1048576)}return P},update:function(){a=this.end()},domElement:e,setMode:s}};de.Panel=function(i,e,t){var s=1/0,a=0,n=Math.round,o=n(window.devicePixelRatio||1),m=80*o,v=48*o,N=3*o,P=2*o,R=3*o,I=15*o,B=74*o,j=30*o,V=document.createElement("canvas");V.width=m,V.height=v,V.style.cssText="width:80px;height:48px";var b=V.getContext("2d");return b.font="bold "+9*o+"px Helvetica,Arial,sans-serif",b.textBaseline="top",b.fillStyle=t,b.fillRect(0,0,m,v),b.fillStyle=e,b.fillText(i,N,P),b.fillRect(R,I,B,j),b.fillStyle=t,b.globalAlpha=.9,b.fillRect(R,I,B,j),{dom:V,update:function(r,c){s=Math.min(s,r),a=Math.max(a,r),b.fillStyle=t,b.globalAlpha=1,b.fillRect(0,0,m,I),b.fillStyle=e,b.fillText(n(r)+" "+i+" ("+n(s)+"-"+n(a)+")",N,P),b.drawImage(V,R+o,I,B-o,j,R,I,B-o,j),b.fillRect(R+B-o,I,o,j),b.fillStyle=t,b.globalAlpha=.9,b.fillRect(R+B-o,I,o,n((1-r/c)*j))}}};const qt=de,Zt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xe extends se{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ue?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=we.clone(e.uniforms),this.material=new ue({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ze(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ke extends se{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const a=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let o,m;this.inverse?(o=0,m=1):(o=1,m=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,o,4294967295),n.buffers.stencil.setClear(m),n.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,4294967295),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}}class Jt extends se{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ei{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new X);this._width=s.width,this._height=s.height,t=new Re(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ae}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xe(Zt),this.copyPass.material.blending=st,this.clock=new ot}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let a=0,n=this.passes.length;a<n;a++){const o=this.passes[a];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),o.needsSwap){if(s){const m=this.renderer.getContext(),v=this.renderer.state.buffers.stencil;v.setFunc(m.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),v.setFunc(m.EQUAL,1,4294967295)}this.swapBuffers()}Ke!==void 0&&(o instanceof Ke?s=!0:o instanceof Jt&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(s,a),this.renderTarget2.setSize(s,a);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(s,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ti extends se{constructor(e,t,s=null,a=null,n=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=a,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,s){const a=e.autoClear;e.autoClear=!1;let n,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(n=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=a}}const ii={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ai extends se{constructor(){super();const e=ii;this.uniforms=we.clone(e.uniforms),this.material=new rt({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ze(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ut?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ct?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===et?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ht?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ft&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Qe={name:"ConvolutionShader",defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new X(.001953125,0)},cKernel:{value:[]}},vertexShader:`

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

		}`,buildKernel:function(i){let t=2*Math.ceil(i*3)+1;t>25&&(t=25);const s=(t-1)*.5,a=new Array(t);let n=0;for(let o=0;o<t;++o)a[o]=ni(o-s,i),n+=a[o];for(let o=0;o<t;++o)a[o]/=n;return a}};function ni(i,e){return Math.exp(-(i*i)/(2*e*e))}class $ extends se{constructor(e=1,t=25,s=4){super(),this.renderTargetX=new Re(1,1,{type:Ae}),this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new Re(1,1,{type:Ae}),this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=we.clone(pe.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new ue({name:pe.name,uniforms:this.combineUniforms,vertexShader:pe.vertexShader,fragmentShader:pe.fragmentShader,blending:mt,transparent:!0});const a=Qe;this.convolutionUniforms=we.clone(a.uniforms),this.convolutionUniforms.uImageIncrement.value=$.blurX,this.convolutionUniforms.cKernel.value=Qe.buildKernel(s),this.materialConvolution=new ue({name:a.name,uniforms:this.convolutionUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new ze(null)}render(e,t,s,a,n){n&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=s.texture,this.convolutionUniforms.uImageIncrement.value=$.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=$.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,n&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(s),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const pe={name:"CombineShader",uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

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

		}`};$.blurX=new X(.001953125,0);$.blurY=new X(0,.001953125);const si={name:"LUTShader",uniforms:{lut:{value:null},lutSize:{value:0},tDiffuse:{value:null},intensity:{value:1}},vertexShader:`

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

	`};class oi extends xe{set lut(e){const t=this.material;e!==this.lut&&(t.uniforms.lut.value=null,e&&(t.uniforms.lutSize.value=e.image.width,t.uniforms.lut.value=e))}get lut(){return this.material.uniforms.lut.value}set intensity(e){this.material.uniforms.intensity.value=e}get intensity(){return this.material.uniforms.intensity.value}constructor(e={}){super(si),this.lut=e.lut||null,this.intensity="intensity"in e?e.intensity:1}}const ri={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new X(1/1024,1/512)}},vertexShader:`

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
			
		}`},li={name:"ColorCorrectionShader",uniforms:{tDiffuse:{value:null},powRGB:{value:new D(2,2,2)},mulRGB:{value:new D(1,1,1)},addRGB:{value:new D(0,0,0)}},vertexShader:`

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

		}`};ve.prototype.raycast=xt;Se.prototype.computeBoundsTree=gt;Se.prototype.disposeBoundsTree=vt;let M,x,S,u,H,he,k,h,le,fe,Y,Ee=[];window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[];let di=new wt,Ye=new D,De=new D,q,Te,me,Pe=!0,Z=!0,J=!0,ee=!0,Le=!0,l,te,W,ie,qe,A,ae,ge,Ze,ne;const Me={},ui={components:{Peripheralmap:St,disclaimer:yt,loading:_t,sunshadow:bt,debugcesium:Ct},props:{header:{type:String,default:""},jsonUrls:{type:Object,default:null}},data(){return{cesiumshow:!1,init:null,proinit:!0,threedata:{},mapdata:[],maplistdata:null,maplist:[],progress:0,autoVidoe:{show:!1,count:0,time:null,name:""},distance:0,explain:"",value1:!1,rimVisible:!1,coordinate:{},dataName:""}},watch:{value1:{handler(i){this.condition=i?1:-1,i?this.rimVisible=!0:this.rimVisible=!1,Z=!i,J=!i,ee=!i},immediate:!0},rimVisible:{handler(i){if(i)hideset.forEach(e=>setOpacityRecursive(e,1)),trees.forEach(e=>setOpacityRecursive(e,1));else{if(this.distance>l.distance4)return;hideset.forEach(e=>setOpacityRecursive(e,0)),trees.forEach(e=>setOpacityRecursive(e,0))}}}},created(){return _e(this,null,function*(){let i=this;const e=this.jsonUrls||{};if(Be.mobile()){window.devicetype.phone=!0;let a=e.phone||this.header+"/cesiunjsonpadiphone.json";yield t(a)}else if(Be.tablet()){window.devicetype.pad=!0;let a=e.pad||this.header+"/cesiunjsonpad.json";yield t(a)}else{window.devicetype.pc=!0;let a=e.pc||this.header+"/cesiunjson.json";yield t(a)}function t(a){return new Promise((n,o)=>_e(this,null,function*(){try{const m=yield Xt.get(a);i.threedata=m.data,l=m.data.initmap,te=m.data.modelbox,W=m.data.croping,Ze=m.data.NewPlanColor,ie=m.data.path;for(let v=0;v<ie.length;v++)Me[`x${v+1}`]=ie[v][0],Me[`y${v+1}`]=ie[v][1],Me[`z${v+1}`]=ie[v][2];qe={apiKey:l.apiKey},n(!0)}catch(m){}}))}let s=!sessionStorage.getItem("agree");this.init=s,this.$nextTick(()=>{const a=new Et,n=new X;a.firstHitOnly=!0,window.threeMapImg=(r,c)=>{if(threeclearimg(),Te==r)return Te="",this.removeline(),!1;if(c){let p=this.xyz(c.longitudeAndLatitude.split(",")[0],c.longitudeAndLatitude.split(",")[1],te.mapheight);this.gsapTo(p.x,p.y,p.z),this.addgoogelmap(c.googelmap),window.threeMapImg(r);return}let f=document.querySelector(`.dataid${r}`);f.style.visibility="visible",f.style.pointerEvents="all",Te=r},window.threeclearimg=()=>{let r=document.querySelectorAll(".arrow_box");for(let c=0;c<r.length;c++){const f=r[c];f.style.visibility="hidden",f.style.pointerEvents="none"}};function o(){var y,E,_,C;u&&(x.remove(u.group),u.dispose(),u=null),u=new Ot,i.threedata.isgis?u.registerPlugin(new Ve({apiToken:qe.apiKey})):u.registerPlugin(new Ve({apiToken:"0"})),u.visible=!1,u.errorTarget=l.errorTarget,u.lruCache.maxBytesSize=(y=window.devicetype)!=null&&y.pc?u.lruCache.maxBytesSize*2:u.lruCache.maxBytesSize,u.lruCache.minBytesSize=(E=window.devicetype)!=null&&E.pc?u.lruCache.minBytesSize*2:u.lruCache.minBytesSize,u.lruCache.minSize=(_=window.devicetype)!=null&&_.pc?u.lruCache.minSize*2:u.lruCache.minSize,u.lruCache.maxSize=(C=window.devicetype)!=null&&C.pc?u.lruCache.maxSize*2:u.lruCache.maxSize,u.setLatLonToYUp(l.lat*oe.DEG2RAD,l.lon*oe.DEG2RAD),N(),u.visible=!0;const r=new kt(()=>{const L=setInterval(()=>{x.background!==null&&(he.dispose(),S.info.reset(),clearInterval(L))},500)},(L,d,z)=>{const T=d/z*100;i.progress=T.toFixed(0)/1}),c=new jt;c.setDecoderPath("https://unpkg.com/three@0.170.0/examples/jsm/libs/draco/gltf/");const f=new He(u.manager);f.setDRACOLoader(c),he=new Vt(r).setTranscoderPath("https://unpkg.com/three@0.170.0/examples/jsm/libs/basis/").detectSupport(S),i.skyBox(x,he,r);const p=new He(r);p.setKTX2Loader(he),p.setDRACOLoader(c);let w=[],g=`https://oss.homevista.jp/custom/model/csmodel/${i.$route.params.id}/model.gltf`;p.load(g,L=>{le=L.scene,le.traverse(d=>{var z;d.castShadow=l.modelcastShadow,d.receiveShadow=l.modelreceiveShadow,(z=d==null?void 0:d.material)!=null&&z.transparent&&(d.material.depthWrite=!0,d.renderOrder=1,d.material.ColorSpace=ce),d.name==l.modelHome?A=d:d.name==l.modelTrees?trees.push(d):d.name==l.modelLight?d.traverse(T=>{var K,Q;T.type!=="Object3D"&&(T.intensity=l.modelLightintensity,T.shadow.mapSize.width=(K=window.devicetype)!=null&&K.pc?4096:2048,T.shadow.mapSize.height=(Q=window.devicetype)!=null&&Q.pc?4096:2048,T.shadow.camera.left=-1500,T.shadow.camera.right=1500,T.shadow.camera.top=1500,T.shadow.camera.bottom=-1500,T.shadow.bias=-.005)}):d.name.indexOf(l.modelGIS)!==-1||d.name.indexOf("m-gis")!==-1?hideset.push(d):d.name==l.modelbox&&d.traverse(T=>{T.isMesh&&w.push(T)})}),x.add(L.scene),le.position.set(W.ModelPositionX,W.ModelPositionY,W.ModelPositionZ),le.rotation.set(W.ModelRotationX,W.ModelRotationY,W.ModelRotationZ),w.map(d=>{d.isMesh&&(d.receiveShadow=!1,d.castShadow=!1,d.geometry.boundsTree=new Ht(d.geometry),d.geometry.computeBoundsTree(),Ee.push(d),d.material.opacity=0,d.material.transparent=!0,d.material.depthWrite=!1,d.material.ColorSpace=ce)}),setTimeout(()=>{if(!A){i.threedata.Selectlist.map(d=>{d.name=="户型"&&(d.visible=!1)});return}A.traverse(d=>{if(!d.isMesh)return;let z=Ze.find(ye=>d.name.toLowerCase().includes(ye.type.toLowerCase()));const T=new D,K=new Ce,Q=new D;d.matrixWorld.decompose(T,K,Q),d.material=new We({color:z.color,opacity:0,transparent:!0,depthWrite:!1})})},1e3)},()=>{},L=>{i.$router.push("/404")}),u.manager.addHandler(/\.gltf$/,f),x.add(u.group),u.setResolutionFromRenderer(h,S),u.setCamera(h)}let m=()=>{S=new Mt({antialias:!0}),S.localClippingEnabled=!0,S.toneMapping=et,S.toneMappingExposure=l.toneMappingExposure,S.outputColorSpace=ce,S.outputEncoding=ce,S.physicallyCorrectLights=!0,S.shadowMap.enabled=!0,S.shadowMap.type=Rt,S.setPixelRatio(window.devicePixelRatio),document.querySelector("#three").appendChild(S.domElement),H=new At,H.setSize(window.innerWidth,window.innerHeight),H.domElement.style.position="absolute",H.domElement.style.top="0px",H.domElement.style.pointerEvents="none",document.querySelector("#three").appendChild(H.domElement),x=new zt,h=new Gt(60,window.innerWidth/window.innerHeight,1,16e5),h.position.set(l.position.x,l.position.y,l.position.z);const r=new It(4210752,1);x.add(r);const c=new ai,f=new ti(x,h);k=new ei(S),k.setPixelRatio(window.devicePixelRatio),k.setSize(window.innerWidth,window.innerHeight),k.addPass(new $),k.addPass(new oi);const p=new xe(ri);p.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight);const w=new xe(li);w.uniforms.powRGB.value.set(1.4,1.4,1.4),k.addPass(w),k.addPass(p),k.addPass(c),k.addPass(f);let g=new ve(new Bt(3,32,32),new Ft);g.material.opacity=0,g.material.transparent=!0,g.material.depthWrite=!1,g.material.needsUpdate=!0,x.add(g),M=new Nt(h,S.domElement),M.target.set(l.target.x,l.target.y,l.target.z),M.minDistance=l.controls.minDistance,M.maxDistance=l.controls.maxDistance,M.minPolarAngle=l.controls.minPolarAngle,M.maxPolarAngle=l.controls.maxPolarAngle,M.enableDamping=l.controls.enableDamping,M.enablePan=l.controls.enablePan,M.update(),o(),P(),window.addEventListener("resize",P,!1);let y=l.controls.minHeight,E=l.controls.maxHeight;M.addEventListener("change",()=>{if(i.distance<=l.controls.distance){const _=l.controls.maxMoveSpeed,C=new D().subVectors(h.position,De);C.length()>_&&(C.setLength(_),h.position.copy(De).add(C))}if(h.position.y<y&&(h.position.y=y),h.position.y>E&&(h.position.y=E),le&&Ee.length>0&&Pe){const _=new D;h.getWorldPosition(_),g.position.copy(_),g.lookAt(h.position);const C=Ee[0];g.updateMatrixWorld();let L=di.copy(C.matrixWorld).invert().multiply(g.matrixWorld);C.geometry.boundsTree.intersectsGeometry(g.geometry,L)?h.position.copy(Ye):Ye.copy(h.position)}De.copy(h.position),M.target.y=35}),this.addpoint(),l.initPoint&&this.addInitPoint(),this.cesiumshow=!0};v();function v(){q=new qt,q.showPanel(0),document.body.appendChild(q.dom)}function N(){let r=l.clipping;r=r.map(p=>i.xyz(p[0],p[1],0));let c=[];new Wt;function f(p){const w=[];for(let g=0;g<p.length-1;g++){const y=new D().subVectors(p[g],p[g+1]),E=new D(y.z,0,-y.x).normalize();p[g].dot(E);const _=new $t().setFromNormalAndCoplanarPoint(E,p[g]);w.push(_)}return w}c=f(r),u.addEventListener("load-model",p=>{p.scene.traverse(w=>{w.isMesh&&(w.material.clippingPlanes=c,w.material.clipIntersection=!0,w.material.clipShadows=!0,w.material.alphaToCoverage=!0)})})}function P(){h.aspect=window.innerWidth/window.innerHeight,S.setSize(window.innerWidth,window.innerHeight),H.setSize(window.innerWidth,window.innerHeight),h.updateProjectionMatrix(),k.setSize(window.innerWidth,window.innerHeight),S.setPixelRatio(window.devicePixelRatio)}function R(r,c,f=.5){re.to(r,{opacity:c,duration:f,ease:"power1.inOut",onStart:()=>{r.transparent=!0,r.visible=!0},onComplete:()=>{r.transparent=!0,c==0&&(r.visible=!1)}})}function I(r,c){r.isMesh?R(r.material,c):r.children.forEach(f=>I(f,c))}window.animateOpacity=R,window.setOpacityRecursive=I,i.condition=-1;function B(r,c=1){u.group&&(u.group.visible=r,i.rimVisible||(hideset.forEach(f=>I(f,c)),trees.forEach(f=>I(f,c))))}window.updateVisibility=B;function j(){if(requestAnimationFrame(j),!u)return;M.update(),u.setResolutionFromRenderer(h,S),u.setCamera(h),h.updateMatrixWorld(),u.update(),planesel.forEach(w=>{w.lookAt(h.position)}),ne&&ne.lookAt(h.position);let r=new D(-h.position.x,0,-h.position.z).normalize(),c=Math.atan2(-r.x,-r.z);i.$refs.compass&&(i.$refs.compass.style.transform="rotateZ("+(oe.radToDeg(c)+90)+"deg)");const f=new D;h.getWorldPosition(f);const p=f.distanceTo(new D(0,0,0));i.distance=p,i.condition==-1?p<=l.distance1&&Z?(Z=!1,J=!0,ee=!0,B(!1,0)):p>l.distance2&&p<=l.distance3&&J?(J=!1,Z=!0,ee=!0,B(!1,1)):p>l.distance4&&ee&&(ee=!1,J=!0,Z=!0,B(!0,1)):Le&&(B(!0,1),Le=!1,setTimeout(()=>{Le=!0},500)),p<=l.columndistance&&Y&&Y.uniforms&&(p-100>=0&&(Y.uniforms.u_height.value=(p-100)/2),Y.uniforms.u_opacity.value=p/1e3),i.coordinate={camera:{x:h.position.x,y:h.position.y,z:h.position.z},target:{x:M.target.x,y:M.target.y,z:M.target.z},distance:p,devicetype:window.devicetype},V(),k.render(),H.render(x,h),q==null||q.update()}function V(){if(u){const r=u.group.matrixWorld.clone().invert(),c=h.position.clone().applyMatrix4(r),f={};Ut.getPositionToCartographic(c,f),(u==null?void 0:u.getAttributions().length)>0&&(i.explain=u.getAttributions()[0].value)}}function b(){fe&&x.remove(fe);const r=({height:f=10,color:p=l.columncolor,opacity:w=.5,speed:g=5})=>{const y=`
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
        `;return new ue({uniforms:{u_height:{value:f},u_opacity:{value:w},u_color:{value:new Je(p)},time:{value:0},speed:{value:g}},transparent:!0,depthWrite:!1,depthTest:!1,side:$e,vertexShader:y,fragmentShader:E})},c=({height:f=10,path:p=[],wallMeshmaterial:w,expand:g=!0})=>{let y=null;g?y=p.reduce((G,[F,U,O])=>G.concat([[[F,U,O],[F,U+f,O]]]),[]):y=p;const _=y.reduce((G,F,U)=>U===y.length-1?G:G.concat([[F,y[U+1]]]),[]).reduce((G,F)=>{const[[U,O],[at,Ge]]=F;return G.concat(...O,...U,...Ge,...U,...at,...Ge)},[]),C=new Se,L=new Float32Array(_);C.setAttribute("position",new Xe(L,3));const z=new Array(_.length/3/6).fill(0).map((G,F)=>_.slice(F*3*6,(F+1)*3*6)).map((G,F)=>new Array(G.length/3).fill(0).map((U,O)=>G.slice(O*3,(O+1)*3)));C.computeBoundingBox();const{min:T,max:K}=C.boundingBox,Q=K.x-T.x,ye=[].concat(...z.map(G=>{const F=G[0],U=G[5],O=new D(...F).distanceTo(new D(...U))/(Q/10);return[0,1,0,0,O,1,0,0,O,0,O,1]}));C.setAttribute("uv",new Xe(new Float32Array(ye),2));const it=w||new We({color:65535,side:$e});return new ve(C,it)};Y=r({height:100,speed:5}),fe=c({path:ie,wallMeshmaterial:Y,height:500}),x.add(fe)}m(),j(),l.columnvisibility&&b(),document.querySelector("#three").addEventListener("mousedown",r=>{if(r.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;r.preventDefault(),ae&&(x.remove(ae),this.dataName=""),n.x=r.clientX/S.domElement.clientWidth*2-1,n.y=-(r.clientY/S.domElement.clientHeight)*2+1,a.setFromCamera(n,h);var c=a.intersectObjects(x.children,!0);if(c.length>0&&(A!=null&&A.children)){let g=0;for(let y=0;y<c.length;y++){if(g)return!1;const E=c[y];let _=A.children.find(C=>{if(C.name==E.object.name)return C});if(_&&i.$refs.sunshadow.houses){this.dataName=_.name,E.object.updateMatrix(),E.object.updateMatrixWorld(!0);const C=new D,L=new Ce,d=new D;E.object.matrixWorld.decompose(C,L,d);const z=new Fe(E.object.geometry);var f=new Ne().fromEdgesGeometry(z),p=new be({color:l.EdgeLinecolor,linewidth:l.Edgelinewidth}),w=new Ue(f,p);w.position.copy(C),w.rotation.copy(L),w.scale.copy(d),x.add(w),ae=w,g++}}}}),document.querySelector("#three").addEventListener("mousemove",r=>{if(r.target.tagName!=="CANVAS"||i.$refs.sunshadow.SelectTab!=="户型")return!1;r.preventDefault(),ge&&x.remove(ge);let c={};c.x=r.clientX/S.domElement.clientWidth*2-1,c.y=-(r.clientY/S.domElement.clientHeight)*2+1,a.setFromCamera(c,h);var f=a.intersectObjects(x.children,!0);if(f.length>0&&(A!=null&&A.children)){let y=0;for(let E=0;E<f.length;E++){if(y)return!1;const _=f[E];if(A.children.find(L=>{if(L.name==_.object.name)return L})&&i.$refs.sunshadow.houses){_.object.updateMatrix(),_.object.updateMatrixWorld(!0);const L=new D,d=new Ce,z=new D;_.object.matrixWorld.decompose(L,d,z);const T=new Fe(_.object.geometry);var p=new Ne().fromEdgesGeometry(T),w=new be({color:l.EdgeLinecolor,linewidth:l.Edgelinewidth,transparent:!0,opacity:.5}),g=new Ue(p,w);g.position.copy(L),g.rotation.copy(d),g.scale.copy(z),x.add(g),ge=g,y++}}}})})})},methods:{imageLoad(){this.$store.commit("global/SET_LOADING",!1)},setmap(){this.condition=this.value1?1:-1,this.condition==-1&&(Z=!0,J=!0,ee=!0)},initmap(){this.CustomPerspective(l)},addpoint(){this.threedata.Selectlist.find(i=>i.name=="周边").visible&&(this.threedata.mapdata.map((i,e)=>{i.iconShow=!1;let t=`https://oss.homevista.jp/custom/model${i.icon}`;i.mapPerimeters.map((s,a)=>{const n=document.createElement("div");let o=JSON.stringify(s);n.innerHTML=`
             <div class="into" id="into" >
                <div class="mapimg" style="background:url('${t}') no-repeat;"  onclick='threeMapImg("${""+e+a}",${o})' ></div>
              <div class='arrow_box dataid${""+e+a}'>
                <div class="into-img" >
                   <div  style="background:url('${s.img}?x-oss-process=image/resize,w_750,m_lfit,p_100') no-repeat center center;background-size:cover;"  ></div>
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
          `;const m=new Oe(n);m.name="mapPoint"+e+a;let v=this.xyz(s.longitudeAndLatitude.split(",")[0],s.longitudeAndLatitude.split(",")[1],te.mapheight);m.scale.set(.25,.25,.25),m.position.set(v.x,v.y,v.z),m.visible=!1,x.add(m),planesel.push(m)})}),this.mapdata=this.threedata.mapdata)},addInitPoint(){let i=new URL("/assets/point-0fa1876a.png",self.location).href;const e=document.createElement("div");e.innerHTML=`
          <div class="into" id="into" >
                <div  style="position: absolute; top: 0; left: 0; width:15px; height:15px; background:url('${i}') no-repeat; background-size:100% 100%;" ></div>
          </div>`,ne=new Oe(e);let t=this.xyz(l.lat/1,l.lon/1,l.y);ne.scale.set(1,1,1),ne.position.set(t.x,t.y,t.z),x.add(ne)},xyz(i,e,t){const s=new D;u.ellipsoid.getCartographicToPosition(oe.degToRad(i),oe.degToRad(e),t,s);const a=u.group.matrixWorld.clone();return s.applyMatrix4(a),s},skyBox(i,e){e.load(te.sky2,t=>{t.minFilter=ke,t.mapping=je,i.background=t,S.initTexture(t),t.dispose()}),e.load(te.sky1,t=>{t.minFilter=ke,t.mapping=je,i.environment=t,S.initTexture(t),t.dispose()})},ckmap(i){let{item:e,i:t,index:s}=i;this.addgoogelmap(e.googelmap);let a=this.xyz(e.longitudeAndLatitude.split(",")[0],e.longitudeAndLatitude.split(",")[1],100);this.gsapTo(a.x,a.y,a.z),window.threeMapImg(""+s+t)},removeline(){me&&x.remove(me)},removemodeledges(){ae&&(x.remove(ae),this.dataName=""),ae&&x.remove(ge)},addgoogelmap(i){if(!i||i.length==0)return;this.removeline();let e=[];i.map(a=>{const n=this.xyz(a.split(",")[0],a.split(",")[1],te.mapline);e.push(n.x,n.y,n.z)});const t=new Dt;t.setPositions(e);let s=new be({color:l.Linecolor,linewidth:l.linewidth});me=new Tt(t,s),x.add(me)},CustomPerspective(i){let{target:e,position:t}=i;Pe=!1,re.to(M.target,{x:e.x,y:e.y,z:e.z,duration:2,onUpdate:()=>{M.update()},onComplete:()=>{Pe=!0}}),re.to(h.position,{x:t.x,y:t.y,z:t.z,duration:2})},auto(i){this.autoVidoe.show=!0;let e=()=>{this.autoVidoe.name=i[this.autoVidoe.count].name,this.CustomPerspective(i[this.autoVidoe.count]),this.autoVidoe.count++,this.autoVidoe.count==i.length&&(this.autoVidoe.count=0)};e(),this.autoVidoe.time=setInterval(()=>{e()},6e3)},exitAuto(){this.autoVidoe.name="",this.autoVidoe.count=0,this.autoVidoe.show=!1,clearInterval(this.autoVidoe.time)},gsapTo(i,e,t){re.to(M.target,{x:i,y:e,z:t,duration:2,onUpdate:()=>{M.update()}}),re.to(h.position,{x:i<0?i-200:i+200,y:e,z:t<0?t-200:t+200,duration:2})},setHouse(i,e){A.traverse(t=>{t.isMesh&&t.name.split("-")[0].toLowerCase()==i.toLowerCase()&&(t.material.opacity=e?.6:0)})},showHouse(i){i?A.traverse(e=>{e.isMesh&&(e.material.opacity=.6)}):A.traverse(e=>{e.isMesh&&(e.material.opacity=0)})}},beforeDestroy(){u&&(x.remove(u.group),u.dispose(),u=null),window.planesel=[],window.devicetype={},window.hideset=[],window.trees=[]}};var ci=function(){var e=this,t=e._self._c;return Object.keys(e.threedata).length>0?t("div",{attrs:{id:"three"}},[e.proinit?t("loading",{attrs:{loadingdata:e.threedata.loadingdata,loadnum:e.progress},on:{imageLoad:e.imageLoad}}):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.autoVidoe.show&&e.progress==100,expression:"!autoVidoe.show && progress == 100"}]},[e.cesiumshow?t("sunshadow",{ref:"sunshadow",attrs:{threedata:e.threedata,mapdata:e.mapdata,sunshadowdata:e.threedata.sunshadowdata,maplist:e.maplist,explain:e.explain},on:{ckmap:e.ckmap}}):e._e(),e.init?t("disclaimer",{on:{agree:function(s){e.init=!1}}}):e._e(),t("img",{ref:"compass",attrs:{id:"compass",src:Pt,alt:""}}),Object.keys(e.coordinate).length>0?t("div"):e._e()],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.autoVidoe.show,expression:"autoVidoe.show"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%","z-index":"1"}},[t("img",{staticClass:"vidoeshowBj",attrs:{src:Lt,alt:""}}),t("span",{staticClass:"vidoeshowName"},[e._v(e._s(e.autoVidoe.name))]),t("span",{staticClass:"vidoeshowClose",on:{click:e.exitAuto}})])],1):e._e()},pi=[],hi=tt(ui,ci,pi,!1,null,"c29bfe7b",null,null);const fi=hi.exports,mi="/assets/cesiunjson-8f8408af.json",gi="/assets/cesiunjsonpad-f6f3d0b8.json",vi="/assets/cesiunjsonpadiphone-adffcd36.json";const wi={components:{ThreeGis:fi},data(){return{header:null,jsonUrls:{pc:mi,pad:gi,phone:vi}}},created(){this.header="https://oss.homevista.jp/custom/model/csmodel"}};var xi=function(){var e=this,t=e._self._c;return t("div",[t("ThreeGis",{attrs:{header:e.header,"json-urls":e.jsonUrls}})],1)},Si=[],yi=tt(wi,xi,Si,!1,null,"bbf260a0",null,null);const Di=yi.exports;export{Di as default};
