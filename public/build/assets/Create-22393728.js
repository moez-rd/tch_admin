import{t as u,j as a,a as e,b as h,d as i,B as s,G as o,T as n,v as b,c as f}from"./app-769e3db3.js";import k from"./Layout-fba88dc9.js";import{S as x}from"./index-14d893c8.js";import{S as F}from"./index-21a34e7c.js";import{F as g,a as l,A as w}from"./index-c995bfde.js";import{u as I}from"./useFaq-88684a55.js";import{I as q}from"./IconArrowBackUp-8dd7f4a3.js";import"./index-df28855d.js";import"./Image-c2d14506.js";import"./Title-d12aa372.js";import"./Card-dd20fedf.js";function J(m){const{auth:p}=m,{flash:t}=u().props,{handleCreate:d,form:r}=I();return a(k,{children:[e(h,{title:"Faqs"}),e(x,{title:"Faqs",subTitle:"Kelola faqs"}),a(F,{children:[a(i,{sx:{display:"flex",justifyContent:"space-between",alignItems:"end"},children:[e(s,{variant:"white",size:"xs",onClick:()=>history.back(),leftIcon:e(q,{}),children:"Kembali"}),e(o,{spacing:"4px"})]}),e(i,{pt:"0.625rem",children:e("form",{onSubmit:c=>d(c),children:a(g,{title:"Formulir Faq",children:[a(l,{title:"Informasi Faq",children:[e(n,{withAsterisk:!0,description:"Harap untuk mengakhiri dengan tanda tanya (?)",placeholder:"Pertanyaan",label:"Pertanyaan",...r.getInputProps("question")}),e(b,{withAsterisk:!0,placeholder:"Jawaban",label:"Jawaban",...r.getInputProps("answer")})]}),e(l,{title:"Informasi Pembuat",children:e(n,{withAsterisk:!0,disabled:!0,description:"Nama pembuat tidak akan dipublikasikan ke website utama",label:"Dibuat oleh",value:p.user.name})}),t.message_error&&e(w,{color:"red",children:e(f,{color:"red",children:t.message_error})}),e(o,{position:"right",mt:"md",children:e(s,{type:"submit",children:"Submit"})})]})})})]})]})}export{J as default};