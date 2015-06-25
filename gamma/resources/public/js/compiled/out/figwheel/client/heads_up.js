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
var seq__23433_23441 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23434_23442 = null;
var count__23435_23443 = (0);
var i__23436_23444 = (0);
while(true){
if((i__23436_23444 < count__23435_23443)){
var k_23445 = cljs.core._nth.call(null,chunk__23434_23442,i__23436_23444);
e.setAttribute(cljs.core.name.call(null,k_23445),cljs.core.get.call(null,attrs,k_23445));

var G__23446 = seq__23433_23441;
var G__23447 = chunk__23434_23442;
var G__23448 = count__23435_23443;
var G__23449 = (i__23436_23444 + (1));
seq__23433_23441 = G__23446;
chunk__23434_23442 = G__23447;
count__23435_23443 = G__23448;
i__23436_23444 = G__23449;
continue;
} else {
var temp__4126__auto___23450 = cljs.core.seq.call(null,seq__23433_23441);
if(temp__4126__auto___23450){
var seq__23433_23451__$1 = temp__4126__auto___23450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23433_23451__$1)){
var c__4651__auto___23452 = cljs.core.chunk_first.call(null,seq__23433_23451__$1);
var G__23453 = cljs.core.chunk_rest.call(null,seq__23433_23451__$1);
var G__23454 = c__4651__auto___23452;
var G__23455 = cljs.core.count.call(null,c__4651__auto___23452);
var G__23456 = (0);
seq__23433_23441 = G__23453;
chunk__23434_23442 = G__23454;
count__23435_23443 = G__23455;
i__23436_23444 = G__23456;
continue;
} else {
var k_23457 = cljs.core.first.call(null,seq__23433_23451__$1);
e.setAttribute(cljs.core.name.call(null,k_23457),cljs.core.get.call(null,attrs,k_23457));

var G__23458 = cljs.core.next.call(null,seq__23433_23451__$1);
var G__23459 = null;
var G__23460 = (0);
var G__23461 = (0);
seq__23433_23441 = G__23458;
chunk__23434_23442 = G__23459;
count__23435_23443 = G__23460;
i__23436_23444 = G__23461;
continue;
}
} else {
}
}
break;
}

