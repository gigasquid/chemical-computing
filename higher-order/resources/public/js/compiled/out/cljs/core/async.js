// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t30014 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30014 = (function (f,fn_handler,meta30015){
this.f = f;
this.fn_handler = fn_handler;
this.meta30015 = meta30015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30014.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30016){
var self__ = this;
var _30016__$1 = this;
return self__.meta30015;
});

cljs.core.async.t30014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30016,meta30015__$1){
var self__ = this;
var _30016__$1 = this;
return (new cljs.core.async.t30014(self__.f,self__.fn_handler,meta30015__$1));
});

cljs.core.async.t30014.cljs$lang$type = true;

cljs.core.async.t30014.cljs$lang$ctorStr = "cljs.core.async/t30014";

cljs.core.async.t30014.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30014");
});

cljs.core.async.__GT_t30014 = (function __GT_t30014(f__$1,fn_handler__$1,meta30015){
return (new cljs.core.async.t30014(f__$1,fn_handler__$1,meta30015));
});

}

return (new cljs.core.async.t30014(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__30018 = buff;
if(G__30018){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__30018.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30018.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30018);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30018);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30019 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30019);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30019,ret){
return (function (){
return fn1.call(null,val_30019);
});})(val_30019,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__17032__auto___30020 = n;
var x_30021 = (0);
while(true){
if((x_30021 < n__17032__auto___30020)){
(a[x_30021] = (0));

var G__30022 = (x_30021 + (1));
x_30021 = G__30022;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30023 = (i + (1));
i = G__30023;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30027 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30027 = (function (flag,alt_flag,meta30028){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30028 = meta30028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30027.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30029){
var self__ = this;
var _30029__$1 = this;
return self__.meta30028;
});})(flag))
;

cljs.core.async.t30027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30029,meta30028__$1){
var self__ = this;
var _30029__$1 = this;
return (new cljs.core.async.t30027(self__.flag,self__.alt_flag,meta30028__$1));
});})(flag))
;

cljs.core.async.t30027.cljs$lang$type = true;

cljs.core.async.t30027.cljs$lang$ctorStr = "cljs.core.async/t30027";

cljs.core.async.t30027.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30027");
});})(flag))
;

cljs.core.async.__GT_t30027 = ((function (flag){
return (function __GT_t30027(flag__$1,alt_flag__$1,meta30028){
return (new cljs.core.async.t30027(flag__$1,alt_flag__$1,meta30028));
});})(flag))
;

}

return (new cljs.core.async.t30027(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30033 = (function (cb,flag,alt_handler,meta30034){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30034 = meta30034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30035){
var self__ = this;
var _30035__$1 = this;
return self__.meta30034;
});

cljs.core.async.t30033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30035,meta30034__$1){
var self__ = this;
var _30035__$1 = this;
return (new cljs.core.async.t30033(self__.cb,self__.flag,self__.alt_handler,meta30034__$1));
});

cljs.core.async.t30033.cljs$lang$type = true;

cljs.core.async.t30033.cljs$lang$ctorStr = "cljs.core.async/t30033";

cljs.core.async.t30033.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30033");
});

cljs.core.async.__GT_t30033 = (function __GT_t30033(cb__$1,flag__$1,alt_handler__$1,meta30034){
return (new cljs.core.async.t30033(cb__$1,flag__$1,alt_handler__$1,meta30034));
});

}

