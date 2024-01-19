(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,4],{292:function(e,t,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(114).default)("afbd704a",content,!0,{sourceMap:!1})},293:function(e,t,o){"use strict";o(292)},294:function(e,t,o){var r=o(113)(!1);r.push([e.i,".card{display:inline-block;width:200px;height:150px;margin:5px;color:#f2f2f2;font-weight:bold;text-align:center;font-size:18px;box-sizing:border-box;padding-top:70px;position:relative;transition:all 200ms ease}.card:hover{transform:scale(0.9);cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,.23),0 3px 10px rgba(0,0,0,.16)}.card a{position:absolute;top:0;left:0;background:none;width:100%;height:100%}.card span{position:absolute;right:2px;bottom:1px;font-size:14px;font-weight:normal}",""]),e.exports=r},295:function(e,t,o){var content=o(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(114).default)("24e04d28",content,!0,{sourceMap:!1})},296:function(e,t,o){"use strict";o.r(t);o(31),o(40);var r={props:{url:String,title:String,type:{type:String,default:"card"},description:{type:String,default:""},bgColor:{type:String,default:"#374046"}}},n=(o(293),o(52)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"card",style:{backgroundColor:e.bgColor}},[t("a",{attrs:{href:e.url,title:e.description}}),e._v(" "),t("span",[e._v(e._s(e.type))]),e._v("\n  "+e._s(e.title)+"\n")])}),[],!1,null,null,null);t.default=component.exports},297:function(e,t,o){"use strict";o(295)},298:function(e,t,o){var r=o(113)(!1);r.push([e.i,".cmd-wrap{text-align:center}.cmd-wrap .red{background-color:#f44336}.cmd-wrap .pink{background-color:#e91e63}.cmd-wrap .blank{background-color:#374046}.cmd-wrap .purple{background-color:#9c27b0}.cmd-wrap .deepPurple{background-color:#673ab7}.cmd-wrap .indigo{background-color:#3f51b5}.cmd-wrap .blue{background-color:#2196f3}.cmd-wrap .lightBlue{background-color:#03a9f4}.cmd-wrap .cyan{background-color:#00bcd4}.cmd-wrap .teal{background-color:#009688}.cmd-wrap .green{background-color:#4caf50}.cmd-wrap .lightGreen{background-color:#8bc34a}.cmd-wrap .lime{background-color:#cddc39}.cmd-wrap .yellow{background-color:#ffeb3b}.cmd-wrap .amber{background-color:#ffc107}.cmd-wrap .orange{background-color:#ff9800}.cmd-wrap .deepOrange{background-color:#ff5722}.cmd-wrap .brown{background-color:#795548}.cmd-wrap .grey{background-color:#9e9e9e}.cmd-wrap .blueGrey{background-color:#607d8b}",""]),e.exports=r},302:function(e,t,o){var content=o(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(114).default)("724cc3d4",content,!0,{sourceMap:!1})},303:function(e,t,o){var content=o(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(114).default)("e99bb03e",content,!0,{sourceMap:!1})},306:function(e,t,o){"use strict";o.r(t);o(31),o(40),o(41);var r={components:{Card:o(296).default},props:{cards:{type:Array,default:function(){return[]}}},data:function(){var e={red:"#f44336",pink:"#e91e63",blank:"#374046",purple:"#9c27b0",deepPurple:"#673ab7",indigo:"#3f51b5",blue:"#2196f3",lightBlue:"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50",lightGreen:"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800",deepOrange:"#ff5722",brown:"#795548",grey:"#9e9e9e",blueGrey:"#607d8b"},t=Object.keys(e);return{colors:t,colorsLength:t.length,colorsMap:e}}},n=(o(297),o(52)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"cmd-wrap"},e._l(e.cards,(function(o,r){return t("card",{key:o.title+"-"+o.type,attrs:{title:o.title,url:o.url,type:o.type,description:o.description,"bg-color":e.colorsMap[e.colors[r%e.colorsLength]]}})})),1)}),[],!1,null,null,null);t.default=component.exports},311:function(e,t,o){"use strict";o(302)},312:function(e,t,o){var r=o(113)(!1);r.push([e.i,'html,body{margin:0;padding:0}body{font:14px "Helvetica Neue",Helvetica,Arial,sans-serif;line-height:1.4em;background:#f5f5f5;color:#4d4d4d;min-width:230px;margin:0 auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:300}:focus{outline:0}.hidden{display:none}.command{width:80%;margin:auto;position:relative;z-index:2;border-top:1px solid #e6e6e6}@media(max-width: 640px){.command{width:100%}}.footer{color:#777;padding:10px 15px;height:20px;text-align:center;border-top:1px solid #e6e6e6}.footer:before{content:"";position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2)}.cmd-count{float:left;text-align:left}.cmd-count strong{font-weight:300}.filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:0}.filters li{display:inline}.filters li a{color:inherit;margin:3px;padding:3px 7px;text-decoration:none;border:1px solid rgba(0,0,0,0);border-radius:3px}.filters li a:hover{border-color:rgba(175,47,47,.1)}.filters li a.selected{border-color:rgba(175,47,47,.2)}.info{margin:65px auto 0;color:#bfbfbf;font-size:10px;text-shadow:0 1px 0 rgba(255,255,255,.5);text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none;font-weight:400}.info a:hover{text-decoration:underline}@media(max-width: 430px){.footer{height:50px}.filters{bottom:10px}}',""]),e.exports=r},313:function(e,t,o){"use strict";o(303)},314:function(e,t,o){var r=o(113)(!1);r.push([e.i,".header{background:#fff;min-width:320px;max-width:550px;margin:130px auto 40px auto;position:relative;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.header .title{position:absolute;top:-155px;width:100%;font-size:100px;font-weight:100;text-align:center;color:rgba(175,47,47,.15);text-transform:capitalize;text-rendering:optimizeLegibility}@media(min-width: 480px)and (max-width: 640px){.header .title{font-size:70px;top:-140px}}@media(min-width: 320px)and (max-width: 479px){.header .title{font-size:60px;top:-130px}}.header .search-cmd{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;color:inherit;padding:16px 16px 16px 60px;border:none;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.header .search-cmd::placeholder{font-style:italic;font-weight:300;color:#e6e6e6}",""]),e.exports=r},330:function(e,t,o){"use strict";o.r(t);o(31),o(69),o(70),o(30),o(14),o(33),o(117),o(42),o(116),o(41),o(208),o(44),o(53),o(67);var r={components:{Cards:o(306).default},asyncData:function(e){e.env;return{cards:[]}},data:function(){return{title:"cheatsheets",query:this.$route.query.q||""}},computed:{viewCmds:function(){var e=(this.cards||[]).slice(),t=this.query.trim().split(" ");return e=e.filter((function(e){return t.some((function(t){return e.title.includes(t)}))}))}}},n=(o(311),o(313),o(52)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("section",{staticClass:"header"},[t("header",[t("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search-cmd",attrs:{autofocus:"",autocomplete:"off",placeholder:"what you want to view ..."},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})])]),e._v(" "),t("section",{staticClass:"command"},[t("Cards",{attrs:{cards:e.viewCmds}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);