import{a as r}from"./index-DnqVUwQ5.js";const a={getPartNumbers(e){const t=new URLSearchParams(e);return r.get(`/warehouse/partnumbers?${t.toString()}`)},getSubPartNumbers(){return r.get("/warehouse/subpartnumbers")},getSearchPartNumbers(e){const t=new URLSearchParams(e);return r.get(`/warehouse/partnumbers/search?${t.toString()}`)}},u={Warehousing:{create(e){return r.post("/warehouse/warehousing",e)}},Shipping:{create(e){return r.post("/warehouse/shipping",e)}},Outsourcinglist:{get(){return r.get("/warehouse/outsourcinglist")},create(e){return r.post("/warehouse/outsourcinglist/create",e)},delete(e){return r.delete(`/warehouse/outsourcinglist/${e}`)},done(e,t){return r.post(`/warehouse/outsourcinglist/${e}/done`,t)}}};export{a as p,u as w};