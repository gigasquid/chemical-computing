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
if(typeof cljs.core.async.t29200 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29200 = (function (f,fn_handler,meta29201){
this.f = f;
this.fn_handler = fn_handler;
this.meta29201 = meta29201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29200.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29202){
var self__ = this;
var _29202__$1 = this;
return self__.meta29201;
});

cljs.core.async.t29200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29202,meta29201__$1){
var self__ = this;
var _29202__$1 = this;
return (new cljs.core.async.t29200(self__.f,self__.fn_handler,meta29201__$1));
});

cljs.core.async.t29200.cljs$lang$type = true;

cljs.core.async.t29200.cljs$lang$ctorStr = "cljs.core.async/t29200";

cljs.core.async.t29200.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t29200");
});

cljs.core.async.__GT_t29200 = (function __GT_t29200(f__$1,fn_handler__$1,meta29201){
return (new cljs.core.async.t29200(f__$1,fn_handler__$1,meta29201));
});

}

return (new cljs.core.async.t29200(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29204 = buff;
if(G__29204){
var bit__16826__auto__ = null;
if(cljs.core.truth_((function (){var or__16145__auto__ = bit__16826__auto__;
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return G__29204.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29204.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29204);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29204);
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
var val_29205 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29205);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29205,ret){
return (function (){
return fn1.call(null,val_29205);
});})(val_29205,ret))
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
var n__17032__auto___29206 = n;
var x_29207 = (0);
while(true){
if((x_29207 < n__17032__auto___29206)){
(a[x_29207] = (0));

var G__29208 = (x_29207 + (1));
x_29207 = G__29208;
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

var G__29209 = (i + (1));
i = G__29209;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29213 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29213 = (function (flag,alt_flag,meta29214){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29214 = meta29214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29213.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29215){
var self__ = this;
var _29215__$1 = this;
return self__.meta29214;
});})(flag))
;

cljs.core.async.t29213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29215,meta29214__$1){
var self__ = this;
var _29215__$1 = this;
return (new cljs.core.async.t29213(self__.flag,self__.alt_flag,meta29214__$1));
});})(flag))
;

cljs.core.async.t29213.cljs$lang$type = true;

cljs.core.async.t29213.cljs$lang$ctorStr = "cljs.core.async/t29213";

cljs.core.async.t29213.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t29213");
});})(flag))
;

cljs.core.async.__GT_t29213 = ((function (flag){
return (function __GT_t29213(flag__$1,alt_flag__$1,meta29214){
return (new cljs.core.async.t29213(flag__$1,alt_flag__$1,meta29214));
});})(flag))
;

}

return (new cljs.core.async.t29213(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t29219 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29219 = (function (cb,flag,alt_handler,meta29220){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29220 = meta29220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29219.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29221){
var self__ = this;
var _29221__$1 = this;
return self__.meta29220;
});

cljs.core.async.t29219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29221,meta29220__$1){
var self__ = this;
var _29221__$1 = this;
return (new cljs.core.async.t29219(self__.cb,self__.flag,self__.alt_handler,meta29220__$1));
});

cljs.core.async.t29219.cljs$lang$type = true;

cljs.core.async.t29219.cljs$lang$ctorStr = "cljs.core.async/t29219";

cljs.core.async.t29219.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t29219");
});

cljs.core.async.__GT_t29219 = (function __GT_t29219(cb__$1,flag__$1,alt_handler__$1,meta29220){
return (new cljs.core.async.t29219(cb__$1,flag__$1,alt_handler__$1,meta29220));
});

}

