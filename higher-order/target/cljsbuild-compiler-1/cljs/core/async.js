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
if(typeof cljs.core.async.t22168 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22168 = (function (f,fn_handler,meta22169){
this.f = f;
this.fn_handler = fn_handler;
this.meta22169 = meta22169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22168.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22170){
var self__ = this;
var _22170__$1 = this;
return self__.meta22169;
});

cljs.core.async.t22168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22170,meta22169__$1){
var self__ = this;
var _22170__$1 = this;
return (new cljs.core.async.t22168(self__.f,self__.fn_handler,meta22169__$1));
});

cljs.core.async.t22168.cljs$lang$type = true;

cljs.core.async.t22168.cljs$lang$ctorStr = "cljs.core.async/t22168";

cljs.core.async.t22168.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t22168");
});

cljs.core.async.__GT_t22168 = (function __GT_t22168(f__$1,fn_handler__$1,meta22169){
return (new cljs.core.async.t22168(f__$1,fn_handler__$1,meta22169));
});

}

return (new cljs.core.async.t22168(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22172 = buff;
if(G__22172){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__22172.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22172.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22172);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22172);
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
var val_22189 = (function (){var G__22186 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22186) : cljs.core.deref.call(null,G__22186));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22187_22190 = val_22189;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22187_22190) : fn1.call(null,G__22187_22190));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22189,ret){
return (function (){
var G__22188 = val_22189;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22188) : fn1.call(null,G__22188));
});})(val_22189,ret))
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
var G__22199 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22199) : cljs.core.deref.call(null,G__22199));
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
var ret = (function (){var G__22200 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22200) : cljs.core.deref.call(null,G__22200));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22201_22203 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22201_22203) : fn1.call(null,G__22201_22203));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__22202 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22202) : fn1.call(null,G__22202));
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
var n__4702__auto___22204 = n;
var x_22205 = (0);
while(true){
if((x_22205 < n__4702__auto___22204)){
(a[x_22205] = (0));

var G__22206 = (x_22205 + (1));
x_22205 = G__22206;
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

var G__22207 = (i + (1));
i = G__22207;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__22215 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22215) : cljs.core.atom.call(null,G__22215));
})();
if(typeof cljs.core.async.t22216 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22216 = (function (flag,alt_flag,meta22217){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22217 = meta22217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22216.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22219 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22219) : cljs.core.deref.call(null,G__22219));
});})(flag))
;

cljs.core.async.t22216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22220_22222 = self__.flag;
var G__22221_22223 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22220_22222,G__22221_22223) : cljs.core.reset_BANG_.call(null,G__22220_22222,G__22221_22223));

return true;
});})(flag))
;

cljs.core.async.t22216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22218){
var self__ = this;
var _22218__$1 = this;
return self__.meta22217;
});})(flag))
;

cljs.core.async.t22216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22218,meta22217__$1){
var self__ = this;
var _22218__$1 = this;
return (new cljs.core.async.t22216(self__.flag,self__.alt_flag,meta22217__$1));
});})(flag))
;

cljs.core.async.t22216.cljs$lang$type = true;

cljs.core.async.t22216.cljs$lang$ctorStr = "cljs.core.async/t22216";

cljs.core.async.t22216.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t22216");
});})(flag))
;

cljs.core.async.__GT_t22216 = ((function (flag){
return (function __GT_t22216(flag__$1,alt_flag__$1,meta22217){
return (new cljs.core.async.t22216(flag__$1,alt_flag__$1,meta22217));
});})(flag))
;

}

return (new cljs.core.async.t22216(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22227 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22227 = (function (cb,flag,alt_handler,meta22228){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22228 = meta22228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22227.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t22227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t22227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22229){
var self__ = this;
var _22229__$1 = this;
return self__.meta22228;
});

cljs.core.async.t22227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22229,meta22228__$1){
var self__ = this;
var _22229__$1 = this;
return (new cljs.core.async.t22227(self__.cb,self__.flag,self__.alt_handler,meta22228__$1));
});

cljs.core.async.t22227.cljs$lang$type = true;

cljs.core.async.t22227.cljs$lang$ctorStr = "cljs.core.async/t22227";

cljs.core.async.t22227.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t22227");
});

cljs.core.async.__GT_t22227 = (function __GT_t22227(cb__$1,flag__$1,alt_handler__$1,meta22228){
return (new cljs.core.async.t22227(cb__$1,flag__$1,alt_handler__$1,meta22228));
});

}

