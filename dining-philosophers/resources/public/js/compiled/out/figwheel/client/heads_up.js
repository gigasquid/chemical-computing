// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__33202_33210 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__33203_33211 = null;
var count__33204_33212 = (0);
var i__33205_33213 = (0);
while(true){
if((i__33205_33213 < count__33204_33212)){
var k_33214 = cljs.core._nth.call(null,chunk__33203_33211,i__33205_33213);
e.setAttribute(cljs.core.name.call(null,k_33214),cljs.core.get.call(null,attrs,k_33214));

var G__33215 = seq__33202_33210;
var G__33216 = chunk__33203_33211;
var G__33217 = count__33204_33212;
var G__33218 = (i__33205_33213 + (1));
seq__33202_33210 = G__33215;
chunk__33203_33211 = G__33216;
count__33204_33212 = G__33217;
i__33205_33213 = G__33218;
continue;
} else {
var temp__4126__auto___33219 = cljs.core.seq.call(null,seq__33202_33210);
if(temp__4126__auto___33219){
var seq__33202_33220__$1 = temp__4126__auto___33219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33202_33220__$1)){
var c__16932__auto___33221 = cljs.core.chunk_first.call(null,seq__33202_33220__$1);
var G__33222 = cljs.core.chunk_rest.call(null,seq__33202_33220__$1);
var G__33223 = c__16932__auto___33221;
var G__33224 = cljs.core.count.call(null,c__16932__auto___33221);
var G__33225 = (0);
seq__33202_33210 = G__33222;
chunk__33203_33211 = G__33223;
count__33204_33212 = G__33224;
i__33205_33213 = G__33225;
continue;
} else {
var k_33226 = cljs.core.first.call(null,seq__33202_33220__$1);
e.setAttribute(cljs.core.name.call(null,k_33226),cljs.core.get.call(null,attrs,k_33226));

var G__33227 = cljs.core.next.call(null,seq__33202_33220__$1);
var G__33228 = null;
var G__33229 = (0);
var G__33230 = (0);
seq__33202_33210 = G__33227;
chunk__33203_33211 = G__33228;
count__33204_33212 = G__33229;
i__33205_33213 = G__33230;
continue;
}
} else {
}
}
break;
}

