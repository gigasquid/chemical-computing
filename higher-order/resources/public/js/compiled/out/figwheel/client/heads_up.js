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
var seq__35198_35206 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35199_35207 = null;
var count__35200_35208 = (0);
var i__35201_35209 = (0);
while(true){
if((i__35201_35209 < count__35200_35208)){
var k_35210 = cljs.core._nth.call(null,chunk__35199_35207,i__35201_35209);
e.setAttribute(cljs.core.name.call(null,k_35210),cljs.core.get.call(null,attrs,k_35210));

var G__35211 = seq__35198_35206;
var G__35212 = chunk__35199_35207;
var G__35213 = count__35200_35208;
var G__35214 = (i__35201_35209 + (1));
seq__35198_35206 = G__35211;
chunk__35199_35207 = G__35212;
count__35200_35208 = G__35213;
i__35201_35209 = G__35214;
continue;
} else {
var temp__4126__auto___35215 = cljs.core.seq.call(null,seq__35198_35206);
if(temp__4126__auto___35215){
var seq__35198_35216__$1 = temp__4126__auto___35215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35198_35216__$1)){
var c__16932__auto___35217 = cljs.core.chunk_first.call(null,seq__35198_35216__$1);
var G__35218 = cljs.core.chunk_rest.call(null,seq__35198_35216__$1);
var G__35219 = c__16932__auto___35217;
var G__35220 = cljs.core.count.call(null,c__16932__auto___35217);
var G__35221 = (0);
seq__35198_35206 = G__35218;
chunk__35199_35207 = G__35219;
count__35200_35208 = G__35220;
i__35201_35209 = G__35221;
continue;
} else {
var k_35222 = cljs.core.first.call(null,seq__35198_35216__$1);
e.setAttribute(cljs.core.name.call(null,k_35222),cljs.core.get.call(null,attrs,k_35222));

var G__35223 = cljs.core.next.call(null,seq__35198_35216__$1);
var G__35224 = null;
var G__35225 = (0);
var G__35226 = (0);
seq__35198_35206 = G__35223;
chunk__35199_35207 = G__35224;
count__35200_35208 = G__35225;
i__35201_35209 = G__35226;
continue;
}
} else {
}
}
break;
}

