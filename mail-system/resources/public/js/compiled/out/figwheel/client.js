// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34289__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34290__i = 0, G__34290__a = new Array(arguments.length -  0);
while (G__34290__i < G__34290__a.length) {G__34290__a[G__34290__i] = arguments[G__34290__i + 0]; ++G__34290__i;}
  args = new cljs.core.IndexedSeq(G__34290__a,0);
} 
return G__34289__delegate.call(this,args);};
G__34289.cljs$lang$maxFixedArity = 0;
G__34289.cljs$lang$applyTo = (function (arglist__34291){
var args = cljs.core.seq(arglist__34291);
return G__34289__delegate(args);
});
G__34289.cljs$core$IFn$_invoke$arity$variadic = G__34289__delegate;
return G__34289;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__34292){
var map__34294 = p__34292;
var map__34294__$1 = ((cljs.core.seq_QMARK_.call(null,map__34294))?cljs.core.apply.call(null,cljs.core.hash_map,map__34294):map__34294);
var class$ = cljs.core.get.call(null,map__34294__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__34294__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__16145__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__16133__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16133__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16133__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18618__auto___34423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___34423,ch){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___34423,ch){
return (function (state_34397){
var state_val_34398 = (state_34397[(1)]);
if((state_val_34398 === (7))){
var inst_34393 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
var statearr_34399_34424 = state_34397__$1;
(statearr_34399_34424[(2)] = inst_34393);

(statearr_34399_34424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (1))){
var state_34397__$1 = state_34397;
var statearr_34400_34425 = state_34397__$1;
(statearr_34400_34425[(2)] = null);

(statearr_34400_34425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (4))){
var inst_34361 = (state_34397[(7)]);
var inst_34361__$1 = (state_34397[(2)]);
var state_34397__$1 = (function (){var statearr_34401 = state_34397;
(statearr_34401[(7)] = inst_34361__$1);

return statearr_34401;
})();
if(cljs.core.truth_(inst_34361__$1)){
var statearr_34402_34426 = state_34397__$1;
(statearr_34402_34426[(1)] = (5));

} else {
var statearr_34403_34427 = state_34397__$1;
(statearr_34403_34427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (13))){
var state_34397__$1 = state_34397;
var statearr_34404_34428 = state_34397__$1;
(statearr_34404_34428[(2)] = null);

(statearr_34404_34428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (6))){
var state_34397__$1 = state_34397;
var statearr_34405_34429 = state_34397__$1;
(statearr_34405_34429[(2)] = null);

(statearr_34405_34429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (3))){
var inst_34395 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34397__$1,inst_34395);
} else {
if((state_val_34398 === (12))){
var inst_34368 = (state_34397[(8)]);
var inst_34381 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34368);
var inst_34382 = cljs.core.first.call(null,inst_34381);
var inst_34383 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34382);
var inst_34384 = console.warn("Figwheel: Not loading code with warnings - ",inst_34383);
var state_34397__$1 = state_34397;
var statearr_34406_34430 = state_34397__$1;
(statearr_34406_34430[(2)] = inst_34384);

(statearr_34406_34430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (2))){
var state_34397__$1 = state_34397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34397__$1,(4),ch);
} else {
if((state_val_34398 === (11))){
var inst_34377 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
var statearr_34407_34431 = state_34397__$1;
(statearr_34407_34431[(2)] = inst_34377);

(statearr_34407_34431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (9))){
var inst_34367 = (state_34397[(9)]);
var inst_34379 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34367,opts);
var state_34397__$1 = state_34397;
if(inst_34379){
var statearr_34408_34432 = state_34397__$1;
(statearr_34408_34432[(1)] = (12));

} else {
var statearr_34409_34433 = state_34397__$1;
(statearr_34409_34433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (5))){
var inst_34361 = (state_34397[(7)]);
var inst_34367 = (state_34397[(9)]);
var inst_34363 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34364 = (new cljs.core.PersistentArrayMap(null,2,inst_34363,null));
var inst_34365 = (new cljs.core.PersistentHashSet(null,inst_34364,null));
var inst_34366 = figwheel.client.focus_msgs.call(null,inst_34365,inst_34361);
var inst_34367__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34366);
var inst_34368 = cljs.core.first.call(null,inst_34366);
var inst_34369 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34367__$1,opts);
var state_34397__$1 = (function (){var statearr_34410 = state_34397;
(statearr_34410[(9)] = inst_34367__$1);

(statearr_34410[(8)] = inst_34368);

return statearr_34410;
})();
if(cljs.core.truth_(inst_34369)){
var statearr_34411_34434 = state_34397__$1;
(statearr_34411_34434[(1)] = (8));

} else {
var statearr_34412_34435 = state_34397__$1;
(statearr_34412_34435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (14))){
var inst_34387 = (state_34397[(2)]);
var state_34397__$1 = state_34397;
var statearr_34413_34436 = state_34397__$1;
(statearr_34413_34436[(2)] = inst_34387);

(statearr_34413_34436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (10))){
var inst_34389 = (state_34397[(2)]);
var state_34397__$1 = (function (){var statearr_34414 = state_34397;
(statearr_34414[(10)] = inst_34389);

return statearr_34414;
})();
var statearr_34415_34437 = state_34397__$1;
(statearr_34415_34437[(2)] = null);

(statearr_34415_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34398 === (8))){
var inst_34368 = (state_34397[(8)]);
var inst_34371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34372 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34368);
var inst_34373 = cljs.core.async.timeout.call(null,(1000));
var inst_34374 = [inst_34372,inst_34373];
var inst_34375 = (new cljs.core.PersistentVector(null,2,(5),inst_34371,inst_34374,null));
var state_34397__$1 = state_34397;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34397__$1,(11),inst_34375);
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
});})(c__18618__auto___34423,ch))
;
return ((function (switch__18562__auto__,c__18618__auto___34423,ch){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34419 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34419[(0)] = state_machine__18563__auto__);

(statearr_34419[(1)] = (1));

return statearr_34419;
});
var state_machine__18563__auto____1 = (function (state_34397){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34420){if((e34420 instanceof Object)){
var ex__18566__auto__ = e34420;
var statearr_34421_34438 = state_34397;
(statearr_34421_34438[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34439 = state_34397;
state_34397 = G__34439;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34397){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___34423,ch))
})();
var state__18620__auto__ = (function (){var statearr_34422 = f__18619__auto__.call(null);
(statearr_34422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___34423);

return statearr_34422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___34423,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34440_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34440_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34449 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34442_SHARP_,p2__34441_SHARP_){
return [cljs.core.str(p2__34441_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34449){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34447 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34448 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34447,_STAR_print_newline_STAR_34448,base_path_34449){
return (function() { 
var G__34450__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34451__i = 0, G__34451__a = new Array(arguments.length -  0);
while (G__34451__i < G__34451__a.length) {G__34451__a[G__34451__i] = arguments[G__34451__i + 0]; ++G__34451__i;}
  args = new cljs.core.IndexedSeq(G__34451__a,0);
} 
return G__34450__delegate.call(this,args);};
G__34450.cljs$lang$maxFixedArity = 0;
G__34450.cljs$lang$applyTo = (function (arglist__34452){
var args = cljs.core.seq(arglist__34452);
return G__34450__delegate(args);
});
G__34450.cljs$core$IFn$_invoke$arity$variadic = G__34450__delegate;
return G__34450;
})()
;})(_STAR_print_fn_STAR_34447,_STAR_print_newline_STAR_34448,base_path_34449))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34448;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34447;
}}catch (e34446){if((e34446 instanceof Error)){
var e = e34446;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34449], null));
} else {
var e = e34446;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34449))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__34453){
var map__34458 = p__34453;
var map__34458__$1 = ((cljs.core.seq_QMARK_.call(null,map__34458))?cljs.core.apply.call(null,cljs.core.hash_map,map__34458):map__34458);
var opts = map__34458__$1;
var build_id = cljs.core.get.call(null,map__34458__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34458,map__34458__$1,opts,build_id){
return (function (p__34459){
var vec__34460 = p__34459;
var map__34461 = cljs.core.nth.call(null,vec__34460,(0),null);
var map__34461__$1 = ((cljs.core.seq_QMARK_.call(null,map__34461))?cljs.core.apply.call(null,cljs.core.hash_map,map__34461):map__34461);
var msg = map__34461__$1;
var msg_name = cljs.core.get.call(null,map__34461__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34460,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34460,map__34461,map__34461__$1,msg,msg_name,_,map__34458,map__34458__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34460,map__34461,map__34461__$1,msg,msg_name,_,map__34458,map__34458__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34458,map__34458__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__34465){
var vec__34466 = p__34465;
var map__34467 = cljs.core.nth.call(null,vec__34466,(0),null);
var map__34467__$1 = ((cljs.core.seq_QMARK_.call(null,map__34467))?cljs.core.apply.call(null,cljs.core.hash_map,map__34467):map__34467);
var msg = map__34467__$1;
var msg_name = cljs.core.get.call(null,map__34467__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34466,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__34468){
var map__34476 = p__34468;
var map__34476__$1 = ((cljs.core.seq_QMARK_.call(null,map__34476))?cljs.core.apply.call(null,cljs.core.hash_map,map__34476):map__34476);
var on_compile_fail = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__34476,map__34476__$1,on_compile_fail,on_compile_warning){
return (function (p__34477){
var vec__34478 = p__34477;
var map__34479 = cljs.core.nth.call(null,vec__34478,(0),null);
var map__34479__$1 = ((cljs.core.seq_QMARK_.call(null,map__34479))?cljs.core.apply.call(null,cljs.core.hash_map,map__34479):map__34479);
var msg = map__34479__$1;
var msg_name = cljs.core.get.call(null,map__34479__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34478,(1));
var pred__34480 = cljs.core._EQ_;
var expr__34481 = msg_name;
if(cljs.core.truth_(pred__34480.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34481))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34480.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34481))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34476,map__34476__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,msg_hist,msg_names,msg){
return (function (state_34678){
var state_val_34679 = (state_34678[(1)]);
if((state_val_34679 === (7))){
var inst_34614 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34680_34721 = state_34678__$1;
(statearr_34680_34721[(2)] = inst_34614);

(statearr_34680_34721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (20))){
var inst_34640 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34678__$1 = state_34678;
if(inst_34640){
var statearr_34681_34722 = state_34678__$1;
(statearr_34681_34722[(1)] = (22));

} else {
var statearr_34682_34723 = state_34678__$1;
(statearr_34682_34723[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (27))){
var inst_34652 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34653 = figwheel.client.heads_up.display_warning.call(null,inst_34652);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(30),inst_34653);
} else {
if((state_val_34679 === (1))){
var inst_34602 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34678__$1 = state_34678;
if(cljs.core.truth_(inst_34602)){
var statearr_34683_34724 = state_34678__$1;
(statearr_34683_34724[(1)] = (2));

} else {
var statearr_34684_34725 = state_34678__$1;
(statearr_34684_34725[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (24))){
var inst_34668 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34685_34726 = state_34678__$1;
(statearr_34685_34726[(2)] = inst_34668);

(statearr_34685_34726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (4))){
var inst_34676 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34678__$1,inst_34676);
} else {
if((state_val_34679 === (15))){
var inst_34629 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34630 = figwheel.client.format_messages.call(null,inst_34629);
var inst_34631 = figwheel.client.heads_up.display_error.call(null,inst_34630);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(18),inst_34631);
} else {
if((state_val_34679 === (21))){
var inst_34670 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34686_34727 = state_34678__$1;
(statearr_34686_34727[(2)] = inst_34670);

(statearr_34686_34727[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (31))){
var inst_34659 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(34),inst_34659);
} else {
if((state_val_34679 === (32))){
var state_34678__$1 = state_34678;
var statearr_34687_34728 = state_34678__$1;
(statearr_34687_34728[(2)] = null);

(statearr_34687_34728[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (33))){
var inst_34664 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34688_34729 = state_34678__$1;
(statearr_34688_34729[(2)] = inst_34664);

(statearr_34688_34729[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (13))){
var inst_34620 = (state_34678[(2)]);
var inst_34621 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34622 = figwheel.client.format_messages.call(null,inst_34621);
var inst_34623 = figwheel.client.heads_up.display_error.call(null,inst_34622);
var state_34678__$1 = (function (){var statearr_34689 = state_34678;
(statearr_34689[(7)] = inst_34620);

return statearr_34689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(14),inst_34623);
} else {
if((state_val_34679 === (22))){
var inst_34642 = figwheel.client.heads_up.clear.call(null);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(25),inst_34642);
} else {
if((state_val_34679 === (29))){
var inst_34666 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34690_34730 = state_34678__$1;
(statearr_34690_34730[(2)] = inst_34666);

(statearr_34690_34730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (6))){
var inst_34610 = figwheel.client.heads_up.clear.call(null);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(9),inst_34610);
} else {
if((state_val_34679 === (28))){
var inst_34657 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34678__$1 = state_34678;
if(inst_34657){
var statearr_34691_34731 = state_34678__$1;
(statearr_34691_34731[(1)] = (31));

} else {
var statearr_34692_34732 = state_34678__$1;
(statearr_34692_34732[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (25))){
var inst_34644 = (state_34678[(2)]);
var inst_34645 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34646 = figwheel.client.heads_up.display_warning.call(null,inst_34645);
var state_34678__$1 = (function (){var statearr_34693 = state_34678;
(statearr_34693[(8)] = inst_34644);

return statearr_34693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(26),inst_34646);
} else {
if((state_val_34679 === (34))){
var inst_34661 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34694_34733 = state_34678__$1;
(statearr_34694_34733[(2)] = inst_34661);

(statearr_34694_34733[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (17))){
var inst_34672 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34695_34734 = state_34678__$1;
(statearr_34695_34734[(2)] = inst_34672);

(statearr_34695_34734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (3))){
var inst_34616 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34678__$1 = state_34678;
if(inst_34616){
var statearr_34696_34735 = state_34678__$1;
(statearr_34696_34735[(1)] = (10));

} else {
var statearr_34697_34736 = state_34678__$1;
(statearr_34697_34736[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (12))){
var inst_34674 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34698_34737 = state_34678__$1;
(statearr_34698_34737[(2)] = inst_34674);

(statearr_34698_34737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (2))){
var inst_34604 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34678__$1 = state_34678;
if(cljs.core.truth_(inst_34604)){
var statearr_34699_34738 = state_34678__$1;
(statearr_34699_34738[(1)] = (5));

} else {
var statearr_34700_34739 = state_34678__$1;
(statearr_34700_34739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (23))){
var inst_34650 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34678__$1 = state_34678;
if(inst_34650){
var statearr_34701_34740 = state_34678__$1;
(statearr_34701_34740[(1)] = (27));

} else {
var statearr_34702_34741 = state_34678__$1;
(statearr_34702_34741[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (19))){
var inst_34637 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34638 = figwheel.client.heads_up.append_message.call(null,inst_34637);
var state_34678__$1 = state_34678;
var statearr_34703_34742 = state_34678__$1;
(statearr_34703_34742[(2)] = inst_34638);

(statearr_34703_34742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (11))){
var inst_34627 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34678__$1 = state_34678;
if(inst_34627){
var statearr_34704_34743 = state_34678__$1;
(statearr_34704_34743[(1)] = (15));

} else {
var statearr_34705_34744 = state_34678__$1;
(statearr_34705_34744[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (9))){
var inst_34612 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34706_34745 = state_34678__$1;
(statearr_34706_34745[(2)] = inst_34612);

(statearr_34706_34745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (5))){
var inst_34606 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(8),inst_34606);
} else {
if((state_val_34679 === (14))){
var inst_34625 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34707_34746 = state_34678__$1;
(statearr_34707_34746[(2)] = inst_34625);

(statearr_34707_34746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (26))){
var inst_34648 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34708_34747 = state_34678__$1;
(statearr_34708_34747[(2)] = inst_34648);

(statearr_34708_34747[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (16))){
var inst_34635 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34678__$1 = state_34678;
if(inst_34635){
var statearr_34709_34748 = state_34678__$1;
(statearr_34709_34748[(1)] = (19));

} else {
var statearr_34710_34749 = state_34678__$1;
(statearr_34710_34749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (30))){
var inst_34655 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34711_34750 = state_34678__$1;
(statearr_34711_34750[(2)] = inst_34655);

(statearr_34711_34750[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (10))){
var inst_34618 = figwheel.client.heads_up.clear.call(null);
var state_34678__$1 = state_34678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34678__$1,(13),inst_34618);
} else {
if((state_val_34679 === (18))){
var inst_34633 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34712_34751 = state_34678__$1;
(statearr_34712_34751[(2)] = inst_34633);

(statearr_34712_34751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34679 === (8))){
var inst_34608 = (state_34678[(2)]);
var state_34678__$1 = state_34678;
var statearr_34713_34752 = state_34678__$1;
(statearr_34713_34752[(2)] = inst_34608);

(statearr_34713_34752[(1)] = (7));


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
});})(c__18618__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18562__auto__,c__18618__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34717 = [null,null,null,null,null,null,null,null,null];
(statearr_34717[(0)] = state_machine__18563__auto__);

(statearr_34717[(1)] = (1));

return statearr_34717;
});
var state_machine__18563__auto____1 = (function (state_34678){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34718){if((e34718 instanceof Object)){
var ex__18566__auto__ = e34718;
var statearr_34719_34753 = state_34678;
(statearr_34719_34753[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34754 = state_34678;
state_34678 = G__34754;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34678){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,msg_hist,msg_names,msg))
})();
var state__18620__auto__ = (function (){var statearr_34720 = f__18619__auto__.call(null);
(statearr_34720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_34720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,msg_hist,msg_names,msg))
);

return c__18618__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18618__auto___34817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___34817,ch){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___34817,ch){
return (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (8))){
var inst_34792 = (state_34800[(2)]);
var state_34800__$1 = (function (){var statearr_34802 = state_34800;
(statearr_34802[(7)] = inst_34792);

return statearr_34802;
})();
var statearr_34803_34818 = state_34800__$1;
(statearr_34803_34818[(2)] = null);

(statearr_34803_34818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (7))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34804_34819 = state_34800__$1;
(statearr_34804_34819[(2)] = inst_34796);

(statearr_34804_34819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var state_34800__$1 = state_34800;
var statearr_34805_34820 = state_34800__$1;
(statearr_34805_34820[(2)] = null);

(statearr_34805_34820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34788 = (state_34800[(8)]);
var inst_34790 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34788);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34800__$1,(8),inst_34790);
} else {
if((state_val_34801 === (4))){
var inst_34788 = (state_34800[(8)]);
var inst_34788__$1 = (state_34800[(2)]);
var state_34800__$1 = (function (){var statearr_34806 = state_34800;
(statearr_34806[(8)] = inst_34788__$1);

return statearr_34806;
})();
if(cljs.core.truth_(inst_34788__$1)){
var statearr_34807_34821 = state_34800__$1;
(statearr_34807_34821[(1)] = (5));

} else {
var statearr_34808_34822 = state_34800__$1;
(statearr_34808_34822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (3))){
var inst_34798 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34800__$1,inst_34798);
} else {
if((state_val_34801 === (2))){
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34800__$1,(4),ch);
} else {
if((state_val_34801 === (1))){
var state_34800__$1 = state_34800;
var statearr_34809_34823 = state_34800__$1;
(statearr_34809_34823[(2)] = null);

(statearr_34809_34823[(1)] = (2));


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
});})(c__18618__auto___34817,ch))
;
return ((function (switch__18562__auto__,c__18618__auto___34817,ch){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34813 = [null,null,null,null,null,null,null,null,null];
(statearr_34813[(0)] = state_machine__18563__auto__);

(statearr_34813[(1)] = (1));

return statearr_34813;
});
var state_machine__18563__auto____1 = (function (state_34800){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34814){if((e34814 instanceof Object)){
var ex__18566__auto__ = e34814;
var statearr_34815_34824 = state_34800;
(statearr_34815_34824[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34825 = state_34800;
state_34800 = G__34825;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34800){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___34817,ch))
})();
var state__18620__auto__ = (function (){var statearr_34816 = f__18619__auto__.call(null);
(statearr_34816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___34817);

return statearr_34816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___34817,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_34846){
var state_val_34847 = (state_34846[(1)]);
if((state_val_34847 === (2))){
var inst_34843 = (state_34846[(2)]);
var inst_34844 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34846__$1 = (function (){var statearr_34848 = state_34846;
(statearr_34848[(7)] = inst_34843);

return statearr_34848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34846__$1,inst_34844);
} else {
if((state_val_34847 === (1))){
var inst_34841 = cljs.core.async.timeout.call(null,(3000));
var state_34846__$1 = state_34846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34846__$1,(2),inst_34841);
} else {
return null;
}
}
});})(c__18618__auto__))
;
return ((function (switch__18562__auto__,c__18618__auto__){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34852 = [null,null,null,null,null,null,null,null];
(statearr_34852[(0)] = state_machine__18563__auto__);

(statearr_34852[(1)] = (1));

return statearr_34852;
});
var state_machine__18563__auto____1 = (function (state_34846){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34853){if((e34853 instanceof Object)){
var ex__18566__auto__ = e34853;
var statearr_34854_34856 = state_34846;
(statearr_34854_34856[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34857 = state_34846;
state_34846 = G__34857;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34846){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_34855 = f__18619__auto__.call(null);
(statearr_34855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_34855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__16133__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16133__auto__)){
return ("CustomEvent" in window);
} else {
return and__16133__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34861 = {"detail":url};
return obj34861;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__34862){
var map__34868 = p__34862;
var map__34868__$1 = ((cljs.core.seq_QMARK_.call(null,map__34868))?cljs.core.apply.call(null,cljs.core.hash_map,map__34868):map__34868);
var ed = map__34868__$1;
var exception_data = cljs.core.get.call(null,map__34868__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__34868__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34869_34873 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34870_34874 = null;
var count__34871_34875 = (0);
var i__34872_34876 = (0);
while(true){
if((i__34872_34876 < count__34871_34875)){
var msg_34877 = cljs.core._nth.call(null,chunk__34870_34874,i__34872_34876);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34877);

var G__34878 = seq__34869_34873;
var G__34879 = chunk__34870_34874;
var G__34880 = count__34871_34875;
var G__34881 = (i__34872_34876 + (1));
seq__34869_34873 = G__34878;
chunk__34870_34874 = G__34879;
count__34871_34875 = G__34880;
i__34872_34876 = G__34881;
continue;
} else {
var temp__4126__auto___34882 = cljs.core.seq.call(null,seq__34869_34873);
if(temp__4126__auto___34882){
var seq__34869_34883__$1 = temp__4126__auto___34882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34869_34883__$1)){
var c__16932__auto___34884 = cljs.core.chunk_first.call(null,seq__34869_34883__$1);
var G__34885 = cljs.core.chunk_rest.call(null,seq__34869_34883__$1);
var G__34886 = c__16932__auto___34884;
var G__34887 = cljs.core.count.call(null,c__16932__auto___34884);
var G__34888 = (0);
seq__34869_34873 = G__34885;
chunk__34870_34874 = G__34886;
count__34871_34875 = G__34887;
i__34872_34876 = G__34888;
continue;
} else {
var msg_34889 = cljs.core.first.call(null,seq__34869_34883__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34889);

var G__34890 = cljs.core.next.call(null,seq__34869_34883__$1);
var G__34891 = null;
var G__34892 = (0);
var G__34893 = (0);
seq__34869_34873 = G__34890;
chunk__34870_34874 = G__34891;
count__34871_34875 = G__34892;
i__34872_34876 = G__34893;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__34894){
var map__34896 = p__34894;
var map__34896__$1 = ((cljs.core.seq_QMARK_.call(null,map__34896))?cljs.core.apply.call(null,cljs.core.hash_map,map__34896):map__34896);
var w = map__34896__$1;
var message = cljs.core.get.call(null,map__34896__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16133__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16133__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16133__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__34903 = cljs.core.seq.call(null,plugins);
var chunk__34904 = null;
var count__34905 = (0);
var i__34906 = (0);
while(true){
if((i__34906 < count__34905)){
var vec__34907 = cljs.core._nth.call(null,chunk__34904,i__34906);
var k = cljs.core.nth.call(null,vec__34907,(0),null);
var plugin = cljs.core.nth.call(null,vec__34907,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34909 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34903,chunk__34904,count__34905,i__34906,pl_34909,vec__34907,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34909.call(null,msg_hist);
});})(seq__34903,chunk__34904,count__34905,i__34906,pl_34909,vec__34907,k,plugin))
);
} else {
}

var G__34910 = seq__34903;
var G__34911 = chunk__34904;
var G__34912 = count__34905;
var G__34913 = (i__34906 + (1));
seq__34903 = G__34910;
chunk__34904 = G__34911;
count__34905 = G__34912;
i__34906 = G__34913;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34903);
if(temp__4126__auto__){
var seq__34903__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34903__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__34903__$1);
var G__34914 = cljs.core.chunk_rest.call(null,seq__34903__$1);
var G__34915 = c__16932__auto__;
var G__34916 = cljs.core.count.call(null,c__16932__auto__);
var G__34917 = (0);
seq__34903 = G__34914;
chunk__34904 = G__34915;
count__34905 = G__34916;
i__34906 = G__34917;
continue;
} else {
var vec__34908 = cljs.core.first.call(null,seq__34903__$1);
var k = cljs.core.nth.call(null,vec__34908,(0),null);
var plugin = cljs.core.nth.call(null,vec__34908,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34918 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34903,chunk__34904,count__34905,i__34906,pl_34918,vec__34908,k,plugin,seq__34903__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34918.call(null,msg_hist);
});})(seq__34903,chunk__34904,count__34905,i__34906,pl_34918,vec__34908,k,plugin,seq__34903__$1,temp__4126__auto__))
);
} else {
}

var G__34919 = cljs.core.next.call(null,seq__34903__$1);
var G__34920 = null;
var G__34921 = (0);
var G__34922 = (0);
seq__34903 = G__34919;
chunk__34904 = G__34920;
count__34905 = G__34921;
i__34906 = G__34922;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__34923){
var map__34925 = p__34923;
var map__34925__$1 = ((cljs.core.seq_QMARK_.call(null,map__34925))?cljs.core.apply.call(null,cljs.core.hash_map,map__34925):map__34925);
var opts = map__34925__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__34923 = null;
if (arguments.length > 0) {
var G__34926__i = 0, G__34926__a = new Array(arguments.length -  0);
while (G__34926__i < G__34926__a.length) {G__34926__a[G__34926__i] = arguments[G__34926__i + 0]; ++G__34926__i;}
  p__34923 = new cljs.core.IndexedSeq(G__34926__a,0);
} 
return watch_and_reload__delegate.call(this,p__34923);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__34927){
var p__34923 = cljs.core.seq(arglist__34927);
return watch_and_reload__delegate(p__34923);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1435014981454