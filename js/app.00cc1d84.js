(function(t){function a(a){for(var e,n,l=a[0],c=a[1],o=a[2],f=0,d=[];f<l.length;f++)n=l[f],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);v&&v(a);while(d.length)d.shift()();return r.push.apply(r,o||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(e=!1)}e&&(r.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},i={app:0},r=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/TheF2E-Vue-CloudDrive/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var v=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"1fdc":function(t,a,s){"use strict";var e=s("a26f"),i=s.n(e);i.a},3107:function(t,a,s){"use strict";var e=s("6f05"),i=s.n(e);i.a},"411f":function(t,a,s){"use strict";var e=s("a7b8"),i=s.n(e);i.a},4241:function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),i=s("5c96"),r=s.n(i),n=(s("0fae"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1),s("Loading")],1)}),l=[],c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"slide-fade"}},[t.uploading?s("div",{staticClass:"cover"},[s("div",{staticClass:"lds-ellipsis"},[s("div"),s("div"),s("div"),s("div")])]):t._e()])},o=[],v={computed:{uploading:function(){return this.$store.state.isLoading}}},f=v,d=(s("746b"),s("2877")),u=Object(d["a"])(f,c,o,!1,null,"298b61ee",null),m=u.exports,_={components:{Loading:m}},p=_,h=(s("5c0b"),Object(d["a"])(p,n,l,!1,null,null,null)),C=h.exports,b=s("8c4f"),g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("NavbarMenu"),s("div",{staticClass:"my-drive"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("MY DRIVE")]),"home"===this.$store.state.currentNavbar?s("div",{staticClass:"inner-name"}):t._e(),""!==this.$store.state.currentNavbar&&"home"!==this.$store.state.currentNavbar?s("div",{staticClass:"inner-name"},[s("i",{staticClass:"\n        material-icons"},[t._v("keyboard_arrow_right")]),t._v(" "+t._s(this.$store.state.currentNavbar)+" ")]):t._e()]),s("div",{staticClass:"function-wrap"},[s("label",{staticClass:"btn btn-upload",attrs:{for:"inputUpload",title:"上傳檔案"}},[s("input",{attrs:{id:"inputUpload",type:"file",value:"upload"},on:{change:t.uploadFile}}),s("i",{staticClass:"material-icons"},[t._v("publish")])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),s("a",{staticClass:"btn btn-links",attrs:{href:"javascript:;",title:"刪除檔案"},on:{click:t.deleteFile}},[s("i",{staticClass:"material-icons"},[t._v("delete")])])])])]),t._m(5),s("div",{staticClass:"my-files"},[s("div",{staticClass:"container"},[t._m(6),s("div",{staticClass:"files-list"},[s("table",{staticClass:"table"},[t._m(7),s("tbody",t._l(t.files,function(a){return s("tr",{key:a.id,attrs:{tabindex:"0"}},[t._m(8,!0),s("td",{staticClass:"name"},[t._v(" "+t._s(a.name)+" ")]),s("td",[t._v("My Drive")]),s("td",[t._v("2019/8/20")]),s("td",[t._v("6 KB")])])}),0)])])])]),s("MyStorage")],1)},j=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-folder",attrs:{href:"javascript:;",title:"新增資料夾"}},[s("i",{staticClass:"material-icons"},[t._v("create_new_folder")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"line"},[s("span")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-starred",attrs:{href:"javascript:;",title:"標記星號"}},[s("i",{staticClass:"material-icons"},[t._v("star")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-download",attrs:{href:"javascript:;",title:"下載檔案"}},[s("i",{staticClass:"material-icons"},[t._v("get_app")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-links",attrs:{href:"javascript:;",title:"分享連結"}},[s("i",{staticClass:"material-icons"},[t._v("link")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my-folders"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("FOLDERS")]),s("div",{staticClass:"view-all"},[s("a",{staticClass:"btn btn-view-list",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_list")])]),s("a",{staticClass:"btn btn-view-comfy active",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_comfy")])])])]),s("div",{staticClass:"folders-list"},[s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Advertisement")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Business")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Commercial")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Customer")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("FILES")]),s("div",{staticClass:"view-all"},[s("a",{staticClass:"btn btn-view-list active",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_list")])]),s("a",{staticClass:"btn btn-view-comfy",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_comfy")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}}),s("th",{attrs:{scope:"col"}},[t._v("NAME "),s("i",{staticClass:"material-icons"},[t._v("arrow_downward")])]),s("th",{attrs:{scope:"col"}},[t._v("LOCATION")]),s("th",{attrs:{scope:"col"}},[t._v("LAST MODIFIED")]),s("th",{attrs:{scope:"col"}},[t._v("SIZE")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("th",{attrs:{scope:"row"}},[e("img",{attrs:{src:s("92b2"),alt:""}})])}],y=(s("7f7f"),s("59ca")),w=(s("588e"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-menu"},[e("div",{staticClass:"container"},[e("div",{staticClass:"menu-item"},[e("a",{staticClass:"logo",attrs:{href:"javascript:;"},on:{click:t.homeHandler}},[e("img",{attrs:{src:s("c319"),alt:""}})]),e("a",{staticClass:"btn btn-starred",class:{active:"starred"===this.$store.state.currentNavbar},attrs:{href:"javascript:;"},on:{click:t.starredHandler}},[t._v("STARRED")]),e("a",{staticClass:"btn btn-trash",class:{active:"trash"===this.$store.state.currentNavbar},attrs:{href:"javascript:;"},on:{click:t.trashHandler}},[t._v("TRASH")])]),t._m(0)])])}),$=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search-item"},[s("input",{attrs:{type:"text",placeholder:"Search"}}),s("a",{staticClass:"btn-search",attrs:{href:"javasctipt:;"}},[s("i",{staticClass:"material-icons"},[t._v("search")])])])}],E=s("2f62"),S={name:"NavbarMenu",props:{msg:String},data:function(){return{}},methods:{starredHandler:function(){"/starred"!==this.$router.currentRoute.path&&(this.$store.commit("setCurrentNavbar","starred"),this.$router.push("/starred"))},trashHandler:function(){"/trash"!==this.$router.currentRoute.path&&(this.$store.commit("setCurrentNavbar","trash"),this.$router.push("/trash"))},homeHandler:function(){"/"!==this.$router.currentRoute.path&&(this.$store.commit("setCurrentNavbar","home"),this.$router.push("/"))}}},O=S,N=(s("9173"),Object(d["a"])(O,w,$,!1,null,"163388a9",null)),I=N.exports,M=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my-storage"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[t._v("STORAGE")]),s("div",{staticClass:"size-wrap"},[s("p",{staticClass:"current-size"},[t._v("15 GB")]),s("p",{staticClass:"total-size"},[t._v("200 GB")])])])])}],k={name:"MyStorage",props:{msg:String}},D=k,L=(s("411f"),Object(d["a"])(D,M,A,!1,null,"fadf8ea6",null)),R=L.exports,F={apiKey:"AIzaSyDlqJiNI1HUabi0zRKU-buC87nzO6eObXg",authDomain:"thef2e-storage.firebaseapp.com",databaseURL:"https://thef2e-storage.firebaseio.com",projectId:"thef2e-storage",storageBucket:"thef2e-storage.appspot.com",messagingSenderId:"166729742363",appId:"1:166729742363:web:713d7290906d6ab71a20be"},x={name:"home",components:{NavbarMenu:I,MyStorage:R},data:function(){return{files:[]}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$store.commit("updateLoading",!0),y["apps"].length||y["initializeApp"](F);var a=y["storage"]().ref();a.listAll().then(function(a){console.log(a),t.files=a.items,t.$store.commit("updateLoading",!1)})},uploadFile:function(t){var a=this;this.$store.commit("updateLoading",!0);var s=t.target.files[0];console.log(s);var e="/"+s.name,i=y["storage"]().ref(e);i.put(s);i.put(s).then(function(t){a.init()})},deleteFile:function(t){}}},T=x,z=(s("3107"),Object(d["a"])(T,g,j,!1,null,"3dce15dd",null)),U=z.exports,H=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"starred"},[s("NavbarMenu"),s("div",{staticClass:"my-drive"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("MY DRIVE")]),"home"===this.$store.state.currentNavbar?s("div",{staticClass:"inner-name"}):t._e(),""!==this.$store.state.currentNavbar&&"home"!==this.$store.state.currentNavbar?s("div",{staticClass:"inner-name"},[s("i",{staticClass:"\n        material-icons"},[t._v("keyboard_arrow_right")]),t._v(" "+t._s(this.$store.state.currentNavbar)+" ")]):t._e()]),s("div",{staticClass:"function-wrap"},[s("label",{staticClass:"btn btn-upload",attrs:{for:"inputUpload",title:"上傳檔案"}},[s("input",{attrs:{id:"inputUpload",type:"file",value:"upload"},on:{change:t.uploadFile}}),s("i",{staticClass:"material-icons"},[t._v("publish")])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])])]),t._m(6),t._m(7),s("div",{staticClass:"my-files"},[s("div",{staticClass:"container"},[t._m(8),s("div",{staticClass:"files-list"},[s("table",{staticClass:"table"},[t._m(9),s("tbody",t._l(t.files,function(a){return s("tr",{key:a.id},[t._m(10,!0),s("td",{staticClass:"name"},[t._v(" "+t._s(a.name)+" ")]),s("td",[t._v("My Drive")]),s("td",[t._v("2019/8/20")]),s("td",[t._v("6 KB")])])}),0)])])])]),s("MyStorage")],1)},B=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-folder",attrs:{href:"javascript:;",title:"新增資料夾"}},[s("i",{staticClass:"material-icons"},[t._v("create_new_folder")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"line"},[s("span")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-starred",attrs:{href:"javascript:;",title:"標記星號"}},[s("i",{staticClass:"material-icons"},[t._v("star")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-download",attrs:{href:"javascript:;",title:"下載檔案"}},[s("i",{staticClass:"material-icons"},[t._v("get_app")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-links",attrs:{href:"javascript:;",title:"分享連結"}},[s("i",{staticClass:"material-icons"},[t._v("link")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-links",attrs:{href:"javascript:;",title:"刪除檔案"}},[s("i",{staticClass:"material-icons"},[t._v("delete")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my-starred"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("STARRED")]),s("a",{staticClass:"btn btn-showAll",attrs:{href:"javascript:;"}},[t._v("SHOW ALL")])]),s("div",{staticClass:"starred-list"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my-folders"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("FOLDERS")]),s("div",{staticClass:"view-all"},[s("a",{staticClass:"btn btn-view-list",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_list")])]),s("a",{staticClass:"btn btn-view-comfy active",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_comfy")])])])]),s("div",{staticClass:"folders-list"},[s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Advertisement")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Business")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Commercial")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Customer")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Facebook")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Growth Hacker")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Motion Design")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Web Practice")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("FILES")]),s("div",{staticClass:"view-all"},[s("a",{staticClass:"btn btn-view-list active",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_list")])]),s("a",{staticClass:"btn btn-view-comfy",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_comfy")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}}),s("th",{attrs:{scope:"col"}},[t._v("NAME")]),s("th",{attrs:{scope:"col"}},[t._v("LOCATION")]),s("th",{attrs:{scope:"col"}},[t._v("LAST MODIFIED")]),s("th",{attrs:{scope:"col"}},[t._v("SIZE")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("th",{attrs:{scope:"row"}},[e("img",{attrs:{src:s("729d"),alt:""}})])}],K={apiKey:"AIzaSyDlqJiNI1HUabi0zRKU-buC87nzO6eObXg",authDomain:"thef2e-storage.firebaseapp.com",databaseURL:"https://thef2e-storage.firebaseio.com",projectId:"thef2e-storage",storageBucket:"thef2e-storage.appspot.com",messagingSenderId:"166729742363",appId:"1:166729742363:web:713d7290906d6ab71a20be"},P={name:"starred",components:{NavbarMenu:I,MyStorage:R},data:function(){return{files:[]}},mounted:function(){this.init()},methods:{init:function(){var t=this;y["apps"].length||y["initializeApp"](K);var a=y["storage"]().ref();a.listAll().then(function(a){console.log(a),t.files=a.items})},uploadFile:function(t){var a=this,s=t.target.files[0];console.log(s);var e="/"+s.name,i=y["storage"]().ref(e);i.put(s);i.put(s).then(function(t){a.init()})}}},G=P,J=(s("72ee"),Object(d["a"])(G,H,B,!1,null,"20b30a0e",null)),V=J.exports,W=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"trash"},[s("NavbarMenu"),s("div",{staticClass:"my-drive"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("MY DRIVE")]),"home"===this.$store.state.currentNavbar?s("div",{staticClass:"inner-name"}):t._e(),""!==this.$store.state.currentNavbar&&"home"!==this.$store.state.currentNavbar?s("div",{staticClass:"inner-name"},[s("i",{staticClass:"\n        material-icons"},[t._v("keyboard_arrow_right")]),t._v(" "+t._s(this.$store.state.currentNavbar)+" ")]):t._e()]),s("div",{staticClass:"function-wrap"},[s("label",{staticClass:"btn btn-upload",attrs:{for:"inputUpload",title:"上傳檔案"}},[s("input",{attrs:{id:"inputUpload",type:"file",value:"upload"},on:{change:t.uploadFile}}),s("i",{staticClass:"material-icons"},[t._v("publish")])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])])]),t._m(6),t._m(7),s("div",{staticClass:"my-files"},[s("div",{staticClass:"container"},[t._m(8),s("div",{staticClass:"files-list"},[s("table",{staticClass:"table"},[t._m(9),s("tbody",t._l(t.files,function(a){return s("tr",{key:a.id},[t._m(10,!0),s("td",{staticClass:"name"},[t._v(" "+t._s(a.name)+" ")]),s("td",[t._v("My Drive")]),s("td",[t._v("2019/8/20")]),s("td",[t._v("6 KB")])])}),0)])])])]),s("MyStorage")],1)},q=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-folder",attrs:{href:"javascript:;",title:"新增資料夾"}},[s("i",{staticClass:"material-icons"},[t._v("create_new_folder")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"line"},[s("span")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-starred",attrs:{href:"javascript:;",title:"標記星號"}},[s("i",{staticClass:"material-icons"},[t._v("star")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-download",attrs:{href:"javascript:;",title:"下載檔案"}},[s("i",{staticClass:"material-icons"},[t._v("get_app")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-links",attrs:{href:"javascript:;",title:"分享連結"}},[s("i",{staticClass:"material-icons"},[t._v("link")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn btn-links",attrs:{href:"javascript:;",title:"刪除檔案"}},[s("i",{staticClass:"material-icons"},[t._v("delete")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my-starred"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("STARRED")]),s("a",{staticClass:"btn btn-showAll",attrs:{href:"javascript:;"}},[t._v("SHOW ALL")])]),s("div",{staticClass:"starred-list"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my-folders"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("FOLDERS")]),s("div",{staticClass:"view-all"},[s("a",{staticClass:"btn btn-view-list",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_list")])]),s("a",{staticClass:"btn btn-view-comfy active",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_comfy")])])])]),s("div",{staticClass:"folders-list"},[s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Advertisement")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Business")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Commercial")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Customer")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Facebook")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Growth Hacker")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Motion Design")])]),s("a",{staticClass:"folder",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("folder")]),s("div",{staticClass:"folder-name"},[t._v("Web Practice")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title"},[s("div",{staticClass:"name"},[t._v("FILES")]),s("div",{staticClass:"view-all"},[s("a",{staticClass:"btn btn-view-list active",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_list")])]),s("a",{staticClass:"btn btn-view-comfy",attrs:{href:"javascript:;"}},[s("i",{staticClass:"material-icons"},[t._v("view_comfy")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}}),s("th",{attrs:{scope:"col"}},[t._v("NAME")]),s("th",{attrs:{scope:"col"}},[t._v("LOCATION")]),s("th",{attrs:{scope:"col"}},[t._v("LAST MODIFIED")]),s("th",{attrs:{scope:"col"}},[t._v("SIZE")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("th",{attrs:{scope:"row"}},[e("img",{attrs:{src:s("729d"),alt:""}})])}],X={apiKey:"AIzaSyDlqJiNI1HUabi0zRKU-buC87nzO6eObXg",authDomain:"thef2e-storage.firebaseapp.com",databaseURL:"https://thef2e-storage.firebaseio.com",projectId:"thef2e-storage",storageBucket:"thef2e-storage.appspot.com",messagingSenderId:"166729742363",appId:"1:166729742363:web:713d7290906d6ab71a20be"},Y={name:"trash",components:{NavbarMenu:I,MyStorage:R},data:function(){return{files:[]}},mounted:function(){this.init()},methods:{init:function(){var t=this;y["apps"].length||y["initializeApp"](X);var a=y["storage"]().ref();a.listAll().then(function(a){console.log(a),t.files=a.items})},uploadFile:function(t){var a=this,s=t.target.files[0];console.log(s);var e="/"+s.name,i=y["storage"]().ref(e);i.put(s);i.put(s).then(function(t){a.init()})}}},Z=Y,Q=(s("1fdc"),Object(d["a"])(Z,W,q,!1,null,"41c57ec0",null)),tt=Q.exports;e["default"].use(b["a"]);var at=new b["a"]({mode:"history",base:"/TheF2E-Vue-CloudDrive/",routes:[{path:"/",name:"home",component:U},{path:"/starred",name:"starred",component:V},{path:"/trash",name:"trash",component:tt},{path:"*",redirect:"/"}]});e["default"].use(E["a"]);var st=new E["a"].Store({state:{isLoading:!1,currentNavbar:""},mutations:{updateLoading:function(t,a){t.isLoading=a},setCurrentNavbar:function(t,a){t.currentNavbar=a}},actions:{}});e["default"].config.productionTip=!1,e["default"].use(r.a),new e["default"]({router:at,store:st,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";var e=s("e332"),i=s.n(e);i.a},"5d05":function(t,a,s){},"6f05":function(t,a,s){},"729d":function(t,a,s){t.exports=s.p+"img/ic-excel.d72f2ed4.svg"},"72ee":function(t,a,s){"use strict";var e=s("4241"),i=s.n(e);i.a},"746b":function(t,a,s){"use strict";var e=s("b812"),i=s.n(e);i.a},9173:function(t,a,s){"use strict";var e=s("5d05"),i=s.n(e);i.a},"92b2":function(t,a,s){t.exports=s.p+"img/ic_image_24px.a932a779.svg"},a26f:function(t,a,s){},a7b8:function(t,a,s){},b812:function(t,a,s){},c319:function(t,a,s){t.exports=s.p+"img/ic-logo-drive.57c16604.svg"},e332:function(t,a,s){}});
//# sourceMappingURL=app.00cc1d84.js.map