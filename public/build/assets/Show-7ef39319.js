import{j as a,a as t,b as l,d as e,B as r,G as c}from"./app-769e3db3.js";import m from"./Layout-fba88dc9.js";import{S as d}from"./index-14d893c8.js";import{S as f}from"./index-21a34e7c.js";import{D as h}from"./index-c02273d1.js";import{u}from"./useParticipant-82cc357b.js";import{I as x}from"./IconArrowBackUp-8dd7f4a3.js";import{I}from"./IconTrash-2d14cf58.js";import"./index-df28855d.js";import"./Image-c2d14506.js";import"./Title-d12aa372.js";import"./Card-dd20fedf.js";function G(o){const{auth:P,participant:i}=o,{getPartisipantDisplay:s,handleDelete:n}=u();return a(m,{children:[t(l,{title:"Partisipan"}),t(d,{title:"Detail Partisipan",subTitle:"Kelola partisipan"}),a(f,{children:[a(e,{sx:{display:"flex",justifyContent:"space-between",alignItems:"end"},children:[t(r,{variant:"white",size:"xs",onClick:()=>history.back(),leftIcon:t(x,{}),children:"Kembali"}),t(c,{spacing:"4px",children:t(r,{onClick:p=>n(p,i),size:"xs",color:"red",leftIcon:t(I,{}),children:"Hapus"})})]}),t(e,{pt:"0.625rem",children:t(h,{title:i.name,data:s(i)})})]})]})}export{G as default};