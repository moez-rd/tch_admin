import{j as o,i as e,k as c,B as a,m as i,G as m,n as p}from"./app-236c6637.js";import f from"./Layout-c71e6264.js";import{S as d}from"./index-8ad47050.js";import{S as h}from"./index-af268672.js";import{D as u}from"./index-929716ac.js";import{u as q}from"./useFaq-fb060ab8.js";import{I as x}from"./IconArrowBackUp-482add91.js";import{I}from"./IconPencil-57a0d37e.js";import{I as y}from"./IconTrash-ce17b953.js";import"./index-ac104ed5.js";import"./Image-3e5de6fa.js";import"./Title-487bd059.js";import"./Card-e2ff9ab9.js";function K(r){const{auth:F,faq:t}=r,{displayFaq:s,handleDelete:n}=q();return o(f,{children:[e(c,{title:"Faqs"}),e(d,{title:"Detail Faqs",subTitle:"Kelola faqs"}),o(h,{children:[o(a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"end"},children:[e(i,{variant:"white",size:"xs",onClick:()=>history.back(),leftIcon:e(x,{}),children:"Kembali"}),o(m,{spacing:"4px",children:[e(i,{component:p,href:route("faqs.edit",{faq:t.id}),size:"xs",color:"yellow",leftIcon:e(I,{}),children:"Edit"}),e(i,{onClick:l=>n(l,t),size:"xs",color:"red",leftIcon:e(y,{}),children:"Hapus"})]})]}),e(a,{pt:"0.625rem",children:e(u,{title:t.question,data:s(t)})})]})]})}export{K as default};
