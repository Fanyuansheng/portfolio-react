import{g as Te,b as h,r as _,j as u}from"./index-CMWF0tbb.js";var ie={exports:{}},Ae="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ie=Ae,Fe=Ie;function se(){}function ce(){}ce.resetWarningCache=se;var ke=function(){function t(n,o,a,c,l,i){if(i!==Fe){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ce,resetWarningCache:se};return r.PropTypes=r,r};ie.exports=ke();var Le=ie.exports;const f=Te(Le);function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?H(Object(r),!0).forEach(function(n){le(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function A(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(e){return typeof e}:A=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(t)}function le(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function De(t,e){return Me(t)||Ue(t,e)||$e(t,e)||Be()}function Me(t){if(Array.isArray(t))return t}function Ue(t,e){var r=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(r!=null){var n=[],o=!0,a=!1,c,l;try{for(r=r.call(t);!(o=(c=r.next()).done)&&(n.push(c.value),!(e&&n.length===e));o=!0);}catch(i){a=!0,l=i}finally{try{!o&&r.return!=null&&r.return()}finally{if(a)throw l}}return n}}function $e(t,e){if(t){if(typeof t=="string")return Z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Z(t,e)}}function Z(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Be(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var We=function(e){var r=h.useRef(e);return h.useEffect(function(){r.current=e},[e]),r.current},L=function(e){return e!==null&&A(e)==="object"},X="[object Object]",Ye=function t(e,r){if(!L(e)||!L(r))return e===r;var n=Array.isArray(e),o=Array.isArray(r);if(n!==o)return!1;var a=Object.prototype.toString.call(e)===X,c=Object.prototype.toString.call(r)===X;if(a!==c)return!1;if(!a&&!n)return e===r;var l=Object.keys(e),i=Object.keys(r);if(l.length!==i.length)return!1;for(var d={},p=0;p<l.length;p+=1)d[l[p]]=!0;for(var s=0;s<i.length;s+=1)d[i[s]]=!0;var g=Object.keys(d);if(g.length!==l.length)return!1;var C=e,w=r,x=function(P){return t(C[P],w[P])};return g.every(x)},qe=function(e,r,n){return L(e)?Object.keys(e).reduce(function(o,a){var c=!L(r)||!Ye(e[a],r[a]);return n.includes(a)?(c&&console.warn("Unsupported prop change: options.".concat(a," is not a mutable property.")),o):c?Q(Q({},o||{}),{},le({},a,e[a])):o},null):null},ue=h.createContext(null);ue.displayName="ElementsContext";var Ke=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},de=h.createContext(null);de.displayName="CartElementContext";var ze=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e};f.any,f.object;var ee=function(e){var r=h.useContext(ue);return Ke(r,e)},te=function(e){var r=h.useContext(de);return ze(r,e)};f.func.isRequired;var E=function(e,r,n){var o=!!n,a=h.useRef(n);h.useEffect(function(){a.current=n},[n]),h.useEffect(function(){if(!o||!e)return function(){};var c=function(){a.current&&a.current.apply(a,arguments)};return e.on(r,c),function(){e.off(r,c)}},[o,r,e,a])},Ge=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},m=function(e,r){var n="".concat(Ge(e),"Element"),o=function(i){var d=i.id,p=i.className,s=i.options,g=s===void 0?{}:s,C=i.onBlur,w=i.onFocus,x=i.onReady,N=i.onChange,P=i.onEscape,ge=i.onClick,ve=i.onLoadError,be=i.onLoaderStart,Ee=i.onNetworksChange,D=i.onCheckout,xe=i.onLineItemClick,Ce=i.onConfirm,Se=i.onCancel,we=i.onShippingAddressChange,Oe=i.onShippingRateChange,je=ee("mounts <".concat(n,">")),M=je.elements,_e=h.useState(null),z=De(_e,2),v=z[0],Ne=z[1],O=h.useRef(null),U=h.useRef(null),G=te("mounts <".concat(n,">")),$=G.setCart,B=G.setCartState;E(v,"blur",C),E(v,"focus",w),E(v,"escape",P),E(v,"click",ge),E(v,"loaderror",ve),E(v,"loaderstart",be),E(v,"networkschange",Ee),E(v,"lineitemclick",xe),E(v,"confirm",Ce),E(v,"cancel",Se),E(v,"shippingaddresschange",we),E(v,"shippingratechange",Oe);var R;e==="cart"?R=function(V){B(V),x&&x(V)}:x&&(e==="payButton"?R=x:R=function(){x(v)}),E(v,"ready",R);var Pe=e==="cart"?function(b){B(b),N&&N(b)}:N;E(v,"change",Pe);var Re=e==="cart"?function(b){B(b),D&&D(b)}:D;E(v,"checkout",Re),h.useLayoutEffect(function(){if(O.current===null&&M&&U.current!==null){var b=M.create(e,g);e==="cart"&&$&&$(b),O.current=b,Ne(b),b.mount(U.current)}},[M,g,$]);var J=We(g);return h.useEffect(function(){if(O.current){var b=qe(g,J,["paymentRequest"]);b&&O.current.update(b)}},[g,J]),h.useLayoutEffect(function(){return function(){O.current&&(O.current.destroy(),O.current=null)}},[]),h.createElement("div",{id:d,className:p,ref:U})},a=function(i){ee("mounts <".concat(n,">")),te("mounts <".concat(n,">"));var d=i.id,p=i.className;return h.createElement("div",{id:d,className:p})},c=r?a:o;return c.propTypes={id:f.string,className:f.string,onChange:f.func,onBlur:f.func,onFocus:f.func,onReady:f.func,onEscape:f.func,onClick:f.func,onLoadError:f.func,onLoaderStart:f.func,onNetworksChange:f.func,onCheckout:f.func,onLineItemClick:f.func,onConfirm:f.func,onCancel:f.func,onShippingAddressChange:f.func,onShippingRateChange:f.func,options:f.object},c.displayName=n,c.__elementType=e,c},y=typeof window>"u";m("auBankAccount",y);var Je=m("card",y);m("cardNumber",y);m("cardExpiry",y);m("cardCvc",y);m("fpxBank",y);m("iban",y);m("idealBank",y);m("p24Bank",y);m("epsBank",y);m("payment",y);m("payButton",y);m("paymentRequestButton",y);m("linkAuthentication",y);m("address",y);m("shippingAddress",y);m("cart",y);m("paymentMethodMessaging",y);m("affirmMessage",y);m("afterpayClearpayMessage",y);var K=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,He=Object.getOwnPropertyNames,Qe=Object.prototype.hasOwnProperty,Ze=(t,e)=>{for(var r in e)K(t,r,{get:e[r],enumerable:!0})},Xe=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of He(e))!Qe.call(t,o)&&o!==r&&K(t,o,{get:()=>e[o],enumerable:!(n=Ve(e,o))||n.enumerable});return t},et=t=>Xe(K({},"__esModule",{value:!0}),t),re=(t,e,r)=>new Promise((n,o)=>{var a=i=>{try{l(r.next(i))}catch(d){o(d)}},c=i=>{try{l(r.throw(i))}catch(d){o(d)}},l=i=>i.done?n(i.value):Promise.resolve(i.value).then(a,c);l((r=r.apply(t,e)).next())}),fe={};Ze(fe,{SubmissionError:()=>j,appendExtraData:()=>I,createClient:()=>pe,getDefaultClient:()=>xt,isSubmissionError:()=>ut});var Y=et(fe),S="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",tt=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function rt(t){t=String(t);for(var e,r,n,o,a="",c=0,l=t.length%3;c<t.length;){if((r=t.charCodeAt(c++))>255||(n=t.charCodeAt(c++))>255||(o=t.charCodeAt(c++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");e=r<<16|n<<8|o,a+=S.charAt(e>>18&63)+S.charAt(e>>12&63)+S.charAt(e>>6&63)+S.charAt(e&63)}return l?a.slice(0,l-3)+"===".substring(l):a}function nt(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!tt.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(t.length&3));for(var e,r="",n,o,a=0;a<t.length;)e=S.indexOf(t.charAt(a++))<<18|S.indexOf(t.charAt(a++))<<12|(n=S.indexOf(t.charAt(a++)))<<6|(o=S.indexOf(t.charAt(a++))),r+=n===64?String.fromCharCode(e>>16&255):o===64?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,e&255);return r}var ot=()=>navigator.webdriver||!!document.documentElement.getAttribute(nt("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,at=class{constructor(){this.loadedAt=Date.now(),this.webdriver=ot()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},it=class{constructor(t){this.kind="success",this.next=t.next}};function st(t){return"next"in t&&typeof t.next=="string"}var ct=class{constructor(t,e){this.paymentIntentClientSecret=t,this.resubmitKey=e,this.kind="stripePluginPending"}};function lt(t){if("stripe"in t&&"resubmitKey"in t&&typeof t.resubmitKey=="string"){let{stripe:e}=t;return typeof e=="object"&&e!=null&&"paymentIntentClientSecret"in e&&typeof e.paymentIntentClientSecret=="string"}return!1}function ut(t){return t.kind==="error"}var j=class{constructor(...t){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var e;for(let r of t){if(!r.field){this.formErrors.push({code:r.code&&dt(r.code)?r.code:"UNSPECIFIED",message:r.message});continue}let n=(e=this.fieldErrors.get(r.field))!=null?e:[];n.push({code:r.code&&pt(r.code)?r.code:"UNSPECIFIED",message:r.message}),this.fieldErrors.set(r.field,n)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(t){var e;return(e=this.fieldErrors.get(t))!=null?e:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function dt(t){return t in ft}var ft={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function pt(t){return t in mt}var mt={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function yt(t){return"errors"in t&&Array.isArray(t.errors)&&t.errors.every(e=>typeof e.message=="string")||"error"in t&&typeof t.error=="string"}var ht="3.0.1",gt=t=>rt(JSON.stringify(t)),vt=t=>{let e=`@formspree/core@${ht}`;return t?`${t} ${e}`:e};function I(t,e,r){t instanceof FormData?t.append(e,r):t[e]=r}function bt(t){return t!==null&&typeof t=="object"}var Et=class{constructor(t={}){this.project=t.project,this.stripe=t.stripe,typeof window<"u"&&(this.session=new at)}submitForm(t,e){return re(this,arguments,function*(r,n,o={}){let a=o.endpoint||"https://formspree.io",c=this.project?`${a}/p/${this.project}/f/${r}`:`${a}/f/${r}`,l={Accept:"application/json","Formspree-Client":vt(o.clientName)};this.session&&(l["Formspree-Session-Data"]=gt(this.session.data())),n instanceof FormData||(l["Content-Type"]="application/json");function i(p){return re(this,null,function*(){try{let s=yield(yield fetch(c,{method:"POST",mode:"cors",body:p instanceof FormData?p:JSON.stringify(p),headers:l})).json();if(bt(s)){if(yt(s))return Array.isArray(s.errors)?new j(...s.errors):new j({message:s.error});if(lt(s))return new ct(s.stripe.paymentIntentClientSecret,s.resubmitKey);if(st(s))return new it({next:s.next})}return new j({message:"Unexpected response format"})}catch(s){let g=s instanceof Error?s.message:`Unknown error while posting to Formspree: ${JSON.stringify(s)}`;return new j({message:g})}})}if(this.stripe&&o.createPaymentMethod){let p=yield o.createPaymentMethod();if(p.error)return new j({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});I(n,"paymentMethod",p.paymentMethod.id);let s=yield i(n);if(s.kind==="error")return s;if(s.kind==="stripePluginPending"){let g=yield this.stripe.handleCardAction(s.paymentIntentClientSecret);if(g.error)return new j({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});n instanceof FormData?n.delete("paymentMethod"):delete n.paymentMethod,I(n,"paymentIntent",g.paymentIntent.id),I(n,"resubmitKey",s.resubmitKey);let C=yield i(n);return ne(C),C}return s}let d=yield i(n);return ne(d),d})}};function ne(t){let{kind:e}=t;if(e!=="success"&&e!=="error")throw new Error(`Unexpected submission result (kind: ${e})`)}var pe=t=>new Et(t),xt=()=>(W||(W=pe()),W),W,me={};Object.defineProperty(me,"__esModule",{value:!0});function F(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(e){return typeof e}:F=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}var ye="https://js.stripe.com/v3",Ct=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,oe="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",St=function(){for(var e=document.querySelectorAll('script[src^="'.concat(ye,'"]')),r=0;r<e.length;r++){var n=e[r];if(Ct.test(n.src))return n}return null},wt=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(ye).concat(r);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n},Ot=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:r})},T=null,jt=function(e){return T!==null||(T=new Promise(function(r,n){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&e&&console.warn(oe),window.Stripe){r(window.Stripe);return}try{var o=St();o&&e?console.warn(oe):o||(o=wt(e)),o.addEventListener("load",function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(a){n(a);return}})),T},_t=function(e,r,n){if(e===null)return null;var o=e.apply(void 0,r);return Ot(o,n),o},ae=function(e){var r=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||F(e)!=="object")throw new Error(r);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(r)},k,q=!1,he=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];q=!0;var o=Date.now();return jt(k).then(function(a){return _t(a,r,o)})};he.setLoadParameters=function(t){if(q&&k){var e=ae(t),r=Object.keys(e),n=r.reduce(function(o,a){var c;return o&&t[a]===((c=k)===null||c===void 0?void 0:c[a])},!0);if(n)return}if(q)throw new Error("You cannot change load parameters after calling loadStripe");k=ae(t)};me.loadStripe=he;var Nt=h.createContext(null);function Pt(){return _.useContext(Nt)??{client:Y.getDefaultClient()}}var Rt="2.5.1",Tt=`@formspree/react@${Rt}`;function At(t,e={}){let r=Pt(),{client:n=r.client,extraData:o,onError:a,onSuccess:c,origin:l}=e,{stripe:i}=n,d=_.useMemo(()=>i==null?void 0:i.elements().getElement(Je),[i]);return async function(p){let s=It(p)?Ft(p):p;if(typeof o=="object")for(let[C,w]of Object.entries(o)){let x;typeof w=="function"?x=await w():x=w,x!==void 0&&Y.appendExtraData(s,C,x)}let g=await n.submitForm(t,s,{endpoint:l,clientName:Tt,createPaymentMethod:i&&d?()=>i.createPaymentMethod({type:"card",card:d,billing_details:kt(s)}):void 0});Y.isSubmissionError(g)?a==null||a(g):c==null||c(g)}}function It(t){return"preventDefault"in t&&typeof t.preventDefault=="function"}function Ft(t){t.preventDefault();let e=t.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function kt(t){let e={address:Lt(t)};for(let r of["name","email","phone"]){let n=t instanceof FormData?t.get(r):t[r];n&&typeof n=="string"&&(e[r]=n)}return e}function Lt(t){let e={};for(let[r,n]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let o=t instanceof FormData?t.get(r):t[r];o&&typeof o=="string"&&(e[n]=o)}return e}function Dt(t,e={}){let[r,n]=_.useState(null),[o,a]=_.useState(null),[c,l]=_.useState(!1),[i,d]=_.useState(!1),p=At(t,{client:e.client,extraData:e.data,onError(s){n(s),l(!1),d(!1)},onSuccess(s){n(null),a(s),l(!1),d(!0)},origin:e.endpoint});return[{errors:r,result:o,submitting:c,succeeded:i},async function(s){l(!0),await p(s)},function(){n(null),a(null),l(!1),d(!1)}]}const Ut=()=>{const[t,e]=Dt("xpwzloqv");return t.succeeded?u.jsx("div",{className:"bg-gray-800 p-8 rounded-lg",children:u.jsx("p",{className:"text-green-400 text-center text-lg",children:"感谢您的留言！我会尽快回复。"})}):u.jsx("section",{id:"contact",className:"min-h-screen py-20 flex items-center",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-12 text-center",children:"联系我"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[u.jsxs("div",{className:"space-y-8",children:[u.jsx("h3",{className:"text-2xl font-semibold",children:"让我们开始对话"}),u.jsx("p",{className:"text-gray-400 text-lg",children:"无论是项目合作、技术交流还是职业机会，我都很乐意与您沟通。"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("a",{href:"https://github.com/Fanyuansheng",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-3 text-gray-400 hover:text-white transition-colors",children:[u.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),u.jsx("span",{children:"GitHub"})]}),u.jsxs("a",{href:"mailto:2923616405@qq.com",className:"flex items-center space-x-3 text-gray-400 hover:text-white transition-colors",children:[u.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),u.jsx("span",{children:"邮箱"})]})]})]}),u.jsx("div",{className:"bg-gray-800 p-8 rounded-lg",children:u.jsxs("form",{onSubmit:e,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-400 mb-2",children:"姓名"}),u.jsx("input",{type:"text",id:"name",name:"name",required:!0,className:"w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white",placeholder:"您的姓名"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-400 mb-2",children:"邮箱"}),u.jsx("input",{type:"email",id:"email",name:"email",required:!0,className:"w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white",placeholder:"your@email.com"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-400 mb-2",children:"消息"}),u.jsx("textarea",{id:"message",name:"message",required:!0,rows:4,className:"w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white",placeholder:"请输入您的消息..."})]}),u.jsx("button",{type:"submit",disabled:t.submitting,className:"w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50",children:t.submitting?"发送中...":"发送消息"})]})})]})]})})};export{Ut as default};
