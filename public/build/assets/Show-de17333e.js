import{j as i,a as e,b as f,d as a,B as o,G as u,e as I,A as v,E as b}from"./app-769e3db3.js";import x from"./Layout-fba88dc9.js";import{S as E}from"./index-14d893c8.js";import{S as C}from"./index-21a34e7c.js";import{D as k}from"./index-c02273d1.js";import{u as w}from"./useEvent-c2c1006a.js";import{I as y}from"./IconArrowBackUp-8dd7f4a3.js";import{I as A}from"./IconPencil-a95da49a.js";import{I as S}from"./IconTrash-2d14cf58.js";import{M as n}from"./index-df28855d.js";import{I as T}from"./IconAdjustments-ddfee505.js";import{I as r}from"./IconPlus-815b1a17.js";import"./Title-d12aa372.js";import"./Card-dd20fedf.js";import"./index-a4ef7a93.js";import"./Image-c2d14506.js";function J(s){const{auth:g,event:t}=s,{handleDelete:l,handleContactPersonAdd:c,handleMilestoneAdd:d,handleSeminarCastAdd:m,getEventDisplay:p}=w();return i(x,{children:[e(f,{title:"Events"}),e(E,{title:"Detail Event",subTitle:"Kelola kompetisi dan seminar"}),i(C,{children:[i(a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"end"},children:[e(o,{variant:"white",size:"xs",onClick:()=>history.back(),leftIcon:e(y,{}),children:"Kembali"}),i(u,{spacing:"4px",children:[e(o,{component:I,href:route("events.edit",{event:t.id}),size:"xs",color:"yellow",leftIcon:e(A,{}),children:"Edit"}),e(o,{onClick:h=>l(h,t),size:"xs",color:"red",leftIcon:e(S,{}),children:"Hapus"}),i(n,{shadow:"md",width:200,position:"bottom-end",children:[e(n.Target,{children:e(v,{color:"blue",variant:"outline",children:e(T,{})})}),i(n.Dropdown,{children:[e(n.Label,{children:"Event"}),t.eventable_type===b.SEMINAR&&e(n.Item,{onClick:()=>m(t.id),icon:e(r,{size:14}),children:"Tambah pemeran"}),e(n.Item,{onClick:()=>d(t.id),icon:e(r,{size:14}),children:"Tambah milestone"}),e(n.Item,{onClick:()=>c(t.id),icon:e(r,{size:14}),children:"Tambah narahubung"})]})]})]})]}),e(a,{pt:"0.625rem",children:e(k,{title:t.name,data:p(t)})})]})]})}export{J as default};