return (new cljs.core.async.t22227(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22237 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22237) : port.call(null,G__22237));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22238 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22238) : port.call(null,G__22238));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22230_SHARP_){
var G__22239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22230_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22239) : fret.call(null,G__22239));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22231_SHARP_){
var G__22240 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22231_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22240) : fret.call(null,G__22240));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22241 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22241) : cljs.core.deref.call(null,G__22241));
})(),(function (){var or__3815__auto__ = wport;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22242 = (i + (1));
i = G__22242;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3815__auto__ = ret;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3803__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3803__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3803__auto__;
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
var alts_BANG___delegate = function (ports,p__22243){
var map__22245 = p__22243;
var map__22245__$1 = ((cljs.core.seq_QMARK_(map__22245))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22245):map__22245);
var opts = map__22245__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22243 = null;
if (arguments.length > 1) {
var G__22246__i = 0, G__22246__a = new Array(arguments.length -  1);
while (G__22246__i < G__22246__a.length) {G__22246__a[G__22246__i] = arguments[G__22246__i + 1]; ++G__22246__i;}
  p__22243 = new cljs.core.IndexedSeq(G__22246__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__22243);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22247){
var ports = cljs.core.first(arglist__22247);
var p__22243 = cljs.core.rest(arglist__22247);
return alts_BANG___delegate(ports,p__22243);
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
var c__11258__auto___22345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___22345){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___22345){
return (function (state_22321){
var state_val_22322 = (state_22321[(1)]);
if((state_val_22322 === (7))){
var inst_22317 = (state_22321[(2)]);
var state_22321__$1 = state_22321;
var statearr_22323_22346 = state_22321__$1;
(statearr_22323_22346[(2)] = inst_22317);

(statearr_22323_22346[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (1))){
var state_22321__$1 = state_22321;
var statearr_22324_22347 = state_22321__$1;
(statearr_22324_22347[(2)] = null);

(statearr_22324_22347[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (4))){
var inst_22300 = (state_22321[(7)]);
var inst_22300__$1 = (state_22321[(2)]);
var inst_22301 = (inst_22300__$1 == null);
var state_22321__$1 = (function (){var statearr_22325 = state_22321;
(statearr_22325[(7)] = inst_22300__$1);

return statearr_22325;
})();
if(cljs.core.truth_(inst_22301)){
var statearr_22326_22348 = state_22321__$1;
(statearr_22326_22348[(1)] = (5));

} else {
var statearr_22327_22349 = state_22321__$1;
(statearr_22327_22349[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (13))){
var state_22321__$1 = state_22321;
var statearr_22328_22350 = state_22321__$1;
(statearr_22328_22350[(2)] = null);

(statearr_22328_22350[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (6))){
var inst_22300 = (state_22321[(7)]);
var state_22321__$1 = state_22321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22321__$1,(11),to,inst_22300);
} else {
if((state_val_22322 === (3))){
var inst_22319 = (state_22321[(2)]);
var state_22321__$1 = state_22321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22321__$1,inst_22319);
} else {
if((state_val_22322 === (12))){
var state_22321__$1 = state_22321;
var statearr_22329_22351 = state_22321__$1;
(statearr_22329_22351[(2)] = null);

(statearr_22329_22351[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (2))){
var state_22321__$1 = state_22321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22321__$1,(4),from);
} else {
if((state_val_22322 === (11))){
var inst_22310 = (state_22321[(2)]);
var state_22321__$1 = state_22321;
if(cljs.core.truth_(inst_22310)){
var statearr_22330_22352 = state_22321__$1;
(statearr_22330_22352[(1)] = (12));

} else {
var statearr_22331_22353 = state_22321__$1;
(statearr_22331_22353[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (9))){
var state_22321__$1 = state_22321;
var statearr_22332_22354 = state_22321__$1;
(statearr_22332_22354[(2)] = null);

(statearr_22332_22354[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (5))){
var state_22321__$1 = state_22321;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22333_22355 = state_22321__$1;
(statearr_22333_22355[(1)] = (8));

} else {
var statearr_22334_22356 = state_22321__$1;
(statearr_22334_22356[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (14))){
var inst_22315 = (state_22321[(2)]);
var state_22321__$1 = state_22321;
var statearr_22335_22357 = state_22321__$1;
(statearr_22335_22357[(2)] = inst_22315);

(statearr_22335_22357[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (10))){
var inst_22307 = (state_22321[(2)]);
var state_22321__$1 = state_22321;
var statearr_22336_22358 = state_22321__$1;
(statearr_22336_22358[(2)] = inst_22307);

(statearr_22336_22358[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22322 === (8))){
var inst_22304 = cljs.core.async.close_BANG_(to);
var state_22321__$1 = state_22321;
var statearr_22337_22359 = state_22321__$1;
(statearr_22337_22359[(2)] = inst_22304);

(statearr_22337_22359[(1)] = (10));


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
});})(c__11258__auto___22345))
;
return ((function (switch__11178__auto__,c__11258__auto___22345){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_22341 = [null,null,null,null,null,null,null,null];
(statearr_22341[(0)] = state_machine__11179__auto__);

(statearr_22341[(1)] = (1));

return statearr_22341;
});
var state_machine__11179__auto____1 = (function (state_22321){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_22321);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e22342){if((e22342 instanceof Object)){
var ex__11182__auto__ = e22342;
var statearr_22343_22360 = state_22321;
(statearr_22343_22360[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22321);

return cljs.core.constant$keyword$21;
} else {
throw e22342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__22361 = state_22321;
state_22321 = G__22361;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_22321){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_22321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___22345))
})();
var state__11260__auto__ = (function (){var statearr_22344 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_22344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___22345);

return statearr_22344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___22345))
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
return (function (p__22547){
var vec__22548 = p__22547;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22548,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22548,(1),null);
var job = vec__22548;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11258__auto___22732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___22732,res,vec__22548,v,p,job,jobs,results){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___22732,res,vec__22548,v,p,job,jobs,results){
return (function (state_22553){
var state_val_22554 = (state_22553[(1)]);
if((state_val_22554 === (2))){
var inst_22550 = (state_22553[(2)]);
var inst_22551 = cljs.core.async.close_BANG_(res);
var state_22553__$1 = (function (){var statearr_22555 = state_22553;
(statearr_22555[(7)] = inst_22550);

return statearr_22555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22553__$1,inst_22551);
} else {
if((state_val_22554 === (1))){
var state_22553__$1 = state_22553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22553__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11258__auto___22732,res,vec__22548,v,p,job,jobs,results))
;
return ((function (switch__11178__auto__,c__11258__auto___22732,res,vec__22548,v,p,job,jobs,results){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_22559 = [null,null,null,null,null,null,null,null];
(statearr_22559[(0)] = state_machine__11179__auto__);

(statearr_22559[(1)] = (1));

return statearr_22559;
});
var state_machine__11179__auto____1 = (function (state_22553){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_22553);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e22560){if((e22560 instanceof Object)){
var ex__11182__auto__ = e22560;
var statearr_22561_22733 = state_22553;
(statearr_22561_22733[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22553);

return cljs.core.constant$keyword$21;
} else {
throw e22560;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__22734 = state_22553;
state_22553 = G__22734;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_22553){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_22553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___22732,res,vec__22548,v,p,job,jobs,results))
})();
var state__11260__auto__ = (function (){var statearr_22562 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_22562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___22732);

return statearr_22562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___22732,res,vec__22548,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22563){
var vec__22564 = p__22563;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22564,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22564,(1),null);
var job = vec__22564;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__22565_22735 = v;
var G__22566_22736 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22565_22735,G__22566_22736) : xf.call(null,G__22565_22735,G__22566_22736));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4702__auto___22737 = n;
var __22738 = (0);
while(true){
if((__22738 < n__4702__auto___22737)){
var G__22567_22739 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22567_22739) {
case "async":
var c__11258__auto___22741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22738,c__11258__auto___22741,G__22567_22739,n__4702__auto___22737,jobs,results,process,async){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (__22738,c__11258__auto___22741,G__22567_22739,n__4702__auto___22737,jobs,results,process,async){
return (function (state_22580){
var state_val_22581 = (state_22580[(1)]);
if((state_val_22581 === (7))){
var inst_22576 = (state_22580[(2)]);
var state_22580__$1 = state_22580;
var statearr_22582_22742 = state_22580__$1;
(statearr_22582_22742[(2)] = inst_22576);

(statearr_22582_22742[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22581 === (6))){
var state_22580__$1 = state_22580;
var statearr_22583_22743 = state_22580__$1;
(statearr_22583_22743[(2)] = null);

(statearr_22583_22743[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22581 === (5))){
var state_22580__$1 = state_22580;
var statearr_22584_22744 = state_22580__$1;
(statearr_22584_22744[(2)] = null);

(statearr_22584_22744[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22581 === (4))){
var inst_22570 = (state_22580[(2)]);
var inst_22571 = async(inst_22570);
var state_22580__$1 = state_22580;
if(cljs.core.truth_(inst_22571)){
var statearr_22585_22745 = state_22580__$1;
(statearr_22585_22745[(1)] = (5));

} else {
var statearr_22586_22746 = state_22580__$1;
(statearr_22586_22746[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22581 === (3))){
var inst_22578 = (state_22580[(2)]);
var state_22580__$1 = state_22580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22580__$1,inst_22578);
} else {
if((state_val_22581 === (2))){
var state_22580__$1 = state_22580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22580__$1,(4),jobs);
} else {
if((state_val_22581 === (1))){
var state_22580__$1 = state_22580;
var statearr_22587_22747 = state_22580__$1;
(statearr_22587_22747[(2)] = null);

(statearr_22587_22747[(1)] = (2));


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
});})(__22738,c__11258__auto___22741,G__22567_22739,n__4702__auto___22737,jobs,results,process,async))
;
return ((function (__22738,switch__11178__auto__,c__11258__auto___22741,G__22567_22739,n__4702__auto___22737,jobs,results,process,async){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_22591 = [null,null,null,null,null,null,null];
(statearr_22591[(0)] = state_machine__11179__auto__);

(statearr_22591[(1)] = (1));

return statearr_22591;
});
var state_machine__11179__auto____1 = (function (state_22580){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_22580);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e22592){if((e22592 instanceof Object)){
var ex__11182__auto__ = e22592;
var statearr_22593_22748 = state_22580;
(statearr_22593_22748[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22580);

return cljs.core.constant$keyword$21;
} else {
throw e22592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__22749 = state_22580;
state_22580 = G__22749;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_22580){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_22580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(__22738,switch__11178__auto__,c__11258__auto___22741,G__22567_22739,n__4702__auto___22737,jobs,results,process,async))
})();
var state__11260__auto__ = (function (){var statearr_22594 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_22594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___22741);

return statearr_22594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(__22738,c__11258__auto___22741,G__22567_22739,n__4702__auto___22737,jobs,results,process,async))
);


break;
case "compute":
var c__11258__auto___22750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22738,c__11258__auto___22750,G__22567_22739,n__4702__auto___22737,jobs,results,process,async){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (__22738,c__11258__auto___22750,G__22567_22739,n__4702__auto___22737,jobs,results,process,async){
return (function (state_22607){
var state_val_22608 = (state_22607[(1)]);
if((state_val_22608 === (7))){
var inst_22603 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22609_22751 = state_22607__$1;
(statearr_22609_22751[(2)] = inst_22603);

(statearr_22609_22751[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22608 === (6))){
var state_22607__$1 = state_22607;
var statearr_22610_22752 = state_22607__$1;
(statearr_22610_22752[(2)] = null);

(statearr_22610_22752[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22608 === (5))){
var state_22607__$1 = state_22607;
var statearr_22611_22753 = state_22607__$1;
(statearr_22611_22753[(2)] = null);

(statearr_22611_22753[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22608 === (4))){
var inst_22597 = (state_22607[(2)]);
var inst_22598 = process(inst_22597);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22598)){
var statearr_22612_22754 = state_22607__$1;
(statearr_22612_22754[(1)] = (5));

} else {
var statearr_22613_22755 = state_22607__$1;
(statearr_22613_22755[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22608 === (3))){
var inst_22605 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22607__$1,inst_22605);
} else {
if((state_val_22608 === (2))){
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22607__$1,(4),jobs);
} else {
if((state_val_22608 === (1))){
var state_22607__$1 = state_22607;
var statearr_22614_22756 = state_22607__$1;
(statearr_22614_22756[(2)] = null);

(statearr_22614_22756[(1)] = (2));


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
});})(__22738,c__11258__auto___22750,G__22567_22739,n__4702__auto___22737,jobs,results,process,async))
;
return ((function (__22738,switch__11178__auto__,c__11258__auto___22750,G__22567_22739,n__4702__auto___22737,jobs,results,process,async){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_22618 = [null,null,null,null,null,null,null];
(statearr_22618[(0)] = state_machine__11179__auto__);

(statearr_22618[(1)] = (1));

return statearr_22618;
});
var state_machine__11179__auto____1 = (function (state_22607){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_22607);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e22619){if((e22619 instanceof Object)){
var ex__11182__auto__ = e22619;
var statearr_22620_22757 = state_22607;
(statearr_22620_22757[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22607);

return cljs.core.constant$keyword$21;
} else {
throw e22619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__22758 = state_22607;
state_22607 = G__22758;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_22607){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_22607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(__22738,switch__11178__auto__,c__11258__auto___22750,G__22567_22739,n__4702__auto___22737,jobs,results,process,async))
})();
var state__11260__auto__ = (function (){var statearr_22621 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_22621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___22750);

return statearr_22621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(__22738,c__11258__auto___22750,G__22567_22739,n__4702__auto___22737,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22759 = (__22738 + (1));
__22738 = G__22759;
continue;
} else {
}
break;
}

var c__11258__auto___22760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___22760,jobs,results,process,async){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___22760,jobs,results,process,async){
return (function (state_22643){
var state_val_22644 = (state_22643[(1)]);
if((state_val_22644 === (9))){
var inst_22636 = (state_22643[(2)]);
var state_22643__$1 = (function (){var statearr_22645 = state_22643;
(statearr_22645[(7)] = inst_22636);

return statearr_22645;
})();
var statearr_22646_22761 = state_22643__$1;
(statearr_22646_22761[(2)] = null);

(statearr_22646_22761[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22644 === (8))){
var inst_22629 = (state_22643[(8)]);
var inst_22634 = (state_22643[(2)]);
var state_22643__$1 = (function (){var statearr_22647 = state_22643;
(statearr_22647[(9)] = inst_22634);

return statearr_22647;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22643__$1,(9),results,inst_22629);
} else {
if((state_val_22644 === (7))){
var inst_22639 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
var statearr_22648_22762 = state_22643__$1;
(statearr_22648_22762[(2)] = inst_22639);

(statearr_22648_22762[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22644 === (6))){
var inst_22629 = (state_22643[(8)]);
var inst_22624 = (state_22643[(10)]);
var inst_22629__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22631 = [inst_22624,inst_22629__$1];
var inst_22632 = (new cljs.core.PersistentVector(null,2,(5),inst_22630,inst_22631,null));
var state_22643__$1 = (function (){var statearr_22649 = state_22643;
(statearr_22649[(8)] = inst_22629__$1);

return statearr_22649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22643__$1,(8),jobs,inst_22632);
} else {
if((state_val_22644 === (5))){
var inst_22627 = cljs.core.async.close_BANG_(jobs);
var state_22643__$1 = state_22643;
var statearr_22650_22763 = state_22643__$1;
(statearr_22650_22763[(2)] = inst_22627);

(statearr_22650_22763[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22644 === (4))){
var inst_22624 = (state_22643[(10)]);
var inst_22624__$1 = (state_22643[(2)]);
var inst_22625 = (inst_22624__$1 == null);
var state_22643__$1 = (function (){var statearr_22651 = state_22643;
(statearr_22651[(10)] = inst_22624__$1);

return statearr_22651;
})();
if(cljs.core.truth_(inst_22625)){
var statearr_22652_22764 = state_22643__$1;
(statearr_22652_22764[(1)] = (5));

} else {
var statearr_22653_22765 = state_22643__$1;
(statearr_22653_22765[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22644 === (3))){
var inst_22641 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22643__$1,inst_22641);
} else {
if((state_val_22644 === (2))){
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22643__$1,(4),from);
} else {
if((state_val_22644 === (1))){
var state_22643__$1 = state_22643;
var statearr_22654_22766 = state_22643__$1;
(statearr_22654_22766[(2)] = null);

(statearr_22654_22766[(1)] = (2));


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
});})(c__11258__auto___22760,jobs,results,process,async))
;
return ((function (switch__11178__auto__,c__11258__auto___22760,jobs,results,process,async){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_22658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22658[(0)] = state_machine__11179__auto__);

(statearr_22658[(1)] = (1));

return statearr_22658;
});
var state_machine__11179__auto____1 = (function (state_22643){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_22643);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e22659){if((e22659 instanceof Object)){
var ex__11182__auto__ = e22659;
var statearr_22660_22767 = state_22643;
(statearr_22660_22767[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22643);

return cljs.core.constant$keyword$21;
} else {
throw e22659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__22768 = state_22643;
state_22643 = G__22768;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_22643){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_22643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___22760,jobs,results,process,async))
})();
var state__11260__auto__ = (function (){var statearr_22661 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_22661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___22760);

return statearr_22661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___22760,jobs,results,process,async))
);


var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__,jobs,results,process,async){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__,jobs,results,process,async){
return (function (state_22699){
var state_val_22700 = (state_22699[(1)]);
if((state_val_22700 === (7))){
var inst_22695 = (state_22699[(2)]);
var state_22699__$1 = state_22699;
var statearr_22701_22769 = state_22699__$1;
(statearr_22701_22769[(2)] = inst_22695);

(statearr_22701_22769[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (20))){
var state_22699__$1 = state_22699;
var statearr_22702_22770 = state_22699__$1;
(statearr_22702_22770[(2)] = null);

(statearr_22702_22770[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (1))){
var state_22699__$1 = state_22699;
var statearr_22703_22771 = state_22699__$1;
(statearr_22703_22771[(2)] = null);

(statearr_22703_22771[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (4))){
var inst_22664 = (state_22699[(7)]);
var inst_22664__$1 = (state_22699[(2)]);
var inst_22665 = (inst_22664__$1 == null);
var state_22699__$1 = (function (){var statearr_22704 = state_22699;
(statearr_22704[(7)] = inst_22664__$1);

return statearr_22704;
})();
if(cljs.core.truth_(inst_22665)){
var statearr_22705_22772 = state_22699__$1;
(statearr_22705_22772[(1)] = (5));

} else {
var statearr_22706_22773 = state_22699__$1;
(statearr_22706_22773[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (15))){
var inst_22677 = (state_22699[(8)]);
var state_22699__$1 = state_22699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22699__$1,(18),to,inst_22677);
} else {
if((state_val_22700 === (21))){
var inst_22690 = (state_22699[(2)]);
var state_22699__$1 = state_22699;
var statearr_22707_22774 = state_22699__$1;
(statearr_22707_22774[(2)] = inst_22690);

(statearr_22707_22774[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (13))){
var inst_22692 = (state_22699[(2)]);
var state_22699__$1 = (function (){var statearr_22708 = state_22699;
(statearr_22708[(9)] = inst_22692);

return statearr_22708;
})();
var statearr_22709_22775 = state_22699__$1;
(statearr_22709_22775[(2)] = null);

(statearr_22709_22775[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (6))){
var inst_22664 = (state_22699[(7)]);
var state_22699__$1 = state_22699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22699__$1,(11),inst_22664);
} else {
if((state_val_22700 === (17))){
var inst_22685 = (state_22699[(2)]);
var state_22699__$1 = state_22699;
if(cljs.core.truth_(inst_22685)){
var statearr_22710_22776 = state_22699__$1;
(statearr_22710_22776[(1)] = (19));

} else {
var statearr_22711_22777 = state_22699__$1;
(statearr_22711_22777[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (3))){
var inst_22697 = (state_22699[(2)]);
var state_22699__$1 = state_22699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22699__$1,inst_22697);
} else {
if((state_val_22700 === (12))){
var inst_22674 = (state_22699[(10)]);
var state_22699__$1 = state_22699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22699__$1,(14),inst_22674);
} else {
if((state_val_22700 === (2))){
var state_22699__$1 = state_22699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22699__$1,(4),results);
} else {
if((state_val_22700 === (19))){
var state_22699__$1 = state_22699;
var statearr_22712_22778 = state_22699__$1;
(statearr_22712_22778[(2)] = null);

(statearr_22712_22778[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (11))){
var inst_22674 = (state_22699[(2)]);
var state_22699__$1 = (function (){var statearr_22713 = state_22699;
(statearr_22713[(10)] = inst_22674);

return statearr_22713;
})();
var statearr_22714_22779 = state_22699__$1;
(statearr_22714_22779[(2)] = null);

(statearr_22714_22779[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (9))){
var state_22699__$1 = state_22699;
var statearr_22715_22780 = state_22699__$1;
(statearr_22715_22780[(2)] = null);

(statearr_22715_22780[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (5))){
var state_22699__$1 = state_22699;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22716_22781 = state_22699__$1;
(statearr_22716_22781[(1)] = (8));

} else {
var statearr_22717_22782 = state_22699__$1;
(statearr_22717_22782[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (14))){
var inst_22679 = (state_22699[(11)]);
var inst_22677 = (state_22699[(8)]);
var inst_22677__$1 = (state_22699[(2)]);
var inst_22678 = (inst_22677__$1 == null);
var inst_22679__$1 = cljs.core.not(inst_22678);
var state_22699__$1 = (function (){var statearr_22718 = state_22699;
(statearr_22718[(11)] = inst_22679__$1);

(statearr_22718[(8)] = inst_22677__$1);

return statearr_22718;
})();
if(inst_22679__$1){
var statearr_22719_22783 = state_22699__$1;
(statearr_22719_22783[(1)] = (15));

} else {
var statearr_22720_22784 = state_22699__$1;
(statearr_22720_22784[(1)] = (16));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (16))){
var inst_22679 = (state_22699[(11)]);
var state_22699__$1 = state_22699;
var statearr_22721_22785 = state_22699__$1;
(statearr_22721_22785[(2)] = inst_22679);

(statearr_22721_22785[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (10))){
var inst_22671 = (state_22699[(2)]);
var state_22699__$1 = state_22699;
var statearr_22722_22786 = state_22699__$1;
(statearr_22722_22786[(2)] = inst_22671);

(statearr_22722_22786[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (18))){
var inst_22682 = (state_22699[(2)]);
var state_22699__$1 = state_22699;
var statearr_22723_22787 = state_22699__$1;
(statearr_22723_22787[(2)] = inst_22682);

(statearr_22723_22787[(1)] = (17));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22700 === (8))){
var inst_22668 = cljs.core.async.close_BANG_(to);
var state_22699__$1 = state_22699;
var statearr_22724_22788 = state_22699__$1;
(statearr_22724_22788[(2)] = inst_22668);

(statearr_22724_22788[(1)] = (10));


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
});})(c__11258__auto__,jobs,results,process,async))
;
return ((function (switch__11178__auto__,c__11258__auto__,jobs,results,process,async){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_22728 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22728[(0)] = state_machine__11179__auto__);

(statearr_22728[(1)] = (1));

return statearr_22728;
});
var state_machine__11179__auto____1 = (function (state_22699){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_22699);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e22729){if((e22729 instanceof Object)){
var ex__11182__auto__ = e22729;
var statearr_22730_22789 = state_22699;
(statearr_22730_22789[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22699);

return cljs.core.constant$keyword$21;
} else {
throw e22729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__22790 = state_22699;
state_22699 = G__22790;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_22699){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_22699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__,jobs,results,process,async))
})();
var state__11260__auto__ = (function (){var statearr_22731 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_22731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_22731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__,jobs,results,process,async))
);

return c__11258__auto__;
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
var c__11258__auto___22913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___22913,tc,fc){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___22913,tc,fc){
return (function (state_22887){
var state_val_22888 = (state_22887[(1)]);
if((state_val_22888 === (7))){
var inst_22883 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
var statearr_22889_22914 = state_22887__$1;
(statearr_22889_22914[(2)] = inst_22883);

(statearr_22889_22914[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (1))){
var state_22887__$1 = state_22887;
var statearr_22890_22915 = state_22887__$1;
(statearr_22890_22915[(2)] = null);

(statearr_22890_22915[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (4))){
var inst_22864 = (state_22887[(7)]);
var inst_22864__$1 = (state_22887[(2)]);
var inst_22865 = (inst_22864__$1 == null);
var state_22887__$1 = (function (){var statearr_22891 = state_22887;
(statearr_22891[(7)] = inst_22864__$1);

return statearr_22891;
})();
if(cljs.core.truth_(inst_22865)){
var statearr_22892_22916 = state_22887__$1;
(statearr_22892_22916[(1)] = (5));

} else {
var statearr_22893_22917 = state_22887__$1;
(statearr_22893_22917[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (13))){
var state_22887__$1 = state_22887;
var statearr_22894_22918 = state_22887__$1;
(statearr_22894_22918[(2)] = null);

(statearr_22894_22918[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (6))){
var inst_22864 = (state_22887[(7)]);
var inst_22870 = (function (){var G__22895 = inst_22864;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22895) : p.call(null,G__22895));
})();
var state_22887__$1 = state_22887;
if(cljs.core.truth_(inst_22870)){
var statearr_22896_22919 = state_22887__$1;
(statearr_22896_22919[(1)] = (9));

} else {
var statearr_22897_22920 = state_22887__$1;
(statearr_22897_22920[(1)] = (10));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (3))){
var inst_22885 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22887__$1,inst_22885);
} else {
if((state_val_22888 === (12))){
var state_22887__$1 = state_22887;
var statearr_22898_22921 = state_22887__$1;
(statearr_22898_22921[(2)] = null);

(statearr_22898_22921[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (2))){
var state_22887__$1 = state_22887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22887__$1,(4),ch);
} else {
if((state_val_22888 === (11))){
var inst_22864 = (state_22887[(7)]);
var inst_22874 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22887__$1,(8),inst_22874,inst_22864);
} else {
if((state_val_22888 === (9))){
var state_22887__$1 = state_22887;
var statearr_22899_22922 = state_22887__$1;
(statearr_22899_22922[(2)] = tc);

(statearr_22899_22922[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (5))){
var inst_22867 = cljs.core.async.close_BANG_(tc);
var inst_22868 = cljs.core.async.close_BANG_(fc);
var state_22887__$1 = (function (){var statearr_22900 = state_22887;
(statearr_22900[(8)] = inst_22867);

return statearr_22900;
})();
var statearr_22901_22923 = state_22887__$1;
(statearr_22901_22923[(2)] = inst_22868);

(statearr_22901_22923[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (14))){
var inst_22881 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
var statearr_22902_22924 = state_22887__$1;
(statearr_22902_22924[(2)] = inst_22881);

(statearr_22902_22924[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (10))){
var state_22887__$1 = state_22887;
var statearr_22903_22925 = state_22887__$1;
(statearr_22903_22925[(2)] = fc);

(statearr_22903_22925[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22888 === (8))){
var inst_22876 = (state_22887[(2)]);
var state_22887__$1 = state_22887;
if(cljs.core.truth_(inst_22876)){
var statearr_22904_22926 = state_22887__$1;
(statearr_22904_22926[(1)] = (12));

} else {
var statearr_22905_22927 = state_22887__$1;
(statearr_22905_22927[(1)] = (13));

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
});})(c__11258__auto___22913,tc,fc))
;
return ((function (switch__11178__auto__,c__11258__auto___22913,tc,fc){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_22909 = [null,null,null,null,null,null,null,null,null];
(statearr_22909[(0)] = state_machine__11179__auto__);

(statearr_22909[(1)] = (1));

return statearr_22909;
});
var state_machine__11179__auto____1 = (function (state_22887){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_22887);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e22910){if((e22910 instanceof Object)){
var ex__11182__auto__ = e22910;
var statearr_22911_22928 = state_22887;
(statearr_22911_22928[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22887);

return cljs.core.constant$keyword$21;
} else {
throw e22910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__22929 = state_22887;
state_22887 = G__22929;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_22887){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_22887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___22913,tc,fc))
})();
var state__11260__auto__ = (function (){var statearr_22912 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_22912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___22913);

return statearr_22912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___22913,tc,fc))
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
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_22978){
var state_val_22979 = (state_22978[(1)]);
if((state_val_22979 === (7))){
var inst_22974 = (state_22978[(2)]);
var state_22978__$1 = state_22978;
var statearr_22980_22998 = state_22978__$1;
(statearr_22980_22998[(2)] = inst_22974);

(statearr_22980_22998[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22979 === (6))){
var inst_22967 = (state_22978[(7)]);
var inst_22964 = (state_22978[(8)]);
var inst_22971 = (function (){var G__22981 = inst_22964;
var G__22982 = inst_22967;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22981,G__22982) : f.call(null,G__22981,G__22982));
})();
var inst_22964__$1 = inst_22971;
var state_22978__$1 = (function (){var statearr_22983 = state_22978;
(statearr_22983[(8)] = inst_22964__$1);

return statearr_22983;
})();
var statearr_22984_22999 = state_22978__$1;
(statearr_22984_22999[(2)] = null);

(statearr_22984_22999[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22979 === (5))){
var inst_22964 = (state_22978[(8)]);
var state_22978__$1 = state_22978;
var statearr_22985_23000 = state_22978__$1;
(statearr_22985_23000[(2)] = inst_22964);

(statearr_22985_23000[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_22979 === (4))){
var inst_22967 = (state_22978[(7)]);
var inst_22967__$1 = (state_22978[(2)]);
var inst_22968 = (inst_22967__$1 == null);
var state_22978__$1 = (function (){var statearr_22986 = state_22978;
(statearr_22986[(7)] = inst_22967__$1);

return statearr_22986;
})();
if(cljs.core.truth_(inst_22968)){
var statearr_22987_23001 = state_22978__$1;
(statearr_22987_23001[(1)] = (5));

} else {
var statearr_22988_23002 = state_22978__$1;
(statearr_22988_23002[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_22979 === (3))){
var inst_22976 = (state_22978[(2)]);
var state_22978__$1 = state_22978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22978__$1,inst_22976);
} else {
if((state_val_22979 === (2))){
var state_22978__$1 = state_22978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22978__$1,(4),ch);
} else {
if((state_val_22979 === (1))){
var inst_22964 = init;
var state_22978__$1 = (function (){var statearr_22989 = state_22978;
(statearr_22989[(8)] = inst_22964);

return statearr_22989;
})();
var statearr_22990_23003 = state_22978__$1;
(statearr_22990_23003[(2)] = null);

(statearr_22990_23003[(1)] = (2));


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
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_22994 = [null,null,null,null,null,null,null,null,null];
(statearr_22994[(0)] = state_machine__11179__auto__);

(statearr_22994[(1)] = (1));

return statearr_22994;
});
var state_machine__11179__auto____1 = (function (state_22978){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_22978);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e22995){if((e22995 instanceof Object)){
var ex__11182__auto__ = e22995;
var statearr_22996_23004 = state_22978;
(statearr_22996_23004[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22978);

return cljs.core.constant$keyword$21;
} else {
throw e22995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__23005 = state_22978;
state_22978 = G__23005;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_22978){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_22978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_22997 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_22997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_22997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
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
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_23082){
var state_val_23083 = (state_23082[(1)]);
if((state_val_23083 === (7))){
var inst_23064 = (state_23082[(2)]);
var state_23082__$1 = state_23082;
var statearr_23084_23107 = state_23082__$1;
(statearr_23084_23107[(2)] = inst_23064);

(statearr_23084_23107[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (1))){
var inst_23058 = cljs.core.seq(coll);
var inst_23059 = inst_23058;
var state_23082__$1 = (function (){var statearr_23085 = state_23082;
(statearr_23085[(7)] = inst_23059);

return statearr_23085;
})();
var statearr_23086_23108 = state_23082__$1;
(statearr_23086_23108[(2)] = null);

(statearr_23086_23108[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (4))){
var inst_23059 = (state_23082[(7)]);
var inst_23062 = cljs.core.first(inst_23059);
var state_23082__$1 = state_23082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23082__$1,(7),ch,inst_23062);
} else {
if((state_val_23083 === (13))){
var inst_23076 = (state_23082[(2)]);
var state_23082__$1 = state_23082;
var statearr_23087_23109 = state_23082__$1;
(statearr_23087_23109[(2)] = inst_23076);

(statearr_23087_23109[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (6))){
var inst_23067 = (state_23082[(2)]);
var state_23082__$1 = state_23082;
if(cljs.core.truth_(inst_23067)){
var statearr_23088_23110 = state_23082__$1;
(statearr_23088_23110[(1)] = (8));

} else {
var statearr_23089_23111 = state_23082__$1;
(statearr_23089_23111[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (3))){
var inst_23080 = (state_23082[(2)]);
var state_23082__$1 = state_23082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23082__$1,inst_23080);
} else {
if((state_val_23083 === (12))){
var state_23082__$1 = state_23082;
var statearr_23090_23112 = state_23082__$1;
(statearr_23090_23112[(2)] = null);

(statearr_23090_23112[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (2))){
var inst_23059 = (state_23082[(7)]);
var state_23082__$1 = state_23082;
if(cljs.core.truth_(inst_23059)){
var statearr_23091_23113 = state_23082__$1;
(statearr_23091_23113[(1)] = (4));

} else {
var statearr_23092_23114 = state_23082__$1;
(statearr_23092_23114[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (11))){
var inst_23073 = cljs.core.async.close_BANG_(ch);
var state_23082__$1 = state_23082;
var statearr_23093_23115 = state_23082__$1;
(statearr_23093_23115[(2)] = inst_23073);

(statearr_23093_23115[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (9))){
var state_23082__$1 = state_23082;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23094_23116 = state_23082__$1;
(statearr_23094_23116[(1)] = (11));

} else {
var statearr_23095_23117 = state_23082__$1;
(statearr_23095_23117[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (5))){
var inst_23059 = (state_23082[(7)]);
var state_23082__$1 = state_23082;
var statearr_23096_23118 = state_23082__$1;
(statearr_23096_23118[(2)] = inst_23059);

(statearr_23096_23118[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (10))){
var inst_23078 = (state_23082[(2)]);
var state_23082__$1 = state_23082;
var statearr_23097_23119 = state_23082__$1;
(statearr_23097_23119[(2)] = inst_23078);

(statearr_23097_23119[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23083 === (8))){
var inst_23059 = (state_23082[(7)]);
var inst_23069 = cljs.core.next(inst_23059);
var inst_23059__$1 = inst_23069;
var state_23082__$1 = (function (){var statearr_23098 = state_23082;
(statearr_23098[(7)] = inst_23059__$1);

return statearr_23098;
})();
var statearr_23099_23120 = state_23082__$1;
(statearr_23099_23120[(2)] = null);

(statearr_23099_23120[(1)] = (2));


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
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_23103 = [null,null,null,null,null,null,null,null];
(statearr_23103[(0)] = state_machine__11179__auto__);

(statearr_23103[(1)] = (1));

return statearr_23103;
});
var state_machine__11179__auto____1 = (function (state_23082){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_23082);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e23104){if((e23104 instanceof Object)){
var ex__11182__auto__ = e23104;
var statearr_23105_23121 = state_23082;
(statearr_23105_23121[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23082);

return cljs.core.constant$keyword$21;
} else {
throw e23104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__23122 = state_23082;
state_23082 = G__23122;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_23082){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_23082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_23106 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_23106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_23106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
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

cljs.core.async.Mux = (function (){var obj23124 = {};
return obj23124;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3803__auto__ = _;
if(and__3803__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4459__auto__ = (((_ == null))?null:_);
return (function (){var or__3815__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__23128 = x__4459__auto__;
return goog.typeOf(G__23128);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj23130 = {};
return obj23130;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__23134 = x__4459__auto__;
return goog.typeOf(G__23134);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__23138 = x__4459__auto__;
return goog.typeOf(G__23138);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__23142 = x__4459__auto__;
return goog.typeOf(G__23142);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
var cs = (function (){var G__23372 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23372) : cljs.core.atom.call(null,G__23372));
})();
var m = (function (){
if(typeof cljs.core.async.t23373 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23373 = (function (cs,ch,mult,meta23374){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23374 = meta23374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23373.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23373.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23373.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23373.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23376_23601 = self__.cs;
var G__23377_23602 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23376_23601,G__23377_23602) : cljs.core.reset_BANG_.call(null,G__23376_23601,G__23377_23602));

return null;
});})(cs))
;

cljs.core.async.t23373.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23375){
var self__ = this;
var _23375__$1 = this;
return self__.meta23374;
});})(cs))
;

cljs.core.async.t23373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23375,meta23374__$1){
var self__ = this;
var _23375__$1 = this;
return (new cljs.core.async.t23373(self__.cs,self__.ch,self__.mult,meta23374__$1));
});})(cs))
;

cljs.core.async.t23373.cljs$lang$type = true;

cljs.core.async.t23373.cljs$lang$ctorStr = "cljs.core.async/t23373";

cljs.core.async.t23373.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t23373");
});})(cs))
;

cljs.core.async.__GT_t23373 = ((function (cs){
return (function __GT_t23373(cs__$1,ch__$1,mult__$1,meta23374){
return (new cljs.core.async.t23373(cs__$1,ch__$1,mult__$1,meta23374));
});})(cs))
;

}

return (new cljs.core.async.t23373(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23378 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23378) : cljs.core.atom.call(null,G__23378));
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
var c__11258__auto___23603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___23603,cs,m,dchan,dctr,done){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___23603,cs,m,dchan,dctr,done){
return (function (state_23509){
var state_val_23510 = (state_23509[(1)]);
if((state_val_23510 === (7))){
var inst_23505 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23511_23604 = state_23509__$1;
(statearr_23511_23604[(2)] = inst_23505);

(statearr_23511_23604[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (20))){
var inst_23410 = (state_23509[(7)]);
var inst_23420 = cljs.core.first(inst_23410);
var inst_23421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23420,(0),null);
var inst_23422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23420,(1),null);
var state_23509__$1 = (function (){var statearr_23512 = state_23509;
(statearr_23512[(8)] = inst_23421);

return statearr_23512;
})();
if(cljs.core.truth_(inst_23422)){
var statearr_23513_23605 = state_23509__$1;
(statearr_23513_23605[(1)] = (22));

} else {
var statearr_23514_23606 = state_23509__$1;
(statearr_23514_23606[(1)] = (23));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (27))){
var inst_23450 = (state_23509[(9)]);
var inst_23457 = (state_23509[(10)]);
var inst_23381 = (state_23509[(11)]);
var inst_23452 = (state_23509[(12)]);
var inst_23457__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23450,inst_23452);
var inst_23458 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23457__$1,inst_23381,done);
var state_23509__$1 = (function (){var statearr_23515 = state_23509;
(statearr_23515[(10)] = inst_23457__$1);

return statearr_23515;
})();
if(cljs.core.truth_(inst_23458)){
var statearr_23516_23607 = state_23509__$1;
(statearr_23516_23607[(1)] = (30));

} else {
var statearr_23517_23608 = state_23509__$1;
(statearr_23517_23608[(1)] = (31));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (1))){
var state_23509__$1 = state_23509;
var statearr_23518_23609 = state_23509__$1;
(statearr_23518_23609[(2)] = null);

(statearr_23518_23609[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (24))){
var inst_23410 = (state_23509[(7)]);
var inst_23427 = (state_23509[(2)]);
var inst_23428 = cljs.core.next(inst_23410);
var inst_23390 = inst_23428;
var inst_23391 = null;
var inst_23392 = (0);
var inst_23393 = (0);
var state_23509__$1 = (function (){var statearr_23519 = state_23509;
(statearr_23519[(13)] = inst_23393);

(statearr_23519[(14)] = inst_23392);

(statearr_23519[(15)] = inst_23391);

(statearr_23519[(16)] = inst_23427);

(statearr_23519[(17)] = inst_23390);

return statearr_23519;
})();
var statearr_23520_23610 = state_23509__$1;
(statearr_23520_23610[(2)] = null);

(statearr_23520_23610[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (39))){
var state_23509__$1 = state_23509;
var statearr_23524_23611 = state_23509__$1;
(statearr_23524_23611[(2)] = null);

(statearr_23524_23611[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (4))){
var inst_23381 = (state_23509[(11)]);
var inst_23381__$1 = (state_23509[(2)]);
var inst_23382 = (inst_23381__$1 == null);
var state_23509__$1 = (function (){var statearr_23525 = state_23509;
(statearr_23525[(11)] = inst_23381__$1);

return statearr_23525;
})();
if(cljs.core.truth_(inst_23382)){
var statearr_23526_23612 = state_23509__$1;
(statearr_23526_23612[(1)] = (5));

} else {
var statearr_23527_23613 = state_23509__$1;
(statearr_23527_23613[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (15))){
var inst_23393 = (state_23509[(13)]);
var inst_23392 = (state_23509[(14)]);
var inst_23391 = (state_23509[(15)]);
var inst_23390 = (state_23509[(17)]);
var inst_23406 = (state_23509[(2)]);
var inst_23407 = (inst_23393 + (1));
var tmp23521 = inst_23392;
var tmp23522 = inst_23391;
var tmp23523 = inst_23390;
var inst_23390__$1 = tmp23523;
var inst_23391__$1 = tmp23522;
var inst_23392__$1 = tmp23521;
var inst_23393__$1 = inst_23407;
var state_23509__$1 = (function (){var statearr_23528 = state_23509;
(statearr_23528[(13)] = inst_23393__$1);

(statearr_23528[(14)] = inst_23392__$1);

(statearr_23528[(18)] = inst_23406);

(statearr_23528[(15)] = inst_23391__$1);

(statearr_23528[(17)] = inst_23390__$1);

return statearr_23528;
})();
var statearr_23529_23614 = state_23509__$1;
(statearr_23529_23614[(2)] = null);

(statearr_23529_23614[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (21))){
var inst_23431 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23533_23615 = state_23509__$1;
(statearr_23533_23615[(2)] = inst_23431);

(statearr_23533_23615[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (31))){
var inst_23457 = (state_23509[(10)]);
var inst_23461 = done(null);
var inst_23462 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23457);
var state_23509__$1 = (function (){var statearr_23534 = state_23509;
(statearr_23534[(19)] = inst_23461);

return statearr_23534;
})();
var statearr_23535_23616 = state_23509__$1;
(statearr_23535_23616[(2)] = inst_23462);

(statearr_23535_23616[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (32))){
var inst_23451 = (state_23509[(20)]);
var inst_23450 = (state_23509[(9)]);
var inst_23449 = (state_23509[(21)]);
var inst_23452 = (state_23509[(12)]);
var inst_23464 = (state_23509[(2)]);
var inst_23465 = (inst_23452 + (1));
var tmp23530 = inst_23451;
var tmp23531 = inst_23450;
var tmp23532 = inst_23449;
var inst_23449__$1 = tmp23532;
var inst_23450__$1 = tmp23531;
var inst_23451__$1 = tmp23530;
var inst_23452__$1 = inst_23465;
var state_23509__$1 = (function (){var statearr_23536 = state_23509;
(statearr_23536[(20)] = inst_23451__$1);

(statearr_23536[(9)] = inst_23450__$1);

(statearr_23536[(22)] = inst_23464);

(statearr_23536[(21)] = inst_23449__$1);

(statearr_23536[(12)] = inst_23452__$1);

return statearr_23536;
})();
var statearr_23537_23617 = state_23509__$1;
(statearr_23537_23617[(2)] = null);

(statearr_23537_23617[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (40))){
var inst_23477 = (state_23509[(23)]);
var inst_23481 = done(null);
var inst_23482 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23477);
var state_23509__$1 = (function (){var statearr_23538 = state_23509;
(statearr_23538[(24)] = inst_23481);

return statearr_23538;
})();
var statearr_23539_23618 = state_23509__$1;
(statearr_23539_23618[(2)] = inst_23482);

(statearr_23539_23618[(1)] = (41));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (33))){
var inst_23468 = (state_23509[(25)]);
var inst_23470 = cljs.core.chunked_seq_QMARK_(inst_23468);
var state_23509__$1 = state_23509;
if(inst_23470){
var statearr_23540_23619 = state_23509__$1;
(statearr_23540_23619[(1)] = (36));

} else {
var statearr_23541_23620 = state_23509__$1;
(statearr_23541_23620[(1)] = (37));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (13))){
var inst_23400 = (state_23509[(26)]);
var inst_23403 = cljs.core.async.close_BANG_(inst_23400);
var state_23509__$1 = state_23509;
var statearr_23542_23621 = state_23509__$1;
(statearr_23542_23621[(2)] = inst_23403);

(statearr_23542_23621[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (22))){
var inst_23421 = (state_23509[(8)]);
var inst_23424 = cljs.core.async.close_BANG_(inst_23421);
var state_23509__$1 = state_23509;
var statearr_23543_23622 = state_23509__$1;
(statearr_23543_23622[(2)] = inst_23424);

(statearr_23543_23622[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (36))){
var inst_23468 = (state_23509[(25)]);
var inst_23472 = cljs.core.chunk_first(inst_23468);
var inst_23473 = cljs.core.chunk_rest(inst_23468);
var inst_23474 = cljs.core.count(inst_23472);
var inst_23449 = inst_23473;
var inst_23450 = inst_23472;
var inst_23451 = inst_23474;
var inst_23452 = (0);
var state_23509__$1 = (function (){var statearr_23544 = state_23509;
(statearr_23544[(20)] = inst_23451);

(statearr_23544[(9)] = inst_23450);

(statearr_23544[(21)] = inst_23449);

(statearr_23544[(12)] = inst_23452);

return statearr_23544;
})();
var statearr_23545_23623 = state_23509__$1;
(statearr_23545_23623[(2)] = null);

(statearr_23545_23623[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (41))){
var inst_23468 = (state_23509[(25)]);
var inst_23484 = (state_23509[(2)]);
var inst_23485 = cljs.core.next(inst_23468);
var inst_23449 = inst_23485;
var inst_23450 = null;
var inst_23451 = (0);
var inst_23452 = (0);
var state_23509__$1 = (function (){var statearr_23546 = state_23509;
(statearr_23546[(20)] = inst_23451);

(statearr_23546[(9)] = inst_23450);

(statearr_23546[(21)] = inst_23449);

(statearr_23546[(12)] = inst_23452);

(statearr_23546[(27)] = inst_23484);

return statearr_23546;
})();
var statearr_23547_23624 = state_23509__$1;
(statearr_23547_23624[(2)] = null);

(statearr_23547_23624[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (43))){
var state_23509__$1 = state_23509;
var statearr_23548_23625 = state_23509__$1;
(statearr_23548_23625[(2)] = null);

(statearr_23548_23625[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (29))){
var inst_23493 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23549_23626 = state_23509__$1;
(statearr_23549_23626[(2)] = inst_23493);

(statearr_23549_23626[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (44))){
var inst_23502 = (state_23509[(2)]);
var state_23509__$1 = (function (){var statearr_23550 = state_23509;
(statearr_23550[(28)] = inst_23502);

return statearr_23550;
})();
var statearr_23551_23627 = state_23509__$1;
(statearr_23551_23627[(2)] = null);

(statearr_23551_23627[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (6))){
var inst_23441 = (state_23509[(29)]);
var inst_23440 = (function (){var G__23552 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23552) : cljs.core.deref.call(null,G__23552));
})();
var inst_23441__$1 = cljs.core.keys(inst_23440);
var inst_23442 = cljs.core.count(inst_23441__$1);
var inst_23443 = (function (){var G__23553 = dctr;
var G__23554 = inst_23442;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23553,G__23554) : cljs.core.reset_BANG_.call(null,G__23553,G__23554));
})();
var inst_23448 = cljs.core.seq(inst_23441__$1);
var inst_23449 = inst_23448;
var inst_23450 = null;
var inst_23451 = (0);
var inst_23452 = (0);
var state_23509__$1 = (function (){var statearr_23555 = state_23509;
(statearr_23555[(20)] = inst_23451);

(statearr_23555[(30)] = inst_23443);

(statearr_23555[(9)] = inst_23450);

(statearr_23555[(21)] = inst_23449);

(statearr_23555[(29)] = inst_23441__$1);

(statearr_23555[(12)] = inst_23452);

return statearr_23555;
})();
var statearr_23556_23628 = state_23509__$1;
(statearr_23556_23628[(2)] = null);

(statearr_23556_23628[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (28))){
var inst_23449 = (state_23509[(21)]);
var inst_23468 = (state_23509[(25)]);
var inst_23468__$1 = cljs.core.seq(inst_23449);
var state_23509__$1 = (function (){var statearr_23557 = state_23509;
(statearr_23557[(25)] = inst_23468__$1);

return statearr_23557;
})();
if(inst_23468__$1){
var statearr_23558_23629 = state_23509__$1;
(statearr_23558_23629[(1)] = (33));

} else {
var statearr_23559_23630 = state_23509__$1;
(statearr_23559_23630[(1)] = (34));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (25))){
var inst_23451 = (state_23509[(20)]);
var inst_23452 = (state_23509[(12)]);
var inst_23454 = (inst_23452 < inst_23451);
var inst_23455 = inst_23454;
var state_23509__$1 = state_23509;
if(cljs.core.truth_(inst_23455)){
var statearr_23560_23631 = state_23509__$1;
(statearr_23560_23631[(1)] = (27));

} else {
var statearr_23561_23632 = state_23509__$1;
(statearr_23561_23632[(1)] = (28));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (34))){
var state_23509__$1 = state_23509;
var statearr_23562_23633 = state_23509__$1;
(statearr_23562_23633[(2)] = null);

(statearr_23562_23633[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (17))){
var state_23509__$1 = state_23509;
var statearr_23563_23634 = state_23509__$1;
(statearr_23563_23634[(2)] = null);

(statearr_23563_23634[(1)] = (18));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (3))){
var inst_23507 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23509__$1,inst_23507);
} else {
if((state_val_23510 === (12))){
var inst_23436 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23564_23635 = state_23509__$1;
(statearr_23564_23635[(2)] = inst_23436);

(statearr_23564_23635[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (2))){
var state_23509__$1 = state_23509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23509__$1,(4),ch);
} else {
if((state_val_23510 === (23))){
var state_23509__$1 = state_23509;
var statearr_23565_23636 = state_23509__$1;
(statearr_23565_23636[(2)] = null);

(statearr_23565_23636[(1)] = (24));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (35))){
var inst_23491 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23566_23637 = state_23509__$1;
(statearr_23566_23637[(2)] = inst_23491);

(statearr_23566_23637[(1)] = (29));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (19))){
var inst_23410 = (state_23509[(7)]);
var inst_23414 = cljs.core.chunk_first(inst_23410);
var inst_23415 = cljs.core.chunk_rest(inst_23410);
var inst_23416 = cljs.core.count(inst_23414);
var inst_23390 = inst_23415;
var inst_23391 = inst_23414;
var inst_23392 = inst_23416;
var inst_23393 = (0);
var state_23509__$1 = (function (){var statearr_23567 = state_23509;
(statearr_23567[(13)] = inst_23393);

(statearr_23567[(14)] = inst_23392);

(statearr_23567[(15)] = inst_23391);

(statearr_23567[(17)] = inst_23390);

return statearr_23567;
})();
var statearr_23568_23638 = state_23509__$1;
(statearr_23568_23638[(2)] = null);

(statearr_23568_23638[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (11))){
var inst_23410 = (state_23509[(7)]);
var inst_23390 = (state_23509[(17)]);
var inst_23410__$1 = cljs.core.seq(inst_23390);
var state_23509__$1 = (function (){var statearr_23569 = state_23509;
(statearr_23569[(7)] = inst_23410__$1);

return statearr_23569;
})();
if(inst_23410__$1){
var statearr_23570_23639 = state_23509__$1;
(statearr_23570_23639[(1)] = (16));

} else {
var statearr_23571_23640 = state_23509__$1;
(statearr_23571_23640[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (9))){
var inst_23438 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23572_23641 = state_23509__$1;
(statearr_23572_23641[(2)] = inst_23438);

(statearr_23572_23641[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (5))){
var inst_23388 = (function (){var G__23573 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23573) : cljs.core.deref.call(null,G__23573));
})();
var inst_23389 = cljs.core.seq(inst_23388);
var inst_23390 = inst_23389;
var inst_23391 = null;
var inst_23392 = (0);
var inst_23393 = (0);
var state_23509__$1 = (function (){var statearr_23574 = state_23509;
(statearr_23574[(13)] = inst_23393);

(statearr_23574[(14)] = inst_23392);

(statearr_23574[(15)] = inst_23391);

(statearr_23574[(17)] = inst_23390);

return statearr_23574;
})();
var statearr_23575_23642 = state_23509__$1;
(statearr_23575_23642[(2)] = null);

(statearr_23575_23642[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (14))){
var state_23509__$1 = state_23509;
var statearr_23576_23643 = state_23509__$1;
(statearr_23576_23643[(2)] = null);

(statearr_23576_23643[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (45))){
var inst_23499 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23577_23644 = state_23509__$1;
(statearr_23577_23644[(2)] = inst_23499);

(statearr_23577_23644[(1)] = (44));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (26))){
var inst_23441 = (state_23509[(29)]);
var inst_23495 = (state_23509[(2)]);
var inst_23496 = cljs.core.seq(inst_23441);
var state_23509__$1 = (function (){var statearr_23578 = state_23509;
(statearr_23578[(31)] = inst_23495);

return statearr_23578;
})();
if(inst_23496){
var statearr_23579_23645 = state_23509__$1;
(statearr_23579_23645[(1)] = (42));

} else {
var statearr_23580_23646 = state_23509__$1;
(statearr_23580_23646[(1)] = (43));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (16))){
var inst_23410 = (state_23509[(7)]);
var inst_23412 = cljs.core.chunked_seq_QMARK_(inst_23410);
var state_23509__$1 = state_23509;
if(inst_23412){
var statearr_23581_23647 = state_23509__$1;
(statearr_23581_23647[(1)] = (19));

} else {
var statearr_23582_23648 = state_23509__$1;
(statearr_23582_23648[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (38))){
var inst_23488 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23583_23649 = state_23509__$1;
(statearr_23583_23649[(2)] = inst_23488);

(statearr_23583_23649[(1)] = (35));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (30))){
var state_23509__$1 = state_23509;
var statearr_23584_23650 = state_23509__$1;
(statearr_23584_23650[(2)] = null);

(statearr_23584_23650[(1)] = (32));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (10))){
var inst_23393 = (state_23509[(13)]);
var inst_23391 = (state_23509[(15)]);
var inst_23399 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23391,inst_23393);
var inst_23400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23399,(0),null);
var inst_23401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23399,(1),null);
var state_23509__$1 = (function (){var statearr_23585 = state_23509;
(statearr_23585[(26)] = inst_23400);

return statearr_23585;
})();
if(cljs.core.truth_(inst_23401)){
var statearr_23586_23651 = state_23509__$1;
(statearr_23586_23651[(1)] = (13));

} else {
var statearr_23587_23652 = state_23509__$1;
(statearr_23587_23652[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (18))){
var inst_23434 = (state_23509[(2)]);
var state_23509__$1 = state_23509;
var statearr_23588_23653 = state_23509__$1;
(statearr_23588_23653[(2)] = inst_23434);

(statearr_23588_23653[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (42))){
var state_23509__$1 = state_23509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23509__$1,(45),dchan);
} else {
if((state_val_23510 === (37))){
var inst_23477 = (state_23509[(23)]);
var inst_23381 = (state_23509[(11)]);
var inst_23468 = (state_23509[(25)]);
var inst_23477__$1 = cljs.core.first(inst_23468);
var inst_23478 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23477__$1,inst_23381,done);
var state_23509__$1 = (function (){var statearr_23589 = state_23509;
(statearr_23589[(23)] = inst_23477__$1);

return statearr_23589;
})();
if(cljs.core.truth_(inst_23478)){
var statearr_23590_23654 = state_23509__$1;
(statearr_23590_23654[(1)] = (39));

} else {
var statearr_23591_23655 = state_23509__$1;
(statearr_23591_23655[(1)] = (40));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23510 === (8))){
var inst_23393 = (state_23509[(13)]);
var inst_23392 = (state_23509[(14)]);
var inst_23395 = (inst_23393 < inst_23392);
var inst_23396 = inst_23395;
var state_23509__$1 = state_23509;
if(cljs.core.truth_(inst_23396)){
var statearr_23592_23656 = state_23509__$1;
(statearr_23592_23656[(1)] = (10));

} else {
var statearr_23593_23657 = state_23509__$1;
(statearr_23593_23657[(1)] = (11));

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
});})(c__11258__auto___23603,cs,m,dchan,dctr,done))
;
return ((function (switch__11178__auto__,c__11258__auto___23603,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_23597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23597[(0)] = state_machine__11179__auto__);

(statearr_23597[(1)] = (1));

return statearr_23597;
});
var state_machine__11179__auto____1 = (function (state_23509){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_23509);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e23598){if((e23598 instanceof Object)){
var ex__11182__auto__ = e23598;
var statearr_23599_23658 = state_23509;
(statearr_23599_23658[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23509);

return cljs.core.constant$keyword$21;
} else {
throw e23598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__23659 = state_23509;
state_23509 = G__23659;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_23509){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_23509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___23603,cs,m,dchan,dctr,done))
})();
var state__11260__auto__ = (function (){var statearr_23600 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_23600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___23603);

return statearr_23600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___23603,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj23664 = {};
return obj23664;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23668 = x__4459__auto__;
return goog.typeOf(G__23668);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23672 = x__4459__auto__;
return goog.typeOf(G__23672);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23676 = x__4459__auto__;
return goog.typeOf(G__23676);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23680 = x__4459__auto__;
return goog.typeOf(G__23680);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23684 = x__4459__auto__;
return goog.typeOf(G__23684);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23685){
var map__23691 = p__23685;
var map__23691__$1 = ((cljs.core.seq_QMARK_(map__23691))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23691):map__23691);
var opts = map__23691__$1;
var statearr_23692_23696 = state;
(statearr_23692_23696[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__23691,map__23691__$1,opts){
return (function (val){
var statearr_23693_23697 = state;
(statearr_23693_23697[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23691,map__23691__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_23694_23698 = state;
(statearr_23694_23698[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23695 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23695) : cljs.core.deref.call(null,G__23695));
})());


return cljs.core.constant$keyword$21;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23685 = null;
if (arguments.length > 3) {
var G__23699__i = 0, G__23699__a = new Array(arguments.length -  3);
while (G__23699__i < G__23699__a.length) {G__23699__a[G__23699__i] = arguments[G__23699__i + 3]; ++G__23699__i;}
  p__23685 = new cljs.core.IndexedSeq(G__23699__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23685);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23700){
var state = cljs.core.first(arglist__23700);
arglist__23700 = cljs.core.next(arglist__23700);
var cont_block = cljs.core.first(arglist__23700);
arglist__23700 = cljs.core.next(arglist__23700);
var ports = cljs.core.first(arglist__23700);
var p__23685 = cljs.core.rest(arglist__23700);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23685);
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
var cs = (function (){var G__23834 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23834) : cljs.core.atom.call(null,G__23834));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$32);
var solo_mode = (function (){var G__23835 = cljs.core.constant$keyword$31;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23835) : cljs.core.atom.call(null,G__23835));
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
if(cljs.core.truth_((function (){var G__23836 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__23836) : attr.call(null,G__23836));
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
var chs = (function (){var G__23837 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23837) : cljs.core.deref.call(null,G__23837));
})();
var mode = (function (){var G__23838 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23838) : cljs.core.deref.call(null,G__23838));
})();
var solos = pick(cljs.core.constant$keyword$32,chs);
var pauses = pick(cljs.core.constant$keyword$30,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,solos,cljs.core.constant$keyword$34,pick(cljs.core.constant$keyword$31,chs),cljs.core.constant$keyword$35,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$30)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t23839 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23839 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23840){
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
this.meta23840 = meta23840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23839.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23839.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23839.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23839.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23842_23967 = self__.cs;
var G__23843_23968 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23842_23967,G__23843_23968) : cljs.core.reset_BANG_.call(null,G__23842_23967,G__23843_23968));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23839.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23839.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__23844 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__23844) : self__.solo_modes.call(null,G__23844));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__23845_23969 = self__.solo_mode;
var G__23846_23970 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23845_23969,G__23846_23970) : cljs.core.reset_BANG_.call(null,G__23845_23969,G__23846_23970));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23839.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23841){
var self__ = this;
var _23841__$1 = this;
return self__.meta23840;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23841,meta23840__$1){
var self__ = this;
var _23841__$1 = this;
return (new cljs.core.async.t23839(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23840__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23839.cljs$lang$type = true;

cljs.core.async.t23839.cljs$lang$ctorStr = "cljs.core.async/t23839";

cljs.core.async.t23839.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t23839");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23839 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23839(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23840){
return (new cljs.core.async.t23839(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23840));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23839(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11258__auto___23971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___23971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___23971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23918){
var state_val_23919 = (state_23918[(1)]);
if((state_val_23919 === (7))){
var inst_23860 = (state_23918[(7)]);
var inst_23865 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23860);
var state_23918__$1 = state_23918;
var statearr_23920_23972 = state_23918__$1;
(statearr_23920_23972[(2)] = inst_23865);

(statearr_23920_23972[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (20))){
var inst_23875 = (state_23918[(8)]);
var state_23918__$1 = state_23918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23918__$1,(23),out,inst_23875);
} else {
if((state_val_23919 === (1))){
var inst_23850 = (state_23918[(9)]);
var inst_23850__$1 = calc_state();
var inst_23851 = cljs.core.seq_QMARK_(inst_23850__$1);
var state_23918__$1 = (function (){var statearr_23921 = state_23918;
(statearr_23921[(9)] = inst_23850__$1);

return statearr_23921;
})();
if(inst_23851){
var statearr_23922_23973 = state_23918__$1;
(statearr_23922_23973[(1)] = (2));

} else {
var statearr_23923_23974 = state_23918__$1;
(statearr_23923_23974[(1)] = (3));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (24))){
var inst_23868 = (state_23918[(10)]);
var inst_23860 = inst_23868;
var state_23918__$1 = (function (){var statearr_23924 = state_23918;
(statearr_23924[(7)] = inst_23860);

return statearr_23924;
})();
var statearr_23925_23975 = state_23918__$1;
(statearr_23925_23975[(2)] = null);

(statearr_23925_23975[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (4))){
var inst_23850 = (state_23918[(9)]);
var inst_23856 = (state_23918[(2)]);
var inst_23857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23856,cljs.core.constant$keyword$35);
var inst_23858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23856,cljs.core.constant$keyword$34);
var inst_23859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23856,cljs.core.constant$keyword$33);
var inst_23860 = inst_23850;
var state_23918__$1 = (function (){var statearr_23926 = state_23918;
(statearr_23926[(11)] = inst_23858);

(statearr_23926[(7)] = inst_23860);

(statearr_23926[(12)] = inst_23857);

(statearr_23926[(13)] = inst_23859);

return statearr_23926;
})();
var statearr_23927_23976 = state_23918__$1;
(statearr_23927_23976[(2)] = null);

(statearr_23927_23976[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (15))){
var state_23918__$1 = state_23918;
var statearr_23928_23977 = state_23918__$1;
(statearr_23928_23977[(2)] = null);

(statearr_23928_23977[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (21))){
var inst_23868 = (state_23918[(10)]);
var inst_23860 = inst_23868;
var state_23918__$1 = (function (){var statearr_23929 = state_23918;
(statearr_23929[(7)] = inst_23860);

return statearr_23929;
})();
var statearr_23930_23978 = state_23918__$1;
(statearr_23930_23978[(2)] = null);

(statearr_23930_23978[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (13))){
var inst_23914 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
var statearr_23931_23979 = state_23918__$1;
(statearr_23931_23979[(2)] = inst_23914);

(statearr_23931_23979[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (22))){
var inst_23912 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
var statearr_23932_23980 = state_23918__$1;
(statearr_23932_23980[(2)] = inst_23912);

(statearr_23932_23980[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (6))){
var inst_23916 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23918__$1,inst_23916);
} else {
if((state_val_23919 === (25))){
var state_23918__$1 = state_23918;
var statearr_23933_23981 = state_23918__$1;
(statearr_23933_23981[(2)] = null);

(statearr_23933_23981[(1)] = (26));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (17))){
var inst_23891 = (state_23918[(14)]);
var state_23918__$1 = state_23918;
var statearr_23934_23982 = state_23918__$1;
(statearr_23934_23982[(2)] = inst_23891);

(statearr_23934_23982[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (3))){
var inst_23850 = (state_23918[(9)]);
var state_23918__$1 = state_23918;
var statearr_23935_23983 = state_23918__$1;
(statearr_23935_23983[(2)] = inst_23850);

(statearr_23935_23983[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (12))){
var inst_23891 = (state_23918[(14)]);
var inst_23871 = (state_23918[(15)]);
var inst_23876 = (state_23918[(16)]);
var inst_23891__$1 = (function (){var G__23936 = inst_23876;
return (inst_23871.cljs$core$IFn$_invoke$arity$1 ? inst_23871.cljs$core$IFn$_invoke$arity$1(G__23936) : inst_23871.call(null,G__23936));
})();
var state_23918__$1 = (function (){var statearr_23937 = state_23918;
(statearr_23937[(14)] = inst_23891__$1);

return statearr_23937;
})();
if(cljs.core.truth_(inst_23891__$1)){
var statearr_23938_23984 = state_23918__$1;
(statearr_23938_23984[(1)] = (17));

} else {
var statearr_23939_23985 = state_23918__$1;
(statearr_23939_23985[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (2))){
var inst_23850 = (state_23918[(9)]);
var inst_23853 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23850);
var state_23918__$1 = state_23918;
var statearr_23940_23986 = state_23918__$1;
(statearr_23940_23986[(2)] = inst_23853);

(statearr_23940_23986[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (23))){
var inst_23903 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
if(cljs.core.truth_(inst_23903)){
var statearr_23941_23987 = state_23918__$1;
(statearr_23941_23987[(1)] = (24));

} else {
var statearr_23942_23988 = state_23918__$1;
(statearr_23942_23988[(1)] = (25));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (19))){
var inst_23900 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
if(cljs.core.truth_(inst_23900)){
var statearr_23943_23989 = state_23918__$1;
(statearr_23943_23989[(1)] = (20));

} else {
var statearr_23944_23990 = state_23918__$1;
(statearr_23944_23990[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (11))){
var inst_23875 = (state_23918[(8)]);
var inst_23881 = (inst_23875 == null);
var state_23918__$1 = state_23918;
if(cljs.core.truth_(inst_23881)){
var statearr_23945_23991 = state_23918__$1;
(statearr_23945_23991[(1)] = (14));

} else {
var statearr_23946_23992 = state_23918__$1;
(statearr_23946_23992[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (9))){
var inst_23868 = (state_23918[(10)]);
var inst_23868__$1 = (state_23918[(2)]);
var inst_23869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23868__$1,cljs.core.constant$keyword$35);
var inst_23870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23868__$1,cljs.core.constant$keyword$34);
var inst_23871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23868__$1,cljs.core.constant$keyword$33);
var state_23918__$1 = (function (){var statearr_23947 = state_23918;
(statearr_23947[(15)] = inst_23871);

(statearr_23947[(10)] = inst_23868__$1);

(statearr_23947[(17)] = inst_23870);

return statearr_23947;
})();
return cljs.core.async.ioc_alts_BANG_(state_23918__$1,(10),inst_23869);
} else {
if((state_val_23919 === (5))){
var inst_23860 = (state_23918[(7)]);
var inst_23863 = cljs.core.seq_QMARK_(inst_23860);
var state_23918__$1 = state_23918;
if(inst_23863){
var statearr_23948_23993 = state_23918__$1;
(statearr_23948_23993[(1)] = (7));

} else {
var statearr_23949_23994 = state_23918__$1;
(statearr_23949_23994[(1)] = (8));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (14))){
var inst_23876 = (state_23918[(16)]);
var inst_23883 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23876);
var state_23918__$1 = state_23918;
var statearr_23950_23995 = state_23918__$1;
(statearr_23950_23995[(2)] = inst_23883);

(statearr_23950_23995[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (26))){
var inst_23908 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
var statearr_23951_23996 = state_23918__$1;
(statearr_23951_23996[(2)] = inst_23908);

(statearr_23951_23996[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (16))){
var inst_23886 = (state_23918[(2)]);
var inst_23887 = calc_state();
var inst_23860 = inst_23887;
var state_23918__$1 = (function (){var statearr_23952 = state_23918;
(statearr_23952[(18)] = inst_23886);

(statearr_23952[(7)] = inst_23860);

return statearr_23952;
})();
var statearr_23953_23997 = state_23918__$1;
(statearr_23953_23997[(2)] = null);

(statearr_23953_23997[(1)] = (5));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (10))){
var inst_23875 = (state_23918[(8)]);
var inst_23876 = (state_23918[(16)]);
var inst_23874 = (state_23918[(2)]);
var inst_23875__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23874,(0),null);
var inst_23876__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23874,(1),null);
var inst_23877 = (inst_23875__$1 == null);
var inst_23878 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23876__$1,change);
var inst_23879 = (inst_23877) || (inst_23878);
var state_23918__$1 = (function (){var statearr_23954 = state_23918;
(statearr_23954[(8)] = inst_23875__$1);

(statearr_23954[(16)] = inst_23876__$1);

return statearr_23954;
})();
if(cljs.core.truth_(inst_23879)){
var statearr_23955_23998 = state_23918__$1;
(statearr_23955_23998[(1)] = (11));

} else {
var statearr_23956_23999 = state_23918__$1;
(statearr_23956_23999[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (18))){
var inst_23871 = (state_23918[(15)]);
var inst_23876 = (state_23918[(16)]);
var inst_23870 = (state_23918[(17)]);
var inst_23895 = cljs.core.empty_QMARK_(inst_23871);
var inst_23896 = (function (){var G__23957 = inst_23876;
return (inst_23870.cljs$core$IFn$_invoke$arity$1 ? inst_23870.cljs$core$IFn$_invoke$arity$1(G__23957) : inst_23870.call(null,G__23957));
})();
var inst_23897 = cljs.core.not(inst_23896);
var inst_23898 = (inst_23895) && (inst_23897);
var state_23918__$1 = state_23918;
var statearr_23958_24000 = state_23918__$1;
(statearr_23958_24000[(2)] = inst_23898);

(statearr_23958_24000[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_23919 === (8))){
var inst_23860 = (state_23918[(7)]);
var state_23918__$1 = state_23918;
var statearr_23959_24001 = state_23918__$1;
(statearr_23959_24001[(2)] = inst_23860);

(statearr_23959_24001[(1)] = (9));


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
});})(c__11258__auto___23971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11178__auto__,c__11258__auto___23971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_23963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23963[(0)] = state_machine__11179__auto__);

(statearr_23963[(1)] = (1));

return statearr_23963;
});
var state_machine__11179__auto____1 = (function (state_23918){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_23918);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e23964){if((e23964 instanceof Object)){
var ex__11182__auto__ = e23964;
var statearr_23965_24002 = state_23918;
(statearr_23965_24002[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23918);

return cljs.core.constant$keyword$21;
} else {
throw e23964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__24003 = state_23918;
state_23918 = G__24003;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_23918){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_23918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___23971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11260__auto__ = (function (){var statearr_23966 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_23966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___23971);

return statearr_23966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___23971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj24005 = {};
return obj24005;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__24009 = x__4459__auto__;
return goog.typeOf(G__24009);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__24013 = x__4459__auto__;
return goog.typeOf(G__24013);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24019 = x__4459__auto__;
return goog.typeOf(G__24019);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__24021 = x__4459__auto__;
return goog.typeOf(G__24021);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
var mults = (function (){var G__24160 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24160) : cljs.core.atom.call(null,G__24160));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3815__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24162 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24162) : cljs.core.deref.call(null,G__24162));
})(),topic);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3815__auto__,mults){
return (function (p1__24022_SHARP_){
if(cljs.core.truth_((function (){var G__24163 = topic;
return (p1__24022_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24022_SHARP_.cljs$core$IFn$_invoke$arity$1(G__24163) : p1__24022_SHARP_.call(null,G__24163));
})())){
return p1__24022_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24022_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__24164 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__24164) : buf_fn.call(null,G__24164));
})())));
}
});})(or__3815__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24165 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24165 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24166){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24166 = meta24166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24165.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24165.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__24168 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__24168) : self__.ensure_mult.call(null,G__24168));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24165.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24169 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24169) : cljs.core.deref.call(null,G__24169));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24170 = self__.mults;
var G__24171 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24170,G__24171) : cljs.core.reset_BANG_.call(null,G__24170,G__24171));
});})(mults,ensure_mult))
;

cljs.core.async.t24165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24165.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24167){
var self__ = this;
var _24167__$1 = this;
return self__.meta24166;
});})(mults,ensure_mult))
;

cljs.core.async.t24165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24167,meta24166__$1){
var self__ = this;
var _24167__$1 = this;
return (new cljs.core.async.t24165(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24166__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24165.cljs$lang$type = true;

cljs.core.async.t24165.cljs$lang$ctorStr = "cljs.core.async/t24165";

cljs.core.async.t24165.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t24165");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24165 = ((function (mults,ensure_mult){
return (function __GT_t24165(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24166){
return (new cljs.core.async.t24165(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24166));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24165(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11258__auto___24294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___24294,mults,ensure_mult,p){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___24294,mults,ensure_mult,p){
return (function (state_24243){
var state_val_24244 = (state_24243[(1)]);
if((state_val_24244 === (7))){
var inst_24239 = (state_24243[(2)]);
var state_24243__$1 = state_24243;
var statearr_24245_24295 = state_24243__$1;
(statearr_24245_24295[(2)] = inst_24239);

(statearr_24245_24295[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (20))){
var state_24243__$1 = state_24243;
var statearr_24246_24296 = state_24243__$1;
(statearr_24246_24296[(2)] = null);

(statearr_24246_24296[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (1))){
var state_24243__$1 = state_24243;
var statearr_24247_24297 = state_24243__$1;
(statearr_24247_24297[(2)] = null);

(statearr_24247_24297[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (24))){
var inst_24222 = (state_24243[(7)]);
var inst_24231 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24222);
var state_24243__$1 = state_24243;
var statearr_24248_24298 = state_24243__$1;
(statearr_24248_24298[(2)] = inst_24231);

(statearr_24248_24298[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (4))){
var inst_24174 = (state_24243[(8)]);
var inst_24174__$1 = (state_24243[(2)]);
var inst_24175 = (inst_24174__$1 == null);
var state_24243__$1 = (function (){var statearr_24249 = state_24243;
(statearr_24249[(8)] = inst_24174__$1);

return statearr_24249;
})();
if(cljs.core.truth_(inst_24175)){
var statearr_24250_24299 = state_24243__$1;
(statearr_24250_24299[(1)] = (5));

} else {
var statearr_24251_24300 = state_24243__$1;
(statearr_24251_24300[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (15))){
var inst_24216 = (state_24243[(2)]);
var state_24243__$1 = state_24243;
var statearr_24252_24301 = state_24243__$1;
(statearr_24252_24301[(2)] = inst_24216);

(statearr_24252_24301[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (21))){
var inst_24236 = (state_24243[(2)]);
var state_24243__$1 = (function (){var statearr_24253 = state_24243;
(statearr_24253[(9)] = inst_24236);

return statearr_24253;
})();
var statearr_24254_24302 = state_24243__$1;
(statearr_24254_24302[(2)] = null);

(statearr_24254_24302[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (13))){
var inst_24198 = (state_24243[(10)]);
var inst_24200 = cljs.core.chunked_seq_QMARK_(inst_24198);
var state_24243__$1 = state_24243;
if(inst_24200){
var statearr_24255_24303 = state_24243__$1;
(statearr_24255_24303[(1)] = (16));

} else {
var statearr_24256_24304 = state_24243__$1;
(statearr_24256_24304[(1)] = (17));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (22))){
var inst_24228 = (state_24243[(2)]);
var state_24243__$1 = state_24243;
if(cljs.core.truth_(inst_24228)){
var statearr_24257_24305 = state_24243__$1;
(statearr_24257_24305[(1)] = (23));

} else {
var statearr_24258_24306 = state_24243__$1;
(statearr_24258_24306[(1)] = (24));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (6))){
var inst_24174 = (state_24243[(8)]);
var inst_24222 = (state_24243[(7)]);
var inst_24224 = (state_24243[(11)]);
var inst_24222__$1 = (function (){var G__24259 = inst_24174;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24259) : topic_fn.call(null,G__24259));
})();
var inst_24223 = (function (){var G__24260 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24260) : cljs.core.deref.call(null,G__24260));
})();
var inst_24224__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24223,inst_24222__$1);
var state_24243__$1 = (function (){var statearr_24261 = state_24243;
(statearr_24261[(7)] = inst_24222__$1);

(statearr_24261[(11)] = inst_24224__$1);

return statearr_24261;
})();
if(cljs.core.truth_(inst_24224__$1)){
var statearr_24262_24307 = state_24243__$1;
(statearr_24262_24307[(1)] = (19));

} else {
var statearr_24263_24308 = state_24243__$1;
(statearr_24263_24308[(1)] = (20));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (25))){
var inst_24233 = (state_24243[(2)]);
var state_24243__$1 = state_24243;
var statearr_24264_24309 = state_24243__$1;
(statearr_24264_24309[(2)] = inst_24233);

(statearr_24264_24309[(1)] = (21));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (17))){
var inst_24198 = (state_24243[(10)]);
var inst_24207 = cljs.core.first(inst_24198);
var inst_24208 = cljs.core.async.muxch_STAR_(inst_24207);
var inst_24209 = cljs.core.async.close_BANG_(inst_24208);
var inst_24210 = cljs.core.next(inst_24198);
var inst_24184 = inst_24210;
var inst_24185 = null;
var inst_24186 = (0);
var inst_24187 = (0);
var state_24243__$1 = (function (){var statearr_24265 = state_24243;
(statearr_24265[(12)] = inst_24185);

(statearr_24265[(13)] = inst_24184);

(statearr_24265[(14)] = inst_24209);

(statearr_24265[(15)] = inst_24186);

(statearr_24265[(16)] = inst_24187);

return statearr_24265;
})();
var statearr_24266_24310 = state_24243__$1;
(statearr_24266_24310[(2)] = null);

(statearr_24266_24310[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (3))){
var inst_24241 = (state_24243[(2)]);
var state_24243__$1 = state_24243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24243__$1,inst_24241);
} else {
if((state_val_24244 === (12))){
var inst_24218 = (state_24243[(2)]);
var state_24243__$1 = state_24243;
var statearr_24267_24311 = state_24243__$1;
(statearr_24267_24311[(2)] = inst_24218);

(statearr_24267_24311[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (2))){
var state_24243__$1 = state_24243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24243__$1,(4),ch);
} else {
if((state_val_24244 === (23))){
var state_24243__$1 = state_24243;
var statearr_24268_24312 = state_24243__$1;
(statearr_24268_24312[(2)] = null);

(statearr_24268_24312[(1)] = (25));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (19))){
var inst_24174 = (state_24243[(8)]);
var inst_24224 = (state_24243[(11)]);
var inst_24226 = cljs.core.async.muxch_STAR_(inst_24224);
var state_24243__$1 = state_24243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24243__$1,(22),inst_24226,inst_24174);
} else {
if((state_val_24244 === (11))){
var inst_24184 = (state_24243[(13)]);
var inst_24198 = (state_24243[(10)]);
var inst_24198__$1 = cljs.core.seq(inst_24184);
var state_24243__$1 = (function (){var statearr_24269 = state_24243;
(statearr_24269[(10)] = inst_24198__$1);

return statearr_24269;
})();
if(inst_24198__$1){
var statearr_24270_24313 = state_24243__$1;
(statearr_24270_24313[(1)] = (13));

} else {
var statearr_24271_24314 = state_24243__$1;
(statearr_24271_24314[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (9))){
var inst_24220 = (state_24243[(2)]);
var state_24243__$1 = state_24243;
var statearr_24272_24315 = state_24243__$1;
(statearr_24272_24315[(2)] = inst_24220);

(statearr_24272_24315[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (5))){
var inst_24181 = (function (){var G__24273 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24273) : cljs.core.deref.call(null,G__24273));
})();
var inst_24182 = cljs.core.vals(inst_24181);
var inst_24183 = cljs.core.seq(inst_24182);
var inst_24184 = inst_24183;
var inst_24185 = null;
var inst_24186 = (0);
var inst_24187 = (0);
var state_24243__$1 = (function (){var statearr_24274 = state_24243;
(statearr_24274[(12)] = inst_24185);

(statearr_24274[(13)] = inst_24184);

(statearr_24274[(15)] = inst_24186);

(statearr_24274[(16)] = inst_24187);

return statearr_24274;
})();
var statearr_24275_24316 = state_24243__$1;
(statearr_24275_24316[(2)] = null);

(statearr_24275_24316[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (14))){
var state_24243__$1 = state_24243;
var statearr_24279_24317 = state_24243__$1;
(statearr_24279_24317[(2)] = null);

(statearr_24279_24317[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (16))){
var inst_24198 = (state_24243[(10)]);
var inst_24202 = cljs.core.chunk_first(inst_24198);
var inst_24203 = cljs.core.chunk_rest(inst_24198);
var inst_24204 = cljs.core.count(inst_24202);
var inst_24184 = inst_24203;
var inst_24185 = inst_24202;
var inst_24186 = inst_24204;
var inst_24187 = (0);
var state_24243__$1 = (function (){var statearr_24280 = state_24243;
(statearr_24280[(12)] = inst_24185);

(statearr_24280[(13)] = inst_24184);

(statearr_24280[(15)] = inst_24186);

(statearr_24280[(16)] = inst_24187);

return statearr_24280;
})();
var statearr_24281_24318 = state_24243__$1;
(statearr_24281_24318[(2)] = null);

(statearr_24281_24318[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (10))){
var inst_24185 = (state_24243[(12)]);
var inst_24184 = (state_24243[(13)]);
var inst_24186 = (state_24243[(15)]);
var inst_24187 = (state_24243[(16)]);
var inst_24192 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24185,inst_24187);
var inst_24193 = cljs.core.async.muxch_STAR_(inst_24192);
var inst_24194 = cljs.core.async.close_BANG_(inst_24193);
var inst_24195 = (inst_24187 + (1));
var tmp24276 = inst_24185;
var tmp24277 = inst_24184;
var tmp24278 = inst_24186;
var inst_24184__$1 = tmp24277;
var inst_24185__$1 = tmp24276;
var inst_24186__$1 = tmp24278;
var inst_24187__$1 = inst_24195;
var state_24243__$1 = (function (){var statearr_24282 = state_24243;
(statearr_24282[(12)] = inst_24185__$1);

(statearr_24282[(13)] = inst_24184__$1);

(statearr_24282[(17)] = inst_24194);

(statearr_24282[(15)] = inst_24186__$1);

(statearr_24282[(16)] = inst_24187__$1);

return statearr_24282;
})();
var statearr_24283_24319 = state_24243__$1;
(statearr_24283_24319[(2)] = null);

(statearr_24283_24319[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (18))){
var inst_24213 = (state_24243[(2)]);
var state_24243__$1 = state_24243;
var statearr_24284_24320 = state_24243__$1;
(statearr_24284_24320[(2)] = inst_24213);

(statearr_24284_24320[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24244 === (8))){
var inst_24186 = (state_24243[(15)]);
var inst_24187 = (state_24243[(16)]);
var inst_24189 = (inst_24187 < inst_24186);
var inst_24190 = inst_24189;
var state_24243__$1 = state_24243;
if(cljs.core.truth_(inst_24190)){
var statearr_24285_24321 = state_24243__$1;
(statearr_24285_24321[(1)] = (10));

} else {
var statearr_24286_24322 = state_24243__$1;
(statearr_24286_24322[(1)] = (11));

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
});})(c__11258__auto___24294,mults,ensure_mult,p))
;
return ((function (switch__11178__auto__,c__11258__auto___24294,mults,ensure_mult,p){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_24290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24290[(0)] = state_machine__11179__auto__);

(statearr_24290[(1)] = (1));

return statearr_24290;
});
var state_machine__11179__auto____1 = (function (state_24243){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_24243);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e24291){if((e24291 instanceof Object)){
var ex__11182__auto__ = e24291;
var statearr_24292_24323 = state_24243;
(statearr_24292_24323[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24243);

return cljs.core.constant$keyword$21;
} else {
throw e24291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__24324 = state_24243;
state_24243 = G__24324;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_24243){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_24243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___24294,mults,ensure_mult,p))
})();
var state__11260__auto__ = (function (){var statearr_24293 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_24293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___24294);

return statearr_24293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___24294,mults,ensure_mult,p))
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
var dctr = (function (){var G__24405 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24405) : cljs.core.atom.call(null,G__24405));
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
var c__11258__auto___24478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___24478,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___24478,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24444){
var state_val_24445 = (state_24444[(1)]);
if((state_val_24445 === (7))){
var state_24444__$1 = state_24444;
var statearr_24446_24479 = state_24444__$1;
(statearr_24446_24479[(2)] = null);

(statearr_24446_24479[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (1))){
var state_24444__$1 = state_24444;
var statearr_24447_24480 = state_24444__$1;
(statearr_24447_24480[(2)] = null);

(statearr_24447_24480[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (4))){
var inst_24408 = (state_24444[(7)]);
var inst_24410 = (inst_24408 < cnt);
var state_24444__$1 = state_24444;
if(cljs.core.truth_(inst_24410)){
var statearr_24448_24481 = state_24444__$1;
(statearr_24448_24481[(1)] = (6));

} else {
var statearr_24449_24482 = state_24444__$1;
(statearr_24449_24482[(1)] = (7));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (15))){
var inst_24440 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24450_24483 = state_24444__$1;
(statearr_24450_24483[(2)] = inst_24440);

(statearr_24450_24483[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (13))){
var inst_24433 = cljs.core.async.close_BANG_(out);
var state_24444__$1 = state_24444;
var statearr_24451_24484 = state_24444__$1;
(statearr_24451_24484[(2)] = inst_24433);

(statearr_24451_24484[(1)] = (15));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (6))){
var state_24444__$1 = state_24444;
var statearr_24452_24485 = state_24444__$1;
(statearr_24452_24485[(2)] = null);

(statearr_24452_24485[(1)] = (11));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (3))){
var inst_24442 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24444__$1,inst_24442);
} else {
if((state_val_24445 === (12))){
var inst_24430 = (state_24444[(8)]);
var inst_24430__$1 = (state_24444[(2)]);
var inst_24431 = cljs.core.some(cljs.core.nil_QMARK_,inst_24430__$1);
var state_24444__$1 = (function (){var statearr_24453 = state_24444;
(statearr_24453[(8)] = inst_24430__$1);

return statearr_24453;
})();
if(cljs.core.truth_(inst_24431)){
var statearr_24454_24486 = state_24444__$1;
(statearr_24454_24486[(1)] = (13));

} else {
var statearr_24455_24487 = state_24444__$1;
(statearr_24455_24487[(1)] = (14));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (2))){
var inst_24407 = (function (){var G__24456 = dctr;
var G__24457 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24456,G__24457) : cljs.core.reset_BANG_.call(null,G__24456,G__24457));
})();
var inst_24408 = (0);
var state_24444__$1 = (function (){var statearr_24458 = state_24444;
(statearr_24458[(9)] = inst_24407);

(statearr_24458[(7)] = inst_24408);

return statearr_24458;
})();
var statearr_24459_24488 = state_24444__$1;
(statearr_24459_24488[(2)] = null);

(statearr_24459_24488[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (11))){
var inst_24408 = (state_24444[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24444,(10),Object,null,(9));
var inst_24417 = (function (){var G__24460 = inst_24408;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24460) : chs__$1.call(null,G__24460));
})();
var inst_24418 = (function (){var G__24461 = inst_24408;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24461) : done.call(null,G__24461));
})();
var inst_24419 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24417,inst_24418);
var state_24444__$1 = state_24444;
var statearr_24462_24489 = state_24444__$1;
(statearr_24462_24489[(2)] = inst_24419);


cljs.core.async.impl.ioc_helpers.process_exception(state_24444__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (9))){
var inst_24408 = (state_24444[(7)]);
var inst_24421 = (state_24444[(2)]);
var inst_24422 = (inst_24408 + (1));
var inst_24408__$1 = inst_24422;
var state_24444__$1 = (function (){var statearr_24463 = state_24444;
(statearr_24463[(7)] = inst_24408__$1);

(statearr_24463[(10)] = inst_24421);

return statearr_24463;
})();
var statearr_24464_24490 = state_24444__$1;
(statearr_24464_24490[(2)] = null);

(statearr_24464_24490[(1)] = (4));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (5))){
var inst_24428 = (state_24444[(2)]);
var state_24444__$1 = (function (){var statearr_24465 = state_24444;
(statearr_24465[(11)] = inst_24428);

return statearr_24465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24444__$1,(12),dchan);
} else {
if((state_val_24445 === (14))){
var inst_24430 = (state_24444[(8)]);
var inst_24435 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24430);
var state_24444__$1 = state_24444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24444__$1,(16),out,inst_24435);
} else {
if((state_val_24445 === (16))){
var inst_24437 = (state_24444[(2)]);
var state_24444__$1 = (function (){var statearr_24466 = state_24444;
(statearr_24466[(12)] = inst_24437);

return statearr_24466;
})();
var statearr_24467_24491 = state_24444__$1;
(statearr_24467_24491[(2)] = null);

(statearr_24467_24491[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (10))){
var inst_24412 = (state_24444[(2)]);
var inst_24413 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24444__$1 = (function (){var statearr_24468 = state_24444;
(statearr_24468[(13)] = inst_24412);

return statearr_24468;
})();
var statearr_24469_24492 = state_24444__$1;
(statearr_24469_24492[(2)] = inst_24413);


cljs.core.async.impl.ioc_helpers.process_exception(state_24444__$1);

return cljs.core.constant$keyword$21;
} else {
if((state_val_24445 === (8))){
var inst_24426 = (state_24444[(2)]);
var state_24444__$1 = state_24444;
var statearr_24470_24493 = state_24444__$1;
(statearr_24470_24493[(2)] = inst_24426);

(statearr_24470_24493[(1)] = (5));


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
});})(c__11258__auto___24478,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11178__auto__,c__11258__auto___24478,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_24474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24474[(0)] = state_machine__11179__auto__);

(statearr_24474[(1)] = (1));

return statearr_24474;
});
var state_machine__11179__auto____1 = (function (state_24444){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_24444);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e24475){if((e24475 instanceof Object)){
var ex__11182__auto__ = e24475;
var statearr_24476_24494 = state_24444;
(statearr_24476_24494[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24444);

return cljs.core.constant$keyword$21;
} else {
throw e24475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__24495 = state_24444;
state_24444 = G__24495;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_24444){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_24444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___24478,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11260__auto__ = (function (){var statearr_24477 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_24477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___24478);

return statearr_24477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___24478,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11258__auto___24605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___24605,out){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___24605,out){
return (function (state_24581){
var state_val_24582 = (state_24581[(1)]);
if((state_val_24582 === (7))){
var inst_24560 = (state_24581[(7)]);
var inst_24561 = (state_24581[(8)]);
var inst_24560__$1 = (state_24581[(2)]);
var inst_24561__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24560__$1,(0),null);
var inst_24562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24560__$1,(1),null);
var inst_24563 = (inst_24561__$1 == null);
var state_24581__$1 = (function (){var statearr_24583 = state_24581;
(statearr_24583[(9)] = inst_24562);

(statearr_24583[(7)] = inst_24560__$1);

(statearr_24583[(8)] = inst_24561__$1);

return statearr_24583;
})();
if(cljs.core.truth_(inst_24563)){
var statearr_24584_24606 = state_24581__$1;
(statearr_24584_24606[(1)] = (8));

} else {
var statearr_24585_24607 = state_24581__$1;
(statearr_24585_24607[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24582 === (1))){
var inst_24552 = cljs.core.vec(chs);
var inst_24553 = inst_24552;
var state_24581__$1 = (function (){var statearr_24586 = state_24581;
(statearr_24586[(10)] = inst_24553);

return statearr_24586;
})();
var statearr_24587_24608 = state_24581__$1;
(statearr_24587_24608[(2)] = null);

(statearr_24587_24608[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24582 === (4))){
var inst_24553 = (state_24581[(10)]);
var state_24581__$1 = state_24581;
return cljs.core.async.ioc_alts_BANG_(state_24581__$1,(7),inst_24553);
} else {
if((state_val_24582 === (6))){
var inst_24577 = (state_24581[(2)]);
var state_24581__$1 = state_24581;
var statearr_24588_24609 = state_24581__$1;
(statearr_24588_24609[(2)] = inst_24577);

(statearr_24588_24609[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24582 === (3))){
var inst_24579 = (state_24581[(2)]);
var state_24581__$1 = state_24581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24581__$1,inst_24579);
} else {
if((state_val_24582 === (2))){
var inst_24553 = (state_24581[(10)]);
var inst_24555 = cljs.core.count(inst_24553);
var inst_24556 = (inst_24555 > (0));
var state_24581__$1 = state_24581;
if(cljs.core.truth_(inst_24556)){
var statearr_24590_24610 = state_24581__$1;
(statearr_24590_24610[(1)] = (4));

} else {
var statearr_24591_24611 = state_24581__$1;
(statearr_24591_24611[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24582 === (11))){
var inst_24553 = (state_24581[(10)]);
var inst_24570 = (state_24581[(2)]);
var tmp24589 = inst_24553;
var inst_24553__$1 = tmp24589;
var state_24581__$1 = (function (){var statearr_24592 = state_24581;
(statearr_24592[(11)] = inst_24570);

(statearr_24592[(10)] = inst_24553__$1);

return statearr_24592;
})();
var statearr_24593_24612 = state_24581__$1;
(statearr_24593_24612[(2)] = null);

(statearr_24593_24612[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24582 === (9))){
var inst_24561 = (state_24581[(8)]);
var state_24581__$1 = state_24581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24581__$1,(11),out,inst_24561);
} else {
if((state_val_24582 === (5))){
var inst_24575 = cljs.core.async.close_BANG_(out);
var state_24581__$1 = state_24581;
var statearr_24594_24613 = state_24581__$1;
(statearr_24594_24613[(2)] = inst_24575);

(statearr_24594_24613[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24582 === (10))){
var inst_24573 = (state_24581[(2)]);
var state_24581__$1 = state_24581;
var statearr_24595_24614 = state_24581__$1;
(statearr_24595_24614[(2)] = inst_24573);

(statearr_24595_24614[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24582 === (8))){
var inst_24562 = (state_24581[(9)]);
var inst_24553 = (state_24581[(10)]);
var inst_24560 = (state_24581[(7)]);
var inst_24561 = (state_24581[(8)]);
var inst_24565 = (function (){var c = inst_24562;
var v = inst_24561;
var vec__24558 = inst_24560;
var cs = inst_24553;
return ((function (c,v,vec__24558,cs,inst_24562,inst_24553,inst_24560,inst_24561,state_val_24582,c__11258__auto___24605,out){
return (function (p1__24496_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24496_SHARP_);
});
;})(c,v,vec__24558,cs,inst_24562,inst_24553,inst_24560,inst_24561,state_val_24582,c__11258__auto___24605,out))
})();
var inst_24566 = cljs.core.filterv(inst_24565,inst_24553);
var inst_24553__$1 = inst_24566;
var state_24581__$1 = (function (){var statearr_24596 = state_24581;
(statearr_24596[(10)] = inst_24553__$1);

return statearr_24596;
})();
var statearr_24597_24615 = state_24581__$1;
(statearr_24597_24615[(2)] = null);

(statearr_24597_24615[(1)] = (2));


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
});})(c__11258__auto___24605,out))
;
return ((function (switch__11178__auto__,c__11258__auto___24605,out){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_24601 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24601[(0)] = state_machine__11179__auto__);

(statearr_24601[(1)] = (1));

return statearr_24601;
});
var state_machine__11179__auto____1 = (function (state_24581){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_24581);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e24602){if((e24602 instanceof Object)){
var ex__11182__auto__ = e24602;
var statearr_24603_24616 = state_24581;
(statearr_24603_24616[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24581);

return cljs.core.constant$keyword$21;
} else {
throw e24602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__24617 = state_24581;
state_24581 = G__24617;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_24581){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_24581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___24605,out))
})();
var state__11260__auto__ = (function (){var statearr_24604 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_24604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___24605);

return statearr_24604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___24605,out))
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
var c__11258__auto___24713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___24713,out){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___24713,out){
return (function (state_24690){
var state_val_24691 = (state_24690[(1)]);
if((state_val_24691 === (7))){
var inst_24672 = (state_24690[(7)]);
var inst_24672__$1 = (state_24690[(2)]);
var inst_24673 = (inst_24672__$1 == null);
var inst_24674 = cljs.core.not(inst_24673);
var state_24690__$1 = (function (){var statearr_24692 = state_24690;
(statearr_24692[(7)] = inst_24672__$1);

return statearr_24692;
})();
if(inst_24674){
var statearr_24693_24714 = state_24690__$1;
(statearr_24693_24714[(1)] = (8));

} else {
var statearr_24694_24715 = state_24690__$1;
(statearr_24694_24715[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24691 === (1))){
var inst_24667 = (0);
var state_24690__$1 = (function (){var statearr_24695 = state_24690;
(statearr_24695[(8)] = inst_24667);

return statearr_24695;
})();
var statearr_24696_24716 = state_24690__$1;
(statearr_24696_24716[(2)] = null);

(statearr_24696_24716[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24691 === (4))){
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24690__$1,(7),ch);
} else {
if((state_val_24691 === (6))){
var inst_24685 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24697_24717 = state_24690__$1;
(statearr_24697_24717[(2)] = inst_24685);

(statearr_24697_24717[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24691 === (3))){
var inst_24687 = (state_24690[(2)]);
var inst_24688 = cljs.core.async.close_BANG_(out);
var state_24690__$1 = (function (){var statearr_24698 = state_24690;
(statearr_24698[(9)] = inst_24687);

return statearr_24698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24690__$1,inst_24688);
} else {
if((state_val_24691 === (2))){
var inst_24667 = (state_24690[(8)]);
var inst_24669 = (inst_24667 < n);
var state_24690__$1 = state_24690;
if(cljs.core.truth_(inst_24669)){
var statearr_24699_24718 = state_24690__$1;
(statearr_24699_24718[(1)] = (4));

} else {
var statearr_24700_24719 = state_24690__$1;
(statearr_24700_24719[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24691 === (11))){
var inst_24667 = (state_24690[(8)]);
var inst_24677 = (state_24690[(2)]);
var inst_24678 = (inst_24667 + (1));
var inst_24667__$1 = inst_24678;
var state_24690__$1 = (function (){var statearr_24701 = state_24690;
(statearr_24701[(10)] = inst_24677);

(statearr_24701[(8)] = inst_24667__$1);

return statearr_24701;
})();
var statearr_24702_24720 = state_24690__$1;
(statearr_24702_24720[(2)] = null);

(statearr_24702_24720[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24691 === (9))){
var state_24690__$1 = state_24690;
var statearr_24703_24721 = state_24690__$1;
(statearr_24703_24721[(2)] = null);

(statearr_24703_24721[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24691 === (5))){
var state_24690__$1 = state_24690;
var statearr_24704_24722 = state_24690__$1;
(statearr_24704_24722[(2)] = null);

(statearr_24704_24722[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24691 === (10))){
var inst_24682 = (state_24690[(2)]);
var state_24690__$1 = state_24690;
var statearr_24705_24723 = state_24690__$1;
(statearr_24705_24723[(2)] = inst_24682);

(statearr_24705_24723[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24691 === (8))){
var inst_24672 = (state_24690[(7)]);
var state_24690__$1 = state_24690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24690__$1,(11),out,inst_24672);
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
});})(c__11258__auto___24713,out))
;
return ((function (switch__11178__auto__,c__11258__auto___24713,out){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_24709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24709[(0)] = state_machine__11179__auto__);

(statearr_24709[(1)] = (1));

return statearr_24709;
});
var state_machine__11179__auto____1 = (function (state_24690){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_24690);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e24710){if((e24710 instanceof Object)){
var ex__11182__auto__ = e24710;
var statearr_24711_24724 = state_24690;
(statearr_24711_24724[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24690);

return cljs.core.constant$keyword$21;
} else {
throw e24710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__24725 = state_24690;
state_24690 = G__24725;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_24690){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_24690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___24713,out))
})();
var state__11260__auto__ = (function (){var statearr_24712 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_24712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___24713);

return statearr_24712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___24713,out))
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
if(typeof cljs.core.async.t24738 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24738 = (function (ch,f,map_LT_,meta24739){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24739 = meta24739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24738.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t24738.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t24741 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24741 = (function (fn1,_,meta24739,map_LT_,f,ch,meta24742){
this.fn1 = fn1;
this._ = _;
this.meta24739 = meta24739;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24742 = meta24742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t24741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24726_SHARP_){
var G__24744 = (((p1__24726_SHARP_ == null))?null:(function (){var G__24745 = p1__24726_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24745) : self__.f.call(null,G__24745));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24744) : f1.call(null,G__24744));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24743){
var self__ = this;
var _24743__$1 = this;
return self__.meta24742;
});})(___$1))
;

cljs.core.async.t24741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24743,meta24742__$1){
var self__ = this;
var _24743__$1 = this;
return (new cljs.core.async.t24741(self__.fn1,self__._,self__.meta24739,self__.map_LT_,self__.f,self__.ch,meta24742__$1));
});})(___$1))
;

cljs.core.async.t24741.cljs$lang$type = true;

cljs.core.async.t24741.cljs$lang$ctorStr = "cljs.core.async/t24741";

cljs.core.async.t24741.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t24741");
});})(___$1))
;

cljs.core.async.__GT_t24741 = ((function (___$1){
return (function __GT_t24741(fn1__$1,___$2,meta24739__$1,map_LT___$1,f__$1,ch__$1,meta24742){
return (new cljs.core.async.t24741(fn1__$1,___$2,meta24739__$1,map_LT___$1,f__$1,ch__$1,meta24742));
});})(___$1))
;

}

return (new cljs.core.async.t24741(fn1,___$1,self__.meta24739,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3803__auto__ = ret;
if(cljs.core.truth_(and__3803__auto__)){
return !(((function (){var G__24746 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24746) : cljs.core.deref.call(null,G__24746));
})() == null));
} else {
return and__3803__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24747 = (function (){var G__24748 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24748) : cljs.core.deref.call(null,G__24748));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24747) : self__.f.call(null,G__24747));
})());
} else {
return ret;
}
});

cljs.core.async.t24738.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24738.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24740){
var self__ = this;
var _24740__$1 = this;
return self__.meta24739;
});

cljs.core.async.t24738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24740,meta24739__$1){
var self__ = this;
var _24740__$1 = this;
return (new cljs.core.async.t24738(self__.ch,self__.f,self__.map_LT_,meta24739__$1));
});

cljs.core.async.t24738.cljs$lang$type = true;

cljs.core.async.t24738.cljs$lang$ctorStr = "cljs.core.async/t24738";

cljs.core.async.t24738.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t24738");
});

cljs.core.async.__GT_t24738 = (function __GT_t24738(ch__$1,f__$1,map_LT___$1,meta24739){
return (new cljs.core.async.t24738(ch__$1,f__$1,map_LT___$1,meta24739));
});

}

return (new cljs.core.async.t24738(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t24753 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24753 = (function (ch,f,map_GT_,meta24754){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24754 = meta24754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24756 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24756) : self__.f.call(null,G__24756));
})(),fn1);
});

cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24755){
var self__ = this;
var _24755__$1 = this;
return self__.meta24754;
});

cljs.core.async.t24753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24755,meta24754__$1){
var self__ = this;
var _24755__$1 = this;
return (new cljs.core.async.t24753(self__.ch,self__.f,self__.map_GT_,meta24754__$1));
});

cljs.core.async.t24753.cljs$lang$type = true;

cljs.core.async.t24753.cljs$lang$ctorStr = "cljs.core.async/t24753";

cljs.core.async.t24753.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t24753");
});

cljs.core.async.__GT_t24753 = (function __GT_t24753(ch__$1,f__$1,map_GT___$1,meta24754){
return (new cljs.core.async.t24753(ch__$1,f__$1,map_GT___$1,meta24754));
});

}

return (new cljs.core.async.t24753(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t24761 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24761 = (function (ch,p,filter_GT_,meta24762){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24762 = meta24762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24764 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24764) : self__.p.call(null,G__24764));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t24761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24761.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24761.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24763){
var self__ = this;
var _24763__$1 = this;
return self__.meta24762;
});

cljs.core.async.t24761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24763,meta24762__$1){
var self__ = this;
var _24763__$1 = this;
return (new cljs.core.async.t24761(self__.ch,self__.p,self__.filter_GT_,meta24762__$1));
});

cljs.core.async.t24761.cljs$lang$type = true;

cljs.core.async.t24761.cljs$lang$ctorStr = "cljs.core.async/t24761";

cljs.core.async.t24761.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t24761");
});

cljs.core.async.__GT_t24761 = (function __GT_t24761(ch__$1,p__$1,filter_GT___$1,meta24762){
return (new cljs.core.async.t24761(ch__$1,p__$1,filter_GT___$1,meta24762));
});

}

return (new cljs.core.async.t24761(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11258__auto___24852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___24852,out){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___24852,out){
return (function (state_24830){
var state_val_24831 = (state_24830[(1)]);
if((state_val_24831 === (7))){
var inst_24826 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
var statearr_24832_24853 = state_24830__$1;
(statearr_24832_24853[(2)] = inst_24826);

(statearr_24832_24853[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24831 === (1))){
var state_24830__$1 = state_24830;
var statearr_24833_24854 = state_24830__$1;
(statearr_24833_24854[(2)] = null);

(statearr_24833_24854[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24831 === (4))){
var inst_24812 = (state_24830[(7)]);
var inst_24812__$1 = (state_24830[(2)]);
var inst_24813 = (inst_24812__$1 == null);
var state_24830__$1 = (function (){var statearr_24834 = state_24830;
(statearr_24834[(7)] = inst_24812__$1);

return statearr_24834;
})();
if(cljs.core.truth_(inst_24813)){
var statearr_24835_24855 = state_24830__$1;
(statearr_24835_24855[(1)] = (5));

} else {
var statearr_24836_24856 = state_24830__$1;
(statearr_24836_24856[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24831 === (6))){
var inst_24812 = (state_24830[(7)]);
var inst_24817 = (function (){var G__24837 = inst_24812;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24837) : p.call(null,G__24837));
})();
var state_24830__$1 = state_24830;
if(cljs.core.truth_(inst_24817)){
var statearr_24838_24857 = state_24830__$1;
(statearr_24838_24857[(1)] = (8));

} else {
var statearr_24839_24858 = state_24830__$1;
(statearr_24839_24858[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_24831 === (3))){
var inst_24828 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24830__$1,inst_24828);
} else {
if((state_val_24831 === (2))){
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24830__$1,(4),ch);
} else {
if((state_val_24831 === (11))){
var inst_24820 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
var statearr_24840_24859 = state_24830__$1;
(statearr_24840_24859[(2)] = inst_24820);

(statearr_24840_24859[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24831 === (9))){
var state_24830__$1 = state_24830;
var statearr_24841_24860 = state_24830__$1;
(statearr_24841_24860[(2)] = null);

(statearr_24841_24860[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24831 === (5))){
var inst_24815 = cljs.core.async.close_BANG_(out);
var state_24830__$1 = state_24830;
var statearr_24842_24861 = state_24830__$1;
(statearr_24842_24861[(2)] = inst_24815);

(statearr_24842_24861[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24831 === (10))){
var inst_24823 = (state_24830[(2)]);
var state_24830__$1 = (function (){var statearr_24843 = state_24830;
(statearr_24843[(8)] = inst_24823);

return statearr_24843;
})();
var statearr_24844_24862 = state_24830__$1;
(statearr_24844_24862[(2)] = null);

(statearr_24844_24862[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_24831 === (8))){
var inst_24812 = (state_24830[(7)]);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24830__$1,(11),out,inst_24812);
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
});})(c__11258__auto___24852,out))
;
return ((function (switch__11178__auto__,c__11258__auto___24852,out){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_24848 = [null,null,null,null,null,null,null,null,null];
(statearr_24848[(0)] = state_machine__11179__auto__);

(statearr_24848[(1)] = (1));

return statearr_24848;
});
var state_machine__11179__auto____1 = (function (state_24830){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_24830);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e24849){if((e24849 instanceof Object)){
var ex__11182__auto__ = e24849;
var statearr_24850_24863 = state_24830;
(statearr_24850_24863[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24830);

return cljs.core.constant$keyword$21;
} else {
throw e24849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__24864 = state_24830;
state_24830 = G__24864;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_24830){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_24830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___24852,out))
})();
var state__11260__auto__ = (function (){var statearr_24851 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_24851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___24852);

return statearr_24851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___24852,out))
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
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_25034){
var state_val_25035 = (state_25034[(1)]);
if((state_val_25035 === (7))){
var inst_25030 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25036_25078 = state_25034__$1;
(statearr_25036_25078[(2)] = inst_25030);

(statearr_25036_25078[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (20))){
var inst_25000 = (state_25034[(7)]);
var inst_25011 = (state_25034[(2)]);
var inst_25012 = cljs.core.next(inst_25000);
var inst_24986 = inst_25012;
var inst_24987 = null;
var inst_24988 = (0);
var inst_24989 = (0);
var state_25034__$1 = (function (){var statearr_25037 = state_25034;
(statearr_25037[(8)] = inst_24987);

(statearr_25037[(9)] = inst_24986);

(statearr_25037[(10)] = inst_24988);

(statearr_25037[(11)] = inst_24989);

(statearr_25037[(12)] = inst_25011);

return statearr_25037;
})();
var statearr_25038_25079 = state_25034__$1;
(statearr_25038_25079[(2)] = null);

(statearr_25038_25079[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (1))){
var state_25034__$1 = state_25034;
var statearr_25039_25080 = state_25034__$1;
(statearr_25039_25080[(2)] = null);

(statearr_25039_25080[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (4))){
var inst_24975 = (state_25034[(13)]);
var inst_24975__$1 = (state_25034[(2)]);
var inst_24976 = (inst_24975__$1 == null);
var state_25034__$1 = (function (){var statearr_25040 = state_25034;
(statearr_25040[(13)] = inst_24975__$1);

return statearr_25040;
})();
if(cljs.core.truth_(inst_24976)){
var statearr_25041_25081 = state_25034__$1;
(statearr_25041_25081[(1)] = (5));

} else {
var statearr_25042_25082 = state_25034__$1;
(statearr_25042_25082[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (15))){
var state_25034__$1 = state_25034;
var statearr_25046_25083 = state_25034__$1;
(statearr_25046_25083[(2)] = null);

(statearr_25046_25083[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (21))){
var state_25034__$1 = state_25034;
var statearr_25047_25084 = state_25034__$1;
(statearr_25047_25084[(2)] = null);

(statearr_25047_25084[(1)] = (23));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (13))){
var inst_24987 = (state_25034[(8)]);
var inst_24986 = (state_25034[(9)]);
var inst_24988 = (state_25034[(10)]);
var inst_24989 = (state_25034[(11)]);
var inst_24996 = (state_25034[(2)]);
var inst_24997 = (inst_24989 + (1));
var tmp25043 = inst_24987;
var tmp25044 = inst_24986;
var tmp25045 = inst_24988;
var inst_24986__$1 = tmp25044;
var inst_24987__$1 = tmp25043;
var inst_24988__$1 = tmp25045;
var inst_24989__$1 = inst_24997;
var state_25034__$1 = (function (){var statearr_25048 = state_25034;
(statearr_25048[(8)] = inst_24987__$1);

(statearr_25048[(9)] = inst_24986__$1);

(statearr_25048[(10)] = inst_24988__$1);

(statearr_25048[(11)] = inst_24989__$1);

(statearr_25048[(14)] = inst_24996);

return statearr_25048;
})();
var statearr_25049_25085 = state_25034__$1;
(statearr_25049_25085[(2)] = null);

(statearr_25049_25085[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (22))){
var state_25034__$1 = state_25034;
var statearr_25050_25086 = state_25034__$1;
(statearr_25050_25086[(2)] = null);

(statearr_25050_25086[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (6))){
var inst_24975 = (state_25034[(13)]);
var inst_24984 = (function (){var G__25051 = inst_24975;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25051) : f.call(null,G__25051));
})();
var inst_24985 = cljs.core.seq(inst_24984);
var inst_24986 = inst_24985;
var inst_24987 = null;
var inst_24988 = (0);
var inst_24989 = (0);
var state_25034__$1 = (function (){var statearr_25052 = state_25034;
(statearr_25052[(8)] = inst_24987);

(statearr_25052[(9)] = inst_24986);

(statearr_25052[(10)] = inst_24988);

(statearr_25052[(11)] = inst_24989);

return statearr_25052;
})();
var statearr_25053_25087 = state_25034__$1;
(statearr_25053_25087[(2)] = null);

(statearr_25053_25087[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (17))){
var inst_25000 = (state_25034[(7)]);
var inst_25004 = cljs.core.chunk_first(inst_25000);
var inst_25005 = cljs.core.chunk_rest(inst_25000);
var inst_25006 = cljs.core.count(inst_25004);
var inst_24986 = inst_25005;
var inst_24987 = inst_25004;
var inst_24988 = inst_25006;
var inst_24989 = (0);
var state_25034__$1 = (function (){var statearr_25054 = state_25034;
(statearr_25054[(8)] = inst_24987);

(statearr_25054[(9)] = inst_24986);

(statearr_25054[(10)] = inst_24988);

(statearr_25054[(11)] = inst_24989);

return statearr_25054;
})();
var statearr_25055_25088 = state_25034__$1;
(statearr_25055_25088[(2)] = null);

(statearr_25055_25088[(1)] = (8));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (3))){
var inst_25032 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25034__$1,inst_25032);
} else {
if((state_val_25035 === (12))){
var inst_25020 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25056_25089 = state_25034__$1;
(statearr_25056_25089[(2)] = inst_25020);

(statearr_25056_25089[(1)] = (9));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (2))){
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25034__$1,(4),in$);
} else {
if((state_val_25035 === (23))){
var inst_25028 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25057_25090 = state_25034__$1;
(statearr_25057_25090[(2)] = inst_25028);

(statearr_25057_25090[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (19))){
var inst_25015 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25058_25091 = state_25034__$1;
(statearr_25058_25091[(2)] = inst_25015);

(statearr_25058_25091[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (11))){
var inst_25000 = (state_25034[(7)]);
var inst_24986 = (state_25034[(9)]);
var inst_25000__$1 = cljs.core.seq(inst_24986);
var state_25034__$1 = (function (){var statearr_25059 = state_25034;
(statearr_25059[(7)] = inst_25000__$1);

return statearr_25059;
})();
if(inst_25000__$1){
var statearr_25060_25092 = state_25034__$1;
(statearr_25060_25092[(1)] = (14));

} else {
var statearr_25061_25093 = state_25034__$1;
(statearr_25061_25093[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (9))){
var inst_25022 = (state_25034[(2)]);
var inst_25023 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25034__$1 = (function (){var statearr_25062 = state_25034;
(statearr_25062[(15)] = inst_25022);

return statearr_25062;
})();
if(cljs.core.truth_(inst_25023)){
var statearr_25063_25094 = state_25034__$1;
(statearr_25063_25094[(1)] = (21));

} else {
var statearr_25064_25095 = state_25034__$1;
(statearr_25064_25095[(1)] = (22));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (5))){
var inst_24978 = cljs.core.async.close_BANG_(out);
var state_25034__$1 = state_25034;
var statearr_25065_25096 = state_25034__$1;
(statearr_25065_25096[(2)] = inst_24978);

(statearr_25065_25096[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (14))){
var inst_25000 = (state_25034[(7)]);
var inst_25002 = cljs.core.chunked_seq_QMARK_(inst_25000);
var state_25034__$1 = state_25034;
if(inst_25002){
var statearr_25066_25097 = state_25034__$1;
(statearr_25066_25097[(1)] = (17));

} else {
var statearr_25067_25098 = state_25034__$1;
(statearr_25067_25098[(1)] = (18));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (16))){
var inst_25018 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25068_25099 = state_25034__$1;
(statearr_25068_25099[(2)] = inst_25018);

(statearr_25068_25099[(1)] = (12));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25035 === (10))){
var inst_24987 = (state_25034[(8)]);
var inst_24989 = (state_25034[(11)]);
var inst_24994 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24987,inst_24989);
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25034__$1,(13),out,inst_24994);
} else {
if((state_val_25035 === (18))){
var inst_25000 = (state_25034[(7)]);
var inst_25009 = cljs.core.first(inst_25000);
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25034__$1,(20),out,inst_25009);
} else {
if((state_val_25035 === (8))){
var inst_24988 = (state_25034[(10)]);
var inst_24989 = (state_25034[(11)]);
var inst_24991 = (inst_24989 < inst_24988);
var inst_24992 = inst_24991;
var state_25034__$1 = state_25034;
if(cljs.core.truth_(inst_24992)){
var statearr_25069_25100 = state_25034__$1;
(statearr_25069_25100[(1)] = (10));

} else {
var statearr_25070_25101 = state_25034__$1;
(statearr_25070_25101[(1)] = (11));

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
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_25074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25074[(0)] = state_machine__11179__auto__);

(statearr_25074[(1)] = (1));

return statearr_25074;
});
var state_machine__11179__auto____1 = (function (state_25034){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_25034);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e25075){if((e25075 instanceof Object)){
var ex__11182__auto__ = e25075;
var statearr_25076_25102 = state_25034;
(statearr_25076_25102[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25034);

return cljs.core.constant$keyword$21;
} else {
throw e25075;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__25103 = state_25034;
state_25034 = G__25103;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_25034){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_25034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_25077 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_25077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_25077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
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
var c__11258__auto___25208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___25208,out){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___25208,out){
return (function (state_25183){
var state_val_25184 = (state_25183[(1)]);
if((state_val_25184 === (7))){
var inst_25178 = (state_25183[(2)]);
var state_25183__$1 = state_25183;
var statearr_25185_25209 = state_25183__$1;
(statearr_25185_25209[(2)] = inst_25178);

(statearr_25185_25209[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25184 === (1))){
var inst_25160 = null;
var state_25183__$1 = (function (){var statearr_25186 = state_25183;
(statearr_25186[(7)] = inst_25160);

return statearr_25186;
})();
var statearr_25187_25210 = state_25183__$1;
(statearr_25187_25210[(2)] = null);

(statearr_25187_25210[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25184 === (4))){
var inst_25163 = (state_25183[(8)]);
var inst_25163__$1 = (state_25183[(2)]);
var inst_25164 = (inst_25163__$1 == null);
var inst_25165 = cljs.core.not(inst_25164);
var state_25183__$1 = (function (){var statearr_25188 = state_25183;
(statearr_25188[(8)] = inst_25163__$1);

return statearr_25188;
})();
if(inst_25165){
var statearr_25189_25211 = state_25183__$1;
(statearr_25189_25211[(1)] = (5));

} else {
var statearr_25190_25212 = state_25183__$1;
(statearr_25190_25212[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25184 === (6))){
var state_25183__$1 = state_25183;
var statearr_25191_25213 = state_25183__$1;
(statearr_25191_25213[(2)] = null);

(statearr_25191_25213[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25184 === (3))){
var inst_25180 = (state_25183[(2)]);
var inst_25181 = cljs.core.async.close_BANG_(out);
var state_25183__$1 = (function (){var statearr_25192 = state_25183;
(statearr_25192[(9)] = inst_25180);

return statearr_25192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25183__$1,inst_25181);
} else {
if((state_val_25184 === (2))){
var state_25183__$1 = state_25183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25183__$1,(4),ch);
} else {
if((state_val_25184 === (11))){
var inst_25163 = (state_25183[(8)]);
var inst_25172 = (state_25183[(2)]);
var inst_25160 = inst_25163;
var state_25183__$1 = (function (){var statearr_25193 = state_25183;
(statearr_25193[(7)] = inst_25160);

(statearr_25193[(10)] = inst_25172);

return statearr_25193;
})();
var statearr_25194_25214 = state_25183__$1;
(statearr_25194_25214[(2)] = null);

(statearr_25194_25214[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25184 === (9))){
var inst_25163 = (state_25183[(8)]);
var state_25183__$1 = state_25183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25183__$1,(11),out,inst_25163);
} else {
if((state_val_25184 === (5))){
var inst_25160 = (state_25183[(7)]);
var inst_25163 = (state_25183[(8)]);
var inst_25167 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25163,inst_25160);
var state_25183__$1 = state_25183;
if(inst_25167){
var statearr_25196_25215 = state_25183__$1;
(statearr_25196_25215[(1)] = (8));

} else {
var statearr_25197_25216 = state_25183__$1;
(statearr_25197_25216[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25184 === (10))){
var inst_25175 = (state_25183[(2)]);
var state_25183__$1 = state_25183;
var statearr_25198_25217 = state_25183__$1;
(statearr_25198_25217[(2)] = inst_25175);

(statearr_25198_25217[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25184 === (8))){
var inst_25160 = (state_25183[(7)]);
var tmp25195 = inst_25160;
var inst_25160__$1 = tmp25195;
var state_25183__$1 = (function (){var statearr_25199 = state_25183;
(statearr_25199[(7)] = inst_25160__$1);

return statearr_25199;
})();
var statearr_25200_25218 = state_25183__$1;
(statearr_25200_25218[(2)] = null);

(statearr_25200_25218[(1)] = (2));


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
});})(c__11258__auto___25208,out))
;
return ((function (switch__11178__auto__,c__11258__auto___25208,out){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_25204 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25204[(0)] = state_machine__11179__auto__);

(statearr_25204[(1)] = (1));

return statearr_25204;
});
var state_machine__11179__auto____1 = (function (state_25183){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_25183);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e25205){if((e25205 instanceof Object)){
var ex__11182__auto__ = e25205;
var statearr_25206_25219 = state_25183;
(statearr_25206_25219[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25183);

return cljs.core.constant$keyword$21;
} else {
throw e25205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__25220 = state_25183;
state_25183 = G__25220;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_25183){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_25183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___25208,out))
})();
var state__11260__auto__ = (function (){var statearr_25207 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_25207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___25208);

return statearr_25207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___25208,out))
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
var c__11258__auto___25358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___25358,out){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___25358,out){
return (function (state_25328){
var state_val_25329 = (state_25328[(1)]);
if((state_val_25329 === (7))){
var inst_25324 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
var statearr_25330_25359 = state_25328__$1;
(statearr_25330_25359[(2)] = inst_25324);

(statearr_25330_25359[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (1))){
var inst_25291 = (new Array(n));
var inst_25292 = inst_25291;
var inst_25293 = (0);
var state_25328__$1 = (function (){var statearr_25331 = state_25328;
(statearr_25331[(7)] = inst_25292);

(statearr_25331[(8)] = inst_25293);

return statearr_25331;
})();
var statearr_25332_25360 = state_25328__$1;
(statearr_25332_25360[(2)] = null);

(statearr_25332_25360[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (4))){
var inst_25296 = (state_25328[(9)]);
var inst_25296__$1 = (state_25328[(2)]);
var inst_25297 = (inst_25296__$1 == null);
var inst_25298 = cljs.core.not(inst_25297);
var state_25328__$1 = (function (){var statearr_25333 = state_25328;
(statearr_25333[(9)] = inst_25296__$1);

return statearr_25333;
})();
if(inst_25298){
var statearr_25334_25361 = state_25328__$1;
(statearr_25334_25361[(1)] = (5));

} else {
var statearr_25335_25362 = state_25328__$1;
(statearr_25335_25362[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (15))){
var inst_25318 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
var statearr_25336_25363 = state_25328__$1;
(statearr_25336_25363[(2)] = inst_25318);

(statearr_25336_25363[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (13))){
var state_25328__$1 = state_25328;
var statearr_25337_25364 = state_25328__$1;
(statearr_25337_25364[(2)] = null);

(statearr_25337_25364[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (6))){
var inst_25293 = (state_25328[(8)]);
var inst_25314 = (inst_25293 > (0));
var state_25328__$1 = state_25328;
if(cljs.core.truth_(inst_25314)){
var statearr_25338_25365 = state_25328__$1;
(statearr_25338_25365[(1)] = (12));

} else {
var statearr_25339_25366 = state_25328__$1;
(statearr_25339_25366[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (3))){
var inst_25326 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25328__$1,inst_25326);
} else {
if((state_val_25329 === (12))){
var inst_25292 = (state_25328[(7)]);
var inst_25316 = cljs.core.vec(inst_25292);
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25328__$1,(15),out,inst_25316);
} else {
if((state_val_25329 === (2))){
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25328__$1,(4),ch);
} else {
if((state_val_25329 === (11))){
var inst_25308 = (state_25328[(2)]);
var inst_25309 = (new Array(n));
var inst_25292 = inst_25309;
var inst_25293 = (0);
var state_25328__$1 = (function (){var statearr_25340 = state_25328;
(statearr_25340[(7)] = inst_25292);

(statearr_25340[(10)] = inst_25308);

(statearr_25340[(8)] = inst_25293);

return statearr_25340;
})();
var statearr_25341_25367 = state_25328__$1;
(statearr_25341_25367[(2)] = null);

(statearr_25341_25367[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (9))){
var inst_25292 = (state_25328[(7)]);
var inst_25306 = cljs.core.vec(inst_25292);
var state_25328__$1 = state_25328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25328__$1,(11),out,inst_25306);
} else {
if((state_val_25329 === (5))){
var inst_25296 = (state_25328[(9)]);
var inst_25301 = (state_25328[(11)]);
var inst_25292 = (state_25328[(7)]);
var inst_25293 = (state_25328[(8)]);
var inst_25300 = (inst_25292[inst_25293] = inst_25296);
var inst_25301__$1 = (inst_25293 + (1));
var inst_25302 = (inst_25301__$1 < n);
var state_25328__$1 = (function (){var statearr_25342 = state_25328;
(statearr_25342[(11)] = inst_25301__$1);

(statearr_25342[(12)] = inst_25300);

return statearr_25342;
})();
if(cljs.core.truth_(inst_25302)){
var statearr_25343_25368 = state_25328__$1;
(statearr_25343_25368[(1)] = (8));

} else {
var statearr_25344_25369 = state_25328__$1;
(statearr_25344_25369[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (14))){
var inst_25321 = (state_25328[(2)]);
var inst_25322 = cljs.core.async.close_BANG_(out);
var state_25328__$1 = (function (){var statearr_25346 = state_25328;
(statearr_25346[(13)] = inst_25321);

return statearr_25346;
})();
var statearr_25347_25370 = state_25328__$1;
(statearr_25347_25370[(2)] = inst_25322);

(statearr_25347_25370[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (10))){
var inst_25312 = (state_25328[(2)]);
var state_25328__$1 = state_25328;
var statearr_25348_25371 = state_25328__$1;
(statearr_25348_25371[(2)] = inst_25312);

(statearr_25348_25371[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25329 === (8))){
var inst_25301 = (state_25328[(11)]);
var inst_25292 = (state_25328[(7)]);
var tmp25345 = inst_25292;
var inst_25292__$1 = tmp25345;
var inst_25293 = inst_25301;
var state_25328__$1 = (function (){var statearr_25349 = state_25328;
(statearr_25349[(7)] = inst_25292__$1);

(statearr_25349[(8)] = inst_25293);

return statearr_25349;
})();
var statearr_25350_25372 = state_25328__$1;
(statearr_25350_25372[(2)] = null);

(statearr_25350_25372[(1)] = (2));


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
});})(c__11258__auto___25358,out))
;
return ((function (switch__11178__auto__,c__11258__auto___25358,out){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_25354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25354[(0)] = state_machine__11179__auto__);

(statearr_25354[(1)] = (1));

return statearr_25354;
});
var state_machine__11179__auto____1 = (function (state_25328){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_25328);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e25355){if((e25355 instanceof Object)){
var ex__11182__auto__ = e25355;
var statearr_25356_25373 = state_25328;
(statearr_25356_25373[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25328);

return cljs.core.constant$keyword$21;
} else {
throw e25355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__25374 = state_25328;
state_25328 = G__25374;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_25328){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_25328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___25358,out))
})();
var state__11260__auto__ = (function (){var statearr_25357 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_25357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___25358);

return statearr_25357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___25358,out))
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
var c__11258__auto___25522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto___25522,out){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto___25522,out){
return (function (state_25491){
var state_val_25492 = (state_25491[(1)]);
if((state_val_25492 === (7))){
var inst_25487 = (state_25491[(2)]);
var state_25491__$1 = state_25491;
var statearr_25493_25523 = state_25491__$1;
(statearr_25493_25523[(2)] = inst_25487);

(statearr_25493_25523[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (1))){
var inst_25450 = [];
var inst_25451 = inst_25450;
var inst_25452 = cljs.core.constant$keyword$36;
var state_25491__$1 = (function (){var statearr_25494 = state_25491;
(statearr_25494[(7)] = inst_25452);

(statearr_25494[(8)] = inst_25451);

return statearr_25494;
})();
var statearr_25495_25524 = state_25491__$1;
(statearr_25495_25524[(2)] = null);

(statearr_25495_25524[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (4))){
var inst_25455 = (state_25491[(9)]);
var inst_25455__$1 = (state_25491[(2)]);
var inst_25456 = (inst_25455__$1 == null);
var inst_25457 = cljs.core.not(inst_25456);
var state_25491__$1 = (function (){var statearr_25496 = state_25491;
(statearr_25496[(9)] = inst_25455__$1);

return statearr_25496;
})();
if(inst_25457){
var statearr_25497_25525 = state_25491__$1;
(statearr_25497_25525[(1)] = (5));

} else {
var statearr_25498_25526 = state_25491__$1;
(statearr_25498_25526[(1)] = (6));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (15))){
var inst_25481 = (state_25491[(2)]);
var state_25491__$1 = state_25491;
var statearr_25499_25527 = state_25491__$1;
(statearr_25499_25527[(2)] = inst_25481);

(statearr_25499_25527[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (13))){
var state_25491__$1 = state_25491;
var statearr_25500_25528 = state_25491__$1;
(statearr_25500_25528[(2)] = null);

(statearr_25500_25528[(1)] = (14));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (6))){
var inst_25451 = (state_25491[(8)]);
var inst_25476 = inst_25451.length;
var inst_25477 = (inst_25476 > (0));
var state_25491__$1 = state_25491;
if(cljs.core.truth_(inst_25477)){
var statearr_25501_25529 = state_25491__$1;
(statearr_25501_25529[(1)] = (12));

} else {
var statearr_25502_25530 = state_25491__$1;
(statearr_25502_25530[(1)] = (13));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (3))){
var inst_25489 = (state_25491[(2)]);
var state_25491__$1 = state_25491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25491__$1,inst_25489);
} else {
if((state_val_25492 === (12))){
var inst_25451 = (state_25491[(8)]);
var inst_25479 = cljs.core.vec(inst_25451);
var state_25491__$1 = state_25491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25491__$1,(15),out,inst_25479);
} else {
if((state_val_25492 === (2))){
var state_25491__$1 = state_25491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25491__$1,(4),ch);
} else {
if((state_val_25492 === (11))){
var inst_25459 = (state_25491[(10)]);
var inst_25455 = (state_25491[(9)]);
var inst_25469 = (state_25491[(2)]);
var inst_25470 = [];
var inst_25471 = inst_25470.push(inst_25455);
var inst_25451 = inst_25470;
var inst_25452 = inst_25459;
var state_25491__$1 = (function (){var statearr_25503 = state_25491;
(statearr_25503[(11)] = inst_25471);

(statearr_25503[(12)] = inst_25469);

(statearr_25503[(7)] = inst_25452);

(statearr_25503[(8)] = inst_25451);

return statearr_25503;
})();
var statearr_25504_25531 = state_25491__$1;
(statearr_25504_25531[(2)] = null);

(statearr_25504_25531[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (9))){
var inst_25451 = (state_25491[(8)]);
var inst_25467 = cljs.core.vec(inst_25451);
var state_25491__$1 = state_25491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25491__$1,(11),out,inst_25467);
} else {
if((state_val_25492 === (5))){
var inst_25459 = (state_25491[(10)]);
var inst_25455 = (state_25491[(9)]);
var inst_25452 = (state_25491[(7)]);
var inst_25459__$1 = (function (){var G__25505 = inst_25455;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25505) : f.call(null,G__25505));
})();
var inst_25460 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25459__$1,inst_25452);
var inst_25461 = cljs.core.keyword_identical_QMARK_(inst_25452,cljs.core.constant$keyword$36);
var inst_25462 = (inst_25460) || (inst_25461);
var state_25491__$1 = (function (){var statearr_25506 = state_25491;
(statearr_25506[(10)] = inst_25459__$1);

return statearr_25506;
})();
if(cljs.core.truth_(inst_25462)){
var statearr_25507_25532 = state_25491__$1;
(statearr_25507_25532[(1)] = (8));

} else {
var statearr_25508_25533 = state_25491__$1;
(statearr_25508_25533[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (14))){
var inst_25484 = (state_25491[(2)]);
var inst_25485 = cljs.core.async.close_BANG_(out);
var state_25491__$1 = (function (){var statearr_25510 = state_25491;
(statearr_25510[(13)] = inst_25484);

return statearr_25510;
})();
var statearr_25511_25534 = state_25491__$1;
(statearr_25511_25534[(2)] = inst_25485);

(statearr_25511_25534[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (10))){
var inst_25474 = (state_25491[(2)]);
var state_25491__$1 = state_25491;
var statearr_25512_25535 = state_25491__$1;
(statearr_25512_25535[(2)] = inst_25474);

(statearr_25512_25535[(1)] = (7));


return cljs.core.constant$keyword$21;
} else {
if((state_val_25492 === (8))){
var inst_25459 = (state_25491[(10)]);
var inst_25455 = (state_25491[(9)]);
var inst_25451 = (state_25491[(8)]);
var inst_25464 = inst_25451.push(inst_25455);
var tmp25509 = inst_25451;
var inst_25451__$1 = tmp25509;
var inst_25452 = inst_25459;
var state_25491__$1 = (function (){var statearr_25513 = state_25491;
(statearr_25513[(7)] = inst_25452);

(statearr_25513[(8)] = inst_25451__$1);

(statearr_25513[(14)] = inst_25464);

return statearr_25513;
})();
var statearr_25514_25536 = state_25491__$1;
(statearr_25514_25536[(2)] = null);

(statearr_25514_25536[(1)] = (2));


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
});})(c__11258__auto___25522,out))
;
return ((function (switch__11178__auto__,c__11258__auto___25522,out){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_25518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25518[(0)] = state_machine__11179__auto__);

(statearr_25518[(1)] = (1));

return statearr_25518;
});
var state_machine__11179__auto____1 = (function (state_25491){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_25491);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e25519){if((e25519 instanceof Object)){
var ex__11182__auto__ = e25519;
var statearr_25520_25537 = state_25491;
(statearr_25520_25537[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25491);

return cljs.core.constant$keyword$21;
} else {
throw e25519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__25538 = state_25491;
state_25491 = G__25538;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_25491){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_25491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto___25522,out))
})();
var state__11260__auto__ = (function (){var statearr_25521 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_25521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto___25522);

return statearr_25521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto___25522,out))
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
