import{j as a,h as t,i as l,B as e,k as r,G as c}from"./app-79a61383.js";import m from"./Layout-9116d95e.js";import{S as d}from"./index-797a9fec.js";import{S as h}from"./index-9c268a5a.js";import{I as f,D as u}from"./index-0b14b70b.js";import{u as x}from"./useParticipant-10aa8943.js";import{I}from"./IconArrowBackUp-d78d33dd.js";import"./index-2ddde155.js";import"./Image-620e4505.js";import"./Title-d700ed8c.js";import"./Card-b68898d3.js";function z(o){const{auth:P,participant:i}=o,{getPartisipantDisplay:s,handleDelete:n}=x();return a(m,{children:[t(l,{title:"Partisipan"}),t(d,{title:"Detail Partisipan",subTitle:"Kelola partisipan"}),a(h,{children:[a(e,{sx:{display:"flex",justifyContent:"space-between",alignItems:"end"},children:[t(r,{variant:"white",size:"xs",onClick:()=>history.back(),leftIcon:t(I,{}),children:"Kembali"}),t(c,{spacing:"4px",children:t(r,{onClick:p=>n(p,i),size:"xs",color:"red",leftIcon:t(f,{}),children:"Hapus"})})]}),t(e,{pt:"0.625rem",children:t(u,{title:i.name,data:s(i)})})]})]})}export{z as default};
