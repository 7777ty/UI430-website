(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{154:function(t,s,a){},155:function(t,s,a){},168:function(t,s,a){"use strict";var e=a(154);a.n(e).a},169:function(t,s,a){"use strict";var e=a(155);a.n(e).a},179:function(t,s,a){"use strict";var e={props:{gutter:{type:[Number,String]},align:{type:String,validator:t=>["left","right","center"].indexOf(t)>=0}},computed:{rowStyle(){let{gutter:t}=this;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass(){let{align:t}=this;return[t&&`align-${t}`]}},mounted(){this.$children.forEach(t=>{t.gutter=this.gutter})}},o=(a(168),a(1)),r=Object(o.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"6592bcb3",null);s.a=r.exports},180:function(t,s,a){"use strict";let e=t=>{let s=Object.keys(t),a=!0;return s.forEach(t=>{["span","offset"].includes(t)||(a=!1)}),a};var o={data:()=>({gutter:0}),props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}},methods:{createClasses(t,s=""){if(!t)return[];let a=[];return t.span&&a.push(`col-${s}${t.span}`),t.offset&&a.push(`offset-${s}${t.offset}`),a}},computed:{colClass(){let{span:t,offset:s,ipad:a,narrowPc:e,pc:o,widePc:r}=this,i=this.createClasses;return[...i({span:t,offset:s}),...i(a,"ipad-"),...i(e,"narrow-pc-"),...i(o,"pc-"),...i(r,"wide-pc-")]},colStyle(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},r=(a(169),a(1)),i=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"432b2dea",null);s.a=i.exports},192:function(t,s,a){},221:function(t,s,a){"use strict";var e=a(192);a.n(e).a},250:function(t,s,a){"use strict";a.r(s);var e=a(179),o=a(180),r={components:{"g-row":e.a,"g-col":o.a}},i=(a(221),a(1)),l=Object(i.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{"padding-top":"16px"}},[a("h2",[t._v("设置间空隙（offset）")]),t._v(" "),t._m(0),t._v(" "),a("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[a("g-col",{attrs:{span:"8"}},[a("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),a("g-col",{attrs:{span:"8",offset:"8"}},[a("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),a("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[a("g-col",{attrs:{span:"6",offset:"6"}},[a("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),a("g-col",{attrs:{span:"6",offset:"6"}},[a("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),a("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[a("g-col",{attrs:{span:"4"}},[a("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),a("g-col",{attrs:{span:"4",offset:"4"}},[a("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),a("g-col",{attrs:{span:"4",offset:"8"}},[a("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),a("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2",offset:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2",offset:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2",offset:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),a("g-col",{attrs:{span:"2",offset:"2"}},[a("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码预览")])])}],!1,null,"ca24d3b4",null);s.default=l.exports}}]);