import{t as c,j as a,h as e,i as h,B as i,k as s,G as o,T as n,w as b,l as f}from"./app-79a61383.js";import k from"./Layout-9116d95e.js";import{S as x}from"./index-797a9fec.js";import{S as w}from"./index-9c268a5a.js";import{F,a as l,A as g}from"./index-88cfb4e0.js";import{u as I}from"./useFaq-3bf4aa1a.js";import{I as q}from"./IconArrowBackUp-d78d33dd.js";import"./index-2ddde155.js";import"./Image-620e4505.js";import"./Title-d700ed8c.js";import"./Card-b68898d3.js";function J(m){const{auth:p}=m,{flash:t}=c().props,{handleCreate:d,form:r}=I();return a(k,{children:[e(h,{title:"Faqs"}),e(x,{title:"Faqs",subTitle:"Kelola faqs"}),a(w,{children:[a(i,{sx:{display:"flex",justifyContent:"space-between",alignItems:"end"},children:[e(s,{variant:"white",size:"xs",onClick:()=>history.back(),leftIcon:e(q,{}),children:"Kembali"}),e(o,{spacing:"4px"})]}),e(i,{pt:"0.625rem",children:e("form",{onSubmit:u=>d(u),children:a(F,{title:"Formulir Faq",children:[a(l,{title:"Informasi Faq",children:[e(n,{withAsterisk:!0,description:"Harap untuk mengakhiri dengan tanda tanya (?)",placeholder:"Pertanyaan",label:"Pertanyaan",...r.getInputProps("question")}),e(b,{withAsterisk:!0,placeholder:"Jawaban",label:"Jawaban",...r.getInputProps("answer")})]}),e(l,{title:"Informasi Pembuat",children:e(n,{withAsterisk:!0,disabled:!0,description:"Nama pembuat tidak akan dipublikasikan ke website utama",label:"Dibuat oleh",value:p.user.name})}),t.message_error&&e(g,{color:"red",children:e(f,{color:"red",children:t.message_error})}),e(o,{position:"right",mt:"md",children:e(s,{type:"submit",children:"Submit"})})]})})})]})]})}export{J as default};
