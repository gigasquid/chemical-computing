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
return cljs.core.reduce.call(null,(function (p1__35474_SHARP_,p2__35475_SHARP_){
var and__16133__auto__ = p1__35474_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__35475_SHARP_;
} else {
return and__16133__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__16145__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16145__auto__){
return or__16145__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__35477_SHARP_,p2__35476_SHARP_){
return [cljs.core.str(p2__35476_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__16145__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16145__auto__){
return or__16145__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16145__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35478){
var map__35479 = p__35478;
var map__35479__$1 = ((cljs.core.seq_QMARK_.call(null,map__35479))?cljs.core.apply.call(null,cljs.core.hash_map,map__35479):map__35479);
var file = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35480){
var map__35481 = p__35480;
var map__35481__$1 = ((cljs.core.seq_QMARK_.call(null,map__35481))?cljs.core.apply.call(null,cljs.core.hash_map,map__35481):map__35481);
var namespace = cljs.core.get.call(null,map__35481__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e35482){if((e35482 instanceof Error)){
var e = e35482;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35482;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__35483,callback){
var map__35485 = p__35483;
var map__35485__$1 = ((cljs.core.seq_QMARK_.call(null,map__35485))?cljs.core.apply.call(null,cljs.core.hash_map,map__35485):map__35485);
var file_msg = map__35485__$1;
var request_url = cljs.core.get.call(null,map__35485__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35485,map__35485__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35485,map__35485__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__35486){
var map__35488 = p__35486;
var map__35488__$1 = ((cljs.core.seq_QMARK_.call(null,map__35488))?cljs.core.apply.call(null,cljs.core.hash_map,map__35488):map__35488);
var file_msg = map__35488__$1;
var meta_data = cljs.core.get.call(null,map__35488__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__35488__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__16145__auto__ = meta_data;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16133__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16133__auto__){
var or__16145__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16145__auto____$1)){
return or__16145__auto____$1;
} else {
var and__16133__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16133__auto____$1){
var or__16145__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16145__auto____$2){
return or__16145__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16133__auto____$1;
}
}
}
} else {
return and__16133__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__35489,callback){
var map__35491 = p__35489;
var map__35491__$1 = ((cljs.core.seq_QMARK_.call(null,map__35491))?cljs.core.apply.call(null,cljs.core.hash_map,map__35491):map__35491);
var file_msg = map__35491__$1;
var namespace = cljs.core.get.call(null,map__35491__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__35491__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__18618__auto___35578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___35578,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___35578,out){
return (function (state_35560){
var state_val_35561 = (state_35560[(1)]);
if((state_val_35561 === (7))){
var inst_35544 = (state_35560[(7)]);
var inst_35550 = (state_35560[(2)]);
var inst_35551 = cljs.core.async.put_BANG_.call(null,out,inst_35550);
var inst_35540 = inst_35544;
var state_35560__$1 = (function (){var statearr_35562 = state_35560;
(statearr_35562[(8)] = inst_35540);

(statearr_35562[(9)] = inst_35551);

return statearr_35562;
})();
var statearr_35563_35579 = state_35560__$1;
(statearr_35563_35579[(2)] = null);

(statearr_35563_35579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (6))){
var inst_35556 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
var statearr_35564_35580 = state_35560__$1;
(statearr_35564_35580[(2)] = inst_35556);

(statearr_35564_35580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (5))){
var inst_35554 = cljs.core.async.close_BANG_.call(null,out);
var state_35560__$1 = state_35560;
var statearr_35565_35581 = state_35560__$1;
(statearr_35565_35581[(2)] = inst_35554);

(statearr_35565_35581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (4))){
var inst_35543 = (state_35560[(10)]);
var inst_35548 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35543);
var state_35560__$1 = state_35560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35560__$1,(7),inst_35548);
} else {
if((state_val_35561 === (3))){
var inst_35558 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35560__$1,inst_35558);
} else {
if((state_val_35561 === (2))){
var inst_35543 = (state_35560[(10)]);
var inst_35540 = (state_35560[(8)]);
var inst_35543__$1 = cljs.core.nth.call(null,inst_35540,(0),null);
var inst_35544 = cljs.core.nthnext.call(null,inst_35540,(1));
var inst_35545 = (inst_35543__$1 == null);
var inst_35546 = cljs.core.not.call(null,inst_35545);
var state_35560__$1 = (function (){var statearr_35566 = state_35560;
(statearr_35566[(7)] = inst_35544);

(statearr_35566[(10)] = inst_35543__$1);

return statearr_35566;
})();
if(inst_35546){
var statearr_35567_35582 = state_35560__$1;
(statearr_35567_35582[(1)] = (4));

} else {
var statearr_35568_35583 = state_35560__$1;
(statearr_35568_35583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (1))){
var inst_35538 = cljs.core.nth.call(null,files,(0),null);
var inst_35539 = cljs.core.nthnext.call(null,files,(1));
var inst_35540 = files;
var state_35560__$1 = (function (){var statearr_35569 = state_35560;
(statearr_35569[(11)] = inst_35539);

(statearr_35569[(12)] = inst_35538);

(statearr_35569[(8)] = inst_35540);

return statearr_35569;
})();
var statearr_35570_35584 = state_35560__$1;
(statearr_35570_35584[(2)] = null);

(statearr_35570_35584[(1)] = (2));


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
});})(c__18618__auto___35578,out))
;
return ((function (switch__18562__auto__,c__18618__auto___35578,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_35574 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35574[(0)] = state_machine__18563__auto__);

(statearr_35574[(1)] = (1));

return statearr_35574;
});
var state_machine__18563__auto____1 = (function (state_35560){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35575){if((e35575 instanceof Object)){
var ex__18566__auto__ = e35575;
var statearr_35576_35585 = state_35560;
(statearr_35576_35585[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35586 = state_35560;
state_35560 = G__35586;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35560){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___35578,out))
})();
var state__18620__auto__ = (function (){var statearr_35577 = f__18619__auto__.call(null);
(statearr_35577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___35578);

return statearr_35577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___35578,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__35587,p__35588){
var map__35591 = p__35587;
var map__35591__$1 = ((cljs.core.seq_QMARK_.call(null,map__35591))?cljs.core.apply.call(null,cljs.core.hash_map,map__35591):map__35591);
var opts = map__35591__$1;
var url_rewriter = cljs.core.get.call(null,map__35591__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35592 = p__35588;
var map__35592__$1 = ((cljs.core.seq_QMARK_.call(null,map__35592))?cljs.core.apply.call(null,cljs.core.hash_map,map__35592):map__35592);
var file_msg = map__35592__$1;
var file = cljs.core.get.call(null,map__35592__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__35593){
var map__35596 = p__35593;
var map__35596__$1 = ((cljs.core.seq_QMARK_.call(null,map__35596))?cljs.core.apply.call(null,cljs.core.hash_map,map__35596):map__35596);
var file = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__16133__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16133__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16133__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e35597){var e = e35597;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__35602,p__35603){
var map__35804 = p__35602;
var map__35804__$1 = ((cljs.core.seq_QMARK_.call(null,map__35804))?cljs.core.apply.call(null,cljs.core.hash_map,map__35804):map__35804);
var opts = map__35804__$1;
var load_unchanged_files = cljs.core.get.call(null,map__35804__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__35804__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__35804__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__35805 = p__35603;
var map__35805__$1 = ((cljs.core.seq_QMARK_.call(null,map__35805))?cljs.core.apply.call(null,cljs.core.hash_map,map__35805):map__35805);
var msg = map__35805__$1;
var files = cljs.core.get.call(null,map__35805__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function (state_35929){
var state_val_35930 = (state_35929[(1)]);
if((state_val_35930 === (7))){
var inst_35817 = (state_35929[(7)]);
var inst_35819 = (state_35929[(8)]);
var inst_35818 = (state_35929[(9)]);
var inst_35816 = (state_35929[(10)]);
var inst_35824 = cljs.core._nth.call(null,inst_35817,inst_35819);
var inst_35825 = figwheel.client.file_reloading.eval_body.call(null,inst_35824);
var inst_35826 = (inst_35819 + (1));
var tmp35931 = inst_35817;
var tmp35932 = inst_35818;
var tmp35933 = inst_35816;
var inst_35816__$1 = tmp35933;
var inst_35817__$1 = tmp35931;
var inst_35818__$1 = tmp35932;
var inst_35819__$1 = inst_35826;
var state_35929__$1 = (function (){var statearr_35934 = state_35929;
(statearr_35934[(7)] = inst_35817__$1);

(statearr_35934[(8)] = inst_35819__$1);

(statearr_35934[(9)] = inst_35818__$1);

(statearr_35934[(11)] = inst_35825);

(statearr_35934[(10)] = inst_35816__$1);

return statearr_35934;
})();
var statearr_35935_36004 = state_35929__$1;
(statearr_35935_36004[(2)] = null);

(statearr_35935_36004[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (20))){
var inst_35861 = (state_35929[(12)]);
var inst_35862 = (state_35929[(13)]);
var inst_35865 = (state_35929[(14)]);
var inst_35868 = (state_35929[(15)]);
var inst_35866 = (state_35929[(16)]);
var inst_35871 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35873 = (function (){var files_not_loaded = inst_35868;
var res = inst_35866;
var res_SINGLEQUOTE_ = inst_35865;
var files_SINGLEQUOTE_ = inst_35862;
var all_files = inst_35861;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35861,inst_35862,inst_35865,inst_35868,inst_35866,inst_35871,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function (p__35872){
var map__35936 = p__35872;
var map__35936__$1 = ((cljs.core.seq_QMARK_.call(null,map__35936))?cljs.core.apply.call(null,cljs.core.hash_map,map__35936):map__35936);
var file = cljs.core.get.call(null,map__35936__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__35936__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35861,inst_35862,inst_35865,inst_35868,inst_35866,inst_35871,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
})();
var inst_35874 = cljs.core.map.call(null,inst_35873,inst_35866);
var inst_35875 = cljs.core.pr_str.call(null,inst_35874);
var inst_35876 = figwheel.client.utils.log.call(null,inst_35875);
var inst_35877 = (function (){var files_not_loaded = inst_35868;
var res = inst_35866;
var res_SINGLEQUOTE_ = inst_35865;
var files_SINGLEQUOTE_ = inst_35862;
var all_files = inst_35861;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35861,inst_35862,inst_35865,inst_35868,inst_35866,inst_35871,inst_35873,inst_35874,inst_35875,inst_35876,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35861,inst_35862,inst_35865,inst_35868,inst_35866,inst_35871,inst_35873,inst_35874,inst_35875,inst_35876,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
})();
var inst_35878 = setTimeout(inst_35877,(10));
var state_35929__$1 = (function (){var statearr_35937 = state_35929;
(statearr_35937[(17)] = inst_35876);

(statearr_35937[(18)] = inst_35871);

return statearr_35937;
})();
var statearr_35938_36005 = state_35929__$1;
(statearr_35938_36005[(2)] = inst_35878);

(statearr_35938_36005[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (27))){
var inst_35888 = (state_35929[(19)]);
var state_35929__$1 = state_35929;
var statearr_35939_36006 = state_35929__$1;
(statearr_35939_36006[(2)] = inst_35888);

(statearr_35939_36006[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (1))){
var inst_35808 = (state_35929[(20)]);
var inst_35806 = before_jsload.call(null,files);
var inst_35807 = (function (){return ((function (inst_35808,inst_35806,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function (p1__35598_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35598_SHARP_);
});
;})(inst_35808,inst_35806,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
})();
var inst_35808__$1 = cljs.core.filter.call(null,inst_35807,files);
var inst_35809 = cljs.core.not_empty.call(null,inst_35808__$1);
var state_35929__$1 = (function (){var statearr_35940 = state_35929;
(statearr_35940[(20)] = inst_35808__$1);

(statearr_35940[(21)] = inst_35806);

return statearr_35940;
})();
if(cljs.core.truth_(inst_35809)){
var statearr_35941_36007 = state_35929__$1;
(statearr_35941_36007[(1)] = (2));

} else {
var statearr_35942_36008 = state_35929__$1;
(statearr_35942_36008[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (24))){
var state_35929__$1 = state_35929;
var statearr_35943_36009 = state_35929__$1;
(statearr_35943_36009[(2)] = null);

(statearr_35943_36009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (4))){
var inst_35853 = (state_35929[(2)]);
var inst_35854 = (function (){return ((function (inst_35853,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function (p1__35599_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35599_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35599_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_35853,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
})();
var inst_35855 = cljs.core.filter.call(null,inst_35854,files);
var state_35929__$1 = (function (){var statearr_35944 = state_35929;
(statearr_35944[(22)] = inst_35853);

(statearr_35944[(23)] = inst_35855);

return statearr_35944;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35945_36010 = state_35929__$1;
(statearr_35945_36010[(1)] = (16));

} else {
var statearr_35946_36011 = state_35929__$1;
(statearr_35946_36011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (15))){
var inst_35843 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35947_36012 = state_35929__$1;
(statearr_35947_36012[(2)] = inst_35843);

(statearr_35947_36012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (21))){
var state_35929__$1 = state_35929;
var statearr_35948_36013 = state_35929__$1;
(statearr_35948_36013[(2)] = null);

(statearr_35948_36013[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (31))){
var inst_35896 = (state_35929[(24)]);
var inst_35906 = (state_35929[(2)]);
var inst_35907 = cljs.core.not_empty.call(null,inst_35896);
var state_35929__$1 = (function (){var statearr_35949 = state_35929;
(statearr_35949[(25)] = inst_35906);

return statearr_35949;
})();
if(cljs.core.truth_(inst_35907)){
var statearr_35950_36014 = state_35929__$1;
(statearr_35950_36014[(1)] = (32));

} else {
var statearr_35951_36015 = state_35929__$1;
(statearr_35951_36015[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (32))){
var inst_35896 = (state_35929[(24)]);
var inst_35909 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35896);
var inst_35910 = cljs.core.pr_str.call(null,inst_35909);
var inst_35911 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35910)].join('');
var inst_35912 = figwheel.client.utils.log.call(null,inst_35911);
var state_35929__$1 = state_35929;
var statearr_35952_36016 = state_35929__$1;
(statearr_35952_36016[(2)] = inst_35912);

(statearr_35952_36016[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (33))){
var state_35929__$1 = state_35929;
var statearr_35953_36017 = state_35929__$1;
(statearr_35953_36017[(2)] = null);

(statearr_35953_36017[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (13))){
var inst_35829 = (state_35929[(26)]);
var inst_35833 = cljs.core.chunk_first.call(null,inst_35829);
var inst_35834 = cljs.core.chunk_rest.call(null,inst_35829);
var inst_35835 = cljs.core.count.call(null,inst_35833);
var inst_35816 = inst_35834;
var inst_35817 = inst_35833;
var inst_35818 = inst_35835;
var inst_35819 = (0);
var state_35929__$1 = (function (){var statearr_35954 = state_35929;
(statearr_35954[(7)] = inst_35817);

(statearr_35954[(8)] = inst_35819);

(statearr_35954[(9)] = inst_35818);

(statearr_35954[(10)] = inst_35816);

return statearr_35954;
})();
var statearr_35955_36018 = state_35929__$1;
(statearr_35955_36018[(2)] = null);

(statearr_35955_36018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (22))){
var inst_35868 = (state_35929[(15)]);
var inst_35881 = (state_35929[(2)]);
var inst_35882 = cljs.core.not_empty.call(null,inst_35868);
var state_35929__$1 = (function (){var statearr_35956 = state_35929;
(statearr_35956[(27)] = inst_35881);

return statearr_35956;
})();
if(cljs.core.truth_(inst_35882)){
var statearr_35957_36019 = state_35929__$1;
(statearr_35957_36019[(1)] = (23));

} else {
var statearr_35958_36020 = state_35929__$1;
(statearr_35958_36020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (36))){
var state_35929__$1 = state_35929;
var statearr_35959_36021 = state_35929__$1;
(statearr_35959_36021[(2)] = null);

(statearr_35959_36021[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (29))){
var inst_35897 = (state_35929[(28)]);
var inst_35900 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35897);
var inst_35901 = cljs.core.pr_str.call(null,inst_35900);
var inst_35902 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35901)].join('');
var inst_35903 = figwheel.client.utils.log.call(null,inst_35902);
var state_35929__$1 = state_35929;
var statearr_35960_36022 = state_35929__$1;
(statearr_35960_36022[(2)] = inst_35903);

(statearr_35960_36022[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (6))){
var inst_35850 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35961_36023 = state_35929__$1;
(statearr_35961_36023[(2)] = inst_35850);

(statearr_35961_36023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (28))){
var inst_35897 = (state_35929[(28)]);
var inst_35894 = (state_35929[(2)]);
var inst_35895 = cljs.core.get.call(null,inst_35894,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35896 = cljs.core.get.call(null,inst_35894,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35897__$1 = cljs.core.get.call(null,inst_35894,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35898 = cljs.core.not_empty.call(null,inst_35897__$1);
var state_35929__$1 = (function (){var statearr_35962 = state_35929;
(statearr_35962[(29)] = inst_35895);

(statearr_35962[(28)] = inst_35897__$1);

(statearr_35962[(24)] = inst_35896);

return statearr_35962;
})();
if(cljs.core.truth_(inst_35898)){
var statearr_35963_36024 = state_35929__$1;
(statearr_35963_36024[(1)] = (29));

} else {
var statearr_35964_36025 = state_35929__$1;
(statearr_35964_36025[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (25))){
var inst_35927 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35929__$1,inst_35927);
} else {
if((state_val_35930 === (34))){
var inst_35895 = (state_35929[(29)]);
var inst_35915 = (state_35929[(2)]);
var inst_35916 = cljs.core.not_empty.call(null,inst_35895);
var state_35929__$1 = (function (){var statearr_35965 = state_35929;
(statearr_35965[(30)] = inst_35915);

return statearr_35965;
})();
if(cljs.core.truth_(inst_35916)){
var statearr_35966_36026 = state_35929__$1;
(statearr_35966_36026[(1)] = (35));

} else {
var statearr_35967_36027 = state_35929__$1;
(statearr_35967_36027[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (17))){
var inst_35855 = (state_35929[(23)]);
var state_35929__$1 = state_35929;
var statearr_35968_36028 = state_35929__$1;
(statearr_35968_36028[(2)] = inst_35855);

(statearr_35968_36028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (3))){
var state_35929__$1 = state_35929;
var statearr_35969_36029 = state_35929__$1;
(statearr_35969_36029[(2)] = null);

(statearr_35969_36029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (12))){
var inst_35846 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35970_36030 = state_35929__$1;
(statearr_35970_36030[(2)] = inst_35846);

(statearr_35970_36030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (2))){
var inst_35808 = (state_35929[(20)]);
var inst_35815 = cljs.core.seq.call(null,inst_35808);
var inst_35816 = inst_35815;
var inst_35817 = null;
var inst_35818 = (0);
var inst_35819 = (0);
var state_35929__$1 = (function (){var statearr_35971 = state_35929;
(statearr_35971[(7)] = inst_35817);

(statearr_35971[(8)] = inst_35819);

(statearr_35971[(9)] = inst_35818);

(statearr_35971[(10)] = inst_35816);

return statearr_35971;
})();
var statearr_35972_36031 = state_35929__$1;
(statearr_35972_36031[(2)] = null);

(statearr_35972_36031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (23))){
var inst_35888 = (state_35929[(19)]);
var inst_35861 = (state_35929[(12)]);
var inst_35862 = (state_35929[(13)]);
var inst_35865 = (state_35929[(14)]);
var inst_35868 = (state_35929[(15)]);
var inst_35866 = (state_35929[(16)]);
var inst_35884 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35887 = (function (){var files_not_loaded = inst_35868;
var res = inst_35866;
var res_SINGLEQUOTE_ = inst_35865;
var files_SINGLEQUOTE_ = inst_35862;
var all_files = inst_35861;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35888,inst_35861,inst_35862,inst_35865,inst_35868,inst_35866,inst_35884,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function (p__35886){
var map__35973 = p__35886;
var map__35973__$1 = ((cljs.core.seq_QMARK_.call(null,map__35973))?cljs.core.apply.call(null,cljs.core.hash_map,map__35973):map__35973);
var meta_data = cljs.core.get.call(null,map__35973__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35888,inst_35861,inst_35862,inst_35865,inst_35868,inst_35866,inst_35884,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
})();
var inst_35888__$1 = cljs.core.group_by.call(null,inst_35887,inst_35868);
var inst_35889 = cljs.core.seq_QMARK_.call(null,inst_35888__$1);
var state_35929__$1 = (function (){var statearr_35974 = state_35929;
(statearr_35974[(19)] = inst_35888__$1);

(statearr_35974[(31)] = inst_35884);

return statearr_35974;
})();
if(inst_35889){
var statearr_35975_36032 = state_35929__$1;
(statearr_35975_36032[(1)] = (26));

} else {
var statearr_35976_36033 = state_35929__$1;
(statearr_35976_36033[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (35))){
var inst_35895 = (state_35929[(29)]);
var inst_35918 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35895);
var inst_35919 = cljs.core.pr_str.call(null,inst_35918);
var inst_35920 = [cljs.core.str("not required: "),cljs.core.str(inst_35919)].join('');
var inst_35921 = figwheel.client.utils.log.call(null,inst_35920);
var state_35929__$1 = state_35929;
var statearr_35977_36034 = state_35929__$1;
(statearr_35977_36034[(2)] = inst_35921);

(statearr_35977_36034[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (19))){
var inst_35861 = (state_35929[(12)]);
var inst_35862 = (state_35929[(13)]);
var inst_35865 = (state_35929[(14)]);
var inst_35866 = (state_35929[(16)]);
var inst_35865__$1 = (state_35929[(2)]);
var inst_35866__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35865__$1);
var inst_35867 = (function (){var res = inst_35866__$1;
var res_SINGLEQUOTE_ = inst_35865__$1;
var files_SINGLEQUOTE_ = inst_35862;
var all_files = inst_35861;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35861,inst_35862,inst_35865,inst_35866,inst_35865__$1,inst_35866__$1,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function (p1__35601_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35601_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35861,inst_35862,inst_35865,inst_35866,inst_35865__$1,inst_35866__$1,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
})();
var inst_35868 = cljs.core.filter.call(null,inst_35867,inst_35865__$1);
var inst_35869 = cljs.core.not_empty.call(null,inst_35866__$1);
var state_35929__$1 = (function (){var statearr_35978 = state_35929;
(statearr_35978[(14)] = inst_35865__$1);

(statearr_35978[(15)] = inst_35868);

(statearr_35978[(16)] = inst_35866__$1);

return statearr_35978;
})();
if(cljs.core.truth_(inst_35869)){
var statearr_35979_36035 = state_35929__$1;
(statearr_35979_36035[(1)] = (20));

} else {
var statearr_35980_36036 = state_35929__$1;
(statearr_35980_36036[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (11))){
var state_35929__$1 = state_35929;
var statearr_35981_36037 = state_35929__$1;
(statearr_35981_36037[(2)] = null);

(statearr_35981_36037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (9))){
var inst_35848 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35982_36038 = state_35929__$1;
(statearr_35982_36038[(2)] = inst_35848);

(statearr_35982_36038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (5))){
var inst_35819 = (state_35929[(8)]);
var inst_35818 = (state_35929[(9)]);
var inst_35821 = (inst_35819 < inst_35818);
var inst_35822 = inst_35821;
var state_35929__$1 = state_35929;
if(cljs.core.truth_(inst_35822)){
var statearr_35983_36039 = state_35929__$1;
(statearr_35983_36039[(1)] = (7));

} else {
var statearr_35984_36040 = state_35929__$1;
(statearr_35984_36040[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (14))){
var inst_35829 = (state_35929[(26)]);
var inst_35838 = cljs.core.first.call(null,inst_35829);
var inst_35839 = figwheel.client.file_reloading.eval_body.call(null,inst_35838);
var inst_35840 = cljs.core.next.call(null,inst_35829);
var inst_35816 = inst_35840;
var inst_35817 = null;
var inst_35818 = (0);
var inst_35819 = (0);
var state_35929__$1 = (function (){var statearr_35985 = state_35929;
(statearr_35985[(7)] = inst_35817);

(statearr_35985[(8)] = inst_35819);

(statearr_35985[(9)] = inst_35818);

(statearr_35985[(32)] = inst_35839);

(statearr_35985[(10)] = inst_35816);

return statearr_35985;
})();
var statearr_35986_36041 = state_35929__$1;
(statearr_35986_36041[(2)] = null);

(statearr_35986_36041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (26))){
var inst_35888 = (state_35929[(19)]);
var inst_35891 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35888);
var state_35929__$1 = state_35929;
var statearr_35987_36042 = state_35929__$1;
(statearr_35987_36042[(2)] = inst_35891);

(statearr_35987_36042[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (16))){
var inst_35855 = (state_35929[(23)]);
var inst_35857 = (function (){var all_files = inst_35855;
return ((function (all_files,inst_35855,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function (p1__35600_SHARP_){
return cljs.core.update_in.call(null,p1__35600_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35855,state_val_35930,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
})();
var inst_35858 = cljs.core.map.call(null,inst_35857,inst_35855);
var state_35929__$1 = state_35929;
var statearr_35988_36043 = state_35929__$1;
(statearr_35988_36043[(2)] = inst_35858);

(statearr_35988_36043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (30))){
var state_35929__$1 = state_35929;
var statearr_35989_36044 = state_35929__$1;
(statearr_35989_36044[(2)] = null);

(statearr_35989_36044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (10))){
var inst_35829 = (state_35929[(26)]);
var inst_35831 = cljs.core.chunked_seq_QMARK_.call(null,inst_35829);
var state_35929__$1 = state_35929;
if(inst_35831){
var statearr_35990_36045 = state_35929__$1;
(statearr_35990_36045[(1)] = (13));

} else {
var statearr_35991_36046 = state_35929__$1;
(statearr_35991_36046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (18))){
var inst_35861 = (state_35929[(12)]);
var inst_35862 = (state_35929[(13)]);
var inst_35861__$1 = (state_35929[(2)]);
var inst_35862__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35861__$1);
var inst_35863 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35862__$1);
var state_35929__$1 = (function (){var statearr_35992 = state_35929;
(statearr_35992[(12)] = inst_35861__$1);

(statearr_35992[(13)] = inst_35862__$1);

return statearr_35992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35929__$1,(19),inst_35863);
} else {
if((state_val_35930 === (37))){
var inst_35924 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35993_36047 = state_35929__$1;
(statearr_35993_36047[(2)] = inst_35924);

(statearr_35993_36047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (8))){
var inst_35829 = (state_35929[(26)]);
var inst_35816 = (state_35929[(10)]);
var inst_35829__$1 = cljs.core.seq.call(null,inst_35816);
var state_35929__$1 = (function (){var statearr_35994 = state_35929;
(statearr_35994[(26)] = inst_35829__$1);

return statearr_35994;
})();
if(inst_35829__$1){
var statearr_35995_36048 = state_35929__$1;
(statearr_35995_36048[(1)] = (10));

} else {
var statearr_35996_36049 = state_35929__$1;
(statearr_35996_36049[(1)] = (11));

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
});})(c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
;
return ((function (switch__18562__auto__,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_36000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36000[(0)] = state_machine__18563__auto__);

(statearr_36000[(1)] = (1));

return statearr_36000;
});
var state_machine__18563__auto____1 = (function (state_35929){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36001){if((e36001 instanceof Object)){
var ex__18566__auto__ = e36001;
var statearr_36002_36050 = state_35929;
(statearr_36002_36050[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36051 = state_35929;
state_35929 = G__36051;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35929){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
})();
var state__18620__auto__ = (function (){var statearr_36003 = f__18619__auto__.call(null);
(statearr_36003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,map__35804,map__35804__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35805,map__35805__$1,msg,files))
);

return c__18618__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__36054,link){
var map__36056 = p__36054;
var map__36056__$1 = ((cljs.core.seq_QMARK_.call(null,map__36056))?cljs.core.apply.call(null,cljs.core.hash_map,map__36056):map__36056);
var file = cljs.core.get.call(null,map__36056__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__36056,map__36056__$1,file){
return (function (p1__36052_SHARP_,p2__36053_SHARP_){
if(cljs.core._EQ_.call(null,p1__36052_SHARP_,p2__36053_SHARP_)){
return p1__36052_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__36056,map__36056__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36060){
var map__36061 = p__36060;
var map__36061__$1 = ((cljs.core.seq_QMARK_.call(null,map__36061))?cljs.core.apply.call(null,cljs.core.hash_map,map__36061):map__36061);
var current_url_length = cljs.core.get.call(null,map__36061__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__36061__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36057_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36057_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__36062){
var map__36064 = p__36062;
var map__36064__$1 = ((cljs.core.seq_QMARK_.call(null,map__36064))?cljs.core.apply.call(null,cljs.core.hash_map,map__36064):map__36064);
var f_data = map__36064__$1;
var request_url = cljs.core.get.call(null,map__36064__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__36064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16145__auto__ = request_url;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__36065,files_msg){
var map__36087 = p__36065;
var map__36087__$1 = ((cljs.core.seq_QMARK_.call(null,map__36087))?cljs.core.apply.call(null,cljs.core.hash_map,map__36087):map__36087);
var opts = map__36087__$1;
var on_cssload = cljs.core.get.call(null,map__36087__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36088_36108 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36089_36109 = null;
var count__36090_36110 = (0);
var i__36091_36111 = (0);
while(true){
if((i__36091_36111 < count__36090_36110)){
var f_36112 = cljs.core._nth.call(null,chunk__36089_36109,i__36091_36111);
figwheel.client.file_reloading.reload_css_file.call(null,f_36112);

var G__36113 = seq__36088_36108;
var G__36114 = chunk__36089_36109;
var G__36115 = count__36090_36110;
var G__36116 = (i__36091_36111 + (1));
seq__36088_36108 = G__36113;
chunk__36089_36109 = G__36114;
count__36090_36110 = G__36115;
i__36091_36111 = G__36116;
continue;
} else {
var temp__4126__auto___36117 = cljs.core.seq.call(null,seq__36088_36108);
if(temp__4126__auto___36117){
var seq__36088_36118__$1 = temp__4126__auto___36117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36088_36118__$1)){
var c__16932__auto___36119 = cljs.core.chunk_first.call(null,seq__36088_36118__$1);
var G__36120 = cljs.core.chunk_rest.call(null,seq__36088_36118__$1);
var G__36121 = c__16932__auto___36119;
var G__36122 = cljs.core.count.call(null,c__16932__auto___36119);
var G__36123 = (0);
seq__36088_36108 = G__36120;
chunk__36089_36109 = G__36121;
count__36090_36110 = G__36122;
i__36091_36111 = G__36123;
continue;
} else {
var f_36124 = cljs.core.first.call(null,seq__36088_36118__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36124);

var G__36125 = cljs.core.next.call(null,seq__36088_36118__$1);
var G__36126 = null;
var G__36127 = (0);
var G__36128 = (0);
seq__36088_36108 = G__36125;
chunk__36089_36109 = G__36126;
count__36090_36110 = G__36127;
i__36091_36111 = G__36128;
continue;
}
} else {
}
}
break;
}

var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,map__36087,map__36087__$1,opts,on_cssload){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,map__36087,map__36087__$1,opts,on_cssload){
return (function (state_36098){
var state_val_36099 = (state_36098[(1)]);
if((state_val_36099 === (2))){
var inst_36094 = (state_36098[(2)]);
var inst_36095 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_36096 = on_cssload.call(null,inst_36095);
var state_36098__$1 = (function (){var statearr_36100 = state_36098;
(statearr_36100[(7)] = inst_36094);

return statearr_36100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36098__$1,inst_36096);
} else {
if((state_val_36099 === (1))){
var inst_36092 = cljs.core.async.timeout.call(null,(100));
var state_36098__$1 = state_36098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36098__$1,(2),inst_36092);
} else {
return null;
}
}
});})(c__18618__auto__,map__36087,map__36087__$1,opts,on_cssload))
;
return ((function (switch__18562__auto__,c__18618__auto__,map__36087,map__36087__$1,opts,on_cssload){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_36104 = [null,null,null,null,null,null,null,null];
(statearr_36104[(0)] = state_machine__18563__auto__);

(statearr_36104[(1)] = (1));

return statearr_36104;
});
var state_machine__18563__auto____1 = (function (state_36098){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36105){if((e36105 instanceof Object)){
var ex__18566__auto__ = e36105;
var statearr_36106_36129 = state_36098;
(statearr_36106_36129[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36130 = state_36098;
state_36098 = G__36130;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36098){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,map__36087,map__36087__$1,opts,on_cssload))
})();
var state__18620__auto__ = (function (){var statearr_36107 = f__18619__auto__.call(null);
(statearr_36107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,map__36087,map__36087__$1,opts,on_cssload))
);

return c__18618__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1435015536913