import"./lodash-CuKFpooT.js";import{_ as d,a as n,b as s,j as u,v as m,m as c,g as f,h as x,f as b,w as h,i as r,r as y,o as l,t as g,l as v}from"./index-Cabdi3id.js";import{S as k}from"./sweetalert2.esm.all-B0Dix5B2.js";const w={data(){return{fill:{name:"",country_id:""},countries:[]}},mounted(){r.get("https://localhost/api/resource-mapping/citizen/country-list").then(i=>{this.countries=i.data})},methods:{submitContinue(){r.post("https://localhost/api/setup/citizen/state",this.fill).then(i=>{k.fire({icon:"success",title:"Success",timer:1e3,showConfirmButton:!1,toast:!0,timerProgressBar:!0,position:"top-right"}).then(t=>{this.fill={name:"",country_id:i.data.country_id}})})},submitFinish(){r.post("https://localhost/api/setup/citizen/state",this.fill).then(i=>{this.$router.push({path:"/citizen/state"})})}}},C={class:"flex flex-col gap-3 p-5 border"},_=["value"],z={class:"flex justify-end gap-3"};function B(i,t,S,V,o,a){const p=y("router-link");return l(),n("div",C,[t[6]||(t[6]=s("label",{for:""},"Name",-1)),u(s("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.fill.name=e),class:"border px-4 py-3 rounded"},null,512),[[m,o.fill.name]]),t[7]||(t[7]=s("label",{for:""},"Country",-1)),u(s("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.fill.country_id=e),class:"border px-4 py-3 rounded"},[t[4]||(t[4]=s("option",{value:"",selected:""},"Please Choose",-1)),(l(!0),n(f,null,x(o.countries,e=>(l(),n("option",{key:e.value,value:e.value,selected:""},g(e.text),9,_))),128))],512),[[c,o.fill.country_id]]),s("div",z,[b(p,{to:"/citizen/state",class:"px-4 py-3 rounded-md bg-zinc-500 text-white uppercase tracking-wider font-semibold text-xs"},{default:h(()=>t[5]||(t[5]=[v("back")])),_:1}),s("button",{onClick:t[2]||(t[2]=e=>a.submitContinue()),class:"px-4 py-3 rounded-md bg-sky-500 text-white uppercase tracking-wider font-semibold text-xs"},"submit and continue"),s("button",{onClick:t[3]||(t[3]=e=>a.submitFinish()),class:"px-4 py-3 rounded-md bg-sky-500 text-white uppercase tracking-wider font-semibold text-xs"},"submit and finish")])])}const D=d(w,[["render",B]]);export{D as default};
