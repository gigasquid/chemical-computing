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
if(typeof cljs.core.async.t22047 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22047 = (function (f,fn_handler,meta22048){
this.f = f;
this.fn_handler = fn_handler;
this.meta22048 = meta22048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22047.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22049){
var self__ = this;
var _22049__$1 = this;
return self__.meta22048;
});

cljs.core.async.t22047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22049,meta22048__$1){
var self__ = this;
var _22049__$1 = this;
return (new cljs.core.async.t22047(self__.f,self__.fn_handler,meta22048__$1));
});

cljs.core.async.t22047.cljs$lang$type = true;

cljs.core.async.t22047.cljs$lang$ctorStr = "cljs.core.async/t22047";

cljs.core.async.t22047.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t22047");
});

cljs.core.async.__GT_t22047 = (function __GT_t22047(f__$1,fn_handler__$1,meta22048){
return (new cljs.core.async.t22047(f__$1,fn_handler__$1,meta22048));
});

}

return (new cljs.core.async.t22047(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__22051 = buff;
if(G__22051){
var bit__4545__auto__ = null;
if(cljs.core.truth_((function (){var or__3864__auto__ = bit__4545__auto__;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return G__22051.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22051.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22051);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22051);
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
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
return cljs.core.async.impl.timers.timeout(msecs);
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
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_22068 = (function (){var G__22065 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22065) : cljs.core.deref.call(null,G__22065));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22066_22069 = val_22068;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22066_22069) : fn1.call(null,G__22066_22069));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22068,ret){
return (function (){
var G__22067 = val_22068;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22067) : fn1.call(null,G__22067));
});})(val_22068,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
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
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__22078 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22078) : cljs.core.deref.call(null,G__22078));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__22079 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22079) : cljs.core.deref.call(null,G__22079));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22080_22082 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22080_22082) : fn1.call(null,G__22080_22082));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__22081 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22081) : fn1.call(null,G__22081));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4751__auto___22083 = n;
var x_22084 = (0);
while(true){
if((x_22084 < n__4751__auto___22083)){
(a[x_22084] = (0));

var G__22085 = (x_22084 + (1));
x_22084 = G__22085;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__22086 = (i + (1));
i = G__22086;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__22094 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22094) : cljs.core.atom.call(null,G__22094));
})();
if(typeof cljs.core.async.t22095 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22095 = (function (flag,alt_flag,meta22096){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22096 = meta22096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22095.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22098 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22098) : cljs.core.deref.call(null,G__22098));
});})(flag))
;

cljs.core.async.t22095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22099_22101 = self__.flag;
var G__22100_22102 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22099_22101,G__22100_22102) : cljs.core.reset_BANG_.call(null,G__22099_22101,G__22100_22102));

return true;
});})(flag))
;

cljs.core.async.t22095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22097){
var self__ = this;
var _22097__$1 = this;
return self__.meta22096;
});})(flag))
;

cljs.core.async.t22095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22097,meta22096__$1){
var self__ = this;
var _22097__$1 = this;
return (new cljs.core.async.t22095(self__.flag,self__.alt_flag,meta22096__$1));
});})(flag))
;

cljs.core.async.t22095.cljs$lang$type = true;

cljs.core.async.t22095.cljs$lang$ctorStr = "cljs.core.async/t22095";

cljs.core.async.t22095.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t22095");
});})(flag))
;

cljs.core.async.__GT_t22095 = ((function (flag){
return (function __GT_t22095(flag__$1,alt_flag__$1,meta22096){
return (new cljs.core.async.t22095(flag__$1,alt_flag__$1,meta22096));
});})(flag))
;

}

return (new cljs.core.async.t22095(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22106 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22106 = (function (cb,flag,alt_handler,meta22107){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22107 = meta22107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22106.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t22106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t22106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22108){
var self__ = this;
var _22108__$1 = this;
return self__.meta22107;
});

cljs.core.async.t22106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22108,meta22107__$1){
var self__ = this;
var _22108__$1 = this;
return (new cljs.core.async.t22106(self__.cb,self__.flag,self__.alt_handler,meta22107__$1));
});

cljs.core.async.t22106.cljs$lang$type = true;

cljs.core.async.t22106.cljs$lang$ctorStr = "cljs.core.async/t22106";

cljs.core.async.t22106.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t22106");
});

cljs.core.async.__GT_t22106 = (function __GT_t22106(cb__$1,flag__$1,alt_handler__$1,meta22107){
return (new cljs.core.async.t22106(cb__$1,flag__$1,alt_handler__$1,meta22107));
});

}

