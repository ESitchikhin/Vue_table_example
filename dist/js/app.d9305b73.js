(function(e){function t(t){for(var n,o,c=t[0],i=t[1],u=t[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1725:function(e){e.exports=JSON.parse('{"Items":[{"Id":"395356","DateSent":"2020-12-30","Company":"Openlane","Preferred":"1","Quote":[{"Amount":500,"Currency":"USD","Years":5,"CouponType":"FIX","Spread":50,"Yield":0.873,"3MLSpread":86},{"Amount":500,"Currency":"CAD","Years":10,"CouponType":"FIX","Spread":50,"Yield":1.209,"3MLSpread":13},{"Amount":500,"Currency":"EUR","Years":4,"CouponType":"FIX","Spread":35,"Yield":-0.136,"3MLSpread":49},{"Amount":500,"Currency":"EUR","Years":8,"CouponType":"FIX","Spread":60,"Yield":0.248,"3MLSpread":81},{"Amount":500,"Currency":"EUR","Years":12,"CouponType":"FIX","Spread":90,"Yield":0.721,"3MLSpread":117},{"Amount":500,"Currency":"USD","Years":10,"CouponType":"FIX","Spread":90,"Yield":1.828,"3MLSpread":88},{"Amount":500,"Currency":"USD","Years":40,"CouponType":"FIX","Spread":130,"Yield":2.965,"3MLSpread":152},{"Amount":500,"Currency":"EUR","Years":12,"CouponType":"FRN","Spread":92,"Yield":0.718,"3MLSpread":112},{"Amount":500,"Currency":"USD","Years":10,"CouponType":"FRN","Spread":94,"Yield":1.826,"3MLSpread":86},{"Amount":500,"Currency":"USD","Years":40,"CouponType":"FRN","Spread":128,"Yield":2.962,"3MLSpread":150}]},{"Id":"395347","DateSent":"2020-12-30","Company":"Yearin","Preferred":"0","Quote":[{"Amount":500,"Currency":"USD","Years":10,"CouponType":"FIX","Spread":75,"Yield":1.678,"3MLSpread":74}]},{"Id":"395284","DateSent":"2020-12-18","Company":"Condax","Preferred":"0","Quote":[{"Amount":300,"Currency":"USD","Years":10,"CouponType":"FIX","Spread":100,"Yield":null,"3MLSpread":null}]},{"Id":null,"DateSent":null,"Company":"Opentech","Preferred":"1","Quote":null},{"Id":null,"DateSent":null,"Company":"Golddex","Preferred":"1","Quote":null},{"Id":null,"DateSent":null,"Company":"Warephase","Preferred":"1","Quote":null},{"Id":null,"DateSent":null,"Company":"Donware","Preferred":"1","Quote":null},{"Id":null,"DateSent":null,"Company":"Faxquote","Preferred":"1","Quote":null}]}')},3980:function(e,t,r){"use strict";r("d8f4")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var n=r("2b0e"),a=r("5f5b"),s=r("b1e0");r("ab8b"),r("2dd8");n["default"].use(a["a"]),n["default"].use(s["a"]);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Mockup")],1)},c=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("b-row",{staticClass:"text-left mb-3"},[r("b-col",[r("FilterButtons")],1)],1),r("b-row",{staticClass:"text-left mb-3"},[r("b-col",{attrs:{cols:"4"}},[r("FilterInput")],1)],1),r("DataTable",{attrs:{headers:e.tableHeaders,footer:e.tableFooter,items:e.tableItems,parameters:e.parameters,"display-parameter":e.displayParameter,filter:e.filterByCompany,"default-sort-by":"dateSet","format-date":"%d-%b-%y"}})],1)},u=[],l=(r("96cf"),r("1da1")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-button-group",{staticClass:"mr-4",attrs:{size:"sm"}},e._l(e.currencies,(function(t){return r("b-button",{key:t,class:{active:t===e.selectedCurrency},attrs:{variant:"outline-primary"},on:{click:function(r){return e.selectCurrency(t)}}},[e._v(e._s(t))])})),1),r("b-button-group",{staticClass:"mr-4",attrs:{size:"sm"}},e._l(e.yrs,(function(t){return r("b-button",{key:t,class:{active:-1!==e.selectedYears.indexOf(t)},attrs:{variant:"outline-primary"},on:{click:function(r){return e.toggleYear(t)}}},[e._v(e._s(t))])})),1),r("b-button-group",{staticClass:"mr-4",attrs:{size:"sm"}},e._l(e.parameters,(function(t){return r("b-button",{key:t,class:{active:t===e.displayParameter},attrs:{variant:"outline-primary"},on:{click:function(r){return e.selectParameter(t)}}},[e._v(e._s(t))])})),1)],1)},d=[],f={name:"FilterButtons",created:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{currencies:function(){return this.$store.getters.currencies},yrs:function(){return this.$store.getters.yrs},parameters:function(){return this.$store.getters.parameters},selectedCurrency:function(){return this.$store.getters.selectedCurrency},selectedYears:function(){return this.$store.getters.selectedYears},displayParameter:function(){return this.$store.getters.displayParameter}},watch:{selectedCurrency:function(e,t){""!==t&&this.$store.dispatch("selectAllYears")}},methods:{selectCurrency:function(e){this.$store.dispatch("selectCurrency",e)},toggleYear:function(e){this.$store.dispatch("toggleSelectedYear",e)},selectParameter:function(e){this.$store.dispatch("selectDisplayParameter",e)}}},h=f,y=r("2877"),m=Object(y["a"])(h,p,d,!1,null,"5dda041c",null),g=m.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form-input",{attrs:{placeholder:"Filter by company name ..."},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}})},v=[],S={name:"FilterInput",data:function(){return{filterValue:""}},watch:{filterValue:function(e){this.$store.dispatch("setFilterByCompany",e)}}},C=S,_=Object(y["a"])(C,b,v,!1,null,"4e5670a9",null),E=_.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("Header",{attrs:{headers:e.headers,"sort-by":e.sortBy,"sort-direction":e.sortDirection,"remaining-length":e.remainingLength,"count-without-length":e.countWithoutLength},on:{resort:e.resortData}}),r("Items",{attrs:{headers:e.headers,items:e.items,"sort-by":e.sortBy,"sort-direction":e.sortDirection,filter:e.filter,parameters:e.parameters,"display-parameter":e.displayParameter,"remaining-length":e.remainingLength,"count-without-length":e.countWithoutLength,"format-date":e.formatDate}}),r("Average",{attrs:{headers:e.headers,footer:e.footer,"remaining-length":e.remainingLength,"count-without-length":e.countWithoutLength}})],1)},D=[],x=(r("13d5"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",e._l(e.headers,(function(t){return r("b-col",{key:t.text,class:{"px-0":t.base,"px-1":!t.base},attrs:{cols:e.calculateLength(t)}},[Object.prototype.hasOwnProperty.call(t,"subItems")?[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",{staticClass:"header__text header__text_subitem py-1",class:t.align},[e._v(e._s(t.text))])])],1),r("b-row",e._l(t.subItems,(function(n){return r("b-col",{key:n.text,staticClass:"px-0",attrs:{cols:e.calculateSubItemLength(n,e.calculateLength(t))}},[r("div",{staticClass:"header__text header__text_base py-1",class:n.align},[e._v(" "+e._s(n.text)+" ")])])})),1)]:r("div",{staticClass:"header__text header__text_base py-1",class:t.align},[e._v(" "+e._s(t.text)+" "),r("div",{staticClass:"px-2",staticStyle:{"justify-content":"center"}},[r("a",{class:{active:t.value===e.sortBy},attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),e.resort(t)}}},[t.sortable?r("b-icon",{attrs:{icon:e.getSortIcon(t),"aria-hidden":"true"}}):e._e()],1)])])],2)})),1)}),I=[];r("c975"),r("a9e3"),r("ac1f"),r("1276");function A(e,t,r){var n=0;return n=Object.prototype.hasOwnProperty.call(e,"subItems")?e.subItems.reduce((function(e,n){return Object.prototype.hasOwnProperty.call(n,"length")?e+n.length:e+t/r}),0):Object.prototype.hasOwnProperty.call(e,"length")?e.length:t/r,n}function Y(e,t,r,n){var a=12;return Object.prototype.hasOwnProperty.call(e,"length")?a*e.length/t:a*(r/n)/t}function w(e,t){var r=t.split(".");return Object.prototype.hasOwnProperty.call(e,r[0])&&Object.prototype.hasOwnProperty.call(e[r[0]],r[1])?e[r[0]][r[1]]:""}var L={name:"Header",props:{headers:{type:Array,required:!0,validator:function(e){return e.length>0}},sortBy:{type:String,required:!0},sortDirection:{type:String,required:!0,validator:function(e){return-1!==["desc","asc"].indexOf(e)}},remainingLength:{type:Number,required:!0},countWithoutLength:{type:Number,required:!0}},data:function(){return{}},computed:{},methods:{calculateLength:function(e){return A(e,this.remainingLength,this.countWithoutLength)},calculateSubItemLength:function(e,t){return Y(e,t,this.remainingLength,this.countWithoutLength)},getSortIcon:function(e){var t="caret-up-fill";return this.sortBy===e.value&&(t="asc"===this.sortDirection?"caret-up-fill":"caret-down-fill"),t},resort:function(e){this.$emit("resort",e)}}},P=L,T=(r("6c97"),Object(y["a"])(P,x,I,!1,null,"8a60abc4",null)),j=T.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._l(e.displayItems,(function(t,n){return[r("b-row",{key:n},e._l(e.headers,(function(n,a){var s;return r("b-col",{key:n.text,staticClass:"px-0",class:{"px-0":n.base,"px-1":!n.base},attrs:{cols:e.calculateLength(n)}},[Object.prototype.hasOwnProperty.call(n,"subItems")?[r("b-row",{staticStyle:{height:"100%"}},[r("b-col",{attrs:{cols:"12"}},[r("b-row",{staticStyle:{height:"100%"}},e._l(n.subItems,(function(a){var s;return r("b-col",{key:a.text,staticClass:"px-0",attrs:{cols:e.calculateSubItemLength(a,e.calculateLength(n))}},[r("div",{staticClass:"item__text item__text_base",class:(s={},s[a.align]=!0,s["display"]=t.isDisplay,s["inactive"]=!t.isActive,s)},[r("div",{staticClass:"py-1",class:{min:a.highlight&&e.getSubItemValue(t,a.value)&&e.getSubItemMinValue(e.minBySubItems,a.value)===e.getSubItemValue(t,a.value)}},[e._v(e._s(e.getSubItemValue(t,a.value))+" ")])])])})),1)],1)],1)]:r("div",{staticClass:"item__text item__text_base py-1",class:(s={},s[n.align]=!0,s["display"]=t.isDisplay,s["inactive"]=!t.isActive,s)},[r("div",{staticStyle:{"justify-content":"center"}},[0===a&&t.isDisplay?r("a",{staticClass:"px-2",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),e.openParams(t)}}},[r("b-icon",{attrs:{icon:e.getGroupIcon(t),"aria-hidden":"true"}})],1):e._e()]),e._v(" "+e._s(t[n.value])+" ")])],2)})),1)]}))],2)},M=[],$=(r("4de4"),r("7db0"),r("4160"),r("caad"),r("a434"),r("2532"),r("159b"),r("5530")),F=r("5698"),k={name:"Items",props:{headers:{type:Array,required:!0,validator:function(e){return e.length>0}},items:{type:Array,required:!0,validator:function(e){return e.length>0}},sortBy:{type:String,required:!0},sortDirection:{type:String,required:!0,validator:function(e){return-1!==["desc","asc"].indexOf(e.toLowerCase())}},filter:{type:String},parameters:{type:Array,required:!0},displayParameter:{type:String,required:!0},remainingLength:Number,countWithoutLength:Number,formatDate:String},data:function(){return{openedParams:[]}},watch:{item:{handler:function(){this.setupMinValue()},deep:!0}},computed:{sortItems:function(){var e=this,t=[],r=this.headers.find((function(t){return t.value===e.sortBy}));return r&&-1!==["desc","asc"].indexOf(this.sortDirection.toLowerCase())&&this.items.forEach((function(n){var a=!0;if(e.filter&&e.filter.length>0&&e.headers.forEach((function(t){t.filterable&&(a=String.prototype.includes.call(n[t.value].toLowerCase(),e.filter.toLowerCase()))})),a){for(var s=Math.floor(t.length/2)||1,o=t.length-1,c=!0,i=!1;c&&o>=0&&o<t.length;){if(n.isActive&&t[o].isActive||!n.isActive&&!t[o].isActive){var u=n[e.sortBy],l=t[o][e.sortBy],p=o+1<t.length?t[o+1][e.sortBy]:"",d=r.isDate?e.compareDate(new Date(u),new Date(l)):String.prototype.localeCompare.call(u,l),f=o+1<t.length?r.isDate?e.compareDate(new Date(u),new Date(p)):String.prototype.localeCompare.call(u,p):"desc"===e.sortDirection.toLowerCase()?1:-1,h="desc"===e.sortDirection.toLowerCase()?d<=0:d>0,y="desc"===e.sortDirection.toLowerCase()?f<=0:f>0;h&&y?i=!0:h&&!y?(c=!1,o++):o-1>0&&!n.isActive&&t[o-1].isActive?c=!1:i=!1}else i=!(n.isActive&&!t[o].isActive);c&&(s=Math.floor(i?(t.length-o)/2:o/2)||1,o=i?o+s:o-s)}t.splice(o>0?o:0,0,n)}})),t},displayItems:function(){var e,t,r,n=this,a=[],s=[],o={},c=Object(F["a"])(this.formatDate);return this.sortItems.forEach((function(i){e=!0,t=!1,o=Object($["a"])(Object($["a"])({},i),{},{isDisplay:!1}),n.headers.forEach((function(a){a.isDate&&(o[a.value]=i[a.value]?c(i[a.value]):""),a.base&&(i.param!==n.displayParameter?(a.param&&i.isActive&&(e=-1!==n.openedParams.indexOf(o[a.value]),t=-1!==n.openedParams.indexOf(o[a.value])&&r!==i[a.value]),o[a.value]=a.param&&i.isActive?i.param:i.isActive?"":o[a.value]):(o.isDisplay=!0,a.param&&i.isActive&&(r=i[a.value])))})),t?s.push(o):e&&(a.push(o),s.forEach((function(e){return a.push(e)})),s=[])})),a},minBySubItems:function(){var e=this,t={};return this.items.forEach((function(r){r.param===e.displayParameter&&e.headers.forEach((function(n){Object.prototype.hasOwnProperty.call(n,"subItems")&&n.subItems.forEach((function(n){var a=e.getSubItemValue(r,n.value),s=e.getSubItemMinValue(t,n.value)||1/0;a&&parseFloat(a)<parseFloat(s)&&(t=e.setSubItemMinValue(t,n.value,a))}))}))})),t}},methods:{compareDate:function(e,t){return e>t?1:t>e?-1:0},setupMinValue:function(){},calculateLength:function(e){return A(e,this.remainingLength,this.countWithoutLength)},calculateSubItemLength:function(e,t){return Y(e,t,this.remainingLength,this.countWithoutLength)},getSubItemValue:function(e,t){return w(e,t)},getSubItemMinValue:function(e,t){return w(e,t)},setSubItemMinValue:function(e,t,r){var n=Object($["a"])({},e),a=t.split(".");return Object.prototype.hasOwnProperty.call(n,a[0])||(n[a[0]]={}),n[a[0]][a[1]]=r,n},getGroupIcon:function(e){return-1===this.openedParams.indexOf(e[this.headers.find((function(e){return e.param})).value])?"chevron-right":"chevron-down"},openParams:function(e){var t=e[this.headers.find((function(e){return e.param})).value];-1===this.openedParams.indexOf(t)?this.openedParams.push(t):this.openedParams.splice(this.openedParams.indexOf(t),1)}}},B=k,V=(r("3980"),Object(y["a"])(B,R,M,!1,null,"787d0758",null)),Q=V.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticStyle:{border:"1px solid #2c3e50"}},e._l(e.headers,(function(t){return r("b-col",{key:t.text,class:{"px-0":t.base,"px-1":!t.base},attrs:{cols:e.calculateLength(t)}},[Object.prototype.hasOwnProperty.call(t,"subItems")?[r("b-row",{staticStyle:{height:"100%"}},[r("b-col",{attrs:{cols:"12"}},[r("b-row",{staticStyle:{height:"100%"}},e._l(t.subItems,(function(n){var a;return r("b-col",{key:n.text,staticClass:"px-0",attrs:{cols:e.calculateSubItemLength(n,e.calculateLength(t))}},[r("div",{staticClass:"average_text py-3",class:(a={},a[n.align]=!0,a)},[e._v(" "+e._s(e.getSubItemValue(e.footer,n.value))+" ")])])})),1)],1)],1)]:t.param?r("div",{staticClass:"average__text py-3",class:t.align},[e._v(" "+e._s(e.footer[t.value])+" ")]):e._e()],2)})),1)},N=[],U={name:"Average",props:{headers:{type:Array,required:!0,validator:function(e){return e.length>0}},footer:{type:Object,required:!0},remainingLength:Number,countWithoutLength:Number},methods:{calculateLength:function(e){return A(e,this.remainingLength,this.countWithoutLength)},calculateSubItemLength:function(e,t){return Y(e,t,this.remainingLength,this.countWithoutLength)},getSubItemValue:function(e,t){return w(e,t)}}},W=U,X=(r("f8e1"),Object(y["a"])(W,q,N,!1,null,"34b30ab3",null)),H=X.exports,z={name:"DataTable",components:{Average:H,Items:Q,Header:j},props:{headers:{type:Array,required:!0,validator:function(e){return e.length>0}},footer:{type:Object},items:{type:Array,required:!0,validator:function(e){return e.length>0}},parameters:{type:Array,required:!0},displayParameter:{type:String,required:!0},defaultSortBy:{type:String,required:!0},filter:{type:String},formatDate:{type:String}},data:function(){return{sortBy:"",sortDirection:"desc"}},mounted:function(){this.sortBy=this.defaultSortBy},computed:{remainingLength:function(){var e=this.headers.reduce((function(e,t){return Object.prototype.hasOwnProperty.call(t,"subItems")?t.subItems.reduce((function(e,t){return Object.prototype.hasOwnProperty.call(t,"length")?e+t.length:e}),e):Object.prototype.hasOwnProperty.call(t,"length")?e+t.length:e}),0);return 12-e>0?12-e:0},countWithoutLength:function(){var e=this.headers.reduce((function(e,t){return Object.prototype.hasOwnProperty.call(t,"subItems")?t.subItems.reduce((function(e,t){return Object.prototype.hasOwnProperty.call(t,"length")?e:e+1}),e):Object.prototype.hasOwnProperty.call(t,"length")?e:e+1}),0);return e||1},numberD:function(){return parseFloat(this.items[1]["10 YRS"]["FIX"])}},methods:{resortData:function(e){e.value===this.sortBy?this.sortDirection="desc"===this.sortDirection?"asc":"desc":(this.sortBy=e.value,this.sortDirection="desc")}}},G=z,J=Object(y["a"])(G,O,D,!1,null,"7be83b62",null),K=J.exports,Z={name:"Mockup",components:{DataTable:K,FilterInput:E,FilterButtons:g},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchData");case 2:return t.next=4,e.$store.dispatch("selectCurrency",e.currencies[0]);case 4:return t.next=6,e.$store.dispatch("selectAllYears");case 6:return t.next=8,e.$store.dispatch("selectDisplayParameter",e.parameters[0]);case 8:case"end":return t.stop()}}),t)})))()},computed:{currencies:function(){return this.$store.getters.currencies},yrs:function(){return this.$store.getters.yrs},parameters:function(){return this.$store.getters.parameters},selectedCurrency:function(){return this.$store.getters.selectedCurrency},selectedYears:function(){return this.$store.getters.selectedYears},displayParameter:function(){return this.$store.getters.displayParameter},filterByCompany:function(){return this.$store.getters.filterByCompanyStr},couponTypes:function(){return this.$store.getters.couponTypes},tableItems:function(){return this.$store.getters.resultData},tableHeaders:function(){return this.$store.getters.headersData},tableFooter:function(){return this.$store.getters.averageData}}},ee=Z,te=Object(y["a"])(ee,i,u,!1,null,"e4dbb2ba",null),re=te.exports,ne={name:"App",components:{Mockup:re}},ae=ne,se=(r("034f"),Object(y["a"])(ae,o,c,!1,null,null,null)),oe=se.exports,ce=(r("99af"),r("c740"),r("a630"),r("d81d"),r("d3b7"),r("25f0"),r("6062"),r("3ca3"),r("ddb0"),r("b85c")),ie=r("2f62"),ue=r("1725");n["default"].use(ie["a"]);var le=new ie["a"].Store({getters:{selectedCurrency:function(e){return e.selectedCurrency},selectedYears:function(e){return e.selectedYears},parameters:function(e){return e.parameters},displayParameter:function(e){return e.displayParameter},currencies:function(e){var t=new Set;return e.data.Items&&e.data.Items.forEach((function(e){e.Quote&&e.Quote.forEach((function(e){e.Currency?t.add(e.Currency):t.add("USD")}))})),Array.from(t)},yrs:function(e){var t=new Set;return e.data.Items&&e.data.Items.forEach((function(r){r.Quote&&r.Quote.forEach((function(r){var n=r.Currency?r.Currency===e.selectedCurrency:"USD"===e.selectedCurrency;n&&r.Years&&t.add(+r.Years)}))})),Array.prototype.sort.call(Array.from(t),(function(e,t){return e-t})).map((function(e){return"".concat(e," YRS")}))},couponTypes:function(e){var t=new Set;return e.data.Items&&e.data.Items.forEach((function(r){r.Quote&&r.Quote.forEach((function(r){var n=r.Currency?r.Currency===e.selectedCurrency:"USD"===e.selectedCurrency;n&&r.CouponType&&t.add(r.CouponType)}))})),Array.prototype.sort.call(Array.from(t))},filterByCompanyStr:function(e){return e.filterByCompanyStr},headersData:function(e,t){var r=[{text:"DATE SENT",value:"dateSet",align:"start",sortable:!0,isDate:!0,length:2,base:!0},{text:"COMPANY",value:"company",align:"start",sortable:!0,filterable:!0,base:!0,param:!0}],n={};return t.yrs.forEach((function(a){if(-1!==Array.prototype.indexOf.call(e.selectedYears,a)){n={text:a,align:"center"};var s=[];t.couponTypes.forEach((function(e){s.push({text:e,value:"".concat(a,".").concat(e),align:"center",length:t.couponTypes.length>1?1:2,highlight:"FIX"===e})})),n["subItems"]=s,r.push(n)}})),r},resultData:function(e,t){var r=[];if(e.data.Items){var n,a=Object(ce["a"])(e.data.Items);try{var s=function(){var a=n.value,s=a.Company,o=a.Preferred,c={company:s,preferred:o,dateSet:"",isActive:!1};if(a.DateSent&&a.Quote&&a.Quote.length>0){var i=[],u=new Date(a.DateSent),l=!1;e.parameters.forEach((function(r){var n={company:s,param:r,dateSet:u,isActive:!0};t.yrs.forEach((function(r){-1!==Array.prototype.indexOf.call(e.selectedYears,r)&&(n[r]={},t.couponTypes.forEach((function(e){n[r][e]=""})))})),i.push(n)})),a.Quote.forEach((function(t){var r="".concat(t.Years," YRS");t.Currency===e.selectedCurrency&&-1!==Array.prototype.indexOf.call(e.selectedYears,r)&&e.parameters.forEach((function(e){var n=i.findIndex((function(t){return t.param===e})),a=t[e];if(a){switch(l=!0,e){case"Spread":case"3MLSpread":a=a>0?"+".concat(a,"bp"):"-".concat(a,"bp");break;case"Yield":if(a=(Math.round(1e3*a)/1e3).toString(),a.length<5)for(var s=a.length;s<5;s++)a+="0";a+="%";break}i[n][r][t.CouponType]=a}}))})),l?i.forEach((function(e){return r.push(e)})):r.push(c)}else r.push(c)};for(a.s();!(n=a.n()).done;)s()}catch(o){a.e(o)}finally{a.f()}}return r},averageData:function(e,t){var r={dateSet:"",company:"Average by "+t.displayParameter},n={},a={};if(t.yrs.forEach((function(s){-1!==Array.prototype.indexOf.call(e.selectedYears,s)&&(r[s]={},n[s]={},a[s]={},t.couponTypes.forEach((function(e){r[s][e]=0,n[s][e]=0,a[s][e]=0})))})),e.data.Items){var s,o=Object(ce["a"])(e.data.Items);try{for(o.s();!(s=o.n()).done;){var c=s.value;c.Quote&&c.Quote.length>0&&c.Quote.forEach((function(r){var s="".concat(r.Years," YRS");r.Currency===e.selectedCurrency&&-1!==Array.prototype.indexOf.call(e.selectedYears,s)&&("10 YRS"===s&&"FIX"===r.CouponType&&"Yield"===t.displayParameter&&(n[s][r.CouponType]=n[s][r.CouponType]),r[t.displayParameter]&&(n[s][r.CouponType]+=parseFloat(r[t.displayParameter]),a[s][r.CouponType]+=1))}))}}catch(f){o.e(f)}finally{o.f()}}for(var i in n)for(var u in n[i]){var l=0;switch(t.displayParameter){case"Spread":case"3MLSpread":l=n[i][u]>0&&a[i][u]>0?"+".concat(Math.round(n[i][u]/a[i][u]),"bp").toString():"";break;case"Yield":if(l=0!=n[i][u]&&a[i][u]>0?n[i][u]/(a[i][u]||1):0,l=Math.round(1e3*l)/1e3,0!=l){var p=5;if(l<0&&(p=6),l=l.toString(),l.length<p)for(var d=l.length;d<5;d++)l+="0";l+="%"}else l="";break}r[i][u]=l}return r}},state:{data:{},selectedCurrency:"",selectedYears:[],parameters:["Spread","Yield","3MLSpread"],displayParameter:"",filterByCompanyStr:""},mutations:{SET_DATA:function(e,t){e.data=t},SET_SELECTED_CURRENCY:function(e,t){e.selectedCurrency=t},ADD_YEAR_TO_SELECTED_YEARS:function(e,t){e.selectedYears.push(t)},REMOVE_YEAR_FROM_SELECTED_YEARS:function(e,t){e.selectedYears.splice(t,1)},SET_SELECTED_YEARS:function(e,t){e.selectedYears=t},SET_DISPLAY_PARAMETER:function(e,t){e.displayParameter=t},SET_FILTER_BY_COMPANY:function(e,t){e.filterByCompanyStr=t}},actions:{fetchData:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.commit("SET_DATA",ue);case 2:case"end":return t.stop()}}),t)})))()},selectCurrency:function(e,t){-1!==Array.prototype.indexOf.call(e.getters.currencies,t)&&e.commit("SET_SELECTED_CURRENCY",t)},selectAllYears:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch("clearSelectYears");case 2:r=Object(ce["a"])(e.getters.yrs),t.prev=3,r.s();case 5:if((n=r.n()).done){t.next=11;break}return a=n.value,t.next=9,e.dispatch("toggleSelectedYear",a);case 9:t.next=5;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),r.e(t.t0);case 16:return t.prev=16,r.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[3,13,16,19]])})))()},toggleSelectedYear:function(e,t){var r=Array.prototype.indexOf.call(e.state.selectedYears,t);-1===r?e.commit("ADD_YEAR_TO_SELECTED_YEARS",t):e.commit("REMOVE_YEAR_FROM_SELECTED_YEARS",r)},clearSelectYears:function(e){e.commit("SET_SELECTED_YEARS",[])},selectDisplayParameter:function(e,t){-1!==Array.prototype.indexOf.call(e.getters.parameters,t)&&e.commit("SET_DISPLAY_PARAMETER",t)},setFilterByCompany:function(e,t){e.commit("SET_FILTER_BY_COMPANY",t)}}});n["default"].config.productionTip=!1,new n["default"]({store:le,render:function(e){return e(oe)}}).$mount("#app")},"6c97":function(e,t,r){"use strict";r("db47")},"85ec":function(e,t,r){},a907:function(e,t,r){},d8f4:function(e,t,r){},db47:function(e,t,r){},f8e1:function(e,t,r){"use strict";r("a907")}});
//# sourceMappingURL=app.d9305b73.js.map