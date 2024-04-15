import{b as W,d as f,h as E,f as be,V as pe,W as at,X as we,Y as it,x as S,g as J,Z as nt,H as Te,$ as Ae,a0 as ut,a1 as lt,a2 as I,q as ot,a3 as rt,a4 as j,a5 as re,a6 as Be,a7 as se,a8 as ge,a9 as de,aa as st,ab as dt,ac as ct,i as De,e as Q,ad as vt,ae as ft,k as w,af as X,m as Ve,z as Se,n as Qe,ag as G,ah as Le,l as Pe,ai as mt,L as ht,K as yt,r as Ee,o as K,c as Y,w as x,a as C,M,aj as gt,ak as ce,al as D,O as ve,am as Z,an as $e,ao as fe}from"./index.9c7161f9.js";import{b as bt,Q as pt,a as wt}from"./QLayout.c5cb9434.js";import{u as qt}from"./use-quasar.c996af25.js";var V=W({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>E("div",{class:l.value},be(n.default))}}),me=W({name:"QItem",props:{...pe,...at,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:m}}=J(),t=we(e,m),{hasLink:a,linkAttrs:o,linkClass:y,linkTag:g,navigateOnClick:r}=it(),u=S(null),q=S(null),p=f(()=>e.clickable===!0||a.value===!0||e.tag==="label"),d=f(()=>e.disable!==!0&&p.value===!0),c=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?y.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=f(()=>{if(e.insetLevel===void 0)return null;const h=m.lang.rtl===!0?"Right":"Left";return{["padding"+h]:16+e.insetLevel*56+"px"}});function k(h){d.value===!0&&(q.value!==null&&(h.qKeyEvent!==!0&&document.activeElement===u.value?q.value.focus():document.activeElement===q.value&&u.value.focus()),r(h))}function b(h){if(d.value===!0&&nt(h,13)===!0){Te(h),h.qKeyEvent=!0;const P=new MouseEvent("click",h);P.qKeyEvent=!0,u.value.dispatchEvent(P)}l("keyup",h)}function s(){const h=Ae(n.default,[]);return d.value===!0&&h.unshift(E("div",{class:"q-focus-helper",tabindex:-1,ref:q})),h}return()=>{const h={ref:u,class:c.value,style:_.value,role:"listitem",onClick:k,onKeyup:b};return d.value===!0?(h.tabindex=e.tabindex||"0",Object.assign(h,o.value)):p.value===!0&&(h["aria-disabled"]="true"),E(g.value,h,s())}}}),kt=W({name:"QList",props:{...pe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const l=J(),m=we(e,l.proxy.$q),t=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(m.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>E(e.tag,{class:t.value},be(n.default))}});const qe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ct=Object.keys(qe);qe.all=!0;function Oe(e){const n={};for(const l of Ct)e[l]===!0&&(n[l]=!0);return Object.keys(n).length===0?qe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const _t=["INPUT","TEXTAREA"];function ze(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&_t.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function xt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ut.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function he(e,n,l){const m=ge(e);let t,a=m.left-n.event.x,o=m.top-n.event.y,y=Math.abs(a),g=Math.abs(o);const r=n.direction;r.horizontal===!0&&r.vertical!==!0?t=a<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?t=o<0?"up":"down":r.up===!0&&o<0?(t="up",y>g&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.down===!0&&o>0?(t="down",y>g&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.left===!0&&a<0?(t="left",y<g&&(r.up===!0&&o<0?t="up":r.down===!0&&o>0&&(t="down"))):r.right===!0&&a>0&&(t="right",y<g&&(r.up===!0&&o<0?t="up":r.down===!0&&o>0&&(t="down")));let u=!1;if(t===void 0&&l===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,u=!0,t==="left"||t==="right"?(m.left-=a,y=0,a=0):(m.top-=o,g=0,o=0)}return{synthetic:u,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:m,direction:t,isFirst:n.event.isFirst,isFinal:l===!0,duration:Date.now()-n.event.time,distance:{x:y,y:g},offset:{x:a,y:o},delta:{x:m.left-n.event.lastX,y:m.top-n.event.lastY}}}}let Bt=0;var ye=lt({name:"touch-pan",beforeMount(e,{value:n,modifiers:l}){if(l.mouse!==!0&&I.has.touch!==!0)return;function m(a,o){l.mouse===!0&&o===!0?Te(a):(l.stop===!0&&se(a),l.prevent===!0&&Be(a))}const t={uid:"qvtp_"+Bt++,handler:n,modifiers:l,direction:Oe(l),noop:ot,mouseStart(a){ze(a,t)&&rt(a)&&(j(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(ze(a,t)){const o=a.target;j(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,o){if(I.is.firefox===!0&&re(e,!0),t.lastEvt=a,o===!0||l.stop===!0){if(t.direction.all!==!0&&(o!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const r=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Be(r),a.cancelBubble===!0&&se(r),Object.assign(r,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:r}}se(a)}const{left:y,top:g}=ge(a);t.event={x:y,y:g,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:y,lastY:g}},move(a){if(t.event===void 0)return;const o=ge(a),y=o.left-t.event.x,g=o.top-t.event.y;if(y===0&&g===0)return;t.lastEvt=a;const r=t.event.mouse===!0,u=()=>{m(a,r);let d;l.preserveCursor!==!0&&l.preservecursor!==!0&&(d=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),xt(),t.styleCleanup=c=>{if(t.styleCleanup=void 0,d!==void 0&&(document.documentElement.style.cursor=d),document.body.classList.remove("non-selectable"),r===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{_(),c()},50):_()}else c!==void 0&&c()}};if(t.event.detected===!0){t.event.isFirst!==!0&&m(a,t.event.mouse);const{payload:d,synthetic:c}=he(a,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=c===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||r===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(a);return}const q=Math.abs(y),p=Math.abs(g);q!==p&&(t.direction.horizontal===!0&&q>p||t.direction.vertical===!0&&q<p||t.direction.up===!0&&q<p&&g<0||t.direction.down===!0&&q<p&&g>0||t.direction.left===!0&&q>p&&y<0||t.direction.right===!0&&q>p&&y>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,o){if(t.event!==void 0){if(de(t,"temp"),I.is.firefox===!0&&re(e,!1),o===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(he(a===void 0?t.lastEvt:a,t).payload);const{payload:y}=he(a===void 0?t.lastEvt:a,t,!0),g=()=>{t.handler(y)};t.styleCleanup!==void 0?t.styleCleanup(g):g()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";j(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}I.has.touch===!0&&j(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchpan;l!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&l.end(),l.handler=n.value),l.direction=Oe(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),de(n,"main"),de(n,"temp"),I.is.firefox===!0&&re(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});const Me=150;var St=W({name:"QDrawer",inheritAttrs:!1,props:{...st,...pe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...dt,"onLayout","miniState"],setup(e,{slots:n,emit:l,attrs:m}){const t=J(),{proxy:{$q:a}}=t,o=we(e,a),{preventBodyScroll:y}=mt(),{registerTimeout:g,removeTimeout:r}=ct(),u=De(Pe,Q);if(u===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let q,p=null,d;const c=S(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),_=f(()=>e.mini===!0&&c.value!==!0),k=f(()=>_.value===!0?e.miniWidth:e.width),b=S(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),s=f(()=>e.persistent!==!0&&(c.value===!0||Ie.value===!0));function h(i,v){if(Re(),i!==!1&&u.animate(),L(0),c.value===!0){const B=u.instances[N.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),O(1),u.isContainer.value!==!0&&y(!0)}else O(0),i!==!1&&ue(!1);g(()=>{i!==!1&&ue(!0),v!==!0&&l("show",i)},Me)}function P(i,v){Fe(),i!==!1&&u.animate(),O(0),L(T.value*k.value),le(),v!==!0?g(()=>{l("hide",i)},Me):r()}const{show:ee,hide:R}=vt({showing:b,hideOnRouteChange:s,handleShow:h,handleHide:P}),{addToHistory:Re,removeFromHistory:Fe}=ft(b,R,s),H={belowBreakpoint:c,hide:R},$=f(()=>e.side==="right"),T=f(()=>(a.lang.rtl===!0?-1:1)*($.value===!0?1:-1)),ke=S(0),A=S(!1),te=S(!1),Ce=S(k.value*T.value),N=f(()=>$.value===!0?"left":"right"),ae=f(()=>b.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),ie=f(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf($.value?"R":"L")>-1||a.platform.is.ios===!0&&u.isContainer.value===!0),F=f(()=>e.overlay===!1&&b.value===!0&&c.value===!1),Ie=f(()=>e.overlay===!0&&b.value===!0&&c.value===!1),We=f(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&A.value===!1?" hidden":"")),He=f(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),_e=f(()=>$.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),Ne=f(()=>$.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),Ue=f(()=>{const i={};return u.header.space===!0&&_e.value===!1&&(ie.value===!0?i.top=`${u.header.offset}px`:u.header.space===!0&&(i.top=`${u.header.size}px`)),u.footer.space===!0&&Ne.value===!1&&(ie.value===!0?i.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(i.bottom=`${u.footer.size}px`)),i}),je=f(()=>{const i={width:`${k.value}px`,transform:`translateX(${Ce.value}px)`};return c.value===!0?i:Object.assign(i,Ue.value)}),Xe=f(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),Ke=f(()=>`q-drawer q-drawer--${e.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(ie.value===!0||F.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(_e.value===!0?" q-drawer--top-padding":""))),Ye=f(()=>{const i=a.lang.rtl===!0?e.side:N.value;return[[ye,et,void 0,{[i]:!0,mouse:!0}]]}),Ze=f(()=>{const i=a.lang.rtl===!0?N.value:e.side;return[[ye,xe,void 0,{[i]:!0,mouse:!0}]]}),Ge=f(()=>{const i=a.lang.rtl===!0?N.value:e.side;return[[ye,xe,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function ne(){tt(c,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}w(c,i=>{i===!0?(q=b.value,b.value===!0&&R(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(b.value===!0?(L(0),O(0),le()):ee(!1))}),w(()=>e.side,(i,v)=>{u.instances[v]===H&&(u.instances[v]=void 0,u[v].space=!1,u[v].offset=0),u.instances[i]=H,u[i].size=k.value,u[i].space=F.value,u[i].offset=ae.value}),w(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&ne()}),w(()=>e.behavior+e.breakpoint,ne),w(u.isContainer,i=>{b.value===!0&&y(i!==!0),i===!0&&ne()}),w(u.scrollbarWidth,()=>{L(b.value===!0?0:void 0)}),w(ae,i=>{z("offset",i)}),w(F,i=>{l("onLayout",i),z("space",i)}),w($,()=>{L()}),w(k,i=>{L(),oe(e.miniToOverlay,i)}),w(()=>e.miniToOverlay,i=>{oe(i,k.value)}),w(()=>a.lang.rtl,()=>{L()}),w(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Je(),u.animate())}),w(_,i=>{l("miniState",i)});function L(i){i===void 0?Se(()=>{i=b.value===!0?0:k.value,L(T.value*i)}):(u.isContainer.value===!0&&$.value===!0&&(c.value===!0||Math.abs(i)===k.value)&&(i+=T.value*u.scrollbarWidth.value),Ce.value=i)}function O(i){ke.value=i}function ue(i){const v=i===!0?"remove":u.isContainer.value!==!0?"add":"";v!==""&&document.body.classList[v]("q-body--drawer-toggle")}function Je(){p!==null&&clearTimeout(p),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,p=setTimeout(()=>{p=null,te.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function et(i){if(b.value!==!1)return;const v=k.value,B=X(i.distance.x,0,v);if(i.isFinal===!0){B>=Math.min(75,v)===!0?ee():(u.animate(),O(0),L(T.value*v)),A.value=!1;return}L((a.lang.rtl===!0?$.value!==!0:$.value)?Math.max(v-B,0):Math.min(0,B-v)),O(X(B/v,0,1)),i.isFirst===!0&&(A.value=!0)}function xe(i){if(b.value!==!0)return;const v=k.value,B=i.direction===e.side,U=(a.lang.rtl===!0?B!==!0:B)?X(i.distance.x,0,v):0;if(i.isFinal===!0){Math.abs(U)<Math.min(75,v)===!0?(u.animate(),O(1),L(0)):R(),A.value=!1;return}L(T.value*U),O(X(1-U/v,0,1)),i.isFirst===!0&&(A.value=!0)}function le(){y(!1),ue(!0)}function z(i,v){u.update(e.side,i,v)}function tt(i,v){i.value!==v&&(i.value=v)}function oe(i,v){z("size",i===!0?e.miniWidth:v)}return u.instances[e.side]=H,oe(e.miniToOverlay,k.value),z("space",F.value),z("offset",ae.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),Ve(()=>{l("onLayout",F.value),l("miniState",_.value),q=e.showIfAbove===!0;const i=()=>{(b.value===!0?h:P)(!1,!0)};if(u.totalWidth.value!==0){Se(i);return}d=w(u.totalWidth,()=>{d(),d=void 0,b.value===!1&&e.showIfAbove===!0&&c.value===!1?ee(!1):i()})}),Qe(()=>{d!==void 0&&d(),p!==null&&(clearTimeout(p),p=null),b.value===!0&&le(),u.instances[e.side]===H&&(u.instances[e.side]=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const i=[];c.value===!0&&(e.noSwipeOpen===!1&&i.push(G(E("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ye.value)),i.push(Le("div",{ref:"backdrop",class:We.value,style:He.value,"aria-hidden":"true",onClick:R},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>Ge.value)));const v=_.value===!0&&n.mini!==void 0,B=[E("div",{...m,key:""+v,class:[Xe.value,m.class]},v===!0?n.mini():be(n.default))];return e.elevated===!0&&b.value===!0&&B.push(E("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(Le("aside",{ref:"content",class:Ke.value,style:je.value},B,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>Ze.value)),E("div",{class:"q-drawer-container"},i)}}}),Lt=W({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:l}){const{proxy:{$q:m}}=J(),t=De(Pe,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const a=S(parseInt(e.heightHint,10)),o=S(!0),y=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||m.platform.is.ios&&t.isContainer.value===!0),g=f(()=>{if(e.modelValue!==!0)return 0;if(y.value===!0)return o.value===!0?a.value:0;const s=a.value-t.scroll.value.position;return s>0?s:0}),r=f(()=>e.modelValue!==!0||y.value===!0&&o.value!==!0),u=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),q=f(()=>"q-header q-layout__section--marginal "+(y.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=f(()=>{const s=t.rows.value.top,h={};return s[0]==="l"&&t.left.space===!0&&(h[m.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(h[m.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),h});function d(s,h){t.update("header",s,h)}function c(s,h){s.value!==h&&(s.value=h)}function _({height:s}){c(a,s),d("size",s)}function k(s){u.value===!0&&c(o,!0),l("focusin",s)}w(()=>e.modelValue,s=>{d("space",s),c(o,!0),t.animate()}),w(g,s=>{d("offset",s)}),w(()=>e.reveal,s=>{s===!1&&c(o,e.modelValue)}),w(o,s=>{t.animate(),l("reveal",s)}),w(t.scroll,s=>{e.reveal===!0&&c(o,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&d("size",a.value),d("space",e.modelValue),d("offset",g.value),Qe(()=>{t.instances.header===b&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const s=Ae(n.default,[]);return e.elevated===!0&&s.push(E("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(E(bt,{debounce:0,onResize:_})),E("header",{class:q.value,style:p.value,onFocusin:k},s)}}});const Et={style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},$t={style:{"margin-top":"-5%","margin-bottom":"5%"}},Ot={style:{height:"100%",width:"80%"}},zt=M("div",{style:{height:"100%",width:"20%",display:"flex","align-items":"center","justify-content":"end","margin-right":"1%"}},[M("img",{src:"images/ImagenEscuelaCruz.jpg",style:{width:"200px",height:"100px"}})],-1),Vt={__name:"MainLayout",setup(e){const n=qt(),l=ht(),m=yt(),t=S(!0),a=S("Inicio"),o=S("Consulta");function y(){n.dialog({message:"Est\xE1 seguro que desea cerrar sesi\xF3n?",ok:{push:!0},cancel:{push:!0,color:"negative"},persistent:!0}).onOk(async()=>{await m.logout(),l.push("/access")}).onCancel(()=>{})}return w(a,()=>{a.value==="Consulta"?o.value="Consulta":a.value==="Usuarios"?o.value="Administraci\xF3n de Usuarios":o.value=""}),Ve(()=>{l.currentRoute.value.path==="/"?a.value="Consulta":l.currentRoute.value.path==="/usuarios"&&(a.value="Usuarios")}),(g,r)=>{const u=Ee("q-title-toolbar"),q=Ee("router-view");return K(),Y(pt,{view:"lHh lpR fFf",class:"shadow-2 rounded-borders",style:{display:"flex","font-family":"Arial, Helvetica, sans-serif","background-color":"white"}},{default:x(()=>[C(St,{modelValue:t.value,"onUpdate:modelValue":r[3]||(r[3]=p=>t.value=p),breakpoint:200,width:250,style:{"background-color":"#b16655",color:"#f1f1f1","user-select":"none"}},{default:x(()=>[C(kt,{padding:"",style:{"font-size":"26px",display:"flex","flex-direction":"column","margin-top":"-8px"},class:"hoverMenu"},{default:x(()=>{var p,d,c,_;return[M("div",Et,[C(gt,{icon:"mdi-account-circle",size:"200px"}),M("div",$t,[M("div",null,ce(D(m).profile.usuario),1),M("div",null,ce(D(m).profile.nivel),1)])]),((p=D(m).profile)==null?void 0:p.idnivel)===1||((d=D(m).profile)==null?void 0:d.idnivel)===0?G((K(),Y(me,{key:0,clickable:"",draggable:!1,active:a.value==="Consulta","active-class":"my-menu-link",to:"/",onClick:r[0]||(r[0]=k=>a.value="Consulta"),style:{height:"75px"}},{default:x(()=>[C(V,{avatar:""},{default:x(()=>[C(ve,{style:{"font-size":"30px"},name:"mdi-account-search"})]),_:1}),C(V,{class:"textoBlanco"},{default:x(()=>[Z(" Consulta ")]),_:1})]),_:1},8,["active"])),[[fe]]):$e("",!0),((c=D(m).profile)==null?void 0:c.idnivel)===1||((_=D(m).profile)==null?void 0:_.idnivel)===0?G((K(),Y(me,{key:1,clickable:"",draggable:!1,active:a.value==="Usuarios","active-class":"my-menu-link",to:"/usuarios",onClick:r[1]||(r[1]=k=>a.value="Usuarios"),style:{height:"75px"}},{default:x(()=>[C(V,{avatar:""},{default:x(()=>[C(ve,{style:{"font-size":"30px"},name:"mdi-account-key"})]),_:1}),C(V,{class:"textoBlanco"},{default:x(()=>[Z(" Usuarios ")]),_:1})]),_:1},8,["active"])),[[fe]]):$e("",!0),G((K(),Y(me,{draggable:!1,clickable:"",style:{height:"75px"},onClick:r[2]||(r[2]=k=>y())},{default:x(()=>[C(V,{avatar:""},{default:x(()=>[C(ve,{style:{"font-size":"30px"},name:"mdi-account-remove"})]),_:1}),C(V,{class:"textoBlanco"},{default:x(()=>[Z(" Salir ")]),_:1})]),_:1})),[[fe]])]}),_:1})]),_:1},8,["modelValue"]),C(Lt,{style:{"background-color":"white",color:"#b16655",display:"flex","padding-left":"1%","padding-top":"1%"}},{default:x(()=>[M("div",Ot,[C(u,{style:{"font-size":"50px","font-weight":"bold",color:"#b16655"}},{default:x(()=>[Z(ce(o.value),1)]),_:1})]),zt]),_:1}),C(wt,{style:{width:"100%"}},{default:x(()=>[C(q)]),_:1})]),_:1})}}};export{Vt as default};