return (new cljs.core.async.t29219(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29222_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29222_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29223_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29223_SHARP_,port], null));
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
var G__29224 = (i + (1));
i = G__29224;
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
var alts_BANG___delegate = function (ports,p__29225){
var map__29227 = p__29225;
var map__29227__$1 = ((cljs.core.seq_QMARK_.call(null,map__29227))?cljs.core.apply.call(null,cljs.core.hash_map,map__29227):map__29227);
var opts = map__29227__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__29225 = null;
if (arguments.length > 1) {
var G__29228__i = 0, G__29228__a = new Array(arguments.length -  1);
while (G__29228__i < G__29228__a.length) {G__29228__a[G__29228__i] = arguments[G__29228__i + 1]; ++G__29228__i;}
  p__29225 = new cljs.core.IndexedSeq(G__29228__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__29225);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29229){
var ports = cljs.core.first(arglist__29229);
var p__29225 = cljs.core.rest(arglist__29229);
return alts_BANG___delegate(ports,p__29225);
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
var c__18618__auto___29324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___29324){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___29324){
return (function (state_29300){
var state_val_29301 = (state_29300[(1)]);
if((state_val_29301 === (7))){
var inst_29296 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29302_29325 = state_29300__$1;
(statearr_29302_29325[(2)] = inst_29296);

(statearr_29302_29325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (1))){
var state_29300__$1 = state_29300;
var statearr_29303_29326 = state_29300__$1;
(statearr_29303_29326[(2)] = null);

(statearr_29303_29326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (4))){
var inst_29279 = (state_29300[(7)]);
var inst_29279__$1 = (state_29300[(2)]);
var inst_29280 = (inst_29279__$1 == null);
var state_29300__$1 = (function (){var statearr_29304 = state_29300;
(statearr_29304[(7)] = inst_29279__$1);

return statearr_29304;
})();
if(cljs.core.truth_(inst_29280)){
var statearr_29305_29327 = state_29300__$1;
(statearr_29305_29327[(1)] = (5));

} else {
var statearr_29306_29328 = state_29300__$1;
(statearr_29306_29328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (13))){
var state_29300__$1 = state_29300;
var statearr_29307_29329 = state_29300__$1;
(statearr_29307_29329[(2)] = null);

(statearr_29307_29329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (6))){
var inst_29279 = (state_29300[(7)]);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29300__$1,(11),to,inst_29279);
} else {
if((state_val_29301 === (3))){
var inst_29298 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29300__$1,inst_29298);
} else {
if((state_val_29301 === (12))){
var state_29300__$1 = state_29300;
var statearr_29308_29330 = state_29300__$1;
(statearr_29308_29330[(2)] = null);

(statearr_29308_29330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (2))){
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29300__$1,(4),from);
} else {
if((state_val_29301 === (11))){
var inst_29289 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29289)){
var statearr_29309_29331 = state_29300__$1;
(statearr_29309_29331[(1)] = (12));

} else {
var statearr_29310_29332 = state_29300__$1;
(statearr_29310_29332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (9))){
var state_29300__$1 = state_29300;
var statearr_29311_29333 = state_29300__$1;
(statearr_29311_29333[(2)] = null);

(statearr_29311_29333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (5))){
var state_29300__$1 = state_29300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29312_29334 = state_29300__$1;
(statearr_29312_29334[(1)] = (8));

} else {
var statearr_29313_29335 = state_29300__$1;
(statearr_29313_29335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (14))){
var inst_29294 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29314_29336 = state_29300__$1;
(statearr_29314_29336[(2)] = inst_29294);

(statearr_29314_29336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (10))){
var inst_29286 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
var statearr_29315_29337 = state_29300__$1;
(statearr_29315_29337[(2)] = inst_29286);

(statearr_29315_29337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (8))){
var inst_29283 = cljs.core.async.close_BANG_.call(null,to);
var state_29300__$1 = state_29300;
var statearr_29316_29338 = state_29300__$1;
(statearr_29316_29338[(2)] = inst_29283);

(statearr_29316_29338[(1)] = (10));


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
});})(c__18618__auto___29324))
;
return ((function (switch__18562__auto__,c__18618__auto___29324){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_29320 = [null,null,null,null,null,null,null,null];
(statearr_29320[(0)] = state_machine__18563__auto__);

(statearr_29320[(1)] = (1));

return statearr_29320;
});
var state_machine__18563__auto____1 = (function (state_29300){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_29300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e29321){if((e29321 instanceof Object)){
var ex__18566__auto__ = e29321;
var statearr_29322_29339 = state_29300;
(statearr_29322_29339[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29340 = state_29300;
state_29300 = G__29340;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_29300){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_29300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___29324))
})();
var state__18620__auto__ = (function (){var statearr_29323 = f__18619__auto__.call(null);
(statearr_29323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___29324);

return statearr_29323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___29324))
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
return (function (p__29524){
var vec__29525 = p__29524;
var v = cljs.core.nth.call(null,vec__29525,(0),null);
var p = cljs.core.nth.call(null,vec__29525,(1),null);
var job = vec__29525;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18618__auto___29707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___29707,res,vec__29525,v,p,job,jobs,results){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___29707,res,vec__29525,v,p,job,jobs,results){
return (function (state_29530){
var state_val_29531 = (state_29530[(1)]);
if((state_val_29531 === (2))){
var inst_29527 = (state_29530[(2)]);
var inst_29528 = cljs.core.async.close_BANG_.call(null,res);
var state_29530__$1 = (function (){var statearr_29532 = state_29530;
(statearr_29532[(7)] = inst_29527);

return statearr_29532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29530__$1,inst_29528);
} else {
if((state_val_29531 === (1))){
var state_29530__$1 = state_29530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29530__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18618__auto___29707,res,vec__29525,v,p,job,jobs,results))
;
return ((function (switch__18562__auto__,c__18618__auto___29707,res,vec__29525,v,p,job,jobs,results){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_29536 = [null,null,null,null,null,null,null,null];
(statearr_29536[(0)] = state_machine__18563__auto__);

(statearr_29536[(1)] = (1));

return statearr_29536;
});
var state_machine__18563__auto____1 = (function (state_29530){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_29530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e29537){if((e29537 instanceof Object)){
var ex__18566__auto__ = e29537;
var statearr_29538_29708 = state_29530;
(statearr_29538_29708[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29709 = state_29530;
state_29530 = G__29709;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_29530){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_29530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___29707,res,vec__29525,v,p,job,jobs,results))
})();
var state__18620__auto__ = (function (){var statearr_29539 = f__18619__auto__.call(null);
(statearr_29539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___29707);

return statearr_29539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___29707,res,vec__29525,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29540){
var vec__29541 = p__29540;
var v = cljs.core.nth.call(null,vec__29541,(0),null);
var p = cljs.core.nth.call(null,vec__29541,(1),null);
var job = vec__29541;
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
var n__17032__auto___29710 = n;
var __29711 = (0);
while(true){
if((__29711 < n__17032__auto___29710)){
var G__29542_29712 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29542_29712) {
case "async":
var c__18618__auto___29714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29711,c__18618__auto___29714,G__29542_29712,n__17032__auto___29710,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (__29711,c__18618__auto___29714,G__29542_29712,n__17032__auto___29710,jobs,results,process,async){
return (function (state_29555){
var state_val_29556 = (state_29555[(1)]);
if((state_val_29556 === (7))){
var inst_29551 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
var statearr_29557_29715 = state_29555__$1;
(statearr_29557_29715[(2)] = inst_29551);

(statearr_29557_29715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (6))){
var state_29555__$1 = state_29555;
var statearr_29558_29716 = state_29555__$1;
(statearr_29558_29716[(2)] = null);

(statearr_29558_29716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (5))){
var state_29555__$1 = state_29555;
var statearr_29559_29717 = state_29555__$1;
(statearr_29559_29717[(2)] = null);

(statearr_29559_29717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (4))){
var inst_29545 = (state_29555[(2)]);
var inst_29546 = async.call(null,inst_29545);
var state_29555__$1 = state_29555;
if(cljs.core.truth_(inst_29546)){
var statearr_29560_29718 = state_29555__$1;
(statearr_29560_29718[(1)] = (5));

} else {
var statearr_29561_29719 = state_29555__$1;
(statearr_29561_29719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (3))){
var inst_29553 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29555__$1,inst_29553);
} else {
if((state_val_29556 === (2))){
var state_29555__$1 = state_29555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29555__$1,(4),jobs);
} else {
if((state_val_29556 === (1))){
var state_29555__$1 = state_29555;
var statearr_29562_29720 = state_29555__$1;
(statearr_29562_29720[(2)] = null);

(statearr_29562_29720[(1)] = (2));


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
});})(__29711,c__18618__auto___29714,G__29542_29712,n__17032__auto___29710,jobs,results,process,async))
;
return ((function (__29711,switch__18562__auto__,c__18618__auto___29714,G__29542_29712,n__17032__auto___29710,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_29566 = [null,null,null,null,null,null,null];
(statearr_29566[(0)] = state_machine__18563__auto__);

(statearr_29566[(1)] = (1));

return statearr_29566;
});
var state_machine__18563__auto____1 = (function (state_29555){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_29555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e29567){if((e29567 instanceof Object)){
var ex__18566__auto__ = e29567;
var statearr_29568_29721 = state_29555;
(statearr_29568_29721[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29722 = state_29555;
state_29555 = G__29722;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_29555){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_29555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(__29711,switch__18562__auto__,c__18618__auto___29714,G__29542_29712,n__17032__auto___29710,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_29569 = f__18619__auto__.call(null);
(statearr_29569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___29714);

return statearr_29569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(__29711,c__18618__auto___29714,G__29542_29712,n__17032__auto___29710,jobs,results,process,async))
);


break;
case "compute":
var c__18618__auto___29723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29711,c__18618__auto___29723,G__29542_29712,n__17032__auto___29710,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (__29711,c__18618__auto___29723,G__29542_29712,n__17032__auto___29710,jobs,results,process,async){
return (function (state_29582){
var state_val_29583 = (state_29582[(1)]);
if((state_val_29583 === (7))){
var inst_29578 = (state_29582[(2)]);
var state_29582__$1 = state_29582;
var statearr_29584_29724 = state_29582__$1;
(statearr_29584_29724[(2)] = inst_29578);

(statearr_29584_29724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (6))){
var state_29582__$1 = state_29582;
var statearr_29585_29725 = state_29582__$1;
(statearr_29585_29725[(2)] = null);

(statearr_29585_29725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (5))){
var state_29582__$1 = state_29582;
var statearr_29586_29726 = state_29582__$1;
(statearr_29586_29726[(2)] = null);

(statearr_29586_29726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (4))){
var inst_29572 = (state_29582[(2)]);
var inst_29573 = process.call(null,inst_29572);
var state_29582__$1 = state_29582;
if(cljs.core.truth_(inst_29573)){
var statearr_29587_29727 = state_29582__$1;
(statearr_29587_29727[(1)] = (5));

} else {
var statearr_29588_29728 = state_29582__$1;
(statearr_29588_29728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29583 === (3))){
var inst_29580 = (state_29582[(2)]);
var state_29582__$1 = state_29582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29582__$1,inst_29580);
} else {
if((state_val_29583 === (2))){
var state_29582__$1 = state_29582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29582__$1,(4),jobs);
} else {
if((state_val_29583 === (1))){
var state_29582__$1 = state_29582;
var statearr_29589_29729 = state_29582__$1;
(statearr_29589_29729[(2)] = null);

(statearr_29589_29729[(1)] = (2));


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
});})(__29711,c__18618__auto___29723,G__29542_29712,n__17032__auto___29710,jobs,results,process,async))
;
return ((function (__29711,switch__18562__auto__,c__18618__auto___29723,G__29542_29712,n__17032__auto___29710,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_29593 = [null,null,null,null,null,null,null];
(statearr_29593[(0)] = state_machine__18563__auto__);

(statearr_29593[(1)] = (1));

return statearr_29593;
});
var state_machine__18563__auto____1 = (function (state_29582){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_29582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e29594){if((e29594 instanceof Object)){
var ex__18566__auto__ = e29594;
var statearr_29595_29730 = state_29582;
(statearr_29595_29730[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29731 = state_29582;
state_29582 = G__29731;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_29582){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_29582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(__29711,switch__18562__auto__,c__18618__auto___29723,G__29542_29712,n__17032__auto___29710,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_29596 = f__18619__auto__.call(null);
(statearr_29596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___29723);

return statearr_29596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(__29711,c__18618__auto___29723,G__29542_29712,n__17032__auto___29710,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29732 = (__29711 + (1));
__29711 = G__29732;
continue;
} else {
}
break;
}

var c__18618__auto___29733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___29733,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___29733,jobs,results,process,async){
return (function (state_29618){
var state_val_29619 = (state_29618[(1)]);
if((state_val_29619 === (9))){
var inst_29611 = (state_29618[(2)]);
var state_29618__$1 = (function (){var statearr_29620 = state_29618;
(statearr_29620[(7)] = inst_29611);

return statearr_29620;
})();
var statearr_29621_29734 = state_29618__$1;
(statearr_29621_29734[(2)] = null);

(statearr_29621_29734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (8))){
var inst_29604 = (state_29618[(8)]);
var inst_29609 = (state_29618[(2)]);
var state_29618__$1 = (function (){var statearr_29622 = state_29618;
(statearr_29622[(9)] = inst_29609);

return statearr_29622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29618__$1,(9),results,inst_29604);
} else {
if((state_val_29619 === (7))){
var inst_29614 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
var statearr_29623_29735 = state_29618__$1;
(statearr_29623_29735[(2)] = inst_29614);

(statearr_29623_29735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (6))){
var inst_29599 = (state_29618[(10)]);
var inst_29604 = (state_29618[(8)]);
var inst_29604__$1 = cljs.core.async.chan.call(null,(1));
var inst_29605 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29606 = [inst_29599,inst_29604__$1];
var inst_29607 = (new cljs.core.PersistentVector(null,2,(5),inst_29605,inst_29606,null));
var state_29618__$1 = (function (){var statearr_29624 = state_29618;
(statearr_29624[(8)] = inst_29604__$1);

return statearr_29624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29618__$1,(8),jobs,inst_29607);
} else {
if((state_val_29619 === (5))){
var inst_29602 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29618__$1 = state_29618;
var statearr_29625_29736 = state_29618__$1;
(statearr_29625_29736[(2)] = inst_29602);

(statearr_29625_29736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (4))){
var inst_29599 = (state_29618[(10)]);
var inst_29599__$1 = (state_29618[(2)]);
var inst_29600 = (inst_29599__$1 == null);
var state_29618__$1 = (function (){var statearr_29626 = state_29618;
(statearr_29626[(10)] = inst_29599__$1);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29600)){
var statearr_29627_29737 = state_29618__$1;
(statearr_29627_29737[(1)] = (5));

} else {
var statearr_29628_29738 = state_29618__$1;
(statearr_29628_29738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29619 === (3))){
var inst_29616 = (state_29618[(2)]);
var state_29618__$1 = state_29618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29618__$1,inst_29616);
} else {
if((state_val_29619 === (2))){
var state_29618__$1 = state_29618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29618__$1,(4),from);
} else {
if((state_val_29619 === (1))){
var state_29618__$1 = state_29618;
var statearr_29629_29739 = state_29618__$1;
(statearr_29629_29739[(2)] = null);

(statearr_29629_29739[(1)] = (2));


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
});})(c__18618__auto___29733,jobs,results,process,async))
;
return ((function (switch__18562__auto__,c__18618__auto___29733,jobs,results,process,async){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_29633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29633[(0)] = state_machine__18563__auto__);

(statearr_29633[(1)] = (1));

return statearr_29633;
});
var state_machine__18563__auto____1 = (function (state_29618){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_29618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e29634){if((e29634 instanceof Object)){
var ex__18566__auto__ = e29634;
var statearr_29635_29740 = state_29618;
(statearr_29635_29740[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29741 = state_29618;
state_29618 = G__29741;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_29618){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_29618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___29733,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_29636 = f__18619__auto__.call(null);
(statearr_29636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___29733);

return statearr_29636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___29733,jobs,results,process,async))
);


var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__,jobs,results,process,async){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__,jobs,results,process,async){
return (function (state_29674){
var state_val_29675 = (state_29674[(1)]);
if((state_val_29675 === (7))){
var inst_29670 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29676_29742 = state_29674__$1;
(statearr_29676_29742[(2)] = inst_29670);

(statearr_29676_29742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (20))){
var state_29674__$1 = state_29674;
var statearr_29677_29743 = state_29674__$1;
(statearr_29677_29743[(2)] = null);

(statearr_29677_29743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (1))){
var state_29674__$1 = state_29674;
var statearr_29678_29744 = state_29674__$1;
(statearr_29678_29744[(2)] = null);

(statearr_29678_29744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (4))){
var inst_29639 = (state_29674[(7)]);
var inst_29639__$1 = (state_29674[(2)]);
var inst_29640 = (inst_29639__$1 == null);
var state_29674__$1 = (function (){var statearr_29679 = state_29674;
(statearr_29679[(7)] = inst_29639__$1);

return statearr_29679;
})();
if(cljs.core.truth_(inst_29640)){
var statearr_29680_29745 = state_29674__$1;
(statearr_29680_29745[(1)] = (5));

} else {
var statearr_29681_29746 = state_29674__$1;
(statearr_29681_29746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (15))){
var inst_29652 = (state_29674[(8)]);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29674__$1,(18),to,inst_29652);
} else {
if((state_val_29675 === (21))){
var inst_29665 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29682_29747 = state_29674__$1;
(statearr_29682_29747[(2)] = inst_29665);

(statearr_29682_29747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (13))){
var inst_29667 = (state_29674[(2)]);
var state_29674__$1 = (function (){var statearr_29683 = state_29674;
(statearr_29683[(9)] = inst_29667);

return statearr_29683;
})();
var statearr_29684_29748 = state_29674__$1;
(statearr_29684_29748[(2)] = null);

(statearr_29684_29748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (6))){
var inst_29639 = (state_29674[(7)]);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29674__$1,(11),inst_29639);
} else {
if((state_val_29675 === (17))){
var inst_29660 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
if(cljs.core.truth_(inst_29660)){
var statearr_29685_29749 = state_29674__$1;
(statearr_29685_29749[(1)] = (19));

} else {
var statearr_29686_29750 = state_29674__$1;
(statearr_29686_29750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (3))){
var inst_29672 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29674__$1,inst_29672);
} else {
if((state_val_29675 === (12))){
var inst_29649 = (state_29674[(10)]);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29674__$1,(14),inst_29649);
} else {
if((state_val_29675 === (2))){
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29674__$1,(4),results);
} else {
if((state_val_29675 === (19))){
var state_29674__$1 = state_29674;
var statearr_29687_29751 = state_29674__$1;
(statearr_29687_29751[(2)] = null);

(statearr_29687_29751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (11))){
var inst_29649 = (state_29674[(2)]);
var state_29674__$1 = (function (){var statearr_29688 = state_29674;
(statearr_29688[(10)] = inst_29649);

return statearr_29688;
})();
var statearr_29689_29752 = state_29674__$1;
(statearr_29689_29752[(2)] = null);

(statearr_29689_29752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (9))){
var state_29674__$1 = state_29674;
var statearr_29690_29753 = state_29674__$1;
(statearr_29690_29753[(2)] = null);

(statearr_29690_29753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (5))){
var state_29674__$1 = state_29674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29691_29754 = state_29674__$1;
(statearr_29691_29754[(1)] = (8));

} else {
var statearr_29692_29755 = state_29674__$1;
(statearr_29692_29755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (14))){
var inst_29652 = (state_29674[(8)]);
var inst_29654 = (state_29674[(11)]);
var inst_29652__$1 = (state_29674[(2)]);
var inst_29653 = (inst_29652__$1 == null);
var inst_29654__$1 = cljs.core.not.call(null,inst_29653);
var state_29674__$1 = (function (){var statearr_29693 = state_29674;
(statearr_29693[(8)] = inst_29652__$1);

(statearr_29693[(11)] = inst_29654__$1);

return statearr_29693;
})();
if(inst_29654__$1){
var statearr_29694_29756 = state_29674__$1;
(statearr_29694_29756[(1)] = (15));

} else {
var statearr_29695_29757 = state_29674__$1;
(statearr_29695_29757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (16))){
var inst_29654 = (state_29674[(11)]);
var state_29674__$1 = state_29674;
var statearr_29696_29758 = state_29674__$1;
(statearr_29696_29758[(2)] = inst_29654);

(statearr_29696_29758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (10))){
var inst_29646 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29697_29759 = state_29674__$1;
(statearr_29697_29759[(2)] = inst_29646);

(statearr_29697_29759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (18))){
var inst_29657 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29698_29760 = state_29674__$1;
(statearr_29698_29760[(2)] = inst_29657);

(statearr_29698_29760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (8))){
var inst_29643 = cljs.core.async.close_BANG_.call(null,to);
var state_29674__$1 = state_29674;
var statearr_29699_29761 = state_29674__$1;
(statearr_29699_29761[(2)] = inst_29643);

(statearr_29699_29761[(1)] = (10));


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
var statearr_29703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29703[(0)] = state_machine__18563__auto__);

(statearr_29703[(1)] = (1));

return statearr_29703;
});
var state_machine__18563__auto____1 = (function (state_29674){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_29674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e29704){if((e29704 instanceof Object)){
var ex__18566__auto__ = e29704;
var statearr_29705_29762 = state_29674;
(statearr_29705_29762[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29763 = state_29674;
state_29674 = G__29763;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_29674){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_29674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__,jobs,results,process,async))
})();
var state__18620__auto__ = (function (){var statearr_29706 = f__18619__auto__.call(null);
(statearr_29706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_29706;
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
var c__18618__auto___29864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___29864,tc,fc){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___29864,tc,fc){
return (function (state_29839){
var state_val_29840 = (state_29839[(1)]);
if((state_val_29840 === (7))){
var inst_29835 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29841_29865 = state_29839__$1;
(statearr_29841_29865[(2)] = inst_29835);

(statearr_29841_29865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (1))){
var state_29839__$1 = state_29839;
var statearr_29842_29866 = state_29839__$1;
(statearr_29842_29866[(2)] = null);

(statearr_29842_29866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (4))){
var inst_29816 = (state_29839[(7)]);
var inst_29816__$1 = (state_29839[(2)]);
var inst_29817 = (inst_29816__$1 == null);
var state_29839__$1 = (function (){var statearr_29843 = state_29839;
(statearr_29843[(7)] = inst_29816__$1);

return statearr_29843;
})();
if(cljs.core.truth_(inst_29817)){
var statearr_29844_29867 = state_29839__$1;
(statearr_29844_29867[(1)] = (5));

} else {
var statearr_29845_29868 = state_29839__$1;
(statearr_29845_29868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (13))){
var state_29839__$1 = state_29839;
var statearr_29846_29869 = state_29839__$1;
(statearr_29846_29869[(2)] = null);

(statearr_29846_29869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (6))){
var inst_29816 = (state_29839[(7)]);
var inst_29822 = p.call(null,inst_29816);
var state_29839__$1 = state_29839;
if(cljs.core.truth_(inst_29822)){
var statearr_29847_29870 = state_29839__$1;
(statearr_29847_29870[(1)] = (9));

} else {
var statearr_29848_29871 = state_29839__$1;
(statearr_29848_29871[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (3))){
var inst_29837 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29839__$1,inst_29837);
} else {
if((state_val_29840 === (12))){
var state_29839__$1 = state_29839;
var statearr_29849_29872 = state_29839__$1;
(statearr_29849_29872[(2)] = null);

(statearr_29849_29872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (2))){
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29839__$1,(4),ch);
} else {
if((state_val_29840 === (11))){
var inst_29816 = (state_29839[(7)]);
var inst_29826 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29839__$1,(8),inst_29826,inst_29816);
} else {
if((state_val_29840 === (9))){
var state_29839__$1 = state_29839;
var statearr_29850_29873 = state_29839__$1;
(statearr_29850_29873[(2)] = tc);

(statearr_29850_29873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (5))){
var inst_29819 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29820 = cljs.core.async.close_BANG_.call(null,fc);
var state_29839__$1 = (function (){var statearr_29851 = state_29839;
(statearr_29851[(8)] = inst_29819);

return statearr_29851;
})();
var statearr_29852_29874 = state_29839__$1;
(statearr_29852_29874[(2)] = inst_29820);

(statearr_29852_29874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (14))){
var inst_29833 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29853_29875 = state_29839__$1;
(statearr_29853_29875[(2)] = inst_29833);

(statearr_29853_29875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (10))){
var state_29839__$1 = state_29839;
var statearr_29854_29876 = state_29839__$1;
(statearr_29854_29876[(2)] = fc);

(statearr_29854_29876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (8))){
var inst_29828 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
if(cljs.core.truth_(inst_29828)){
var statearr_29855_29877 = state_29839__$1;
(statearr_29855_29877[(1)] = (12));

} else {
var statearr_29856_29878 = state_29839__$1;
(statearr_29856_29878[(1)] = (13));

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
});})(c__18618__auto___29864,tc,fc))
;
return ((function (switch__18562__auto__,c__18618__auto___29864,tc,fc){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_29860 = [null,null,null,null,null,null,null,null,null];
(statearr_29860[(0)] = state_machine__18563__auto__);

(statearr_29860[(1)] = (1));

return statearr_29860;
});
var state_machine__18563__auto____1 = (function (state_29839){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_29839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e29861){if((e29861 instanceof Object)){
var ex__18566__auto__ = e29861;
var statearr_29862_29879 = state_29839;
(statearr_29862_29879[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29880 = state_29839;
state_29839 = G__29880;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_29839){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_29839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___29864,tc,fc))
})();
var state__18620__auto__ = (function (){var statearr_29863 = f__18619__auto__.call(null);
(statearr_29863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___29864);

return statearr_29863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___29864,tc,fc))
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
return (function (state_29927){
var state_val_29928 = (state_29927[(1)]);
if((state_val_29928 === (7))){
var inst_29923 = (state_29927[(2)]);
var state_29927__$1 = state_29927;
var statearr_29929_29945 = state_29927__$1;
(statearr_29929_29945[(2)] = inst_29923);

(statearr_29929_29945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29928 === (6))){
var inst_29913 = (state_29927[(7)]);
var inst_29916 = (state_29927[(8)]);
var inst_29920 = f.call(null,inst_29913,inst_29916);
var inst_29913__$1 = inst_29920;
var state_29927__$1 = (function (){var statearr_29930 = state_29927;
(statearr_29930[(7)] = inst_29913__$1);

return statearr_29930;
})();
var statearr_29931_29946 = state_29927__$1;
(statearr_29931_29946[(2)] = null);

(statearr_29931_29946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29928 === (5))){
var inst_29913 = (state_29927[(7)]);
var state_29927__$1 = state_29927;
var statearr_29932_29947 = state_29927__$1;
(statearr_29932_29947[(2)] = inst_29913);

(statearr_29932_29947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29928 === (4))){
var inst_29916 = (state_29927[(8)]);
var inst_29916__$1 = (state_29927[(2)]);
var inst_29917 = (inst_29916__$1 == null);
var state_29927__$1 = (function (){var statearr_29933 = state_29927;
(statearr_29933[(8)] = inst_29916__$1);

return statearr_29933;
})();
if(cljs.core.truth_(inst_29917)){
var statearr_29934_29948 = state_29927__$1;
(statearr_29934_29948[(1)] = (5));

} else {
var statearr_29935_29949 = state_29927__$1;
(statearr_29935_29949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29928 === (3))){
var inst_29925 = (state_29927[(2)]);
var state_29927__$1 = state_29927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29927__$1,inst_29925);
} else {
if((state_val_29928 === (2))){
var state_29927__$1 = state_29927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29927__$1,(4),ch);
} else {
if((state_val_29928 === (1))){
var inst_29913 = init;
var state_29927__$1 = (function (){var statearr_29936 = state_29927;
(statearr_29936[(7)] = inst_29913);

return statearr_29936;
})();
var statearr_29937_29950 = state_29927__$1;
(statearr_29937_29950[(2)] = null);

(statearr_29937_29950[(1)] = (2));


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
var statearr_29941 = [null,null,null,null,null,null,null,null,null];
(statearr_29941[(0)] = state_machine__18563__auto__);

(statearr_29941[(1)] = (1));

return statearr_29941;
});
var state_machine__18563__auto____1 = (function (state_29927){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_29927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e29942){if((e29942 instanceof Object)){
var ex__18566__auto__ = e29942;
var statearr_29943_29951 = state_29927;
(statearr_29943_29951[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29952 = state_29927;
state_29927 = G__29952;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_29927){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_29927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_29944 = f__18619__auto__.call(null);
(statearr_29944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_29944;
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
return (function (state_30026){
var state_val_30027 = (state_30026[(1)]);
if((state_val_30027 === (7))){
var inst_30008 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
var statearr_30028_30051 = state_30026__$1;
(statearr_30028_30051[(2)] = inst_30008);

(statearr_30028_30051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (1))){
var inst_30002 = cljs.core.seq.call(null,coll);
var inst_30003 = inst_30002;
var state_30026__$1 = (function (){var statearr_30029 = state_30026;
(statearr_30029[(7)] = inst_30003);

return statearr_30029;
})();
var statearr_30030_30052 = state_30026__$1;
(statearr_30030_30052[(2)] = null);

(statearr_30030_30052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (4))){
var inst_30003 = (state_30026[(7)]);
var inst_30006 = cljs.core.first.call(null,inst_30003);
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30026__$1,(7),ch,inst_30006);
} else {
if((state_val_30027 === (13))){
var inst_30020 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
var statearr_30031_30053 = state_30026__$1;
(statearr_30031_30053[(2)] = inst_30020);

(statearr_30031_30053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (6))){
var inst_30011 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
if(cljs.core.truth_(inst_30011)){
var statearr_30032_30054 = state_30026__$1;
(statearr_30032_30054[(1)] = (8));

} else {
var statearr_30033_30055 = state_30026__$1;
(statearr_30033_30055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (3))){
var inst_30024 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30026__$1,inst_30024);
} else {
if((state_val_30027 === (12))){
var state_30026__$1 = state_30026;
var statearr_30034_30056 = state_30026__$1;
(statearr_30034_30056[(2)] = null);

(statearr_30034_30056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (2))){
var inst_30003 = (state_30026[(7)]);
var state_30026__$1 = state_30026;
if(cljs.core.truth_(inst_30003)){
var statearr_30035_30057 = state_30026__$1;
(statearr_30035_30057[(1)] = (4));

} else {
var statearr_30036_30058 = state_30026__$1;
(statearr_30036_30058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (11))){
var inst_30017 = cljs.core.async.close_BANG_.call(null,ch);
var state_30026__$1 = state_30026;
var statearr_30037_30059 = state_30026__$1;
(statearr_30037_30059[(2)] = inst_30017);

(statearr_30037_30059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (9))){
var state_30026__$1 = state_30026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30038_30060 = state_30026__$1;
(statearr_30038_30060[(1)] = (11));

} else {
var statearr_30039_30061 = state_30026__$1;
(statearr_30039_30061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (5))){
var inst_30003 = (state_30026[(7)]);
var state_30026__$1 = state_30026;
var statearr_30040_30062 = state_30026__$1;
(statearr_30040_30062[(2)] = inst_30003);

(statearr_30040_30062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (10))){
var inst_30022 = (state_30026[(2)]);
var state_30026__$1 = state_30026;
var statearr_30041_30063 = state_30026__$1;
(statearr_30041_30063[(2)] = inst_30022);

(statearr_30041_30063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30027 === (8))){
var inst_30003 = (state_30026[(7)]);
var inst_30013 = cljs.core.next.call(null,inst_30003);
var inst_30003__$1 = inst_30013;
var state_30026__$1 = (function (){var statearr_30042 = state_30026;
(statearr_30042[(7)] = inst_30003__$1);

return statearr_30042;
})();
var statearr_30043_30064 = state_30026__$1;
(statearr_30043_30064[(2)] = null);

(statearr_30043_30064[(1)] = (2));


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
var statearr_30047 = [null,null,null,null,null,null,null,null];
(statearr_30047[(0)] = state_machine__18563__auto__);

(statearr_30047[(1)] = (1));

return statearr_30047;
});
var state_machine__18563__auto____1 = (function (state_30026){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30048){if((e30048 instanceof Object)){
var ex__18566__auto__ = e30048;
var statearr_30049_30065 = state_30026;
(statearr_30049_30065[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30066 = state_30026;
state_30026 = G__30066;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30026){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_30050 = f__18619__auto__.call(null);
(statearr_30050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_30050;
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

cljs.core.async.Mux = (function (){var obj30068 = {};
return obj30068;
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


cljs.core.async.Mult = (function (){var obj30070 = {};
return obj30070;
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
if(typeof cljs.core.async.t30292 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30292 = (function (cs,ch,mult,meta30293){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30293 = meta30293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30292.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30292.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30292.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30292.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30292.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30294){
var self__ = this;
var _30294__$1 = this;
return self__.meta30293;
});})(cs))
;

cljs.core.async.t30292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30294,meta30293__$1){
var self__ = this;
var _30294__$1 = this;
return (new cljs.core.async.t30292(self__.cs,self__.ch,self__.mult,meta30293__$1));
});})(cs))
;

cljs.core.async.t30292.cljs$lang$type = true;

cljs.core.async.t30292.cljs$lang$ctorStr = "cljs.core.async/t30292";

cljs.core.async.t30292.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30292");
});})(cs))
;

cljs.core.async.__GT_t30292 = ((function (cs){
return (function __GT_t30292(cs__$1,ch__$1,mult__$1,meta30293){
return (new cljs.core.async.t30292(cs__$1,ch__$1,mult__$1,meta30293));
});})(cs))
;

}

return (new cljs.core.async.t30292(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18618__auto___30513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___30513,cs,m,dchan,dctr,done){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___30513,cs,m,dchan,dctr,done){
return (function (state_30425){
var state_val_30426 = (state_30425[(1)]);
if((state_val_30426 === (7))){
var inst_30421 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30427_30514 = state_30425__$1;
(statearr_30427_30514[(2)] = inst_30421);

(statearr_30427_30514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (20))){
var inst_30326 = (state_30425[(7)]);
var inst_30336 = cljs.core.first.call(null,inst_30326);
var inst_30337 = cljs.core.nth.call(null,inst_30336,(0),null);
var inst_30338 = cljs.core.nth.call(null,inst_30336,(1),null);
var state_30425__$1 = (function (){var statearr_30428 = state_30425;
(statearr_30428[(8)] = inst_30337);

return statearr_30428;
})();
if(cljs.core.truth_(inst_30338)){
var statearr_30429_30515 = state_30425__$1;
(statearr_30429_30515[(1)] = (22));

} else {
var statearr_30430_30516 = state_30425__$1;
(statearr_30430_30516[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (27))){
var inst_30368 = (state_30425[(9)]);
var inst_30297 = (state_30425[(10)]);
var inst_30366 = (state_30425[(11)]);
var inst_30373 = (state_30425[(12)]);
var inst_30373__$1 = cljs.core._nth.call(null,inst_30366,inst_30368);
var inst_30374 = cljs.core.async.put_BANG_.call(null,inst_30373__$1,inst_30297,done);
var state_30425__$1 = (function (){var statearr_30431 = state_30425;
(statearr_30431[(12)] = inst_30373__$1);

return statearr_30431;
})();
if(cljs.core.truth_(inst_30374)){
var statearr_30432_30517 = state_30425__$1;
(statearr_30432_30517[(1)] = (30));

} else {
var statearr_30433_30518 = state_30425__$1;
(statearr_30433_30518[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (1))){
var state_30425__$1 = state_30425;
var statearr_30434_30519 = state_30425__$1;
(statearr_30434_30519[(2)] = null);

(statearr_30434_30519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (24))){
var inst_30326 = (state_30425[(7)]);
var inst_30343 = (state_30425[(2)]);
var inst_30344 = cljs.core.next.call(null,inst_30326);
var inst_30306 = inst_30344;
var inst_30307 = null;
var inst_30308 = (0);
var inst_30309 = (0);
var state_30425__$1 = (function (){var statearr_30435 = state_30425;
(statearr_30435[(13)] = inst_30309);

(statearr_30435[(14)] = inst_30307);

(statearr_30435[(15)] = inst_30343);

(statearr_30435[(16)] = inst_30308);

(statearr_30435[(17)] = inst_30306);

return statearr_30435;
})();
var statearr_30436_30520 = state_30425__$1;
(statearr_30436_30520[(2)] = null);

(statearr_30436_30520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (39))){
var state_30425__$1 = state_30425;
var statearr_30440_30521 = state_30425__$1;
(statearr_30440_30521[(2)] = null);

(statearr_30440_30521[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (4))){
var inst_30297 = (state_30425[(10)]);
var inst_30297__$1 = (state_30425[(2)]);
var inst_30298 = (inst_30297__$1 == null);
var state_30425__$1 = (function (){var statearr_30441 = state_30425;
(statearr_30441[(10)] = inst_30297__$1);

return statearr_30441;
})();
if(cljs.core.truth_(inst_30298)){
var statearr_30442_30522 = state_30425__$1;
(statearr_30442_30522[(1)] = (5));

} else {
var statearr_30443_30523 = state_30425__$1;
(statearr_30443_30523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (15))){
var inst_30309 = (state_30425[(13)]);
var inst_30307 = (state_30425[(14)]);
var inst_30308 = (state_30425[(16)]);
var inst_30306 = (state_30425[(17)]);
var inst_30322 = (state_30425[(2)]);
var inst_30323 = (inst_30309 + (1));
var tmp30437 = inst_30307;
var tmp30438 = inst_30308;
var tmp30439 = inst_30306;
var inst_30306__$1 = tmp30439;
var inst_30307__$1 = tmp30437;
var inst_30308__$1 = tmp30438;
var inst_30309__$1 = inst_30323;
var state_30425__$1 = (function (){var statearr_30444 = state_30425;
(statearr_30444[(13)] = inst_30309__$1);

(statearr_30444[(14)] = inst_30307__$1);

(statearr_30444[(18)] = inst_30322);

(statearr_30444[(16)] = inst_30308__$1);

(statearr_30444[(17)] = inst_30306__$1);

return statearr_30444;
})();
var statearr_30445_30524 = state_30425__$1;
(statearr_30445_30524[(2)] = null);

(statearr_30445_30524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (21))){
var inst_30347 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30449_30525 = state_30425__$1;
(statearr_30449_30525[(2)] = inst_30347);

(statearr_30449_30525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (31))){
var inst_30373 = (state_30425[(12)]);
var inst_30377 = done.call(null,null);
var inst_30378 = cljs.core.async.untap_STAR_.call(null,m,inst_30373);
var state_30425__$1 = (function (){var statearr_30450 = state_30425;
(statearr_30450[(19)] = inst_30377);

return statearr_30450;
})();
var statearr_30451_30526 = state_30425__$1;
(statearr_30451_30526[(2)] = inst_30378);

(statearr_30451_30526[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (32))){
var inst_30368 = (state_30425[(9)]);
var inst_30365 = (state_30425[(20)]);
var inst_30367 = (state_30425[(21)]);
var inst_30366 = (state_30425[(11)]);
var inst_30380 = (state_30425[(2)]);
var inst_30381 = (inst_30368 + (1));
var tmp30446 = inst_30365;
var tmp30447 = inst_30367;
var tmp30448 = inst_30366;
var inst_30365__$1 = tmp30446;
var inst_30366__$1 = tmp30448;
var inst_30367__$1 = tmp30447;
var inst_30368__$1 = inst_30381;
var state_30425__$1 = (function (){var statearr_30452 = state_30425;
(statearr_30452[(9)] = inst_30368__$1);

(statearr_30452[(22)] = inst_30380);

(statearr_30452[(20)] = inst_30365__$1);

(statearr_30452[(21)] = inst_30367__$1);

(statearr_30452[(11)] = inst_30366__$1);

return statearr_30452;
})();
var statearr_30453_30527 = state_30425__$1;
(statearr_30453_30527[(2)] = null);

(statearr_30453_30527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (40))){
var inst_30393 = (state_30425[(23)]);
var inst_30397 = done.call(null,null);
var inst_30398 = cljs.core.async.untap_STAR_.call(null,m,inst_30393);
var state_30425__$1 = (function (){var statearr_30454 = state_30425;
(statearr_30454[(24)] = inst_30397);

return statearr_30454;
})();
var statearr_30455_30528 = state_30425__$1;
(statearr_30455_30528[(2)] = inst_30398);

(statearr_30455_30528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (33))){
var inst_30384 = (state_30425[(25)]);
var inst_30386 = cljs.core.chunked_seq_QMARK_.call(null,inst_30384);
var state_30425__$1 = state_30425;
if(inst_30386){
var statearr_30456_30529 = state_30425__$1;
(statearr_30456_30529[(1)] = (36));

} else {
var statearr_30457_30530 = state_30425__$1;
(statearr_30457_30530[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (13))){
var inst_30316 = (state_30425[(26)]);
var inst_30319 = cljs.core.async.close_BANG_.call(null,inst_30316);
var state_30425__$1 = state_30425;
var statearr_30458_30531 = state_30425__$1;
(statearr_30458_30531[(2)] = inst_30319);

(statearr_30458_30531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (22))){
var inst_30337 = (state_30425[(8)]);
var inst_30340 = cljs.core.async.close_BANG_.call(null,inst_30337);
var state_30425__$1 = state_30425;
var statearr_30459_30532 = state_30425__$1;
(statearr_30459_30532[(2)] = inst_30340);

(statearr_30459_30532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (36))){
var inst_30384 = (state_30425[(25)]);
var inst_30388 = cljs.core.chunk_first.call(null,inst_30384);
var inst_30389 = cljs.core.chunk_rest.call(null,inst_30384);
var inst_30390 = cljs.core.count.call(null,inst_30388);
var inst_30365 = inst_30389;
var inst_30366 = inst_30388;
var inst_30367 = inst_30390;
var inst_30368 = (0);
var state_30425__$1 = (function (){var statearr_30460 = state_30425;
(statearr_30460[(9)] = inst_30368);

(statearr_30460[(20)] = inst_30365);

(statearr_30460[(21)] = inst_30367);

(statearr_30460[(11)] = inst_30366);

return statearr_30460;
})();
var statearr_30461_30533 = state_30425__$1;
(statearr_30461_30533[(2)] = null);

(statearr_30461_30533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (41))){
var inst_30384 = (state_30425[(25)]);
var inst_30400 = (state_30425[(2)]);
var inst_30401 = cljs.core.next.call(null,inst_30384);
var inst_30365 = inst_30401;
var inst_30366 = null;
var inst_30367 = (0);
var inst_30368 = (0);
var state_30425__$1 = (function (){var statearr_30462 = state_30425;
(statearr_30462[(9)] = inst_30368);

(statearr_30462[(27)] = inst_30400);

(statearr_30462[(20)] = inst_30365);

(statearr_30462[(21)] = inst_30367);

(statearr_30462[(11)] = inst_30366);

return statearr_30462;
})();
var statearr_30463_30534 = state_30425__$1;
(statearr_30463_30534[(2)] = null);

(statearr_30463_30534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (43))){
var state_30425__$1 = state_30425;
var statearr_30464_30535 = state_30425__$1;
(statearr_30464_30535[(2)] = null);

(statearr_30464_30535[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (29))){
var inst_30409 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30465_30536 = state_30425__$1;
(statearr_30465_30536[(2)] = inst_30409);

(statearr_30465_30536[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (44))){
var inst_30418 = (state_30425[(2)]);
var state_30425__$1 = (function (){var statearr_30466 = state_30425;
(statearr_30466[(28)] = inst_30418);

return statearr_30466;
})();
var statearr_30467_30537 = state_30425__$1;
(statearr_30467_30537[(2)] = null);

(statearr_30467_30537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (6))){
var inst_30357 = (state_30425[(29)]);
var inst_30356 = cljs.core.deref.call(null,cs);
var inst_30357__$1 = cljs.core.keys.call(null,inst_30356);
var inst_30358 = cljs.core.count.call(null,inst_30357__$1);
var inst_30359 = cljs.core.reset_BANG_.call(null,dctr,inst_30358);
var inst_30364 = cljs.core.seq.call(null,inst_30357__$1);
var inst_30365 = inst_30364;
var inst_30366 = null;
var inst_30367 = (0);
var inst_30368 = (0);
var state_30425__$1 = (function (){var statearr_30468 = state_30425;
(statearr_30468[(9)] = inst_30368);

(statearr_30468[(29)] = inst_30357__$1);

(statearr_30468[(30)] = inst_30359);

(statearr_30468[(20)] = inst_30365);

(statearr_30468[(21)] = inst_30367);

(statearr_30468[(11)] = inst_30366);

return statearr_30468;
})();
var statearr_30469_30538 = state_30425__$1;
(statearr_30469_30538[(2)] = null);

(statearr_30469_30538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (28))){
var inst_30384 = (state_30425[(25)]);
var inst_30365 = (state_30425[(20)]);
var inst_30384__$1 = cljs.core.seq.call(null,inst_30365);
var state_30425__$1 = (function (){var statearr_30470 = state_30425;
(statearr_30470[(25)] = inst_30384__$1);

return statearr_30470;
})();
if(inst_30384__$1){
var statearr_30471_30539 = state_30425__$1;
(statearr_30471_30539[(1)] = (33));

} else {
var statearr_30472_30540 = state_30425__$1;
(statearr_30472_30540[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (25))){
var inst_30368 = (state_30425[(9)]);
var inst_30367 = (state_30425[(21)]);
var inst_30370 = (inst_30368 < inst_30367);
var inst_30371 = inst_30370;
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30371)){
var statearr_30473_30541 = state_30425__$1;
(statearr_30473_30541[(1)] = (27));

} else {
var statearr_30474_30542 = state_30425__$1;
(statearr_30474_30542[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (34))){
var state_30425__$1 = state_30425;
var statearr_30475_30543 = state_30425__$1;
(statearr_30475_30543[(2)] = null);

(statearr_30475_30543[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (17))){
var state_30425__$1 = state_30425;
var statearr_30476_30544 = state_30425__$1;
(statearr_30476_30544[(2)] = null);

(statearr_30476_30544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (3))){
var inst_30423 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30425__$1,inst_30423);
} else {
if((state_val_30426 === (12))){
var inst_30352 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30477_30545 = state_30425__$1;
(statearr_30477_30545[(2)] = inst_30352);

(statearr_30477_30545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (2))){
var state_30425__$1 = state_30425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30425__$1,(4),ch);
} else {
if((state_val_30426 === (23))){
var state_30425__$1 = state_30425;
var statearr_30478_30546 = state_30425__$1;
(statearr_30478_30546[(2)] = null);

(statearr_30478_30546[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (35))){
var inst_30407 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30479_30547 = state_30425__$1;
(statearr_30479_30547[(2)] = inst_30407);

(statearr_30479_30547[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (19))){
var inst_30326 = (state_30425[(7)]);
var inst_30330 = cljs.core.chunk_first.call(null,inst_30326);
var inst_30331 = cljs.core.chunk_rest.call(null,inst_30326);
var inst_30332 = cljs.core.count.call(null,inst_30330);
var inst_30306 = inst_30331;
var inst_30307 = inst_30330;
var inst_30308 = inst_30332;
var inst_30309 = (0);
var state_30425__$1 = (function (){var statearr_30480 = state_30425;
(statearr_30480[(13)] = inst_30309);

(statearr_30480[(14)] = inst_30307);

(statearr_30480[(16)] = inst_30308);

(statearr_30480[(17)] = inst_30306);

return statearr_30480;
})();
var statearr_30481_30548 = state_30425__$1;
(statearr_30481_30548[(2)] = null);

(statearr_30481_30548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (11))){
var inst_30326 = (state_30425[(7)]);
var inst_30306 = (state_30425[(17)]);
var inst_30326__$1 = cljs.core.seq.call(null,inst_30306);
var state_30425__$1 = (function (){var statearr_30482 = state_30425;
(statearr_30482[(7)] = inst_30326__$1);

return statearr_30482;
})();
if(inst_30326__$1){
var statearr_30483_30549 = state_30425__$1;
(statearr_30483_30549[(1)] = (16));

} else {
var statearr_30484_30550 = state_30425__$1;
(statearr_30484_30550[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (9))){
var inst_30354 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30485_30551 = state_30425__$1;
(statearr_30485_30551[(2)] = inst_30354);

(statearr_30485_30551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (5))){
var inst_30304 = cljs.core.deref.call(null,cs);
var inst_30305 = cljs.core.seq.call(null,inst_30304);
var inst_30306 = inst_30305;
var inst_30307 = null;
var inst_30308 = (0);
var inst_30309 = (0);
var state_30425__$1 = (function (){var statearr_30486 = state_30425;
(statearr_30486[(13)] = inst_30309);

(statearr_30486[(14)] = inst_30307);

(statearr_30486[(16)] = inst_30308);

(statearr_30486[(17)] = inst_30306);

return statearr_30486;
})();
var statearr_30487_30552 = state_30425__$1;
(statearr_30487_30552[(2)] = null);

(statearr_30487_30552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (14))){
var state_30425__$1 = state_30425;
var statearr_30488_30553 = state_30425__$1;
(statearr_30488_30553[(2)] = null);

(statearr_30488_30553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (45))){
var inst_30415 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30489_30554 = state_30425__$1;
(statearr_30489_30554[(2)] = inst_30415);

(statearr_30489_30554[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (26))){
var inst_30357 = (state_30425[(29)]);
var inst_30411 = (state_30425[(2)]);
var inst_30412 = cljs.core.seq.call(null,inst_30357);
var state_30425__$1 = (function (){var statearr_30490 = state_30425;
(statearr_30490[(31)] = inst_30411);

return statearr_30490;
})();
if(inst_30412){
var statearr_30491_30555 = state_30425__$1;
(statearr_30491_30555[(1)] = (42));

} else {
var statearr_30492_30556 = state_30425__$1;
(statearr_30492_30556[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (16))){
var inst_30326 = (state_30425[(7)]);
var inst_30328 = cljs.core.chunked_seq_QMARK_.call(null,inst_30326);
var state_30425__$1 = state_30425;
if(inst_30328){
var statearr_30493_30557 = state_30425__$1;
(statearr_30493_30557[(1)] = (19));

} else {
var statearr_30494_30558 = state_30425__$1;
(statearr_30494_30558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (38))){
var inst_30404 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30495_30559 = state_30425__$1;
(statearr_30495_30559[(2)] = inst_30404);

(statearr_30495_30559[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (30))){
var state_30425__$1 = state_30425;
var statearr_30496_30560 = state_30425__$1;
(statearr_30496_30560[(2)] = null);

(statearr_30496_30560[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (10))){
var inst_30309 = (state_30425[(13)]);
var inst_30307 = (state_30425[(14)]);
var inst_30315 = cljs.core._nth.call(null,inst_30307,inst_30309);
var inst_30316 = cljs.core.nth.call(null,inst_30315,(0),null);
var inst_30317 = cljs.core.nth.call(null,inst_30315,(1),null);
var state_30425__$1 = (function (){var statearr_30497 = state_30425;
(statearr_30497[(26)] = inst_30316);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30317)){
var statearr_30498_30561 = state_30425__$1;
(statearr_30498_30561[(1)] = (13));

} else {
var statearr_30499_30562 = state_30425__$1;
(statearr_30499_30562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (18))){
var inst_30350 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30500_30563 = state_30425__$1;
(statearr_30500_30563[(2)] = inst_30350);

(statearr_30500_30563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (42))){
var state_30425__$1 = state_30425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30425__$1,(45),dchan);
} else {
if((state_val_30426 === (37))){
var inst_30297 = (state_30425[(10)]);
var inst_30393 = (state_30425[(23)]);
var inst_30384 = (state_30425[(25)]);
var inst_30393__$1 = cljs.core.first.call(null,inst_30384);
var inst_30394 = cljs.core.async.put_BANG_.call(null,inst_30393__$1,inst_30297,done);
var state_30425__$1 = (function (){var statearr_30501 = state_30425;
(statearr_30501[(23)] = inst_30393__$1);

return statearr_30501;
})();
if(cljs.core.truth_(inst_30394)){
var statearr_30502_30564 = state_30425__$1;
(statearr_30502_30564[(1)] = (39));

} else {
var statearr_30503_30565 = state_30425__$1;
(statearr_30503_30565[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (8))){
var inst_30309 = (state_30425[(13)]);
var inst_30308 = (state_30425[(16)]);
var inst_30311 = (inst_30309 < inst_30308);
var inst_30312 = inst_30311;
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30312)){
var statearr_30504_30566 = state_30425__$1;
(statearr_30504_30566[(1)] = (10));

} else {
var statearr_30505_30567 = state_30425__$1;
(statearr_30505_30567[(1)] = (11));

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
});})(c__18618__auto___30513,cs,m,dchan,dctr,done))
;
return ((function (switch__18562__auto__,c__18618__auto___30513,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30509[(0)] = state_machine__18563__auto__);

(statearr_30509[(1)] = (1));

return statearr_30509;
});
var state_machine__18563__auto____1 = (function (state_30425){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30510){if((e30510 instanceof Object)){
var ex__18566__auto__ = e30510;
var statearr_30511_30568 = state_30425;
(statearr_30511_30568[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30569 = state_30425;
state_30425 = G__30569;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30425){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___30513,cs,m,dchan,dctr,done))
})();
var state__18620__auto__ = (function (){var statearr_30512 = f__18619__auto__.call(null);
(statearr_30512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30513);

return statearr_30512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___30513,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj30571 = {};
return obj30571;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__30572){
var map__30577 = p__30572;
var map__30577__$1 = ((cljs.core.seq_QMARK_.call(null,map__30577))?cljs.core.apply.call(null,cljs.core.hash_map,map__30577):map__30577);
var opts = map__30577__$1;
var statearr_30578_30581 = state;
(statearr_30578_30581[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__30577,map__30577__$1,opts){
return (function (val){
var statearr_30579_30582 = state;
(statearr_30579_30582[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30577,map__30577__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30580_30583 = state;
(statearr_30580_30583[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__30572 = null;
if (arguments.length > 3) {
var G__30584__i = 0, G__30584__a = new Array(arguments.length -  3);
while (G__30584__i < G__30584__a.length) {G__30584__a[G__30584__i] = arguments[G__30584__i + 3]; ++G__30584__i;}
  p__30572 = new cljs.core.IndexedSeq(G__30584__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__30572);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__30585){
var state = cljs.core.first(arglist__30585);
arglist__30585 = cljs.core.next(arglist__30585);
var cont_block = cljs.core.first(arglist__30585);
arglist__30585 = cljs.core.next(arglist__30585);
var ports = cljs.core.first(arglist__30585);
var p__30572 = cljs.core.rest(arglist__30585);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__30572);
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
if(typeof cljs.core.async.t30705 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30705 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30706){
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
this.meta30706 = meta30706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30705.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30705.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30705.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30705.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30705.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30705.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t30705.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30707){
var self__ = this;
var _30707__$1 = this;
return self__.meta30706;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30707,meta30706__$1){
var self__ = this;
var _30707__$1 = this;
return (new cljs.core.async.t30705(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30706__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30705.cljs$lang$type = true;

cljs.core.async.t30705.cljs$lang$ctorStr = "cljs.core.async/t30705";

cljs.core.async.t30705.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30705");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30705 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30705(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30706){
return (new cljs.core.async.t30705(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30706));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30705(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18618__auto___30824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___30824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___30824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30777){
var state_val_30778 = (state_30777[(1)]);
if((state_val_30778 === (7))){
var inst_30721 = (state_30777[(7)]);
var inst_30726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30721);
var state_30777__$1 = state_30777;
var statearr_30779_30825 = state_30777__$1;
(statearr_30779_30825[(2)] = inst_30726);

(statearr_30779_30825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (20))){
var inst_30736 = (state_30777[(8)]);
var state_30777__$1 = state_30777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30777__$1,(23),out,inst_30736);
} else {
if((state_val_30778 === (1))){
var inst_30711 = (state_30777[(9)]);
var inst_30711__$1 = calc_state.call(null);
var inst_30712 = cljs.core.seq_QMARK_.call(null,inst_30711__$1);
var state_30777__$1 = (function (){var statearr_30780 = state_30777;
(statearr_30780[(9)] = inst_30711__$1);

return statearr_30780;
})();
if(inst_30712){
var statearr_30781_30826 = state_30777__$1;
(statearr_30781_30826[(1)] = (2));

} else {
var statearr_30782_30827 = state_30777__$1;
(statearr_30782_30827[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (24))){
var inst_30729 = (state_30777[(10)]);
var inst_30721 = inst_30729;
var state_30777__$1 = (function (){var statearr_30783 = state_30777;
(statearr_30783[(7)] = inst_30721);

return statearr_30783;
})();
var statearr_30784_30828 = state_30777__$1;
(statearr_30784_30828[(2)] = null);

(statearr_30784_30828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (4))){
var inst_30711 = (state_30777[(9)]);
var inst_30717 = (state_30777[(2)]);
var inst_30718 = cljs.core.get.call(null,inst_30717,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30719 = cljs.core.get.call(null,inst_30717,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30720 = cljs.core.get.call(null,inst_30717,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30721 = inst_30711;
var state_30777__$1 = (function (){var statearr_30785 = state_30777;
(statearr_30785[(11)] = inst_30718);

(statearr_30785[(12)] = inst_30719);

(statearr_30785[(7)] = inst_30721);

(statearr_30785[(13)] = inst_30720);

return statearr_30785;
})();
var statearr_30786_30829 = state_30777__$1;
(statearr_30786_30829[(2)] = null);

(statearr_30786_30829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (15))){
var state_30777__$1 = state_30777;
var statearr_30787_30830 = state_30777__$1;
(statearr_30787_30830[(2)] = null);

(statearr_30787_30830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (21))){
var inst_30729 = (state_30777[(10)]);
var inst_30721 = inst_30729;
var state_30777__$1 = (function (){var statearr_30788 = state_30777;
(statearr_30788[(7)] = inst_30721);

return statearr_30788;
})();
var statearr_30789_30831 = state_30777__$1;
(statearr_30789_30831[(2)] = null);

(statearr_30789_30831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (13))){
var inst_30773 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
var statearr_30790_30832 = state_30777__$1;
(statearr_30790_30832[(2)] = inst_30773);

(statearr_30790_30832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (22))){
var inst_30771 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
var statearr_30791_30833 = state_30777__$1;
(statearr_30791_30833[(2)] = inst_30771);

(statearr_30791_30833[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (6))){
var inst_30775 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30777__$1,inst_30775);
} else {
if((state_val_30778 === (25))){
var state_30777__$1 = state_30777;
var statearr_30792_30834 = state_30777__$1;
(statearr_30792_30834[(2)] = null);

(statearr_30792_30834[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (17))){
var inst_30751 = (state_30777[(14)]);
var state_30777__$1 = state_30777;
var statearr_30793_30835 = state_30777__$1;
(statearr_30793_30835[(2)] = inst_30751);

(statearr_30793_30835[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (3))){
var inst_30711 = (state_30777[(9)]);
var state_30777__$1 = state_30777;
var statearr_30794_30836 = state_30777__$1;
(statearr_30794_30836[(2)] = inst_30711);

(statearr_30794_30836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (12))){
var inst_30737 = (state_30777[(15)]);
var inst_30732 = (state_30777[(16)]);
var inst_30751 = (state_30777[(14)]);
var inst_30751__$1 = inst_30732.call(null,inst_30737);
var state_30777__$1 = (function (){var statearr_30795 = state_30777;
(statearr_30795[(14)] = inst_30751__$1);

return statearr_30795;
})();
if(cljs.core.truth_(inst_30751__$1)){
var statearr_30796_30837 = state_30777__$1;
(statearr_30796_30837[(1)] = (17));

} else {
var statearr_30797_30838 = state_30777__$1;
(statearr_30797_30838[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (2))){
var inst_30711 = (state_30777[(9)]);
var inst_30714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30711);
var state_30777__$1 = state_30777;
var statearr_30798_30839 = state_30777__$1;
(statearr_30798_30839[(2)] = inst_30714);

(statearr_30798_30839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (23))){
var inst_30762 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
if(cljs.core.truth_(inst_30762)){
var statearr_30799_30840 = state_30777__$1;
(statearr_30799_30840[(1)] = (24));

} else {
var statearr_30800_30841 = state_30777__$1;
(statearr_30800_30841[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (19))){
var inst_30759 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
if(cljs.core.truth_(inst_30759)){
var statearr_30801_30842 = state_30777__$1;
(statearr_30801_30842[(1)] = (20));

} else {
var statearr_30802_30843 = state_30777__$1;
(statearr_30802_30843[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (11))){
var inst_30736 = (state_30777[(8)]);
var inst_30742 = (inst_30736 == null);
var state_30777__$1 = state_30777;
if(cljs.core.truth_(inst_30742)){
var statearr_30803_30844 = state_30777__$1;
(statearr_30803_30844[(1)] = (14));

} else {
var statearr_30804_30845 = state_30777__$1;
(statearr_30804_30845[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (9))){
var inst_30729 = (state_30777[(10)]);
var inst_30729__$1 = (state_30777[(2)]);
var inst_30730 = cljs.core.get.call(null,inst_30729__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30731 = cljs.core.get.call(null,inst_30729__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30732 = cljs.core.get.call(null,inst_30729__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30777__$1 = (function (){var statearr_30805 = state_30777;
(statearr_30805[(16)] = inst_30732);

(statearr_30805[(17)] = inst_30731);

(statearr_30805[(10)] = inst_30729__$1);

return statearr_30805;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30777__$1,(10),inst_30730);
} else {
if((state_val_30778 === (5))){
var inst_30721 = (state_30777[(7)]);
var inst_30724 = cljs.core.seq_QMARK_.call(null,inst_30721);
var state_30777__$1 = state_30777;
if(inst_30724){
var statearr_30806_30846 = state_30777__$1;
(statearr_30806_30846[(1)] = (7));

} else {
var statearr_30807_30847 = state_30777__$1;
(statearr_30807_30847[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (14))){
var inst_30737 = (state_30777[(15)]);
var inst_30744 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30737);
var state_30777__$1 = state_30777;
var statearr_30808_30848 = state_30777__$1;
(statearr_30808_30848[(2)] = inst_30744);

(statearr_30808_30848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (26))){
var inst_30767 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
var statearr_30809_30849 = state_30777__$1;
(statearr_30809_30849[(2)] = inst_30767);

(statearr_30809_30849[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (16))){
var inst_30747 = (state_30777[(2)]);
var inst_30748 = calc_state.call(null);
var inst_30721 = inst_30748;
var state_30777__$1 = (function (){var statearr_30810 = state_30777;
(statearr_30810[(18)] = inst_30747);

(statearr_30810[(7)] = inst_30721);

return statearr_30810;
})();
var statearr_30811_30850 = state_30777__$1;
(statearr_30811_30850[(2)] = null);

(statearr_30811_30850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (10))){
var inst_30737 = (state_30777[(15)]);
var inst_30736 = (state_30777[(8)]);
var inst_30735 = (state_30777[(2)]);
var inst_30736__$1 = cljs.core.nth.call(null,inst_30735,(0),null);
var inst_30737__$1 = cljs.core.nth.call(null,inst_30735,(1),null);
var inst_30738 = (inst_30736__$1 == null);
var inst_30739 = cljs.core._EQ_.call(null,inst_30737__$1,change);
var inst_30740 = (inst_30738) || (inst_30739);
var state_30777__$1 = (function (){var statearr_30812 = state_30777;
(statearr_30812[(15)] = inst_30737__$1);

(statearr_30812[(8)] = inst_30736__$1);

return statearr_30812;
})();
if(cljs.core.truth_(inst_30740)){
var statearr_30813_30851 = state_30777__$1;
(statearr_30813_30851[(1)] = (11));

} else {
var statearr_30814_30852 = state_30777__$1;
(statearr_30814_30852[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (18))){
var inst_30737 = (state_30777[(15)]);
var inst_30732 = (state_30777[(16)]);
var inst_30731 = (state_30777[(17)]);
var inst_30754 = cljs.core.empty_QMARK_.call(null,inst_30732);
var inst_30755 = inst_30731.call(null,inst_30737);
var inst_30756 = cljs.core.not.call(null,inst_30755);
var inst_30757 = (inst_30754) && (inst_30756);
var state_30777__$1 = state_30777;
var statearr_30815_30853 = state_30777__$1;
(statearr_30815_30853[(2)] = inst_30757);

(statearr_30815_30853[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (8))){
var inst_30721 = (state_30777[(7)]);
var state_30777__$1 = state_30777;
var statearr_30816_30854 = state_30777__$1;
(statearr_30816_30854[(2)] = inst_30721);

(statearr_30816_30854[(1)] = (9));


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
});})(c__18618__auto___30824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18562__auto__,c__18618__auto___30824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_30820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30820[(0)] = state_machine__18563__auto__);

(statearr_30820[(1)] = (1));

return statearr_30820;
});
var state_machine__18563__auto____1 = (function (state_30777){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_30777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e30821){if((e30821 instanceof Object)){
var ex__18566__auto__ = e30821;
var statearr_30822_30855 = state_30777;
(statearr_30822_30855[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30856 = state_30777;
state_30777 = G__30856;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_30777){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_30777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___30824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18620__auto__ = (function (){var statearr_30823 = f__18619__auto__.call(null);
(statearr_30823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___30824);

return statearr_30823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___30824,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30858 = {};
return obj30858;
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
return (function (p1__30859_SHARP_){
if(cljs.core.truth_(p1__30859_SHARP_.call(null,topic))){
return p1__30859_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30859_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16145__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30982 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30982 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30983){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30983 = meta30983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30982.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30982.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30982.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t30982.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30982.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30982.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30984){
var self__ = this;
var _30984__$1 = this;
return self__.meta30983;
});})(mults,ensure_mult))
;

cljs.core.async.t30982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30984,meta30983__$1){
var self__ = this;
var _30984__$1 = this;
return (new cljs.core.async.t30982(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30983__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30982.cljs$lang$type = true;

cljs.core.async.t30982.cljs$lang$ctorStr = "cljs.core.async/t30982";

cljs.core.async.t30982.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t30982");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30982 = ((function (mults,ensure_mult){
return (function __GT_t30982(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30983){
return (new cljs.core.async.t30982(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30983));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30982(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18618__auto___31104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31104,mults,ensure_mult,p){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31104,mults,ensure_mult,p){
return (function (state_31056){
var state_val_31057 = (state_31056[(1)]);
if((state_val_31057 === (7))){
var inst_31052 = (state_31056[(2)]);
var state_31056__$1 = state_31056;
var statearr_31058_31105 = state_31056__$1;
(statearr_31058_31105[(2)] = inst_31052);

(statearr_31058_31105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (20))){
var state_31056__$1 = state_31056;
var statearr_31059_31106 = state_31056__$1;
(statearr_31059_31106[(2)] = null);

(statearr_31059_31106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (1))){
var state_31056__$1 = state_31056;
var statearr_31060_31107 = state_31056__$1;
(statearr_31060_31107[(2)] = null);

(statearr_31060_31107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (24))){
var inst_31035 = (state_31056[(7)]);
var inst_31044 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31035);
var state_31056__$1 = state_31056;
var statearr_31061_31108 = state_31056__$1;
(statearr_31061_31108[(2)] = inst_31044);

(statearr_31061_31108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (4))){
var inst_30987 = (state_31056[(8)]);
var inst_30987__$1 = (state_31056[(2)]);
var inst_30988 = (inst_30987__$1 == null);
var state_31056__$1 = (function (){var statearr_31062 = state_31056;
(statearr_31062[(8)] = inst_30987__$1);

return statearr_31062;
})();
if(cljs.core.truth_(inst_30988)){
var statearr_31063_31109 = state_31056__$1;
(statearr_31063_31109[(1)] = (5));

} else {
var statearr_31064_31110 = state_31056__$1;
(statearr_31064_31110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (15))){
var inst_31029 = (state_31056[(2)]);
var state_31056__$1 = state_31056;
var statearr_31065_31111 = state_31056__$1;
(statearr_31065_31111[(2)] = inst_31029);

(statearr_31065_31111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (21))){
var inst_31049 = (state_31056[(2)]);
var state_31056__$1 = (function (){var statearr_31066 = state_31056;
(statearr_31066[(9)] = inst_31049);

return statearr_31066;
})();
var statearr_31067_31112 = state_31056__$1;
(statearr_31067_31112[(2)] = null);

(statearr_31067_31112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (13))){
var inst_31011 = (state_31056[(10)]);
var inst_31013 = cljs.core.chunked_seq_QMARK_.call(null,inst_31011);
var state_31056__$1 = state_31056;
if(inst_31013){
var statearr_31068_31113 = state_31056__$1;
(statearr_31068_31113[(1)] = (16));

} else {
var statearr_31069_31114 = state_31056__$1;
(statearr_31069_31114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (22))){
var inst_31041 = (state_31056[(2)]);
var state_31056__$1 = state_31056;
if(cljs.core.truth_(inst_31041)){
var statearr_31070_31115 = state_31056__$1;
(statearr_31070_31115[(1)] = (23));

} else {
var statearr_31071_31116 = state_31056__$1;
(statearr_31071_31116[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (6))){
var inst_30987 = (state_31056[(8)]);
var inst_31035 = (state_31056[(7)]);
var inst_31037 = (state_31056[(11)]);
var inst_31035__$1 = topic_fn.call(null,inst_30987);
var inst_31036 = cljs.core.deref.call(null,mults);
var inst_31037__$1 = cljs.core.get.call(null,inst_31036,inst_31035__$1);
var state_31056__$1 = (function (){var statearr_31072 = state_31056;
(statearr_31072[(7)] = inst_31035__$1);

(statearr_31072[(11)] = inst_31037__$1);

return statearr_31072;
})();
if(cljs.core.truth_(inst_31037__$1)){
var statearr_31073_31117 = state_31056__$1;
(statearr_31073_31117[(1)] = (19));

} else {
var statearr_31074_31118 = state_31056__$1;
(statearr_31074_31118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (25))){
var inst_31046 = (state_31056[(2)]);
var state_31056__$1 = state_31056;
var statearr_31075_31119 = state_31056__$1;
(statearr_31075_31119[(2)] = inst_31046);

(statearr_31075_31119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (17))){
var inst_31011 = (state_31056[(10)]);
var inst_31020 = cljs.core.first.call(null,inst_31011);
var inst_31021 = cljs.core.async.muxch_STAR_.call(null,inst_31020);
var inst_31022 = cljs.core.async.close_BANG_.call(null,inst_31021);
var inst_31023 = cljs.core.next.call(null,inst_31011);
var inst_30997 = inst_31023;
var inst_30998 = null;
var inst_30999 = (0);
var inst_31000 = (0);
var state_31056__$1 = (function (){var statearr_31076 = state_31056;
(statearr_31076[(12)] = inst_30997);

(statearr_31076[(13)] = inst_31000);

(statearr_31076[(14)] = inst_31022);

(statearr_31076[(15)] = inst_30998);

(statearr_31076[(16)] = inst_30999);

return statearr_31076;
})();
var statearr_31077_31120 = state_31056__$1;
(statearr_31077_31120[(2)] = null);

(statearr_31077_31120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (3))){
var inst_31054 = (state_31056[(2)]);
var state_31056__$1 = state_31056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31056__$1,inst_31054);
} else {
if((state_val_31057 === (12))){
var inst_31031 = (state_31056[(2)]);
var state_31056__$1 = state_31056;
var statearr_31078_31121 = state_31056__$1;
(statearr_31078_31121[(2)] = inst_31031);

(statearr_31078_31121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (2))){
var state_31056__$1 = state_31056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31056__$1,(4),ch);
} else {
if((state_val_31057 === (23))){
var state_31056__$1 = state_31056;
var statearr_31079_31122 = state_31056__$1;
(statearr_31079_31122[(2)] = null);

(statearr_31079_31122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (19))){
var inst_30987 = (state_31056[(8)]);
var inst_31037 = (state_31056[(11)]);
var inst_31039 = cljs.core.async.muxch_STAR_.call(null,inst_31037);
var state_31056__$1 = state_31056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31056__$1,(22),inst_31039,inst_30987);
} else {
if((state_val_31057 === (11))){
var inst_30997 = (state_31056[(12)]);
var inst_31011 = (state_31056[(10)]);
var inst_31011__$1 = cljs.core.seq.call(null,inst_30997);
var state_31056__$1 = (function (){var statearr_31080 = state_31056;
(statearr_31080[(10)] = inst_31011__$1);

return statearr_31080;
})();
if(inst_31011__$1){
var statearr_31081_31123 = state_31056__$1;
(statearr_31081_31123[(1)] = (13));

} else {
var statearr_31082_31124 = state_31056__$1;
(statearr_31082_31124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (9))){
var inst_31033 = (state_31056[(2)]);
var state_31056__$1 = state_31056;
var statearr_31083_31125 = state_31056__$1;
(statearr_31083_31125[(2)] = inst_31033);

(statearr_31083_31125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (5))){
var inst_30994 = cljs.core.deref.call(null,mults);
var inst_30995 = cljs.core.vals.call(null,inst_30994);
var inst_30996 = cljs.core.seq.call(null,inst_30995);
var inst_30997 = inst_30996;
var inst_30998 = null;
var inst_30999 = (0);
var inst_31000 = (0);
var state_31056__$1 = (function (){var statearr_31084 = state_31056;
(statearr_31084[(12)] = inst_30997);

(statearr_31084[(13)] = inst_31000);

(statearr_31084[(15)] = inst_30998);

(statearr_31084[(16)] = inst_30999);

return statearr_31084;
})();
var statearr_31085_31126 = state_31056__$1;
(statearr_31085_31126[(2)] = null);

(statearr_31085_31126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (14))){
var state_31056__$1 = state_31056;
var statearr_31089_31127 = state_31056__$1;
(statearr_31089_31127[(2)] = null);

(statearr_31089_31127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (16))){
var inst_31011 = (state_31056[(10)]);
var inst_31015 = cljs.core.chunk_first.call(null,inst_31011);
var inst_31016 = cljs.core.chunk_rest.call(null,inst_31011);
var inst_31017 = cljs.core.count.call(null,inst_31015);
var inst_30997 = inst_31016;
var inst_30998 = inst_31015;
var inst_30999 = inst_31017;
var inst_31000 = (0);
var state_31056__$1 = (function (){var statearr_31090 = state_31056;
(statearr_31090[(12)] = inst_30997);

(statearr_31090[(13)] = inst_31000);

(statearr_31090[(15)] = inst_30998);

(statearr_31090[(16)] = inst_30999);

return statearr_31090;
})();
var statearr_31091_31128 = state_31056__$1;
(statearr_31091_31128[(2)] = null);

(statearr_31091_31128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (10))){
var inst_30997 = (state_31056[(12)]);
var inst_31000 = (state_31056[(13)]);
var inst_30998 = (state_31056[(15)]);
var inst_30999 = (state_31056[(16)]);
var inst_31005 = cljs.core._nth.call(null,inst_30998,inst_31000);
var inst_31006 = cljs.core.async.muxch_STAR_.call(null,inst_31005);
var inst_31007 = cljs.core.async.close_BANG_.call(null,inst_31006);
var inst_31008 = (inst_31000 + (1));
var tmp31086 = inst_30997;
var tmp31087 = inst_30998;
var tmp31088 = inst_30999;
var inst_30997__$1 = tmp31086;
var inst_30998__$1 = tmp31087;
var inst_30999__$1 = tmp31088;
var inst_31000__$1 = inst_31008;
var state_31056__$1 = (function (){var statearr_31092 = state_31056;
(statearr_31092[(12)] = inst_30997__$1);

(statearr_31092[(17)] = inst_31007);

(statearr_31092[(13)] = inst_31000__$1);

(statearr_31092[(15)] = inst_30998__$1);

(statearr_31092[(16)] = inst_30999__$1);

return statearr_31092;
})();
var statearr_31093_31129 = state_31056__$1;
(statearr_31093_31129[(2)] = null);

(statearr_31093_31129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (18))){
var inst_31026 = (state_31056[(2)]);
var state_31056__$1 = state_31056;
var statearr_31094_31130 = state_31056__$1;
(statearr_31094_31130[(2)] = inst_31026);

(statearr_31094_31130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31057 === (8))){
var inst_31000 = (state_31056[(13)]);
var inst_30999 = (state_31056[(16)]);
var inst_31002 = (inst_31000 < inst_30999);
var inst_31003 = inst_31002;
var state_31056__$1 = state_31056;
if(cljs.core.truth_(inst_31003)){
var statearr_31095_31131 = state_31056__$1;
(statearr_31095_31131[(1)] = (10));

} else {
var statearr_31096_31132 = state_31056__$1;
(statearr_31096_31132[(1)] = (11));

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
});})(c__18618__auto___31104,mults,ensure_mult,p))
;
return ((function (switch__18562__auto__,c__18618__auto___31104,mults,ensure_mult,p){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31100[(0)] = state_machine__18563__auto__);

(statearr_31100[(1)] = (1));

return statearr_31100;
});
var state_machine__18563__auto____1 = (function (state_31056){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31101){if((e31101 instanceof Object)){
var ex__18566__auto__ = e31101;
var statearr_31102_31133 = state_31056;
(statearr_31102_31133[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31134 = state_31056;
state_31056 = G__31134;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31056){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31104,mults,ensure_mult,p))
})();
var state__18620__auto__ = (function (){var statearr_31103 = f__18619__auto__.call(null);
(statearr_31103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31104);

return statearr_31103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31104,mults,ensure_mult,p))
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
var c__18618__auto___31271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31241){
var state_val_31242 = (state_31241[(1)]);
if((state_val_31242 === (7))){
var state_31241__$1 = state_31241;
var statearr_31243_31272 = state_31241__$1;
(statearr_31243_31272[(2)] = null);

(statearr_31243_31272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (1))){
var state_31241__$1 = state_31241;
var statearr_31244_31273 = state_31241__$1;
(statearr_31244_31273[(2)] = null);

(statearr_31244_31273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (4))){
var inst_31205 = (state_31241[(7)]);
var inst_31207 = (inst_31205 < cnt);
var state_31241__$1 = state_31241;
if(cljs.core.truth_(inst_31207)){
var statearr_31245_31274 = state_31241__$1;
(statearr_31245_31274[(1)] = (6));

} else {
var statearr_31246_31275 = state_31241__$1;
(statearr_31246_31275[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (15))){
var inst_31237 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31247_31276 = state_31241__$1;
(statearr_31247_31276[(2)] = inst_31237);

(statearr_31247_31276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (13))){
var inst_31230 = cljs.core.async.close_BANG_.call(null,out);
var state_31241__$1 = state_31241;
var statearr_31248_31277 = state_31241__$1;
(statearr_31248_31277[(2)] = inst_31230);

(statearr_31248_31277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (6))){
var state_31241__$1 = state_31241;
var statearr_31249_31278 = state_31241__$1;
(statearr_31249_31278[(2)] = null);

(statearr_31249_31278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (3))){
var inst_31239 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31241__$1,inst_31239);
} else {
if((state_val_31242 === (12))){
var inst_31227 = (state_31241[(8)]);
var inst_31227__$1 = (state_31241[(2)]);
var inst_31228 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31227__$1);
var state_31241__$1 = (function (){var statearr_31250 = state_31241;
(statearr_31250[(8)] = inst_31227__$1);

return statearr_31250;
})();
if(cljs.core.truth_(inst_31228)){
var statearr_31251_31279 = state_31241__$1;
(statearr_31251_31279[(1)] = (13));

} else {
var statearr_31252_31280 = state_31241__$1;
(statearr_31252_31280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (2))){
var inst_31204 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31205 = (0);
var state_31241__$1 = (function (){var statearr_31253 = state_31241;
(statearr_31253[(7)] = inst_31205);

(statearr_31253[(9)] = inst_31204);

return statearr_31253;
})();
var statearr_31254_31281 = state_31241__$1;
(statearr_31254_31281[(2)] = null);

(statearr_31254_31281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (11))){
var inst_31205 = (state_31241[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31241,(10),Object,null,(9));
var inst_31214 = chs__$1.call(null,inst_31205);
var inst_31215 = done.call(null,inst_31205);
var inst_31216 = cljs.core.async.take_BANG_.call(null,inst_31214,inst_31215);
var state_31241__$1 = state_31241;
var statearr_31255_31282 = state_31241__$1;
(statearr_31255_31282[(2)] = inst_31216);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31241__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (9))){
var inst_31205 = (state_31241[(7)]);
var inst_31218 = (state_31241[(2)]);
var inst_31219 = (inst_31205 + (1));
var inst_31205__$1 = inst_31219;
var state_31241__$1 = (function (){var statearr_31256 = state_31241;
(statearr_31256[(10)] = inst_31218);

(statearr_31256[(7)] = inst_31205__$1);

return statearr_31256;
})();
var statearr_31257_31283 = state_31241__$1;
(statearr_31257_31283[(2)] = null);

(statearr_31257_31283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (5))){
var inst_31225 = (state_31241[(2)]);
var state_31241__$1 = (function (){var statearr_31258 = state_31241;
(statearr_31258[(11)] = inst_31225);

return statearr_31258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31241__$1,(12),dchan);
} else {
if((state_val_31242 === (14))){
var inst_31227 = (state_31241[(8)]);
var inst_31232 = cljs.core.apply.call(null,f,inst_31227);
var state_31241__$1 = state_31241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31241__$1,(16),out,inst_31232);
} else {
if((state_val_31242 === (16))){
var inst_31234 = (state_31241[(2)]);
var state_31241__$1 = (function (){var statearr_31259 = state_31241;
(statearr_31259[(12)] = inst_31234);

return statearr_31259;
})();
var statearr_31260_31284 = state_31241__$1;
(statearr_31260_31284[(2)] = null);

(statearr_31260_31284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (10))){
var inst_31209 = (state_31241[(2)]);
var inst_31210 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31241__$1 = (function (){var statearr_31261 = state_31241;
(statearr_31261[(13)] = inst_31209);

return statearr_31261;
})();
var statearr_31262_31285 = state_31241__$1;
(statearr_31262_31285[(2)] = inst_31210);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31241__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31242 === (8))){
var inst_31223 = (state_31241[(2)]);
var state_31241__$1 = state_31241;
var statearr_31263_31286 = state_31241__$1;
(statearr_31263_31286[(2)] = inst_31223);

(statearr_31263_31286[(1)] = (5));


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
});})(c__18618__auto___31271,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18562__auto__,c__18618__auto___31271,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31267[(0)] = state_machine__18563__auto__);

(statearr_31267[(1)] = (1));

return statearr_31267;
});
var state_machine__18563__auto____1 = (function (state_31241){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31268){if((e31268 instanceof Object)){
var ex__18566__auto__ = e31268;
var statearr_31269_31287 = state_31241;
(statearr_31269_31287[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31288 = state_31241;
state_31241 = G__31288;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31241){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31271,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18620__auto__ = (function (){var statearr_31270 = f__18619__auto__.call(null);
(statearr_31270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31271);

return statearr_31270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31271,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__18618__auto___31396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31396,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31396,out){
return (function (state_31372){
var state_val_31373 = (state_31372[(1)]);
if((state_val_31373 === (7))){
var inst_31352 = (state_31372[(7)]);
var inst_31351 = (state_31372[(8)]);
var inst_31351__$1 = (state_31372[(2)]);
var inst_31352__$1 = cljs.core.nth.call(null,inst_31351__$1,(0),null);
var inst_31353 = cljs.core.nth.call(null,inst_31351__$1,(1),null);
var inst_31354 = (inst_31352__$1 == null);
var state_31372__$1 = (function (){var statearr_31374 = state_31372;
(statearr_31374[(7)] = inst_31352__$1);

(statearr_31374[(9)] = inst_31353);

(statearr_31374[(8)] = inst_31351__$1);

return statearr_31374;
})();
if(cljs.core.truth_(inst_31354)){
var statearr_31375_31397 = state_31372__$1;
(statearr_31375_31397[(1)] = (8));

} else {
var statearr_31376_31398 = state_31372__$1;
(statearr_31376_31398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (1))){
var inst_31343 = cljs.core.vec.call(null,chs);
var inst_31344 = inst_31343;
var state_31372__$1 = (function (){var statearr_31377 = state_31372;
(statearr_31377[(10)] = inst_31344);

return statearr_31377;
})();
var statearr_31378_31399 = state_31372__$1;
(statearr_31378_31399[(2)] = null);

(statearr_31378_31399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (4))){
var inst_31344 = (state_31372[(10)]);
var state_31372__$1 = state_31372;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31372__$1,(7),inst_31344);
} else {
if((state_val_31373 === (6))){
var inst_31368 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31379_31400 = state_31372__$1;
(statearr_31379_31400[(2)] = inst_31368);

(statearr_31379_31400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (3))){
var inst_31370 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31372__$1,inst_31370);
} else {
if((state_val_31373 === (2))){
var inst_31344 = (state_31372[(10)]);
var inst_31346 = cljs.core.count.call(null,inst_31344);
var inst_31347 = (inst_31346 > (0));
var state_31372__$1 = state_31372;
if(cljs.core.truth_(inst_31347)){
var statearr_31381_31401 = state_31372__$1;
(statearr_31381_31401[(1)] = (4));

} else {
var statearr_31382_31402 = state_31372__$1;
(statearr_31382_31402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (11))){
var inst_31344 = (state_31372[(10)]);
var inst_31361 = (state_31372[(2)]);
var tmp31380 = inst_31344;
var inst_31344__$1 = tmp31380;
var state_31372__$1 = (function (){var statearr_31383 = state_31372;
(statearr_31383[(10)] = inst_31344__$1);

(statearr_31383[(11)] = inst_31361);

return statearr_31383;
})();
var statearr_31384_31403 = state_31372__$1;
(statearr_31384_31403[(2)] = null);

(statearr_31384_31403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (9))){
var inst_31352 = (state_31372[(7)]);
var state_31372__$1 = state_31372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31372__$1,(11),out,inst_31352);
} else {
if((state_val_31373 === (5))){
var inst_31366 = cljs.core.async.close_BANG_.call(null,out);
var state_31372__$1 = state_31372;
var statearr_31385_31404 = state_31372__$1;
(statearr_31385_31404[(2)] = inst_31366);

(statearr_31385_31404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (10))){
var inst_31364 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31386_31405 = state_31372__$1;
(statearr_31386_31405[(2)] = inst_31364);

(statearr_31386_31405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (8))){
var inst_31352 = (state_31372[(7)]);
var inst_31353 = (state_31372[(9)]);
var inst_31344 = (state_31372[(10)]);
var inst_31351 = (state_31372[(8)]);
var inst_31356 = (function (){var c = inst_31353;
var v = inst_31352;
var vec__31349 = inst_31351;
var cs = inst_31344;
return ((function (c,v,vec__31349,cs,inst_31352,inst_31353,inst_31344,inst_31351,state_val_31373,c__18618__auto___31396,out){
return (function (p1__31289_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31289_SHARP_);
});
;})(c,v,vec__31349,cs,inst_31352,inst_31353,inst_31344,inst_31351,state_val_31373,c__18618__auto___31396,out))
})();
var inst_31357 = cljs.core.filterv.call(null,inst_31356,inst_31344);
var inst_31344__$1 = inst_31357;
var state_31372__$1 = (function (){var statearr_31387 = state_31372;
(statearr_31387[(10)] = inst_31344__$1);

return statearr_31387;
})();
var statearr_31388_31406 = state_31372__$1;
(statearr_31388_31406[(2)] = null);

(statearr_31388_31406[(1)] = (2));


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
});})(c__18618__auto___31396,out))
;
return ((function (switch__18562__auto__,c__18618__auto___31396,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31392 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31392[(0)] = state_machine__18563__auto__);

(statearr_31392[(1)] = (1));

return statearr_31392;
});
var state_machine__18563__auto____1 = (function (state_31372){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31393){if((e31393 instanceof Object)){
var ex__18566__auto__ = e31393;
var statearr_31394_31407 = state_31372;
(statearr_31394_31407[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31408 = state_31372;
state_31372 = G__31408;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31372){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31396,out))
})();
var state__18620__auto__ = (function (){var statearr_31395 = f__18619__auto__.call(null);
(statearr_31395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31396);

return statearr_31395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31396,out))
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
var c__18618__auto___31501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31501,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31501,out){
return (function (state_31478){
var state_val_31479 = (state_31478[(1)]);
if((state_val_31479 === (7))){
var inst_31460 = (state_31478[(7)]);
var inst_31460__$1 = (state_31478[(2)]);
var inst_31461 = (inst_31460__$1 == null);
var inst_31462 = cljs.core.not.call(null,inst_31461);
var state_31478__$1 = (function (){var statearr_31480 = state_31478;
(statearr_31480[(7)] = inst_31460__$1);

return statearr_31480;
})();
if(inst_31462){
var statearr_31481_31502 = state_31478__$1;
(statearr_31481_31502[(1)] = (8));

} else {
var statearr_31482_31503 = state_31478__$1;
(statearr_31482_31503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (1))){
var inst_31455 = (0);
var state_31478__$1 = (function (){var statearr_31483 = state_31478;
(statearr_31483[(8)] = inst_31455);

return statearr_31483;
})();
var statearr_31484_31504 = state_31478__$1;
(statearr_31484_31504[(2)] = null);

(statearr_31484_31504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (4))){
var state_31478__$1 = state_31478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31478__$1,(7),ch);
} else {
if((state_val_31479 === (6))){
var inst_31473 = (state_31478[(2)]);
var state_31478__$1 = state_31478;
var statearr_31485_31505 = state_31478__$1;
(statearr_31485_31505[(2)] = inst_31473);

(statearr_31485_31505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (3))){
var inst_31475 = (state_31478[(2)]);
var inst_31476 = cljs.core.async.close_BANG_.call(null,out);
var state_31478__$1 = (function (){var statearr_31486 = state_31478;
(statearr_31486[(9)] = inst_31475);

return statearr_31486;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31478__$1,inst_31476);
} else {
if((state_val_31479 === (2))){
var inst_31455 = (state_31478[(8)]);
var inst_31457 = (inst_31455 < n);
var state_31478__$1 = state_31478;
if(cljs.core.truth_(inst_31457)){
var statearr_31487_31506 = state_31478__$1;
(statearr_31487_31506[(1)] = (4));

} else {
var statearr_31488_31507 = state_31478__$1;
(statearr_31488_31507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (11))){
var inst_31455 = (state_31478[(8)]);
var inst_31465 = (state_31478[(2)]);
var inst_31466 = (inst_31455 + (1));
var inst_31455__$1 = inst_31466;
var state_31478__$1 = (function (){var statearr_31489 = state_31478;
(statearr_31489[(10)] = inst_31465);

(statearr_31489[(8)] = inst_31455__$1);

return statearr_31489;
})();
var statearr_31490_31508 = state_31478__$1;
(statearr_31490_31508[(2)] = null);

(statearr_31490_31508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (9))){
var state_31478__$1 = state_31478;
var statearr_31491_31509 = state_31478__$1;
(statearr_31491_31509[(2)] = null);

(statearr_31491_31509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (5))){
var state_31478__$1 = state_31478;
var statearr_31492_31510 = state_31478__$1;
(statearr_31492_31510[(2)] = null);

(statearr_31492_31510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (10))){
var inst_31470 = (state_31478[(2)]);
var state_31478__$1 = state_31478;
var statearr_31493_31511 = state_31478__$1;
(statearr_31493_31511[(2)] = inst_31470);

(statearr_31493_31511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31479 === (8))){
var inst_31460 = (state_31478[(7)]);
var state_31478__$1 = state_31478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31478__$1,(11),out,inst_31460);
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
});})(c__18618__auto___31501,out))
;
return ((function (switch__18562__auto__,c__18618__auto___31501,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31497[(0)] = state_machine__18563__auto__);

(statearr_31497[(1)] = (1));

return statearr_31497;
});
var state_machine__18563__auto____1 = (function (state_31478){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31498){if((e31498 instanceof Object)){
var ex__18566__auto__ = e31498;
var statearr_31499_31512 = state_31478;
(statearr_31499_31512[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31513 = state_31478;
state_31478 = G__31513;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31478){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31501,out))
})();
var state__18620__auto__ = (function (){var statearr_31500 = f__18619__auto__.call(null);
(statearr_31500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31501);

return statearr_31500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31501,out))
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
if(typeof cljs.core.async.t31521 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31521 = (function (ch,f,map_LT_,meta31522){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31522 = meta31522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31521.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31521.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31524 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31524 = (function (fn1,_,meta31522,map_LT_,f,ch,meta31525){
this.fn1 = fn1;
this._ = _;
this.meta31522 = meta31522;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31525 = meta31525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31524.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31514_SHARP_){
return f1.call(null,(((p1__31514_SHARP_ == null))?null:self__.f.call(null,p1__31514_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31526){
var self__ = this;
var _31526__$1 = this;
return self__.meta31525;
});})(___$1))
;

cljs.core.async.t31524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31526,meta31525__$1){
var self__ = this;
var _31526__$1 = this;
return (new cljs.core.async.t31524(self__.fn1,self__._,self__.meta31522,self__.map_LT_,self__.f,self__.ch,meta31525__$1));
});})(___$1))
;

cljs.core.async.t31524.cljs$lang$type = true;

cljs.core.async.t31524.cljs$lang$ctorStr = "cljs.core.async/t31524";

cljs.core.async.t31524.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31524");
});})(___$1))
;

cljs.core.async.__GT_t31524 = ((function (___$1){
return (function __GT_t31524(fn1__$1,___$2,meta31522__$1,map_LT___$1,f__$1,ch__$1,meta31525){
return (new cljs.core.async.t31524(fn1__$1,___$2,meta31522__$1,map_LT___$1,f__$1,ch__$1,meta31525));
});})(___$1))
;

}

return (new cljs.core.async.t31524(fn1,___$1,self__.meta31522,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t31521.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31521.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31523){
var self__ = this;
var _31523__$1 = this;
return self__.meta31522;
});

cljs.core.async.t31521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31523,meta31522__$1){
var self__ = this;
var _31523__$1 = this;
return (new cljs.core.async.t31521(self__.ch,self__.f,self__.map_LT_,meta31522__$1));
});

cljs.core.async.t31521.cljs$lang$type = true;

cljs.core.async.t31521.cljs$lang$ctorStr = "cljs.core.async/t31521";

cljs.core.async.t31521.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31521");
});

cljs.core.async.__GT_t31521 = (function __GT_t31521(ch__$1,f__$1,map_LT___$1,meta31522){
return (new cljs.core.async.t31521(ch__$1,f__$1,map_LT___$1,meta31522));
});

}

return (new cljs.core.async.t31521(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t31530 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31530 = (function (ch,f,map_GT_,meta31531){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31531 = meta31531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31530.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31530.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31530.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31532){
var self__ = this;
var _31532__$1 = this;
return self__.meta31531;
});

cljs.core.async.t31530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31532,meta31531__$1){
var self__ = this;
var _31532__$1 = this;
return (new cljs.core.async.t31530(self__.ch,self__.f,self__.map_GT_,meta31531__$1));
});

cljs.core.async.t31530.cljs$lang$type = true;

cljs.core.async.t31530.cljs$lang$ctorStr = "cljs.core.async/t31530";

cljs.core.async.t31530.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31530");
});

cljs.core.async.__GT_t31530 = (function __GT_t31530(ch__$1,f__$1,map_GT___$1,meta31531){
return (new cljs.core.async.t31530(ch__$1,f__$1,map_GT___$1,meta31531));
});

}

return (new cljs.core.async.t31530(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t31536 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31536 = (function (ch,p,filter_GT_,meta31537){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31537 = meta31537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31536.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31536.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31536.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31536.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31536.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31536.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31536.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31538){
var self__ = this;
var _31538__$1 = this;
return self__.meta31537;
});

cljs.core.async.t31536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31538,meta31537__$1){
var self__ = this;
var _31538__$1 = this;
return (new cljs.core.async.t31536(self__.ch,self__.p,self__.filter_GT_,meta31537__$1));
});

cljs.core.async.t31536.cljs$lang$type = true;

cljs.core.async.t31536.cljs$lang$ctorStr = "cljs.core.async/t31536";

cljs.core.async.t31536.cljs$lang$ctorPrWriter = (function (this__16732__auto__,writer__16733__auto__,opt__16734__auto__){
return cljs.core._write.call(null,writer__16733__auto__,"cljs.core.async/t31536");
});

cljs.core.async.__GT_t31536 = (function __GT_t31536(ch__$1,p__$1,filter_GT___$1,meta31537){
return (new cljs.core.async.t31536(ch__$1,p__$1,filter_GT___$1,meta31537));
});

}

return (new cljs.core.async.t31536(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18618__auto___31621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31621,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31621,out){
return (function (state_31600){
var state_val_31601 = (state_31600[(1)]);
if((state_val_31601 === (7))){
var inst_31596 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31602_31622 = state_31600__$1;
(statearr_31602_31622[(2)] = inst_31596);

(statearr_31602_31622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (1))){
var state_31600__$1 = state_31600;
var statearr_31603_31623 = state_31600__$1;
(statearr_31603_31623[(2)] = null);

(statearr_31603_31623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (4))){
var inst_31582 = (state_31600[(7)]);
var inst_31582__$1 = (state_31600[(2)]);
var inst_31583 = (inst_31582__$1 == null);
var state_31600__$1 = (function (){var statearr_31604 = state_31600;
(statearr_31604[(7)] = inst_31582__$1);

return statearr_31604;
})();
if(cljs.core.truth_(inst_31583)){
var statearr_31605_31624 = state_31600__$1;
(statearr_31605_31624[(1)] = (5));

} else {
var statearr_31606_31625 = state_31600__$1;
(statearr_31606_31625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (6))){
var inst_31582 = (state_31600[(7)]);
var inst_31587 = p.call(null,inst_31582);
var state_31600__$1 = state_31600;
if(cljs.core.truth_(inst_31587)){
var statearr_31607_31626 = state_31600__$1;
(statearr_31607_31626[(1)] = (8));

} else {
var statearr_31608_31627 = state_31600__$1;
(statearr_31608_31627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (3))){
var inst_31598 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31600__$1,inst_31598);
} else {
if((state_val_31601 === (2))){
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31600__$1,(4),ch);
} else {
if((state_val_31601 === (11))){
var inst_31590 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31609_31628 = state_31600__$1;
(statearr_31609_31628[(2)] = inst_31590);

(statearr_31609_31628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (9))){
var state_31600__$1 = state_31600;
var statearr_31610_31629 = state_31600__$1;
(statearr_31610_31629[(2)] = null);

(statearr_31610_31629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (5))){
var inst_31585 = cljs.core.async.close_BANG_.call(null,out);
var state_31600__$1 = state_31600;
var statearr_31611_31630 = state_31600__$1;
(statearr_31611_31630[(2)] = inst_31585);

(statearr_31611_31630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (10))){
var inst_31593 = (state_31600[(2)]);
var state_31600__$1 = (function (){var statearr_31612 = state_31600;
(statearr_31612[(8)] = inst_31593);

return statearr_31612;
})();
var statearr_31613_31631 = state_31600__$1;
(statearr_31613_31631[(2)] = null);

(statearr_31613_31631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (8))){
var inst_31582 = (state_31600[(7)]);
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31600__$1,(11),out,inst_31582);
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
});})(c__18618__auto___31621,out))
;
return ((function (switch__18562__auto__,c__18618__auto___31621,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31617 = [null,null,null,null,null,null,null,null,null];
(statearr_31617[(0)] = state_machine__18563__auto__);

(statearr_31617[(1)] = (1));

return statearr_31617;
});
var state_machine__18563__auto____1 = (function (state_31600){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31618){if((e31618 instanceof Object)){
var ex__18566__auto__ = e31618;
var statearr_31619_31632 = state_31600;
(statearr_31619_31632[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31633 = state_31600;
state_31600 = G__31633;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31600){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31621,out))
})();
var state__18620__auto__ = (function (){var statearr_31620 = f__18619__auto__.call(null);
(statearr_31620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31621);

return statearr_31620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31621,out))
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
return (function (state_31799){
var state_val_31800 = (state_31799[(1)]);
if((state_val_31800 === (7))){
var inst_31795 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31801_31842 = state_31799__$1;
(statearr_31801_31842[(2)] = inst_31795);

(statearr_31801_31842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (20))){
var inst_31765 = (state_31799[(7)]);
var inst_31776 = (state_31799[(2)]);
var inst_31777 = cljs.core.next.call(null,inst_31765);
var inst_31751 = inst_31777;
var inst_31752 = null;
var inst_31753 = (0);
var inst_31754 = (0);
var state_31799__$1 = (function (){var statearr_31802 = state_31799;
(statearr_31802[(8)] = inst_31752);

(statearr_31802[(9)] = inst_31754);

(statearr_31802[(10)] = inst_31751);

(statearr_31802[(11)] = inst_31776);

(statearr_31802[(12)] = inst_31753);

return statearr_31802;
})();
var statearr_31803_31843 = state_31799__$1;
(statearr_31803_31843[(2)] = null);

(statearr_31803_31843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (1))){
var state_31799__$1 = state_31799;
var statearr_31804_31844 = state_31799__$1;
(statearr_31804_31844[(2)] = null);

(statearr_31804_31844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (4))){
var inst_31740 = (state_31799[(13)]);
var inst_31740__$1 = (state_31799[(2)]);
var inst_31741 = (inst_31740__$1 == null);
var state_31799__$1 = (function (){var statearr_31805 = state_31799;
(statearr_31805[(13)] = inst_31740__$1);

return statearr_31805;
})();
if(cljs.core.truth_(inst_31741)){
var statearr_31806_31845 = state_31799__$1;
(statearr_31806_31845[(1)] = (5));

} else {
var statearr_31807_31846 = state_31799__$1;
(statearr_31807_31846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (15))){
var state_31799__$1 = state_31799;
var statearr_31811_31847 = state_31799__$1;
(statearr_31811_31847[(2)] = null);

(statearr_31811_31847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (21))){
var state_31799__$1 = state_31799;
var statearr_31812_31848 = state_31799__$1;
(statearr_31812_31848[(2)] = null);

(statearr_31812_31848[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (13))){
var inst_31752 = (state_31799[(8)]);
var inst_31754 = (state_31799[(9)]);
var inst_31751 = (state_31799[(10)]);
var inst_31753 = (state_31799[(12)]);
var inst_31761 = (state_31799[(2)]);
var inst_31762 = (inst_31754 + (1));
var tmp31808 = inst_31752;
var tmp31809 = inst_31751;
var tmp31810 = inst_31753;
var inst_31751__$1 = tmp31809;
var inst_31752__$1 = tmp31808;
var inst_31753__$1 = tmp31810;
var inst_31754__$1 = inst_31762;
var state_31799__$1 = (function (){var statearr_31813 = state_31799;
(statearr_31813[(14)] = inst_31761);

(statearr_31813[(8)] = inst_31752__$1);

(statearr_31813[(9)] = inst_31754__$1);

(statearr_31813[(10)] = inst_31751__$1);

(statearr_31813[(12)] = inst_31753__$1);

return statearr_31813;
})();
var statearr_31814_31849 = state_31799__$1;
(statearr_31814_31849[(2)] = null);

(statearr_31814_31849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (22))){
var state_31799__$1 = state_31799;
var statearr_31815_31850 = state_31799__$1;
(statearr_31815_31850[(2)] = null);

(statearr_31815_31850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (6))){
var inst_31740 = (state_31799[(13)]);
var inst_31749 = f.call(null,inst_31740);
var inst_31750 = cljs.core.seq.call(null,inst_31749);
var inst_31751 = inst_31750;
var inst_31752 = null;
var inst_31753 = (0);
var inst_31754 = (0);
var state_31799__$1 = (function (){var statearr_31816 = state_31799;
(statearr_31816[(8)] = inst_31752);

(statearr_31816[(9)] = inst_31754);

(statearr_31816[(10)] = inst_31751);

(statearr_31816[(12)] = inst_31753);

return statearr_31816;
})();
var statearr_31817_31851 = state_31799__$1;
(statearr_31817_31851[(2)] = null);

(statearr_31817_31851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (17))){
var inst_31765 = (state_31799[(7)]);
var inst_31769 = cljs.core.chunk_first.call(null,inst_31765);
var inst_31770 = cljs.core.chunk_rest.call(null,inst_31765);
var inst_31771 = cljs.core.count.call(null,inst_31769);
var inst_31751 = inst_31770;
var inst_31752 = inst_31769;
var inst_31753 = inst_31771;
var inst_31754 = (0);
var state_31799__$1 = (function (){var statearr_31818 = state_31799;
(statearr_31818[(8)] = inst_31752);

(statearr_31818[(9)] = inst_31754);

(statearr_31818[(10)] = inst_31751);

(statearr_31818[(12)] = inst_31753);

return statearr_31818;
})();
var statearr_31819_31852 = state_31799__$1;
(statearr_31819_31852[(2)] = null);

(statearr_31819_31852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (3))){
var inst_31797 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31799__$1,inst_31797);
} else {
if((state_val_31800 === (12))){
var inst_31785 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31820_31853 = state_31799__$1;
(statearr_31820_31853[(2)] = inst_31785);

(statearr_31820_31853[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (2))){
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31799__$1,(4),in$);
} else {
if((state_val_31800 === (23))){
var inst_31793 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31821_31854 = state_31799__$1;
(statearr_31821_31854[(2)] = inst_31793);

(statearr_31821_31854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (19))){
var inst_31780 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31822_31855 = state_31799__$1;
(statearr_31822_31855[(2)] = inst_31780);

(statearr_31822_31855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (11))){
var inst_31751 = (state_31799[(10)]);
var inst_31765 = (state_31799[(7)]);
var inst_31765__$1 = cljs.core.seq.call(null,inst_31751);
var state_31799__$1 = (function (){var statearr_31823 = state_31799;
(statearr_31823[(7)] = inst_31765__$1);

return statearr_31823;
})();
if(inst_31765__$1){
var statearr_31824_31856 = state_31799__$1;
(statearr_31824_31856[(1)] = (14));

} else {
var statearr_31825_31857 = state_31799__$1;
(statearr_31825_31857[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (9))){
var inst_31787 = (state_31799[(2)]);
var inst_31788 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31799__$1 = (function (){var statearr_31826 = state_31799;
(statearr_31826[(15)] = inst_31787);

return statearr_31826;
})();
if(cljs.core.truth_(inst_31788)){
var statearr_31827_31858 = state_31799__$1;
(statearr_31827_31858[(1)] = (21));

} else {
var statearr_31828_31859 = state_31799__$1;
(statearr_31828_31859[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (5))){
var inst_31743 = cljs.core.async.close_BANG_.call(null,out);
var state_31799__$1 = state_31799;
var statearr_31829_31860 = state_31799__$1;
(statearr_31829_31860[(2)] = inst_31743);

(statearr_31829_31860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (14))){
var inst_31765 = (state_31799[(7)]);
var inst_31767 = cljs.core.chunked_seq_QMARK_.call(null,inst_31765);
var state_31799__$1 = state_31799;
if(inst_31767){
var statearr_31830_31861 = state_31799__$1;
(statearr_31830_31861[(1)] = (17));

} else {
var statearr_31831_31862 = state_31799__$1;
(statearr_31831_31862[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (16))){
var inst_31783 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31832_31863 = state_31799__$1;
(statearr_31832_31863[(2)] = inst_31783);

(statearr_31832_31863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (10))){
var inst_31752 = (state_31799[(8)]);
var inst_31754 = (state_31799[(9)]);
var inst_31759 = cljs.core._nth.call(null,inst_31752,inst_31754);
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31799__$1,(13),out,inst_31759);
} else {
if((state_val_31800 === (18))){
var inst_31765 = (state_31799[(7)]);
var inst_31774 = cljs.core.first.call(null,inst_31765);
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31799__$1,(20),out,inst_31774);
} else {
if((state_val_31800 === (8))){
var inst_31754 = (state_31799[(9)]);
var inst_31753 = (state_31799[(12)]);
var inst_31756 = (inst_31754 < inst_31753);
var inst_31757 = inst_31756;
var state_31799__$1 = state_31799;
if(cljs.core.truth_(inst_31757)){
var statearr_31833_31864 = state_31799__$1;
(statearr_31833_31864[(1)] = (10));

} else {
var statearr_31834_31865 = state_31799__$1;
(statearr_31834_31865[(1)] = (11));

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
var statearr_31838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31838[(0)] = state_machine__18563__auto__);

(statearr_31838[(1)] = (1));

return statearr_31838;
});
var state_machine__18563__auto____1 = (function (state_31799){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31839){if((e31839 instanceof Object)){
var ex__18566__auto__ = e31839;
var statearr_31840_31866 = state_31799;
(statearr_31840_31866[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31867 = state_31799;
state_31799 = G__31867;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31799){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_31841 = f__18619__auto__.call(null);
(statearr_31841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_31841;
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
var c__18618__auto___31964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___31964,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___31964,out){
return (function (state_31939){
var state_val_31940 = (state_31939[(1)]);
if((state_val_31940 === (7))){
var inst_31934 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31941_31965 = state_31939__$1;
(statearr_31941_31965[(2)] = inst_31934);

(statearr_31941_31965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (1))){
var inst_31916 = null;
var state_31939__$1 = (function (){var statearr_31942 = state_31939;
(statearr_31942[(7)] = inst_31916);

return statearr_31942;
})();
var statearr_31943_31966 = state_31939__$1;
(statearr_31943_31966[(2)] = null);

(statearr_31943_31966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (4))){
var inst_31919 = (state_31939[(8)]);
var inst_31919__$1 = (state_31939[(2)]);
var inst_31920 = (inst_31919__$1 == null);
var inst_31921 = cljs.core.not.call(null,inst_31920);
var state_31939__$1 = (function (){var statearr_31944 = state_31939;
(statearr_31944[(8)] = inst_31919__$1);

return statearr_31944;
})();
if(inst_31921){
var statearr_31945_31967 = state_31939__$1;
(statearr_31945_31967[(1)] = (5));

} else {
var statearr_31946_31968 = state_31939__$1;
(statearr_31946_31968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (6))){
var state_31939__$1 = state_31939;
var statearr_31947_31969 = state_31939__$1;
(statearr_31947_31969[(2)] = null);

(statearr_31947_31969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (3))){
var inst_31936 = (state_31939[(2)]);
var inst_31937 = cljs.core.async.close_BANG_.call(null,out);
var state_31939__$1 = (function (){var statearr_31948 = state_31939;
(statearr_31948[(9)] = inst_31936);

return statearr_31948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31939__$1,inst_31937);
} else {
if((state_val_31940 === (2))){
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31939__$1,(4),ch);
} else {
if((state_val_31940 === (11))){
var inst_31919 = (state_31939[(8)]);
var inst_31928 = (state_31939[(2)]);
var inst_31916 = inst_31919;
var state_31939__$1 = (function (){var statearr_31949 = state_31939;
(statearr_31949[(7)] = inst_31916);

(statearr_31949[(10)] = inst_31928);

return statearr_31949;
})();
var statearr_31950_31970 = state_31939__$1;
(statearr_31950_31970[(2)] = null);

(statearr_31950_31970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (9))){
var inst_31919 = (state_31939[(8)]);
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31939__$1,(11),out,inst_31919);
} else {
if((state_val_31940 === (5))){
var inst_31916 = (state_31939[(7)]);
var inst_31919 = (state_31939[(8)]);
var inst_31923 = cljs.core._EQ_.call(null,inst_31919,inst_31916);
var state_31939__$1 = state_31939;
if(inst_31923){
var statearr_31952_31971 = state_31939__$1;
(statearr_31952_31971[(1)] = (8));

} else {
var statearr_31953_31972 = state_31939__$1;
(statearr_31953_31972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (10))){
var inst_31931 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31954_31973 = state_31939__$1;
(statearr_31954_31973[(2)] = inst_31931);

(statearr_31954_31973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (8))){
var inst_31916 = (state_31939[(7)]);
var tmp31951 = inst_31916;
var inst_31916__$1 = tmp31951;
var state_31939__$1 = (function (){var statearr_31955 = state_31939;
(statearr_31955[(7)] = inst_31916__$1);

return statearr_31955;
})();
var statearr_31956_31974 = state_31939__$1;
(statearr_31956_31974[(2)] = null);

(statearr_31956_31974[(1)] = (2));


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
});})(c__18618__auto___31964,out))
;
return ((function (switch__18562__auto__,c__18618__auto___31964,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_31960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31960[(0)] = state_machine__18563__auto__);

(statearr_31960[(1)] = (1));

return statearr_31960;
});
var state_machine__18563__auto____1 = (function (state_31939){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_31939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e31961){if((e31961 instanceof Object)){
var ex__18566__auto__ = e31961;
var statearr_31962_31975 = state_31939;
(statearr_31962_31975[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31976 = state_31939;
state_31939 = G__31976;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_31939){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_31939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___31964,out))
})();
var state__18620__auto__ = (function (){var statearr_31963 = f__18619__auto__.call(null);
(statearr_31963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___31964);

return statearr_31963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___31964,out))
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
var c__18618__auto___32111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32111,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32111,out){
return (function (state_32081){
var state_val_32082 = (state_32081[(1)]);
if((state_val_32082 === (7))){
var inst_32077 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32083_32112 = state_32081__$1;
(statearr_32083_32112[(2)] = inst_32077);

(statearr_32083_32112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (1))){
var inst_32044 = (new Array(n));
var inst_32045 = inst_32044;
var inst_32046 = (0);
var state_32081__$1 = (function (){var statearr_32084 = state_32081;
(statearr_32084[(7)] = inst_32046);

(statearr_32084[(8)] = inst_32045);

return statearr_32084;
})();
var statearr_32085_32113 = state_32081__$1;
(statearr_32085_32113[(2)] = null);

(statearr_32085_32113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (4))){
var inst_32049 = (state_32081[(9)]);
var inst_32049__$1 = (state_32081[(2)]);
var inst_32050 = (inst_32049__$1 == null);
var inst_32051 = cljs.core.not.call(null,inst_32050);
var state_32081__$1 = (function (){var statearr_32086 = state_32081;
(statearr_32086[(9)] = inst_32049__$1);

return statearr_32086;
})();
if(inst_32051){
var statearr_32087_32114 = state_32081__$1;
(statearr_32087_32114[(1)] = (5));

} else {
var statearr_32088_32115 = state_32081__$1;
(statearr_32088_32115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (15))){
var inst_32071 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32089_32116 = state_32081__$1;
(statearr_32089_32116[(2)] = inst_32071);

(statearr_32089_32116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (13))){
var state_32081__$1 = state_32081;
var statearr_32090_32117 = state_32081__$1;
(statearr_32090_32117[(2)] = null);

(statearr_32090_32117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (6))){
var inst_32046 = (state_32081[(7)]);
var inst_32067 = (inst_32046 > (0));
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_32067)){
var statearr_32091_32118 = state_32081__$1;
(statearr_32091_32118[(1)] = (12));

} else {
var statearr_32092_32119 = state_32081__$1;
(statearr_32092_32119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (3))){
var inst_32079 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32081__$1,inst_32079);
} else {
if((state_val_32082 === (12))){
var inst_32045 = (state_32081[(8)]);
var inst_32069 = cljs.core.vec.call(null,inst_32045);
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32081__$1,(15),out,inst_32069);
} else {
if((state_val_32082 === (2))){
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32081__$1,(4),ch);
} else {
if((state_val_32082 === (11))){
var inst_32061 = (state_32081[(2)]);
var inst_32062 = (new Array(n));
var inst_32045 = inst_32062;
var inst_32046 = (0);
var state_32081__$1 = (function (){var statearr_32093 = state_32081;
(statearr_32093[(7)] = inst_32046);

(statearr_32093[(10)] = inst_32061);

(statearr_32093[(8)] = inst_32045);

return statearr_32093;
})();
var statearr_32094_32120 = state_32081__$1;
(statearr_32094_32120[(2)] = null);

(statearr_32094_32120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (9))){
var inst_32045 = (state_32081[(8)]);
var inst_32059 = cljs.core.vec.call(null,inst_32045);
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32081__$1,(11),out,inst_32059);
} else {
if((state_val_32082 === (5))){
var inst_32049 = (state_32081[(9)]);
var inst_32046 = (state_32081[(7)]);
var inst_32054 = (state_32081[(11)]);
var inst_32045 = (state_32081[(8)]);
var inst_32053 = (inst_32045[inst_32046] = inst_32049);
var inst_32054__$1 = (inst_32046 + (1));
var inst_32055 = (inst_32054__$1 < n);
var state_32081__$1 = (function (){var statearr_32095 = state_32081;
(statearr_32095[(11)] = inst_32054__$1);

(statearr_32095[(12)] = inst_32053);

return statearr_32095;
})();
if(cljs.core.truth_(inst_32055)){
var statearr_32096_32121 = state_32081__$1;
(statearr_32096_32121[(1)] = (8));

} else {
var statearr_32097_32122 = state_32081__$1;
(statearr_32097_32122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (14))){
var inst_32074 = (state_32081[(2)]);
var inst_32075 = cljs.core.async.close_BANG_.call(null,out);
var state_32081__$1 = (function (){var statearr_32099 = state_32081;
(statearr_32099[(13)] = inst_32074);

return statearr_32099;
})();
var statearr_32100_32123 = state_32081__$1;
(statearr_32100_32123[(2)] = inst_32075);

(statearr_32100_32123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (10))){
var inst_32065 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32101_32124 = state_32081__$1;
(statearr_32101_32124[(2)] = inst_32065);

(statearr_32101_32124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (8))){
var inst_32054 = (state_32081[(11)]);
var inst_32045 = (state_32081[(8)]);
var tmp32098 = inst_32045;
var inst_32045__$1 = tmp32098;
var inst_32046 = inst_32054;
var state_32081__$1 = (function (){var statearr_32102 = state_32081;
(statearr_32102[(7)] = inst_32046);

(statearr_32102[(8)] = inst_32045__$1);

return statearr_32102;
})();
var statearr_32103_32125 = state_32081__$1;
(statearr_32103_32125[(2)] = null);

(statearr_32103_32125[(1)] = (2));


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
});})(c__18618__auto___32111,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32111,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32107[(0)] = state_machine__18563__auto__);

(statearr_32107[(1)] = (1));

return statearr_32107;
});
var state_machine__18563__auto____1 = (function (state_32081){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32108){if((e32108 instanceof Object)){
var ex__18566__auto__ = e32108;
var statearr_32109_32126 = state_32081;
(statearr_32109_32126[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32127 = state_32081;
state_32081 = G__32127;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32081){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32111,out))
})();
var state__18620__auto__ = (function (){var statearr_32110 = f__18619__auto__.call(null);
(statearr_32110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32111);

return statearr_32110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32111,out))
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
var c__18618__auto___32270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto___32270,out){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto___32270,out){
return (function (state_32240){
var state_val_32241 = (state_32240[(1)]);
if((state_val_32241 === (7))){
var inst_32236 = (state_32240[(2)]);
var state_32240__$1 = state_32240;
var statearr_32242_32271 = state_32240__$1;
(statearr_32242_32271[(2)] = inst_32236);

(statearr_32242_32271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (1))){
var inst_32199 = [];
var inst_32200 = inst_32199;
var inst_32201 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32240__$1 = (function (){var statearr_32243 = state_32240;
(statearr_32243[(7)] = inst_32201);

(statearr_32243[(8)] = inst_32200);

return statearr_32243;
})();
var statearr_32244_32272 = state_32240__$1;
(statearr_32244_32272[(2)] = null);

(statearr_32244_32272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (4))){
var inst_32204 = (state_32240[(9)]);
var inst_32204__$1 = (state_32240[(2)]);
var inst_32205 = (inst_32204__$1 == null);
var inst_32206 = cljs.core.not.call(null,inst_32205);
var state_32240__$1 = (function (){var statearr_32245 = state_32240;
(statearr_32245[(9)] = inst_32204__$1);

return statearr_32245;
})();
if(inst_32206){
var statearr_32246_32273 = state_32240__$1;
(statearr_32246_32273[(1)] = (5));

} else {
var statearr_32247_32274 = state_32240__$1;
(statearr_32247_32274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (15))){
var inst_32230 = (state_32240[(2)]);
var state_32240__$1 = state_32240;
var statearr_32248_32275 = state_32240__$1;
(statearr_32248_32275[(2)] = inst_32230);

(statearr_32248_32275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (13))){
var state_32240__$1 = state_32240;
var statearr_32249_32276 = state_32240__$1;
(statearr_32249_32276[(2)] = null);

(statearr_32249_32276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (6))){
var inst_32200 = (state_32240[(8)]);
var inst_32225 = inst_32200.length;
var inst_32226 = (inst_32225 > (0));
var state_32240__$1 = state_32240;
if(cljs.core.truth_(inst_32226)){
var statearr_32250_32277 = state_32240__$1;
(statearr_32250_32277[(1)] = (12));

} else {
var statearr_32251_32278 = state_32240__$1;
(statearr_32251_32278[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (3))){
var inst_32238 = (state_32240[(2)]);
var state_32240__$1 = state_32240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32240__$1,inst_32238);
} else {
if((state_val_32241 === (12))){
var inst_32200 = (state_32240[(8)]);
var inst_32228 = cljs.core.vec.call(null,inst_32200);
var state_32240__$1 = state_32240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32240__$1,(15),out,inst_32228);
} else {
if((state_val_32241 === (2))){
var state_32240__$1 = state_32240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32240__$1,(4),ch);
} else {
if((state_val_32241 === (11))){
var inst_32208 = (state_32240[(10)]);
var inst_32204 = (state_32240[(9)]);
var inst_32218 = (state_32240[(2)]);
var inst_32219 = [];
var inst_32220 = inst_32219.push(inst_32204);
var inst_32200 = inst_32219;
var inst_32201 = inst_32208;
var state_32240__$1 = (function (){var statearr_32252 = state_32240;
(statearr_32252[(7)] = inst_32201);

(statearr_32252[(11)] = inst_32218);

(statearr_32252[(8)] = inst_32200);

(statearr_32252[(12)] = inst_32220);

return statearr_32252;
})();
var statearr_32253_32279 = state_32240__$1;
(statearr_32253_32279[(2)] = null);

(statearr_32253_32279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (9))){
var inst_32200 = (state_32240[(8)]);
var inst_32216 = cljs.core.vec.call(null,inst_32200);
var state_32240__$1 = state_32240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32240__$1,(11),out,inst_32216);
} else {
if((state_val_32241 === (5))){
var inst_32208 = (state_32240[(10)]);
var inst_32204 = (state_32240[(9)]);
var inst_32201 = (state_32240[(7)]);
var inst_32208__$1 = f.call(null,inst_32204);
var inst_32209 = cljs.core._EQ_.call(null,inst_32208__$1,inst_32201);
var inst_32210 = cljs.core.keyword_identical_QMARK_.call(null,inst_32201,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32211 = (inst_32209) || (inst_32210);
var state_32240__$1 = (function (){var statearr_32254 = state_32240;
(statearr_32254[(10)] = inst_32208__$1);

return statearr_32254;
})();
if(cljs.core.truth_(inst_32211)){
var statearr_32255_32280 = state_32240__$1;
(statearr_32255_32280[(1)] = (8));

} else {
var statearr_32256_32281 = state_32240__$1;
(statearr_32256_32281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (14))){
var inst_32233 = (state_32240[(2)]);
var inst_32234 = cljs.core.async.close_BANG_.call(null,out);
var state_32240__$1 = (function (){var statearr_32258 = state_32240;
(statearr_32258[(13)] = inst_32233);

return statearr_32258;
})();
var statearr_32259_32282 = state_32240__$1;
(statearr_32259_32282[(2)] = inst_32234);

(statearr_32259_32282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (10))){
var inst_32223 = (state_32240[(2)]);
var state_32240__$1 = state_32240;
var statearr_32260_32283 = state_32240__$1;
(statearr_32260_32283[(2)] = inst_32223);

(statearr_32260_32283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32241 === (8))){
var inst_32208 = (state_32240[(10)]);
var inst_32204 = (state_32240[(9)]);
var inst_32200 = (state_32240[(8)]);
var inst_32213 = inst_32200.push(inst_32204);
var tmp32257 = inst_32200;
var inst_32200__$1 = tmp32257;
var inst_32201 = inst_32208;
var state_32240__$1 = (function (){var statearr_32261 = state_32240;
(statearr_32261[(7)] = inst_32201);

(statearr_32261[(14)] = inst_32213);

(statearr_32261[(8)] = inst_32200__$1);

return statearr_32261;
})();
var statearr_32262_32284 = state_32240__$1;
(statearr_32262_32284[(2)] = null);

(statearr_32262_32284[(1)] = (2));


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
});})(c__18618__auto___32270,out))
;
return ((function (switch__18562__auto__,c__18618__auto___32270,out){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_32266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32266[(0)] = state_machine__18563__auto__);

(statearr_32266[(1)] = (1));

return statearr_32266;
});
var state_machine__18563__auto____1 = (function (state_32240){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_32240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e32267){if((e32267 instanceof Object)){
var ex__18566__auto__ = e32267;
var statearr_32268_32285 = state_32240;
(statearr_32268_32285[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32286 = state_32240;
state_32240 = G__32286;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_32240){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_32240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto___32270,out))
})();
var state__18620__auto__ = (function (){var statearr_32269 = f__18619__auto__.call(null);
(statearr_32269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto___32270);

return statearr_32269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto___32270,out))
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

//# sourceMappingURL=async.js.map?rel=1435015912712