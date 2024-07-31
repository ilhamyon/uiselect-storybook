import{j as g}from"./jsx-runtime-DEdD30eg.js";import{R as _e,r as D}from"./index-RYns6xqu.js";import{P as p}from"./index-rNTiGNI1.js";const ae=()=>{};let Gt={},Fe={},Me=null,je={mark:ae,measure:ae};try{typeof window<"u"&&(Gt=window),typeof document<"u"&&(Fe=document),typeof MutationObserver<"u"&&(Me=MutationObserver),typeof performance<"u"&&(je=performance)}catch{}const{userAgent:re=""}=Gt.navigator||{},W=Gt,h=Fe,ie=Me,ut=je;W.document;const R=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",ze=~re.indexOf("MSIE")||~re.indexOf("Trident/");var y="classic",Re="duotone",P="sharp",N="sharp-duotone",bn=[y,Re,P,N],yn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},oe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},vn=["kit"],xn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,An=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,wn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},kn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},On={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Sn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},En={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Pn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},De={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Nn=["solid","regular","light","thin","duotone","brands"],Ye=[1,2,3,4,5,6,7,8,9,10],Cn=Ye.concat([11,12,13,14,15,16,17,18,19,20]),at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},In=[...Object.keys(Sn),...Nn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY].concat(Ye.map(t=>"".concat(t,"x"))).concat(Cn.map(t=>"w-".concat(t))),Tn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ln={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},_n={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},se={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const j="___FONT_AWESOME___",Ct=16,Ue="fa",We="svg-inline--fa",B="data-fa-i2svg",It="data-fa-pseudo-element",Fn="data-fa-pseudo-element-pending",$t="data-prefix",Bt="data-icon",le="fontawesome-i2svg",Mn="async",jn=["HTML","HEAD","STYLE","SCRIPT"],He=(()=>{try{return!0}catch{return!1}})(),Ve=[y,P,N];function ct(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[y]}})}const Xe={...De};Xe[y]={...De[y],...oe.kit,...oe["kit-duotone"]};const G=ct(Xe),Tt={...Pn};Tt[y]={...Tt[y],...se.kit,...se["kit-duotone"]};const st=ct(Tt),Lt={...En};Lt[y]={...Lt[y],..._n.kit};const $=ct(Lt),_t={...On};_t[y]={..._t[y],...Ln.kit};const zn=ct(_t),Rn=xn,Ge="fa-layers-text",Dn=An,Yn={...yn};ct(Yn);const Un=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kt=at,tt=new Set;Object.keys(st[y]).map(tt.add.bind(tt));Object.keys(st[P]).map(tt.add.bind(tt));Object.keys(st[N]).map(tt.add.bind(tt));const Wn=[...vn,...In],it=W.FontAwesomeConfig||{};function Hn(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Vn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Vn(Hn(n));r!=null&&(it[a]=r)});const $e={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ue,replacementClass:We,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);const et={...$e,...it};et.autoReplaceSvg||(et.observeMutations=!1);const f={};Object.keys($e).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){et[t]=e,ot.forEach(n=>n(f))},get:function(){return et[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){et.cssPrefix=t,ot.forEach(e=>e(f))},get:function(){return et.cssPrefix}});W.FontAwesomeConfig=f;const ot=[];function Xn(t){return ot.push(t),()=>{ot.splice(ot.indexOf(t),1)}}const Y=Ct,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gn(t){if(!t||!R)return;const e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=h.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(e,a),t}const $n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){let t=12,e="";for(;t-- >0;)e+=$n[Math.random()*62|0];return e}function nt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function qt(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Be(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Be(t[n]),'" '),"").trim()}function yt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Kt(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function qn(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Kn(t){let{transform:e,width:n=Ct,height:a=Ct,startCentered:r=!1}=t,i="";return r&&ze?i+="translate(".concat(e.x/Y-n/2,"em, ").concat(e.y/Y-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/Y,"em), calc(-50% + ").concat(e.y/Y,"em)) "):i+="translate(".concat(e.x/Y,"em, ").concat(e.y/Y,"em) "),i+="scale(".concat(e.size/Y*(e.flipX?-1:1),", ").concat(e.size/Y*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Qn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function qe(){const t=Ue,e=We,n=f.cssPrefix,a=f.replacementClass;let r=Qn;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ce=!1;function Ot(){f.autoAddCss&&!ce&&(Gn(qe()),ce=!0)}var Jn={mixout(){return{dom:{css:qe,insertCss:Ot}}},hooks(){return{beforeDOMElementCreation(){Ot()},beforeI2svg(){Ot()}}}};const z=W||{};z[j]||(z[j]={});z[j].styles||(z[j].styles={});z[j].hooks||(z[j].hooks={});z[j].shims||(z[j].shims=[]);var F=z[j];const Ke=[],Qe=function(){h.removeEventListener("DOMContentLoaded",Qe),gt=1,Ke.map(t=>t())};let gt=!1;R&&(gt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),gt||h.addEventListener("DOMContentLoaded",Qe));function Zn(t){R&&(gt?setTimeout(t,0):Ke.push(t))}function ft(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Be(t):"<".concat(e," ").concat(Bn(n),">").concat(a.map(ft).join(""),"</").concat(e,">")}function fe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var St=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,l,c,u;for(a===void 0?(l=1,u=e[i[0]]):(l=0,u=a);l<o;l++)c=i[l],u=s(u,e[c],c,e);return u};function ta(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ft(t){const e=ta(t);return e.length===1?e[0].toString(16):null}function ea(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ue(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Mt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ue(e);typeof F.hooks.addPack=="function"&&!a?F.hooks.addPack(t,ue(e)):F.styles[t]={...F.styles[t]||{},...r},t==="fas"&&Mt("fa",e)}const{styles:X,shims:na}=F,aa={[y]:Object.values($[y]),[P]:Object.values($[P]),[N]:Object.values($[N])};let Qt=null,Je={},Ze={},tn={},en={},nn={};const ra={[y]:Object.keys(G[y]),[P]:Object.keys(G[P]),[N]:Object.keys(G[N])};function ia(t){return~Wn.indexOf(t)}function oa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ia(r)?r:null}const an=()=>{const t=a=>St(X,(r,i,o)=>(r[o]=St(i,a,{}),r),{});Je=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Ze=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),nn=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in X||f.autoFetchSvg,n=St(na,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});tn=n.names,en=n.unicodes,Qt=vt(f.styleDefault,{family:f.familyDefault})};Xn(t=>{Qt=vt(t.styleDefault,{family:f.familyDefault})});an();function Jt(t,e){return(Je[t]||{})[e]}function sa(t,e){return(Ze[t]||{})[e]}function U(t,e){return(nn[t]||{})[e]}function rn(t){return tn[t]||{prefix:null,iconName:null}}function la(t){const e=en[t],n=Jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function H(){return Qt}const Zt=()=>({prefix:null,iconName:null,rest:[]});function vt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=y}=e,a=G[n][t],r=st[n][t]||st[n][a],i=t in F.styles?t:null;return r||i||null}const ca={[y]:Object.keys($[y]),[P]:Object.keys($[P]),[N]:Object.keys($[N])};function xt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[y]:"".concat(f.cssPrefix,"-").concat(y),[P]:"".concat(f.cssPrefix,"-").concat(P),[N]:"".concat(f.cssPrefix,"-").concat(N)};let r=null,i=y;const o=bn.filter(l=>l!==Re);o.forEach(l=>{(t.includes(a[l])||t.some(c=>ca[l].includes(c)))&&(i=l)});const s=t.reduce((l,c)=>{const u=oa(f.cssPrefix,c);if(X[c]?(c=aa[i].includes(c)?zn[i][c]:c,r=c,l.prefix=c):ra[i].indexOf(c)>-1?(r=c,l.prefix=vt(c,{family:i})):u?l.iconName=u:c!==f.replacementClass&&!o.some(m=>c===a[m])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const m=r==="fa"?rn(l.iconName):{},d=U(l.prefix,l.iconName);m.prefix&&(r=null),l.iconName=m.iconName||d||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!X.far&&X.fas&&!f.autoFetchSvg&&(l.prefix="fas")}return l},Zt());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===P&&(X.fass||f.autoFetchSvg)&&(s.prefix="fass",s.iconName=U(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===N&&(X.fasds||f.autoFetchSvg)&&(s.prefix="fasds",s.iconName=U(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||r==="fa")&&(s.prefix=H()||"fas"),s}class fa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Mt(i,r[i]);const o=$[y][i];o&&Mt(o,r[i]),an()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],l=s[2];e[i]||(e[i]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[i][c]=s)}),e[i][o]=s}),e}}let me=[],Q={};const Z={},ua=Object.keys(Z);function ma(t,e){let{mixoutsTo:n}=e;return me=t,Q={},Object.keys(Z).forEach(a=>{ua.indexOf(a)===-1&&delete Z[a]}),me.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{Q[o]||(Q[o]=[]),Q[o].push(i[o])})}a.provides&&a.provides(Z)}),n}function jt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Q[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Q[t]||[]).forEach(i=>{i.apply(null,n)})}function V(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,e):void 0}function zt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||H();if(e)return e=U(n,e)||e,fe(on.definitions,n,e)||fe(F.styles,n,e)}const on=new fa,da=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,q("noAuto")},pa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(q("beforeI2svg",t),V("pseudoElements2svg",t),V("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,Zn(()=>{ha({autoReplaceSvgRoot:e}),q("watch",t)})}},ga={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:U(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=vt(t[0]);return{prefix:n,iconName:U(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(Rn))){const e=xt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||H(),iconName:U(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=H();return{prefix:e,iconName:U(e,t)||t}}}},C={noAuto:da,config:f,dom:pa,parse:ga,library:on,findIconDefinition:zt,toHtml:ft},ha=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=h}=t;(Object.keys(F.styles).length>0||f.autoFetchSvg)&&R&&f.autoReplaceSvg&&C.dom.i2svg({node:e})};function At(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ft(n))}}),Object.defineProperty(t,"node",{get:function(){if(!R)return;const n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ba(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Kt(o)&&n.found&&!a.found){const{width:s,height:l}=n,c={x:s/l/2,y:.5};r.style=yt({...i,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function ya(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:a}]}]}function te(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:l,titleId:c,extra:u,watchable:m=!1}=t,{width:d,height:b}=n.found?n:e,v=a==="fak",O=[f.replacementClass,r?"".concat(f.cssPrefix,"-").concat(r):""].filter(E=>u.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(u.classes).join(" ");let x={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:O,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)}};const k=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};m&&(x.attributes[B]=""),s&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||lt())},children:[s]}),delete x.attributes.title);const A={...x,prefix:a,iconName:r,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:{...k,...u.styles}},{children:S,attributes:T}=n.found&&e.found?V("generateAbstractMask",A)||{children:[],attributes:{}}:V("generateAbstractIcon",A)||{children:[],attributes:{}};return A.children=S,A.attributes=T,o?ya(A):ba(A)}function de(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,l={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};s&&(l[B]="");const c={...o.styles};Kt(r)&&(c.transform=Kn({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const u=yt(c);u.length>0&&(l.style=u);const m=[];return m.push({tag:"span",attributes:l,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function va(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=yt(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Et}=F;function Rt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(kt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(kt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const xa={found:!1,width:512,height:512};function Aa(t,e){!He&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Dt(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=H()),new Promise((a,r)=>{if(n==="fa"){const i=rn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Et[e]&&Et[e][t]){const i=Et[e][t];return a(Rt(i))}Aa(t,e),a({...xa,icon:f.showMissingIcons&&t?V("missingIconAbstract")||{}:{}})})}const pe=()=>{},Yt=f.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:pe,measure:pe},rt='FA "6.6.0"',wa=t=>(Yt.mark("".concat(rt," ").concat(t," begins")),()=>sn(t)),sn=t=>{Yt.mark("".concat(rt," ").concat(t," ends")),Yt.measure("".concat(rt," ").concat(t),"".concat(rt," ").concat(t," begins"),"".concat(rt," ").concat(t," ends"))};var ee={begin:wa,end:sn};const dt=()=>{};function ge(t){return typeof(t.getAttribute?t.getAttribute(B):null)=="string"}function ka(t){const e=t.getAttribute?t.getAttribute($t):null,n=t.getAttribute?t.getAttribute(Bt):null;return e&&n}function Oa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function Sa(){return f.autoReplaceSvg===!0?pt.replace:pt[f.autoReplaceSvg]||pt.replace}function Ea(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Pa(t){return h.createElement(t)}function ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ea:Pa}=e;if(typeof t=="string")return h.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(ln(i,{ceFn:n}))}),a}function Na(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const pt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ln(n),e)}),e.getAttribute(B)===null&&f.keepOriginalSource){let n=h.createComment(Na(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~qt(e).indexOf(f.replacementClass))return pt.replace(t);const a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===f.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>ft(i)).join(`
`);e.setAttribute(B,""),e.innerHTML=r}};function he(t){t()}function cn(t,e){const n=typeof e=="function"?e:dt;if(t.length===0)n();else{let a=he;f.mutateApproach===Mn&&(a=W.requestAnimationFrame||he),a(()=>{const r=Sa(),i=ee.begin("mutate");t.map(r),i(),n()})}}let ne=!1;function fn(){ne=!0}function Ut(){ne=!1}let ht=null;function be(t){if(!ie||!f.observeMutations)return;const{treeCallback:e=dt,nodeCallback:n=dt,pseudoElementsCallback:a=dt,observeMutationsRoot:r=h}=t;ht=new ie(i=>{if(ne)return;const o=H();nt(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!ge(s.addedNodes[0])&&(f.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&f.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&ge(s.target)&&~Un.indexOf(s.attributeName))if(s.attributeName==="class"&&ka(s.target)){const{prefix:l,iconName:c}=xt(qt(s.target));s.target.setAttribute($t,l||o),c&&s.target.setAttribute(Bt,c)}else Oa(s.target)&&n(s.target)})}),R&&ht.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ca(){ht&&ht.disconnect()}function Ia(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ta(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=xt(qt(t));return r.prefix||(r.prefix=H()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=sa(r.prefix,t.innerText)||Jt(r.prefix,Ft(t.innerText))),!r.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function La(t){const e=nt(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||lt()):(e["aria-hidden"]="true",e.focusable="false")),e}function _a(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ta(t),i=La(t),o=jt("parseNodeAttributes",{},t);let s=e.styleParser?Ia(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i},...o}}const{styles:Fa}=F;function un(t){const e=f.autoReplaceSvg==="nest"?ye(t,{styleParser:!1}):ye(t);return~e.extra.classes.indexOf(Ge)?V("generateLayersText",t,e):V("generateSvgReplacementMutation",t,e)}let M=new Set;Ve.map(t=>{M.add("fa-".concat(t))});Object.keys(G[y]).map(M.add.bind(M));Object.keys(G[P]).map(M.add.bind(M));Object.keys(G[N]).map(M.add.bind(M));M=[...M];function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=h.documentElement.classList,a=u=>n.add("".concat(le,"-").concat(u)),r=u=>n.remove("".concat(le,"-").concat(u)),i=f.autoFetchSvg?M:Ve.map(u=>"fa-".concat(u)).concat(Object.keys(Fa));i.includes("fa")||i.push("fa");const o=[".".concat(Ge,":not([").concat(B,"])")].concat(i.map(u=>".".concat(u,":not([").concat(B,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=nt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const l=ee.begin("onTree"),c=s.reduce((u,m)=>{try{const d=un(m);d&&u.push(d)}catch(d){He||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,m)=>{Promise.all(c).then(d=>{cn(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),m(d)})})}function Ma(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;un(t).then(n=>{n&&cn([n],e)})}function ja(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:zt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:zt(r||{})),t(a,{...n,mask:r})}}const za=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:m,iconName:d,icon:b}=t;return At({type:"icon",...t},()=>(q("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(o?c["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(s||lt()):(c["aria-hidden"]="true",c.focusable="false")),te({icons:{main:Rt(b),mask:r?Rt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:d,transform:{..._,...n},symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:u,classes:l}})))};var Ra={mixout(){return{icon:ja(za)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ve,t.nodeCallback=Ma,t}}},provides(t){t.i2svg=function(e){const{node:n=h,callback:a=()=>{}}=e;return ve(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:l,mask:c,maskId:u,extra:m}=n;return new Promise((d,b)=>{Promise.all([Dt(a,o),c.iconName?Dt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[O,x]=v;d([e,te({icons:{main:O,mask:x},prefix:o,iconName:a,transform:s,symbol:l,maskId:u,title:r,titleId:i,extra:m,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=yt(o);s.length>0&&(a.style=s);let l;return Kt(i)&&(l=V("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},Da={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return At({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ya={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return At({type:"counter",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),va({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},Ua={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=_,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return At({type:"text",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),de({content:t,transform:{..._,...n},title:a,extra:{attributes:i,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(ze){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,s=c.height/l}return f.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,de({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Wa=new RegExp('"',"ug"),xe=[1105920,1112319],Ae={FontAwesome:{normal:"fas",400:"fas"},...kn,...wn,...Tn},Wt=Object.keys(Ae).reduce((t,e)=>(t[e.toLowerCase()]=Ae[e],t),{}),Ha=Object.keys(Wt).reduce((t,e)=>{const n=Wt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Va(t){const e=t.replace(Wa,""),n=ea(e,0),a=n>=xe[0]&&n<=xe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ft(r?e[0]:e),isSecondary:a||r}}function Xa(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Wt[n]||{})[r]||Ha[n]}function we(t,e){const n="".concat(Fn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=nt(t.children).filter(d=>d.getAttribute(It)===e)[0],s=W.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),c=l.match(Dn),u=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&m!=="none"&&m!==""){const d=s.getPropertyValue("content");let b=Xa(l,u);const{value:v,isSecondary:O}=Va(d),x=c[0].startsWith("FontAwesome");let k=Jt(b,v),A=k;if(x){const S=la(v);S.iconName&&S.prefix&&(k=S.iconName,b=S.prefix)}if(k&&!O&&(!o||o.getAttribute($t)!==b||o.getAttribute(Bt)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);const S=_a(),{extra:T}=S;T.attributes[It]=e,Dt(k,b).then(E=>{const w=te({...S,icons:{main:E,mask:Zt()},prefix:b,iconName:A,extra:T,watchable:!0}),I=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=w.map(wt=>ft(wt)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ga(t){return Promise.all([we(t,"::before"),we(t,"::after")])}function $a(t){return t.parentNode!==document.head&&!~jn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(It)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ke(t){if(R)return new Promise((e,n)=>{const a=nt(t.querySelectorAll("*")).filter($a).map(Ga),r=ee.begin("searchPseudoElements");fn(),Promise.all(a).then(()=>{r(),Ut(),e()}).catch(()=>{r(),Ut(),n()})})}var Ba={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ke,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=h}=e;f.searchPseudoElements&&ke(n)}}};let Oe=!1;var qa={mixout(){return{dom:{unwatch(){fn(),Oe=!0}}}},hooks(){return{bootstrap(){be(jt("mutationObserverCallbacks",{}))},noAuto(){Ca()},watch(t){const{observeMutationsRoot:e}=t;Oe?Ut():be(jt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Se=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Ka={mixout(){return{parse:{transform:t=>Se(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Se(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(c)},m={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:u,path:m};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Pt={x:0,y:0,width:"100%",height:"100%"};function Ee(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Qa(t){return t.tag==="g"?t.children:[t]}var Ja={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?xt(n.split(" ").map(r=>r.trim())):Zt();return a.prefix||(a.prefix=H()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:l,icon:c}=r,{width:u,icon:m}=i,d=qn({transform:s,containerWidth:u,iconWidth:l}),b={tag:"rect",attributes:{...Pt,fill:"white"}},v=c.children?{children:c.children.map(Ee)}:{},O={tag:"g",attributes:{...d.inner},children:[Ee({tag:c.tag,attributes:{...c.attributes,...d.path},...v})]},x={tag:"g",attributes:{...d.outer},children:[O]},k="mask-".concat(o||lt()),A="clip-".concat(o||lt()),S={tag:"mask",attributes:{...Pt,id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,x]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Qa(m)},S]};return n.push(T,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(k,")"),...Pt}}),{children:n,attributes:a}}}},Za={provides(t){let e=!1;W.matchMedia&&(e=W.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},tr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},er=[Jn,Ra,Da,Ya,Ua,Ba,qa,Ka,Ja,Za,tr];ma(er,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const Ht=C.parse;C.findIconDefinition;C.toHtml;const nr=C.icon;C.layer;C.text;C.counter;function Pe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pe(Object(n),!0).forEach(function(a){J(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function bt(t){"@babel/helpers - typeof";return bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bt(t)}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ar(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function rr(t,e){if(t==null)return{};var n=ar(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Vt(t){return ir(t)||or(t)||sr(t)||lr()}function ir(t){if(Array.isArray(t))return Xt(t)}function or(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sr(t,e){if(t){if(typeof t=="string")return Xt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xt(t,e)}}function Xt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function lr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,m=t.pulse,d=t.fixedWidth,b=t.inverse,v=t.border,O=t.listItem,x=t.flip,k=t.size,A=t.rotation,S=t.pull,T=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":d,"fa-inverse":b,"fa-border":v,"fa-li":O,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},J(e,"fa-".concat(k),typeof k<"u"&&k!==null),J(e,"fa-rotate-".concat(A),typeof A<"u"&&A!==null&&A!==0),J(e,"fa-pull-".concat(S),typeof S<"u"&&S!==null),J(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(E){return T[E]?E:null}).filter(function(E){return E})}function fr(t){return t=t-0,t===t}function mn(t){return fr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ur=["style"];function mr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function dr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=mn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[mr(r)]=i:e[r]=i,e},{})}function dn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return dn(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=dr(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[mn(c)]=u}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=rr(n,ur);return r.attrs.style=L(L({},r.attrs.style),o),t.apply(void 0,[e.tag,L(L({},r.attrs),s)].concat(Vt(a)))}var pn=!1;try{pn=!0}catch{}function pr(){if(!pn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ne(t){if(t&&bt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ht.icon)return Ht.icon(t);if(t===null)return null;if(t&&bt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Nt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?J({},t,e):{}}var Ce={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},K=_e.forwardRef(function(t,e){var n=L(L({},Ce),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,c=n.maskId,u=Ne(a),m=Nt("classes",[].concat(Vt(cr(n)),Vt((o||"").split(" ")))),d=Nt("transform",typeof n.transform=="string"?Ht.transform(n.transform):n.transform),b=Nt("mask",Ne(r)),v=nr(u,L(L(L(L({},m),d),b),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!v)return pr("Could not find icon",u),null;var O=v.abstract,x={ref:e};return Object.keys(n).forEach(function(k){Ce.hasOwnProperty(k)||(x[k]=n[k])}),gr(O[0],x)});K.displayName="FontAwesomeIcon";K.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var gr=dn.bind(null,_e.createElement);const hr={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},br={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},yr=br,vr={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},gn={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},hn=({id:t,multiple:e=!0,renderOption:n=!0,withSearch:a=!0,options:r=[],outlined:i=!1,zIndex:o=1e3,optionLabel:s="Form"})=>{var E;const l=D.useRef(null),c=D.useRef(null),[u,m]=D.useState([]),[d,b]=D.useState(""),[v,O]=D.useState(!1),[x,k]=D.useState(0);D.useEffect(()=>{var w;l.current&&k((w=l==null?void 0:l.current)==null?void 0:w.offsetHeight)},[(E=l.current)==null?void 0:E.offsetHeight]),D.useEffect(()=>{const w=I=>{c.current&&!c.current.contains(I.target)&&!l.current.contains(I.target)&&O(!1)};return document.addEventListener("mousedown",w),()=>{document.removeEventListener("mousedown",w)}},[]);const A=w=>{m(I=>I.filter(wt=>wt.id!==w))},S=w=>{if(!e){m([w]),O(!1);return}m(I=>[...I,w])},T=g.jsxs("div",{ref:c,style:{zIndex:o,top:x+6},className:"absolute bg-white w-full left-0 rounded-md flex flex-col gap-4 shadow-lg",children:[a&&g.jsx(wr,{onChange:w=>b(w.target.value),value:d,handleResetText:()=>b(""),disabled:i}),g.jsx(xr,{data:r,values:u,searchText:d,renderOption:n,outlined:i,handleSelected:S,handleDeleteValue:A})]});return g.jsxs("div",{className:"flex w-full gap-20 items-center",children:[g.jsx("label",{htmlFor:t,children:s}),g.jsxs("div",{className:"relative grow",children:[g.jsxs("div",{ref:l,id:t,className:`relative py-2 h-12 px-2 border border-gray-300 rounded-lg w-full flex items-center 
            ${i?"bg-gray-200 cursor-not-allowed":"bg-white: cursor-pointer"}
          `,onClick:()=>{i||O(w=>!w)},children:[g.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:u.map(w=>e?g.jsx(Ar,{handleDelete:I=>{I.stopPropagation(),A(w.id)},children:w.label},w.id):w.label)}),g.jsx("div",{className:"absolute right-4 text-gray-400 text-sm",children:v?g.jsx(K,{icon:hr}):g.jsx(K,{icon:vr})})]}),v&&T]})]})},xr=({data:t,values:e,searchText:n,renderOption:a,outlined:r,...i})=>{const o=m=>e.find(d=>d.label===m),s=m=>{o(m.label)?i.handleDeleteValue(m.id):r||i.handleSelected(m)},l=(m,d)=>d?m.split(new RegExp(`(${d})`,"gi")).map((v,O)=>v.toLowerCase()===d.toLowerCase()?g.jsx("span",{className:"bg-green-300",children:v},O):v):m,u=((m,d)=>d?m.filter(b=>{var v;return(v=b.label)==null?void 0:v.toLowerCase().includes(d==null?void 0:d.toLowerCase())}):m)(t,n);return a?g.jsx("ul",{className:"",children:u==null?void 0:u.map(m=>g.jsx("li",{className:`flex justify-between items-center px-4 py-2 hover:bg-green-50 cursor-pointer
            ${o(m.label)||r?"bg-green-50 ":""}
          `,onClick:()=>s(m),children:g.jsx("div",{children:a?l(m.label,n):m.label})},m.id))}):g.jsx("div",{className:"px-4 py-2 text-gray-500 text-center",children:"No Data"})},Ar=({children:t,handleDelete:e})=>g.jsxs("div",{className:"flex gap-2 items-center px-2 py-1 rounded-full bg-gray-100",children:[g.jsx("span",{children:t}),g.jsx("button",{className:"text-base text-gray-600",onClick:e,children:g.jsx(K,{icon:gn})})]}),wr=({handleResetText:t,...e})=>g.jsxs("div",{className:"relative px-12 py-[10px] border border-gray-300 rounded-t-md w-full",children:[g.jsx("div",{className:"absolute left-4 text-gray-600",children:g.jsx(K,{icon:yr})}),g.jsx("input",{className:`outline-none w-full  
          ${e.disabled?"cursor-not-allowed bg-white":""}
        `,type:"text",...e}),e.value.length>0&&g.jsx("button",{className:"absolute right-6 text-gray-600",onClick:t,children:g.jsx(K,{icon:gn})})]}),kr=hn;hn.__docgenInfo={description:"",methods:[],displayName:"Form",props:{multiple:{defaultValue:{value:"true",computed:!1},required:!1},renderOption:{defaultValue:{value:"true",computed:!1},required:!1},withSearch:{defaultValue:{value:"true",computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1},outlined:{defaultValue:{value:"false",computed:!1},required:!1},zIndex:{defaultValue:{value:"1000",computed:!1},required:!1},optionLabel:{defaultValue:{value:"'Form'",computed:!1},required:!1}}};const Pr={title:"Example/Form",component:kr,tags:["autodocs"],argTypes:{multiple:{control:"boolean"},renderOption:{control:"boolean"},withSearch:{control:"boolean"},options:{control:"object"},outlined:{control:"boolean"},optionLabel:{control:"text"},id:{control:"text"},zIndex:{control:"number"}},args:{multiple:!0,renderOption:!0,withSearch:!0,options:[{id:1,label:"Option 1"},{id:2,label:"Option with icon"},{id:3,label:"Long Long Option 3"},{id:4,label:"Long Long Long Option 4"},{id:5,label:"Long Long Long Long Option 5"},{id:6,label:"Long Long Long Long Long Option 6"}],outlined:!1,optionLabel:"Label",id:"sdd-1",zIndex:1e3}},mt={args:{renderOption:!1}};var Ie,Te,Le;mt.parameters={...mt.parameters,docs:{...(Ie=mt.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    renderOption: false
  }
}`,...(Le=(Te=mt.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};const Nr=["SelectDropdownField"];export{mt as SelectDropdownField,Nr as __namedExportsOrder,Pr as default};
