(function(t){function e(e){for(var s,n,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)n=i[d],r[n]&&m.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),r=a.n(s);r.a},"1c47":function(t,e,a){"use strict";var s=a("8b87"),r=a.n(s);r.a},"2e72":function(t,e,a){"use strict";var s=a("fbd0"),r=a.n(s);r.a},"3dfd":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("router-view")],1)},r=[],o=(a("034f"),a("2877")),n={},i=Object(o["a"])(n,s,r,!1,null,null,null);e["a"]=i.exports},"41cb":function(t,e,a){"use strict";var s,r,o=a("2b0e"),n=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"header"}),t._m(0),a("div",{staticClass:"logo"}),a("Main")],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"record"}},[a("div",{attrs:{id:"outer"}}),a("div",{attrs:{id:"middle"}}),a("div",{attrs:{id:"center"}})])}],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[t._m(0),s("div",{staticClass:"pin"}),s("div",{attrs:{id:"footer"}},[s("div",{attrs:{id:"recording"}},[s("img",{attrs:{src:a("ec7e"),id:"pause"},on:{click:t.callRecord}}),s("img",{staticClass:"rec Record",attrs:{src:a("c3f8"),id:"rec"},on:{click:t.callUpload}}),s("img",{attrs:{src:a("c870"),id:"reset"},on:{click:t.callRecord}})]),s("img",{attrs:{src:a("a628"),id:"recText"},on:{click:function(t){}}})])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"record"}},[a("div",{staticClass:"recPlay",attrs:{id:"outer"}}),a("div",{staticClass:"recPlay",attrs:{id:"middle"}}),a("div",{staticClass:"recPlay",attrs:{id:"center"}})])}],d=[],m={name:"Recording",props:{msg:String},methods:{handleSubmit(t){console.log("submit button clicked");var e=new FormData;e.append("data",r),t.preventDefault(),$("#message").empty(),$.ajax({url:"ajax_php_file.php",type:"POST",data:e,contentType:!1,cache:!1,processData:!1,success:function(t){console.log("submitted successfully"),console.log(t),$("#message").html(t)}})},record(){navigator.mediaDevices.getUserMedia({audio:!0}).then(t=>{$(".rec").hasClass("Record")?(s=new MediaRecorder(t),s.start(3e3),console.log(s.state),console.log("recorder started"),$(".rec").css("background-color","red"),$(".rec").html("Recording"),$(".rec").addClass("Recording"),$(".rec").removeClass("Record"),d=[],s.ondataavailable=function(t){console.dir(t),d.push(t.data)}):(s.stop(),console.log(s.state),console.log("recorder stopped"),$(".rec").css("background-color","blue"),$(".rec").html("Record"),$(".rec").removeClass("Recording"),$(".rec").addClass("Record")),s.onstop=function(t){console.log("recorder stopped"),r=new Blob(d,{type:"audio/ogg; codecs=opus"}),d=[];var e=window.URL.createObjectURL(r);$(".downloadLink").attr("href",e);var a=Math.floor(1e7*Math.random()),s="mysound_"+a+".mp3";$(".downloadLink").attr("download",s),$(".downloadLink").attr("name",s),e,s}})},callUpload(){this.$router.push("upload")},callRecord(){this.$router.push("recorder")}}},p=m,v=(a("1c47"),a("2877")),f=Object(v["a"])(p,l,u,!1,null,"26b3c6de",null),h=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"content"}},[s("div",{attrs:{id:"recorder"}},[s("input",{staticClass:"recButton",attrs:{type:"button",value:"Record"},on:{click:function(e){t.callRecord()}}})]),t._m(0),s("img",{attrs:{src:a("b94f"),id:"arrow"},on:{click:function(e){t.move()}}}),s("div",{attrs:{id:"libray"}},[s("h2",[t._v("Here is what the community sounds like!")]),s("div",{staticClass:"audio",attrs:{id:"audio"}},[s("button",{staticClass:"player yellowPink",attrs:{value:1},on:{click:function(e){t.song()}}},[s("img",{staticClass:"play",attrs:{src:a("5830"),id:"playOne"}})]),s("button",{staticClass:"player pinkBlue",attrs:{value:2}},[s("img",{staticClass:"play",attrs:{src:a("5830"),id:"playTwo"}})]),s("button",{staticClass:"player pinkOrange",attrs:{value:3}},[s("img",{staticClass:"play",attrs:{src:a("5830"),id:"playThree"}}),s("audio",{attrs:{id:"songThree",src:"../assets/Coins%20Poured%20Out%2001.wav"}})]),s("button",{staticClass:"player limeGreen",attrs:{value:4}},[s("img",{staticClass:"play",attrs:{src:a("5830"),id:"playFour"}})]),s("button",{staticClass:"player pinkBlue",attrs:{value:5}},[s("img",{staticClass:"play",attrs:{src:a("5830"),id:"playFive"}})])])])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"carousel"}},[a("h3",[t._v("“Recording the sound of something that is within arms reach.”")])])}],_=a("f672"),y={name:"main",props:{msg:String},methods:{move(){Object(_["a"])(".audio",{duration:1800})},song(){console.log("test");var t=document.getElementById("songThree").play();void 0!==t&&t.then(t=>{}).catch(t=>{})},callRecord(){this.$router.push("recorder")}}},C=y,w=Object(v["a"])(C,g,b,!1,null,null,null),k=w.exports,x={name:"home",components:{Main:k},methods:{}},j=x,O=Object(v["a"])(j,i,c,!1,null,null,null),E=O.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{attrs:{id:"chimelogo"}}),a("div",{attrs:{id:"play"}},[a("input",{attrs:{type:"button",id:"playbutton"},on:{click:function(e){t.play()}}}),a("div",{attrs:{id:"soundwaves"}}),a("div",{attrs:{id:"playsymbol"}})]),t._m(0),a("h1",[t._v(t._s(t.msg))]),a("div",{attrs:{id:"content"}},[a("div",{attrs:{id:"recorder"}},[a("input",{staticClass:"recButton",attrs:{type:"button",value:"Upload"},on:{click:t.han}})])])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goodjob"},[a("h1",[t._v("Good Job")]),a("p",[t._v("Let’s hear what you just recorded and upload it if you’re happy.")])])}],S={name:"Upload",props:{msg:String},methods:{handleSubmit(t){console.log("submit button clicked");var e=new FormData;e.append("data",window.blob),t.preventDefault(),$("#message").empty(),$.ajax({url:"ajax_php_file.php",type:"POST",data:e,contentType:!1,cache:!1,processData:!1,success:function(t){console.log("submitted successfully"),console.log(t),$("#message").html(t)}})}}},P=S,D=(a("2e72"),Object(v["a"])(P,R,T,!1,null,"109cbff4",null)),M=D.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"header"},[a("div",{staticClass:"logo"}),a("a",{attrs:{id:"skip"},on:{click:t.callHome}},[t._v("Skip")])]),t._m(0),t._m(1),t._m(2)])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image"},[a("img",{attrs:{src:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"welcome"},[a("h1",[t._v("What Does the RIT community sound like?")]),a("p",[t._v("Chime aims to illustrate what a community sounds like, when it comes together, with a little help from you.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"next"}},[a("img",{staticClass:"bubbles",attrs:{src:""}}),a("img",{staticClass:"nextArrow",attrs:{src:""}})])}],L={},W=Object(v["a"])(L,U,B,!1,null,null,null),H=W.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"header"},[a("div",{staticClass:"logo"}),a("a",{attrs:{id:"skip"},on:{click:t.callHome}},[t._v("Skip")])]),t._m(0),t._m(1),t._m(2)])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image"},[a("img",{attrs:{src:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"welcome"},[a("h1",[t._v("What Does the RIT community sound like?")]),a("p",[t._v("Chime aims to illustrate what a community sounds like, when it comes together, with a little help from you.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"next"}},[a("img",{staticClass:"bubbles",attrs:{src:""}}),a("img",{staticClass:"nextArrow",attrs:{src:""}})])}],I={},J=Object(v["a"])(I,A,F,!1,null,null,null),G=J.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"header"},[a("div",{staticClass:"logo"}),a("a",{attrs:{id:"skip"},on:{click:t.callHome}},[t._v("Skip")])]),t._m(0),t._m(1),t._m(2)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image"},[a("img",{attrs:{src:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"welcome"},[a("h1",[t._v("What Does the RIT community sound like?")]),a("p",[t._v("Chime aims to illustrate what a community sounds like, when it comes together, with a little help from you.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"next"}},[a("img",{staticClass:"bubbles",attrs:{src:""}}),a("img",{staticClass:"nextArrow",attrs:{src:""}})])}],z={},K=Object(v["a"])(z,Q,q,!1,null,null,null),N=K.exports;o["a"].use(n["a"]);e["a"]=new n["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:E},{path:"/recorder",name:"recorder",component:h},{path:"/upload",name:"upload",component:M},{path:"/Welcome=1",name:"welcomeOne",component:H},{path:"/Welcome=2",name:"welcomeTwo",component:G},{path:"/Welcome=3",name:"welcomeThree",component:N}]})},"56d7":function(t,e,a){"use strict";a.r(e),function(t){var e=a("2b0e"),s=a("3dfd"),r=a("41cb"),o=(a("4989"),a("ab8b"),a("1157")),n=a.n(o);t.jQuery=n.a,t.$=n.a,e["a"].config.productionTip=!1,new e["a"]({router:r["a"],jQuery:n(),render:function(t){return t(s["a"])}}).$mount("#app")}.call(this,a("c8ba"))},5830:function(t,e,a){t.exports=a.p+"img/play.46f85aeb.svg"},"64a9":function(t,e,a){},"8b87":function(t,e,a){},a628:function(t,e,a){t.exports=a.p+"img/recText.9d90144c.svg"},b94f:function(t,e,a){t.exports=a.p+"img/arrow.5ac9c15c.svg"},c3f8:function(t,e,a){t.exports=a.p+"img/rec.30578b64.svg"},c870:function(t,e,a){t.exports=a.p+"img/reset.f8797f03.svg"},ec7e:function(t,e,a){t.exports=a.p+"img/pause.31ecb389.svg"},fbd0:function(t,e,a){}});
//# sourceMappingURL=app.0946bd6c.js.map