return (new cljs.core.async.t22106(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22116 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22116) : port.call(null,G__22116));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22117 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22117) : port.call(null,G__22117));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22109_SHARP_){
var G__22118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22109_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22118) : fret.call(null,G__22118));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22110_SHARP_){
var G__22119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22110_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22119) : fret.call(null,G__22119));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22120 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22120) : cljs.core.deref.call(null,G__22120));
})(),(function (){var or__3864__auto__ = wport;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22121 = (i + (1));
i = G__22121;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3864__auto__ = ret;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3852__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3852__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3852__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
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
var alts_BANG___delegate = function (ports,p__22122){
var map__22124 = p__22122;
var map__22124__$1 = ((cljs.core.seq_QMARK_(map__22124))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22124):map__22124);
var opts = map__22124__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22122 = null;
if (arguments.length > 1) {
var G__22125__i = 0, G__22125__a = new Array(arguments.length -  1);
while (G__22125__i < G__22125__a.length) {G__22125__a[G__22125__i] = arguments[G__22125__i + 1]; ++G__22125__i;}
  p__22122 = new cljs.core.IndexedSeq(G__22125__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__22122);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22126){
var ports = cljs.core.first(arglist__22126);
var p__22122 = cljs.core.rest(arglist__22126);
return alts_BANG___delegate(ports,p__22122);
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
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__11307__auto___22224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___22224){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___22224){
return (function (state_22200){
var state_val_22201 = (state_22200[(1)]);
if((state_val_22201 === (7))){
var inst_22196 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
var statearr_22202_22225 = state_22200__$1;
(statearr_22202_22225[(2)] = inst_22196);

(statearr_22202_22225[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (1))){
var state_22200__$1 = state_22200;
var statearr_22203_22226 = state_22200__$1;
(statearr_22203_22226[(2)] = null);

(statearr_22203_22226[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (4))){
var inst_22179 = (state_22200[(7)]);
var inst_22179__$1 = (state_22200[(2)]);
var inst_22180 = (inst_22179__$1 == null);
var state_22200__$1 = (function (){var statearr_22204 = state_22200;
(statearr_22204[(7)] = inst_22179__$1);

return statearr_22204;
})();
if(cljs.core.truth_(inst_22180)){
var statearr_22205_22227 = state_22200__$1;
(statearr_22205_22227[(1)] = (5));

} else {
var statearr_22206_22228 = state_22200__$1;
(statearr_22206_22228[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (13))){
var state_22200__$1 = state_22200;
var statearr_22207_22229 = state_22200__$1;
(statearr_22207_22229[(2)] = null);

(statearr_22207_22229[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (6))){
var inst_22179 = (state_22200[(7)]);
var state_22200__$1 = state_22200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22200__$1,(11),to,inst_22179);
} else {
if((state_val_22201 === (3))){
var inst_22198 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22200__$1,inst_22198);
} else {
if((state_val_22201 === (12))){
var state_22200__$1 = state_22200;
var statearr_22208_22230 = state_22200__$1;
(statearr_22208_22230[(2)] = null);

(statearr_22208_22230[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (2))){
var state_22200__$1 = state_22200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22200__$1,(4),from);
} else {
if((state_val_22201 === (11))){
var inst_22189 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
if(cljs.core.truth_(inst_22189)){
var statearr_22209_22231 = state_22200__$1;
(statearr_22209_22231[(1)] = (12));

} else {
var statearr_22210_22232 = state_22200__$1;
(statearr_22210_22232[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (9))){
var state_22200__$1 = state_22200;
var statearr_22211_22233 = state_22200__$1;
(statearr_22211_22233[(2)] = null);

(statearr_22211_22233[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (5))){
var state_22200__$1 = state_22200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22212_22234 = state_22200__$1;
(statearr_22212_22234[(1)] = (8));

} else {
var statearr_22213_22235 = state_22200__$1;
(statearr_22213_22235[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (14))){
var inst_22194 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
var statearr_22214_22236 = state_22200__$1;
(statearr_22214_22236[(2)] = inst_22194);

(statearr_22214_22236[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (10))){
var inst_22186 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
var statearr_22215_22237 = state_22200__$1;
(statearr_22215_22237[(2)] = inst_22186);

(statearr_22215_22237[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22201 === (8))){
var inst_22183 = cljs.core.async.close_BANG_(to);
var state_22200__$1 = state_22200;
var statearr_22216_22238 = state_22200__$1;
(statearr_22216_22238[(2)] = inst_22183);

(statearr_22216_22238[(1)] = (10));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___22224))
;
return ((function (switch__11227__auto__,c__11307__auto___22224){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_22220 = [null,null,null,null,null,null,null,null];
(statearr_22220[(0)] = state_machine__11228__auto__);

(statearr_22220[(1)] = (1));

return statearr_22220;
});
var state_machine__11228__auto____1 = (function (state_22200){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_22200);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e22221){if((e22221 instanceof Object)){
var ex__11231__auto__ = e22221;
var statearr_22222_22239 = state_22200;
(statearr_22222_22239[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22200);

return cljs.core.constant$keyword$21;
} else {
throw e22221;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__22240 = state_22200;
state_22200 = G__22240;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_22200){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_22200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___22224))
})();
var state__11309__auto__ = (function (){var statearr_22223 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_22223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___22224);

return statearr_22223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___22224))
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__22426){
var vec__22427 = p__22426;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22427,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22427,(1),null);
var job = vec__22427;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11307__auto___22611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___22611,res,vec__22427,v,p,job,jobs,results){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___22611,res,vec__22427,v,p,job,jobs,results){
return (function (state_22432){
var state_val_22433 = (state_22432[(1)]);
if((state_val_22433 === (2))){
var inst_22429 = (state_22432[(2)]);
var inst_22430 = cljs.core.async.close_BANG_(res);
var state_22432__$1 = (function (){var statearr_22434 = state_22432;
(statearr_22434[(7)] = inst_22429);

return statearr_22434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22432__$1,inst_22430);
} else {
if((state_val_22433 === (1))){
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22432__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11307__auto___22611,res,vec__22427,v,p,job,jobs,results))
;
return ((function (switch__11227__auto__,c__11307__auto___22611,res,vec__22427,v,p,job,jobs,results){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_22438 = [null,null,null,null,null,null,null,null];
(statearr_22438[(0)] = state_machine__11228__auto__);

(statearr_22438[(1)] = (1));

return statearr_22438;
});
var state_machine__11228__auto____1 = (function (state_22432){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_22432);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e22439){if((e22439 instanceof Object)){
var ex__11231__auto__ = e22439;
var statearr_22440_22612 = state_22432;
(statearr_22440_22612[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22432);

return cljs.core.constant$keyword$21;
} else {
throw e22439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__22613 = state_22432;
state_22432 = G__22613;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_22432){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_22432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___22611,res,vec__22427,v,p,job,jobs,results))
})();
var state__11309__auto__ = (function (){var statearr_22441 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_22441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___22611);

return statearr_22441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___22611,res,vec__22427,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22442){
var vec__22443 = p__22442;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22443,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22443,(1),null);
var job = vec__22443;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__22444_22614 = v;
var G__22445_22615 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22444_22614,G__22445_22615) : xf.call(null,G__22444_22614,G__22445_22615));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4751__auto___22616 = n;
var __22617 = (0);
while(true){
if((__22617 < n__4751__auto___22616)){
var G__22446_22618 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22446_22618) {
case "async":
var c__11307__auto___22620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22617,c__11307__auto___22620,G__22446_22618,n__4751__auto___22616,jobs,results,process,async){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (__22617,c__11307__auto___22620,G__22446_22618,n__4751__auto___22616,jobs,results,process,async){
return (function (state_22459){
var state_val_22460 = (state_22459[(1)]);
if((state_val_22460 === (7))){
var inst_22455 = (state_22459[(2)]);
var state_22459__$1 = state_22459;
var statearr_22461_22621 = state_22459__$1;
(statearr_22461_22621[(2)] = inst_22455);

(statearr_22461_22621[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22460 === (6))){
var state_22459__$1 = state_22459;
var statearr_22462_22622 = state_22459__$1;
(statearr_22462_22622[(2)] = null);

(statearr_22462_22622[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22460 === (5))){
var state_22459__$1 = state_22459;
var statearr_22463_22623 = state_22459__$1;
(statearr_22463_22623[(2)] = null);

(statearr_22463_22623[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22460 === (4))){
var inst_22449 = (state_22459[(2)]);
var inst_22450 = async(inst_22449);
var state_22459__$1 = state_22459;
if(cljs.core.truth_(inst_22450)){
var statearr_22464_22624 = state_22459__$1;
(statearr_22464_22624[(1)] = (5));

} else {
var statearr_22465_22625 = state_22459__$1;
(statearr_22465_22625[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22460 === (3))){
var inst_22457 = (state_22459[(2)]);
var state_22459__$1 = state_22459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22459__$1,inst_22457);
} else {
if((state_val_22460 === (2))){
var state_22459__$1 = state_22459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22459__$1,(4),jobs);
} else {
if((state_val_22460 === (1))){
var state_22459__$1 = state_22459;
var statearr_22466_22626 = state_22459__$1;
(statearr_22466_22626[(2)] = null);

(statearr_22466_22626[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
});})(__22617,c__11307__auto___22620,G__22446_22618,n__4751__auto___22616,jobs,results,process,async))
;
return ((function (__22617,switch__11227__auto__,c__11307__auto___22620,G__22446_22618,n__4751__auto___22616,jobs,results,process,async){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_22470 = [null,null,null,null,null,null,null];
(statearr_22470[(0)] = state_machine__11228__auto__);

(statearr_22470[(1)] = (1));

return statearr_22470;
});
var state_machine__11228__auto____1 = (function (state_22459){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_22459);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e22471){if((e22471 instanceof Object)){
var ex__11231__auto__ = e22471;
var statearr_22472_22627 = state_22459;
(statearr_22472_22627[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22459);

return cljs.core.constant$keyword$21;
} else {
throw e22471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__22628 = state_22459;
state_22459 = G__22628;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_22459){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_22459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(__22617,switch__11227__auto__,c__11307__auto___22620,G__22446_22618,n__4751__auto___22616,jobs,results,process,async))
})();
var state__11309__auto__ = (function (){var statearr_22473 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_22473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___22620);

return statearr_22473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(__22617,c__11307__auto___22620,G__22446_22618,n__4751__auto___22616,jobs,results,process,async))
);


break;
case "compute":
var c__11307__auto___22629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22617,c__11307__auto___22629,G__22446_22618,n__4751__auto___22616,jobs,results,process,async){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (__22617,c__11307__auto___22629,G__22446_22618,n__4751__auto___22616,jobs,results,process,async){
return (function (state_22486){
var state_val_22487 = (state_22486[(1)]);
if((state_val_22487 === (7))){
var inst_22482 = (state_22486[(2)]);
var state_22486__$1 = state_22486;
var statearr_22488_22630 = state_22486__$1;
(statearr_22488_22630[(2)] = inst_22482);

(statearr_22488_22630[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22487 === (6))){
var state_22486__$1 = state_22486;
var statearr_22489_22631 = state_22486__$1;
(statearr_22489_22631[(2)] = null);

(statearr_22489_22631[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22487 === (5))){
var state_22486__$1 = state_22486;
var statearr_22490_22632 = state_22486__$1;
(statearr_22490_22632[(2)] = null);

(statearr_22490_22632[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22487 === (4))){
var inst_22476 = (state_22486[(2)]);
var inst_22477 = process(inst_22476);
var state_22486__$1 = state_22486;
if(cljs.core.truth_(inst_22477)){
var statearr_22491_22633 = state_22486__$1;
(statearr_22491_22633[(1)] = (5));

} else {
var statearr_22492_22634 = state_22486__$1;
(statearr_22492_22634[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22487 === (3))){
var inst_22484 = (state_22486[(2)]);
var state_22486__$1 = state_22486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22486__$1,inst_22484);
} else {
if((state_val_22487 === (2))){
var state_22486__$1 = state_22486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22486__$1,(4),jobs);
} else {
if((state_val_22487 === (1))){
var state_22486__$1 = state_22486;
var statearr_22493_22635 = state_22486__$1;
(statearr_22493_22635[(2)] = null);

(statearr_22493_22635[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
});})(__22617,c__11307__auto___22629,G__22446_22618,n__4751__auto___22616,jobs,results,process,async))
;
return ((function (__22617,switch__11227__auto__,c__11307__auto___22629,G__22446_22618,n__4751__auto___22616,jobs,results,process,async){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_22497 = [null,null,null,null,null,null,null];
(statearr_22497[(0)] = state_machine__11228__auto__);

(statearr_22497[(1)] = (1));

return statearr_22497;
});
var state_machine__11228__auto____1 = (function (state_22486){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_22486);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e22498){if((e22498 instanceof Object)){
var ex__11231__auto__ = e22498;
var statearr_22499_22636 = state_22486;
(statearr_22499_22636[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22486);

return cljs.core.constant$keyword$21;
} else {
throw e22498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__22637 = state_22486;
state_22486 = G__22637;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_22486){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_22486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(__22617,switch__11227__auto__,c__11307__auto___22629,G__22446_22618,n__4751__auto___22616,jobs,results,process,async))
})();
var state__11309__auto__ = (function (){var statearr_22500 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_22500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___22629);

return statearr_22500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(__22617,c__11307__auto___22629,G__22446_22618,n__4751__auto___22616,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22638 = (__22617 + (1));
__22617 = G__22638;
continue;
} else {
}
break;
}

var c__11307__auto___22639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___22639,jobs,results,process,async){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___22639,jobs,results,process,async){
return (function (state_22522){
var state_val_22523 = (state_22522[(1)]);
if((state_val_22523 === (9))){
var inst_22515 = (state_22522[(2)]);
var state_22522__$1 = (function (){var statearr_22524 = state_22522;
(statearr_22524[(7)] = inst_22515);

return statearr_22524;
})();
var statearr_22525_22640 = state_22522__$1;
(statearr_22525_22640[(2)] = null);

(statearr_22525_22640[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22523 === (8))){
var inst_22508 = (state_22522[(8)]);
var inst_22513 = (state_22522[(2)]);
var state_22522__$1 = (function (){var statearr_22526 = state_22522;
(statearr_22526[(9)] = inst_22513);

return statearr_22526;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22522__$1,(9),results,inst_22508);
} else {
if((state_val_22523 === (7))){
var inst_22518 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22527_22641 = state_22522__$1;
(statearr_22527_22641[(2)] = inst_22518);

(statearr_22527_22641[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22523 === (6))){
var inst_22508 = (state_22522[(8)]);
var inst_22503 = (state_22522[(10)]);
var inst_22508__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22510 = [inst_22503,inst_22508__$1];
var inst_22511 = (new cljs.core.PersistentVector(null,2,(5),inst_22509,inst_22510,null));
var state_22522__$1 = (function (){var statearr_22528 = state_22522;
(statearr_22528[(8)] = inst_22508__$1);

return statearr_22528;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22522__$1,(8),jobs,inst_22511);
} else {
if((state_val_22523 === (5))){
var inst_22506 = cljs.core.async.close_BANG_(jobs);
var state_22522__$1 = state_22522;
var statearr_22529_22642 = state_22522__$1;
(statearr_22529_22642[(2)] = inst_22506);

(statearr_22529_22642[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22523 === (4))){
var inst_22503 = (state_22522[(10)]);
var inst_22503__$1 = (state_22522[(2)]);
var inst_22504 = (inst_22503__$1 == null);
var state_22522__$1 = (function (){var statearr_22530 = state_22522;
(statearr_22530[(10)] = inst_22503__$1);

return statearr_22530;
})();
if(cljs.core.truth_(inst_22504)){
var statearr_22531_22643 = state_22522__$1;
(statearr_22531_22643[(1)] = (5));

} else {
var statearr_22532_22644 = state_22522__$1;
(statearr_22532_22644[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22523 === (3))){
var inst_22520 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22522__$1,inst_22520);
} else {
if((state_val_22523 === (2))){
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22522__$1,(4),from);
} else {
if((state_val_22523 === (1))){
var state_22522__$1 = state_22522;
var statearr_22533_22645 = state_22522__$1;
(statearr_22533_22645[(2)] = null);

(statearr_22533_22645[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___22639,jobs,results,process,async))
;
return ((function (switch__11227__auto__,c__11307__auto___22639,jobs,results,process,async){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_22537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22537[(0)] = state_machine__11228__auto__);

(statearr_22537[(1)] = (1));

return statearr_22537;
});
var state_machine__11228__auto____1 = (function (state_22522){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_22522);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e22538){if((e22538 instanceof Object)){
var ex__11231__auto__ = e22538;
var statearr_22539_22646 = state_22522;
(statearr_22539_22646[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22522);

return cljs.core.constant$keyword$21;
} else {
throw e22538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__22647 = state_22522;
state_22522 = G__22647;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_22522){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_22522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___22639,jobs,results,process,async))
})();
var state__11309__auto__ = (function (){var statearr_22540 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_22540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___22639);

return statearr_22540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___22639,jobs,results,process,async))
);


var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__,jobs,results,process,async){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__,jobs,results,process,async){
return (function (state_22578){
var state_val_22579 = (state_22578[(1)]);
if((state_val_22579 === (7))){
var inst_22574 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22580_22648 = state_22578__$1;
(statearr_22580_22648[(2)] = inst_22574);

(statearr_22580_22648[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (20))){
var state_22578__$1 = state_22578;
var statearr_22581_22649 = state_22578__$1;
(statearr_22581_22649[(2)] = null);

(statearr_22581_22649[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (1))){
var state_22578__$1 = state_22578;
var statearr_22582_22650 = state_22578__$1;
(statearr_22582_22650[(2)] = null);

(statearr_22582_22650[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (4))){
var inst_22543 = (state_22578[(7)]);
var inst_22543__$1 = (state_22578[(2)]);
var inst_22544 = (inst_22543__$1 == null);
var state_22578__$1 = (function (){var statearr_22583 = state_22578;
(statearr_22583[(7)] = inst_22543__$1);

return statearr_22583;
})();
if(cljs.core.truth_(inst_22544)){
var statearr_22584_22651 = state_22578__$1;
(statearr_22584_22651[(1)] = (5));

} else {
var statearr_22585_22652 = state_22578__$1;
(statearr_22585_22652[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (15))){
var inst_22556 = (state_22578[(8)]);
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22578__$1,(18),to,inst_22556);
} else {
if((state_val_22579 === (21))){
var inst_22569 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22586_22653 = state_22578__$1;
(statearr_22586_22653[(2)] = inst_22569);

(statearr_22586_22653[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (13))){
var inst_22571 = (state_22578[(2)]);
var state_22578__$1 = (function (){var statearr_22587 = state_22578;
(statearr_22587[(9)] = inst_22571);

return statearr_22587;
})();
var statearr_22588_22654 = state_22578__$1;
(statearr_22588_22654[(2)] = null);

(statearr_22588_22654[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (6))){
var inst_22543 = (state_22578[(7)]);
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22578__$1,(11),inst_22543);
} else {
if((state_val_22579 === (17))){
var inst_22564 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
if(cljs.core.truth_(inst_22564)){
var statearr_22589_22655 = state_22578__$1;
(statearr_22589_22655[(1)] = (19));

} else {
var statearr_22590_22656 = state_22578__$1;
(statearr_22590_22656[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (3))){
var inst_22576 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22578__$1,inst_22576);
} else {
if((state_val_22579 === (12))){
var inst_22553 = (state_22578[(10)]);
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22578__$1,(14),inst_22553);
} else {
if((state_val_22579 === (2))){
var state_22578__$1 = state_22578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22578__$1,(4),results);
} else {
if((state_val_22579 === (19))){
var state_22578__$1 = state_22578;
var statearr_22591_22657 = state_22578__$1;
(statearr_22591_22657[(2)] = null);

(statearr_22591_22657[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (11))){
var inst_22553 = (state_22578[(2)]);
var state_22578__$1 = (function (){var statearr_22592 = state_22578;
(statearr_22592[(10)] = inst_22553);

return statearr_22592;
})();
var statearr_22593_22658 = state_22578__$1;
(statearr_22593_22658[(2)] = null);

(statearr_22593_22658[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (9))){
var state_22578__$1 = state_22578;
var statearr_22594_22659 = state_22578__$1;
(statearr_22594_22659[(2)] = null);

(statearr_22594_22659[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (5))){
var state_22578__$1 = state_22578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22595_22660 = state_22578__$1;
(statearr_22595_22660[(1)] = (8));

} else {
var statearr_22596_22661 = state_22578__$1;
(statearr_22596_22661[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (14))){
var inst_22556 = (state_22578[(8)]);
var inst_22558 = (state_22578[(11)]);
var inst_22556__$1 = (state_22578[(2)]);
var inst_22557 = (inst_22556__$1 == null);
var inst_22558__$1 = cljs.core.not(inst_22557);
var state_22578__$1 = (function (){var statearr_22597 = state_22578;
(statearr_22597[(8)] = inst_22556__$1);

(statearr_22597[(11)] = inst_22558__$1);

return statearr_22597;
})();
if(inst_22558__$1){
var statearr_22598_22662 = state_22578__$1;
(statearr_22598_22662[(1)] = (15));

} else {
var statearr_22599_22663 = state_22578__$1;
(statearr_22599_22663[(1)] = (16));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (16))){
var inst_22558 = (state_22578[(11)]);
var state_22578__$1 = state_22578;
var statearr_22600_22664 = state_22578__$1;
(statearr_22600_22664[(2)] = inst_22558);

(statearr_22600_22664[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (10))){
var inst_22550 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22601_22665 = state_22578__$1;
(statearr_22601_22665[(2)] = inst_22550);

(statearr_22601_22665[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (18))){
var inst_22561 = (state_22578[(2)]);
var state_22578__$1 = state_22578;
var statearr_22602_22666 = state_22578__$1;
(statearr_22602_22666[(2)] = inst_22561);

(statearr_22602_22666[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22579 === (8))){
var inst_22547 = cljs.core.async.close_BANG_(to);
var state_22578__$1 = state_22578;
var statearr_22603_22667 = state_22578__$1;
(statearr_22603_22667[(2)] = inst_22547);

(statearr_22603_22667[(1)] = (10));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto__,jobs,results,process,async))
;
return ((function (switch__11227__auto__,c__11307__auto__,jobs,results,process,async){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_22607 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22607[(0)] = state_machine__11228__auto__);

(statearr_22607[(1)] = (1));

return statearr_22607;
});
var state_machine__11228__auto____1 = (function (state_22578){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_22578);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e22608){if((e22608 instanceof Object)){
var ex__11231__auto__ = e22608;
var statearr_22609_22668 = state_22578;
(statearr_22609_22668[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22578);

return cljs.core.constant$keyword$21;
} else {
throw e22608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__22669 = state_22578;
state_22578 = G__22669;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_22578){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_22578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__,jobs,results,process,async))
})();
var state__11309__auto__ = (function (){var statearr_22610 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_22610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_22610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__,jobs,results,process,async))
);

return c__11307__auto__;
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
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$28);
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
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$29);
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
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11307__auto___22792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___22792,tc,fc){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___22792,tc,fc){
return (function (state_22766){
var state_val_22767 = (state_22766[(1)]);
if((state_val_22767 === (7))){
var inst_22762 = (state_22766[(2)]);
var state_22766__$1 = state_22766;
var statearr_22768_22793 = state_22766__$1;
(statearr_22768_22793[(2)] = inst_22762);

(statearr_22768_22793[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (1))){
var state_22766__$1 = state_22766;
var statearr_22769_22794 = state_22766__$1;
(statearr_22769_22794[(2)] = null);

(statearr_22769_22794[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (4))){
var inst_22743 = (state_22766[(7)]);
var inst_22743__$1 = (state_22766[(2)]);
var inst_22744 = (inst_22743__$1 == null);
var state_22766__$1 = (function (){var statearr_22770 = state_22766;
(statearr_22770[(7)] = inst_22743__$1);

return statearr_22770;
})();
if(cljs.core.truth_(inst_22744)){
var statearr_22771_22795 = state_22766__$1;
(statearr_22771_22795[(1)] = (5));

} else {
var statearr_22772_22796 = state_22766__$1;
(statearr_22772_22796[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (13))){
var state_22766__$1 = state_22766;
var statearr_22773_22797 = state_22766__$1;
(statearr_22773_22797[(2)] = null);

(statearr_22773_22797[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (6))){
var inst_22743 = (state_22766[(7)]);
var inst_22749 = (function (){var G__22774 = inst_22743;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22774) : p.call(null,G__22774));
})();
var state_22766__$1 = state_22766;
if(cljs.core.truth_(inst_22749)){
var statearr_22775_22798 = state_22766__$1;
(statearr_22775_22798[(1)] = (9));

} else {
var statearr_22776_22799 = state_22766__$1;
(statearr_22776_22799[(1)] = (10));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (3))){
var inst_22764 = (state_22766[(2)]);
var state_22766__$1 = state_22766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22766__$1,inst_22764);
} else {
if((state_val_22767 === (12))){
var state_22766__$1 = state_22766;
var statearr_22777_22800 = state_22766__$1;
(statearr_22777_22800[(2)] = null);

(statearr_22777_22800[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (2))){
var state_22766__$1 = state_22766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22766__$1,(4),ch);
} else {
if((state_val_22767 === (11))){
var inst_22743 = (state_22766[(7)]);
var inst_22753 = (state_22766[(2)]);
var state_22766__$1 = state_22766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22766__$1,(8),inst_22753,inst_22743);
} else {
if((state_val_22767 === (9))){
var state_22766__$1 = state_22766;
var statearr_22778_22801 = state_22766__$1;
(statearr_22778_22801[(2)] = tc);

(statearr_22778_22801[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (5))){
var inst_22746 = cljs.core.async.close_BANG_(tc);
var inst_22747 = cljs.core.async.close_BANG_(fc);
var state_22766__$1 = (function (){var statearr_22779 = state_22766;
(statearr_22779[(8)] = inst_22746);

return statearr_22779;
})();
var statearr_22780_22802 = state_22766__$1;
(statearr_22780_22802[(2)] = inst_22747);

(statearr_22780_22802[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (14))){
var inst_22760 = (state_22766[(2)]);
var state_22766__$1 = state_22766;
var statearr_22781_22803 = state_22766__$1;
(statearr_22781_22803[(2)] = inst_22760);

(statearr_22781_22803[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (10))){
var state_22766__$1 = state_22766;
var statearr_22782_22804 = state_22766__$1;
(statearr_22782_22804[(2)] = fc);

(statearr_22782_22804[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22767 === (8))){
var inst_22755 = (state_22766[(2)]);
var state_22766__$1 = state_22766;
if(cljs.core.truth_(inst_22755)){
var statearr_22783_22805 = state_22766__$1;
(statearr_22783_22805[(1)] = (12));

} else {
var statearr_22784_22806 = state_22766__$1;
(statearr_22784_22806[(1)] = (13));

}

return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___22792,tc,fc))
;
return ((function (switch__11227__auto__,c__11307__auto___22792,tc,fc){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_22788 = [null,null,null,null,null,null,null,null,null];
(statearr_22788[(0)] = state_machine__11228__auto__);

(statearr_22788[(1)] = (1));

return statearr_22788;
});
var state_machine__11228__auto____1 = (function (state_22766){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_22766);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e22789){if((e22789 instanceof Object)){
var ex__11231__auto__ = e22789;
var statearr_22790_22807 = state_22766;
(statearr_22790_22807[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22766);

return cljs.core.constant$keyword$21;
} else {
throw e22789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__22808 = state_22766;
state_22766 = G__22808;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_22766){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_22766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___22792,tc,fc))
})();
var state__11309__auto__ = (function (){var statearr_22791 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_22791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___22792);

return statearr_22791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___22792,tc,fc))
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
var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__){
return (function (state_22857){
var state_val_22858 = (state_22857[(1)]);
if((state_val_22858 === (7))){
var inst_22853 = (state_22857[(2)]);
var state_22857__$1 = state_22857;
var statearr_22859_22877 = state_22857__$1;
(statearr_22859_22877[(2)] = inst_22853);

(statearr_22859_22877[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22858 === (6))){
var inst_22843 = (state_22857[(7)]);
var inst_22846 = (state_22857[(8)]);
var inst_22850 = (function (){var G__22860 = inst_22843;
var G__22861 = inst_22846;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22860,G__22861) : f.call(null,G__22860,G__22861));
})();
var inst_22843__$1 = inst_22850;
var state_22857__$1 = (function (){var statearr_22862 = state_22857;
(statearr_22862[(7)] = inst_22843__$1);

return statearr_22862;
})();
var statearr_22863_22878 = state_22857__$1;
(statearr_22863_22878[(2)] = null);

(statearr_22863_22878[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22858 === (5))){
var inst_22843 = (state_22857[(7)]);
var state_22857__$1 = state_22857;
var statearr_22864_22879 = state_22857__$1;
(statearr_22864_22879[(2)] = inst_22843);

(statearr_22864_22879[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22858 === (4))){
var inst_22846 = (state_22857[(8)]);
var inst_22846__$1 = (state_22857[(2)]);
var inst_22847 = (inst_22846__$1 == null);
var state_22857__$1 = (function (){var statearr_22865 = state_22857;
(statearr_22865[(8)] = inst_22846__$1);

return statearr_22865;
})();
if(cljs.core.truth_(inst_22847)){
var statearr_22866_22880 = state_22857__$1;
(statearr_22866_22880[(1)] = (5));

} else {
var statearr_22867_22881 = state_22857__$1;
(statearr_22867_22881[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22858 === (3))){
var inst_22855 = (state_22857[(2)]);
var state_22857__$1 = state_22857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22857__$1,inst_22855);
} else {
if((state_val_22858 === (2))){
var state_22857__$1 = state_22857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22857__$1,(4),ch);
} else {
if((state_val_22858 === (1))){
var inst_22843 = init;
var state_22857__$1 = (function (){var statearr_22868 = state_22857;
(statearr_22868[(7)] = inst_22843);

return statearr_22868;
})();
var statearr_22869_22882 = state_22857__$1;
(statearr_22869_22882[(2)] = null);

(statearr_22869_22882[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11307__auto__))
;
return ((function (switch__11227__auto__,c__11307__auto__){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_22873 = [null,null,null,null,null,null,null,null,null];
(statearr_22873[(0)] = state_machine__11228__auto__);

(statearr_22873[(1)] = (1));

return statearr_22873;
});
var state_machine__11228__auto____1 = (function (state_22857){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_22857);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e22874){if((e22874 instanceof Object)){
var ex__11231__auto__ = e22874;
var statearr_22875_22883 = state_22857;
(statearr_22875_22883[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22857);

return cljs.core.constant$keyword$21;
} else {
throw e22874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__22884 = state_22857;
state_22857 = G__22884;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_22857){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_22857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__))
})();
var state__11309__auto__ = (function (){var statearr_22876 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_22876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_22876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__))
);

return c__11307__auto__;
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
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__){
return (function (state_22961){
var state_val_22962 = (state_22961[(1)]);
if((state_val_22962 === (7))){
var inst_22943 = (state_22961[(2)]);
var state_22961__$1 = state_22961;
var statearr_22963_22986 = state_22961__$1;
(statearr_22963_22986[(2)] = inst_22943);

(statearr_22963_22986[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (1))){
var inst_22937 = cljs.core.seq(coll);
var inst_22938 = inst_22937;
var state_22961__$1 = (function (){var statearr_22964 = state_22961;
(statearr_22964[(7)] = inst_22938);

return statearr_22964;
})();
var statearr_22965_22987 = state_22961__$1;
(statearr_22965_22987[(2)] = null);

(statearr_22965_22987[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (4))){
var inst_22938 = (state_22961[(7)]);
var inst_22941 = cljs.core.first(inst_22938);
var state_22961__$1 = state_22961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22961__$1,(7),ch,inst_22941);
} else {
if((state_val_22962 === (13))){
var inst_22955 = (state_22961[(2)]);
var state_22961__$1 = state_22961;
var statearr_22966_22988 = state_22961__$1;
(statearr_22966_22988[(2)] = inst_22955);

(statearr_22966_22988[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (6))){
var inst_22946 = (state_22961[(2)]);
var state_22961__$1 = state_22961;
if(cljs.core.truth_(inst_22946)){
var statearr_22967_22989 = state_22961__$1;
(statearr_22967_22989[(1)] = (8));

} else {
var statearr_22968_22990 = state_22961__$1;
(statearr_22968_22990[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (3))){
var inst_22959 = (state_22961[(2)]);
var state_22961__$1 = state_22961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22961__$1,inst_22959);
} else {
if((state_val_22962 === (12))){
var state_22961__$1 = state_22961;
var statearr_22969_22991 = state_22961__$1;
(statearr_22969_22991[(2)] = null);

(statearr_22969_22991[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (2))){
var inst_22938 = (state_22961[(7)]);
var state_22961__$1 = state_22961;
if(cljs.core.truth_(inst_22938)){
var statearr_22970_22992 = state_22961__$1;
(statearr_22970_22992[(1)] = (4));

} else {
var statearr_22971_22993 = state_22961__$1;
(statearr_22971_22993[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (11))){
var inst_22952 = cljs.core.async.close_BANG_(ch);
var state_22961__$1 = state_22961;
var statearr_22972_22994 = state_22961__$1;
(statearr_22972_22994[(2)] = inst_22952);

(statearr_22972_22994[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (9))){
var state_22961__$1 = state_22961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22973_22995 = state_22961__$1;
(statearr_22973_22995[(1)] = (11));

} else {
var statearr_22974_22996 = state_22961__$1;
(statearr_22974_22996[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (5))){
var inst_22938 = (state_22961[(7)]);
var state_22961__$1 = state_22961;
var statearr_22975_22997 = state_22961__$1;
(statearr_22975_22997[(2)] = inst_22938);

(statearr_22975_22997[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (10))){
var inst_22957 = (state_22961[(2)]);
var state_22961__$1 = state_22961;
var statearr_22976_22998 = state_22961__$1;
(statearr_22976_22998[(2)] = inst_22957);

(statearr_22976_22998[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22962 === (8))){
var inst_22938 = (state_22961[(7)]);
var inst_22948 = cljs.core.next(inst_22938);
var inst_22938__$1 = inst_22948;
var state_22961__$1 = (function (){var statearr_22977 = state_22961;
(statearr_22977[(7)] = inst_22938__$1);

return statearr_22977;
})();
var statearr_22978_22999 = state_22961__$1;
(statearr_22978_22999[(2)] = null);

(statearr_22978_22999[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto__))
;
return ((function (switch__11227__auto__,c__11307__auto__){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_22982 = [null,null,null,null,null,null,null,null];
(statearr_22982[(0)] = state_machine__11228__auto__);

(statearr_22982[(1)] = (1));

return statearr_22982;
});
var state_machine__11228__auto____1 = (function (state_22961){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_22961);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e22983){if((e22983 instanceof Object)){
var ex__11231__auto__ = e22983;
var statearr_22984_23000 = state_22961;
(statearr_22984_23000[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22961);

return cljs.core.constant$keyword$21;
} else {
throw e22983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__23001 = state_22961;
state_22961 = G__23001;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_22961){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_22961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__))
})();
var state__11309__auto__ = (function (){var statearr_22985 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_22985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_22985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__))
);

return c__11307__auto__;
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
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj23003 = {};
return obj23003;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3852__auto__ = _;
if(and__3852__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3852__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4508__auto__ = (((_ == null))?null:_);
return (function (){var or__3864__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23007 = x__4508__auto__;
return goog.typeOf(G__23007);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj23009 = {};
return obj23009;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3852__auto__ = m;
if(and__3852__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3852__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4508__auto__ = (((m == null))?null:m);
return (function (){var or__3864__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23013 = x__4508__auto__;
return goog.typeOf(G__23013);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3852__auto__ = m;
if(and__3852__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3852__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4508__auto__ = (((m == null))?null:m);
return (function (){var or__3864__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23017 = x__4508__auto__;
return goog.typeOf(G__23017);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3852__auto__ = m;
if(and__3852__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3852__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4508__auto__ = (((m == null))?null:m);
return (function (){var or__3864__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23021 = x__4508__auto__;
return goog.typeOf(G__23021);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__23251 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23251) : cljs.core.atom.call(null,G__23251));
})();
var m = (function (){
if(typeof cljs.core.async.t23252 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23252 = (function (cs,ch,mult,meta23253){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23253 = meta23253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23252.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23252.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23252.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23252.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23255_23480 = self__.cs;
var G__23256_23481 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23255_23480,G__23256_23481) : cljs.core.reset_BANG_.call(null,G__23255_23480,G__23256_23481));

return null;
});})(cs))
;

cljs.core.async.t23252.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23254){
var self__ = this;
var _23254__$1 = this;
return self__.meta23253;
});})(cs))
;

cljs.core.async.t23252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23254,meta23253__$1){
var self__ = this;
var _23254__$1 = this;
return (new cljs.core.async.t23252(self__.cs,self__.ch,self__.mult,meta23253__$1));
});})(cs))
;

cljs.core.async.t23252.cljs$lang$type = true;

cljs.core.async.t23252.cljs$lang$ctorStr = "cljs.core.async/t23252";

cljs.core.async.t23252.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t23252");
});})(cs))
;

cljs.core.async.__GT_t23252 = ((function (cs){
return (function __GT_t23252(cs__$1,ch__$1,mult__$1,meta23253){
return (new cljs.core.async.t23252(cs__$1,ch__$1,mult__$1,meta23253));
});})(cs))
;

}

return (new cljs.core.async.t23252(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23257 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23257) : cljs.core.atom.call(null,G__23257));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11307__auto___23482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___23482,cs,m,dchan,dctr,done){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___23482,cs,m,dchan,dctr,done){
return (function (state_23388){
var state_val_23389 = (state_23388[(1)]);
if((state_val_23389 === (7))){
var inst_23384 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23390_23483 = state_23388__$1;
(statearr_23390_23483[(2)] = inst_23384);

(statearr_23390_23483[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (20))){
var inst_23289 = (state_23388[(7)]);
var inst_23299 = cljs.core.first(inst_23289);
var inst_23300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23299,(0),null);
var inst_23301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23299,(1),null);
var state_23388__$1 = (function (){var statearr_23391 = state_23388;
(statearr_23391[(8)] = inst_23300);

return statearr_23391;
})();
if(cljs.core.truth_(inst_23301)){
var statearr_23392_23484 = state_23388__$1;
(statearr_23392_23484[(1)] = (22));

} else {
var statearr_23393_23485 = state_23388__$1;
(statearr_23393_23485[(1)] = (23));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (27))){
var inst_23336 = (state_23388[(9)]);
var inst_23329 = (state_23388[(10)]);
var inst_23260 = (state_23388[(11)]);
var inst_23331 = (state_23388[(12)]);
var inst_23336__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23329,inst_23331);
var inst_23337 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23336__$1,inst_23260,done);
var state_23388__$1 = (function (){var statearr_23394 = state_23388;
(statearr_23394[(9)] = inst_23336__$1);

return statearr_23394;
})();
if(cljs.core.truth_(inst_23337)){
var statearr_23395_23486 = state_23388__$1;
(statearr_23395_23486[(1)] = (30));

} else {
var statearr_23396_23487 = state_23388__$1;
(statearr_23396_23487[(1)] = (31));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (1))){
var state_23388__$1 = state_23388;
var statearr_23397_23488 = state_23388__$1;
(statearr_23397_23488[(2)] = null);

(statearr_23397_23488[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (24))){
var inst_23289 = (state_23388[(7)]);
var inst_23306 = (state_23388[(2)]);
var inst_23307 = cljs.core.next(inst_23289);
var inst_23269 = inst_23307;
var inst_23270 = null;
var inst_23271 = (0);
var inst_23272 = (0);
var state_23388__$1 = (function (){var statearr_23398 = state_23388;
(statearr_23398[(13)] = inst_23270);

(statearr_23398[(14)] = inst_23269);

(statearr_23398[(15)] = inst_23306);

(statearr_23398[(16)] = inst_23272);

(statearr_23398[(17)] = inst_23271);

return statearr_23398;
})();
var statearr_23399_23489 = state_23388__$1;
(statearr_23399_23489[(2)] = null);

(statearr_23399_23489[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (39))){
var state_23388__$1 = state_23388;
var statearr_23403_23490 = state_23388__$1;
(statearr_23403_23490[(2)] = null);

(statearr_23403_23490[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (4))){
var inst_23260 = (state_23388[(11)]);
var inst_23260__$1 = (state_23388[(2)]);
var inst_23261 = (inst_23260__$1 == null);
var state_23388__$1 = (function (){var statearr_23404 = state_23388;
(statearr_23404[(11)] = inst_23260__$1);

return statearr_23404;
})();
if(cljs.core.truth_(inst_23261)){
var statearr_23405_23491 = state_23388__$1;
(statearr_23405_23491[(1)] = (5));

} else {
var statearr_23406_23492 = state_23388__$1;
(statearr_23406_23492[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (15))){
var inst_23270 = (state_23388[(13)]);
var inst_23269 = (state_23388[(14)]);
var inst_23272 = (state_23388[(16)]);
var inst_23271 = (state_23388[(17)]);
var inst_23285 = (state_23388[(2)]);
var inst_23286 = (inst_23272 + (1));
var tmp23400 = inst_23270;
var tmp23401 = inst_23269;
var tmp23402 = inst_23271;
var inst_23269__$1 = tmp23401;
var inst_23270__$1 = tmp23400;
var inst_23271__$1 = tmp23402;
var inst_23272__$1 = inst_23286;
var state_23388__$1 = (function (){var statearr_23407 = state_23388;
(statearr_23407[(18)] = inst_23285);

(statearr_23407[(13)] = inst_23270__$1);

(statearr_23407[(14)] = inst_23269__$1);

(statearr_23407[(16)] = inst_23272__$1);

(statearr_23407[(17)] = inst_23271__$1);

return statearr_23407;
})();
var statearr_23408_23493 = state_23388__$1;
(statearr_23408_23493[(2)] = null);

(statearr_23408_23493[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (21))){
var inst_23310 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23412_23494 = state_23388__$1;
(statearr_23412_23494[(2)] = inst_23310);

(statearr_23412_23494[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (31))){
var inst_23336 = (state_23388[(9)]);
var inst_23340 = done(null);
var inst_23341 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23336);
var state_23388__$1 = (function (){var statearr_23413 = state_23388;
(statearr_23413[(19)] = inst_23340);

return statearr_23413;
})();
var statearr_23414_23495 = state_23388__$1;
(statearr_23414_23495[(2)] = inst_23341);

(statearr_23414_23495[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (32))){
var inst_23330 = (state_23388[(20)]);
var inst_23329 = (state_23388[(10)]);
var inst_23328 = (state_23388[(21)]);
var inst_23331 = (state_23388[(12)]);
var inst_23343 = (state_23388[(2)]);
var inst_23344 = (inst_23331 + (1));
var tmp23409 = inst_23330;
var tmp23410 = inst_23329;
var tmp23411 = inst_23328;
var inst_23328__$1 = tmp23411;
var inst_23329__$1 = tmp23410;
var inst_23330__$1 = tmp23409;
var inst_23331__$1 = inst_23344;
var state_23388__$1 = (function (){var statearr_23415 = state_23388;
(statearr_23415[(20)] = inst_23330__$1);

(statearr_23415[(10)] = inst_23329__$1);

(statearr_23415[(22)] = inst_23343);

(statearr_23415[(21)] = inst_23328__$1);

(statearr_23415[(12)] = inst_23331__$1);

return statearr_23415;
})();
var statearr_23416_23496 = state_23388__$1;
(statearr_23416_23496[(2)] = null);

(statearr_23416_23496[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (40))){
var inst_23356 = (state_23388[(23)]);
var inst_23360 = done(null);
var inst_23361 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23356);
var state_23388__$1 = (function (){var statearr_23417 = state_23388;
(statearr_23417[(24)] = inst_23360);

return statearr_23417;
})();
var statearr_23418_23497 = state_23388__$1;
(statearr_23418_23497[(2)] = inst_23361);

(statearr_23418_23497[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (33))){
var inst_23347 = (state_23388[(25)]);
var inst_23349 = cljs.core.chunked_seq_QMARK_(inst_23347);
var state_23388__$1 = state_23388;
if(inst_23349){
var statearr_23419_23498 = state_23388__$1;
(statearr_23419_23498[(1)] = (36));

} else {
var statearr_23420_23499 = state_23388__$1;
(statearr_23420_23499[(1)] = (37));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (13))){
var inst_23279 = (state_23388[(26)]);
var inst_23282 = cljs.core.async.close_BANG_(inst_23279);
var state_23388__$1 = state_23388;
var statearr_23421_23500 = state_23388__$1;
(statearr_23421_23500[(2)] = inst_23282);

(statearr_23421_23500[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (22))){
var inst_23300 = (state_23388[(8)]);
var inst_23303 = cljs.core.async.close_BANG_(inst_23300);
var state_23388__$1 = state_23388;
var statearr_23422_23501 = state_23388__$1;
(statearr_23422_23501[(2)] = inst_23303);

(statearr_23422_23501[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (36))){
var inst_23347 = (state_23388[(25)]);
var inst_23351 = cljs.core.chunk_first(inst_23347);
var inst_23352 = cljs.core.chunk_rest(inst_23347);
var inst_23353 = cljs.core.count(inst_23351);
var inst_23328 = inst_23352;
var inst_23329 = inst_23351;
var inst_23330 = inst_23353;
var inst_23331 = (0);
var state_23388__$1 = (function (){var statearr_23423 = state_23388;
(statearr_23423[(20)] = inst_23330);

(statearr_23423[(10)] = inst_23329);

(statearr_23423[(21)] = inst_23328);

(statearr_23423[(12)] = inst_23331);

return statearr_23423;
})();
var statearr_23424_23502 = state_23388__$1;
(statearr_23424_23502[(2)] = null);

(statearr_23424_23502[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (41))){
var inst_23347 = (state_23388[(25)]);
var inst_23363 = (state_23388[(2)]);
var inst_23364 = cljs.core.next(inst_23347);
var inst_23328 = inst_23364;
var inst_23329 = null;
var inst_23330 = (0);
var inst_23331 = (0);
var state_23388__$1 = (function (){var statearr_23425 = state_23388;
(statearr_23425[(20)] = inst_23330);

(statearr_23425[(27)] = inst_23363);

(statearr_23425[(10)] = inst_23329);

(statearr_23425[(21)] = inst_23328);

(statearr_23425[(12)] = inst_23331);

return statearr_23425;
})();
var statearr_23426_23503 = state_23388__$1;
(statearr_23426_23503[(2)] = null);

(statearr_23426_23503[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (43))){
var state_23388__$1 = state_23388;
var statearr_23427_23504 = state_23388__$1;
(statearr_23427_23504[(2)] = null);

(statearr_23427_23504[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (29))){
var inst_23372 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23428_23505 = state_23388__$1;
(statearr_23428_23505[(2)] = inst_23372);

(statearr_23428_23505[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (44))){
var inst_23381 = (state_23388[(2)]);
var state_23388__$1 = (function (){var statearr_23429 = state_23388;
(statearr_23429[(28)] = inst_23381);

return statearr_23429;
})();
var statearr_23430_23506 = state_23388__$1;
(statearr_23430_23506[(2)] = null);

(statearr_23430_23506[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (6))){
var inst_23320 = (state_23388[(29)]);
var inst_23319 = (function (){var G__23431 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23431) : cljs.core.deref.call(null,G__23431));
})();
var inst_23320__$1 = cljs.core.keys(inst_23319);
var inst_23321 = cljs.core.count(inst_23320__$1);
var inst_23322 = (function (){var G__23432 = dctr;
var G__23433 = inst_23321;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23432,G__23433) : cljs.core.reset_BANG_.call(null,G__23432,G__23433));
})();
var inst_23327 = cljs.core.seq(inst_23320__$1);
var inst_23328 = inst_23327;
var inst_23329 = null;
var inst_23330 = (0);
var inst_23331 = (0);
var state_23388__$1 = (function (){var statearr_23434 = state_23388;
(statearr_23434[(29)] = inst_23320__$1);

(statearr_23434[(30)] = inst_23322);

(statearr_23434[(20)] = inst_23330);

(statearr_23434[(10)] = inst_23329);

(statearr_23434[(21)] = inst_23328);

(statearr_23434[(12)] = inst_23331);

return statearr_23434;
})();
var statearr_23435_23507 = state_23388__$1;
(statearr_23435_23507[(2)] = null);

(statearr_23435_23507[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (28))){
var inst_23328 = (state_23388[(21)]);
var inst_23347 = (state_23388[(25)]);
var inst_23347__$1 = cljs.core.seq(inst_23328);
var state_23388__$1 = (function (){var statearr_23436 = state_23388;
(statearr_23436[(25)] = inst_23347__$1);

return statearr_23436;
})();
if(inst_23347__$1){
var statearr_23437_23508 = state_23388__$1;
(statearr_23437_23508[(1)] = (33));

} else {
var statearr_23438_23509 = state_23388__$1;
(statearr_23438_23509[(1)] = (34));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (25))){
var inst_23330 = (state_23388[(20)]);
var inst_23331 = (state_23388[(12)]);
var inst_23333 = (inst_23331 < inst_23330);
var inst_23334 = inst_23333;
var state_23388__$1 = state_23388;
if(cljs.core.truth_(inst_23334)){
var statearr_23439_23510 = state_23388__$1;
(statearr_23439_23510[(1)] = (27));

} else {
var statearr_23440_23511 = state_23388__$1;
(statearr_23440_23511[(1)] = (28));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (34))){
var state_23388__$1 = state_23388;
var statearr_23441_23512 = state_23388__$1;
(statearr_23441_23512[(2)] = null);

(statearr_23441_23512[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (17))){
var state_23388__$1 = state_23388;
var statearr_23442_23513 = state_23388__$1;
(statearr_23442_23513[(2)] = null);

(statearr_23442_23513[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (3))){
var inst_23386 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23388__$1,inst_23386);
} else {
if((state_val_23389 === (12))){
var inst_23315 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23443_23514 = state_23388__$1;
(statearr_23443_23514[(2)] = inst_23315);

(statearr_23443_23514[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (2))){
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23388__$1,(4),ch);
} else {
if((state_val_23389 === (23))){
var state_23388__$1 = state_23388;
var statearr_23444_23515 = state_23388__$1;
(statearr_23444_23515[(2)] = null);

(statearr_23444_23515[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (35))){
var inst_23370 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23445_23516 = state_23388__$1;
(statearr_23445_23516[(2)] = inst_23370);

(statearr_23445_23516[(1)] = (29));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (19))){
var inst_23289 = (state_23388[(7)]);
var inst_23293 = cljs.core.chunk_first(inst_23289);
var inst_23294 = cljs.core.chunk_rest(inst_23289);
var inst_23295 = cljs.core.count(inst_23293);
var inst_23269 = inst_23294;
var inst_23270 = inst_23293;
var inst_23271 = inst_23295;
var inst_23272 = (0);
var state_23388__$1 = (function (){var statearr_23446 = state_23388;
(statearr_23446[(13)] = inst_23270);

(statearr_23446[(14)] = inst_23269);

(statearr_23446[(16)] = inst_23272);

(statearr_23446[(17)] = inst_23271);

return statearr_23446;
})();
var statearr_23447_23517 = state_23388__$1;
(statearr_23447_23517[(2)] = null);

(statearr_23447_23517[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (11))){
var inst_23269 = (state_23388[(14)]);
var inst_23289 = (state_23388[(7)]);
var inst_23289__$1 = cljs.core.seq(inst_23269);
var state_23388__$1 = (function (){var statearr_23448 = state_23388;
(statearr_23448[(7)] = inst_23289__$1);

return statearr_23448;
})();
if(inst_23289__$1){
var statearr_23449_23518 = state_23388__$1;
(statearr_23449_23518[(1)] = (16));

} else {
var statearr_23450_23519 = state_23388__$1;
(statearr_23450_23519[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (9))){
var inst_23317 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23451_23520 = state_23388__$1;
(statearr_23451_23520[(2)] = inst_23317);

(statearr_23451_23520[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (5))){
var inst_23267 = (function (){var G__23452 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23452) : cljs.core.deref.call(null,G__23452));
})();
var inst_23268 = cljs.core.seq(inst_23267);
var inst_23269 = inst_23268;
var inst_23270 = null;
var inst_23271 = (0);
var inst_23272 = (0);
var state_23388__$1 = (function (){var statearr_23453 = state_23388;
(statearr_23453[(13)] = inst_23270);

(statearr_23453[(14)] = inst_23269);

(statearr_23453[(16)] = inst_23272);

(statearr_23453[(17)] = inst_23271);

return statearr_23453;
})();
var statearr_23454_23521 = state_23388__$1;
(statearr_23454_23521[(2)] = null);

(statearr_23454_23521[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (14))){
var state_23388__$1 = state_23388;
var statearr_23455_23522 = state_23388__$1;
(statearr_23455_23522[(2)] = null);

(statearr_23455_23522[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (45))){
var inst_23378 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23456_23523 = state_23388__$1;
(statearr_23456_23523[(2)] = inst_23378);

(statearr_23456_23523[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (26))){
var inst_23320 = (state_23388[(29)]);
var inst_23374 = (state_23388[(2)]);
var inst_23375 = cljs.core.seq(inst_23320);
var state_23388__$1 = (function (){var statearr_23457 = state_23388;
(statearr_23457[(31)] = inst_23374);

return statearr_23457;
})();
if(inst_23375){
var statearr_23458_23524 = state_23388__$1;
(statearr_23458_23524[(1)] = (42));

} else {
var statearr_23459_23525 = state_23388__$1;
(statearr_23459_23525[(1)] = (43));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (16))){
var inst_23289 = (state_23388[(7)]);
var inst_23291 = cljs.core.chunked_seq_QMARK_(inst_23289);
var state_23388__$1 = state_23388;
if(inst_23291){
var statearr_23460_23526 = state_23388__$1;
(statearr_23460_23526[(1)] = (19));

} else {
var statearr_23461_23527 = state_23388__$1;
(statearr_23461_23527[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (38))){
var inst_23367 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23462_23528 = state_23388__$1;
(statearr_23462_23528[(2)] = inst_23367);

(statearr_23462_23528[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (30))){
var state_23388__$1 = state_23388;
var statearr_23463_23529 = state_23388__$1;
(statearr_23463_23529[(2)] = null);

(statearr_23463_23529[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (10))){
var inst_23270 = (state_23388[(13)]);
var inst_23272 = (state_23388[(16)]);
var inst_23278 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23270,inst_23272);
var inst_23279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23278,(0),null);
var inst_23280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23278,(1),null);
var state_23388__$1 = (function (){var statearr_23464 = state_23388;
(statearr_23464[(26)] = inst_23279);

return statearr_23464;
})();
if(cljs.core.truth_(inst_23280)){
var statearr_23465_23530 = state_23388__$1;
(statearr_23465_23530[(1)] = (13));

} else {
var statearr_23466_23531 = state_23388__$1;
(statearr_23466_23531[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (18))){
var inst_23313 = (state_23388[(2)]);
var state_23388__$1 = state_23388;
var statearr_23467_23532 = state_23388__$1;
(statearr_23467_23532[(2)] = inst_23313);

(statearr_23467_23532[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (42))){
var state_23388__$1 = state_23388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23388__$1,(45),dchan);
} else {
if((state_val_23389 === (37))){
var inst_23260 = (state_23388[(11)]);
var inst_23356 = (state_23388[(23)]);
var inst_23347 = (state_23388[(25)]);
var inst_23356__$1 = cljs.core.first(inst_23347);
var inst_23357 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23356__$1,inst_23260,done);
var state_23388__$1 = (function (){var statearr_23468 = state_23388;
(statearr_23468[(23)] = inst_23356__$1);

return statearr_23468;
})();
if(cljs.core.truth_(inst_23357)){
var statearr_23469_23533 = state_23388__$1;
(statearr_23469_23533[(1)] = (39));

} else {
var statearr_23470_23534 = state_23388__$1;
(statearr_23470_23534[(1)] = (40));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23389 === (8))){
var inst_23272 = (state_23388[(16)]);
var inst_23271 = (state_23388[(17)]);
var inst_23274 = (inst_23272 < inst_23271);
var inst_23275 = inst_23274;
var state_23388__$1 = state_23388;
if(cljs.core.truth_(inst_23275)){
var statearr_23471_23535 = state_23388__$1;
(statearr_23471_23535[(1)] = (10));

} else {
var statearr_23472_23536 = state_23388__$1;
(statearr_23472_23536[(1)] = (11));

}

return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___23482,cs,m,dchan,dctr,done))
;
return ((function (switch__11227__auto__,c__11307__auto___23482,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_23476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23476[(0)] = state_machine__11228__auto__);

(statearr_23476[(1)] = (1));

return statearr_23476;
});
var state_machine__11228__auto____1 = (function (state_23388){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_23388);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e23477){if((e23477 instanceof Object)){
var ex__11231__auto__ = e23477;
var statearr_23478_23537 = state_23388;
(statearr_23478_23537[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23388);

return cljs.core.constant$keyword$21;
} else {
throw e23477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__23538 = state_23388;
state_23388 = G__23538;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_23388){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_23388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___23482,cs,m,dchan,dctr,done))
})();
var state__11309__auto__ = (function (){var statearr_23479 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_23479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___23482);

return statearr_23479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___23482,cs,m,dchan,dctr,done))
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
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

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
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj23543 = {};
return obj23543;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3852__auto__ = m;
if(and__3852__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3852__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4508__auto__ = (((m == null))?null:m);
return (function (){var or__3864__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23547 = x__4508__auto__;
return goog.typeOf(G__23547);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3852__auto__ = m;
if(and__3852__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3852__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4508__auto__ = (((m == null))?null:m);
return (function (){var or__3864__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23551 = x__4508__auto__;
return goog.typeOf(G__23551);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3852__auto__ = m;
if(and__3852__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3852__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4508__auto__ = (((m == null))?null:m);
return (function (){var or__3864__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23555 = x__4508__auto__;
return goog.typeOf(G__23555);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3852__auto__ = m;
if(and__3852__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3852__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4508__auto__ = (((m == null))?null:m);
return (function (){var or__3864__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23559 = x__4508__auto__;
return goog.typeOf(G__23559);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3852__auto__ = m;
if(and__3852__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3852__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4508__auto__ = (((m == null))?null:m);
return (function (){var or__3864__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23563 = x__4508__auto__;
return goog.typeOf(G__23563);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23564){
var map__23570 = p__23564;
var map__23570__$1 = ((cljs.core.seq_QMARK_(map__23570))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23570):map__23570);
var opts = map__23570__$1;
var statearr_23571_23575 = state;
(statearr_23571_23575[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__23570,map__23570__$1,opts){
return (function (val){
var statearr_23572_23576 = state;
(statearr_23572_23576[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23570,map__23570__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_23573_23577 = state;
(statearr_23573_23577[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23574 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23574) : cljs.core.deref.call(null,G__23574));
})());


return cljs.core.constant$keyword$21;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23564 = null;
if (arguments.length > 3) {
var G__23578__i = 0, G__23578__a = new Array(arguments.length -  3);
while (G__23578__i < G__23578__a.length) {G__23578__a[G__23578__i] = arguments[G__23578__i + 3]; ++G__23578__i;}
  p__23564 = new cljs.core.IndexedSeq(G__23578__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23564);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23579){
var state = cljs.core.first(arglist__23579);
arglist__23579 = cljs.core.next(arglist__23579);
var cont_block = cljs.core.first(arglist__23579);
arglist__23579 = cljs.core.next(arglist__23579);
var ports = cljs.core.first(arglist__23579);
var p__23564 = cljs.core.rest(arglist__23579);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23564);
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
var cs = (function (){var G__23713 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23713) : cljs.core.atom.call(null,G__23713));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$32);
var solo_mode = (function (){var G__23714 = cljs.core.constant$keyword$31;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23714) : cljs.core.atom.call(null,G__23714));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__23715 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__23715) : attr.call(null,G__23715));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__23716 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23716) : cljs.core.deref.call(null,G__23716));
})();
var mode = (function (){var G__23717 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23717) : cljs.core.deref.call(null,G__23717));
})();
var solos = pick(cljs.core.constant$keyword$32,chs);
var pauses = pick(cljs.core.constant$keyword$30,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,solos,cljs.core.constant$keyword$34,pick(cljs.core.constant$keyword$31,chs),cljs.core.constant$keyword$35,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$30)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t23718 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23718 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23719){
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
this.meta23719 = meta23719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23718.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23718.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23718.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23718.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23721_23846 = self__.cs;
var G__23722_23847 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23721_23846,G__23722_23847) : cljs.core.reset_BANG_.call(null,G__23721_23846,G__23722_23847));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23718.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23718.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__23723 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__23723) : self__.solo_modes.call(null,G__23723));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__23724_23848 = self__.solo_mode;
var G__23725_23849 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23724_23848,G__23725_23849) : cljs.core.reset_BANG_.call(null,G__23724_23848,G__23725_23849));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23718.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23720){
var self__ = this;
var _23720__$1 = this;
return self__.meta23719;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23720,meta23719__$1){
var self__ = this;
var _23720__$1 = this;
return (new cljs.core.async.t23718(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23719__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23718.cljs$lang$type = true;

cljs.core.async.t23718.cljs$lang$ctorStr = "cljs.core.async/t23718";

cljs.core.async.t23718.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t23718");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23718 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23718(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23719){
return (new cljs.core.async.t23718(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23719));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23718(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11307__auto___23850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___23850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___23850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23797){
var state_val_23798 = (state_23797[(1)]);
if((state_val_23798 === (7))){
var inst_23739 = (state_23797[(7)]);
var inst_23744 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23739);
var state_23797__$1 = state_23797;
var statearr_23799_23851 = state_23797__$1;
(statearr_23799_23851[(2)] = inst_23744);

(statearr_23799_23851[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (20))){
var inst_23754 = (state_23797[(8)]);
var state_23797__$1 = state_23797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23797__$1,(23),out,inst_23754);
} else {
if((state_val_23798 === (1))){
var inst_23729 = (state_23797[(9)]);
var inst_23729__$1 = calc_state();
var inst_23730 = cljs.core.seq_QMARK_(inst_23729__$1);
var state_23797__$1 = (function (){var statearr_23800 = state_23797;
(statearr_23800[(9)] = inst_23729__$1);

return statearr_23800;
})();
if(inst_23730){
var statearr_23801_23852 = state_23797__$1;
(statearr_23801_23852[(1)] = (2));

} else {
var statearr_23802_23853 = state_23797__$1;
(statearr_23802_23853[(1)] = (3));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (24))){
var inst_23747 = (state_23797[(10)]);
var inst_23739 = inst_23747;
var state_23797__$1 = (function (){var statearr_23803 = state_23797;
(statearr_23803[(7)] = inst_23739);

return statearr_23803;
})();
var statearr_23804_23854 = state_23797__$1;
(statearr_23804_23854[(2)] = null);

(statearr_23804_23854[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (4))){
var inst_23729 = (state_23797[(9)]);
var inst_23735 = (state_23797[(2)]);
var inst_23736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23735,cljs.core.constant$keyword$35);
var inst_23737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23735,cljs.core.constant$keyword$34);
var inst_23738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23735,cljs.core.constant$keyword$33);
var inst_23739 = inst_23729;
var state_23797__$1 = (function (){var statearr_23805 = state_23797;
(statearr_23805[(11)] = inst_23736);

(statearr_23805[(7)] = inst_23739);

(statearr_23805[(12)] = inst_23738);

(statearr_23805[(13)] = inst_23737);

return statearr_23805;
})();
var statearr_23806_23855 = state_23797__$1;
(statearr_23806_23855[(2)] = null);

(statearr_23806_23855[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (15))){
var state_23797__$1 = state_23797;
var statearr_23807_23856 = state_23797__$1;
(statearr_23807_23856[(2)] = null);

(statearr_23807_23856[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (21))){
var inst_23747 = (state_23797[(10)]);
var inst_23739 = inst_23747;
var state_23797__$1 = (function (){var statearr_23808 = state_23797;
(statearr_23808[(7)] = inst_23739);

return statearr_23808;
})();
var statearr_23809_23857 = state_23797__$1;
(statearr_23809_23857[(2)] = null);

(statearr_23809_23857[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (13))){
var inst_23793 = (state_23797[(2)]);
var state_23797__$1 = state_23797;
var statearr_23810_23858 = state_23797__$1;
(statearr_23810_23858[(2)] = inst_23793);

(statearr_23810_23858[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (22))){
var inst_23791 = (state_23797[(2)]);
var state_23797__$1 = state_23797;
var statearr_23811_23859 = state_23797__$1;
(statearr_23811_23859[(2)] = inst_23791);

(statearr_23811_23859[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (6))){
var inst_23795 = (state_23797[(2)]);
var state_23797__$1 = state_23797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23797__$1,inst_23795);
} else {
if((state_val_23798 === (25))){
var state_23797__$1 = state_23797;
var statearr_23812_23860 = state_23797__$1;
(statearr_23812_23860[(2)] = null);

(statearr_23812_23860[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (17))){
var inst_23770 = (state_23797[(14)]);
var state_23797__$1 = state_23797;
var statearr_23813_23861 = state_23797__$1;
(statearr_23813_23861[(2)] = inst_23770);

(statearr_23813_23861[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (3))){
var inst_23729 = (state_23797[(9)]);
var state_23797__$1 = state_23797;
var statearr_23814_23862 = state_23797__$1;
(statearr_23814_23862[(2)] = inst_23729);

(statearr_23814_23862[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (12))){
var inst_23755 = (state_23797[(15)]);
var inst_23750 = (state_23797[(16)]);
var inst_23770 = (state_23797[(14)]);
var inst_23770__$1 = (function (){var G__23815 = inst_23755;
return (inst_23750.cljs$core$IFn$_invoke$arity$1 ? inst_23750.cljs$core$IFn$_invoke$arity$1(G__23815) : inst_23750.call(null,G__23815));
})();
var state_23797__$1 = (function (){var statearr_23816 = state_23797;
(statearr_23816[(14)] = inst_23770__$1);

return statearr_23816;
})();
if(cljs.core.truth_(inst_23770__$1)){
var statearr_23817_23863 = state_23797__$1;
(statearr_23817_23863[(1)] = (17));

} else {
var statearr_23818_23864 = state_23797__$1;
(statearr_23818_23864[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (2))){
var inst_23729 = (state_23797[(9)]);
var inst_23732 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23729);
var state_23797__$1 = state_23797;
var statearr_23819_23865 = state_23797__$1;
(statearr_23819_23865[(2)] = inst_23732);

(statearr_23819_23865[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (23))){
var inst_23782 = (state_23797[(2)]);
var state_23797__$1 = state_23797;
if(cljs.core.truth_(inst_23782)){
var statearr_23820_23866 = state_23797__$1;
(statearr_23820_23866[(1)] = (24));

} else {
var statearr_23821_23867 = state_23797__$1;
(statearr_23821_23867[(1)] = (25));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (19))){
var inst_23779 = (state_23797[(2)]);
var state_23797__$1 = state_23797;
if(cljs.core.truth_(inst_23779)){
var statearr_23822_23868 = state_23797__$1;
(statearr_23822_23868[(1)] = (20));

} else {
var statearr_23823_23869 = state_23797__$1;
(statearr_23823_23869[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (11))){
var inst_23754 = (state_23797[(8)]);
var inst_23760 = (inst_23754 == null);
var state_23797__$1 = state_23797;
if(cljs.core.truth_(inst_23760)){
var statearr_23824_23870 = state_23797__$1;
(statearr_23824_23870[(1)] = (14));

} else {
var statearr_23825_23871 = state_23797__$1;
(statearr_23825_23871[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (9))){
var inst_23747 = (state_23797[(10)]);
var inst_23747__$1 = (state_23797[(2)]);
var inst_23748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23747__$1,cljs.core.constant$keyword$35);
var inst_23749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23747__$1,cljs.core.constant$keyword$34);
var inst_23750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23747__$1,cljs.core.constant$keyword$33);
var state_23797__$1 = (function (){var statearr_23826 = state_23797;
(statearr_23826[(17)] = inst_23749);

(statearr_23826[(16)] = inst_23750);

(statearr_23826[(10)] = inst_23747__$1);

return statearr_23826;
})();
return cljs.core.async.ioc_alts_BANG_(state_23797__$1,(10),inst_23748);
} else {
if((state_val_23798 === (5))){
var inst_23739 = (state_23797[(7)]);
var inst_23742 = cljs.core.seq_QMARK_(inst_23739);
var state_23797__$1 = state_23797;
if(inst_23742){
var statearr_23827_23872 = state_23797__$1;
(statearr_23827_23872[(1)] = (7));

} else {
var statearr_23828_23873 = state_23797__$1;
(statearr_23828_23873[(1)] = (8));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (14))){
var inst_23755 = (state_23797[(15)]);
var inst_23762 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23755);
var state_23797__$1 = state_23797;
var statearr_23829_23874 = state_23797__$1;
(statearr_23829_23874[(2)] = inst_23762);

(statearr_23829_23874[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (26))){
var inst_23787 = (state_23797[(2)]);
var state_23797__$1 = state_23797;
var statearr_23830_23875 = state_23797__$1;
(statearr_23830_23875[(2)] = inst_23787);

(statearr_23830_23875[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (16))){
var inst_23765 = (state_23797[(2)]);
var inst_23766 = calc_state();
var inst_23739 = inst_23766;
var state_23797__$1 = (function (){var statearr_23831 = state_23797;
(statearr_23831[(7)] = inst_23739);

(statearr_23831[(18)] = inst_23765);

return statearr_23831;
})();
var statearr_23832_23876 = state_23797__$1;
(statearr_23832_23876[(2)] = null);

(statearr_23832_23876[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (10))){
var inst_23755 = (state_23797[(15)]);
var inst_23754 = (state_23797[(8)]);
var inst_23753 = (state_23797[(2)]);
var inst_23754__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23753,(0),null);
var inst_23755__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23753,(1),null);
var inst_23756 = (inst_23754__$1 == null);
var inst_23757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23755__$1,change);
var inst_23758 = (inst_23756) || (inst_23757);
var state_23797__$1 = (function (){var statearr_23833 = state_23797;
(statearr_23833[(15)] = inst_23755__$1);

(statearr_23833[(8)] = inst_23754__$1);

return statearr_23833;
})();
if(cljs.core.truth_(inst_23758)){
var statearr_23834_23877 = state_23797__$1;
(statearr_23834_23877[(1)] = (11));

} else {
var statearr_23835_23878 = state_23797__$1;
(statearr_23835_23878[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (18))){
var inst_23755 = (state_23797[(15)]);
var inst_23749 = (state_23797[(17)]);
var inst_23750 = (state_23797[(16)]);
var inst_23774 = cljs.core.empty_QMARK_(inst_23750);
var inst_23775 = (function (){var G__23836 = inst_23755;
return (inst_23749.cljs$core$IFn$_invoke$arity$1 ? inst_23749.cljs$core$IFn$_invoke$arity$1(G__23836) : inst_23749.call(null,G__23836));
})();
var inst_23776 = cljs.core.not(inst_23775);
var inst_23777 = (inst_23774) && (inst_23776);
var state_23797__$1 = state_23797;
var statearr_23837_23879 = state_23797__$1;
(statearr_23837_23879[(2)] = inst_23777);

(statearr_23837_23879[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23798 === (8))){
var inst_23739 = (state_23797[(7)]);
var state_23797__$1 = state_23797;
var statearr_23838_23880 = state_23797__$1;
(statearr_23838_23880[(2)] = inst_23739);

(statearr_23838_23880[(1)] = (9));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___23850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11227__auto__,c__11307__auto___23850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_23842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23842[(0)] = state_machine__11228__auto__);

(statearr_23842[(1)] = (1));

return statearr_23842;
});
var state_machine__11228__auto____1 = (function (state_23797){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_23797);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e23843){if((e23843 instanceof Object)){
var ex__11231__auto__ = e23843;
var statearr_23844_23881 = state_23797;
(statearr_23844_23881[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23797);

return cljs.core.constant$keyword$21;
} else {
throw e23843;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__23882 = state_23797;
state_23797 = G__23882;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_23797){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_23797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___23850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11309__auto__ = (function (){var statearr_23845 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_23845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___23850);

return statearr_23845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___23850,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj23884 = {};
return obj23884;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3852__auto__ = p;
if(and__3852__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3852__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4508__auto__ = (((p == null))?null:p);
return (function (){var or__3864__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__23888 = x__4508__auto__;
return goog.typeOf(G__23888);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3852__auto__ = p;
if(and__3852__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3852__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4508__auto__ = (((p == null))?null:p);
return (function (){var or__3864__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__23892 = x__4508__auto__;
return goog.typeOf(G__23892);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3852__auto__ = p;
if(and__3852__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3852__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4508__auto__ = (((p == null))?null:p);
return (function (){var or__3864__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23898 = x__4508__auto__;
return goog.typeOf(G__23898);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3852__auto__ = p;
if(and__3852__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3852__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4508__auto__ = (((p == null))?null:p);
return (function (){var or__3864__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23900 = x__4508__auto__;
return goog.typeOf(G__23900);
})()]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__24039 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24039) : cljs.core.atom.call(null,G__24039));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3864__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24041 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24041) : cljs.core.deref.call(null,G__24041));
})(),topic);
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3864__auto__,mults){
return (function (p1__23901_SHARP_){
if(cljs.core.truth_((function (){var G__24042 = topic;
return (p1__23901_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23901_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24042) : p1__23901_SHARP_.call(null,G__24042));
})())){
return p1__23901_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23901_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24043 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24043) : buf_fn.call(null,G__24043));
})())));
}
});})(or__3864__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24044 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24044 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24045){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24045 = meta24045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24044.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24044.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__24047 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24047) : self__.ensure_mult.call(null,G__24047));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24044.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24048 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24048) : cljs.core.deref.call(null,G__24048));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24044.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24049 = self__.mults;
var G__24050 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24049,G__24050) : cljs.core.reset_BANG_.call(null,G__24049,G__24050));
});})(mults,ensure_mult))
;

cljs.core.async.t24044.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24044.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24046){
var self__ = this;
var _24046__$1 = this;
return self__.meta24045;
});})(mults,ensure_mult))
;

cljs.core.async.t24044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24046,meta24045__$1){
var self__ = this;
var _24046__$1 = this;
return (new cljs.core.async.t24044(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24045__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24044.cljs$lang$type = true;

cljs.core.async.t24044.cljs$lang$ctorStr = "cljs.core.async/t24044";

cljs.core.async.t24044.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t24044");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24044 = ((function (mults,ensure_mult){
return (function __GT_t24044(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24045){
return (new cljs.core.async.t24044(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24045));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24044(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11307__auto___24173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___24173,mults,ensure_mult,p){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___24173,mults,ensure_mult,p){
return (function (state_24122){
var state_val_24123 = (state_24122[(1)]);
if((state_val_24123 === (7))){
var inst_24118 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24124_24174 = state_24122__$1;
(statearr_24124_24174[(2)] = inst_24118);

(statearr_24124_24174[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (20))){
var state_24122__$1 = state_24122;
var statearr_24125_24175 = state_24122__$1;
(statearr_24125_24175[(2)] = null);

(statearr_24125_24175[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (1))){
var state_24122__$1 = state_24122;
var statearr_24126_24176 = state_24122__$1;
(statearr_24126_24176[(2)] = null);

(statearr_24126_24176[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (24))){
var inst_24101 = (state_24122[(7)]);
var inst_24110 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24101);
var state_24122__$1 = state_24122;
var statearr_24127_24177 = state_24122__$1;
(statearr_24127_24177[(2)] = inst_24110);

(statearr_24127_24177[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (4))){
var inst_24053 = (state_24122[(8)]);
var inst_24053__$1 = (state_24122[(2)]);
var inst_24054 = (inst_24053__$1 == null);
var state_24122__$1 = (function (){var statearr_24128 = state_24122;
(statearr_24128[(8)] = inst_24053__$1);

return statearr_24128;
})();
if(cljs.core.truth_(inst_24054)){
var statearr_24129_24178 = state_24122__$1;
(statearr_24129_24178[(1)] = (5));

} else {
var statearr_24130_24179 = state_24122__$1;
(statearr_24130_24179[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (15))){
var inst_24095 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24131_24180 = state_24122__$1;
(statearr_24131_24180[(2)] = inst_24095);

(statearr_24131_24180[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (21))){
var inst_24115 = (state_24122[(2)]);
var state_24122__$1 = (function (){var statearr_24132 = state_24122;
(statearr_24132[(9)] = inst_24115);

return statearr_24132;
})();
var statearr_24133_24181 = state_24122__$1;
(statearr_24133_24181[(2)] = null);

(statearr_24133_24181[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (13))){
var inst_24077 = (state_24122[(10)]);
var inst_24079 = cljs.core.chunked_seq_QMARK_(inst_24077);
var state_24122__$1 = state_24122;
if(inst_24079){
var statearr_24134_24182 = state_24122__$1;
(statearr_24134_24182[(1)] = (16));

} else {
var statearr_24135_24183 = state_24122__$1;
(statearr_24135_24183[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (22))){
var inst_24107 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
if(cljs.core.truth_(inst_24107)){
var statearr_24136_24184 = state_24122__$1;
(statearr_24136_24184[(1)] = (23));

} else {
var statearr_24137_24185 = state_24122__$1;
(statearr_24137_24185[(1)] = (24));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (6))){
var inst_24101 = (state_24122[(7)]);
var inst_24103 = (state_24122[(11)]);
var inst_24053 = (state_24122[(8)]);
var inst_24101__$1 = (function (){var G__24138 = inst_24053;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24138) : topic_fn.call(null,G__24138));
})();
var inst_24102 = (function (){var G__24139 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24139) : cljs.core.deref.call(null,G__24139));
})();
var inst_24103__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24102,inst_24101__$1);
var state_24122__$1 = (function (){var statearr_24140 = state_24122;
(statearr_24140[(7)] = inst_24101__$1);

(statearr_24140[(11)] = inst_24103__$1);

return statearr_24140;
})();
if(cljs.core.truth_(inst_24103__$1)){
var statearr_24141_24186 = state_24122__$1;
(statearr_24141_24186[(1)] = (19));

} else {
var statearr_24142_24187 = state_24122__$1;
(statearr_24142_24187[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (25))){
var inst_24112 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24143_24188 = state_24122__$1;
(statearr_24143_24188[(2)] = inst_24112);

(statearr_24143_24188[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (17))){
var inst_24077 = (state_24122[(10)]);
var inst_24086 = cljs.core.first(inst_24077);
var inst_24087 = cljs.core.async.muxch_STAR_(inst_24086);
var inst_24088 = cljs.core.async.close_BANG_(inst_24087);
var inst_24089 = cljs.core.next(inst_24077);
var inst_24063 = inst_24089;
var inst_24064 = null;
var inst_24065 = (0);
var inst_24066 = (0);
var state_24122__$1 = (function (){var statearr_24144 = state_24122;
(statearr_24144[(12)] = inst_24064);

(statearr_24144[(13)] = inst_24065);

(statearr_24144[(14)] = inst_24066);

(statearr_24144[(15)] = inst_24063);

(statearr_24144[(16)] = inst_24088);

return statearr_24144;
})();
var statearr_24145_24189 = state_24122__$1;
(statearr_24145_24189[(2)] = null);

(statearr_24145_24189[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (3))){
var inst_24120 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24122__$1,inst_24120);
} else {
if((state_val_24123 === (12))){
var inst_24097 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24146_24190 = state_24122__$1;
(statearr_24146_24190[(2)] = inst_24097);

(statearr_24146_24190[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (2))){
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24122__$1,(4),ch);
} else {
if((state_val_24123 === (23))){
var state_24122__$1 = state_24122;
var statearr_24147_24191 = state_24122__$1;
(statearr_24147_24191[(2)] = null);

(statearr_24147_24191[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (19))){
var inst_24103 = (state_24122[(11)]);
var inst_24053 = (state_24122[(8)]);
var inst_24105 = cljs.core.async.muxch_STAR_(inst_24103);
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24122__$1,(22),inst_24105,inst_24053);
} else {
if((state_val_24123 === (11))){
var inst_24077 = (state_24122[(10)]);
var inst_24063 = (state_24122[(15)]);
var inst_24077__$1 = cljs.core.seq(inst_24063);
var state_24122__$1 = (function (){var statearr_24148 = state_24122;
(statearr_24148[(10)] = inst_24077__$1);

return statearr_24148;
})();
if(inst_24077__$1){
var statearr_24149_24192 = state_24122__$1;
(statearr_24149_24192[(1)] = (13));

} else {
var statearr_24150_24193 = state_24122__$1;
(statearr_24150_24193[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (9))){
var inst_24099 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24151_24194 = state_24122__$1;
(statearr_24151_24194[(2)] = inst_24099);

(statearr_24151_24194[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (5))){
var inst_24060 = (function (){var G__24152 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24152) : cljs.core.deref.call(null,G__24152));
})();
var inst_24061 = cljs.core.vals(inst_24060);
var inst_24062 = cljs.core.seq(inst_24061);
var inst_24063 = inst_24062;
var inst_24064 = null;
var inst_24065 = (0);
var inst_24066 = (0);
var state_24122__$1 = (function (){var statearr_24153 = state_24122;
(statearr_24153[(12)] = inst_24064);

(statearr_24153[(13)] = inst_24065);

(statearr_24153[(14)] = inst_24066);

(statearr_24153[(15)] = inst_24063);

return statearr_24153;
})();
var statearr_24154_24195 = state_24122__$1;
(statearr_24154_24195[(2)] = null);

(statearr_24154_24195[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (14))){
var state_24122__$1 = state_24122;
var statearr_24158_24196 = state_24122__$1;
(statearr_24158_24196[(2)] = null);

(statearr_24158_24196[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (16))){
var inst_24077 = (state_24122[(10)]);
var inst_24081 = cljs.core.chunk_first(inst_24077);
var inst_24082 = cljs.core.chunk_rest(inst_24077);
var inst_24083 = cljs.core.count(inst_24081);
var inst_24063 = inst_24082;
var inst_24064 = inst_24081;
var inst_24065 = inst_24083;
var inst_24066 = (0);
var state_24122__$1 = (function (){var statearr_24159 = state_24122;
(statearr_24159[(12)] = inst_24064);

(statearr_24159[(13)] = inst_24065);

(statearr_24159[(14)] = inst_24066);

(statearr_24159[(15)] = inst_24063);

return statearr_24159;
})();
var statearr_24160_24197 = state_24122__$1;
(statearr_24160_24197[(2)] = null);

(statearr_24160_24197[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (10))){
var inst_24064 = (state_24122[(12)]);
var inst_24065 = (state_24122[(13)]);
var inst_24066 = (state_24122[(14)]);
var inst_24063 = (state_24122[(15)]);
var inst_24071 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24064,inst_24066);
var inst_24072 = cljs.core.async.muxch_STAR_(inst_24071);
var inst_24073 = cljs.core.async.close_BANG_(inst_24072);
var inst_24074 = (inst_24066 + (1));
var tmp24155 = inst_24064;
var tmp24156 = inst_24065;
var tmp24157 = inst_24063;
var inst_24063__$1 = tmp24157;
var inst_24064__$1 = tmp24155;
var inst_24065__$1 = tmp24156;
var inst_24066__$1 = inst_24074;
var state_24122__$1 = (function (){var statearr_24161 = state_24122;
(statearr_24161[(17)] = inst_24073);

(statearr_24161[(12)] = inst_24064__$1);

(statearr_24161[(13)] = inst_24065__$1);

(statearr_24161[(14)] = inst_24066__$1);

(statearr_24161[(15)] = inst_24063__$1);

return statearr_24161;
})();
var statearr_24162_24198 = state_24122__$1;
(statearr_24162_24198[(2)] = null);

(statearr_24162_24198[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (18))){
var inst_24092 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24163_24199 = state_24122__$1;
(statearr_24163_24199[(2)] = inst_24092);

(statearr_24163_24199[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24123 === (8))){
var inst_24065 = (state_24122[(13)]);
var inst_24066 = (state_24122[(14)]);
var inst_24068 = (inst_24066 < inst_24065);
var inst_24069 = inst_24068;
var state_24122__$1 = state_24122;
if(cljs.core.truth_(inst_24069)){
var statearr_24164_24200 = state_24122__$1;
(statearr_24164_24200[(1)] = (10));

} else {
var statearr_24165_24201 = state_24122__$1;
(statearr_24165_24201[(1)] = (11));

}

return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___24173,mults,ensure_mult,p))
;
return ((function (switch__11227__auto__,c__11307__auto___24173,mults,ensure_mult,p){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_24169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24169[(0)] = state_machine__11228__auto__);

(statearr_24169[(1)] = (1));

return statearr_24169;
});
var state_machine__11228__auto____1 = (function (state_24122){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_24122);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e24170){if((e24170 instanceof Object)){
var ex__11231__auto__ = e24170;
var statearr_24171_24202 = state_24122;
(statearr_24171_24202[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24122);

return cljs.core.constant$keyword$21;
} else {
throw e24170;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__24203 = state_24122;
state_24122 = G__24203;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_24122){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_24122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___24173,mults,ensure_mult,p))
})();
var state__11309__auto__ = (function (){var statearr_24172 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_24172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___24173);

return statearr_24172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___24173,mults,ensure_mult,p))
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
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
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
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__24284 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24284) : cljs.core.atom.call(null,G__24284));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__11307__auto___24357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___24357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___24357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24323){
var state_val_24324 = (state_24323[(1)]);
if((state_val_24324 === (7))){
var state_24323__$1 = state_24323;
var statearr_24325_24358 = state_24323__$1;
(statearr_24325_24358[(2)] = null);

(statearr_24325_24358[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (1))){
var state_24323__$1 = state_24323;
var statearr_24326_24359 = state_24323__$1;
(statearr_24326_24359[(2)] = null);

(statearr_24326_24359[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (4))){
var inst_24287 = (state_24323[(7)]);
var inst_24289 = (inst_24287 < cnt);
var state_24323__$1 = state_24323;
if(cljs.core.truth_(inst_24289)){
var statearr_24327_24360 = state_24323__$1;
(statearr_24327_24360[(1)] = (6));

} else {
var statearr_24328_24361 = state_24323__$1;
(statearr_24328_24361[(1)] = (7));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (15))){
var inst_24319 = (state_24323[(2)]);
var state_24323__$1 = state_24323;
var statearr_24329_24362 = state_24323__$1;
(statearr_24329_24362[(2)] = inst_24319);

(statearr_24329_24362[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (13))){
var inst_24312 = cljs.core.async.close_BANG_(out);
var state_24323__$1 = state_24323;
var statearr_24330_24363 = state_24323__$1;
(statearr_24330_24363[(2)] = inst_24312);

(statearr_24330_24363[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (6))){
var state_24323__$1 = state_24323;
var statearr_24331_24364 = state_24323__$1;
(statearr_24331_24364[(2)] = null);

(statearr_24331_24364[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (3))){
var inst_24321 = (state_24323[(2)]);
var state_24323__$1 = state_24323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24323__$1,inst_24321);
} else {
if((state_val_24324 === (12))){
var inst_24309 = (state_24323[(8)]);
var inst_24309__$1 = (state_24323[(2)]);
var inst_24310 = cljs.core.some(cljs.core.nil_QMARK_,inst_24309__$1);
var state_24323__$1 = (function (){var statearr_24332 = state_24323;
(statearr_24332[(8)] = inst_24309__$1);

return statearr_24332;
})();
if(cljs.core.truth_(inst_24310)){
var statearr_24333_24365 = state_24323__$1;
(statearr_24333_24365[(1)] = (13));

} else {
var statearr_24334_24366 = state_24323__$1;
(statearr_24334_24366[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (2))){
var inst_24286 = (function (){var G__24335 = dctr;
var G__24336 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24335,G__24336) : cljs.core.reset_BANG_.call(null,G__24335,G__24336));
})();
var inst_24287 = (0);
var state_24323__$1 = (function (){var statearr_24337 = state_24323;
(statearr_24337[(9)] = inst_24286);

(statearr_24337[(7)] = inst_24287);

return statearr_24337;
})();
var statearr_24338_24367 = state_24323__$1;
(statearr_24338_24367[(2)] = null);

(statearr_24338_24367[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (11))){
var inst_24287 = (state_24323[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24323,(10),Object,null,(9));
var inst_24296 = (function (){var G__24339 = inst_24287;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24339) : chs__$1.call(null,G__24339));
})();
var inst_24297 = (function (){var G__24340 = inst_24287;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24340) : done.call(null,G__24340));
})();
var inst_24298 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24296,inst_24297);
var state_24323__$1 = state_24323;
var statearr_24341_24368 = state_24323__$1;
(statearr_24341_24368[(2)] = inst_24298);


cljs.core.async.impl.ioc_helpers.process_exception(state_24323__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (9))){
var inst_24287 = (state_24323[(7)]);
var inst_24300 = (state_24323[(2)]);
var inst_24301 = (inst_24287 + (1));
var inst_24287__$1 = inst_24301;
var state_24323__$1 = (function (){var statearr_24342 = state_24323;
(statearr_24342[(10)] = inst_24300);

(statearr_24342[(7)] = inst_24287__$1);

return statearr_24342;
})();
var statearr_24343_24369 = state_24323__$1;
(statearr_24343_24369[(2)] = null);

(statearr_24343_24369[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (5))){
var inst_24307 = (state_24323[(2)]);
var state_24323__$1 = (function (){var statearr_24344 = state_24323;
(statearr_24344[(11)] = inst_24307);

return statearr_24344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24323__$1,(12),dchan);
} else {
if((state_val_24324 === (14))){
var inst_24309 = (state_24323[(8)]);
var inst_24314 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24309);
var state_24323__$1 = state_24323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24323__$1,(16),out,inst_24314);
} else {
if((state_val_24324 === (16))){
var inst_24316 = (state_24323[(2)]);
var state_24323__$1 = (function (){var statearr_24345 = state_24323;
(statearr_24345[(12)] = inst_24316);

return statearr_24345;
})();
var statearr_24346_24370 = state_24323__$1;
(statearr_24346_24370[(2)] = null);

(statearr_24346_24370[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (10))){
var inst_24291 = (state_24323[(2)]);
var inst_24292 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24323__$1 = (function (){var statearr_24347 = state_24323;
(statearr_24347[(13)] = inst_24291);

return statearr_24347;
})();
var statearr_24348_24371 = state_24323__$1;
(statearr_24348_24371[(2)] = inst_24292);


cljs.core.async.impl.ioc_helpers.process_exception(state_24323__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_24324 === (8))){
var inst_24305 = (state_24323[(2)]);
var state_24323__$1 = state_24323;
var statearr_24349_24372 = state_24323__$1;
(statearr_24349_24372[(2)] = inst_24305);

(statearr_24349_24372[(1)] = (5));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___24357,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11227__auto__,c__11307__auto___24357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_24353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24353[(0)] = state_machine__11228__auto__);

(statearr_24353[(1)] = (1));

return statearr_24353;
});
var state_machine__11228__auto____1 = (function (state_24323){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_24323);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e24354){if((e24354 instanceof Object)){
var ex__11231__auto__ = e24354;
var statearr_24355_24373 = state_24323;
(statearr_24355_24373[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24323);

return cljs.core.constant$keyword$21;
} else {
throw e24354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__24374 = state_24323;
state_24323 = G__24374;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_24323){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_24323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___24357,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11309__auto__ = (function (){var statearr_24356 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_24356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___24357);

return statearr_24356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___24357,chs__$1,out,cnt,rets,dchan,dctr,done))
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
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11307__auto___24484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___24484,out){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___24484,out){
return (function (state_24460){
var state_val_24461 = (state_24460[(1)]);
if((state_val_24461 === (7))){
var inst_24439 = (state_24460[(7)]);
var inst_24440 = (state_24460[(8)]);
var inst_24439__$1 = (state_24460[(2)]);
var inst_24440__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24439__$1,(0),null);
var inst_24441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24439__$1,(1),null);
var inst_24442 = (inst_24440__$1 == null);
var state_24460__$1 = (function (){var statearr_24462 = state_24460;
(statearr_24462[(9)] = inst_24441);

(statearr_24462[(7)] = inst_24439__$1);

(statearr_24462[(8)] = inst_24440__$1);

return statearr_24462;
})();
if(cljs.core.truth_(inst_24442)){
var statearr_24463_24485 = state_24460__$1;
(statearr_24463_24485[(1)] = (8));

} else {
var statearr_24464_24486 = state_24460__$1;
(statearr_24464_24486[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24461 === (1))){
var inst_24431 = cljs.core.vec(chs);
var inst_24432 = inst_24431;
var state_24460__$1 = (function (){var statearr_24465 = state_24460;
(statearr_24465[(10)] = inst_24432);

return statearr_24465;
})();
var statearr_24466_24487 = state_24460__$1;
(statearr_24466_24487[(2)] = null);

(statearr_24466_24487[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24461 === (4))){
var inst_24432 = (state_24460[(10)]);
var state_24460__$1 = state_24460;
return cljs.core.async.ioc_alts_BANG_(state_24460__$1,(7),inst_24432);
} else {
if((state_val_24461 === (6))){
var inst_24456 = (state_24460[(2)]);
var state_24460__$1 = state_24460;
var statearr_24467_24488 = state_24460__$1;
(statearr_24467_24488[(2)] = inst_24456);

(statearr_24467_24488[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24461 === (3))){
var inst_24458 = (state_24460[(2)]);
var state_24460__$1 = state_24460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24460__$1,inst_24458);
} else {
if((state_val_24461 === (2))){
var inst_24432 = (state_24460[(10)]);
var inst_24434 = cljs.core.count(inst_24432);
var inst_24435 = (inst_24434 > (0));
var state_24460__$1 = state_24460;
if(cljs.core.truth_(inst_24435)){
var statearr_24469_24489 = state_24460__$1;
(statearr_24469_24489[(1)] = (4));

} else {
var statearr_24470_24490 = state_24460__$1;
(statearr_24470_24490[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24461 === (11))){
var inst_24432 = (state_24460[(10)]);
var inst_24449 = (state_24460[(2)]);
var tmp24468 = inst_24432;
var inst_24432__$1 = tmp24468;
var state_24460__$1 = (function (){var statearr_24471 = state_24460;
(statearr_24471[(10)] = inst_24432__$1);

(statearr_24471[(11)] = inst_24449);

return statearr_24471;
})();
var statearr_24472_24491 = state_24460__$1;
(statearr_24472_24491[(2)] = null);

(statearr_24472_24491[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24461 === (9))){
var inst_24440 = (state_24460[(8)]);
var state_24460__$1 = state_24460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24460__$1,(11),out,inst_24440);
} else {
if((state_val_24461 === (5))){
var inst_24454 = cljs.core.async.close_BANG_(out);
var state_24460__$1 = state_24460;
var statearr_24473_24492 = state_24460__$1;
(statearr_24473_24492[(2)] = inst_24454);

(statearr_24473_24492[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24461 === (10))){
var inst_24452 = (state_24460[(2)]);
var state_24460__$1 = state_24460;
var statearr_24474_24493 = state_24460__$1;
(statearr_24474_24493[(2)] = inst_24452);

(statearr_24474_24493[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24461 === (8))){
var inst_24441 = (state_24460[(9)]);
var inst_24439 = (state_24460[(7)]);
var inst_24432 = (state_24460[(10)]);
var inst_24440 = (state_24460[(8)]);
var inst_24444 = (function (){var c = inst_24441;
var v = inst_24440;
var vec__24437 = inst_24439;
var cs = inst_24432;
return ((function (c,v,vec__24437,cs,inst_24441,inst_24439,inst_24432,inst_24440,state_val_24461,c__11307__auto___24484,out){
return (function (p1__24375_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24375_SHARP_);
});
;})(c,v,vec__24437,cs,inst_24441,inst_24439,inst_24432,inst_24440,state_val_24461,c__11307__auto___24484,out))
})();
var inst_24445 = cljs.core.filterv(inst_24444,inst_24432);
var inst_24432__$1 = inst_24445;
var state_24460__$1 = (function (){var statearr_24475 = state_24460;
(statearr_24475[(10)] = inst_24432__$1);

return statearr_24475;
})();
var statearr_24476_24494 = state_24460__$1;
(statearr_24476_24494[(2)] = null);

(statearr_24476_24494[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___24484,out))
;
return ((function (switch__11227__auto__,c__11307__auto___24484,out){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_24480 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24480[(0)] = state_machine__11228__auto__);

(statearr_24480[(1)] = (1));

return statearr_24480;
});
var state_machine__11228__auto____1 = (function (state_24460){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_24460);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e24481){if((e24481 instanceof Object)){
var ex__11231__auto__ = e24481;
var statearr_24482_24495 = state_24460;
(statearr_24482_24495[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24460);

return cljs.core.constant$keyword$21;
} else {
throw e24481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__24496 = state_24460;
state_24460 = G__24496;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_24460){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_24460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___24484,out))
})();
var state__11309__auto__ = (function (){var statearr_24483 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_24483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___24484);

return statearr_24483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___24484,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
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
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11307__auto___24592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___24592,out){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___24592,out){
return (function (state_24569){
var state_val_24570 = (state_24569[(1)]);
if((state_val_24570 === (7))){
var inst_24551 = (state_24569[(7)]);
var inst_24551__$1 = (state_24569[(2)]);
var inst_24552 = (inst_24551__$1 == null);
var inst_24553 = cljs.core.not(inst_24552);
var state_24569__$1 = (function (){var statearr_24571 = state_24569;
(statearr_24571[(7)] = inst_24551__$1);

return statearr_24571;
})();
if(inst_24553){
var statearr_24572_24593 = state_24569__$1;
(statearr_24572_24593[(1)] = (8));

} else {
var statearr_24573_24594 = state_24569__$1;
(statearr_24573_24594[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24570 === (1))){
var inst_24546 = (0);
var state_24569__$1 = (function (){var statearr_24574 = state_24569;
(statearr_24574[(8)] = inst_24546);

return statearr_24574;
})();
var statearr_24575_24595 = state_24569__$1;
(statearr_24575_24595[(2)] = null);

(statearr_24575_24595[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24570 === (4))){
var state_24569__$1 = state_24569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24569__$1,(7),ch);
} else {
if((state_val_24570 === (6))){
var inst_24564 = (state_24569[(2)]);
var state_24569__$1 = state_24569;
var statearr_24576_24596 = state_24569__$1;
(statearr_24576_24596[(2)] = inst_24564);

(statearr_24576_24596[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24570 === (3))){
var inst_24566 = (state_24569[(2)]);
var inst_24567 = cljs.core.async.close_BANG_(out);
var state_24569__$1 = (function (){var statearr_24577 = state_24569;
(statearr_24577[(9)] = inst_24566);

return statearr_24577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24569__$1,inst_24567);
} else {
if((state_val_24570 === (2))){
var inst_24546 = (state_24569[(8)]);
var inst_24548 = (inst_24546 < n);
var state_24569__$1 = state_24569;
if(cljs.core.truth_(inst_24548)){
var statearr_24578_24597 = state_24569__$1;
(statearr_24578_24597[(1)] = (4));

} else {
var statearr_24579_24598 = state_24569__$1;
(statearr_24579_24598[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24570 === (11))){
var inst_24546 = (state_24569[(8)]);
var inst_24556 = (state_24569[(2)]);
var inst_24557 = (inst_24546 + (1));
var inst_24546__$1 = inst_24557;
var state_24569__$1 = (function (){var statearr_24580 = state_24569;
(statearr_24580[(8)] = inst_24546__$1);

(statearr_24580[(10)] = inst_24556);

return statearr_24580;
})();
var statearr_24581_24599 = state_24569__$1;
(statearr_24581_24599[(2)] = null);

(statearr_24581_24599[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24570 === (9))){
var state_24569__$1 = state_24569;
var statearr_24582_24600 = state_24569__$1;
(statearr_24582_24600[(2)] = null);

(statearr_24582_24600[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24570 === (5))){
var state_24569__$1 = state_24569;
var statearr_24583_24601 = state_24569__$1;
(statearr_24583_24601[(2)] = null);

(statearr_24583_24601[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24570 === (10))){
var inst_24561 = (state_24569[(2)]);
var state_24569__$1 = state_24569;
var statearr_24584_24602 = state_24569__$1;
(statearr_24584_24602[(2)] = inst_24561);

(statearr_24584_24602[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24570 === (8))){
var inst_24551 = (state_24569[(7)]);
var state_24569__$1 = state_24569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24569__$1,(11),out,inst_24551);
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
});})(c__11307__auto___24592,out))
;
return ((function (switch__11227__auto__,c__11307__auto___24592,out){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_24588 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24588[(0)] = state_machine__11228__auto__);

(statearr_24588[(1)] = (1));

return statearr_24588;
});
var state_machine__11228__auto____1 = (function (state_24569){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_24569);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e24589){if((e24589 instanceof Object)){
var ex__11231__auto__ = e24589;
var statearr_24590_24603 = state_24569;
(statearr_24590_24603[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24569);

return cljs.core.constant$keyword$21;
} else {
throw e24589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__24604 = state_24569;
state_24569 = G__24604;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_24569){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_24569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___24592,out))
})();
var state__11309__auto__ = (function (){var statearr_24591 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_24591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___24592);

return statearr_24591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___24592,out))
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
if(typeof cljs.core.async.t24617 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24617 = (function (ch,f,map_LT_,meta24618){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24618 = meta24618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t24620 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24620 = (function (fn1,_,meta24618,map_LT_,f,ch,meta24621){
this.fn1 = fn1;
this._ = _;
this.meta24618 = meta24618;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24621 = meta24621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24620.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t24620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24605_SHARP_){
var G__24623 = (((p1__24605_SHARP_ == null))?null:(function (){var G__24624 = p1__24605_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24624) : self__.f.call(null,G__24624));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24623) : f1.call(null,G__24623));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24622){
var self__ = this;
var _24622__$1 = this;
return self__.meta24621;
});})(___$1))
;

cljs.core.async.t24620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24622,meta24621__$1){
var self__ = this;
var _24622__$1 = this;
return (new cljs.core.async.t24620(self__.fn1,self__._,self__.meta24618,self__.map_LT_,self__.f,self__.ch,meta24621__$1));
});})(___$1))
;

cljs.core.async.t24620.cljs$lang$type = true;

cljs.core.async.t24620.cljs$lang$ctorStr = "cljs.core.async/t24620";

cljs.core.async.t24620.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t24620");
});})(___$1))
;

cljs.core.async.__GT_t24620 = ((function (___$1){
return (function __GT_t24620(fn1__$1,___$2,meta24618__$1,map_LT___$1,f__$1,ch__$1,meta24621){
return (new cljs.core.async.t24620(fn1__$1,___$2,meta24618__$1,map_LT___$1,f__$1,ch__$1,meta24621));
});})(___$1))
;

}

return (new cljs.core.async.t24620(fn1,___$1,self__.meta24618,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3852__auto__ = ret;
if(cljs.core.truth_(and__3852__auto__)){
return !(((function (){var G__24625 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24625) : cljs.core.deref.call(null,G__24625));
})() == null));
} else {
return and__3852__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24626 = (function (){var G__24627 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24627) : cljs.core.deref.call(null,G__24627));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24626) : self__.f.call(null,G__24626));
})());
} else {
return ret;
}
});

cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24617.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24619){
var self__ = this;
var _24619__$1 = this;
return self__.meta24618;
});

cljs.core.async.t24617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24619,meta24618__$1){
var self__ = this;
var _24619__$1 = this;
return (new cljs.core.async.t24617(self__.ch,self__.f,self__.map_LT_,meta24618__$1));
});

cljs.core.async.t24617.cljs$lang$type = true;

cljs.core.async.t24617.cljs$lang$ctorStr = "cljs.core.async/t24617";

cljs.core.async.t24617.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t24617");
});

cljs.core.async.__GT_t24617 = (function __GT_t24617(ch__$1,f__$1,map_LT___$1,meta24618){
return (new cljs.core.async.t24617(ch__$1,f__$1,map_LT___$1,meta24618));
});

}

return (new cljs.core.async.t24617(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t24632 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24632 = (function (ch,f,map_GT_,meta24633){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24633 = meta24633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24632.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24632.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24635 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24635) : self__.f.call(null,G__24635));
})(),fn1);
});

cljs.core.async.t24632.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24632.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24632.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24632.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24634){
var self__ = this;
var _24634__$1 = this;
return self__.meta24633;
});

cljs.core.async.t24632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24634,meta24633__$1){
var self__ = this;
var _24634__$1 = this;
return (new cljs.core.async.t24632(self__.ch,self__.f,self__.map_GT_,meta24633__$1));
});

cljs.core.async.t24632.cljs$lang$type = true;

cljs.core.async.t24632.cljs$lang$ctorStr = "cljs.core.async/t24632";

cljs.core.async.t24632.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t24632");
});

cljs.core.async.__GT_t24632 = (function __GT_t24632(ch__$1,f__$1,map_GT___$1,meta24633){
return (new cljs.core.async.t24632(ch__$1,f__$1,map_GT___$1,meta24633));
});

}

return (new cljs.core.async.t24632(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t24640 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24640 = (function (ch,p,filter_GT_,meta24641){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24641 = meta24641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24643 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24643) : self__.p.call(null,G__24643));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24640.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24642){
var self__ = this;
var _24642__$1 = this;
return self__.meta24641;
});

cljs.core.async.t24640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24642,meta24641__$1){
var self__ = this;
var _24642__$1 = this;
return (new cljs.core.async.t24640(self__.ch,self__.p,self__.filter_GT_,meta24641__$1));
});

cljs.core.async.t24640.cljs$lang$type = true;

cljs.core.async.t24640.cljs$lang$ctorStr = "cljs.core.async/t24640";

cljs.core.async.t24640.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write(writer__4452__auto__,"cljs.core.async/t24640");
});

cljs.core.async.__GT_t24640 = (function __GT_t24640(ch__$1,p__$1,filter_GT___$1,meta24641){
return (new cljs.core.async.t24640(ch__$1,p__$1,filter_GT___$1,meta24641));
});

}

return (new cljs.core.async.t24640(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11307__auto___24731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___24731,out){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___24731,out){
return (function (state_24709){
var state_val_24710 = (state_24709[(1)]);
if((state_val_24710 === (7))){
var inst_24705 = (state_24709[(2)]);
var state_24709__$1 = state_24709;
var statearr_24711_24732 = state_24709__$1;
(statearr_24711_24732[(2)] = inst_24705);

(statearr_24711_24732[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24710 === (1))){
var state_24709__$1 = state_24709;
var statearr_24712_24733 = state_24709__$1;
(statearr_24712_24733[(2)] = null);

(statearr_24712_24733[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24710 === (4))){
var inst_24691 = (state_24709[(7)]);
var inst_24691__$1 = (state_24709[(2)]);
var inst_24692 = (inst_24691__$1 == null);
var state_24709__$1 = (function (){var statearr_24713 = state_24709;
(statearr_24713[(7)] = inst_24691__$1);

return statearr_24713;
})();
if(cljs.core.truth_(inst_24692)){
var statearr_24714_24734 = state_24709__$1;
(statearr_24714_24734[(1)] = (5));

} else {
var statearr_24715_24735 = state_24709__$1;
(statearr_24715_24735[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24710 === (6))){
var inst_24691 = (state_24709[(7)]);
var inst_24696 = (function (){var G__24716 = inst_24691;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24716) : p.call(null,G__24716));
})();
var state_24709__$1 = state_24709;
if(cljs.core.truth_(inst_24696)){
var statearr_24717_24736 = state_24709__$1;
(statearr_24717_24736[(1)] = (8));

} else {
var statearr_24718_24737 = state_24709__$1;
(statearr_24718_24737[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24710 === (3))){
var inst_24707 = (state_24709[(2)]);
var state_24709__$1 = state_24709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24709__$1,inst_24707);
} else {
if((state_val_24710 === (2))){
var state_24709__$1 = state_24709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24709__$1,(4),ch);
} else {
if((state_val_24710 === (11))){
var inst_24699 = (state_24709[(2)]);
var state_24709__$1 = state_24709;
var statearr_24719_24738 = state_24709__$1;
(statearr_24719_24738[(2)] = inst_24699);

(statearr_24719_24738[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24710 === (9))){
var state_24709__$1 = state_24709;
var statearr_24720_24739 = state_24709__$1;
(statearr_24720_24739[(2)] = null);

(statearr_24720_24739[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24710 === (5))){
var inst_24694 = cljs.core.async.close_BANG_(out);
var state_24709__$1 = state_24709;
var statearr_24721_24740 = state_24709__$1;
(statearr_24721_24740[(2)] = inst_24694);

(statearr_24721_24740[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24710 === (10))){
var inst_24702 = (state_24709[(2)]);
var state_24709__$1 = (function (){var statearr_24722 = state_24709;
(statearr_24722[(8)] = inst_24702);

return statearr_24722;
})();
var statearr_24723_24741 = state_24709__$1;
(statearr_24723_24741[(2)] = null);

(statearr_24723_24741[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24710 === (8))){
var inst_24691 = (state_24709[(7)]);
var state_24709__$1 = state_24709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24709__$1,(11),out,inst_24691);
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
});})(c__11307__auto___24731,out))
;
return ((function (switch__11227__auto__,c__11307__auto___24731,out){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_24727 = [null,null,null,null,null,null,null,null,null];
(statearr_24727[(0)] = state_machine__11228__auto__);

(statearr_24727[(1)] = (1));

return statearr_24727;
});
var state_machine__11228__auto____1 = (function (state_24709){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_24709);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e24728){if((e24728 instanceof Object)){
var ex__11231__auto__ = e24728;
var statearr_24729_24742 = state_24709;
(statearr_24729_24742[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24709);

return cljs.core.constant$keyword$21;
} else {
throw e24728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__24743 = state_24709;
state_24709 = G__24743;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_24709){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_24709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___24731,out))
})();
var state__11309__auto__ = (function (){var statearr_24730 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_24730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___24731);

return statearr_24730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___24731,out))
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
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
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
var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__){
return (function (state_24913){
var state_val_24914 = (state_24913[(1)]);
if((state_val_24914 === (7))){
var inst_24909 = (state_24913[(2)]);
var state_24913__$1 = state_24913;
var statearr_24915_24957 = state_24913__$1;
(statearr_24915_24957[(2)] = inst_24909);

(statearr_24915_24957[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (20))){
var inst_24879 = (state_24913[(7)]);
var inst_24890 = (state_24913[(2)]);
var inst_24891 = cljs.core.next(inst_24879);
var inst_24865 = inst_24891;
var inst_24866 = null;
var inst_24867 = (0);
var inst_24868 = (0);
var state_24913__$1 = (function (){var statearr_24916 = state_24913;
(statearr_24916[(8)] = inst_24866);

(statearr_24916[(9)] = inst_24865);

(statearr_24916[(10)] = inst_24890);

(statearr_24916[(11)] = inst_24867);

(statearr_24916[(12)] = inst_24868);

return statearr_24916;
})();
var statearr_24917_24958 = state_24913__$1;
(statearr_24917_24958[(2)] = null);

(statearr_24917_24958[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (1))){
var state_24913__$1 = state_24913;
var statearr_24918_24959 = state_24913__$1;
(statearr_24918_24959[(2)] = null);

(statearr_24918_24959[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (4))){
var inst_24854 = (state_24913[(13)]);
var inst_24854__$1 = (state_24913[(2)]);
var inst_24855 = (inst_24854__$1 == null);
var state_24913__$1 = (function (){var statearr_24919 = state_24913;
(statearr_24919[(13)] = inst_24854__$1);

return statearr_24919;
})();
if(cljs.core.truth_(inst_24855)){
var statearr_24920_24960 = state_24913__$1;
(statearr_24920_24960[(1)] = (5));

} else {
var statearr_24921_24961 = state_24913__$1;
(statearr_24921_24961[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (15))){
var state_24913__$1 = state_24913;
var statearr_24925_24962 = state_24913__$1;
(statearr_24925_24962[(2)] = null);

(statearr_24925_24962[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (21))){
var state_24913__$1 = state_24913;
var statearr_24926_24963 = state_24913__$1;
(statearr_24926_24963[(2)] = null);

(statearr_24926_24963[(1)] = (23));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (13))){
var inst_24866 = (state_24913[(8)]);
var inst_24865 = (state_24913[(9)]);
var inst_24867 = (state_24913[(11)]);
var inst_24868 = (state_24913[(12)]);
var inst_24875 = (state_24913[(2)]);
var inst_24876 = (inst_24868 + (1));
var tmp24922 = inst_24866;
var tmp24923 = inst_24865;
var tmp24924 = inst_24867;
var inst_24865__$1 = tmp24923;
var inst_24866__$1 = tmp24922;
var inst_24867__$1 = tmp24924;
var inst_24868__$1 = inst_24876;
var state_24913__$1 = (function (){var statearr_24927 = state_24913;
(statearr_24927[(8)] = inst_24866__$1);

(statearr_24927[(9)] = inst_24865__$1);

(statearr_24927[(14)] = inst_24875);

(statearr_24927[(11)] = inst_24867__$1);

(statearr_24927[(12)] = inst_24868__$1);

return statearr_24927;
})();
var statearr_24928_24964 = state_24913__$1;
(statearr_24928_24964[(2)] = null);

(statearr_24928_24964[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (22))){
var state_24913__$1 = state_24913;
var statearr_24929_24965 = state_24913__$1;
(statearr_24929_24965[(2)] = null);

(statearr_24929_24965[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (6))){
var inst_24854 = (state_24913[(13)]);
var inst_24863 = (function (){var G__24930 = inst_24854;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24930) : f.call(null,G__24930));
})();
var inst_24864 = cljs.core.seq(inst_24863);
var inst_24865 = inst_24864;
var inst_24866 = null;
var inst_24867 = (0);
var inst_24868 = (0);
var state_24913__$1 = (function (){var statearr_24931 = state_24913;
(statearr_24931[(8)] = inst_24866);

(statearr_24931[(9)] = inst_24865);

(statearr_24931[(11)] = inst_24867);

(statearr_24931[(12)] = inst_24868);

return statearr_24931;
})();
var statearr_24932_24966 = state_24913__$1;
(statearr_24932_24966[(2)] = null);

(statearr_24932_24966[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (17))){
var inst_24879 = (state_24913[(7)]);
var inst_24883 = cljs.core.chunk_first(inst_24879);
var inst_24884 = cljs.core.chunk_rest(inst_24879);
var inst_24885 = cljs.core.count(inst_24883);
var inst_24865 = inst_24884;
var inst_24866 = inst_24883;
var inst_24867 = inst_24885;
var inst_24868 = (0);
var state_24913__$1 = (function (){var statearr_24933 = state_24913;
(statearr_24933[(8)] = inst_24866);

(statearr_24933[(9)] = inst_24865);

(statearr_24933[(11)] = inst_24867);

(statearr_24933[(12)] = inst_24868);

return statearr_24933;
})();
var statearr_24934_24967 = state_24913__$1;
(statearr_24934_24967[(2)] = null);

(statearr_24934_24967[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (3))){
var inst_24911 = (state_24913[(2)]);
var state_24913__$1 = state_24913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24913__$1,inst_24911);
} else {
if((state_val_24914 === (12))){
var inst_24899 = (state_24913[(2)]);
var state_24913__$1 = state_24913;
var statearr_24935_24968 = state_24913__$1;
(statearr_24935_24968[(2)] = inst_24899);

(statearr_24935_24968[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (2))){
var state_24913__$1 = state_24913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24913__$1,(4),in$);
} else {
if((state_val_24914 === (23))){
var inst_24907 = (state_24913[(2)]);
var state_24913__$1 = state_24913;
var statearr_24936_24969 = state_24913__$1;
(statearr_24936_24969[(2)] = inst_24907);

(statearr_24936_24969[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (19))){
var inst_24894 = (state_24913[(2)]);
var state_24913__$1 = state_24913;
var statearr_24937_24970 = state_24913__$1;
(statearr_24937_24970[(2)] = inst_24894);

(statearr_24937_24970[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (11))){
var inst_24865 = (state_24913[(9)]);
var inst_24879 = (state_24913[(7)]);
var inst_24879__$1 = cljs.core.seq(inst_24865);
var state_24913__$1 = (function (){var statearr_24938 = state_24913;
(statearr_24938[(7)] = inst_24879__$1);

return statearr_24938;
})();
if(inst_24879__$1){
var statearr_24939_24971 = state_24913__$1;
(statearr_24939_24971[(1)] = (14));

} else {
var statearr_24940_24972 = state_24913__$1;
(statearr_24940_24972[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (9))){
var inst_24901 = (state_24913[(2)]);
var inst_24902 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24913__$1 = (function (){var statearr_24941 = state_24913;
(statearr_24941[(15)] = inst_24901);

return statearr_24941;
})();
if(cljs.core.truth_(inst_24902)){
var statearr_24942_24973 = state_24913__$1;
(statearr_24942_24973[(1)] = (21));

} else {
var statearr_24943_24974 = state_24913__$1;
(statearr_24943_24974[(1)] = (22));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (5))){
var inst_24857 = cljs.core.async.close_BANG_(out);
var state_24913__$1 = state_24913;
var statearr_24944_24975 = state_24913__$1;
(statearr_24944_24975[(2)] = inst_24857);

(statearr_24944_24975[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (14))){
var inst_24879 = (state_24913[(7)]);
var inst_24881 = cljs.core.chunked_seq_QMARK_(inst_24879);
var state_24913__$1 = state_24913;
if(inst_24881){
var statearr_24945_24976 = state_24913__$1;
(statearr_24945_24976[(1)] = (17));

} else {
var statearr_24946_24977 = state_24913__$1;
(statearr_24946_24977[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (16))){
var inst_24897 = (state_24913[(2)]);
var state_24913__$1 = state_24913;
var statearr_24947_24978 = state_24913__$1;
(statearr_24947_24978[(2)] = inst_24897);

(statearr_24947_24978[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24914 === (10))){
var inst_24866 = (state_24913[(8)]);
var inst_24868 = (state_24913[(12)]);
var inst_24873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24866,inst_24868);
var state_24913__$1 = state_24913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24913__$1,(13),out,inst_24873);
} else {
if((state_val_24914 === (18))){
var inst_24879 = (state_24913[(7)]);
var inst_24888 = cljs.core.first(inst_24879);
var state_24913__$1 = state_24913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24913__$1,(20),out,inst_24888);
} else {
if((state_val_24914 === (8))){
var inst_24867 = (state_24913[(11)]);
var inst_24868 = (state_24913[(12)]);
var inst_24870 = (inst_24868 < inst_24867);
var inst_24871 = inst_24870;
var state_24913__$1 = state_24913;
if(cljs.core.truth_(inst_24871)){
var statearr_24948_24979 = state_24913__$1;
(statearr_24948_24979[(1)] = (10));

} else {
var statearr_24949_24980 = state_24913__$1;
(statearr_24949_24980[(1)] = (11));

}

return cljs.core.constant$keyword$21;
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
});})(c__11307__auto__))
;
return ((function (switch__11227__auto__,c__11307__auto__){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_24953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24953[(0)] = state_machine__11228__auto__);

(statearr_24953[(1)] = (1));

return statearr_24953;
});
var state_machine__11228__auto____1 = (function (state_24913){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_24913);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e24954){if((e24954 instanceof Object)){
var ex__11231__auto__ = e24954;
var statearr_24955_24981 = state_24913;
(statearr_24955_24981[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24913);

return cljs.core.constant$keyword$21;
} else {
throw e24954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__24982 = state_24913;
state_24913 = G__24982;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_24913){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_24913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__))
})();
var state__11309__auto__ = (function (){var statearr_24956 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_24956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_24956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__))
);

return c__11307__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

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
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

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
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11307__auto___25087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___25087,out){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___25087,out){
return (function (state_25062){
var state_val_25063 = (state_25062[(1)]);
if((state_val_25063 === (7))){
var inst_25057 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25064_25088 = state_25062__$1;
(statearr_25064_25088[(2)] = inst_25057);

(statearr_25064_25088[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25063 === (1))){
var inst_25039 = null;
var state_25062__$1 = (function (){var statearr_25065 = state_25062;
(statearr_25065[(7)] = inst_25039);

return statearr_25065;
})();
var statearr_25066_25089 = state_25062__$1;
(statearr_25066_25089[(2)] = null);

(statearr_25066_25089[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25063 === (4))){
var inst_25042 = (state_25062[(8)]);
var inst_25042__$1 = (state_25062[(2)]);
var inst_25043 = (inst_25042__$1 == null);
var inst_25044 = cljs.core.not(inst_25043);
var state_25062__$1 = (function (){var statearr_25067 = state_25062;
(statearr_25067[(8)] = inst_25042__$1);

return statearr_25067;
})();
if(inst_25044){
var statearr_25068_25090 = state_25062__$1;
(statearr_25068_25090[(1)] = (5));

} else {
var statearr_25069_25091 = state_25062__$1;
(statearr_25069_25091[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25063 === (6))){
var state_25062__$1 = state_25062;
var statearr_25070_25092 = state_25062__$1;
(statearr_25070_25092[(2)] = null);

(statearr_25070_25092[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25063 === (3))){
var inst_25059 = (state_25062[(2)]);
var inst_25060 = cljs.core.async.close_BANG_(out);
var state_25062__$1 = (function (){var statearr_25071 = state_25062;
(statearr_25071[(9)] = inst_25059);

return statearr_25071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25062__$1,inst_25060);
} else {
if((state_val_25063 === (2))){
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25062__$1,(4),ch);
} else {
if((state_val_25063 === (11))){
var inst_25042 = (state_25062[(8)]);
var inst_25051 = (state_25062[(2)]);
var inst_25039 = inst_25042;
var state_25062__$1 = (function (){var statearr_25072 = state_25062;
(statearr_25072[(10)] = inst_25051);

(statearr_25072[(7)] = inst_25039);

return statearr_25072;
})();
var statearr_25073_25093 = state_25062__$1;
(statearr_25073_25093[(2)] = null);

(statearr_25073_25093[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25063 === (9))){
var inst_25042 = (state_25062[(8)]);
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25062__$1,(11),out,inst_25042);
} else {
if((state_val_25063 === (5))){
var inst_25042 = (state_25062[(8)]);
var inst_25039 = (state_25062[(7)]);
var inst_25046 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25042,inst_25039);
var state_25062__$1 = state_25062;
if(inst_25046){
var statearr_25075_25094 = state_25062__$1;
(statearr_25075_25094[(1)] = (8));

} else {
var statearr_25076_25095 = state_25062__$1;
(statearr_25076_25095[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25063 === (10))){
var inst_25054 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25077_25096 = state_25062__$1;
(statearr_25077_25096[(2)] = inst_25054);

(statearr_25077_25096[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25063 === (8))){
var inst_25039 = (state_25062[(7)]);
var tmp25074 = inst_25039;
var inst_25039__$1 = tmp25074;
var state_25062__$1 = (function (){var statearr_25078 = state_25062;
(statearr_25078[(7)] = inst_25039__$1);

return statearr_25078;
})();
var statearr_25079_25097 = state_25062__$1;
(statearr_25079_25097[(2)] = null);

(statearr_25079_25097[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___25087,out))
;
return ((function (switch__11227__auto__,c__11307__auto___25087,out){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_25083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25083[(0)] = state_machine__11228__auto__);

(statearr_25083[(1)] = (1));

return statearr_25083;
});
var state_machine__11228__auto____1 = (function (state_25062){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_25062);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e25084){if((e25084 instanceof Object)){
var ex__11231__auto__ = e25084;
var statearr_25085_25098 = state_25062;
(statearr_25085_25098[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25062);

return cljs.core.constant$keyword$21;
} else {
throw e25084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__25099 = state_25062;
state_25062 = G__25099;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_25062){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_25062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___25087,out))
})();
var state__11309__auto__ = (function (){var statearr_25086 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_25086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___25087);

return statearr_25086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___25087,out))
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
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11307__auto___25237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___25237,out){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___25237,out){
return (function (state_25207){
var state_val_25208 = (state_25207[(1)]);
if((state_val_25208 === (7))){
var inst_25203 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
var statearr_25209_25238 = state_25207__$1;
(statearr_25209_25238[(2)] = inst_25203);

(statearr_25209_25238[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (1))){
var inst_25170 = (new Array(n));
var inst_25171 = inst_25170;
var inst_25172 = (0);
var state_25207__$1 = (function (){var statearr_25210 = state_25207;
(statearr_25210[(7)] = inst_25171);

(statearr_25210[(8)] = inst_25172);

return statearr_25210;
})();
var statearr_25211_25239 = state_25207__$1;
(statearr_25211_25239[(2)] = null);

(statearr_25211_25239[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (4))){
var inst_25175 = (state_25207[(9)]);
var inst_25175__$1 = (state_25207[(2)]);
var inst_25176 = (inst_25175__$1 == null);
var inst_25177 = cljs.core.not(inst_25176);
var state_25207__$1 = (function (){var statearr_25212 = state_25207;
(statearr_25212[(9)] = inst_25175__$1);

return statearr_25212;
})();
if(inst_25177){
var statearr_25213_25240 = state_25207__$1;
(statearr_25213_25240[(1)] = (5));

} else {
var statearr_25214_25241 = state_25207__$1;
(statearr_25214_25241[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (15))){
var inst_25197 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
var statearr_25215_25242 = state_25207__$1;
(statearr_25215_25242[(2)] = inst_25197);

(statearr_25215_25242[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (13))){
var state_25207__$1 = state_25207;
var statearr_25216_25243 = state_25207__$1;
(statearr_25216_25243[(2)] = null);

(statearr_25216_25243[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (6))){
var inst_25172 = (state_25207[(8)]);
var inst_25193 = (inst_25172 > (0));
var state_25207__$1 = state_25207;
if(cljs.core.truth_(inst_25193)){
var statearr_25217_25244 = state_25207__$1;
(statearr_25217_25244[(1)] = (12));

} else {
var statearr_25218_25245 = state_25207__$1;
(statearr_25218_25245[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (3))){
var inst_25205 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25207__$1,inst_25205);
} else {
if((state_val_25208 === (12))){
var inst_25171 = (state_25207[(7)]);
var inst_25195 = cljs.core.vec(inst_25171);
var state_25207__$1 = state_25207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25207__$1,(15),out,inst_25195);
} else {
if((state_val_25208 === (2))){
var state_25207__$1 = state_25207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25207__$1,(4),ch);
} else {
if((state_val_25208 === (11))){
var inst_25187 = (state_25207[(2)]);
var inst_25188 = (new Array(n));
var inst_25171 = inst_25188;
var inst_25172 = (0);
var state_25207__$1 = (function (){var statearr_25219 = state_25207;
(statearr_25219[(7)] = inst_25171);

(statearr_25219[(8)] = inst_25172);

(statearr_25219[(10)] = inst_25187);

return statearr_25219;
})();
var statearr_25220_25246 = state_25207__$1;
(statearr_25220_25246[(2)] = null);

(statearr_25220_25246[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (9))){
var inst_25171 = (state_25207[(7)]);
var inst_25185 = cljs.core.vec(inst_25171);
var state_25207__$1 = state_25207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25207__$1,(11),out,inst_25185);
} else {
if((state_val_25208 === (5))){
var inst_25171 = (state_25207[(7)]);
var inst_25175 = (state_25207[(9)]);
var inst_25172 = (state_25207[(8)]);
var inst_25180 = (state_25207[(11)]);
var inst_25179 = (inst_25171[inst_25172] = inst_25175);
var inst_25180__$1 = (inst_25172 + (1));
var inst_25181 = (inst_25180__$1 < n);
var state_25207__$1 = (function (){var statearr_25221 = state_25207;
(statearr_25221[(12)] = inst_25179);

(statearr_25221[(11)] = inst_25180__$1);

return statearr_25221;
})();
if(cljs.core.truth_(inst_25181)){
var statearr_25222_25247 = state_25207__$1;
(statearr_25222_25247[(1)] = (8));

} else {
var statearr_25223_25248 = state_25207__$1;
(statearr_25223_25248[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (14))){
var inst_25200 = (state_25207[(2)]);
var inst_25201 = cljs.core.async.close_BANG_(out);
var state_25207__$1 = (function (){var statearr_25225 = state_25207;
(statearr_25225[(13)] = inst_25200);

return statearr_25225;
})();
var statearr_25226_25249 = state_25207__$1;
(statearr_25226_25249[(2)] = inst_25201);

(statearr_25226_25249[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (10))){
var inst_25191 = (state_25207[(2)]);
var state_25207__$1 = state_25207;
var statearr_25227_25250 = state_25207__$1;
(statearr_25227_25250[(2)] = inst_25191);

(statearr_25227_25250[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25208 === (8))){
var inst_25171 = (state_25207[(7)]);
var inst_25180 = (state_25207[(11)]);
var tmp25224 = inst_25171;
var inst_25171__$1 = tmp25224;
var inst_25172 = inst_25180;
var state_25207__$1 = (function (){var statearr_25228 = state_25207;
(statearr_25228[(7)] = inst_25171__$1);

(statearr_25228[(8)] = inst_25172);

return statearr_25228;
})();
var statearr_25229_25251 = state_25207__$1;
(statearr_25229_25251[(2)] = null);

(statearr_25229_25251[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___25237,out))
;
return ((function (switch__11227__auto__,c__11307__auto___25237,out){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_25233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25233[(0)] = state_machine__11228__auto__);

(statearr_25233[(1)] = (1));

return statearr_25233;
});
var state_machine__11228__auto____1 = (function (state_25207){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_25207);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e25234){if((e25234 instanceof Object)){
var ex__11231__auto__ = e25234;
var statearr_25235_25252 = state_25207;
(statearr_25235_25252[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25207);

return cljs.core.constant$keyword$21;
} else {
throw e25234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__25253 = state_25207;
state_25207 = G__25253;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_25207){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_25207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___25237,out))
})();
var state__11309__auto__ = (function (){var statearr_25236 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_25236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___25237);

return statearr_25236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___25237,out))
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
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11307__auto___25401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto___25401,out){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto___25401,out){
return (function (state_25370){
var state_val_25371 = (state_25370[(1)]);
if((state_val_25371 === (7))){
var inst_25366 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25372_25402 = state_25370__$1;
(statearr_25372_25402[(2)] = inst_25366);

(statearr_25372_25402[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (1))){
var inst_25329 = [];
var inst_25330 = inst_25329;
var inst_25331 = cljs.core.constant$keyword$36;
var state_25370__$1 = (function (){var statearr_25373 = state_25370;
(statearr_25373[(7)] = inst_25331);

(statearr_25373[(8)] = inst_25330);

return statearr_25373;
})();
var statearr_25374_25403 = state_25370__$1;
(statearr_25374_25403[(2)] = null);

(statearr_25374_25403[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (4))){
var inst_25334 = (state_25370[(9)]);
var inst_25334__$1 = (state_25370[(2)]);
var inst_25335 = (inst_25334__$1 == null);
var inst_25336 = cljs.core.not(inst_25335);
var state_25370__$1 = (function (){var statearr_25375 = state_25370;
(statearr_25375[(9)] = inst_25334__$1);

return statearr_25375;
})();
if(inst_25336){
var statearr_25376_25404 = state_25370__$1;
(statearr_25376_25404[(1)] = (5));

} else {
var statearr_25377_25405 = state_25370__$1;
(statearr_25377_25405[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (15))){
var inst_25360 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25378_25406 = state_25370__$1;
(statearr_25378_25406[(2)] = inst_25360);

(statearr_25378_25406[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (13))){
var state_25370__$1 = state_25370;
var statearr_25379_25407 = state_25370__$1;
(statearr_25379_25407[(2)] = null);

(statearr_25379_25407[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (6))){
var inst_25330 = (state_25370[(8)]);
var inst_25355 = inst_25330.length;
var inst_25356 = (inst_25355 > (0));
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25356)){
var statearr_25380_25408 = state_25370__$1;
(statearr_25380_25408[(1)] = (12));

} else {
var statearr_25381_25409 = state_25370__$1;
(statearr_25381_25409[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (3))){
var inst_25368 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25370__$1,inst_25368);
} else {
if((state_val_25371 === (12))){
var inst_25330 = (state_25370[(8)]);
var inst_25358 = cljs.core.vec(inst_25330);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25370__$1,(15),out,inst_25358);
} else {
if((state_val_25371 === (2))){
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25370__$1,(4),ch);
} else {
if((state_val_25371 === (11))){
var inst_25338 = (state_25370[(10)]);
var inst_25334 = (state_25370[(9)]);
var inst_25348 = (state_25370[(2)]);
var inst_25349 = [];
var inst_25350 = inst_25349.push(inst_25334);
var inst_25330 = inst_25349;
var inst_25331 = inst_25338;
var state_25370__$1 = (function (){var statearr_25382 = state_25370;
(statearr_25382[(7)] = inst_25331);

(statearr_25382[(11)] = inst_25348);

(statearr_25382[(12)] = inst_25350);

(statearr_25382[(8)] = inst_25330);

return statearr_25382;
})();
var statearr_25383_25410 = state_25370__$1;
(statearr_25383_25410[(2)] = null);

(statearr_25383_25410[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (9))){
var inst_25330 = (state_25370[(8)]);
var inst_25346 = cljs.core.vec(inst_25330);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25370__$1,(11),out,inst_25346);
} else {
if((state_val_25371 === (5))){
var inst_25338 = (state_25370[(10)]);
var inst_25331 = (state_25370[(7)]);
var inst_25334 = (state_25370[(9)]);
var inst_25338__$1 = (function (){var G__25384 = inst_25334;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25384) : f.call(null,G__25384));
})();
var inst_25339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25338__$1,inst_25331);
var inst_25340 = cljs.core.keyword_identical_QMARK_(inst_25331,cljs.core.constant$keyword$36);
var inst_25341 = (inst_25339) || (inst_25340);
var state_25370__$1 = (function (){var statearr_25385 = state_25370;
(statearr_25385[(10)] = inst_25338__$1);

return statearr_25385;
})();
if(cljs.core.truth_(inst_25341)){
var statearr_25386_25411 = state_25370__$1;
(statearr_25386_25411[(1)] = (8));

} else {
var statearr_25387_25412 = state_25370__$1;
(statearr_25387_25412[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (14))){
var inst_25363 = (state_25370[(2)]);
var inst_25364 = cljs.core.async.close_BANG_(out);
var state_25370__$1 = (function (){var statearr_25389 = state_25370;
(statearr_25389[(13)] = inst_25363);

return statearr_25389;
})();
var statearr_25390_25413 = state_25370__$1;
(statearr_25390_25413[(2)] = inst_25364);

(statearr_25390_25413[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (10))){
var inst_25353 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25391_25414 = state_25370__$1;
(statearr_25391_25414[(2)] = inst_25353);

(statearr_25391_25414[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25371 === (8))){
var inst_25338 = (state_25370[(10)]);
var inst_25334 = (state_25370[(9)]);
var inst_25330 = (state_25370[(8)]);
var inst_25343 = inst_25330.push(inst_25334);
var tmp25388 = inst_25330;
var inst_25330__$1 = tmp25388;
var inst_25331 = inst_25338;
var state_25370__$1 = (function (){var statearr_25392 = state_25370;
(statearr_25392[(14)] = inst_25343);

(statearr_25392[(7)] = inst_25331);

(statearr_25392[(8)] = inst_25330__$1);

return statearr_25392;
})();
var statearr_25393_25415 = state_25370__$1;
(statearr_25393_25415[(2)] = null);

(statearr_25393_25415[(1)] = (2));


return cljs.core.constant$keyword$21;
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
});})(c__11307__auto___25401,out))
;
return ((function (switch__11227__auto__,c__11307__auto___25401,out){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_25397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25397[(0)] = state_machine__11228__auto__);

(statearr_25397[(1)] = (1));

return statearr_25397;
});
var state_machine__11228__auto____1 = (function (state_25370){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_25370);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e25398){if((e25398 instanceof Object)){
var ex__11231__auto__ = e25398;
var statearr_25399_25416 = state_25370;
(statearr_25399_25416[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25370);

return cljs.core.constant$keyword$21;
} else {
throw e25398;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__25417 = state_25370;
state_25370 = G__25417;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_25370){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_25370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto___25401,out))
})();
var state__11309__auto__ = (function (){var statearr_25400 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_25400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto___25401);

return statearr_25400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto___25401,out))
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
