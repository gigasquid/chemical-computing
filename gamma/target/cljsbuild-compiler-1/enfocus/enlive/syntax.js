// Compiled by ClojureScript 0.0-2850 {}
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function sel_to_str(input){
var item = cljs.core.first(input);
var rest = cljs.core.rest(input);
var end = ((cljs.core.empty_QMARK_(rest))?cljs.core.list(cljs.core.List.EMPTY):sel_to_str(rest));
if((item instanceof cljs.core.Keyword)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (item,rest,end){
return (function (p1__26562_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26562_SHARP_,cljs.core.name(item));
});})(item,rest,end))
,end);
} else {
if(typeof item === 'string'){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (item,rest,end){
return (function (p1__26563_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26563_SHARP_,item);
});})(item,rest,end))
,end);
} else {
if(cljs.core.set_QMARK_(item)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (item,rest,end){
return (function (r1,it){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(r1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (item,rest,end){
return (function (p1__26564_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26564_SHARP_,it);
});})(item,rest,end))
,end));
});})(item,rest,end))
,cljs.core.PersistentVector.EMPTY,cljs.core.flatten(sel_to_str(item)));
} else {
if(cljs.core.coll_QMARK_(item)){
var x1 = sel_to_str(item);
var sub = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x1,item,rest,end){
return (function (p1__26565_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__26565_SHARP_);
});})(x1,item,rest,end))
,sel_to_str(item));
var iter__4620__auto__ = ((function (x1,sub,item,rest,end){
return (function iter__26581(s__26582){
return (new cljs.core.LazySeq(null,((function (x1,sub,item,rest,end){
return (function (){
var s__26582__$1 = s__26582;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__26582__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var s = cljs.core.first(xs__4624__auto__);
var iterys__4616__auto__ = ((function (s__26582__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end){
return (function iter__26583(s__26584){
return (new cljs.core.LazySeq(null,((function (s__26582__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end){
return (function (){
var s__26584__$1 = s__26584;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__26584__$1);
if(temp__4126__auto____$1){
var s__26584__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26584__$2)){
var c__4618__auto__ = cljs.core.chunk_first(s__26584__$2);
var size__4619__auto__ = cljs.core.count(c__4618__auto__);
var b__26586 = cljs.core.chunk_buffer(size__4619__auto__);
if((function (){var i__26585 = (0);
while(true){
if((i__26585 < size__4619__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4618__auto__,i__26585);
cljs.core.chunk_append(b__26586,(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,e], 0));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(e,s);
})()
);

var G__26592 = (i__26585 + (1));
i__26585 = G__26592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26586),iter__26583(cljs.core.chunk_rest(s__26584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26586),null);
}
} else {
var e = cljs.core.first(s__26584__$2);
return cljs.core.cons((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,e], 0));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(e,s);
})()
,iter__26583(cljs.core.rest(s__26584__$2)));
}
} else {
return null;
}
break;
}
});})(s__26582__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end))
,null,null));
});})(s__26582__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end))
;
var fs__4617__auto__ = cljs.core.seq(iterys__4616__auto__(end));
if(fs__4617__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4617__auto__,iter__26581(cljs.core.rest(s__26582__$1)));
} else {
var G__26593 = cljs.core.rest(s__26582__$1);
s__26582__$1 = G__26593;
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
return iter__4620__auto__(sub);
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
var temp__4124__auto__ = enfocus.enlive.syntax.sel_to_str(sel);
if(cljs.core.truth_(temp__4124__auto__)){
var ors = temp__4124__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",ors))));
} else {
return null;
}
}
});
enfocus.enlive.syntax.attr_pairs = (function attr_pairs(op,elms){
var ts = (function (p__26596){
var vec__26597 = p__26596;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26597,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26597,(1),null);
return [cljs.core.str("["),cljs.core.str(cljs.core.name(x)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(ts,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),elms)));
});
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (elms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26598_SHARP_){
return [cljs.core.str("["),cljs.core.str(cljs.core.name(p1__26598_SHARP_)),cljs.core.str("]")].join('');
}),elms));
};
var attr_QMARK_ = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__26599__i = 0, G__26599__a = new Array(arguments.length -  0);
while (G__26599__i < G__26599__a.length) {G__26599__a[G__26599__i] = arguments[G__26599__i + 0]; ++G__26599__i;}
  elms = new cljs.core.IndexedSeq(G__26599__a,0);
} 
return attr_QMARK___delegate.call(this,elms);};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__26600){
var elms = cljs.core.seq(arglist__26600);
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
return enfocus.enlive.syntax.attr_pairs("",elms);
};
var attr_EQ_ = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__26601__i = 0, G__26601__a = new Array(arguments.length -  0);
while (G__26601__i < G__26601__a.length) {G__26601__a[G__26601__i] = arguments[G__26601__i + 0]; ++G__26601__i;}
  elms = new cljs.core.IndexedSeq(G__26601__a,0);
} 
return attr_EQ___delegate.call(this,elms);};
attr_EQ_.cljs$lang$maxFixedArity = 0;
attr_EQ_.cljs$lang$applyTo = (function (arglist__26602){
var elms = cljs.core.seq(arglist__26602);
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
return [cljs.core.str("["),cljs.core.str(cljs.core.name(x)),cljs.core.str("~='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(ts,vals));
};
var attr_has = function (x,var_args){
var vals = null;
if (arguments.length > 1) {
var G__26603__i = 0, G__26603__a = new Array(arguments.length -  1);
while (G__26603__i < G__26603__a.length) {G__26603__a[G__26603__i] = arguments[G__26603__i + 1]; ++G__26603__i;}
  vals = new cljs.core.IndexedSeq(G__26603__a,0);
} 
return attr_has__delegate.call(this,x,vals);};
attr_has.cljs$lang$maxFixedArity = 1;
attr_has.cljs$lang$applyTo = (function (arglist__26604){
var x = cljs.core.first(arglist__26604);
var vals = cljs.core.rest(arglist__26604);
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
return enfocus.enlive.syntax.attr_pairs("^",elms);
};
var attr_starts = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__26605__i = 0, G__26605__a = new Array(arguments.length -  0);
while (G__26605__i < G__26605__a.length) {G__26605__a[G__26605__i] = arguments[G__26605__i + 0]; ++G__26605__i;}
  elms = new cljs.core.IndexedSeq(G__26605__a,0);
} 
return attr_starts__delegate.call(this,elms);};
attr_starts.cljs$lang$maxFixedArity = 0;
attr_starts.cljs$lang$applyTo = (function (arglist__26606){
var elms = cljs.core.seq(arglist__26606);
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
return enfocus.enlive.syntax.attr_pairs("$",elms);
};
var attr_ends = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__26607__i = 0, G__26607__a = new Array(arguments.length -  0);
while (G__26607__i < G__26607__a.length) {G__26607__a[G__26607__i] = arguments[G__26607__i + 0]; ++G__26607__i;}
  elms = new cljs.core.IndexedSeq(G__26607__a,0);
} 
return attr_ends__delegate.call(this,elms);};
attr_ends.cljs$lang$maxFixedArity = 0;
attr_ends.cljs$lang$applyTo = (function (arglist__26608){
var elms = cljs.core.seq(arglist__26608);
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
return enfocus.enlive.syntax.attr_pairs("*",elms);
};
var attr_contains = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__26609__i = 0, G__26609__a = new Array(arguments.length -  0);
while (G__26609__i < G__26609__a.length) {G__26609__a[G__26609__i] = arguments[G__26609__i + 0]; ++G__26609__i;}
  elms = new cljs.core.IndexedSeq(G__26609__a,0);
} 
return attr_contains__delegate.call(this,elms);};
attr_contains.cljs$lang$maxFixedArity = 0;
attr_contains.cljs$lang$applyTo = (function (arglist__26610){
var elms = cljs.core.seq(arglist__26610);
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
return enfocus.enlive.syntax.attr_pairs("|",elms);
};
var attr_BAR__EQ_ = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__26611__i = 0, G__26611__a = new Array(arguments.length -  0);
while (G__26611__i < G__26611__a.length) {G__26611__a[G__26611__i] = arguments[G__26611__i + 0]; ++G__26611__i;}
  elms = new cljs.core.IndexedSeq(G__26611__a,0);
} 
return attr_BAR__EQ___delegate.call(this,elms);};
attr_BAR__EQ_.cljs$lang$maxFixedArity = 0;
attr_BAR__EQ_.cljs$lang$applyTo = (function (arglist__26612){
var elms = cljs.core.seq(arglist__26612);
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
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2("child",x);
});
var nth_child__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3("child",x,y);
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
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2("last-child",x);
});
var nth_last_child__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3("last-child",x,y);
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
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2("of-type",x);
});
var nth_of_type__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3("of-type",x,y);
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
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2("last-of-type",x);
});
var nth_last_of_type__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3("last-of-type",x,y);
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
return [cljs.core.str("not("),cljs.core.str(enfocus.enlive.syntax.convert(sel)),cljs.core.str(")")].join('');
};
var but = function (var_args){
var sel = null;
if (arguments.length > 0) {
var G__26613__i = 0, G__26613__a = new Array(arguments.length -  0);
while (G__26613__i < G__26613__a.length) {G__26613__a[G__26613__i] = arguments[G__26613__i + 0]; ++G__26613__i;}
  sel = new cljs.core.IndexedSeq(G__26613__a,0);
} 
return but__delegate.call(this,sel);};
but.cljs$lang$maxFixedArity = 0;
but.cljs$lang$applyTo = (function (arglist__26614){
var sel = cljs.core.seq(arglist__26614);
return but__delegate(sel);
});
but.cljs$core$IFn$_invoke$arity$variadic = but__delegate;
return but;
})()
;
