webpackJsonp([1],{"0JUY":function(t,e){},"7Wx5":function(t,e){},Awhd:function(t,e){},Belw:function(t,e){},DLtv:function(t,e){},"Ef4/":function(t,e){},MdSK:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("lRwf"),a=i.n(s),n=i("Tg7E"),o=i.n(n),c=i("lC5x"),r=i.n(c),l=i("J0Oq"),u=i.n(l),d={tbk:function(t,e){return window.axios.post("https://wx.firecloud.club/apis/tbk",{url:t,data:e,session:!0,adzone:!0,site:!0})},schemeUrl:function(t,e){var i=document.createElement("iframe");i.src=t,i.style.display="none",document.body.appendChild(i),window.setTimeout(function(){document.body.removeChild(i),"function"==typeof e&&e()},1e3)},is_weixn:function(){var t=navigator.userAgent.toLowerCase();return!(!~t.indexOf("micromessenger")&&!~t.indexOf("MicroMessenger"))},copy:function(t,e,i,s,a,n,o){var c=this;return u()(r.a.mark(function l(){var u,d,p;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(u="mm_131778178_45276106_534348035",d="",n?d=n:a&&s?d="https://uland.taobao.com/coupon/edetail?activityId="+a+"&itemId="+s+"&src=pgy_pgyqf":s?d="https://item.taobao.com/item.htm?id="+s:a&&(d="https://uland.taobao.com/coupon/edetail?activityId="+a+"&src=pgy_pgyqf"),!c.is_weixn()){r.next=13;break}if(o){r.next=9;break}return d="https://uland.taobao.com/coupon/edetail?itemId="+s+(a?"&activityId="+a:"")+"&src=pgy_pgyqf&pid="+u,r.next=8,c.tbk("taobao.tbk.tpwd.create",{user_id:"87491795",text:t,url:d,logo:e});case 8:o=r.sent.data.data.model;case 9:p="\n          "+t+"\n          促销价:"+i+"元\n          淘口令:"+o+"\n          抢购："+d+"\n          ",c.copyBox(p),r.next=14;break;case 13:/Android|webOS|iPhone|iPod|BlackBerry|UCBrowser|iOS|Windows Phone/i.test(navigator.userAgent)?~d.indexOf("s.click.taobao.com")?window.open(d):(d=(d=d+"&pid="+u).replace("https://","").replace("http://",""),location.href="taobao://"+d):(~d.indexOf("s.click.taobao.com")||(d=d+"&pid="+u),window.open(d));case 14:case"end":return r.stop()}},l,c)}))()},copyBox:function(t,e){Object(n.MessageBox)({title:"口令",message:"点击复制，打开淘宝APP,即可进入优惠券领取页面",confirmButtonText:"复制口令"}).then(function(){e&&e()});var i=document.getElementsByClassName("mint-msgbox-confirm")[0];i.setAttribute("data-clipboard-action","copy"),i.setAttribute("data-clipboard-text",t),console.log(new window.ClipboardJS(".mint-msgbox-confirm"))}},p={name:"App",created:function(){d.is_weixn()&&Object(n.Toast)({message:"建议点击右上角，使用其他浏览器打开，可以直接唤醒淘宝",position:"top",duration:5e3})}};/Android|webOS|iPhone|iPod|BlackBerry|UCBrowser|iOS|Windows Phone/i.test(navigator.userAgent)||document.getElementsByTagName("html")[0].setAttribute("class","pc"),window.PointerEvent=void 0;var X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var m=i("Z0/y")(p,X,!1,function(t){i("cRpX")},null,null).exports,f=i("pRNm"),h=i.n(f),v={swipe:[{img:"https://gw.alicdn.com/tfs/TB1KE6rkwoQMeJjy1XaXXcSsFXa-440-180.jpg",clip:{title:"精选淘宝/天猫最热门优惠券",kl:"￥QzLp0FqnZkS￥",dlj:"https://s.click.taobao.com/uv7DcQw"}},{img:"https://gw.alicdn.com/tfs/TB1EfElgWagSKJjy0FgXXcRqFXa-440-180.jpg",clip:{title:"爱淘宝",kl:"￥RXge0FqnGUK￥",dlj:"https://s.click.taobao.com/JnuCcQw"}},{img:"https://gw.alicdn.com/tfs/TB1_2lxhv9TBuNjy0FcXXbeiFXa-440-180.jpg",clip:{title:"天猫国际限时抢购",kl:"￥jJOm0FsaQFJ￥",dlj:"https://s.click.taobao.com/boFabQw"}},{img:"https://gw.alicdn.com/tfs/TB1c7WDhqmWBuNjy1XaXXXCbXXa-440-180.jpg",clip:{title:"美食狂欢",kl:"￥AX6J0FsZn2y￥",dlj:"https://s.click.taobao.com/yN2abQw"}}],hlist:[{title:"特惠推荐",icon:"icon-ticket_fill",color:"#f28430",numb:3,list:[{img:"http://img.alicdn.com/tps/TB1_UFmOXXXXXc4aXXXXXXXXXXX-794-320.png",ext:"9k9"},{img:"http://img.alicdn.com/tps/TB1fztJOXXXXXcfXpXXXXXXXXXX-794-320.png",ext:"20k"},{img:"http://img.alicdn.com/tps/TB1gKlIOXXXXXcJXpXXXXXXXXXX-794-320.png",ext:"tjhh"}]},{title:"淘宝行业市场精选",icon:"icon-medalfill",color:"#a44bd0",numb:3,list:[{img:"http://img.alicdn.com/tps/TB1JQ9gKFXXXXX.XFXXXXXXXXXX-592-236.jpg",ext:"ifashion"},{img:"http://img.alicdn.com/tps/TB1oyxZNpXXXXbdXVXXXXXXXXXX-594-236.png",ext:"qbb"},{img:"http://img.alicdn.com/tps/TB1EdnZKpXXXXc9XpXXXXXXXXXX-592-236.png",ext:"tbhc"},{img:"http://img.alicdn.com/tps/TB10R6.KpXXXXceXXXXXXXXXXXX-592-236.png",ext:"cdj"},{img:"http://img.alicdn.com/tps/TB1sGn9KpXXXXXPXpXXXXXXXXXX-592-236.png",ext:"jyj"},{img:"http://img.alicdn.com/tps/TB1W.6YKpXXXXbBXFXXXXXXXXXX-592-236.png",ext:"kdc"},{img:"http://img.alicdn.com/tps/TB1xZCmKFXXXXalXpXXXXXXXXXX-592-236.jpg",ext:"tbdiy"},{img:"http://img.alicdn.com/tps/TB1IMTTKpXXXXXIXVXXXXXXXXXX-592-236.png",ext:"gyhd"},{img:"http://img.alicdn.com/tps/TB1IMTTKpXXXXXIXVXXXXXXXXXX-592-236.png",ext:"gyhd"}]},{title:"行业好货",icon:"icon-appreciate_fill_light",color:"#ed495e",numb:3,list:[{img:"http://img.alicdn.com/tps/TB1MLBTOXXXXXa.XXXXXXXXXXXX-586-800.png",ext:"nzjh"},{img:"http://img.alicdn.com/tps/TB1k94bOXXXXXanaFXXXXXXXXXX-586-800.png",ext:"myrt"},{img:"http://img.alicdn.com/tps/TB18MXoMpXXXXXRXVXXXXXXXXXX-586-800.png",ext:"gyhd"}]}],hd:[{title:"划算活动信息",icon:"icon-ju",color:"#f28430",numb:2,list:[{img:"https://img.alicdn.com/tfs/TB1KVFPQFXXXXXaapXXXXXXXXXX-480-180.jpg",ext:{title:"量贩优选",url:"https://s.click.taobao.com/zGLvbQw",kl:"￥wjId0FJBIBo￥"}},{img:"https://img.alicdn.com/tfs/TB1oaaHQFXXXXXjXpXXXXXXXXXX-480-180.jpg",ext:{title:"聚名品",url:"https://s.click.taobao.com/iGIvbQw",kl:"￥CRau0FJz74C￥"}},{img:"https://img.alicdn.com/tfs/TB1Gtp2QFXXXXbfaXXXXXXXXXXX-410-180.jpg",ext:{title:"非常大牌",url:"https://s.click.taobao.com/DqDvbQw",kl:"￥0os60FJziQf￥"}},{img:"https://img.alicdn.com/tps/TB1ijqSPXXXXXX8XVXXXXXXXXXX-440-180.jpg",ext:{title:"聚划算专享优惠",url:"https://s.click.taobao.com/ziBvbQw",kl:"￥Fb5y0FJzIPu￥"}},{img:"https://img.alicdn.com/tfs/TB1A8mCQFXXXXX1aFXXXXXXXXXX-440-180.jpg",ext:{title:"支付抽免单",url:"https://s.click.taobao.com/yzrtbQw",kl:"￥16X60Fr1mo9￥"}},{img:"https://img.alicdn.com/tfs/TB1NPfcdogQMeJjy0FjXXaExFXa-440-180.jpg",ext:{title:"聚划算首页",url:"https://s.click.taobao.com/SiZtbQw",kl:"￥J6g40Frc92Q￥"}}]},{title:"猫活动信息",icon:"icon-tian",color:"#f28430",numb:2,list:[{img:"http://gtms04.alicdn.com/tps/i4/TB1zBf8LFXXXXaAaXXXQO4D5VXX-440-180.jpg",ext:{title:"天猫精选-品牌惠聚",url:"https://s.click.taobao.com/54EsbQw",kl:"￥RdE30FrVzBH￥"}},{img:"https://img.alicdn.com/tfs/TB101ZQdgoQMeJjy0FnXXb8gFXa-440-180.jpg",ext:{title:"天猫必抢",url:"https://s.click.taobao.com/ZW6sbQw",kl:"￥Y1sE0Fr4FDx￥"}},{img:"https://gw.alicdn.com/tfs/TB1eWxNQpXXXXcsXVXXXXXXXXXX-440-180.jpg",ext:{title:"天猫手机-天天搞机频道",url:"https://s.click.taobao.com/ySyrbQw",kl:"￥ARLM0Frfp5I￥"}},{img:"https://img.alicdn.com/tfs/TB1uaEVQXXXXXXDapXXXXXXXXXX-440-180.jpg",ext:{title:"天猫男鞋频道",url:"https://s.click.taobao.com/zsqrbQw",kl:"￥N0jY0FrUVnL￥"}},{img:"https://gw.alicdn.com/tfs/TB1Qo0ohpGWBuNjy0FbXXb4sXXa-440-180.jpg",ext:{title:"天猫生鲜-频道",url:"https://s.click.taobao.com/u3grbQw",kl:"￥mUY40FrUE7u￥"}},{img:"https://img.alicdn.com/tfs/TB1A3dOQpXXXXboXXXXXXXXXXXX-440-180.jpg",ext:{title:"天猫内衣",url:"https://s.click.taobao.com/umXrbQw",kl:"￥LYZC0Fr5olU￥"}},{img:"https://img.alicdn.com/tfs/TB1ubQ2hgmTBuNjy1XbXXaMrVXa-440-180.png",ext:{title:"天猫食品-频道",url:"https://s.click.taobao.com/CDHrbQw",kl:"￥1gxz0FrTnMd￥"}},{img:"https://gw.alicdn.com/tfs/TB1_2lxhv9TBuNjy0FcXXbeiFXa-440-180.jpg",ext:{title:"天猫国际限时抢购",url:"https://s.click.taobao.com/nvyqbQw",kl:"￥3luW0Fr6Nul￥"}},{img:"https://gw.alicdn.com/tfs/TB1fsg.hbGYBuNjy0FoXXciBFXa-440-180.png",ext:{title:"天猫运动户外",url:"https://s.click.taobao.com/tpqqbQw",kl:"￥sVlx0FrhmYU￥"}},{img:"https://gw.alicdn.com/tfs/TB1c7WDhqmWBuNjy1XaXXXCbXXa-440-180.jpg",ext:{title:"美食狂欢",url:"https://s.click.taobao.com/pakqbQw",kl:"￥aByv0FrSVdN￥"}},{img:"https://gw.alicdn.com/tfs/TB1sxFUhuOSBuNjy0FdXXbDnVXa-440-180.jpg",ext:{title:"天猫国际-主页",url:"https://s.click.taobao.com/KeLqbQw",kl:"￥gMQm0FrigY2￥"}},{img:"https://gw.alicdn.com/tfs/TB1ofJfb.gQMeJjy0FfXXbddXXa-440-180.jpg",ext:{title:"天猫超市-今日疯抢栏目",url:"https://s.click.taobao.com/q11qbQw",kl:"￥4S730Fr8Nq4￥"}}]}]},_={data:function(){return{swipeHeight:.387*document.body.clientWidth+"px",imgUrl:v.swipe,favorites:[],hlist:v.hlist,hd:v.hd}},created:function(){var t=this;return u()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.tbk("taobao.tbk.uatm.favorites.get",{fields:"favorites_title,favorites_id,type",type:"-1"});case 2:t.favorites=e.sent.data.results.tbk_favorites;case 3:case"end":return e.stop()}},e,t)}))()},methods:{swipeGo:function(t){d.copy(t.clip.title,t.img,0,void 0,void 0,t.clip.dlj,t.clip.kl)},theme:function(t){var e=this.favorites.find(function(e){return e.favorites_title===t.ext}).favorites_id;this.$router.push({path:"/them",query:{id:e}})},hdClick:function(t){d.copy(t.ext.title,t.img,0,void 0,void 0,t.ext.url,t.ext.kl)},toSearch:function(){this.$router.push({path:"/search"})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sq-home"},[i("div",{staticClass:"z-search"},[i("div",{staticClass:"input",on:{click:t.toSearch}},[t._v("输入关键词搜索")])]),t._v(" "),i("mt-swipe",{style:{height:t.swipeHeight},attrs:{auto:3e3}},t._l(t.imgUrl,function(e,s){return i("mt-swipe-item",{key:s},[i("img",{attrs:{src:e.img},on:{click:function(i){t.swipeGo(e)}}})])})),t._v(" "),t._l(t.hlist,function(e,s){return i("c-hlist",t._b({key:s,on:{click:t.theme}},"c-hlist",e,!1))})],2)},staticRenderFns:[]};var b=i("Z0/y")(_,g,!1,function(t){i("7Wx5")},"data-v-7ec0680c",null).exports,k={data:function(){return{data:[],filters:{platform:2,page_size:10,q:"",page_no:1}}},created:function(){this.search()},methods:{refresh:function(){this.filters.page_no++,this.search()},ok:function(){this.filters.page_no=1,this.data=[],this.search()},search:function(){var t=this;return u()(r.a.mark(function e(){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.tbk("taobao.tbk.dg.item.coupon.get",t.filters);case 2:i=e.sent,t.data=t.data.concat(i.data.results.tbk_coupon);case 4:case"end":return e.stop()}},e,t)}))()}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sq-mrjx"},[i("img",{attrs:{src:"http://alp.alicdn.com/1476310476060.png"}}),t._v(" "),i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.q,expression:"filters.q"}],attrs:{placeholder:"输入关键词搜索"},domProps:{value:t.filters.q},on:{input:function(e){e.target.composing||t.$set(t.filters,"q",e.target.value)}}}),t._v(" "),i("button",{on:{click:t.ok}},[t._v("搜索")])]),t._v(" "),i("c-list",{attrs:{data:t.data,top:90},on:{refresh:t.refresh}})],1)},staticRenderFns:[]};var x=i("Z0/y")(k,y,!1,function(t){i("DLtv")},"data-v-528d91c4",null).exports,w=["00","08","10","13","15","17","19","20","21","24"],C=function(t,e){var i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));return e},j={data:function(){return{loading:!1,now:-1,time:w,scrollLeft:(new Date).getHours()>15?1e3:0,list:[],page_no:0,active:-1}},created:function(){for(var t,e=void 0,i=(t=(new Date).getHours(),(t-=0)<10?"0"+t:t+""),s=9;s>=0;s--)if(w[s]<=i){e=s;break}this.now=e,this.active=e},methods:{buy:function(t){d.copy(t.title,t.pic_url,t.reserve_price,t.num_iid)},loadMore:function(){var t=this;return u()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.page_no++,t.loading=!0,e.next=4,t.search();case 4:t.loading=!1;case 5:case"end":return e.stop()}},e,t)}))()},selectTime:function(t){this.active=t,this.page_no=1,this.list=[],this.search()},search:function(){var t=this;return u()(r.a.mark(function e(){var i,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.Indicator.open("加载中..."),i=C(new Date,"yyyy-MM-dd "),e.next=4,d.tbk("taobao.tbk.ju.tqg.get",{fields:"click_url,pic_url,reserve_price,zk_final_price,total_amount,sold_num,title,category_name,start_time,end_time",start_time:i+w[t.active]+":00:00",end_time:i+w[t.active+1]+":00:00",page_size:10,page_no:t.page_no});case 4:s=e.sent,n.Indicator.close(),t.list=t.list.concat(s.data.results.results);case 7:case"end":return e.stop()}},e,t)}))()}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"sq-tqg",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"40"}},[i("div",{staticClass:"time"},t._l(t.time,function(e,s){return i("div",{key:s,class:t.time[t.active]==e?"now item":"item",on:{click:function(e){t.selectTime(s)}}},[i("div",[t._v(t._s(e)+":00")]),t._v(" "),i("div",[t._v(t._s(t.time[t.now]==e?"正在疯抢":t.time[t.now]>e?"已开抢":"即将开抢"))])])})),t._v(" "),i("div",{staticClass:"good"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("img",{attrs:{src:e.pic_url}}),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v("["+t._s(e.category_name)+"]"+t._s(e.title))]),t._v(" "),i("div",{staticClass:"ltr"},[i("div",{staticClass:"reserve_price"},[t._v("￥"+t._s(e.reserve_price))]),t._v(" "),i("div",{staticClass:"sold_num"},[t._v("已抢购"+t._s(e.sold_num)+"件")])]),t._v(" "),i("div",{staticClass:"ltr"},[i("div",{staticClass:"zk_final_price"},[t._v("￥\n          "),i("div",{staticClass:"f16"},[t._v(t._s(e.zk_final_price))])]),t._v(" "),i("div",{staticClass:"buy",on:{click:function(i){t.buy(e)}}},[t._v("马上抢")])])])])}))])},staticRenderFns:[]};var B=i("Z0/y")(j,F,!1,function(t){i("SxDa")},"data-v-14e7d1fd",null).exports,T={data:function(){return{value:"",history:[],tags:["连衣裙","女鞋","两件套","T恤","零食"]}},created:function(){this.setHistory()},methods:{search:function(t){this.$router.push({path:"/list",query:{q:t}})},addSearch:function(t){this.addHistory(t),this.search(t)},setHistory:function(){var t=window.localStorage.historySearch;this.history=t?t.split(","):[]},addHistory:function(t){~this.history.indexOf(t)||(this.history.push(t),window.localStorage.historySearch=this.history.join(","))},clearHistory:function(){this.history=[],window.localStorage.historySearch=""}}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-search"},[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{placeholder:"输入关键词搜索"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),i("button",{on:{click:function(e){t.addSearch(t.value)}}},[t._v("搜索")])]),t._v(" "),i("div",{staticClass:"hot"},[i("div",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),i("div",{staticClass:"tag"},t._l(t.tags,function(e,s){return i("div",{key:s,staticClass:"tag-item",on:{click:function(i){t.addSearch(e)}}},[t._v(t._s(e))])}))]),t._v(" "),i("div",{staticClass:"hot history"},[i("div",{staticClass:"title"},[t._v("历史搜索 "),i("div",{staticClass:"iconfont icon-delete",on:{click:t.clearHistory}})]),t._v(" "),i("div",{staticClass:"tag"},t._l(t.history,function(e,s){return i("div",{key:s,staticClass:"tag-item",on:{click:function(i){t.search(e)}}},[t._v(t._s(e))])}))])])},staticRenderFns:[]};var Q=i("Z0/y")(T,q,!1,function(t){i("MdSK")},"data-v-d244baac",null).exports,S={components:{"sq-home":b,"sq-mrjx":x,"sq-tqg":B,"page-seach":Q},data:function(){return{selected:"home"}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("div",{staticClass:"view "},[i("keep-alive",["home"===t.selected?i("sq-home"):t._e()],1),t._v(" "),i("keep-alive",["mrjx"===t.selected?i("sq-mrjx"):t._e()],1),t._v(" "),i("keep-alive",["tqg"===t.selected?i("sq-tqg"):t._e()],1),t._v(" "),i("keep-alive",["search"===t.selected?i("page-seach"):t._e()],1)],1),t._v(" "),i("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-item",{attrs:{id:"home"}},[i("div",{class:["iconfont","home"===t.selected?"icon-home_fill_light":"icon-home_light"],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      首页\n    ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"mrjx"}},[i("div",{class:["iconfont","mrjx"===t.selected?"icon-choicenessfill":"icon-choiceness"],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      每日精选\n    ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"tqg"}},[i("div",{class:["iconfont","tqg"===t.selected?"icon-countdownfill":"icon-countdown"],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      淘抢购\n    ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"search"}},[i("div",{class:["iconfont",(t.selected,"icon-search")],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      搜索\n    ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"my"}},[i("div",{class:["iconfont","my"===t.selected?"icon-my_fill_light":"icon-my_light"],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      我的\n    ")])],1)],1)},staticRenderFns:[]};var R=i("Z0/y")(S,E,!1,function(t){i("Belw")},"data-v-62056334",null).exports,M={data:function(){return{SORT:{popular:"tk_total_sales_des",sales:"total_sales_des",price:"price_asc"},filter:{page_no:1,page_size:10,platform:1,sort:"tk_total_sales_des",q:this.$route.query.q,has_coupon:!0},list:[]}},created:function(){this.search()},methods:{refresh:function(){this.filter.page_no++,this.search()},toggleCoupon:function(){this.list=[],this.filter.has_coupon=!this.filter.has_coupon,this.search()},toggleSort:function(t){this.list=[],this.filter.sort=t,this.search()},search:function(){var t=this;return u()(r.a.mark(function e(){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.tbk("taobao.tbk.sc.material.optional",t.filter);case 2:i=e.sent,t.list=t.list.concat(i.data.result_list.map_data);case 4:case"end":return e.stop()}},e,t)}))()}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-list"},[i("div",{staticClass:"filter flex4"},[i("div",{class:t.filter.sort===t.SORT.popular?"active":"",on:{click:function(e){t.toggleSort(t.SORT.popular)}}},[t._v("人气 ")]),t._v(" "),i("div",{class:t.filter.sort===t.SORT.sales?"active":"",on:{click:function(e){t.toggleSort(t.SORT.sales)}}},[t._v("销量")]),t._v(" "),i("div",{class:t.filter.sort===t.SORT.price?"active":"",on:{click:function(e){t.toggleSort(t.SORT.price)}}},[t._v("价格")]),t._v(" "),i("div",{class:{"iconfont icon-check":t.filter.has_coupon},on:{click:t.toggleCoupon}},[t._v("优惠劵\n      "),i("span")])]),t._v(" "),i("c-list",{attrs:{data:t.list,top:42},on:{refresh:t.refresh}})],1)},staticRenderFns:[]};var z=i("Z0/y")(M,O,!1,function(t){i("bVPW")},"data-v-04feb48e",null).exports,$={data:function(){return{num_iid:this.$route.query.num_iid,coupon_click_url:this.$route.query.coupon_click_url,coupon_id:this.$route.query.coupon_id,data:{small_images:{string:[]}}}},created:function(){this.getData()},mounted:function(){},methods:{gohome:function(){this.$router.push({path:"/"})},getData:function(){var t=this;return u()(r.a.mark(function e(){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.tbk("taobao.tbk.item.info.get",{fields:"volume,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url",platform:2,num_iids:t.num_iid});case 2:i=e.sent,t.data=i.data.results.n_tbk_item[0];case 4:case"end":return e.stop()}},e,t)}))()},buy:function(){d.copy(this.data.title,this.data.pict_url,this.data.zk_final_price,this.num_iid,this.coupon_id,this.coupon_click_url)}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-detils"},[i("img",{staticClass:"imghead",attrs:{src:t.data.pict_url,mode:"widthFix"}}),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(t.data.title))]),t._v(" "),i("div",{staticClass:"item1 ltr"},[i("div",{staticClass:"price"},[t._v("￥"+t._s(t.data.zk_final_price))]),t._v(" "),i("div",{staticClass:"numb"},[t._v("销量："+t._s(t.data.volume))])]),t._v(" "),i("div",{staticClass:"imgList"},t._l(t.data.small_images.string,function(t,e){return i("img",{key:e,attrs:{src:t}})})),t._v(" "),i("div",{staticClass:"fix-buttom"},[i("div",{staticClass:"it1 iconfont icon-home_light",on:{click:t.gohome}},[t._v("首页")]),t._v(" "),i("div",{staticClass:"it1 iconfont icon-share1",attrs:{bindtap:"share"}},[t._v("分享")]),t._v(" "),i("div",{staticClass:"it2",on:{click:t.buy}},[t._v("\n        领券购买\n      ")])])])},staticRenderFns:[]};var J=i("Z0/y")($,N,!1,function(t){i("Awhd")},"data-v-2afa4bd8",null).exports,D={data:function(){return{list:[],page_size:10,page_no:1,favorites_id:this.$route.query.id}},created:function(){this.search()},methods:{refresh:function(){this.page_no++,this.search()},search:function(){var t=this;return u()(r.a.mark(function e(){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.tbk("taobao.tbk.uatm.favorites.item.get",{platform:2,page_size:t.page_size,favorites_id:t.favorites_id,fields:"coupon_click_url,coupon_info,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick,shop_title,zk_final_price_wap,event_start_time,event_end_time,tk_rate,status,type",page_no:t.page_no});case 2:i=e.sent,t.list=t.list.concat(i.data.results.uatm_tbk_item);case 4:case"end":return e.stop()}},e,t)}))()}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-list"},[e("c-list",{attrs:{data:this.list,top:0},on:{refresh:this.refresh}})],1)},staticRenderFns:[]};var P=i("Z0/y")(D,I,!1,function(t){i("Ef4/")},"data-v-7e889a44",null).exports;a.a.use(h.a);var W,Z=new h.a({routes:[{path:"/",name:"index",component:R},{path:"/search",name:"search",component:Q},{path:"/list",name:"list",component:z},{path:"/detils",name:"detils",component:J},{path:"/them",name:"them",component:P}]});a.a.config.productionTip=!1,a.a.use(o.a),(W=i("gU6J")).keys().forEach(function(t){var e=W(t).default;a.a.component(e.name,e)}),new a.a({el:"#app",router:Z,components:{App:m},template:"<App/>"})},SxDa:function(t,e){},Tg7E:function(t,e){t.exports=MINT},Wcqj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-list"},[i("div",{staticClass:"special"},[i("div",[i("div",{class:"iconfont "+t.icon,style:{color:t.color}},[i("span",[t._v(t._s(t.title))])])]),t._v(" "),i("div",{class:"flex"+t.numb,style:{borderTop:"2px solid "+t.color}},t._l(t.list,function(e,s){return i("img",{key:s,attrs:{src:e.img},on:{click:function(i){t.theme(e)}}})}))])])},staticRenderFns:[]};var a=i("Z0/y")({name:"c-hlist",props:{title:{},icon:{},color:{},click:{},numb:{},list:{defalut:function(){return[]}}},data:function(){return{}},methods:{theme:function(t){this.$emit("click",t)}}},s,!1,function(t){i("0JUY")},null,null);e.default=a.exports},bVPW:function(t,e){},cRpX:function(t,e){},gU6J:function(t,e,i){var s={"./Hlist":"Wcqj","./Hlist.vue":"Wcqj","./List":"tcnj","./List.vue":"tcnj"};function a(t){return i(n(t))}function n(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id="gU6J"},lRwf:function(t,e){t.exports=Vue},"p+5D":function(t,e){},pRNm:function(t,e){t.exports=VueRouter},tcnj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Tg7E"),a={name:"c-list",props:{data:{defalut:function(){return[]}},top:{defalut:0}},data:function(){return{loading:!0}},created:function(){s.Indicator.open("加载中...")},watch:{data:function(t,e){var i=this;setTimeout(function(){s.Indicator.close(),i.loading=!1},50)}},methods:{setc:function(t){return t.match(/减(\d+)元/)[1]+"元劵"},godetils:function(t){var e={num_iid:t.num_iid,coupon_click_url:t.coupon_click_url,coupon_id:t.coupon_id};this.$router.push({path:"/detils",query:e})},loadMore:function(){this.$emit("refresh"),s.Indicator.open("加载中..."),this.loading=!0}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"good-list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"20"}},t._l(t.data,function(e,s){return i("div",{key:s,staticClass:"item",on:{click:function(i){t.godetils(e)}}},[i("img",{attrs:{src:e.pict_url}}),t._v(" "),i("div",{staticClass:"box"},[i("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"ltr ck"},[i("div",{staticClass:"coupon"},[t._v(t._s(e.coupon_info?t.setc(e.coupon_info):"促"))]),t._v(" "),i("div",{staticClass:"endprice"},[t._v("￥"+t._s(e.zk_final_price))])]),t._v(" "),i("div",{staticClass:"shop_title ck"},[t._v(t._s(e.shop_title))]),t._v(" "),i("div",{staticClass:"ltr"},[i("div"),t._v(" "),i("div",{staticClass:"xl"},[t._v("已售"+t._s(e.volume))])])])])}))},staticRenderFns:[]};var o=i("Z0/y")(a,n,!1,function(t){i("p+5D")},null,null);e.default=o.exports}},["NHnr"]);
//# sourceMappingURL=app.8be5722625a0dd482c87.js.map