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
var G__32412__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32413__i = 0, G__32413__a = new Array(arguments.length -  0);
while (G__32413__i < G__32413__a.length) {G__32413__a[G__32413__i] = arguments[G__32413__i + 0]; ++G__32413__i;}
  args = new cljs.core.IndexedSeq(G__32413__a,0);
} 
return G__32412__delegate.call(this,args);};
G__32412.cljs$lang$maxFixedArity = 0;
G__32412.cljs$lang$applyTo = (function (arglist__32414){
var args = cljs.core.seq(arglist__32414);
return G__32412__delegate(args);
});
G__32412.cljs$core$IFn$_invoke$arity$variadic = G__32412__delegate;
return G__32412;
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
figwheel.client.error_msg_format = (function error_msg_format(p__32415){
var map__32417 = p__32415;
var map__32417__$1 = ((cljs.core.seq_QMARK_.call(null,map__32417))?cljs.core.apply.call(null,cljs.core.hash_map,map__32417):map__32417);
var class$ = cljs.core.get.call(null,map__32417__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__32417__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__18618__auto___32546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32546,ch){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32546,ch){
return (function (state_32520){
var state_val_32521 = (state_32520[(1)]);
if((state_val_32521 === (7))){
var inst_32516 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32522_32547 = state_32520__$1;
(statearr_32522_32547[(2)] = inst_32516);

(statearr_32522_32547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (1))){
var state_32520__$1 = state_32520;
var statearr_32523_32548 = state_32520__$1;
(statearr_32523_32548[(2)] = null);

(statearr_32523_32548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (4))){
var inst_32484 = (state_32520[(7)]);
var inst_32484__$1 = (state_32520[(2)]);
var state_32520__$1 = (function (){var statearr_32524 = state_32520;
(statearr_32524[(7)] = inst_32484__$1);

return statearr_32524;
})();
if(cljs.core.truth_(inst_32484__$1)){
var statearr_32525_32549 = state_32520__$1;
(statearr_32525_32549[(1)] = (5));

} else {
var statearr_32526_32550 = state_32520__$1;
(statearr_32526_32550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (13))){
var state_32520__$1 = state_32520;
var statearr_32527_32551 = state_32520__$1;
(statearr_32527_32551[(2)] = null);

(statearr_32527_32551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (6))){
var state_32520__$1 = state_32520;
var statearr_32528_32552 = state_32520__$1;
(statearr_32528_32552[(2)] = null);

(statearr_32528_32552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (3))){
var inst_32518 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32520__$1,inst_32518);
} else {
if((state_val_32521 === (12))){
var inst_32491 = (state_32520[(8)]);
var inst_32504 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32491);
var inst_32505 = cljs.core.first.call(null,inst_32504);
var inst_32506 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32505);
var inst_32507 = console.warn("Figwheel: Not loading code with warnings - ",inst_32506);
var state_32520__$1 = state_32520;
var statearr_32529_32553 = state_32520__$1;
(statearr_32529_32553[(2)] = inst_32507);

(statearr_32529_32553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (2))){
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32520__$1,(4),ch);
} else {
if((state_val_32521 === (11))){
var inst_32500 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32530_32554 = state_32520__$1;
(statearr_32530_32554[(2)] = inst_32500);

(statearr_32530_32554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (9))){
var inst_32490 = (state_32520[(9)]);
var inst_32502 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32490,opts);
var state_32520__$1 = state_32520;
if(inst_32502){
var statearr_32531_32555 = state_32520__$1;
(statearr_32531_32555[(1)] = (12));

} else {
var statearr_32532_32556 = state_32520__$1;
(statearr_32532_32556[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (5))){
var inst_32484 = (state_32520[(7)]);
var inst_32490 = (state_32520[(9)]);
var inst_32486 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32487 = (new cljs.core.PersistentArrayMap(null,2,inst_32486,null));
var inst_32488 = (new cljs.core.PersistentHashSet(null,inst_32487,null));
var inst_32489 = figwheel.client.focus_msgs.call(null,inst_32488,inst_32484);
var inst_32490__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32489);
var inst_32491 = cljs.core.first.call(null,inst_32489);
var inst_32492 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32490__$1,opts);
var state_32520__$1 = (function (){var statearr_32533 = state_32520;
(statearr_32533[(9)] = inst_32490__$1);

(statearr_32533[(8)] = inst_32491);

return statearr_32533;
})();
if(cljs.core.truth_(inst_32492)){
var statearr_32534_32557 = state_32520__$1;
(statearr_32534_32557[(1)] = (8));

} else {
var statearr_32535_32558 = state_32520__$1;
(statearr_32535_32558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (14))){
var inst_32510 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32536_32559 = state_32520__$1;
(statearr_32536_32559[(2)] = inst_32510);

(statearr_32536_32559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (10))){
var inst_32512 = (state_32520[(2)]);
var state_32520__$1 = (function (){var statearr_32537 = state_32520;
(statearr_32537[(10)] = inst_32512);

return statearr_32537;
})();
var statearr_32538_32560 = state_32520__$1;
(statearr_32538_32560[(2)] = null);

(statearr_32538_32560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (8))){
var inst_32491 = (state_32520[(8)]);
var inst_32494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32495 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32491);
var inst_32496 = cljs.core.async.timeout.call(null,(1000));
var inst_32497 = [inst_32495,inst_32496];
var inst_32498 = (new cljs.core.PersistentVector(null,2,(5),inst_32494,inst_32497,null));
var state_32520__$1 = state_32520;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32520__$1,(11),inst_32498);
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
});})(c__18618__auto___32546,ch))
;
return ((function (switch__18562__auto__,c__18618__auto___32546,ch){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32542[(0)] = state_machine__18563__auto__);

(statearr_32542[(1)] = (1));

return statearr_32542;
});
var state_machine__18563__auto____1 = (function (state_32520){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32543){if((e32543 instanceof Object)){
var ex__18566__auto__ = e32543;
var statearr_32544_32561 = state_32520;
(statearr_32544_32561[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32562 = state_32520;
state_32520 = G__32562;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32520){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32546,ch))
})();
var state__18620__auto__ = (function (){var statearr_32545 = f__18619__auto__.call(null);
(statearr_32545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32546);

return statearr_32545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32546,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32563_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32563_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_32572 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__32565_SHARP_,p2__32564_SHARP_){
return [cljs.core.str(p2__32564_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32572){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_32570 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32571 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32570,_STAR_print_newline_STAR_32571,base_path_32572){
return (function() { 
var G__32573__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32574__i = 0, G__32574__a = new Array(arguments.length -  0);
while (G__32574__i < G__32574__a.length) {G__32574__a[G__32574__i] = arguments[G__32574__i + 0]; ++G__32574__i;}
  args = new cljs.core.IndexedSeq(G__32574__a,0);
} 
return G__32573__delegate.call(this,args);};
G__32573.cljs$lang$maxFixedArity = 0;
G__32573.cljs$lang$applyTo = (function (arglist__32575){
var args = cljs.core.seq(arglist__32575);
return G__32573__delegate(args);
});
G__32573.cljs$core$IFn$_invoke$arity$variadic = G__32573__delegate;
return G__32573;
})()
;})(_STAR_print_fn_STAR_32570,_STAR_print_newline_STAR_32571,base_path_32572))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32571;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32570;
}}catch (e32569){if((e32569 instanceof Error)){
var e = e32569;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32572], null));
} else {
var e = e32569;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32572))
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
figwheel.client.repl_plugin = (function repl_plugin(p__32576){
var map__32581 = p__32576;
var map__32581__$1 = ((cljs.core.seq_QMARK_.call(null,map__32581))?cljs.core.apply.call(null,cljs.core.hash_map,map__32581):map__32581);
var opts = map__32581__$1;
var build_id = cljs.core.get.call(null,map__32581__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32581,map__32581__$1,opts,build_id){
return (function (p__32582){
var vec__32583 = p__32582;
var map__32584 = cljs.core.nth.call(null,vec__32583,(0),null);
var map__32584__$1 = ((cljs.core.seq_QMARK_.call(null,map__32584))?cljs.core.apply.call(null,cljs.core.hash_map,map__32584):map__32584);
var msg = map__32584__$1;
var msg_name = cljs.core.get.call(null,map__32584__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32583,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__32583,map__32584,map__32584__$1,msg,msg_name,_,map__32581,map__32581__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32583,map__32584,map__32584__$1,msg,msg_name,_,map__32581,map__32581__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32581,map__32581__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__32588){
var vec__32589 = p__32588;
var map__32590 = cljs.core.nth.call(null,vec__32589,(0),null);
var map__32590__$1 = ((cljs.core.seq_QMARK_.call(null,map__32590))?cljs.core.apply.call(null,cljs.core.hash_map,map__32590):map__32590);
var msg = map__32590__$1;
var msg_name = cljs.core.get.call(null,map__32590__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32589,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__32591){
var map__32599 = p__32591;
var map__32599__$1 = ((cljs.core.seq_QMARK_.call(null,map__32599))?cljs.core.apply.call(null,cljs.core.hash_map,map__32599):map__32599);
var on_compile_fail = cljs.core.get.call(null,map__32599__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__32599__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__32599,map__32599__$1,on_compile_fail,on_compile_warning){
return (function (p__32600){
var vec__32601 = p__32600;
var map__32602 = cljs.core.nth.call(null,vec__32601,(0),null);
var map__32602__$1 = ((cljs.core.seq_QMARK_.call(null,map__32602))?cljs.core.apply.call(null,cljs.core.hash_map,map__32602):map__32602);
var msg = map__32602__$1;
var msg_name = cljs.core.get.call(null,map__32602__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32601,(1));
var pred__32603 = cljs.core._EQ_;
var expr__32604 = msg_name;
if(cljs.core.truth_(pred__32603.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32604))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32603.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32604))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32599,map__32599__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,msg_hist,msg_names,msg){
return (function (state_32801){
var state_val_32802 = (state_32801[(1)]);
if((state_val_32802 === (7))){
var inst_32737 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32803_32844 = state_32801__$1;
(statearr_32803_32844[(2)] = inst_32737);

(statearr_32803_32844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (20))){
var inst_32763 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32801__$1 = state_32801;
if(inst_32763){
var statearr_32804_32845 = state_32801__$1;
(statearr_32804_32845[(1)] = (22));

} else {
var statearr_32805_32846 = state_32801__$1;
(statearr_32805_32846[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (27))){
var inst_32775 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32776 = figwheel.client.heads_up.display_warning.call(null,inst_32775);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(30),inst_32776);
} else {
if((state_val_32802 === (1))){
var inst_32725 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32801__$1 = state_32801;
if(cljs.core.truth_(inst_32725)){
var statearr_32806_32847 = state_32801__$1;
(statearr_32806_32847[(1)] = (2));

} else {
var statearr_32807_32848 = state_32801__$1;
(statearr_32807_32848[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (24))){
var inst_32791 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32808_32849 = state_32801__$1;
(statearr_32808_32849[(2)] = inst_32791);

(statearr_32808_32849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (4))){
var inst_32799 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32801__$1,inst_32799);
} else {
if((state_val_32802 === (15))){
var inst_32752 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32753 = figwheel.client.format_messages.call(null,inst_32752);
var inst_32754 = figwheel.client.heads_up.display_error.call(null,inst_32753);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(18),inst_32754);
} else {
if((state_val_32802 === (21))){
var inst_32793 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32809_32850 = state_32801__$1;
(statearr_32809_32850[(2)] = inst_32793);

(statearr_32809_32850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (31))){
var inst_32782 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(34),inst_32782);
} else {
if((state_val_32802 === (32))){
var state_32801__$1 = state_32801;
var statearr_32810_32851 = state_32801__$1;
(statearr_32810_32851[(2)] = null);

(statearr_32810_32851[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (33))){
var inst_32787 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32811_32852 = state_32801__$1;
(statearr_32811_32852[(2)] = inst_32787);

(statearr_32811_32852[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (13))){
var inst_32743 = (state_32801[(2)]);
var inst_32744 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32745 = figwheel.client.format_messages.call(null,inst_32744);
var inst_32746 = figwheel.client.heads_up.display_error.call(null,inst_32745);
var state_32801__$1 = (function (){var statearr_32812 = state_32801;
(statearr_32812[(7)] = inst_32743);

return statearr_32812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(14),inst_32746);
} else {
if((state_val_32802 === (22))){
var inst_32765 = figwheel.client.heads_up.clear.call(null);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(25),inst_32765);
} else {
if((state_val_32802 === (29))){
var inst_32789 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32813_32853 = state_32801__$1;
(statearr_32813_32853[(2)] = inst_32789);

(statearr_32813_32853[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (6))){
var inst_32733 = figwheel.client.heads_up.clear.call(null);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(9),inst_32733);
} else {
if((state_val_32802 === (28))){
var inst_32780 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32801__$1 = state_32801;
if(inst_32780){
var statearr_32814_32854 = state_32801__$1;
(statearr_32814_32854[(1)] = (31));

} else {
var statearr_32815_32855 = state_32801__$1;
(statearr_32815_32855[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (25))){
var inst_32767 = (state_32801[(2)]);
var inst_32768 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32769 = figwheel.client.heads_up.display_warning.call(null,inst_32768);
var state_32801__$1 = (function (){var statearr_32816 = state_32801;
(statearr_32816[(8)] = inst_32767);

return statearr_32816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(26),inst_32769);
} else {
if((state_val_32802 === (34))){
var inst_32784 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32817_32856 = state_32801__$1;
(statearr_32817_32856[(2)] = inst_32784);

(statearr_32817_32856[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (17))){
var inst_32795 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32818_32857 = state_32801__$1;
(statearr_32818_32857[(2)] = inst_32795);

(statearr_32818_32857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (3))){
var inst_32739 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32801__$1 = state_32801;
if(inst_32739){
var statearr_32819_32858 = state_32801__$1;
(statearr_32819_32858[(1)] = (10));

} else {
var statearr_32820_32859 = state_32801__$1;
(statearr_32820_32859[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (12))){
var inst_32797 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32821_32860 = state_32801__$1;
(statearr_32821_32860[(2)] = inst_32797);

(statearr_32821_32860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (2))){
var inst_32727 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32801__$1 = state_32801;
if(cljs.core.truth_(inst_32727)){
var statearr_32822_32861 = state_32801__$1;
(statearr_32822_32861[(1)] = (5));

} else {
var statearr_32823_32862 = state_32801__$1;
(statearr_32823_32862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (23))){
var inst_32773 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32801__$1 = state_32801;
if(inst_32773){
var statearr_32824_32863 = state_32801__$1;
(statearr_32824_32863[(1)] = (27));

} else {
var statearr_32825_32864 = state_32801__$1;
(statearr_32825_32864[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (19))){
var inst_32760 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32761 = figwheel.client.heads_up.append_message.call(null,inst_32760);
var state_32801__$1 = state_32801;
var statearr_32826_32865 = state_32801__$1;
(statearr_32826_32865[(2)] = inst_32761);

(statearr_32826_32865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (11))){
var inst_32750 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32801__$1 = state_32801;
if(inst_32750){
var statearr_32827_32866 = state_32801__$1;
(statearr_32827_32866[(1)] = (15));

} else {
var statearr_32828_32867 = state_32801__$1;
(statearr_32828_32867[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (9))){
var inst_32735 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32829_32868 = state_32801__$1;
(statearr_32829_32868[(2)] = inst_32735);

(statearr_32829_32868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (5))){
var inst_32729 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(8),inst_32729);
} else {
if((state_val_32802 === (14))){
var inst_32748 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32830_32869 = state_32801__$1;
(statearr_32830_32869[(2)] = inst_32748);

(statearr_32830_32869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (26))){
var inst_32771 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32831_32870 = state_32801__$1;
(statearr_32831_32870[(2)] = inst_32771);

(statearr_32831_32870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (16))){
var inst_32758 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32801__$1 = state_32801;
if(inst_32758){
var statearr_32832_32871 = state_32801__$1;
(statearr_32832_32871[(1)] = (19));

} else {
var statearr_32833_32872 = state_32801__$1;
(statearr_32833_32872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (30))){
var inst_32778 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32834_32873 = state_32801__$1;
(statearr_32834_32873[(2)] = inst_32778);

(statearr_32834_32873[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (10))){
var inst_32741 = figwheel.client.heads_up.clear.call(null);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(13),inst_32741);
} else {
if((state_val_32802 === (18))){
var inst_32756 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32835_32874 = state_32801__$1;
(statearr_32835_32874[(2)] = inst_32756);

(statearr_32835_32874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (8))){
var inst_32731 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32836_32875 = state_32801__$1;
(statearr_32836_32875[(2)] = inst_32731);

(statearr_32836_32875[(1)] = (7));


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
var statearr_32840 = [null,null,null,null,null,null,null,null,null];
(statearr_32840[(0)] = state_machine__18563__auto__);

(statearr_32840[(1)] = (1));

return statearr_32840;
});
var state_machine__18563__auto____1 = (function (state_32801){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32841){if((e32841 instanceof Object)){
var ex__18566__auto__ = e32841;
var statearr_32842_32876 = state_32801;
(statearr_32842_32876[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32877 = state_32801;
state_32801 = G__32877;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32801){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,msg_hist,msg_names,msg))
})();
var state__18620__auto__ = (function (){var statearr_32843 = f__18619__auto__.call(null);
(statearr_32843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_32843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,msg_hist,msg_names,msg))
);

return c__18618__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18618__auto___32940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32940,ch){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32940,ch){
return (function (state_32923){
var state_val_32924 = (state_32923[(1)]);
if((state_val_32924 === (8))){
var inst_32915 = (state_32923[(2)]);
var state_32923__$1 = (function (){var statearr_32925 = state_32923;
(statearr_32925[(7)] = inst_32915);

return statearr_32925;
})();
var statearr_32926_32941 = state_32923__$1;
(statearr_32926_32941[(2)] = null);

(statearr_32926_32941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (7))){
var inst_32919 = (state_32923[(2)]);
var state_32923__$1 = state_32923;
var statearr_32927_32942 = state_32923__$1;
(statearr_32927_32942[(2)] = inst_32919);

(statearr_32927_32942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (6))){
var state_32923__$1 = state_32923;
var statearr_32928_32943 = state_32923__$1;
(statearr_32928_32943[(2)] = null);

(statearr_32928_32943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (5))){
var inst_32911 = (state_32923[(8)]);
var inst_32913 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32911);
var state_32923__$1 = state_32923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32923__$1,(8),inst_32913);
} else {
if((state_val_32924 === (4))){
var inst_32911 = (state_32923[(8)]);
var inst_32911__$1 = (state_32923[(2)]);
var state_32923__$1 = (function (){var statearr_32929 = state_32923;
(statearr_32929[(8)] = inst_32911__$1);

return statearr_32929;
})();
if(cljs.core.truth_(inst_32911__$1)){
var statearr_32930_32944 = state_32923__$1;
(statearr_32930_32944[(1)] = (5));

} else {
var statearr_32931_32945 = state_32923__$1;
(statearr_32931_32945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (3))){
var inst_32921 = (state_32923[(2)]);
var state_32923__$1 = state_32923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32923__$1,inst_32921);
} else {
if((state_val_32924 === (2))){
var state_32923__$1 = state_32923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32923__$1,(4),ch);
} else {
if((state_val_32924 === (1))){
var state_32923__$1 = state_32923;
var statearr_32932_32946 = state_32923__$1;
(statearr_32932_32946[(2)] = null);

(statearr_32932_32946[(1)] = (2));


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
});})(c__18618__auto___32940,ch))
;
return ((function (switch__18562__auto__,c__18618__auto___32940,ch){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32936 = [null,null,null,null,null,null,null,null,null];
(statearr_32936[(0)] = state_machine__18563__auto__);

(statearr_32936[(1)] = (1));

return statearr_32936;
});
var state_machine__18563__auto____1 = (function (state_32923){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32937){if((e32937 instanceof Object)){
var ex__18566__auto__ = e32937;
var statearr_32938_32947 = state_32923;
(statearr_32938_32947[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32948 = state_32923;
state_32923 = G__32948;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32923){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32940,ch))
})();
var state__18620__auto__ = (function (){var statearr_32939 = f__18619__auto__.call(null);
(statearr_32939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32940);

return statearr_32939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32940,ch))
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
return (function (state_32969){
var state_val_32970 = (state_32969[(1)]);
if((state_val_32970 === (2))){
var inst_32966 = (state_32969[(2)]);
var inst_32967 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32969__$1 = (function (){var statearr_32971 = state_32969;
(statearr_32971[(7)] = inst_32966);

return statearr_32971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32969__$1,inst_32967);
} else {
if((state_val_32970 === (1))){
var inst_32964 = cljs.core.async.timeout.call(null,(3000));
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32969__$1,(2),inst_32964);
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
var statearr_32975 = [null,null,null,null,null,null,null,null];
(statearr_32975[(0)] = state_machine__18563__auto__);

(statearr_32975[(1)] = (1));

return statearr_32975;
});
var state_machine__18563__auto____1 = (function (state_32969){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32976){if((e32976 instanceof Object)){
var ex__18566__auto__ = e32976;
var statearr_32977_32979 = state_32969;
(statearr_32977_32979[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32980 = state_32969;
state_32969 = G__32980;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32969){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_32978 = f__18619__auto__.call(null);
(statearr_32978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_32978;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj32984 = {"detail":url};
return obj32984;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__32985){
var map__32991 = p__32985;
var map__32991__$1 = ((cljs.core.seq_QMARK_.call(null,map__32991))?cljs.core.apply.call(null,cljs.core.hash_map,map__32991):map__32991);
var ed = map__32991__$1;
var exception_data = cljs.core.get.call(null,map__32991__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__32991__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32992_32996 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32993_32997 = null;
var count__32994_32998 = (0);
var i__32995_32999 = (0);
while(true){
if((i__32995_32999 < count__32994_32998)){
var msg_33000 = cljs.core._nth.call(null,chunk__32993_32997,i__32995_32999);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33000);

var G__33001 = seq__32992_32996;
var G__33002 = chunk__32993_32997;
var G__33003 = count__32994_32998;
var G__33004 = (i__32995_32999 + (1));
seq__32992_32996 = G__33001;
chunk__32993_32997 = G__33002;
count__32994_32998 = G__33003;
i__32995_32999 = G__33004;
continue;
} else {
var temp__4126__auto___33005 = cljs.core.seq.call(null,seq__32992_32996);
if(temp__4126__auto___33005){
var seq__32992_33006__$1 = temp__4126__auto___33005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32992_33006__$1)){
var c__16932__auto___33007 = cljs.core.chunk_first.call(null,seq__32992_33006__$1);
var G__33008 = cljs.core.chunk_rest.call(null,seq__32992_33006__$1);
var G__33009 = c__16932__auto___33007;
var G__33010 = cljs.core.count.call(null,c__16932__auto___33007);
var G__33011 = (0);
seq__32992_32996 = G__33008;
chunk__32993_32997 = G__33009;
count__32994_32998 = G__33010;
i__32995_32999 = G__33011;
continue;
} else {
var msg_33012 = cljs.core.first.call(null,seq__32992_33006__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33012);

var G__33013 = cljs.core.next.call(null,seq__32992_33006__$1);
var G__33014 = null;
var G__33015 = (0);
var G__33016 = (0);
seq__32992_32996 = G__33013;
chunk__32993_32997 = G__33014;
count__32994_32998 = G__33015;
i__32995_32999 = G__33016;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__33017){
var map__33019 = p__33017;
var map__33019__$1 = ((cljs.core.seq_QMARK_.call(null,map__33019))?cljs.core.apply.call(null,cljs.core.hash_map,map__33019):map__33019);
var w = map__33019__$1;
var message = cljs.core.get.call(null,map__33019__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__33026 = cljs.core.seq.call(null,plugins);
var chunk__33027 = null;
var count__33028 = (0);
var i__33029 = (0);
while(true){
if((i__33029 < count__33028)){
var vec__33030 = cljs.core._nth.call(null,chunk__33027,i__33029);
var k = cljs.core.nth.call(null,vec__33030,(0),null);
var plugin = cljs.core.nth.call(null,vec__33030,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33032 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33026,chunk__33027,count__33028,i__33029,pl_33032,vec__33030,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33032.call(null,msg_hist);
});})(seq__33026,chunk__33027,count__33028,i__33029,pl_33032,vec__33030,k,plugin))
);
} else {
}

var G__33033 = seq__33026;
var G__33034 = chunk__33027;
var G__33035 = count__33028;
var G__33036 = (i__33029 + (1));
seq__33026 = G__33033;
chunk__33027 = G__33034;
count__33028 = G__33035;
i__33029 = G__33036;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33026);
if(temp__4126__auto__){
var seq__33026__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33026__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__33026__$1);
var G__33037 = cljs.core.chunk_rest.call(null,seq__33026__$1);
var G__33038 = c__16932__auto__;
var G__33039 = cljs.core.count.call(null,c__16932__auto__);
var G__33040 = (0);
seq__33026 = G__33037;
chunk__33027 = G__33038;
count__33028 = G__33039;
i__33029 = G__33040;
continue;
} else {
var vec__33031 = cljs.core.first.call(null,seq__33026__$1);
var k = cljs.core.nth.call(null,vec__33031,(0),null);
var plugin = cljs.core.nth.call(null,vec__33031,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33041 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33026,chunk__33027,count__33028,i__33029,pl_33041,vec__33031,k,plugin,seq__33026__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33041.call(null,msg_hist);
});})(seq__33026,chunk__33027,count__33028,i__33029,pl_33041,vec__33031,k,plugin,seq__33026__$1,temp__4126__auto__))
);
} else {
}

var G__33042 = cljs.core.next.call(null,seq__33026__$1);
var G__33043 = null;
var G__33044 = (0);
var G__33045 = (0);
seq__33026 = G__33042;
chunk__33027 = G__33043;
count__33028 = G__33044;
i__33029 = G__33045;
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
var watch_and_reload__delegate = function (p__33046){
var map__33048 = p__33046;
var map__33048__$1 = ((cljs.core.seq_QMARK_.call(null,map__33048))?cljs.core.apply.call(null,cljs.core.hash_map,map__33048):map__33048);
var opts = map__33048__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__33046 = null;
if (arguments.length > 0) {
var G__33049__i = 0, G__33049__a = new Array(arguments.length -  0);
while (G__33049__i < G__33049__a.length) {G__33049__a[G__33049__i] = arguments[G__33049__i + 0]; ++G__33049__i;}
  p__33046 = new cljs.core.IndexedSeq(G__33049__a,0);
} 
return watch_and_reload__delegate.call(this,p__33046);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__33050){
var p__33046 = cljs.core.seq(arglist__33050);
return watch_and_reload__delegate(p__33046);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1435015913384