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
var G__22663__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22664__i = 0, G__22664__a = new Array(arguments.length -  0);
while (G__22664__i < G__22664__a.length) {G__22664__a[G__22664__i] = arguments[G__22664__i + 0]; ++G__22664__i;}
  args = new cljs.core.IndexedSeq(G__22664__a,0);
} 
return G__22663__delegate.call(this,args);};
G__22663.cljs$lang$maxFixedArity = 0;
G__22663.cljs$lang$applyTo = (function (arglist__22665){
var args = cljs.core.seq(arglist__22665);
return G__22663__delegate(args);
});
G__22663.cljs$core$IFn$_invoke$arity$variadic = G__22663__delegate;
return G__22663;
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
figwheel.client.error_msg_format = (function error_msg_format(p__22666){
var map__22668 = p__22666;
var map__22668__$1 = ((cljs.core.seq_QMARK_.call(null,map__22668))?cljs.core.apply.call(null,cljs.core.hash_map,map__22668):map__22668);
var class$ = cljs.core.get.call(null,map__22668__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__22668__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__3864__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__3852__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3852__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3852__auto__;
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
var c__6642__auto___22797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___22797,ch){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___22797,ch){
return (function (state_22771){
var state_val_22772 = (state_22771[(1)]);
if((state_val_22772 === (7))){
var inst_22767 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
var statearr_22773_22798 = state_22771__$1;
(statearr_22773_22798[(2)] = inst_22767);

(statearr_22773_22798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (1))){
var state_22771__$1 = state_22771;
var statearr_22774_22799 = state_22771__$1;
(statearr_22774_22799[(2)] = null);

(statearr_22774_22799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (4))){
var inst_22735 = (state_22771[(7)]);
var inst_22735__$1 = (state_22771[(2)]);
var state_22771__$1 = (function (){var statearr_22775 = state_22771;
(statearr_22775[(7)] = inst_22735__$1);

return statearr_22775;
})();
if(cljs.core.truth_(inst_22735__$1)){
var statearr_22776_22800 = state_22771__$1;
(statearr_22776_22800[(1)] = (5));

} else {
var statearr_22777_22801 = state_22771__$1;
(statearr_22777_22801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (13))){
var state_22771__$1 = state_22771;
var statearr_22778_22802 = state_22771__$1;
(statearr_22778_22802[(2)] = null);

(statearr_22778_22802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (6))){
var state_22771__$1 = state_22771;
var statearr_22779_22803 = state_22771__$1;
(statearr_22779_22803[(2)] = null);

(statearr_22779_22803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (3))){
var inst_22769 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22771__$1,inst_22769);
} else {
if((state_val_22772 === (12))){
var inst_22742 = (state_22771[(8)]);
var inst_22755 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22742);
var inst_22756 = cljs.core.first.call(null,inst_22755);
var inst_22757 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22756);
var inst_22758 = console.warn("Figwheel: Not loading code with warnings - ",inst_22757);
var state_22771__$1 = state_22771;
var statearr_22780_22804 = state_22771__$1;
(statearr_22780_22804[(2)] = inst_22758);

(statearr_22780_22804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (2))){
var state_22771__$1 = state_22771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22771__$1,(4),ch);
} else {
if((state_val_22772 === (11))){
var inst_22751 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
var statearr_22781_22805 = state_22771__$1;
(statearr_22781_22805[(2)] = inst_22751);

(statearr_22781_22805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (9))){
var inst_22741 = (state_22771[(9)]);
var inst_22753 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22741,opts);
var state_22771__$1 = state_22771;
if(inst_22753){
var statearr_22782_22806 = state_22771__$1;
(statearr_22782_22806[(1)] = (12));

} else {
var statearr_22783_22807 = state_22771__$1;
(statearr_22783_22807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (5))){
var inst_22741 = (state_22771[(9)]);
var inst_22735 = (state_22771[(7)]);
var inst_22737 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22738 = (new cljs.core.PersistentArrayMap(null,2,inst_22737,null));
var inst_22739 = (new cljs.core.PersistentHashSet(null,inst_22738,null));
var inst_22740 = figwheel.client.focus_msgs.call(null,inst_22739,inst_22735);
var inst_22741__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22740);
var inst_22742 = cljs.core.first.call(null,inst_22740);
var inst_22743 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22741__$1,opts);
var state_22771__$1 = (function (){var statearr_22784 = state_22771;
(statearr_22784[(9)] = inst_22741__$1);

(statearr_22784[(8)] = inst_22742);

return statearr_22784;
})();
if(cljs.core.truth_(inst_22743)){
var statearr_22785_22808 = state_22771__$1;
(statearr_22785_22808[(1)] = (8));

} else {
var statearr_22786_22809 = state_22771__$1;
(statearr_22786_22809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (14))){
var inst_22761 = (state_22771[(2)]);
var state_22771__$1 = state_22771;
var statearr_22787_22810 = state_22771__$1;
(statearr_22787_22810[(2)] = inst_22761);

(statearr_22787_22810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (10))){
var inst_22763 = (state_22771[(2)]);
var state_22771__$1 = (function (){var statearr_22788 = state_22771;
(statearr_22788[(10)] = inst_22763);

return statearr_22788;
})();
var statearr_22789_22811 = state_22771__$1;
(statearr_22789_22811[(2)] = null);

(statearr_22789_22811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22772 === (8))){
var inst_22742 = (state_22771[(8)]);
var inst_22745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22746 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22742);
var inst_22747 = cljs.core.async.timeout.call(null,(1000));
var inst_22748 = [inst_22746,inst_22747];
var inst_22749 = (new cljs.core.PersistentVector(null,2,(5),inst_22745,inst_22748,null));
var state_22771__$1 = state_22771;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22771__$1,(11),inst_22749);
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
});})(c__6642__auto___22797,ch))
;
return ((function (switch__6586__auto__,c__6642__auto___22797,ch){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_22793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22793[(0)] = state_machine__6587__auto__);

(statearr_22793[(1)] = (1));

return statearr_22793;
});
var state_machine__6587__auto____1 = (function (state_22771){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_22771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e22794){if((e22794 instanceof Object)){
var ex__6590__auto__ = e22794;
var statearr_22795_22812 = state_22771;
(statearr_22795_22812[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22813 = state_22771;
state_22771 = G__22813;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_22771){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_22771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___22797,ch))
})();
var state__6644__auto__ = (function (){var statearr_22796 = f__6643__auto__.call(null);
(statearr_22796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___22797);

return statearr_22796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___22797,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22814_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22814_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_22823 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__22816_SHARP_,p2__22815_SHARP_){
return [cljs.core.str(p2__22815_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22823){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_22821 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22822 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22821,_STAR_print_newline_STAR_22822,base_path_22823){
return (function() { 
var G__22824__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22825__i = 0, G__22825__a = new Array(arguments.length -  0);
while (G__22825__i < G__22825__a.length) {G__22825__a[G__22825__i] = arguments[G__22825__i + 0]; ++G__22825__i;}
  args = new cljs.core.IndexedSeq(G__22825__a,0);
} 
return G__22824__delegate.call(this,args);};
G__22824.cljs$lang$maxFixedArity = 0;
G__22824.cljs$lang$applyTo = (function (arglist__22826){
var args = cljs.core.seq(arglist__22826);
return G__22824__delegate(args);
});
G__22824.cljs$core$IFn$_invoke$arity$variadic = G__22824__delegate;
return G__22824;
})()
;})(_STAR_print_fn_STAR_22821,_STAR_print_newline_STAR_22822,base_path_22823))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22822;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22821;
}}catch (e22820){if((e22820 instanceof Error)){
var e = e22820;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22823], null));
} else {
var e = e22820;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22823))
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
figwheel.client.repl_plugin = (function repl_plugin(p__22827){
var map__22832 = p__22827;
var map__22832__$1 = ((cljs.core.seq_QMARK_.call(null,map__22832))?cljs.core.apply.call(null,cljs.core.hash_map,map__22832):map__22832);
var opts = map__22832__$1;
var build_id = cljs.core.get.call(null,map__22832__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22832,map__22832__$1,opts,build_id){
return (function (p__22833){
var vec__22834 = p__22833;
var map__22835 = cljs.core.nth.call(null,vec__22834,(0),null);
var map__22835__$1 = ((cljs.core.seq_QMARK_.call(null,map__22835))?cljs.core.apply.call(null,cljs.core.hash_map,map__22835):map__22835);
var msg = map__22835__$1;
var msg_name = cljs.core.get.call(null,map__22835__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22834,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__22834,map__22835,map__22835__$1,msg,msg_name,_,map__22832,map__22832__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22834,map__22835,map__22835__$1,msg,msg_name,_,map__22832,map__22832__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22832,map__22832__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__22839){
var vec__22840 = p__22839;
var map__22841 = cljs.core.nth.call(null,vec__22840,(0),null);
var map__22841__$1 = ((cljs.core.seq_QMARK_.call(null,map__22841))?cljs.core.apply.call(null,cljs.core.hash_map,map__22841):map__22841);
var msg = map__22841__$1;
var msg_name = cljs.core.get.call(null,map__22841__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22840,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__22842){
var map__22850 = p__22842;
var map__22850__$1 = ((cljs.core.seq_QMARK_.call(null,map__22850))?cljs.core.apply.call(null,cljs.core.hash_map,map__22850):map__22850);
var on_compile_fail = cljs.core.get.call(null,map__22850__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__22850__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__22850,map__22850__$1,on_compile_fail,on_compile_warning){
return (function (p__22851){
var vec__22852 = p__22851;
var map__22853 = cljs.core.nth.call(null,vec__22852,(0),null);
var map__22853__$1 = ((cljs.core.seq_QMARK_.call(null,map__22853))?cljs.core.apply.call(null,cljs.core.hash_map,map__22853):map__22853);
var msg = map__22853__$1;
var msg_name = cljs.core.get.call(null,map__22853__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22852,(1));
var pred__22854 = cljs.core._EQ_;
var expr__22855 = msg_name;
if(cljs.core.truth_(pred__22854.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22855))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22854.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22855))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22850,map__22850__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__,msg_hist,msg_names,msg){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__,msg_hist,msg_names,msg){
return (function (state_23052){
var state_val_23053 = (state_23052[(1)]);
if((state_val_23053 === (7))){
var inst_22988 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23054_23095 = state_23052__$1;
(statearr_23054_23095[(2)] = inst_22988);

(statearr_23054_23095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (20))){
var inst_23014 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23052__$1 = state_23052;
if(inst_23014){
var statearr_23055_23096 = state_23052__$1;
(statearr_23055_23096[(1)] = (22));

} else {
var statearr_23056_23097 = state_23052__$1;
(statearr_23056_23097[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (27))){
var inst_23026 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23027 = figwheel.client.heads_up.display_warning.call(null,inst_23026);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(30),inst_23027);
} else {
if((state_val_23053 === (1))){
var inst_22976 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23052__$1 = state_23052;
if(cljs.core.truth_(inst_22976)){
var statearr_23057_23098 = state_23052__$1;
(statearr_23057_23098[(1)] = (2));

} else {
var statearr_23058_23099 = state_23052__$1;
(statearr_23058_23099[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (24))){
var inst_23042 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23059_23100 = state_23052__$1;
(statearr_23059_23100[(2)] = inst_23042);

(statearr_23059_23100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (4))){
var inst_23050 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23052__$1,inst_23050);
} else {
if((state_val_23053 === (15))){
var inst_23003 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23004 = figwheel.client.format_messages.call(null,inst_23003);
var inst_23005 = figwheel.client.heads_up.display_error.call(null,inst_23004);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(18),inst_23005);
} else {
if((state_val_23053 === (21))){
var inst_23044 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23060_23101 = state_23052__$1;
(statearr_23060_23101[(2)] = inst_23044);

(statearr_23060_23101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (31))){
var inst_23033 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(34),inst_23033);
} else {
if((state_val_23053 === (32))){
var state_23052__$1 = state_23052;
var statearr_23061_23102 = state_23052__$1;
(statearr_23061_23102[(2)] = null);

(statearr_23061_23102[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (33))){
var inst_23038 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23062_23103 = state_23052__$1;
(statearr_23062_23103[(2)] = inst_23038);

(statearr_23062_23103[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (13))){
var inst_22994 = (state_23052[(2)]);
var inst_22995 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22996 = figwheel.client.format_messages.call(null,inst_22995);
var inst_22997 = figwheel.client.heads_up.display_error.call(null,inst_22996);
var state_23052__$1 = (function (){var statearr_23063 = state_23052;
(statearr_23063[(7)] = inst_22994);

return statearr_23063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(14),inst_22997);
} else {
if((state_val_23053 === (22))){
var inst_23016 = figwheel.client.heads_up.clear.call(null);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(25),inst_23016);
} else {
if((state_val_23053 === (29))){
var inst_23040 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23064_23104 = state_23052__$1;
(statearr_23064_23104[(2)] = inst_23040);

(statearr_23064_23104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (6))){
var inst_22984 = figwheel.client.heads_up.clear.call(null);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(9),inst_22984);
} else {
if((state_val_23053 === (28))){
var inst_23031 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23052__$1 = state_23052;
if(inst_23031){
var statearr_23065_23105 = state_23052__$1;
(statearr_23065_23105[(1)] = (31));

} else {
var statearr_23066_23106 = state_23052__$1;
(statearr_23066_23106[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (25))){
var inst_23018 = (state_23052[(2)]);
var inst_23019 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23020 = figwheel.client.heads_up.display_warning.call(null,inst_23019);
var state_23052__$1 = (function (){var statearr_23067 = state_23052;
(statearr_23067[(8)] = inst_23018);

return statearr_23067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(26),inst_23020);
} else {
if((state_val_23053 === (34))){
var inst_23035 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23068_23107 = state_23052__$1;
(statearr_23068_23107[(2)] = inst_23035);

(statearr_23068_23107[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (17))){
var inst_23046 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23069_23108 = state_23052__$1;
(statearr_23069_23108[(2)] = inst_23046);

(statearr_23069_23108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (3))){
var inst_22990 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23052__$1 = state_23052;
if(inst_22990){
var statearr_23070_23109 = state_23052__$1;
(statearr_23070_23109[(1)] = (10));

} else {
var statearr_23071_23110 = state_23052__$1;
(statearr_23071_23110[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (12))){
var inst_23048 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23072_23111 = state_23052__$1;
(statearr_23072_23111[(2)] = inst_23048);

(statearr_23072_23111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (2))){
var inst_22978 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23052__$1 = state_23052;
if(cljs.core.truth_(inst_22978)){
var statearr_23073_23112 = state_23052__$1;
(statearr_23073_23112[(1)] = (5));

} else {
var statearr_23074_23113 = state_23052__$1;
(statearr_23074_23113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (23))){
var inst_23024 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23052__$1 = state_23052;
if(inst_23024){
var statearr_23075_23114 = state_23052__$1;
(statearr_23075_23114[(1)] = (27));

} else {
var statearr_23076_23115 = state_23052__$1;
(statearr_23076_23115[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (19))){
var inst_23011 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23012 = figwheel.client.heads_up.append_message.call(null,inst_23011);
var state_23052__$1 = state_23052;
var statearr_23077_23116 = state_23052__$1;
(statearr_23077_23116[(2)] = inst_23012);

(statearr_23077_23116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (11))){
var inst_23001 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23052__$1 = state_23052;
if(inst_23001){
var statearr_23078_23117 = state_23052__$1;
(statearr_23078_23117[(1)] = (15));

} else {
var statearr_23079_23118 = state_23052__$1;
(statearr_23079_23118[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (9))){
var inst_22986 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23080_23119 = state_23052__$1;
(statearr_23080_23119[(2)] = inst_22986);

(statearr_23080_23119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (5))){
var inst_22980 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(8),inst_22980);
} else {
if((state_val_23053 === (14))){
var inst_22999 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23081_23120 = state_23052__$1;
(statearr_23081_23120[(2)] = inst_22999);

(statearr_23081_23120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (26))){
var inst_23022 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23082_23121 = state_23052__$1;
(statearr_23082_23121[(2)] = inst_23022);

(statearr_23082_23121[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (16))){
var inst_23009 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23052__$1 = state_23052;
if(inst_23009){
var statearr_23083_23122 = state_23052__$1;
(statearr_23083_23122[(1)] = (19));

} else {
var statearr_23084_23123 = state_23052__$1;
(statearr_23084_23123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (30))){
var inst_23029 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23085_23124 = state_23052__$1;
(statearr_23085_23124[(2)] = inst_23029);

(statearr_23085_23124[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (10))){
var inst_22992 = figwheel.client.heads_up.clear.call(null);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(13),inst_22992);
} else {
if((state_val_23053 === (18))){
var inst_23007 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23086_23125 = state_23052__$1;
(statearr_23086_23125[(2)] = inst_23007);

(statearr_23086_23125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (8))){
var inst_22982 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23087_23126 = state_23052__$1;
(statearr_23087_23126[(2)] = inst_22982);

(statearr_23087_23126[(1)] = (7));


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
});})(c__6642__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6586__auto__,c__6642__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_23091 = [null,null,null,null,null,null,null,null,null];
(statearr_23091[(0)] = state_machine__6587__auto__);

(statearr_23091[(1)] = (1));

return statearr_23091;
});
var state_machine__6587__auto____1 = (function (state_23052){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_23052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e23092){if((e23092 instanceof Object)){
var ex__6590__auto__ = e23092;
var statearr_23093_23127 = state_23052;
(statearr_23093_23127[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23128 = state_23052;
state_23052 = G__23128;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_23052){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_23052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__,msg_hist,msg_names,msg))
})();
var state__6644__auto__ = (function (){var statearr_23094 = f__6643__auto__.call(null);
(statearr_23094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_23094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__,msg_hist,msg_names,msg))
);

return c__6642__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6642__auto___23191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___23191,ch){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___23191,ch){
return (function (state_23174){
var state_val_23175 = (state_23174[(1)]);
if((state_val_23175 === (8))){
var inst_23166 = (state_23174[(2)]);
var state_23174__$1 = (function (){var statearr_23176 = state_23174;
(statearr_23176[(7)] = inst_23166);

return statearr_23176;
})();
var statearr_23177_23192 = state_23174__$1;
(statearr_23177_23192[(2)] = null);

(statearr_23177_23192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23175 === (7))){
var inst_23170 = (state_23174[(2)]);
var state_23174__$1 = state_23174;
var statearr_23178_23193 = state_23174__$1;
(statearr_23178_23193[(2)] = inst_23170);

(statearr_23178_23193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23175 === (6))){
var state_23174__$1 = state_23174;
var statearr_23179_23194 = state_23174__$1;
(statearr_23179_23194[(2)] = null);

(statearr_23179_23194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23175 === (5))){
var inst_23162 = (state_23174[(8)]);
var inst_23164 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23162);
var state_23174__$1 = state_23174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23174__$1,(8),inst_23164);
} else {
if((state_val_23175 === (4))){
var inst_23162 = (state_23174[(8)]);
var inst_23162__$1 = (state_23174[(2)]);
var state_23174__$1 = (function (){var statearr_23180 = state_23174;
(statearr_23180[(8)] = inst_23162__$1);

return statearr_23180;
})();
if(cljs.core.truth_(inst_23162__$1)){
var statearr_23181_23195 = state_23174__$1;
(statearr_23181_23195[(1)] = (5));

} else {
var statearr_23182_23196 = state_23174__$1;
(statearr_23182_23196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23175 === (3))){
var inst_23172 = (state_23174[(2)]);
var state_23174__$1 = state_23174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23174__$1,inst_23172);
} else {
if((state_val_23175 === (2))){
var state_23174__$1 = state_23174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23174__$1,(4),ch);
} else {
if((state_val_23175 === (1))){
var state_23174__$1 = state_23174;
var statearr_23183_23197 = state_23174__$1;
(statearr_23183_23197[(2)] = null);

(statearr_23183_23197[(1)] = (2));


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
});})(c__6642__auto___23191,ch))
;
return ((function (switch__6586__auto__,c__6642__auto___23191,ch){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_23187 = [null,null,null,null,null,null,null,null,null];
(statearr_23187[(0)] = state_machine__6587__auto__);

(statearr_23187[(1)] = (1));

return statearr_23187;
});
var state_machine__6587__auto____1 = (function (state_23174){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_23174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e23188){if((e23188 instanceof Object)){
var ex__6590__auto__ = e23188;
var statearr_23189_23198 = state_23174;
(statearr_23189_23198[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23199 = state_23174;
state_23174 = G__23199;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_23174){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_23174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___23191,ch))
})();
var state__6644__auto__ = (function (){var statearr_23190 = f__6643__auto__.call(null);
(statearr_23190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___23191);

return statearr_23190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___23191,ch))
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
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_23220){
var state_val_23221 = (state_23220[(1)]);
if((state_val_23221 === (2))){
var inst_23217 = (state_23220[(2)]);
var inst_23218 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23220__$1 = (function (){var statearr_23222 = state_23220;
(statearr_23222[(7)] = inst_23217);

return statearr_23222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23220__$1,inst_23218);
} else {
if((state_val_23221 === (1))){
var inst_23215 = cljs.core.async.timeout.call(null,(3000));
var state_23220__$1 = state_23220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23220__$1,(2),inst_23215);
} else {
return null;
}
}
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_23226 = [null,null,null,null,null,null,null,null];
(statearr_23226[(0)] = state_machine__6587__auto__);

(statearr_23226[(1)] = (1));

return statearr_23226;
});
var state_machine__6587__auto____1 = (function (state_23220){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_23220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e23227){if((e23227 instanceof Object)){
var ex__6590__auto__ = e23227;
var statearr_23228_23230 = state_23220;
(statearr_23228_23230[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23231 = state_23220;
state_23220 = G__23231;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_23220){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_23220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_23229 = f__6643__auto__.call(null);
(statearr_23229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_23229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__3852__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__3852__auto__)){
return ("CustomEvent" in window);
} else {
return and__3852__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj23235 = {"detail":url};
return obj23235;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__23236){
var map__23242 = p__23236;
var map__23242__$1 = ((cljs.core.seq_QMARK_.call(null,map__23242))?cljs.core.apply.call(null,cljs.core.hash_map,map__23242):map__23242);
var ed = map__23242__$1;
var exception_data = cljs.core.get.call(null,map__23242__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__23242__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23243_23247 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23244_23248 = null;
var count__23245_23249 = (0);
var i__23246_23250 = (0);
while(true){
if((i__23246_23250 < count__23245_23249)){
var msg_23251 = cljs.core._nth.call(null,chunk__23244_23248,i__23246_23250);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23251);

var G__23252 = seq__23243_23247;
var G__23253 = chunk__23244_23248;
var G__23254 = count__23245_23249;
var G__23255 = (i__23246_23250 + (1));
seq__23243_23247 = G__23252;
chunk__23244_23248 = G__23253;
count__23245_23249 = G__23254;
i__23246_23250 = G__23255;
continue;
} else {
var temp__4126__auto___23256 = cljs.core.seq.call(null,seq__23243_23247);
if(temp__4126__auto___23256){
var seq__23243_23257__$1 = temp__4126__auto___23256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23243_23257__$1)){
var c__4651__auto___23258 = cljs.core.chunk_first.call(null,seq__23243_23257__$1);
var G__23259 = cljs.core.chunk_rest.call(null,seq__23243_23257__$1);
var G__23260 = c__4651__auto___23258;
var G__23261 = cljs.core.count.call(null,c__4651__auto___23258);
var G__23262 = (0);
seq__23243_23247 = G__23259;
chunk__23244_23248 = G__23260;
count__23245_23249 = G__23261;
i__23246_23250 = G__23262;
continue;
} else {
var msg_23263 = cljs.core.first.call(null,seq__23243_23257__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23263);

var G__23264 = cljs.core.next.call(null,seq__23243_23257__$1);
var G__23265 = null;
var G__23266 = (0);
var G__23267 = (0);
seq__23243_23247 = G__23264;
chunk__23244_23248 = G__23265;
count__23245_23249 = G__23266;
i__23246_23250 = G__23267;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__23268){
var map__23270 = p__23268;
var map__23270__$1 = ((cljs.core.seq_QMARK_.call(null,map__23270))?cljs.core.apply.call(null,cljs.core.hash_map,map__23270):map__23270);
var w = map__23270__$1;
var message = cljs.core.get.call(null,map__23270__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__3852__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3852__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3852__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__23277 = cljs.core.seq.call(null,plugins);
var chunk__23278 = null;
var count__23279 = (0);
var i__23280 = (0);
while(true){
if((i__23280 < count__23279)){
var vec__23281 = cljs.core._nth.call(null,chunk__23278,i__23280);
var k = cljs.core.nth.call(null,vec__23281,(0),null);
var plugin = cljs.core.nth.call(null,vec__23281,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23283 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23277,chunk__23278,count__23279,i__23280,pl_23283,vec__23281,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23283.call(null,msg_hist);
});})(seq__23277,chunk__23278,count__23279,i__23280,pl_23283,vec__23281,k,plugin))
);
} else {
}

var G__23284 = seq__23277;
var G__23285 = chunk__23278;
var G__23286 = count__23279;
var G__23287 = (i__23280 + (1));
seq__23277 = G__23284;
chunk__23278 = G__23285;
count__23279 = G__23286;
i__23280 = G__23287;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__23277);
if(temp__4126__auto__){
var seq__23277__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23277__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__23277__$1);
var G__23288 = cljs.core.chunk_rest.call(null,seq__23277__$1);
var G__23289 = c__4651__auto__;
var G__23290 = cljs.core.count.call(null,c__4651__auto__);
var G__23291 = (0);
seq__23277 = G__23288;
chunk__23278 = G__23289;
count__23279 = G__23290;
i__23280 = G__23291;
continue;
} else {
var vec__23282 = cljs.core.first.call(null,seq__23277__$1);
var k = cljs.core.nth.call(null,vec__23282,(0),null);
var plugin = cljs.core.nth.call(null,vec__23282,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23292 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23277,chunk__23278,count__23279,i__23280,pl_23292,vec__23282,k,plugin,seq__23277__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23292.call(null,msg_hist);
});})(seq__23277,chunk__23278,count__23279,i__23280,pl_23292,vec__23282,k,plugin,seq__23277__$1,temp__4126__auto__))
);
} else {
}

var G__23293 = cljs.core.next.call(null,seq__23277__$1);
var G__23294 = null;
var G__23295 = (0);
var G__23296 = (0);
seq__23277 = G__23293;
chunk__23278 = G__23294;
count__23279 = G__23295;
i__23280 = G__23296;
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
var watch_and_reload__delegate = function (p__23297){
var map__23299 = p__23297;
var map__23299__$1 = ((cljs.core.seq_QMARK_.call(null,map__23299))?cljs.core.apply.call(null,cljs.core.hash_map,map__23299):map__23299);
var opts = map__23299__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__23297 = null;
if (arguments.length > 0) {
var G__23300__i = 0, G__23300__a = new Array(arguments.length -  0);
while (G__23300__i < G__23300__a.length) {G__23300__a[G__23300__i] = arguments[G__23300__i + 0]; ++G__23300__i;}
  p__23297 = new cljs.core.IndexedSeq(G__23300__a,0);
} 
return watch_and_reload__delegate.call(this,p__23297);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__23301){
var p__23297 = cljs.core.seq(arglist__23301);
return watch_and_reload__delegate(p__23297);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1435268445510