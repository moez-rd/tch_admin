import{t as p,j as t,a as e,b as u,B as f,e as x,G as b,c as o,d as g,U as w}from"./app-769e3db3.js";import I from"./Layout-fba88dc9.js";import{S as B}from"./index-14d893c8.js";import{S as F}from"./index-21a34e7c.js";import{u as S}from"./useFestival-921312c3.js";import{F as s,B as j,M as r}from"./index-df28855d.js";import{I as v}from"./IconPlus-815b1a17.js";import{C as n}from"./Card-dd20fedf.js";import{I as C}from"./IconDots-b9455d54.js";import"./Title-d12aa372.js";import"./Image-c2d14506.js";function U(a){const{festivals:d}=a,{auth:l}=p().props;l.user;const{handleDelete:c,handleActivate:m}=S();return t(I,{children:[e(u,{title:"Festival"}),e(B,{title:"Festival",subTitle:"Kelola festival"}),t(F,{children:[e(s,{justify:"flex-end",mb:"10px",children:e(f,{component:x,size:"xs",color:"green",leftIcon:e(v,{}),href:route("festivals.create"),children:"Tambah"})}),e(s,{direction:"column",gap:"xs",children:d.map(i=>t(n,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[e(n.Section,{}),t(s,{mt:"md",mb:"xs",justify:"space-between",children:[t(b,{children:[e(o,{fw:500,children:i.name}),i.is_active&&e(j,{color:"teal",children:"Aktif"})]}),e(g,{sx:{alignSelf:"start"},children:t(r,{shadow:"md",width:200,withinPortal:!0,position:"bottom-end",offset:-10,children:[e(r.Target,{children:e(w,{children:e(C,{})})}),t(r.Dropdown,{children:[e(r.Label,{children:"Actions"}),e(r.Item,{onClick:()=>m(i),children:"Aktivasi"}),e(r.Item,{color:"red",onClick:h=>c(h,i),children:"Hapus"})]})]})})]}),e(o,{size:"sm",c:"dimmed",children:i.theme}),t(o,{size:"sm",c:"dimmed",children:["Periode: ",i.period]})]},i.id))})]})]})}export{U as default};
