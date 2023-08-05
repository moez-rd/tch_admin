import{a1 as se,c as C,a2 as ie,b as p,r as h,u as R,R as P,B as D,a3 as ce,a4 as de,e as fe,a as pe}from"./app-6ec24bae.js";import{c as ue}from"./index-9e4f5341.js";function V(e,r){return t=>{if(typeof t!="string"||t.trim().length===0)throw new Error(r);return`${e}-${t}`}}const k={context:"Tabs component was not found in the tree",value:"Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value"},[ve,L]=se(k.context);var be=Object.defineProperty,B=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?be(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ye=(e,r)=>{for(var t in r||(r={}))_e.call(r,t)&&K(e,t,r[t]);if(B)for(var t of B(r))ge.call(r,t)&&K(e,t,r[t]);return e};function Pe({orientation:e,inverted:r,placement:t},a,l){const s=e==="vertical";return l==="default"?{[s?t==="left"?"borderRight":"borderLeft":r?"borderTop":"borderBottom"]:`${p(2)} solid ${a.colorScheme==="dark"?a.colors.dark[4]:a.colors.gray[3]}`}:l==="outline"?{[s?t==="left"?"borderRight":"borderLeft":r?"borderTop":"borderBottom"]:`${p(1)} solid ${a.colorScheme==="dark"?a.colors.dark[4]:a.colors.gray[3]}`}:l==="pills"?{gap:`calc(${a.spacing.sm} / 2)`}:{}}var me=C((e,r,{variant:t})=>{const a=r.orientation==="vertical";return{tabsList:ye({display:"flex",flexWrap:"wrap",flexDirection:a?"column":"row",justifyContent:ie[r.position],'& [role="tab"]':{flex:r.grow?1:void 0}},Pe(r,e,t))}});const Oe=me;var we=Object.defineProperty,$e=Object.defineProperties,he=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?we(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Se=(e,r)=>{for(var t in r||(r={}))G.call(r,t)&&z(e,t,r[t]);if(I)for(var t of I(r))q.call(r,t)&&z(e,t,r[t]);return e},Te=(e,r)=>$e(e,he(r)),Ie=(e,r)=>{var t={};for(var a in e)G.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&I)for(var a of I(e))r.indexOf(a)<0&&q.call(e,a)&&(t[a]=e[a]);return t};const xe={grow:!1,position:"left"},J=h.forwardRef((e,r)=>{const t=R("TabsList",xe,e),{children:a,className:l,grow:s,position:d}=t,c=Ie(t,["children","className","grow","position"]),{orientation:o,variant:i,color:f,radius:u,inverted:n,placement:_,classNames:v,styles:y,unstyled:g}=L(),{classes:m,cx:b}=Oe({orientation:o,grow:s,color:f,position:d,radius:u,inverted:n,placement:_},{name:"Tabs",unstyled:g,classNames:v,styles:y,variant:i});return P.createElement(D,Te(Se({},c),{className:b(m.tabsList,l),ref:r,role:"tablist","aria-orientation":o}),a)});J.displayName="@mantine/core/TabsList";var Ne=C((e,{orientation:r})=>({panel:{flex:r==="vertical"?1:void 0}}));const je=Ne;var Ce=Object.defineProperty,Re=Object.defineProperties,Ee=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,M=(e,r,t)=>r in e?Ce(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ke=(e,r)=>{for(var t in r||(r={}))Q.call(r,t)&&M(e,t,r[t]);if(x)for(var t of x(r))X.call(r,t)&&M(e,t,r[t]);return e},De=(e,r)=>Re(e,Ee(r)),Le=(e,r)=>{var t={};for(var a in e)Q.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&x)for(var a of x(e))r.indexOf(a)<0&&X.call(e,a)&&(t[a]=e[a]);return t};const Ve={},Y=h.forwardRef((e,r)=>{const t=R("TabsPanel",Ve,e),{value:a,children:l,sx:s,className:d}=t,c=Le(t,["value","children","sx","className"]),o=L(),{classes:i,cx:f}=je({orientation:o.orientation,color:o.color,radius:o.radius,inverted:o.inverted,placement:o.placement},{name:"Tabs",unstyled:o.unstyled,classNames:o.classNames,styles:o.styles,variant:o.variant}),u=o.getPanelId(a),n=o.value===a,_=o.keepMounted||n?l:null;return h.useEffect(()=>(o.setMountedPanelIds(v=>[...v,u]),o.setMountedPanelIds(v=>v.filter(y=>y!==u))),[u]),P.createElement(D,De(ke({},c),{ref:r,sx:[{display:n?void 0:"none"},...ce(s)],className:f(i.panel,d),role:"tabpanel",id:u,"aria-labelledby":o.getTabId(a)}),_)});Y.displayName="@mantine/core/TabsPanel";var Be=Object.defineProperty,Ke=Object.defineProperties,ze=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,U=(e,r,t)=>r in e?Be(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,$=(e,r)=>{for(var t in r||(r={}))Me.call(r,t)&&U(e,t,r[t]);if(W)for(var t of W(r))We.call(r,t)&&U(e,t,r[t]);return e},A=(e,r)=>Ke(e,ze(r));function Ue(e,{orientation:r,color:t,radius:a,inverted:l,placement:s},d){const c=r==="vertical",o=e.fn.variant({color:t,variant:"filled"}),i=p(e.fn.radius(a)),f=r==="vertical"?s==="left"?`${i} 0 0 ${i}`:` 0 ${i} ${i} 0`:l?`0 0 ${i} ${i}`:`${i} ${i} 0 0`;return d==="default"?A($({[c?s==="left"?"borderRight":"borderLeft":l?"borderTop":"borderBottom"]:`${p(2)} solid transparent`,[c?s==="left"?"marginRight":"marginLeft":l?"marginTop":"marginBottom"]:p(-2),borderRadius:f},e.fn.hover({backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[0],borderColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]})),{"&[data-active]":$({borderColor:o.background,color:e.colorScheme==="dark"?e.white:e.black},e.fn.hover({borderColor:o.background}))}):d==="outline"?{borderRadius:f,border:`${p(1)} solid transparent`,[c?s==="left"?"borderRight":"borderLeft":l?"borderTop":"borderBottom"]:"none","&[data-active]":{borderColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3],"&::before":{content:'""',backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.white,position:"absolute",bottom:c?0:l?"unset":p(-1),top:c?0:l?p(-1):"unset",[c?"width":"height"]:p(1),right:c?s==="left"?p(-1):"unset":0,left:c?s==="left"?"unset":p(-1):0}}}:d==="pills"?A($({borderRadius:e.fn.radius(a)},e.fn.hover({backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[0]})),{"&[data-active]":$({backgroundColor:o.background,color:e.white},e.fn.hover({backgroundColor:o.background}))}):{}}var Ae=C((e,r,{variant:t})=>({tabLabel:{},tab:$({position:"relative",padding:`${e.spacing.xs} ${e.spacing.md}`,paddingLeft:r.withIcon?e.spacing.xs:void 0,paddingRight:r.withRightSection?e.spacing.xs:void 0,fontSize:e.fontSizes.sm,whiteSpace:"nowrap",zIndex:0,display:"flex",alignItems:"center",justifyContent:r.orientation==="horizontal"?"center":void 0,lineHeight:1,"&:disabled":$({opacity:.5,cursor:"not-allowed"},e.fn.hover({backgroundColor:"transparent"})),"&:focus":{zIndex:1}},Ue(e,r,t)),tabRightSection:{display:"flex",justifyContent:"center",alignItems:"center","&:not(:only-child)":{marginLeft:p(7)}},tabIcon:{display:"flex",justifyContent:"center",alignItems:"center","&:not(:only-child)":{marginRight:p(7)}}}));const He=Ae;var Fe=Object.defineProperty,Ge=Object.defineProperties,qe=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,H=(e,r,t)=>r in e?Fe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Je=(e,r)=>{for(var t in r||(r={}))Z.call(r,t)&&H(e,t,r[t]);if(N)for(var t of N(r))ee.call(r,t)&&H(e,t,r[t]);return e},Qe=(e,r)=>Ge(e,qe(r)),Xe=(e,r)=>{var t={};for(var a in e)Z.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&N)for(var a of N(e))r.indexOf(a)<0&&ee.call(e,a)&&(t[a]=e[a]);return t};const Ye={},re=h.forwardRef((e,r)=>{const t=R("TabsTab",Ye,e),{value:a,children:l,onKeyDown:s,onClick:d,className:c,icon:o,rightSection:i,color:f}=t,u=Xe(t,["value","children","onKeyDown","onClick","className","icon","rightSection","color"]),n=L(),_=!!o,v=!!i,{theme:y,classes:g,cx:m}=He({withIcon:_||v&&!l,withRightSection:v||_&&!l,orientation:n.orientation,color:f||n.color,radius:n.radius,inverted:n.inverted,placement:n.placement},{name:"Tabs",unstyled:n.unstyled,classNames:n.classNames,styles:n.styles,variant:n.variant}),b=a===n.value,O=n.getPanelId(a),S=n.mountedPanelIds.includes(a)?O:void 0,w=T=>{n.onTabChange(n.allowTabDeactivation&&a===n.value?null:a),d==null||d(T)};return P.createElement(de,Qe(Je({},u),{unstyled:n.unstyled,className:m(g.tab,c),"data-active":b||void 0,ref:r,type:"button",role:"tab",id:n.getTabId(a),"aria-selected":b,tabIndex:b||n.value===null?0:-1,"aria-controls":S,onClick:w,onKeyDown:ue({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:n.activateTabWithKeyboard,loop:n.loop,dir:y.dir,orientation:n.orientation,onKeyDown:s})}),o&&P.createElement("span",{className:g.tabIcon},o),l&&P.createElement("span",{className:g.tabLabel},l),i&&P.createElement("span",{className:g.tabRightSection},i))});re.displayName="@mantine/core/Tab";function te({defaultValue:e,value:r,onTabChange:t,orientation:a,children:l,loop:s,id:d,activateTabWithKeyboard:c,allowTabDeactivation:o,variant:i,color:f,radius:u,inverted:n,placement:_,keepMounted:v=!0,classNames:y,styles:g,unstyled:m}){const b=fe(d),[O,S]=h.useState([]),[w,T]=pe({value:r,defaultValue:e,finalValue:null,onChange:t});return P.createElement(ve,{value:{placement:_,value:w,orientation:a,id:b,loop:s,activateTabWithKeyboard:c,getTabId:V(`${b}-tab`,k.value),getPanelId:V(`${b}-panel`,k.value),onTabChange:T,setMountedPanelIds:S,mountedPanelIds:O,allowTabDeactivation:o,variant:i,color:f,radius:u,inverted:n,keepMounted:v,classNames:y,styles:g,unstyled:m}},l)}te.displayName="@mantine/core/TabsProvider";var Ze=C((e,{orientation:r,placement:t})=>({root:{display:r==="vertical"?"flex":void 0,flexDirection:t==="right"?"row-reverse":"row"}}));const er=Ze;var rr=Object.defineProperty,tr=Object.defineProperties,ar=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,F=(e,r,t)=>r in e?rr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,or=(e,r)=>{for(var t in r||(r={}))ae.call(r,t)&&F(e,t,r[t]);if(j)for(var t of j(r))oe.call(r,t)&&F(e,t,r[t]);return e},nr=(e,r)=>tr(e,ar(r)),lr=(e,r)=>{var t={};for(var a in e)ae.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&j)for(var a of j(e))r.indexOf(a)<0&&oe.call(e,a)&&(t[a]=e[a]);return t};const sr={orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},E=h.forwardRef((e,r)=>{const t=R("Tabs",sr,e),{defaultValue:a,value:l,orientation:s,loop:d,activateTabWithKeyboard:c,allowTabDeactivation:o,children:i,id:f,onTabChange:u,variant:n,color:_,className:v,unstyled:y,classNames:g,styles:m,radius:b,inverted:O,keepMounted:S,placement:w}=t,T=lr(t,["defaultValue","value","orientation","loop","activateTabWithKeyboard","allowTabDeactivation","children","id","onTabChange","variant","color","className","unstyled","classNames","styles","radius","inverted","keepMounted","placement"]),{classes:ne,cx:le}=er({orientation:s,color:_,radius:b,inverted:O,placement:w},{unstyled:y,name:"Tabs",classNames:g,styles:m,variant:n});return P.createElement(te,{activateTabWithKeyboard:c,defaultValue:a,orientation:s,onTabChange:u,value:l,id:f,loop:d,allowTabDeactivation:o,color:_,variant:n,radius:b,inverted:O,keepMounted:S,placement:w,classNames:g,styles:m,unstyled:y},P.createElement(D,nr(or({},T),{className:le(ne.root,v),id:f,ref:r}),i))});E.List=J;E.Tab=re;E.Panel=Y;E.displayName="@mantine/core/Tabs";export{E as T};