var seq__33206_33231 = cljs.core.seq.call(null,children);
var chunk__33207_33232 = null;
var count__33208_33233 = (0);
var i__33209_33234 = (0);
while(true){
if((i__33209_33234 < count__33208_33233)){
var ch_33235 = cljs.core._nth.call(null,chunk__33207_33232,i__33209_33234);
e.appendChild(ch_33235);

var G__33236 = seq__33206_33231;
var G__33237 = chunk__33207_33232;
var G__33238 = count__33208_33233;
var G__33239 = (i__33209_33234 + (1));
seq__33206_33231 = G__33236;
chunk__33207_33232 = G__33237;
count__33208_33233 = G__33238;
i__33209_33234 = G__33239;
continue;
} else {
var temp__4126__auto___33240 = cljs.core.seq.call(null,seq__33206_33231);
if(temp__4126__auto___33240){
var seq__33206_33241__$1 = temp__4126__auto___33240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33206_33241__$1)){
var c__16932__auto___33242 = cljs.core.chunk_first.call(null,seq__33206_33241__$1);
var G__33243 = cljs.core.chunk_rest.call(null,seq__33206_33241__$1);
var G__33244 = c__16932__auto___33242;
var G__33245 = cljs.core.count.call(null,c__16932__auto___33242);
var G__33246 = (0);
seq__33206_33231 = G__33243;
chunk__33207_33232 = G__33244;
count__33208_33233 = G__33245;
i__33209_33234 = G__33246;
continue;
} else {
var ch_33247 = cljs.core.first.call(null,seq__33206_33241__$1);
e.appendChild(ch_33247);

var G__33248 = cljs.core.next.call(null,seq__33206_33241__$1);
var G__33249 = null;
var G__33250 = (0);
var G__33251 = (0);
seq__33206_33231 = G__33248;
chunk__33207_33232 = G__33249;
count__33208_33233 = G__33250;
i__33209_33234 = G__33251;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__33252__i = 0, G__33252__a = new Array(arguments.length -  2);
while (G__33252__i < G__33252__a.length) {G__33252__a[G__33252__i] = arguments[G__33252__i + 2]; ++G__33252__i;}
  children = new cljs.core.IndexedSeq(G__33252__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__33253){
var t = cljs.core.first(arglist__33253);
arglist__33253 = cljs.core.next(arglist__33253);
var attrs = cljs.core.first(arglist__33253);
var children = cljs.core.rest(arglist__33253);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17042__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17043__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17046__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__,hierarchy__17046__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__,hierarchy__17046__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17046__auto__,method_table__17042__auto__,prefer_table__17043__auto__,method_cache__17044__auto__,cached_hierarchy__17045__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_33254 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_33254.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_33254.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_33254.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_33254);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__33255,st_map){
var map__33259 = p__33255;
var map__33259__$1 = ((cljs.core.seq_QMARK_.call(null,map__33259))?cljs.core.apply.call(null,cljs.core.hash_map,map__33259):map__33259);
var container_el = cljs.core.get.call(null,map__33259__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__33259,map__33259__$1,container_el){
return (function (p__33260){
var vec__33261 = p__33260;
var k = cljs.core.nth.call(null,vec__33261,(0),null);
var v = cljs.core.nth.call(null,vec__33261,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__33259,map__33259__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__33262,dom_str){
var map__33264 = p__33262;
var map__33264__$1 = ((cljs.core.seq_QMARK_.call(null,map__33264))?cljs.core.apply.call(null,cljs.core.hash_map,map__33264):map__33264);
var c = map__33264__$1;
var content_area_el = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__33265){
var map__33267 = p__33265;
var map__33267__$1 = ((cljs.core.seq_QMARK_.call(null,map__33267))?cljs.core.apply.call(null,cljs.core.hash_map,map__33267):map__33267);
var content_area_el = cljs.core.get.call(null,map__33267__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_33309){
var state_val_33310 = (state_33309[(1)]);
if((state_val_33310 === (2))){
var inst_33294 = (state_33309[(7)]);
var inst_33303 = (state_33309[(2)]);
var inst_33304 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33305 = ["auto"];
var inst_33306 = cljs.core.PersistentHashMap.fromArrays(inst_33304,inst_33305);
var inst_33307 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33294,inst_33306);
var state_33309__$1 = (function (){var statearr_33311 = state_33309;
(statearr_33311[(8)] = inst_33303);

return statearr_33311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33309__$1,inst_33307);
} else {
if((state_val_33310 === (1))){
var inst_33294 = (state_33309[(7)]);
var inst_33294__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33295 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33296 = ["10px","10px","100%","68px","1.0"];
var inst_33297 = cljs.core.PersistentHashMap.fromArrays(inst_33295,inst_33296);
var inst_33298 = cljs.core.merge.call(null,inst_33297,style);
var inst_33299 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33294__$1,inst_33298);
var inst_33300 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33294__$1,msg);
var inst_33301 = cljs.core.async.timeout.call(null,(300));
var state_33309__$1 = (function (){var statearr_33312 = state_33309;
(statearr_33312[(9)] = inst_33299);

(statearr_33312[(10)] = inst_33300);

(statearr_33312[(7)] = inst_33294__$1);

return statearr_33312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33309__$1,(2),inst_33301);
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
var statearr_33316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33316[(0)] = state_machine__18563__auto__);

(statearr_33316[(1)] = (1));

return statearr_33316;
});
var state_machine__18563__auto____1 = (function (state_33309){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_33309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e33317){if((e33317 instanceof Object)){
var ex__18566__auto__ = e33317;
var statearr_33318_33320 = state_33309;
(statearr_33318_33320[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33321 = state_33309;
state_33309 = G__33321;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_33309){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_33309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_33319 = f__18619__auto__.call(null);
(statearr_33319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_33319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__33323 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__33323,(0),null);
var ln = cljs.core.nth.call(null,vec__33323,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__33326 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__33326,(0),null);
var file_line = cljs.core.nth.call(null,vec__33326,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33326,file_name,file_line){
return (function (p1__33324_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__33324_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__33326,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__33328 = figwheel.client.heads_up.ensure_container.call(null);
var map__33328__$1 = ((cljs.core.seq_QMARK_.call(null,map__33328))?cljs.core.apply.call(null,cljs.core.hash_map,map__33328):map__33328);
var content_area_el = cljs.core.get.call(null,map__33328__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_33375){
var state_val_33376 = (state_33375[(1)]);
if((state_val_33376 === (3))){
var inst_33358 = (state_33375[(7)]);
var inst_33372 = (state_33375[(2)]);
var inst_33373 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33358,"");
var state_33375__$1 = (function (){var statearr_33377 = state_33375;
(statearr_33377[(8)] = inst_33372);

return statearr_33377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33375__$1,inst_33373);
} else {
if((state_val_33376 === (2))){
var inst_33358 = (state_33375[(7)]);
var inst_33365 = (state_33375[(2)]);
var inst_33366 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_33367 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_33368 = cljs.core.PersistentHashMap.fromArrays(inst_33366,inst_33367);
var inst_33369 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33358,inst_33368);
var inst_33370 = cljs.core.async.timeout.call(null,(200));
var state_33375__$1 = (function (){var statearr_33378 = state_33375;
(statearr_33378[(9)] = inst_33365);

(statearr_33378[(10)] = inst_33369);

return statearr_33378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33375__$1,(3),inst_33370);
} else {
if((state_val_33376 === (1))){
var inst_33358 = (state_33375[(7)]);
var inst_33358__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33359 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33360 = ["0.0"];
var inst_33361 = cljs.core.PersistentHashMap.fromArrays(inst_33359,inst_33360);
var inst_33362 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33358__$1,inst_33361);
var inst_33363 = cljs.core.async.timeout.call(null,(300));
var state_33375__$1 = (function (){var statearr_33379 = state_33375;
(statearr_33379[(11)] = inst_33362);

(statearr_33379[(7)] = inst_33358__$1);

return statearr_33379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33375__$1,(2),inst_33363);
} else {
return null;
}
}
}
});})(c__18618__auto__))
;
return ((function (switch__18562__auto__,c__18618__auto__){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_33383 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33383[(0)] = state_machine__18563__auto__);

(statearr_33383[(1)] = (1));

return statearr_33383;
});
var state_machine__18563__auto____1 = (function (state_33375){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_33375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e33384){if((e33384 instanceof Object)){
var ex__18566__auto__ = e33384;
var statearr_33385_33387 = state_33375;
(statearr_33385_33387[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33388 = state_33375;
state_33375 = G__33388;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_33375){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_33375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_33386 = f__18619__auto__.call(null);
(statearr_33386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_33386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_33420){
var state_val_33421 = (state_33420[(1)]);
if((state_val_33421 === (4))){
var inst_33418 = (state_33420[(2)]);
var state_33420__$1 = state_33420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33420__$1,inst_33418);
} else {
if((state_val_33421 === (3))){
var inst_33415 = (state_33420[(2)]);
var inst_33416 = figwheel.client.heads_up.clear.call(null);
var state_33420__$1 = (function (){var statearr_33422 = state_33420;
(statearr_33422[(7)] = inst_33415);

return statearr_33422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33420__$1,(4),inst_33416);
} else {
if((state_val_33421 === (2))){
var inst_33412 = (state_33420[(2)]);
var inst_33413 = cljs.core.async.timeout.call(null,(400));
var state_33420__$1 = (function (){var statearr_33423 = state_33420;
(statearr_33423[(8)] = inst_33412);

return statearr_33423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33420__$1,(3),inst_33413);
} else {
if((state_val_33421 === (1))){
var inst_33410 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33420__$1 = state_33420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33420__$1,(2),inst_33410);
} else {
return null;
}
}
}
}
});})(c__18618__auto__))
;
return ((function (switch__18562__auto__,c__18618__auto__){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_33427 = [null,null,null,null,null,null,null,null,null];
(statearr_33427[(0)] = state_machine__18563__auto__);

(statearr_33427[(1)] = (1));

return statearr_33427;
});
var state_machine__18563__auto____1 = (function (state_33420){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_33420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e33428){if((e33428 instanceof Object)){
var ex__18566__auto__ = e33428;
var statearr_33429_33431 = state_33420;
(statearr_33429_33431[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33432 = state_33420;
state_33420 = G__33432;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_33420){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_33420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_33430 = f__18619__auto__.call(null);
(statearr_33430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_33430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1435015913746