import{h as o,t as u,i as t,k as c,j as p,c as n,a as h}from"./app-769e3db3.js";function w(){const a=o({initialValues:{name:"",period:new Date(2024,0,0),theme:"",logo:"",description:"",start_date:new Date,end_date:new Date},validate:{name:e=>e.length?null:"Nama wajib diisi",period:e=>e?null:"Periode wajib diisi",theme:e=>e.length?null:"Tema wajib diisi",description:e=>e.length?null:"Deskripsi wajib diisi",start_date:e=>e?null:"Periode wajib diisi",end_date:e=>e?null:"Periode wajib diisi"}}),l=e=>{e.preventDefault(),a.validate(),a.isValid()&&t.post(route("festivals.store"),a.values)},{auth:r,festivals:i}=u().props,d=i.filter(e=>e.id==r.user.selected_festival)[0];return{form:a,currentFestival:d,festivals:i,handleActivate:e=>{t.patch(route("festivals.update.activate",{festival:e.id}))},handleDelete:(e,s)=>{e.preventDefault(),c.openConfirmModal({title:"Hapus Event",centered:!0,children:p(n,{size:"sm",children:["Yakin ingin menghapus festival",h(n,{span:!0,weight:600,children:s.name}),"?. Tindakan ini akan menghapus seluruh seluruh data pada festival terkait."]}),labels:{confirm:"Hapus",cancel:"Batal"},confirmProps:{color:"red"},onConfirm:()=>{t.delete(route("festivals.destroy",{id:s.id}),{preserveScroll:!0})}})},handleCreate:l}}export{w as u};