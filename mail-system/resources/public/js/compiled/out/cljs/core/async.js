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
if(typeof cljs.core.async.t29875 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29875 = (function (f,fn_handler,meta29876){
this.f = f;
this.fn_handler = fn_handler;
this.meta29876 = meta29876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29875.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29877){
var self__ = this;
var _29877__$1 = this;
return self__.meta29876;
});

cljs.core.async.t29875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29877,meta29876__$1){
var self__ = this;
var _29877__$1 = this;
return (new cljs.core.async.t29875(self__.f,self__.fn_handler,meta29876__$1));
});

cljs.core.async.t29875.cljs$lang$type = true;

cljs.core.async.t29875.cljs$lang$ctorStr = "cljs.core.async/t29875";

cljs.core.async.t29875.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t29875");
});

cljs.core.async.__GT_t29875 = (function __GT_t29875(f__$1,fn_handler__$1,meta29876){
return (new cljs.core.async.t29875(f__$1,fn_handler__$1,meta29876));
});

}

return (new cljs.core.async.t29875(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29879 = buff;
if(G__29879){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__29879.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29879.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29879);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29879);
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
var val_29880 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29880);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29880,ret){
return (function (){
return fn1.call(null,val_29880);
});})(val_29880,ret))
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
var n__17032__auto___29881 = n;
var x_29882 = (0);
while(true){
if((x_29882 < n__17032__auto___29881)){
(a[x_29882] = (0));

var G__29883 = (x_29882 + (1));
x_29882 = G__29883;
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

var G__29884 = (i + (1));
i = G__29884;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29888 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29888 = (function (flag,alt_flag,meta29889){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29889 = meta29889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29888.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29890){
var self__ = this;
var _29890__$1 = this;
return self__.meta29889;
});})(flag))
;

cljs.core.async.t29888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29890,meta29889__$1){
var self__ = this;
var _29890__$1 = this;
return (new cljs.core.async.t29888(self__.flag,self__.alt_flag,meta29889__$1));
});})(flag))
;

cljs.core.async.t29888.cljs$lang$type = true;

cljs.core.async.t29888.cljs$lang$ctorStr = "cljs.core.async/t29888";

cljs.core.async.t29888.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t29888");
});})(flag))
;

cljs.core.async.__GT_t29888 = ((function (flag){
return (function __GT_t29888(flag__$1,alt_flag__$1,meta29889){
return (new cljs.core.async.t29888(flag__$1,alt_flag__$1,meta29889));
});})(flag))
;

}

return (new cljs.core.async.t29888(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t29894 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29894 = (function (cb,flag,alt_handler,meta29895){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29895 = meta29895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29894.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29896){
var self__ = this;
var _29896__$1 = this;
return self__.meta29895;
});

cljs.core.async.t29894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29896,meta29895__$1){
var self__ = this;
var _29896__$1 = this;
return (new cljs.core.async.t29894(self__.cb,self__.flag,self__.alt_handler,meta29895__$1));
});

cljs.core.async.t29894.cljs$lang$type = true;

cljs.core.async.t29894.cljs$lang$ctorStr = "cljs.core.async/t29894";

cljs.core.async.t29894.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t29894");
});

cljs.core.async.__GT_t29894 = (function __GT_t29894(cb__$1,flag__$1,alt_handler__$1,meta29895){
return (new cljs.core.async.t29894(cb__$1,flag__$1,alt_handler__$1,meta29895));
});

}

