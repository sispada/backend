import{_ as I,c as u,w as o,r as m,o as V,a as e,V as i,b as d,d as t,e as s,f as T}from"./desktop-pCsUSS5j.js";const p={name:"procurement-biodata-show"};function N(U,n,_,f,M,P){const A=m("form-show");return V(),u(A,{"with-helpdesk":""},{default:o(({record:l})=>[e(T,null,{default:o(()=>[e(i,{dense:""},{default:o(()=>[e(d,{cols:"12"},{default:o(()=>[e(t,{label:"Name",modelValue:l.name,"onUpdate:modelValue":a=>l.name=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"5"},{default:o(()=>[e(t,{label:"NIP / NIK",modelValue:l.slug,"onUpdate:modelValue":a=>l.slug=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"7"},{default:o(()=>[e(s,{items:["PENGATUR MUDA (II/A)","PENGATUR MUDA TINGKAT  I (II/B)","PENGATUR (II/C)","PENGATUR TINGKAT  I (II/D)","PENATA MUDA (III/A)","PENATA MUDA TINGKAT  I (III/B)","PENATA (III/C)","PENATA TINGKAT  I (III/D)","PEMBINA (IV/A)","PEMBINA TINGKAT  I (IV/B)","PEMBINA UTAMA MUDA (IV/C)","PEMBINA UTAMA MADYA (IV/D)","PEMBINA UTAMA (IV/E)"],label:"Pangkat",modelValue:l.section,"onUpdate:modelValue":a=>l.section=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:o(()=>[e(t,{label:"Jabatan",modelValue:l.position,"onUpdate:modelValue":a=>l.position=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(d,{cols:"12"},{default:o(()=>[e(s,{items:["KABAG","KASUBAG","STAFF","ADMINISTRATOR"],label:"Role",modelValue:l.role,"onUpdate:modelValue":a=>l.role=a,"hide-details":"",readonly:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),helpdesk:o(()=>n[0]||(n[0]=[])),_:1})}const c=I(p,[["render",N]]);export{c as default};