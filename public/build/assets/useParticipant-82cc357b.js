import{k as u,j as d,c as o,a as m,i as v,o as f,x as g,y as k}from"./app-769e3db3.js";function c(){const s=(e,a)=>{e.preventDefault(),u.openConfirmModal({title:"Hapus Partisipan",centered:!0,children:d(o,{size:"sm",children:["Yakin ingin menghapus partisipan ",m(o,{span:!0,weight:600,children:a.name}),"?"]}),labels:{confirm:"Hapus",cancel:"Batal"},confirmProps:{color:"red"},onConfirm:()=>{v.delete(route("participants.destroy",{id:a.id}),{preserveScroll:!0})}})};return{getParticipants:e=>e.map(a=>({id:a.id,title:a.name,avatar:a.avatar,link:route("participants.show",{id:a.id}),information:[`@${a.uid}`,`${a.event_registrations_count} event`],menu:[{label:"Hapus",props:{color:"red"},linkProps:{href:"",onClick:r=>s(r,a)}}]})),getPartisipantDisplay:e=>{var a,r,t,i,n,l;return[{title:"Informasi Partisipan",data:[{key:"Nama",value:e.name},{key:"UID",value:e.uid},{key:"Email",value:e.email},{key:"Jumlah pendaftaran",value:`${e.event_registrations_count||0} event diikuti`},{key:"Bergabung pada",value:f(e.created_at,"datetime")}]},{title:"Informasi Profil",data:[{key:"Institusi",value:(a=e.user_profile)==null?void 0:a.institution},{key:"Status",value:g((r=e.user_profile)==null?void 0:r.education_level)},{key:"NIM/NISN",value:(t=e.user_profile)==null?void 0:t.id_number},{key:"Kartu tanda mahasiswa/siswa",value:(i=e.user_profile)==null?void 0:i.id_card_image,imagePreview:!0},{key:"Jenis kelamin",value:k((n=e.user_profile)==null?void 0:n.gender)},{key:"WhatsApp",value:(l=e.user_profile)==null?void 0:l.whatsapp}]}]},handleDelete:s}}export{c as u};
