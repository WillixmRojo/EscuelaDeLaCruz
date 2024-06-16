import{b as he,V as Te,W as Le,d as v,h as M,f as Me,g as ye,X as Je,Y as H,q as et,Z as tt,$ as U,a0 as ue,a1 as xe,a2 as re,a3 as me,a4 as ne,H as at,a5 as ot,a6 as it,a7 as ut,i as $e,e as Q,x as z,a8 as rt,a9 as nt,k as g,aa as R,m as Ee,z as qe,n as De,ab as K,ac as _e,l as Ve,ad as lt,ae as st,L as dt,K as ct,r as ft,o as X,c as j,w as k,a as C,M as $,af as vt,ag as le,ah as V,O as se,ai as Y,aj as Be,ak as de}from"./index.38628778.js";import{c as mt,Q as ce,a as A,b as ht}from"./QToolbarTitle.fa7d2937.js";import{b as yt,Q as pt,a as gt}from"./QLayout.c675e75b.js";import{u as bt}from"./use-quasar.00084d0c.js";var wt=he({name:"QList",props:{...Te,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:i}){const r=ye(),m=Le(t,r.proxy.$q),e=v(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(m.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>M(t.tag,{class:e.value},Me(i.default))}});const pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ct=Object.keys(pe);pe.all=!0;function Se(t){const i={};for(const r of Ct)t[r]===!0&&(i[r]=!0);return Object.keys(i).length===0?pe:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const kt=["INPUT","TEXTAREA"];function ze(t,i){return i.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof i.handler=="function"&&kt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(i.uid)===-1)}function fe(t,i,r){const m=me(t);let e,a=m.left-i.event.x,n=m.top-i.event.y,h=Math.abs(a),y=Math.abs(n);const l=i.direction;l.horizontal===!0&&l.vertical!==!0?e=a<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?e=n<0?"up":"down":l.up===!0&&n<0?(e="up",h>y&&(l.left===!0&&a<0?e="left":l.right===!0&&a>0&&(e="right"))):l.down===!0&&n>0?(e="down",h>y&&(l.left===!0&&a<0?e="left":l.right===!0&&a>0&&(e="right"))):l.left===!0&&a<0?(e="left",h<y&&(l.up===!0&&n<0?e="up":l.down===!0&&n>0&&(e="down"))):l.right===!0&&a>0&&(e="right",h<y&&(l.up===!0&&n<0?e="up":l.down===!0&&n>0&&(e="down")));let u=!1;if(e===void 0&&r===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};e=i.event.lastDir,u=!0,e==="left"||e==="right"?(m.left-=a,h=0,a=0):(m.top-=n,y=0,n=0)}return{synthetic:u,payload:{evt:t,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:m,direction:e,isFirst:i.event.isFirst,isFinal:r===!0,duration:Date.now()-i.event.time,distance:{x:h,y},offset:{x:a,y:n},delta:{x:m.left-i.event.lastX,y:m.top-i.event.lastY}}}}let xt=0;var ve=Je({name:"touch-pan",beforeMount(t,{value:i,modifiers:r}){if(r.mouse!==!0&&H.has.touch!==!0)return;function m(a,n){r.mouse===!0&&n===!0?at(a):(r.stop===!0&&re(a),r.prevent===!0&&xe(a))}const e={uid:"qvtp_"+xt++,handler:i,modifiers:r,direction:Se(r),noop:et,mouseStart(a){ze(a,e)&&tt(a)&&(U(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(ze(a,e)){const n=a.target;U(e,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,n){if(H.is.firefox===!0&&ue(t,!0),e.lastEvt=a,n===!0||r.stop===!0){if(e.direction.all!==!0&&(n!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const l=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&xe(l),a.cancelBubble===!0&&re(l),Object.assign(l,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:l}}re(a)}const{left:h,top:y}=me(a);e.event={x:h,y,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:y}},move(a){if(e.event===void 0)return;const n=me(a),h=n.left-e.event.x,y=n.top-e.event.y;if(h===0&&y===0)return;e.lastEvt=a;const l=e.event.mouse===!0,u=()=>{m(a,l);let f;r.preserveCursor!==!0&&r.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),mt(),e.styleCleanup=c=>{if(e.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),l===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{_(),c()},50):_()}else c!==void 0&&c()}};if(e.event.detected===!0){e.event.isFirst!==!0&&m(a,e.event.mouse);const{payload:f,synthetic:c}=fe(a,e,!1);f!==void 0&&(e.handler(f)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&u(),e.event.lastX=f.position.left,e.event.lastY=f.position.top,e.event.lastDir=c===!0?void 0:f.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||l===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){u(),e.event.detected=!0,e.move(a);return}const w=Math.abs(h),b=Math.abs(y);w!==b&&(e.direction.horizontal===!0&&w>b||e.direction.vertical===!0&&w<b||e.direction.up===!0&&w<b&&y<0||e.direction.down===!0&&w<b&&y>0||e.direction.left===!0&&w>b&&h<0||e.direction.right===!0&&w>b&&h>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,n){if(e.event!==void 0){if(ne(e,"temp"),H.is.firefox===!0&&ue(t,!1),n===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(fe(a===void 0?e.lastEvt:a,e).payload);const{payload:h}=fe(a===void 0?e.lastEvt:a,e,!0),y=()=>{e.handler(h)};e.styleCleanup!==void 0?e.styleCleanup(y):y()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,r.mouse===!0){const a=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";U(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}H.has.touch===!0&&U(e,"main",[[t,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,i){const r=t.__qtouchpan;r!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&r.end(),r.handler=i.value),r.direction=Se(i.modifiers))},beforeUnmount(t){const i=t.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),ne(i,"main"),ne(i,"temp"),H.is.firefox===!0&&ue(t,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete t.__qtouchpan)}});const Oe=150;var qt=he({name:"QDrawer",inheritAttrs:!1,props:{...ot,...Te,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...it,"onLayout","miniState"],setup(t,{slots:i,emit:r,attrs:m}){const e=ye(),{proxy:{$q:a}}=e,n=Le(t,a),{preventBodyScroll:h}=lt(),{registerTimeout:y,removeTimeout:l}=ut(),u=$e(Ve,Q);if(u===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let w,b=null,f;const c=z(t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint),_=v(()=>t.mini===!0&&c.value!==!0),x=v(()=>_.value===!0?t.miniWidth:t.width),p=z(t.showIfAbove===!0&&c.value===!1?!0:t.modelValue===!0),s=v(()=>t.persistent!==!0&&(c.value===!0||Pe.value===!0));function S(o,d){if(Ae(),o!==!1&&u.animate(),B(0),c.value===!0){const q=u.instances[W.value];q!==void 0&&q.belowBreakpoint===!0&&q.hide(!1),T(1),u.isContainer.value!==!0&&h(!0)}else T(0),o!==!1&&ae(!1);y(()=>{o!==!1&&ae(!0),d!==!0&&r("show",o)},Oe)}function ge(o,d){Qe(),o!==!1&&u.animate(),T(0),B(E.value*x.value),oe(),d!==!0?y(()=>{r("hide",o)},Oe):l()}const{show:Z,hide:P}=rt({showing:p,hideOnRouteChange:s,handleShow:S,handleHide:ge}),{addToHistory:Ae,removeFromHistory:Qe}=nt(p,P,s),I={belowBreakpoint:c,hide:P},O=v(()=>t.side==="right"),E=v(()=>(a.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),be=z(0),D=z(!1),G=z(!1),we=z(x.value*E.value),W=v(()=>O.value===!0?"left":"right"),J=v(()=>p.value===!0&&c.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:x.value:0),ee=v(()=>t.overlay===!0||t.miniToOverlay===!0||u.view.value.indexOf(O.value?"R":"L")>-1||a.platform.is.ios===!0&&u.isContainer.value===!0),F=v(()=>t.overlay===!1&&p.value===!0&&c.value===!1),Pe=v(()=>t.overlay===!0&&p.value===!0&&c.value===!1),Fe=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&D.value===!1?" hidden":"")),He=v(()=>({backgroundColor:`rgba(0,0,0,${be.value*.4})`})),Ce=v(()=>O.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),Ie=v(()=>O.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),We=v(()=>{const o={};return u.header.space===!0&&Ce.value===!1&&(ee.value===!0?o.top=`${u.header.offset}px`:u.header.space===!0&&(o.top=`${u.header.size}px`)),u.footer.space===!0&&Ie.value===!1&&(ee.value===!0?o.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(o.bottom=`${u.footer.size}px`)),o}),Ne=v(()=>{const o={width:`${x.value}px`,transform:`translateX(${we.value}px)`};return c.value===!0?o:Object.assign(o,We.value)}),Ue=v(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),Re=v(()=>`q-drawer q-drawer--${t.side}`+(G.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(ee.value===!0||F.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Ce.value===!0?" q-drawer--top-padding":""))),Xe=v(()=>{const o=a.lang.rtl===!0?t.side:W.value;return[[ve,Ze,void 0,{[o]:!0,mouse:!0}]]}),je=v(()=>{const o=a.lang.rtl===!0?W.value:t.side;return[[ve,ke,void 0,{[o]:!0,mouse:!0}]]}),Ye=v(()=>{const o=a.lang.rtl===!0?W.value:t.side;return[[ve,ke,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function te(){Ge(c,t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint)}g(c,o=>{o===!0?(w=p.value,p.value===!0&&P(!1)):t.overlay===!1&&t.behavior!=="mobile"&&w!==!1&&(p.value===!0?(B(0),T(0),oe()):Z(!1))}),g(()=>t.side,(o,d)=>{u.instances[d]===I&&(u.instances[d]=void 0,u[d].space=!1,u[d].offset=0),u.instances[o]=I,u[o].size=x.value,u[o].space=F.value,u[o].offset=J.value}),g(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&te()}),g(()=>t.behavior+t.breakpoint,te),g(u.isContainer,o=>{p.value===!0&&h(o!==!0),o===!0&&te()}),g(u.scrollbarWidth,()=>{B(p.value===!0?0:void 0)}),g(J,o=>{L("offset",o)}),g(F,o=>{r("onLayout",o),L("space",o)}),g(O,()=>{B()}),g(x,o=>{B(),ie(t.miniToOverlay,o)}),g(()=>t.miniToOverlay,o=>{ie(o,x.value)}),g(()=>a.lang.rtl,()=>{B()}),g(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Ke(),u.animate())}),g(_,o=>{r("miniState",o)});function B(o){o===void 0?qe(()=>{o=p.value===!0?0:x.value,B(E.value*o)}):(u.isContainer.value===!0&&O.value===!0&&(c.value===!0||Math.abs(o)===x.value)&&(o+=E.value*u.scrollbarWidth.value),we.value=o)}function T(o){be.value=o}function ae(o){const d=o===!0?"remove":u.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Ke(){b!==null&&clearTimeout(b),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),G.value=!0,b=setTimeout(()=>{b=null,G.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ze(o){if(p.value!==!1)return;const d=x.value,q=R(o.distance.x,0,d);if(o.isFinal===!0){q>=Math.min(75,d)===!0?Z():(u.animate(),T(0),B(E.value*d)),D.value=!1;return}B((a.lang.rtl===!0?O.value!==!0:O.value)?Math.max(d-q,0):Math.min(0,q-d)),T(R(q/d,0,1)),o.isFirst===!0&&(D.value=!0)}function ke(o){if(p.value!==!0)return;const d=x.value,q=o.direction===t.side,N=(a.lang.rtl===!0?q!==!0:q)?R(o.distance.x,0,d):0;if(o.isFinal===!0){Math.abs(N)<Math.min(75,d)===!0?(u.animate(),T(1),B(0)):P(),D.value=!1;return}B(E.value*N),T(R(1-N/d,0,1)),o.isFirst===!0&&(D.value=!0)}function oe(){h(!1),ae(!0)}function L(o,d){u.update(t.side,o,d)}function Ge(o,d){o.value!==d&&(o.value=d)}function ie(o,d){L("size",o===!0?t.miniWidth:d)}return u.instances[t.side]=I,ie(t.miniToOverlay,x.value),L("space",F.value),L("offset",J.value),t.showIfAbove===!0&&t.modelValue!==!0&&p.value===!0&&t["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Ee(()=>{r("onLayout",F.value),r("miniState",_.value),w=t.showIfAbove===!0;const o=()=>{(p.value===!0?S:ge)(!1,!0)};if(u.totalWidth.value!==0){qe(o);return}f=g(u.totalWidth,()=>{f(),f=void 0,p.value===!1&&t.showIfAbove===!0&&c.value===!1?Z(!1):o()})}),De(()=>{f!==void 0&&f(),b!==null&&(clearTimeout(b),b=null),p.value===!0&&oe(),u.instances[t.side]===I&&(u.instances[t.side]=void 0,L("size",0),L("offset",0),L("space",!1))}),()=>{const o=[];c.value===!0&&(t.noSwipeOpen===!1&&o.push(K(M("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Xe.value)),o.push(_e("div",{ref:"backdrop",class:Fe.value,style:He.value,"aria-hidden":"true",onClick:P},void 0,"backdrop",t.noSwipeBackdrop!==!0&&p.value===!0,()=>Ye.value)));const d=_.value===!0&&i.mini!==void 0,q=[M("div",{...m,key:""+d,class:[Ue.value,m.class]},d===!0?i.mini():Me(i.default))];return t.elevated===!0&&p.value===!0&&q.push(M("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(_e("aside",{ref:"content",class:Re.value,style:Ne.value},q,"contentclose",t.noSwipeClose!==!0&&c.value===!0,()=>je.value)),M("div",{class:"q-drawer-container"},o)}}}),_t=he({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:i,emit:r}){const{proxy:{$q:m}}=ye(),e=$e(Ve,Q);if(e===Q)return console.error("QHeader needs to be child of QLayout"),Q;const a=z(parseInt(t.heightHint,10)),n=z(!0),h=v(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||m.platform.is.ios&&e.isContainer.value===!0),y=v(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return n.value===!0?a.value:0;const s=a.value-e.scroll.value.position;return s>0?s:0}),l=v(()=>t.modelValue!==!0||h.value===!0&&n.value!==!0),u=v(()=>t.modelValue===!0&&l.value===!0&&t.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),b=v(()=>{const s=e.rows.value.top,S={};return s[0]==="l"&&e.left.space===!0&&(S[m.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),s[2]==="r"&&e.right.space===!0&&(S[m.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),S});function f(s,S){e.update("header",s,S)}function c(s,S){s.value!==S&&(s.value=S)}function _({height:s}){c(a,s),f("size",s)}function x(s){u.value===!0&&c(n,!0),r("focusin",s)}g(()=>t.modelValue,s=>{f("space",s),c(n,!0),e.animate()}),g(y,s=>{f("offset",s)}),g(()=>t.reveal,s=>{s===!1&&c(n,t.modelValue)}),g(n,s=>{e.animate(),r("reveal",s)}),g(e.scroll,s=>{t.reveal===!0&&c(n,s.direction==="up"||s.position<=t.revealOffset||s.position-s.inflectionPoint<100)});const p={};return e.instances.header=p,t.modelValue===!0&&f("size",a.value),f("space",t.modelValue),f("offset",y.value),De(()=>{e.instances.header===p&&(e.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const s=st(i.default,[]);return t.elevated===!0&&s.push(M("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(M(yt,{debounce:0,onResize:_})),M("header",{class:w.value,style:b.value,onFocusin:x},s)}}});const Bt={style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},St={style:{"margin-top":"-5%","margin-bottom":"5%"}},zt={style:{height:"100%",width:"80%"}},Ot=$("div",{style:{height:"100%",width:"20%",display:"flex","align-items":"center","justify-content":"end","margin-right":"1%"}},[$("img",{src:"images/ImagenEscuelaCruz.jpg",style:{width:"200px",height:"100px"}})],-1),Dt={__name:"MainLayout",setup(t){const i=bt(),r=dt(),m=ct(),e=z(!0),a=z("Inicio"),n=z("Consulta");function h(){i.dialog({message:"Est\xE1 seguro que desea cerrar sesi\xF3n?",ok:{push:!0},cancel:{push:!0,color:"negative"},persistent:!0}).onOk(async()=>{await m.logout(),r.push("/access")}).onCancel(()=>{})}return g(a,()=>{a.value==="Consulta"?n.value="Consulta":a.value==="Usuarios"?n.value="Administraci\xF3n de Usuarios":n.value=""}),Ee(()=>{r.currentRoute.value.path==="/"?a.value="Consulta":r.currentRoute.value.path==="/usuarios"&&(a.value="Usuarios")}),(y,l)=>{const u=ft("router-view");return X(),j(pt,{view:"lHh lpR fFf",class:"shadow-2 rounded-borders",style:{display:"flex","font-family":"Arial, Helvetica, sans-serif","background-color":"white"}},{default:k(()=>[C(qt,{modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=w=>e.value=w),breakpoint:200,width:250,style:{"background-color":"#b16655",color:"#f1f1f1","user-select":"none"}},{default:k(()=>[C(wt,{padding:"",style:{"font-size":"26px",display:"flex","flex-direction":"column","margin-top":"-8px"},class:"hoverMenu"},{default:k(()=>{var w,b,f,c;return[$("div",Bt,[C(vt,{icon:"mdi-account-circle",size:"200px"}),$("div",St,[$("div",null,le(V(m).profile.usuario),1),$("div",null,le(V(m).profile.nivel),1)])]),((w=V(m).profile)==null?void 0:w.idnivel)===1||((b=V(m).profile)==null?void 0:b.idnivel)===0?K((X(),j(ce,{key:0,clickable:"",draggable:!1,active:a.value==="Consulta","active-class":"my-menu-link",to:"/",onClick:l[0]||(l[0]=_=>a.value="Consulta"),style:{height:"75px"}},{default:k(()=>[C(A,{avatar:""},{default:k(()=>[C(se,{style:{"font-size":"30px"},name:"mdi-account-search"})]),_:1}),C(A,{class:"textoBlanco"},{default:k(()=>[Y(" Consulta ")]),_:1})]),_:1},8,["active"])),[[de]]):Be("",!0),((f=V(m).profile)==null?void 0:f.idnivel)===1||((c=V(m).profile)==null?void 0:c.idnivel)===0?K((X(),j(ce,{key:1,clickable:"",draggable:!1,active:a.value==="Usuarios","active-class":"my-menu-link",to:"/usuarios",onClick:l[1]||(l[1]=_=>a.value="Usuarios"),style:{height:"75px"}},{default:k(()=>[C(A,{avatar:""},{default:k(()=>[C(se,{style:{"font-size":"30px"},name:"mdi-account-key"})]),_:1}),C(A,{class:"textoBlanco"},{default:k(()=>[Y(" Usuarios ")]),_:1})]),_:1},8,["active"])),[[de]]):Be("",!0),K((X(),j(ce,{draggable:!1,clickable:"",style:{height:"75px"},onClick:l[2]||(l[2]=_=>h())},{default:k(()=>[C(A,{avatar:""},{default:k(()=>[C(se,{style:{"font-size":"30px"},name:"mdi-account-remove"})]),_:1}),C(A,{class:"textoBlanco"},{default:k(()=>[Y(" Salir ")]),_:1})]),_:1})),[[de]])]}),_:1})]),_:1},8,["modelValue"]),C(_t,{style:{"background-color":"white",color:"#b16655",display:"flex","align-items":"center","padding-left":"1%","padding-top":"1%"}},{default:k(()=>[$("div",zt,[C(ht,{style:{"font-size":"50px","font-weight":"bold",color:"#b16655"}},{default:k(()=>[Y(le(n.value),1)]),_:1})]),Ot]),_:1}),C(gt,{style:{width:"100%"}},{default:k(()=>[C(u)]),_:1})]),_:1})}}};export{Dt as default};