return (new cljs.core.async.t30033(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30036_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30036_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30037_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30037_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16145__auto__ = wport;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30038 = (i + (1));
i = G__30038;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16145__auto__ = ret;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16133__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16133__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16133__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__30039){
var map__30041 = p__30039;
var map__30041__$1 = ((cljs.core.seq_QMARK_.call(null,map__30041))?cljs.core.apply.call(null,cljs.core.hash_map,map__30041):map__30041);
var opts = map__30041__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30039 = null;
if (arguments.length > 1) {
var G__30042__i = 0, G__30042__a = new Array(arguments.length -  1);
while (G__30042__i < G__30042__a.length) {G__30042__a[G__30042__i] = arguments[G__30042__i + 1]; ++G__30042__i;}
  p__30039 = new cljs.core.IndexedSeq(G__30042__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30039);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30043){
var ports = cljs.core.first(arglist__30043);
var p__30039 = cljs.core.rest(arglist__30043);
return alts_BANG___delegate(ports,p__30039);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__18618__auto___30138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___30138){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___30138){
return (function (state_30114){
var state_val_30115 = (state_30114[(1)]);
if((state_val_30115 === (7))){
var inst_30110 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30116_30139 = state_30114__$1;
(statearr_30116_30139[(2)] = inst_30110);

(statearr_30116_30139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (1))){
var state_30114__$1 = state_30114;
var statearr_30117_30140 = state_30114__$1;
(statearr_30117_30140[(2)] = null);

(statearr_30117_30140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (4))){
var inst_30093 = (state_30114[(7)]);
var inst_30093__$1 = (state_30114[(2)]);
var inst_30094 = (inst_30093__$1 == null);
var state_30114__$1 = (function (){var statearr_30118 = state_30114;
(statearr_30118[(7)] = inst_30093__$1);

return statearr_30118;
})();
if(cljs.core.truth_(inst_30094)){
var statearr_30119_30141 = state_30114__$1;
(statearr_30119_30141[(1)] = (5));

} else {
var statearr_30120_30142 = state_30114__$1;
(statearr_30120_30142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (13))){
var state_30114__$1 = state_30114;
var statearr_30121_30143 = state_30114__$1;
(statearr_30121_30143[(2)] = null);

(statearr_30121_30143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (6))){
var inst_30093 = (state_30114[(7)]);
var state_30114__$1 = state_30114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30114__$1,(11),to,inst_30093);
} else {
if((state_val_30115 === (3))){
var inst_30112 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30114__$1,inst_30112);
} else {
if((state_val_30115 === (12))){
var state_30114__$1 = state_30114;
var statearr_30122_30144 = state_30114__$1;
(statearr_30122_30144[(2)] = null);

(statearr_30122_30144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (2))){
var state_30114__$1 = state_30114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30114__$1,(4),from);
} else {
if((state_val_30115 === (11))){
var inst_30103 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
if(cljs.core.truth_(inst_30103)){
var statearr_30123_30145 = state_30114__$1;
(statearr_30123_30145[(1)] = (12));

} else {
var statearr_30124_30146 = state_30114__$1;
(statearr_30124_30146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (9))){
var state_30114__$1 = state_30114;
var statearr_30125_30147 = state_30114__$1;
(statearr_30125_30147[(2)] = null);

(statearr_30125_30147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (5))){
var state_30114__$1 = state_30114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30126_30148 = state_30114__$1;
(statearr_30126_30148[(1)] = (8));

} else {
var statearr_30127_30149 = state_30114__$1;
(statearr_30127_30149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (14))){
var inst_30108 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30128_30150 = state_30114__$1;
(statearr_30128_30150[(2)] = inst_30108);

(statearr_30128_30150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (10))){
var inst_30100 = (state_30114[(2)]);
var state_30114__$1 = state_30114;
var statearr_30129_30151 = state_30114__$1;
(statearr_30129_30151[(2)] = inst_30100);

(statearr_30129_30151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30115 === (8))){
var inst_30097 = cljs.core.async.close_BANG_.call(null,to);
var state_30114__$1 = state_30114;
var statearr_30130_30152 = state_30114__$1;
(statearr_30130_30152[(2)] = inst_30097);

(statearr_30130_30152[(1)] = (10));


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
});})(c__18618__auto___30138))
;
return ((function (switch__18562__auto__,c__18618__auto___30138){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30134 = [null,null,null,null,null,null,null,null];
(statearr_30134[(0)] = state_machine__18563__auto__);

(statearr_30134[(1)] = (1));

return statearr_30134;
});
var state_machine__18563__auto____1 = (function (state_30114){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30135){if((e30135 instanceof Object)){
var ex__18566__auto__ = e30135;
var statearr_30136_30153 = state_30114;
(statearr_30136_30153[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30154 = state_30114;
state_30114 = G__30154;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30114){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___30138))
})();
var state__18620__auto__ = (function (){var statearr_30137 = f__18619__auto__.call(null);
(statearr_30137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30138);

return statearr_30137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___30138))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30338){
var vec__30339 = p__30338;
var v = cljs.core.nth.call(null,vec__30339,(0),null);
var p = cljs.core.nth.call(null,vec__30339,(1),null);
var job = vec__30339;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18618__auto___30521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___30521,res,vec__30339,v,p,job,jobs,results){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___30521,res,vec__30339,v,p,job,jobs,results){
return (function (state_30344){
var state_val_30345 = (state_30344[(1)]);
if((state_val_30345 === (2))){
var inst_30341 = (state_30344[(2)]);
var inst_30342 = cljs.core.async.close_BANG_.call(null,res);
var state_30344__$1 = (function (){var statearr_30346 = state_30344;
(statearr_30346[(7)] = inst_30341);

return statearr_30346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30344__$1,inst_30342);
} else {
if((state_val_30345 === (1))){
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30344__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18618__auto___30521,res,vec__30339,v,p,job,jobs,results))
;
return ((function (switch__18562__auto__,c__18618__auto___30521,res,vec__30339,v,p,job,jobs,results){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30350 = [null,null,null,null,null,null,null,null];
(statearr_30350[(0)] = state_machine__18563__auto__);

(statearr_30350[(1)] = (1));

return statearr_30350;
});
var state_machine__18563__auto____1 = (function (state_30344){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30351){if((e30351 instanceof Object)){
var ex__18566__auto__ = e30351;
var statearr_30352_30522 = state_30344;
(statearr_30352_30522[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30523 = state_30344;
state_30344 = G__30523;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30344){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___30521,res,vec__30339,v,p,job,jobs,results))
})();
var state__18620__auto__ = (function (){var statearr_30353 = f__18619__auto__.call(null);
(statearr_30353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30521);

return statearr_30353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___30521,res,vec__30339,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30354){
var vec__30355 = p__30354;
var v = cljs.core.nth.call(null,vec__30355,(0),null);
var p = cljs.core.nth.call(null,vec__30355,(1),null);
var job = vec__30355;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17032__auto___30524 = n;
var __30525 = (0);
while(true){
if((__30525 < n__17032__auto___30524)){
var G__30356_30526 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30356_30526) {
case "async":
var c__18618__auto___30528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30525,c__18618__auto___30528,G__30356_30526,n__17032__auto___30524,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (__30525,c__18618__auto___30528,G__30356_30526,n__17032__auto___30524,jobs,results,process,async){
return (function (state_30369){
var state_val_30370 = (state_30369[(1)]);
if((state_val_30370 === (7))){
var inst_30365 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
var statearr_30371_30529 = state_30369__$1;
(statearr_30371_30529[(2)] = inst_30365);

(statearr_30371_30529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (6))){
var state_30369__$1 = state_30369;
var statearr_30372_30530 = state_30369__$1;
(statearr_30372_30530[(2)] = null);

(statearr_30372_30530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (5))){
var state_30369__$1 = state_30369;
var statearr_30373_30531 = state_30369__$1;
(statearr_30373_30531[(2)] = null);

(statearr_30373_30531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (4))){
var inst_30359 = (state_30369[(2)]);
var inst_30360 = async.call(null,inst_30359);
var state_30369__$1 = state_30369;
if(cljs.core.truth_(inst_30360)){
var statearr_30374_30532 = state_30369__$1;
(statearr_30374_30532[(1)] = (5));

} else {
var statearr_30375_30533 = state_30369__$1;
(statearr_30375_30533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (3))){
var inst_30367 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30369__$1,inst_30367);
} else {
if((state_val_30370 === (2))){
var state_30369__$1 = state_30369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30369__$1,(4),jobs);
} else {
if((state_val_30370 === (1))){
var state_30369__$1 = state_30369;
var statearr_30376_30534 = state_30369__$1;
(statearr_30376_30534[(2)] = null);

(statearr_30376_30534[(1)] = (2));


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
});})(__30525,c__18618__auto___30528,G__30356_30526,n__17032__auto___30524,jobs,results,process,async))
;
return ((function (__30525,switch__18562__auto__,c__18618__auto___30528,G__30356_30526,n__17032__auto___30524,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30380 = [null,null,null,null,null,null,null];
(statearr_30380[(0)] = state_machine__18563__auto__);

(statearr_30380[(1)] = (1));

return statearr_30380;
});
var state_machine__18563__auto____1 = (function (state_30369){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30381){if((e30381 instanceof Object)){
var ex__18566__auto__ = e30381;
var statearr_30382_30535 = state_30369;
(statearr_30382_30535[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30536 = state_30369;
state_30369 = G__30536;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30369){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(__30525,switch__18562__auto__,c__18618__auto___30528,G__30356_30526,n__17032__auto___30524,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_30383 = f__18619__auto__.call(null);
(statearr_30383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30528);

return statearr_30383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(__30525,c__18618__auto___30528,G__30356_30526,n__17032__auto___30524,jobs,results,process,async))
);


break;
case "compute":
var c__18618__auto___30537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30525,c__18618__auto___30537,G__30356_30526,n__17032__auto___30524,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (__30525,c__18618__auto___30537,G__30356_30526,n__17032__auto___30524,jobs,results,process,async){
return (function (state_30396){
var state_val_30397 = (state_30396[(1)]);
if((state_val_30397 === (7))){
var inst_30392 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
var statearr_30398_30538 = state_30396__$1;
(statearr_30398_30538[(2)] = inst_30392);

(statearr_30398_30538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (6))){
var state_30396__$1 = state_30396;
var statearr_30399_30539 = state_30396__$1;
(statearr_30399_30539[(2)] = null);

(statearr_30399_30539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (5))){
var state_30396__$1 = state_30396;
var statearr_30400_30540 = state_30396__$1;
(statearr_30400_30540[(2)] = null);

(statearr_30400_30540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (4))){
var inst_30386 = (state_30396[(2)]);
var inst_30387 = process.call(null,inst_30386);
var state_30396__$1 = state_30396;
if(cljs.core.truth_(inst_30387)){
var statearr_30401_30541 = state_30396__$1;
(statearr_30401_30541[(1)] = (5));

} else {
var statearr_30402_30542 = state_30396__$1;
(statearr_30402_30542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (3))){
var inst_30394 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30396__$1,inst_30394);
} else {
if((state_val_30397 === (2))){
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30396__$1,(4),jobs);
} else {
if((state_val_30397 === (1))){
var state_30396__$1 = state_30396;
var statearr_30403_30543 = state_30396__$1;
(statearr_30403_30543[(2)] = null);

(statearr_30403_30543[(1)] = (2));


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
});})(__30525,c__18618__auto___30537,G__30356_30526,n__17032__auto___30524,jobs,results,process,async))
;
return ((function (__30525,switch__18562__auto__,c__18618__auto___30537,G__30356_30526,n__17032__auto___30524,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null];
(statearr_30407[(0)] = state_machine__18563__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var state_machine__18563__auto____1 = (function (state_30396){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__18566__auto__ = e30408;
var statearr_30409_30544 = state_30396;
(statearr_30409_30544[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30545 = state_30396;
state_30396 = G__30545;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30396){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(__30525,switch__18562__auto__,c__18618__auto___30537,G__30356_30526,n__17032__auto___30524,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_30410 = f__18619__auto__.call(null);
(statearr_30410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30537);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(__30525,c__18618__auto___30537,G__30356_30526,n__17032__auto___30524,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30546 = (__30525 + (1));
__30525 = G__30546;
continue;
} else {
}
break;
}

var c__18618__auto___30547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___30547,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___30547,jobs,results,process,async){
return (function (state_30432){
var state_val_30433 = (state_30432[(1)]);
if((state_val_30433 === (9))){
var inst_30425 = (state_30432[(2)]);
var state_30432__$1 = (function (){var statearr_30434 = state_30432;
(statearr_30434[(7)] = inst_30425);

return statearr_30434;
})();
var statearr_30435_30548 = state_30432__$1;
(statearr_30435_30548[(2)] = null);

(statearr_30435_30548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (8))){
var inst_30418 = (state_30432[(8)]);
var inst_30423 = (state_30432[(2)]);
var state_30432__$1 = (function (){var statearr_30436 = state_30432;
(statearr_30436[(9)] = inst_30423);

return statearr_30436;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30432__$1,(9),results,inst_30418);
} else {
if((state_val_30433 === (7))){
var inst_30428 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30437_30549 = state_30432__$1;
(statearr_30437_30549[(2)] = inst_30428);

(statearr_30437_30549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (6))){
var inst_30418 = (state_30432[(8)]);
var inst_30413 = (state_30432[(10)]);
var inst_30418__$1 = cljs.core.async.chan.call(null,(1));
var inst_30419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30420 = [inst_30413,inst_30418__$1];
var inst_30421 = (new cljs.core.PersistentVector(null,2,(5),inst_30419,inst_30420,null));
var state_30432__$1 = (function (){var statearr_30438 = state_30432;
(statearr_30438[(8)] = inst_30418__$1);

return statearr_30438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30432__$1,(8),jobs,inst_30421);
} else {
if((state_val_30433 === (5))){
var inst_30416 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30432__$1 = state_30432;
var statearr_30439_30550 = state_30432__$1;
(statearr_30439_30550[(2)] = inst_30416);

(statearr_30439_30550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (4))){
var inst_30413 = (state_30432[(10)]);
var inst_30413__$1 = (state_30432[(2)]);
var inst_30414 = (inst_30413__$1 == null);
var state_30432__$1 = (function (){var statearr_30440 = state_30432;
(statearr_30440[(10)] = inst_30413__$1);

return statearr_30440;
})();
if(cljs.core.truth_(inst_30414)){
var statearr_30441_30551 = state_30432__$1;
(statearr_30441_30551[(1)] = (5));

} else {
var statearr_30442_30552 = state_30432__$1;
(statearr_30442_30552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (3))){
var inst_30430 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30432__$1,inst_30430);
} else {
if((state_val_30433 === (2))){
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(4),from);
} else {
if((state_val_30433 === (1))){
var state_30432__$1 = state_30432;
var statearr_30443_30553 = state_30432__$1;
(statearr_30443_30553[(2)] = null);

(statearr_30443_30553[(1)] = (2));


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
});})(c__18618__auto___30547,jobs,results,process,async))
;
return ((function (switch__18562__auto__,c__18618__auto___30547,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30447[(0)] = state_machine__18563__auto__);

(statearr_30447[(1)] = (1));

return statearr_30447;
});
var state_machine__18563__auto____1 = (function (state_30432){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30448){if((e30448 instanceof Object)){
var ex__18566__auto__ = e30448;
var statearr_30449_30554 = state_30432;
(statearr_30449_30554[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30555 = state_30432;
state_30432 = G__30555;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30432){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___30547,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_30450 = f__18619__auto__.call(null);
(statearr_30450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30547);

return statearr_30450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___30547,jobs,results,process,async))
);


var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,jobs,results,process,async){
return (function (state_30488){
var state_val_30489 = (state_30488[(1)]);
if((state_val_30489 === (7))){
var inst_30484 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30490_30556 = state_30488__$1;
(statearr_30490_30556[(2)] = inst_30484);

(statearr_30490_30556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (20))){
var state_30488__$1 = state_30488;
var statearr_30491_30557 = state_30488__$1;
(statearr_30491_30557[(2)] = null);

(statearr_30491_30557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (1))){
var state_30488__$1 = state_30488;
var statearr_30492_30558 = state_30488__$1;
(statearr_30492_30558[(2)] = null);

(statearr_30492_30558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (4))){
var inst_30453 = (state_30488[(7)]);
var inst_30453__$1 = (state_30488[(2)]);
var inst_30454 = (inst_30453__$1 == null);
var state_30488__$1 = (function (){var statearr_30493 = state_30488;
(statearr_30493[(7)] = inst_30453__$1);

return statearr_30493;
})();
if(cljs.core.truth_(inst_30454)){
var statearr_30494_30559 = state_30488__$1;
(statearr_30494_30559[(1)] = (5));

} else {
var statearr_30495_30560 = state_30488__$1;
(statearr_30495_30560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (15))){
var inst_30466 = (state_30488[(8)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30488__$1,(18),to,inst_30466);
} else {
if((state_val_30489 === (21))){
var inst_30479 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30496_30561 = state_30488__$1;
(statearr_30496_30561[(2)] = inst_30479);

(statearr_30496_30561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (13))){
var inst_30481 = (state_30488[(2)]);
var state_30488__$1 = (function (){var statearr_30497 = state_30488;
(statearr_30497[(9)] = inst_30481);

return statearr_30497;
})();
var statearr_30498_30562 = state_30488__$1;
(statearr_30498_30562[(2)] = null);

(statearr_30498_30562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (6))){
var inst_30453 = (state_30488[(7)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30488__$1,(11),inst_30453);
} else {
if((state_val_30489 === (17))){
var inst_30474 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
if(cljs.core.truth_(inst_30474)){
var statearr_30499_30563 = state_30488__$1;
(statearr_30499_30563[(1)] = (19));

} else {
var statearr_30500_30564 = state_30488__$1;
(statearr_30500_30564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (3))){
var inst_30486 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30488__$1,inst_30486);
} else {
if((state_val_30489 === (12))){
var inst_30463 = (state_30488[(10)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30488__$1,(14),inst_30463);
} else {
if((state_val_30489 === (2))){
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30488__$1,(4),results);
} else {
if((state_val_30489 === (19))){
var state_30488__$1 = state_30488;
var statearr_30501_30565 = state_30488__$1;
(statearr_30501_30565[(2)] = null);

(statearr_30501_30565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (11))){
var inst_30463 = (state_30488[(2)]);
var state_30488__$1 = (function (){var statearr_30502 = state_30488;
(statearr_30502[(10)] = inst_30463);

return statearr_30502;
})();
var statearr_30503_30566 = state_30488__$1;
(statearr_30503_30566[(2)] = null);

(statearr_30503_30566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (9))){
var state_30488__$1 = state_30488;
var statearr_30504_30567 = state_30488__$1;
(statearr_30504_30567[(2)] = null);

(statearr_30504_30567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (5))){
var state_30488__$1 = state_30488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30505_30568 = state_30488__$1;
(statearr_30505_30568[(1)] = (8));

} else {
var statearr_30506_30569 = state_30488__$1;
(statearr_30506_30569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (14))){
var inst_30466 = (state_30488[(8)]);
var inst_30468 = (state_30488[(11)]);
var inst_30466__$1 = (state_30488[(2)]);
var inst_30467 = (inst_30466__$1 == null);
var inst_30468__$1 = cljs.core.not.call(null,inst_30467);
var state_30488__$1 = (function (){var statearr_30507 = state_30488;
(statearr_30507[(8)] = inst_30466__$1);

(statearr_30507[(11)] = inst_30468__$1);

return statearr_30507;
})();
if(inst_30468__$1){
var statearr_30508_30570 = state_30488__$1;
(statearr_30508_30570[(1)] = (15));

} else {
var statearr_30509_30571 = state_30488__$1;
(statearr_30509_30571[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (16))){
var inst_30468 = (state_30488[(11)]);
var state_30488__$1 = state_30488;
var statearr_30510_30572 = state_30488__$1;
(statearr_30510_30572[(2)] = inst_30468);

(statearr_30510_30572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (10))){
var inst_30460 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30511_30573 = state_30488__$1;
(statearr_30511_30573[(2)] = inst_30460);

(statearr_30511_30573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (18))){
var inst_30471 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30512_30574 = state_30488__$1;
(statearr_30512_30574[(2)] = inst_30471);

(statearr_30512_30574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (8))){
var inst_30457 = cljs.core.async.close_BANG_.call(null,to);
var state_30488__$1 = state_30488;
var statearr_30513_30575 = state_30488__$1;
(statearr_30513_30575[(2)] = inst_30457);

(statearr_30513_30575[(1)] = (10));


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
});})(c__18618__auto__,jobs,results,process,async))
;
return ((function (switch__18562__auto__,c__18618__auto__,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30517[(0)] = state_machine__18563__auto__);

(statearr_30517[(1)] = (1));

return statearr_30517;
});
var state_machine__18563__auto____1 = (function (state_30488){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30518){if((e30518 instanceof Object)){
var ex__18566__auto__ = e30518;
var statearr_30519_30576 = state_30488;
(statearr_30519_30576[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30577 = state_30488;
state_30488 = G__30577;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30488){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_30520 = f__18619__auto__.call(null);
(statearr_30520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_30520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__,jobs,results,process,async))
);

return c__18618__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18618__auto___30678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___30678,tc,fc){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___30678,tc,fc){
return (function (state_30653){
var state_val_30654 = (state_30653[(1)]);
if((state_val_30654 === (7))){
var inst_30649 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30655_30679 = state_30653__$1;
(statearr_30655_30679[(2)] = inst_30649);

(statearr_30655_30679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (1))){
var state_30653__$1 = state_30653;
var statearr_30656_30680 = state_30653__$1;
(statearr_30656_30680[(2)] = null);

(statearr_30656_30680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (4))){
var inst_30630 = (state_30653[(7)]);
var inst_30630__$1 = (state_30653[(2)]);
var inst_30631 = (inst_30630__$1 == null);
var state_30653__$1 = (function (){var statearr_30657 = state_30653;
(statearr_30657[(7)] = inst_30630__$1);

return statearr_30657;
})();
if(cljs.core.truth_(inst_30631)){
var statearr_30658_30681 = state_30653__$1;
(statearr_30658_30681[(1)] = (5));

} else {
var statearr_30659_30682 = state_30653__$1;
(statearr_30659_30682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (13))){
var state_30653__$1 = state_30653;
var statearr_30660_30683 = state_30653__$1;
(statearr_30660_30683[(2)] = null);

(statearr_30660_30683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (6))){
var inst_30630 = (state_30653[(7)]);
var inst_30636 = p.call(null,inst_30630);
var state_30653__$1 = state_30653;
if(cljs.core.truth_(inst_30636)){
var statearr_30661_30684 = state_30653__$1;
(statearr_30661_30684[(1)] = (9));

} else {
var statearr_30662_30685 = state_30653__$1;
(statearr_30662_30685[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (3))){
var inst_30651 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30653__$1,inst_30651);
} else {
if((state_val_30654 === (12))){
var state_30653__$1 = state_30653;
var statearr_30663_30686 = state_30653__$1;
(statearr_30663_30686[(2)] = null);

(statearr_30663_30686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (2))){
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30653__$1,(4),ch);
} else {
if((state_val_30654 === (11))){
var inst_30630 = (state_30653[(7)]);
var inst_30640 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30653__$1,(8),inst_30640,inst_30630);
} else {
if((state_val_30654 === (9))){
var state_30653__$1 = state_30653;
var statearr_30664_30687 = state_30653__$1;
(statearr_30664_30687[(2)] = tc);

(statearr_30664_30687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (5))){
var inst_30633 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30634 = cljs.core.async.close_BANG_.call(null,fc);
var state_30653__$1 = (function (){var statearr_30665 = state_30653;
(statearr_30665[(8)] = inst_30633);

return statearr_30665;
})();
var statearr_30666_30688 = state_30653__$1;
(statearr_30666_30688[(2)] = inst_30634);

(statearr_30666_30688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (14))){
var inst_30647 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30667_30689 = state_30653__$1;
(statearr_30667_30689[(2)] = inst_30647);

(statearr_30667_30689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (10))){
var state_30653__$1 = state_30653;
var statearr_30668_30690 = state_30653__$1;
(statearr_30668_30690[(2)] = fc);

(statearr_30668_30690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (8))){
var inst_30642 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
if(cljs.core.truth_(inst_30642)){
var statearr_30669_30691 = state_30653__$1;
(statearr_30669_30691[(1)] = (12));

} else {
var statearr_30670_30692 = state_30653__$1;
(statearr_30670_30692[(1)] = (13));

}

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
});})(c__18618__auto___30678,tc,fc))
;
return ((function (switch__18562__auto__,c__18618__auto___30678,tc,fc){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30674 = [null,null,null,null,null,null,null,null,null];
(statearr_30674[(0)] = state_machine__18563__auto__);

(statearr_30674[(1)] = (1));

return statearr_30674;
});
var state_machine__18563__auto____1 = (function (state_30653){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30675){if((e30675 instanceof Object)){
var ex__18566__auto__ = e30675;
var statearr_30676_30693 = state_30653;
(statearr_30676_30693[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30694 = state_30653;
state_30653 = G__30694;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30653){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___30678,tc,fc))
})();
var state__18620__auto__ = (function (){var statearr_30677 = f__18619__auto__.call(null);
(statearr_30677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30678);

return statearr_30677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___30678,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_30741){
var state_val_30742 = (state_30741[(1)]);
if((state_val_30742 === (7))){
var inst_30737 = (state_30741[(2)]);
var state_30741__$1 = state_30741;
var statearr_30743_30759 = state_30741__$1;
(statearr_30743_30759[(2)] = inst_30737);

(statearr_30743_30759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30742 === (6))){
var inst_30730 = (state_30741[(7)]);
var inst_30727 = (state_30741[(8)]);
var inst_30734 = f.call(null,inst_30727,inst_30730);
var inst_30727__$1 = inst_30734;
var state_30741__$1 = (function (){var statearr_30744 = state_30741;
(statearr_30744[(8)] = inst_30727__$1);

return statearr_30744;
})();
var statearr_30745_30760 = state_30741__$1;
(statearr_30745_30760[(2)] = null);

(statearr_30745_30760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30742 === (5))){
var inst_30727 = (state_30741[(8)]);
var state_30741__$1 = state_30741;
var statearr_30746_30761 = state_30741__$1;
(statearr_30746_30761[(2)] = inst_30727);

(statearr_30746_30761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30742 === (4))){
var inst_30730 = (state_30741[(7)]);
var inst_30730__$1 = (state_30741[(2)]);
var inst_30731 = (inst_30730__$1 == null);
var state_30741__$1 = (function (){var statearr_30747 = state_30741;
(statearr_30747[(7)] = inst_30730__$1);

return statearr_30747;
})();
if(cljs.core.truth_(inst_30731)){
var statearr_30748_30762 = state_30741__$1;
(statearr_30748_30762[(1)] = (5));

} else {
var statearr_30749_30763 = state_30741__$1;
(statearr_30749_30763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30742 === (3))){
var inst_30739 = (state_30741[(2)]);
var state_30741__$1 = state_30741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30741__$1,inst_30739);
} else {
if((state_val_30742 === (2))){
var state_30741__$1 = state_30741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30741__$1,(4),ch);
} else {
if((state_val_30742 === (1))){
var inst_30727 = init;
var state_30741__$1 = (function (){var statearr_30750 = state_30741;
(statearr_30750[(8)] = inst_30727);

return statearr_30750;
})();
var statearr_30751_30764 = state_30741__$1;
(statearr_30751_30764[(2)] = null);

(statearr_30751_30764[(1)] = (2));


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
});})(c__18618__auto__))
;
return ((function (switch__18562__auto__,c__18618__auto__){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30755 = [null,null,null,null,null,null,null,null,null];
(statearr_30755[(0)] = state_machine__18563__auto__);

(statearr_30755[(1)] = (1));

return statearr_30755;
});
var state_machine__18563__auto____1 = (function (state_30741){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30756){if((e30756 instanceof Object)){
var ex__18566__auto__ = e30756;
var statearr_30757_30765 = state_30741;
(statearr_30757_30765[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30766 = state_30741;
state_30741 = G__30766;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30741){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_30758 = f__18619__auto__.call(null);
(statearr_30758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_30840){
var state_val_30841 = (state_30840[(1)]);
if((state_val_30841 === (7))){
var inst_30822 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30842_30865 = state_30840__$1;
(statearr_30842_30865[(2)] = inst_30822);

(statearr_30842_30865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (1))){
var inst_30816 = cljs.core.seq.call(null,coll);
var inst_30817 = inst_30816;
var state_30840__$1 = (function (){var statearr_30843 = state_30840;
(statearr_30843[(7)] = inst_30817);

return statearr_30843;
})();
var statearr_30844_30866 = state_30840__$1;
(statearr_30844_30866[(2)] = null);

(statearr_30844_30866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (4))){
var inst_30817 = (state_30840[(7)]);
var inst_30820 = cljs.core.first.call(null,inst_30817);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30840__$1,(7),ch,inst_30820);
} else {
if((state_val_30841 === (13))){
var inst_30834 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30845_30867 = state_30840__$1;
(statearr_30845_30867[(2)] = inst_30834);

(statearr_30845_30867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (6))){
var inst_30825 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30825)){
var statearr_30846_30868 = state_30840__$1;
(statearr_30846_30868[(1)] = (8));

} else {
var statearr_30847_30869 = state_30840__$1;
(statearr_30847_30869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (3))){
var inst_30838 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30840__$1,inst_30838);
} else {
if((state_val_30841 === (12))){
var state_30840__$1 = state_30840;
var statearr_30848_30870 = state_30840__$1;
(statearr_30848_30870[(2)] = null);

(statearr_30848_30870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (2))){
var inst_30817 = (state_30840[(7)]);
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30817)){
var statearr_30849_30871 = state_30840__$1;
(statearr_30849_30871[(1)] = (4));

} else {
var statearr_30850_30872 = state_30840__$1;
(statearr_30850_30872[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (11))){
var inst_30831 = cljs.core.async.close_BANG_.call(null,ch);
var state_30840__$1 = state_30840;
var statearr_30851_30873 = state_30840__$1;
(statearr_30851_30873[(2)] = inst_30831);

(statearr_30851_30873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (9))){
var state_30840__$1 = state_30840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30852_30874 = state_30840__$1;
(statearr_30852_30874[(1)] = (11));

} else {
var statearr_30853_30875 = state_30840__$1;
(statearr_30853_30875[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (5))){
var inst_30817 = (state_30840[(7)]);
var state_30840__$1 = state_30840;
var statearr_30854_30876 = state_30840__$1;
(statearr_30854_30876[(2)] = inst_30817);

(statearr_30854_30876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (10))){
var inst_30836 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30855_30877 = state_30840__$1;
(statearr_30855_30877[(2)] = inst_30836);

(statearr_30855_30877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (8))){
var inst_30817 = (state_30840[(7)]);
var inst_30827 = cljs.core.next.call(null,inst_30817);
var inst_30817__$1 = inst_30827;
var state_30840__$1 = (function (){var statearr_30856 = state_30840;
(statearr_30856[(7)] = inst_30817__$1);

return statearr_30856;
})();
var statearr_30857_30878 = state_30840__$1;
(statearr_30857_30878[(2)] = null);

(statearr_30857_30878[(1)] = (2));


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
});})(c__18618__auto__))
;
return ((function (switch__18562__auto__,c__18618__auto__){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30861 = [null,null,null,null,null,null,null,null];
(statearr_30861[(0)] = state_machine__18563__auto__);

(statearr_30861[(1)] = (1));

return statearr_30861;
});
var state_machine__18563__auto____1 = (function (state_30840){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30862){if((e30862 instanceof Object)){
var ex__18566__auto__ = e30862;
var statearr_30863_30879 = state_30840;
(statearr_30863_30879[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30880 = state_30840;
state_30840 = G__30880;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30840){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_30864 = f__18619__auto__.call(null);
(statearr_30864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_30864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj30882 = {};
return obj30882;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__16133__auto__ = _;
if(and__16133__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16789__auto__ = (((_ == null))?null:_);
return (function (){var or__16145__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj30884 = {};
return obj30884;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t31106 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31106 = (function (cs,ch,mult,meta31107){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31107 = meta31107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31106.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31106.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31106.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31106.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31106.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31108){
var self__ = this;
var _31108__$1 = this;
return self__.meta31107;
});})(cs))
;

cljs.core.async.t31106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31108,meta31107__$1){
var self__ = this;
var _31108__$1 = this;
return (new cljs.core.async.t31106(self__.cs,self__.ch,self__.mult,meta31107__$1));
});})(cs))
;

cljs.core.async.t31106.cljs$lang$type = true;

cljs.core.async.t31106.cljs$lang$ctorStr = "cljs.core.async/t31106";

cljs.core.async.t31106.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31106");
});})(cs))
;

cljs.core.async.__GT_t31106 = ((function (cs){
return (function __GT_t31106(cs__$1,ch__$1,mult__$1,meta31107){
return (new cljs.core.async.t31106(cs__$1,ch__$1,mult__$1,meta31107));
});})(cs))
;

}

return (new cljs.core.async.t31106(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18618__auto___31327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31327,cs,m,dchan,dctr,done){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31327,cs,m,dchan,dctr,done){
return (function (state_31239){
var state_val_31240 = (state_31239[(1)]);
if((state_val_31240 === (7))){
var inst_31235 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31241_31328 = state_31239__$1;
(statearr_31241_31328[(2)] = inst_31235);

(statearr_31241_31328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (20))){
var inst_31140 = (state_31239[(7)]);
var inst_31150 = cljs.core.first.call(null,inst_31140);
var inst_31151 = cljs.core.nth.call(null,inst_31150,(0),null);
var inst_31152 = cljs.core.nth.call(null,inst_31150,(1),null);
var state_31239__$1 = (function (){var statearr_31242 = state_31239;
(statearr_31242[(8)] = inst_31151);

return statearr_31242;
})();
if(cljs.core.truth_(inst_31152)){
var statearr_31243_31329 = state_31239__$1;
(statearr_31243_31329[(1)] = (22));

} else {
var statearr_31244_31330 = state_31239__$1;
(statearr_31244_31330[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (27))){
var inst_31187 = (state_31239[(9)]);
var inst_31182 = (state_31239[(10)]);
var inst_31111 = (state_31239[(11)]);
var inst_31180 = (state_31239[(12)]);
var inst_31187__$1 = cljs.core._nth.call(null,inst_31180,inst_31182);
var inst_31188 = cljs.core.async.put_BANG_.call(null,inst_31187__$1,inst_31111,done);
var state_31239__$1 = (function (){var statearr_31245 = state_31239;
(statearr_31245[(9)] = inst_31187__$1);

return statearr_31245;
})();
if(cljs.core.truth_(inst_31188)){
var statearr_31246_31331 = state_31239__$1;
(statearr_31246_31331[(1)] = (30));

} else {
var statearr_31247_31332 = state_31239__$1;
(statearr_31247_31332[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (1))){
var state_31239__$1 = state_31239;
var statearr_31248_31333 = state_31239__$1;
(statearr_31248_31333[(2)] = null);

(statearr_31248_31333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (24))){
var inst_31140 = (state_31239[(7)]);
var inst_31157 = (state_31239[(2)]);
var inst_31158 = cljs.core.next.call(null,inst_31140);
var inst_31120 = inst_31158;
var inst_31121 = null;
var inst_31122 = (0);
var inst_31123 = (0);
var state_31239__$1 = (function (){var statearr_31249 = state_31239;
(statearr_31249[(13)] = inst_31123);

(statearr_31249[(14)] = inst_31122);

(statearr_31249[(15)] = inst_31157);

(statearr_31249[(16)] = inst_31121);

(statearr_31249[(17)] = inst_31120);

return statearr_31249;
})();
var statearr_31250_31334 = state_31239__$1;
(statearr_31250_31334[(2)] = null);

(statearr_31250_31334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (39))){
var state_31239__$1 = state_31239;
var statearr_31254_31335 = state_31239__$1;
(statearr_31254_31335[(2)] = null);

(statearr_31254_31335[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (4))){
var inst_31111 = (state_31239[(11)]);
var inst_31111__$1 = (state_31239[(2)]);
var inst_31112 = (inst_31111__$1 == null);
var state_31239__$1 = (function (){var statearr_31255 = state_31239;
(statearr_31255[(11)] = inst_31111__$1);

return statearr_31255;
})();
if(cljs.core.truth_(inst_31112)){
var statearr_31256_31336 = state_31239__$1;
(statearr_31256_31336[(1)] = (5));

} else {
var statearr_31257_31337 = state_31239__$1;
(statearr_31257_31337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (15))){
var inst_31123 = (state_31239[(13)]);
var inst_31122 = (state_31239[(14)]);
var inst_31121 = (state_31239[(16)]);
var inst_31120 = (state_31239[(17)]);
var inst_31136 = (state_31239[(2)]);
var inst_31137 = (inst_31123 + (1));
var tmp31251 = inst_31122;
var tmp31252 = inst_31121;
var tmp31253 = inst_31120;
var inst_31120__$1 = tmp31253;
var inst_31121__$1 = tmp31252;
var inst_31122__$1 = tmp31251;
var inst_31123__$1 = inst_31137;
var state_31239__$1 = (function (){var statearr_31258 = state_31239;
(statearr_31258[(13)] = inst_31123__$1);

(statearr_31258[(14)] = inst_31122__$1);

(statearr_31258[(18)] = inst_31136);

(statearr_31258[(16)] = inst_31121__$1);

(statearr_31258[(17)] = inst_31120__$1);

return statearr_31258;
})();
var statearr_31259_31338 = state_31239__$1;
(statearr_31259_31338[(2)] = null);

(statearr_31259_31338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (21))){
var inst_31161 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31263_31339 = state_31239__$1;
(statearr_31263_31339[(2)] = inst_31161);

(statearr_31263_31339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (31))){
var inst_31187 = (state_31239[(9)]);
var inst_31191 = done.call(null,null);
var inst_31192 = cljs.core.async.untap_STAR_.call(null,m,inst_31187);
var state_31239__$1 = (function (){var statearr_31264 = state_31239;
(statearr_31264[(19)] = inst_31191);

return statearr_31264;
})();
var statearr_31265_31340 = state_31239__$1;
(statearr_31265_31340[(2)] = inst_31192);

(statearr_31265_31340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (32))){
var inst_31181 = (state_31239[(20)]);
var inst_31182 = (state_31239[(10)]);
var inst_31179 = (state_31239[(21)]);
var inst_31180 = (state_31239[(12)]);
var inst_31194 = (state_31239[(2)]);
var inst_31195 = (inst_31182 + (1));
var tmp31260 = inst_31181;
var tmp31261 = inst_31179;
var tmp31262 = inst_31180;
var inst_31179__$1 = tmp31261;
var inst_31180__$1 = tmp31262;
var inst_31181__$1 = tmp31260;
var inst_31182__$1 = inst_31195;
var state_31239__$1 = (function (){var statearr_31266 = state_31239;
(statearr_31266[(22)] = inst_31194);

(statearr_31266[(20)] = inst_31181__$1);

(statearr_31266[(10)] = inst_31182__$1);

(statearr_31266[(21)] = inst_31179__$1);

(statearr_31266[(12)] = inst_31180__$1);

return statearr_31266;
})();
var statearr_31267_31341 = state_31239__$1;
(statearr_31267_31341[(2)] = null);

(statearr_31267_31341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (40))){
var inst_31207 = (state_31239[(23)]);
var inst_31211 = done.call(null,null);
var inst_31212 = cljs.core.async.untap_STAR_.call(null,m,inst_31207);
var state_31239__$1 = (function (){var statearr_31268 = state_31239;
(statearr_31268[(24)] = inst_31211);

return statearr_31268;
})();
var statearr_31269_31342 = state_31239__$1;
(statearr_31269_31342[(2)] = inst_31212);

(statearr_31269_31342[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (33))){
var inst_31198 = (state_31239[(25)]);
var inst_31200 = cljs.core.chunked_seq_QMARK_.call(null,inst_31198);
var state_31239__$1 = state_31239;
if(inst_31200){
var statearr_31270_31343 = state_31239__$1;
(statearr_31270_31343[(1)] = (36));

} else {
var statearr_31271_31344 = state_31239__$1;
(statearr_31271_31344[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (13))){
var inst_31130 = (state_31239[(26)]);
var inst_31133 = cljs.core.async.close_BANG_.call(null,inst_31130);
var state_31239__$1 = state_31239;
var statearr_31272_31345 = state_31239__$1;
(statearr_31272_31345[(2)] = inst_31133);

(statearr_31272_31345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (22))){
var inst_31151 = (state_31239[(8)]);
var inst_31154 = cljs.core.async.close_BANG_.call(null,inst_31151);
var state_31239__$1 = state_31239;
var statearr_31273_31346 = state_31239__$1;
(statearr_31273_31346[(2)] = inst_31154);

(statearr_31273_31346[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (36))){
var inst_31198 = (state_31239[(25)]);
var inst_31202 = cljs.core.chunk_first.call(null,inst_31198);
var inst_31203 = cljs.core.chunk_rest.call(null,inst_31198);
var inst_31204 = cljs.core.count.call(null,inst_31202);
var inst_31179 = inst_31203;
var inst_31180 = inst_31202;
var inst_31181 = inst_31204;
var inst_31182 = (0);
var state_31239__$1 = (function (){var statearr_31274 = state_31239;
(statearr_31274[(20)] = inst_31181);

(statearr_31274[(10)] = inst_31182);

(statearr_31274[(21)] = inst_31179);

(statearr_31274[(12)] = inst_31180);

return statearr_31274;
})();
var statearr_31275_31347 = state_31239__$1;
(statearr_31275_31347[(2)] = null);

(statearr_31275_31347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (41))){
var inst_31198 = (state_31239[(25)]);
var inst_31214 = (state_31239[(2)]);
var inst_31215 = cljs.core.next.call(null,inst_31198);
var inst_31179 = inst_31215;
var inst_31180 = null;
var inst_31181 = (0);
var inst_31182 = (0);
var state_31239__$1 = (function (){var statearr_31276 = state_31239;
(statearr_31276[(20)] = inst_31181);

(statearr_31276[(27)] = inst_31214);

(statearr_31276[(10)] = inst_31182);

(statearr_31276[(21)] = inst_31179);

(statearr_31276[(12)] = inst_31180);

return statearr_31276;
})();
var statearr_31277_31348 = state_31239__$1;
(statearr_31277_31348[(2)] = null);

(statearr_31277_31348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (43))){
var state_31239__$1 = state_31239;
var statearr_31278_31349 = state_31239__$1;
(statearr_31278_31349[(2)] = null);

(statearr_31278_31349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (29))){
var inst_31223 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31279_31350 = state_31239__$1;
(statearr_31279_31350[(2)] = inst_31223);

(statearr_31279_31350[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (44))){
var inst_31232 = (state_31239[(2)]);
var state_31239__$1 = (function (){var statearr_31280 = state_31239;
(statearr_31280[(28)] = inst_31232);

return statearr_31280;
})();
var statearr_31281_31351 = state_31239__$1;
(statearr_31281_31351[(2)] = null);

(statearr_31281_31351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (6))){
var inst_31171 = (state_31239[(29)]);
var inst_31170 = cljs.core.deref.call(null,cs);
var inst_31171__$1 = cljs.core.keys.call(null,inst_31170);
var inst_31172 = cljs.core.count.call(null,inst_31171__$1);
var inst_31173 = cljs.core.reset_BANG_.call(null,dctr,inst_31172);
var inst_31178 = cljs.core.seq.call(null,inst_31171__$1);
var inst_31179 = inst_31178;
var inst_31180 = null;
var inst_31181 = (0);
var inst_31182 = (0);
var state_31239__$1 = (function (){var statearr_31282 = state_31239;
(statearr_31282[(20)] = inst_31181);

(statearr_31282[(29)] = inst_31171__$1);

(statearr_31282[(10)] = inst_31182);

(statearr_31282[(21)] = inst_31179);

(statearr_31282[(30)] = inst_31173);

(statearr_31282[(12)] = inst_31180);

return statearr_31282;
})();
var statearr_31283_31352 = state_31239__$1;
(statearr_31283_31352[(2)] = null);

(statearr_31283_31352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (28))){
var inst_31198 = (state_31239[(25)]);
var inst_31179 = (state_31239[(21)]);
var inst_31198__$1 = cljs.core.seq.call(null,inst_31179);
var state_31239__$1 = (function (){var statearr_31284 = state_31239;
(statearr_31284[(25)] = inst_31198__$1);

return statearr_31284;
})();
if(inst_31198__$1){
var statearr_31285_31353 = state_31239__$1;
(statearr_31285_31353[(1)] = (33));

} else {
var statearr_31286_31354 = state_31239__$1;
(statearr_31286_31354[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (25))){
var inst_31181 = (state_31239[(20)]);
var inst_31182 = (state_31239[(10)]);
var inst_31184 = (inst_31182 < inst_31181);
var inst_31185 = inst_31184;
var state_31239__$1 = state_31239;
if(cljs.core.truth_(inst_31185)){
var statearr_31287_31355 = state_31239__$1;
(statearr_31287_31355[(1)] = (27));

} else {
var statearr_31288_31356 = state_31239__$1;
(statearr_31288_31356[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (34))){
var state_31239__$1 = state_31239;
var statearr_31289_31357 = state_31239__$1;
(statearr_31289_31357[(2)] = null);

(statearr_31289_31357[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (17))){
var state_31239__$1 = state_31239;
var statearr_31290_31358 = state_31239__$1;
(statearr_31290_31358[(2)] = null);

(statearr_31290_31358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (3))){
var inst_31237 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31239__$1,inst_31237);
} else {
if((state_val_31240 === (12))){
var inst_31166 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31291_31359 = state_31239__$1;
(statearr_31291_31359[(2)] = inst_31166);

(statearr_31291_31359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (2))){
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31239__$1,(4),ch);
} else {
if((state_val_31240 === (23))){
var state_31239__$1 = state_31239;
var statearr_31292_31360 = state_31239__$1;
(statearr_31292_31360[(2)] = null);

(statearr_31292_31360[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (35))){
var inst_31221 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31293_31361 = state_31239__$1;
(statearr_31293_31361[(2)] = inst_31221);

(statearr_31293_31361[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (19))){
var inst_31140 = (state_31239[(7)]);
var inst_31144 = cljs.core.chunk_first.call(null,inst_31140);
var inst_31145 = cljs.core.chunk_rest.call(null,inst_31140);
var inst_31146 = cljs.core.count.call(null,inst_31144);
var inst_31120 = inst_31145;
var inst_31121 = inst_31144;
var inst_31122 = inst_31146;
var inst_31123 = (0);
var state_31239__$1 = (function (){var statearr_31294 = state_31239;
(statearr_31294[(13)] = inst_31123);

(statearr_31294[(14)] = inst_31122);

(statearr_31294[(16)] = inst_31121);

(statearr_31294[(17)] = inst_31120);

return statearr_31294;
})();
var statearr_31295_31362 = state_31239__$1;
(statearr_31295_31362[(2)] = null);

(statearr_31295_31362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (11))){
var inst_31140 = (state_31239[(7)]);
var inst_31120 = (state_31239[(17)]);
var inst_31140__$1 = cljs.core.seq.call(null,inst_31120);
var state_31239__$1 = (function (){var statearr_31296 = state_31239;
(statearr_31296[(7)] = inst_31140__$1);

return statearr_31296;
})();
if(inst_31140__$1){
var statearr_31297_31363 = state_31239__$1;
(statearr_31297_31363[(1)] = (16));

} else {
var statearr_31298_31364 = state_31239__$1;
(statearr_31298_31364[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (9))){
var inst_31168 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31299_31365 = state_31239__$1;
(statearr_31299_31365[(2)] = inst_31168);

(statearr_31299_31365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (5))){
var inst_31118 = cljs.core.deref.call(null,cs);
var inst_31119 = cljs.core.seq.call(null,inst_31118);
var inst_31120 = inst_31119;
var inst_31121 = null;
var inst_31122 = (0);
var inst_31123 = (0);
var state_31239__$1 = (function (){var statearr_31300 = state_31239;
(statearr_31300[(13)] = inst_31123);

(statearr_31300[(14)] = inst_31122);

(statearr_31300[(16)] = inst_31121);

(statearr_31300[(17)] = inst_31120);

return statearr_31300;
})();
var statearr_31301_31366 = state_31239__$1;
(statearr_31301_31366[(2)] = null);

(statearr_31301_31366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (14))){
var state_31239__$1 = state_31239;
var statearr_31302_31367 = state_31239__$1;
(statearr_31302_31367[(2)] = null);

(statearr_31302_31367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (45))){
var inst_31229 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31303_31368 = state_31239__$1;
(statearr_31303_31368[(2)] = inst_31229);

(statearr_31303_31368[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (26))){
var inst_31171 = (state_31239[(29)]);
var inst_31225 = (state_31239[(2)]);
var inst_31226 = cljs.core.seq.call(null,inst_31171);
var state_31239__$1 = (function (){var statearr_31304 = state_31239;
(statearr_31304[(31)] = inst_31225);

return statearr_31304;
})();
if(inst_31226){
var statearr_31305_31369 = state_31239__$1;
(statearr_31305_31369[(1)] = (42));

} else {
var statearr_31306_31370 = state_31239__$1;
(statearr_31306_31370[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (16))){
var inst_31140 = (state_31239[(7)]);
var inst_31142 = cljs.core.chunked_seq_QMARK_.call(null,inst_31140);
var state_31239__$1 = state_31239;
if(inst_31142){
var statearr_31307_31371 = state_31239__$1;
(statearr_31307_31371[(1)] = (19));

} else {
var statearr_31308_31372 = state_31239__$1;
(statearr_31308_31372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (38))){
var inst_31218 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31309_31373 = state_31239__$1;
(statearr_31309_31373[(2)] = inst_31218);

(statearr_31309_31373[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (30))){
var state_31239__$1 = state_31239;
var statearr_31310_31374 = state_31239__$1;
(statearr_31310_31374[(2)] = null);

(statearr_31310_31374[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (10))){
var inst_31123 = (state_31239[(13)]);
var inst_31121 = (state_31239[(16)]);
var inst_31129 = cljs.core._nth.call(null,inst_31121,inst_31123);
var inst_31130 = cljs.core.nth.call(null,inst_31129,(0),null);
var inst_31131 = cljs.core.nth.call(null,inst_31129,(1),null);
var state_31239__$1 = (function (){var statearr_31311 = state_31239;
(statearr_31311[(26)] = inst_31130);

return statearr_31311;
})();
if(cljs.core.truth_(inst_31131)){
var statearr_31312_31375 = state_31239__$1;
(statearr_31312_31375[(1)] = (13));

} else {
var statearr_31313_31376 = state_31239__$1;
(statearr_31313_31376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (18))){
var inst_31164 = (state_31239[(2)]);
var state_31239__$1 = state_31239;
var statearr_31314_31377 = state_31239__$1;
(statearr_31314_31377[(2)] = inst_31164);

(statearr_31314_31377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (42))){
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31239__$1,(45),dchan);
} else {
if((state_val_31240 === (37))){
var inst_31207 = (state_31239[(23)]);
var inst_31198 = (state_31239[(25)]);
var inst_31111 = (state_31239[(11)]);
var inst_31207__$1 = cljs.core.first.call(null,inst_31198);
var inst_31208 = cljs.core.async.put_BANG_.call(null,inst_31207__$1,inst_31111,done);
var state_31239__$1 = (function (){var statearr_31315 = state_31239;
(statearr_31315[(23)] = inst_31207__$1);

return statearr_31315;
})();
if(cljs.core.truth_(inst_31208)){
var statearr_31316_31378 = state_31239__$1;
(statearr_31316_31378[(1)] = (39));

} else {
var statearr_31317_31379 = state_31239__$1;
(statearr_31317_31379[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31240 === (8))){
var inst_31123 = (state_31239[(13)]);
var inst_31122 = (state_31239[(14)]);
var inst_31125 = (inst_31123 < inst_31122);
var inst_31126 = inst_31125;
var state_31239__$1 = state_31239;
if(cljs.core.truth_(inst_31126)){
var statearr_31318_31380 = state_31239__$1;
(statearr_31318_31380[(1)] = (10));

} else {
var statearr_31319_31381 = state_31239__$1;
(statearr_31319_31381[(1)] = (11));

}

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
});})(c__18618__auto___31327,cs,m,dchan,dctr,done))
;
return ((function (switch__18562__auto__,c__18618__auto___31327,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31323[(0)] = state_machine__18563__auto__);

(statearr_31323[(1)] = (1));

return statearr_31323;
});
var state_machine__18563__auto____1 = (function (state_31239){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31324){if((e31324 instanceof Object)){
var ex__18566__auto__ = e31324;
var statearr_31325_31382 = state_31239;
(statearr_31325_31382[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31383 = state_31239;
state_31239 = G__31383;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31239){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31327,cs,m,dchan,dctr,done))
})();
var state__18620__auto__ = (function (){var statearr_31326 = f__18619__auto__.call(null);
(statearr_31326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31327);

return statearr_31326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31327,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj31385 = {};
return obj31385;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__16133__auto__ = m;
if(and__16133__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16789__auto__ = (((m == null))?null:m);
return (function (){var or__16145__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31386){
var map__31391 = p__31386;
var map__31391__$1 = ((cljs.core.seq_QMARK_.call(null,map__31391))?cljs.core.apply.call(null,cljs.core.hash_map,map__31391):map__31391);
var opts = map__31391__$1;
var statearr_31392_31395 = state;
(statearr_31392_31395[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31391,map__31391__$1,opts){
return (function (val){
var statearr_31393_31396 = state;
(statearr_31393_31396[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31391,map__31391__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31394_31397 = state;
(statearr_31394_31397[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31386 = null;
if (arguments.length > 3) {
var G__31398__i = 0, G__31398__a = new Array(arguments.length -  3);
while (G__31398__i < G__31398__a.length) {G__31398__a[G__31398__i] = arguments[G__31398__i + 3]; ++G__31398__i;}
  p__31386 = new cljs.core.IndexedSeq(G__31398__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31386);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31399){
var state = cljs.core.first(arglist__31399);
arglist__31399 = cljs.core.next(arglist__31399);
var cont_block = cljs.core.first(arglist__31399);
arglist__31399 = cljs.core.next(arglist__31399);
var ports = cljs.core.first(arglist__31399);
var p__31386 = cljs.core.rest(arglist__31399);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31386);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t31519 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31519 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31520){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31520 = meta31520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31519.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31519.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31519.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31519.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31519.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31519.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31519.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31521){
var self__ = this;
var _31521__$1 = this;
return self__.meta31520;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31521,meta31520__$1){
var self__ = this;
var _31521__$1 = this;
return (new cljs.core.async.t31519(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31520__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31519.cljs$lang$type = true;

cljs.core.async.t31519.cljs$lang$ctorStr = "cljs.core.async/t31519";

cljs.core.async.t31519.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31519");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31519 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31519(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31520){
return (new cljs.core.async.t31519(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31520));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31519(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18618__auto___31638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31591){
var state_val_31592 = (state_31591[(1)]);
if((state_val_31592 === (7))){
var inst_31535 = (state_31591[(7)]);
var inst_31540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31535);
var state_31591__$1 = state_31591;
var statearr_31593_31639 = state_31591__$1;
(statearr_31593_31639[(2)] = inst_31540);

(statearr_31593_31639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (20))){
var inst_31550 = (state_31591[(8)]);
var state_31591__$1 = state_31591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31591__$1,(23),out,inst_31550);
} else {
if((state_val_31592 === (1))){
var inst_31525 = (state_31591[(9)]);
var inst_31525__$1 = calc_state.call(null);
var inst_31526 = cljs.core.seq_QMARK_.call(null,inst_31525__$1);
var state_31591__$1 = (function (){var statearr_31594 = state_31591;
(statearr_31594[(9)] = inst_31525__$1);

return statearr_31594;
})();
if(inst_31526){
var statearr_31595_31640 = state_31591__$1;
(statearr_31595_31640[(1)] = (2));

} else {
var statearr_31596_31641 = state_31591__$1;
(statearr_31596_31641[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (24))){
var inst_31543 = (state_31591[(10)]);
var inst_31535 = inst_31543;
var state_31591__$1 = (function (){var statearr_31597 = state_31591;
(statearr_31597[(7)] = inst_31535);

return statearr_31597;
})();
var statearr_31598_31642 = state_31591__$1;
(statearr_31598_31642[(2)] = null);

(statearr_31598_31642[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (4))){
var inst_31525 = (state_31591[(9)]);
var inst_31531 = (state_31591[(2)]);
var inst_31532 = cljs.core.get.call(null,inst_31531,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31533 = cljs.core.get.call(null,inst_31531,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31534 = cljs.core.get.call(null,inst_31531,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31535 = inst_31525;
var state_31591__$1 = (function (){var statearr_31599 = state_31591;
(statearr_31599[(11)] = inst_31533);

(statearr_31599[(7)] = inst_31535);

(statearr_31599[(12)] = inst_31532);

(statearr_31599[(13)] = inst_31534);

return statearr_31599;
})();
var statearr_31600_31643 = state_31591__$1;
(statearr_31600_31643[(2)] = null);

(statearr_31600_31643[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (15))){
var state_31591__$1 = state_31591;
var statearr_31601_31644 = state_31591__$1;
(statearr_31601_31644[(2)] = null);

(statearr_31601_31644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (21))){
var inst_31543 = (state_31591[(10)]);
var inst_31535 = inst_31543;
var state_31591__$1 = (function (){var statearr_31602 = state_31591;
(statearr_31602[(7)] = inst_31535);

return statearr_31602;
})();
var statearr_31603_31645 = state_31591__$1;
(statearr_31603_31645[(2)] = null);

(statearr_31603_31645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (13))){
var inst_31587 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
var statearr_31604_31646 = state_31591__$1;
(statearr_31604_31646[(2)] = inst_31587);

(statearr_31604_31646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (22))){
var inst_31585 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
var statearr_31605_31647 = state_31591__$1;
(statearr_31605_31647[(2)] = inst_31585);

(statearr_31605_31647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (6))){
var inst_31589 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31591__$1,inst_31589);
} else {
if((state_val_31592 === (25))){
var state_31591__$1 = state_31591;
var statearr_31606_31648 = state_31591__$1;
(statearr_31606_31648[(2)] = null);

(statearr_31606_31648[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (17))){
var inst_31565 = (state_31591[(14)]);
var state_31591__$1 = state_31591;
var statearr_31607_31649 = state_31591__$1;
(statearr_31607_31649[(2)] = inst_31565);

(statearr_31607_31649[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (3))){
var inst_31525 = (state_31591[(9)]);
var state_31591__$1 = state_31591;
var statearr_31608_31650 = state_31591__$1;
(statearr_31608_31650[(2)] = inst_31525);

(statearr_31608_31650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (12))){
var inst_31551 = (state_31591[(15)]);
var inst_31565 = (state_31591[(14)]);
var inst_31546 = (state_31591[(16)]);
var inst_31565__$1 = inst_31546.call(null,inst_31551);
var state_31591__$1 = (function (){var statearr_31609 = state_31591;
(statearr_31609[(14)] = inst_31565__$1);

return statearr_31609;
})();
if(cljs.core.truth_(inst_31565__$1)){
var statearr_31610_31651 = state_31591__$1;
(statearr_31610_31651[(1)] = (17));

} else {
var statearr_31611_31652 = state_31591__$1;
(statearr_31611_31652[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (2))){
var inst_31525 = (state_31591[(9)]);
var inst_31528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31525);
var state_31591__$1 = state_31591;
var statearr_31612_31653 = state_31591__$1;
(statearr_31612_31653[(2)] = inst_31528);

(statearr_31612_31653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (23))){
var inst_31576 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
if(cljs.core.truth_(inst_31576)){
var statearr_31613_31654 = state_31591__$1;
(statearr_31613_31654[(1)] = (24));

} else {
var statearr_31614_31655 = state_31591__$1;
(statearr_31614_31655[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (19))){
var inst_31573 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
if(cljs.core.truth_(inst_31573)){
var statearr_31615_31656 = state_31591__$1;
(statearr_31615_31656[(1)] = (20));

} else {
var statearr_31616_31657 = state_31591__$1;
(statearr_31616_31657[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (11))){
var inst_31550 = (state_31591[(8)]);
var inst_31556 = (inst_31550 == null);
var state_31591__$1 = state_31591;
if(cljs.core.truth_(inst_31556)){
var statearr_31617_31658 = state_31591__$1;
(statearr_31617_31658[(1)] = (14));

} else {
var statearr_31618_31659 = state_31591__$1;
(statearr_31618_31659[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (9))){
var inst_31543 = (state_31591[(10)]);
var inst_31543__$1 = (state_31591[(2)]);
var inst_31544 = cljs.core.get.call(null,inst_31543__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31545 = cljs.core.get.call(null,inst_31543__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31546 = cljs.core.get.call(null,inst_31543__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31591__$1 = (function (){var statearr_31619 = state_31591;
(statearr_31619[(17)] = inst_31545);

(statearr_31619[(10)] = inst_31543__$1);

(statearr_31619[(16)] = inst_31546);

return statearr_31619;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31591__$1,(10),inst_31544);
} else {
if((state_val_31592 === (5))){
var inst_31535 = (state_31591[(7)]);
var inst_31538 = cljs.core.seq_QMARK_.call(null,inst_31535);
var state_31591__$1 = state_31591;
if(inst_31538){
var statearr_31620_31660 = state_31591__$1;
(statearr_31620_31660[(1)] = (7));

} else {
var statearr_31621_31661 = state_31591__$1;
(statearr_31621_31661[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (14))){
var inst_31551 = (state_31591[(15)]);
var inst_31558 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31551);
var state_31591__$1 = state_31591;
var statearr_31622_31662 = state_31591__$1;
(statearr_31622_31662[(2)] = inst_31558);

(statearr_31622_31662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (26))){
var inst_31581 = (state_31591[(2)]);
var state_31591__$1 = state_31591;
var statearr_31623_31663 = state_31591__$1;
(statearr_31623_31663[(2)] = inst_31581);

(statearr_31623_31663[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (16))){
var inst_31561 = (state_31591[(2)]);
var inst_31562 = calc_state.call(null);
var inst_31535 = inst_31562;
var state_31591__$1 = (function (){var statearr_31624 = state_31591;
(statearr_31624[(18)] = inst_31561);

(statearr_31624[(7)] = inst_31535);

return statearr_31624;
})();
var statearr_31625_31664 = state_31591__$1;
(statearr_31625_31664[(2)] = null);

(statearr_31625_31664[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (10))){
var inst_31551 = (state_31591[(15)]);
var inst_31550 = (state_31591[(8)]);
var inst_31549 = (state_31591[(2)]);
var inst_31550__$1 = cljs.core.nth.call(null,inst_31549,(0),null);
var inst_31551__$1 = cljs.core.nth.call(null,inst_31549,(1),null);
var inst_31552 = (inst_31550__$1 == null);
var inst_31553 = cljs.core._EQ_.call(null,inst_31551__$1,change);
var inst_31554 = (inst_31552) || (inst_31553);
var state_31591__$1 = (function (){var statearr_31626 = state_31591;
(statearr_31626[(15)] = inst_31551__$1);

(statearr_31626[(8)] = inst_31550__$1);

return statearr_31626;
})();
if(cljs.core.truth_(inst_31554)){
var statearr_31627_31665 = state_31591__$1;
(statearr_31627_31665[(1)] = (11));

} else {
var statearr_31628_31666 = state_31591__$1;
(statearr_31628_31666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (18))){
var inst_31551 = (state_31591[(15)]);
var inst_31545 = (state_31591[(17)]);
var inst_31546 = (state_31591[(16)]);
var inst_31568 = cljs.core.empty_QMARK_.call(null,inst_31546);
var inst_31569 = inst_31545.call(null,inst_31551);
var inst_31570 = cljs.core.not.call(null,inst_31569);
var inst_31571 = (inst_31568) && (inst_31570);
var state_31591__$1 = state_31591;
var statearr_31629_31667 = state_31591__$1;
(statearr_31629_31667[(2)] = inst_31571);

(statearr_31629_31667[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31592 === (8))){
var inst_31535 = (state_31591[(7)]);
var state_31591__$1 = state_31591;
var statearr_31630_31668 = state_31591__$1;
(statearr_31630_31668[(2)] = inst_31535);

(statearr_31630_31668[(1)] = (9));


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
});})(c__18618__auto___31638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18562__auto__,c__18618__auto___31638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31634[(0)] = state_machine__18563__auto__);

(statearr_31634[(1)] = (1));

return statearr_31634;
});
var state_machine__18563__auto____1 = (function (state_31591){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31635){if((e31635 instanceof Object)){
var ex__18566__auto__ = e31635;
var statearr_31636_31669 = state_31591;
(statearr_31636_31669[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31670 = state_31591;
state_31591 = G__31670;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31591){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18620__auto__ = (function (){var statearr_31637 = f__18619__auto__.call(null);
(statearr_31637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31638);

return statearr_31637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj31672 = {};
return obj31672;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16133__auto__ = p;
if(and__16133__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16133__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16789__auto__ = (((p == null))?null:p);
return (function (){var or__16145__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16789__auto__)]);
if(or__16145__auto__){
return or__16145__auto__;
} else {
var or__16145__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16145__auto____$1){
return or__16145__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16145__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16145__auto__,mults){
return (function (p1__31673_SHARP_){
if(cljs.core.truth_(p1__31673_SHARP_.call(null,topic))){
return p1__31673_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31673_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31796 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31797){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31797 = meta31797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31796.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31796.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31796.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31796.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31798){
var self__ = this;
var _31798__$1 = this;
return self__.meta31797;
});})(mults,ensure_mult))
;

cljs.core.async.t31796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31798,meta31797__$1){
var self__ = this;
var _31798__$1 = this;
return (new cljs.core.async.t31796(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31797__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31796.cljs$lang$type = true;

cljs.core.async.t31796.cljs$lang$ctorStr = "cljs.core.async/t31796";

cljs.core.async.t31796.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31796");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31796 = ((function (mults,ensure_mult){
return (function __GT_t31796(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31797){
return (new cljs.core.async.t31796(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31797));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31796(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18618__auto___31918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31918,mults,ensure_mult,p){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31918,mults,ensure_mult,p){
return (function (state_31870){
var state_val_31871 = (state_31870[(1)]);
if((state_val_31871 === (7))){
var inst_31866 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31872_31919 = state_31870__$1;
(statearr_31872_31919[(2)] = inst_31866);

(statearr_31872_31919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (20))){
var state_31870__$1 = state_31870;
var statearr_31873_31920 = state_31870__$1;
(statearr_31873_31920[(2)] = null);

(statearr_31873_31920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (1))){
var state_31870__$1 = state_31870;
var statearr_31874_31921 = state_31870__$1;
(statearr_31874_31921[(2)] = null);

(statearr_31874_31921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (24))){
var inst_31849 = (state_31870[(7)]);
var inst_31858 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31849);
var state_31870__$1 = state_31870;
var statearr_31875_31922 = state_31870__$1;
(statearr_31875_31922[(2)] = inst_31858);

(statearr_31875_31922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (4))){
var inst_31801 = (state_31870[(8)]);
var inst_31801__$1 = (state_31870[(2)]);
var inst_31802 = (inst_31801__$1 == null);
var state_31870__$1 = (function (){var statearr_31876 = state_31870;
(statearr_31876[(8)] = inst_31801__$1);

return statearr_31876;
})();
if(cljs.core.truth_(inst_31802)){
var statearr_31877_31923 = state_31870__$1;
(statearr_31877_31923[(1)] = (5));

} else {
var statearr_31878_31924 = state_31870__$1;
(statearr_31878_31924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (15))){
var inst_31843 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31879_31925 = state_31870__$1;
(statearr_31879_31925[(2)] = inst_31843);

(statearr_31879_31925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (21))){
var inst_31863 = (state_31870[(2)]);
var state_31870__$1 = (function (){var statearr_31880 = state_31870;
(statearr_31880[(9)] = inst_31863);

return statearr_31880;
})();
var statearr_31881_31926 = state_31870__$1;
(statearr_31881_31926[(2)] = null);

(statearr_31881_31926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (13))){
var inst_31825 = (state_31870[(10)]);
var inst_31827 = cljs.core.chunked_seq_QMARK_.call(null,inst_31825);
var state_31870__$1 = state_31870;
if(inst_31827){
var statearr_31882_31927 = state_31870__$1;
(statearr_31882_31927[(1)] = (16));

} else {
var statearr_31883_31928 = state_31870__$1;
(statearr_31883_31928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (22))){
var inst_31855 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31855)){
var statearr_31884_31929 = state_31870__$1;
(statearr_31884_31929[(1)] = (23));

} else {
var statearr_31885_31930 = state_31870__$1;
(statearr_31885_31930[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (6))){
var inst_31851 = (state_31870[(11)]);
var inst_31801 = (state_31870[(8)]);
var inst_31849 = (state_31870[(7)]);
var inst_31849__$1 = topic_fn.call(null,inst_31801);
var inst_31850 = cljs.core.deref.call(null,mults);
var inst_31851__$1 = cljs.core.get.call(null,inst_31850,inst_31849__$1);
var state_31870__$1 = (function (){var statearr_31886 = state_31870;
(statearr_31886[(11)] = inst_31851__$1);

(statearr_31886[(7)] = inst_31849__$1);

return statearr_31886;
})();
if(cljs.core.truth_(inst_31851__$1)){
var statearr_31887_31931 = state_31870__$1;
(statearr_31887_31931[(1)] = (19));

} else {
var statearr_31888_31932 = state_31870__$1;
(statearr_31888_31932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (25))){
var inst_31860 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31889_31933 = state_31870__$1;
(statearr_31889_31933[(2)] = inst_31860);

(statearr_31889_31933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (17))){
var inst_31825 = (state_31870[(10)]);
var inst_31834 = cljs.core.first.call(null,inst_31825);
var inst_31835 = cljs.core.async.muxch_STAR_.call(null,inst_31834);
var inst_31836 = cljs.core.async.close_BANG_.call(null,inst_31835);
var inst_31837 = cljs.core.next.call(null,inst_31825);
var inst_31811 = inst_31837;
var inst_31812 = null;
var inst_31813 = (0);
var inst_31814 = (0);
var state_31870__$1 = (function (){var statearr_31890 = state_31870;
(statearr_31890[(12)] = inst_31813);

(statearr_31890[(13)] = inst_31811);

(statearr_31890[(14)] = inst_31814);

(statearr_31890[(15)] = inst_31812);

(statearr_31890[(16)] = inst_31836);

return statearr_31890;
})();
var statearr_31891_31934 = state_31870__$1;
(statearr_31891_31934[(2)] = null);

(statearr_31891_31934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (3))){
var inst_31868 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31870__$1,inst_31868);
} else {
if((state_val_31871 === (12))){
var inst_31845 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31892_31935 = state_31870__$1;
(statearr_31892_31935[(2)] = inst_31845);

(statearr_31892_31935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (2))){
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31870__$1,(4),ch);
} else {
if((state_val_31871 === (23))){
var state_31870__$1 = state_31870;
var statearr_31893_31936 = state_31870__$1;
(statearr_31893_31936[(2)] = null);

(statearr_31893_31936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (19))){
var inst_31851 = (state_31870[(11)]);
var inst_31801 = (state_31870[(8)]);
var inst_31853 = cljs.core.async.muxch_STAR_.call(null,inst_31851);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31870__$1,(22),inst_31853,inst_31801);
} else {
if((state_val_31871 === (11))){
var inst_31825 = (state_31870[(10)]);
var inst_31811 = (state_31870[(13)]);
var inst_31825__$1 = cljs.core.seq.call(null,inst_31811);
var state_31870__$1 = (function (){var statearr_31894 = state_31870;
(statearr_31894[(10)] = inst_31825__$1);

return statearr_31894;
})();
if(inst_31825__$1){
var statearr_31895_31937 = state_31870__$1;
(statearr_31895_31937[(1)] = (13));

} else {
var statearr_31896_31938 = state_31870__$1;
(statearr_31896_31938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (9))){
var inst_31847 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31897_31939 = state_31870__$1;
(statearr_31897_31939[(2)] = inst_31847);

(statearr_31897_31939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (5))){
var inst_31808 = cljs.core.deref.call(null,mults);
var inst_31809 = cljs.core.vals.call(null,inst_31808);
var inst_31810 = cljs.core.seq.call(null,inst_31809);
var inst_31811 = inst_31810;
var inst_31812 = null;
var inst_31813 = (0);
var inst_31814 = (0);
var state_31870__$1 = (function (){var statearr_31898 = state_31870;
(statearr_31898[(12)] = inst_31813);

(statearr_31898[(13)] = inst_31811);

(statearr_31898[(14)] = inst_31814);

(statearr_31898[(15)] = inst_31812);

return statearr_31898;
})();
var statearr_31899_31940 = state_31870__$1;
(statearr_31899_31940[(2)] = null);

(statearr_31899_31940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (14))){
var state_31870__$1 = state_31870;
var statearr_31903_31941 = state_31870__$1;
(statearr_31903_31941[(2)] = null);

(statearr_31903_31941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (16))){
var inst_31825 = (state_31870[(10)]);
var inst_31829 = cljs.core.chunk_first.call(null,inst_31825);
var inst_31830 = cljs.core.chunk_rest.call(null,inst_31825);
var inst_31831 = cljs.core.count.call(null,inst_31829);
var inst_31811 = inst_31830;
var inst_31812 = inst_31829;
var inst_31813 = inst_31831;
var inst_31814 = (0);
var state_31870__$1 = (function (){var statearr_31904 = state_31870;
(statearr_31904[(12)] = inst_31813);

(statearr_31904[(13)] = inst_31811);

(statearr_31904[(14)] = inst_31814);

(statearr_31904[(15)] = inst_31812);

return statearr_31904;
})();
var statearr_31905_31942 = state_31870__$1;
(statearr_31905_31942[(2)] = null);

(statearr_31905_31942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (10))){
var inst_31813 = (state_31870[(12)]);
var inst_31811 = (state_31870[(13)]);
var inst_31814 = (state_31870[(14)]);
var inst_31812 = (state_31870[(15)]);
var inst_31819 = cljs.core._nth.call(null,inst_31812,inst_31814);
var inst_31820 = cljs.core.async.muxch_STAR_.call(null,inst_31819);
var inst_31821 = cljs.core.async.close_BANG_.call(null,inst_31820);
var inst_31822 = (inst_31814 + (1));
var tmp31900 = inst_31813;
var tmp31901 = inst_31811;
var tmp31902 = inst_31812;
var inst_31811__$1 = tmp31901;
var inst_31812__$1 = tmp31902;
var inst_31813__$1 = tmp31900;
var inst_31814__$1 = inst_31822;
var state_31870__$1 = (function (){var statearr_31906 = state_31870;
(statearr_31906[(12)] = inst_31813__$1);

(statearr_31906[(13)] = inst_31811__$1);

(statearr_31906[(14)] = inst_31814__$1);

(statearr_31906[(15)] = inst_31812__$1);

(statearr_31906[(17)] = inst_31821);

return statearr_31906;
})();
var statearr_31907_31943 = state_31870__$1;
(statearr_31907_31943[(2)] = null);

(statearr_31907_31943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (18))){
var inst_31840 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31908_31944 = state_31870__$1;
(statearr_31908_31944[(2)] = inst_31840);

(statearr_31908_31944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (8))){
var inst_31813 = (state_31870[(12)]);
var inst_31814 = (state_31870[(14)]);
var inst_31816 = (inst_31814 < inst_31813);
var inst_31817 = inst_31816;
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31817)){
var statearr_31909_31945 = state_31870__$1;
(statearr_31909_31945[(1)] = (10));

} else {
var statearr_31910_31946 = state_31870__$1;
(statearr_31910_31946[(1)] = (11));

}

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
});})(c__18618__auto___31918,mults,ensure_mult,p))
;
return ((function (switch__18562__auto__,c__18618__auto___31918,mults,ensure_mult,p){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31914[(0)] = state_machine__18563__auto__);

(statearr_31914[(1)] = (1));

return statearr_31914;
});
var state_machine__18563__auto____1 = (function (state_31870){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31915){if((e31915 instanceof Object)){
var ex__18566__auto__ = e31915;
var statearr_31916_31947 = state_31870;
(statearr_31916_31947[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31948 = state_31870;
state_31870 = G__31948;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31870){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31918,mults,ensure_mult,p))
})();
var state__18620__auto__ = (function (){var statearr_31917 = f__18619__auto__.call(null);
(statearr_31917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31918);

return statearr_31917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31918,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18618__auto___32085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32055){
var state_val_32056 = (state_32055[(1)]);
if((state_val_32056 === (7))){
var state_32055__$1 = state_32055;
var statearr_32057_32086 = state_32055__$1;
(statearr_32057_32086[(2)] = null);

(statearr_32057_32086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (1))){
var state_32055__$1 = state_32055;
var statearr_32058_32087 = state_32055__$1;
(statearr_32058_32087[(2)] = null);

(statearr_32058_32087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (4))){
var inst_32019 = (state_32055[(7)]);
var inst_32021 = (inst_32019 < cnt);
var state_32055__$1 = state_32055;
if(cljs.core.truth_(inst_32021)){
var statearr_32059_32088 = state_32055__$1;
(statearr_32059_32088[(1)] = (6));

} else {
var statearr_32060_32089 = state_32055__$1;
(statearr_32060_32089[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (15))){
var inst_32051 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32061_32090 = state_32055__$1;
(statearr_32061_32090[(2)] = inst_32051);

(statearr_32061_32090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (13))){
var inst_32044 = cljs.core.async.close_BANG_.call(null,out);
var state_32055__$1 = state_32055;
var statearr_32062_32091 = state_32055__$1;
(statearr_32062_32091[(2)] = inst_32044);

(statearr_32062_32091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (6))){
var state_32055__$1 = state_32055;
var statearr_32063_32092 = state_32055__$1;
(statearr_32063_32092[(2)] = null);

(statearr_32063_32092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (3))){
var inst_32053 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32055__$1,inst_32053);
} else {
if((state_val_32056 === (12))){
var inst_32041 = (state_32055[(8)]);
var inst_32041__$1 = (state_32055[(2)]);
var inst_32042 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32041__$1);
var state_32055__$1 = (function (){var statearr_32064 = state_32055;
(statearr_32064[(8)] = inst_32041__$1);

return statearr_32064;
})();
if(cljs.core.truth_(inst_32042)){
var statearr_32065_32093 = state_32055__$1;
(statearr_32065_32093[(1)] = (13));

} else {
var statearr_32066_32094 = state_32055__$1;
(statearr_32066_32094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (2))){
var inst_32018 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32019 = (0);
var state_32055__$1 = (function (){var statearr_32067 = state_32055;
(statearr_32067[(9)] = inst_32018);

(statearr_32067[(7)] = inst_32019);

return statearr_32067;
})();
var statearr_32068_32095 = state_32055__$1;
(statearr_32068_32095[(2)] = null);

(statearr_32068_32095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (11))){
var inst_32019 = (state_32055[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32055,(10),Object,null,(9));
var inst_32028 = chs__$1.call(null,inst_32019);
var inst_32029 = done.call(null,inst_32019);
var inst_32030 = cljs.core.async.take_BANG_.call(null,inst_32028,inst_32029);
var state_32055__$1 = state_32055;
var statearr_32069_32096 = state_32055__$1;
(statearr_32069_32096[(2)] = inst_32030);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (9))){
var inst_32019 = (state_32055[(7)]);
var inst_32032 = (state_32055[(2)]);
var inst_32033 = (inst_32019 + (1));
var inst_32019__$1 = inst_32033;
var state_32055__$1 = (function (){var statearr_32070 = state_32055;
(statearr_32070[(10)] = inst_32032);

(statearr_32070[(7)] = inst_32019__$1);

return statearr_32070;
})();
var statearr_32071_32097 = state_32055__$1;
(statearr_32071_32097[(2)] = null);

(statearr_32071_32097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (5))){
var inst_32039 = (state_32055[(2)]);
var state_32055__$1 = (function (){var statearr_32072 = state_32055;
(statearr_32072[(11)] = inst_32039);

return statearr_32072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32055__$1,(12),dchan);
} else {
if((state_val_32056 === (14))){
var inst_32041 = (state_32055[(8)]);
var inst_32046 = cljs.core.apply.call(null,f,inst_32041);
var state_32055__$1 = state_32055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32055__$1,(16),out,inst_32046);
} else {
if((state_val_32056 === (16))){
var inst_32048 = (state_32055[(2)]);
var state_32055__$1 = (function (){var statearr_32073 = state_32055;
(statearr_32073[(12)] = inst_32048);

return statearr_32073;
})();
var statearr_32074_32098 = state_32055__$1;
(statearr_32074_32098[(2)] = null);

(statearr_32074_32098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (10))){
var inst_32023 = (state_32055[(2)]);
var inst_32024 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32055__$1 = (function (){var statearr_32075 = state_32055;
(statearr_32075[(13)] = inst_32023);

return statearr_32075;
})();
var statearr_32076_32099 = state_32055__$1;
(statearr_32076_32099[(2)] = inst_32024);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (8))){
var inst_32037 = (state_32055[(2)]);
var state_32055__$1 = state_32055;
var statearr_32077_32100 = state_32055__$1;
(statearr_32077_32100[(2)] = inst_32037);

(statearr_32077_32100[(1)] = (5));


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
});})(c__18618__auto___32085,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18562__auto__,c__18618__auto___32085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32081[(0)] = state_machine__18563__auto__);

(statearr_32081[(1)] = (1));

return statearr_32081;
});
var state_machine__18563__auto____1 = (function (state_32055){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32082){if((e32082 instanceof Object)){
var ex__18566__auto__ = e32082;
var statearr_32083_32101 = state_32055;
(statearr_32083_32101[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32102 = state_32055;
state_32055 = G__32102;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32055){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32085,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18620__auto__ = (function (){var statearr_32084 = f__18619__auto__.call(null);
(statearr_32084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32085);

return statearr_32084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32085,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18618__auto___32210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32210,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32210,out){
return (function (state_32186){
var state_val_32187 = (state_32186[(1)]);
if((state_val_32187 === (7))){
var inst_32166 = (state_32186[(7)]);
var inst_32165 = (state_32186[(8)]);
var inst_32165__$1 = (state_32186[(2)]);
var inst_32166__$1 = cljs.core.nth.call(null,inst_32165__$1,(0),null);
var inst_32167 = cljs.core.nth.call(null,inst_32165__$1,(1),null);
var inst_32168 = (inst_32166__$1 == null);
var state_32186__$1 = (function (){var statearr_32188 = state_32186;
(statearr_32188[(7)] = inst_32166__$1);

(statearr_32188[(9)] = inst_32167);

(statearr_32188[(8)] = inst_32165__$1);

return statearr_32188;
})();
if(cljs.core.truth_(inst_32168)){
var statearr_32189_32211 = state_32186__$1;
(statearr_32189_32211[(1)] = (8));

} else {
var statearr_32190_32212 = state_32186__$1;
(statearr_32190_32212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (1))){
var inst_32157 = cljs.core.vec.call(null,chs);
var inst_32158 = inst_32157;
var state_32186__$1 = (function (){var statearr_32191 = state_32186;
(statearr_32191[(10)] = inst_32158);

return statearr_32191;
})();
var statearr_32192_32213 = state_32186__$1;
(statearr_32192_32213[(2)] = null);

(statearr_32192_32213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (4))){
var inst_32158 = (state_32186[(10)]);
var state_32186__$1 = state_32186;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32186__$1,(7),inst_32158);
} else {
if((state_val_32187 === (6))){
var inst_32182 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32193_32214 = state_32186__$1;
(statearr_32193_32214[(2)] = inst_32182);

(statearr_32193_32214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (3))){
var inst_32184 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32186__$1,inst_32184);
} else {
if((state_val_32187 === (2))){
var inst_32158 = (state_32186[(10)]);
var inst_32160 = cljs.core.count.call(null,inst_32158);
var inst_32161 = (inst_32160 > (0));
var state_32186__$1 = state_32186;
if(cljs.core.truth_(inst_32161)){
var statearr_32195_32215 = state_32186__$1;
(statearr_32195_32215[(1)] = (4));

} else {
var statearr_32196_32216 = state_32186__$1;
(statearr_32196_32216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (11))){
var inst_32158 = (state_32186[(10)]);
var inst_32175 = (state_32186[(2)]);
var tmp32194 = inst_32158;
var inst_32158__$1 = tmp32194;
var state_32186__$1 = (function (){var statearr_32197 = state_32186;
(statearr_32197[(11)] = inst_32175);

(statearr_32197[(10)] = inst_32158__$1);

return statearr_32197;
})();
var statearr_32198_32217 = state_32186__$1;
(statearr_32198_32217[(2)] = null);

(statearr_32198_32217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (9))){
var inst_32166 = (state_32186[(7)]);
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32186__$1,(11),out,inst_32166);
} else {
if((state_val_32187 === (5))){
var inst_32180 = cljs.core.async.close_BANG_.call(null,out);
var state_32186__$1 = state_32186;
var statearr_32199_32218 = state_32186__$1;
(statearr_32199_32218[(2)] = inst_32180);

(statearr_32199_32218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (10))){
var inst_32178 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32200_32219 = state_32186__$1;
(statearr_32200_32219[(2)] = inst_32178);

(statearr_32200_32219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (8))){
var inst_32166 = (state_32186[(7)]);
var inst_32158 = (state_32186[(10)]);
var inst_32167 = (state_32186[(9)]);
var inst_32165 = (state_32186[(8)]);
var inst_32170 = (function (){var c = inst_32167;
var v = inst_32166;
var vec__32163 = inst_32165;
var cs = inst_32158;
return ((function (c,v,vec__32163,cs,inst_32166,inst_32158,inst_32167,inst_32165,state_val_32187,c__18618__auto___32210,out){
return (function (p1__32103_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32103_SHARP_);
});
;})(c,v,vec__32163,cs,inst_32166,inst_32158,inst_32167,inst_32165,state_val_32187,c__18618__auto___32210,out))
})();
var inst_32171 = cljs.core.filterv.call(null,inst_32170,inst_32158);
var inst_32158__$1 = inst_32171;
var state_32186__$1 = (function (){var statearr_32201 = state_32186;
(statearr_32201[(10)] = inst_32158__$1);

return statearr_32201;
})();
var statearr_32202_32220 = state_32186__$1;
(statearr_32202_32220[(2)] = null);

(statearr_32202_32220[(1)] = (2));


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
});})(c__18618__auto___32210,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32210,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32206 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32206[(0)] = state_machine__18563__auto__);

(statearr_32206[(1)] = (1));

return statearr_32206;
});
var state_machine__18563__auto____1 = (function (state_32186){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32207){if((e32207 instanceof Object)){
var ex__18566__auto__ = e32207;
var statearr_32208_32221 = state_32186;
(statearr_32208_32221[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32222 = state_32186;
state_32186 = G__32222;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32186){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32210,out))
})();
var state__18620__auto__ = (function (){var statearr_32209 = f__18619__auto__.call(null);
(statearr_32209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32210);

return statearr_32209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32210,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18618__auto___32315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32315,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32315,out){
return (function (state_32292){
var state_val_32293 = (state_32292[(1)]);
if((state_val_32293 === (7))){
var inst_32274 = (state_32292[(7)]);
var inst_32274__$1 = (state_32292[(2)]);
var inst_32275 = (inst_32274__$1 == null);
var inst_32276 = cljs.core.not.call(null,inst_32275);
var state_32292__$1 = (function (){var statearr_32294 = state_32292;
(statearr_32294[(7)] = inst_32274__$1);

return statearr_32294;
})();
if(inst_32276){
var statearr_32295_32316 = state_32292__$1;
(statearr_32295_32316[(1)] = (8));

} else {
var statearr_32296_32317 = state_32292__$1;
(statearr_32296_32317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (1))){
var inst_32269 = (0);
var state_32292__$1 = (function (){var statearr_32297 = state_32292;
(statearr_32297[(8)] = inst_32269);

return statearr_32297;
})();
var statearr_32298_32318 = state_32292__$1;
(statearr_32298_32318[(2)] = null);

(statearr_32298_32318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (4))){
var state_32292__$1 = state_32292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32292__$1,(7),ch);
} else {
if((state_val_32293 === (6))){
var inst_32287 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32299_32319 = state_32292__$1;
(statearr_32299_32319[(2)] = inst_32287);

(statearr_32299_32319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (3))){
var inst_32289 = (state_32292[(2)]);
var inst_32290 = cljs.core.async.close_BANG_.call(null,out);
var state_32292__$1 = (function (){var statearr_32300 = state_32292;
(statearr_32300[(9)] = inst_32289);

return statearr_32300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32292__$1,inst_32290);
} else {
if((state_val_32293 === (2))){
var inst_32269 = (state_32292[(8)]);
var inst_32271 = (inst_32269 < n);
var state_32292__$1 = state_32292;
if(cljs.core.truth_(inst_32271)){
var statearr_32301_32320 = state_32292__$1;
(statearr_32301_32320[(1)] = (4));

} else {
var statearr_32302_32321 = state_32292__$1;
(statearr_32302_32321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (11))){
var inst_32269 = (state_32292[(8)]);
var inst_32279 = (state_32292[(2)]);
var inst_32280 = (inst_32269 + (1));
var inst_32269__$1 = inst_32280;
var state_32292__$1 = (function (){var statearr_32303 = state_32292;
(statearr_32303[(8)] = inst_32269__$1);

(statearr_32303[(10)] = inst_32279);

return statearr_32303;
})();
var statearr_32304_32322 = state_32292__$1;
(statearr_32304_32322[(2)] = null);

(statearr_32304_32322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (9))){
var state_32292__$1 = state_32292;
var statearr_32305_32323 = state_32292__$1;
(statearr_32305_32323[(2)] = null);

(statearr_32305_32323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (5))){
var state_32292__$1 = state_32292;
var statearr_32306_32324 = state_32292__$1;
(statearr_32306_32324[(2)] = null);

(statearr_32306_32324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (10))){
var inst_32284 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32307_32325 = state_32292__$1;
(statearr_32307_32325[(2)] = inst_32284);

(statearr_32307_32325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (8))){
var inst_32274 = (state_32292[(7)]);
var state_32292__$1 = state_32292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32292__$1,(11),out,inst_32274);
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
});})(c__18618__auto___32315,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32315,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32311[(0)] = state_machine__18563__auto__);

(statearr_32311[(1)] = (1));

return statearr_32311;
});
var state_machine__18563__auto____1 = (function (state_32292){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32312){if((e32312 instanceof Object)){
var ex__18566__auto__ = e32312;
var statearr_32313_32326 = state_32292;
(statearr_32313_32326[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32327 = state_32292;
state_32292 = G__32327;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32292){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32315,out))
})();
var state__18620__auto__ = (function (){var statearr_32314 = f__18619__auto__.call(null);
(statearr_32314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32315);

return statearr_32314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32315,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t32335 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32335 = (function (ch,f,map_LT_,meta32336){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32336 = meta32336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32335.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32335.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32338 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32338 = (function (fn1,_,meta32336,map_LT_,f,ch,meta32339){
this.fn1 = fn1;
this._ = _;
this.meta32336 = meta32336;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32339 = meta32339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32338.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32328_SHARP_){
return f1.call(null,(((p1__32328_SHARP_ == null))?null:self__.f.call(null,p1__32328_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32340){
var self__ = this;
var _32340__$1 = this;
return self__.meta32339;
});})(___$1))
;

cljs.core.async.t32338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32340,meta32339__$1){
var self__ = this;
var _32340__$1 = this;
return (new cljs.core.async.t32338(self__.fn1,self__._,self__.meta32336,self__.map_LT_,self__.f,self__.ch,meta32339__$1));
});})(___$1))
;

cljs.core.async.t32338.cljs$lang$type = true;

cljs.core.async.t32338.cljs$lang$ctorStr = "cljs.core.async/t32338";

cljs.core.async.t32338.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32338");
});})(___$1))
;

cljs.core.async.__GT_t32338 = ((function (___$1){
return (function __GT_t32338(fn1__$1,___$2,meta32336__$1,map_LT___$1,f__$1,ch__$1,meta32339){
return (new cljs.core.async.t32338(fn1__$1,___$2,meta32336__$1,map_LT___$1,f__$1,ch__$1,meta32339));
});})(___$1))
;

}

return (new cljs.core.async.t32338(fn1,___$1,self__.meta32336,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16133__auto__ = ret;
if(cljs.core.truth_(and__16133__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16133__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t32335.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32337){
var self__ = this;
var _32337__$1 = this;
return self__.meta32336;
});

cljs.core.async.t32335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32337,meta32336__$1){
var self__ = this;
var _32337__$1 = this;
return (new cljs.core.async.t32335(self__.ch,self__.f,self__.map_LT_,meta32336__$1));
});

cljs.core.async.t32335.cljs$lang$type = true;

cljs.core.async.t32335.cljs$lang$ctorStr = "cljs.core.async/t32335";

cljs.core.async.t32335.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32335");
});

cljs.core.async.__GT_t32335 = (function __GT_t32335(ch__$1,f__$1,map_LT___$1,meta32336){
return (new cljs.core.async.t32335(ch__$1,f__$1,map_LT___$1,meta32336));
});

}

return (new cljs.core.async.t32335(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t32344 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32344 = (function (ch,f,map_GT_,meta32345){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32345 = meta32345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32344.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32344.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32344.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32346){
var self__ = this;
var _32346__$1 = this;
return self__.meta32345;
});

cljs.core.async.t32344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32346,meta32345__$1){
var self__ = this;
var _32346__$1 = this;
return (new cljs.core.async.t32344(self__.ch,self__.f,self__.map_GT_,meta32345__$1));
});

cljs.core.async.t32344.cljs$lang$type = true;

cljs.core.async.t32344.cljs$lang$ctorStr = "cljs.core.async/t32344";

cljs.core.async.t32344.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32344");
});

cljs.core.async.__GT_t32344 = (function __GT_t32344(ch__$1,f__$1,map_GT___$1,meta32345){
return (new cljs.core.async.t32344(ch__$1,f__$1,map_GT___$1,meta32345));
});

}

return (new cljs.core.async.t32344(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t32350 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32350 = (function (ch,p,filter_GT_,meta32351){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32351 = meta32351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32350.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32350.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32350.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32352){
var self__ = this;
var _32352__$1 = this;
return self__.meta32351;
});

cljs.core.async.t32350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32352,meta32351__$1){
var self__ = this;
var _32352__$1 = this;
return (new cljs.core.async.t32350(self__.ch,self__.p,self__.filter_GT_,meta32351__$1));
});

cljs.core.async.t32350.cljs$lang$type = true;

cljs.core.async.t32350.cljs$lang$ctorStr = "cljs.core.async/t32350";

cljs.core.async.t32350.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32350");
});

cljs.core.async.__GT_t32350 = (function __GT_t32350(ch__$1,p__$1,filter_GT___$1,meta32351){
return (new cljs.core.async.t32350(ch__$1,p__$1,filter_GT___$1,meta32351));
});

}

return (new cljs.core.async.t32350(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18618__auto___32435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32435,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32435,out){
return (function (state_32414){
var state_val_32415 = (state_32414[(1)]);
if((state_val_32415 === (7))){
var inst_32410 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32416_32436 = state_32414__$1;
(statearr_32416_32436[(2)] = inst_32410);

(statearr_32416_32436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (1))){
var state_32414__$1 = state_32414;
var statearr_32417_32437 = state_32414__$1;
(statearr_32417_32437[(2)] = null);

(statearr_32417_32437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (4))){
var inst_32396 = (state_32414[(7)]);
var inst_32396__$1 = (state_32414[(2)]);
var inst_32397 = (inst_32396__$1 == null);
var state_32414__$1 = (function (){var statearr_32418 = state_32414;
(statearr_32418[(7)] = inst_32396__$1);

return statearr_32418;
})();
if(cljs.core.truth_(inst_32397)){
var statearr_32419_32438 = state_32414__$1;
(statearr_32419_32438[(1)] = (5));

} else {
var statearr_32420_32439 = state_32414__$1;
(statearr_32420_32439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (6))){
var inst_32396 = (state_32414[(7)]);
var inst_32401 = p.call(null,inst_32396);
var state_32414__$1 = state_32414;
if(cljs.core.truth_(inst_32401)){
var statearr_32421_32440 = state_32414__$1;
(statearr_32421_32440[(1)] = (8));

} else {
var statearr_32422_32441 = state_32414__$1;
(statearr_32422_32441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (3))){
var inst_32412 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32414__$1,inst_32412);
} else {
if((state_val_32415 === (2))){
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32414__$1,(4),ch);
} else {
if((state_val_32415 === (11))){
var inst_32404 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32423_32442 = state_32414__$1;
(statearr_32423_32442[(2)] = inst_32404);

(statearr_32423_32442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (9))){
var state_32414__$1 = state_32414;
var statearr_32424_32443 = state_32414__$1;
(statearr_32424_32443[(2)] = null);

(statearr_32424_32443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (5))){
var inst_32399 = cljs.core.async.close_BANG_.call(null,out);
var state_32414__$1 = state_32414;
var statearr_32425_32444 = state_32414__$1;
(statearr_32425_32444[(2)] = inst_32399);

(statearr_32425_32444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (10))){
var inst_32407 = (state_32414[(2)]);
var state_32414__$1 = (function (){var statearr_32426 = state_32414;
(statearr_32426[(8)] = inst_32407);

return statearr_32426;
})();
var statearr_32427_32445 = state_32414__$1;
(statearr_32427_32445[(2)] = null);

(statearr_32427_32445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (8))){
var inst_32396 = (state_32414[(7)]);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32414__$1,(11),out,inst_32396);
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
});})(c__18618__auto___32435,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32435,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32431 = [null,null,null,null,null,null,null,null,null];
(statearr_32431[(0)] = state_machine__18563__auto__);

(statearr_32431[(1)] = (1));

return statearr_32431;
});
var state_machine__18563__auto____1 = (function (state_32414){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32432){if((e32432 instanceof Object)){
var ex__18566__auto__ = e32432;
var statearr_32433_32446 = state_32414;
(statearr_32433_32446[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32447 = state_32414;
state_32414 = G__32447;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32414){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32435,out))
})();
var state__18620__auto__ = (function (){var statearr_32434 = f__18619__auto__.call(null);
(statearr_32434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32435);

return statearr_32434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32435,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_32613){
var state_val_32614 = (state_32613[(1)]);
if((state_val_32614 === (7))){
var inst_32609 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32615_32656 = state_32613__$1;
(statearr_32615_32656[(2)] = inst_32609);

(statearr_32615_32656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (20))){
var inst_32579 = (state_32613[(7)]);
var inst_32590 = (state_32613[(2)]);
var inst_32591 = cljs.core.next.call(null,inst_32579);
var inst_32565 = inst_32591;
var inst_32566 = null;
var inst_32567 = (0);
var inst_32568 = (0);
var state_32613__$1 = (function (){var statearr_32616 = state_32613;
(statearr_32616[(8)] = inst_32568);

(statearr_32616[(9)] = inst_32566);

(statearr_32616[(10)] = inst_32565);

(statearr_32616[(11)] = inst_32567);

(statearr_32616[(12)] = inst_32590);

return statearr_32616;
})();
var statearr_32617_32657 = state_32613__$1;
(statearr_32617_32657[(2)] = null);

(statearr_32617_32657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (1))){
var state_32613__$1 = state_32613;
var statearr_32618_32658 = state_32613__$1;
(statearr_32618_32658[(2)] = null);

(statearr_32618_32658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (4))){
var inst_32554 = (state_32613[(13)]);
var inst_32554__$1 = (state_32613[(2)]);
var inst_32555 = (inst_32554__$1 == null);
var state_32613__$1 = (function (){var statearr_32619 = state_32613;
(statearr_32619[(13)] = inst_32554__$1);

return statearr_32619;
})();
if(cljs.core.truth_(inst_32555)){
var statearr_32620_32659 = state_32613__$1;
(statearr_32620_32659[(1)] = (5));

} else {
var statearr_32621_32660 = state_32613__$1;
(statearr_32621_32660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (15))){
var state_32613__$1 = state_32613;
var statearr_32625_32661 = state_32613__$1;
(statearr_32625_32661[(2)] = null);

(statearr_32625_32661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (21))){
var state_32613__$1 = state_32613;
var statearr_32626_32662 = state_32613__$1;
(statearr_32626_32662[(2)] = null);

(statearr_32626_32662[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (13))){
var inst_32568 = (state_32613[(8)]);
var inst_32566 = (state_32613[(9)]);
var inst_32565 = (state_32613[(10)]);
var inst_32567 = (state_32613[(11)]);
var inst_32575 = (state_32613[(2)]);
var inst_32576 = (inst_32568 + (1));
var tmp32622 = inst_32566;
var tmp32623 = inst_32565;
var tmp32624 = inst_32567;
var inst_32565__$1 = tmp32623;
var inst_32566__$1 = tmp32622;
var inst_32567__$1 = tmp32624;
var inst_32568__$1 = inst_32576;
var state_32613__$1 = (function (){var statearr_32627 = state_32613;
(statearr_32627[(8)] = inst_32568__$1);

(statearr_32627[(14)] = inst_32575);

(statearr_32627[(9)] = inst_32566__$1);

(statearr_32627[(10)] = inst_32565__$1);

(statearr_32627[(11)] = inst_32567__$1);

return statearr_32627;
})();
var statearr_32628_32663 = state_32613__$1;
(statearr_32628_32663[(2)] = null);

(statearr_32628_32663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (22))){
var state_32613__$1 = state_32613;
var statearr_32629_32664 = state_32613__$1;
(statearr_32629_32664[(2)] = null);

(statearr_32629_32664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (6))){
var inst_32554 = (state_32613[(13)]);
var inst_32563 = f.call(null,inst_32554);
var inst_32564 = cljs.core.seq.call(null,inst_32563);
var inst_32565 = inst_32564;
var inst_32566 = null;
var inst_32567 = (0);
var inst_32568 = (0);
var state_32613__$1 = (function (){var statearr_32630 = state_32613;
(statearr_32630[(8)] = inst_32568);

(statearr_32630[(9)] = inst_32566);

(statearr_32630[(10)] = inst_32565);

(statearr_32630[(11)] = inst_32567);

return statearr_32630;
})();
var statearr_32631_32665 = state_32613__$1;
(statearr_32631_32665[(2)] = null);

(statearr_32631_32665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (17))){
var inst_32579 = (state_32613[(7)]);
var inst_32583 = cljs.core.chunk_first.call(null,inst_32579);
var inst_32584 = cljs.core.chunk_rest.call(null,inst_32579);
var inst_32585 = cljs.core.count.call(null,inst_32583);
var inst_32565 = inst_32584;
var inst_32566 = inst_32583;
var inst_32567 = inst_32585;
var inst_32568 = (0);
var state_32613__$1 = (function (){var statearr_32632 = state_32613;
(statearr_32632[(8)] = inst_32568);

(statearr_32632[(9)] = inst_32566);

(statearr_32632[(10)] = inst_32565);

(statearr_32632[(11)] = inst_32567);

return statearr_32632;
})();
var statearr_32633_32666 = state_32613__$1;
(statearr_32633_32666[(2)] = null);

(statearr_32633_32666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (3))){
var inst_32611 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32613__$1,inst_32611);
} else {
if((state_val_32614 === (12))){
var inst_32599 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32634_32667 = state_32613__$1;
(statearr_32634_32667[(2)] = inst_32599);

(statearr_32634_32667[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (2))){
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32613__$1,(4),in$);
} else {
if((state_val_32614 === (23))){
var inst_32607 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32635_32668 = state_32613__$1;
(statearr_32635_32668[(2)] = inst_32607);

(statearr_32635_32668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (19))){
var inst_32594 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32636_32669 = state_32613__$1;
(statearr_32636_32669[(2)] = inst_32594);

(statearr_32636_32669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (11))){
var inst_32579 = (state_32613[(7)]);
var inst_32565 = (state_32613[(10)]);
var inst_32579__$1 = cljs.core.seq.call(null,inst_32565);
var state_32613__$1 = (function (){var statearr_32637 = state_32613;
(statearr_32637[(7)] = inst_32579__$1);

return statearr_32637;
})();
if(inst_32579__$1){
var statearr_32638_32670 = state_32613__$1;
(statearr_32638_32670[(1)] = (14));

} else {
var statearr_32639_32671 = state_32613__$1;
(statearr_32639_32671[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (9))){
var inst_32601 = (state_32613[(2)]);
var inst_32602 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32613__$1 = (function (){var statearr_32640 = state_32613;
(statearr_32640[(15)] = inst_32601);

return statearr_32640;
})();
if(cljs.core.truth_(inst_32602)){
var statearr_32641_32672 = state_32613__$1;
(statearr_32641_32672[(1)] = (21));

} else {
var statearr_32642_32673 = state_32613__$1;
(statearr_32642_32673[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (5))){
var inst_32557 = cljs.core.async.close_BANG_.call(null,out);
var state_32613__$1 = state_32613;
var statearr_32643_32674 = state_32613__$1;
(statearr_32643_32674[(2)] = inst_32557);

(statearr_32643_32674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (14))){
var inst_32579 = (state_32613[(7)]);
var inst_32581 = cljs.core.chunked_seq_QMARK_.call(null,inst_32579);
var state_32613__$1 = state_32613;
if(inst_32581){
var statearr_32644_32675 = state_32613__$1;
(statearr_32644_32675[(1)] = (17));

} else {
var statearr_32645_32676 = state_32613__$1;
(statearr_32645_32676[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (16))){
var inst_32597 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32646_32677 = state_32613__$1;
(statearr_32646_32677[(2)] = inst_32597);

(statearr_32646_32677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (10))){
var inst_32568 = (state_32613[(8)]);
var inst_32566 = (state_32613[(9)]);
var inst_32573 = cljs.core._nth.call(null,inst_32566,inst_32568);
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32613__$1,(13),out,inst_32573);
} else {
if((state_val_32614 === (18))){
var inst_32579 = (state_32613[(7)]);
var inst_32588 = cljs.core.first.call(null,inst_32579);
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32613__$1,(20),out,inst_32588);
} else {
if((state_val_32614 === (8))){
var inst_32568 = (state_32613[(8)]);
var inst_32567 = (state_32613[(11)]);
var inst_32570 = (inst_32568 < inst_32567);
var inst_32571 = inst_32570;
var state_32613__$1 = state_32613;
if(cljs.core.truth_(inst_32571)){
var statearr_32647_32678 = state_32613__$1;
(statearr_32647_32678[(1)] = (10));

} else {
var statearr_32648_32679 = state_32613__$1;
(statearr_32648_32679[(1)] = (11));

}

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
});})(c__18618__auto__))
;
return ((function (switch__18562__auto__,c__18618__auto__){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32652[(0)] = state_machine__18563__auto__);

(statearr_32652[(1)] = (1));

return statearr_32652;
});
var state_machine__18563__auto____1 = (function (state_32613){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32653){if((e32653 instanceof Object)){
var ex__18566__auto__ = e32653;
var statearr_32654_32680 = state_32613;
(statearr_32654_32680[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32681 = state_32613;
state_32613 = G__32681;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32613){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_32655 = f__18619__auto__.call(null);
(statearr_32655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_32655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18618__auto___32778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32778,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32778,out){
return (function (state_32753){
var state_val_32754 = (state_32753[(1)]);
if((state_val_32754 === (7))){
var inst_32748 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32755_32779 = state_32753__$1;
(statearr_32755_32779[(2)] = inst_32748);

(statearr_32755_32779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (1))){
var inst_32730 = null;
var state_32753__$1 = (function (){var statearr_32756 = state_32753;
(statearr_32756[(7)] = inst_32730);

return statearr_32756;
})();
var statearr_32757_32780 = state_32753__$1;
(statearr_32757_32780[(2)] = null);

(statearr_32757_32780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (4))){
var inst_32733 = (state_32753[(8)]);
var inst_32733__$1 = (state_32753[(2)]);
var inst_32734 = (inst_32733__$1 == null);
var inst_32735 = cljs.core.not.call(null,inst_32734);
var state_32753__$1 = (function (){var statearr_32758 = state_32753;
(statearr_32758[(8)] = inst_32733__$1);

return statearr_32758;
})();
if(inst_32735){
var statearr_32759_32781 = state_32753__$1;
(statearr_32759_32781[(1)] = (5));

} else {
var statearr_32760_32782 = state_32753__$1;
(statearr_32760_32782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (6))){
var state_32753__$1 = state_32753;
var statearr_32761_32783 = state_32753__$1;
(statearr_32761_32783[(2)] = null);

(statearr_32761_32783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (3))){
var inst_32750 = (state_32753[(2)]);
var inst_32751 = cljs.core.async.close_BANG_.call(null,out);
var state_32753__$1 = (function (){var statearr_32762 = state_32753;
(statearr_32762[(9)] = inst_32750);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32753__$1,inst_32751);
} else {
if((state_val_32754 === (2))){
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32753__$1,(4),ch);
} else {
if((state_val_32754 === (11))){
var inst_32733 = (state_32753[(8)]);
var inst_32742 = (state_32753[(2)]);
var inst_32730 = inst_32733;
var state_32753__$1 = (function (){var statearr_32763 = state_32753;
(statearr_32763[(10)] = inst_32742);

(statearr_32763[(7)] = inst_32730);

return statearr_32763;
})();
var statearr_32764_32784 = state_32753__$1;
(statearr_32764_32784[(2)] = null);

(statearr_32764_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (9))){
var inst_32733 = (state_32753[(8)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32753__$1,(11),out,inst_32733);
} else {
if((state_val_32754 === (5))){
var inst_32730 = (state_32753[(7)]);
var inst_32733 = (state_32753[(8)]);
var inst_32737 = cljs.core._EQ_.call(null,inst_32733,inst_32730);
var state_32753__$1 = state_32753;
if(inst_32737){
var statearr_32766_32785 = state_32753__$1;
(statearr_32766_32785[(1)] = (8));

} else {
var statearr_32767_32786 = state_32753__$1;
(statearr_32767_32786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (10))){
var inst_32745 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32768_32787 = state_32753__$1;
(statearr_32768_32787[(2)] = inst_32745);

(statearr_32768_32787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (8))){
var inst_32730 = (state_32753[(7)]);
var tmp32765 = inst_32730;
var inst_32730__$1 = tmp32765;
var state_32753__$1 = (function (){var statearr_32769 = state_32753;
(statearr_32769[(7)] = inst_32730__$1);

return statearr_32769;
})();
var statearr_32770_32788 = state_32753__$1;
(statearr_32770_32788[(2)] = null);

(statearr_32770_32788[(1)] = (2));


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
});})(c__18618__auto___32778,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32778,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32774[(0)] = state_machine__18563__auto__);

(statearr_32774[(1)] = (1));

return statearr_32774;
});
var state_machine__18563__auto____1 = (function (state_32753){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32775){if((e32775 instanceof Object)){
var ex__18566__auto__ = e32775;
var statearr_32776_32789 = state_32753;
(statearr_32776_32789[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32790 = state_32753;
state_32753 = G__32790;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32753){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32778,out))
})();
var state__18620__auto__ = (function (){var statearr_32777 = f__18619__auto__.call(null);
(statearr_32777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32778);

return statearr_32777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32778,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18618__auto___32925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32925,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32925,out){
return (function (state_32895){
var state_val_32896 = (state_32895[(1)]);
if((state_val_32896 === (7))){
var inst_32891 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32897_32926 = state_32895__$1;
(statearr_32897_32926[(2)] = inst_32891);

(statearr_32897_32926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (1))){
var inst_32858 = (new Array(n));
var inst_32859 = inst_32858;
var inst_32860 = (0);
var state_32895__$1 = (function (){var statearr_32898 = state_32895;
(statearr_32898[(7)] = inst_32859);

(statearr_32898[(8)] = inst_32860);

return statearr_32898;
})();
var statearr_32899_32927 = state_32895__$1;
(statearr_32899_32927[(2)] = null);

(statearr_32899_32927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (4))){
var inst_32863 = (state_32895[(9)]);
var inst_32863__$1 = (state_32895[(2)]);
var inst_32864 = (inst_32863__$1 == null);
var inst_32865 = cljs.core.not.call(null,inst_32864);
var state_32895__$1 = (function (){var statearr_32900 = state_32895;
(statearr_32900[(9)] = inst_32863__$1);

return statearr_32900;
})();
if(inst_32865){
var statearr_32901_32928 = state_32895__$1;
(statearr_32901_32928[(1)] = (5));

} else {
var statearr_32902_32929 = state_32895__$1;
(statearr_32902_32929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (15))){
var inst_32885 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32903_32930 = state_32895__$1;
(statearr_32903_32930[(2)] = inst_32885);

(statearr_32903_32930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (13))){
var state_32895__$1 = state_32895;
var statearr_32904_32931 = state_32895__$1;
(statearr_32904_32931[(2)] = null);

(statearr_32904_32931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (6))){
var inst_32860 = (state_32895[(8)]);
var inst_32881 = (inst_32860 > (0));
var state_32895__$1 = state_32895;
if(cljs.core.truth_(inst_32881)){
var statearr_32905_32932 = state_32895__$1;
(statearr_32905_32932[(1)] = (12));

} else {
var statearr_32906_32933 = state_32895__$1;
(statearr_32906_32933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (3))){
var inst_32893 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32895__$1,inst_32893);
} else {
if((state_val_32896 === (12))){
var inst_32859 = (state_32895[(7)]);
var inst_32883 = cljs.core.vec.call(null,inst_32859);
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32895__$1,(15),out,inst_32883);
} else {
if((state_val_32896 === (2))){
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32895__$1,(4),ch);
} else {
if((state_val_32896 === (11))){
var inst_32875 = (state_32895[(2)]);
var inst_32876 = (new Array(n));
var inst_32859 = inst_32876;
var inst_32860 = (0);
var state_32895__$1 = (function (){var statearr_32907 = state_32895;
(statearr_32907[(7)] = inst_32859);

(statearr_32907[(8)] = inst_32860);

(statearr_32907[(10)] = inst_32875);

return statearr_32907;
})();
var statearr_32908_32934 = state_32895__$1;
(statearr_32908_32934[(2)] = null);

(statearr_32908_32934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (9))){
var inst_32859 = (state_32895[(7)]);
var inst_32873 = cljs.core.vec.call(null,inst_32859);
var state_32895__$1 = state_32895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32895__$1,(11),out,inst_32873);
} else {
if((state_val_32896 === (5))){
var inst_32859 = (state_32895[(7)]);
var inst_32868 = (state_32895[(11)]);
var inst_32860 = (state_32895[(8)]);
var inst_32863 = (state_32895[(9)]);
var inst_32867 = (inst_32859[inst_32860] = inst_32863);
var inst_32868__$1 = (inst_32860 + (1));
var inst_32869 = (inst_32868__$1 < n);
var state_32895__$1 = (function (){var statearr_32909 = state_32895;
(statearr_32909[(11)] = inst_32868__$1);

(statearr_32909[(12)] = inst_32867);

return statearr_32909;
})();
if(cljs.core.truth_(inst_32869)){
var statearr_32910_32935 = state_32895__$1;
(statearr_32910_32935[(1)] = (8));

} else {
var statearr_32911_32936 = state_32895__$1;
(statearr_32911_32936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (14))){
var inst_32888 = (state_32895[(2)]);
var inst_32889 = cljs.core.async.close_BANG_.call(null,out);
var state_32895__$1 = (function (){var statearr_32913 = state_32895;
(statearr_32913[(13)] = inst_32888);

return statearr_32913;
})();
var statearr_32914_32937 = state_32895__$1;
(statearr_32914_32937[(2)] = inst_32889);

(statearr_32914_32937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (10))){
var inst_32879 = (state_32895[(2)]);
var state_32895__$1 = state_32895;
var statearr_32915_32938 = state_32895__$1;
(statearr_32915_32938[(2)] = inst_32879);

(statearr_32915_32938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32896 === (8))){
var inst_32859 = (state_32895[(7)]);
var inst_32868 = (state_32895[(11)]);
var tmp32912 = inst_32859;
var inst_32859__$1 = tmp32912;
var inst_32860 = inst_32868;
var state_32895__$1 = (function (){var statearr_32916 = state_32895;
(statearr_32916[(7)] = inst_32859__$1);

(statearr_32916[(8)] = inst_32860);

return statearr_32916;
})();
var statearr_32917_32939 = state_32895__$1;
(statearr_32917_32939[(2)] = null);

(statearr_32917_32939[(1)] = (2));


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
});})(c__18618__auto___32925,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32925,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32921[(0)] = state_machine__18563__auto__);

(statearr_32921[(1)] = (1));

return statearr_32921;
});
var state_machine__18563__auto____1 = (function (state_32895){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32922){if((e32922 instanceof Object)){
var ex__18566__auto__ = e32922;
var statearr_32923_32940 = state_32895;
(statearr_32923_32940[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32941 = state_32895;
state_32895 = G__32941;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32895){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32925,out))
})();
var state__18620__auto__ = (function (){var statearr_32924 = f__18619__auto__.call(null);
(statearr_32924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32925);

return statearr_32924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32925,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18618__auto___33084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___33084,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___33084,out){
return (function (state_33054){
var state_val_33055 = (state_33054[(1)]);
if((state_val_33055 === (7))){
var inst_33050 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33056_33085 = state_33054__$1;
(statearr_33056_33085[(2)] = inst_33050);

(statearr_33056_33085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (1))){
var inst_33013 = [];
var inst_33014 = inst_33013;
var inst_33015 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33054__$1 = (function (){var statearr_33057 = state_33054;
(statearr_33057[(7)] = inst_33015);

(statearr_33057[(8)] = inst_33014);

return statearr_33057;
})();
var statearr_33058_33086 = state_33054__$1;
(statearr_33058_33086[(2)] = null);

(statearr_33058_33086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (4))){
var inst_33018 = (state_33054[(9)]);
var inst_33018__$1 = (state_33054[(2)]);
var inst_33019 = (inst_33018__$1 == null);
var inst_33020 = cljs.core.not.call(null,inst_33019);
var state_33054__$1 = (function (){var statearr_33059 = state_33054;
(statearr_33059[(9)] = inst_33018__$1);

return statearr_33059;
})();
if(inst_33020){
var statearr_33060_33087 = state_33054__$1;
(statearr_33060_33087[(1)] = (5));

} else {
var statearr_33061_33088 = state_33054__$1;
(statearr_33061_33088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (15))){
var inst_33044 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33062_33089 = state_33054__$1;
(statearr_33062_33089[(2)] = inst_33044);

(statearr_33062_33089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (13))){
var state_33054__$1 = state_33054;
var statearr_33063_33090 = state_33054__$1;
(statearr_33063_33090[(2)] = null);

(statearr_33063_33090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (6))){
var inst_33014 = (state_33054[(8)]);
var inst_33039 = inst_33014.length;
var inst_33040 = (inst_33039 > (0));
var state_33054__$1 = state_33054;
if(cljs.core.truth_(inst_33040)){
var statearr_33064_33091 = state_33054__$1;
(statearr_33064_33091[(1)] = (12));

} else {
var statearr_33065_33092 = state_33054__$1;
(statearr_33065_33092[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (3))){
var inst_33052 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33054__$1,inst_33052);
} else {
if((state_val_33055 === (12))){
var inst_33014 = (state_33054[(8)]);
var inst_33042 = cljs.core.vec.call(null,inst_33014);
var state_33054__$1 = state_33054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33054__$1,(15),out,inst_33042);
} else {
if((state_val_33055 === (2))){
var state_33054__$1 = state_33054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33054__$1,(4),ch);
} else {
if((state_val_33055 === (11))){
var inst_33022 = (state_33054[(10)]);
var inst_33018 = (state_33054[(9)]);
var inst_33032 = (state_33054[(2)]);
var inst_33033 = [];
var inst_33034 = inst_33033.push(inst_33018);
var inst_33014 = inst_33033;
var inst_33015 = inst_33022;
var state_33054__$1 = (function (){var statearr_33066 = state_33054;
(statearr_33066[(11)] = inst_33032);

(statearr_33066[(7)] = inst_33015);

(statearr_33066[(8)] = inst_33014);

(statearr_33066[(12)] = inst_33034);

return statearr_33066;
})();
var statearr_33067_33093 = state_33054__$1;
(statearr_33067_33093[(2)] = null);

(statearr_33067_33093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (9))){
var inst_33014 = (state_33054[(8)]);
var inst_33030 = cljs.core.vec.call(null,inst_33014);
var state_33054__$1 = state_33054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33054__$1,(11),out,inst_33030);
} else {
if((state_val_33055 === (5))){
var inst_33015 = (state_33054[(7)]);
var inst_33022 = (state_33054[(10)]);
var inst_33018 = (state_33054[(9)]);
var inst_33022__$1 = f.call(null,inst_33018);
var inst_33023 = cljs.core._EQ_.call(null,inst_33022__$1,inst_33015);
var inst_33024 = cljs.core.keyword_identical_QMARK_.call(null,inst_33015,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33025 = (inst_33023) || (inst_33024);
var state_33054__$1 = (function (){var statearr_33068 = state_33054;
(statearr_33068[(10)] = inst_33022__$1);

return statearr_33068;
})();
if(cljs.core.truth_(inst_33025)){
var statearr_33069_33094 = state_33054__$1;
(statearr_33069_33094[(1)] = (8));

} else {
var statearr_33070_33095 = state_33054__$1;
(statearr_33070_33095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (14))){
var inst_33047 = (state_33054[(2)]);
var inst_33048 = cljs.core.async.close_BANG_.call(null,out);
var state_33054__$1 = (function (){var statearr_33072 = state_33054;
(statearr_33072[(13)] = inst_33047);

return statearr_33072;
})();
var statearr_33073_33096 = state_33054__$1;
(statearr_33073_33096[(2)] = inst_33048);

(statearr_33073_33096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (10))){
var inst_33037 = (state_33054[(2)]);
var state_33054__$1 = state_33054;
var statearr_33074_33097 = state_33054__$1;
(statearr_33074_33097[(2)] = inst_33037);

(statearr_33074_33097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33055 === (8))){
var inst_33022 = (state_33054[(10)]);
var inst_33014 = (state_33054[(8)]);
var inst_33018 = (state_33054[(9)]);
var inst_33027 = inst_33014.push(inst_33018);
var tmp33071 = inst_33014;
var inst_33014__$1 = tmp33071;
var inst_33015 = inst_33022;
var state_33054__$1 = (function (){var statearr_33075 = state_33054;
(statearr_33075[(7)] = inst_33015);

(statearr_33075[(8)] = inst_33014__$1);

(statearr_33075[(14)] = inst_33027);

return statearr_33075;
})();
var statearr_33076_33098 = state_33054__$1;
(statearr_33076_33098[(2)] = null);

(statearr_33076_33098[(1)] = (2));


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
});})(c__18618__auto___33084,out))
;
return ((function (switch__18562__auto__,c__18618__auto___33084,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_33080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33080[(0)] = state_machine__18563__auto__);

(statearr_33080[(1)] = (1));

return statearr_33080;
});
var state_machine__18563__auto____1 = (function (state_33054){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_33054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e33081){if((e33081 instanceof Object)){
var ex__18566__auto__ = e33081;
var statearr_33082_33099 = state_33054;
(statearr_33082_33099[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33100 = state_33054;
state_33054 = G__33100;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_33054){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_33054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___33084,out))
})();
var state__18620__auto__ = (function (){var statearr_33083 = f__18619__auto__.call(null);
(statearr_33083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___33084);

return statearr_33083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___33084,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1435015535362