var seq__35202_35227 = cljs.core.seq.call(null,children);
var chunk__35203_35228 = null;
var count__35204_35229 = (0);
var i__35205_35230 = (0);
while(true){
if((i__35205_35230 < count__35204_35229)){
var ch_35231 = cljs.core._nth.call(null,chunk__35203_35228,i__35205_35230);
e.appendChild(ch_35231);

var G__35232 = seq__35202_35227;
var G__35233 = chunk__35203_35228;
var G__35234 = count__35204_35229;
var G__35235 = (i__35205_35230 + (1));
seq__35202_35227 = G__35232;
chunk__35203_35228 = G__35233;
count__35204_35229 = G__35234;
i__35205_35230 = G__35235;
continue;
} else {
var temp__4126__auto___35236 = cljs.core.seq.call(null,seq__35202_35227);
if(temp__4126__auto___35236){
var seq__35202_35237__$1 = temp__4126__auto___35236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35202_35237__$1)){
var c__16932__auto___35238 = cljs.core.chunk_first.call(null,seq__35202_35237__$1);
var G__35239 = cljs.core.chunk_rest.call(null,seq__35202_35237__$1);
var G__35240 = c__16932__auto___35238;
var G__35241 = cljs.core.count.call(null,c__16932__auto___35238);
var G__35242 = (0);
seq__35202_35227 = G__35239;
chunk__35203_35228 = G__35240;
count__35204_35229 = G__35241;
i__35205_35230 = G__35242;
continue;
} else {
var ch_35243 = cljs.core.first.call(null,seq__35202_35237__$1);
e.appendChild(ch_35243);

var G__35244 = cljs.core.next.call(null,seq__35202_35237__$1);
var G__35245 = null;
var G__35246 = (0);
var G__35247 = (0);
seq__35202_35227 = G__35244;
chunk__35203_35228 = G__35245;
count__35204_35229 = G__35246;
i__35205_35230 = G__35247;
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
var G__35248__i = 0, G__35248__a = new Array(arguments.length -  2);
while (G__35248__i < G__35248__a.length) {G__35248__a[G__35248__i] = arguments[G__35248__i + 2]; ++G__35248__i;}
  children = new cljs.core.IndexedSeq(G__35248__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__35249){
var t = cljs.core.first(arglist__35249);
arglist__35249 = cljs.core.next(arglist__35249);
var attrs = cljs.core.first(arglist__35249);
var children = cljs.core.rest(arglist__35249);
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
var el_35250 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_35250.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_35250.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_35250.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_35250);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__35251,st_map){
var map__35255 = p__35251;
var map__35255__$1 = ((cljs.core.seq_QMARK_.call(null,map__35255))?cljs.core.apply.call(null,cljs.core.hash_map,map__35255):map__35255);
var container_el = cljs.core.get.call(null,map__35255__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35255,map__35255__$1,container_el){
return (function (p__35256){
var vec__35257 = p__35256;
var k = cljs.core.nth.call(null,vec__35257,(0),null);
var v = cljs.core.nth.call(null,vec__35257,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35255,map__35255__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__35258,dom_str){
var map__35260 = p__35258;
var map__35260__$1 = ((cljs.core.seq_QMARK_.call(null,map__35260))?cljs.core.apply.call(null,cljs.core.hash_map,map__35260):map__35260);
var c = map__35260__$1;
var content_area_el = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__35261){
var map__35263 = p__35261;
var map__35263__$1 = ((cljs.core.seq_QMARK_.call(null,map__35263))?cljs.core.apply.call(null,cljs.core.hash_map,map__35263):map__35263);
var content_area_el = cljs.core.get.call(null,map__35263__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_35305){
var state_val_35306 = (state_35305[(1)]);
if((state_val_35306 === (2))){
var inst_35290 = (state_35305[(7)]);
var inst_35299 = (state_35305[(2)]);
var inst_35300 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35301 = ["auto"];
var inst_35302 = cljs.core.PersistentHashMap.fromArrays(inst_35300,inst_35301);
var inst_35303 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35290,inst_35302);
var state_35305__$1 = (function (){var statearr_35307 = state_35305;
(statearr_35307[(8)] = inst_35299);

return statearr_35307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35305__$1,inst_35303);
} else {
if((state_val_35306 === (1))){
var inst_35290 = (state_35305[(7)]);
var inst_35290__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35291 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35292 = ["10px","10px","100%","68px","1.0"];
var inst_35293 = cljs.core.PersistentHashMap.fromArrays(inst_35291,inst_35292);
var inst_35294 = cljs.core.merge.call(null,inst_35293,style);
var inst_35295 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35290__$1,inst_35294);
var inst_35296 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35290__$1,msg);
var inst_35297 = cljs.core.async.timeout.call(null,(300));
var state_35305__$1 = (function (){var statearr_35308 = state_35305;
(statearr_35308[(9)] = inst_35296);

(statearr_35308[(7)] = inst_35290__$1);

(statearr_35308[(10)] = inst_35295);

return statearr_35308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35305__$1,(2),inst_35297);
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
var statearr_35312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35312[(0)] = state_machine__18563__auto__);

(statearr_35312[(1)] = (1));

return statearr_35312;
});
var state_machine__18563__auto____1 = (function (state_35305){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35313){if((e35313 instanceof Object)){
var ex__18566__auto__ = e35313;
var statearr_35314_35316 = state_35305;
(statearr_35314_35316[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35317 = state_35305;
state_35305 = G__35317;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35305){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_35315 = f__18619__auto__.call(null);
(statearr_35315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_35315;
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
var vec__35319 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__35319,(0),null);
var ln = cljs.core.nth.call(null,vec__35319,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__35322 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__35322,(0),null);
var file_line = cljs.core.nth.call(null,vec__35322,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35322,file_name,file_line){
return (function (p1__35320_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__35320_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__35322,file_name,file_line))
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
var map__35324 = figwheel.client.heads_up.ensure_container.call(null);
var map__35324__$1 = ((cljs.core.seq_QMARK_.call(null,map__35324))?cljs.core.apply.call(null,cljs.core.hash_map,map__35324):map__35324);
var content_area_el = cljs.core.get.call(null,map__35324__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_35371){
var state_val_35372 = (state_35371[(1)]);
if((state_val_35372 === (3))){
var inst_35354 = (state_35371[(7)]);
var inst_35368 = (state_35371[(2)]);
var inst_35369 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35354,"");
var state_35371__$1 = (function (){var statearr_35373 = state_35371;
(statearr_35373[(8)] = inst_35368);

return statearr_35373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35371__$1,inst_35369);
} else {
if((state_val_35372 === (2))){
var inst_35354 = (state_35371[(7)]);
var inst_35361 = (state_35371[(2)]);
var inst_35362 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35363 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35364 = cljs.core.PersistentHashMap.fromArrays(inst_35362,inst_35363);
var inst_35365 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35354,inst_35364);
var inst_35366 = cljs.core.async.timeout.call(null,(200));
var state_35371__$1 = (function (){var statearr_35374 = state_35371;
(statearr_35374[(9)] = inst_35365);

(statearr_35374[(10)] = inst_35361);

return statearr_35374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35371__$1,(3),inst_35366);
} else {
if((state_val_35372 === (1))){
var inst_35354 = (state_35371[(7)]);
var inst_35354__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35355 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35356 = ["0.0"];
var inst_35357 = cljs.core.PersistentHashMap.fromArrays(inst_35355,inst_35356);
var inst_35358 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35354__$1,inst_35357);
var inst_35359 = cljs.core.async.timeout.call(null,(300));
var state_35371__$1 = (function (){var statearr_35375 = state_35371;
(statearr_35375[(7)] = inst_35354__$1);

(statearr_35375[(11)] = inst_35358);

return statearr_35375;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35371__$1,(2),inst_35359);
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
var statearr_35379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35379[(0)] = state_machine__18563__auto__);

(statearr_35379[(1)] = (1));

return statearr_35379;
});
var state_machine__18563__auto____1 = (function (state_35371){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35380){if((e35380 instanceof Object)){
var ex__18566__auto__ = e35380;
var statearr_35381_35383 = state_35371;
(statearr_35381_35383[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35384 = state_35371;
state_35371 = G__35384;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35371){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_35382 = f__18619__auto__.call(null);
(statearr_35382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_35382;
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
return (function (state_35416){
var state_val_35417 = (state_35416[(1)]);
if((state_val_35417 === (4))){
var inst_35414 = (state_35416[(2)]);
var state_35416__$1 = state_35416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35416__$1,inst_35414);
} else {
if((state_val_35417 === (3))){
var inst_35411 = (state_35416[(2)]);
var inst_35412 = figwheel.client.heads_up.clear.call(null);
var state_35416__$1 = (function (){var statearr_35418 = state_35416;
(statearr_35418[(7)] = inst_35411);

return statearr_35418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35416__$1,(4),inst_35412);
} else {
if((state_val_35417 === (2))){
var inst_35408 = (state_35416[(2)]);
var inst_35409 = cljs.core.async.timeout.call(null,(400));
var state_35416__$1 = (function (){var statearr_35419 = state_35416;
(statearr_35419[(8)] = inst_35408);

return statearr_35419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35416__$1,(3),inst_35409);
} else {
if((state_val_35417 === (1))){
var inst_35406 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35416__$1 = state_35416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35416__$1,(2),inst_35406);
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
var statearr_35423 = [null,null,null,null,null,null,null,null,null];
(statearr_35423[(0)] = state_machine__18563__auto__);

(statearr_35423[(1)] = (1));

return statearr_35423;
});
var state_machine__18563__auto____1 = (function (state_35416){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_35416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35424){if((e35424 instanceof Object)){
var ex__18566__auto__ = e35424;
var statearr_35425_35427 = state_35416;
(statearr_35425_35427[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35428 = state_35416;
state_35416 = G__35428;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_35416){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_35416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_35426 = f__18619__auto__.call(null);
(statearr_35426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_35426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1435015536695