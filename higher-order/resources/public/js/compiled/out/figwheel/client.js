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
var G__34428__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34429__i = 0, G__34429__a = new Array(arguments.length -  0);
while (G__34429__i < G__34429__a.length) {G__34429__a[G__34429__i] = arguments[G__34429__i + 0]; ++G__34429__i;}
  args = new cljs.core.IndexedSeq(G__34429__a,0);
} 
return G__34428__delegate.call(this,args);};
G__34428.cljs$lang$maxFixedArity = 0;
G__34428.cljs$lang$applyTo = (function (arglist__34430){
var args = cljs.core.seq(arglist__34430);
return G__34428__delegate(args);
});
G__34428.cljs$core$IFn$_invoke$arity$variadic = G__34428__delegate;
return G__34428;
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
figwheel.client.error_msg_format = (function error_msg_format(p__34431){
var map__34433 = p__34431;
var map__34433__$1 = ((cljs.core.seq_QMARK_.call(null,map__34433))?cljs.core.apply.call(null,cljs.core.hash_map,map__34433):map__34433);
var class$ = cljs.core.get.call(null,map__34433__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__34433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__18618__auto___34562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___34562,ch){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___34562,ch){
return (function (state_34536){
var state_val_34537 = (state_34536[(1)]);
if((state_val_34537 === (7))){
var inst_34532 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34538_34563 = state_34536__$1;
(statearr_34538_34563[(2)] = inst_34532);

(statearr_34538_34563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (1))){
var state_34536__$1 = state_34536;
var statearr_34539_34564 = state_34536__$1;
(statearr_34539_34564[(2)] = null);

(statearr_34539_34564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (4))){
var inst_34500 = (state_34536[(7)]);
var inst_34500__$1 = (state_34536[(2)]);
var state_34536__$1 = (function (){var statearr_34540 = state_34536;
(statearr_34540[(7)] = inst_34500__$1);

return statearr_34540;
})();
if(cljs.core.truth_(inst_34500__$1)){
var statearr_34541_34565 = state_34536__$1;
(statearr_34541_34565[(1)] = (5));

} else {
var statearr_34542_34566 = state_34536__$1;
(statearr_34542_34566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (13))){
var state_34536__$1 = state_34536;
var statearr_34543_34567 = state_34536__$1;
(statearr_34543_34567[(2)] = null);

(statearr_34543_34567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (6))){
var state_34536__$1 = state_34536;
var statearr_34544_34568 = state_34536__$1;
(statearr_34544_34568[(2)] = null);

(statearr_34544_34568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (3))){
var inst_34534 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34536__$1,inst_34534);
} else {
if((state_val_34537 === (12))){
var inst_34507 = (state_34536[(8)]);
var inst_34520 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34507);
var inst_34521 = cljs.core.first.call(null,inst_34520);
var inst_34522 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34521);
var inst_34523 = console.warn("Figwheel: Not loading code with warnings - ",inst_34522);
var state_34536__$1 = state_34536;
var statearr_34545_34569 = state_34536__$1;
(statearr_34545_34569[(2)] = inst_34523);

(statearr_34545_34569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (2))){
var state_34536__$1 = state_34536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34536__$1,(4),ch);
} else {
if((state_val_34537 === (11))){
var inst_34516 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34546_34570 = state_34536__$1;
(statearr_34546_34570[(2)] = inst_34516);

(statearr_34546_34570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (9))){
var inst_34506 = (state_34536[(9)]);
var inst_34518 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34506,opts);
var state_34536__$1 = state_34536;
if(inst_34518){
var statearr_34547_34571 = state_34536__$1;
(statearr_34547_34571[(1)] = (12));

} else {
var statearr_34548_34572 = state_34536__$1;
(statearr_34548_34572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (5))){
var inst_34506 = (state_34536[(9)]);
var inst_34500 = (state_34536[(7)]);
var inst_34502 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34503 = (new cljs.core.PersistentArrayMap(null,2,inst_34502,null));
var inst_34504 = (new cljs.core.PersistentHashSet(null,inst_34503,null));
var inst_34505 = figwheel.client.focus_msgs.call(null,inst_34504,inst_34500);
var inst_34506__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34505);
var inst_34507 = cljs.core.first.call(null,inst_34505);
var inst_34508 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34506__$1,opts);
var state_34536__$1 = (function (){var statearr_34549 = state_34536;
(statearr_34549[(8)] = inst_34507);

(statearr_34549[(9)] = inst_34506__$1);

return statearr_34549;
})();
if(cljs.core.truth_(inst_34508)){
var statearr_34550_34573 = state_34536__$1;
(statearr_34550_34573[(1)] = (8));

} else {
var statearr_34551_34574 = state_34536__$1;
(statearr_34551_34574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (14))){
var inst_34526 = (state_34536[(2)]);
var state_34536__$1 = state_34536;
var statearr_34552_34575 = state_34536__$1;
(statearr_34552_34575[(2)] = inst_34526);

(statearr_34552_34575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (10))){
var inst_34528 = (state_34536[(2)]);
var state_34536__$1 = (function (){var statearr_34553 = state_34536;
(statearr_34553[(10)] = inst_34528);

return statearr_34553;
})();
var statearr_34554_34576 = state_34536__$1;
(statearr_34554_34576[(2)] = null);

(statearr_34554_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34537 === (8))){
var inst_34507 = (state_34536[(8)]);
var inst_34510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34511 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34507);
var inst_34512 = cljs.core.async.timeout.call(null,(1000));
var inst_34513 = [inst_34511,inst_34512];
var inst_34514 = (new cljs.core.PersistentVector(null,2,(5),inst_34510,inst_34513,null));
var state_34536__$1 = state_34536;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34536__$1,(11),inst_34514);
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
});})(c__18618__auto___34562,ch))
;
return ((function (switch__18562__auto__,c__18618__auto___34562,ch){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34558[(0)] = state_machine__18563__auto__);

(statearr_34558[(1)] = (1));

return statearr_34558;
});
var state_machine__18563__auto____1 = (function (state_34536){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34559){if((e34559 instanceof Object)){
var ex__18566__auto__ = e34559;
var statearr_34560_34577 = state_34536;
(statearr_34560_34577[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34578 = state_34536;
state_34536 = G__34578;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34536){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___34562,ch))
})();
var state__18620__auto__ = (function (){var statearr_34561 = f__18619__auto__.call(null);
(statearr_34561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___34562);

return statearr_34561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___34562,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34579_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34579_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34588 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34581_SHARP_,p2__34580_SHARP_){
return [cljs.core.str(p2__34580_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34588){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34586 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34587 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34586,_STAR_print_newline_STAR_34587,base_path_34588){
return (function() { 
var G__34589__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34590__i = 0, G__34590__a = new Array(arguments.length -  0);
while (G__34590__i < G__34590__a.length) {G__34590__a[G__34590__i] = arguments[G__34590__i + 0]; ++G__34590__i;}
  args = new cljs.core.IndexedSeq(G__34590__a,0);
} 
return G__34589__delegate.call(this,args);};
G__34589.cljs$lang$maxFixedArity = 0;
G__34589.cljs$lang$applyTo = (function (arglist__34591){
var args = cljs.core.seq(arglist__34591);
return G__34589__delegate(args);
});
G__34589.cljs$core$IFn$_invoke$arity$variadic = G__34589__delegate;
return G__34589;
})()
;})(_STAR_print_fn_STAR_34586,_STAR_print_newline_STAR_34587,base_path_34588))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34587;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34586;
}}catch (e34585){if((e34585 instanceof Error)){
var e = e34585;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34588], null));
} else {
var e = e34585;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34588))
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
figwheel.client.repl_plugin = (function repl_plugin(p__34592){
var map__34597 = p__34592;
var map__34597__$1 = ((cljs.core.seq_QMARK_.call(null,map__34597))?cljs.core.apply.call(null,cljs.core.hash_map,map__34597):map__34597);
var opts = map__34597__$1;
var build_id = cljs.core.get.call(null,map__34597__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34597,map__34597__$1,opts,build_id){
return (function (p__34598){
var vec__34599 = p__34598;
var map__34600 = cljs.core.nth.call(null,vec__34599,(0),null);
var map__34600__$1 = ((cljs.core.seq_QMARK_.call(null,map__34600))?cljs.core.apply.call(null,cljs.core.hash_map,map__34600):map__34600);
var msg = map__34600__$1;
var msg_name = cljs.core.get.call(null,map__34600__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34599,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34599,map__34600,map__34600__$1,msg,msg_name,_,map__34597,map__34597__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34599,map__34600,map__34600__$1,msg,msg_name,_,map__34597,map__34597__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34597,map__34597__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__34604){
var vec__34605 = p__34604;
var map__34606 = cljs.core.nth.call(null,vec__34605,(0),null);
var map__34606__$1 = ((cljs.core.seq_QMARK_.call(null,map__34606))?cljs.core.apply.call(null,cljs.core.hash_map,map__34606):map__34606);
var msg = map__34606__$1;
var msg_name = cljs.core.get.call(null,map__34606__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34605,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__34607){
var map__34615 = p__34607;
var map__34615__$1 = ((cljs.core.seq_QMARK_.call(null,map__34615))?cljs.core.apply.call(null,cljs.core.hash_map,map__34615):map__34615);
var on_compile_fail = cljs.core.get.call(null,map__34615__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__34615__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__34615,map__34615__$1,on_compile_fail,on_compile_warning){
return (function (p__34616){
var vec__34617 = p__34616;
var map__34618 = cljs.core.nth.call(null,vec__34617,(0),null);
var map__34618__$1 = ((cljs.core.seq_QMARK_.call(null,map__34618))?cljs.core.apply.call(null,cljs.core.hash_map,map__34618):map__34618);
var msg = map__34618__$1;
var msg_name = cljs.core.get.call(null,map__34618__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34617,(1));
var pred__34619 = cljs.core._EQ_;
var expr__34620 = msg_name;
if(cljs.core.truth_(pred__34619.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34620))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34619.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34620))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34615,map__34615__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,msg_hist,msg_names,msg){
return (function (state_34817){
var state_val_34818 = (state_34817[(1)]);
if((state_val_34818 === (7))){
var inst_34753 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34819_34860 = state_34817__$1;
(statearr_34819_34860[(2)] = inst_34753);

(statearr_34819_34860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (20))){
var inst_34779 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34817__$1 = state_34817;
if(inst_34779){
var statearr_34820_34861 = state_34817__$1;
(statearr_34820_34861[(1)] = (22));

} else {
var statearr_34821_34862 = state_34817__$1;
(statearr_34821_34862[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (27))){
var inst_34791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34792 = figwheel.client.heads_up.display_warning.call(null,inst_34791);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(30),inst_34792);
} else {
if((state_val_34818 === (1))){
var inst_34741 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34741)){
var statearr_34822_34863 = state_34817__$1;
(statearr_34822_34863[(1)] = (2));

} else {
var statearr_34823_34864 = state_34817__$1;
(statearr_34823_34864[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (24))){
var inst_34807 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34824_34865 = state_34817__$1;
(statearr_34824_34865[(2)] = inst_34807);

(statearr_34824_34865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (4))){
var inst_34815 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34817__$1,inst_34815);
} else {
if((state_val_34818 === (15))){
var inst_34768 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34769 = figwheel.client.format_messages.call(null,inst_34768);
var inst_34770 = figwheel.client.heads_up.display_error.call(null,inst_34769);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(18),inst_34770);
} else {
if((state_val_34818 === (21))){
var inst_34809 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34825_34866 = state_34817__$1;
(statearr_34825_34866[(2)] = inst_34809);

(statearr_34825_34866[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (31))){
var inst_34798 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(34),inst_34798);
} else {
if((state_val_34818 === (32))){
var state_34817__$1 = state_34817;
var statearr_34826_34867 = state_34817__$1;
(statearr_34826_34867[(2)] = null);

(statearr_34826_34867[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (33))){
var inst_34803 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34827_34868 = state_34817__$1;
(statearr_34827_34868[(2)] = inst_34803);

(statearr_34827_34868[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (13))){
var inst_34759 = (state_34817[(2)]);
var inst_34760 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34761 = figwheel.client.format_messages.call(null,inst_34760);
var inst_34762 = figwheel.client.heads_up.display_error.call(null,inst_34761);
var state_34817__$1 = (function (){var statearr_34828 = state_34817;
(statearr_34828[(7)] = inst_34759);

return statearr_34828;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(14),inst_34762);
} else {
if((state_val_34818 === (22))){
var inst_34781 = figwheel.client.heads_up.clear.call(null);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(25),inst_34781);
} else {
if((state_val_34818 === (29))){
var inst_34805 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34829_34869 = state_34817__$1;
(statearr_34829_34869[(2)] = inst_34805);

(statearr_34829_34869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (6))){
var inst_34749 = figwheel.client.heads_up.clear.call(null);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(9),inst_34749);
} else {
if((state_val_34818 === (28))){
var inst_34796 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34817__$1 = state_34817;
if(inst_34796){
var statearr_34830_34870 = state_34817__$1;
(statearr_34830_34870[(1)] = (31));

} else {
var statearr_34831_34871 = state_34817__$1;
(statearr_34831_34871[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (25))){
var inst_34783 = (state_34817[(2)]);
var inst_34784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34785 = figwheel.client.heads_up.display_warning.call(null,inst_34784);
var state_34817__$1 = (function (){var statearr_34832 = state_34817;
(statearr_34832[(8)] = inst_34783);

return statearr_34832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(26),inst_34785);
} else {
if((state_val_34818 === (34))){
var inst_34800 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34833_34872 = state_34817__$1;
(statearr_34833_34872[(2)] = inst_34800);

(statearr_34833_34872[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (17))){
var inst_34811 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34834_34873 = state_34817__$1;
(statearr_34834_34873[(2)] = inst_34811);

(statearr_34834_34873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (3))){
var inst_34755 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34817__$1 = state_34817;
if(inst_34755){
var statearr_34835_34874 = state_34817__$1;
(statearr_34835_34874[(1)] = (10));

} else {
var statearr_34836_34875 = state_34817__$1;
(statearr_34836_34875[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (12))){
var inst_34813 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34837_34876 = state_34817__$1;
(statearr_34837_34876[(2)] = inst_34813);

(statearr_34837_34876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (2))){
var inst_34743 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34743)){
var statearr_34838_34877 = state_34817__$1;
(statearr_34838_34877[(1)] = (5));

} else {
var statearr_34839_34878 = state_34817__$1;
(statearr_34839_34878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (23))){
var inst_34789 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34817__$1 = state_34817;
if(inst_34789){
var statearr_34840_34879 = state_34817__$1;
(statearr_34840_34879[(1)] = (27));

} else {
var statearr_34841_34880 = state_34817__$1;
(statearr_34841_34880[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (19))){
var inst_34776 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34777 = figwheel.client.heads_up.append_message.call(null,inst_34776);
var state_34817__$1 = state_34817;
var statearr_34842_34881 = state_34817__$1;
(statearr_34842_34881[(2)] = inst_34777);

(statearr_34842_34881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (11))){
var inst_34766 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34817__$1 = state_34817;
if(inst_34766){
var statearr_34843_34882 = state_34817__$1;
(statearr_34843_34882[(1)] = (15));

} else {
var statearr_34844_34883 = state_34817__$1;
(statearr_34844_34883[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (9))){
var inst_34751 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34845_34884 = state_34817__$1;
(statearr_34845_34884[(2)] = inst_34751);

(statearr_34845_34884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (5))){
var inst_34745 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(8),inst_34745);
} else {
if((state_val_34818 === (14))){
var inst_34764 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34846_34885 = state_34817__$1;
(statearr_34846_34885[(2)] = inst_34764);

(statearr_34846_34885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (26))){
var inst_34787 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34847_34886 = state_34817__$1;
(statearr_34847_34886[(2)] = inst_34787);

(statearr_34847_34886[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (16))){
var inst_34774 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34817__$1 = state_34817;
if(inst_34774){
var statearr_34848_34887 = state_34817__$1;
(statearr_34848_34887[(1)] = (19));

} else {
var statearr_34849_34888 = state_34817__$1;
(statearr_34849_34888[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (30))){
var inst_34794 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34850_34889 = state_34817__$1;
(statearr_34850_34889[(2)] = inst_34794);

(statearr_34850_34889[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (10))){
var inst_34757 = figwheel.client.heads_up.clear.call(null);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34817__$1,(13),inst_34757);
} else {
if((state_val_34818 === (18))){
var inst_34772 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34851_34890 = state_34817__$1;
(statearr_34851_34890[(2)] = inst_34772);

(statearr_34851_34890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (8))){
var inst_34747 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34852_34891 = state_34817__$1;
(statearr_34852_34891[(2)] = inst_34747);

(statearr_34852_34891[(1)] = (7));


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
var statearr_34856 = [null,null,null,null,null,null,null,null,null];
(statearr_34856[(0)] = state_machine__18563__auto__);

(statearr_34856[(1)] = (1));

return statearr_34856;
});
var state_machine__18563__auto____1 = (function (state_34817){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34857){if((e34857 instanceof Object)){
var ex__18566__auto__ = e34857;
var statearr_34858_34892 = state_34817;
(statearr_34858_34892[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34893 = state_34817;
state_34817 = G__34893;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34817){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,msg_hist,msg_names,msg))
})();
var state__18620__auto__ = (function (){var statearr_34859 = f__18619__auto__.call(null);
(statearr_34859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_34859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,msg_hist,msg_names,msg))
);

return c__18618__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18618__auto___34956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___34956,ch){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___34956,ch){
return (function (state_34939){
var state_val_34940 = (state_34939[(1)]);
if((state_val_34940 === (8))){
var inst_34931 = (state_34939[(2)]);
var state_34939__$1 = (function (){var statearr_34941 = state_34939;
(statearr_34941[(7)] = inst_34931);

return statearr_34941;
})();
var statearr_34942_34957 = state_34939__$1;
(statearr_34942_34957[(2)] = null);

(statearr_34942_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (7))){
var inst_34935 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34943_34958 = state_34939__$1;
(statearr_34943_34958[(2)] = inst_34935);

(statearr_34943_34958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (6))){
var state_34939__$1 = state_34939;
var statearr_34944_34959 = state_34939__$1;
(statearr_34944_34959[(2)] = null);

(statearr_34944_34959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (5))){
var inst_34927 = (state_34939[(8)]);
var inst_34929 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34927);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(8),inst_34929);
} else {
if((state_val_34940 === (4))){
var inst_34927 = (state_34939[(8)]);
var inst_34927__$1 = (state_34939[(2)]);
var state_34939__$1 = (function (){var statearr_34945 = state_34939;
(statearr_34945[(8)] = inst_34927__$1);

return statearr_34945;
})();
if(cljs.core.truth_(inst_34927__$1)){
var statearr_34946_34960 = state_34939__$1;
(statearr_34946_34960[(1)] = (5));

} else {
var statearr_34947_34961 = state_34939__$1;
(statearr_34947_34961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (3))){
var inst_34937 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34939__$1,inst_34937);
} else {
if((state_val_34940 === (2))){
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(4),ch);
} else {
if((state_val_34940 === (1))){
var state_34939__$1 = state_34939;
var statearr_34948_34962 = state_34939__$1;
(statearr_34948_34962[(2)] = null);

(statearr_34948_34962[(1)] = (2));


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
});})(c__18618__auto___34956,ch))
;
return ((function (switch__18562__auto__,c__18618__auto___34956,ch){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34952 = [null,null,null,null,null,null,null,null,null];
(statearr_34952[(0)] = state_machine__18563__auto__);

(statearr_34952[(1)] = (1));

return statearr_34952;
});
var state_machine__18563__auto____1 = (function (state_34939){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34953){if((e34953 instanceof Object)){
var ex__18566__auto__ = e34953;
var statearr_34954_34963 = state_34939;
(statearr_34954_34963[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34964 = state_34939;
state_34939 = G__34964;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34939){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___34956,ch))
})();
var state__18620__auto__ = (function (){var statearr_34955 = f__18619__auto__.call(null);
(statearr_34955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___34956);

return statearr_34955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___34956,ch))
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
return (function (state_34985){
var state_val_34986 = (state_34985[(1)]);
if((state_val_34986 === (2))){
var inst_34982 = (state_34985[(2)]);
var inst_34983 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34985__$1 = (function (){var statearr_34987 = state_34985;
(statearr_34987[(7)] = inst_34982);

return statearr_34987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34985__$1,inst_34983);
} else {
if((state_val_34986 === (1))){
var inst_34980 = cljs.core.async.timeout.call(null,(3000));
var state_34985__$1 = state_34985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34985__$1,(2),inst_34980);
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
var statearr_34991 = [null,null,null,null,null,null,null,null];
(statearr_34991[(0)] = state_machine__18563__auto__);

(statearr_34991[(1)] = (1));

return statearr_34991;
});
var state_machine__18563__auto____1 = (function (state_34985){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34992){if((e34992 instanceof Object)){
var ex__18566__auto__ = e34992;
var statearr_34993_34995 = state_34985;
(statearr_34993_34995[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34996 = state_34985;
state_34985 = G__34996;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34985){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_34994 = f__18619__auto__.call(null);
(statearr_34994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_34994;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj35000 = {"detail":url};
return obj35000;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__35001){
var map__35007 = p__35001;
var map__35007__$1 = ((cljs.core.seq_QMARK_.call(null,map__35007))?cljs.core.apply.call(null,cljs.core.hash_map,map__35007):map__35007);
var ed = map__35007__$1;
var exception_data = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35008_35012 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35009_35013 = null;
var count__35010_35014 = (0);
var i__35011_35015 = (0);
while(true){
if((i__35011_35015 < count__35010_35014)){
var msg_35016 = cljs.core._nth.call(null,chunk__35009_35013,i__35011_35015);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35016);

var G__35017 = seq__35008_35012;
var G__35018 = chunk__35009_35013;
var G__35019 = count__35010_35014;
var G__35020 = (i__35011_35015 + (1));
seq__35008_35012 = G__35017;
chunk__35009_35013 = G__35018;
count__35010_35014 = G__35019;
i__35011_35015 = G__35020;
continue;
} else {
var temp__4126__auto___35021 = cljs.core.seq.call(null,seq__35008_35012);
if(temp__4126__auto___35021){
var seq__35008_35022__$1 = temp__4126__auto___35021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35008_35022__$1)){
var c__16932__auto___35023 = cljs.core.chunk_first.call(null,seq__35008_35022__$1);
var G__35024 = cljs.core.chunk_rest.call(null,seq__35008_35022__$1);
var G__35025 = c__16932__auto___35023;
var G__35026 = cljs.core.count.call(null,c__16932__auto___35023);
var G__35027 = (0);
seq__35008_35012 = G__35024;
chunk__35009_35013 = G__35025;
count__35010_35014 = G__35026;
i__35011_35015 = G__35027;
continue;
} else {
var msg_35028 = cljs.core.first.call(null,seq__35008_35022__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35028);

var G__35029 = cljs.core.next.call(null,seq__35008_35022__$1);
var G__35030 = null;
var G__35031 = (0);
var G__35032 = (0);
seq__35008_35012 = G__35029;
chunk__35009_35013 = G__35030;
count__35010_35014 = G__35031;
i__35011_35015 = G__35032;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__35033){
var map__35035 = p__35033;
var map__35035__$1 = ((cljs.core.seq_QMARK_.call(null,map__35035))?cljs.core.apply.call(null,cljs.core.hash_map,map__35035):map__35035);
var w = map__35035__$1;
var message = cljs.core.get.call(null,map__35035__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35042 = cljs.core.seq.call(null,plugins);
var chunk__35043 = null;
var count__35044 = (0);
var i__35045 = (0);
while(true){
if((i__35045 < count__35044)){
var vec__35046 = cljs.core._nth.call(null,chunk__35043,i__35045);
var k = cljs.core.nth.call(null,vec__35046,(0),null);
var plugin = cljs.core.nth.call(null,vec__35046,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35048 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35042,chunk__35043,count__35044,i__35045,pl_35048,vec__35046,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35048.call(null,msg_hist);
});})(seq__35042,chunk__35043,count__35044,i__35045,pl_35048,vec__35046,k,plugin))
);
} else {
}

var G__35049 = seq__35042;
var G__35050 = chunk__35043;
var G__35051 = count__35044;
var G__35052 = (i__35045 + (1));
seq__35042 = G__35049;
chunk__35043 = G__35050;
count__35044 = G__35051;
i__35045 = G__35052;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35042);
if(temp__4126__auto__){
var seq__35042__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35042__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__35042__$1);
var G__35053 = cljs.core.chunk_rest.call(null,seq__35042__$1);
var G__35054 = c__16932__auto__;
var G__35055 = cljs.core.count.call(null,c__16932__auto__);
var G__35056 = (0);
seq__35042 = G__35053;
chunk__35043 = G__35054;
count__35044 = G__35055;
i__35045 = G__35056;
continue;
} else {
var vec__35047 = cljs.core.first.call(null,seq__35042__$1);
var k = cljs.core.nth.call(null,vec__35047,(0),null);
var plugin = cljs.core.nth.call(null,vec__35047,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35057 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35042,chunk__35043,count__35044,i__35045,pl_35057,vec__35047,k,plugin,seq__35042__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35057.call(null,msg_hist);
});})(seq__35042,chunk__35043,count__35044,i__35045,pl_35057,vec__35047,k,plugin,seq__35042__$1,temp__4126__auto__))
);
} else {
}

var G__35058 = cljs.core.next.call(null,seq__35042__$1);
var G__35059 = null;
var G__35060 = (0);
var G__35061 = (0);
seq__35042 = G__35058;
chunk__35043 = G__35059;
count__35044 = G__35060;
i__35045 = G__35061;
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
var watch_and_reload__delegate = function (p__35062){
var map__35064 = p__35062;
var map__35064__$1 = ((cljs.core.seq_QMARK_.call(null,map__35064))?cljs.core.apply.call(null,cljs.core.hash_map,map__35064):map__35064);
var opts = map__35064__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__35062 = null;
if (arguments.length > 0) {
var G__35065__i = 0, G__35065__a = new Array(arguments.length -  0);
while (G__35065__i < G__35065__a.length) {G__35065__a[G__35065__i] = arguments[G__35065__i + 0]; ++G__35065__i;}
  p__35062 = new cljs.core.IndexedSeq(G__35065__a,0);
} 
return watch_and_reload__delegate.call(this,p__35062);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__35066){
var p__35062 = cljs.core.seq(arglist__35066);
return watch_and_reload__delegate(p__35062);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1435015536443