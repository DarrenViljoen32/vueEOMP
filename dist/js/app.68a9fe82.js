(function(){"use strict";var a={5097:function(a,t,e){var s=e(9242),i=e(3396);function n(a,t,e,s,n,l){const o=(0,i.up)("Navbar"),r=(0,i.up)("router-view"),c=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o),(0,i.Wm)(r),(0,i.Wm)(c)],64)}const l={class:"navbar fixed-top navbar-expand-lg bg-light"},o={class:"container-fluid"},r=(0,i._)("a",{class:"navbar-brand",href:"/"},"Darren Viljoen",-1),c=(0,i._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},v={class:"navbar-nav"},u=(0,i._)("span",{class:"bi bi-house"}," | ",-1),b=(0,i._)("span",{class:"bi bi-person"}," | ",-1),p=(0,i._)("span",{class:"bi bi-file-person"}," | ",-1),m=(0,i._)("span",{class:"bi bi-file-earmark-code"}," | ",-1),f=(0,i._)("span",{class:"bi bi-person-check"}," | ",-1),h=(0,i._)("span",{class:"bi bi-envelope-at"}," | ",-1);function _(a,t,e,s,n,_){const g=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",l,[(0,i._)("div",o,[r,c,(0,i._)("div",d,[(0,i._)("div",v,[(0,i.Wm)(g,{to:"/",class:"nav-link"},{default:(0,i.w5)((()=>[u,(0,i.Uk)("Home")])),_:1}),(0,i.Wm)(g,{to:"/about",class:"nav-link"},{default:(0,i.w5)((()=>[b,(0,i.Uk)("About")])),_:1}),(0,i.Wm)(g,{to:"/resume",class:"nav-link"},{default:(0,i.w5)((()=>[p,(0,i.Uk)("Resume")])),_:1}),(0,i.Wm)(g,{to:"/projects",class:"nav-link"},{default:(0,i.w5)((()=>[m,(0,i.Uk)("Projects")])),_:1}),(0,i.Wm)(g,{to:"/testimonials",class:"nav-link"},{default:(0,i.w5)((()=>[f,(0,i.Uk)("Testimonials")])),_:1}),(0,i.Wm)(g,{to:"/contact",class:"nav-link"},{default:(0,i.w5)((()=>[h,(0,i.Uk)("Contact")])),_:1})])])])])}var g={},w=e(89);const j=(0,w.Z)(g,[["render",_]]);var D=j,y=e(7139);const k={class:"rainbow_text animated"},x={id:"year"};function z(a,t,e,s,n,l){return(0,i.wg)(),(0,i.iD)("footer",null,[(0,i._)("p",k,[(0,i.Uk)("© Copyright "),(0,i._)("span",x,(0,y.zw)((new Date).getFullYear()),1),(0,i.Uk)(" Made By Darren Viljoen. All Rights Reserved.")])])}var S={};const H=(0,w.Z)(S,[["render",z]]);var E=H;const M={class:"d-flex justify-content-center"},P=(0,i._)("div",{class:"spinner-border text-light",role:"status"},[(0,i._)("span",{class:"visually-hidden"},"Loading...")],-1),V=[P];function W(a,t,e,s,n,l){return(0,i.wg)(),(0,i.iD)("div",M,V)}var A={};const N=(0,w.Z)(A,[["render",W]]);var C=N,I={components:{Navbar:D,Footer:E,Spinner:C}};const O=(0,w.Z)(I,[["render",n]]);var T=O,L=e(5431);(0,L.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(a){console.error("Error during service worker registration:",a)}});var U=e(2483);const $=a=>((0,i.dD)("data-v-b61eaa1e"),a=a(),(0,i.Cn)(),a),F={class:"home"},Z={key:0},J=["src"],q=$((()=>(0,i._)("br",null,null,-1))),G={class:"ani-home fw-bold"},Y={class:"ani-home fw-bold"},K=(0,i.uE)('<div class="ani-home" data-v-b61eaa1e><a href="https://github.com/DarrenViljoen32" class="bi bi-github" data-v-b61eaa1e></a> | <a href="https://linkedin.com/in/darren-viljoen-450804208" class="bi bi-linkedin" data-v-b61eaa1e></a> | <a href="https://app.netlify.com/teams/darrenviljoen32/overview" class="bi bi-globe" data-v-b61eaa1e></a> | <a href="https://wa.me/0748671764" class="bi bi-whatsapp" data-v-b61eaa1e></a></div>',1),R={key:1};function B(a,t,e,s,n,l){const o=(0,i.up)("Spinner");return(0,i.wg)(),(0,i.iD)("div",F,[l.jsonData?((0,i.wg)(),(0,i.iD)("div",Z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.jsonData.home,(a=>((0,i.wg)(),(0,i.iD)("div",{key:a.name},[(0,i._)("img",{src:a.picture,class:"rounded-circle border",alt:"Profile Picture Loading..."},null,8,J),q,(0,i._)("h1",G,(0,y.zw)(a.name),1),(0,i._)("h2",Y,(0,y.zw)(a.intro),1),K])))),128))])):((0,i.wg)(),(0,i.iD)("div",R,[(0,i.Wm)(o)]))])}var Q={name:"HomeView",components:{Spinner:C},computed:{jsonData(){return this.$store.state.jsonData}},mounted(){this.$store.dispatch("fetchJsonData")}};const X=(0,w.Z)(Q,[["render",B],["__scopeId","data-v-b61eaa1e"]]);var aa=X;const ta=a=>((0,i.dD)("data-v-31cc1b00"),a=a(),(0,i.Cn)(),a),ea={class:"about"},sa=ta((()=>(0,i._)("h1",{class:"fw-bold"},"About Me",-1))),ia=ta((()=>(0,i._)("h2",null,"Hello, I'm Darren Viljoen, an Aspiring Developer",-1))),na=ta((()=>(0,i._)("br",null,null,-1))),la=ta((()=>(0,i._)("br",null,null,-1))),oa=ta((()=>(0,i._)("br",null,null,-1))),ra={key:0},ca=["src"],da=ta((()=>(0,i._)("br",null,null,-1))),va=ta((()=>(0,i._)("br",null,null,-1))),ua=ta((()=>(0,i._)("br",null,null,-1))),ba={class:"info"},pa=(0,i.uE)('<br data-v-31cc1b00><h3 class="fw-bold" data-v-31cc1b00>Additional Information : </h3><div class="row" data-v-31cc1b00><div class="personal-info pads" data-v-31cc1b00><div class="row" data-v-31cc1b00><div class="info-item pads" data-v-31cc1b00><p data-v-31cc1b00>Date of Birth : 12 March 1998</p></div><div class="info-item pads" data-v-31cc1b00><p data-v-31cc1b00>Age : 25</p></div><div class="info-item pads" data-v-31cc1b00><p data-v-31cc1b00>Phone : +27 74 867 1764</p></div><div class="info-item pads" data-v-31cc1b00><p data-v-31cc1b00>Email : darrenviljoen32@gmail.com</p></div><div class="info-item pads" data-v-31cc1b00><p data-v-31cc1b00>City : Cape Town</p></div><div class="info-item pads" data-v-31cc1b00><p data-v-31cc1b00>Freelance : N/A</p></div></div><div class="row" data-v-31cc1b00><div class="buttons pads" data-v-31cc1b00><a href="https://github.com/DarrenViljoen32?tab=repositories" target="_blank" class="btn" data-v-31cc1b00><button data-v-31cc1b00>See More of my Work</button></a></div></div></div></div>',3),ma={key:1};function fa(a,t,e,s,n,l){const o=(0,i.up)("Spinner");return(0,i.wg)(),(0,i.iD)("div",ea,[sa,ia,na,la,oa,l.jsonData?((0,i.wg)(),(0,i.iD)("div",ra,[(0,i._)("img",{src:l.jsonData.home[0].picture,class:"rounded-circle border",alt:"Profile Picture Loading..."},null,8,ca),da,va,ua,(0,i._)("div",ba,[(0,i._)("p",null,(0,y.zw)(l.jsonData.about[0]),1),(0,i._)("p",null,(0,y.zw)(l.jsonData.about[1]),1),pa])])):((0,i.wg)(),(0,i.iD)("div",ma,[(0,i.Wm)(o)]))])}var ha={name:"HomeView",components:{Spinner:C},computed:{jsonData(){return this.$store.state.jsonData}},mounted(){this.$store.dispatch("fetchJsonData")}};const _a=(0,w.Z)(ha,[["render",fa],["__scopeId","data-v-31cc1b00"]]);var ga=_a;const wa=a=>((0,i.dD)("data-v-3e791dfb"),a=a(),(0,i.Cn)(),a),ja={class:"resume"},Da=wa((()=>(0,i._)("h1",{class:"fw-bold",id:"right"},"Resume",-1))),ya=wa((()=>(0,i._)("br",null,null,-1))),ka=wa((()=>(0,i._)("br",null,null,-1))),xa=wa((()=>(0,i._)("h2",{id:"right"},"Education",-1))),za={key:0},Sa={class:"container text-center"},Ha={class:"row"},Ea={class:"card",id:"skill-zoom"},Ma={class:"card-body"},Pa={class:"card-title"},Va={class:"card-subtitle mb-2 text-muted bi bi-calendar"},Wa={class:"card-text"},Aa={key:1},Na=wa((()=>(0,i._)("br",null,null,-1))),Ca=wa((()=>(0,i._)("br",null,null,-1))),Ia=wa((()=>(0,i._)("h2",{id:"right"},"Skills",-1))),Oa={key:2},Ta={class:"container text-center"},La={class:"row"},Ua={class:"card",id:"skill-zoom"},$a={class:"card-body"},Fa=wa((()=>(0,i._)("a",{class:"bi bi-person-up"},null,-1))),Za={class:"card-title"},Ja={class:"card-subtitle mb-2 text-muted"},qa={class:"card-text"},Ga={key:3};function Ya(a,t,e,s,n,l){const o=(0,i.up)("Spinner");return(0,i.wg)(),(0,i.iD)("div",ja,[Da,ya,ka,xa,l.jsonData?((0,i.wg)(),(0,i.iD)("div",za,[(0,i._)("div",Sa,[(0,i._)("div",Ha,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.jsonData.education,(a=>((0,i.wg)(),(0,i.iD)("div",{class:"col",key:a.title},[(0,i._)("div",Ea,[(0,i._)("div",Ma,[(0,i._)("h5",Pa,(0,y.zw)(a.title),1),(0,i._)("h6",Va,(0,y.zw)(a.year),1),(0,i._)("p",Wa,(0,y.zw)(a.description),1)])])])))),128))])])])):((0,i.wg)(),(0,i.iD)("div",Aa,[(0,i.Wm)(o)])),Na,Ca,Ia,l.jsonData?((0,i.wg)(),(0,i.iD)("div",Oa,[(0,i._)("div",Ta,[(0,i._)("div",La,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.jsonData.skills,(a=>((0,i.wg)(),(0,i.iD)("div",{class:"col",key:a.title},[(0,i._)("div",Ua,[(0,i._)("div",$a,[Fa,(0,i._)("h5",Za,(0,y.zw)(a.title),1),(0,i._)("h6",Ja,(0,y.zw)(a.level),1),(0,i._)("p",qa,(0,y.zw)(a.experience),1)])])])))),128))])])])):((0,i.wg)(),(0,i.iD)("div",Ga,[(0,i.Wm)(o)]))])}var Ka={name:"HomeView",components:{Spinner:C},computed:{jsonData(){return this.$store.state.jsonData}},mounted(){this.$store.dispatch("fetchJsonData")}};const Ra=(0,w.Z)(Ka,[["render",Ya],["__scopeId","data-v-3e791dfb"]]);var Ba=Ra;const Qa=a=>((0,i.dD)("data-v-92e9c9ce"),a=a(),(0,i.Cn)(),a),Xa={class:"projects"},at=Qa((()=>(0,i._)("h1",{class:"fw-bold",id:"right"},"Projects",-1))),tt=Qa((()=>(0,i._)("br",null,null,-1))),et=Qa((()=>(0,i._)("br",null,null,-1))),st={key:0},it={class:"container text-center"},nt={class:"row"},lt={class:"col"},ot={class:"card-whole",id:"left"},rt={class:"card-inner"},ct={class:"card-img"},dt=["src"],vt={class:"card-info"},ut={class:"card-title"},bt={class:"card-text"},pt=["href"],mt=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-github btn btn-light",title:"GitHub"},null,-1))),ft=[mt],ht=["href"],_t=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-globe btn btn-light",title:"Netflify"},null,-1))),gt=[_t],wt=Qa((()=>(0,i._)("label",{for:".card-whole"},"Hover for Details!",-1))),jt={class:"col"},Dt={class:"card-whole",id:"middle"},yt={class:"card-inner"},kt={class:"card-img"},xt=["src"],zt={class:"card-info"},St={class:"card-title"},Ht={class:"card-text"},Et=["href"],Mt=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-github btn btn-light",title:"GitHub"},null,-1))),Pt=[Mt],Vt=["href"],Wt=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-globe btn btn-light",title:"Netflify"},null,-1))),At=[Wt],Nt=Qa((()=>(0,i._)("label",{for:".card-whole"},"Hover for Details!",-1))),Ct={class:"col"},It={class:"card-whole",id:"right"},Ot={class:"card-inner"},Tt={class:"card-img"},Lt=["src"],Ut={class:"card-info"},$t={class:"card-title"},Ft={class:"card-text"},Zt=["href"],Jt=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-github btn btn-light",title:"GitHub"},null,-1))),qt=[Jt],Gt=["href"],Yt=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-globe btn btn-light",title:"Netflify"},null,-1))),Kt=[Yt],Rt=Qa((()=>(0,i._)("label",{for:".card-whole"},"Hover for Details!",-1))),Bt={class:"row"},Qt={class:"col"},Xt={class:"card-whole",id:"left"},ae={class:"card-inner"},te={class:"card-img"},ee=["src"],se={class:"card-info"},ie={class:"card-title"},ne={class:"card-text"},le=["href"],oe=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-github btn btn-light",title:"GitHub"},null,-1))),re=[oe],ce=["href"],de=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-globe btn btn-light",title:"Netflify"},null,-1))),ve=[de],ue=Qa((()=>(0,i._)("label",{for:".card-whole"},"Hover for Details!",-1))),be={class:"col"},pe={class:"card-whole",id:"middle"},me={class:"card-inner"},fe={class:"card-img"},he=["src"],_e={class:"card-info"},ge={class:"card-title"},we={class:"card-text"},je=["href"],De=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-github btn btn-light",title:"GitHub"},null,-1))),ye=[De],ke=["href"],xe=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-globe btn btn-light",title:"Netflify"},null,-1))),ze=[xe],Se=Qa((()=>(0,i._)("label",{for:".card-whole"},"Hover for Details!",-1))),He={class:"col"},Ee={class:"card-whole",id:"right"},Me={class:"card-inner"},Pe={class:"card-img"},Ve=["src"],We={class:"card-info"},Ae={class:"card-title"},Ne={class:"card-text"},Ce=["href"],Ie=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-github btn btn-light",title:"GitHub"},null,-1))),Oe=[Ie],Te=["href"],Le=Qa((()=>(0,i._)("button",{type:"button",class:"card-link bi bi-globe btn btn-light",title:"Netflify"},null,-1))),Ue=[Le],$e=Qa((()=>(0,i._)("label",{for:".card-whole"},"Hover for Details!",-1))),Fe={key:1};function Ze(a,t,e,s,n,l){const o=(0,i.up)("Spinner");return(0,i.wg)(),(0,i.iD)("div",Xa,[at,tt,et,l.jsonData?((0,i.wg)(),(0,i.iD)("div",st,[(0,i._)("div",it,[(0,i._)("div",nt,[(0,i._)("div",lt,[(0,i._)("div",ot,[(0,i._)("div",rt,[(0,i._)("div",ct,[(0,i._)("img",{src:l.jsonData.projects[5].image,class:"card-img-top",alt:"Image Loading..."},null,8,dt)]),(0,i._)("div",vt,[(0,i._)("h5",ut,(0,y.zw)(l.jsonData.projects[5].name),1),(0,i._)("p",bt,(0,y.zw)(l.jsonData.projects[5].description),1),(0,i._)("a",{href:l.jsonData.projects[5].github},ft,8,pt),(0,i._)("a",{href:l.jsonData.projects[5].netlify},gt,8,ht)])]),wt])]),(0,i._)("div",jt,[(0,i._)("div",Dt,[(0,i._)("div",yt,[(0,i._)("div",kt,[(0,i._)("img",{src:l.jsonData.projects[4].image,class:"card-img-top",alt:"Image Loading..."},null,8,xt)]),(0,i._)("div",zt,[(0,i._)("h5",St,(0,y.zw)(l.jsonData.projects[4].name),1),(0,i._)("p",Ht,(0,y.zw)(l.jsonData.projects[4].description),1),(0,i._)("a",{href:l.jsonData.projects[4].github},Pt,8,Et),(0,i._)("a",{href:l.jsonData.projects[4].netlify},At,8,Vt)])]),Nt])]),(0,i._)("div",Ct,[(0,i._)("div",It,[(0,i._)("div",Ot,[(0,i._)("div",Tt,[(0,i._)("img",{src:l.jsonData.projects[2].image,class:"card-img-top",alt:"Image Loading..."},null,8,Lt)]),(0,i._)("div",Ut,[(0,i._)("h5",$t,(0,y.zw)(l.jsonData.projects[2].name),1),(0,i._)("p",Ft,(0,y.zw)(l.jsonData.projects[2].description),1),(0,i._)("a",{href:l.jsonData.projects[2].github},qt,8,Zt),(0,i._)("a",{href:l.jsonData.projects[2].netlify},Kt,8,Gt)])]),Rt])])]),(0,i._)("div",Bt,[(0,i._)("div",Qt,[(0,i._)("div",Xt,[(0,i._)("div",ae,[(0,i._)("div",te,[(0,i._)("img",{src:l.jsonData.projects[1].image,class:"card-img-top",alt:"Image Loading..."},null,8,ee)]),(0,i._)("div",se,[(0,i._)("h5",ie,(0,y.zw)(l.jsonData.projects[1].name),1),(0,i._)("p",ne,(0,y.zw)(l.jsonData.projects[1].description),1),(0,i._)("a",{href:l.jsonData.projects[1].github},re,8,le),(0,i._)("a",{href:l.jsonData.projects[1].netlify},ve,8,ce)])]),ue])]),(0,i._)("div",be,[(0,i._)("div",pe,[(0,i._)("div",me,[(0,i._)("div",fe,[(0,i._)("img",{src:l.jsonData.projects[3].image,class:"card-img-top",alt:"Image Loading..."},null,8,he)]),(0,i._)("div",_e,[(0,i._)("h5",ge,(0,y.zw)(l.jsonData.projects[3].name),1),(0,i._)("p",we,(0,y.zw)(l.jsonData.projects[3].description),1),(0,i._)("a",{href:l.jsonData.projects[3].github},ye,8,je),(0,i._)("a",{href:l.jsonData.projects[3].netlify},ze,8,ke)])]),Se])]),(0,i._)("div",He,[(0,i._)("div",Ee,[(0,i._)("div",Me,[(0,i._)("div",Pe,[(0,i._)("img",{src:l.jsonData.projects[0].image,class:"card-img-top",alt:"Image Loading..."},null,8,Ve)]),(0,i._)("div",We,[(0,i._)("h5",Ae,(0,y.zw)(l.jsonData.projects[0].name),1),(0,i._)("p",Ne,(0,y.zw)(l.jsonData.projects[0].description),1),(0,i._)("a",{href:l.jsonData.projects[0].github},Oe,8,Ce),(0,i._)("a",{href:l.jsonData.projects[0].netlify},Ue,8,Te)])]),$e])])])])])):((0,i.wg)(),(0,i.iD)("div",Fe,[(0,i.Wm)(o)]))])}var Je={name:"HomeView",components:{Spinner:C},computed:{jsonData(){return this.$store.state.jsonData}},mounted(){this.$store.dispatch("fetchJsonData")}};const qe=(0,w.Z)(Je,[["render",Ze],["__scopeId","data-v-92e9c9ce"]]);var Ge=qe;const Ye=a=>((0,i.dD)("data-v-1b60d7a6"),a=a(),(0,i.Cn)(),a),Ke={class:"testimonials"},Re=Ye((()=>(0,i._)("h1",{class:"fw-bold",id:"right"},"Testimonials",-1))),Be=Ye((()=>(0,i._)("br",null,null,-1))),Qe=Ye((()=>(0,i._)("br",null,null,-1))),Xe={key:0},as={class:"container text-center"},ts={class:"row"},es={class:"card",id:"fade"},ss=["src"],is={class:"card-body"},ns={class:"card-title"},ls={class:"card-text"},os={href:"mailto: darrenviljoen32@gmail.com",class:"card-link"},rs={key:1};function cs(a,t,e,s,n,l){const o=(0,i.up)("Spinner");return(0,i.wg)(),(0,i.iD)("div",Ke,[Re,Be,Qe,l.jsonData?((0,i.wg)(),(0,i.iD)("div",Xe,[(0,i._)("div",as,[(0,i._)("div",ts,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.jsonData.testimonials,(a=>((0,i.wg)(),(0,i.iD)("div",{class:"col",key:a.name},[(0,i._)("div",es,[(0,i._)("img",{src:a.profile,class:"card-img-top",alt:"Image Loading..."},null,8,ss),(0,i._)("div",is,[(0,i._)("h5",ns,(0,y.zw)(a.name),1),(0,i._)("p",ls,(0,y.zw)(a.quote),1),(0,i._)("a",os,(0,y.zw)(a.email),1)])])])))),128))])])])):((0,i.wg)(),(0,i.iD)("div",rs,[(0,i.Wm)(o)]))])}var ds={name:"HomeView",components:{Spinner:C},computed:{jsonData(){return this.$store.state.jsonData}},mounted(){this.$store.dispatch("fetchJsonData")}};const vs=(0,w.Z)(ds,[["render",cs],["__scopeId","data-v-1b60d7a6"]]);var us=vs;const bs=a=>((0,i.dD)("data-v-26a3d955"),a=a(),(0,i.Cn)(),a),ps={key:0,class:"contact"},ms=(0,i.uE)('<h1 class="fw-bold" id="right" data-v-26a3d955>Contact Me</h1><br data-v-26a3d955><br data-v-26a3d955><div class="row" id="left" data-v-26a3d955><div class="col-md-4 text-center" data-v-26a3d955><ul class="list-unstyled mb-0" data-v-26a3d955><li data-v-26a3d955><i class="bi bi-geo-alt-fill" data-v-26a3d955></i><h4 data-v-26a3d955>Location</h4><p data-v-26a3d955>Cape Town, Western Cape, South Africa</p></li></ul></div><div class="col-md-4 text-center" data-v-26a3d955><ul class="list-unstyled mb-0" data-v-26a3d955><li data-v-26a3d955><i class="bi bi-telephone-outbound-fill" data-v-26a3d955></i><h4 data-v-26a3d955>Telephone</h4><p data-v-26a3d955><a href="tel: 0748671764" data-v-26a3d955>+27 74 867 1764</a></p></li></ul></div><div class="col-md-4 text-center" data-v-26a3d955><ul class="list-unstyled mb-0" data-v-26a3d955><li data-v-26a3d955><i class="bi bi-envelope-at-fill" data-v-26a3d955></i><h4 data-v-26a3d955>Email</h4><p data-v-26a3d955>darrenviljoen32@gmail.com</p></li></ul></div></div><br data-v-26a3d955><br data-v-26a3d955><br data-v-26a3d955><div class="row" id="icons" data-v-26a3d955><div class="col-md-3 text-center" data-v-26a3d955><a href="https://github.com/DarrenViljoen32" class="bi bi-github" data-v-26a3d955></a><p data-v-26a3d955>Check out my GitHub!</p></div><div class="col-md-3 text-center" data-v-26a3d955><a href="https://linkedin.com/in/darren-viljoen-450804208" class="bi bi-linkedin" data-v-26a3d955></a><p data-v-26a3d955>Hire Me via LinkedIn!</p></div><div class="col-md-3 text-center" data-v-26a3d955><a href="https://app.netlify.com/teams/darrenviljoen32/overview" class="bi bi-globe" data-v-26a3d955></a><p data-v-26a3d955>Try out my Netlify!</p></div><div class="col-md-3 text-center" data-v-26a3d955><a href="https://wa.me/0748671764" class="bi bi-whatsapp" data-v-26a3d955></a><p data-v-26a3d955>Whatsapp Me!</p></div></div><br data-v-26a3d955><br data-v-26a3d955><br data-v-26a3d955><h3 class="fw-bold col" id="right" data-v-26a3d955>Send Me a Message via Email:</h3>',12),fs={class:"row"},hs={class:"col-md mb-md-0 mb-5"},_s={class:"row"},gs={class:"col-md-6"},ws={class:"md-form mb-0"},js=bs((()=>(0,i._)("div",{class:"valid-feedback"}," Valid! ",-1))),Ds=bs((()=>(0,i._)("div",{class:"invalid-feedback"}," Please Enter A Name. ",-1))),ys={class:"col-md-6"},ks={class:"md-form mb-0"},xs=bs((()=>(0,i._)("div",{class:"valid-feedback"}," Valid! ",-1))),zs=bs((()=>(0,i._)("div",{class:"invalid-feedback"}," Please Enter An Email. ",-1))),Ss={class:"row"},Hs={class:"col-md-12"},Es={class:"md-form mb-0"},Ms=bs((()=>(0,i._)("div",{class:"valid-feedback"}," Valid! ",-1))),Ps=bs((()=>(0,i._)("div",{class:"invalid-feedback"}," Please Enter A Subject. ",-1))),Vs={class:"row"},Ws={class:"col-md-12"},As={class:"md-form"},Ns=bs((()=>(0,i._)("div",{class:"valid-feedback"}," Valid! ",-1))),Cs=bs((()=>(0,i._)("div",{class:"invalid-feedback"}," Please Enter A Message. ",-1))),Is=bs((()=>(0,i._)("div",{class:"text-center text-md-left"},[(0,i._)("button",{type:"submit",class:"btn","data-toggle":"modal","data-target":"#formModal"},"Send")],-1))),Os={key:1};function Ts(a,t,e,n,l,o){const r=(0,i.up)("Spinner");return o.jsonData?((0,i.wg)(),(0,i.iD)("div",ps,[ms,(0,i._)("div",fs,[(0,i._)("div",hs,[(0,i._)("form",{onSubmit:t[4]||(t[4]=(0,s.iM)(((...a)=>o.submitForm&&o.submitForm(...a)),["prevent"])),id:"contact-form",name:"contact-form",action:"https://formspree.io/f/xjvqjgvr",method:"POST",class:"was-validated"},[(0,i._)("div",_s,[(0,i._)("div",gs,[(0,i._)("div",ws,[(0,i.wy)((0,i._)("input",{type:"text",id:"name",name:"name",class:"form-control",placeholder:"Enter Full Name",required:"","onUpdate:modelValue":t[0]||(t[0]=a=>l.name=a)},null,512),[[s.nr,l.name]]),js,Ds])]),(0,i._)("div",ys,[(0,i._)("div",ks,[(0,i.wy)((0,i._)("input",{type:"text",id:"email",name:"email",class:"form-control",placeholder:"Enter Email",required:"","onUpdate:modelValue":t[1]||(t[1]=a=>l.email=a)},null,512),[[s.nr,l.email]]),xs,zs])])]),(0,i._)("div",Ss,[(0,i._)("div",Hs,[(0,i._)("div",Es,[(0,i.wy)((0,i._)("input",{type:"text",id:"subject",name:"subject",class:"form-control",placeholder:"Enter Subject",required:"","onUpdate:modelValue":t[2]||(t[2]=a=>l.subject=a)},null,512),[[s.nr,l.subject]]),Ms,Ps])])]),(0,i._)("div",Vs,[(0,i._)("div",Ws,[(0,i._)("div",As,[(0,i.wy)((0,i._)("textarea",{type:"text",id:"message",name:"message",rows:"2",class:"form-control md-textarea",placeholder:"Enter Your Message",required:"","onUpdate:modelValue":t[3]||(t[3]=a=>l.message=a)},null,512),[[s.nr,l.message]]),Ns,Cs])])]),Is],32)])])])):((0,i.wg)(),(0,i.iD)("div",Os,[(0,i.Wm)(r)]))}var Ls={components:{Spinner:C},computed:{jsonData(){return this.$store.state.jsonData}},mounted(){this.$store.dispatch("fetchJsonData")},data(){return{name:"",email:"",subject:"",message:""}},methods:{submitForm(){console.log("Page was refreshed."),this.name="",this.email="",this.subject="",this.message=""}}};const Us=(0,w.Z)(Ls,[["render",Ts],["__scopeId","data-v-26a3d955"]]);var $s=Us;const Fs=[{path:"/",name:"home",component:aa},{path:"/about",name:"about",component:ga},{path:"/resume",name:"resume",component:Ba},{path:"/projects",name:"projects",component:Ge},{path:"/testimonials",name:"testimonials",component:us},{path:"/contact",name:"contact",component:$s}],Zs=(0,U.p7)({history:(0,U.PO)("/"),routes:Fs});var Js=Zs,qs=e(1076),Gs=e(65),Ys=(0,Gs.MT)({state:{jsonData:null},getters:{},mutations:{setJsonData(a,t){a.jsonData=t}},actions:{async fetchJsonData({commit:a}){try{const t=await qs.Z.get("https://darrenviljoen32.github.io/vueEOMP/index.json");a("setJsonData",t.data)}catch(t){console.error("Error fetching Json Data: ",t)}}},modules:{}});e(8052);(0,s.ri)(T).use(Ys).use(Js).mount("#app")}},t={};function e(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return a[s].call(n.exports,n,n.exports,e),n.exports}e.m=a,function(){var a=[];e.O=function(t,s,i,n){if(!s){var l=1/0;for(d=0;d<a.length;d++){s=a[d][0],i=a[d][1],n=a[d][2];for(var o=!0,r=0;r<s.length;r++)(!1&n||l>=n)&&Object.keys(e.O).every((function(a){return e.O[a](s[r])}))?s.splice(r--,1):(o=!1,n<l&&(l=n));if(o){a.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[s,i,n]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var s in t)e.o(t,s)&&!e.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:t[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,s){var i,n,l=s[0],o=s[1],r=s[2],c=0;if(l.some((function(t){return 0!==a[t]}))){for(i in o)e.o(o,i)&&(e.m[i]=o[i]);if(r)var d=r(e)}for(t&&t(s);c<l.length;c++)n=l[c],e.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return e.O(d)},s=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(5097)}));s=e.O(s)})();
//# sourceMappingURL=app.68a9fe82.js.map