var seq__23437_23462 = cljs.core.seq.call(null,children);
var chunk__23438_23463 = null;
var count__23439_23464 = (0);
var i__23440_23465 = (0);
while(true){
if((i__23440_23465 < count__23439_23464)){
var ch_23466 = cljs.core._nth.call(null,chunk__23438_23463,i__23440_23465);
e.appendChild(ch_23466);

var G__23467 = seq__23437_23462;
var G__23468 = chunk__23438_23463;
var G__23469 = count__23439_23464;
var G__23470 = (i__23440_23465 + (1));
seq__23437_23462 = G__23467;
chunk__23438_23463 = G__23468;
count__23439_23464 = G__23469;
i__23440_23465 = G__23470;
continue;
} else {
var temp__4126__auto___23471 = cljs.core.seq.call(null,seq__23437_23462);
if(temp__4126__auto___23471){
var seq__23437_23472__$1 = temp__4126__auto___23471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23437_23472__$1)){
var c__4651__auto___23473 = cljs.core.chunk_first.call(null,seq__23437_23472__$1);
var G__23474 = cljs.core.chunk_rest.call(null,seq__23437_23472__$1);
var G__23475 = c__4651__auto___23473;
var G__23476 = cljs.core.count.call(null,c__4651__auto___23473);
var G__23477 = (0);
seq__23437_23462 = G__23474;
chunk__23438_23463 = G__23475;
count__23439_23464 = G__23476;
i__23440_23465 = G__23477;
continue;
} else {
var ch_23478 = cljs.core.first.call(null,seq__23437_23472__$1);
e.appendChild(ch_23478);

var G__23479 = cljs.core.next.call(null,seq__23437_23472__$1);
var G__23480 = null;
var G__23481 = (0);
var G__23482 = (0);
seq__23437_23462 = G__23479;
chunk__23438_23463 = G__23480;
count__23439_23464 = G__23481;
i__23440_23465 = G__23482;
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
var G__23483__i = 0, G__23483__a = new Array(arguments.length -  2);
while (G__23483__i < G__23483__a.length) {G__23483__a[G__23483__i] = arguments[G__23483__i + 2]; ++G__23483__i;}
  children = new cljs.core.IndexedSeq(G__23483__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__23484){
var t = cljs.core.first(arglist__23484);
arglist__23484 = cljs.core.next(arglist__23484);
var attrs = cljs.core.first(arglist__23484);
var children = cljs.core.rest(arglist__23484);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4761__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4762__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4763__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4764__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4765__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4761__auto__,prefer_table__4762__auto__,method_cache__4763__auto__,cached_hierarchy__4764__auto__,hierarchy__4765__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4761__auto__,prefer_table__4762__auto__,method_cache__4763__auto__,cached_hierarchy__4764__auto__,hierarchy__4765__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4765__auto__,method_table__4761__auto__,prefer_table__4762__auto__,method_cache__4763__auto__,cached_hierarchy__4764__auto__));
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
var el_23485 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23485.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23485.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_23485.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23485);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__23486,st_map){
var map__23490 = p__23486;
var map__23490__$1 = ((cljs.core.seq_QMARK_.call(null,map__23490))?cljs.core.apply.call(null,cljs.core.hash_map,map__23490):map__23490);
var container_el = cljs.core.get.call(null,map__23490__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23490,map__23490__$1,container_el){
return (function (p__23491){
var vec__23492 = p__23491;
var k = cljs.core.nth.call(null,vec__23492,(0),null);
var v = cljs.core.nth.call(null,vec__23492,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23490,map__23490__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__23493,dom_str){
var map__23495 = p__23493;
var map__23495__$1 = ((cljs.core.seq_QMARK_.call(null,map__23495))?cljs.core.apply.call(null,cljs.core.hash_map,map__23495):map__23495);
var c = map__23495__$1;
var content_area_el = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__23496){
var map__23498 = p__23496;
var map__23498__$1 = ((cljs.core.seq_QMARK_.call(null,map__23498))?cljs.core.apply.call(null,cljs.core.hash_map,map__23498):map__23498);
var content_area_el = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_23540){
var state_val_23541 = (state_23540[(1)]);
if((state_val_23541 === (2))){
var inst_23525 = (state_23540[(7)]);
var inst_23534 = (state_23540[(2)]);
var inst_23535 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23536 = ["auto"];
var inst_23537 = cljs.core.PersistentHashMap.fromArrays(inst_23535,inst_23536);
var inst_23538 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23525,inst_23537);
var state_23540__$1 = (function (){var statearr_23542 = state_23540;
(statearr_23542[(8)] = inst_23534);

return statearr_23542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23540__$1,inst_23538);
} else {
if((state_val_23541 === (1))){
var inst_23525 = (state_23540[(7)]);
var inst_23525__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23526 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23527 = ["10px","10px","100%","68px","1.0"];
var inst_23528 = cljs.core.PersistentHashMap.fromArrays(inst_23526,inst_23527);
var inst_23529 = cljs.core.merge.call(null,inst_23528,style);
var inst_23530 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23525__$1,inst_23529);
var inst_23531 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23525__$1,msg);
var inst_23532 = cljs.core.async.timeout.call(null,(300));
var state_23540__$1 = (function (){var statearr_23543 = state_23540;
(statearr_23543[(9)] = inst_23530);

(statearr_23543[(7)] = inst_23525__$1);

(statearr_23543[(10)] = inst_23531);

return statearr_23543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23540__$1,(2),inst_23532);
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
var statearr_23547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23547[(0)] = state_machine__6587__auto__);

(statearr_23547[(1)] = (1));

return statearr_23547;
});
var state_machine__6587__auto____1 = (function (state_23540){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_23540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e23548){if((e23548 instanceof Object)){
var ex__6590__auto__ = e23548;
var statearr_23549_23551 = state_23540;
(statearr_23549_23551[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23552 = state_23540;
state_23540 = G__23552;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_23540){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_23540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_23550 = f__6643__auto__.call(null);
(statearr_23550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_23550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
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
var vec__23554 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__23554,(0),null);
var ln = cljs.core.nth.call(null,vec__23554,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__23557 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__23557,(0),null);
var file_line = cljs.core.nth.call(null,vec__23557,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23557,file_name,file_line){
return (function (p1__23555_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__23555_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__23557,file_name,file_line))
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
var map__23559 = figwheel.client.heads_up.ensure_container.call(null);
var map__23559__$1 = ((cljs.core.seq_QMARK_.call(null,map__23559))?cljs.core.apply.call(null,cljs.core.hash_map,map__23559):map__23559);
var content_area_el = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_23606){
var state_val_23607 = (state_23606[(1)]);
if((state_val_23607 === (3))){
var inst_23589 = (state_23606[(7)]);
var inst_23603 = (state_23606[(2)]);
var inst_23604 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23589,"");
var state_23606__$1 = (function (){var statearr_23608 = state_23606;
(statearr_23608[(8)] = inst_23603);

return statearr_23608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23606__$1,inst_23604);
} else {
if((state_val_23607 === (2))){
var inst_23589 = (state_23606[(7)]);
var inst_23596 = (state_23606[(2)]);
var inst_23597 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23598 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23599 = cljs.core.PersistentHashMap.fromArrays(inst_23597,inst_23598);
var inst_23600 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23589,inst_23599);
var inst_23601 = cljs.core.async.timeout.call(null,(200));
var state_23606__$1 = (function (){var statearr_23609 = state_23606;
(statearr_23609[(9)] = inst_23596);

(statearr_23609[(10)] = inst_23600);

return statearr_23609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23606__$1,(3),inst_23601);
} else {
if((state_val_23607 === (1))){
var inst_23589 = (state_23606[(7)]);
var inst_23589__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23590 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23591 = ["0.0"];
var inst_23592 = cljs.core.PersistentHashMap.fromArrays(inst_23590,inst_23591);
var inst_23593 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23589__$1,inst_23592);
var inst_23594 = cljs.core.async.timeout.call(null,(300));
var state_23606__$1 = (function (){var statearr_23610 = state_23606;
(statearr_23610[(7)] = inst_23589__$1);

(statearr_23610[(11)] = inst_23593);

return statearr_23610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23606__$1,(2),inst_23594);
} else {
return null;
}
}
}
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_23614 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23614[(0)] = state_machine__6587__auto__);

(statearr_23614[(1)] = (1));

return statearr_23614;
});
var state_machine__6587__auto____1 = (function (state_23606){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_23606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e23615){if((e23615 instanceof Object)){
var ex__6590__auto__ = e23615;
var statearr_23616_23618 = state_23606;
(statearr_23616_23618[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23619 = state_23606;
state_23606 = G__23619;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_23606){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_23606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_23617 = f__6643__auto__.call(null);
(statearr_23617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_23617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_23651){
var state_val_23652 = (state_23651[(1)]);
if((state_val_23652 === (4))){
var inst_23649 = (state_23651[(2)]);
var state_23651__$1 = state_23651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23651__$1,inst_23649);
} else {
if((state_val_23652 === (3))){
var inst_23646 = (state_23651[(2)]);
var inst_23647 = figwheel.client.heads_up.clear.call(null);
var state_23651__$1 = (function (){var statearr_23653 = state_23651;
(statearr_23653[(7)] = inst_23646);

return statearr_23653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23651__$1,(4),inst_23647);
} else {
if((state_val_23652 === (2))){
var inst_23643 = (state_23651[(2)]);
var inst_23644 = cljs.core.async.timeout.call(null,(400));
var state_23651__$1 = (function (){var statearr_23654 = state_23651;
(statearr_23654[(8)] = inst_23643);

return statearr_23654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23651__$1,(3),inst_23644);
} else {
if((state_val_23652 === (1))){
var inst_23641 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23651__$1 = state_23651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23651__$1,(2),inst_23641);
} else {
return null;
}
}
}
}
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_23658 = [null,null,null,null,null,null,null,null,null];
(statearr_23658[(0)] = state_machine__6587__auto__);

(statearr_23658[(1)] = (1));

return statearr_23658;
});
var state_machine__6587__auto____1 = (function (state_23651){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_23651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e23659){if((e23659 instanceof Object)){
var ex__6590__auto__ = e23659;
var statearr_23660_23662 = state_23651;
(statearr_23660_23662[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23663 = state_23651;
state_23651 = G__23663;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_23651){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_23651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_23661 = f__6643__auto__.call(null);
(statearr_23661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_23661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1435268445799