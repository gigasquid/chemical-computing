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
return cljs.core.reduce.call(null,(function (p1__35335_SHARP_,p2__35336_SHARP_){
var and__16133__auto__ = p1__35335_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__35336_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__35338_SHARP_,p2__35337_SHARP_){
return [cljs.core.str(p2__35337_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35339){
var map__35340 = p__35339;
var map__35340__$1 = ((cljs.core.seq_QMARK_.call(null,map__35340))?cljs.core.apply.call(null,cljs.core.hash_map,map__35340):map__35340);
var file = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35341){
var map__35342 = p__35341;
var map__35342__$1 = ((cljs.core.seq_QMARK_.call(null,map__35342))?cljs.core.apply.call(null,cljs.core.hash_map,map__35342):map__35342);
var namespace = cljs.core.get.call(null,map__35342__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e35343){if((e35343 instanceof Error)){
var e = e35343;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35343;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__35344,callback){
var map__35346 = p__35344;
var map__35346__$1 = ((cljs.core.seq_QMARK_.call(null,map__35346))?cljs.core.apply.call(null,cljs.core.hash_map,map__35346):map__35346);
var file_msg = map__35346__$1;
var request_url = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35346,map__35346__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35346,map__35346__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__35347){
var map__35349 = p__35347;
var map__35349__$1 = ((cljs.core.seq_QMARK_.call(null,map__35349))?cljs.core.apply.call(null,cljs.core.hash_map,map__35349):map__35349);
var file_msg = map__35349__$1;
var meta_data = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__35350,callback){
var map__35352 = p__35350;
var map__35352__$1 = ((cljs.core.seq_QMARK_.call(null,map__35352))?cljs.core.apply.call(null,cljs.core.hash_map,map__35352):map__35352);
var file_msg = map__35352__$1;
var namespace = cljs.core.get.call(null,map__35352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__35352__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__18618__auto___35439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___35439,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___35439,out){
return (function (state_35421){
var state_val_35422 = (state_35421[(1)]);
if((state_val_35422 === (7))){
var inst_35405 = (state_35421[(7)]);
var inst_35411 = (state_35421[(2)]);
var inst_35412 = cljs.core.async.put_BANG_.call(null,out,inst_35411);
var inst_35401 = inst_35405;
var state_35421__$1 = (function (){var statearr_35423 = state_35421;
(statearr_35423[(8)] = inst_35401);

(statearr_35423[(9)] = inst_35412);

return statearr_35423;
})();
var statearr_35424_35440 = state_35421__$1;
(statearr_35424_35440[(2)] = null);

(statearr_35424_35440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (6))){
var inst_35417 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
var statearr_35425_35441 = state_35421__$1;
(statearr_35425_35441[(2)] = inst_35417);

(statearr_35425_35441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (5))){
var inst_35415 = cljs.core.async.close_BANG_.call(null,out);
var state_35421__$1 = state_35421;
var statearr_35426_35442 = state_35421__$1;
(statearr_35426_35442[(2)] = inst_35415);

(statearr_35426_35442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (4))){
var inst_35404 = (state_35421[(10)]);
var inst_35409 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35404);
var state_35421__$1 = state_35421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35421__$1,(7),inst_35409);
} else {
if((state_val_35422 === (3))){
var inst_35419 = (state_35421[(2)]);
var state_35421__$1 = state_35421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35421__$1,inst_35419);
} else {
if((state_val_35422 === (2))){
var inst_35401 = (state_35421[(8)]);
var inst_35404 = (state_35421[(10)]);
var inst_35404__$1 = cljs.core.nth.call(null,inst_35401,(0),null);
var inst_35405 = cljs.core.nthnext.call(null,inst_35401,(1));
var inst_35406 = (inst_35404__$1 == null);
var inst_35407 = cljs.core.not.call(null,inst_35406);
var state_35421__$1 = (function (){var statearr_35427 = state_35421;
(statearr_35427[(10)] = inst_35404__$1);

(statearr_35427[(7)] = inst_35405);

return statearr_35427;
})();
if(inst_35407){
var statearr_35428_35443 = state_35421__$1;
(statearr_35428_35443[(1)] = (4));

} else {
var statearr_35429_35444 = state_35421__$1;
(statearr_35429_35444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35422 === (1))){
var inst_35399 = cljs.core.nth.call(null,files,(0),null);
var inst_35400 = cljs.core.nthnext.call(null,files,(1));
var inst_35401 = files;
var state_35421__$1 = (function (){var statearr_35430 = state_35421;
(statearr_35430[(8)] = inst_35401);

(statearr_35430[(11)] = inst_35399);

(statearr_35430[(12)] = inst_35400);

return statearr_35430;
})();
var statearr_35431_35445 = state_35421__$1;
(statearr_35431_35445[(2)] = null);

(statearr_35431_35445[(1)] = (2));


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
});})(c__18618__auto___35439,out))
;
return ((function (switch__18562__auto__,c__18618__auto___35439,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_35435 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35435[(0)] = state_machine__18563__auto__);

(statearr_35435[(1)] = (1));

return statearr_35435;
});
var state_machine__18563__auto____1 = (function (state_35421){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35436){if((e35436 instanceof Object)){
var ex__18566__auto__ = e35436;
var statearr_35437_35446 = state_35421;
(statearr_35437_35446[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35447 = state_35421;
state_35421 = G__35447;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35421){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___35439,out))
})();
var state__18620__auto__ = (function (){var statearr_35438 = f__18619__auto__.call(null);
(statearr_35438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___35439);

return statearr_35438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___35439,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__35448,p__35449){
var map__35452 = p__35448;
var map__35452__$1 = ((cljs.core.seq_QMARK_.call(null,map__35452))?cljs.core.apply.call(null,cljs.core.hash_map,map__35452):map__35452);
var opts = map__35452__$1;
var url_rewriter = cljs.core.get.call(null,map__35452__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35453 = p__35449;
var map__35453__$1 = ((cljs.core.seq_QMARK_.call(null,map__35453))?cljs.core.apply.call(null,cljs.core.hash_map,map__35453):map__35453);
var file_msg = map__35453__$1;
var file = cljs.core.get.call(null,map__35453__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__35454){
var map__35457 = p__35454;
var map__35457__$1 = ((cljs.core.seq_QMARK_.call(null,map__35457))?cljs.core.apply.call(null,cljs.core.hash_map,map__35457):map__35457);
var file = cljs.core.get.call(null,map__35457__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__35457__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e35458){var e = e35458;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__35463,p__35464){
var map__35665 = p__35463;
var map__35665__$1 = ((cljs.core.seq_QMARK_.call(null,map__35665))?cljs.core.apply.call(null,cljs.core.hash_map,map__35665):map__35665);
var opts = map__35665__$1;
var load_unchanged_files = cljs.core.get.call(null,map__35665__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__35665__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__35665__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__35666 = p__35464;
var map__35666__$1 = ((cljs.core.seq_QMARK_.call(null,map__35666))?cljs.core.apply.call(null,cljs.core.hash_map,map__35666):map__35666);
var msg = map__35666__$1;
var files = cljs.core.get.call(null,map__35666__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function (state_35790){
var state_val_35791 = (state_35790[(1)]);
if((state_val_35791 === (7))){
var inst_35679 = (state_35790[(7)]);
var inst_35678 = (state_35790[(8)]);
var inst_35677 = (state_35790[(9)]);
var inst_35680 = (state_35790[(10)]);
var inst_35685 = cljs.core._nth.call(null,inst_35678,inst_35680);
var inst_35686 = figwheel.client.file_reloading.eval_body.call(null,inst_35685);
var inst_35687 = (inst_35680 + (1));
var tmp35792 = inst_35679;
var tmp35793 = inst_35678;
var tmp35794 = inst_35677;
var inst_35677__$1 = tmp35794;
var inst_35678__$1 = tmp35793;
var inst_35679__$1 = tmp35792;
var inst_35680__$1 = inst_35687;
var state_35790__$1 = (function (){var statearr_35795 = state_35790;
(statearr_35795[(7)] = inst_35679__$1);

(statearr_35795[(11)] = inst_35686);

(statearr_35795[(8)] = inst_35678__$1);

(statearr_35795[(9)] = inst_35677__$1);

(statearr_35795[(10)] = inst_35680__$1);

return statearr_35795;
})();
var statearr_35796_35865 = state_35790__$1;
(statearr_35796_35865[(2)] = null);

(statearr_35796_35865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (20))){
var inst_35727 = (state_35790[(12)]);
var inst_35722 = (state_35790[(13)]);
var inst_35723 = (state_35790[(14)]);
var inst_35726 = (state_35790[(15)]);
var inst_35729 = (state_35790[(16)]);
var inst_35732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35734 = (function (){var files_not_loaded = inst_35729;
var res = inst_35727;
var res_SINGLEQUOTE_ = inst_35726;
var files_SINGLEQUOTE_ = inst_35723;
var all_files = inst_35722;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35727,inst_35722,inst_35723,inst_35726,inst_35729,inst_35732,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function (p__35733){
var map__35797 = p__35733;
var map__35797__$1 = ((cljs.core.seq_QMARK_.call(null,map__35797))?cljs.core.apply.call(null,cljs.core.hash_map,map__35797):map__35797);
var file = cljs.core.get.call(null,map__35797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__35797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35727,inst_35722,inst_35723,inst_35726,inst_35729,inst_35732,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
})();
var inst_35735 = cljs.core.map.call(null,inst_35734,inst_35727);
var inst_35736 = cljs.core.pr_str.call(null,inst_35735);
var inst_35737 = figwheel.client.utils.log.call(null,inst_35736);
var inst_35738 = (function (){var files_not_loaded = inst_35729;
var res = inst_35727;
var res_SINGLEQUOTE_ = inst_35726;
var files_SINGLEQUOTE_ = inst_35723;
var all_files = inst_35722;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35727,inst_35722,inst_35723,inst_35726,inst_35729,inst_35732,inst_35734,inst_35735,inst_35736,inst_35737,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35727,inst_35722,inst_35723,inst_35726,inst_35729,inst_35732,inst_35734,inst_35735,inst_35736,inst_35737,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
})();
var inst_35739 = setTimeout(inst_35738,(10));
var state_35790__$1 = (function (){var statearr_35798 = state_35790;
(statearr_35798[(17)] = inst_35737);

(statearr_35798[(18)] = inst_35732);

return statearr_35798;
})();
var statearr_35799_35866 = state_35790__$1;
(statearr_35799_35866[(2)] = inst_35739);

(statearr_35799_35866[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (27))){
var inst_35749 = (state_35790[(19)]);
var state_35790__$1 = state_35790;
var statearr_35800_35867 = state_35790__$1;
(statearr_35800_35867[(2)] = inst_35749);

(statearr_35800_35867[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (1))){
var inst_35669 = (state_35790[(20)]);
var inst_35667 = before_jsload.call(null,files);
var inst_35668 = (function (){return ((function (inst_35669,inst_35667,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function (p1__35459_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35459_SHARP_);
});
;})(inst_35669,inst_35667,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
})();
var inst_35669__$1 = cljs.core.filter.call(null,inst_35668,files);
var inst_35670 = cljs.core.not_empty.call(null,inst_35669__$1);
var state_35790__$1 = (function (){var statearr_35801 = state_35790;
(statearr_35801[(21)] = inst_35667);

(statearr_35801[(20)] = inst_35669__$1);

return statearr_35801;
})();
if(cljs.core.truth_(inst_35670)){
var statearr_35802_35868 = state_35790__$1;
(statearr_35802_35868[(1)] = (2));

} else {
var statearr_35803_35869 = state_35790__$1;
(statearr_35803_35869[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (24))){
var state_35790__$1 = state_35790;
var statearr_35804_35870 = state_35790__$1;
(statearr_35804_35870[(2)] = null);

(statearr_35804_35870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (4))){
var inst_35714 = (state_35790[(2)]);
var inst_35715 = (function (){return ((function (inst_35714,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function (p1__35460_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35460_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35460_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_35714,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
})();
var inst_35716 = cljs.core.filter.call(null,inst_35715,files);
var state_35790__$1 = (function (){var statearr_35805 = state_35790;
(statearr_35805[(22)] = inst_35716);

(statearr_35805[(23)] = inst_35714);

return statearr_35805;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35806_35871 = state_35790__$1;
(statearr_35806_35871[(1)] = (16));

} else {
var statearr_35807_35872 = state_35790__$1;
(statearr_35807_35872[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (15))){
var inst_35704 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
var statearr_35808_35873 = state_35790__$1;
(statearr_35808_35873[(2)] = inst_35704);

(statearr_35808_35873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (21))){
var state_35790__$1 = state_35790;
var statearr_35809_35874 = state_35790__$1;
(statearr_35809_35874[(2)] = null);

(statearr_35809_35874[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (31))){
var inst_35757 = (state_35790[(24)]);
var inst_35767 = (state_35790[(2)]);
var inst_35768 = cljs.core.not_empty.call(null,inst_35757);
var state_35790__$1 = (function (){var statearr_35810 = state_35790;
(statearr_35810[(25)] = inst_35767);

return statearr_35810;
})();
if(cljs.core.truth_(inst_35768)){
var statearr_35811_35875 = state_35790__$1;
(statearr_35811_35875[(1)] = (32));

} else {
var statearr_35812_35876 = state_35790__$1;
(statearr_35812_35876[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (32))){
var inst_35757 = (state_35790[(24)]);
var inst_35770 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35757);
var inst_35771 = cljs.core.pr_str.call(null,inst_35770);
var inst_35772 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35771)].join('');
var inst_35773 = figwheel.client.utils.log.call(null,inst_35772);
var state_35790__$1 = state_35790;
var statearr_35813_35877 = state_35790__$1;
(statearr_35813_35877[(2)] = inst_35773);

(statearr_35813_35877[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (33))){
var state_35790__$1 = state_35790;
var statearr_35814_35878 = state_35790__$1;
(statearr_35814_35878[(2)] = null);

(statearr_35814_35878[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (13))){
var inst_35690 = (state_35790[(26)]);
var inst_35694 = cljs.core.chunk_first.call(null,inst_35690);
var inst_35695 = cljs.core.chunk_rest.call(null,inst_35690);
var inst_35696 = cljs.core.count.call(null,inst_35694);
var inst_35677 = inst_35695;
var inst_35678 = inst_35694;
var inst_35679 = inst_35696;
var inst_35680 = (0);
var state_35790__$1 = (function (){var statearr_35815 = state_35790;
(statearr_35815[(7)] = inst_35679);

(statearr_35815[(8)] = inst_35678);

(statearr_35815[(9)] = inst_35677);

(statearr_35815[(10)] = inst_35680);

return statearr_35815;
})();
var statearr_35816_35879 = state_35790__$1;
(statearr_35816_35879[(2)] = null);

(statearr_35816_35879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (22))){
var inst_35729 = (state_35790[(16)]);
var inst_35742 = (state_35790[(2)]);
var inst_35743 = cljs.core.not_empty.call(null,inst_35729);
var state_35790__$1 = (function (){var statearr_35817 = state_35790;
(statearr_35817[(27)] = inst_35742);

return statearr_35817;
})();
if(cljs.core.truth_(inst_35743)){
var statearr_35818_35880 = state_35790__$1;
(statearr_35818_35880[(1)] = (23));

} else {
var statearr_35819_35881 = state_35790__$1;
(statearr_35819_35881[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (36))){
var state_35790__$1 = state_35790;
var statearr_35820_35882 = state_35790__$1;
(statearr_35820_35882[(2)] = null);

(statearr_35820_35882[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (29))){
var inst_35758 = (state_35790[(28)]);
var inst_35761 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35758);
var inst_35762 = cljs.core.pr_str.call(null,inst_35761);
var inst_35763 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35762)].join('');
var inst_35764 = figwheel.client.utils.log.call(null,inst_35763);
var state_35790__$1 = state_35790;
var statearr_35821_35883 = state_35790__$1;
(statearr_35821_35883[(2)] = inst_35764);

(statearr_35821_35883[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (6))){
var inst_35711 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
var statearr_35822_35884 = state_35790__$1;
(statearr_35822_35884[(2)] = inst_35711);

(statearr_35822_35884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (28))){
var inst_35758 = (state_35790[(28)]);
var inst_35755 = (state_35790[(2)]);
var inst_35756 = cljs.core.get.call(null,inst_35755,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35757 = cljs.core.get.call(null,inst_35755,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35758__$1 = cljs.core.get.call(null,inst_35755,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35759 = cljs.core.not_empty.call(null,inst_35758__$1);
var state_35790__$1 = (function (){var statearr_35823 = state_35790;
(statearr_35823[(24)] = inst_35757);

(statearr_35823[(29)] = inst_35756);

(statearr_35823[(28)] = inst_35758__$1);

return statearr_35823;
})();
if(cljs.core.truth_(inst_35759)){
var statearr_35824_35885 = state_35790__$1;
(statearr_35824_35885[(1)] = (29));

} else {
var statearr_35825_35886 = state_35790__$1;
(statearr_35825_35886[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (25))){
var inst_35788 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35790__$1,inst_35788);
} else {
if((state_val_35791 === (34))){
var inst_35756 = (state_35790[(29)]);
var inst_35776 = (state_35790[(2)]);
var inst_35777 = cljs.core.not_empty.call(null,inst_35756);
var state_35790__$1 = (function (){var statearr_35826 = state_35790;
(statearr_35826[(30)] = inst_35776);

return statearr_35826;
})();
if(cljs.core.truth_(inst_35777)){
var statearr_35827_35887 = state_35790__$1;
(statearr_35827_35887[(1)] = (35));

} else {
var statearr_35828_35888 = state_35790__$1;
(statearr_35828_35888[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (17))){
var inst_35716 = (state_35790[(22)]);
var state_35790__$1 = state_35790;
var statearr_35829_35889 = state_35790__$1;
(statearr_35829_35889[(2)] = inst_35716);

(statearr_35829_35889[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (3))){
var state_35790__$1 = state_35790;
var statearr_35830_35890 = state_35790__$1;
(statearr_35830_35890[(2)] = null);

(statearr_35830_35890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (12))){
var inst_35707 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
var statearr_35831_35891 = state_35790__$1;
(statearr_35831_35891[(2)] = inst_35707);

(statearr_35831_35891[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (2))){
var inst_35669 = (state_35790[(20)]);
var inst_35676 = cljs.core.seq.call(null,inst_35669);
var inst_35677 = inst_35676;
var inst_35678 = null;
var inst_35679 = (0);
var inst_35680 = (0);
var state_35790__$1 = (function (){var statearr_35832 = state_35790;
(statearr_35832[(7)] = inst_35679);

(statearr_35832[(8)] = inst_35678);

(statearr_35832[(9)] = inst_35677);

(statearr_35832[(10)] = inst_35680);

return statearr_35832;
})();
var statearr_35833_35892 = state_35790__$1;
(statearr_35833_35892[(2)] = null);

(statearr_35833_35892[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (23))){
var inst_35727 = (state_35790[(12)]);
var inst_35722 = (state_35790[(13)]);
var inst_35749 = (state_35790[(19)]);
var inst_35723 = (state_35790[(14)]);
var inst_35726 = (state_35790[(15)]);
var inst_35729 = (state_35790[(16)]);
var inst_35745 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35748 = (function (){var files_not_loaded = inst_35729;
var res = inst_35727;
var res_SINGLEQUOTE_ = inst_35726;
var files_SINGLEQUOTE_ = inst_35723;
var all_files = inst_35722;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35727,inst_35722,inst_35749,inst_35723,inst_35726,inst_35729,inst_35745,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function (p__35747){
var map__35834 = p__35747;
var map__35834__$1 = ((cljs.core.seq_QMARK_.call(null,map__35834))?cljs.core.apply.call(null,cljs.core.hash_map,map__35834):map__35834);
var meta_data = cljs.core.get.call(null,map__35834__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35727,inst_35722,inst_35749,inst_35723,inst_35726,inst_35729,inst_35745,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
})();
var inst_35749__$1 = cljs.core.group_by.call(null,inst_35748,inst_35729);
var inst_35750 = cljs.core.seq_QMARK_.call(null,inst_35749__$1);
var state_35790__$1 = (function (){var statearr_35835 = state_35790;
(statearr_35835[(31)] = inst_35745);

(statearr_35835[(19)] = inst_35749__$1);

return statearr_35835;
})();
if(inst_35750){
var statearr_35836_35893 = state_35790__$1;
(statearr_35836_35893[(1)] = (26));

} else {
var statearr_35837_35894 = state_35790__$1;
(statearr_35837_35894[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (35))){
var inst_35756 = (state_35790[(29)]);
var inst_35779 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35756);
var inst_35780 = cljs.core.pr_str.call(null,inst_35779);
var inst_35781 = [cljs.core.str("not required: "),cljs.core.str(inst_35780)].join('');
var inst_35782 = figwheel.client.utils.log.call(null,inst_35781);
var state_35790__$1 = state_35790;
var statearr_35838_35895 = state_35790__$1;
(statearr_35838_35895[(2)] = inst_35782);

(statearr_35838_35895[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (19))){
var inst_35727 = (state_35790[(12)]);
var inst_35722 = (state_35790[(13)]);
var inst_35723 = (state_35790[(14)]);
var inst_35726 = (state_35790[(15)]);
var inst_35726__$1 = (state_35790[(2)]);
var inst_35727__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35726__$1);
var inst_35728 = (function (){var res = inst_35727__$1;
var res_SINGLEQUOTE_ = inst_35726__$1;
var files_SINGLEQUOTE_ = inst_35723;
var all_files = inst_35722;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35727,inst_35722,inst_35723,inst_35726,inst_35726__$1,inst_35727__$1,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function (p1__35462_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35462_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_35727,inst_35722,inst_35723,inst_35726,inst_35726__$1,inst_35727__$1,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
})();
var inst_35729 = cljs.core.filter.call(null,inst_35728,inst_35726__$1);
var inst_35730 = cljs.core.not_empty.call(null,inst_35727__$1);
var state_35790__$1 = (function (){var statearr_35839 = state_35790;
(statearr_35839[(12)] = inst_35727__$1);

(statearr_35839[(15)] = inst_35726__$1);

(statearr_35839[(16)] = inst_35729);

return statearr_35839;
})();
if(cljs.core.truth_(inst_35730)){
var statearr_35840_35896 = state_35790__$1;
(statearr_35840_35896[(1)] = (20));

} else {
var statearr_35841_35897 = state_35790__$1;
(statearr_35841_35897[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (11))){
var state_35790__$1 = state_35790;
var statearr_35842_35898 = state_35790__$1;
(statearr_35842_35898[(2)] = null);

(statearr_35842_35898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (9))){
var inst_35709 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
var statearr_35843_35899 = state_35790__$1;
(statearr_35843_35899[(2)] = inst_35709);

(statearr_35843_35899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (5))){
var inst_35679 = (state_35790[(7)]);
var inst_35680 = (state_35790[(10)]);
var inst_35682 = (inst_35680 < inst_35679);
var inst_35683 = inst_35682;
var state_35790__$1 = state_35790;
if(cljs.core.truth_(inst_35683)){
var statearr_35844_35900 = state_35790__$1;
(statearr_35844_35900[(1)] = (7));

} else {
var statearr_35845_35901 = state_35790__$1;
(statearr_35845_35901[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (14))){
var inst_35690 = (state_35790[(26)]);
var inst_35699 = cljs.core.first.call(null,inst_35690);
var inst_35700 = figwheel.client.file_reloading.eval_body.call(null,inst_35699);
var inst_35701 = cljs.core.next.call(null,inst_35690);
var inst_35677 = inst_35701;
var inst_35678 = null;
var inst_35679 = (0);
var inst_35680 = (0);
var state_35790__$1 = (function (){var statearr_35846 = state_35790;
(statearr_35846[(7)] = inst_35679);

(statearr_35846[(32)] = inst_35700);

(statearr_35846[(8)] = inst_35678);

(statearr_35846[(9)] = inst_35677);

(statearr_35846[(10)] = inst_35680);

return statearr_35846;
})();
var statearr_35847_35902 = state_35790__$1;
(statearr_35847_35902[(2)] = null);

(statearr_35847_35902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (26))){
var inst_35749 = (state_35790[(19)]);
var inst_35752 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35749);
var state_35790__$1 = state_35790;
var statearr_35848_35903 = state_35790__$1;
(statearr_35848_35903[(2)] = inst_35752);

(statearr_35848_35903[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (16))){
var inst_35716 = (state_35790[(22)]);
var inst_35718 = (function (){var all_files = inst_35716;
return ((function (all_files,inst_35716,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function (p1__35461_SHARP_){
return cljs.core.update_in.call(null,p1__35461_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35716,state_val_35791,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
})();
var inst_35719 = cljs.core.map.call(null,inst_35718,inst_35716);
var state_35790__$1 = state_35790;
var statearr_35849_35904 = state_35790__$1;
(statearr_35849_35904[(2)] = inst_35719);

(statearr_35849_35904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (30))){
var state_35790__$1 = state_35790;
var statearr_35850_35905 = state_35790__$1;
(statearr_35850_35905[(2)] = null);

(statearr_35850_35905[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (10))){
var inst_35690 = (state_35790[(26)]);
var inst_35692 = cljs.core.chunked_seq_QMARK_.call(null,inst_35690);
var state_35790__$1 = state_35790;
if(inst_35692){
var statearr_35851_35906 = state_35790__$1;
(statearr_35851_35906[(1)] = (13));

} else {
var statearr_35852_35907 = state_35790__$1;
(statearr_35852_35907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (18))){
var inst_35722 = (state_35790[(13)]);
var inst_35723 = (state_35790[(14)]);
var inst_35722__$1 = (state_35790[(2)]);
var inst_35723__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35722__$1);
var inst_35724 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35723__$1);
var state_35790__$1 = (function (){var statearr_35853 = state_35790;
(statearr_35853[(13)] = inst_35722__$1);

(statearr_35853[(14)] = inst_35723__$1);

return statearr_35853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35790__$1,(19),inst_35724);
} else {
if((state_val_35791 === (37))){
var inst_35785 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
var statearr_35854_35908 = state_35790__$1;
(statearr_35854_35908[(2)] = inst_35785);

(statearr_35854_35908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (8))){
var inst_35690 = (state_35790[(26)]);
var inst_35677 = (state_35790[(9)]);
var inst_35690__$1 = cljs.core.seq.call(null,inst_35677);
var state_35790__$1 = (function (){var statearr_35855 = state_35790;
(statearr_35855[(26)] = inst_35690__$1);

return statearr_35855;
})();
if(inst_35690__$1){
var statearr_35856_35909 = state_35790__$1;
(statearr_35856_35909[(1)] = (10));

} else {
var statearr_35857_35910 = state_35790__$1;
(statearr_35857_35910[(1)] = (11));

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
});})(c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
;
return ((function (switch__18562__auto__,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_35861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35861[(0)] = state_machine__18563__auto__);

(statearr_35861[(1)] = (1));

return statearr_35861;
});
var state_machine__18563__auto____1 = (function (state_35790){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35862){if((e35862 instanceof Object)){
var ex__18566__auto__ = e35862;
var statearr_35863_35911 = state_35790;
(statearr_35863_35911[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35912 = state_35790;
state_35790 = G__35912;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35790){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
})();
var state__18620__auto__ = (function (){var statearr_35864 = f__18619__auto__.call(null);
(statearr_35864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_35864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,map__35665,map__35665__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__35666,map__35666__$1,msg,files))
);

return c__18618__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__35915,link){
var map__35917 = p__35915;
var map__35917__$1 = ((cljs.core.seq_QMARK_.call(null,map__35917))?cljs.core.apply.call(null,cljs.core.hash_map,map__35917):map__35917);
var file = cljs.core.get.call(null,map__35917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__35917,map__35917__$1,file){
return (function (p1__35913_SHARP_,p2__35914_SHARP_){
if(cljs.core._EQ_.call(null,p1__35913_SHARP_,p2__35914_SHARP_)){
return p1__35913_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__35917,map__35917__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35921){
var map__35922 = p__35921;
var map__35922__$1 = ((cljs.core.seq_QMARK_.call(null,map__35922))?cljs.core.apply.call(null,cljs.core.hash_map,map__35922):map__35922);
var current_url_length = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__35922__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35918_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35918_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__35923){
var map__35925 = p__35923;
var map__35925__$1 = ((cljs.core.seq_QMARK_.call(null,map__35925))?cljs.core.apply.call(null,cljs.core.hash_map,map__35925):map__35925);
var f_data = map__35925__$1;
var request_url = cljs.core.get.call(null,map__35925__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__35925__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__35926,files_msg){
var map__35948 = p__35926;
var map__35948__$1 = ((cljs.core.seq_QMARK_.call(null,map__35948))?cljs.core.apply.call(null,cljs.core.hash_map,map__35948):map__35948);
var opts = map__35948__$1;
var on_cssload = cljs.core.get.call(null,map__35948__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35949_35969 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35950_35970 = null;
var count__35951_35971 = (0);
var i__35952_35972 = (0);
while(true){
if((i__35952_35972 < count__35951_35971)){
var f_35973 = cljs.core._nth.call(null,chunk__35950_35970,i__35952_35972);
figwheel.client.file_reloading.reload_css_file.call(null,f_35973);

var G__35974 = seq__35949_35969;
var G__35975 = chunk__35950_35970;
var G__35976 = count__35951_35971;
var G__35977 = (i__35952_35972 + (1));
seq__35949_35969 = G__35974;
chunk__35950_35970 = G__35975;
count__35951_35971 = G__35976;
i__35952_35972 = G__35977;
continue;
} else {
var temp__4126__auto___35978 = cljs.core.seq.call(null,seq__35949_35969);
if(temp__4126__auto___35978){
var seq__35949_35979__$1 = temp__4126__auto___35978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35949_35979__$1)){
var c__16932__auto___35980 = cljs.core.chunk_first.call(null,seq__35949_35979__$1);
var G__35981 = cljs.core.chunk_rest.call(null,seq__35949_35979__$1);
var G__35982 = c__16932__auto___35980;
var G__35983 = cljs.core.count.call(null,c__16932__auto___35980);
var G__35984 = (0);
seq__35949_35969 = G__35981;
chunk__35950_35970 = G__35982;
count__35951_35971 = G__35983;
i__35952_35972 = G__35984;
continue;
} else {
var f_35985 = cljs.core.first.call(null,seq__35949_35979__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35985);

var G__35986 = cljs.core.next.call(null,seq__35949_35979__$1);
var G__35987 = null;
var G__35988 = (0);
var G__35989 = (0);
seq__35949_35969 = G__35986;
chunk__35950_35970 = G__35987;
count__35951_35971 = G__35988;
i__35952_35972 = G__35989;
continue;
}
} else {
}
}
break;
}

var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,map__35948,map__35948__$1,opts,on_cssload){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,map__35948,map__35948__$1,opts,on_cssload){
return (function (state_35959){
var state_val_35960 = (state_35959[(1)]);
if((state_val_35960 === (2))){
var inst_35955 = (state_35959[(2)]);
var inst_35956 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35957 = on_cssload.call(null,inst_35956);
var state_35959__$1 = (function (){var statearr_35961 = state_35959;
(statearr_35961[(7)] = inst_35955);

return statearr_35961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35959__$1,inst_35957);
} else {
if((state_val_35960 === (1))){
var inst_35953 = cljs.core.async.timeout.call(null,(100));
var state_35959__$1 = state_35959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35959__$1,(2),inst_35953);
} else {
return null;
}
}
});})(c__18618__auto__,map__35948,map__35948__$1,opts,on_cssload))
;
return ((function (switch__18562__auto__,c__18618__auto__,map__35948,map__35948__$1,opts,on_cssload){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_35965 = [null,null,null,null,null,null,null,null];
(statearr_35965[(0)] = state_machine__18563__auto__);

(statearr_35965[(1)] = (1));

return statearr_35965;
});
var state_machine__18563__auto____1 = (function (state_35959){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35966){if((e35966 instanceof Object)){
var ex__18566__auto__ = e35966;
var statearr_35967_35990 = state_35959;
(statearr_35967_35990[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35991 = state_35959;
state_35959 = G__35991;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35959){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,map__35948,map__35948__$1,opts,on_cssload))
})();
var state__18620__auto__ = (function (){var statearr_35968 = f__18619__auto__.call(null);
(statearr_35968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_35968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,map__35948,map__35948__$1,opts,on_cssload))
);

return c__18618__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1435014981918