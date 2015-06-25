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
if(typeof cljs.core.async.t18249 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18249 = (function (f,fn_handler,meta18250){
this.f = f;
this.fn_handler = fn_handler;
this.meta18250 = meta18250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18249.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t18249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t18249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18251){
var self__ = this;
var _18251__$1 = this;
return self__.meta18250;
});

cljs.core.async.t18249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18251,meta18250__$1){
var self__ = this;
var _18251__$1 = this;
return (new cljs.core.async.t18249(self__.f,self__.fn_handler,meta18250__$1));
});

cljs.core.async.t18249.cljs$lang$type = true;

cljs.core.async.t18249.cljs$lang$ctorStr = "cljs.core.async/t18249";

cljs.core.async.t18249.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t18249");
});

cljs.core.async.__GT_t18249 = (function __GT_t18249(f__$1,fn_handler__$1,meta18250){
return (new cljs.core.async.t18249(f__$1,fn_handler__$1,meta18250));
});

}

return (new cljs.core.async.t18249(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18253 = buff;
if(G__18253){
var bit__4545__auto__ = null;
if(cljs.core.truth_((function (){var or__3864__auto__ = bit__4545__auto__;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return G__18253.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__18253.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18253);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18253);
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
var val_18254 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18254);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18254,ret){
return (function (){
return fn1.call(null,val_18254);
});})(val_18254,ret))
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
var n__4751__auto___18255 = n;
var x_18256 = (0);
while(true){
if((x_18256 < n__4751__auto___18255)){
(a[x_18256] = (0));

var G__18257 = (x_18256 + (1));
x_18256 = G__18257;
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

var G__18258 = (i + (1));
i = G__18258;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t18262 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18262 = (function (flag,alt_flag,meta18263){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18263 = meta18263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18262.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t18262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t18262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18264){
var self__ = this;
var _18264__$1 = this;
return self__.meta18263;
});})(flag))
;

cljs.core.async.t18262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18264,meta18263__$1){
var self__ = this;
var _18264__$1 = this;
return (new cljs.core.async.t18262(self__.flag,self__.alt_flag,meta18263__$1));
});})(flag))
;

cljs.core.async.t18262.cljs$lang$type = true;

cljs.core.async.t18262.cljs$lang$ctorStr = "cljs.core.async/t18262";

cljs.core.async.t18262.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t18262");
});})(flag))
;

cljs.core.async.__GT_t18262 = ((function (flag){
return (function __GT_t18262(flag__$1,alt_flag__$1,meta18263){
return (new cljs.core.async.t18262(flag__$1,alt_flag__$1,meta18263));
});})(flag))
;

}

return (new cljs.core.async.t18262(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t18268 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18268 = (function (cb,flag,alt_handler,meta18269){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18269 = meta18269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18268.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t18268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t18268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18270){
var self__ = this;
var _18270__$1 = this;
return self__.meta18269;
});

cljs.core.async.t18268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18270,meta18269__$1){
var self__ = this;
var _18270__$1 = this;
return (new cljs.core.async.t18268(self__.cb,self__.flag,self__.alt_handler,meta18269__$1));
});

cljs.core.async.t18268.cljs$lang$type = true;

cljs.core.async.t18268.cljs$lang$ctorStr = "cljs.core.async/t18268";

cljs.core.async.t18268.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t18268");
});

cljs.core.async.__GT_t18268 = (function __GT_t18268(cb__$1,flag__$1,alt_handler__$1,meta18269){
return (new cljs.core.async.t18268(cb__$1,flag__$1,alt_handler__$1,meta18269));
});

}

