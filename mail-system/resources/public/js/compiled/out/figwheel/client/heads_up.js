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
var seq__35059_35067 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35060_35068 = null;
var count__35061_35069 = (0);
var i__35062_35070 = (0);
while(true){
if((i__35062_35070 < count__35061_35069)){
var k_35071 = cljs.core._nth.call(null,chunk__35060_35068,i__35062_35070);
e.setAttribute(cljs.core.name.call(null,k_35071),cljs.core.get.call(null,attrs,k_35071));

var G__35072 = seq__35059_35067;
var G__35073 = chunk__35060_35068;
var G__35074 = count__35061_35069;
var G__35075 = (i__35062_35070 + (1));
seq__35059_35067 = G__35072;
chunk__35060_35068 = G__35073;
count__35061_35069 = G__35074;
i__35062_35070 = G__35075;
continue;
} else {
var temp__4126__auto___35076 = cljs.core.seq.call(null,seq__35059_35067);
if(temp__4126__auto___35076){
var seq__35059_35077__$1 = temp__4126__auto___35076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35059_35077__$1)){
var c__16932__auto___35078 = cljs.core.chunk_first.call(null,seq__35059_35077__$1);
var G__35079 = cljs.core.chunk_rest.call(null,seq__35059_35077__$1);
var G__35080 = c__16932__auto___35078;
var G__35081 = cljs.core.count.call(null,c__16932__auto___35078);
var G__35082 = (0);
seq__35059_35067 = G__35079;
chunk__35060_35068 = G__35080;
count__35061_35069 = G__35081;
i__35062_35070 = G__35082;
continue;
} else {
var k_35083 = cljs.core.first.call(null,seq__35059_35077__$1);
e.setAttribute(cljs.core.name.call(null,k_35083),cljs.core.get.call(null,attrs,k_35083));

var G__35084 = cljs.core.next.call(null,seq__35059_35077__$1);
var G__35085 = null;
var G__35086 = (0);
var G__35087 = (0);
seq__35059_35067 = G__35084;
chunk__35060_35068 = G__35085;
count__35061_35069 = G__35086;
i__35062_35070 = G__35087;
continue;
}
} else {
}
}
break;
}

