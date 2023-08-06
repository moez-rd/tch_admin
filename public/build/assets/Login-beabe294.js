import{c as T,r as P,u as A,R as n,T as cr,a as kr,b as Nr,I as V,d as f,g as G,e as R,B as dr,f as Ir,h as jr,W as zr,j as x,i as _,k as Rr,l as Dr,G as Vr,m as Gr,n as Tr}from"./app-236c6637.js";import{G as Ar,P as Lr}from"./index-840a1403.js";import"./Center-5f5b7987.js";import"./Image-3e5de6fa.js";import"./Title-487bd059.js";var Br=Object.defineProperty,U=Object.getOwnPropertySymbols,Wr=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable,J=(r,e,o)=>e in r?Br(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,Fr=(r,e)=>{for(var o in e||(e={}))Wr.call(e,o)&&J(r,o,e[o]);if(U)for(var o of U(e))qr.call(e,o)&&J(r,o,e[o]);return r};function Yr({theme:r,color:e}){return e==="dimmed"?r.fn.dimmed():r.fn.themeColor(e||r.primaryColor,r.colorScheme==="dark"?4:7,!1,!0)}var Hr=T((r,{color:e,underline:o})=>({root:Fr({backgroundColor:"transparent",cursor:"pointer",padding:0,border:0,color:Yr({theme:r,color:e})},r.fn.hover({textDecoration:o?"underline":"none"}))}));const Mr=Hr;var Ur=Object.defineProperty,C=Object.getOwnPropertySymbols,pr=Object.prototype.hasOwnProperty,fr=Object.prototype.propertyIsEnumerable,K=(r,e,o)=>e in r?Ur(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,Q=(r,e)=>{for(var o in e||(e={}))pr.call(e,o)&&K(r,o,e[o]);if(C)for(var o of C(e))fr.call(e,o)&&K(r,o,e[o]);return r},Jr=(r,e)=>{var o={};for(var a in r)pr.call(r,a)&&e.indexOf(a)<0&&(o[a]=r[a]);if(r!=null&&C)for(var a of C(r))e.indexOf(a)<0&&fr.call(r,a)&&(o[a]=r[a]);return o};const Kr={underline:!0},ur=P.forwardRef((r,e)=>{const o=A("Anchor",Kr,r),{component:a,className:l,unstyled:i,variant:c,size:d,color:s,underline:p}=o,t=Jr(o,["component","className","unstyled","variant","size","color","underline"]),{classes:g,cx:m}=Mr({color:s,underline:p},{name:"Anchor",unstyled:i,variant:c,size:d}),u=a==="button"?{type:"button"}:null;return n.createElement(cr,Q(Q({component:a||"a",ref:e,className:m(g.root,l),size:d},u),t))});ur.displayName="@mantine/core/Anchor";const Qr=kr(ur),mr=P.createContext(null),Xr=mr.Provider,Zr=()=>P.useContext(mr);var re=Object.defineProperty,E=Object.getOwnPropertySymbols,vr=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable,X=(r,e,o)=>e in r?re(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,Z=(r,e)=>{for(var o in e||(e={}))vr.call(e,o)&&X(r,o,e[o]);if(E)for(var o of E(e))_r.call(e,o)&&X(r,o,e[o]);return r},ee=(r,e)=>{var o={};for(var a in r)vr.call(r,a)&&e.indexOf(a)<0&&(o[a]=r[a]);if(r!=null&&E)for(var a of E(r))e.indexOf(a)<0&&_r.call(r,a)&&(o[a]=r[a]);return o};const oe={size:"sm"},gr=P.forwardRef((r,e)=>{const o=A("CheckboxGroup",oe,r),{children:a,value:l,defaultValue:i,onChange:c,size:d,wrapperProps:s}=o,p=ee(o,["children","value","defaultValue","onChange","size","wrapperProps"]),[t,g]=Nr({value:l,defaultValue:i,finalValue:[],onChange:c}),m=u=>{const y=u.currentTarget.value;g(t.includes(y)?t.filter(h=>h!==y):[...t,y])};return n.createElement(Xr,{value:{value:t,onChange:m,size:d}},n.createElement(V.Wrapper,Z(Z({labelElement:"div",size:d,__staticSelector:"CheckboxGroup",ref:e},s),p),a))});gr.displayName="@mantine/core/CheckboxGroup";var ae=Object.defineProperty,k=Object.getOwnPropertySymbols,yr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,rr=(r,e,o)=>e in r?ae(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,N=(r,e)=>{for(var o in e||(e={}))yr.call(e,o)&&rr(r,o,e[o]);if(k)for(var o of k(e))br.call(e,o)&&rr(r,o,e[o]);return r},Pr=(r,e)=>{var o={};for(var a in r)yr.call(r,a)&&e.indexOf(a)<0&&(o[a]=r[a]);if(r!=null&&k)for(var a of k(r))e.indexOf(a)<0&&br.call(r,a)&&(o[a]=r[a]);return o};function te(r){const e=r,{width:o,height:a,style:l}=e,i=Pr(e,["width","height","style"]);return n.createElement("svg",N({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:N({width:o,height:a},l)},i),n.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function ne(r){var e=r,{indeterminate:o}=e,a=Pr(e,["indeterminate"]);return o?n.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6"},a),n.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):n.createElement(te,N({},a))}var le=Object.defineProperty,se=Object.defineProperties,ie=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,or=(r,e,o)=>e in r?le(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,ar=(r,e)=>{for(var o in e||(e={}))ce.call(e,o)&&or(r,o,e[o]);if(er)for(var o of er(e))de.call(e,o)&&or(r,o,e[o]);return r},tr=(r,e)=>se(r,ie(e));const pe={xs:f(16),sm:f(20),md:f(24),lg:f(30),xl:f(36)};var fe=T((r,{radius:e,color:o,transitionDuration:a,labelPosition:l,error:i,indeterminate:c},{size:d})=>{const s=G({size:d,sizes:pe}),p=r.fn.variant({variant:"filled",color:o});return{icon:tr(ar({},r.fn.cover()),{ref:R("icon"),color:c?"inherit":r.white,transform:c?"none":`translateY(${f(5)}) scale(0.5)`,opacity:c?1:0,transitionProperty:"opacity, transform",transitionTimingFunction:"ease",transitionDuration:`${a}ms`,pointerEvents:"none",width:"60%",position:"absolute",zIndex:1,margin:"auto","@media (prefers-reduced-motion)":{transitionDuration:r.respectReducedMotion?"0ms":void 0}}),inner:{position:"relative",width:s,height:s,order:l==="left"?2:1},input:tr(ar({},r.fn.focusStyles()),{appearance:"none",backgroundColor:r.colorScheme==="dark"?r.colors.dark[6]:r.white,border:`${f(1)} solid ${i?r.fn.variant({variant:"filled",color:"red"}).background:r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[4]}`,width:s,height:s,borderRadius:r.fn.radius(e),padding:0,display:"block",margin:0,transition:`border-color ${a}ms ease, background-color ${a}ms ease`,cursor:r.cursorType,"&:checked":{backgroundColor:p.background,borderColor:p.background,[`& + .${R("icon")}`]:{opacity:1,color:r.white,transform:"translateY(0) scale(1)"}},"&:disabled":{backgroundColor:r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[2],borderColor:r.colorScheme==="dark"?r.colors.dark[6]:r.colors.gray[3],cursor:"not-allowed",pointerEvents:"none",[`& + .${R("icon")}`]:{color:r.colorScheme==="dark"?r.colors.dark[6]:r.colors.gray[5]}}})}});const ue=fe;var me=Object.defineProperty,ve=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,nr=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,lr=(r,e,o)=>e in r?me(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,be=(r,e)=>{for(var o in e||(e={}))ge.call(e,o)&&lr(r,o,e[o]);if(nr)for(var o of nr(e))ye.call(e,o)&&lr(r,o,e[o]);return r},Pe=(r,e)=>ve(r,_e(e));const D={xs:f(16),sm:f(20),md:f(24),lg:f(30),xl:f(36)};var he=T((r,{labelPosition:e},{size:o})=>({root:{},body:{display:"flex","&:has(input:disabled) label":{color:r.colorScheme==="dark"?r.colors.dark[3]:r.colors.gray[5]}},labelWrapper:Pe(be({},r.fn.fontStyles()),{display:"inline-flex",flexDirection:"column",WebkitTapHighlightColor:"transparent",fontSize:o in D?G({size:o,sizes:r.fontSizes}):void 0,lineHeight:o in D?G({size:o,sizes:D}):void 0,color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,cursor:r.cursorType,order:e==="left"?1:2}),description:{marginTop:`calc(${r.spacing.xs} / 2)`,[e==="left"?"paddingRight":"paddingLeft"]:r.spacing.sm},error:{marginTop:`calc(${r.spacing.xs} / 2)`,[e==="left"?"paddingRight":"paddingLeft"]:r.spacing.sm},label:{cursor:r.cursorType,[e==="left"?"paddingRight":"paddingLeft"]:r.spacing.sm,"&:disabled, &[data-disabled]":{color:r.colorScheme==="dark"?r.colors.dark[3]:r.colors.gray[5]}}}));const we=he;var Oe=Object.defineProperty,I=Object.getOwnPropertySymbols,hr=Object.prototype.hasOwnProperty,wr=Object.prototype.propertyIsEnumerable,sr=(r,e,o)=>e in r?Oe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,$e=(r,e)=>{for(var o in e||(e={}))hr.call(e,o)&&sr(r,o,e[o]);if(I)for(var o of I(e))wr.call(e,o)&&sr(r,o,e[o]);return r},xe=(r,e)=>{var o={};for(var a in r)hr.call(r,a)&&e.indexOf(a)<0&&(o[a]=r[a]);if(r!=null&&I)for(var a of I(r))e.indexOf(a)<0&&wr.call(r,a)&&(o[a]=r[a]);return o};const Or=P.forwardRef((r,e)=>{var o=r,{__staticSelector:a,className:l,classNames:i,styles:c,unstyled:d,children:s,label:p,description:t,id:g,disabled:m,error:u,size:y,labelPosition:h,variant:w}=o,O=xe(o,["__staticSelector","className","classNames","styles","unstyled","children","label","description","id","disabled","error","size","labelPosition","variant"]);const{classes:v,cx:$}=we({labelPosition:h},{name:a,styles:c,classNames:i,unstyled:d,variant:w,size:y});return n.createElement(dr,$e({className:$(v.root,l),ref:e},O),n.createElement("div",{className:$(v.body)},s,n.createElement("div",{className:v.labelWrapper},p&&n.createElement("label",{className:v.label,"data-disabled":m||void 0,htmlFor:g},p),t&&n.createElement(V.Description,{className:v.description},t),u&&u!=="boolean"&&n.createElement(V.Error,{className:v.error},u))))});Or.displayName="@mantine/core/InlineInput";var Se=Object.defineProperty,j=Object.getOwnPropertySymbols,$r=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable,ir=(r,e,o)=>e in r?Se(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,S=(r,e)=>{for(var o in e||(e={}))$r.call(e,o)&&ir(r,o,e[o]);if(j)for(var o of j(e))xr.call(e,o)&&ir(r,o,e[o]);return r},Ce=(r,e)=>{var o={};for(var a in r)$r.call(r,a)&&e.indexOf(a)<0&&(o[a]=r[a]);if(r!=null&&j)for(var a of j(r))e.indexOf(a)<0&&xr.call(r,a)&&(o[a]=r[a]);return o};const Ee={size:"sm",transitionDuration:100,icon:ne,labelPosition:"right"},L=P.forwardRef((r,e)=>{const o=A("Checkbox",Ee,r),{className:a,style:l,sx:i,checked:c,disabled:d,color:s,label:p,indeterminate:t,id:g,size:m,radius:u,wrapperProps:y,children:h,classNames:w,styles:O,transitionDuration:v,icon:$,unstyled:B,labelPosition:W,description:Sr,error:q,variant:F}=o,Cr=Ce(o,["className","style","sx","checked","disabled","color","label","indeterminate","id","size","radius","wrapperProps","children","classNames","styles","transitionDuration","icon","unstyled","labelPosition","description","error","variant"]),b=Zr(),Y=Ir(g),{systemStyles:Er,rest:H}=jr(Cr),{classes:z}=ue({radius:u,color:s,transitionDuration:v,labelPosition:W,error:!!q,indeterminate:t},{name:"Checkbox",classNames:w,styles:O,unstyled:B,variant:F,size:(b==null?void 0:b.size)||m}),M=b?{checked:b.value.includes(H.value),onChange:b.onChange}:{};return n.createElement(Or,S(S({className:a,sx:i,style:l,id:Y,size:(b==null?void 0:b.size)||m,labelPosition:W,label:p,description:Sr,error:q,disabled:d,__staticSelector:"Checkbox",classNames:w,styles:O,unstyled:B,"data-checked":M.checked||void 0,variant:F},Er),y),n.createElement("div",{className:z.inner},n.createElement("input",S(S({id:Y,ref:e,type:"checkbox",className:z.input,checked:c,disabled:d},H),M)),n.createElement($,{indeterminate:t,className:z.icon})))});L.displayName="@mantine/core/Checkbox";L.Group=gr;function Re(r){const{status:e,canResetPassword:o}=r,{data:a,setData:l,post:i,processing:c,errors:d,reset:s}=zr({email:"",password:"",remember:!1});return P.useEffect(()=>()=>{s("password")},[]),x(Ar,{children:[_(Rr,{title:"Login"}),e&&_("div",{className:"mb-4 font-medium text-sm text-green-600",children:e}),x("form",{onSubmit:t=>{t.preventDefault(),i(route("login"))},children:[_(Dr,{label:"Email",placeholder:"you@mantine.dev",required:!0,value:a.email,onChange:t=>l("email",t.target.value)}),_(Lr,{label:"Password",placeholder:"Your password",required:!0,mt:"md",value:a.password,onChange:t=>l("password",t.target.value)}),x(Vr,{position:"apart",mt:"lg",children:[_(L,{label:"Remember me",checked:a.remember,onChange:t=>l("remember",!!t.target.checked)}),_(Qr,{href:route("password.request"),size:"sm",children:"Forgot password?"})]}),_(Gr,{type:"submit",fullWidth:!0,mt:"xl",disabled:c,children:"Sign in"})]}),x(cr,{color:"dimmed",size:"sm",align:"center",mt:20,children:["Do not have an account yet?"," ",_(dr,{component:Tr,href:"/register",children:"Create account"})]})]})}export{Re as default};