return (new cljs.core.async.t18268(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18271_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18271_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18272_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18272_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3864__auto__ = wport;
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18273 = (i + (1));
i = G__18273;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3852__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3852__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3852__auto__;
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
var alts_BANG___delegate = function (ports,p__18274){
var map__18276 = p__18274;
var map__18276__$1 = ((cljs.core.seq_QMARK_.call(null,map__18276))?cljs.core.apply.call(null,cljs.core.hash_map,map__18276):map__18276);
var opts = map__18276__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18274 = null;
if (arguments.length > 1) {
var G__18277__i = 0, G__18277__a = new Array(arguments.length -  1);
while (G__18277__i < G__18277__a.length) {G__18277__a[G__18277__i] = arguments[G__18277__i + 1]; ++G__18277__i;}
  p__18274 = new cljs.core.IndexedSeq(G__18277__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__18274);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18278){
var ports = cljs.core.first(arglist__18278);
var p__18274 = cljs.core.rest(arglist__18278);
return alts_BANG___delegate(ports,p__18274);
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
var c__6642__auto___18373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___18373){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___18373){
return (function (state_18349){
var state_val_18350 = (state_18349[(1)]);
if((state_val_18350 === (7))){
var inst_18345 = (state_18349[(2)]);
var state_18349__$1 = state_18349;
var statearr_18351_18374 = state_18349__$1;
(statearr_18351_18374[(2)] = inst_18345);

(statearr_18351_18374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (1))){
var state_18349__$1 = state_18349;
var statearr_18352_18375 = state_18349__$1;
(statearr_18352_18375[(2)] = null);

(statearr_18352_18375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (4))){
var inst_18328 = (state_18349[(7)]);
var inst_18328__$1 = (state_18349[(2)]);
var inst_18329 = (inst_18328__$1 == null);
var state_18349__$1 = (function (){var statearr_18353 = state_18349;
(statearr_18353[(7)] = inst_18328__$1);

return statearr_18353;
})();
if(cljs.core.truth_(inst_18329)){
var statearr_18354_18376 = state_18349__$1;
(statearr_18354_18376[(1)] = (5));

} else {
var statearr_18355_18377 = state_18349__$1;
(statearr_18355_18377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (13))){
var state_18349__$1 = state_18349;
var statearr_18356_18378 = state_18349__$1;
(statearr_18356_18378[(2)] = null);

(statearr_18356_18378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (6))){
var inst_18328 = (state_18349[(7)]);
var state_18349__$1 = state_18349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18349__$1,(11),to,inst_18328);
} else {
if((state_val_18350 === (3))){
var inst_18347 = (state_18349[(2)]);
var state_18349__$1 = state_18349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18349__$1,inst_18347);
} else {
if((state_val_18350 === (12))){
var state_18349__$1 = state_18349;
var statearr_18357_18379 = state_18349__$1;
(statearr_18357_18379[(2)] = null);

(statearr_18357_18379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (2))){
var state_18349__$1 = state_18349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18349__$1,(4),from);
} else {
if((state_val_18350 === (11))){
var inst_18338 = (state_18349[(2)]);
var state_18349__$1 = state_18349;
if(cljs.core.truth_(inst_18338)){
var statearr_18358_18380 = state_18349__$1;
(statearr_18358_18380[(1)] = (12));

} else {
var statearr_18359_18381 = state_18349__$1;
(statearr_18359_18381[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (9))){
var state_18349__$1 = state_18349;
var statearr_18360_18382 = state_18349__$1;
(statearr_18360_18382[(2)] = null);

(statearr_18360_18382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (5))){
var state_18349__$1 = state_18349;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18361_18383 = state_18349__$1;
(statearr_18361_18383[(1)] = (8));

} else {
var statearr_18362_18384 = state_18349__$1;
(statearr_18362_18384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (14))){
var inst_18343 = (state_18349[(2)]);
var state_18349__$1 = state_18349;
var statearr_18363_18385 = state_18349__$1;
(statearr_18363_18385[(2)] = inst_18343);

(statearr_18363_18385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (10))){
var inst_18335 = (state_18349[(2)]);
var state_18349__$1 = state_18349;
var statearr_18364_18386 = state_18349__$1;
(statearr_18364_18386[(2)] = inst_18335);

(statearr_18364_18386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18350 === (8))){
var inst_18332 = cljs.core.async.close_BANG_.call(null,to);
var state_18349__$1 = state_18349;
var statearr_18365_18387 = state_18349__$1;
(statearr_18365_18387[(2)] = inst_18332);

(statearr_18365_18387[(1)] = (10));


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
});})(c__6642__auto___18373))
;
return ((function (switch__6586__auto__,c__6642__auto___18373){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_18369 = [null,null,null,null,null,null,null,null];
(statearr_18369[(0)] = state_machine__6587__auto__);

(statearr_18369[(1)] = (1));

return statearr_18369;
});
var state_machine__6587__auto____1 = (function (state_18349){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_18349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e18370){if((e18370 instanceof Object)){
var ex__6590__auto__ = e18370;
var statearr_18371_18388 = state_18349;
(statearr_18371_18388[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18389 = state_18349;
state_18349 = G__18389;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_18349){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_18349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___18373))
})();
var state__6644__auto__ = (function (){var statearr_18372 = f__6643__auto__.call(null);
(statearr_18372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___18373);

return statearr_18372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___18373))
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
return (function (p__18573){
var vec__18574 = p__18573;
var v = cljs.core.nth.call(null,vec__18574,(0),null);
var p = cljs.core.nth.call(null,vec__18574,(1),null);
var job = vec__18574;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6642__auto___18756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___18756,res,vec__18574,v,p,job,jobs,results){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___18756,res,vec__18574,v,p,job,jobs,results){
return (function (state_18579){
var state_val_18580 = (state_18579[(1)]);
if((state_val_18580 === (2))){
var inst_18576 = (state_18579[(2)]);
var inst_18577 = cljs.core.async.close_BANG_.call(null,res);
var state_18579__$1 = (function (){var statearr_18581 = state_18579;
(statearr_18581[(7)] = inst_18576);

return statearr_18581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18579__$1,inst_18577);
} else {
if((state_val_18580 === (1))){
var state_18579__$1 = state_18579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18579__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6642__auto___18756,res,vec__18574,v,p,job,jobs,results))
;
return ((function (switch__6586__auto__,c__6642__auto___18756,res,vec__18574,v,p,job,jobs,results){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_18585 = [null,null,null,null,null,null,null,null];
(statearr_18585[(0)] = state_machine__6587__auto__);

(statearr_18585[(1)] = (1));

return statearr_18585;
});
var state_machine__6587__auto____1 = (function (state_18579){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_18579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e18586){if((e18586 instanceof Object)){
var ex__6590__auto__ = e18586;
var statearr_18587_18757 = state_18579;
(statearr_18587_18757[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18758 = state_18579;
state_18579 = G__18758;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_18579){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_18579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___18756,res,vec__18574,v,p,job,jobs,results))
})();
var state__6644__auto__ = (function (){var statearr_18588 = f__6643__auto__.call(null);
(statearr_18588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___18756);

return statearr_18588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___18756,res,vec__18574,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18589){
var vec__18590 = p__18589;
var v = cljs.core.nth.call(null,vec__18590,(0),null);
var p = cljs.core.nth.call(null,vec__18590,(1),null);
var job = vec__18590;
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
var n__4751__auto___18759 = n;
var __18760 = (0);
while(true){
if((__18760 < n__4751__auto___18759)){
var G__18591_18761 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18591_18761) {
case "async":
var c__6642__auto___18763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18760,c__6642__auto___18763,G__18591_18761,n__4751__auto___18759,jobs,results,process,async){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (__18760,c__6642__auto___18763,G__18591_18761,n__4751__auto___18759,jobs,results,process,async){
return (function (state_18604){
var state_val_18605 = (state_18604[(1)]);
if((state_val_18605 === (7))){
var inst_18600 = (state_18604[(2)]);
var state_18604__$1 = state_18604;
var statearr_18606_18764 = state_18604__$1;
(statearr_18606_18764[(2)] = inst_18600);

(statearr_18606_18764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18605 === (6))){
var state_18604__$1 = state_18604;
var statearr_18607_18765 = state_18604__$1;
(statearr_18607_18765[(2)] = null);

(statearr_18607_18765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18605 === (5))){
var state_18604__$1 = state_18604;
var statearr_18608_18766 = state_18604__$1;
(statearr_18608_18766[(2)] = null);

(statearr_18608_18766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18605 === (4))){
var inst_18594 = (state_18604[(2)]);
var inst_18595 = async.call(null,inst_18594);
var state_18604__$1 = state_18604;
if(cljs.core.truth_(inst_18595)){
var statearr_18609_18767 = state_18604__$1;
(statearr_18609_18767[(1)] = (5));

} else {
var statearr_18610_18768 = state_18604__$1;
(statearr_18610_18768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18605 === (3))){
var inst_18602 = (state_18604[(2)]);
var state_18604__$1 = state_18604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18604__$1,inst_18602);
} else {
if((state_val_18605 === (2))){
var state_18604__$1 = state_18604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18604__$1,(4),jobs);
} else {
if((state_val_18605 === (1))){
var state_18604__$1 = state_18604;
var statearr_18611_18769 = state_18604__$1;
(statearr_18611_18769[(2)] = null);

(statearr_18611_18769[(1)] = (2));


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
});})(__18760,c__6642__auto___18763,G__18591_18761,n__4751__auto___18759,jobs,results,process,async))
;
return ((function (__18760,switch__6586__auto__,c__6642__auto___18763,G__18591_18761,n__4751__auto___18759,jobs,results,process,async){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_18615 = [null,null,null,null,null,null,null];
(statearr_18615[(0)] = state_machine__6587__auto__);

(statearr_18615[(1)] = (1));

return statearr_18615;
});
var state_machine__6587__auto____1 = (function (state_18604){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_18604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e18616){if((e18616 instanceof Object)){
var ex__6590__auto__ = e18616;
var statearr_18617_18770 = state_18604;
(statearr_18617_18770[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18771 = state_18604;
state_18604 = G__18771;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_18604){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_18604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(__18760,switch__6586__auto__,c__6642__auto___18763,G__18591_18761,n__4751__auto___18759,jobs,results,process,async))
})();
var state__6644__auto__ = (function (){var statearr_18618 = f__6643__auto__.call(null);
(statearr_18618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___18763);

return statearr_18618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(__18760,c__6642__auto___18763,G__18591_18761,n__4751__auto___18759,jobs,results,process,async))
);


break;
case "compute":
var c__6642__auto___18772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18760,c__6642__auto___18772,G__18591_18761,n__4751__auto___18759,jobs,results,process,async){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (__18760,c__6642__auto___18772,G__18591_18761,n__4751__auto___18759,jobs,results,process,async){
return (function (state_18631){
var state_val_18632 = (state_18631[(1)]);
if((state_val_18632 === (7))){
var inst_18627 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
var statearr_18633_18773 = state_18631__$1;
(statearr_18633_18773[(2)] = inst_18627);

(statearr_18633_18773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (6))){
var state_18631__$1 = state_18631;
var statearr_18634_18774 = state_18631__$1;
(statearr_18634_18774[(2)] = null);

(statearr_18634_18774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (5))){
var state_18631__$1 = state_18631;
var statearr_18635_18775 = state_18631__$1;
(statearr_18635_18775[(2)] = null);

(statearr_18635_18775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (4))){
var inst_18621 = (state_18631[(2)]);
var inst_18622 = process.call(null,inst_18621);
var state_18631__$1 = state_18631;
if(cljs.core.truth_(inst_18622)){
var statearr_18636_18776 = state_18631__$1;
(statearr_18636_18776[(1)] = (5));

} else {
var statearr_18637_18777 = state_18631__$1;
(statearr_18637_18777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (3))){
var inst_18629 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18631__$1,inst_18629);
} else {
if((state_val_18632 === (2))){
var state_18631__$1 = state_18631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18631__$1,(4),jobs);
} else {
if((state_val_18632 === (1))){
var state_18631__$1 = state_18631;
var statearr_18638_18778 = state_18631__$1;
(statearr_18638_18778[(2)] = null);

(statearr_18638_18778[(1)] = (2));


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
});})(__18760,c__6642__auto___18772,G__18591_18761,n__4751__auto___18759,jobs,results,process,async))
;
return ((function (__18760,switch__6586__auto__,c__6642__auto___18772,G__18591_18761,n__4751__auto___18759,jobs,results,process,async){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_18642 = [null,null,null,null,null,null,null];
(statearr_18642[(0)] = state_machine__6587__auto__);

(statearr_18642[(1)] = (1));

return statearr_18642;
});
var state_machine__6587__auto____1 = (function (state_18631){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_18631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e18643){if((e18643 instanceof Object)){
var ex__6590__auto__ = e18643;
var statearr_18644_18779 = state_18631;
(statearr_18644_18779[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18780 = state_18631;
state_18631 = G__18780;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_18631){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_18631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(__18760,switch__6586__auto__,c__6642__auto___18772,G__18591_18761,n__4751__auto___18759,jobs,results,process,async))
})();
var state__6644__auto__ = (function (){var statearr_18645 = f__6643__auto__.call(null);
(statearr_18645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___18772);

return statearr_18645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(__18760,c__6642__auto___18772,G__18591_18761,n__4751__auto___18759,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18781 = (__18760 + (1));
__18760 = G__18781;
continue;
} else {
}
break;
}

var c__6642__auto___18782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___18782,jobs,results,process,async){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___18782,jobs,results,process,async){
return (function (state_18667){
var state_val_18668 = (state_18667[(1)]);
if((state_val_18668 === (9))){
var inst_18660 = (state_18667[(2)]);
var state_18667__$1 = (function (){var statearr_18669 = state_18667;
(statearr_18669[(7)] = inst_18660);

return statearr_18669;
})();
var statearr_18670_18783 = state_18667__$1;
(statearr_18670_18783[(2)] = null);

(statearr_18670_18783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (8))){
var inst_18653 = (state_18667[(8)]);
var inst_18658 = (state_18667[(2)]);
var state_18667__$1 = (function (){var statearr_18671 = state_18667;
(statearr_18671[(9)] = inst_18658);

return statearr_18671;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18667__$1,(9),results,inst_18653);
} else {
if((state_val_18668 === (7))){
var inst_18663 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
var statearr_18672_18784 = state_18667__$1;
(statearr_18672_18784[(2)] = inst_18663);

(statearr_18672_18784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (6))){
var inst_18648 = (state_18667[(10)]);
var inst_18653 = (state_18667[(8)]);
var inst_18653__$1 = cljs.core.async.chan.call(null,(1));
var inst_18654 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18655 = [inst_18648,inst_18653__$1];
var inst_18656 = (new cljs.core.PersistentVector(null,2,(5),inst_18654,inst_18655,null));
var state_18667__$1 = (function (){var statearr_18673 = state_18667;
(statearr_18673[(8)] = inst_18653__$1);

return statearr_18673;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18667__$1,(8),jobs,inst_18656);
} else {
if((state_val_18668 === (5))){
var inst_18651 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18667__$1 = state_18667;
var statearr_18674_18785 = state_18667__$1;
(statearr_18674_18785[(2)] = inst_18651);

(statearr_18674_18785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (4))){
var inst_18648 = (state_18667[(10)]);
var inst_18648__$1 = (state_18667[(2)]);
var inst_18649 = (inst_18648__$1 == null);
var state_18667__$1 = (function (){var statearr_18675 = state_18667;
(statearr_18675[(10)] = inst_18648__$1);

return statearr_18675;
})();
if(cljs.core.truth_(inst_18649)){
var statearr_18676_18786 = state_18667__$1;
(statearr_18676_18786[(1)] = (5));

} else {
var statearr_18677_18787 = state_18667__$1;
(statearr_18677_18787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18668 === (3))){
var inst_18665 = (state_18667[(2)]);
var state_18667__$1 = state_18667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18667__$1,inst_18665);
} else {
if((state_val_18668 === (2))){
var state_18667__$1 = state_18667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18667__$1,(4),from);
} else {
if((state_val_18668 === (1))){
var state_18667__$1 = state_18667;
var statearr_18678_18788 = state_18667__$1;
(statearr_18678_18788[(2)] = null);

(statearr_18678_18788[(1)] = (2));


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
});})(c__6642__auto___18782,jobs,results,process,async))
;
return ((function (switch__6586__auto__,c__6642__auto___18782,jobs,results,process,async){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_18682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18682[(0)] = state_machine__6587__auto__);

(statearr_18682[(1)] = (1));

return statearr_18682;
});
var state_machine__6587__auto____1 = (function (state_18667){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_18667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e18683){if((e18683 instanceof Object)){
var ex__6590__auto__ = e18683;
var statearr_18684_18789 = state_18667;
(statearr_18684_18789[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18790 = state_18667;
state_18667 = G__18790;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_18667){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_18667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___18782,jobs,results,process,async))
})();
var state__6644__auto__ = (function (){var statearr_18685 = f__6643__auto__.call(null);
(statearr_18685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___18782);

return statearr_18685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___18782,jobs,results,process,async))
);


var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__,jobs,results,process,async){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__,jobs,results,process,async){
return (function (state_18723){
var state_val_18724 = (state_18723[(1)]);
if((state_val_18724 === (7))){
var inst_18719 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
var statearr_18725_18791 = state_18723__$1;
(statearr_18725_18791[(2)] = inst_18719);

(statearr_18725_18791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (20))){
var state_18723__$1 = state_18723;
var statearr_18726_18792 = state_18723__$1;
(statearr_18726_18792[(2)] = null);

(statearr_18726_18792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (1))){
var state_18723__$1 = state_18723;
var statearr_18727_18793 = state_18723__$1;
(statearr_18727_18793[(2)] = null);

(statearr_18727_18793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (4))){
var inst_18688 = (state_18723[(7)]);
var inst_18688__$1 = (state_18723[(2)]);
var inst_18689 = (inst_18688__$1 == null);
var state_18723__$1 = (function (){var statearr_18728 = state_18723;
(statearr_18728[(7)] = inst_18688__$1);

return statearr_18728;
})();
if(cljs.core.truth_(inst_18689)){
var statearr_18729_18794 = state_18723__$1;
(statearr_18729_18794[(1)] = (5));

} else {
var statearr_18730_18795 = state_18723__$1;
(statearr_18730_18795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (15))){
var inst_18701 = (state_18723[(8)]);
var state_18723__$1 = state_18723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18723__$1,(18),to,inst_18701);
} else {
if((state_val_18724 === (21))){
var inst_18714 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
var statearr_18731_18796 = state_18723__$1;
(statearr_18731_18796[(2)] = inst_18714);

(statearr_18731_18796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (13))){
var inst_18716 = (state_18723[(2)]);
var state_18723__$1 = (function (){var statearr_18732 = state_18723;
(statearr_18732[(9)] = inst_18716);

return statearr_18732;
})();
var statearr_18733_18797 = state_18723__$1;
(statearr_18733_18797[(2)] = null);

(statearr_18733_18797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (6))){
var inst_18688 = (state_18723[(7)]);
var state_18723__$1 = state_18723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18723__$1,(11),inst_18688);
} else {
if((state_val_18724 === (17))){
var inst_18709 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
if(cljs.core.truth_(inst_18709)){
var statearr_18734_18798 = state_18723__$1;
(statearr_18734_18798[(1)] = (19));

} else {
var statearr_18735_18799 = state_18723__$1;
(statearr_18735_18799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (3))){
var inst_18721 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18723__$1,inst_18721);
} else {
if((state_val_18724 === (12))){
var inst_18698 = (state_18723[(10)]);
var state_18723__$1 = state_18723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18723__$1,(14),inst_18698);
} else {
if((state_val_18724 === (2))){
var state_18723__$1 = state_18723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18723__$1,(4),results);
} else {
if((state_val_18724 === (19))){
var state_18723__$1 = state_18723;
var statearr_18736_18800 = state_18723__$1;
(statearr_18736_18800[(2)] = null);

(statearr_18736_18800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (11))){
var inst_18698 = (state_18723[(2)]);
var state_18723__$1 = (function (){var statearr_18737 = state_18723;
(statearr_18737[(10)] = inst_18698);

return statearr_18737;
})();
var statearr_18738_18801 = state_18723__$1;
(statearr_18738_18801[(2)] = null);

(statearr_18738_18801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (9))){
var state_18723__$1 = state_18723;
var statearr_18739_18802 = state_18723__$1;
(statearr_18739_18802[(2)] = null);

(statearr_18739_18802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (5))){
var state_18723__$1 = state_18723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18740_18803 = state_18723__$1;
(statearr_18740_18803[(1)] = (8));

} else {
var statearr_18741_18804 = state_18723__$1;
(statearr_18741_18804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (14))){
var inst_18701 = (state_18723[(8)]);
var inst_18703 = (state_18723[(11)]);
var inst_18701__$1 = (state_18723[(2)]);
var inst_18702 = (inst_18701__$1 == null);
var inst_18703__$1 = cljs.core.not.call(null,inst_18702);
var state_18723__$1 = (function (){var statearr_18742 = state_18723;
(statearr_18742[(8)] = inst_18701__$1);

(statearr_18742[(11)] = inst_18703__$1);

return statearr_18742;
})();
if(inst_18703__$1){
var statearr_18743_18805 = state_18723__$1;
(statearr_18743_18805[(1)] = (15));

} else {
var statearr_18744_18806 = state_18723__$1;
(statearr_18744_18806[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (16))){
var inst_18703 = (state_18723[(11)]);
var state_18723__$1 = state_18723;
var statearr_18745_18807 = state_18723__$1;
(statearr_18745_18807[(2)] = inst_18703);

(statearr_18745_18807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (10))){
var inst_18695 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
var statearr_18746_18808 = state_18723__$1;
(statearr_18746_18808[(2)] = inst_18695);

(statearr_18746_18808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (18))){
var inst_18706 = (state_18723[(2)]);
var state_18723__$1 = state_18723;
var statearr_18747_18809 = state_18723__$1;
(statearr_18747_18809[(2)] = inst_18706);

(statearr_18747_18809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18724 === (8))){
var inst_18692 = cljs.core.async.close_BANG_.call(null,to);
var state_18723__$1 = state_18723;
var statearr_18748_18810 = state_18723__$1;
(statearr_18748_18810[(2)] = inst_18692);

(statearr_18748_18810[(1)] = (10));


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
});})(c__6642__auto__,jobs,results,process,async))
;
return ((function (switch__6586__auto__,c__6642__auto__,jobs,results,process,async){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_18752 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18752[(0)] = state_machine__6587__auto__);

(statearr_18752[(1)] = (1));

return statearr_18752;
});
var state_machine__6587__auto____1 = (function (state_18723){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_18723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e18753){if((e18753 instanceof Object)){
var ex__6590__auto__ = e18753;
var statearr_18754_18811 = state_18723;
(statearr_18754_18811[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18812 = state_18723;
state_18723 = G__18812;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_18723){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_18723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__,jobs,results,process,async))
})();
var state__6644__auto__ = (function (){var statearr_18755 = f__6643__auto__.call(null);
(statearr_18755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_18755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__,jobs,results,process,async))
);

return c__6642__auto__;
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
var c__6642__auto___18913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___18913,tc,fc){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___18913,tc,fc){
return (function (state_18888){
var state_val_18889 = (state_18888[(1)]);
if((state_val_18889 === (7))){
var inst_18884 = (state_18888[(2)]);
var state_18888__$1 = state_18888;
var statearr_18890_18914 = state_18888__$1;
(statearr_18890_18914[(2)] = inst_18884);

(statearr_18890_18914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (1))){
var state_18888__$1 = state_18888;
var statearr_18891_18915 = state_18888__$1;
(statearr_18891_18915[(2)] = null);

(statearr_18891_18915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (4))){
var inst_18865 = (state_18888[(7)]);
var inst_18865__$1 = (state_18888[(2)]);
var inst_18866 = (inst_18865__$1 == null);
var state_18888__$1 = (function (){var statearr_18892 = state_18888;
(statearr_18892[(7)] = inst_18865__$1);

return statearr_18892;
})();
if(cljs.core.truth_(inst_18866)){
var statearr_18893_18916 = state_18888__$1;
(statearr_18893_18916[(1)] = (5));

} else {
var statearr_18894_18917 = state_18888__$1;
(statearr_18894_18917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (13))){
var state_18888__$1 = state_18888;
var statearr_18895_18918 = state_18888__$1;
(statearr_18895_18918[(2)] = null);

(statearr_18895_18918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (6))){
var inst_18865 = (state_18888[(7)]);
var inst_18871 = p.call(null,inst_18865);
var state_18888__$1 = state_18888;
if(cljs.core.truth_(inst_18871)){
var statearr_18896_18919 = state_18888__$1;
(statearr_18896_18919[(1)] = (9));

} else {
var statearr_18897_18920 = state_18888__$1;
(statearr_18897_18920[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (3))){
var inst_18886 = (state_18888[(2)]);
var state_18888__$1 = state_18888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18888__$1,inst_18886);
} else {
if((state_val_18889 === (12))){
var state_18888__$1 = state_18888;
var statearr_18898_18921 = state_18888__$1;
(statearr_18898_18921[(2)] = null);

(statearr_18898_18921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (2))){
var state_18888__$1 = state_18888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18888__$1,(4),ch);
} else {
if((state_val_18889 === (11))){
var inst_18865 = (state_18888[(7)]);
var inst_18875 = (state_18888[(2)]);
var state_18888__$1 = state_18888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18888__$1,(8),inst_18875,inst_18865);
} else {
if((state_val_18889 === (9))){
var state_18888__$1 = state_18888;
var statearr_18899_18922 = state_18888__$1;
(statearr_18899_18922[(2)] = tc);

(statearr_18899_18922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (5))){
var inst_18868 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18869 = cljs.core.async.close_BANG_.call(null,fc);
var state_18888__$1 = (function (){var statearr_18900 = state_18888;
(statearr_18900[(8)] = inst_18868);

return statearr_18900;
})();
var statearr_18901_18923 = state_18888__$1;
(statearr_18901_18923[(2)] = inst_18869);

(statearr_18901_18923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (14))){
var inst_18882 = (state_18888[(2)]);
var state_18888__$1 = state_18888;
var statearr_18902_18924 = state_18888__$1;
(statearr_18902_18924[(2)] = inst_18882);

(statearr_18902_18924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (10))){
var state_18888__$1 = state_18888;
var statearr_18903_18925 = state_18888__$1;
(statearr_18903_18925[(2)] = fc);

(statearr_18903_18925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18889 === (8))){
var inst_18877 = (state_18888[(2)]);
var state_18888__$1 = state_18888;
if(cljs.core.truth_(inst_18877)){
var statearr_18904_18926 = state_18888__$1;
(statearr_18904_18926[(1)] = (12));

} else {
var statearr_18905_18927 = state_18888__$1;
(statearr_18905_18927[(1)] = (13));

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
});})(c__6642__auto___18913,tc,fc))
;
return ((function (switch__6586__auto__,c__6642__auto___18913,tc,fc){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_18909 = [null,null,null,null,null,null,null,null,null];
(statearr_18909[(0)] = state_machine__6587__auto__);

(statearr_18909[(1)] = (1));

return statearr_18909;
});
var state_machine__6587__auto____1 = (function (state_18888){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_18888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e18910){if((e18910 instanceof Object)){
var ex__6590__auto__ = e18910;
var statearr_18911_18928 = state_18888;
(statearr_18911_18928[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18929 = state_18888;
state_18888 = G__18929;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_18888){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_18888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___18913,tc,fc))
})();
var state__6644__auto__ = (function (){var statearr_18912 = f__6643__auto__.call(null);
(statearr_18912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___18913);

return statearr_18912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___18913,tc,fc))
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
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_18976){
var state_val_18977 = (state_18976[(1)]);
if((state_val_18977 === (7))){
var inst_18972 = (state_18976[(2)]);
var state_18976__$1 = state_18976;
var statearr_18978_18994 = state_18976__$1;
(statearr_18978_18994[(2)] = inst_18972);

(statearr_18978_18994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18977 === (6))){
var inst_18962 = (state_18976[(7)]);
var inst_18965 = (state_18976[(8)]);
var inst_18969 = f.call(null,inst_18962,inst_18965);
var inst_18962__$1 = inst_18969;
var state_18976__$1 = (function (){var statearr_18979 = state_18976;
(statearr_18979[(7)] = inst_18962__$1);

return statearr_18979;
})();
var statearr_18980_18995 = state_18976__$1;
(statearr_18980_18995[(2)] = null);

(statearr_18980_18995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18977 === (5))){
var inst_18962 = (state_18976[(7)]);
var state_18976__$1 = state_18976;
var statearr_18981_18996 = state_18976__$1;
(statearr_18981_18996[(2)] = inst_18962);

(statearr_18981_18996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18977 === (4))){
var inst_18965 = (state_18976[(8)]);
var inst_18965__$1 = (state_18976[(2)]);
var inst_18966 = (inst_18965__$1 == null);
var state_18976__$1 = (function (){var statearr_18982 = state_18976;
(statearr_18982[(8)] = inst_18965__$1);

return statearr_18982;
})();
if(cljs.core.truth_(inst_18966)){
var statearr_18983_18997 = state_18976__$1;
(statearr_18983_18997[(1)] = (5));

} else {
var statearr_18984_18998 = state_18976__$1;
(statearr_18984_18998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18977 === (3))){
var inst_18974 = (state_18976[(2)]);
var state_18976__$1 = state_18976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18976__$1,inst_18974);
} else {
if((state_val_18977 === (2))){
var state_18976__$1 = state_18976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18976__$1,(4),ch);
} else {
if((state_val_18977 === (1))){
var inst_18962 = init;
var state_18976__$1 = (function (){var statearr_18985 = state_18976;
(statearr_18985[(7)] = inst_18962);

return statearr_18985;
})();
var statearr_18986_18999 = state_18976__$1;
(statearr_18986_18999[(2)] = null);

(statearr_18986_18999[(1)] = (2));


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
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_18990 = [null,null,null,null,null,null,null,null,null];
(statearr_18990[(0)] = state_machine__6587__auto__);

(statearr_18990[(1)] = (1));

return statearr_18990;
});
var state_machine__6587__auto____1 = (function (state_18976){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_18976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e18991){if((e18991 instanceof Object)){
var ex__6590__auto__ = e18991;
var statearr_18992_19000 = state_18976;
(statearr_18992_19000[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19001 = state_18976;
state_18976 = G__19001;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_18976){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_18976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_18993 = f__6643__auto__.call(null);
(statearr_18993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_18993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
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
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_19075){
var state_val_19076 = (state_19075[(1)]);
if((state_val_19076 === (7))){
var inst_19057 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
var statearr_19077_19100 = state_19075__$1;
(statearr_19077_19100[(2)] = inst_19057);

(statearr_19077_19100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (1))){
var inst_19051 = cljs.core.seq.call(null,coll);
var inst_19052 = inst_19051;
var state_19075__$1 = (function (){var statearr_19078 = state_19075;
(statearr_19078[(7)] = inst_19052);

return statearr_19078;
})();
var statearr_19079_19101 = state_19075__$1;
(statearr_19079_19101[(2)] = null);

(statearr_19079_19101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (4))){
var inst_19052 = (state_19075[(7)]);
var inst_19055 = cljs.core.first.call(null,inst_19052);
var state_19075__$1 = state_19075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19075__$1,(7),ch,inst_19055);
} else {
if((state_val_19076 === (13))){
var inst_19069 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
var statearr_19080_19102 = state_19075__$1;
(statearr_19080_19102[(2)] = inst_19069);

(statearr_19080_19102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (6))){
var inst_19060 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
if(cljs.core.truth_(inst_19060)){
var statearr_19081_19103 = state_19075__$1;
(statearr_19081_19103[(1)] = (8));

} else {
var statearr_19082_19104 = state_19075__$1;
(statearr_19082_19104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (3))){
var inst_19073 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19075__$1,inst_19073);
} else {
if((state_val_19076 === (12))){
var state_19075__$1 = state_19075;
var statearr_19083_19105 = state_19075__$1;
(statearr_19083_19105[(2)] = null);

(statearr_19083_19105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (2))){
var inst_19052 = (state_19075[(7)]);
var state_19075__$1 = state_19075;
if(cljs.core.truth_(inst_19052)){
var statearr_19084_19106 = state_19075__$1;
(statearr_19084_19106[(1)] = (4));

} else {
var statearr_19085_19107 = state_19075__$1;
(statearr_19085_19107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (11))){
var inst_19066 = cljs.core.async.close_BANG_.call(null,ch);
var state_19075__$1 = state_19075;
var statearr_19086_19108 = state_19075__$1;
(statearr_19086_19108[(2)] = inst_19066);

(statearr_19086_19108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (9))){
var state_19075__$1 = state_19075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19087_19109 = state_19075__$1;
(statearr_19087_19109[(1)] = (11));

} else {
var statearr_19088_19110 = state_19075__$1;
(statearr_19088_19110[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (5))){
var inst_19052 = (state_19075[(7)]);
var state_19075__$1 = state_19075;
var statearr_19089_19111 = state_19075__$1;
(statearr_19089_19111[(2)] = inst_19052);

(statearr_19089_19111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (10))){
var inst_19071 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
var statearr_19090_19112 = state_19075__$1;
(statearr_19090_19112[(2)] = inst_19071);

(statearr_19090_19112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (8))){
var inst_19052 = (state_19075[(7)]);
var inst_19062 = cljs.core.next.call(null,inst_19052);
var inst_19052__$1 = inst_19062;
var state_19075__$1 = (function (){var statearr_19091 = state_19075;
(statearr_19091[(7)] = inst_19052__$1);

return statearr_19091;
})();
var statearr_19092_19113 = state_19075__$1;
(statearr_19092_19113[(2)] = null);

(statearr_19092_19113[(1)] = (2));


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
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_19096 = [null,null,null,null,null,null,null,null];
(statearr_19096[(0)] = state_machine__6587__auto__);

(statearr_19096[(1)] = (1));

return statearr_19096;
});
var state_machine__6587__auto____1 = (function (state_19075){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_19075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e19097){if((e19097 instanceof Object)){
var ex__6590__auto__ = e19097;
var statearr_19098_19114 = state_19075;
(statearr_19098_19114[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19115 = state_19075;
state_19075 = G__19115;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_19075){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_19075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_19099 = f__6643__auto__.call(null);
(statearr_19099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_19099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
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

cljs.core.async.Mux = (function (){var obj19117 = {};
return obj19117;
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
return (function (){var or__3864__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj19119 = {};
return obj19119;
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
return (function (){var or__3864__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return (function (){var or__3864__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return (function (){var or__3864__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
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
if(typeof cljs.core.async.t19341 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19341 = (function (cs,ch,mult,meta19342){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19342 = meta19342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19341.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19341.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19341.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19341.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t19341.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19343){
var self__ = this;
var _19343__$1 = this;
return self__.meta19342;
});})(cs))
;

cljs.core.async.t19341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19343,meta19342__$1){
var self__ = this;
var _19343__$1 = this;
return (new cljs.core.async.t19341(self__.cs,self__.ch,self__.mult,meta19342__$1));
});})(cs))
;

cljs.core.async.t19341.cljs$lang$type = true;

cljs.core.async.t19341.cljs$lang$ctorStr = "cljs.core.async/t19341";

cljs.core.async.t19341.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t19341");
});})(cs))
;

cljs.core.async.__GT_t19341 = ((function (cs){
return (function __GT_t19341(cs__$1,ch__$1,mult__$1,meta19342){
return (new cljs.core.async.t19341(cs__$1,ch__$1,mult__$1,meta19342));
});})(cs))
;

}

return (new cljs.core.async.t19341(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6642__auto___19562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___19562,cs,m,dchan,dctr,done){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___19562,cs,m,dchan,dctr,done){
return (function (state_19474){
var state_val_19475 = (state_19474[(1)]);
if((state_val_19475 === (7))){
var inst_19470 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19476_19563 = state_19474__$1;
(statearr_19476_19563[(2)] = inst_19470);

(statearr_19476_19563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (20))){
var inst_19375 = (state_19474[(7)]);
var inst_19385 = cljs.core.first.call(null,inst_19375);
var inst_19386 = cljs.core.nth.call(null,inst_19385,(0),null);
var inst_19387 = cljs.core.nth.call(null,inst_19385,(1),null);
var state_19474__$1 = (function (){var statearr_19477 = state_19474;
(statearr_19477[(8)] = inst_19386);

return statearr_19477;
})();
if(cljs.core.truth_(inst_19387)){
var statearr_19478_19564 = state_19474__$1;
(statearr_19478_19564[(1)] = (22));

} else {
var statearr_19479_19565 = state_19474__$1;
(statearr_19479_19565[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (27))){
var inst_19346 = (state_19474[(9)]);
var inst_19417 = (state_19474[(10)]);
var inst_19422 = (state_19474[(11)]);
var inst_19415 = (state_19474[(12)]);
var inst_19422__$1 = cljs.core._nth.call(null,inst_19415,inst_19417);
var inst_19423 = cljs.core.async.put_BANG_.call(null,inst_19422__$1,inst_19346,done);
var state_19474__$1 = (function (){var statearr_19480 = state_19474;
(statearr_19480[(11)] = inst_19422__$1);

return statearr_19480;
})();
if(cljs.core.truth_(inst_19423)){
var statearr_19481_19566 = state_19474__$1;
(statearr_19481_19566[(1)] = (30));

} else {
var statearr_19482_19567 = state_19474__$1;
(statearr_19482_19567[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (1))){
var state_19474__$1 = state_19474;
var statearr_19483_19568 = state_19474__$1;
(statearr_19483_19568[(2)] = null);

(statearr_19483_19568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (24))){
var inst_19375 = (state_19474[(7)]);
var inst_19392 = (state_19474[(2)]);
var inst_19393 = cljs.core.next.call(null,inst_19375);
var inst_19355 = inst_19393;
var inst_19356 = null;
var inst_19357 = (0);
var inst_19358 = (0);
var state_19474__$1 = (function (){var statearr_19484 = state_19474;
(statearr_19484[(13)] = inst_19355);

(statearr_19484[(14)] = inst_19392);

(statearr_19484[(15)] = inst_19356);

(statearr_19484[(16)] = inst_19357);

(statearr_19484[(17)] = inst_19358);

return statearr_19484;
})();
var statearr_19485_19569 = state_19474__$1;
(statearr_19485_19569[(2)] = null);

(statearr_19485_19569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (39))){
var state_19474__$1 = state_19474;
var statearr_19489_19570 = state_19474__$1;
(statearr_19489_19570[(2)] = null);

(statearr_19489_19570[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (4))){
var inst_19346 = (state_19474[(9)]);
var inst_19346__$1 = (state_19474[(2)]);
var inst_19347 = (inst_19346__$1 == null);
var state_19474__$1 = (function (){var statearr_19490 = state_19474;
(statearr_19490[(9)] = inst_19346__$1);

return statearr_19490;
})();
if(cljs.core.truth_(inst_19347)){
var statearr_19491_19571 = state_19474__$1;
(statearr_19491_19571[(1)] = (5));

} else {
var statearr_19492_19572 = state_19474__$1;
(statearr_19492_19572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (15))){
var inst_19355 = (state_19474[(13)]);
var inst_19356 = (state_19474[(15)]);
var inst_19357 = (state_19474[(16)]);
var inst_19358 = (state_19474[(17)]);
var inst_19371 = (state_19474[(2)]);
var inst_19372 = (inst_19358 + (1));
var tmp19486 = inst_19355;
var tmp19487 = inst_19356;
var tmp19488 = inst_19357;
var inst_19355__$1 = tmp19486;
var inst_19356__$1 = tmp19487;
var inst_19357__$1 = tmp19488;
var inst_19358__$1 = inst_19372;
var state_19474__$1 = (function (){var statearr_19493 = state_19474;
(statearr_19493[(13)] = inst_19355__$1);

(statearr_19493[(18)] = inst_19371);

(statearr_19493[(15)] = inst_19356__$1);

(statearr_19493[(16)] = inst_19357__$1);

(statearr_19493[(17)] = inst_19358__$1);

return statearr_19493;
})();
var statearr_19494_19573 = state_19474__$1;
(statearr_19494_19573[(2)] = null);

(statearr_19494_19573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (21))){
var inst_19396 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19498_19574 = state_19474__$1;
(statearr_19498_19574[(2)] = inst_19396);

(statearr_19498_19574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (31))){
var inst_19422 = (state_19474[(11)]);
var inst_19426 = done.call(null,null);
var inst_19427 = cljs.core.async.untap_STAR_.call(null,m,inst_19422);
var state_19474__$1 = (function (){var statearr_19499 = state_19474;
(statearr_19499[(19)] = inst_19426);

return statearr_19499;
})();
var statearr_19500_19575 = state_19474__$1;
(statearr_19500_19575[(2)] = inst_19427);

(statearr_19500_19575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (32))){
var inst_19416 = (state_19474[(20)]);
var inst_19417 = (state_19474[(10)]);
var inst_19415 = (state_19474[(12)]);
var inst_19414 = (state_19474[(21)]);
var inst_19429 = (state_19474[(2)]);
var inst_19430 = (inst_19417 + (1));
var tmp19495 = inst_19416;
var tmp19496 = inst_19415;
var tmp19497 = inst_19414;
var inst_19414__$1 = tmp19497;
var inst_19415__$1 = tmp19496;
var inst_19416__$1 = tmp19495;
var inst_19417__$1 = inst_19430;
var state_19474__$1 = (function (){var statearr_19501 = state_19474;
(statearr_19501[(20)] = inst_19416__$1);

(statearr_19501[(22)] = inst_19429);

(statearr_19501[(10)] = inst_19417__$1);

(statearr_19501[(12)] = inst_19415__$1);

(statearr_19501[(21)] = inst_19414__$1);

return statearr_19501;
})();
var statearr_19502_19576 = state_19474__$1;
(statearr_19502_19576[(2)] = null);

(statearr_19502_19576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (40))){
var inst_19442 = (state_19474[(23)]);
var inst_19446 = done.call(null,null);
var inst_19447 = cljs.core.async.untap_STAR_.call(null,m,inst_19442);
var state_19474__$1 = (function (){var statearr_19503 = state_19474;
(statearr_19503[(24)] = inst_19446);

return statearr_19503;
})();
var statearr_19504_19577 = state_19474__$1;
(statearr_19504_19577[(2)] = inst_19447);

(statearr_19504_19577[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (33))){
var inst_19433 = (state_19474[(25)]);
var inst_19435 = cljs.core.chunked_seq_QMARK_.call(null,inst_19433);
var state_19474__$1 = state_19474;
if(inst_19435){
var statearr_19505_19578 = state_19474__$1;
(statearr_19505_19578[(1)] = (36));

} else {
var statearr_19506_19579 = state_19474__$1;
(statearr_19506_19579[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (13))){
var inst_19365 = (state_19474[(26)]);
var inst_19368 = cljs.core.async.close_BANG_.call(null,inst_19365);
var state_19474__$1 = state_19474;
var statearr_19507_19580 = state_19474__$1;
(statearr_19507_19580[(2)] = inst_19368);

(statearr_19507_19580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (22))){
var inst_19386 = (state_19474[(8)]);
var inst_19389 = cljs.core.async.close_BANG_.call(null,inst_19386);
var state_19474__$1 = state_19474;
var statearr_19508_19581 = state_19474__$1;
(statearr_19508_19581[(2)] = inst_19389);

(statearr_19508_19581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (36))){
var inst_19433 = (state_19474[(25)]);
var inst_19437 = cljs.core.chunk_first.call(null,inst_19433);
var inst_19438 = cljs.core.chunk_rest.call(null,inst_19433);
var inst_19439 = cljs.core.count.call(null,inst_19437);
var inst_19414 = inst_19438;
var inst_19415 = inst_19437;
var inst_19416 = inst_19439;
var inst_19417 = (0);
var state_19474__$1 = (function (){var statearr_19509 = state_19474;
(statearr_19509[(20)] = inst_19416);

(statearr_19509[(10)] = inst_19417);

(statearr_19509[(12)] = inst_19415);

(statearr_19509[(21)] = inst_19414);

return statearr_19509;
})();
var statearr_19510_19582 = state_19474__$1;
(statearr_19510_19582[(2)] = null);

(statearr_19510_19582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (41))){
var inst_19433 = (state_19474[(25)]);
var inst_19449 = (state_19474[(2)]);
var inst_19450 = cljs.core.next.call(null,inst_19433);
var inst_19414 = inst_19450;
var inst_19415 = null;
var inst_19416 = (0);
var inst_19417 = (0);
var state_19474__$1 = (function (){var statearr_19511 = state_19474;
(statearr_19511[(20)] = inst_19416);

(statearr_19511[(27)] = inst_19449);

(statearr_19511[(10)] = inst_19417);

(statearr_19511[(12)] = inst_19415);

(statearr_19511[(21)] = inst_19414);

return statearr_19511;
})();
var statearr_19512_19583 = state_19474__$1;
(statearr_19512_19583[(2)] = null);

(statearr_19512_19583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (43))){
var state_19474__$1 = state_19474;
var statearr_19513_19584 = state_19474__$1;
(statearr_19513_19584[(2)] = null);

(statearr_19513_19584[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (29))){
var inst_19458 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19514_19585 = state_19474__$1;
(statearr_19514_19585[(2)] = inst_19458);

(statearr_19514_19585[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (44))){
var inst_19467 = (state_19474[(2)]);
var state_19474__$1 = (function (){var statearr_19515 = state_19474;
(statearr_19515[(28)] = inst_19467);

return statearr_19515;
})();
var statearr_19516_19586 = state_19474__$1;
(statearr_19516_19586[(2)] = null);

(statearr_19516_19586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (6))){
var inst_19406 = (state_19474[(29)]);
var inst_19405 = cljs.core.deref.call(null,cs);
var inst_19406__$1 = cljs.core.keys.call(null,inst_19405);
var inst_19407 = cljs.core.count.call(null,inst_19406__$1);
var inst_19408 = cljs.core.reset_BANG_.call(null,dctr,inst_19407);
var inst_19413 = cljs.core.seq.call(null,inst_19406__$1);
var inst_19414 = inst_19413;
var inst_19415 = null;
var inst_19416 = (0);
var inst_19417 = (0);
var state_19474__$1 = (function (){var statearr_19517 = state_19474;
(statearr_19517[(20)] = inst_19416);

(statearr_19517[(10)] = inst_19417);

(statearr_19517[(30)] = inst_19408);

(statearr_19517[(29)] = inst_19406__$1);

(statearr_19517[(12)] = inst_19415);

(statearr_19517[(21)] = inst_19414);

return statearr_19517;
})();
var statearr_19518_19587 = state_19474__$1;
(statearr_19518_19587[(2)] = null);

(statearr_19518_19587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (28))){
var inst_19433 = (state_19474[(25)]);
var inst_19414 = (state_19474[(21)]);
var inst_19433__$1 = cljs.core.seq.call(null,inst_19414);
var state_19474__$1 = (function (){var statearr_19519 = state_19474;
(statearr_19519[(25)] = inst_19433__$1);

return statearr_19519;
})();
if(inst_19433__$1){
var statearr_19520_19588 = state_19474__$1;
(statearr_19520_19588[(1)] = (33));

} else {
var statearr_19521_19589 = state_19474__$1;
(statearr_19521_19589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (25))){
var inst_19416 = (state_19474[(20)]);
var inst_19417 = (state_19474[(10)]);
var inst_19419 = (inst_19417 < inst_19416);
var inst_19420 = inst_19419;
var state_19474__$1 = state_19474;
if(cljs.core.truth_(inst_19420)){
var statearr_19522_19590 = state_19474__$1;
(statearr_19522_19590[(1)] = (27));

} else {
var statearr_19523_19591 = state_19474__$1;
(statearr_19523_19591[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (34))){
var state_19474__$1 = state_19474;
var statearr_19524_19592 = state_19474__$1;
(statearr_19524_19592[(2)] = null);

(statearr_19524_19592[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (17))){
var state_19474__$1 = state_19474;
var statearr_19525_19593 = state_19474__$1;
(statearr_19525_19593[(2)] = null);

(statearr_19525_19593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (3))){
var inst_19472 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19474__$1,inst_19472);
} else {
if((state_val_19475 === (12))){
var inst_19401 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19526_19594 = state_19474__$1;
(statearr_19526_19594[(2)] = inst_19401);

(statearr_19526_19594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (2))){
var state_19474__$1 = state_19474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19474__$1,(4),ch);
} else {
if((state_val_19475 === (23))){
var state_19474__$1 = state_19474;
var statearr_19527_19595 = state_19474__$1;
(statearr_19527_19595[(2)] = null);

(statearr_19527_19595[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (35))){
var inst_19456 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19528_19596 = state_19474__$1;
(statearr_19528_19596[(2)] = inst_19456);

(statearr_19528_19596[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (19))){
var inst_19375 = (state_19474[(7)]);
var inst_19379 = cljs.core.chunk_first.call(null,inst_19375);
var inst_19380 = cljs.core.chunk_rest.call(null,inst_19375);
var inst_19381 = cljs.core.count.call(null,inst_19379);
var inst_19355 = inst_19380;
var inst_19356 = inst_19379;
var inst_19357 = inst_19381;
var inst_19358 = (0);
var state_19474__$1 = (function (){var statearr_19529 = state_19474;
(statearr_19529[(13)] = inst_19355);

(statearr_19529[(15)] = inst_19356);

(statearr_19529[(16)] = inst_19357);

(statearr_19529[(17)] = inst_19358);

return statearr_19529;
})();
var statearr_19530_19597 = state_19474__$1;
(statearr_19530_19597[(2)] = null);

(statearr_19530_19597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (11))){
var inst_19355 = (state_19474[(13)]);
var inst_19375 = (state_19474[(7)]);
var inst_19375__$1 = cljs.core.seq.call(null,inst_19355);
var state_19474__$1 = (function (){var statearr_19531 = state_19474;
(statearr_19531[(7)] = inst_19375__$1);

return statearr_19531;
})();
if(inst_19375__$1){
var statearr_19532_19598 = state_19474__$1;
(statearr_19532_19598[(1)] = (16));

} else {
var statearr_19533_19599 = state_19474__$1;
(statearr_19533_19599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (9))){
var inst_19403 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19534_19600 = state_19474__$1;
(statearr_19534_19600[(2)] = inst_19403);

(statearr_19534_19600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (5))){
var inst_19353 = cljs.core.deref.call(null,cs);
var inst_19354 = cljs.core.seq.call(null,inst_19353);
var inst_19355 = inst_19354;
var inst_19356 = null;
var inst_19357 = (0);
var inst_19358 = (0);
var state_19474__$1 = (function (){var statearr_19535 = state_19474;
(statearr_19535[(13)] = inst_19355);

(statearr_19535[(15)] = inst_19356);

(statearr_19535[(16)] = inst_19357);

(statearr_19535[(17)] = inst_19358);

return statearr_19535;
})();
var statearr_19536_19601 = state_19474__$1;
(statearr_19536_19601[(2)] = null);

(statearr_19536_19601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (14))){
var state_19474__$1 = state_19474;
var statearr_19537_19602 = state_19474__$1;
(statearr_19537_19602[(2)] = null);

(statearr_19537_19602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (45))){
var inst_19464 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19538_19603 = state_19474__$1;
(statearr_19538_19603[(2)] = inst_19464);

(statearr_19538_19603[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (26))){
var inst_19406 = (state_19474[(29)]);
var inst_19460 = (state_19474[(2)]);
var inst_19461 = cljs.core.seq.call(null,inst_19406);
var state_19474__$1 = (function (){var statearr_19539 = state_19474;
(statearr_19539[(31)] = inst_19460);

return statearr_19539;
})();
if(inst_19461){
var statearr_19540_19604 = state_19474__$1;
(statearr_19540_19604[(1)] = (42));

} else {
var statearr_19541_19605 = state_19474__$1;
(statearr_19541_19605[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (16))){
var inst_19375 = (state_19474[(7)]);
var inst_19377 = cljs.core.chunked_seq_QMARK_.call(null,inst_19375);
var state_19474__$1 = state_19474;
if(inst_19377){
var statearr_19542_19606 = state_19474__$1;
(statearr_19542_19606[(1)] = (19));

} else {
var statearr_19543_19607 = state_19474__$1;
(statearr_19543_19607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (38))){
var inst_19453 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19544_19608 = state_19474__$1;
(statearr_19544_19608[(2)] = inst_19453);

(statearr_19544_19608[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (30))){
var state_19474__$1 = state_19474;
var statearr_19545_19609 = state_19474__$1;
(statearr_19545_19609[(2)] = null);

(statearr_19545_19609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (10))){
var inst_19356 = (state_19474[(15)]);
var inst_19358 = (state_19474[(17)]);
var inst_19364 = cljs.core._nth.call(null,inst_19356,inst_19358);
var inst_19365 = cljs.core.nth.call(null,inst_19364,(0),null);
var inst_19366 = cljs.core.nth.call(null,inst_19364,(1),null);
var state_19474__$1 = (function (){var statearr_19546 = state_19474;
(statearr_19546[(26)] = inst_19365);

return statearr_19546;
})();
if(cljs.core.truth_(inst_19366)){
var statearr_19547_19610 = state_19474__$1;
(statearr_19547_19610[(1)] = (13));

} else {
var statearr_19548_19611 = state_19474__$1;
(statearr_19548_19611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (18))){
var inst_19399 = (state_19474[(2)]);
var state_19474__$1 = state_19474;
var statearr_19549_19612 = state_19474__$1;
(statearr_19549_19612[(2)] = inst_19399);

(statearr_19549_19612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (42))){
var state_19474__$1 = state_19474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19474__$1,(45),dchan);
} else {
if((state_val_19475 === (37))){
var inst_19442 = (state_19474[(23)]);
var inst_19346 = (state_19474[(9)]);
var inst_19433 = (state_19474[(25)]);
var inst_19442__$1 = cljs.core.first.call(null,inst_19433);
var inst_19443 = cljs.core.async.put_BANG_.call(null,inst_19442__$1,inst_19346,done);
var state_19474__$1 = (function (){var statearr_19550 = state_19474;
(statearr_19550[(23)] = inst_19442__$1);

return statearr_19550;
})();
if(cljs.core.truth_(inst_19443)){
var statearr_19551_19613 = state_19474__$1;
(statearr_19551_19613[(1)] = (39));

} else {
var statearr_19552_19614 = state_19474__$1;
(statearr_19552_19614[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19475 === (8))){
var inst_19357 = (state_19474[(16)]);
var inst_19358 = (state_19474[(17)]);
var inst_19360 = (inst_19358 < inst_19357);
var inst_19361 = inst_19360;
var state_19474__$1 = state_19474;
if(cljs.core.truth_(inst_19361)){
var statearr_19553_19615 = state_19474__$1;
(statearr_19553_19615[(1)] = (10));

} else {
var statearr_19554_19616 = state_19474__$1;
(statearr_19554_19616[(1)] = (11));

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
});})(c__6642__auto___19562,cs,m,dchan,dctr,done))
;
return ((function (switch__6586__auto__,c__6642__auto___19562,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_19558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19558[(0)] = state_machine__6587__auto__);

(statearr_19558[(1)] = (1));

return statearr_19558;
});
var state_machine__6587__auto____1 = (function (state_19474){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_19474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e19559){if((e19559 instanceof Object)){
var ex__6590__auto__ = e19559;
var statearr_19560_19617 = state_19474;
(statearr_19560_19617[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19618 = state_19474;
state_19474 = G__19618;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_19474){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_19474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___19562,cs,m,dchan,dctr,done))
})();
var state__6644__auto__ = (function (){var statearr_19561 = f__6643__auto__.call(null);
(statearr_19561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___19562);

return statearr_19561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___19562,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj19620 = {};
return obj19620;
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
return (function (){var or__3864__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return (function (){var or__3864__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return (function (){var or__3864__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return (function (){var or__3864__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return (function (){var or__3864__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19621){
var map__19626 = p__19621;
var map__19626__$1 = ((cljs.core.seq_QMARK_.call(null,map__19626))?cljs.core.apply.call(null,cljs.core.hash_map,map__19626):map__19626);
var opts = map__19626__$1;
var statearr_19627_19630 = state;
(statearr_19627_19630[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__19626,map__19626__$1,opts){
return (function (val){
var statearr_19628_19631 = state;
(statearr_19628_19631[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19626,map__19626__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_19629_19632 = state;
(statearr_19629_19632[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19621 = null;
if (arguments.length > 3) {
var G__19633__i = 0, G__19633__a = new Array(arguments.length -  3);
while (G__19633__i < G__19633__a.length) {G__19633__a[G__19633__i] = arguments[G__19633__i + 3]; ++G__19633__i;}
  p__19621 = new cljs.core.IndexedSeq(G__19633__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19621);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19634){
var state = cljs.core.first(arglist__19634);
arglist__19634 = cljs.core.next(arglist__19634);
var cont_block = cljs.core.first(arglist__19634);
arglist__19634 = cljs.core.next(arglist__19634);
var ports = cljs.core.first(arglist__19634);
var p__19621 = cljs.core.rest(arglist__19634);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19621);
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
if(typeof cljs.core.async.t19754 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19754 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19755){
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
this.meta19755 = meta19755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19754.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19754.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19754.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19754.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19754.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19754.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t19754.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19756){
var self__ = this;
var _19756__$1 = this;
return self__.meta19755;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19756,meta19755__$1){
var self__ = this;
var _19756__$1 = this;
return (new cljs.core.async.t19754(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19755__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19754.cljs$lang$type = true;

cljs.core.async.t19754.cljs$lang$ctorStr = "cljs.core.async/t19754";

cljs.core.async.t19754.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t19754");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19754 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19754(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19755){
return (new cljs.core.async.t19754(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19755));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19754(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6642__auto___19873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___19873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___19873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19826){
var state_val_19827 = (state_19826[(1)]);
if((state_val_19827 === (7))){
var inst_19770 = (state_19826[(7)]);
var inst_19775 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19770);
var state_19826__$1 = state_19826;
var statearr_19828_19874 = state_19826__$1;
(statearr_19828_19874[(2)] = inst_19775);

(statearr_19828_19874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (20))){
var inst_19785 = (state_19826[(8)]);
var state_19826__$1 = state_19826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19826__$1,(23),out,inst_19785);
} else {
if((state_val_19827 === (1))){
var inst_19760 = (state_19826[(9)]);
var inst_19760__$1 = calc_state.call(null);
var inst_19761 = cljs.core.seq_QMARK_.call(null,inst_19760__$1);
var state_19826__$1 = (function (){var statearr_19829 = state_19826;
(statearr_19829[(9)] = inst_19760__$1);

return statearr_19829;
})();
if(inst_19761){
var statearr_19830_19875 = state_19826__$1;
(statearr_19830_19875[(1)] = (2));

} else {
var statearr_19831_19876 = state_19826__$1;
(statearr_19831_19876[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (24))){
var inst_19778 = (state_19826[(10)]);
var inst_19770 = inst_19778;
var state_19826__$1 = (function (){var statearr_19832 = state_19826;
(statearr_19832[(7)] = inst_19770);

return statearr_19832;
})();
var statearr_19833_19877 = state_19826__$1;
(statearr_19833_19877[(2)] = null);

(statearr_19833_19877[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (4))){
var inst_19760 = (state_19826[(9)]);
var inst_19766 = (state_19826[(2)]);
var inst_19767 = cljs.core.get.call(null,inst_19766,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19768 = cljs.core.get.call(null,inst_19766,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19769 = cljs.core.get.call(null,inst_19766,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19770 = inst_19760;
var state_19826__$1 = (function (){var statearr_19834 = state_19826;
(statearr_19834[(11)] = inst_19768);

(statearr_19834[(12)] = inst_19769);

(statearr_19834[(13)] = inst_19767);

(statearr_19834[(7)] = inst_19770);

return statearr_19834;
})();
var statearr_19835_19878 = state_19826__$1;
(statearr_19835_19878[(2)] = null);

(statearr_19835_19878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (15))){
var state_19826__$1 = state_19826;
var statearr_19836_19879 = state_19826__$1;
(statearr_19836_19879[(2)] = null);

(statearr_19836_19879[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (21))){
var inst_19778 = (state_19826[(10)]);
var inst_19770 = inst_19778;
var state_19826__$1 = (function (){var statearr_19837 = state_19826;
(statearr_19837[(7)] = inst_19770);

return statearr_19837;
})();
var statearr_19838_19880 = state_19826__$1;
(statearr_19838_19880[(2)] = null);

(statearr_19838_19880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (13))){
var inst_19822 = (state_19826[(2)]);
var state_19826__$1 = state_19826;
var statearr_19839_19881 = state_19826__$1;
(statearr_19839_19881[(2)] = inst_19822);

(statearr_19839_19881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (22))){
var inst_19820 = (state_19826[(2)]);
var state_19826__$1 = state_19826;
var statearr_19840_19882 = state_19826__$1;
(statearr_19840_19882[(2)] = inst_19820);

(statearr_19840_19882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (6))){
var inst_19824 = (state_19826[(2)]);
var state_19826__$1 = state_19826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19826__$1,inst_19824);
} else {
if((state_val_19827 === (25))){
var state_19826__$1 = state_19826;
var statearr_19841_19883 = state_19826__$1;
(statearr_19841_19883[(2)] = null);

(statearr_19841_19883[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (17))){
var inst_19800 = (state_19826[(14)]);
var state_19826__$1 = state_19826;
var statearr_19842_19884 = state_19826__$1;
(statearr_19842_19884[(2)] = inst_19800);

(statearr_19842_19884[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (3))){
var inst_19760 = (state_19826[(9)]);
var state_19826__$1 = state_19826;
var statearr_19843_19885 = state_19826__$1;
(statearr_19843_19885[(2)] = inst_19760);

(statearr_19843_19885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (12))){
var inst_19800 = (state_19826[(14)]);
var inst_19786 = (state_19826[(15)]);
var inst_19781 = (state_19826[(16)]);
var inst_19800__$1 = inst_19781.call(null,inst_19786);
var state_19826__$1 = (function (){var statearr_19844 = state_19826;
(statearr_19844[(14)] = inst_19800__$1);

return statearr_19844;
})();
if(cljs.core.truth_(inst_19800__$1)){
var statearr_19845_19886 = state_19826__$1;
(statearr_19845_19886[(1)] = (17));

} else {
var statearr_19846_19887 = state_19826__$1;
(statearr_19846_19887[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (2))){
var inst_19760 = (state_19826[(9)]);
var inst_19763 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19760);
var state_19826__$1 = state_19826;
var statearr_19847_19888 = state_19826__$1;
(statearr_19847_19888[(2)] = inst_19763);

(statearr_19847_19888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (23))){
var inst_19811 = (state_19826[(2)]);
var state_19826__$1 = state_19826;
if(cljs.core.truth_(inst_19811)){
var statearr_19848_19889 = state_19826__$1;
(statearr_19848_19889[(1)] = (24));

} else {
var statearr_19849_19890 = state_19826__$1;
(statearr_19849_19890[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (19))){
var inst_19808 = (state_19826[(2)]);
var state_19826__$1 = state_19826;
if(cljs.core.truth_(inst_19808)){
var statearr_19850_19891 = state_19826__$1;
(statearr_19850_19891[(1)] = (20));

} else {
var statearr_19851_19892 = state_19826__$1;
(statearr_19851_19892[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (11))){
var inst_19785 = (state_19826[(8)]);
var inst_19791 = (inst_19785 == null);
var state_19826__$1 = state_19826;
if(cljs.core.truth_(inst_19791)){
var statearr_19852_19893 = state_19826__$1;
(statearr_19852_19893[(1)] = (14));

} else {
var statearr_19853_19894 = state_19826__$1;
(statearr_19853_19894[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (9))){
var inst_19778 = (state_19826[(10)]);
var inst_19778__$1 = (state_19826[(2)]);
var inst_19779 = cljs.core.get.call(null,inst_19778__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19780 = cljs.core.get.call(null,inst_19778__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19781 = cljs.core.get.call(null,inst_19778__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_19826__$1 = (function (){var statearr_19854 = state_19826;
(statearr_19854[(10)] = inst_19778__$1);

(statearr_19854[(17)] = inst_19780);

(statearr_19854[(16)] = inst_19781);

return statearr_19854;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19826__$1,(10),inst_19779);
} else {
if((state_val_19827 === (5))){
var inst_19770 = (state_19826[(7)]);
var inst_19773 = cljs.core.seq_QMARK_.call(null,inst_19770);
var state_19826__$1 = state_19826;
if(inst_19773){
var statearr_19855_19895 = state_19826__$1;
(statearr_19855_19895[(1)] = (7));

} else {
var statearr_19856_19896 = state_19826__$1;
(statearr_19856_19896[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (14))){
var inst_19786 = (state_19826[(15)]);
var inst_19793 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19786);
var state_19826__$1 = state_19826;
var statearr_19857_19897 = state_19826__$1;
(statearr_19857_19897[(2)] = inst_19793);

(statearr_19857_19897[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (26))){
var inst_19816 = (state_19826[(2)]);
var state_19826__$1 = state_19826;
var statearr_19858_19898 = state_19826__$1;
(statearr_19858_19898[(2)] = inst_19816);

(statearr_19858_19898[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (16))){
var inst_19796 = (state_19826[(2)]);
var inst_19797 = calc_state.call(null);
var inst_19770 = inst_19797;
var state_19826__$1 = (function (){var statearr_19859 = state_19826;
(statearr_19859[(18)] = inst_19796);

(statearr_19859[(7)] = inst_19770);

return statearr_19859;
})();
var statearr_19860_19899 = state_19826__$1;
(statearr_19860_19899[(2)] = null);

(statearr_19860_19899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (10))){
var inst_19785 = (state_19826[(8)]);
var inst_19786 = (state_19826[(15)]);
var inst_19784 = (state_19826[(2)]);
var inst_19785__$1 = cljs.core.nth.call(null,inst_19784,(0),null);
var inst_19786__$1 = cljs.core.nth.call(null,inst_19784,(1),null);
var inst_19787 = (inst_19785__$1 == null);
var inst_19788 = cljs.core._EQ_.call(null,inst_19786__$1,change);
var inst_19789 = (inst_19787) || (inst_19788);
var state_19826__$1 = (function (){var statearr_19861 = state_19826;
(statearr_19861[(8)] = inst_19785__$1);

(statearr_19861[(15)] = inst_19786__$1);

return statearr_19861;
})();
if(cljs.core.truth_(inst_19789)){
var statearr_19862_19900 = state_19826__$1;
(statearr_19862_19900[(1)] = (11));

} else {
var statearr_19863_19901 = state_19826__$1;
(statearr_19863_19901[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (18))){
var inst_19780 = (state_19826[(17)]);
var inst_19786 = (state_19826[(15)]);
var inst_19781 = (state_19826[(16)]);
var inst_19803 = cljs.core.empty_QMARK_.call(null,inst_19781);
var inst_19804 = inst_19780.call(null,inst_19786);
var inst_19805 = cljs.core.not.call(null,inst_19804);
var inst_19806 = (inst_19803) && (inst_19805);
var state_19826__$1 = state_19826;
var statearr_19864_19902 = state_19826__$1;
(statearr_19864_19902[(2)] = inst_19806);

(statearr_19864_19902[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19827 === (8))){
var inst_19770 = (state_19826[(7)]);
var state_19826__$1 = state_19826;
var statearr_19865_19903 = state_19826__$1;
(statearr_19865_19903[(2)] = inst_19770);

(statearr_19865_19903[(1)] = (9));


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
});})(c__6642__auto___19873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6586__auto__,c__6642__auto___19873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_19869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19869[(0)] = state_machine__6587__auto__);

(statearr_19869[(1)] = (1));

return statearr_19869;
});
var state_machine__6587__auto____1 = (function (state_19826){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_19826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e19870){if((e19870 instanceof Object)){
var ex__6590__auto__ = e19870;
var statearr_19871_19904 = state_19826;
(statearr_19871_19904[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19905 = state_19826;
state_19826 = G__19905;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_19826){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_19826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___19873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6644__auto__ = (function (){var statearr_19872 = f__6643__auto__.call(null);
(statearr_19872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___19873);

return statearr_19872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___19873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj19907 = {};
return obj19907;
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
return (function (){var or__3864__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return (function (){var or__3864__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
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
return (function (){var or__3864__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return (function (){var or__3864__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4508__auto__)]);
if(or__3864__auto__){
return or__3864__auto__;
} else {
var or__3864__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3864__auto____$1){
return or__3864__auto____$1;
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
var or__3864__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3864__auto__)){
return or__3864__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3864__auto__,mults){
return (function (p1__19908_SHARP_){
if(cljs.core.truth_(p1__19908_SHARP_.call(null,topic))){
return p1__19908_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19908_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3864__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t20031 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20031 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20032){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20032 = meta20032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20031.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t20031.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t20031.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t20031.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t20031.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t20031.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t20031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20033){
var self__ = this;
var _20033__$1 = this;
return self__.meta20032;
});})(mults,ensure_mult))
;

cljs.core.async.t20031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20033,meta20032__$1){
var self__ = this;
var _20033__$1 = this;
return (new cljs.core.async.t20031(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20032__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t20031.cljs$lang$type = true;

cljs.core.async.t20031.cljs$lang$ctorStr = "cljs.core.async/t20031";

cljs.core.async.t20031.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t20031");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t20031 = ((function (mults,ensure_mult){
return (function __GT_t20031(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20032){
return (new cljs.core.async.t20031(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20032));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t20031(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6642__auto___20153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___20153,mults,ensure_mult,p){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___20153,mults,ensure_mult,p){
return (function (state_20105){
var state_val_20106 = (state_20105[(1)]);
if((state_val_20106 === (7))){
var inst_20101 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20107_20154 = state_20105__$1;
(statearr_20107_20154[(2)] = inst_20101);

(statearr_20107_20154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (20))){
var state_20105__$1 = state_20105;
var statearr_20108_20155 = state_20105__$1;
(statearr_20108_20155[(2)] = null);

(statearr_20108_20155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (1))){
var state_20105__$1 = state_20105;
var statearr_20109_20156 = state_20105__$1;
(statearr_20109_20156[(2)] = null);

(statearr_20109_20156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (24))){
var inst_20084 = (state_20105[(7)]);
var inst_20093 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20084);
var state_20105__$1 = state_20105;
var statearr_20110_20157 = state_20105__$1;
(statearr_20110_20157[(2)] = inst_20093);

(statearr_20110_20157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (4))){
var inst_20036 = (state_20105[(8)]);
var inst_20036__$1 = (state_20105[(2)]);
var inst_20037 = (inst_20036__$1 == null);
var state_20105__$1 = (function (){var statearr_20111 = state_20105;
(statearr_20111[(8)] = inst_20036__$1);

return statearr_20111;
})();
if(cljs.core.truth_(inst_20037)){
var statearr_20112_20158 = state_20105__$1;
(statearr_20112_20158[(1)] = (5));

} else {
var statearr_20113_20159 = state_20105__$1;
(statearr_20113_20159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (15))){
var inst_20078 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20114_20160 = state_20105__$1;
(statearr_20114_20160[(2)] = inst_20078);

(statearr_20114_20160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (21))){
var inst_20098 = (state_20105[(2)]);
var state_20105__$1 = (function (){var statearr_20115 = state_20105;
(statearr_20115[(9)] = inst_20098);

return statearr_20115;
})();
var statearr_20116_20161 = state_20105__$1;
(statearr_20116_20161[(2)] = null);

(statearr_20116_20161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (13))){
var inst_20060 = (state_20105[(10)]);
var inst_20062 = cljs.core.chunked_seq_QMARK_.call(null,inst_20060);
var state_20105__$1 = state_20105;
if(inst_20062){
var statearr_20117_20162 = state_20105__$1;
(statearr_20117_20162[(1)] = (16));

} else {
var statearr_20118_20163 = state_20105__$1;
(statearr_20118_20163[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (22))){
var inst_20090 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
if(cljs.core.truth_(inst_20090)){
var statearr_20119_20164 = state_20105__$1;
(statearr_20119_20164[(1)] = (23));

} else {
var statearr_20120_20165 = state_20105__$1;
(statearr_20120_20165[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (6))){
var inst_20086 = (state_20105[(11)]);
var inst_20036 = (state_20105[(8)]);
var inst_20084 = (state_20105[(7)]);
var inst_20084__$1 = topic_fn.call(null,inst_20036);
var inst_20085 = cljs.core.deref.call(null,mults);
var inst_20086__$1 = cljs.core.get.call(null,inst_20085,inst_20084__$1);
var state_20105__$1 = (function (){var statearr_20121 = state_20105;
(statearr_20121[(11)] = inst_20086__$1);

(statearr_20121[(7)] = inst_20084__$1);

return statearr_20121;
})();
if(cljs.core.truth_(inst_20086__$1)){
var statearr_20122_20166 = state_20105__$1;
(statearr_20122_20166[(1)] = (19));

} else {
var statearr_20123_20167 = state_20105__$1;
(statearr_20123_20167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (25))){
var inst_20095 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20124_20168 = state_20105__$1;
(statearr_20124_20168[(2)] = inst_20095);

(statearr_20124_20168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (17))){
var inst_20060 = (state_20105[(10)]);
var inst_20069 = cljs.core.first.call(null,inst_20060);
var inst_20070 = cljs.core.async.muxch_STAR_.call(null,inst_20069);
var inst_20071 = cljs.core.async.close_BANG_.call(null,inst_20070);
var inst_20072 = cljs.core.next.call(null,inst_20060);
var inst_20046 = inst_20072;
var inst_20047 = null;
var inst_20048 = (0);
var inst_20049 = (0);
var state_20105__$1 = (function (){var statearr_20125 = state_20105;
(statearr_20125[(12)] = inst_20049);

(statearr_20125[(13)] = inst_20071);

(statearr_20125[(14)] = inst_20048);

(statearr_20125[(15)] = inst_20047);

(statearr_20125[(16)] = inst_20046);

return statearr_20125;
})();
var statearr_20126_20169 = state_20105__$1;
(statearr_20126_20169[(2)] = null);

(statearr_20126_20169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (3))){
var inst_20103 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20105__$1,inst_20103);
} else {
if((state_val_20106 === (12))){
var inst_20080 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20127_20170 = state_20105__$1;
(statearr_20127_20170[(2)] = inst_20080);

(statearr_20127_20170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (2))){
var state_20105__$1 = state_20105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20105__$1,(4),ch);
} else {
if((state_val_20106 === (23))){
var state_20105__$1 = state_20105;
var statearr_20128_20171 = state_20105__$1;
(statearr_20128_20171[(2)] = null);

(statearr_20128_20171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (19))){
var inst_20086 = (state_20105[(11)]);
var inst_20036 = (state_20105[(8)]);
var inst_20088 = cljs.core.async.muxch_STAR_.call(null,inst_20086);
var state_20105__$1 = state_20105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20105__$1,(22),inst_20088,inst_20036);
} else {
if((state_val_20106 === (11))){
var inst_20060 = (state_20105[(10)]);
var inst_20046 = (state_20105[(16)]);
var inst_20060__$1 = cljs.core.seq.call(null,inst_20046);
var state_20105__$1 = (function (){var statearr_20129 = state_20105;
(statearr_20129[(10)] = inst_20060__$1);

return statearr_20129;
})();
if(inst_20060__$1){
var statearr_20130_20172 = state_20105__$1;
(statearr_20130_20172[(1)] = (13));

} else {
var statearr_20131_20173 = state_20105__$1;
(statearr_20131_20173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (9))){
var inst_20082 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20132_20174 = state_20105__$1;
(statearr_20132_20174[(2)] = inst_20082);

(statearr_20132_20174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (5))){
var inst_20043 = cljs.core.deref.call(null,mults);
var inst_20044 = cljs.core.vals.call(null,inst_20043);
var inst_20045 = cljs.core.seq.call(null,inst_20044);
var inst_20046 = inst_20045;
var inst_20047 = null;
var inst_20048 = (0);
var inst_20049 = (0);
var state_20105__$1 = (function (){var statearr_20133 = state_20105;
(statearr_20133[(12)] = inst_20049);

(statearr_20133[(14)] = inst_20048);

(statearr_20133[(15)] = inst_20047);

(statearr_20133[(16)] = inst_20046);

return statearr_20133;
})();
var statearr_20134_20175 = state_20105__$1;
(statearr_20134_20175[(2)] = null);

(statearr_20134_20175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (14))){
var state_20105__$1 = state_20105;
var statearr_20138_20176 = state_20105__$1;
(statearr_20138_20176[(2)] = null);

(statearr_20138_20176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (16))){
var inst_20060 = (state_20105[(10)]);
var inst_20064 = cljs.core.chunk_first.call(null,inst_20060);
var inst_20065 = cljs.core.chunk_rest.call(null,inst_20060);
var inst_20066 = cljs.core.count.call(null,inst_20064);
var inst_20046 = inst_20065;
var inst_20047 = inst_20064;
var inst_20048 = inst_20066;
var inst_20049 = (0);
var state_20105__$1 = (function (){var statearr_20139 = state_20105;
(statearr_20139[(12)] = inst_20049);

(statearr_20139[(14)] = inst_20048);

(statearr_20139[(15)] = inst_20047);

(statearr_20139[(16)] = inst_20046);

return statearr_20139;
})();
var statearr_20140_20177 = state_20105__$1;
(statearr_20140_20177[(2)] = null);

(statearr_20140_20177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (10))){
var inst_20049 = (state_20105[(12)]);
var inst_20048 = (state_20105[(14)]);
var inst_20047 = (state_20105[(15)]);
var inst_20046 = (state_20105[(16)]);
var inst_20054 = cljs.core._nth.call(null,inst_20047,inst_20049);
var inst_20055 = cljs.core.async.muxch_STAR_.call(null,inst_20054);
var inst_20056 = cljs.core.async.close_BANG_.call(null,inst_20055);
var inst_20057 = (inst_20049 + (1));
var tmp20135 = inst_20048;
var tmp20136 = inst_20047;
var tmp20137 = inst_20046;
var inst_20046__$1 = tmp20137;
var inst_20047__$1 = tmp20136;
var inst_20048__$1 = tmp20135;
var inst_20049__$1 = inst_20057;
var state_20105__$1 = (function (){var statearr_20141 = state_20105;
(statearr_20141[(12)] = inst_20049__$1);

(statearr_20141[(14)] = inst_20048__$1);

(statearr_20141[(17)] = inst_20056);

(statearr_20141[(15)] = inst_20047__$1);

(statearr_20141[(16)] = inst_20046__$1);

return statearr_20141;
})();
var statearr_20142_20178 = state_20105__$1;
(statearr_20142_20178[(2)] = null);

(statearr_20142_20178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (18))){
var inst_20075 = (state_20105[(2)]);
var state_20105__$1 = state_20105;
var statearr_20143_20179 = state_20105__$1;
(statearr_20143_20179[(2)] = inst_20075);

(statearr_20143_20179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20106 === (8))){
var inst_20049 = (state_20105[(12)]);
var inst_20048 = (state_20105[(14)]);
var inst_20051 = (inst_20049 < inst_20048);
var inst_20052 = inst_20051;
var state_20105__$1 = state_20105;
if(cljs.core.truth_(inst_20052)){
var statearr_20144_20180 = state_20105__$1;
(statearr_20144_20180[(1)] = (10));

} else {
var statearr_20145_20181 = state_20105__$1;
(statearr_20145_20181[(1)] = (11));

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
});})(c__6642__auto___20153,mults,ensure_mult,p))
;
return ((function (switch__6586__auto__,c__6642__auto___20153,mults,ensure_mult,p){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_20149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20149[(0)] = state_machine__6587__auto__);

(statearr_20149[(1)] = (1));

return statearr_20149;
});
var state_machine__6587__auto____1 = (function (state_20105){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_20105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e20150){if((e20150 instanceof Object)){
var ex__6590__auto__ = e20150;
var statearr_20151_20182 = state_20105;
(statearr_20151_20182[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20183 = state_20105;
state_20105 = G__20183;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_20105){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_20105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___20153,mults,ensure_mult,p))
})();
var state__6644__auto__ = (function (){var statearr_20152 = f__6643__auto__.call(null);
(statearr_20152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___20153);

return statearr_20152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___20153,mults,ensure_mult,p))
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
var c__6642__auto___20320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___20320,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___20320,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20290){
var state_val_20291 = (state_20290[(1)]);
if((state_val_20291 === (7))){
var state_20290__$1 = state_20290;
var statearr_20292_20321 = state_20290__$1;
(statearr_20292_20321[(2)] = null);

(statearr_20292_20321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (1))){
var state_20290__$1 = state_20290;
var statearr_20293_20322 = state_20290__$1;
(statearr_20293_20322[(2)] = null);

(statearr_20293_20322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (4))){
var inst_20254 = (state_20290[(7)]);
var inst_20256 = (inst_20254 < cnt);
var state_20290__$1 = state_20290;
if(cljs.core.truth_(inst_20256)){
var statearr_20294_20323 = state_20290__$1;
(statearr_20294_20323[(1)] = (6));

} else {
var statearr_20295_20324 = state_20290__$1;
(statearr_20295_20324[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (15))){
var inst_20286 = (state_20290[(2)]);
var state_20290__$1 = state_20290;
var statearr_20296_20325 = state_20290__$1;
(statearr_20296_20325[(2)] = inst_20286);

(statearr_20296_20325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (13))){
var inst_20279 = cljs.core.async.close_BANG_.call(null,out);
var state_20290__$1 = state_20290;
var statearr_20297_20326 = state_20290__$1;
(statearr_20297_20326[(2)] = inst_20279);

(statearr_20297_20326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (6))){
var state_20290__$1 = state_20290;
var statearr_20298_20327 = state_20290__$1;
(statearr_20298_20327[(2)] = null);

(statearr_20298_20327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (3))){
var inst_20288 = (state_20290[(2)]);
var state_20290__$1 = state_20290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20290__$1,inst_20288);
} else {
if((state_val_20291 === (12))){
var inst_20276 = (state_20290[(8)]);
var inst_20276__$1 = (state_20290[(2)]);
var inst_20277 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20276__$1);
var state_20290__$1 = (function (){var statearr_20299 = state_20290;
(statearr_20299[(8)] = inst_20276__$1);

return statearr_20299;
})();
if(cljs.core.truth_(inst_20277)){
var statearr_20300_20328 = state_20290__$1;
(statearr_20300_20328[(1)] = (13));

} else {
var statearr_20301_20329 = state_20290__$1;
(statearr_20301_20329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (2))){
var inst_20253 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20254 = (0);
var state_20290__$1 = (function (){var statearr_20302 = state_20290;
(statearr_20302[(7)] = inst_20254);

(statearr_20302[(9)] = inst_20253);

return statearr_20302;
})();
var statearr_20303_20330 = state_20290__$1;
(statearr_20303_20330[(2)] = null);

(statearr_20303_20330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (11))){
var inst_20254 = (state_20290[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20290,(10),Object,null,(9));
var inst_20263 = chs__$1.call(null,inst_20254);
var inst_20264 = done.call(null,inst_20254);
var inst_20265 = cljs.core.async.take_BANG_.call(null,inst_20263,inst_20264);
var state_20290__$1 = state_20290;
var statearr_20304_20331 = state_20290__$1;
(statearr_20304_20331[(2)] = inst_20265);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20290__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (9))){
var inst_20254 = (state_20290[(7)]);
var inst_20267 = (state_20290[(2)]);
var inst_20268 = (inst_20254 + (1));
var inst_20254__$1 = inst_20268;
var state_20290__$1 = (function (){var statearr_20305 = state_20290;
(statearr_20305[(7)] = inst_20254__$1);

(statearr_20305[(10)] = inst_20267);

return statearr_20305;
})();
var statearr_20306_20332 = state_20290__$1;
(statearr_20306_20332[(2)] = null);

(statearr_20306_20332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (5))){
var inst_20274 = (state_20290[(2)]);
var state_20290__$1 = (function (){var statearr_20307 = state_20290;
(statearr_20307[(11)] = inst_20274);

return statearr_20307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20290__$1,(12),dchan);
} else {
if((state_val_20291 === (14))){
var inst_20276 = (state_20290[(8)]);
var inst_20281 = cljs.core.apply.call(null,f,inst_20276);
var state_20290__$1 = state_20290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20290__$1,(16),out,inst_20281);
} else {
if((state_val_20291 === (16))){
var inst_20283 = (state_20290[(2)]);
var state_20290__$1 = (function (){var statearr_20308 = state_20290;
(statearr_20308[(12)] = inst_20283);

return statearr_20308;
})();
var statearr_20309_20333 = state_20290__$1;
(statearr_20309_20333[(2)] = null);

(statearr_20309_20333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (10))){
var inst_20258 = (state_20290[(2)]);
var inst_20259 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20290__$1 = (function (){var statearr_20310 = state_20290;
(statearr_20310[(13)] = inst_20258);

return statearr_20310;
})();
var statearr_20311_20334 = state_20290__$1;
(statearr_20311_20334[(2)] = inst_20259);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20290__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (8))){
var inst_20272 = (state_20290[(2)]);
var state_20290__$1 = state_20290;
var statearr_20312_20335 = state_20290__$1;
(statearr_20312_20335[(2)] = inst_20272);

(statearr_20312_20335[(1)] = (5));


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
});})(c__6642__auto___20320,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6586__auto__,c__6642__auto___20320,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_20316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20316[(0)] = state_machine__6587__auto__);

(statearr_20316[(1)] = (1));

return statearr_20316;
});
var state_machine__6587__auto____1 = (function (state_20290){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_20290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e20317){if((e20317 instanceof Object)){
var ex__6590__auto__ = e20317;
var statearr_20318_20336 = state_20290;
(statearr_20318_20336[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20337 = state_20290;
state_20290 = G__20337;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_20290){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_20290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___20320,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6644__auto__ = (function (){var statearr_20319 = f__6643__auto__.call(null);
(statearr_20319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___20320);

return statearr_20319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___20320,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6642__auto___20445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___20445,out){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___20445,out){
return (function (state_20421){
var state_val_20422 = (state_20421[(1)]);
if((state_val_20422 === (7))){
var inst_20400 = (state_20421[(7)]);
var inst_20401 = (state_20421[(8)]);
var inst_20400__$1 = (state_20421[(2)]);
var inst_20401__$1 = cljs.core.nth.call(null,inst_20400__$1,(0),null);
var inst_20402 = cljs.core.nth.call(null,inst_20400__$1,(1),null);
var inst_20403 = (inst_20401__$1 == null);
var state_20421__$1 = (function (){var statearr_20423 = state_20421;
(statearr_20423[(9)] = inst_20402);

(statearr_20423[(7)] = inst_20400__$1);

(statearr_20423[(8)] = inst_20401__$1);

return statearr_20423;
})();
if(cljs.core.truth_(inst_20403)){
var statearr_20424_20446 = state_20421__$1;
(statearr_20424_20446[(1)] = (8));

} else {
var statearr_20425_20447 = state_20421__$1;
(statearr_20425_20447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20422 === (1))){
var inst_20392 = cljs.core.vec.call(null,chs);
var inst_20393 = inst_20392;
var state_20421__$1 = (function (){var statearr_20426 = state_20421;
(statearr_20426[(10)] = inst_20393);

return statearr_20426;
})();
var statearr_20427_20448 = state_20421__$1;
(statearr_20427_20448[(2)] = null);

(statearr_20427_20448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20422 === (4))){
var inst_20393 = (state_20421[(10)]);
var state_20421__$1 = state_20421;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20421__$1,(7),inst_20393);
} else {
if((state_val_20422 === (6))){
var inst_20417 = (state_20421[(2)]);
var state_20421__$1 = state_20421;
var statearr_20428_20449 = state_20421__$1;
(statearr_20428_20449[(2)] = inst_20417);

(statearr_20428_20449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20422 === (3))){
var inst_20419 = (state_20421[(2)]);
var state_20421__$1 = state_20421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20421__$1,inst_20419);
} else {
if((state_val_20422 === (2))){
var inst_20393 = (state_20421[(10)]);
var inst_20395 = cljs.core.count.call(null,inst_20393);
var inst_20396 = (inst_20395 > (0));
var state_20421__$1 = state_20421;
if(cljs.core.truth_(inst_20396)){
var statearr_20430_20450 = state_20421__$1;
(statearr_20430_20450[(1)] = (4));

} else {
var statearr_20431_20451 = state_20421__$1;
(statearr_20431_20451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20422 === (11))){
var inst_20393 = (state_20421[(10)]);
var inst_20410 = (state_20421[(2)]);
var tmp20429 = inst_20393;
var inst_20393__$1 = tmp20429;
var state_20421__$1 = (function (){var statearr_20432 = state_20421;
(statearr_20432[(10)] = inst_20393__$1);

(statearr_20432[(11)] = inst_20410);

return statearr_20432;
})();
var statearr_20433_20452 = state_20421__$1;
(statearr_20433_20452[(2)] = null);

(statearr_20433_20452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20422 === (9))){
var inst_20401 = (state_20421[(8)]);
var state_20421__$1 = state_20421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20421__$1,(11),out,inst_20401);
} else {
if((state_val_20422 === (5))){
var inst_20415 = cljs.core.async.close_BANG_.call(null,out);
var state_20421__$1 = state_20421;
var statearr_20434_20453 = state_20421__$1;
(statearr_20434_20453[(2)] = inst_20415);

(statearr_20434_20453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20422 === (10))){
var inst_20413 = (state_20421[(2)]);
var state_20421__$1 = state_20421;
var statearr_20435_20454 = state_20421__$1;
(statearr_20435_20454[(2)] = inst_20413);

(statearr_20435_20454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20422 === (8))){
var inst_20402 = (state_20421[(9)]);
var inst_20393 = (state_20421[(10)]);
var inst_20400 = (state_20421[(7)]);
var inst_20401 = (state_20421[(8)]);
var inst_20405 = (function (){var c = inst_20402;
var v = inst_20401;
var vec__20398 = inst_20400;
var cs = inst_20393;
return ((function (c,v,vec__20398,cs,inst_20402,inst_20393,inst_20400,inst_20401,state_val_20422,c__6642__auto___20445,out){
return (function (p1__20338_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20338_SHARP_);
});
;})(c,v,vec__20398,cs,inst_20402,inst_20393,inst_20400,inst_20401,state_val_20422,c__6642__auto___20445,out))
})();
var inst_20406 = cljs.core.filterv.call(null,inst_20405,inst_20393);
var inst_20393__$1 = inst_20406;
var state_20421__$1 = (function (){var statearr_20436 = state_20421;
(statearr_20436[(10)] = inst_20393__$1);

return statearr_20436;
})();
var statearr_20437_20455 = state_20421__$1;
(statearr_20437_20455[(2)] = null);

(statearr_20437_20455[(1)] = (2));


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
});})(c__6642__auto___20445,out))
;
return ((function (switch__6586__auto__,c__6642__auto___20445,out){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_20441 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20441[(0)] = state_machine__6587__auto__);

(statearr_20441[(1)] = (1));

return statearr_20441;
});
var state_machine__6587__auto____1 = (function (state_20421){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_20421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e20442){if((e20442 instanceof Object)){
var ex__6590__auto__ = e20442;
var statearr_20443_20456 = state_20421;
(statearr_20443_20456[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20457 = state_20421;
state_20421 = G__20457;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_20421){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_20421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___20445,out))
})();
var state__6644__auto__ = (function (){var statearr_20444 = f__6643__auto__.call(null);
(statearr_20444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___20445);

return statearr_20444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___20445,out))
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
var c__6642__auto___20550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___20550,out){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___20550,out){
return (function (state_20527){
var state_val_20528 = (state_20527[(1)]);
if((state_val_20528 === (7))){
var inst_20509 = (state_20527[(7)]);
var inst_20509__$1 = (state_20527[(2)]);
var inst_20510 = (inst_20509__$1 == null);
var inst_20511 = cljs.core.not.call(null,inst_20510);
var state_20527__$1 = (function (){var statearr_20529 = state_20527;
(statearr_20529[(7)] = inst_20509__$1);

return statearr_20529;
})();
if(inst_20511){
var statearr_20530_20551 = state_20527__$1;
(statearr_20530_20551[(1)] = (8));

} else {
var statearr_20531_20552 = state_20527__$1;
(statearr_20531_20552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20528 === (1))){
var inst_20504 = (0);
var state_20527__$1 = (function (){var statearr_20532 = state_20527;
(statearr_20532[(8)] = inst_20504);

return statearr_20532;
})();
var statearr_20533_20553 = state_20527__$1;
(statearr_20533_20553[(2)] = null);

(statearr_20533_20553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20528 === (4))){
var state_20527__$1 = state_20527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20527__$1,(7),ch);
} else {
if((state_val_20528 === (6))){
var inst_20522 = (state_20527[(2)]);
var state_20527__$1 = state_20527;
var statearr_20534_20554 = state_20527__$1;
(statearr_20534_20554[(2)] = inst_20522);

(statearr_20534_20554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20528 === (3))){
var inst_20524 = (state_20527[(2)]);
var inst_20525 = cljs.core.async.close_BANG_.call(null,out);
var state_20527__$1 = (function (){var statearr_20535 = state_20527;
(statearr_20535[(9)] = inst_20524);

return statearr_20535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20527__$1,inst_20525);
} else {
if((state_val_20528 === (2))){
var inst_20504 = (state_20527[(8)]);
var inst_20506 = (inst_20504 < n);
var state_20527__$1 = state_20527;
if(cljs.core.truth_(inst_20506)){
var statearr_20536_20555 = state_20527__$1;
(statearr_20536_20555[(1)] = (4));

} else {
var statearr_20537_20556 = state_20527__$1;
(statearr_20537_20556[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20528 === (11))){
var inst_20504 = (state_20527[(8)]);
var inst_20514 = (state_20527[(2)]);
var inst_20515 = (inst_20504 + (1));
var inst_20504__$1 = inst_20515;
var state_20527__$1 = (function (){var statearr_20538 = state_20527;
(statearr_20538[(10)] = inst_20514);

(statearr_20538[(8)] = inst_20504__$1);

return statearr_20538;
})();
var statearr_20539_20557 = state_20527__$1;
(statearr_20539_20557[(2)] = null);

(statearr_20539_20557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20528 === (9))){
var state_20527__$1 = state_20527;
var statearr_20540_20558 = state_20527__$1;
(statearr_20540_20558[(2)] = null);

(statearr_20540_20558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20528 === (5))){
var state_20527__$1 = state_20527;
var statearr_20541_20559 = state_20527__$1;
(statearr_20541_20559[(2)] = null);

(statearr_20541_20559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20528 === (10))){
var inst_20519 = (state_20527[(2)]);
var state_20527__$1 = state_20527;
var statearr_20542_20560 = state_20527__$1;
(statearr_20542_20560[(2)] = inst_20519);

(statearr_20542_20560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20528 === (8))){
var inst_20509 = (state_20527[(7)]);
var state_20527__$1 = state_20527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20527__$1,(11),out,inst_20509);
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
});})(c__6642__auto___20550,out))
;
return ((function (switch__6586__auto__,c__6642__auto___20550,out){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_20546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20546[(0)] = state_machine__6587__auto__);

(statearr_20546[(1)] = (1));

return statearr_20546;
});
var state_machine__6587__auto____1 = (function (state_20527){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_20527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e20547){if((e20547 instanceof Object)){
var ex__6590__auto__ = e20547;
var statearr_20548_20561 = state_20527;
(statearr_20548_20561[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20562 = state_20527;
state_20527 = G__20562;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_20527){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_20527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___20550,out))
})();
var state__6644__auto__ = (function (){var statearr_20549 = f__6643__auto__.call(null);
(statearr_20549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___20550);

return statearr_20549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___20550,out))
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
if(typeof cljs.core.async.t20570 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20570 = (function (ch,f,map_LT_,meta20571){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20571 = meta20571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20570.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t20570.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t20573 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20573 = (function (fn1,_,meta20571,map_LT_,f,ch,meta20574){
this.fn1 = fn1;
this._ = _;
this.meta20571 = meta20571;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20574 = meta20574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20573.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t20573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20563_SHARP_){
return f1.call(null,(((p1__20563_SHARP_ == null))?null:self__.f.call(null,p1__20563_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20575){
var self__ = this;
var _20575__$1 = this;
return self__.meta20574;
});})(___$1))
;

cljs.core.async.t20573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20575,meta20574__$1){
var self__ = this;
var _20575__$1 = this;
return (new cljs.core.async.t20573(self__.fn1,self__._,self__.meta20571,self__.map_LT_,self__.f,self__.ch,meta20574__$1));
});})(___$1))
;

cljs.core.async.t20573.cljs$lang$type = true;

cljs.core.async.t20573.cljs$lang$ctorStr = "cljs.core.async/t20573";

cljs.core.async.t20573.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t20573");
});})(___$1))
;

cljs.core.async.__GT_t20573 = ((function (___$1){
return (function __GT_t20573(fn1__$1,___$2,meta20571__$1,map_LT___$1,f__$1,ch__$1,meta20574){
return (new cljs.core.async.t20573(fn1__$1,___$2,meta20571__$1,map_LT___$1,f__$1,ch__$1,meta20574));
});})(___$1))
;

}

return (new cljs.core.async.t20573(fn1,___$1,self__.meta20571,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3852__auto__ = ret;
if(cljs.core.truth_(and__3852__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3852__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t20570.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20570.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20572){
var self__ = this;
var _20572__$1 = this;
return self__.meta20571;
});

cljs.core.async.t20570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20572,meta20571__$1){
var self__ = this;
var _20572__$1 = this;
return (new cljs.core.async.t20570(self__.ch,self__.f,self__.map_LT_,meta20571__$1));
});

cljs.core.async.t20570.cljs$lang$type = true;

cljs.core.async.t20570.cljs$lang$ctorStr = "cljs.core.async/t20570";

cljs.core.async.t20570.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t20570");
});

cljs.core.async.__GT_t20570 = (function __GT_t20570(ch__$1,f__$1,map_LT___$1,meta20571){
return (new cljs.core.async.t20570(ch__$1,f__$1,map_LT___$1,meta20571));
});

}

return (new cljs.core.async.t20570(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t20579 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20579 = (function (ch,f,map_GT_,meta20580){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20580 = meta20580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t20579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20579.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20581){
var self__ = this;
var _20581__$1 = this;
return self__.meta20580;
});

cljs.core.async.t20579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20581,meta20580__$1){
var self__ = this;
var _20581__$1 = this;
return (new cljs.core.async.t20579(self__.ch,self__.f,self__.map_GT_,meta20580__$1));
});

cljs.core.async.t20579.cljs$lang$type = true;

cljs.core.async.t20579.cljs$lang$ctorStr = "cljs.core.async/t20579";

cljs.core.async.t20579.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t20579");
});

cljs.core.async.__GT_t20579 = (function __GT_t20579(ch__$1,f__$1,map_GT___$1,meta20580){
return (new cljs.core.async.t20579(ch__$1,f__$1,map_GT___$1,meta20580));
});

}

return (new cljs.core.async.t20579(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t20585 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20585 = (function (ch,p,filter_GT_,meta20586){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20586 = meta20586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t20585.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t20585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20587){
var self__ = this;
var _20587__$1 = this;
return self__.meta20586;
});

cljs.core.async.t20585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20587,meta20586__$1){
var self__ = this;
var _20587__$1 = this;
return (new cljs.core.async.t20585(self__.ch,self__.p,self__.filter_GT_,meta20586__$1));
});

cljs.core.async.t20585.cljs$lang$type = true;

cljs.core.async.t20585.cljs$lang$ctorStr = "cljs.core.async/t20585";

cljs.core.async.t20585.cljs$lang$ctorPrWriter = (function (this__4451__auto__,writer__4452__auto__,opt__4453__auto__){
return cljs.core._write.call(null,writer__4452__auto__,"cljs.core.async/t20585");
});

cljs.core.async.__GT_t20585 = (function __GT_t20585(ch__$1,p__$1,filter_GT___$1,meta20586){
return (new cljs.core.async.t20585(ch__$1,p__$1,filter_GT___$1,meta20586));
});

}

return (new cljs.core.async.t20585(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6642__auto___20670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___20670,out){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___20670,out){
return (function (state_20649){
var state_val_20650 = (state_20649[(1)]);
if((state_val_20650 === (7))){
var inst_20645 = (state_20649[(2)]);
var state_20649__$1 = state_20649;
var statearr_20651_20671 = state_20649__$1;
(statearr_20651_20671[(2)] = inst_20645);

(statearr_20651_20671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20650 === (1))){
var state_20649__$1 = state_20649;
var statearr_20652_20672 = state_20649__$1;
(statearr_20652_20672[(2)] = null);

(statearr_20652_20672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20650 === (4))){
var inst_20631 = (state_20649[(7)]);
var inst_20631__$1 = (state_20649[(2)]);
var inst_20632 = (inst_20631__$1 == null);
var state_20649__$1 = (function (){var statearr_20653 = state_20649;
(statearr_20653[(7)] = inst_20631__$1);

return statearr_20653;
})();
if(cljs.core.truth_(inst_20632)){
var statearr_20654_20673 = state_20649__$1;
(statearr_20654_20673[(1)] = (5));

} else {
var statearr_20655_20674 = state_20649__$1;
(statearr_20655_20674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20650 === (6))){
var inst_20631 = (state_20649[(7)]);
var inst_20636 = p.call(null,inst_20631);
var state_20649__$1 = state_20649;
if(cljs.core.truth_(inst_20636)){
var statearr_20656_20675 = state_20649__$1;
(statearr_20656_20675[(1)] = (8));

} else {
var statearr_20657_20676 = state_20649__$1;
(statearr_20657_20676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20650 === (3))){
var inst_20647 = (state_20649[(2)]);
var state_20649__$1 = state_20649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20649__$1,inst_20647);
} else {
if((state_val_20650 === (2))){
var state_20649__$1 = state_20649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20649__$1,(4),ch);
} else {
if((state_val_20650 === (11))){
var inst_20639 = (state_20649[(2)]);
var state_20649__$1 = state_20649;
var statearr_20658_20677 = state_20649__$1;
(statearr_20658_20677[(2)] = inst_20639);

(statearr_20658_20677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20650 === (9))){
var state_20649__$1 = state_20649;
var statearr_20659_20678 = state_20649__$1;
(statearr_20659_20678[(2)] = null);

(statearr_20659_20678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20650 === (5))){
var inst_20634 = cljs.core.async.close_BANG_.call(null,out);
var state_20649__$1 = state_20649;
var statearr_20660_20679 = state_20649__$1;
(statearr_20660_20679[(2)] = inst_20634);

(statearr_20660_20679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20650 === (10))){
var inst_20642 = (state_20649[(2)]);
var state_20649__$1 = (function (){var statearr_20661 = state_20649;
(statearr_20661[(8)] = inst_20642);

return statearr_20661;
})();
var statearr_20662_20680 = state_20649__$1;
(statearr_20662_20680[(2)] = null);

(statearr_20662_20680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20650 === (8))){
var inst_20631 = (state_20649[(7)]);
var state_20649__$1 = state_20649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20649__$1,(11),out,inst_20631);
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
});})(c__6642__auto___20670,out))
;
return ((function (switch__6586__auto__,c__6642__auto___20670,out){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_20666 = [null,null,null,null,null,null,null,null,null];
(statearr_20666[(0)] = state_machine__6587__auto__);

(statearr_20666[(1)] = (1));

return statearr_20666;
});
var state_machine__6587__auto____1 = (function (state_20649){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_20649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e20667){if((e20667 instanceof Object)){
var ex__6590__auto__ = e20667;
var statearr_20668_20681 = state_20649;
(statearr_20668_20681[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20682 = state_20649;
state_20649 = G__20682;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_20649){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_20649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___20670,out))
})();
var state__6644__auto__ = (function (){var statearr_20669 = f__6643__auto__.call(null);
(statearr_20669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___20670);

return statearr_20669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___20670,out))
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
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_20848){
var state_val_20849 = (state_20848[(1)]);
if((state_val_20849 === (7))){
var inst_20844 = (state_20848[(2)]);
var state_20848__$1 = state_20848;
var statearr_20850_20891 = state_20848__$1;
(statearr_20850_20891[(2)] = inst_20844);

(statearr_20850_20891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (20))){
var inst_20814 = (state_20848[(7)]);
var inst_20825 = (state_20848[(2)]);
var inst_20826 = cljs.core.next.call(null,inst_20814);
var inst_20800 = inst_20826;
var inst_20801 = null;
var inst_20802 = (0);
var inst_20803 = (0);
var state_20848__$1 = (function (){var statearr_20851 = state_20848;
(statearr_20851[(8)] = inst_20802);

(statearr_20851[(9)] = inst_20803);

(statearr_20851[(10)] = inst_20801);

(statearr_20851[(11)] = inst_20825);

(statearr_20851[(12)] = inst_20800);

return statearr_20851;
})();
var statearr_20852_20892 = state_20848__$1;
(statearr_20852_20892[(2)] = null);

(statearr_20852_20892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (1))){
var state_20848__$1 = state_20848;
var statearr_20853_20893 = state_20848__$1;
(statearr_20853_20893[(2)] = null);

(statearr_20853_20893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (4))){
var inst_20789 = (state_20848[(13)]);
var inst_20789__$1 = (state_20848[(2)]);
var inst_20790 = (inst_20789__$1 == null);
var state_20848__$1 = (function (){var statearr_20854 = state_20848;
(statearr_20854[(13)] = inst_20789__$1);

return statearr_20854;
})();
if(cljs.core.truth_(inst_20790)){
var statearr_20855_20894 = state_20848__$1;
(statearr_20855_20894[(1)] = (5));

} else {
var statearr_20856_20895 = state_20848__$1;
(statearr_20856_20895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (15))){
var state_20848__$1 = state_20848;
var statearr_20860_20896 = state_20848__$1;
(statearr_20860_20896[(2)] = null);

(statearr_20860_20896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (21))){
var state_20848__$1 = state_20848;
var statearr_20861_20897 = state_20848__$1;
(statearr_20861_20897[(2)] = null);

(statearr_20861_20897[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (13))){
var inst_20802 = (state_20848[(8)]);
var inst_20803 = (state_20848[(9)]);
var inst_20801 = (state_20848[(10)]);
var inst_20800 = (state_20848[(12)]);
var inst_20810 = (state_20848[(2)]);
var inst_20811 = (inst_20803 + (1));
var tmp20857 = inst_20802;
var tmp20858 = inst_20801;
var tmp20859 = inst_20800;
var inst_20800__$1 = tmp20859;
var inst_20801__$1 = tmp20858;
var inst_20802__$1 = tmp20857;
var inst_20803__$1 = inst_20811;
var state_20848__$1 = (function (){var statearr_20862 = state_20848;
(statearr_20862[(8)] = inst_20802__$1);

(statearr_20862[(9)] = inst_20803__$1);

(statearr_20862[(10)] = inst_20801__$1);

(statearr_20862[(12)] = inst_20800__$1);

(statearr_20862[(14)] = inst_20810);

return statearr_20862;
})();
var statearr_20863_20898 = state_20848__$1;
(statearr_20863_20898[(2)] = null);

(statearr_20863_20898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (22))){
var state_20848__$1 = state_20848;
var statearr_20864_20899 = state_20848__$1;
(statearr_20864_20899[(2)] = null);

(statearr_20864_20899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (6))){
var inst_20789 = (state_20848[(13)]);
var inst_20798 = f.call(null,inst_20789);
var inst_20799 = cljs.core.seq.call(null,inst_20798);
var inst_20800 = inst_20799;
var inst_20801 = null;
var inst_20802 = (0);
var inst_20803 = (0);
var state_20848__$1 = (function (){var statearr_20865 = state_20848;
(statearr_20865[(8)] = inst_20802);

(statearr_20865[(9)] = inst_20803);

(statearr_20865[(10)] = inst_20801);

(statearr_20865[(12)] = inst_20800);

return statearr_20865;
})();
var statearr_20866_20900 = state_20848__$1;
(statearr_20866_20900[(2)] = null);

(statearr_20866_20900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (17))){
var inst_20814 = (state_20848[(7)]);
var inst_20818 = cljs.core.chunk_first.call(null,inst_20814);
var inst_20819 = cljs.core.chunk_rest.call(null,inst_20814);
var inst_20820 = cljs.core.count.call(null,inst_20818);
var inst_20800 = inst_20819;
var inst_20801 = inst_20818;
var inst_20802 = inst_20820;
var inst_20803 = (0);
var state_20848__$1 = (function (){var statearr_20867 = state_20848;
(statearr_20867[(8)] = inst_20802);

(statearr_20867[(9)] = inst_20803);

(statearr_20867[(10)] = inst_20801);

(statearr_20867[(12)] = inst_20800);

return statearr_20867;
})();
var statearr_20868_20901 = state_20848__$1;
(statearr_20868_20901[(2)] = null);

(statearr_20868_20901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (3))){
var inst_20846 = (state_20848[(2)]);
var state_20848__$1 = state_20848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20848__$1,inst_20846);
} else {
if((state_val_20849 === (12))){
var inst_20834 = (state_20848[(2)]);
var state_20848__$1 = state_20848;
var statearr_20869_20902 = state_20848__$1;
(statearr_20869_20902[(2)] = inst_20834);

(statearr_20869_20902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (2))){
var state_20848__$1 = state_20848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20848__$1,(4),in$);
} else {
if((state_val_20849 === (23))){
var inst_20842 = (state_20848[(2)]);
var state_20848__$1 = state_20848;
var statearr_20870_20903 = state_20848__$1;
(statearr_20870_20903[(2)] = inst_20842);

(statearr_20870_20903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (19))){
var inst_20829 = (state_20848[(2)]);
var state_20848__$1 = state_20848;
var statearr_20871_20904 = state_20848__$1;
(statearr_20871_20904[(2)] = inst_20829);

(statearr_20871_20904[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (11))){
var inst_20800 = (state_20848[(12)]);
var inst_20814 = (state_20848[(7)]);
var inst_20814__$1 = cljs.core.seq.call(null,inst_20800);
var state_20848__$1 = (function (){var statearr_20872 = state_20848;
(statearr_20872[(7)] = inst_20814__$1);

return statearr_20872;
})();
if(inst_20814__$1){
var statearr_20873_20905 = state_20848__$1;
(statearr_20873_20905[(1)] = (14));

} else {
var statearr_20874_20906 = state_20848__$1;
(statearr_20874_20906[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (9))){
var inst_20836 = (state_20848[(2)]);
var inst_20837 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20848__$1 = (function (){var statearr_20875 = state_20848;
(statearr_20875[(15)] = inst_20836);

return statearr_20875;
})();
if(cljs.core.truth_(inst_20837)){
var statearr_20876_20907 = state_20848__$1;
(statearr_20876_20907[(1)] = (21));

} else {
var statearr_20877_20908 = state_20848__$1;
(statearr_20877_20908[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (5))){
var inst_20792 = cljs.core.async.close_BANG_.call(null,out);
var state_20848__$1 = state_20848;
var statearr_20878_20909 = state_20848__$1;
(statearr_20878_20909[(2)] = inst_20792);

(statearr_20878_20909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (14))){
var inst_20814 = (state_20848[(7)]);
var inst_20816 = cljs.core.chunked_seq_QMARK_.call(null,inst_20814);
var state_20848__$1 = state_20848;
if(inst_20816){
var statearr_20879_20910 = state_20848__$1;
(statearr_20879_20910[(1)] = (17));

} else {
var statearr_20880_20911 = state_20848__$1;
(statearr_20880_20911[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (16))){
var inst_20832 = (state_20848[(2)]);
var state_20848__$1 = state_20848;
var statearr_20881_20912 = state_20848__$1;
(statearr_20881_20912[(2)] = inst_20832);

(statearr_20881_20912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20849 === (10))){
var inst_20803 = (state_20848[(9)]);
var inst_20801 = (state_20848[(10)]);
var inst_20808 = cljs.core._nth.call(null,inst_20801,inst_20803);
var state_20848__$1 = state_20848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20848__$1,(13),out,inst_20808);
} else {
if((state_val_20849 === (18))){
var inst_20814 = (state_20848[(7)]);
var inst_20823 = cljs.core.first.call(null,inst_20814);
var state_20848__$1 = state_20848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20848__$1,(20),out,inst_20823);
} else {
if((state_val_20849 === (8))){
var inst_20802 = (state_20848[(8)]);
var inst_20803 = (state_20848[(9)]);
var inst_20805 = (inst_20803 < inst_20802);
var inst_20806 = inst_20805;
var state_20848__$1 = state_20848;
if(cljs.core.truth_(inst_20806)){
var statearr_20882_20913 = state_20848__$1;
(statearr_20882_20913[(1)] = (10));

} else {
var statearr_20883_20914 = state_20848__$1;
(statearr_20883_20914[(1)] = (11));

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
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_20887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20887[(0)] = state_machine__6587__auto__);

(statearr_20887[(1)] = (1));

return statearr_20887;
});
var state_machine__6587__auto____1 = (function (state_20848){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_20848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e20888){if((e20888 instanceof Object)){
var ex__6590__auto__ = e20888;
var statearr_20889_20915 = state_20848;
(statearr_20889_20915[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20916 = state_20848;
state_20848 = G__20916;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_20848){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_20848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_20890 = f__6643__auto__.call(null);
(statearr_20890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_20890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
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
var c__6642__auto___21013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___21013,out){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___21013,out){
return (function (state_20988){
var state_val_20989 = (state_20988[(1)]);
if((state_val_20989 === (7))){
var inst_20983 = (state_20988[(2)]);
var state_20988__$1 = state_20988;
var statearr_20990_21014 = state_20988__$1;
(statearr_20990_21014[(2)] = inst_20983);

(statearr_20990_21014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20989 === (1))){
var inst_20965 = null;
var state_20988__$1 = (function (){var statearr_20991 = state_20988;
(statearr_20991[(7)] = inst_20965);

return statearr_20991;
})();
var statearr_20992_21015 = state_20988__$1;
(statearr_20992_21015[(2)] = null);

(statearr_20992_21015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20989 === (4))){
var inst_20968 = (state_20988[(8)]);
var inst_20968__$1 = (state_20988[(2)]);
var inst_20969 = (inst_20968__$1 == null);
var inst_20970 = cljs.core.not.call(null,inst_20969);
var state_20988__$1 = (function (){var statearr_20993 = state_20988;
(statearr_20993[(8)] = inst_20968__$1);

return statearr_20993;
})();
if(inst_20970){
var statearr_20994_21016 = state_20988__$1;
(statearr_20994_21016[(1)] = (5));

} else {
var statearr_20995_21017 = state_20988__$1;
(statearr_20995_21017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20989 === (6))){
var state_20988__$1 = state_20988;
var statearr_20996_21018 = state_20988__$1;
(statearr_20996_21018[(2)] = null);

(statearr_20996_21018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20989 === (3))){
var inst_20985 = (state_20988[(2)]);
var inst_20986 = cljs.core.async.close_BANG_.call(null,out);
var state_20988__$1 = (function (){var statearr_20997 = state_20988;
(statearr_20997[(9)] = inst_20985);

return statearr_20997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20988__$1,inst_20986);
} else {
if((state_val_20989 === (2))){
var state_20988__$1 = state_20988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20988__$1,(4),ch);
} else {
if((state_val_20989 === (11))){
var inst_20968 = (state_20988[(8)]);
var inst_20977 = (state_20988[(2)]);
var inst_20965 = inst_20968;
var state_20988__$1 = (function (){var statearr_20998 = state_20988;
(statearr_20998[(7)] = inst_20965);

(statearr_20998[(10)] = inst_20977);

return statearr_20998;
})();
var statearr_20999_21019 = state_20988__$1;
(statearr_20999_21019[(2)] = null);

(statearr_20999_21019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20989 === (9))){
var inst_20968 = (state_20988[(8)]);
var state_20988__$1 = state_20988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20988__$1,(11),out,inst_20968);
} else {
if((state_val_20989 === (5))){
var inst_20968 = (state_20988[(8)]);
var inst_20965 = (state_20988[(7)]);
var inst_20972 = cljs.core._EQ_.call(null,inst_20968,inst_20965);
var state_20988__$1 = state_20988;
if(inst_20972){
var statearr_21001_21020 = state_20988__$1;
(statearr_21001_21020[(1)] = (8));

} else {
var statearr_21002_21021 = state_20988__$1;
(statearr_21002_21021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20989 === (10))){
var inst_20980 = (state_20988[(2)]);
var state_20988__$1 = state_20988;
var statearr_21003_21022 = state_20988__$1;
(statearr_21003_21022[(2)] = inst_20980);

(statearr_21003_21022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20989 === (8))){
var inst_20965 = (state_20988[(7)]);
var tmp21000 = inst_20965;
var inst_20965__$1 = tmp21000;
var state_20988__$1 = (function (){var statearr_21004 = state_20988;
(statearr_21004[(7)] = inst_20965__$1);

return statearr_21004;
})();
var statearr_21005_21023 = state_20988__$1;
(statearr_21005_21023[(2)] = null);

(statearr_21005_21023[(1)] = (2));


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
});})(c__6642__auto___21013,out))
;
return ((function (switch__6586__auto__,c__6642__auto___21013,out){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_21009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21009[(0)] = state_machine__6587__auto__);

(statearr_21009[(1)] = (1));

return statearr_21009;
});
var state_machine__6587__auto____1 = (function (state_20988){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_20988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e21010){if((e21010 instanceof Object)){
var ex__6590__auto__ = e21010;
var statearr_21011_21024 = state_20988;
(statearr_21011_21024[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21025 = state_20988;
state_20988 = G__21025;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_20988){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_20988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___21013,out))
})();
var state__6644__auto__ = (function (){var statearr_21012 = f__6643__auto__.call(null);
(statearr_21012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___21013);

return statearr_21012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___21013,out))
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
var c__6642__auto___21160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___21160,out){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___21160,out){
return (function (state_21130){
var state_val_21131 = (state_21130[(1)]);
if((state_val_21131 === (7))){
var inst_21126 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21132_21161 = state_21130__$1;
(statearr_21132_21161[(2)] = inst_21126);

(statearr_21132_21161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (1))){
var inst_21093 = (new Array(n));
var inst_21094 = inst_21093;
var inst_21095 = (0);
var state_21130__$1 = (function (){var statearr_21133 = state_21130;
(statearr_21133[(7)] = inst_21094);

(statearr_21133[(8)] = inst_21095);

return statearr_21133;
})();
var statearr_21134_21162 = state_21130__$1;
(statearr_21134_21162[(2)] = null);

(statearr_21134_21162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (4))){
var inst_21098 = (state_21130[(9)]);
var inst_21098__$1 = (state_21130[(2)]);
var inst_21099 = (inst_21098__$1 == null);
var inst_21100 = cljs.core.not.call(null,inst_21099);
var state_21130__$1 = (function (){var statearr_21135 = state_21130;
(statearr_21135[(9)] = inst_21098__$1);

return statearr_21135;
})();
if(inst_21100){
var statearr_21136_21163 = state_21130__$1;
(statearr_21136_21163[(1)] = (5));

} else {
var statearr_21137_21164 = state_21130__$1;
(statearr_21137_21164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (15))){
var inst_21120 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21138_21165 = state_21130__$1;
(statearr_21138_21165[(2)] = inst_21120);

(statearr_21138_21165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (13))){
var state_21130__$1 = state_21130;
var statearr_21139_21166 = state_21130__$1;
(statearr_21139_21166[(2)] = null);

(statearr_21139_21166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (6))){
var inst_21095 = (state_21130[(8)]);
var inst_21116 = (inst_21095 > (0));
var state_21130__$1 = state_21130;
if(cljs.core.truth_(inst_21116)){
var statearr_21140_21167 = state_21130__$1;
(statearr_21140_21167[(1)] = (12));

} else {
var statearr_21141_21168 = state_21130__$1;
(statearr_21141_21168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (3))){
var inst_21128 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21130__$1,inst_21128);
} else {
if((state_val_21131 === (12))){
var inst_21094 = (state_21130[(7)]);
var inst_21118 = cljs.core.vec.call(null,inst_21094);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21130__$1,(15),out,inst_21118);
} else {
if((state_val_21131 === (2))){
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21130__$1,(4),ch);
} else {
if((state_val_21131 === (11))){
var inst_21110 = (state_21130[(2)]);
var inst_21111 = (new Array(n));
var inst_21094 = inst_21111;
var inst_21095 = (0);
var state_21130__$1 = (function (){var statearr_21142 = state_21130;
(statearr_21142[(7)] = inst_21094);

(statearr_21142[(8)] = inst_21095);

(statearr_21142[(10)] = inst_21110);

return statearr_21142;
})();
var statearr_21143_21169 = state_21130__$1;
(statearr_21143_21169[(2)] = null);

(statearr_21143_21169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (9))){
var inst_21094 = (state_21130[(7)]);
var inst_21108 = cljs.core.vec.call(null,inst_21094);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21130__$1,(11),out,inst_21108);
} else {
if((state_val_21131 === (5))){
var inst_21103 = (state_21130[(11)]);
var inst_21094 = (state_21130[(7)]);
var inst_21095 = (state_21130[(8)]);
var inst_21098 = (state_21130[(9)]);
var inst_21102 = (inst_21094[inst_21095] = inst_21098);
var inst_21103__$1 = (inst_21095 + (1));
var inst_21104 = (inst_21103__$1 < n);
var state_21130__$1 = (function (){var statearr_21144 = state_21130;
(statearr_21144[(11)] = inst_21103__$1);

(statearr_21144[(12)] = inst_21102);

return statearr_21144;
})();
if(cljs.core.truth_(inst_21104)){
var statearr_21145_21170 = state_21130__$1;
(statearr_21145_21170[(1)] = (8));

} else {
var statearr_21146_21171 = state_21130__$1;
(statearr_21146_21171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (14))){
var inst_21123 = (state_21130[(2)]);
var inst_21124 = cljs.core.async.close_BANG_.call(null,out);
var state_21130__$1 = (function (){var statearr_21148 = state_21130;
(statearr_21148[(13)] = inst_21123);

return statearr_21148;
})();
var statearr_21149_21172 = state_21130__$1;
(statearr_21149_21172[(2)] = inst_21124);

(statearr_21149_21172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (10))){
var inst_21114 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21150_21173 = state_21130__$1;
(statearr_21150_21173[(2)] = inst_21114);

(statearr_21150_21173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (8))){
var inst_21103 = (state_21130[(11)]);
var inst_21094 = (state_21130[(7)]);
var tmp21147 = inst_21094;
var inst_21094__$1 = tmp21147;
var inst_21095 = inst_21103;
var state_21130__$1 = (function (){var statearr_21151 = state_21130;
(statearr_21151[(7)] = inst_21094__$1);

(statearr_21151[(8)] = inst_21095);

return statearr_21151;
})();
var statearr_21152_21174 = state_21130__$1;
(statearr_21152_21174[(2)] = null);

(statearr_21152_21174[(1)] = (2));


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
});})(c__6642__auto___21160,out))
;
return ((function (switch__6586__auto__,c__6642__auto___21160,out){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_21156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21156[(0)] = state_machine__6587__auto__);

(statearr_21156[(1)] = (1));

return statearr_21156;
});
var state_machine__6587__auto____1 = (function (state_21130){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_21130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e21157){if((e21157 instanceof Object)){
var ex__6590__auto__ = e21157;
var statearr_21158_21175 = state_21130;
(statearr_21158_21175[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21176 = state_21130;
state_21130 = G__21176;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_21130){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_21130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___21160,out))
})();
var state__6644__auto__ = (function (){var statearr_21159 = f__6643__auto__.call(null);
(statearr_21159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___21160);

return statearr_21159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___21160,out))
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
var c__6642__auto___21319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto___21319,out){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto___21319,out){
return (function (state_21289){
var state_val_21290 = (state_21289[(1)]);
if((state_val_21290 === (7))){
var inst_21285 = (state_21289[(2)]);
var state_21289__$1 = state_21289;
var statearr_21291_21320 = state_21289__$1;
(statearr_21291_21320[(2)] = inst_21285);

(statearr_21291_21320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (1))){
var inst_21248 = [];
var inst_21249 = inst_21248;
var inst_21250 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21289__$1 = (function (){var statearr_21292 = state_21289;
(statearr_21292[(7)] = inst_21250);

(statearr_21292[(8)] = inst_21249);

return statearr_21292;
})();
var statearr_21293_21321 = state_21289__$1;
(statearr_21293_21321[(2)] = null);

(statearr_21293_21321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (4))){
var inst_21253 = (state_21289[(9)]);
var inst_21253__$1 = (state_21289[(2)]);
var inst_21254 = (inst_21253__$1 == null);
var inst_21255 = cljs.core.not.call(null,inst_21254);
var state_21289__$1 = (function (){var statearr_21294 = state_21289;
(statearr_21294[(9)] = inst_21253__$1);

return statearr_21294;
})();
if(inst_21255){
var statearr_21295_21322 = state_21289__$1;
(statearr_21295_21322[(1)] = (5));

} else {
var statearr_21296_21323 = state_21289__$1;
(statearr_21296_21323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (15))){
var inst_21279 = (state_21289[(2)]);
var state_21289__$1 = state_21289;
var statearr_21297_21324 = state_21289__$1;
(statearr_21297_21324[(2)] = inst_21279);

(statearr_21297_21324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (13))){
var state_21289__$1 = state_21289;
var statearr_21298_21325 = state_21289__$1;
(statearr_21298_21325[(2)] = null);

(statearr_21298_21325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (6))){
var inst_21249 = (state_21289[(8)]);
var inst_21274 = inst_21249.length;
var inst_21275 = (inst_21274 > (0));
var state_21289__$1 = state_21289;
if(cljs.core.truth_(inst_21275)){
var statearr_21299_21326 = state_21289__$1;
(statearr_21299_21326[(1)] = (12));

} else {
var statearr_21300_21327 = state_21289__$1;
(statearr_21300_21327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (3))){
var inst_21287 = (state_21289[(2)]);
var state_21289__$1 = state_21289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21289__$1,inst_21287);
} else {
if((state_val_21290 === (12))){
var inst_21249 = (state_21289[(8)]);
var inst_21277 = cljs.core.vec.call(null,inst_21249);
var state_21289__$1 = state_21289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21289__$1,(15),out,inst_21277);
} else {
if((state_val_21290 === (2))){
var state_21289__$1 = state_21289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21289__$1,(4),ch);
} else {
if((state_val_21290 === (11))){
var inst_21257 = (state_21289[(10)]);
var inst_21253 = (state_21289[(9)]);
var inst_21267 = (state_21289[(2)]);
var inst_21268 = [];
var inst_21269 = inst_21268.push(inst_21253);
var inst_21249 = inst_21268;
var inst_21250 = inst_21257;
var state_21289__$1 = (function (){var statearr_21301 = state_21289;
(statearr_21301[(7)] = inst_21250);

(statearr_21301[(11)] = inst_21269);

(statearr_21301[(12)] = inst_21267);

(statearr_21301[(8)] = inst_21249);

return statearr_21301;
})();
var statearr_21302_21328 = state_21289__$1;
(statearr_21302_21328[(2)] = null);

(statearr_21302_21328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (9))){
var inst_21249 = (state_21289[(8)]);
var inst_21265 = cljs.core.vec.call(null,inst_21249);
var state_21289__$1 = state_21289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21289__$1,(11),out,inst_21265);
} else {
if((state_val_21290 === (5))){
var inst_21250 = (state_21289[(7)]);
var inst_21257 = (state_21289[(10)]);
var inst_21253 = (state_21289[(9)]);
var inst_21257__$1 = f.call(null,inst_21253);
var inst_21258 = cljs.core._EQ_.call(null,inst_21257__$1,inst_21250);
var inst_21259 = cljs.core.keyword_identical_QMARK_.call(null,inst_21250,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21260 = (inst_21258) || (inst_21259);
var state_21289__$1 = (function (){var statearr_21303 = state_21289;
(statearr_21303[(10)] = inst_21257__$1);

return statearr_21303;
})();
if(cljs.core.truth_(inst_21260)){
var statearr_21304_21329 = state_21289__$1;
(statearr_21304_21329[(1)] = (8));

} else {
var statearr_21305_21330 = state_21289__$1;
(statearr_21305_21330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (14))){
var inst_21282 = (state_21289[(2)]);
var inst_21283 = cljs.core.async.close_BANG_.call(null,out);
var state_21289__$1 = (function (){var statearr_21307 = state_21289;
(statearr_21307[(13)] = inst_21282);

return statearr_21307;
})();
var statearr_21308_21331 = state_21289__$1;
(statearr_21308_21331[(2)] = inst_21283);

(statearr_21308_21331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (10))){
var inst_21272 = (state_21289[(2)]);
var state_21289__$1 = state_21289;
var statearr_21309_21332 = state_21289__$1;
(statearr_21309_21332[(2)] = inst_21272);

(statearr_21309_21332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (8))){
var inst_21257 = (state_21289[(10)]);
var inst_21249 = (state_21289[(8)]);
var inst_21253 = (state_21289[(9)]);
var inst_21262 = inst_21249.push(inst_21253);
var tmp21306 = inst_21249;
var inst_21249__$1 = tmp21306;
var inst_21250 = inst_21257;
var state_21289__$1 = (function (){var statearr_21310 = state_21289;
(statearr_21310[(7)] = inst_21250);

(statearr_21310[(14)] = inst_21262);

(statearr_21310[(8)] = inst_21249__$1);

return statearr_21310;
})();
var statearr_21311_21333 = state_21289__$1;
(statearr_21311_21333[(2)] = null);

(statearr_21311_21333[(1)] = (2));


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
});})(c__6642__auto___21319,out))
;
return ((function (switch__6586__auto__,c__6642__auto___21319,out){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_21315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21315[(0)] = state_machine__6587__auto__);

(statearr_21315[(1)] = (1));

return statearr_21315;
});
var state_machine__6587__auto____1 = (function (state_21289){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_21289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e21316){if((e21316 instanceof Object)){
var ex__6590__auto__ = e21316;
var statearr_21317_21334 = state_21289;
(statearr_21317_21334[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21335 = state_21289;
state_21289 = G__21335;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_21289){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_21289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto___21319,out))
})();
var state__6644__auto__ = (function (){var statearr_21318 = f__6643__auto__.call(null);
(statearr_21318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto___21319);

return statearr_21318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto___21319,out))
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

//# sourceMappingURL=async.js.map?rel=1435268444409