// Compiled by ClojureScript 0.0-2850 {}
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function sel_to_str(input){
var item = cljs.core.first.call(null,input);
var rest = cljs.core.rest.call(null,input);
var end = ((cljs.core.empty_QMARK_.call(null,rest))?cljs.core.list(cljs.core.List.EMPTY):sel_to_str.call(null,rest));
if((item instanceof cljs.core.Keyword)){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__20230_SHARP_){
return cljs.core.conj.call(null,p1__20230_SHARP_,cljs.core.name.call(null,item));
});})(item,rest,end))
,end);
} else {
if(typeof item === 'string'){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__20231_SHARP_){
return cljs.core.conj.call(null,p1__20231_SHARP_,item);
});})(item,rest,end))
,end);
} else {
if(cljs.core.set_QMARK_.call(null,item)){
return cljs.core.reduce.call(null,((function (item,rest,end){
return (function (r1,it){
return cljs.core.concat.call(null,r1,cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__20232_SHARP_){
return cljs.core.conj.call(null,p1__20232_SHARP_,it);
});})(item,rest,end))
,end));
});})(item,rest,end))
,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,sel_to_str.call(null,item)));
} else {
if(cljs.core.coll_QMARK_.call(null,item)){
var x1 = sel_to_str.call(null,item);
var sub = cljs.core.map.call(null,((function (x1,item,rest,end){
return (function (p1__20233_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__20233_SHARP_);
});})(x1,item,rest,end))
,sel_to_str.call(null,item));
var iter__4571__auto__ = ((function (x1,sub,item,rest,end){
return (function iter__20240(s__20241){
return (new cljs.core.LazySeq(null,((function (x1,sub,item,rest,end){
return (function (){
var s__20241__$1 = s__20241;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20241__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var s = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4567__auto__ = ((function (s__20241__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end){
return (function iter__20242(s__20243){
return (new cljs.core.LazySeq(null,((function (s__20241__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end){
return (function (){
var s__20243__$1 = s__20243;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20243__$1);
if(temp__4126__auto____$1){
var s__20243__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20243__$2)){
var c__4569__auto__ = cljs.core.chunk_first.call(null,s__20243__$2);
var size__4570__auto__ = cljs.core.count.call(null,c__4569__auto__);
var b__20245 = cljs.core.chunk_buffer.call(null,size__4570__auto__);
if((function (){var i__20244 = (0);
while(true){
if((i__20244 < size__4570__auto__)){
var e = cljs.core._nth.call(null,c__4569__auto__,i__20244);
cljs.core.chunk_append.call(null,b__20245,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
);

var G__20246 = (i__20244 + (1));
i__20244 = G__20246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20245),iter__20242.call(null,cljs.core.chunk_rest.call(null,s__20243__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20245),null);
}
} else {
var e = cljs.core.first.call(null,s__20243__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
,iter__20242.call(null,cljs.core.rest.call(null,s__20243__$2)));
}
} else {
return null;
}
break;
}
});})(s__20241__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end))
,null,null));
});})(s__20241__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end))
;
var fs__4568__auto__ = cljs.core.seq.call(null,iterys__4567__auto__.call(null,end));
if(fs__4568__auto__){
return cljs.core.concat.call(null,fs__4568__auto__,iter__20240.call(null,cljs.core.rest.call(null,s__20241__$1)));
} else {
var G__20247 = cljs.core.rest.call(null,s__20241__$1);
s__20241__$1 = G__20247;
continue;
}
} else {
return null;
}
break;
}
});})(x1,sub,item,rest,end))
,null,null));
});})(x1,sub,item,rest,end))
;
return iter__4571__auto__.call(null,sub);
} else {
return input;

}
}
}
}
});
enfocus.enlive.syntax.convert = (function convert(sel){
if(typeof sel === 'string'){
return sel;
} else {
var temp__4124__auto__ = enfocus.enlive.syntax.sel_to_str.call(null,sel);
if(cljs.core.truth_(temp__4124__auto__)){
var ors = temp__4124__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.apply.call(null,cljs.core.concat,cljs.core.interpose.call(null,",",ors))));
} else {
return null;
}
}
});
enfocus.enlive.syntax.attr_pairs = (function attr_pairs(op,elms){
var ts = (function (p__20250){
var vec__20251 = p__20250;
var x = cljs.core.nth.call(null,vec__20251,(0),null);
var y = cljs.core.nth.call(null,vec__20251,(1),null);
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,cljs.core.partition.call(null,(2),elms)));
});
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (elms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__20252_SHARP_){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,p1__20252_SHARP_)),cljs.core.str("]")].join('');
}),elms));
};
var attr_QMARK_ = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__20253__i = 0, G__20253__a = new Array(arguments.length -  0);
while (G__20253__i < G__20253__a.length) {G__20253__a[G__20253__i] = arguments[G__20253__i + 0]; ++G__20253__i;}
  elms = new cljs.core.IndexedSeq(G__20253__a,0);
} 
return attr_QMARK___delegate.call(this,elms);};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__20254){
var elms = cljs.core.seq(arglist__20254);
return attr_QMARK___delegate(elms);
});
attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = attr_QMARK___delegate;
return attr_QMARK_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_EQ_ = (function() { 
var attr_EQ___delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"",elms);
};
var attr_EQ_ = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__20255__i = 0, G__20255__a = new Array(arguments.length -  0);
while (G__20255__i < G__20255__a.length) {G__20255__a[G__20255__i] = arguments[G__20255__i + 0]; ++G__20255__i;}
  elms = new cljs.core.IndexedSeq(G__20255__a,0);
} 
return attr_EQ___delegate.call(this,elms);};
attr_EQ_.cljs$lang$maxFixedArity = 0;
attr_EQ_.cljs$lang$applyTo = (function (arglist__20256){
var elms = cljs.core.seq(arglist__20256);
return attr_EQ___delegate(elms);
});
attr_EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_EQ___delegate;
return attr_EQ_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_has = (function() { 
var attr_has__delegate = function (x,vals){
var ts = (function (y){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str("~='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,vals));
};
var attr_has = function (x,var_args){
var vals = null;
if (arguments.length > 1) {
var G__20257__i = 0, G__20257__a = new Array(arguments.length -  1);
while (G__20257__i < G__20257__a.length) {G__20257__a[G__20257__i] = arguments[G__20257__i + 1]; ++G__20257__i;}
  vals = new cljs.core.IndexedSeq(G__20257__a,0);
} 
return attr_has__delegate.call(this,x,vals);};
attr_has.cljs$lang$maxFixedArity = 1;
attr_has.cljs$lang$applyTo = (function (arglist__20258){
var x = cljs.core.first(arglist__20258);
var vals = cljs.core.rest(arglist__20258);
return attr_has__delegate(x,vals);
});
attr_has.cljs$core$IFn$_invoke$arity$variadic = attr_has__delegate;
return attr_has;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_starts = (function() { 
var attr_starts__delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"^",elms);
};
var attr_starts = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__20259__i = 0, G__20259__a = new Array(arguments.length -  0);
while (G__20259__i < G__20259__a.length) {G__20259__a[G__20259__i] = arguments[G__20259__i + 0]; ++G__20259__i;}
  elms = new cljs.core.IndexedSeq(G__20259__a,0);
} 
return attr_starts__delegate.call(this,elms);};
attr_starts.cljs$lang$maxFixedArity = 0;
attr_starts.cljs$lang$applyTo = (function (arglist__20260){
var elms = cljs.core.seq(arglist__20260);
return attr_starts__delegate(elms);
});
attr_starts.cljs$core$IFn$_invoke$arity$variadic = attr_starts__delegate;
return attr_starts;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_ends = (function() { 
var attr_ends__delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"$",elms);
};
var attr_ends = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__20261__i = 0, G__20261__a = new Array(arguments.length -  0);
while (G__20261__i < G__20261__a.length) {G__20261__a[G__20261__i] = arguments[G__20261__i + 0]; ++G__20261__i;}
  elms = new cljs.core.IndexedSeq(G__20261__a,0);
} 
return attr_ends__delegate.call(this,elms);};
attr_ends.cljs$lang$maxFixedArity = 0;
attr_ends.cljs$lang$applyTo = (function (arglist__20262){
var elms = cljs.core.seq(arglist__20262);
return attr_ends__delegate(elms);
});
attr_ends.cljs$core$IFn$_invoke$arity$variadic = attr_ends__delegate;
return attr_ends;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_contains = (function() { 
var attr_contains__delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"*",elms);
};
var attr_contains = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__20263__i = 0, G__20263__a = new Array(arguments.length -  0);
while (G__20263__i < G__20263__a.length) {G__20263__a[G__20263__i] = arguments[G__20263__i + 0]; ++G__20263__i;}
  elms = new cljs.core.IndexedSeq(G__20263__a,0);
} 
return attr_contains__delegate.call(this,elms);};
attr_contains.cljs$lang$maxFixedArity = 0;
attr_contains.cljs$lang$applyTo = (function (arglist__20264){
var elms = cljs.core.seq(arglist__20264);
return attr_contains__delegate(elms);
});
attr_contains.cljs$core$IFn$_invoke$arity$variadic = attr_contains__delegate;
return attr_contains;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_BAR__EQ_ = (function() { 
var attr_BAR__EQ___delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"|",elms);
};
var attr_BAR__EQ_ = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__20265__i = 0, G__20265__a = new Array(arguments.length -  0);
while (G__20265__i < G__20265__a.length) {G__20265__a[G__20265__i] = arguments[G__20265__i + 0]; ++G__20265__i;}
  elms = new cljs.core.IndexedSeq(G__20265__a,0);
} 
return attr_BAR__EQ___delegate.call(this,elms);};
attr_BAR__EQ_.cljs$lang$maxFixedArity = 0;
attr_BAR__EQ_.cljs$lang$applyTo = (function (arglist__20266){
var elms = cljs.core.seq(arglist__20266);
return attr_BAR__EQ___delegate(elms);
});
attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_BAR__EQ___delegate;
return attr_BAR__EQ_;
})()
;
enfocus.enlive.syntax.nth_op = (function() {
var nth_op = null;
var nth_op__2 = (function (op,x){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_op__3 = (function (op,x,y){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str("n"),cljs.core.str((((y > (0)))?"+":null)),cljs.core.str(y)].join('');
});
nth_op = function(op,x,y){
switch(arguments.length){
case 2:
return nth_op__2.call(this,op,x);
case 3:
return nth_op__3.call(this,op,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_op.cljs$core$IFn$_invoke$arity$2 = nth_op__2;
nth_op.cljs$core$IFn$_invoke$arity$3 = nth_op__3;
return nth_op;
})()
;
enfocus.enlive.syntax.nth_child = (function() {
var nth_child = null;
var nth_child__1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"child",x);
});
var nth_child__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"child",x,y);
});
nth_child = function(x,y){
switch(arguments.length){
case 1:
return nth_child__1.call(this,x);
case 2:
return nth_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_child.cljs$core$IFn$_invoke$arity$1 = nth_child__1;
nth_child.cljs$core$IFn$_invoke$arity$2 = nth_child__2;
return nth_child;
})()
;
enfocus.enlive.syntax.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x);
});
var nth_last_child__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x,y);
});
nth_last_child = function(x,y){
switch(arguments.length){
case 1:
return nth_last_child__1.call(this,x);
case 2:
return nth_last_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_child.cljs$core$IFn$_invoke$arity$1 = nth_last_child__1;
nth_last_child.cljs$core$IFn$_invoke$arity$2 = nth_last_child__2;
return nth_last_child;
})()
;
enfocus.enlive.syntax.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x);
});
var nth_of_type__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x,y);
});
nth_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_of_type__1.call(this,x);
case 2:
return nth_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_of_type.cljs$core$IFn$_invoke$arity$1 = nth_of_type__1;
nth_of_type.cljs$core$IFn$_invoke$arity$2 = nth_of_type__2;
return nth_of_type;
})()
;
enfocus.enlive.syntax.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x);
});
var nth_last_of_type__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x,y);
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_last_of_type__1.call(this,x);
case 2:
return nth_last_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_of_type.cljs$core$IFn$_invoke$arity$1 = nth_last_of_type__1;
nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = nth_last_of_type__2;
return nth_last_of_type;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.but = (function() { 
var but__delegate = function (sel){
return [cljs.core.str("not("),cljs.core.str(enfocus.enlive.syntax.convert.call(null,sel)),cljs.core.str(")")].join('');
};
var but = function (var_args){
var sel = null;
if (arguments.length > 0) {
var G__20267__i = 0, G__20267__a = new Array(arguments.length -  0);
while (G__20267__i < G__20267__a.length) {G__20267__a[G__20267__i] = arguments[G__20267__i + 0]; ++G__20267__i;}
  sel = new cljs.core.IndexedSeq(G__20267__a,0);
} 
return but__delegate.call(this,sel);};
but.cljs$lang$maxFixedArity = 0;
but.cljs$lang$applyTo = (function (arglist__20268){
var sel = cljs.core.seq(arglist__20268);
return but__delegate(sel);
});
but.cljs$core$IFn$_invoke$arity$variadic = but__delegate;
return but;
})()
;

//# sourceMappingURL=syntax.js.map