import{w as p,t as f,j as t,a as e,b as y,G as r,B as b,e as k,A as I}from"./app-769e3db3.js";import C from"./Layout-fba88dc9.js";import{S as x}from"./index-14d893c8.js";import{S as M}from"./index-21a34e7c.js";import{D as c}from"./index-ba96a897.js";import{u as w}from"./useEvent-c2c1006a.js";import{T as i}from"./Tabs-eab8dd61.js";import{I as S}from"./IconPlus-815b1a17.js";import{M as a}from"./index-df28855d.js";import{I as T}from"./IconAdjustments-ddfee505.js";import"./Image-c2d14506.js";import"./Title-d12aa372.js";import"./Card-dd20fedf.js";import"./IconDots-b9455d54.js";import"./Center-bb13adec.js";import"./index-a4ef7a93.js";var j=p("circuit-switch-closed","IconCircuitSwitchClosed",[["path",{d:"M2 12h2",key:"svg-0"}],["path",{d:"M20 12h2",key:"svg-1"}],["path",{d:"M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-3"}],["path",{d:"M8 12h8",key:"svg-4"}]]),D=p("circuit-switch-open","IconCircuitSwitchOpen",[["path",{d:"M2 12h2",key:"svg-0"}],["path",{d:"M20 12h2",key:"svg-1"}],["path",{d:"M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-3"}],["path",{d:"M7.5 10.5l7.5 -5.5",key:"svg-4"}]]);function Q(l){const{auth:P,events:o}=l,{constants:s}=f().props,{handleRegistrationClose:m,handleRegistrationOpen:d,getCompetitions:h,getSeminars:u}=w(),v=o.filter(n=>n.eventable_type==s.event_type.competition),g=o.filter(n=>n.eventable_type==s.event_type.seminar);return t(C,{children:[e(y,{title:"Events"}),e(x,{title:"Event",subTitle:"Kelola kompetisi dan seminar"}),e(M,{children:t(i,{variant:"pills",defaultValue:"competition",children:[t(i.List,{sx:{display:"flex",justifyContent:"space-between",alignItems:"end"},children:[t(r,{spacing:"xs",bg:"gray.1",p:4,sx:n=>({borderRadius:n.radius.sm}),children:[e(i.Tab,{value:"competition",children:"Kompetisi"}),e(i.Tab,{value:"seminar",children:"Seminar"})]}),t(r,{spacing:"4px",children:[e(b,{component:k,size:"xs",color:"green",leftIcon:e(S,{}),href:route("events.create"),children:"Tambah"}),t(a,{shadow:"md",width:200,position:"bottom-end",children:[e(a.Target,{children:e(I,{color:"blue",variant:"outline",children:e(T,{})})}),t(a.Dropdown,{children:[e(a.Label,{children:"Pendaftaran"}),e(a.Item,{onClick:d,icon:e(D,{size:14}),children:"Buka"}),e(a.Item,{onClick:m,icon:e(j,{size:14}),children:"Tutup"})]})]})]})]}),e(i.Panel,{value:"competition",pt:"xs",children:e(c,{title:"Data Kompetisi",data:h(v)})}),e(i.Panel,{value:"seminar",pt:"xs",children:e(c,{title:"Data Seminar",data:u(g)})})]})})]})}export{Q as default};
