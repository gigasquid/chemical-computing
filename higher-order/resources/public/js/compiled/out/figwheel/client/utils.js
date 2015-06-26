// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function node_env_QMARK_(){
return !(((goog["nodeGlobalRequire"]) == null));
});
figwheel.client.utils.host_env_QMARK_ = (function host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.debug_prn = (function debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function() {
var log = null;
var log__1 = (function (x){
return log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});
var log__2 = (function (level,arg){
var f = (function (){var pred__35469 = cljs.core._EQ_;
var expr__35470 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__35469.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__35470))){
return ((function (pred__35469,expr__35470){
return (function (p1__35462_SHARP_){
return console.warn(p1__35462_SHARP_);
});
;})(pred__35469,expr__35470))
} else {
if(cljs.core.truth_(pred__35469.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__35470))){
return ((function (pred__35469,expr__35470){
return (function (p1__35463_SHARP_){
return console.debug(p1__35463_SHARP_);
});
;})(pred__35469,expr__35470))
} else {
if(cljs.core.truth_(pred__35469.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__35470))){
return ((function (pred__35469,expr__35470){
return (function (p1__35464_SHARP_){
return console.error(p1__35464_SHARP_);
});
;})(pred__35469,expr__35470))
} else {
return ((function (pred__35469,expr__35470){
return (function (p1__35465_SHARP_){
return console.log(p1__35465_SHARP_);
});
;})(pred__35469,expr__35470))
}
}
}
})();
return f.call(null,arg);
});
log = function(level,arg){
switch(arguments.length){
case 1:
return log__1.call(this,level);
case 2:
return log__2.call(this,level,arg);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$core$IFn$_invoke$arity$1 = log__1;
log.cljs$core$IFn$_invoke$arity$2 = log__2;
return log;
})()
;

//# sourceMappingURL=utils.js.map?rel=1435015536727