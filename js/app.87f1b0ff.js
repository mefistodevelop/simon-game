(function(e){function t(t){for(var a,r,u=t[0],l=t[1],o=t[2],d=0,p=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,u=1;u<n.length;u++){var l=n[u];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0352":function(e,t,n){"use strict";var a=n("6fd2"),i=n.n(a);i.a},"196f":function(e,t,n){e.exports=n.p+"media/3.c1c96b44.mp3"},"3c6d":function(e,t,n){e.exports=n.p+"media/1.99e50f7d.mp3"},"3cf8":function(e,t,n){e.exports=n.p+"media/2.d2c4a2c4.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"title"},[e._v("Simon the Game")]),n("div",{staticClass:"container"},[n("Simon",{attrs:{isGame:e.isStarted,active:e.activeElement},on:{tap:e.handleUserClick}}),n("Panel",{attrs:{round:e.round,result:e.result},on:{start:e.startGame},model:{value:e.currentLevel,callback:function(t){e.currentLevel=t},expression:"currentLevel"}})],1)])},s=[],r=(n("99af"),n("d3b7"),n("b85c")),u=(n("96cf"),n("1da1")),l=n("2909"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"simon"},[e._v(" "+e._s(e.active?e.setActive(e.active):e.setActive(""))+" "),n("div",{staticClass:"half-left"},[n("div",{staticClass:"quarter top-left",class:{"top-left_flashed":"blue"===e.activeElement},on:{click:function(t){return e.handleClick(1,"blue")}}},[e._v(" "+e._s("blue"===e.activeElement?e.playAudio(e.sounds.blue):"")+" ")]),n("div",{staticClass:"quarter bottom-left",class:{"bottom-left_flashed":"yellow"===e.activeElement},on:{click:function(t){return e.handleClick(2,"yellow")}}},[e._v(" "+e._s("yellow"===e.activeElement?e.playAudio(e.sounds.yellow):"")+" ")])]),n("div",{staticClass:"half-right"},[n("div",{staticClass:"quarter top-right",class:{"top-right_flashed":"red"===e.activeElement},on:{click:function(t){return e.handleClick(3,"red")}}},[e._v(" "+e._s("red"===e.activeElement?e.playAudio(e.sounds.red):"")+" ")]),n("div",{staticClass:"quarter bottom-right",class:{"bottom-right_flashed":"green"===e.activeElement},on:{click:function(t){return e.handleClick(4,"green")}}},[e._v(" "+e._s("green"===e.activeElement?e.playAudio(e.sounds.green):"")+" ")])])])},c=[],d={name:"Simon",data:function(){return{activeElement:"",sounds:{red:n("3c6d"),blue:n("3cf8"),yellow:n("196f"),green:n("78fc")}}},methods:{playAudio:function(e){var t=new Audio(e);t.play()},handleClick:function(e,t){this.isGame&&(this.$emit("tap",e),this.playAudio(this.sounds[t]))},setActive:function(e){this.activeElement=e}},props:{active:{type:String,default:""},isGame:{type:Boolean,default:!1}}},p=d,f=(n("0352"),n("2877")),v=Object(f["a"])(p,o,c,!1,null,"084a0e33",null),m=v.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel"},[n("div",{staticClass:"info"},[n("h2",{staticClass:"subtitle"},[e._v("Round: "+e._s(e.round))]),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){return e.$emit("start")}}},[e._v(" Start ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.result,expression:"result"}],staticClass:"status"},[e._v(" You lost after "+e._s(e.result)+" rounds ")])]),n("div",{staticClass:"options"},[n("h2",{staticClass:"subtitle"},[e._v("Game options")]),n("ul",{staticClass:"level-list"},[n("li",{staticClass:"level"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"radio",name:"level",value:"easy"},domProps:{checked:e._q(e.inputValue,"easy")},on:{change:function(t){e.inputValue="easy"}}}),e._v(" easy ")])]),n("li",{staticClass:"level"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"radio",name:"level",value:"medium"},domProps:{checked:e._q(e.inputValue,"medium")},on:{change:function(t){e.inputValue="medium"}}}),e._v(" medium ")])]),n("li",{staticClass:"level"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"radio",name:"level",value:"hard"},domProps:{checked:e._q(e.inputValue,"hard")},on:{change:function(t){e.inputValue="hard"}}}),e._v(" hard ")])])])])])},b=[],y=(n("a9e3"),{name:"Panel",data:function(){return{}},props:{value:{type:String,default:""},round:{type:Number,default:0},result:{type:Number,default:0}},computed:{inputValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}}),_=y,g=(n("d4c2"),Object(f["a"])(_,h,b,!1,null,"449b24ac",null)),C=g.exports,w={name:"App",components:{Simon:m,Panel:C},data:function(){return{isStarted:!1,sequence:[],sequenceCopy:[],round:0,result:0,currentLevel:"easy",colors:["blue","yellow","red","green"],activeElement:"",levels:{easy:1500,medium:1e3,hard:400}}},methods:{startGame:function(){this.isStarted=!0,this.round=1,this.result=0,this.sequence=[],this.sequenceCopy=[],this.updateSequence()},stopGame:function(){this.isStarted=!1,this.result=this.round,this.round=0},increaseRound:function(){0===this.sequence.length&&(this.round+=1)},handleUserClick:function(e){this.sequence[0]===e?(this.sequence.shift(e),this.increaseRound(),this.updateSequence()):this.stopGame()},updateSequence:function(){var e=this;if(0===this.sequence.length){var t=this.sequenceCopy.length?this.levels[this.currentLevel]:0;setTimeout((function(){var t,n=Math.floor(4*Math.random()+1),a=[].concat(Object(l["a"])(e.sequenceCopy),[n]);(t=e.sequence).push.apply(t,Object(l["a"])(a)),e.sequenceCopy.push(n),e.playSequence()}),t)}},delay:function(){var e=this;return new Promise((function(t){setTimeout((function(){t()}),e.levels[e.currentLevel])}))},playSequence:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(r["a"])(e.sequence),t.prev=1,n.s();case 3:if((a=n.n()).done){t.next=13;break}if(i=a.value,e.isStarted){t.next=7;break}return t.abrupt("return");case 7:return e.activeElement=e.colors[i-1],setTimeout((function(){return e.activeElement=""}),300),t.next=11,e.delay();case 11:t.next=3;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](1),n.e(t.t0);case 18:return t.prev=18,n.f(),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[1,15,18,21]])})))()}}},q=w,k=(n("dd1e"),Object(f["a"])(q,i,s,!1,null,"affff972",null)),x=k.exports;n("abe2");a["a"].config.devtools=!0,a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(x)}}).$mount("#app")},"6fd2":function(e,t,n){},7747:function(e,t,n){},"78fc":function(e,t,n){e.exports=n.p+"media/4.36d5a722.mp3"},abe2:function(e,t,n){},beca:function(e,t,n){},d4c2:function(e,t,n){"use strict";var a=n("beca"),i=n.n(a);i.a},dd1e:function(e,t,n){"use strict";var a=n("7747"),i=n.n(a);i.a}});
//# sourceMappingURL=app.87f1b0ff.js.map