import{c as h,h as e,S as o,j as i,a7 as x,l as a,z as u}from"./app-6ec24bae.js";import{C as p}from"./Card-b0fbefdd.js";const D=h(s=>({valueLink:{textDecoration:"none","&:hover":{textDecoration:"underline",textDecorationColor:s.colors.blue[5],textDecorationThickness:"2px"},"&:focus":{textDecoration:"underline",textDecorationColor:s.colors.blue[5],textDecorationThickness:"2px"}}}));function y(s){const{data:n}=s,{classes:t}=D();return e(o,{spacing:"xs",children:n.map((l,d)=>e(p,{withBorder:!0,radius:"xs",children:e(o,{spacing:4,children:l.data.map((r,c)=>i(o,{spacing:4,children:[c>0&&e(x,{color:"gray.2"}),i(o,{spacing:0,children:[e(a,{weight:500,size:"sm",color:"gray.8",children:r.key}),r.link?e(u,{href:r.link,className:t.valueLink,children:e(a,{size:"sm",color:"gray.7",children:r.value||"-"})}):e(a,{size:"sm",color:"gray.7",children:r.value||"-"})]})]},c))})},d))})}export{y as D};