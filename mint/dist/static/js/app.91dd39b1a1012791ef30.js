webpackJsonp([1],{"1hL2":function(t,e){},"2HTk":function(t,e){},"4f2a":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("lRwf"),s=i.n(n),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=i("Z0/y")({name:"App"},a,!1,function(t){i("1hL2")},null,null).exports,o=i("pRNm"),r=i.n(o),l=i("lC5x"),d=i.n(l),u=i("J0Oq"),p=i.n(u),v=i("Tg7E"),m=i.n(v),_={tbk:function(t,e){return window.axios.post("https://wx.firecloud.club/apis/tbk",{url:t,data:e,session:!0,adzone:!0,site:!0})},schemeUrl:function(t,e){var i=document.createElement("iframe");i.src=t,i.style.display="none",document.body.appendChild(i),window.setTimeout(function(){document.body.removeChild(i),"function"==typeof e&&e()},1e3)},is_weixn:function(){var t=navigator.userAgent.toLowerCase();return!(!~t.indexOf("micromessenger")&&!~t.indexOf("MicroMessenger"))},copy:function(t,e,i,n,s,a,c){var o=this;return p()(d.a.mark(function r(){var l,u,p,m;return d.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(l="mm_131778178_45276106_534348035",u="",u=(u=s&&n?"https://uland.taobao.com/coupon/edetail?activityId="+s+"&itemId="+n+"&src=pgy_pgyqf":n?"https://item.taobao.com/item.htm?id="+n:s?"https://uland.taobao.com/coupon/edetail?activityId="+s+"&src=pgy_pgyqf":a)+"&pid="+l,!o.is_weixn()){r.next=18;break}if(c){r.next=10;break}return u="https://uland.taobao.com/coupon/edetail?itemId="+n+(s?"&activityId="+s:"")+"&src=pgy_pgyqf&pid="+l,r.next=9,o.tbk("taobao.tbk.tpwd.create",{user_id:"87491795",text:t,url:u,logo:e});case 9:c=r.sent.data.data.model;case 10:p="\n          "+t+"\n          促销价:"+i+"元\n          淘口令:"+c+"\n          抢购："+u+"\n          ",Object(v.MessageBox)({title:"口令",message:"点击复制，打开淘宝APP,即可进入优惠券领取页面",confirmButtonText:"复制口令"}),(m=document.getElementsByClassName("mint-msgbox-confirm")[0]).setAttribute("data-clipboard-action","copy"),m.setAttribute("data-clipboard-text",p),console.log(new window.ClipboardJS(".mint-msgbox-confirm")),r.next=19;break;case 18:/Android|webOS|iPhone|iPod|BlackBerry|UCBrowser|iOS|Windows Phone/i.test(navigator.userAgent)?location.href="taobao://"+u.replace("https://","").replace("http://",""):window.open(u);case 19:case"end":return r.stop()}},r,o)}))()}},f={data:function(){return{swipeHeight:.387*document.body.clientWidth+"px",imgUrl:[],favorites:[]}},created:function(){var t=this;return p()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.axios.get("https://wx.firecloud.club/apis/imgUrls");case 2:return t.imgUrl=e.sent.data,e.next=5,_.tbk("taobao.tbk.uatm.favorites.get",{fields:"favorites_title,favorites_id,type",type:"-1"});case 5:t.favorites=e.sent.data.results.tbk_favorites;case 6:case"end":return e.stop()}},e,t)}))()},methods:{swipeGo:function(t){_.copy(t.clip.title,t.img,0,void 0,void 0,t.clip.dlj,t.clip.kl)},theme:function(t){var e=this.favorites.find(function(e){return e.favorites_title===t}).favorites_id;this.$router.push({path:"/them",query:{id:e}})},toSearch:function(){this.$router.push({path:"/search"})}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sq-home"},[i("div",{staticClass:"z-search"},[i("div",{staticClass:"input",on:{click:t.toSearch}},[t._v("输入关键词搜索")])]),t._v(" "),i("mt-swipe",{style:{height:t.swipeHeight},attrs:{auto:3e3}},t._l(t.imgUrl,function(e,n){return i("mt-swipe-item",{key:n},[i("img",{attrs:{src:e.img},on:{click:function(i){t.swipeGo(e)}}})])})),t._v(" "),i("div",{staticClass:"special border"},[t._m(0),t._v(" "),i("div",{staticClass:"flex3 c1"},[i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1_UFmOXXXXXc4aXXXXXXXXXXX-794-320.png",mode:"widthFix"},on:{click:function(e){t.theme("9k9")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1fztJOXXXXXcfXpXXXXXXXXXX-794-320.png",mode:"widthFix"},on:{click:function(e){t.theme("20k")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1gKlIOXXXXXcJXpXXXXXXXXXX-794-320.png",mode:"widthFix"},on:{click:function(e){t.theme("20k")}}})])]),t._v(" "),i("div",{staticClass:"special"},[t._m(1),t._v(" "),i("div",{staticClass:"flex3 c2"},[i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1JQ9gKFXXXXX.XFXXXXXXXXXX-592-236.jpg",mode:"widthFix"},on:{click:function(e){t.theme("ifashion")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1oyxZNpXXXXbdXVXXXXXXXXXX-594-236.png",mode:"widthFix"},on:{click:function(e){t.theme("qbb")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1EdnZKpXXXXc9XpXXXXXXXXXX-592-236.png",mode:"widthFix"},on:{click:function(e){t.theme("tbhc")}}})]),t._v(" "),i("div",{staticClass:"flex3"},[i("img",{attrs:{src:"http://img.alicdn.com/tps/TB10R6.KpXXXXceXXXXXXXXXXXX-592-236.png",mode:"widthFix"},on:{click:function(e){t.theme("cdj")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1sGn9KpXXXXXPXpXXXXXXXXXX-592-236.png",mode:"widthFix"},on:{click:function(e){t.theme("jyj")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1W.6YKpXXXXbBXFXXXXXXXXXX-592-236.png",mode:"widthFix"},on:{click:function(e){t.theme("kdc")}}})]),t._v(" "),i("div",{staticClass:"flex3"},[i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1xZCmKFXXXXalXpXXXXXXXXXX-592-236.jpg",mode:"widthFix"},on:{click:function(e){t.theme("tbdiy")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1IMTTKpXXXXXIXVXXXXXXXXXX-592-236.png",mode:"widthFix"},on:{click:function(e){t.theme("gyhd")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1IMTTKpXXXXXIXVXXXXXXXXXX-592-236.png",mode:"widthFix"},on:{click:function(e){t.theme("gyhd")}}})])]),t._v(" "),i("div",{staticClass:"special"},[t._m(2),t._v(" "),i("div",{staticClass:"flex3 c3"},[i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1MLBTOXXXXXa.XXXXXXXXXXXX-586-800.png",mode:"widthFix"},on:{click:function(e){t.theme("nzjh")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB1k94bOXXXXXanaFXXXXXXXXXX-586-800.png",mode:"widthFix"},on:{click:function(e){t.theme("myrt")}}}),t._v(" "),i("img",{attrs:{src:"http://img.alicdn.com/tps/TB18MXoMpXXXXXRXVXXXXXXXXXX-586-800.png",mode:"widthFix"},on:{click:function(e){t.theme("gyhd")}}})])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"iconfont icon-ticket"},[this._v("特惠推荐")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"iconfont icon-tao"},[this._v("淘宝行业市场精选")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"iconfont icon-appreciate_light"},[this._v("行业好货")])])}]};var X=i("Z0/y")(f,h,!1,function(t){i("2HTk")},"data-v-f82f58c2",null).exports,g={data:function(){return{loading:!1,data:[],filters:{platform:2,page_size:10,q:"",page_no:0}}},created:function(){},methods:{loadMore:function(){var t=this;return p()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.filters.page_no++,t.loading=!0,e.next=4,t.search();case 4:t.loading=!1;case 5:case"end":return e.stop()}},e,t)}))()},ok:function(){this.filters.page_no=1,this.data=[],this.search()},search:function(){var t=this;return p()(d.a.mark(function e(){var i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.tbk("taobao.tbk.dg.item.coupon.get",t.filters);case 2:i=e.sent,t.data=t.data.concat(i.data.results.tbk_coupon);case 4:case"end":return e.stop()}},e,t)}))()}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"sq-mrjx",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"40"}},[i("img",{attrs:{src:"http://alp.alicdn.com/1476310476060.png"}}),t._v(" "),i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.q,expression:"filters.q"}],attrs:{placeholder:"输入关键词搜索"},domProps:{value:t.filters.q},on:{input:function(e){e.target.composing||t.$set(t.filters,"q",e.target.value)}}}),t._v(" "),i("button",{on:{click:t.ok}},[t._v("搜索")])]),t._v(" "),i("list",{attrs:{data:t.data}})],1)},staticRenderFns:[]};var x=i("Z0/y")(g,k,!1,function(t){i("YvrI")},"data-v-93e7cd56",null).exports,y=["00","08","10","13","15","17","19","20","21","24"],w=function(t,e){var i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?i[n]:("00"+i[n]).substr((""+i[n]).length)));return e},b={data:function(){return{loading:!1,now:-1,time:y,scrollLeft:(new Date).getHours()>15?1e3:0,list:[],page_no:0,active:-1}},created:function(){for(var t,e=void 0,i=(t=(new Date).getHours(),(t-=0)<10?"0"+t:t+""),n=9;n>=0;n--)if(y[n]<=i){e=n;break}this.now=e,this.active=e},methods:{buy:function(t){_.copy(t.title,t.pic_url,t.reserve_price,t.num_iid)},loadMore:function(){var t=this;return p()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.page_no++,t.loading=!0,e.next=4,t.search();case 4:t.loading=!1;case 5:case"end":return e.stop()}},e,t)}))()},selectTime:function(t){this.active=t,this.page_no=1,this.list=[],this.search()},search:function(){var t=this;return p()(d.a.mark(function e(){var i,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=w(new Date,"yyyy-MM-dd "),e.next=3,_.tbk("taobao.tbk.ju.tqg.get",{fields:"click_url,pic_url,reserve_price,zk_final_price,total_amount,sold_num,title,category_name,start_time,end_time",start_time:i+y[t.active]+":00:00",end_time:i+y[t.active+1]+":00:00",page_size:10,page_no:t.page_no});case 3:n=e.sent,t.list=t.list.concat(n.data.results.results);case 5:case"end":return e.stop()}},e,t)}))()}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"sq-tqg",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"40"}},[i("div",{staticClass:"time"},t._l(t.time,function(e,n){return i("div",{key:n,class:t.time[t.active]==e?"now item":"item",on:{click:function(e){t.selectTime(n)}}},[i("div",[t._v(t._s(e)+":00")]),t._v(" "),i("div",[t._v(t._s(t.time[t.now]==e?"正在疯抢":t.time[t.now]>e?"已开抢":"即将开抢"))])])})),t._v(" "),i("div",{staticClass:"good"},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"item"},[i("img",{attrs:{src:e.pic_url}}),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v("["+t._s(e.category_name)+"]"+t._s(e.title))]),t._v(" "),i("div",{staticClass:"ltr"},[i("div",{staticClass:"reserve_price"},[t._v("￥"+t._s(e.reserve_price))]),t._v(" "),i("div",{staticClass:"sold_num"},[t._v("已抢购"+t._s(e.sold_num)+"件")])]),t._v(" "),i("div",{staticClass:"ltr"},[i("div",{staticClass:"zk_final_price"},[t._v("￥\n          "),i("div",{staticClass:"f16"},[t._v(t._s(e.zk_final_price))])]),t._v(" "),i("div",{staticClass:"buy",on:{click:function(i){t.buy(e)}}},[t._v("马上抢")])])])])}))])},staticRenderFns:[]};var T=i("Z0/y")(b,C,!1,function(t){i("n2+F")},"data-v-41762d04",null).exports,q={data:function(){return{value:"",history:[],tags:["连衣裙","女鞋","两件套","T恤","零食"]}},created:function(){this.setHistory()},methods:{search:function(t){this.$router.push({path:"/list",query:{q:t}})},addSearch:function(t){this.addHistory(t),this.search(t)},setHistory:function(){var t=window.localStorage.historySearch;this.history=t?t.split(","):[]},addHistory:function(t){~this.history.indexOf(t)||(this.history.push(t),window.localStorage.historySearch=this.history.join(","))},clearHistory:function(){this.history=[],window.localStorage.historySearch=""}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-search"},[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{placeholder:"输入关键词搜索"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),i("button",{on:{click:function(e){t.addSearch(t.value)}}},[t._v("搜索")])]),t._v(" "),i("div",{staticClass:"hot"},[i("div",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),i("div",{staticClass:"tag"},t._l(t.tags,function(e,n){return i("div",{key:n,staticClass:"tag-item",on:{click:function(i){t.addSearch(e)}}},[t._v(t._s(e))])}))]),t._v(" "),i("div",{staticClass:"hot history"},[i("div",{staticClass:"title"},[t._v("历史搜索 "),i("div",{staticClass:"iconfont icon-delete",on:{click:t.clearHistory}})]),t._v(" "),i("div",{staticClass:"tag"},t._l(t.history,function(e,n){return i("div",{key:n,staticClass:"tag-item",on:{click:function(i){t.search(e)}}},[t._v(t._s(e))])}))])])},staticRenderFns:[]};var M=i("Z0/y")(q,F,!1,function(t){i("peX+")},"data-v-6309be18",null).exports,R={components:{"sq-home":X,"sq-mrjx":x,"sq-tqg":T,"page-seach":M},data:function(){return{selected:"home"}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("div",{staticClass:"view"},[i("keep-alive",["home"===t.selected?i("sq-home"):t._e()],1),t._v(" "),i("keep-alive",["mrjx"===t.selected?i("sq-mrjx"):t._e()],1),t._v(" "),i("keep-alive",["tqg"===t.selected?i("sq-tqg"):t._e()],1),t._v(" "),i("keep-alive",["search"===t.selected?i("page-seach"):t._e()],1)],1),t._v(" "),i("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-item",{attrs:{id:"home"}},[i("div",{class:["iconfont","home"===t.selected?"icon-home_fill_light":"icon-home_light"],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      首页\n    ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"mrjx"}},[i("div",{class:["iconfont","mrjx"===t.selected?"icon-choicenessfill":"icon-choiceness"],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      每日精选\n    ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"tqg"}},[i("div",{class:["iconfont","tqg"===t.selected?"icon-countdownfill":"icon-countdown"],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      淘抢购\n    ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"search"}},[i("div",{class:["iconfont",(t.selected,"icon-search")],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      搜索\n    ")]),t._v(" "),i("mt-tab-item",{attrs:{id:"my"}},[i("div",{class:["iconfont","my"===t.selected?"icon-my_fill_light":"icon-my_light"],attrs:{slot:"icon"},slot:"icon"}),t._v("\n      我的\n    ")])],1)],1)},staticRenderFns:[]};var $=i("Z0/y")(R,S,!1,function(t){i("SvD1")},"data-v-0620b129",null).exports,B={data:function(){return{loading:!1,SORT:{popular:"tk_total_sales_des",sales:"total_sales_des",price:"price_asc"},filter:{page_no:1,page_size:10,platform:1,sort:"tk_total_sales_des",q:this.$route.query.q,has_coupon:!0},list:[]}},created:function(){},methods:{loadMore:function(){var t=this;return p()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.page_no++,t.loading=!0,e.next=4,t.search();case 4:t.loading=!1;case 5:case"end":return e.stop()}},e,t)}))()},toggleCoupon:function(){this.list=[],this.filter.has_coupon=!this.filter.has_coupon,this.search()},toggleSort:function(t){this.list=[],this.filter.sort=t,this.search()},search:function(){var t=this;return p()(d.a.mark(function e(){var i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.tbk("taobao.tbk.sc.material.optional",t.filter);case 2:i=e.sent,t.list=t.list.concat(i.data.result_list.map_data);case 4:case"end":return e.stop()}},e,t)}))()}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"page-list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"40"}},[i("div",{staticClass:"filter flex4"},[i("div",{class:t.filter.sort===t.SORT.popular?"active":"",on:{click:function(e){t.toggleSort(t.SORT.popular)}}},[t._v("人气 ")]),t._v(" "),i("div",{class:t.filter.sort===t.SORT.sales?"active":"",on:{click:function(e){t.toggleSort(t.SORT.sales)}}},[t._v("销量")]),t._v(" "),i("div",{class:t.filter.sort===t.SORT.price?"active":"",on:{click:function(e){t.toggleSort(t.SORT.price)}}},[t._v("价格")]),t._v(" "),i("div",{class:{"iconfont icon-check":t.filter.has_coupon},on:{click:t.toggleCoupon}},[t._v("优惠劵"),i("span")])]),t._v(" "),i("list",{attrs:{data:t.list}})],1)},staticRenderFns:[]};var O=i("Z0/y")(B,E,!1,function(t){i("npbc")},"data-v-28cf3e2b",null).exports,z={data:function(){return{num_iid:this.$route.query.num_iid,coupon_click_url:this.$route.query.coupon_click_url,coupon_id:this.$route.query.coupon_id,data:{small_images:{string:[]}}}},created:function(){this.getData()},mounted:function(){},methods:{gohome:function(){this.$router.push({path:"/"})},getData:function(){var t=this;return p()(d.a.mark(function e(){var i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.tbk("taobao.tbk.item.info.get",{fields:"volume,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url",platform:2,num_iids:t.num_iid});case 2:i=e.sent,t.data=i.data.results.n_tbk_item[0];case 4:case"end":return e.stop()}},e,t)}))()},buy:function(){_.copy(this.data.title,this.data.pict_url,this.data.zk_final_price,this.num_iid,this.coupon_id)}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-detils"},[i("img",{staticClass:"imghead",attrs:{src:t.data.pict_url,mode:"widthFix"}}),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(t.data.title))]),t._v(" "),i("div",{staticClass:"item1 ltr"},[i("div",{staticClass:"price"},[t._v("￥"+t._s(t.data.zk_final_price))]),t._v(" "),i("div",{staticClass:"numb"},[t._v("销量："+t._s(t.data.volume))])]),t._v(" "),i("div",{staticClass:"imgList"},t._l(t.data.small_images.string,function(t,e){return i("img",{key:e,attrs:{src:t}})})),t._v(" "),i("div",{staticClass:"fix-buttom"},[i("div",{staticClass:"it1 iconfont icon-home_light",on:{click:t.gohome}},[t._v("首页")]),t._v(" "),i("div",{staticClass:"it1 iconfont icon-share1",attrs:{bindtap:"share"}},[t._v("分享")]),t._v(" "),i("div",{staticClass:"it2",on:{click:t.buy}},[t._v("\n      领券购买\n    ")])])])},staticRenderFns:[]};var H=i("Z0/y")(z,j,!1,function(t){i("dITe")},"data-v-3444de44",null).exports,I={data:function(){return{loading:!1,list:[],page_size:8,page_no:1,favorites_id:this.$route.query.id}},created:function(){},methods:{loadMore:function(){var t=this;return p()(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.page_no++,t.loading=!0,e.next=4,t.search();case 4:t.loading=!1;case 5:case"end":return e.stop()}},e,t)}))()},search:function(){var t=this;return p()(d.a.mark(function e(){var i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.tbk("taobao.tbk.uatm.favorites.item.get",{platform:2,page_size:t.page_size,favorites_id:t.favorites_id,fields:"coupon_click_url,coupon_info,num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick,shop_title,zk_final_price_wap,event_start_time,event_end_time,tk_rate,status,type",page_no:t.page_no});case 2:i=e.sent,t.list=t.list.concat(i.data.results.uatm_tbk_item);case 4:case"end":return e.stop()}},e,t)}))()}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:this.loadMore,expression:"loadMore"}],staticClass:"page-list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"40"}},[e("list",{attrs:{data:this.list}})],1)},staticRenderFns:[]};var N=i("Z0/y")(I,Z,!1,function(t){i("4f2a")},"data-v-26878bb6",null).exports;s.a.use(r.a);var A=new r.a({routes:[{path:"/",name:"index",component:$},{path:"/search",name:"search",component:M},{path:"/list",name:"list",component:O},{path:"/detils",name:"detils",component:H},{path:"/them",name:"them",component:N}]}),K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"good-list"},t._l(t.data,function(e,n){return i("div",{key:n,staticClass:"item",on:{click:function(i){t.godetils(e)}}},[i("img",{attrs:{src:e.pict_url}}),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"ltr"},[i("div",{staticClass:"coupon"},[t._v(t._s(e.coupon_info?t.setc(e.coupon_info):"促"))]),t._v(" "),i("div",{staticClass:"endprice"},[t._v("￥"+t._s(e.zk_final_price))])]),t._v(" "),i("div",{staticClass:"shop_title"},[t._v(t._s(e.shop_title))]),t._v(" "),i("div",{staticClass:"ltr"},[i("div"),t._v(" "),i("div",{staticClass:"xl"},[t._v("已售"+t._s(e.volume))])])])}))},staticRenderFns:[]};var P=i("Z0/y")({name:"list",props:{data:{defalut:function(){return[]}}},data:function(){return{}},methods:{setc:function(t){return t.match(/减(\d+)元/)[1]+"元劵"},godetils:function(t){var e={num_iid:t.num_iid,coupon_click_url:t.coupon_click_url,coupon_id:t.coupon_id};this.$router.push({path:"/detils",query:e})}}},K,!1,function(t){i("ZC/B")},"data-v-a170dc7a",null).exports;s.a.config.productionTip=!1,s.a.use(m.a),s.a.component(P.name,P),new s.a({el:"#app",router:A,components:{App:c},template:"<App/>"})},SvD1:function(t,e){},Tg7E:function(t,e){t.exports=MINT},YvrI:function(t,e){},"ZC/B":function(t,e){},dITe:function(t,e){},lRwf:function(t,e){t.exports=Vue},"n2+F":function(t,e){},npbc:function(t,e){},pRNm:function(t,e){t.exports=VueRouter},"peX+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.91dd39b1a1012791ef30.js.map