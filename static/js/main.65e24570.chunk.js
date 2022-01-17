(this["webpackJsonpsurvey-gc2021"]=this["webpackJsonpsurvey-gc2021"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),l=n(52),o=n.n(l),s=(n(60),n(6)),c=n(27),i=n(12),u=n(1),d=["name","label","options","onValueSelect"],b=function(e){var t=e.name,n=e.label,a=e.options,r=e.onValueSelect;Object(i.a)(e,d);return Object(u.jsxs)("div",{className:"p-0 border border-solid",children:[Object(u.jsx)("div",{className:"font-bold pb-5",children:n}),Object(u.jsx)("select",{name:t,onChange:r,children:a.map((function(e,t){return Object(u.jsx)("option",{value:e.value,children:e.label},t)}))})]},t)},h=n(34),j=n.n(h),m=["name","onSearchHistoryChanged"],f=null,g=function(e){var t=e.name,n=e.onSearchHistoryChanged,r=(Object(i.a)(e,m),Object(a.useState)("")),l=Object(s.a)(r,2),o=l[0],d=l[1],b=Object(a.useState)({init:!0}),h=Object(s.a)(b,2),g=h[0],v=h[1],x=Object(a.useState)([]),p=Object(s.a)(x,2),O=p[0],w=p[1],y=Object(a.useState)({title:null,url:null,viewerIsOpen:!1}),N=Object(s.a)(y,2),S=N[0],C=N[1],k=Object(a.useState)(null),I=Object(s.a)(k,2),F=I[0],M=I[1];Object(a.useEffect)((function(){j.a.get("./content/research-simulation.json").then((function(e){var t=function(e){var t,n,a;if(null===e||void 0===e||!e.researchSimulation)throw Error("Die Daten in research-simulation.json sind ung\xfcltig!");if(null===(t=e.researchSimulation)||void 0===t||!t.config)throw Error('Abschnitt "config: { ... }" in research-simulation.json fehlt!');if(!(null!==(n=e.researchSimulation)&&void 0!==n&&null!==(a=n.cues)&&void 0!==a&&a.length)>0)throw Error('Abschnitt "cues": [ ... ] in research-simulation.json fehlt oder ist leer!');try{e.researchSimulation.cues.forEach((function(e){var t=e.id,n=e.title,a=e.keywords,r=e.url;if(!t||"number"!==typeof t)throw Error('Fehlendes oder ung\xfcltiges Attribute "id" (keine Zahl?) in '.concat(JSON.stringify(e)));if(!n||"string"!==typeof n||(null===n||void 0===n?void 0:n.length)<1)throw Error('Fehlendes oder ung\xfcltiges Attribute "title" (keine Zeichenkette?) in '.concat(JSON.stringify(e)));if(!a||!(null!==a&&void 0!==a&&a.length)>1)throw Error('Fehlendes oder ung\xfcltiges Attribute "keywords" (keine Zeichenkette?) in '.concat(JSON.stringify(e)));if(!r||!(null!==r&&void 0!==r&&r.length)>1)throw Error('Fehlendes oder ung\xfcltiges Attribute "url" (keine Zeichenkette?) in '.concat(JSON.stringify(e)))}))}catch(r){throw console.error(r),JSON.stringify(r.message)}return e}(e.data);t?M(t):console.log("Control data invalid.")}))}),[]);var E=function(e,a){var r=O;r.push({time:(new Date).getTime(),action:e,info:a}),w(r),n({target:{name:t,value:r}})},_=function(e){var t=o.toLowerCase().split(";").reduce((function(e,t){var n;return 0===t.length||(null===(n=F.researchSimulation)||void 0===n?void 0:n.cues.filter((function(e){return e.keywords.toLowerCase().indexOf(t)>-1}))).forEach((function(t){e[t.id]=t})),e}),{});E("SEARCH",o),v(t)};return Object(u.jsxs)("div",{className:"container mx-auto",children:[Object(u.jsx)("h1",{className:"text-3xl pb-4",children:"Recherche"}),Object(u.jsxs)("div",{className:"bg-blue-50 shadow-md px-8 pt-6 pb-8 mb-4",children:[Object(u.jsx)("div",{className:"mb-4",children:Object(u.jsx)("input",{autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&o.length>=4&&_()},onChange:function(e){d(e.target.value)},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"keywords",type:"text",placeholder:"Suchbegriffe (min. ".concat(4," Buchstaben) hier eingeben...")})}),Object(u.jsx)("div",{className:"flex items-center justify-between",children:Object(u.jsx)("button",{disabled:o.length<4&&"disabled",className:Object(c.a)({"bg-blue-300 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed":o.length<4,"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline":o.length>=4}),type:"button",onClick:_,children:"Suchen"})})]}),!0!==g.init&&0===Object.keys(g).length&&Object(u.jsx)("div",{className:"bg-gray-50 p-10 my-10",children:Object(u.jsx)("div",{children:"Wir haben leider keine passenden Ergebnisse zu Ihrer Suchanfrage gefunden... Bitte versuchen Sie es mit anderen Suchbegriffen."})}),!0!==g.init&&Object.keys(g).map((function(e){return Object(u.jsxs)("div",{className:"bg-gray-50 p-5 my-1 border-gray-500",children:[Object(u.jsx)("div",{className:"font-bold",children:g[e].title}),Object(u.jsx)("div",{className:"text-blue-400",children:Object(u.jsx)("div",{className:"cursor-pointer text-blue-700",onClick:(t=g[e],function(){E("OPEN",t.url);var e=new Date;f=e.getTime(),C({title:t.title,url:t.url,viewerIsOpen:!0})}),children:"Dokument \xf6ffnen"})})]},e);var t})),S.viewerIsOpen&&Object(u.jsxs)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-99 overflow-y-auto h-full w-full",children:[Object(u.jsxs)("div",{className:"flex w-full bg-gray-800 text-white text-xl p-2",children:[Object(u.jsx)("div",{className:"flex-grow text-center pt-4 pl-52 text-2xl font-bold",children:S.title}),Object(u.jsx)("button",{className:"flex-none p-2 cursor-pointer m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline",onClick:function(e){var t=S.url,n=(new Date).getTime()-f;f=null,E("CLOSE",{url:t,durationInSec:n/1e3}),C({title:null,url:null,viewerIsOpen:!1})},children:"Zur\xfcck zur Suchmaske"})]}),Object(u.jsx)("div",{className:"w-full h-full",children:Object(u.jsx)("embed",{src:S.url,type:"application/pdf",frameBorder:"0",scrolling:"auto",height:"100%",width:"100%"})})]})]})},v=function(e){if(e&&!(e.length<1)){var t=null,n=e;do{t=n,n=n.replace(/\[(b|i|u|s)\]([\s\S]*?)\[\/\1\]/g,"<$1>$2</$1>")}while(n!==t);return n=n.replace(/\[br\]*/g,"<br />")}},x=["name","label","options","onChange"],p=function(e){var t=e.name,n=e.label,a=e.options,r=e.onChange,l=(Object(i.a)(e,x),function(e){return r(e)});return Object(u.jsxs)("div",{className:"p-0 w-full",children:[Object(u.jsx)("div",{className:"max-w-sm pb-5 font-bold",dangerouslySetInnerHTML:{__html:v(n)||" "}}),Object(u.jsx)("div",{className:"w-full flex",children:a.map((function(e,n){return Object(u.jsxs)("label",{className:"w-full border border-solid",htmlFor:"".concat(t).concat(e.value),children:[Object(u.jsx)("div",{className:"h-16 font-bold text-center whitespace-pre",dangerouslySetInnerHTML:{__html:v(e.label)||" "}}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("input",{type:"radio",name:t,id:"".concat(t).concat(e.value),value:e.value,onChange:l})}),Object(u.jsx)("div",{className:"text-center",children:e.value})]},n)}))})]},t)},O=n(23),w=["name","min","max","label","unit","onChange"],y=function(e){var t=e.name,n=e.min,r=e.max,l=e.label,o=e.unit,c=e.onChange,d=Object(i.a)(e,w),b=Math.ceil(n+(r-n)/2),h=Object(a.useState)(b),j=Object(s.a)(h,2),m=j[0],f=j[1],g=function(e){return c({target:{name:t,value:m}})};return Object(u.jsxs)("div",{className:"p-0",children:[Object(u.jsx)("div",{className:"max-w-sm font-bold pb-5",children:l}),Object(u.jsx)("input",Object(O.a)({type:"range",name:t,min:n,max:r,defaultValue:b,onChange:function(e){f(e.target.value)},onMouseUp:g,onKeyUp:g},d)),"\xa0",Object(u.jsxs)("span",{children:[m," ",o]})]},t)},N=["onChange","onComplete","label"],S=function(e){var t=e.onChange,n=e.onComplete,a=e.label,r=Object(i.a)(e,N);return Object(u.jsxs)(u.Fragment,{children:[a&&Object(u.jsx)("div",{className:"font-bold pb-5",children:a}),Object(u.jsx)("textarea",Object(O.a)({onChange:function(e){e.target.value.length>0&&(t(e),n(e))},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},r))]})},C=["onChange","onComplete","label"],k=function(e){var t=e.onChange,n=e.onComplete,a=e.label,r=Object(i.a)(e,C);return Object(u.jsxs)(u.Fragment,{children:[a&&Object(u.jsx)("div",{className:"font-bold pb-5",children:a}),Object(u.jsx)("input",Object(O.a)({type:"text",onChange:function(e){e.target.value.length>0&&(t(e),n(e))},className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},r))]})},I=["data","onAllChosen"],F=function(e){var t=e.data,n=e.onAllChosen;Object(i.a)(e,I);if(null===t||void 0===t||!t.attributes||0===t.attributes.length)return Object(u.jsx)("div",{children:"No attributes given"});var a=function(e){var t=e;return t.sort((function(){return Math.random()-.5})),t}(Object.keys(t.attributes)),r={fieldsOrdered:a.map((function(e){return t.attributes[e].name})),answers:{}},l=function(e){if(r.answers[e.target.name]=e.target.value,Object.keys(r.answers).length>0||Object.keys(r.answers).length===r.fieldsOrdered.length){var a=function(e,t){var n=0,a=0,r=0;return Object.keys(e).forEach((function(l){var o=t.filter((function(e){return e.name===l}))[0];"pos"===o.trend&&"y"===e[l]&&(n++,a++),"neg"===o.trend&&"y"===e[l]&&(n--,r++)})),{score:n,posMatches:a,negMatches:r}}(r.answers,t.attributes),l=a.score,o=a.posMatches,s=a.negMatches;r.score1=l,r.score2=o/(o+s),n({target:{name:t.name,value:r}})}};return Object(u.jsx)("div",{className:"flex flex-wrap",children:a.map((function(e,n){var a=t.attributes[e];return Object(u.jsx)("div",{className:"flex w-full md:w-1/2",children:Object(u.jsxs)("div",{className:"border border-solid border-gray-200 bg-gray-50 flex p-2 w-full",children:[Object(u.jsx)("div",{className:"flex-grow",children:a.label}),Object(u.jsxs)("label",{htmlFor:a.name,className:"flex-0 w-1/4",children:[Object(u.jsx)("input",{type:"radio",name:a.name,id:a.name,value:"y",onChange:l}),"\xa0 Ja"]}),Object(u.jsxs)("label",{htmlFor:a.name+"2",className:"flex-0",children:[Object(u.jsx)("input",{type:"radio",name:a.name,id:a.name+"2",value:"n",onChange:l}),"\xa0 Nein"]})]})},n)}))})},M=["label","name","unit","min","max"],E=0,_=function(e){var t=e.formSections,n=e.formName,r=e.onFormChanged,l=e.onFormComplete,o=(e.defaultValues,Object(a.useState)({})),c=Object(s.a)(o,2),d=c[0],h=c[1],j=function(e){return e.paragraphs.map((function(e,t){return Object(u.jsx)("p",{className:"pb-3",dangerouslySetInnerHTML:{__html:v(e)}},t)}))},m=function(e){!function(e,t){var n=d;n[e]=t,h(n)}(e.target.name,e.target.value),r(n,d),!function(){if(!d)return!1;if(d&&Object.keys(d).length<1)return!0;var e=!0;return t.reduce((function(e,t){var n,a=null===(n=t.elements)||void 0===n?void 0:n.reduce((function(e,t){var n;return"input"===(null===(n=t.type)||void 0===n?void 0:n.toLowerCase())&&!0!==t.data.isOptional&&e.push(t.data.name),e}),[]);return a&&e.push(a),e}),[]).flat().forEach((function(t){void 0!==d[t]&&null!==d[t]||(e=!1)})),e}()?l(!1):l(!0)},f=function(e){var t=e.name,n=e.label,a=e.rows,r=e.placeholder;if(a>1)return function(e){var t=e.name,n=e.label,a=e.rows,r=e.placeholder,l=(null===d||void 0===d?void 0:d[t])||null;return Object(u.jsx)("div",{className:"border-1 border-solid bg-gray-200 p-5",children:Object(u.jsx)(S,{className:"w-full p-5",onBlur:m,onChange:function(){return null},onComplete:m,label:n,name:t,rows:a,placeholder:r,defaultValue:l})},t)}({name:t,label:n,rows:a,placeholder:r});var l=(null===d||void 0===d?void 0:d[t])||null;return Object(u.jsx)("div",{className:"border-1 border-solid bg-gray-200 p-5",children:Object(u.jsx)(k,{className:"w-full p-5",onBlur:m,onChange:function(){return null},onComplete:m,label:n,name:t,rows:a,placeholder:r,defaultValue:l})},t)},x=function(e){var t,n,a=null===(t=e.versions)||void 0===t?void 0:t.length;if(a<=0)return null;var r=Math.floor(Math.random()*a);return null===(n=e.versions[r].elements)||void 0===n?void 0:n.map((function(e,t){return e.module&&"subsections"!==e.module?Object(u.jsx)("div",{className:"__element p-2",children:w(e)},e.id):null}))},O=function(e){var t=e.map((function(e,t){return e.module&&"subsections"!==e.module?Object(u.jsx)("div",{className:"__element p-2",children:w(e)},e.id):null}));return Object(u.jsx)("div",{className:"absolute right-0 top-0 h-screen",children:Object(u.jsx)("div",{className:"__element p-2 sticky right-0 top-0",children:t})})},w=function(e){var t,n=null;switch(e.data.id=E++,e.module.toLowerCase()){case"aside":n=O(e.elements);break;case"selfassessment":t=e.data,n=Object(u.jsx)("div",{className:"border-1 border-solid bg-gray-200 p-5",children:Object(u.jsx)(F,{data:t,onAllChosen:m})},t.name);break;case"linkthumbnail":n=function(e){return Object(u.jsx)("a",{href:e.url,target:e.target,children:Object(u.jsx)("div",{className:"border-1 border-solid bg-gray-100 p-5 w-auto hover:bg-gray-200",children:e.title},e.name)})}(e.data);break;case"researchsimulation":n=function(e){return Object(u.jsx)("div",{className:"border-1 border-solid bg-gray-200 p-5",children:Object(u.jsx)(g,{name:e.name,onSearchHistoryChanged:m})},e.name)}(e.data);break;case"dropdown":n=function(e){return Object(u.jsx)("div",{className:"border-1 border-solid bg-gray-200 p-5",children:Object(u.jsx)(b,{name:e.name,label:e.label,options:e.options,onValueSelect:m})},e.name)}(e.data);break;case"selectfromrange":n=function(e){return Object(u.jsx)("div",{className:"bg-gray-200 p-5",children:Object(u.jsx)(p,{name:e.name,label:e.label,options:e.options,onChange:m})},e.name)}(e.data);break;case"slider":n=function(e){var t=e.label,n=e.name,a=e.unit,r=e.min,l=e.max;return Object(i.a)(e,M),Object(u.jsx)("div",{className:"bg-gray-200 p-5 w-full",children:Object(u.jsx)(y,{name:n,className:"min-w-full",label:t,unit:a,onChange:m,min:r,max:l})},e.name)}(e.data,e.settings);break;case"headline":n=function(e){return Object(u.jsx)("div",{className:"text-xl pt-3 pb-4",children:Object(u.jsx)("strong",{children:e.text})},e.text)}(e.data);break;case"boxedtext":n=function(e){var t=j(e);return Object(u.jsx)("div",{className:"border border-gray-400 bg-gray-200 p-5 border-solid",children:t})}(e.data);break;case"bulletlist":n=function(e){var t=e.paragraphs.map((function(e,t){return Object(u.jsx)("li",{className:"pb-3 list-item",children:e},t)}));return Object(u.jsx)("ul",{className:"pl-10 list-outside list-disc",children:t})}(e.data);break;case"pickversion":n=x(e.data);break;case"text":n=j(e.data);break;case"textarea":case"textinput":n=f(e.data)}return n},N=function e(t,n){var a=null;return t.map((function(t,r){var l=t.elements.map((function(t,r){return t.module?"subsections"!==t.module?(a=w(t),Object(u.jsx)("div",{className:"__element p-2",children:a},"".concat(t.id))):a=e(t.sections,n+1):null}));return 1===n?Object(u.jsx)("div",{className:"p-6 border my-1 border-solid",children:l},"sect-".concat(n,":").concat(r)):Object(u.jsx)("div",{className:"__subsection",children:l},"subsect-".concat(n,":").concat(r))}))}(t,1);return Object(u.jsx)(u.Fragment,{children:N})},A=function(e){var t=e.title,n=e.text,a=e.buttons,r=e.onAccept,l=e.onReject;return Object(u.jsx)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-70 overflow-y-auto h-full w-full",children:Object(u.jsxs)("div",{className:"md:w-1/2 md:h-1/2 bg-white m-auto my-10 overflow-hidden",children:[Object(u.jsx)("div",{className:"flex w-full bg-gray-400 p-3 text-white text-2xl",children:Object(u.jsx)("div",{className:"flex-grow text-center",children:t})}),Object(u.jsx)("div",{className:"p-6 lg:text-lg md:text-md",children:n.map((function(e,t){return Object(u.jsx)("p",{className:"p-5 py-2",children:e},t)}))}),Object(u.jsxs)("div",{className:"flex pl-6",children:[Object(u.jsx)("button",{className:"flex-grow flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-5",onClick:r,children:a.accept}),Object(u.jsx)("button",{className:"flex-grow flex-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-5",onClick:l,children:a.reject})]})]})})},D=function(e,t){var n=e.filter((function(e){return e.thisId===t}));return n.length>1&&console.error("Found more than 1 page with id (".concat(t,")")),n[0]},L=function(e){var t=e.ruleSet,n=e.onSaveData,r=e.sessionId,l=null===t||void 0===t?void 0:t.pages,o=Object(a.useState)(null),i=Object(s.a)(o,2),d=i[0],b=i[1],h=Object(a.useState)(!1),j=Object(s.a)(h,2),m=j[0],f=j[1],g=Object(a.useState)(!1),v=Object(s.a)(g,2),x=v[0],p=v[1],O=Object(a.useState)({sessionId:r}),w=Object(s.a)(O,2),y=w[0],N=w[1],S=Object(a.useState)({show:!1}),C=Object(s.a)(S,2),k=C[0],I=C[1];if(Object(a.useEffect)((function(){var e;!0===(null===d||void 0===d||null===(e=d.settings)||void 0===e?void 0:e.allowProceed)&&f(!0)})),!l||l.length<1)return console.error("No pages defined in survey"),null;if(!d){var F=function(e){var t=e.filter((function(e){return null===e.prevId}));return t.length>1&&console.error("Found more than 1 root page"),t[0]}(l);return F&&F.thisId>=0&&b(F),null}var M,E=function(e){var a;if(d.nextId)if(null!==(a=d.settings)&&void 0!==a&&a.confirmMoveForward){var r,o=null===(r=d.settings)||void 0===r?void 0:r.confirmMoveForward,s=o.title,c=o.text,i=o.buttons;I({show:!0,title:s,text:c,buttons:i,onAccept:function(){I({show:!1}),f(!1),b(D(l,d.nextId))},onReject:function(){I({show:!1})}})}else f(!1),b(D(l,d.nextId));else y.surveyId=t.meta.surveyId,n(y),p(!0)},L=function(e){d.prevId&&b(D(l,d.prevId))},B=null;x?B=Object(u.jsx)("div",{className:"flex h-screen",children:Object(u.jsx)("div",{className:"text-black font-bold text-3xl m-auto text-4xl",children:"Umfrage beendet. Sie d\xfcrfen das Fenster jetzt schlie\xdfen."})}):B=(null===(M=d.sections)||void 0===M?void 0:M.length)>0?Object(u.jsx)(_,{defaultValues:y[d],formSections:d.sections,formName:"page:".concat(d.thisId.toString().padStart(2,"0")),onFormChanged:function(e,t){var n=y;n[e||"general"]=t,N(n),console.log("Survey Data:",n)},onFormComplete:function(e){f(e)}},"form_".concat(d.thisId)):Object(u.jsx)("div",{children:"no form data"});var H=function(){var e;return!0!==(null===(e=d.settings)||void 0===e?void 0:e.allowMoveBack)?null:Object(u.jsx)("button",{className:Object(c.a)({"m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline":!0===m}),type:"button",onClick:L,children:"Zur\xfcck"})}(),T=x?null:(null===d.nextId&&(d.labelNextPage="Umfrage beenden"),Object(u.jsx)("button",{disabled:!1===m&&"disabled",className:Object(c.a)({"m-5 bg-blue-300 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed":!1===m,"m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline":!0===m}),type:"button",onClick:E,children:d.labelNextPage||"Weiter"})),J=k.show,P=k.title,R=k.text,V=k.buttons,U=k.onAccept,Z=k.onReject,z=J?Object(u.jsx)(A,{title:P,text:R,buttons:V,onAccept:U,onReject:Z}):null;return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"flex justify-end",children:!x&&Object(u.jsxs)("div",{className:"text-white bg-gray-400 px-2 py-0",children:["Seite: ",d.thisId]})}),B,Object(u.jsxs)("div",{className:"flex items-center justify-between",children:[H,T]}),z]},d.thisId)},B=n(53),H=n.n(B),T=n(33),J=n.n(T),P=n(54),R=n(36);Object(P.a)({apiKey:"AIzaSyCFasaqUqOltO4gxPbNmR4gYQqusN2Zthg",authDomain:"escp-survey-2022.firebaseapp.com",databaseURL:"https://escp-survey-2022-default-rtdb.europe-west1.firebasedatabase.app",projectId:"escp-survey-2022",storageBucket:"escp-survey-2022.appspot.com",messagingSenderId:"105376003688",appId:"1:105376003688:web:8a1b08d2a162565648eddd"});var V=Object(R.a)(),U=J()(Math.random().toString()+(new Date).getUTCMilliseconds.toString()).toString(H.a.enc.Hex),Z=function(e){Object(R.c)(Object(R.b)(V,"surveys/".concat(e.surveyId,"/").concat(function(){var e=new Date;return e.getFullYear().toString()+(e.getMonth()+1).toString().padStart(2,"0")+e.getDate().toString().padStart(2,"0")+"_"+e.getHours().toString().padStart(2,"0")+e.getMinutes().toString().padStart(2,"0")+e.getSeconds().toString().padStart(2,"0")+e.getMilliseconds().toString().padStart(2,"0")}(),"_").concat(e.sessionId.toString().substr(0,10))),{data:e}).then((function(){console.log("Saved successfully!",e)})).catch((function(e){console.error("Not Saved successfully!")}))};var z=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){j.a.get("./content/survey.json").then((function(e){var t=e.data;t?r(t):console.log("Control data invalid.")}))}),[]),n?Object(u.jsx)("div",{className:"container max-w-screen-md ml-auto mr-auto",children:Object(u.jsx)(L,{ruleSet:n,onSaveData:Z,sessionId:U})}):Object(u.jsx)("div",{className:"flex h-screen",children:Object(u.jsx)("div",{className:"m-auto text-6xl",children:"Daten werden geladen..."})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),l(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),q()},60:function(e,t,n){},79:function(e,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.65e24570.chunk.js.map