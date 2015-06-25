// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__23709_SHARP_,p2__23710_SHARP_){
var and__3852__auto__ = p1__23709_SHARP_;
if(cljs.core.truth_(and__3852__auto__)){
return p2__23710_SHARP_;
} else {
return and__3852__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__3864__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__3864__auto__){
return or__3864__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__23712_SHARP_,p2__23711_SHARP_){
return [cljs.core.str(p2__23711_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__3864__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__3864__auto__){
return or__3864__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__3864__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__4761__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4762__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4763__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4764__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4765__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4765__auto__,method_table__4761__auto__,prefer_table__4762__auto__,method_cache__4763__auto__,cached_hierarchy__4764__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23713){
var map__23714 = p__23713;
var map__23714__$1 = ((cljs.core.seq_QMARK_.call(null,map__23714))?cljs.core.apply.call(null,cljs.core.hash_map,map__23714):map__23714);
var file = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__23715){
var map__23716 = p__23715;
var map__23716__$1 = ((cljs.core.seq_QMARK_.call(null,map__23716))?cljs.core.apply.call(null,cljs.core.hash_map,map__23716):map__23716);
var namespace = cljs.core.get.call(null,map__23716__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__4761__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4762__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4763__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4764__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4765__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4765__auto__,method_table__4761__auto__,prefer_table__4762__auto__,method_cache__4763__auto__,cached_hierarchy__4764__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e23717){if((e23717 instanceof Error)){
var e = e23717;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23717;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__23718,callback){
var map__23720 = p__23718;
var map__23720__$1 = ((cljs.core.seq_QMARK_.call(null,map__23720))?cljs.core.apply.call(null,cljs.core.hash_map,map__23720):map__23720);
var file_msg = map__23720__$1;
var request_url = cljs.core.get.call(null,map__23720__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23720,map__23720__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23720,map__23720__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__23721){
var map__23723 = p__23721;
var map__23723__$1 = ((cljs.core.seq_QMARK_.call(null,map__23723))?cljs.core.apply.call(null,cljs.core.hash_map,map__23723):map__23723);
var file_msg = map__23723__$1;
var meta_data = cljs.core.get.call(null,map__23723__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__23723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__3864__auto__ = meta_data;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__3852__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__3852__auto__){
var or__3864__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__3864__auto____$1)){
return or__3864__auto____$1;
} else {
var and__3852__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__3852__auto____$1){
var or__3864__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__3864__auto____$2){
return or__3864__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__3852__auto____$1;
}
}
}
} else {
return and__3852__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__23724,callback){
var map__23726 = p__23724;
var map__23726__$1 = ((cljs.core.seq_QMARK_.call(null,map__23726))?cljs.core.apply.call(null,cljs.core.hash_map,map__23726):map__23726);
var file_msg = map__23726__$1;
var namespace = cljs.core.get.call(null,map__23726__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__23726__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__6642__auto___23813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___23813,out){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___23813,out){
return (function (state_23795){
var state_val_23796 = (state_23795[(1)]);
if((state_val_23796 === (7))){
var inst_23779 = (state_23795[(7)]);
var inst_23785 = (state_23795[(2)]);
var inst_23786 = cljs.core.async.put_BANG_.call(null,out,inst_23785);
var inst_23775 = inst_23779;
var state_23795__$1 = (function (){var statearr_23797 = state_23795;
(statearr_23797[(8)] = inst_23775);

(statearr_23797[(9)] = inst_23786);

return statearr_23797;
})();
var statearr_23798_23814 = state_23795__$1;
(statearr_23798_23814[(2)] = null);

(statearr_23798_23814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (6))){
var inst_23791 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
var statearr_23799_23815 = state_23795__$1;
(statearr_23799_23815[(2)] = inst_23791);

(statearr_23799_23815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (5))){
var inst_23789 = cljs.core.async.close_BANG_.call(null,out);
var state_23795__$1 = state_23795;
var statearr_23800_23816 = state_23795__$1;
(statearr_23800_23816[(2)] = inst_23789);

(statearr_23800_23816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (4))){
var inst_23778 = (state_23795[(10)]);
var inst_23783 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23778);
var state_23795__$1 = state_23795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23795__$1,(7),inst_23783);
} else {
if((state_val_23796 === (3))){
var inst_23793 = (state_23795[(2)]);
var state_23795__$1 = state_23795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23795__$1,inst_23793);
} else {
if((state_val_23796 === (2))){
var inst_23775 = (state_23795[(8)]);
var inst_23778 = (state_23795[(10)]);
var inst_23778__$1 = cljs.core.nth.call(null,inst_23775,(0),null);
var inst_23779 = cljs.core.nthnext.call(null,inst_23775,(1));
var inst_23780 = (inst_23778__$1 == null);
var inst_23781 = cljs.core.not.call(null,inst_23780);
var state_23795__$1 = (function (){var statearr_23801 = state_23795;
(statearr_23801[(7)] = inst_23779);

(statearr_23801[(10)] = inst_23778__$1);

return statearr_23801;
})();
if(inst_23781){
var statearr_23802_23817 = state_23795__$1;
(statearr_23802_23817[(1)] = (4));

} else {
var statearr_23803_23818 = state_23795__$1;
(statearr_23803_23818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23796 === (1))){
var inst_23773 = cljs.core.nth.call(null,files,(0),null);
var inst_23774 = cljs.core.nthnext.call(null,files,(1));
var inst_23775 = files;
var state_23795__$1 = (function (){var statearr_23804 = state_23795;
(statearr_23804[(11)] = inst_23773);

(statearr_23804[(8)] = inst_23775);

(statearr_23804[(12)] = inst_23774);

return statearr_23804;
})();
var statearr_23805_23819 = state_23795__$1;
(statearr_23805_23819[(2)] = null);

(statearr_23805_23819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6642__auto___23813,out))
;
return ((function (switch__6586__auto__,c__6642__auto___23813,out){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_23809 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23809[(0)] = state_machine__6587__auto__);

(statearr_23809[(1)] = (1));

return statearr_23809;
});
var state_machine__6587__auto____1 = (function (state_23795){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_23795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e23810){if((e23810 instanceof Object)){
var ex__6590__auto__ = e23810;
var statearr_23811_23820 = state_23795;
(statearr_23811_23820[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23821 = state_23795;
state_23795 = G__23821;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_23795){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_23795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___23813,out))
})();
var state__6644__auto__ = (function (){var statearr_23812 = f__6643__auto__.call(null);
(statearr_23812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___23813);

return statearr_23812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___23813,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__23822,p__23823){
var map__23826 = p__23822;
var map__23826__$1 = ((cljs.core.seq_QMARK_.call(null,map__23826))?cljs.core.apply.call(null,cljs.core.hash_map,map__23826):map__23826);
var opts = map__23826__$1;
var url_rewriter = cljs.core.get.call(null,map__23826__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__23827 = p__23823;
var map__23827__$1 = ((cljs.core.seq_QMARK_.call(null,map__23827))?cljs.core.apply.call(null,cljs.core.hash_map,map__23827):map__23827);
var file_msg = map__23827__$1;
var file = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__23828){
var map__23831 = p__23828;
var map__23831__$1 = ((cljs.core.seq_QMARK_.call(null,map__23831))?cljs.core.apply.call(null,cljs.core.hash_map,map__23831):map__23831);
var file = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__23831__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__3852__auto__ = eval_body__$1;
if(cljs.core.truth_(and__3852__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__3852__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e23832){var e = e23832;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__23837,p__23838){
var map__24039 = p__23837;
var map__24039__$1 = ((cljs.core.seq_QMARK_.call(null,map__24039))?cljs.core.apply.call(null,cljs.core.hash_map,map__24039):map__24039);
var opts = map__24039__$1;
var load_unchanged_files = cljs.core.get.call(null,map__24039__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__24039__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__24039__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__24040 = p__23838;
var map__24040__$1 = ((cljs.core.seq_QMARK_.call(null,map__24040))?cljs.core.apply.call(null,cljs.core.hash_map,map__24040):map__24040);
var msg = map__24040__$1;
var files = cljs.core.get.call(null,map__24040__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function (state_24164){
var state_val_24165 = (state_24164[(1)]);
if((state_val_24165 === (7))){
var inst_24052 = (state_24164[(7)]);
var inst_24051 = (state_24164[(8)]);
var inst_24053 = (state_24164[(9)]);
var inst_24054 = (state_24164[(10)]);
var inst_24059 = cljs.core._nth.call(null,inst_24052,inst_24054);
var inst_24060 = figwheel.client.file_reloading.eval_body.call(null,inst_24059);
var inst_24061 = (inst_24054 + (1));
var tmp24166 = inst_24052;
var tmp24167 = inst_24051;
var tmp24168 = inst_24053;
var inst_24051__$1 = tmp24167;
var inst_24052__$1 = tmp24166;
var inst_24053__$1 = tmp24168;
var inst_24054__$1 = inst_24061;
var state_24164__$1 = (function (){var statearr_24169 = state_24164;
(statearr_24169[(11)] = inst_24060);

(statearr_24169[(7)] = inst_24052__$1);

(statearr_24169[(8)] = inst_24051__$1);

(statearr_24169[(9)] = inst_24053__$1);

(statearr_24169[(10)] = inst_24054__$1);

return statearr_24169;
})();
var statearr_24170_24239 = state_24164__$1;
(statearr_24170_24239[(2)] = null);

(statearr_24170_24239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (20))){
var inst_24101 = (state_24164[(12)]);
var inst_24103 = (state_24164[(13)]);
var inst_24096 = (state_24164[(14)]);
var inst_24097 = (state_24164[(15)]);
var inst_24100 = (state_24164[(16)]);
var inst_24106 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24108 = (function (){var files_not_loaded = inst_24103;
var res = inst_24101;
var res_SINGLEQUOTE_ = inst_24100;
var files_SINGLEQUOTE_ = inst_24097;
var all_files = inst_24096;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24101,inst_24103,inst_24096,inst_24097,inst_24100,inst_24106,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function (p__24107){
var map__24171 = p__24107;
var map__24171__$1 = ((cljs.core.seq_QMARK_.call(null,map__24171))?cljs.core.apply.call(null,cljs.core.hash_map,map__24171):map__24171);
var file = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24101,inst_24103,inst_24096,inst_24097,inst_24100,inst_24106,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
})();
var inst_24109 = cljs.core.map.call(null,inst_24108,inst_24101);
var inst_24110 = cljs.core.pr_str.call(null,inst_24109);
var inst_24111 = figwheel.client.utils.log.call(null,inst_24110);
var inst_24112 = (function (){var files_not_loaded = inst_24103;
var res = inst_24101;
var res_SINGLEQUOTE_ = inst_24100;
var files_SINGLEQUOTE_ = inst_24097;
var all_files = inst_24096;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24101,inst_24103,inst_24096,inst_24097,inst_24100,inst_24106,inst_24108,inst_24109,inst_24110,inst_24111,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24101,inst_24103,inst_24096,inst_24097,inst_24100,inst_24106,inst_24108,inst_24109,inst_24110,inst_24111,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
})();
var inst_24113 = setTimeout(inst_24112,(10));
var state_24164__$1 = (function (){var statearr_24172 = state_24164;
(statearr_24172[(17)] = inst_24111);

(statearr_24172[(18)] = inst_24106);

return statearr_24172;
})();
var statearr_24173_24240 = state_24164__$1;
(statearr_24173_24240[(2)] = inst_24113);

(statearr_24173_24240[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (27))){
var inst_24123 = (state_24164[(19)]);
var state_24164__$1 = state_24164;
var statearr_24174_24241 = state_24164__$1;
(statearr_24174_24241[(2)] = inst_24123);

(statearr_24174_24241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (1))){
var inst_24043 = (state_24164[(20)]);
var inst_24041 = before_jsload.call(null,files);
var inst_24042 = (function (){return ((function (inst_24043,inst_24041,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function (p1__23833_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23833_SHARP_);
});
;})(inst_24043,inst_24041,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
})();
var inst_24043__$1 = cljs.core.filter.call(null,inst_24042,files);
var inst_24044 = cljs.core.not_empty.call(null,inst_24043__$1);
var state_24164__$1 = (function (){var statearr_24175 = state_24164;
(statearr_24175[(21)] = inst_24041);

(statearr_24175[(20)] = inst_24043__$1);

return statearr_24175;
})();
if(cljs.core.truth_(inst_24044)){
var statearr_24176_24242 = state_24164__$1;
(statearr_24176_24242[(1)] = (2));

} else {
var statearr_24177_24243 = state_24164__$1;
(statearr_24177_24243[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (24))){
var state_24164__$1 = state_24164;
var statearr_24178_24244 = state_24164__$1;
(statearr_24178_24244[(2)] = null);

(statearr_24178_24244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (4))){
var inst_24088 = (state_24164[(2)]);
var inst_24089 = (function (){return ((function (inst_24088,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function (p1__23834_SHARP_){
var and__3852__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23834_SHARP_);
if(cljs.core.truth_(and__3852__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23834_SHARP_));
} else {
return and__3852__auto__;
}
});
;})(inst_24088,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
})();
var inst_24090 = cljs.core.filter.call(null,inst_24089,files);
var state_24164__$1 = (function (){var statearr_24179 = state_24164;
(statearr_24179[(22)] = inst_24090);

(statearr_24179[(23)] = inst_24088);

return statearr_24179;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_24180_24245 = state_24164__$1;
(statearr_24180_24245[(1)] = (16));

} else {
var statearr_24181_24246 = state_24164__$1;
(statearr_24181_24246[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (15))){
var inst_24078 = (state_24164[(2)]);
var state_24164__$1 = state_24164;
var statearr_24182_24247 = state_24164__$1;
(statearr_24182_24247[(2)] = inst_24078);

(statearr_24182_24247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (21))){
var state_24164__$1 = state_24164;
var statearr_24183_24248 = state_24164__$1;
(statearr_24183_24248[(2)] = null);

(statearr_24183_24248[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (31))){
var inst_24131 = (state_24164[(24)]);
var inst_24141 = (state_24164[(2)]);
var inst_24142 = cljs.core.not_empty.call(null,inst_24131);
var state_24164__$1 = (function (){var statearr_24184 = state_24164;
(statearr_24184[(25)] = inst_24141);

return statearr_24184;
})();
if(cljs.core.truth_(inst_24142)){
var statearr_24185_24249 = state_24164__$1;
(statearr_24185_24249[(1)] = (32));

} else {
var statearr_24186_24250 = state_24164__$1;
(statearr_24186_24250[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (32))){
var inst_24131 = (state_24164[(24)]);
var inst_24144 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24131);
var inst_24145 = cljs.core.pr_str.call(null,inst_24144);
var inst_24146 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_24145)].join('');
var inst_24147 = figwheel.client.utils.log.call(null,inst_24146);
var state_24164__$1 = state_24164;
var statearr_24187_24251 = state_24164__$1;
(statearr_24187_24251[(2)] = inst_24147);

(statearr_24187_24251[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (33))){
var state_24164__$1 = state_24164;
var statearr_24188_24252 = state_24164__$1;
(statearr_24188_24252[(2)] = null);

(statearr_24188_24252[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (13))){
var inst_24064 = (state_24164[(26)]);
var inst_24068 = cljs.core.chunk_first.call(null,inst_24064);
var inst_24069 = cljs.core.chunk_rest.call(null,inst_24064);
var inst_24070 = cljs.core.count.call(null,inst_24068);
var inst_24051 = inst_24069;
var inst_24052 = inst_24068;
var inst_24053 = inst_24070;
var inst_24054 = (0);
var state_24164__$1 = (function (){var statearr_24189 = state_24164;
(statearr_24189[(7)] = inst_24052);

(statearr_24189[(8)] = inst_24051);

(statearr_24189[(9)] = inst_24053);

(statearr_24189[(10)] = inst_24054);

return statearr_24189;
})();
var statearr_24190_24253 = state_24164__$1;
(statearr_24190_24253[(2)] = null);

(statearr_24190_24253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (22))){
var inst_24103 = (state_24164[(13)]);
var inst_24116 = (state_24164[(2)]);
var inst_24117 = cljs.core.not_empty.call(null,inst_24103);
var state_24164__$1 = (function (){var statearr_24191 = state_24164;
(statearr_24191[(27)] = inst_24116);

return statearr_24191;
})();
if(cljs.core.truth_(inst_24117)){
var statearr_24192_24254 = state_24164__$1;
(statearr_24192_24254[(1)] = (23));

} else {
var statearr_24193_24255 = state_24164__$1;
(statearr_24193_24255[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (36))){
var state_24164__$1 = state_24164;
var statearr_24194_24256 = state_24164__$1;
(statearr_24194_24256[(2)] = null);

(statearr_24194_24256[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (29))){
var inst_24132 = (state_24164[(28)]);
var inst_24135 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24132);
var inst_24136 = cljs.core.pr_str.call(null,inst_24135);
var inst_24137 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24136)].join('');
var inst_24138 = figwheel.client.utils.log.call(null,inst_24137);
var state_24164__$1 = state_24164;
var statearr_24195_24257 = state_24164__$1;
(statearr_24195_24257[(2)] = inst_24138);

(statearr_24195_24257[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (6))){
var inst_24085 = (state_24164[(2)]);
var state_24164__$1 = state_24164;
var statearr_24196_24258 = state_24164__$1;
(statearr_24196_24258[(2)] = inst_24085);

(statearr_24196_24258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (28))){
var inst_24132 = (state_24164[(28)]);
var inst_24129 = (state_24164[(2)]);
var inst_24130 = cljs.core.get.call(null,inst_24129,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24131 = cljs.core.get.call(null,inst_24129,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_24132__$1 = cljs.core.get.call(null,inst_24129,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24133 = cljs.core.not_empty.call(null,inst_24132__$1);
var state_24164__$1 = (function (){var statearr_24197 = state_24164;
(statearr_24197[(24)] = inst_24131);

(statearr_24197[(28)] = inst_24132__$1);

(statearr_24197[(29)] = inst_24130);

return statearr_24197;
})();
if(cljs.core.truth_(inst_24133)){
var statearr_24198_24259 = state_24164__$1;
(statearr_24198_24259[(1)] = (29));

} else {
var statearr_24199_24260 = state_24164__$1;
(statearr_24199_24260[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (25))){
var inst_24162 = (state_24164[(2)]);
var state_24164__$1 = state_24164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24164__$1,inst_24162);
} else {
if((state_val_24165 === (34))){
var inst_24130 = (state_24164[(29)]);
var inst_24150 = (state_24164[(2)]);
var inst_24151 = cljs.core.not_empty.call(null,inst_24130);
var state_24164__$1 = (function (){var statearr_24200 = state_24164;
(statearr_24200[(30)] = inst_24150);

return statearr_24200;
})();
if(cljs.core.truth_(inst_24151)){
var statearr_24201_24261 = state_24164__$1;
(statearr_24201_24261[(1)] = (35));

} else {
var statearr_24202_24262 = state_24164__$1;
(statearr_24202_24262[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (17))){
var inst_24090 = (state_24164[(22)]);
var state_24164__$1 = state_24164;
var statearr_24203_24263 = state_24164__$1;
(statearr_24203_24263[(2)] = inst_24090);

(statearr_24203_24263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (3))){
var state_24164__$1 = state_24164;
var statearr_24204_24264 = state_24164__$1;
(statearr_24204_24264[(2)] = null);

(statearr_24204_24264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (12))){
var inst_24081 = (state_24164[(2)]);
var state_24164__$1 = state_24164;
var statearr_24205_24265 = state_24164__$1;
(statearr_24205_24265[(2)] = inst_24081);

(statearr_24205_24265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (2))){
var inst_24043 = (state_24164[(20)]);
var inst_24050 = cljs.core.seq.call(null,inst_24043);
var inst_24051 = inst_24050;
var inst_24052 = null;
var inst_24053 = (0);
var inst_24054 = (0);
var state_24164__$1 = (function (){var statearr_24206 = state_24164;
(statearr_24206[(7)] = inst_24052);

(statearr_24206[(8)] = inst_24051);

(statearr_24206[(9)] = inst_24053);

(statearr_24206[(10)] = inst_24054);

return statearr_24206;
})();
var statearr_24207_24266 = state_24164__$1;
(statearr_24207_24266[(2)] = null);

(statearr_24207_24266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (23))){
var inst_24101 = (state_24164[(12)]);
var inst_24103 = (state_24164[(13)]);
var inst_24096 = (state_24164[(14)]);
var inst_24097 = (state_24164[(15)]);
var inst_24123 = (state_24164[(19)]);
var inst_24100 = (state_24164[(16)]);
var inst_24119 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24122 = (function (){var files_not_loaded = inst_24103;
var res = inst_24101;
var res_SINGLEQUOTE_ = inst_24100;
var files_SINGLEQUOTE_ = inst_24097;
var all_files = inst_24096;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24101,inst_24103,inst_24096,inst_24097,inst_24123,inst_24100,inst_24119,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function (p__24121){
var map__24208 = p__24121;
var map__24208__$1 = ((cljs.core.seq_QMARK_.call(null,map__24208))?cljs.core.apply.call(null,cljs.core.hash_map,map__24208):map__24208);
var meta_data = cljs.core.get.call(null,map__24208__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24101,inst_24103,inst_24096,inst_24097,inst_24123,inst_24100,inst_24119,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
})();
var inst_24123__$1 = cljs.core.group_by.call(null,inst_24122,inst_24103);
var inst_24124 = cljs.core.seq_QMARK_.call(null,inst_24123__$1);
var state_24164__$1 = (function (){var statearr_24209 = state_24164;
(statearr_24209[(19)] = inst_24123__$1);

(statearr_24209[(31)] = inst_24119);

return statearr_24209;
})();
if(inst_24124){
var statearr_24210_24267 = state_24164__$1;
(statearr_24210_24267[(1)] = (26));

} else {
var statearr_24211_24268 = state_24164__$1;
(statearr_24211_24268[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (35))){
var inst_24130 = (state_24164[(29)]);
var inst_24153 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24130);
var inst_24154 = cljs.core.pr_str.call(null,inst_24153);
var inst_24155 = [cljs.core.str("not required: "),cljs.core.str(inst_24154)].join('');
var inst_24156 = figwheel.client.utils.log.call(null,inst_24155);
var state_24164__$1 = state_24164;
var statearr_24212_24269 = state_24164__$1;
(statearr_24212_24269[(2)] = inst_24156);

(statearr_24212_24269[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (19))){
var inst_24101 = (state_24164[(12)]);
var inst_24096 = (state_24164[(14)]);
var inst_24097 = (state_24164[(15)]);
var inst_24100 = (state_24164[(16)]);
var inst_24100__$1 = (state_24164[(2)]);
var inst_24101__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24100__$1);
var inst_24102 = (function (){var res = inst_24101__$1;
var res_SINGLEQUOTE_ = inst_24100__$1;
var files_SINGLEQUOTE_ = inst_24097;
var all_files = inst_24096;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24101,inst_24096,inst_24097,inst_24100,inst_24100__$1,inst_24101__$1,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function (p1__23836_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23836_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_24101,inst_24096,inst_24097,inst_24100,inst_24100__$1,inst_24101__$1,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
})();
var inst_24103 = cljs.core.filter.call(null,inst_24102,inst_24100__$1);
var inst_24104 = cljs.core.not_empty.call(null,inst_24101__$1);
var state_24164__$1 = (function (){var statearr_24213 = state_24164;
(statearr_24213[(12)] = inst_24101__$1);

(statearr_24213[(13)] = inst_24103);

(statearr_24213[(16)] = inst_24100__$1);

return statearr_24213;
})();
if(cljs.core.truth_(inst_24104)){
var statearr_24214_24270 = state_24164__$1;
(statearr_24214_24270[(1)] = (20));

} else {
var statearr_24215_24271 = state_24164__$1;
(statearr_24215_24271[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (11))){
var state_24164__$1 = state_24164;
var statearr_24216_24272 = state_24164__$1;
(statearr_24216_24272[(2)] = null);

(statearr_24216_24272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (9))){
var inst_24083 = (state_24164[(2)]);
var state_24164__$1 = state_24164;
var statearr_24217_24273 = state_24164__$1;
(statearr_24217_24273[(2)] = inst_24083);

(statearr_24217_24273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (5))){
var inst_24053 = (state_24164[(9)]);
var inst_24054 = (state_24164[(10)]);
var inst_24056 = (inst_24054 < inst_24053);
var inst_24057 = inst_24056;
var state_24164__$1 = state_24164;
if(cljs.core.truth_(inst_24057)){
var statearr_24218_24274 = state_24164__$1;
(statearr_24218_24274[(1)] = (7));

} else {
var statearr_24219_24275 = state_24164__$1;
(statearr_24219_24275[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (14))){
var inst_24064 = (state_24164[(26)]);
var inst_24073 = cljs.core.first.call(null,inst_24064);
var inst_24074 = figwheel.client.file_reloading.eval_body.call(null,inst_24073);
var inst_24075 = cljs.core.next.call(null,inst_24064);
var inst_24051 = inst_24075;
var inst_24052 = null;
var inst_24053 = (0);
var inst_24054 = (0);
var state_24164__$1 = (function (){var statearr_24220 = state_24164;
(statearr_24220[(7)] = inst_24052);

(statearr_24220[(8)] = inst_24051);

(statearr_24220[(32)] = inst_24074);

(statearr_24220[(9)] = inst_24053);

(statearr_24220[(10)] = inst_24054);

return statearr_24220;
})();
var statearr_24221_24276 = state_24164__$1;
(statearr_24221_24276[(2)] = null);

(statearr_24221_24276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (26))){
var inst_24123 = (state_24164[(19)]);
var inst_24126 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24123);
var state_24164__$1 = state_24164;
var statearr_24222_24277 = state_24164__$1;
(statearr_24222_24277[(2)] = inst_24126);

(statearr_24222_24277[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (16))){
var inst_24090 = (state_24164[(22)]);
var inst_24092 = (function (){var all_files = inst_24090;
return ((function (all_files,inst_24090,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function (p1__23835_SHARP_){
return cljs.core.update_in.call(null,p1__23835_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_24090,state_val_24165,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
})();
var inst_24093 = cljs.core.map.call(null,inst_24092,inst_24090);
var state_24164__$1 = state_24164;
var statearr_24223_24278 = state_24164__$1;
(statearr_24223_24278[(2)] = inst_24093);

(statearr_24223_24278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (30))){
var state_24164__$1 = state_24164;
var statearr_24224_24279 = state_24164__$1;
(statearr_24224_24279[(2)] = null);

(statearr_24224_24279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (10))){
var inst_24064 = (state_24164[(26)]);
var inst_24066 = cljs.core.chunked_seq_QMARK_.call(null,inst_24064);
var state_24164__$1 = state_24164;
if(inst_24066){
var statearr_24225_24280 = state_24164__$1;
(statearr_24225_24280[(1)] = (13));

} else {
var statearr_24226_24281 = state_24164__$1;
(statearr_24226_24281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (18))){
var inst_24096 = (state_24164[(14)]);
var inst_24097 = (state_24164[(15)]);
var inst_24096__$1 = (state_24164[(2)]);
var inst_24097__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_24096__$1);
var inst_24098 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24097__$1);
var state_24164__$1 = (function (){var statearr_24227 = state_24164;
(statearr_24227[(14)] = inst_24096__$1);

(statearr_24227[(15)] = inst_24097__$1);

return statearr_24227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24164__$1,(19),inst_24098);
} else {
if((state_val_24165 === (37))){
var inst_24159 = (state_24164[(2)]);
var state_24164__$1 = state_24164;
var statearr_24228_24282 = state_24164__$1;
(statearr_24228_24282[(2)] = inst_24159);

(statearr_24228_24282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24165 === (8))){
var inst_24064 = (state_24164[(26)]);
var inst_24051 = (state_24164[(8)]);
var inst_24064__$1 = cljs.core.seq.call(null,inst_24051);
var state_24164__$1 = (function (){var statearr_24229 = state_24164;
(statearr_24229[(26)] = inst_24064__$1);

return statearr_24229;
})();
if(inst_24064__$1){
var statearr_24230_24283 = state_24164__$1;
(statearr_24230_24283[(1)] = (10));

} else {
var statearr_24231_24284 = state_24164__$1;
(statearr_24231_24284[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
;
return ((function (switch__6586__auto__,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_24235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24235[(0)] = state_machine__6587__auto__);

(statearr_24235[(1)] = (1));

return statearr_24235;
});
var state_machine__6587__auto____1 = (function (state_24164){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_24164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e24236){if((e24236 instanceof Object)){
var ex__6590__auto__ = e24236;
var statearr_24237_24285 = state_24164;
(statearr_24237_24285[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24286 = state_24164;
state_24164 = G__24286;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_24164){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_24164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
})();
var state__6644__auto__ = (function (){var statearr_24238 = f__6643__auto__.call(null);
(statearr_24238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_24238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__,map__24039,map__24039__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__24040,map__24040__$1,msg,files))
);

return c__6642__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__24289,link){
var map__24291 = p__24289;
var map__24291__$1 = ((cljs.core.seq_QMARK_.call(null,map__24291))?cljs.core.apply.call(null,cljs.core.hash_map,map__24291):map__24291);
var file = cljs.core.get.call(null,map__24291__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__24291,map__24291__$1,file){
return (function (p1__24287_SHARP_,p2__24288_SHARP_){
if(cljs.core._EQ_.call(null,p1__24287_SHARP_,p2__24288_SHARP_)){
return p1__24287_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__24291,map__24291__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24295){
var map__24296 = p__24295;
var map__24296__$1 = ((cljs.core.seq_QMARK_.call(null,map__24296))?cljs.core.apply.call(null,cljs.core.hash_map,map__24296):map__24296);
var current_url_length = cljs.core.get.call(null,map__24296__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__24296__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24292_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24292_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__24297){
var map__24299 = p__24297;
var map__24299__$1 = ((cljs.core.seq_QMARK_.call(null,map__24299))?cljs.core.apply.call(null,cljs.core.hash_map,map__24299):map__24299);
var f_data = map__24299__$1;
var request_url = cljs.core.get.call(null,map__24299__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__24299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__3864__auto__ = request_url;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__24300,files_msg){
var map__24322 = p__24300;
var map__24322__$1 = ((cljs.core.seq_QMARK_.call(null,map__24322))?cljs.core.apply.call(null,cljs.core.hash_map,map__24322):map__24322);
var opts = map__24322__$1;
var on_cssload = cljs.core.get.call(null,map__24322__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24323_24343 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24324_24344 = null;
var count__24325_24345 = (0);
var i__24326_24346 = (0);
while(true){
if((i__24326_24346 < count__24325_24345)){
var f_24347 = cljs.core._nth.call(null,chunk__24324_24344,i__24326_24346);
figwheel.client.file_reloading.reload_css_file.call(null,f_24347);

var G__24348 = seq__24323_24343;
var G__24349 = chunk__24324_24344;
var G__24350 = count__24325_24345;
var G__24351 = (i__24326_24346 + (1));
seq__24323_24343 = G__24348;
chunk__24324_24344 = G__24349;
count__24325_24345 = G__24350;
i__24326_24346 = G__24351;
continue;
} else {
var temp__4126__auto___24352 = cljs.core.seq.call(null,seq__24323_24343);
if(temp__4126__auto___24352){
var seq__24323_24353__$1 = temp__4126__auto___24352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24323_24353__$1)){
var c__4651__auto___24354 = cljs.core.chunk_first.call(null,seq__24323_24353__$1);
var G__24355 = cljs.core.chunk_rest.call(null,seq__24323_24353__$1);
var G__24356 = c__4651__auto___24354;
var G__24357 = cljs.core.count.call(null,c__4651__auto___24354);
var G__24358 = (0);
seq__24323_24343 = G__24355;
chunk__24324_24344 = G__24356;
count__24325_24345 = G__24357;
i__24326_24346 = G__24358;
continue;
} else {
var f_24359 = cljs.core.first.call(null,seq__24323_24353__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24359);

var G__24360 = cljs.core.next.call(null,seq__24323_24353__$1);
var G__24361 = null;
var G__24362 = (0);
var G__24363 = (0);
seq__24323_24343 = G__24360;
chunk__24324_24344 = G__24361;
count__24325_24345 = G__24362;
i__24326_24346 = G__24363;
continue;
}
} else {
}
}
break;
}

var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__,map__24322,map__24322__$1,opts,on_cssload){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__,map__24322,map__24322__$1,opts,on_cssload){
return (function (state_24333){
var state_val_24334 = (state_24333[(1)]);
if((state_val_24334 === (2))){
var inst_24329 = (state_24333[(2)]);
var inst_24330 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_24331 = on_cssload.call(null,inst_24330);
var state_24333__$1 = (function (){var statearr_24335 = state_24333;
(statearr_24335[(7)] = inst_24329);

return statearr_24335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24333__$1,inst_24331);
} else {
if((state_val_24334 === (1))){
var inst_24327 = cljs.core.async.timeout.call(null,(100));
var state_24333__$1 = state_24333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24333__$1,(2),inst_24327);
} else {
return null;
}
}
});})(c__6642__auto__,map__24322,map__24322__$1,opts,on_cssload))
;
return ((function (switch__6586__auto__,c__6642__auto__,map__24322,map__24322__$1,opts,on_cssload){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_24339 = [null,null,null,null,null,null,null,null];
(statearr_24339[(0)] = state_machine__6587__auto__);

(statearr_24339[(1)] = (1));

return statearr_24339;
});
var state_machine__6587__auto____1 = (function (state_24333){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_24333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e24340){if((e24340 instanceof Object)){
var ex__6590__auto__ = e24340;
var statearr_24341_24364 = state_24333;
(statearr_24341_24364[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24365 = state_24333;
state_24333 = G__24365;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_24333){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_24333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__,map__24322,map__24322__$1,opts,on_cssload))
})();
var state__6644__auto__ = (function (){var statearr_24342 = f__6643__auto__.call(null);
(statearr_24342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_24342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__,map__24322,map__24322__$1,opts,on_cssload))
);

return c__6642__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1435268446021