var seq__35063_35088 = cljs.core.seq.call(null,children);
var chunk__35064_35089 = null;
var count__35065_35090 = (0);
var i__35066_35091 = (0);
while(true){
if((i__35066_35091 < count__35065_35090)){
var ch_35092 = cljs.core._nth.call(null,chunk__35064_35089,i__35066_35091);
e.appendChild(ch_35092);

var G__35093 = seq__35063_35088;
var G__35094 = chunk__35064_35089;
var G__35095 = count__35065_35090;
var G__35096 = (i__35066_35091 + (1));
seq__35063_35088 = G__35093;
chunk__35064_35089 = G__35094;
count__35065_35090 = G__35095;
i__35066_35091 = G__35096;
continue;
} else {
var temp__4126__auto___35097 = cljs.core.seq.call(null,seq__35063_35088);
if(temp__4126__auto___35097){
var seq__35063_35098__$1 = temp__4126__auto___35097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35063_35098__$1)){
var c__16932__auto___35099 = cljs.core.chunk_first.call(null,seq__35063_35098__$1);
var G__35100 = cljs.core.chunk_rest.call(null,seq__35063_35098__$1);
var G__35101 = c__16932__auto___35099;
var G__35102 = cljs.core.count.call(null,c__16932__auto___35099);
var G__35103 = (0);
seq__35063_35088 = G__35100;
chunk__35064_35089 = G__35101;
count__35065_35090 = G__35102;
i__35066_35091 = G__35103;
continue;
} else {
var ch_35104 = cljs.core.first.call(null,seq__35063_35098__$1);
e.appendChild(ch_35104);

var G__35105 = cljs.core.next.call(null,seq__35063_35098__$1);
var G__35106 = null;
var G__35107 = (0);
var G__35108 = (0);
seq__35063_35088 = G__35105;
chunk__35064_35089 = G__35106;
count__35065_35090 = G__35107;
i__35066_35091 = G__35108;
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
var G__35109__i = 0, G__35109__a = new Array(arguments.length -  2);
while (G__35109__i < G__35109__a.length) {G__35109__a[G__35109__i] = arguments[G__35109__i + 2]; ++G__35109__i;}
  children = new cljs.core.IndexedSeq(G__35109__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__35110){
var t = cljs.core.first(arglist__35110);
arglist__35110 = cljs.core.next(arglist__35110);
var attrs = cljs.core.first(arglist__35110);
var children = cljs.core.rest(arglist__35110);
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
var el_35111 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_35111.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_35111.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_35111.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_35111);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__35112,st_map){
var map__35116 = p__35112;
var map__35116__$1 = ((cljs.core.seq_QMARK_.call(null,map__35116))?cljs.core.apply.call(null,cljs.core.hash_map,map__35116):map__35116);
var container_el = cljs.core.get.call(null,map__35116__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35116,map__35116__$1,container_el){
return (function (p__35117){
var vec__35118 = p__35117;
var k = cljs.core.nth.call(null,vec__35118,(0),null);
var v = cljs.core.nth.call(null,vec__35118,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35116,map__35116__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__35119,dom_str){
var map__35121 = p__35119;
var map__35121__$1 = ((cljs.core.seq_QMARK_.call(null,map__35121))?cljs.core.apply.call(null,cljs.core.hash_map,map__35121):map__35121);
var c = map__35121__$1;
var content_area_el = cljs.core.get.call(null,map__35121__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__35122){
var map__35124 = p__35122;
var map__35124__$1 = ((cljs.core.seq_QMARK_.call(null,map__35124))?cljs.core.apply.call(null,cljs.core.hash_map,map__35124):map__35124);
var content_area_el = cljs.core.get.call(null,map__35124__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_35166){
var state_val_35167 = (state_35166[(1)]);
if((state_val_35167 === (2))){
var inst_35151 = (state_35166[(7)]);
var inst_35160 = (state_35166[(2)]);
var inst_35161 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35162 = ["auto"];
var inst_35163 = cljs.core.PersistentHashMap.fromArrays(inst_35161,inst_35162);
var inst_35164 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35151,inst_35163);
var state_35166__$1 = (function (){var statearr_35168 = state_35166;
(statearr_35168[(8)] = inst_35160);

return statearr_35168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35166__$1,inst_35164);
} else {
if((state_val_35167 === (1))){
var inst_35151 = (state_35166[(7)]);
var inst_35151__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35152 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35153 = ["10px","10px","100%","68px","1.0"];
var inst_35154 = cljs.core.PersistentHashMap.fromArrays(inst_35152,inst_35153);
var inst_35155 = cljs.core.merge.call(null,inst_35154,style);
var inst_35156 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35151__$1,inst_35155);
var inst_35157 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35151__$1,msg);
var inst_35158 = cljs.core.async.timeout.call(null,(300));
var state_35166__$1 = (function (){var statearr_35169 = state_35166;
(statearr_35169[(9)] = inst_35157);

(statearr_35169[(7)] = inst_35151__$1);

(statearr_35169[(10)] = inst_35156);

return statearr_35169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35166__$1,(2),inst_35158);
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
var statearr_35173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35173[(0)] = state_machine__18563__auto__);

(statearr_35173[(1)] = (1));

return statearr_35173;
});
var state_machine__18563__auto____1 = (function (state_35166){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35174){if((e35174 instanceof Object)){
var ex__18566__auto__ = e35174;
var statearr_35175_35177 = state_35166;
(statearr_35175_35177[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35178 = state_35166;
state_35166 = G__35178;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35166){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_35176 = f__18619__auto__.call(null);
(statearr_35176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_35176;
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
var vec__35180 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__35180,(0),null);
var ln = cljs.core.nth.call(null,vec__35180,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__35183 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__35183,(0),null);
var file_line = cljs.core.nth.call(null,vec__35183,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35183,file_name,file_line){
return (function (p1__35181_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__35181_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__35183,file_name,file_line))
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
var map__35185 = figwheel.client.heads_up.ensure_container.call(null);
var map__35185__$1 = ((cljs.core.seq_QMARK_.call(null,map__35185))?cljs.core.apply.call(null,cljs.core.hash_map,map__35185):map__35185);
var content_area_el = cljs.core.get.call(null,map__35185__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_35232){
var state_val_35233 = (state_35232[(1)]);
if((state_val_35233 === (3))){
var inst_35215 = (state_35232[(7)]);
var inst_35229 = (state_35232[(2)]);
var inst_35230 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35215,"");
var state_35232__$1 = (function (){var statearr_35234 = state_35232;
(statearr_35234[(8)] = inst_35229);

return statearr_35234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35232__$1,inst_35230);
} else {
if((state_val_35233 === (2))){
var inst_35215 = (state_35232[(7)]);
var inst_35222 = (state_35232[(2)]);
var inst_35223 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35224 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35225 = cljs.core.PersistentHashMap.fromArrays(inst_35223,inst_35224);
var inst_35226 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35215,inst_35225);
var inst_35227 = cljs.core.async.timeout.call(null,(200));
var state_35232__$1 = (function (){var statearr_35235 = state_35232;
(statearr_35235[(9)] = inst_35226);

(statearr_35235[(10)] = inst_35222);

return statearr_35235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35232__$1,(3),inst_35227);
} else {
if((state_val_35233 === (1))){
var inst_35215 = (state_35232[(7)]);
var inst_35215__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35216 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35217 = ["0.0"];
var inst_35218 = cljs.core.PersistentHashMap.fromArrays(inst_35216,inst_35217);
var inst_35219 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35215__$1,inst_35218);
var inst_35220 = cljs.core.async.timeout.call(null,(300));
var state_35232__$1 = (function (){var statearr_35236 = state_35232;
(statearr_35236[(7)] = inst_35215__$1);

(statearr_35236[(11)] = inst_35219);

return statearr_35236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35232__$1,(2),inst_35220);
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
var statearr_35240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35240[(0)] = state_machine__18563__auto__);

(statearr_35240[(1)] = (1));

return statearr_35240;
});
var state_machine__18563__auto____1 = (function (state_35232){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35241){if((e35241 instanceof Object)){
var ex__18566__auto__ = e35241;
var statearr_35242_35244 = state_35232;
(statearr_35242_35244[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35245 = state_35232;
state_35232 = G__35245;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35232){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_35243 = f__18619__auto__.call(null);
(statearr_35243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_35243;
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
return (function (state_35277){
var state_val_35278 = (state_35277[(1)]);
if((state_val_35278 === (4))){
var inst_35275 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35277__$1,inst_35275);
} else {
if((state_val_35278 === (3))){
var inst_35272 = (state_35277[(2)]);
var inst_35273 = figwheel.client.heads_up.clear.call(null);
var state_35277__$1 = (function (){var statearr_35279 = state_35277;
(statearr_35279[(7)] = inst_35272);

return statearr_35279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35277__$1,(4),inst_35273);
} else {
if((state_val_35278 === (2))){
var inst_35269 = (state_35277[(2)]);
var inst_35270 = cljs.core.async.timeout.call(null,(400));
var state_35277__$1 = (function (){var statearr_35280 = state_35277;
(statearr_35280[(8)] = inst_35269);

return statearr_35280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35277__$1,(3),inst_35270);
} else {
if((state_val_35278 === (1))){
var inst_35267 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35277__$1 = state_35277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35277__$1,(2),inst_35267);
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
var statearr_35284 = [null,null,null,null,null,null,null,null,null];
(statearr_35284[(0)] = state_machine__18563__auto__);

(statearr_35284[(1)] = (1));

return statearr_35284;
});
var state_machine__18563__auto____1 = (function (state_35277){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35285){if((e35285 instanceof Object)){
var ex__18566__auto__ = e35285;
var statearr_35286_35288 = state_35277;
(statearr_35286_35288[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35289 = state_35277;
state_35277 = G__35289;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35277){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_35287 = f__18619__auto__.call(null);
(statearr_35287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_35287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1435014981695