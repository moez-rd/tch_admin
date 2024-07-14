import{J as T,r as P,L,M as n,c as cr,N as kr,a2 as Nr,a3 as V,O as f,_ as G,ah as R,d as dr,V as jr,a1 as Ir,W as zr,j as x,a as _,b as Rr,T as Dr,G as Vr,B as Gr,e as Tr}from"./app-769e3db3.js";import{G as Lr,P as Ar}from"./index-cb31b7b0.js";import"./Center-bb13adec.js";import"./Image-c2d14506.js";import"./Title-d12aa372.js";var Br=Object.defineProperty,J=Object.getOwnPropertySymbols,Wr=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable,U=(r,e,a)=>e in r?Br(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,Fr=(r,e)=>{for(var a in e||(e={}))Wr.call(e,a)&&U(r,a,e[a]);if(J)for(var a of J(e))qr.call(e,a)&&U(r,a,e[a]);return r};function Mr({theme:r,color:e}){return e==="dimmed"?r.fn.dimmed():r.fn.themeColor(e||r.primaryColor,r.colorScheme==="dark"?4:7,!1,!0)}var Yr=T((r,{color:e,underline:a})=>({root:Fr({backgroundColor:"transparent",cursor:"pointer",padding:0,border:0,color:Mr({theme:r,color:e})},r.fn.hover({textDecoration:a?"underline":"none"}))}));const Hr=Yr;var Jr=Object.defineProperty,C=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,fr=Object.prototype.propertyIsEnumerable,K=(r,e,a)=>e in r?Jr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,Q=(r,e)=>{for(var a in e||(e={}))pr.call(e,a)&&K(r,a,e[a]);if(C)for(var a of C(e))fr.call(e,a)&&K(r,a,e[a]);return r},Ur=(r,e)=>{var a={};for(var o in r)pr.call(r,o)&&e.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&C)for(var o of C(r))e.indexOf(o)<0&&fr.call(r,o)&&(a[o]=r[o]);return a};const Kr={underline:!0},ur=P.forwardRef((r,e)=>{const a=L("Anchor",Kr,r),{component:o,className:l,unstyled:i,variant:c,size:d,color:s,underline:p}=a,t=Ur(a,["component","className","unstyled","variant","size","color","underline"]),{classes:g,cx:m}=Hr({color:s,underline:p},{name:"Anchor",unstyled:i,variant:c,size:d}),u=o==="button"?{type:"button"}:null;return n.createElement(cr,Q(Q({component:o||"a",ref:e,className:m(g.root,l),size:d},u),t))});ur.displayName="@mantine/core/Anchor";const Qr=kr(ur),mr=P.createContext(null),Xr=mr.Provider,Zr=()=>P.useContext(mr);var re=Object.defineProperty,E=Object.getOwnPropertySymbols,vr=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable,X=(r,e,a)=>e in r?re(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,Z=(r,e)=>{for(var a in e||(e={}))vr.call(e,a)&&X(r,a,e[a]);if(E)for(var a of E(e))_r.call(e,a)&&X(r,a,e[a]);return r},ee=(r,e)=>{var a={};for(var o in r)vr.call(r,o)&&e.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&E)for(var o of E(r))e.indexOf(o)<0&&_r.call(r,o)&&(a[o]=r[o]);return a};const ae={size:"sm"},gr=P.forwardRef((r,e)=>{const a=L("CheckboxGroup",ae,r),{children:o,value:l,defaultValue:i,onChange:c,size:d,wrapperProps:s}=a,p=ee(a,["children","value","defaultValue","onChange","size","wrapperProps"]),[t,g]=Nr({value:l,defaultValue:i,finalValue:[],onChange:c}),m=u=>{const y=u.currentTarget.value;g(t.includes(y)?t.filter(O=>O!==y):[...t,y])};return n.createElement(Xr,{value:{value:t,onChange:m,size:d}},n.createElement(V.Wrapper,Z(Z({labelElement:"div",size:d,__staticSelector:"CheckboxGroup",ref:e},s),p),o))});gr.displayName="@mantine/core/CheckboxGroup";var oe=Object.defineProperty,k=Object.getOwnPropertySymbols,yr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,rr=(r,e,a)=>e in r?oe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,N=(r,e)=>{for(var a in e||(e={}))yr.call(e,a)&&rr(r,a,e[a]);if(k)for(var a of k(e))br.call(e,a)&&rr(r,a,e[a]);return r},Pr=(r,e)=>{var a={};for(var o in r)yr.call(r,o)&&e.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&k)for(var o of k(r))e.indexOf(o)<0&&br.call(r,o)&&(a[o]=r[o]);return a};function te(r){const e=r,{width:a,height:o,style:l}=e,i=Pr(e,["width","height","style"]);return n.createElement("svg",N({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:N({width:a,height:o},l)},i),n.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function ne(r){var e=r,{indeterminate:a}=e,o=Pr(e,["indeterminate"]);return a?n.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6"},o),n.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):n.createElement(te,N({},o))}var le=Object.defineProperty,se=Object.defineProperties,ie=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,ar=(r,e,a)=>e in r?le(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,or=(r,e)=>{for(var a in e||(e={}))ce.call(e,a)&&ar(r,a,e[a]);if(er)for(var a of er(e))de.call(e,a)&&ar(r,a,e[a]);return r},tr=(r,e)=>se(r,ie(e));const pe={xs:f(16),sm:f(20),md:f(24),lg:f(30),xl:f(36)};var fe=T((r,{radius:e,color:a,transitionDuration:o,labelPosition:l,error:i,indeterminate:c},{size:d})=>{const s=G({size:d,sizes:pe}),p=r.fn.variant({variant:"filled",color:a});return{icon:tr(or({},r.fn.cover()),{ref:R("icon"),color:c?"inherit":r.white,transform:c?"none":`translateY(${f(5)}) scale(0.5)`,opacity:c?1:0,transitionProperty:"opacity, transform",transitionTimingFunction:"ease",transitionDuration:`${o}ms`,pointerEvents:"none",width:"60%",position:"absolute",zIndex:1,margin:"auto","@media (prefers-reduced-motion)":{transitionDuration:r.respectReducedMotion?"0ms":void 0}}),inner:{position:"relative",width:s,height:s,order:l==="left"?2:1},input:tr(or({},r.fn.focusStyles()),{appearance:"none",backgroundColor:r.colorScheme==="dark"?r.colors.dark[6]:r.white,border:`${f(1)} solid ${i?r.fn.variant({variant:"filled",color:"red"}).background:r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[4]}`,width:s,height:s,borderRadius:r.fn.radius(e),padding:0,display:"block",margin:0,transition:`border-color ${o}ms ease, background-color ${o}ms ease`,cursor:r.cursorType,"&:checked":{backgroundColor:p.background,borderColor:p.background,[`& + .${R("icon")}`]:{opacity:1,color:r.white,transform:"translateY(0) scale(1)"}},"&:disabled":{backgroundColor:r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[2],borderColor:r.colorScheme==="dark"?r.colors.dark[6]:r.colors.gray[3],cursor:"not-allowed",pointerEvents:"none",[`& + .${R("icon")}`]:{color:r.colorScheme==="dark"?r.colors.dark[6]:r.colors.gray[5]}}})}});const ue=fe;var me=Object.defineProperty,ve=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,nr=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,lr=(r,e,a)=>e in r?me(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,be=(r,e)=>{for(var a in e||(e={}))ge.call(e,a)&&lr(r,a,e[a]);if(nr)for(var a of nr(e))ye.call(e,a)&&lr(r,a,e[a]);return r},Pe=(r,e)=>ve(r,_e(e));const D={xs:f(16),sm:f(20),md:f(24),lg:f(30),xl:f(36)};var Oe=T((r,{labelPosition:e},{size:a})=>({root:{},body:{display:"flex","&:has(input:disabled) label":{color:r.colorScheme==="dark"?r.colors.dark[3]:r.colors.gray[5]}},labelWrapper:Pe(be({},r.fn.fontStyles()),{display:"inline-flex",flexDirection:"column",WebkitTapHighlightColor:"transparent",fontSize:a in D?G({size:a,sizes:r.fontSizes}):void 0,lineHeight:a in D?G({size:a,sizes:D}):void 0,color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,cursor:r.cursorType,order:e==="left"?1:2}),description:{marginTop:`calc(${r.spacing.xs} / 2)`,[e==="left"?"paddingRight":"paddingLeft"]:r.spacing.sm},error:{marginTop:`calc(${r.spacing.xs} / 2)`,[e==="left"?"paddingRight":"paddingLeft"]:r.spacing.sm},label:{cursor:r.cursorType,[e==="left"?"paddingRight":"paddingLeft"]:r.spacing.sm,"&:disabled, &[data-disabled]":{color:r.colorScheme==="dark"?r.colors.dark[3]:r.colors.gray[5]}}}));const he=Oe;var we=Object.defineProperty,j=Object.getOwnPropertySymbols,Or=Object.prototype.hasOwnProperty,hr=Object.prototype.propertyIsEnumerable,sr=(r,e,a)=>e in r?we(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,$e=(r,e)=>{for(var a in e||(e={}))Or.call(e,a)&&sr(r,a,e[a]);if(j)for(var a of j(e))hr.call(e,a)&&sr(r,a,e[a]);return r},xe=(r,e)=>{var a={};for(var o in r)Or.call(r,o)&&e.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&j)for(var o of j(r))e.indexOf(o)<0&&hr.call(r,o)&&(a[o]=r[o]);return a};const wr=P.forwardRef((r,e)=>{var a=r,{__staticSelector:o,className:l,classNames:i,styles:c,unstyled:d,children:s,label:p,description:t,id:g,disabled:m,error:u,size:y,labelPosition:O,variant:h}=a,w=xe(a,["__staticSelector","className","classNames","styles","unstyled","children","label","description","id","disabled","error","size","labelPosition","variant"]);const{classes:v,cx:$}=he({labelPosition:O},{name:o,styles:c,classNames:i,unstyled:d,variant:h,size:y});return n.createElement(dr,$e({className:$(v.root,l),ref:e},w),n.createElement("div",{className:$(v.body)},s,n.createElement("div",{className:v.labelWrapper},p&&n.createElement("label",{className:v.label,"data-disabled":m||void 0,htmlFor:g},p),t&&n.createElement(V.Description,{className:v.description},t),u&&u!=="boolean"&&n.createElement(V.Error,{className:v.error},u))))});wr.displayName="@mantine/core/InlineInput";var Se=Object.defineProperty,I=Object.getOwnPropertySymbols,$r=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable,ir=(r,e,a)=>e in r?Se(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,S=(r,e)=>{for(var a in e||(e={}))$r.call(e,a)&&ir(r,a,e[a]);if(I)for(var a of I(e))xr.call(e,a)&&ir(r,a,e[a]);return r},Ce=(r,e)=>{var a={};for(var o in r)$r.call(r,o)&&e.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&I)for(var o of I(r))e.indexOf(o)<0&&xr.call(r,o)&&(a[o]=r[o]);return a};const Ee={size:"sm",transitionDuration:100,icon:ne,labelPosition:"right"},A=P.forwardRef((r,e)=>{const a=L("Checkbox",Ee,r),{className:o,style:l,sx:i,checked:c,disabled:d,color:s,label:p,indeterminate:t,id:g,size:m,radius:u,wrapperProps:y,children:O,classNames:h,styles:w,transitionDuration:v,icon:$,unstyled:B,labelPosition:W,description:Sr,error:q,variant:F}=a,Cr=Ce(a,["className","style","sx","checked","disabled","color","label","indeterminate","id","size","radius","wrapperProps","children","classNames","styles","transitionDuration","icon","unstyled","labelPosition","description","error","variant"]),b=Zr(),M=jr(g),{systemStyles:Er,rest:Y}=Ir(Cr),{classes:z}=ue({radius:u,color:s,transitionDuration:v,labelPosition:W,error:!!q,indeterminate:t},{name:"Checkbox",classNames:h,styles:w,unstyled:B,variant:F,size:(b==null?void 0:b.size)||m}),H=b?{checked:b.value.includes(Y.value),onChange:b.onChange}:{};return n.createElement(wr,S(S({className:o,sx:i,style:l,id:M,size:(b==null?void 0:b.size)||m,labelPosition:W,label:p,description:Sr,error:q,disabled:d,__staticSelector:"Checkbox",classNames:h,styles:w,unstyled:B,"data-checked":H.checked||void 0,variant:F},Er),y),n.createElement("div",{className:z.inner},n.createElement("input",S(S({id:M,ref:e,type:"checkbox",className:z.input,checked:c,disabled:d},Y),H)),n.createElement($,{indeterminate:t,className:z.icon})))});A.displayName="@mantine/core/Checkbox";A.Group=gr;function Re(r){const{status:e,canResetPassword:a}=r,{data:o,setData:l,post:i,processing:c,errors:d,reset:s}=zr({email:"",password:"",remember:!1});return P.useEffect(()=>()=>{s("password")},[]),x(Lr,{children:[_(Rr,{title:"Login"}),e&&_("div",{className:"mb-4 font-medium text-sm text-green-600",children:e}),x("form",{onSubmit:t=>{t.preventDefault(),i(route("login"))},children:[_(Dr,{label:"Email",placeholder:"you@mantine.dev",required:!0,value:o.email,onChange:t=>l("email",t.target.value)}),_(Ar,{label:"Password",placeholder:"Your password",required:!0,mt:"md",value:o.password,onChange:t=>l("password",t.target.value)}),x(Vr,{position:"apart",mt:"lg",children:[_(A,{label:"Remember me",checked:o.remember,onChange:t=>l("remember",!!t.target.checked)}),_(Qr,{href:route("password.request"),size:"sm",children:"Forgot password?"})]}),_(Gr,{type:"submit",fullWidth:!0,mt:"xl",disabled:c,children:"Sign in"})]}),x(cr,{color:"dimmed",size:"sm",align:"center",mt:20,children:["Do not have an account yet?"," ",_(dr,{component:Tr,href:"/register",children:"Create account"})]})]})}export{Re as default};