return (new cljs.core.async.t29894(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29897_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29897_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29898_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29898_SHARP_,port], null));
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
var G__29899 = (i + (1));
i = G__29899;
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
var alts_BANG___delegate = function (ports,p__29900){
var map__29902 = p__29900;
var map__29902__$1 = ((cljs.core.seq_QMARK_.call(null,map__29902))?cljs.core.apply.call(null,cljs.core.hash_map,map__29902):map__29902);
var opts = map__29902__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__29900 = null;
if (arguments.length > 1) {
var G__29903__i = 0, G__29903__a = new Array(arguments.length -  1);
while (G__29903__i < G__29903__a.length) {G__29903__a[G__29903__i] = arguments[G__29903__i + 1]; ++G__29903__i;}
  p__29900 = new cljs.core.IndexedSeq(G__29903__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__29900);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29904){
var ports = cljs.core.first(arglist__29904);
var p__29900 = cljs.core.rest(arglist__29904);
return alts_BANG___delegate(ports,p__29900);
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
var c__18618__auto___29999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___29999){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___29999){
return (function (state_29975){
var state_val_29976 = (state_29975[(1)]);
if((state_val_29976 === (7))){
var inst_29971 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
var statearr_29977_30000 = state_29975__$1;
(statearr_29977_30000[(2)] = inst_29971);

(statearr_29977_30000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (1))){
var state_29975__$1 = state_29975;
var statearr_29978_30001 = state_29975__$1;
(statearr_29978_30001[(2)] = null);

(statearr_29978_30001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (4))){
var inst_29954 = (state_29975[(7)]);
var inst_29954__$1 = (state_29975[(2)]);
var inst_29955 = (inst_29954__$1 == null);
var state_29975__$1 = (function (){var statearr_29979 = state_29975;
(statearr_29979[(7)] = inst_29954__$1);

return statearr_29979;
})();
if(cljs.core.truth_(inst_29955)){
var statearr_29980_30002 = state_29975__$1;
(statearr_29980_30002[(1)] = (5));

} else {
var statearr_29981_30003 = state_29975__$1;
(statearr_29981_30003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (13))){
var state_29975__$1 = state_29975;
var statearr_29982_30004 = state_29975__$1;
(statearr_29982_30004[(2)] = null);

(statearr_29982_30004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (6))){
var inst_29954 = (state_29975[(7)]);
var state_29975__$1 = state_29975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29975__$1,(11),to,inst_29954);
} else {
if((state_val_29976 === (3))){
var inst_29973 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29975__$1,inst_29973);
} else {
if((state_val_29976 === (12))){
var state_29975__$1 = state_29975;
var statearr_29983_30005 = state_29975__$1;
(statearr_29983_30005[(2)] = null);

(statearr_29983_30005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (2))){
var state_29975__$1 = state_29975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29975__$1,(4),from);
} else {
if((state_val_29976 === (11))){
var inst_29964 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
if(cljs.core.truth_(inst_29964)){
var statearr_29984_30006 = state_29975__$1;
(statearr_29984_30006[(1)] = (12));

} else {
var statearr_29985_30007 = state_29975__$1;
(statearr_29985_30007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (9))){
var state_29975__$1 = state_29975;
var statearr_29986_30008 = state_29975__$1;
(statearr_29986_30008[(2)] = null);

(statearr_29986_30008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (5))){
var state_29975__$1 = state_29975;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29987_30009 = state_29975__$1;
(statearr_29987_30009[(1)] = (8));

} else {
var statearr_29988_30010 = state_29975__$1;
(statearr_29988_30010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (14))){
var inst_29969 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
var statearr_29989_30011 = state_29975__$1;
(statearr_29989_30011[(2)] = inst_29969);

(statearr_29989_30011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (10))){
var inst_29961 = (state_29975[(2)]);
var state_29975__$1 = state_29975;
var statearr_29990_30012 = state_29975__$1;
(statearr_29990_30012[(2)] = inst_29961);

(statearr_29990_30012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29976 === (8))){
var inst_29958 = cljs.core.async.close_BANG_.call(null,to);
var state_29975__$1 = state_29975;
var statearr_29991_30013 = state_29975__$1;
(statearr_29991_30013[(2)] = inst_29958);

(statearr_29991_30013[(1)] = (10));


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
});})(c__18618__auto___29999))
;
return ((function (switch__18562__auto__,c__18618__auto___29999){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_29995 = [null,null,null,null,null,null,null,null];
(statearr_29995[(0)] = state_machine__18563__auto__);

(statearr_29995[(1)] = (1));

return statearr_29995;
});
var state_machine__18563__auto____1 = (function (state_29975){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_29975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e29996){if((e29996 instanceof Object)){
var ex__18566__auto__ = e29996;
var statearr_29997_30014 = state_29975;
(statearr_29997_30014[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30015 = state_29975;
state_29975 = G__30015;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_29975){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_29975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___29999))
})();
var state__18620__auto__ = (function (){var statearr_29998 = f__18619__auto__.call(null);
(statearr_29998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___29999);

return statearr_29998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___29999))
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
return (function (p__30199){
var vec__30200 = p__30199;
var v = cljs.core.nth.call(null,vec__30200,(0),null);
var p = cljs.core.nth.call(null,vec__30200,(1),null);
var job = vec__30200;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18618__auto___30382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___30382,res,vec__30200,v,p,job,jobs,results){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___30382,res,vec__30200,v,p,job,jobs,results){
return (function (state_30205){
var state_val_30206 = (state_30205[(1)]);
if((state_val_30206 === (2))){
var inst_30202 = (state_30205[(2)]);
var inst_30203 = cljs.core.async.close_BANG_.call(null,res);
var state_30205__$1 = (function (){var statearr_30207 = state_30205;
(statearr_30207[(7)] = inst_30202);

return statearr_30207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30205__$1,inst_30203);
} else {
if((state_val_30206 === (1))){
var state_30205__$1 = state_30205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30205__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18618__auto___30382,res,vec__30200,v,p,job,jobs,results))
;
return ((function (switch__18562__auto__,c__18618__auto___30382,res,vec__30200,v,p,job,jobs,results){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30211 = [null,null,null,null,null,null,null,null];
(statearr_30211[(0)] = state_machine__18563__auto__);

(statearr_30211[(1)] = (1));

return statearr_30211;
});
var state_machine__18563__auto____1 = (function (state_30205){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30212){if((e30212 instanceof Object)){
var ex__18566__auto__ = e30212;
var statearr_30213_30383 = state_30205;
(statearr_30213_30383[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30384 = state_30205;
state_30205 = G__30384;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30205){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___30382,res,vec__30200,v,p,job,jobs,results))
})();
var state__18620__auto__ = (function (){var statearr_30214 = f__18619__auto__.call(null);
(statearr_30214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30382);

return statearr_30214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___30382,res,vec__30200,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30215){
var vec__30216 = p__30215;
var v = cljs.core.nth.call(null,vec__30216,(0),null);
var p = cljs.core.nth.call(null,vec__30216,(1),null);
var job = vec__30216;
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
var n__17032__auto___30385 = n;
var __30386 = (0);
while(true){
if((__30386 < n__17032__auto___30385)){
var G__30217_30387 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30217_30387) {
case "async":
var c__18618__auto___30389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30386,c__18618__auto___30389,G__30217_30387,n__17032__auto___30385,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (__30386,c__18618__auto___30389,G__30217_30387,n__17032__auto___30385,jobs,results,process,async){
return (function (state_30230){
var state_val_30231 = (state_30230[(1)]);
if((state_val_30231 === (7))){
var inst_30226 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
var statearr_30232_30390 = state_30230__$1;
(statearr_30232_30390[(2)] = inst_30226);

(statearr_30232_30390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (6))){
var state_30230__$1 = state_30230;
var statearr_30233_30391 = state_30230__$1;
(statearr_30233_30391[(2)] = null);

(statearr_30233_30391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (5))){
var state_30230__$1 = state_30230;
var statearr_30234_30392 = state_30230__$1;
(statearr_30234_30392[(2)] = null);

(statearr_30234_30392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (4))){
var inst_30220 = (state_30230[(2)]);
var inst_30221 = async.call(null,inst_30220);
var state_30230__$1 = state_30230;
if(cljs.core.truth_(inst_30221)){
var statearr_30235_30393 = state_30230__$1;
(statearr_30235_30393[(1)] = (5));

} else {
var statearr_30236_30394 = state_30230__$1;
(statearr_30236_30394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30231 === (3))){
var inst_30228 = (state_30230[(2)]);
var state_30230__$1 = state_30230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30230__$1,inst_30228);
} else {
if((state_val_30231 === (2))){
var state_30230__$1 = state_30230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30230__$1,(4),jobs);
} else {
if((state_val_30231 === (1))){
var state_30230__$1 = state_30230;
var statearr_30237_30395 = state_30230__$1;
(statearr_30237_30395[(2)] = null);

(statearr_30237_30395[(1)] = (2));


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
});})(__30386,c__18618__auto___30389,G__30217_30387,n__17032__auto___30385,jobs,results,process,async))
;
return ((function (__30386,switch__18562__auto__,c__18618__auto___30389,G__30217_30387,n__17032__auto___30385,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30241 = [null,null,null,null,null,null,null];
(statearr_30241[(0)] = state_machine__18563__auto__);

(statearr_30241[(1)] = (1));

return statearr_30241;
});
var state_machine__18563__auto____1 = (function (state_30230){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30242){if((e30242 instanceof Object)){
var ex__18566__auto__ = e30242;
var statearr_30243_30396 = state_30230;
(statearr_30243_30396[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30397 = state_30230;
state_30230 = G__30397;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30230){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(__30386,switch__18562__auto__,c__18618__auto___30389,G__30217_30387,n__17032__auto___30385,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_30244 = f__18619__auto__.call(null);
(statearr_30244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30389);

return statearr_30244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(__30386,c__18618__auto___30389,G__30217_30387,n__17032__auto___30385,jobs,results,process,async))
);


break;
case "compute":
var c__18618__auto___30398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30386,c__18618__auto___30398,G__30217_30387,n__17032__auto___30385,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (__30386,c__18618__auto___30398,G__30217_30387,n__17032__auto___30385,jobs,results,process,async){
return (function (state_30257){
var state_val_30258 = (state_30257[(1)]);
if((state_val_30258 === (7))){
var inst_30253 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30259_30399 = state_30257__$1;
(statearr_30259_30399[(2)] = inst_30253);

(statearr_30259_30399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (6))){
var state_30257__$1 = state_30257;
var statearr_30260_30400 = state_30257__$1;
(statearr_30260_30400[(2)] = null);

(statearr_30260_30400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (5))){
var state_30257__$1 = state_30257;
var statearr_30261_30401 = state_30257__$1;
(statearr_30261_30401[(2)] = null);

(statearr_30261_30401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (4))){
var inst_30247 = (state_30257[(2)]);
var inst_30248 = process.call(null,inst_30247);
var state_30257__$1 = state_30257;
if(cljs.core.truth_(inst_30248)){
var statearr_30262_30402 = state_30257__$1;
(statearr_30262_30402[(1)] = (5));

} else {
var statearr_30263_30403 = state_30257__$1;
(statearr_30263_30403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30258 === (3))){
var inst_30255 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30257__$1,inst_30255);
} else {
if((state_val_30258 === (2))){
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30257__$1,(4),jobs);
} else {
if((state_val_30258 === (1))){
var state_30257__$1 = state_30257;
var statearr_30264_30404 = state_30257__$1;
(statearr_30264_30404[(2)] = null);

(statearr_30264_30404[(1)] = (2));


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
});})(__30386,c__18618__auto___30398,G__30217_30387,n__17032__auto___30385,jobs,results,process,async))
;
return ((function (__30386,switch__18562__auto__,c__18618__auto___30398,G__30217_30387,n__17032__auto___30385,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30268 = [null,null,null,null,null,null,null];
(statearr_30268[(0)] = state_machine__18563__auto__);

(statearr_30268[(1)] = (1));

return statearr_30268;
});
var state_machine__18563__auto____1 = (function (state_30257){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30269){if((e30269 instanceof Object)){
var ex__18566__auto__ = e30269;
var statearr_30270_30405 = state_30257;
(statearr_30270_30405[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30406 = state_30257;
state_30257 = G__30406;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30257){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(__30386,switch__18562__auto__,c__18618__auto___30398,G__30217_30387,n__17032__auto___30385,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_30271 = f__18619__auto__.call(null);
(statearr_30271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30398);

return statearr_30271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(__30386,c__18618__auto___30398,G__30217_30387,n__17032__auto___30385,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30407 = (__30386 + (1));
__30386 = G__30407;
continue;
} else {
}
break;
}

var c__18618__auto___30408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___30408,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___30408,jobs,results,process,async){
return (function (state_30293){
var state_val_30294 = (state_30293[(1)]);
if((state_val_30294 === (9))){
var inst_30286 = (state_30293[(2)]);
var state_30293__$1 = (function (){var statearr_30295 = state_30293;
(statearr_30295[(7)] = inst_30286);

return statearr_30295;
})();
var statearr_30296_30409 = state_30293__$1;
(statearr_30296_30409[(2)] = null);

(statearr_30296_30409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (8))){
var inst_30279 = (state_30293[(8)]);
var inst_30284 = (state_30293[(2)]);
var state_30293__$1 = (function (){var statearr_30297 = state_30293;
(statearr_30297[(9)] = inst_30284);

return statearr_30297;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30293__$1,(9),results,inst_30279);
} else {
if((state_val_30294 === (7))){
var inst_30289 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30298_30410 = state_30293__$1;
(statearr_30298_30410[(2)] = inst_30289);

(statearr_30298_30410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (6))){
var inst_30279 = (state_30293[(8)]);
var inst_30274 = (state_30293[(10)]);
var inst_30279__$1 = cljs.core.async.chan.call(null,(1));
var inst_30280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30281 = [inst_30274,inst_30279__$1];
var inst_30282 = (new cljs.core.PersistentVector(null,2,(5),inst_30280,inst_30281,null));
var state_30293__$1 = (function (){var statearr_30299 = state_30293;
(statearr_30299[(8)] = inst_30279__$1);

return statearr_30299;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30293__$1,(8),jobs,inst_30282);
} else {
if((state_val_30294 === (5))){
var inst_30277 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30293__$1 = state_30293;
var statearr_30300_30411 = state_30293__$1;
(statearr_30300_30411[(2)] = inst_30277);

(statearr_30300_30411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (4))){
var inst_30274 = (state_30293[(10)]);
var inst_30274__$1 = (state_30293[(2)]);
var inst_30275 = (inst_30274__$1 == null);
var state_30293__$1 = (function (){var statearr_30301 = state_30293;
(statearr_30301[(10)] = inst_30274__$1);

return statearr_30301;
})();
if(cljs.core.truth_(inst_30275)){
var statearr_30302_30412 = state_30293__$1;
(statearr_30302_30412[(1)] = (5));

} else {
var statearr_30303_30413 = state_30293__$1;
(statearr_30303_30413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (3))){
var inst_30291 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30293__$1,inst_30291);
} else {
if((state_val_30294 === (2))){
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30293__$1,(4),from);
} else {
if((state_val_30294 === (1))){
var state_30293__$1 = state_30293;
var statearr_30304_30414 = state_30293__$1;
(statearr_30304_30414[(2)] = null);

(statearr_30304_30414[(1)] = (2));


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
});})(c__18618__auto___30408,jobs,results,process,async))
;
return ((function (switch__18562__auto__,c__18618__auto___30408,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30308[(0)] = state_machine__18563__auto__);

(statearr_30308[(1)] = (1));

return statearr_30308;
});
var state_machine__18563__auto____1 = (function (state_30293){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30309){if((e30309 instanceof Object)){
var ex__18566__auto__ = e30309;
var statearr_30310_30415 = state_30293;
(statearr_30310_30415[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30416 = state_30293;
state_30293 = G__30416;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30293){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___30408,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_30311 = f__18619__auto__.call(null);
(statearr_30311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30408);

return statearr_30311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___30408,jobs,results,process,async))
);


var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,jobs,results,process,async){
return (function (state_30349){
var state_val_30350 = (state_30349[(1)]);
if((state_val_30350 === (7))){
var inst_30345 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30351_30417 = state_30349__$1;
(statearr_30351_30417[(2)] = inst_30345);

(statearr_30351_30417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (20))){
var state_30349__$1 = state_30349;
var statearr_30352_30418 = state_30349__$1;
(statearr_30352_30418[(2)] = null);

(statearr_30352_30418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (1))){
var state_30349__$1 = state_30349;
var statearr_30353_30419 = state_30349__$1;
(statearr_30353_30419[(2)] = null);

(statearr_30353_30419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (4))){
var inst_30314 = (state_30349[(7)]);
var inst_30314__$1 = (state_30349[(2)]);
var inst_30315 = (inst_30314__$1 == null);
var state_30349__$1 = (function (){var statearr_30354 = state_30349;
(statearr_30354[(7)] = inst_30314__$1);

return statearr_30354;
})();
if(cljs.core.truth_(inst_30315)){
var statearr_30355_30420 = state_30349__$1;
(statearr_30355_30420[(1)] = (5));

} else {
var statearr_30356_30421 = state_30349__$1;
(statearr_30356_30421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (15))){
var inst_30327 = (state_30349[(8)]);
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30349__$1,(18),to,inst_30327);
} else {
if((state_val_30350 === (21))){
var inst_30340 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30357_30422 = state_30349__$1;
(statearr_30357_30422[(2)] = inst_30340);

(statearr_30357_30422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (13))){
var inst_30342 = (state_30349[(2)]);
var state_30349__$1 = (function (){var statearr_30358 = state_30349;
(statearr_30358[(9)] = inst_30342);

return statearr_30358;
})();
var statearr_30359_30423 = state_30349__$1;
(statearr_30359_30423[(2)] = null);

(statearr_30359_30423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (6))){
var inst_30314 = (state_30349[(7)]);
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30349__$1,(11),inst_30314);
} else {
if((state_val_30350 === (17))){
var inst_30335 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
if(cljs.core.truth_(inst_30335)){
var statearr_30360_30424 = state_30349__$1;
(statearr_30360_30424[(1)] = (19));

} else {
var statearr_30361_30425 = state_30349__$1;
(statearr_30361_30425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (3))){
var inst_30347 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30349__$1,inst_30347);
} else {
if((state_val_30350 === (12))){
var inst_30324 = (state_30349[(10)]);
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30349__$1,(14),inst_30324);
} else {
if((state_val_30350 === (2))){
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30349__$1,(4),results);
} else {
if((state_val_30350 === (19))){
var state_30349__$1 = state_30349;
var statearr_30362_30426 = state_30349__$1;
(statearr_30362_30426[(2)] = null);

(statearr_30362_30426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (11))){
var inst_30324 = (state_30349[(2)]);
var state_30349__$1 = (function (){var statearr_30363 = state_30349;
(statearr_30363[(10)] = inst_30324);

return statearr_30363;
})();
var statearr_30364_30427 = state_30349__$1;
(statearr_30364_30427[(2)] = null);

(statearr_30364_30427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (9))){
var state_30349__$1 = state_30349;
var statearr_30365_30428 = state_30349__$1;
(statearr_30365_30428[(2)] = null);

(statearr_30365_30428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (5))){
var state_30349__$1 = state_30349;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30366_30429 = state_30349__$1;
(statearr_30366_30429[(1)] = (8));

} else {
var statearr_30367_30430 = state_30349__$1;
(statearr_30367_30430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (14))){
var inst_30327 = (state_30349[(8)]);
var inst_30329 = (state_30349[(11)]);
var inst_30327__$1 = (state_30349[(2)]);
var inst_30328 = (inst_30327__$1 == null);
var inst_30329__$1 = cljs.core.not.call(null,inst_30328);
var state_30349__$1 = (function (){var statearr_30368 = state_30349;
(statearr_30368[(8)] = inst_30327__$1);

(statearr_30368[(11)] = inst_30329__$1);

return statearr_30368;
})();
if(inst_30329__$1){
var statearr_30369_30431 = state_30349__$1;
(statearr_30369_30431[(1)] = (15));

} else {
var statearr_30370_30432 = state_30349__$1;
(statearr_30370_30432[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (16))){
var inst_30329 = (state_30349[(11)]);
var state_30349__$1 = state_30349;
var statearr_30371_30433 = state_30349__$1;
(statearr_30371_30433[(2)] = inst_30329);

(statearr_30371_30433[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (10))){
var inst_30321 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30372_30434 = state_30349__$1;
(statearr_30372_30434[(2)] = inst_30321);

(statearr_30372_30434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (18))){
var inst_30332 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30373_30435 = state_30349__$1;
(statearr_30373_30435[(2)] = inst_30332);

(statearr_30373_30435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (8))){
var inst_30318 = cljs.core.async.close_BANG_.call(null,to);
var state_30349__$1 = state_30349;
var statearr_30374_30436 = state_30349__$1;
(statearr_30374_30436[(2)] = inst_30318);

(statearr_30374_30436[(1)] = (10));


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
var statearr_30378 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30378[(0)] = state_machine__18563__auto__);

(statearr_30378[(1)] = (1));

return statearr_30378;
});
var state_machine__18563__auto____1 = (function (state_30349){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30379){if((e30379 instanceof Object)){
var ex__18566__auto__ = e30379;
var statearr_30380_30437 = state_30349;
(statearr_30380_30437[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30438 = state_30349;
state_30349 = G__30438;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30349){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_30381 = f__18619__auto__.call(null);
(statearr_30381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_30381;
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
var c__18618__auto___30539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___30539,tc,fc){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___30539,tc,fc){
return (function (state_30514){
var state_val_30515 = (state_30514[(1)]);
if((state_val_30515 === (7))){
var inst_30510 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30516_30540 = state_30514__$1;
(statearr_30516_30540[(2)] = inst_30510);

(statearr_30516_30540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (1))){
var state_30514__$1 = state_30514;
var statearr_30517_30541 = state_30514__$1;
(statearr_30517_30541[(2)] = null);

(statearr_30517_30541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (4))){
var inst_30491 = (state_30514[(7)]);
var inst_30491__$1 = (state_30514[(2)]);
var inst_30492 = (inst_30491__$1 == null);
var state_30514__$1 = (function (){var statearr_30518 = state_30514;
(statearr_30518[(7)] = inst_30491__$1);

return statearr_30518;
})();
if(cljs.core.truth_(inst_30492)){
var statearr_30519_30542 = state_30514__$1;
(statearr_30519_30542[(1)] = (5));

} else {
var statearr_30520_30543 = state_30514__$1;
(statearr_30520_30543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (13))){
var state_30514__$1 = state_30514;
var statearr_30521_30544 = state_30514__$1;
(statearr_30521_30544[(2)] = null);

(statearr_30521_30544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (6))){
var inst_30491 = (state_30514[(7)]);
var inst_30497 = p.call(null,inst_30491);
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30497)){
var statearr_30522_30545 = state_30514__$1;
(statearr_30522_30545[(1)] = (9));

} else {
var statearr_30523_30546 = state_30514__$1;
(statearr_30523_30546[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (3))){
var inst_30512 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30514__$1,inst_30512);
} else {
if((state_val_30515 === (12))){
var state_30514__$1 = state_30514;
var statearr_30524_30547 = state_30514__$1;
(statearr_30524_30547[(2)] = null);

(statearr_30524_30547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (2))){
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30514__$1,(4),ch);
} else {
if((state_val_30515 === (11))){
var inst_30491 = (state_30514[(7)]);
var inst_30501 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30514__$1,(8),inst_30501,inst_30491);
} else {
if((state_val_30515 === (9))){
var state_30514__$1 = state_30514;
var statearr_30525_30548 = state_30514__$1;
(statearr_30525_30548[(2)] = tc);

(statearr_30525_30548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (5))){
var inst_30494 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30495 = cljs.core.async.close_BANG_.call(null,fc);
var state_30514__$1 = (function (){var statearr_30526 = state_30514;
(statearr_30526[(8)] = inst_30494);

return statearr_30526;
})();
var statearr_30527_30549 = state_30514__$1;
(statearr_30527_30549[(2)] = inst_30495);

(statearr_30527_30549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (14))){
var inst_30508 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30528_30550 = state_30514__$1;
(statearr_30528_30550[(2)] = inst_30508);

(statearr_30528_30550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (10))){
var state_30514__$1 = state_30514;
var statearr_30529_30551 = state_30514__$1;
(statearr_30529_30551[(2)] = fc);

(statearr_30529_30551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (8))){
var inst_30503 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30503)){
var statearr_30530_30552 = state_30514__$1;
(statearr_30530_30552[(1)] = (12));

} else {
var statearr_30531_30553 = state_30514__$1;
(statearr_30531_30553[(1)] = (13));

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
});})(c__18618__auto___30539,tc,fc))
;
return ((function (switch__18562__auto__,c__18618__auto___30539,tc,fc){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30535 = [null,null,null,null,null,null,null,null,null];
(statearr_30535[(0)] = state_machine__18563__auto__);

(statearr_30535[(1)] = (1));

return statearr_30535;
});
var state_machine__18563__auto____1 = (function (state_30514){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30536){if((e30536 instanceof Object)){
var ex__18566__auto__ = e30536;
var statearr_30537_30554 = state_30514;
(statearr_30537_30554[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30555 = state_30514;
state_30514 = G__30555;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30514){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___30539,tc,fc))
})();
var state__18620__auto__ = (function (){var statearr_30538 = f__18619__auto__.call(null);
(statearr_30538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30539);

return statearr_30538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___30539,tc,fc))
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
return (function (state_30602){
var state_val_30603 = (state_30602[(1)]);
if((state_val_30603 === (7))){
var inst_30598 = (state_30602[(2)]);
var state_30602__$1 = state_30602;
var statearr_30604_30620 = state_30602__$1;
(statearr_30604_30620[(2)] = inst_30598);

(statearr_30604_30620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30603 === (6))){
var inst_30588 = (state_30602[(7)]);
var inst_30591 = (state_30602[(8)]);
var inst_30595 = f.call(null,inst_30588,inst_30591);
var inst_30588__$1 = inst_30595;
var state_30602__$1 = (function (){var statearr_30605 = state_30602;
(statearr_30605[(7)] = inst_30588__$1);

return statearr_30605;
})();
var statearr_30606_30621 = state_30602__$1;
(statearr_30606_30621[(2)] = null);

(statearr_30606_30621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30603 === (5))){
var inst_30588 = (state_30602[(7)]);
var state_30602__$1 = state_30602;
var statearr_30607_30622 = state_30602__$1;
(statearr_30607_30622[(2)] = inst_30588);

(statearr_30607_30622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30603 === (4))){
var inst_30591 = (state_30602[(8)]);
var inst_30591__$1 = (state_30602[(2)]);
var inst_30592 = (inst_30591__$1 == null);
var state_30602__$1 = (function (){var statearr_30608 = state_30602;
(statearr_30608[(8)] = inst_30591__$1);

return statearr_30608;
})();
if(cljs.core.truth_(inst_30592)){
var statearr_30609_30623 = state_30602__$1;
(statearr_30609_30623[(1)] = (5));

} else {
var statearr_30610_30624 = state_30602__$1;
(statearr_30610_30624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30603 === (3))){
var inst_30600 = (state_30602[(2)]);
var state_30602__$1 = state_30602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30602__$1,inst_30600);
} else {
if((state_val_30603 === (2))){
var state_30602__$1 = state_30602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30602__$1,(4),ch);
} else {
if((state_val_30603 === (1))){
var inst_30588 = init;
var state_30602__$1 = (function (){var statearr_30611 = state_30602;
(statearr_30611[(7)] = inst_30588);

return statearr_30611;
})();
var statearr_30612_30625 = state_30602__$1;
(statearr_30612_30625[(2)] = null);

(statearr_30612_30625[(1)] = (2));


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
var statearr_30616 = [null,null,null,null,null,null,null,null,null];
(statearr_30616[(0)] = state_machine__18563__auto__);

(statearr_30616[(1)] = (1));

return statearr_30616;
});
var state_machine__18563__auto____1 = (function (state_30602){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30617){if((e30617 instanceof Object)){
var ex__18566__auto__ = e30617;
var statearr_30618_30626 = state_30602;
(statearr_30618_30626[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30627 = state_30602;
state_30602 = G__30627;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30602){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_30619 = f__18619__auto__.call(null);
(statearr_30619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_30619;
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
return (function (state_30701){
var state_val_30702 = (state_30701[(1)]);
if((state_val_30702 === (7))){
var inst_30683 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30703_30726 = state_30701__$1;
(statearr_30703_30726[(2)] = inst_30683);

(statearr_30703_30726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (1))){
var inst_30677 = cljs.core.seq.call(null,coll);
var inst_30678 = inst_30677;
var state_30701__$1 = (function (){var statearr_30704 = state_30701;
(statearr_30704[(7)] = inst_30678);

return statearr_30704;
})();
var statearr_30705_30727 = state_30701__$1;
(statearr_30705_30727[(2)] = null);

(statearr_30705_30727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (4))){
var inst_30678 = (state_30701[(7)]);
var inst_30681 = cljs.core.first.call(null,inst_30678);
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30701__$1,(7),ch,inst_30681);
} else {
if((state_val_30702 === (13))){
var inst_30695 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30706_30728 = state_30701__$1;
(statearr_30706_30728[(2)] = inst_30695);

(statearr_30706_30728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (6))){
var inst_30686 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
if(cljs.core.truth_(inst_30686)){
var statearr_30707_30729 = state_30701__$1;
(statearr_30707_30729[(1)] = (8));

} else {
var statearr_30708_30730 = state_30701__$1;
(statearr_30708_30730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (3))){
var inst_30699 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30701__$1,inst_30699);
} else {
if((state_val_30702 === (12))){
var state_30701__$1 = state_30701;
var statearr_30709_30731 = state_30701__$1;
(statearr_30709_30731[(2)] = null);

(statearr_30709_30731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (2))){
var inst_30678 = (state_30701[(7)]);
var state_30701__$1 = state_30701;
if(cljs.core.truth_(inst_30678)){
var statearr_30710_30732 = state_30701__$1;
(statearr_30710_30732[(1)] = (4));

} else {
var statearr_30711_30733 = state_30701__$1;
(statearr_30711_30733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (11))){
var inst_30692 = cljs.core.async.close_BANG_.call(null,ch);
var state_30701__$1 = state_30701;
var statearr_30712_30734 = state_30701__$1;
(statearr_30712_30734[(2)] = inst_30692);

(statearr_30712_30734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (9))){
var state_30701__$1 = state_30701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30713_30735 = state_30701__$1;
(statearr_30713_30735[(1)] = (11));

} else {
var statearr_30714_30736 = state_30701__$1;
(statearr_30714_30736[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (5))){
var inst_30678 = (state_30701[(7)]);
var state_30701__$1 = state_30701;
var statearr_30715_30737 = state_30701__$1;
(statearr_30715_30737[(2)] = inst_30678);

(statearr_30715_30737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (10))){
var inst_30697 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30716_30738 = state_30701__$1;
(statearr_30716_30738[(2)] = inst_30697);

(statearr_30716_30738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (8))){
var inst_30678 = (state_30701[(7)]);
var inst_30688 = cljs.core.next.call(null,inst_30678);
var inst_30678__$1 = inst_30688;
var state_30701__$1 = (function (){var statearr_30717 = state_30701;
(statearr_30717[(7)] = inst_30678__$1);

return statearr_30717;
})();
var statearr_30718_30739 = state_30701__$1;
(statearr_30718_30739[(2)] = null);

(statearr_30718_30739[(1)] = (2));


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
var statearr_30722 = [null,null,null,null,null,null,null,null];
(statearr_30722[(0)] = state_machine__18563__auto__);

(statearr_30722[(1)] = (1));

return statearr_30722;
});
var state_machine__18563__auto____1 = (function (state_30701){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30723){if((e30723 instanceof Object)){
var ex__18566__auto__ = e30723;
var statearr_30724_30740 = state_30701;
(statearr_30724_30740[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30741 = state_30701;
state_30701 = G__30741;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30701){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_30725 = f__18619__auto__.call(null);
(statearr_30725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_30725;
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

cljs.core.async.Mux = (function (){var obj30743 = {};
return obj30743;
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


cljs.core.async.Mult = (function (){var obj30745 = {};
return obj30745;
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
if(typeof cljs.core.async.t30967 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30967 = (function (cs,ch,mult,meta30968){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30968 = meta30968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30967.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30967.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30967.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30967.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30967.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30967.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30969){
var self__ = this;
var _30969__$1 = this;
return self__.meta30968;
});})(cs))
;

cljs.core.async.t30967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30969,meta30968__$1){
var self__ = this;
var _30969__$1 = this;
return (new cljs.core.async.t30967(self__.cs,self__.ch,self__.mult,meta30968__$1));
});})(cs))
;

cljs.core.async.t30967.cljs$lang$type = true;

cljs.core.async.t30967.cljs$lang$ctorStr = "cljs.core.async/t30967";

cljs.core.async.t30967.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30967");
});})(cs))
;

cljs.core.async.__GT_t30967 = ((function (cs){
return (function __GT_t30967(cs__$1,ch__$1,mult__$1,meta30968){
return (new cljs.core.async.t30967(cs__$1,ch__$1,mult__$1,meta30968));
});})(cs))
;

}

return (new cljs.core.async.t30967(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18618__auto___31188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31188,cs,m,dchan,dctr,done){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31188,cs,m,dchan,dctr,done){
return (function (state_31100){
var state_val_31101 = (state_31100[(1)]);
if((state_val_31101 === (7))){
var inst_31096 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
var statearr_31102_31189 = state_31100__$1;
(statearr_31102_31189[(2)] = inst_31096);

(statearr_31102_31189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (20))){
var inst_31001 = (state_31100[(7)]);
var inst_31011 = cljs.core.first.call(null,inst_31001);
var inst_31012 = cljs.core.nth.call(null,inst_31011,(0),null);
var inst_31013 = cljs.core.nth.call(null,inst_31011,(1),null);
var state_31100__$1 = (function (){var statearr_31103 = state_31100;
(statearr_31103[(8)] = inst_31012);

return statearr_31103;
})();
if(cljs.core.truth_(inst_31013)){
var statearr_31104_31190 = state_31100__$1;
(statearr_31104_31190[(1)] = (22));

} else {
var statearr_31105_31191 = state_31100__$1;
(statearr_31105_31191[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (27))){
var inst_31048 = (state_31100[(9)]);
var inst_31043 = (state_31100[(10)]);
var inst_30972 = (state_31100[(11)]);
var inst_31041 = (state_31100[(12)]);
var inst_31048__$1 = cljs.core._nth.call(null,inst_31041,inst_31043);
var inst_31049 = cljs.core.async.put_BANG_.call(null,inst_31048__$1,inst_30972,done);
var state_31100__$1 = (function (){var statearr_31106 = state_31100;
(statearr_31106[(9)] = inst_31048__$1);

return statearr_31106;
})();
if(cljs.core.truth_(inst_31049)){
var statearr_31107_31192 = state_31100__$1;
(statearr_31107_31192[(1)] = (30));

} else {
var statearr_31108_31193 = state_31100__$1;
(statearr_31108_31193[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (1))){
var state_31100__$1 = state_31100;
var statearr_31109_31194 = state_31100__$1;
(statearr_31109_31194[(2)] = null);

(statearr_31109_31194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (24))){
var inst_31001 = (state_31100[(7)]);
var inst_31018 = (state_31100[(2)]);
var inst_31019 = cljs.core.next.call(null,inst_31001);
var inst_30981 = inst_31019;
var inst_30982 = null;
var inst_30983 = (0);
var inst_30984 = (0);
var state_31100__$1 = (function (){var statearr_31110 = state_31100;
(statearr_31110[(13)] = inst_31018);

(statearr_31110[(14)] = inst_30981);

(statearr_31110[(15)] = inst_30983);

(statearr_31110[(16)] = inst_30982);

(statearr_31110[(17)] = inst_30984);

return statearr_31110;
})();
var statearr_31111_31195 = state_31100__$1;
(statearr_31111_31195[(2)] = null);

(statearr_31111_31195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (39))){
var state_31100__$1 = state_31100;
var statearr_31115_31196 = state_31100__$1;
(statearr_31115_31196[(2)] = null);

(statearr_31115_31196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (4))){
var inst_30972 = (state_31100[(11)]);
var inst_30972__$1 = (state_31100[(2)]);
var inst_30973 = (inst_30972__$1 == null);
var state_31100__$1 = (function (){var statearr_31116 = state_31100;
(statearr_31116[(11)] = inst_30972__$1);

return statearr_31116;
})();
if(cljs.core.truth_(inst_30973)){
var statearr_31117_31197 = state_31100__$1;
(statearr_31117_31197[(1)] = (5));

} else {
var statearr_31118_31198 = state_31100__$1;
(statearr_31118_31198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (15))){
var inst_30981 = (state_31100[(14)]);
var inst_30983 = (state_31100[(15)]);
var inst_30982 = (state_31100[(16)]);
var inst_30984 = (state_31100[(17)]);
var inst_30997 = (state_31100[(2)]);
var inst_30998 = (inst_30984 + (1));
var tmp31112 = inst_30981;
var tmp31113 = inst_30983;
var tmp31114 = inst_30982;
var inst_30981__$1 = tmp31112;
var inst_30982__$1 = tmp31114;
var inst_30983__$1 = tmp31113;
var inst_30984__$1 = inst_30998;
var state_31100__$1 = (function (){var statearr_31119 = state_31100;
(statearr_31119[(14)] = inst_30981__$1);

(statearr_31119[(18)] = inst_30997);

(statearr_31119[(15)] = inst_30983__$1);

(statearr_31119[(16)] = inst_30982__$1);

(statearr_31119[(17)] = inst_30984__$1);

return statearr_31119;
})();
var statearr_31120_31199 = state_31100__$1;
(statearr_31120_31199[(2)] = null);

(statearr_31120_31199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (21))){
var inst_31022 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
var statearr_31124_31200 = state_31100__$1;
(statearr_31124_31200[(2)] = inst_31022);

(statearr_31124_31200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (31))){
var inst_31048 = (state_31100[(9)]);
var inst_31052 = done.call(null,null);
var inst_31053 = cljs.core.async.untap_STAR_.call(null,m,inst_31048);
var state_31100__$1 = (function (){var statearr_31125 = state_31100;
(statearr_31125[(19)] = inst_31052);

return statearr_31125;
})();
var statearr_31126_31201 = state_31100__$1;
(statearr_31126_31201[(2)] = inst_31053);

(statearr_31126_31201[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (32))){
var inst_31043 = (state_31100[(10)]);
var inst_31040 = (state_31100[(20)]);
var inst_31041 = (state_31100[(12)]);
var inst_31042 = (state_31100[(21)]);
var inst_31055 = (state_31100[(2)]);
var inst_31056 = (inst_31043 + (1));
var tmp31121 = inst_31040;
var tmp31122 = inst_31041;
var tmp31123 = inst_31042;
var inst_31040__$1 = tmp31121;
var inst_31041__$1 = tmp31122;
var inst_31042__$1 = tmp31123;
var inst_31043__$1 = inst_31056;
var state_31100__$1 = (function (){var statearr_31127 = state_31100;
(statearr_31127[(10)] = inst_31043__$1);

(statearr_31127[(20)] = inst_31040__$1);

(statearr_31127[(12)] = inst_31041__$1);

(statearr_31127[(22)] = inst_31055);

(statearr_31127[(21)] = inst_31042__$1);

return statearr_31127;
})();
var statearr_31128_31202 = state_31100__$1;
(statearr_31128_31202[(2)] = null);

(statearr_31128_31202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (40))){
var inst_31068 = (state_31100[(23)]);
var inst_31072 = done.call(null,null);
var inst_31073 = cljs.core.async.untap_STAR_.call(null,m,inst_31068);
var state_31100__$1 = (function (){var statearr_31129 = state_31100;
(statearr_31129[(24)] = inst_31072);

return statearr_31129;
})();
var statearr_31130_31203 = state_31100__$1;
(statearr_31130_31203[(2)] = inst_31073);

(statearr_31130_31203[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (33))){
var inst_31059 = (state_31100[(25)]);
var inst_31061 = cljs.core.chunked_seq_QMARK_.call(null,inst_31059);
var state_31100__$1 = state_31100;
if(inst_31061){
var statearr_31131_31204 = state_31100__$1;
(statearr_31131_31204[(1)] = (36));

} else {
var statearr_31132_31205 = state_31100__$1;
(statearr_31132_31205[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (13))){
var inst_30991 = (state_31100[(26)]);
var inst_30994 = cljs.core.async.close_BANG_.call(null,inst_30991);
var state_31100__$1 = state_31100;
var statearr_31133_31206 = state_31100__$1;
(statearr_31133_31206[(2)] = inst_30994);

(statearr_31133_31206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (22))){
var inst_31012 = (state_31100[(8)]);
var inst_31015 = cljs.core.async.close_BANG_.call(null,inst_31012);
var state_31100__$1 = state_31100;
var statearr_31134_31207 = state_31100__$1;
(statearr_31134_31207[(2)] = inst_31015);

(statearr_31134_31207[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (36))){
var inst_31059 = (state_31100[(25)]);
var inst_31063 = cljs.core.chunk_first.call(null,inst_31059);
var inst_31064 = cljs.core.chunk_rest.call(null,inst_31059);
var inst_31065 = cljs.core.count.call(null,inst_31063);
var inst_31040 = inst_31064;
var inst_31041 = inst_31063;
var inst_31042 = inst_31065;
var inst_31043 = (0);
var state_31100__$1 = (function (){var statearr_31135 = state_31100;
(statearr_31135[(10)] = inst_31043);

(statearr_31135[(20)] = inst_31040);

(statearr_31135[(12)] = inst_31041);

(statearr_31135[(21)] = inst_31042);

return statearr_31135;
})();
var statearr_31136_31208 = state_31100__$1;
(statearr_31136_31208[(2)] = null);

(statearr_31136_31208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (41))){
var inst_31059 = (state_31100[(25)]);
var inst_31075 = (state_31100[(2)]);
var inst_31076 = cljs.core.next.call(null,inst_31059);
var inst_31040 = inst_31076;
var inst_31041 = null;
var inst_31042 = (0);
var inst_31043 = (0);
var state_31100__$1 = (function (){var statearr_31137 = state_31100;
(statearr_31137[(10)] = inst_31043);

(statearr_31137[(20)] = inst_31040);

(statearr_31137[(12)] = inst_31041);

(statearr_31137[(27)] = inst_31075);

(statearr_31137[(21)] = inst_31042);

return statearr_31137;
})();
var statearr_31138_31209 = state_31100__$1;
(statearr_31138_31209[(2)] = null);

(statearr_31138_31209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (43))){
var state_31100__$1 = state_31100;
var statearr_31139_31210 = state_31100__$1;
(statearr_31139_31210[(2)] = null);

(statearr_31139_31210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (29))){
var inst_31084 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
var statearr_31140_31211 = state_31100__$1;
(statearr_31140_31211[(2)] = inst_31084);

(statearr_31140_31211[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (44))){
var inst_31093 = (state_31100[(2)]);
var state_31100__$1 = (function (){var statearr_31141 = state_31100;
(statearr_31141[(28)] = inst_31093);

return statearr_31141;
})();
var statearr_31142_31212 = state_31100__$1;
(statearr_31142_31212[(2)] = null);

(statearr_31142_31212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (6))){
var inst_31032 = (state_31100[(29)]);
var inst_31031 = cljs.core.deref.call(null,cs);
var inst_31032__$1 = cljs.core.keys.call(null,inst_31031);
var inst_31033 = cljs.core.count.call(null,inst_31032__$1);
var inst_31034 = cljs.core.reset_BANG_.call(null,dctr,inst_31033);
var inst_31039 = cljs.core.seq.call(null,inst_31032__$1);
var inst_31040 = inst_31039;
var inst_31041 = null;
var inst_31042 = (0);
var inst_31043 = (0);
var state_31100__$1 = (function (){var statearr_31143 = state_31100;
(statearr_31143[(10)] = inst_31043);

(statearr_31143[(30)] = inst_31034);

(statearr_31143[(20)] = inst_31040);

(statearr_31143[(29)] = inst_31032__$1);

(statearr_31143[(12)] = inst_31041);

(statearr_31143[(21)] = inst_31042);

return statearr_31143;
})();
var statearr_31144_31213 = state_31100__$1;
(statearr_31144_31213[(2)] = null);

(statearr_31144_31213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (28))){
var inst_31059 = (state_31100[(25)]);
var inst_31040 = (state_31100[(20)]);
var inst_31059__$1 = cljs.core.seq.call(null,inst_31040);
var state_31100__$1 = (function (){var statearr_31145 = state_31100;
(statearr_31145[(25)] = inst_31059__$1);

return statearr_31145;
})();
if(inst_31059__$1){
var statearr_31146_31214 = state_31100__$1;
(statearr_31146_31214[(1)] = (33));

} else {
var statearr_31147_31215 = state_31100__$1;
(statearr_31147_31215[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (25))){
var inst_31043 = (state_31100[(10)]);
var inst_31042 = (state_31100[(21)]);
var inst_31045 = (inst_31043 < inst_31042);
var inst_31046 = inst_31045;
var state_31100__$1 = state_31100;
if(cljs.core.truth_(inst_31046)){
var statearr_31148_31216 = state_31100__$1;
(statearr_31148_31216[(1)] = (27));

} else {
var statearr_31149_31217 = state_31100__$1;
(statearr_31149_31217[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (34))){
var state_31100__$1 = state_31100;
var statearr_31150_31218 = state_31100__$1;
(statearr_31150_31218[(2)] = null);

(statearr_31150_31218[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (17))){
var state_31100__$1 = state_31100;
var statearr_31151_31219 = state_31100__$1;
(statearr_31151_31219[(2)] = null);

(statearr_31151_31219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (3))){
var inst_31098 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31100__$1,inst_31098);
} else {
if((state_val_31101 === (12))){
var inst_31027 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
var statearr_31152_31220 = state_31100__$1;
(statearr_31152_31220[(2)] = inst_31027);

(statearr_31152_31220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (2))){
var state_31100__$1 = state_31100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31100__$1,(4),ch);
} else {
if((state_val_31101 === (23))){
var state_31100__$1 = state_31100;
var statearr_31153_31221 = state_31100__$1;
(statearr_31153_31221[(2)] = null);

(statearr_31153_31221[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (35))){
var inst_31082 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
var statearr_31154_31222 = state_31100__$1;
(statearr_31154_31222[(2)] = inst_31082);

(statearr_31154_31222[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (19))){
var inst_31001 = (state_31100[(7)]);
var inst_31005 = cljs.core.chunk_first.call(null,inst_31001);
var inst_31006 = cljs.core.chunk_rest.call(null,inst_31001);
var inst_31007 = cljs.core.count.call(null,inst_31005);
var inst_30981 = inst_31006;
var inst_30982 = inst_31005;
var inst_30983 = inst_31007;
var inst_30984 = (0);
var state_31100__$1 = (function (){var statearr_31155 = state_31100;
(statearr_31155[(14)] = inst_30981);

(statearr_31155[(15)] = inst_30983);

(statearr_31155[(16)] = inst_30982);

(statearr_31155[(17)] = inst_30984);

return statearr_31155;
})();
var statearr_31156_31223 = state_31100__$1;
(statearr_31156_31223[(2)] = null);

(statearr_31156_31223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (11))){
var inst_30981 = (state_31100[(14)]);
var inst_31001 = (state_31100[(7)]);
var inst_31001__$1 = cljs.core.seq.call(null,inst_30981);
var state_31100__$1 = (function (){var statearr_31157 = state_31100;
(statearr_31157[(7)] = inst_31001__$1);

return statearr_31157;
})();
if(inst_31001__$1){
var statearr_31158_31224 = state_31100__$1;
(statearr_31158_31224[(1)] = (16));

} else {
var statearr_31159_31225 = state_31100__$1;
(statearr_31159_31225[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (9))){
var inst_31029 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
var statearr_31160_31226 = state_31100__$1;
(statearr_31160_31226[(2)] = inst_31029);

(statearr_31160_31226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (5))){
var inst_30979 = cljs.core.deref.call(null,cs);
var inst_30980 = cljs.core.seq.call(null,inst_30979);
var inst_30981 = inst_30980;
var inst_30982 = null;
var inst_30983 = (0);
var inst_30984 = (0);
var state_31100__$1 = (function (){var statearr_31161 = state_31100;
(statearr_31161[(14)] = inst_30981);

(statearr_31161[(15)] = inst_30983);

(statearr_31161[(16)] = inst_30982);

(statearr_31161[(17)] = inst_30984);

return statearr_31161;
})();
var statearr_31162_31227 = state_31100__$1;
(statearr_31162_31227[(2)] = null);

(statearr_31162_31227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (14))){
var state_31100__$1 = state_31100;
var statearr_31163_31228 = state_31100__$1;
(statearr_31163_31228[(2)] = null);

(statearr_31163_31228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (45))){
var inst_31090 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
var statearr_31164_31229 = state_31100__$1;
(statearr_31164_31229[(2)] = inst_31090);

(statearr_31164_31229[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (26))){
var inst_31032 = (state_31100[(29)]);
var inst_31086 = (state_31100[(2)]);
var inst_31087 = cljs.core.seq.call(null,inst_31032);
var state_31100__$1 = (function (){var statearr_31165 = state_31100;
(statearr_31165[(31)] = inst_31086);

return statearr_31165;
})();
if(inst_31087){
var statearr_31166_31230 = state_31100__$1;
(statearr_31166_31230[(1)] = (42));

} else {
var statearr_31167_31231 = state_31100__$1;
(statearr_31167_31231[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (16))){
var inst_31001 = (state_31100[(7)]);
var inst_31003 = cljs.core.chunked_seq_QMARK_.call(null,inst_31001);
var state_31100__$1 = state_31100;
if(inst_31003){
var statearr_31168_31232 = state_31100__$1;
(statearr_31168_31232[(1)] = (19));

} else {
var statearr_31169_31233 = state_31100__$1;
(statearr_31169_31233[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (38))){
var inst_31079 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
var statearr_31170_31234 = state_31100__$1;
(statearr_31170_31234[(2)] = inst_31079);

(statearr_31170_31234[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (30))){
var state_31100__$1 = state_31100;
var statearr_31171_31235 = state_31100__$1;
(statearr_31171_31235[(2)] = null);

(statearr_31171_31235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (10))){
var inst_30982 = (state_31100[(16)]);
var inst_30984 = (state_31100[(17)]);
var inst_30990 = cljs.core._nth.call(null,inst_30982,inst_30984);
var inst_30991 = cljs.core.nth.call(null,inst_30990,(0),null);
var inst_30992 = cljs.core.nth.call(null,inst_30990,(1),null);
var state_31100__$1 = (function (){var statearr_31172 = state_31100;
(statearr_31172[(26)] = inst_30991);

return statearr_31172;
})();
if(cljs.core.truth_(inst_30992)){
var statearr_31173_31236 = state_31100__$1;
(statearr_31173_31236[(1)] = (13));

} else {
var statearr_31174_31237 = state_31100__$1;
(statearr_31174_31237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (18))){
var inst_31025 = (state_31100[(2)]);
var state_31100__$1 = state_31100;
var statearr_31175_31238 = state_31100__$1;
(statearr_31175_31238[(2)] = inst_31025);

(statearr_31175_31238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (42))){
var state_31100__$1 = state_31100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31100__$1,(45),dchan);
} else {
if((state_val_31101 === (37))){
var inst_30972 = (state_31100[(11)]);
var inst_31068 = (state_31100[(23)]);
var inst_31059 = (state_31100[(25)]);
var inst_31068__$1 = cljs.core.first.call(null,inst_31059);
var inst_31069 = cljs.core.async.put_BANG_.call(null,inst_31068__$1,inst_30972,done);
var state_31100__$1 = (function (){var statearr_31176 = state_31100;
(statearr_31176[(23)] = inst_31068__$1);

return statearr_31176;
})();
if(cljs.core.truth_(inst_31069)){
var statearr_31177_31239 = state_31100__$1;
(statearr_31177_31239[(1)] = (39));

} else {
var statearr_31178_31240 = state_31100__$1;
(statearr_31178_31240[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31101 === (8))){
var inst_30983 = (state_31100[(15)]);
var inst_30984 = (state_31100[(17)]);
var inst_30986 = (inst_30984 < inst_30983);
var inst_30987 = inst_30986;
var state_31100__$1 = state_31100;
if(cljs.core.truth_(inst_30987)){
var statearr_31179_31241 = state_31100__$1;
(statearr_31179_31241[(1)] = (10));

} else {
var statearr_31180_31242 = state_31100__$1;
(statearr_31180_31242[(1)] = (11));

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
});})(c__18618__auto___31188,cs,m,dchan,dctr,done))
;
return ((function (switch__18562__auto__,c__18618__auto___31188,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31184[(0)] = state_machine__18563__auto__);

(statearr_31184[(1)] = (1));

return statearr_31184;
});
var state_machine__18563__auto____1 = (function (state_31100){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31185){if((e31185 instanceof Object)){
var ex__18566__auto__ = e31185;
var statearr_31186_31243 = state_31100;
(statearr_31186_31243[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31244 = state_31100;
state_31100 = G__31244;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31100){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31188,cs,m,dchan,dctr,done))
})();
var state__18620__auto__ = (function (){var statearr_31187 = f__18619__auto__.call(null);
(statearr_31187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31188);

return statearr_31187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31188,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj31246 = {};
return obj31246;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31247){
var map__31252 = p__31247;
var map__31252__$1 = ((cljs.core.seq_QMARK_.call(null,map__31252))?cljs.core.apply.call(null,cljs.core.hash_map,map__31252):map__31252);
var opts = map__31252__$1;
var statearr_31253_31256 = state;
(statearr_31253_31256[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__31252,map__31252__$1,opts){
return (function (val){
var statearr_31254_31257 = state;
(statearr_31254_31257[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31252,map__31252__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_31255_31258 = state;
(statearr_31255_31258[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31247 = null;
if (arguments.length > 3) {
var G__31259__i = 0, G__31259__a = new Array(arguments.length -  3);
while (G__31259__i < G__31259__a.length) {G__31259__a[G__31259__i] = arguments[G__31259__i + 3]; ++G__31259__i;}
  p__31247 = new cljs.core.IndexedSeq(G__31259__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31247);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31260){
var state = cljs.core.first(arglist__31260);
arglist__31260 = cljs.core.next(arglist__31260);
var cont_block = cljs.core.first(arglist__31260);
arglist__31260 = cljs.core.next(arglist__31260);
var ports = cljs.core.first(arglist__31260);
var p__31247 = cljs.core.rest(arglist__31260);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31247);
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
if(typeof cljs.core.async.t31380 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31380 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31381){
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
this.meta31381 = meta31381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31380.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31380.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31380.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31380.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31380.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31380.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t31380.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31382){
var self__ = this;
var _31382__$1 = this;
return self__.meta31381;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31382,meta31381__$1){
var self__ = this;
var _31382__$1 = this;
return (new cljs.core.async.t31380(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31381__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31380.cljs$lang$type = true;

cljs.core.async.t31380.cljs$lang$ctorStr = "cljs.core.async/t31380";

cljs.core.async.t31380.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31380");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31380 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31380(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31381){
return (new cljs.core.async.t31380(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31381));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31380(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18618__auto___31499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31452){
var state_val_31453 = (state_31452[(1)]);
if((state_val_31453 === (7))){
var inst_31396 = (state_31452[(7)]);
var inst_31401 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31396);
var state_31452__$1 = state_31452;
var statearr_31454_31500 = state_31452__$1;
(statearr_31454_31500[(2)] = inst_31401);

(statearr_31454_31500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (20))){
var inst_31411 = (state_31452[(8)]);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31452__$1,(23),out,inst_31411);
} else {
if((state_val_31453 === (1))){
var inst_31386 = (state_31452[(9)]);
var inst_31386__$1 = calc_state.call(null);
var inst_31387 = cljs.core.seq_QMARK_.call(null,inst_31386__$1);
var state_31452__$1 = (function (){var statearr_31455 = state_31452;
(statearr_31455[(9)] = inst_31386__$1);

return statearr_31455;
})();
if(inst_31387){
var statearr_31456_31501 = state_31452__$1;
(statearr_31456_31501[(1)] = (2));

} else {
var statearr_31457_31502 = state_31452__$1;
(statearr_31457_31502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (24))){
var inst_31404 = (state_31452[(10)]);
var inst_31396 = inst_31404;
var state_31452__$1 = (function (){var statearr_31458 = state_31452;
(statearr_31458[(7)] = inst_31396);

return statearr_31458;
})();
var statearr_31459_31503 = state_31452__$1;
(statearr_31459_31503[(2)] = null);

(statearr_31459_31503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (4))){
var inst_31386 = (state_31452[(9)]);
var inst_31392 = (state_31452[(2)]);
var inst_31393 = cljs.core.get.call(null,inst_31392,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31394 = cljs.core.get.call(null,inst_31392,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31395 = cljs.core.get.call(null,inst_31392,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31396 = inst_31386;
var state_31452__$1 = (function (){var statearr_31460 = state_31452;
(statearr_31460[(11)] = inst_31394);

(statearr_31460[(12)] = inst_31393);

(statearr_31460[(7)] = inst_31396);

(statearr_31460[(13)] = inst_31395);

return statearr_31460;
})();
var statearr_31461_31504 = state_31452__$1;
(statearr_31461_31504[(2)] = null);

(statearr_31461_31504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (15))){
var state_31452__$1 = state_31452;
var statearr_31462_31505 = state_31452__$1;
(statearr_31462_31505[(2)] = null);

(statearr_31462_31505[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (21))){
var inst_31404 = (state_31452[(10)]);
var inst_31396 = inst_31404;
var state_31452__$1 = (function (){var statearr_31463 = state_31452;
(statearr_31463[(7)] = inst_31396);

return statearr_31463;
})();
var statearr_31464_31506 = state_31452__$1;
(statearr_31464_31506[(2)] = null);

(statearr_31464_31506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (13))){
var inst_31448 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31465_31507 = state_31452__$1;
(statearr_31465_31507[(2)] = inst_31448);

(statearr_31465_31507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (22))){
var inst_31446 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31466_31508 = state_31452__$1;
(statearr_31466_31508[(2)] = inst_31446);

(statearr_31466_31508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (6))){
var inst_31450 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31452__$1,inst_31450);
} else {
if((state_val_31453 === (25))){
var state_31452__$1 = state_31452;
var statearr_31467_31509 = state_31452__$1;
(statearr_31467_31509[(2)] = null);

(statearr_31467_31509[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (17))){
var inst_31426 = (state_31452[(14)]);
var state_31452__$1 = state_31452;
var statearr_31468_31510 = state_31452__$1;
(statearr_31468_31510[(2)] = inst_31426);

(statearr_31468_31510[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (3))){
var inst_31386 = (state_31452[(9)]);
var state_31452__$1 = state_31452;
var statearr_31469_31511 = state_31452__$1;
(statearr_31469_31511[(2)] = inst_31386);

(statearr_31469_31511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (12))){
var inst_31407 = (state_31452[(15)]);
var inst_31412 = (state_31452[(16)]);
var inst_31426 = (state_31452[(14)]);
var inst_31426__$1 = inst_31407.call(null,inst_31412);
var state_31452__$1 = (function (){var statearr_31470 = state_31452;
(statearr_31470[(14)] = inst_31426__$1);

return statearr_31470;
})();
if(cljs.core.truth_(inst_31426__$1)){
var statearr_31471_31512 = state_31452__$1;
(statearr_31471_31512[(1)] = (17));

} else {
var statearr_31472_31513 = state_31452__$1;
(statearr_31472_31513[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (2))){
var inst_31386 = (state_31452[(9)]);
var inst_31389 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31386);
var state_31452__$1 = state_31452;
var statearr_31473_31514 = state_31452__$1;
(statearr_31473_31514[(2)] = inst_31389);

(statearr_31473_31514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (23))){
var inst_31437 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31437)){
var statearr_31474_31515 = state_31452__$1;
(statearr_31474_31515[(1)] = (24));

} else {
var statearr_31475_31516 = state_31452__$1;
(statearr_31475_31516[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (19))){
var inst_31434 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31434)){
var statearr_31476_31517 = state_31452__$1;
(statearr_31476_31517[(1)] = (20));

} else {
var statearr_31477_31518 = state_31452__$1;
(statearr_31477_31518[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (11))){
var inst_31411 = (state_31452[(8)]);
var inst_31417 = (inst_31411 == null);
var state_31452__$1 = state_31452;
if(cljs.core.truth_(inst_31417)){
var statearr_31478_31519 = state_31452__$1;
(statearr_31478_31519[(1)] = (14));

} else {
var statearr_31479_31520 = state_31452__$1;
(statearr_31479_31520[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (9))){
var inst_31404 = (state_31452[(10)]);
var inst_31404__$1 = (state_31452[(2)]);
var inst_31405 = cljs.core.get.call(null,inst_31404__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31406 = cljs.core.get.call(null,inst_31404__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31407 = cljs.core.get.call(null,inst_31404__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31452__$1 = (function (){var statearr_31480 = state_31452;
(statearr_31480[(17)] = inst_31406);

(statearr_31480[(10)] = inst_31404__$1);

(statearr_31480[(15)] = inst_31407);

return statearr_31480;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31452__$1,(10),inst_31405);
} else {
if((state_val_31453 === (5))){
var inst_31396 = (state_31452[(7)]);
var inst_31399 = cljs.core.seq_QMARK_.call(null,inst_31396);
var state_31452__$1 = state_31452;
if(inst_31399){
var statearr_31481_31521 = state_31452__$1;
(statearr_31481_31521[(1)] = (7));

} else {
var statearr_31482_31522 = state_31452__$1;
(statearr_31482_31522[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (14))){
var inst_31412 = (state_31452[(16)]);
var inst_31419 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31412);
var state_31452__$1 = state_31452;
var statearr_31483_31523 = state_31452__$1;
(statearr_31483_31523[(2)] = inst_31419);

(statearr_31483_31523[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (26))){
var inst_31442 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31484_31524 = state_31452__$1;
(statearr_31484_31524[(2)] = inst_31442);

(statearr_31484_31524[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (16))){
var inst_31422 = (state_31452[(2)]);
var inst_31423 = calc_state.call(null);
var inst_31396 = inst_31423;
var state_31452__$1 = (function (){var statearr_31485 = state_31452;
(statearr_31485[(7)] = inst_31396);

(statearr_31485[(18)] = inst_31422);

return statearr_31485;
})();
var statearr_31486_31525 = state_31452__$1;
(statearr_31486_31525[(2)] = null);

(statearr_31486_31525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (10))){
var inst_31412 = (state_31452[(16)]);
var inst_31411 = (state_31452[(8)]);
var inst_31410 = (state_31452[(2)]);
var inst_31411__$1 = cljs.core.nth.call(null,inst_31410,(0),null);
var inst_31412__$1 = cljs.core.nth.call(null,inst_31410,(1),null);
var inst_31413 = (inst_31411__$1 == null);
var inst_31414 = cljs.core._EQ_.call(null,inst_31412__$1,change);
var inst_31415 = (inst_31413) || (inst_31414);
var state_31452__$1 = (function (){var statearr_31487 = state_31452;
(statearr_31487[(16)] = inst_31412__$1);

(statearr_31487[(8)] = inst_31411__$1);

return statearr_31487;
})();
if(cljs.core.truth_(inst_31415)){
var statearr_31488_31526 = state_31452__$1;
(statearr_31488_31526[(1)] = (11));

} else {
var statearr_31489_31527 = state_31452__$1;
(statearr_31489_31527[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (18))){
var inst_31406 = (state_31452[(17)]);
var inst_31407 = (state_31452[(15)]);
var inst_31412 = (state_31452[(16)]);
var inst_31429 = cljs.core.empty_QMARK_.call(null,inst_31407);
var inst_31430 = inst_31406.call(null,inst_31412);
var inst_31431 = cljs.core.not.call(null,inst_31430);
var inst_31432 = (inst_31429) && (inst_31431);
var state_31452__$1 = state_31452;
var statearr_31490_31528 = state_31452__$1;
(statearr_31490_31528[(2)] = inst_31432);

(statearr_31490_31528[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (8))){
var inst_31396 = (state_31452[(7)]);
var state_31452__$1 = state_31452;
var statearr_31491_31529 = state_31452__$1;
(statearr_31491_31529[(2)] = inst_31396);

(statearr_31491_31529[(1)] = (9));


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
});})(c__18618__auto___31499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18562__auto__,c__18618__auto___31499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31495[(0)] = state_machine__18563__auto__);

(statearr_31495[(1)] = (1));

return statearr_31495;
});
var state_machine__18563__auto____1 = (function (state_31452){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31496){if((e31496 instanceof Object)){
var ex__18566__auto__ = e31496;
var statearr_31497_31530 = state_31452;
(statearr_31497_31530[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31531 = state_31452;
state_31452 = G__31531;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31452){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18620__auto__ = (function (){var statearr_31498 = f__18619__auto__.call(null);
(statearr_31498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31499);

return statearr_31498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj31533 = {};
return obj31533;
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
return (function (p1__31534_SHARP_){
if(cljs.core.truth_(p1__31534_SHARP_.call(null,topic))){
return p1__31534_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31534_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31657 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31657 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31658){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31658 = meta31658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31657.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31657.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31657.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t31657.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31657.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31657.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31657.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31659){
var self__ = this;
var _31659__$1 = this;
return self__.meta31658;
});})(mults,ensure_mult))
;

cljs.core.async.t31657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31659,meta31658__$1){
var self__ = this;
var _31659__$1 = this;
return (new cljs.core.async.t31657(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31658__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31657.cljs$lang$type = true;

cljs.core.async.t31657.cljs$lang$ctorStr = "cljs.core.async/t31657";

cljs.core.async.t31657.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31657");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31657 = ((function (mults,ensure_mult){
return (function __GT_t31657(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31658){
return (new cljs.core.async.t31657(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31658));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31657(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18618__auto___31779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31779,mults,ensure_mult,p){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31779,mults,ensure_mult,p){
return (function (state_31731){
var state_val_31732 = (state_31731[(1)]);
if((state_val_31732 === (7))){
var inst_31727 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31733_31780 = state_31731__$1;
(statearr_31733_31780[(2)] = inst_31727);

(statearr_31733_31780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (20))){
var state_31731__$1 = state_31731;
var statearr_31734_31781 = state_31731__$1;
(statearr_31734_31781[(2)] = null);

(statearr_31734_31781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (1))){
var state_31731__$1 = state_31731;
var statearr_31735_31782 = state_31731__$1;
(statearr_31735_31782[(2)] = null);

(statearr_31735_31782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (24))){
var inst_31710 = (state_31731[(7)]);
var inst_31719 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31710);
var state_31731__$1 = state_31731;
var statearr_31736_31783 = state_31731__$1;
(statearr_31736_31783[(2)] = inst_31719);

(statearr_31736_31783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (4))){
var inst_31662 = (state_31731[(8)]);
var inst_31662__$1 = (state_31731[(2)]);
var inst_31663 = (inst_31662__$1 == null);
var state_31731__$1 = (function (){var statearr_31737 = state_31731;
(statearr_31737[(8)] = inst_31662__$1);

return statearr_31737;
})();
if(cljs.core.truth_(inst_31663)){
var statearr_31738_31784 = state_31731__$1;
(statearr_31738_31784[(1)] = (5));

} else {
var statearr_31739_31785 = state_31731__$1;
(statearr_31739_31785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (15))){
var inst_31704 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31740_31786 = state_31731__$1;
(statearr_31740_31786[(2)] = inst_31704);

(statearr_31740_31786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (21))){
var inst_31724 = (state_31731[(2)]);
var state_31731__$1 = (function (){var statearr_31741 = state_31731;
(statearr_31741[(9)] = inst_31724);

return statearr_31741;
})();
var statearr_31742_31787 = state_31731__$1;
(statearr_31742_31787[(2)] = null);

(statearr_31742_31787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (13))){
var inst_31686 = (state_31731[(10)]);
var inst_31688 = cljs.core.chunked_seq_QMARK_.call(null,inst_31686);
var state_31731__$1 = state_31731;
if(inst_31688){
var statearr_31743_31788 = state_31731__$1;
(statearr_31743_31788[(1)] = (16));

} else {
var statearr_31744_31789 = state_31731__$1;
(statearr_31744_31789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (22))){
var inst_31716 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
if(cljs.core.truth_(inst_31716)){
var statearr_31745_31790 = state_31731__$1;
(statearr_31745_31790[(1)] = (23));

} else {
var statearr_31746_31791 = state_31731__$1;
(statearr_31746_31791[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (6))){
var inst_31710 = (state_31731[(7)]);
var inst_31662 = (state_31731[(8)]);
var inst_31712 = (state_31731[(11)]);
var inst_31710__$1 = topic_fn.call(null,inst_31662);
var inst_31711 = cljs.core.deref.call(null,mults);
var inst_31712__$1 = cljs.core.get.call(null,inst_31711,inst_31710__$1);
var state_31731__$1 = (function (){var statearr_31747 = state_31731;
(statearr_31747[(7)] = inst_31710__$1);

(statearr_31747[(11)] = inst_31712__$1);

return statearr_31747;
})();
if(cljs.core.truth_(inst_31712__$1)){
var statearr_31748_31792 = state_31731__$1;
(statearr_31748_31792[(1)] = (19));

} else {
var statearr_31749_31793 = state_31731__$1;
(statearr_31749_31793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (25))){
var inst_31721 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31750_31794 = state_31731__$1;
(statearr_31750_31794[(2)] = inst_31721);

(statearr_31750_31794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (17))){
var inst_31686 = (state_31731[(10)]);
var inst_31695 = cljs.core.first.call(null,inst_31686);
var inst_31696 = cljs.core.async.muxch_STAR_.call(null,inst_31695);
var inst_31697 = cljs.core.async.close_BANG_.call(null,inst_31696);
var inst_31698 = cljs.core.next.call(null,inst_31686);
var inst_31672 = inst_31698;
var inst_31673 = null;
var inst_31674 = (0);
var inst_31675 = (0);
var state_31731__$1 = (function (){var statearr_31751 = state_31731;
(statearr_31751[(12)] = inst_31674);

(statearr_31751[(13)] = inst_31672);

(statearr_31751[(14)] = inst_31697);

(statearr_31751[(15)] = inst_31675);

(statearr_31751[(16)] = inst_31673);

return statearr_31751;
})();
var statearr_31752_31795 = state_31731__$1;
(statearr_31752_31795[(2)] = null);

(statearr_31752_31795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (3))){
var inst_31729 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31731__$1,inst_31729);
} else {
if((state_val_31732 === (12))){
var inst_31706 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31753_31796 = state_31731__$1;
(statearr_31753_31796[(2)] = inst_31706);

(statearr_31753_31796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (2))){
var state_31731__$1 = state_31731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31731__$1,(4),ch);
} else {
if((state_val_31732 === (23))){
var state_31731__$1 = state_31731;
var statearr_31754_31797 = state_31731__$1;
(statearr_31754_31797[(2)] = null);

(statearr_31754_31797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (19))){
var inst_31662 = (state_31731[(8)]);
var inst_31712 = (state_31731[(11)]);
var inst_31714 = cljs.core.async.muxch_STAR_.call(null,inst_31712);
var state_31731__$1 = state_31731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31731__$1,(22),inst_31714,inst_31662);
} else {
if((state_val_31732 === (11))){
var inst_31672 = (state_31731[(13)]);
var inst_31686 = (state_31731[(10)]);
var inst_31686__$1 = cljs.core.seq.call(null,inst_31672);
var state_31731__$1 = (function (){var statearr_31755 = state_31731;
(statearr_31755[(10)] = inst_31686__$1);

return statearr_31755;
})();
if(inst_31686__$1){
var statearr_31756_31798 = state_31731__$1;
(statearr_31756_31798[(1)] = (13));

} else {
var statearr_31757_31799 = state_31731__$1;
(statearr_31757_31799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (9))){
var inst_31708 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31758_31800 = state_31731__$1;
(statearr_31758_31800[(2)] = inst_31708);

(statearr_31758_31800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (5))){
var inst_31669 = cljs.core.deref.call(null,mults);
var inst_31670 = cljs.core.vals.call(null,inst_31669);
var inst_31671 = cljs.core.seq.call(null,inst_31670);
var inst_31672 = inst_31671;
var inst_31673 = null;
var inst_31674 = (0);
var inst_31675 = (0);
var state_31731__$1 = (function (){var statearr_31759 = state_31731;
(statearr_31759[(12)] = inst_31674);

(statearr_31759[(13)] = inst_31672);

(statearr_31759[(15)] = inst_31675);

(statearr_31759[(16)] = inst_31673);

return statearr_31759;
})();
var statearr_31760_31801 = state_31731__$1;
(statearr_31760_31801[(2)] = null);

(statearr_31760_31801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (14))){
var state_31731__$1 = state_31731;
var statearr_31764_31802 = state_31731__$1;
(statearr_31764_31802[(2)] = null);

(statearr_31764_31802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (16))){
var inst_31686 = (state_31731[(10)]);
var inst_31690 = cljs.core.chunk_first.call(null,inst_31686);
var inst_31691 = cljs.core.chunk_rest.call(null,inst_31686);
var inst_31692 = cljs.core.count.call(null,inst_31690);
var inst_31672 = inst_31691;
var inst_31673 = inst_31690;
var inst_31674 = inst_31692;
var inst_31675 = (0);
var state_31731__$1 = (function (){var statearr_31765 = state_31731;
(statearr_31765[(12)] = inst_31674);

(statearr_31765[(13)] = inst_31672);

(statearr_31765[(15)] = inst_31675);

(statearr_31765[(16)] = inst_31673);

return statearr_31765;
})();
var statearr_31766_31803 = state_31731__$1;
(statearr_31766_31803[(2)] = null);

(statearr_31766_31803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (10))){
var inst_31674 = (state_31731[(12)]);
var inst_31672 = (state_31731[(13)]);
var inst_31675 = (state_31731[(15)]);
var inst_31673 = (state_31731[(16)]);
var inst_31680 = cljs.core._nth.call(null,inst_31673,inst_31675);
var inst_31681 = cljs.core.async.muxch_STAR_.call(null,inst_31680);
var inst_31682 = cljs.core.async.close_BANG_.call(null,inst_31681);
var inst_31683 = (inst_31675 + (1));
var tmp31761 = inst_31674;
var tmp31762 = inst_31672;
var tmp31763 = inst_31673;
var inst_31672__$1 = tmp31762;
var inst_31673__$1 = tmp31763;
var inst_31674__$1 = tmp31761;
var inst_31675__$1 = inst_31683;
var state_31731__$1 = (function (){var statearr_31767 = state_31731;
(statearr_31767[(12)] = inst_31674__$1);

(statearr_31767[(17)] = inst_31682);

(statearr_31767[(13)] = inst_31672__$1);

(statearr_31767[(15)] = inst_31675__$1);

(statearr_31767[(16)] = inst_31673__$1);

return statearr_31767;
})();
var statearr_31768_31804 = state_31731__$1;
(statearr_31768_31804[(2)] = null);

(statearr_31768_31804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (18))){
var inst_31701 = (state_31731[(2)]);
var state_31731__$1 = state_31731;
var statearr_31769_31805 = state_31731__$1;
(statearr_31769_31805[(2)] = inst_31701);

(statearr_31769_31805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31732 === (8))){
var inst_31674 = (state_31731[(12)]);
var inst_31675 = (state_31731[(15)]);
var inst_31677 = (inst_31675 < inst_31674);
var inst_31678 = inst_31677;
var state_31731__$1 = state_31731;
if(cljs.core.truth_(inst_31678)){
var statearr_31770_31806 = state_31731__$1;
(statearr_31770_31806[(1)] = (10));

} else {
var statearr_31771_31807 = state_31731__$1;
(statearr_31771_31807[(1)] = (11));

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
});})(c__18618__auto___31779,mults,ensure_mult,p))
;
return ((function (switch__18562__auto__,c__18618__auto___31779,mults,ensure_mult,p){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31775[(0)] = state_machine__18563__auto__);

(statearr_31775[(1)] = (1));

return statearr_31775;
});
var state_machine__18563__auto____1 = (function (state_31731){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31776){if((e31776 instanceof Object)){
var ex__18566__auto__ = e31776;
var statearr_31777_31808 = state_31731;
(statearr_31777_31808[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31809 = state_31731;
state_31731 = G__31809;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31731){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31779,mults,ensure_mult,p))
})();
var state__18620__auto__ = (function (){var statearr_31778 = f__18619__auto__.call(null);
(statearr_31778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31779);

return statearr_31778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31779,mults,ensure_mult,p))
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
var c__18618__auto___31946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31916){
var state_val_31917 = (state_31916[(1)]);
if((state_val_31917 === (7))){
var state_31916__$1 = state_31916;
var statearr_31918_31947 = state_31916__$1;
(statearr_31918_31947[(2)] = null);

(statearr_31918_31947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (1))){
var state_31916__$1 = state_31916;
var statearr_31919_31948 = state_31916__$1;
(statearr_31919_31948[(2)] = null);

(statearr_31919_31948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (4))){
var inst_31880 = (state_31916[(7)]);
var inst_31882 = (inst_31880 < cnt);
var state_31916__$1 = state_31916;
if(cljs.core.truth_(inst_31882)){
var statearr_31920_31949 = state_31916__$1;
(statearr_31920_31949[(1)] = (6));

} else {
var statearr_31921_31950 = state_31916__$1;
(statearr_31921_31950[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (15))){
var inst_31912 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
var statearr_31922_31951 = state_31916__$1;
(statearr_31922_31951[(2)] = inst_31912);

(statearr_31922_31951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (13))){
var inst_31905 = cljs.core.async.close_BANG_.call(null,out);
var state_31916__$1 = state_31916;
var statearr_31923_31952 = state_31916__$1;
(statearr_31923_31952[(2)] = inst_31905);

(statearr_31923_31952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (6))){
var state_31916__$1 = state_31916;
var statearr_31924_31953 = state_31916__$1;
(statearr_31924_31953[(2)] = null);

(statearr_31924_31953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (3))){
var inst_31914 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31916__$1,inst_31914);
} else {
if((state_val_31917 === (12))){
var inst_31902 = (state_31916[(8)]);
var inst_31902__$1 = (state_31916[(2)]);
var inst_31903 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31902__$1);
var state_31916__$1 = (function (){var statearr_31925 = state_31916;
(statearr_31925[(8)] = inst_31902__$1);

return statearr_31925;
})();
if(cljs.core.truth_(inst_31903)){
var statearr_31926_31954 = state_31916__$1;
(statearr_31926_31954[(1)] = (13));

} else {
var statearr_31927_31955 = state_31916__$1;
(statearr_31927_31955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (2))){
var inst_31879 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31880 = (0);
var state_31916__$1 = (function (){var statearr_31928 = state_31916;
(statearr_31928[(9)] = inst_31879);

(statearr_31928[(7)] = inst_31880);

return statearr_31928;
})();
var statearr_31929_31956 = state_31916__$1;
(statearr_31929_31956[(2)] = null);

(statearr_31929_31956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (11))){
var inst_31880 = (state_31916[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31916,(10),Object,null,(9));
var inst_31889 = chs__$1.call(null,inst_31880);
var inst_31890 = done.call(null,inst_31880);
var inst_31891 = cljs.core.async.take_BANG_.call(null,inst_31889,inst_31890);
var state_31916__$1 = state_31916;
var statearr_31930_31957 = state_31916__$1;
(statearr_31930_31957[(2)] = inst_31891);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (9))){
var inst_31880 = (state_31916[(7)]);
var inst_31893 = (state_31916[(2)]);
var inst_31894 = (inst_31880 + (1));
var inst_31880__$1 = inst_31894;
var state_31916__$1 = (function (){var statearr_31931 = state_31916;
(statearr_31931[(7)] = inst_31880__$1);

(statearr_31931[(10)] = inst_31893);

return statearr_31931;
})();
var statearr_31932_31958 = state_31916__$1;
(statearr_31932_31958[(2)] = null);

(statearr_31932_31958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (5))){
var inst_31900 = (state_31916[(2)]);
var state_31916__$1 = (function (){var statearr_31933 = state_31916;
(statearr_31933[(11)] = inst_31900);

return statearr_31933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31916__$1,(12),dchan);
} else {
if((state_val_31917 === (14))){
var inst_31902 = (state_31916[(8)]);
var inst_31907 = cljs.core.apply.call(null,f,inst_31902);
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31916__$1,(16),out,inst_31907);
} else {
if((state_val_31917 === (16))){
var inst_31909 = (state_31916[(2)]);
var state_31916__$1 = (function (){var statearr_31934 = state_31916;
(statearr_31934[(12)] = inst_31909);

return statearr_31934;
})();
var statearr_31935_31959 = state_31916__$1;
(statearr_31935_31959[(2)] = null);

(statearr_31935_31959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (10))){
var inst_31884 = (state_31916[(2)]);
var inst_31885 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31916__$1 = (function (){var statearr_31936 = state_31916;
(statearr_31936[(13)] = inst_31884);

return statearr_31936;
})();
var statearr_31937_31960 = state_31916__$1;
(statearr_31937_31960[(2)] = inst_31885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31917 === (8))){
var inst_31898 = (state_31916[(2)]);
var state_31916__$1 = state_31916;
var statearr_31938_31961 = state_31916__$1;
(statearr_31938_31961[(2)] = inst_31898);

(statearr_31938_31961[(1)] = (5));


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
});})(c__18618__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18562__auto__,c__18618__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31942[(0)] = state_machine__18563__auto__);

(statearr_31942[(1)] = (1));

return statearr_31942;
});
var state_machine__18563__auto____1 = (function (state_31916){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31943){if((e31943 instanceof Object)){
var ex__18566__auto__ = e31943;
var statearr_31944_31962 = state_31916;
(statearr_31944_31962[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31963 = state_31916;
state_31916 = G__31963;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31916){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18620__auto__ = (function (){var statearr_31945 = f__18619__auto__.call(null);
(statearr_31945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31946);

return statearr_31945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__18618__auto___32071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32071,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32071,out){
return (function (state_32047){
var state_val_32048 = (state_32047[(1)]);
if((state_val_32048 === (7))){
var inst_32027 = (state_32047[(7)]);
var inst_32026 = (state_32047[(8)]);
var inst_32026__$1 = (state_32047[(2)]);
var inst_32027__$1 = cljs.core.nth.call(null,inst_32026__$1,(0),null);
var inst_32028 = cljs.core.nth.call(null,inst_32026__$1,(1),null);
var inst_32029 = (inst_32027__$1 == null);
var state_32047__$1 = (function (){var statearr_32049 = state_32047;
(statearr_32049[(7)] = inst_32027__$1);

(statearr_32049[(9)] = inst_32028);

(statearr_32049[(8)] = inst_32026__$1);

return statearr_32049;
})();
if(cljs.core.truth_(inst_32029)){
var statearr_32050_32072 = state_32047__$1;
(statearr_32050_32072[(1)] = (8));

} else {
var statearr_32051_32073 = state_32047__$1;
(statearr_32051_32073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (1))){
var inst_32018 = cljs.core.vec.call(null,chs);
var inst_32019 = inst_32018;
var state_32047__$1 = (function (){var statearr_32052 = state_32047;
(statearr_32052[(10)] = inst_32019);

return statearr_32052;
})();
var statearr_32053_32074 = state_32047__$1;
(statearr_32053_32074[(2)] = null);

(statearr_32053_32074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (4))){
var inst_32019 = (state_32047[(10)]);
var state_32047__$1 = state_32047;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32047__$1,(7),inst_32019);
} else {
if((state_val_32048 === (6))){
var inst_32043 = (state_32047[(2)]);
var state_32047__$1 = state_32047;
var statearr_32054_32075 = state_32047__$1;
(statearr_32054_32075[(2)] = inst_32043);

(statearr_32054_32075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (3))){
var inst_32045 = (state_32047[(2)]);
var state_32047__$1 = state_32047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32047__$1,inst_32045);
} else {
if((state_val_32048 === (2))){
var inst_32019 = (state_32047[(10)]);
var inst_32021 = cljs.core.count.call(null,inst_32019);
var inst_32022 = (inst_32021 > (0));
var state_32047__$1 = state_32047;
if(cljs.core.truth_(inst_32022)){
var statearr_32056_32076 = state_32047__$1;
(statearr_32056_32076[(1)] = (4));

} else {
var statearr_32057_32077 = state_32047__$1;
(statearr_32057_32077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (11))){
var inst_32019 = (state_32047[(10)]);
var inst_32036 = (state_32047[(2)]);
var tmp32055 = inst_32019;
var inst_32019__$1 = tmp32055;
var state_32047__$1 = (function (){var statearr_32058 = state_32047;
(statearr_32058[(11)] = inst_32036);

(statearr_32058[(10)] = inst_32019__$1);

return statearr_32058;
})();
var statearr_32059_32078 = state_32047__$1;
(statearr_32059_32078[(2)] = null);

(statearr_32059_32078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (9))){
var inst_32027 = (state_32047[(7)]);
var state_32047__$1 = state_32047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32047__$1,(11),out,inst_32027);
} else {
if((state_val_32048 === (5))){
var inst_32041 = cljs.core.async.close_BANG_.call(null,out);
var state_32047__$1 = state_32047;
var statearr_32060_32079 = state_32047__$1;
(statearr_32060_32079[(2)] = inst_32041);

(statearr_32060_32079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (10))){
var inst_32039 = (state_32047[(2)]);
var state_32047__$1 = state_32047;
var statearr_32061_32080 = state_32047__$1;
(statearr_32061_32080[(2)] = inst_32039);

(statearr_32061_32080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (8))){
var inst_32027 = (state_32047[(7)]);
var inst_32028 = (state_32047[(9)]);
var inst_32026 = (state_32047[(8)]);
var inst_32019 = (state_32047[(10)]);
var inst_32031 = (function (){var c = inst_32028;
var v = inst_32027;
var vec__32024 = inst_32026;
var cs = inst_32019;
return ((function (c,v,vec__32024,cs,inst_32027,inst_32028,inst_32026,inst_32019,state_val_32048,c__18618__auto___32071,out){
return (function (p1__31964_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31964_SHARP_);
});
;})(c,v,vec__32024,cs,inst_32027,inst_32028,inst_32026,inst_32019,state_val_32048,c__18618__auto___32071,out))
})();
var inst_32032 = cljs.core.filterv.call(null,inst_32031,inst_32019);
var inst_32019__$1 = inst_32032;
var state_32047__$1 = (function (){var statearr_32062 = state_32047;
(statearr_32062[(10)] = inst_32019__$1);

return statearr_32062;
})();
var statearr_32063_32081 = state_32047__$1;
(statearr_32063_32081[(2)] = null);

(statearr_32063_32081[(1)] = (2));


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
});})(c__18618__auto___32071,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32071,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32067[(0)] = state_machine__18563__auto__);

(statearr_32067[(1)] = (1));

return statearr_32067;
});
var state_machine__18563__auto____1 = (function (state_32047){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32068){if((e32068 instanceof Object)){
var ex__18566__auto__ = e32068;
var statearr_32069_32082 = state_32047;
(statearr_32069_32082[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32083 = state_32047;
state_32047 = G__32083;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32047){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32071,out))
})();
var state__18620__auto__ = (function (){var statearr_32070 = f__18619__auto__.call(null);
(statearr_32070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32071);

return statearr_32070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32071,out))
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
var c__18618__auto___32176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32176,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32176,out){
return (function (state_32153){
var state_val_32154 = (state_32153[(1)]);
if((state_val_32154 === (7))){
var inst_32135 = (state_32153[(7)]);
var inst_32135__$1 = (state_32153[(2)]);
var inst_32136 = (inst_32135__$1 == null);
var inst_32137 = cljs.core.not.call(null,inst_32136);
var state_32153__$1 = (function (){var statearr_32155 = state_32153;
(statearr_32155[(7)] = inst_32135__$1);

return statearr_32155;
})();
if(inst_32137){
var statearr_32156_32177 = state_32153__$1;
(statearr_32156_32177[(1)] = (8));

} else {
var statearr_32157_32178 = state_32153__$1;
(statearr_32157_32178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (1))){
var inst_32130 = (0);
var state_32153__$1 = (function (){var statearr_32158 = state_32153;
(statearr_32158[(8)] = inst_32130);

return statearr_32158;
})();
var statearr_32159_32179 = state_32153__$1;
(statearr_32159_32179[(2)] = null);

(statearr_32159_32179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (4))){
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32153__$1,(7),ch);
} else {
if((state_val_32154 === (6))){
var inst_32148 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32160_32180 = state_32153__$1;
(statearr_32160_32180[(2)] = inst_32148);

(statearr_32160_32180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (3))){
var inst_32150 = (state_32153[(2)]);
var inst_32151 = cljs.core.async.close_BANG_.call(null,out);
var state_32153__$1 = (function (){var statearr_32161 = state_32153;
(statearr_32161[(9)] = inst_32150);

return statearr_32161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32153__$1,inst_32151);
} else {
if((state_val_32154 === (2))){
var inst_32130 = (state_32153[(8)]);
var inst_32132 = (inst_32130 < n);
var state_32153__$1 = state_32153;
if(cljs.core.truth_(inst_32132)){
var statearr_32162_32181 = state_32153__$1;
(statearr_32162_32181[(1)] = (4));

} else {
var statearr_32163_32182 = state_32153__$1;
(statearr_32163_32182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (11))){
var inst_32130 = (state_32153[(8)]);
var inst_32140 = (state_32153[(2)]);
var inst_32141 = (inst_32130 + (1));
var inst_32130__$1 = inst_32141;
var state_32153__$1 = (function (){var statearr_32164 = state_32153;
(statearr_32164[(10)] = inst_32140);

(statearr_32164[(8)] = inst_32130__$1);

return statearr_32164;
})();
var statearr_32165_32183 = state_32153__$1;
(statearr_32165_32183[(2)] = null);

(statearr_32165_32183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (9))){
var state_32153__$1 = state_32153;
var statearr_32166_32184 = state_32153__$1;
(statearr_32166_32184[(2)] = null);

(statearr_32166_32184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (5))){
var state_32153__$1 = state_32153;
var statearr_32167_32185 = state_32153__$1;
(statearr_32167_32185[(2)] = null);

(statearr_32167_32185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (10))){
var inst_32145 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32168_32186 = state_32153__$1;
(statearr_32168_32186[(2)] = inst_32145);

(statearr_32168_32186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (8))){
var inst_32135 = (state_32153[(7)]);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32153__$1,(11),out,inst_32135);
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
});})(c__18618__auto___32176,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32176,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32172[(0)] = state_machine__18563__auto__);

(statearr_32172[(1)] = (1));

return statearr_32172;
});
var state_machine__18563__auto____1 = (function (state_32153){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32173){if((e32173 instanceof Object)){
var ex__18566__auto__ = e32173;
var statearr_32174_32187 = state_32153;
(statearr_32174_32187[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32188 = state_32153;
state_32153 = G__32188;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32153){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32176,out))
})();
var state__18620__auto__ = (function (){var statearr_32175 = f__18619__auto__.call(null);
(statearr_32175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32176);

return statearr_32175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32176,out))
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
if(typeof cljs.core.async.t32196 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32196 = (function (ch,f,map_LT_,meta32197){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32197 = meta32197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32196.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32196.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32199 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32199 = (function (fn1,_,meta32197,map_LT_,f,ch,meta32200){
this.fn1 = fn1;
this._ = _;
this.meta32197 = meta32197;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32200 = meta32200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32199.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32189_SHARP_){
return f1.call(null,(((p1__32189_SHARP_ == null))?null:self__.f.call(null,p1__32189_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32201){
var self__ = this;
var _32201__$1 = this;
return self__.meta32200;
});})(___$1))
;

cljs.core.async.t32199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32201,meta32200__$1){
var self__ = this;
var _32201__$1 = this;
return (new cljs.core.async.t32199(self__.fn1,self__._,self__.meta32197,self__.map_LT_,self__.f,self__.ch,meta32200__$1));
});})(___$1))
;

cljs.core.async.t32199.cljs$lang$type = true;

cljs.core.async.t32199.cljs$lang$ctorStr = "cljs.core.async/t32199";

cljs.core.async.t32199.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32199");
});})(___$1))
;

cljs.core.async.__GT_t32199 = ((function (___$1){
return (function __GT_t32199(fn1__$1,___$2,meta32197__$1,map_LT___$1,f__$1,ch__$1,meta32200){
return (new cljs.core.async.t32199(fn1__$1,___$2,meta32197__$1,map_LT___$1,f__$1,ch__$1,meta32200));
});})(___$1))
;

}

return (new cljs.core.async.t32199(fn1,___$1,self__.meta32197,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t32196.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32198){
var self__ = this;
var _32198__$1 = this;
return self__.meta32197;
});

cljs.core.async.t32196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32198,meta32197__$1){
var self__ = this;
var _32198__$1 = this;
return (new cljs.core.async.t32196(self__.ch,self__.f,self__.map_LT_,meta32197__$1));
});

cljs.core.async.t32196.cljs$lang$type = true;

cljs.core.async.t32196.cljs$lang$ctorStr = "cljs.core.async/t32196";

cljs.core.async.t32196.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32196");
});

cljs.core.async.__GT_t32196 = (function __GT_t32196(ch__$1,f__$1,map_LT___$1,meta32197){
return (new cljs.core.async.t32196(ch__$1,f__$1,map_LT___$1,meta32197));
});

}

return (new cljs.core.async.t32196(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t32205 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32205 = (function (ch,f,map_GT_,meta32206){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32206 = meta32206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32205.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32205.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32205.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32207){
var self__ = this;
var _32207__$1 = this;
return self__.meta32206;
});

cljs.core.async.t32205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32207,meta32206__$1){
var self__ = this;
var _32207__$1 = this;
return (new cljs.core.async.t32205(self__.ch,self__.f,self__.map_GT_,meta32206__$1));
});

cljs.core.async.t32205.cljs$lang$type = true;

cljs.core.async.t32205.cljs$lang$ctorStr = "cljs.core.async/t32205";

cljs.core.async.t32205.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32205");
});

cljs.core.async.__GT_t32205 = (function __GT_t32205(ch__$1,f__$1,map_GT___$1,meta32206){
return (new cljs.core.async.t32205(ch__$1,f__$1,map_GT___$1,meta32206));
});

}

return (new cljs.core.async.t32205(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t32211 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32211 = (function (ch,p,filter_GT_,meta32212){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32212 = meta32212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32211.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32211.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32211.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32211.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32213){
var self__ = this;
var _32213__$1 = this;
return self__.meta32212;
});

cljs.core.async.t32211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32213,meta32212__$1){
var self__ = this;
var _32213__$1 = this;
return (new cljs.core.async.t32211(self__.ch,self__.p,self__.filter_GT_,meta32212__$1));
});

cljs.core.async.t32211.cljs$lang$type = true;

cljs.core.async.t32211.cljs$lang$ctorStr = "cljs.core.async/t32211";

cljs.core.async.t32211.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t32211");
});

cljs.core.async.__GT_t32211 = (function __GT_t32211(ch__$1,p__$1,filter_GT___$1,meta32212){
return (new cljs.core.async.t32211(ch__$1,p__$1,filter_GT___$1,meta32212));
});

}

return (new cljs.core.async.t32211(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18618__auto___32296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32296,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32296,out){
return (function (state_32275){
var state_val_32276 = (state_32275[(1)]);
if((state_val_32276 === (7))){
var inst_32271 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32277_32297 = state_32275__$1;
(statearr_32277_32297[(2)] = inst_32271);

(statearr_32277_32297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (1))){
var state_32275__$1 = state_32275;
var statearr_32278_32298 = state_32275__$1;
(statearr_32278_32298[(2)] = null);

(statearr_32278_32298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (4))){
var inst_32257 = (state_32275[(7)]);
var inst_32257__$1 = (state_32275[(2)]);
var inst_32258 = (inst_32257__$1 == null);
var state_32275__$1 = (function (){var statearr_32279 = state_32275;
(statearr_32279[(7)] = inst_32257__$1);

return statearr_32279;
})();
if(cljs.core.truth_(inst_32258)){
var statearr_32280_32299 = state_32275__$1;
(statearr_32280_32299[(1)] = (5));

} else {
var statearr_32281_32300 = state_32275__$1;
(statearr_32281_32300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (6))){
var inst_32257 = (state_32275[(7)]);
var inst_32262 = p.call(null,inst_32257);
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32262)){
var statearr_32282_32301 = state_32275__$1;
(statearr_32282_32301[(1)] = (8));

} else {
var statearr_32283_32302 = state_32275__$1;
(statearr_32283_32302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (3))){
var inst_32273 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32275__$1,inst_32273);
} else {
if((state_val_32276 === (2))){
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32275__$1,(4),ch);
} else {
if((state_val_32276 === (11))){
var inst_32265 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32284_32303 = state_32275__$1;
(statearr_32284_32303[(2)] = inst_32265);

(statearr_32284_32303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (9))){
var state_32275__$1 = state_32275;
var statearr_32285_32304 = state_32275__$1;
(statearr_32285_32304[(2)] = null);

(statearr_32285_32304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (5))){
var inst_32260 = cljs.core.async.close_BANG_.call(null,out);
var state_32275__$1 = state_32275;
var statearr_32286_32305 = state_32275__$1;
(statearr_32286_32305[(2)] = inst_32260);

(statearr_32286_32305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (10))){
var inst_32268 = (state_32275[(2)]);
var state_32275__$1 = (function (){var statearr_32287 = state_32275;
(statearr_32287[(8)] = inst_32268);

return statearr_32287;
})();
var statearr_32288_32306 = state_32275__$1;
(statearr_32288_32306[(2)] = null);

(statearr_32288_32306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (8))){
var inst_32257 = (state_32275[(7)]);
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32275__$1,(11),out,inst_32257);
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
});})(c__18618__auto___32296,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32296,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32292 = [null,null,null,null,null,null,null,null,null];
(statearr_32292[(0)] = state_machine__18563__auto__);

(statearr_32292[(1)] = (1));

return statearr_32292;
});
var state_machine__18563__auto____1 = (function (state_32275){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32293){if((e32293 instanceof Object)){
var ex__18566__auto__ = e32293;
var statearr_32294_32307 = state_32275;
(statearr_32294_32307[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32308 = state_32275;
state_32275 = G__32308;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32275){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32296,out))
})();
var state__18620__auto__ = (function (){var statearr_32295 = f__18619__auto__.call(null);
(statearr_32295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32296);

return statearr_32295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32296,out))
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
return (function (state_32474){
var state_val_32475 = (state_32474[(1)]);
if((state_val_32475 === (7))){
var inst_32470 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32476_32517 = state_32474__$1;
(statearr_32476_32517[(2)] = inst_32470);

(statearr_32476_32517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (20))){
var inst_32440 = (state_32474[(7)]);
var inst_32451 = (state_32474[(2)]);
var inst_32452 = cljs.core.next.call(null,inst_32440);
var inst_32426 = inst_32452;
var inst_32427 = null;
var inst_32428 = (0);
var inst_32429 = (0);
var state_32474__$1 = (function (){var statearr_32477 = state_32474;
(statearr_32477[(8)] = inst_32426);

(statearr_32477[(9)] = inst_32428);

(statearr_32477[(10)] = inst_32451);

(statearr_32477[(11)] = inst_32427);

(statearr_32477[(12)] = inst_32429);

return statearr_32477;
})();
var statearr_32478_32518 = state_32474__$1;
(statearr_32478_32518[(2)] = null);

(statearr_32478_32518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (1))){
var state_32474__$1 = state_32474;
var statearr_32479_32519 = state_32474__$1;
(statearr_32479_32519[(2)] = null);

(statearr_32479_32519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (4))){
var inst_32415 = (state_32474[(13)]);
var inst_32415__$1 = (state_32474[(2)]);
var inst_32416 = (inst_32415__$1 == null);
var state_32474__$1 = (function (){var statearr_32480 = state_32474;
(statearr_32480[(13)] = inst_32415__$1);

return statearr_32480;
})();
if(cljs.core.truth_(inst_32416)){
var statearr_32481_32520 = state_32474__$1;
(statearr_32481_32520[(1)] = (5));

} else {
var statearr_32482_32521 = state_32474__$1;
(statearr_32482_32521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (15))){
var state_32474__$1 = state_32474;
var statearr_32486_32522 = state_32474__$1;
(statearr_32486_32522[(2)] = null);

(statearr_32486_32522[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (21))){
var state_32474__$1 = state_32474;
var statearr_32487_32523 = state_32474__$1;
(statearr_32487_32523[(2)] = null);

(statearr_32487_32523[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (13))){
var inst_32426 = (state_32474[(8)]);
var inst_32428 = (state_32474[(9)]);
var inst_32427 = (state_32474[(11)]);
var inst_32429 = (state_32474[(12)]);
var inst_32436 = (state_32474[(2)]);
var inst_32437 = (inst_32429 + (1));
var tmp32483 = inst_32426;
var tmp32484 = inst_32428;
var tmp32485 = inst_32427;
var inst_32426__$1 = tmp32483;
var inst_32427__$1 = tmp32485;
var inst_32428__$1 = tmp32484;
var inst_32429__$1 = inst_32437;
var state_32474__$1 = (function (){var statearr_32488 = state_32474;
(statearr_32488[(14)] = inst_32436);

(statearr_32488[(8)] = inst_32426__$1);

(statearr_32488[(9)] = inst_32428__$1);

(statearr_32488[(11)] = inst_32427__$1);

(statearr_32488[(12)] = inst_32429__$1);

return statearr_32488;
})();
var statearr_32489_32524 = state_32474__$1;
(statearr_32489_32524[(2)] = null);

(statearr_32489_32524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (22))){
var state_32474__$1 = state_32474;
var statearr_32490_32525 = state_32474__$1;
(statearr_32490_32525[(2)] = null);

(statearr_32490_32525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (6))){
var inst_32415 = (state_32474[(13)]);
var inst_32424 = f.call(null,inst_32415);
var inst_32425 = cljs.core.seq.call(null,inst_32424);
var inst_32426 = inst_32425;
var inst_32427 = null;
var inst_32428 = (0);
var inst_32429 = (0);
var state_32474__$1 = (function (){var statearr_32491 = state_32474;
(statearr_32491[(8)] = inst_32426);

(statearr_32491[(9)] = inst_32428);

(statearr_32491[(11)] = inst_32427);

(statearr_32491[(12)] = inst_32429);

return statearr_32491;
})();
var statearr_32492_32526 = state_32474__$1;
(statearr_32492_32526[(2)] = null);

(statearr_32492_32526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (17))){
var inst_32440 = (state_32474[(7)]);
var inst_32444 = cljs.core.chunk_first.call(null,inst_32440);
var inst_32445 = cljs.core.chunk_rest.call(null,inst_32440);
var inst_32446 = cljs.core.count.call(null,inst_32444);
var inst_32426 = inst_32445;
var inst_32427 = inst_32444;
var inst_32428 = inst_32446;
var inst_32429 = (0);
var state_32474__$1 = (function (){var statearr_32493 = state_32474;
(statearr_32493[(8)] = inst_32426);

(statearr_32493[(9)] = inst_32428);

(statearr_32493[(11)] = inst_32427);

(statearr_32493[(12)] = inst_32429);

return statearr_32493;
})();
var statearr_32494_32527 = state_32474__$1;
(statearr_32494_32527[(2)] = null);

(statearr_32494_32527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (3))){
var inst_32472 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32474__$1,inst_32472);
} else {
if((state_val_32475 === (12))){
var inst_32460 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32495_32528 = state_32474__$1;
(statearr_32495_32528[(2)] = inst_32460);

(statearr_32495_32528[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (2))){
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32474__$1,(4),in$);
} else {
if((state_val_32475 === (23))){
var inst_32468 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32496_32529 = state_32474__$1;
(statearr_32496_32529[(2)] = inst_32468);

(statearr_32496_32529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (19))){
var inst_32455 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32497_32530 = state_32474__$1;
(statearr_32497_32530[(2)] = inst_32455);

(statearr_32497_32530[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (11))){
var inst_32426 = (state_32474[(8)]);
var inst_32440 = (state_32474[(7)]);
var inst_32440__$1 = cljs.core.seq.call(null,inst_32426);
var state_32474__$1 = (function (){var statearr_32498 = state_32474;
(statearr_32498[(7)] = inst_32440__$1);

return statearr_32498;
})();
if(inst_32440__$1){
var statearr_32499_32531 = state_32474__$1;
(statearr_32499_32531[(1)] = (14));

} else {
var statearr_32500_32532 = state_32474__$1;
(statearr_32500_32532[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (9))){
var inst_32462 = (state_32474[(2)]);
var inst_32463 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32474__$1 = (function (){var statearr_32501 = state_32474;
(statearr_32501[(15)] = inst_32462);

return statearr_32501;
})();
if(cljs.core.truth_(inst_32463)){
var statearr_32502_32533 = state_32474__$1;
(statearr_32502_32533[(1)] = (21));

} else {
var statearr_32503_32534 = state_32474__$1;
(statearr_32503_32534[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (5))){
var inst_32418 = cljs.core.async.close_BANG_.call(null,out);
var state_32474__$1 = state_32474;
var statearr_32504_32535 = state_32474__$1;
(statearr_32504_32535[(2)] = inst_32418);

(statearr_32504_32535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (14))){
var inst_32440 = (state_32474[(7)]);
var inst_32442 = cljs.core.chunked_seq_QMARK_.call(null,inst_32440);
var state_32474__$1 = state_32474;
if(inst_32442){
var statearr_32505_32536 = state_32474__$1;
(statearr_32505_32536[(1)] = (17));

} else {
var statearr_32506_32537 = state_32474__$1;
(statearr_32506_32537[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (16))){
var inst_32458 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32507_32538 = state_32474__$1;
(statearr_32507_32538[(2)] = inst_32458);

(statearr_32507_32538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (10))){
var inst_32427 = (state_32474[(11)]);
var inst_32429 = (state_32474[(12)]);
var inst_32434 = cljs.core._nth.call(null,inst_32427,inst_32429);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32474__$1,(13),out,inst_32434);
} else {
if((state_val_32475 === (18))){
var inst_32440 = (state_32474[(7)]);
var inst_32449 = cljs.core.first.call(null,inst_32440);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32474__$1,(20),out,inst_32449);
} else {
if((state_val_32475 === (8))){
var inst_32428 = (state_32474[(9)]);
var inst_32429 = (state_32474[(12)]);
var inst_32431 = (inst_32429 < inst_32428);
var inst_32432 = inst_32431;
var state_32474__$1 = state_32474;
if(cljs.core.truth_(inst_32432)){
var statearr_32508_32539 = state_32474__$1;
(statearr_32508_32539[(1)] = (10));

} else {
var statearr_32509_32540 = state_32474__$1;
(statearr_32509_32540[(1)] = (11));

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
var statearr_32513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32513[(0)] = state_machine__18563__auto__);

(statearr_32513[(1)] = (1));

return statearr_32513;
});
var state_machine__18563__auto____1 = (function (state_32474){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32514){if((e32514 instanceof Object)){
var ex__18566__auto__ = e32514;
var statearr_32515_32541 = state_32474;
(statearr_32515_32541[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32542 = state_32474;
state_32474 = G__32542;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32474){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_32516 = f__18619__auto__.call(null);
(statearr_32516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_32516;
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
var c__18618__auto___32639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32639,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32639,out){
return (function (state_32614){
var state_val_32615 = (state_32614[(1)]);
if((state_val_32615 === (7))){
var inst_32609 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32616_32640 = state_32614__$1;
(statearr_32616_32640[(2)] = inst_32609);

(statearr_32616_32640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (1))){
var inst_32591 = null;
var state_32614__$1 = (function (){var statearr_32617 = state_32614;
(statearr_32617[(7)] = inst_32591);

return statearr_32617;
})();
var statearr_32618_32641 = state_32614__$1;
(statearr_32618_32641[(2)] = null);

(statearr_32618_32641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (4))){
var inst_32594 = (state_32614[(8)]);
var inst_32594__$1 = (state_32614[(2)]);
var inst_32595 = (inst_32594__$1 == null);
var inst_32596 = cljs.core.not.call(null,inst_32595);
var state_32614__$1 = (function (){var statearr_32619 = state_32614;
(statearr_32619[(8)] = inst_32594__$1);

return statearr_32619;
})();
if(inst_32596){
var statearr_32620_32642 = state_32614__$1;
(statearr_32620_32642[(1)] = (5));

} else {
var statearr_32621_32643 = state_32614__$1;
(statearr_32621_32643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (6))){
var state_32614__$1 = state_32614;
var statearr_32622_32644 = state_32614__$1;
(statearr_32622_32644[(2)] = null);

(statearr_32622_32644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (3))){
var inst_32611 = (state_32614[(2)]);
var inst_32612 = cljs.core.async.close_BANG_.call(null,out);
var state_32614__$1 = (function (){var statearr_32623 = state_32614;
(statearr_32623[(9)] = inst_32611);

return statearr_32623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32614__$1,inst_32612);
} else {
if((state_val_32615 === (2))){
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(4),ch);
} else {
if((state_val_32615 === (11))){
var inst_32594 = (state_32614[(8)]);
var inst_32603 = (state_32614[(2)]);
var inst_32591 = inst_32594;
var state_32614__$1 = (function (){var statearr_32624 = state_32614;
(statearr_32624[(10)] = inst_32603);

(statearr_32624[(7)] = inst_32591);

return statearr_32624;
})();
var statearr_32625_32645 = state_32614__$1;
(statearr_32625_32645[(2)] = null);

(statearr_32625_32645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (9))){
var inst_32594 = (state_32614[(8)]);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32614__$1,(11),out,inst_32594);
} else {
if((state_val_32615 === (5))){
var inst_32594 = (state_32614[(8)]);
var inst_32591 = (state_32614[(7)]);
var inst_32598 = cljs.core._EQ_.call(null,inst_32594,inst_32591);
var state_32614__$1 = state_32614;
if(inst_32598){
var statearr_32627_32646 = state_32614__$1;
(statearr_32627_32646[(1)] = (8));

} else {
var statearr_32628_32647 = state_32614__$1;
(statearr_32628_32647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (10))){
var inst_32606 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32629_32648 = state_32614__$1;
(statearr_32629_32648[(2)] = inst_32606);

(statearr_32629_32648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (8))){
var inst_32591 = (state_32614[(7)]);
var tmp32626 = inst_32591;
var inst_32591__$1 = tmp32626;
var state_32614__$1 = (function (){var statearr_32630 = state_32614;
(statearr_32630[(7)] = inst_32591__$1);

return statearr_32630;
})();
var statearr_32631_32649 = state_32614__$1;
(statearr_32631_32649[(2)] = null);

(statearr_32631_32649[(1)] = (2));


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
});})(c__18618__auto___32639,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32639,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32635[(0)] = state_machine__18563__auto__);

(statearr_32635[(1)] = (1));

return statearr_32635;
});
var state_machine__18563__auto____1 = (function (state_32614){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32636){if((e32636 instanceof Object)){
var ex__18566__auto__ = e32636;
var statearr_32637_32650 = state_32614;
(statearr_32637_32650[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32651 = state_32614;
state_32614 = G__32651;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32614){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32639,out))
})();
var state__18620__auto__ = (function (){var statearr_32638 = f__18619__auto__.call(null);
(statearr_32638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32639);

return statearr_32638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32639,out))
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
var c__18618__auto___32786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32786,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32786,out){
return (function (state_32756){
var state_val_32757 = (state_32756[(1)]);
if((state_val_32757 === (7))){
var inst_32752 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
var statearr_32758_32787 = state_32756__$1;
(statearr_32758_32787[(2)] = inst_32752);

(statearr_32758_32787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (1))){
var inst_32719 = (new Array(n));
var inst_32720 = inst_32719;
var inst_32721 = (0);
var state_32756__$1 = (function (){var statearr_32759 = state_32756;
(statearr_32759[(7)] = inst_32720);

(statearr_32759[(8)] = inst_32721);

return statearr_32759;
})();
var statearr_32760_32788 = state_32756__$1;
(statearr_32760_32788[(2)] = null);

(statearr_32760_32788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (4))){
var inst_32724 = (state_32756[(9)]);
var inst_32724__$1 = (state_32756[(2)]);
var inst_32725 = (inst_32724__$1 == null);
var inst_32726 = cljs.core.not.call(null,inst_32725);
var state_32756__$1 = (function (){var statearr_32761 = state_32756;
(statearr_32761[(9)] = inst_32724__$1);

return statearr_32761;
})();
if(inst_32726){
var statearr_32762_32789 = state_32756__$1;
(statearr_32762_32789[(1)] = (5));

} else {
var statearr_32763_32790 = state_32756__$1;
(statearr_32763_32790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (15))){
var inst_32746 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
var statearr_32764_32791 = state_32756__$1;
(statearr_32764_32791[(2)] = inst_32746);

(statearr_32764_32791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (13))){
var state_32756__$1 = state_32756;
var statearr_32765_32792 = state_32756__$1;
(statearr_32765_32792[(2)] = null);

(statearr_32765_32792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (6))){
var inst_32721 = (state_32756[(8)]);
var inst_32742 = (inst_32721 > (0));
var state_32756__$1 = state_32756;
if(cljs.core.truth_(inst_32742)){
var statearr_32766_32793 = state_32756__$1;
(statearr_32766_32793[(1)] = (12));

} else {
var statearr_32767_32794 = state_32756__$1;
(statearr_32767_32794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (3))){
var inst_32754 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32756__$1,inst_32754);
} else {
if((state_val_32757 === (12))){
var inst_32720 = (state_32756[(7)]);
var inst_32744 = cljs.core.vec.call(null,inst_32720);
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32756__$1,(15),out,inst_32744);
} else {
if((state_val_32757 === (2))){
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32756__$1,(4),ch);
} else {
if((state_val_32757 === (11))){
var inst_32736 = (state_32756[(2)]);
var inst_32737 = (new Array(n));
var inst_32720 = inst_32737;
var inst_32721 = (0);
var state_32756__$1 = (function (){var statearr_32768 = state_32756;
(statearr_32768[(7)] = inst_32720);

(statearr_32768[(8)] = inst_32721);

(statearr_32768[(10)] = inst_32736);

return statearr_32768;
})();
var statearr_32769_32795 = state_32756__$1;
(statearr_32769_32795[(2)] = null);

(statearr_32769_32795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (9))){
var inst_32720 = (state_32756[(7)]);
var inst_32734 = cljs.core.vec.call(null,inst_32720);
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32756__$1,(11),out,inst_32734);
} else {
if((state_val_32757 === (5))){
var inst_32720 = (state_32756[(7)]);
var inst_32729 = (state_32756[(11)]);
var inst_32724 = (state_32756[(9)]);
var inst_32721 = (state_32756[(8)]);
var inst_32728 = (inst_32720[inst_32721] = inst_32724);
var inst_32729__$1 = (inst_32721 + (1));
var inst_32730 = (inst_32729__$1 < n);
var state_32756__$1 = (function (){var statearr_32770 = state_32756;
(statearr_32770[(11)] = inst_32729__$1);

(statearr_32770[(12)] = inst_32728);

return statearr_32770;
})();
if(cljs.core.truth_(inst_32730)){
var statearr_32771_32796 = state_32756__$1;
(statearr_32771_32796[(1)] = (8));

} else {
var statearr_32772_32797 = state_32756__$1;
(statearr_32772_32797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (14))){
var inst_32749 = (state_32756[(2)]);
var inst_32750 = cljs.core.async.close_BANG_.call(null,out);
var state_32756__$1 = (function (){var statearr_32774 = state_32756;
(statearr_32774[(13)] = inst_32749);

return statearr_32774;
})();
var statearr_32775_32798 = state_32756__$1;
(statearr_32775_32798[(2)] = inst_32750);

(statearr_32775_32798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (10))){
var inst_32740 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
var statearr_32776_32799 = state_32756__$1;
(statearr_32776_32799[(2)] = inst_32740);

(statearr_32776_32799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (8))){
var inst_32720 = (state_32756[(7)]);
var inst_32729 = (state_32756[(11)]);
var tmp32773 = inst_32720;
var inst_32720__$1 = tmp32773;
var inst_32721 = inst_32729;
var state_32756__$1 = (function (){var statearr_32777 = state_32756;
(statearr_32777[(7)] = inst_32720__$1);

(statearr_32777[(8)] = inst_32721);

return statearr_32777;
})();
var statearr_32778_32800 = state_32756__$1;
(statearr_32778_32800[(2)] = null);

(statearr_32778_32800[(1)] = (2));


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
});})(c__18618__auto___32786,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32786,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = state_machine__18563__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var state_machine__18563__auto____1 = (function (state_32756){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32783){if((e32783 instanceof Object)){
var ex__18566__auto__ = e32783;
var statearr_32784_32801 = state_32756;
(statearr_32784_32801[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32802 = state_32756;
state_32756 = G__32802;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32756){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32786,out))
})();
var state__18620__auto__ = (function (){var statearr_32785 = f__18619__auto__.call(null);
(statearr_32785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32786);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32786,out))
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
var c__18618__auto___32945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32945,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32945,out){
return (function (state_32915){
var state_val_32916 = (state_32915[(1)]);
if((state_val_32916 === (7))){
var inst_32911 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32917_32946 = state_32915__$1;
(statearr_32917_32946[(2)] = inst_32911);

(statearr_32917_32946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (1))){
var inst_32874 = [];
var inst_32875 = inst_32874;
var inst_32876 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32915__$1 = (function (){var statearr_32918 = state_32915;
(statearr_32918[(7)] = inst_32876);

(statearr_32918[(8)] = inst_32875);

return statearr_32918;
})();
var statearr_32919_32947 = state_32915__$1;
(statearr_32919_32947[(2)] = null);

(statearr_32919_32947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (4))){
var inst_32879 = (state_32915[(9)]);
var inst_32879__$1 = (state_32915[(2)]);
var inst_32880 = (inst_32879__$1 == null);
var inst_32881 = cljs.core.not.call(null,inst_32880);
var state_32915__$1 = (function (){var statearr_32920 = state_32915;
(statearr_32920[(9)] = inst_32879__$1);

return statearr_32920;
})();
if(inst_32881){
var statearr_32921_32948 = state_32915__$1;
(statearr_32921_32948[(1)] = (5));

} else {
var statearr_32922_32949 = state_32915__$1;
(statearr_32922_32949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (15))){
var inst_32905 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32923_32950 = state_32915__$1;
(statearr_32923_32950[(2)] = inst_32905);

(statearr_32923_32950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (13))){
var state_32915__$1 = state_32915;
var statearr_32924_32951 = state_32915__$1;
(statearr_32924_32951[(2)] = null);

(statearr_32924_32951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (6))){
var inst_32875 = (state_32915[(8)]);
var inst_32900 = inst_32875.length;
var inst_32901 = (inst_32900 > (0));
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32901)){
var statearr_32925_32952 = state_32915__$1;
(statearr_32925_32952[(1)] = (12));

} else {
var statearr_32926_32953 = state_32915__$1;
(statearr_32926_32953[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (3))){
var inst_32913 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32915__$1,inst_32913);
} else {
if((state_val_32916 === (12))){
var inst_32875 = (state_32915[(8)]);
var inst_32903 = cljs.core.vec.call(null,inst_32875);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32915__$1,(15),out,inst_32903);
} else {
if((state_val_32916 === (2))){
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32915__$1,(4),ch);
} else {
if((state_val_32916 === (11))){
var inst_32879 = (state_32915[(9)]);
var inst_32883 = (state_32915[(10)]);
var inst_32893 = (state_32915[(2)]);
var inst_32894 = [];
var inst_32895 = inst_32894.push(inst_32879);
var inst_32875 = inst_32894;
var inst_32876 = inst_32883;
var state_32915__$1 = (function (){var statearr_32927 = state_32915;
(statearr_32927[(11)] = inst_32893);

(statearr_32927[(7)] = inst_32876);

(statearr_32927[(8)] = inst_32875);

(statearr_32927[(12)] = inst_32895);

return statearr_32927;
})();
var statearr_32928_32954 = state_32915__$1;
(statearr_32928_32954[(2)] = null);

(statearr_32928_32954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (9))){
var inst_32875 = (state_32915[(8)]);
var inst_32891 = cljs.core.vec.call(null,inst_32875);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32915__$1,(11),out,inst_32891);
} else {
if((state_val_32916 === (5))){
var inst_32879 = (state_32915[(9)]);
var inst_32876 = (state_32915[(7)]);
var inst_32883 = (state_32915[(10)]);
var inst_32883__$1 = f.call(null,inst_32879);
var inst_32884 = cljs.core._EQ_.call(null,inst_32883__$1,inst_32876);
var inst_32885 = cljs.core.keyword_identical_QMARK_.call(null,inst_32876,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32886 = (inst_32884) || (inst_32885);
var state_32915__$1 = (function (){var statearr_32929 = state_32915;
(statearr_32929[(10)] = inst_32883__$1);

return statearr_32929;
})();
if(cljs.core.truth_(inst_32886)){
var statearr_32930_32955 = state_32915__$1;
(statearr_32930_32955[(1)] = (8));

} else {
var statearr_32931_32956 = state_32915__$1;
(statearr_32931_32956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (14))){
var inst_32908 = (state_32915[(2)]);
var inst_32909 = cljs.core.async.close_BANG_.call(null,out);
var state_32915__$1 = (function (){var statearr_32933 = state_32915;
(statearr_32933[(13)] = inst_32908);

return statearr_32933;
})();
var statearr_32934_32957 = state_32915__$1;
(statearr_32934_32957[(2)] = inst_32909);

(statearr_32934_32957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (10))){
var inst_32898 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32935_32958 = state_32915__$1;
(statearr_32935_32958[(2)] = inst_32898);

(statearr_32935_32958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (8))){
var inst_32879 = (state_32915[(9)]);
var inst_32883 = (state_32915[(10)]);
var inst_32875 = (state_32915[(8)]);
var inst_32888 = inst_32875.push(inst_32879);
var tmp32932 = inst_32875;
var inst_32875__$1 = tmp32932;
var inst_32876 = inst_32883;
var state_32915__$1 = (function (){var statearr_32936 = state_32915;
(statearr_32936[(7)] = inst_32876);

(statearr_32936[(14)] = inst_32888);

(statearr_32936[(8)] = inst_32875__$1);

return statearr_32936;
})();
var statearr_32937_32959 = state_32915__$1;
(statearr_32937_32959[(2)] = null);

(statearr_32937_32959[(1)] = (2));


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
});})(c__18618__auto___32945,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32945,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32941[(0)] = state_machine__18563__auto__);

(statearr_32941[(1)] = (1));

return statearr_32941;
});
var state_machine__18563__auto____1 = (function (state_32915){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32942){if((e32942 instanceof Object)){
var ex__18566__auto__ = e32942;
var statearr_32943_32960 = state_32915;
(statearr_32943_32960[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32961 = state_32915;
state_32915 = G__32961;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32915){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32945,out))
})();
var state__18620__auto__ = (function (){var statearr_32944 = f__18619__auto__.call(null);
(statearr_32944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32945);

return statearr_32944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32945,out))
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

//# sourceMappingURL=async.js.map?rel=1435014980349