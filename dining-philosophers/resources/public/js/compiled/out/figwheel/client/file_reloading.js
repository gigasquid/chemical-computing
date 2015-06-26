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
return cljs.core.reduce.call(null,(function (p1__33478_SHARP_,p2__33479_SHARP_){
var and__16133__auto__ = p1__33478_SHARP_;
if(cljs.core.truth_(and__16133__auto__)){
return p2__33479_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33481_SHARP_,p2__33480_SHARP_){
return [cljs.core.str(p2__33480_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33482){
var map__33483 = p__33482;
var map__33483__$1 = ((cljs.core.seq_QMARK_.call(null,map__33483))?cljs.core.apply.call(null,cljs.core.hash_map,map__33483):map__33483);
var file = cljs.core.get.call(null,map__33483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__33484){
var map__33485 = p__33484;
var map__33485__$1 = ((cljs.core.seq_QMARK_.call(null,map__33485))?cljs.core.apply.call(null,cljs.core.hash_map,map__33485):map__33485);
var namespace = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e33486){if((e33486 instanceof Error)){
var e = e33486;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33486;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__33487,callback){
var map__33489 = p__33487;
var map__33489__$1 = ((cljs.core.seq_QMARK_.call(null,map__33489))?cljs.core.apply.call(null,cljs.core.hash_map,map__33489):map__33489);
var file_msg = map__33489__$1;
var request_url = cljs.core.get.call(null,map__33489__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33489,map__33489__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33489,map__33489__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__33490){
var map__33492 = p__33490;
var map__33492__$1 = ((cljs.core.seq_QMARK_.call(null,map__33492))?cljs.core.apply.call(null,cljs.core.hash_map,map__33492):map__33492);
var file_msg = map__33492__$1;
var meta_data = cljs.core.get.call(null,map__33492__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__33492__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__33493,callback){
var map__33495 = p__33493;
var map__33495__$1 = ((cljs.core.seq_QMARK_.call(null,map__33495))?cljs.core.apply.call(null,cljs.core.hash_map,map__33495):map__33495);
var file_msg = map__33495__$1;
var namespace = cljs.core.get.call(null,map__33495__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__33495__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__18618__auto___33582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___33582,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___33582,out){
return (function (state_33564){
var state_val_33565 = (state_33564[(1)]);
if((state_val_33565 === (7))){
var inst_33548 = (state_33564[(7)]);
var inst_33554 = (state_33564[(2)]);
var inst_33555 = cljs.core.async.put_BANG_.call(null,out,inst_33554);
var inst_33544 = inst_33548;
var state_33564__$1 = (function (){var statearr_33566 = state_33564;
(statearr_33566[(8)] = inst_33544);

(statearr_33566[(9)] = inst_33555);

return statearr_33566;
})();
var statearr_33567_33583 = state_33564__$1;
(statearr_33567_33583[(2)] = null);

(statearr_33567_33583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (6))){
var inst_33560 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
var statearr_33568_33584 = state_33564__$1;
(statearr_33568_33584[(2)] = inst_33560);

(statearr_33568_33584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (5))){
var inst_33558 = cljs.core.async.close_BANG_.call(null,out);
var state_33564__$1 = state_33564;
var statearr_33569_33585 = state_33564__$1;
(statearr_33569_33585[(2)] = inst_33558);

(statearr_33569_33585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (4))){
var inst_33547 = (state_33564[(10)]);
var inst_33552 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33547);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33564__$1,(7),inst_33552);
} else {
if((state_val_33565 === (3))){
var inst_33562 = (state_33564[(2)]);
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33564__$1,inst_33562);
} else {
if((state_val_33565 === (2))){
var inst_33544 = (state_33564[(8)]);
var inst_33547 = (state_33564[(10)]);
var inst_33547__$1 = cljs.core.nth.call(null,inst_33544,(0),null);
var inst_33548 = cljs.core.nthnext.call(null,inst_33544,(1));
var inst_33549 = (inst_33547__$1 == null);
var inst_33550 = cljs.core.not.call(null,inst_33549);
var state_33564__$1 = (function (){var statearr_33570 = state_33564;
(statearr_33570[(7)] = inst_33548);

(statearr_33570[(10)] = inst_33547__$1);

return statearr_33570;
})();
if(inst_33550){
var statearr_33571_33586 = state_33564__$1;
(statearr_33571_33586[(1)] = (4));

} else {
var statearr_33572_33587 = state_33564__$1;
(statearr_33572_33587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33565 === (1))){
var inst_33542 = cljs.core.nth.call(null,files,(0),null);
var inst_33543 = cljs.core.nthnext.call(null,files,(1));
var inst_33544 = files;
var state_33564__$1 = (function (){var statearr_33573 = state_33564;
(statearr_33573[(11)] = inst_33543);

(statearr_33573[(8)] = inst_33544);

(statearr_33573[(12)] = inst_33542);

return statearr_33573;
})();
var statearr_33574_33588 = state_33564__$1;
(statearr_33574_33588[(2)] = null);

(statearr_33574_33588[(1)] = (2));


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
});})(c__18618__auto___33582,out))
;
return ((function (switch__18562__auto__,c__18618__auto___33582,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_33578 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33578[(0)] = state_machine__18563__auto__);

(statearr_33578[(1)] = (1));

return statearr_33578;
});
var state_machine__18563__auto____1 = (function (state_33564){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_33564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e33579){if((e33579 instanceof Object)){
var ex__18566__auto__ = e33579;
var statearr_33580_33589 = state_33564;
(statearr_33580_33589[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33590 = state_33564;
state_33564 = G__33590;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_33564){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_33564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___33582,out))
})();
var state__18620__auto__ = (function (){var statearr_33581 = f__18619__auto__.call(null);
(statearr_33581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___33582);

return statearr_33581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___33582,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__33591,p__33592){
var map__33595 = p__33591;
var map__33595__$1 = ((cljs.core.seq_QMARK_.call(null,map__33595))?cljs.core.apply.call(null,cljs.core.hash_map,map__33595):map__33595);
var opts = map__33595__$1;
var url_rewriter = cljs.core.get.call(null,map__33595__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__33596 = p__33592;
var map__33596__$1 = ((cljs.core.seq_QMARK_.call(null,map__33596))?cljs.core.apply.call(null,cljs.core.hash_map,map__33596):map__33596);
var file_msg = map__33596__$1;
var file = cljs.core.get.call(null,map__33596__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__33597){
var map__33600 = p__33597;
var map__33600__$1 = ((cljs.core.seq_QMARK_.call(null,map__33600))?cljs.core.apply.call(null,cljs.core.hash_map,map__33600):map__33600);
var file = cljs.core.get.call(null,map__33600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__33600__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e33601){var e = e33601;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__33606,p__33607){
var map__33808 = p__33606;
var map__33808__$1 = ((cljs.core.seq_QMARK_.call(null,map__33808))?cljs.core.apply.call(null,cljs.core.hash_map,map__33808):map__33808);
var opts = map__33808__$1;
var load_unchanged_files = cljs.core.get.call(null,map__33808__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__33808__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__33808__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__33809 = p__33607;
var map__33809__$1 = ((cljs.core.seq_QMARK_.call(null,map__33809))?cljs.core.apply.call(null,cljs.core.hash_map,map__33809):map__33809);
var msg = map__33809__$1;
var files = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function (state_33933){
var state_val_33934 = (state_33933[(1)]);
if((state_val_33934 === (7))){
var inst_33820 = (state_33933[(7)]);
var inst_33823 = (state_33933[(8)]);
var inst_33821 = (state_33933[(9)]);
var inst_33822 = (state_33933[(10)]);
var inst_33828 = cljs.core._nth.call(null,inst_33821,inst_33823);
var inst_33829 = figwheel.client.file_reloading.eval_body.call(null,inst_33828);
var inst_33830 = (inst_33823 + (1));
var tmp33935 = inst_33820;
var tmp33936 = inst_33821;
var tmp33937 = inst_33822;
var inst_33820__$1 = tmp33935;
var inst_33821__$1 = tmp33936;
var inst_33822__$1 = tmp33937;
var inst_33823__$1 = inst_33830;
var state_33933__$1 = (function (){var statearr_33938 = state_33933;
(statearr_33938[(7)] = inst_33820__$1);

(statearr_33938[(11)] = inst_33829);

(statearr_33938[(8)] = inst_33823__$1);

(statearr_33938[(9)] = inst_33821__$1);

(statearr_33938[(10)] = inst_33822__$1);

return statearr_33938;
})();
var statearr_33939_34008 = state_33933__$1;
(statearr_33939_34008[(2)] = null);

(statearr_33939_34008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (20))){
var inst_33872 = (state_33933[(12)]);
var inst_33869 = (state_33933[(13)]);
var inst_33865 = (state_33933[(14)]);
var inst_33866 = (state_33933[(15)]);
var inst_33870 = (state_33933[(16)]);
var inst_33875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33877 = (function (){var files_not_loaded = inst_33872;
var res = inst_33870;
var res_SINGLEQUOTE_ = inst_33869;
var files_SINGLEQUOTE_ = inst_33866;
var all_files = inst_33865;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33872,inst_33869,inst_33865,inst_33866,inst_33870,inst_33875,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function (p__33876){
var map__33940 = p__33876;
var map__33940__$1 = ((cljs.core.seq_QMARK_.call(null,map__33940))?cljs.core.apply.call(null,cljs.core.hash_map,map__33940):map__33940);
var file = cljs.core.get.call(null,map__33940__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__33940__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33872,inst_33869,inst_33865,inst_33866,inst_33870,inst_33875,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
})();
var inst_33878 = cljs.core.map.call(null,inst_33877,inst_33870);
var inst_33879 = cljs.core.pr_str.call(null,inst_33878);
var inst_33880 = figwheel.client.utils.log.call(null,inst_33879);
var inst_33881 = (function (){var files_not_loaded = inst_33872;
var res = inst_33870;
var res_SINGLEQUOTE_ = inst_33869;
var files_SINGLEQUOTE_ = inst_33866;
var all_files = inst_33865;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33872,inst_33869,inst_33865,inst_33866,inst_33870,inst_33875,inst_33877,inst_33878,inst_33879,inst_33880,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33872,inst_33869,inst_33865,inst_33866,inst_33870,inst_33875,inst_33877,inst_33878,inst_33879,inst_33880,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
})();
var inst_33882 = setTimeout(inst_33881,(10));
var state_33933__$1 = (function (){var statearr_33941 = state_33933;
(statearr_33941[(17)] = inst_33880);

(statearr_33941[(18)] = inst_33875);

return statearr_33941;
})();
var statearr_33942_34009 = state_33933__$1;
(statearr_33942_34009[(2)] = inst_33882);

(statearr_33942_34009[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (27))){
var inst_33892 = (state_33933[(19)]);
var state_33933__$1 = state_33933;
var statearr_33943_34010 = state_33933__$1;
(statearr_33943_34010[(2)] = inst_33892);

(statearr_33943_34010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (1))){
var inst_33812 = (state_33933[(20)]);
var inst_33810 = before_jsload.call(null,files);
var inst_33811 = (function (){return ((function (inst_33812,inst_33810,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function (p1__33602_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33602_SHARP_);
});
;})(inst_33812,inst_33810,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
})();
var inst_33812__$1 = cljs.core.filter.call(null,inst_33811,files);
var inst_33813 = cljs.core.not_empty.call(null,inst_33812__$1);
var state_33933__$1 = (function (){var statearr_33944 = state_33933;
(statearr_33944[(20)] = inst_33812__$1);

(statearr_33944[(21)] = inst_33810);

return statearr_33944;
})();
if(cljs.core.truth_(inst_33813)){
var statearr_33945_34011 = state_33933__$1;
(statearr_33945_34011[(1)] = (2));

} else {
var statearr_33946_34012 = state_33933__$1;
(statearr_33946_34012[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (24))){
var state_33933__$1 = state_33933;
var statearr_33947_34013 = state_33933__$1;
(statearr_33947_34013[(2)] = null);

(statearr_33947_34013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (4))){
var inst_33857 = (state_33933[(2)]);
var inst_33858 = (function (){return ((function (inst_33857,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function (p1__33603_SHARP_){
var and__16133__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33603_SHARP_);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33603_SHARP_));
} else {
return and__16133__auto__;
}
});
;})(inst_33857,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
})();
var inst_33859 = cljs.core.filter.call(null,inst_33858,files);
var state_33933__$1 = (function (){var statearr_33948 = state_33933;
(statearr_33948[(22)] = inst_33859);

(statearr_33948[(23)] = inst_33857);

return statearr_33948;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_33949_34014 = state_33933__$1;
(statearr_33949_34014[(1)] = (16));

} else {
var statearr_33950_34015 = state_33933__$1;
(statearr_33950_34015[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (15))){
var inst_33847 = (state_33933[(2)]);
var state_33933__$1 = state_33933;
var statearr_33951_34016 = state_33933__$1;
(statearr_33951_34016[(2)] = inst_33847);

(statearr_33951_34016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (21))){
var state_33933__$1 = state_33933;
var statearr_33952_34017 = state_33933__$1;
(statearr_33952_34017[(2)] = null);

(statearr_33952_34017[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (31))){
var inst_33900 = (state_33933[(24)]);
var inst_33910 = (state_33933[(2)]);
var inst_33911 = cljs.core.not_empty.call(null,inst_33900);
var state_33933__$1 = (function (){var statearr_33953 = state_33933;
(statearr_33953[(25)] = inst_33910);

return statearr_33953;
})();
if(cljs.core.truth_(inst_33911)){
var statearr_33954_34018 = state_33933__$1;
(statearr_33954_34018[(1)] = (32));

} else {
var statearr_33955_34019 = state_33933__$1;
(statearr_33955_34019[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (32))){
var inst_33900 = (state_33933[(24)]);
var inst_33913 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33900);
var inst_33914 = cljs.core.pr_str.call(null,inst_33913);
var inst_33915 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_33914)].join('');
var inst_33916 = figwheel.client.utils.log.call(null,inst_33915);
var state_33933__$1 = state_33933;
var statearr_33956_34020 = state_33933__$1;
(statearr_33956_34020[(2)] = inst_33916);

(statearr_33956_34020[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (33))){
var state_33933__$1 = state_33933;
var statearr_33957_34021 = state_33933__$1;
(statearr_33957_34021[(2)] = null);

(statearr_33957_34021[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (13))){
var inst_33833 = (state_33933[(26)]);
var inst_33837 = cljs.core.chunk_first.call(null,inst_33833);
var inst_33838 = cljs.core.chunk_rest.call(null,inst_33833);
var inst_33839 = cljs.core.count.call(null,inst_33837);
var inst_33820 = inst_33838;
var inst_33821 = inst_33837;
var inst_33822 = inst_33839;
var inst_33823 = (0);
var state_33933__$1 = (function (){var statearr_33958 = state_33933;
(statearr_33958[(7)] = inst_33820);

(statearr_33958[(8)] = inst_33823);

(statearr_33958[(9)] = inst_33821);

(statearr_33958[(10)] = inst_33822);

return statearr_33958;
})();
var statearr_33959_34022 = state_33933__$1;
(statearr_33959_34022[(2)] = null);

(statearr_33959_34022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (22))){
var inst_33872 = (state_33933[(12)]);
var inst_33885 = (state_33933[(2)]);
var inst_33886 = cljs.core.not_empty.call(null,inst_33872);
var state_33933__$1 = (function (){var statearr_33960 = state_33933;
(statearr_33960[(27)] = inst_33885);

return statearr_33960;
})();
if(cljs.core.truth_(inst_33886)){
var statearr_33961_34023 = state_33933__$1;
(statearr_33961_34023[(1)] = (23));

} else {
var statearr_33962_34024 = state_33933__$1;
(statearr_33962_34024[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (36))){
var state_33933__$1 = state_33933;
var statearr_33963_34025 = state_33933__$1;
(statearr_33963_34025[(2)] = null);

(statearr_33963_34025[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (29))){
var inst_33901 = (state_33933[(28)]);
var inst_33904 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33901);
var inst_33905 = cljs.core.pr_str.call(null,inst_33904);
var inst_33906 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33905)].join('');
var inst_33907 = figwheel.client.utils.log.call(null,inst_33906);
var state_33933__$1 = state_33933;
var statearr_33964_34026 = state_33933__$1;
(statearr_33964_34026[(2)] = inst_33907);

(statearr_33964_34026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (6))){
var inst_33854 = (state_33933[(2)]);
var state_33933__$1 = state_33933;
var statearr_33965_34027 = state_33933__$1;
(statearr_33965_34027[(2)] = inst_33854);

(statearr_33965_34027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (28))){
var inst_33901 = (state_33933[(28)]);
var inst_33898 = (state_33933[(2)]);
var inst_33899 = cljs.core.get.call(null,inst_33898,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33900 = cljs.core.get.call(null,inst_33898,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_33901__$1 = cljs.core.get.call(null,inst_33898,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33902 = cljs.core.not_empty.call(null,inst_33901__$1);
var state_33933__$1 = (function (){var statearr_33966 = state_33933;
(statearr_33966[(28)] = inst_33901__$1);

(statearr_33966[(29)] = inst_33899);

(statearr_33966[(24)] = inst_33900);

return statearr_33966;
})();
if(cljs.core.truth_(inst_33902)){
var statearr_33967_34028 = state_33933__$1;
(statearr_33967_34028[(1)] = (29));

} else {
var statearr_33968_34029 = state_33933__$1;
(statearr_33968_34029[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (25))){
var inst_33931 = (state_33933[(2)]);
var state_33933__$1 = state_33933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33933__$1,inst_33931);
} else {
if((state_val_33934 === (34))){
var inst_33899 = (state_33933[(29)]);
var inst_33919 = (state_33933[(2)]);
var inst_33920 = cljs.core.not_empty.call(null,inst_33899);
var state_33933__$1 = (function (){var statearr_33969 = state_33933;
(statearr_33969[(30)] = inst_33919);

return statearr_33969;
})();
if(cljs.core.truth_(inst_33920)){
var statearr_33970_34030 = state_33933__$1;
(statearr_33970_34030[(1)] = (35));

} else {
var statearr_33971_34031 = state_33933__$1;
(statearr_33971_34031[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (17))){
var inst_33859 = (state_33933[(22)]);
var state_33933__$1 = state_33933;
var statearr_33972_34032 = state_33933__$1;
(statearr_33972_34032[(2)] = inst_33859);

(statearr_33972_34032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (3))){
var state_33933__$1 = state_33933;
var statearr_33973_34033 = state_33933__$1;
(statearr_33973_34033[(2)] = null);

(statearr_33973_34033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (12))){
var inst_33850 = (state_33933[(2)]);
var state_33933__$1 = state_33933;
var statearr_33974_34034 = state_33933__$1;
(statearr_33974_34034[(2)] = inst_33850);

(statearr_33974_34034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (2))){
var inst_33812 = (state_33933[(20)]);
var inst_33819 = cljs.core.seq.call(null,inst_33812);
var inst_33820 = inst_33819;
var inst_33821 = null;
var inst_33822 = (0);
var inst_33823 = (0);
var state_33933__$1 = (function (){var statearr_33975 = state_33933;
(statearr_33975[(7)] = inst_33820);

(statearr_33975[(8)] = inst_33823);

(statearr_33975[(9)] = inst_33821);

(statearr_33975[(10)] = inst_33822);

return statearr_33975;
})();
var statearr_33976_34035 = state_33933__$1;
(statearr_33976_34035[(2)] = null);

(statearr_33976_34035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (23))){
var inst_33872 = (state_33933[(12)]);
var inst_33869 = (state_33933[(13)]);
var inst_33892 = (state_33933[(19)]);
var inst_33865 = (state_33933[(14)]);
var inst_33866 = (state_33933[(15)]);
var inst_33870 = (state_33933[(16)]);
var inst_33888 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33891 = (function (){var files_not_loaded = inst_33872;
var res = inst_33870;
var res_SINGLEQUOTE_ = inst_33869;
var files_SINGLEQUOTE_ = inst_33866;
var all_files = inst_33865;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33872,inst_33869,inst_33892,inst_33865,inst_33866,inst_33870,inst_33888,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function (p__33890){
var map__33977 = p__33890;
var map__33977__$1 = ((cljs.core.seq_QMARK_.call(null,map__33977))?cljs.core.apply.call(null,cljs.core.hash_map,map__33977):map__33977);
var meta_data = cljs.core.get.call(null,map__33977__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33872,inst_33869,inst_33892,inst_33865,inst_33866,inst_33870,inst_33888,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
})();
var inst_33892__$1 = cljs.core.group_by.call(null,inst_33891,inst_33872);
var inst_33893 = cljs.core.seq_QMARK_.call(null,inst_33892__$1);
var state_33933__$1 = (function (){var statearr_33978 = state_33933;
(statearr_33978[(19)] = inst_33892__$1);

(statearr_33978[(31)] = inst_33888);

return statearr_33978;
})();
if(inst_33893){
var statearr_33979_34036 = state_33933__$1;
(statearr_33979_34036[(1)] = (26));

} else {
var statearr_33980_34037 = state_33933__$1;
(statearr_33980_34037[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (35))){
var inst_33899 = (state_33933[(29)]);
var inst_33922 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33899);
var inst_33923 = cljs.core.pr_str.call(null,inst_33922);
var inst_33924 = [cljs.core.str("not required: "),cljs.core.str(inst_33923)].join('');
var inst_33925 = figwheel.client.utils.log.call(null,inst_33924);
var state_33933__$1 = state_33933;
var statearr_33981_34038 = state_33933__$1;
(statearr_33981_34038[(2)] = inst_33925);

(statearr_33981_34038[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (19))){
var inst_33869 = (state_33933[(13)]);
var inst_33865 = (state_33933[(14)]);
var inst_33866 = (state_33933[(15)]);
var inst_33870 = (state_33933[(16)]);
var inst_33869__$1 = (state_33933[(2)]);
var inst_33870__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33869__$1);
var inst_33871 = (function (){var res = inst_33870__$1;
var res_SINGLEQUOTE_ = inst_33869__$1;
var files_SINGLEQUOTE_ = inst_33866;
var all_files = inst_33865;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33869,inst_33865,inst_33866,inst_33870,inst_33869__$1,inst_33870__$1,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function (p1__33605_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33605_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33869,inst_33865,inst_33866,inst_33870,inst_33869__$1,inst_33870__$1,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
})();
var inst_33872 = cljs.core.filter.call(null,inst_33871,inst_33869__$1);
var inst_33873 = cljs.core.not_empty.call(null,inst_33870__$1);
var state_33933__$1 = (function (){var statearr_33982 = state_33933;
(statearr_33982[(12)] = inst_33872);

(statearr_33982[(13)] = inst_33869__$1);

(statearr_33982[(16)] = inst_33870__$1);

return statearr_33982;
})();
if(cljs.core.truth_(inst_33873)){
var statearr_33983_34039 = state_33933__$1;
(statearr_33983_34039[(1)] = (20));

} else {
var statearr_33984_34040 = state_33933__$1;
(statearr_33984_34040[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (11))){
var state_33933__$1 = state_33933;
var statearr_33985_34041 = state_33933__$1;
(statearr_33985_34041[(2)] = null);

(statearr_33985_34041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (9))){
var inst_33852 = (state_33933[(2)]);
var state_33933__$1 = state_33933;
var statearr_33986_34042 = state_33933__$1;
(statearr_33986_34042[(2)] = inst_33852);

(statearr_33986_34042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (5))){
var inst_33823 = (state_33933[(8)]);
var inst_33822 = (state_33933[(10)]);
var inst_33825 = (inst_33823 < inst_33822);
var inst_33826 = inst_33825;
var state_33933__$1 = state_33933;
if(cljs.core.truth_(inst_33826)){
var statearr_33987_34043 = state_33933__$1;
(statearr_33987_34043[(1)] = (7));

} else {
var statearr_33988_34044 = state_33933__$1;
(statearr_33988_34044[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (14))){
var inst_33833 = (state_33933[(26)]);
var inst_33842 = cljs.core.first.call(null,inst_33833);
var inst_33843 = figwheel.client.file_reloading.eval_body.call(null,inst_33842);
var inst_33844 = cljs.core.next.call(null,inst_33833);
var inst_33820 = inst_33844;
var inst_33821 = null;
var inst_33822 = (0);
var inst_33823 = (0);
var state_33933__$1 = (function (){var statearr_33989 = state_33933;
(statearr_33989[(7)] = inst_33820);

(statearr_33989[(8)] = inst_33823);

(statearr_33989[(9)] = inst_33821);

(statearr_33989[(32)] = inst_33843);

(statearr_33989[(10)] = inst_33822);

return statearr_33989;
})();
var statearr_33990_34045 = state_33933__$1;
(statearr_33990_34045[(2)] = null);

(statearr_33990_34045[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (26))){
var inst_33892 = (state_33933[(19)]);
var inst_33895 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33892);
var state_33933__$1 = state_33933;
var statearr_33991_34046 = state_33933__$1;
(statearr_33991_34046[(2)] = inst_33895);

(statearr_33991_34046[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (16))){
var inst_33859 = (state_33933[(22)]);
var inst_33861 = (function (){var all_files = inst_33859;
return ((function (all_files,inst_33859,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function (p1__33604_SHARP_){
return cljs.core.update_in.call(null,p1__33604_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_33859,state_val_33934,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
})();
var inst_33862 = cljs.core.map.call(null,inst_33861,inst_33859);
var state_33933__$1 = state_33933;
var statearr_33992_34047 = state_33933__$1;
(statearr_33992_34047[(2)] = inst_33862);

(statearr_33992_34047[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (30))){
var state_33933__$1 = state_33933;
var statearr_33993_34048 = state_33933__$1;
(statearr_33993_34048[(2)] = null);

(statearr_33993_34048[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (10))){
var inst_33833 = (state_33933[(26)]);
var inst_33835 = cljs.core.chunked_seq_QMARK_.call(null,inst_33833);
var state_33933__$1 = state_33933;
if(inst_33835){
var statearr_33994_34049 = state_33933__$1;
(statearr_33994_34049[(1)] = (13));

} else {
var statearr_33995_34050 = state_33933__$1;
(statearr_33995_34050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (18))){
var inst_33865 = (state_33933[(14)]);
var inst_33866 = (state_33933[(15)]);
var inst_33865__$1 = (state_33933[(2)]);
var inst_33866__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_33865__$1);
var inst_33867 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33866__$1);
var state_33933__$1 = (function (){var statearr_33996 = state_33933;
(statearr_33996[(14)] = inst_33865__$1);

(statearr_33996[(15)] = inst_33866__$1);

return statearr_33996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33933__$1,(19),inst_33867);
} else {
if((state_val_33934 === (37))){
var inst_33928 = (state_33933[(2)]);
var state_33933__$1 = state_33933;
var statearr_33997_34051 = state_33933__$1;
(statearr_33997_34051[(2)] = inst_33928);

(statearr_33997_34051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33934 === (8))){
var inst_33820 = (state_33933[(7)]);
var inst_33833 = (state_33933[(26)]);
var inst_33833__$1 = cljs.core.seq.call(null,inst_33820);
var state_33933__$1 = (function (){var statearr_33998 = state_33933;
(statearr_33998[(26)] = inst_33833__$1);

return statearr_33998;
})();
if(inst_33833__$1){
var statearr_33999_34052 = state_33933__$1;
(statearr_33999_34052[(1)] = (10));

} else {
var statearr_34000_34053 = state_33933__$1;
(statearr_34000_34053[(1)] = (11));

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
});})(c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
;
return ((function (switch__18562__auto__,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34004[(0)] = state_machine__18563__auto__);

(statearr_34004[(1)] = (1));

return statearr_34004;
});
var state_machine__18563__auto____1 = (function (state_33933){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_33933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34005){if((e34005 instanceof Object)){
var ex__18566__auto__ = e34005;
var statearr_34006_34054 = state_33933;
(statearr_34006_34054[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34055 = state_33933;
state_33933 = G__34055;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_33933){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_33933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
})();
var state__18620__auto__ = (function (){var statearr_34007 = f__18619__auto__.call(null);
(statearr_34007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_34007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,map__33808,map__33808__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33809,map__33809__$1,msg,files))
);

return c__18618__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__34058,link){
var map__34060 = p__34058;
var map__34060__$1 = ((cljs.core.seq_QMARK_.call(null,map__34060))?cljs.core.apply.call(null,cljs.core.hash_map,map__34060):map__34060);
var file = cljs.core.get.call(null,map__34060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__34060,map__34060__$1,file){
return (function (p1__34056_SHARP_,p2__34057_SHARP_){
if(cljs.core._EQ_.call(null,p1__34056_SHARP_,p2__34057_SHARP_)){
return p1__34056_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__34060,map__34060__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34064){
var map__34065 = p__34064;
var map__34065__$1 = ((cljs.core.seq_QMARK_.call(null,map__34065))?cljs.core.apply.call(null,cljs.core.hash_map,map__34065):map__34065);
var current_url_length = cljs.core.get.call(null,map__34065__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__34065__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34061_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34061_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__34066){
var map__34068 = p__34066;
var map__34068__$1 = ((cljs.core.seq_QMARK_.call(null,map__34068))?cljs.core.apply.call(null,cljs.core.hash_map,map__34068):map__34068);
var f_data = map__34068__$1;
var request_url = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__34068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__34069,files_msg){
var map__34091 = p__34069;
var map__34091__$1 = ((cljs.core.seq_QMARK_.call(null,map__34091))?cljs.core.apply.call(null,cljs.core.hash_map,map__34091):map__34091);
var opts = map__34091__$1;
var on_cssload = cljs.core.get.call(null,map__34091__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34092_34112 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__34093_34113 = null;
var count__34094_34114 = (0);
var i__34095_34115 = (0);
while(true){
if((i__34095_34115 < count__34094_34114)){
var f_34116 = cljs.core._nth.call(null,chunk__34093_34113,i__34095_34115);
figwheel.client.file_reloading.reload_css_file.call(null,f_34116);

var G__34117 = seq__34092_34112;
var G__34118 = chunk__34093_34113;
var G__34119 = count__34094_34114;
var G__34120 = (i__34095_34115 + (1));
seq__34092_34112 = G__34117;
chunk__34093_34113 = G__34118;
count__34094_34114 = G__34119;
i__34095_34115 = G__34120;
continue;
} else {
var temp__4126__auto___34121 = cljs.core.seq.call(null,seq__34092_34112);
if(temp__4126__auto___34121){
var seq__34092_34122__$1 = temp__4126__auto___34121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34092_34122__$1)){
var c__16932__auto___34123 = cljs.core.chunk_first.call(null,seq__34092_34122__$1);
var G__34124 = cljs.core.chunk_rest.call(null,seq__34092_34122__$1);
var G__34125 = c__16932__auto___34123;
var G__34126 = cljs.core.count.call(null,c__16932__auto___34123);
var G__34127 = (0);
seq__34092_34112 = G__34124;
chunk__34093_34113 = G__34125;
count__34094_34114 = G__34126;
i__34095_34115 = G__34127;
continue;
} else {
var f_34128 = cljs.core.first.call(null,seq__34092_34122__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34128);

var G__34129 = cljs.core.next.call(null,seq__34092_34122__$1);
var G__34130 = null;
var G__34131 = (0);
var G__34132 = (0);
seq__34092_34112 = G__34129;
chunk__34093_34113 = G__34130;
count__34094_34114 = G__34131;
i__34095_34115 = G__34132;
continue;
}
} else {
}
}
break;
}

var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,map__34091,map__34091__$1,opts,on_cssload){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,map__34091,map__34091__$1,opts,on_cssload){
return (function (state_34102){
var state_val_34103 = (state_34102[(1)]);
if((state_val_34103 === (2))){
var inst_34098 = (state_34102[(2)]);
var inst_34099 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_34100 = on_cssload.call(null,inst_34099);
var state_34102__$1 = (function (){var statearr_34104 = state_34102;
(statearr_34104[(7)] = inst_34098);

return statearr_34104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34102__$1,inst_34100);
} else {
if((state_val_34103 === (1))){
var inst_34096 = cljs.core.async.timeout.call(null,(100));
var state_34102__$1 = state_34102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34102__$1,(2),inst_34096);
} else {
return null;
}
}
});})(c__18618__auto__,map__34091,map__34091__$1,opts,on_cssload))
;
return ((function (switch__18562__auto__,c__18618__auto__,map__34091,map__34091__$1,opts,on_cssload){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34108 = [null,null,null,null,null,null,null,null];
(statearr_34108[(0)] = state_machine__18563__auto__);

(statearr_34108[(1)] = (1));

return statearr_34108;
});
var state_machine__18563__auto____1 = (function (state_34102){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34109){if((e34109 instanceof Object)){
var ex__18566__auto__ = e34109;
var statearr_34110_34133 = state_34102;
(statearr_34110_34133[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34134 = state_34102;
state_34102 = G__34134;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34102){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,map__34091,map__34091__$1,opts,on_cssload))
})();
var state__18620__auto__ = (function (){var statearr_34111 = f__18619__auto__.call(null);
(statearr_34111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_34111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,map__34091,map__34091__$1,opts,on_cssload))
);

return c__18618__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1435015913987