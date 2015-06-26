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
if(typeof cljs.core.async.t16437 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16437 = (function (f,fn_handler,meta16438){
this.f = f;
this.fn_handler = fn_handler;
this.meta16438 = meta16438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16437.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16439){
var self__ = this;
var _16439__$1 = this;
return self__.meta16438;
});

cljs.core.async.t16437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16439,meta16438__$1){
var self__ = this;
var _16439__$1 = this;
return (new cljs.core.async.t16437(self__.f,self__.fn_handler,meta16438__$1));
});

cljs.core.async.t16437.cljs$lang$type = true;

cljs.core.async.t16437.cljs$lang$ctorStr = "cljs.core.async/t16437";

cljs.core.async.t16437.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t16437");
});

cljs.core.async.__GT_t16437 = (function __GT_t16437(f__$1,fn_handler__$1,meta16438){
return (new cljs.core.async.t16437(f__$1,fn_handler__$1,meta16438));
});

}

return (new cljs.core.async.t16437(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16441 = buff;
if(G__16441){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__16441.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16441.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16441);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16441);
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
var val_16442 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16442);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16442,ret){
return (function (){
return fn1.call(null,val_16442);
});})(val_16442,ret))
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
var n__4702__auto___16443 = n;
var x_16444 = (0);
while(true){
if((x_16444 < n__4702__auto___16443)){
(a[x_16444] = (0));

var G__16445 = (x_16444 + (1));
x_16444 = G__16445;
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

var G__16446 = (i + (1));
i = G__16446;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16450 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16450 = (function (flag,alt_flag,meta16451){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16451 = meta16451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16450.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16452){
var self__ = this;
var _16452__$1 = this;
return self__.meta16451;
});})(flag))
;

cljs.core.async.t16450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16452,meta16451__$1){
var self__ = this;
var _16452__$1 = this;
return (new cljs.core.async.t16450(self__.flag,self__.alt_flag,meta16451__$1));
});})(flag))
;

cljs.core.async.t16450.cljs$lang$type = true;

cljs.core.async.t16450.cljs$lang$ctorStr = "cljs.core.async/t16450";

cljs.core.async.t16450.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t16450");
});})(flag))
;

cljs.core.async.__GT_t16450 = ((function (flag){
return (function __GT_t16450(flag__$1,alt_flag__$1,meta16451){
return (new cljs.core.async.t16450(flag__$1,alt_flag__$1,meta16451));
});})(flag))
;

}

return (new cljs.core.async.t16450(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16456 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16456 = (function (cb,flag,alt_handler,meta16457){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16457 = meta16457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16456.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16458){
var self__ = this;
var _16458__$1 = this;
return self__.meta16457;
});

cljs.core.async.t16456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16458,meta16457__$1){
var self__ = this;
var _16458__$1 = this;
return (new cljs.core.async.t16456(self__.cb,self__.flag,self__.alt_handler,meta16457__$1));
});

cljs.core.async.t16456.cljs$lang$type = true;

cljs.core.async.t16456.cljs$lang$ctorStr = "cljs.core.async/t16456";

cljs.core.async.t16456.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t16456");
});

cljs.core.async.__GT_t16456 = (function __GT_t16456(cb__$1,flag__$1,alt_handler__$1,meta16457){
return (new cljs.core.async.t16456(cb__$1,flag__$1,alt_handler__$1,meta16457));
});

}

return (new cljs.core.async.t16456(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16459_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16459_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16460_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16460_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3815__auto__ = wport;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16461 = (i + (1));
i = G__16461;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3803__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3803__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3803__auto__;
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
var alts_BANG___delegate = function (ports,p__16462){
var map__16464 = p__16462;
var map__16464__$1 = ((cljs.core.seq_QMARK_.call(null,map__16464))?cljs.core.apply.call(null,cljs.core.hash_map,map__16464):map__16464);
var opts = map__16464__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16462 = null;
if (arguments.length > 1) {
var G__16465__i = 0, G__16465__a = new Array(arguments.length -  1);
while (G__16465__i < G__16465__a.length) {G__16465__a[G__16465__i] = arguments[G__16465__i + 1]; ++G__16465__i;}
  p__16462 = new cljs.core.IndexedSeq(G__16465__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__16462);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16466){
var ports = cljs.core.first(arglist__16466);
var p__16462 = cljs.core.rest(arglist__16466);
return alts_BANG___delegate(ports,p__16462);
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
var c__6593__auto___16561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___16561){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___16561){
return (function (state_16537){
var state_val_16538 = (state_16537[(1)]);
if((state_val_16538 === (7))){
var inst_16533 = (state_16537[(2)]);
var state_16537__$1 = state_16537;
var statearr_16539_16562 = state_16537__$1;
(statearr_16539_16562[(2)] = inst_16533);

(statearr_16539_16562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (1))){
var state_16537__$1 = state_16537;
var statearr_16540_16563 = state_16537__$1;
(statearr_16540_16563[(2)] = null);

(statearr_16540_16563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (4))){
var inst_16516 = (state_16537[(7)]);
var inst_16516__$1 = (state_16537[(2)]);
var inst_16517 = (inst_16516__$1 == null);
var state_16537__$1 = (function (){var statearr_16541 = state_16537;
(statearr_16541[(7)] = inst_16516__$1);

return statearr_16541;
})();
if(cljs.core.truth_(inst_16517)){
var statearr_16542_16564 = state_16537__$1;
(statearr_16542_16564[(1)] = (5));

} else {
var statearr_16543_16565 = state_16537__$1;
(statearr_16543_16565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (13))){
var state_16537__$1 = state_16537;
var statearr_16544_16566 = state_16537__$1;
(statearr_16544_16566[(2)] = null);

(statearr_16544_16566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (6))){
var inst_16516 = (state_16537[(7)]);
var state_16537__$1 = state_16537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16537__$1,(11),to,inst_16516);
} else {
if((state_val_16538 === (3))){
var inst_16535 = (state_16537[(2)]);
var state_16537__$1 = state_16537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16537__$1,inst_16535);
} else {
if((state_val_16538 === (12))){
var state_16537__$1 = state_16537;
var statearr_16545_16567 = state_16537__$1;
(statearr_16545_16567[(2)] = null);

(statearr_16545_16567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (2))){
var state_16537__$1 = state_16537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16537__$1,(4),from);
} else {
if((state_val_16538 === (11))){
var inst_16526 = (state_16537[(2)]);
var state_16537__$1 = state_16537;
if(cljs.core.truth_(inst_16526)){
var statearr_16546_16568 = state_16537__$1;
(statearr_16546_16568[(1)] = (12));

} else {
var statearr_16547_16569 = state_16537__$1;
(statearr_16547_16569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (9))){
var state_16537__$1 = state_16537;
var statearr_16548_16570 = state_16537__$1;
(statearr_16548_16570[(2)] = null);

(statearr_16548_16570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (5))){
var state_16537__$1 = state_16537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16549_16571 = state_16537__$1;
(statearr_16549_16571[(1)] = (8));

} else {
var statearr_16550_16572 = state_16537__$1;
(statearr_16550_16572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (14))){
var inst_16531 = (state_16537[(2)]);
var state_16537__$1 = state_16537;
var statearr_16551_16573 = state_16537__$1;
(statearr_16551_16573[(2)] = inst_16531);

(statearr_16551_16573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (10))){
var inst_16523 = (state_16537[(2)]);
var state_16537__$1 = state_16537;
var statearr_16552_16574 = state_16537__$1;
(statearr_16552_16574[(2)] = inst_16523);

(statearr_16552_16574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16538 === (8))){
var inst_16520 = cljs.core.async.close_BANG_.call(null,to);
var state_16537__$1 = state_16537;
var statearr_16553_16575 = state_16537__$1;
(statearr_16553_16575[(2)] = inst_16520);

(statearr_16553_16575[(1)] = (10));


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
});})(c__6593__auto___16561))
;
return ((function (switch__6537__auto__,c__6593__auto___16561){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16557 = [null,null,null,null,null,null,null,null];
(statearr_16557[(0)] = state_machine__6538__auto__);

(statearr_16557[(1)] = (1));

return statearr_16557;
});
var state_machine__6538__auto____1 = (function (state_16537){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16558){if((e16558 instanceof Object)){
var ex__6541__auto__ = e16558;
var statearr_16559_16576 = state_16537;
(statearr_16559_16576[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16577 = state_16537;
state_16537 = G__16577;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16537){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___16561))
})();
var state__6595__auto__ = (function (){var statearr_16560 = f__6594__auto__.call(null);
(statearr_16560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16561);

return statearr_16560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___16561))
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
return (function (p__16761){
var vec__16762 = p__16761;
var v = cljs.core.nth.call(null,vec__16762,(0),null);
var p = cljs.core.nth.call(null,vec__16762,(1),null);
var job = vec__16762;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6593__auto___16944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___16944,res,vec__16762,v,p,job,jobs,results){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___16944,res,vec__16762,v,p,job,jobs,results){
return (function (state_16767){
var state_val_16768 = (state_16767[(1)]);
if((state_val_16768 === (2))){
var inst_16764 = (state_16767[(2)]);
var inst_16765 = cljs.core.async.close_BANG_.call(null,res);
var state_16767__$1 = (function (){var statearr_16769 = state_16767;
(statearr_16769[(7)] = inst_16764);

return statearr_16769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16767__$1,inst_16765);
} else {
if((state_val_16768 === (1))){
var state_16767__$1 = state_16767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16767__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6593__auto___16944,res,vec__16762,v,p,job,jobs,results))
;
return ((function (switch__6537__auto__,c__6593__auto___16944,res,vec__16762,v,p,job,jobs,results){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16773 = [null,null,null,null,null,null,null,null];
(statearr_16773[(0)] = state_machine__6538__auto__);

(statearr_16773[(1)] = (1));

return statearr_16773;
});
var state_machine__6538__auto____1 = (function (state_16767){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16774){if((e16774 instanceof Object)){
var ex__6541__auto__ = e16774;
var statearr_16775_16945 = state_16767;
(statearr_16775_16945[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16946 = state_16767;
state_16767 = G__16946;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16767){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___16944,res,vec__16762,v,p,job,jobs,results))
})();
var state__6595__auto__ = (function (){var statearr_16776 = f__6594__auto__.call(null);
(statearr_16776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16944);

return statearr_16776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___16944,res,vec__16762,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16777){
var vec__16778 = p__16777;
var v = cljs.core.nth.call(null,vec__16778,(0),null);
var p = cljs.core.nth.call(null,vec__16778,(1),null);
var job = vec__16778;
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
var n__4702__auto___16947 = n;
var __16948 = (0);
while(true){
if((__16948 < n__4702__auto___16947)){
var G__16779_16949 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16779_16949) {
case "async":
var c__6593__auto___16951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16948,c__6593__auto___16951,G__16779_16949,n__4702__auto___16947,jobs,results,process,async){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (__16948,c__6593__auto___16951,G__16779_16949,n__4702__auto___16947,jobs,results,process,async){
return (function (state_16792){
var state_val_16793 = (state_16792[(1)]);
if((state_val_16793 === (7))){
var inst_16788 = (state_16792[(2)]);
var state_16792__$1 = state_16792;
var statearr_16794_16952 = state_16792__$1;
(statearr_16794_16952[(2)] = inst_16788);

(statearr_16794_16952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16793 === (6))){
var state_16792__$1 = state_16792;
var statearr_16795_16953 = state_16792__$1;
(statearr_16795_16953[(2)] = null);

(statearr_16795_16953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16793 === (5))){
var state_16792__$1 = state_16792;
var statearr_16796_16954 = state_16792__$1;
(statearr_16796_16954[(2)] = null);

(statearr_16796_16954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16793 === (4))){
var inst_16782 = (state_16792[(2)]);
var inst_16783 = async.call(null,inst_16782);
var state_16792__$1 = state_16792;
if(cljs.core.truth_(inst_16783)){
var statearr_16797_16955 = state_16792__$1;
(statearr_16797_16955[(1)] = (5));

} else {
var statearr_16798_16956 = state_16792__$1;
(statearr_16798_16956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16793 === (3))){
var inst_16790 = (state_16792[(2)]);
var state_16792__$1 = state_16792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16792__$1,inst_16790);
} else {
if((state_val_16793 === (2))){
var state_16792__$1 = state_16792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16792__$1,(4),jobs);
} else {
if((state_val_16793 === (1))){
var state_16792__$1 = state_16792;
var statearr_16799_16957 = state_16792__$1;
(statearr_16799_16957[(2)] = null);

(statearr_16799_16957[(1)] = (2));


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
});})(__16948,c__6593__auto___16951,G__16779_16949,n__4702__auto___16947,jobs,results,process,async))
;
return ((function (__16948,switch__6537__auto__,c__6593__auto___16951,G__16779_16949,n__4702__auto___16947,jobs,results,process,async){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16803 = [null,null,null,null,null,null,null];
(statearr_16803[(0)] = state_machine__6538__auto__);

(statearr_16803[(1)] = (1));

return statearr_16803;
});
var state_machine__6538__auto____1 = (function (state_16792){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16804){if((e16804 instanceof Object)){
var ex__6541__auto__ = e16804;
var statearr_16805_16958 = state_16792;
(statearr_16805_16958[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16959 = state_16792;
state_16792 = G__16959;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16792){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(__16948,switch__6537__auto__,c__6593__auto___16951,G__16779_16949,n__4702__auto___16947,jobs,results,process,async))
})();
var state__6595__auto__ = (function (){var statearr_16806 = f__6594__auto__.call(null);
(statearr_16806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16951);

return statearr_16806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(__16948,c__6593__auto___16951,G__16779_16949,n__4702__auto___16947,jobs,results,process,async))
);


break;
case "compute":
var c__6593__auto___16960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16948,c__6593__auto___16960,G__16779_16949,n__4702__auto___16947,jobs,results,process,async){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (__16948,c__6593__auto___16960,G__16779_16949,n__4702__auto___16947,jobs,results,process,async){
return (function (state_16819){
var state_val_16820 = (state_16819[(1)]);
if((state_val_16820 === (7))){
var inst_16815 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
var statearr_16821_16961 = state_16819__$1;
(statearr_16821_16961[(2)] = inst_16815);

(statearr_16821_16961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (6))){
var state_16819__$1 = state_16819;
var statearr_16822_16962 = state_16819__$1;
(statearr_16822_16962[(2)] = null);

(statearr_16822_16962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (5))){
var state_16819__$1 = state_16819;
var statearr_16823_16963 = state_16819__$1;
(statearr_16823_16963[(2)] = null);

(statearr_16823_16963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (4))){
var inst_16809 = (state_16819[(2)]);
var inst_16810 = process.call(null,inst_16809);
var state_16819__$1 = state_16819;
if(cljs.core.truth_(inst_16810)){
var statearr_16824_16964 = state_16819__$1;
(statearr_16824_16964[(1)] = (5));

} else {
var statearr_16825_16965 = state_16819__$1;
(statearr_16825_16965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16820 === (3))){
var inst_16817 = (state_16819[(2)]);
var state_16819__$1 = state_16819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16819__$1,inst_16817);
} else {
if((state_val_16820 === (2))){
var state_16819__$1 = state_16819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16819__$1,(4),jobs);
} else {
if((state_val_16820 === (1))){
var state_16819__$1 = state_16819;
var statearr_16826_16966 = state_16819__$1;
(statearr_16826_16966[(2)] = null);

(statearr_16826_16966[(1)] = (2));


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
});})(__16948,c__6593__auto___16960,G__16779_16949,n__4702__auto___16947,jobs,results,process,async))
;
return ((function (__16948,switch__6537__auto__,c__6593__auto___16960,G__16779_16949,n__4702__auto___16947,jobs,results,process,async){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16830 = [null,null,null,null,null,null,null];
(statearr_16830[(0)] = state_machine__6538__auto__);

(statearr_16830[(1)] = (1));

return statearr_16830;
});
var state_machine__6538__auto____1 = (function (state_16819){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16831){if((e16831 instanceof Object)){
var ex__6541__auto__ = e16831;
var statearr_16832_16967 = state_16819;
(statearr_16832_16967[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16968 = state_16819;
state_16819 = G__16968;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16819){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(__16948,switch__6537__auto__,c__6593__auto___16960,G__16779_16949,n__4702__auto___16947,jobs,results,process,async))
})();
var state__6595__auto__ = (function (){var statearr_16833 = f__6594__auto__.call(null);
(statearr_16833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16960);

return statearr_16833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(__16948,c__6593__auto___16960,G__16779_16949,n__4702__auto___16947,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16969 = (__16948 + (1));
__16948 = G__16969;
continue;
} else {
}
break;
}

var c__6593__auto___16970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___16970,jobs,results,process,async){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___16970,jobs,results,process,async){
return (function (state_16855){
var state_val_16856 = (state_16855[(1)]);
if((state_val_16856 === (9))){
var inst_16848 = (state_16855[(2)]);
var state_16855__$1 = (function (){var statearr_16857 = state_16855;
(statearr_16857[(7)] = inst_16848);

return statearr_16857;
})();
var statearr_16858_16971 = state_16855__$1;
(statearr_16858_16971[(2)] = null);

(statearr_16858_16971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (8))){
var inst_16841 = (state_16855[(8)]);
var inst_16846 = (state_16855[(2)]);
var state_16855__$1 = (function (){var statearr_16859 = state_16855;
(statearr_16859[(9)] = inst_16846);

return statearr_16859;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16855__$1,(9),results,inst_16841);
} else {
if((state_val_16856 === (7))){
var inst_16851 = (state_16855[(2)]);
var state_16855__$1 = state_16855;
var statearr_16860_16972 = state_16855__$1;
(statearr_16860_16972[(2)] = inst_16851);

(statearr_16860_16972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (6))){
var inst_16841 = (state_16855[(8)]);
var inst_16836 = (state_16855[(10)]);
var inst_16841__$1 = cljs.core.async.chan.call(null,(1));
var inst_16842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16843 = [inst_16836,inst_16841__$1];
var inst_16844 = (new cljs.core.PersistentVector(null,2,(5),inst_16842,inst_16843,null));
var state_16855__$1 = (function (){var statearr_16861 = state_16855;
(statearr_16861[(8)] = inst_16841__$1);

return statearr_16861;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16855__$1,(8),jobs,inst_16844);
} else {
if((state_val_16856 === (5))){
var inst_16839 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16855__$1 = state_16855;
var statearr_16862_16973 = state_16855__$1;
(statearr_16862_16973[(2)] = inst_16839);

(statearr_16862_16973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (4))){
var inst_16836 = (state_16855[(10)]);
var inst_16836__$1 = (state_16855[(2)]);
var inst_16837 = (inst_16836__$1 == null);
var state_16855__$1 = (function (){var statearr_16863 = state_16855;
(statearr_16863[(10)] = inst_16836__$1);

return statearr_16863;
})();
if(cljs.core.truth_(inst_16837)){
var statearr_16864_16974 = state_16855__$1;
(statearr_16864_16974[(1)] = (5));

} else {
var statearr_16865_16975 = state_16855__$1;
(statearr_16865_16975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16856 === (3))){
var inst_16853 = (state_16855[(2)]);
var state_16855__$1 = state_16855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16855__$1,inst_16853);
} else {
if((state_val_16856 === (2))){
var state_16855__$1 = state_16855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16855__$1,(4),from);
} else {
if((state_val_16856 === (1))){
var state_16855__$1 = state_16855;
var statearr_16866_16976 = state_16855__$1;
(statearr_16866_16976[(2)] = null);

(statearr_16866_16976[(1)] = (2));


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
});})(c__6593__auto___16970,jobs,results,process,async))
;
return ((function (switch__6537__auto__,c__6593__auto___16970,jobs,results,process,async){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16870[(0)] = state_machine__6538__auto__);

(statearr_16870[(1)] = (1));

return statearr_16870;
});
var state_machine__6538__auto____1 = (function (state_16855){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16871){if((e16871 instanceof Object)){
var ex__6541__auto__ = e16871;
var statearr_16872_16977 = state_16855;
(statearr_16872_16977[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16978 = state_16855;
state_16855 = G__16978;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16855){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___16970,jobs,results,process,async))
})();
var state__6595__auto__ = (function (){var statearr_16873 = f__6594__auto__.call(null);
(statearr_16873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16970);

return statearr_16873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___16970,jobs,results,process,async))
);


var c__6593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto__,jobs,results,process,async){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto__,jobs,results,process,async){
return (function (state_16911){
var state_val_16912 = (state_16911[(1)]);
if((state_val_16912 === (7))){
var inst_16907 = (state_16911[(2)]);
var state_16911__$1 = state_16911;
var statearr_16913_16979 = state_16911__$1;
(statearr_16913_16979[(2)] = inst_16907);

(statearr_16913_16979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (20))){
var state_16911__$1 = state_16911;
var statearr_16914_16980 = state_16911__$1;
(statearr_16914_16980[(2)] = null);

(statearr_16914_16980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (1))){
var state_16911__$1 = state_16911;
var statearr_16915_16981 = state_16911__$1;
(statearr_16915_16981[(2)] = null);

(statearr_16915_16981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (4))){
var inst_16876 = (state_16911[(7)]);
var inst_16876__$1 = (state_16911[(2)]);
var inst_16877 = (inst_16876__$1 == null);
var state_16911__$1 = (function (){var statearr_16916 = state_16911;
(statearr_16916[(7)] = inst_16876__$1);

return statearr_16916;
})();
if(cljs.core.truth_(inst_16877)){
var statearr_16917_16982 = state_16911__$1;
(statearr_16917_16982[(1)] = (5));

} else {
var statearr_16918_16983 = state_16911__$1;
(statearr_16918_16983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (15))){
var inst_16889 = (state_16911[(8)]);
var state_16911__$1 = state_16911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16911__$1,(18),to,inst_16889);
} else {
if((state_val_16912 === (21))){
var inst_16902 = (state_16911[(2)]);
var state_16911__$1 = state_16911;
var statearr_16919_16984 = state_16911__$1;
(statearr_16919_16984[(2)] = inst_16902);

(statearr_16919_16984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (13))){
var inst_16904 = (state_16911[(2)]);
var state_16911__$1 = (function (){var statearr_16920 = state_16911;
(statearr_16920[(9)] = inst_16904);

return statearr_16920;
})();
var statearr_16921_16985 = state_16911__$1;
(statearr_16921_16985[(2)] = null);

(statearr_16921_16985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (6))){
var inst_16876 = (state_16911[(7)]);
var state_16911__$1 = state_16911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16911__$1,(11),inst_16876);
} else {
if((state_val_16912 === (17))){
var inst_16897 = (state_16911[(2)]);
var state_16911__$1 = state_16911;
if(cljs.core.truth_(inst_16897)){
var statearr_16922_16986 = state_16911__$1;
(statearr_16922_16986[(1)] = (19));

} else {
var statearr_16923_16987 = state_16911__$1;
(statearr_16923_16987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (3))){
var inst_16909 = (state_16911[(2)]);
var state_16911__$1 = state_16911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16911__$1,inst_16909);
} else {
if((state_val_16912 === (12))){
var inst_16886 = (state_16911[(10)]);
var state_16911__$1 = state_16911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16911__$1,(14),inst_16886);
} else {
if((state_val_16912 === (2))){
var state_16911__$1 = state_16911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16911__$1,(4),results);
} else {
if((state_val_16912 === (19))){
var state_16911__$1 = state_16911;
var statearr_16924_16988 = state_16911__$1;
(statearr_16924_16988[(2)] = null);

(statearr_16924_16988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (11))){
var inst_16886 = (state_16911[(2)]);
var state_16911__$1 = (function (){var statearr_16925 = state_16911;
(statearr_16925[(10)] = inst_16886);

return statearr_16925;
})();
var statearr_16926_16989 = state_16911__$1;
(statearr_16926_16989[(2)] = null);

(statearr_16926_16989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (9))){
var state_16911__$1 = state_16911;
var statearr_16927_16990 = state_16911__$1;
(statearr_16927_16990[(2)] = null);

(statearr_16927_16990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (5))){
var state_16911__$1 = state_16911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16928_16991 = state_16911__$1;
(statearr_16928_16991[(1)] = (8));

} else {
var statearr_16929_16992 = state_16911__$1;
(statearr_16929_16992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (14))){
var inst_16889 = (state_16911[(8)]);
var inst_16891 = (state_16911[(11)]);
var inst_16889__$1 = (state_16911[(2)]);
var inst_16890 = (inst_16889__$1 == null);
var inst_16891__$1 = cljs.core.not.call(null,inst_16890);
var state_16911__$1 = (function (){var statearr_16930 = state_16911;
(statearr_16930[(8)] = inst_16889__$1);

(statearr_16930[(11)] = inst_16891__$1);

return statearr_16930;
})();
if(inst_16891__$1){
var statearr_16931_16993 = state_16911__$1;
(statearr_16931_16993[(1)] = (15));

} else {
var statearr_16932_16994 = state_16911__$1;
(statearr_16932_16994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (16))){
var inst_16891 = (state_16911[(11)]);
var state_16911__$1 = state_16911;
var statearr_16933_16995 = state_16911__$1;
(statearr_16933_16995[(2)] = inst_16891);

(statearr_16933_16995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (10))){
var inst_16883 = (state_16911[(2)]);
var state_16911__$1 = state_16911;
var statearr_16934_16996 = state_16911__$1;
(statearr_16934_16996[(2)] = inst_16883);

(statearr_16934_16996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (18))){
var inst_16894 = (state_16911[(2)]);
var state_16911__$1 = state_16911;
var statearr_16935_16997 = state_16911__$1;
(statearr_16935_16997[(2)] = inst_16894);

(statearr_16935_16997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16912 === (8))){
var inst_16880 = cljs.core.async.close_BANG_.call(null,to);
var state_16911__$1 = state_16911;
var statearr_16936_16998 = state_16911__$1;
(statearr_16936_16998[(2)] = inst_16880);

(statearr_16936_16998[(1)] = (10));


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
});})(c__6593__auto__,jobs,results,process,async))
;
return ((function (switch__6537__auto__,c__6593__auto__,jobs,results,process,async){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16940 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16940[(0)] = state_machine__6538__auto__);

(statearr_16940[(1)] = (1));

return statearr_16940;
});
var state_machine__6538__auto____1 = (function (state_16911){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16941){if((e16941 instanceof Object)){
var ex__6541__auto__ = e16941;
var statearr_16942_16999 = state_16911;
(statearr_16942_16999[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17000 = state_16911;
state_16911 = G__17000;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16911){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__,jobs,results,process,async))
})();
var state__6595__auto__ = (function (){var statearr_16943 = f__6594__auto__.call(null);
(statearr_16943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_16943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto__,jobs,results,process,async))
);

return c__6593__auto__;
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
var c__6593__auto___17101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___17101,tc,fc){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___17101,tc,fc){
return (function (state_17076){
var state_val_17077 = (state_17076[(1)]);
if((state_val_17077 === (7))){
var inst_17072 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
var statearr_17078_17102 = state_17076__$1;
(statearr_17078_17102[(2)] = inst_17072);

(statearr_17078_17102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (1))){
var state_17076__$1 = state_17076;
var statearr_17079_17103 = state_17076__$1;
(statearr_17079_17103[(2)] = null);

(statearr_17079_17103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (4))){
var inst_17053 = (state_17076[(7)]);
var inst_17053__$1 = (state_17076[(2)]);
var inst_17054 = (inst_17053__$1 == null);
var state_17076__$1 = (function (){var statearr_17080 = state_17076;
(statearr_17080[(7)] = inst_17053__$1);

return statearr_17080;
})();
if(cljs.core.truth_(inst_17054)){
var statearr_17081_17104 = state_17076__$1;
(statearr_17081_17104[(1)] = (5));

} else {
var statearr_17082_17105 = state_17076__$1;
(statearr_17082_17105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (13))){
var state_17076__$1 = state_17076;
var statearr_17083_17106 = state_17076__$1;
(statearr_17083_17106[(2)] = null);

(statearr_17083_17106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (6))){
var inst_17053 = (state_17076[(7)]);
var inst_17059 = p.call(null,inst_17053);
var state_17076__$1 = state_17076;
if(cljs.core.truth_(inst_17059)){
var statearr_17084_17107 = state_17076__$1;
(statearr_17084_17107[(1)] = (9));

} else {
var statearr_17085_17108 = state_17076__$1;
(statearr_17085_17108[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (3))){
var inst_17074 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17076__$1,inst_17074);
} else {
if((state_val_17077 === (12))){
var state_17076__$1 = state_17076;
var statearr_17086_17109 = state_17076__$1;
(statearr_17086_17109[(2)] = null);

(statearr_17086_17109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (2))){
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17076__$1,(4),ch);
} else {
if((state_val_17077 === (11))){
var inst_17053 = (state_17076[(7)]);
var inst_17063 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17076__$1,(8),inst_17063,inst_17053);
} else {
if((state_val_17077 === (9))){
var state_17076__$1 = state_17076;
var statearr_17087_17110 = state_17076__$1;
(statearr_17087_17110[(2)] = tc);

(statearr_17087_17110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (5))){
var inst_17056 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17057 = cljs.core.async.close_BANG_.call(null,fc);
var state_17076__$1 = (function (){var statearr_17088 = state_17076;
(statearr_17088[(8)] = inst_17056);

return statearr_17088;
})();
var statearr_17089_17111 = state_17076__$1;
(statearr_17089_17111[(2)] = inst_17057);

(statearr_17089_17111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (14))){
var inst_17070 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
var statearr_17090_17112 = state_17076__$1;
(statearr_17090_17112[(2)] = inst_17070);

(statearr_17090_17112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (10))){
var state_17076__$1 = state_17076;
var statearr_17091_17113 = state_17076__$1;
(statearr_17091_17113[(2)] = fc);

(statearr_17091_17113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (8))){
var inst_17065 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
if(cljs.core.truth_(inst_17065)){
var statearr_17092_17114 = state_17076__$1;
(statearr_17092_17114[(1)] = (12));

} else {
var statearr_17093_17115 = state_17076__$1;
(statearr_17093_17115[(1)] = (13));

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
});})(c__6593__auto___17101,tc,fc))
;
return ((function (switch__6537__auto__,c__6593__auto___17101,tc,fc){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_17097 = [null,null,null,null,null,null,null,null,null];
(statearr_17097[(0)] = state_machine__6538__auto__);

(statearr_17097[(1)] = (1));

return statearr_17097;
});
var state_machine__6538__auto____1 = (function (state_17076){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_17076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e17098){if((e17098 instanceof Object)){
var ex__6541__auto__ = e17098;
var statearr_17099_17116 = state_17076;
(statearr_17099_17116[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17117 = state_17076;
state_17076 = G__17117;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_17076){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_17076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___17101,tc,fc))
})();
var state__6595__auto__ = (function (){var statearr_17100 = f__6594__auto__.call(null);
(statearr_17100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___17101);

return statearr_17100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___17101,tc,fc))
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
var c__6593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto__){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto__){
return (function (state_17164){
var state_val_17165 = (state_17164[(1)]);
if((state_val_17165 === (7))){
var inst_17160 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
var statearr_17166_17182 = state_17164__$1;
(statearr_17166_17182[(2)] = inst_17160);

(statearr_17166_17182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (6))){
var inst_17153 = (state_17164[(7)]);
var inst_17150 = (state_17164[(8)]);
var inst_17157 = f.call(null,inst_17150,inst_17153);
var inst_17150__$1 = inst_17157;
var state_17164__$1 = (function (){var statearr_17167 = state_17164;
(statearr_17167[(8)] = inst_17150__$1);

return statearr_17167;
})();
var statearr_17168_17183 = state_17164__$1;
(statearr_17168_17183[(2)] = null);

(statearr_17168_17183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (5))){
var inst_17150 = (state_17164[(8)]);
var state_17164__$1 = state_17164;
var statearr_17169_17184 = state_17164__$1;
(statearr_17169_17184[(2)] = inst_17150);

(statearr_17169_17184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (4))){
var inst_17153 = (state_17164[(7)]);
var inst_17153__$1 = (state_17164[(2)]);
var inst_17154 = (inst_17153__$1 == null);
var state_17164__$1 = (function (){var statearr_17170 = state_17164;
(statearr_17170[(7)] = inst_17153__$1);

return statearr_17170;
})();
if(cljs.core.truth_(inst_17154)){
var statearr_17171_17185 = state_17164__$1;
(statearr_17171_17185[(1)] = (5));

} else {
var statearr_17172_17186 = state_17164__$1;
(statearr_17172_17186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (3))){
var inst_17162 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17164__$1,inst_17162);
} else {
if((state_val_17165 === (2))){
var state_17164__$1 = state_17164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17164__$1,(4),ch);
} else {
if((state_val_17165 === (1))){
var inst_17150 = init;
var state_17164__$1 = (function (){var statearr_17173 = state_17164;
(statearr_17173[(8)] = inst_17150);

return statearr_17173;
})();
var statearr_17174_17187 = state_17164__$1;
(statearr_17174_17187[(2)] = null);

(statearr_17174_17187[(1)] = (2));


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
});})(c__6593__auto__))
;
return ((function (switch__6537__auto__,c__6593__auto__){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_17178 = [null,null,null,null,null,null,null,null,null];
(statearr_17178[(0)] = state_machine__6538__auto__);

(statearr_17178[(1)] = (1));

return statearr_17178;
});
var state_machine__6538__auto____1 = (function (state_17164){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_17164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e17179){if((e17179 instanceof Object)){
var ex__6541__auto__ = e17179;
var statearr_17180_17188 = state_17164;
(statearr_17180_17188[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17189 = state_17164;
state_17164 = G__17189;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_17164){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_17164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_17181 = f__6594__auto__.call(null);
(statearr_17181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_17181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto__))
);

return c__6593__auto__;
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
var c__6593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto__){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto__){
return (function (state_17263){
var state_val_17264 = (state_17263[(1)]);
if((state_val_17264 === (7))){
var inst_17245 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17265_17288 = state_17263__$1;
(statearr_17265_17288[(2)] = inst_17245);

(statearr_17265_17288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (1))){
var inst_17239 = cljs.core.seq.call(null,coll);
var inst_17240 = inst_17239;
var state_17263__$1 = (function (){var statearr_17266 = state_17263;
(statearr_17266[(7)] = inst_17240);

return statearr_17266;
})();
var statearr_17267_17289 = state_17263__$1;
(statearr_17267_17289[(2)] = null);

(statearr_17267_17289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (4))){
var inst_17240 = (state_17263[(7)]);
var inst_17243 = cljs.core.first.call(null,inst_17240);
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17263__$1,(7),ch,inst_17243);
} else {
if((state_val_17264 === (13))){
var inst_17257 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17268_17290 = state_17263__$1;
(statearr_17268_17290[(2)] = inst_17257);

(statearr_17268_17290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (6))){
var inst_17248 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
if(cljs.core.truth_(inst_17248)){
var statearr_17269_17291 = state_17263__$1;
(statearr_17269_17291[(1)] = (8));

} else {
var statearr_17270_17292 = state_17263__$1;
(statearr_17270_17292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (3))){
var inst_17261 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17263__$1,inst_17261);
} else {
if((state_val_17264 === (12))){
var state_17263__$1 = state_17263;
var statearr_17271_17293 = state_17263__$1;
(statearr_17271_17293[(2)] = null);

(statearr_17271_17293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (2))){
var inst_17240 = (state_17263[(7)]);
var state_17263__$1 = state_17263;
if(cljs.core.truth_(inst_17240)){
var statearr_17272_17294 = state_17263__$1;
(statearr_17272_17294[(1)] = (4));

} else {
var statearr_17273_17295 = state_17263__$1;
(statearr_17273_17295[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (11))){
var inst_17254 = cljs.core.async.close_BANG_.call(null,ch);
var state_17263__$1 = state_17263;
var statearr_17274_17296 = state_17263__$1;
(statearr_17274_17296[(2)] = inst_17254);

(statearr_17274_17296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (9))){
var state_17263__$1 = state_17263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17275_17297 = state_17263__$1;
(statearr_17275_17297[(1)] = (11));

} else {
var statearr_17276_17298 = state_17263__$1;
(statearr_17276_17298[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (5))){
var inst_17240 = (state_17263[(7)]);
var state_17263__$1 = state_17263;
var statearr_17277_17299 = state_17263__$1;
(statearr_17277_17299[(2)] = inst_17240);

(statearr_17277_17299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (10))){
var inst_17259 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17278_17300 = state_17263__$1;
(statearr_17278_17300[(2)] = inst_17259);

(statearr_17278_17300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (8))){
var inst_17240 = (state_17263[(7)]);
var inst_17250 = cljs.core.next.call(null,inst_17240);
var inst_17240__$1 = inst_17250;
var state_17263__$1 = (function (){var statearr_17279 = state_17263;
(statearr_17279[(7)] = inst_17240__$1);

return statearr_17279;
})();
var statearr_17280_17301 = state_17263__$1;
(statearr_17280_17301[(2)] = null);

(statearr_17280_17301[(1)] = (2));


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
});})(c__6593__auto__))
;
return ((function (switch__6537__auto__,c__6593__auto__){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_17284 = [null,null,null,null,null,null,null,null];
(statearr_17284[(0)] = state_machine__6538__auto__);

(statearr_17284[(1)] = (1));

return statearr_17284;
});
var state_machine__6538__auto____1 = (function (state_17263){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_17263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e17285){if((e17285 instanceof Object)){
var ex__6541__auto__ = e17285;
var statearr_17286_17302 = state_17263;
(statearr_17286_17302[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17303 = state_17263;
state_17263 = G__17303;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_17263){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_17263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_17287 = f__6594__auto__.call(null);
(statearr_17287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_17287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto__))
);

return c__6593__auto__;
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

cljs.core.async.Mux = (function (){var obj17305 = {};
return obj17305;
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
return (function (){var or__3815__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj17307 = {};
return obj17307;
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
return (function (){var or__3815__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return (function (){var or__3815__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return (function (){var or__3815__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
if(typeof cljs.core.async.t17529 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17529 = (function (cs,ch,mult,meta17530){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17530 = meta17530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17529.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17529.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17529.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17529.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17529.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17531){
var self__ = this;
var _17531__$1 = this;
return self__.meta17530;
});})(cs))
;

cljs.core.async.t17529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17531,meta17530__$1){
var self__ = this;
var _17531__$1 = this;
return (new cljs.core.async.t17529(self__.cs,self__.ch,self__.mult,meta17530__$1));
});})(cs))
;

cljs.core.async.t17529.cljs$lang$type = true;

cljs.core.async.t17529.cljs$lang$ctorStr = "cljs.core.async/t17529";

cljs.core.async.t17529.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t17529");
});})(cs))
;

cljs.core.async.__GT_t17529 = ((function (cs){
return (function __GT_t17529(cs__$1,ch__$1,mult__$1,meta17530){
return (new cljs.core.async.t17529(cs__$1,ch__$1,mult__$1,meta17530));
});})(cs))
;

}

return (new cljs.core.async.t17529(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6593__auto___17750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___17750,cs,m,dchan,dctr,done){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___17750,cs,m,dchan,dctr,done){
return (function (state_17662){
var state_val_17663 = (state_17662[(1)]);
if((state_val_17663 === (7))){
var inst_17658 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17664_17751 = state_17662__$1;
(statearr_17664_17751[(2)] = inst_17658);

(statearr_17664_17751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (20))){
var inst_17563 = (state_17662[(7)]);
var inst_17573 = cljs.core.first.call(null,inst_17563);
var inst_17574 = cljs.core.nth.call(null,inst_17573,(0),null);
var inst_17575 = cljs.core.nth.call(null,inst_17573,(1),null);
var state_17662__$1 = (function (){var statearr_17665 = state_17662;
(statearr_17665[(8)] = inst_17574);

return statearr_17665;
})();
if(cljs.core.truth_(inst_17575)){
var statearr_17666_17752 = state_17662__$1;
(statearr_17666_17752[(1)] = (22));

} else {
var statearr_17667_17753 = state_17662__$1;
(statearr_17667_17753[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (27))){
var inst_17605 = (state_17662[(9)]);
var inst_17603 = (state_17662[(10)]);
var inst_17610 = (state_17662[(11)]);
var inst_17534 = (state_17662[(12)]);
var inst_17610__$1 = cljs.core._nth.call(null,inst_17603,inst_17605);
var inst_17611 = cljs.core.async.put_BANG_.call(null,inst_17610__$1,inst_17534,done);
var state_17662__$1 = (function (){var statearr_17668 = state_17662;
(statearr_17668[(11)] = inst_17610__$1);

return statearr_17668;
})();
if(cljs.core.truth_(inst_17611)){
var statearr_17669_17754 = state_17662__$1;
(statearr_17669_17754[(1)] = (30));

} else {
var statearr_17670_17755 = state_17662__$1;
(statearr_17670_17755[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (1))){
var state_17662__$1 = state_17662;
var statearr_17671_17756 = state_17662__$1;
(statearr_17671_17756[(2)] = null);

(statearr_17671_17756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (24))){
var inst_17563 = (state_17662[(7)]);
var inst_17580 = (state_17662[(2)]);
var inst_17581 = cljs.core.next.call(null,inst_17563);
var inst_17543 = inst_17581;
var inst_17544 = null;
var inst_17545 = (0);
var inst_17546 = (0);
var state_17662__$1 = (function (){var statearr_17672 = state_17662;
(statearr_17672[(13)] = inst_17543);

(statearr_17672[(14)] = inst_17546);

(statearr_17672[(15)] = inst_17545);

(statearr_17672[(16)] = inst_17544);

(statearr_17672[(17)] = inst_17580);

return statearr_17672;
})();
var statearr_17673_17757 = state_17662__$1;
(statearr_17673_17757[(2)] = null);

(statearr_17673_17757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (39))){
var state_17662__$1 = state_17662;
var statearr_17677_17758 = state_17662__$1;
(statearr_17677_17758[(2)] = null);

(statearr_17677_17758[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (4))){
var inst_17534 = (state_17662[(12)]);
var inst_17534__$1 = (state_17662[(2)]);
var inst_17535 = (inst_17534__$1 == null);
var state_17662__$1 = (function (){var statearr_17678 = state_17662;
(statearr_17678[(12)] = inst_17534__$1);

return statearr_17678;
})();
if(cljs.core.truth_(inst_17535)){
var statearr_17679_17759 = state_17662__$1;
(statearr_17679_17759[(1)] = (5));

} else {
var statearr_17680_17760 = state_17662__$1;
(statearr_17680_17760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (15))){
var inst_17543 = (state_17662[(13)]);
var inst_17546 = (state_17662[(14)]);
var inst_17545 = (state_17662[(15)]);
var inst_17544 = (state_17662[(16)]);
var inst_17559 = (state_17662[(2)]);
var inst_17560 = (inst_17546 + (1));
var tmp17674 = inst_17543;
var tmp17675 = inst_17545;
var tmp17676 = inst_17544;
var inst_17543__$1 = tmp17674;
var inst_17544__$1 = tmp17676;
var inst_17545__$1 = tmp17675;
var inst_17546__$1 = inst_17560;
var state_17662__$1 = (function (){var statearr_17681 = state_17662;
(statearr_17681[(13)] = inst_17543__$1);

(statearr_17681[(14)] = inst_17546__$1);

(statearr_17681[(15)] = inst_17545__$1);

(statearr_17681[(16)] = inst_17544__$1);

(statearr_17681[(18)] = inst_17559);

return statearr_17681;
})();
var statearr_17682_17761 = state_17662__$1;
(statearr_17682_17761[(2)] = null);

(statearr_17682_17761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (21))){
var inst_17584 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17686_17762 = state_17662__$1;
(statearr_17686_17762[(2)] = inst_17584);

(statearr_17686_17762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (31))){
var inst_17610 = (state_17662[(11)]);
var inst_17614 = done.call(null,null);
var inst_17615 = cljs.core.async.untap_STAR_.call(null,m,inst_17610);
var state_17662__$1 = (function (){var statearr_17687 = state_17662;
(statearr_17687[(19)] = inst_17614);

return statearr_17687;
})();
var statearr_17688_17763 = state_17662__$1;
(statearr_17688_17763[(2)] = inst_17615);

(statearr_17688_17763[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (32))){
var inst_17605 = (state_17662[(9)]);
var inst_17603 = (state_17662[(10)]);
var inst_17604 = (state_17662[(20)]);
var inst_17602 = (state_17662[(21)]);
var inst_17617 = (state_17662[(2)]);
var inst_17618 = (inst_17605 + (1));
var tmp17683 = inst_17603;
var tmp17684 = inst_17604;
var tmp17685 = inst_17602;
var inst_17602__$1 = tmp17685;
var inst_17603__$1 = tmp17683;
var inst_17604__$1 = tmp17684;
var inst_17605__$1 = inst_17618;
var state_17662__$1 = (function (){var statearr_17689 = state_17662;
(statearr_17689[(9)] = inst_17605__$1);

(statearr_17689[(10)] = inst_17603__$1);

(statearr_17689[(20)] = inst_17604__$1);

(statearr_17689[(21)] = inst_17602__$1);

(statearr_17689[(22)] = inst_17617);

return statearr_17689;
})();
var statearr_17690_17764 = state_17662__$1;
(statearr_17690_17764[(2)] = null);

(statearr_17690_17764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (40))){
var inst_17630 = (state_17662[(23)]);
var inst_17634 = done.call(null,null);
var inst_17635 = cljs.core.async.untap_STAR_.call(null,m,inst_17630);
var state_17662__$1 = (function (){var statearr_17691 = state_17662;
(statearr_17691[(24)] = inst_17634);

return statearr_17691;
})();
var statearr_17692_17765 = state_17662__$1;
(statearr_17692_17765[(2)] = inst_17635);

(statearr_17692_17765[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (33))){
var inst_17621 = (state_17662[(25)]);
var inst_17623 = cljs.core.chunked_seq_QMARK_.call(null,inst_17621);
var state_17662__$1 = state_17662;
if(inst_17623){
var statearr_17693_17766 = state_17662__$1;
(statearr_17693_17766[(1)] = (36));

} else {
var statearr_17694_17767 = state_17662__$1;
(statearr_17694_17767[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (13))){
var inst_17553 = (state_17662[(26)]);
var inst_17556 = cljs.core.async.close_BANG_.call(null,inst_17553);
var state_17662__$1 = state_17662;
var statearr_17695_17768 = state_17662__$1;
(statearr_17695_17768[(2)] = inst_17556);

(statearr_17695_17768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (22))){
var inst_17574 = (state_17662[(8)]);
var inst_17577 = cljs.core.async.close_BANG_.call(null,inst_17574);
var state_17662__$1 = state_17662;
var statearr_17696_17769 = state_17662__$1;
(statearr_17696_17769[(2)] = inst_17577);

(statearr_17696_17769[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (36))){
var inst_17621 = (state_17662[(25)]);
var inst_17625 = cljs.core.chunk_first.call(null,inst_17621);
var inst_17626 = cljs.core.chunk_rest.call(null,inst_17621);
var inst_17627 = cljs.core.count.call(null,inst_17625);
var inst_17602 = inst_17626;
var inst_17603 = inst_17625;
var inst_17604 = inst_17627;
var inst_17605 = (0);
var state_17662__$1 = (function (){var statearr_17697 = state_17662;
(statearr_17697[(9)] = inst_17605);

(statearr_17697[(10)] = inst_17603);

(statearr_17697[(20)] = inst_17604);

(statearr_17697[(21)] = inst_17602);

return statearr_17697;
})();
var statearr_17698_17770 = state_17662__$1;
(statearr_17698_17770[(2)] = null);

(statearr_17698_17770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (41))){
var inst_17621 = (state_17662[(25)]);
var inst_17637 = (state_17662[(2)]);
var inst_17638 = cljs.core.next.call(null,inst_17621);
var inst_17602 = inst_17638;
var inst_17603 = null;
var inst_17604 = (0);
var inst_17605 = (0);
var state_17662__$1 = (function (){var statearr_17699 = state_17662;
(statearr_17699[(9)] = inst_17605);

(statearr_17699[(10)] = inst_17603);

(statearr_17699[(20)] = inst_17604);

(statearr_17699[(21)] = inst_17602);

(statearr_17699[(27)] = inst_17637);

return statearr_17699;
})();
var statearr_17700_17771 = state_17662__$1;
(statearr_17700_17771[(2)] = null);

(statearr_17700_17771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (43))){
var state_17662__$1 = state_17662;
var statearr_17701_17772 = state_17662__$1;
(statearr_17701_17772[(2)] = null);

(statearr_17701_17772[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (29))){
var inst_17646 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17702_17773 = state_17662__$1;
(statearr_17702_17773[(2)] = inst_17646);

(statearr_17702_17773[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (44))){
var inst_17655 = (state_17662[(2)]);
var state_17662__$1 = (function (){var statearr_17703 = state_17662;
(statearr_17703[(28)] = inst_17655);

return statearr_17703;
})();
var statearr_17704_17774 = state_17662__$1;
(statearr_17704_17774[(2)] = null);

(statearr_17704_17774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (6))){
var inst_17594 = (state_17662[(29)]);
var inst_17593 = cljs.core.deref.call(null,cs);
var inst_17594__$1 = cljs.core.keys.call(null,inst_17593);
var inst_17595 = cljs.core.count.call(null,inst_17594__$1);
var inst_17596 = cljs.core.reset_BANG_.call(null,dctr,inst_17595);
var inst_17601 = cljs.core.seq.call(null,inst_17594__$1);
var inst_17602 = inst_17601;
var inst_17603 = null;
var inst_17604 = (0);
var inst_17605 = (0);
var state_17662__$1 = (function (){var statearr_17705 = state_17662;
(statearr_17705[(9)] = inst_17605);

(statearr_17705[(30)] = inst_17596);

(statearr_17705[(10)] = inst_17603);

(statearr_17705[(20)] = inst_17604);

(statearr_17705[(21)] = inst_17602);

(statearr_17705[(29)] = inst_17594__$1);

return statearr_17705;
})();
var statearr_17706_17775 = state_17662__$1;
(statearr_17706_17775[(2)] = null);

(statearr_17706_17775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (28))){
var inst_17602 = (state_17662[(21)]);
var inst_17621 = (state_17662[(25)]);
var inst_17621__$1 = cljs.core.seq.call(null,inst_17602);
var state_17662__$1 = (function (){var statearr_17707 = state_17662;
(statearr_17707[(25)] = inst_17621__$1);

return statearr_17707;
})();
if(inst_17621__$1){
var statearr_17708_17776 = state_17662__$1;
(statearr_17708_17776[(1)] = (33));

} else {
var statearr_17709_17777 = state_17662__$1;
(statearr_17709_17777[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (25))){
var inst_17605 = (state_17662[(9)]);
var inst_17604 = (state_17662[(20)]);
var inst_17607 = (inst_17605 < inst_17604);
var inst_17608 = inst_17607;
var state_17662__$1 = state_17662;
if(cljs.core.truth_(inst_17608)){
var statearr_17710_17778 = state_17662__$1;
(statearr_17710_17778[(1)] = (27));

} else {
var statearr_17711_17779 = state_17662__$1;
(statearr_17711_17779[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (34))){
var state_17662__$1 = state_17662;
var statearr_17712_17780 = state_17662__$1;
(statearr_17712_17780[(2)] = null);

(statearr_17712_17780[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (17))){
var state_17662__$1 = state_17662;
var statearr_17713_17781 = state_17662__$1;
(statearr_17713_17781[(2)] = null);

(statearr_17713_17781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (3))){
var inst_17660 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17662__$1,inst_17660);
} else {
if((state_val_17663 === (12))){
var inst_17589 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17714_17782 = state_17662__$1;
(statearr_17714_17782[(2)] = inst_17589);

(statearr_17714_17782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (2))){
var state_17662__$1 = state_17662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17662__$1,(4),ch);
} else {
if((state_val_17663 === (23))){
var state_17662__$1 = state_17662;
var statearr_17715_17783 = state_17662__$1;
(statearr_17715_17783[(2)] = null);

(statearr_17715_17783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (35))){
var inst_17644 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17716_17784 = state_17662__$1;
(statearr_17716_17784[(2)] = inst_17644);

(statearr_17716_17784[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (19))){
var inst_17563 = (state_17662[(7)]);
var inst_17567 = cljs.core.chunk_first.call(null,inst_17563);
var inst_17568 = cljs.core.chunk_rest.call(null,inst_17563);
var inst_17569 = cljs.core.count.call(null,inst_17567);
var inst_17543 = inst_17568;
var inst_17544 = inst_17567;
var inst_17545 = inst_17569;
var inst_17546 = (0);
var state_17662__$1 = (function (){var statearr_17717 = state_17662;
(statearr_17717[(13)] = inst_17543);

(statearr_17717[(14)] = inst_17546);

(statearr_17717[(15)] = inst_17545);

(statearr_17717[(16)] = inst_17544);

return statearr_17717;
})();
var statearr_17718_17785 = state_17662__$1;
(statearr_17718_17785[(2)] = null);

(statearr_17718_17785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (11))){
var inst_17563 = (state_17662[(7)]);
var inst_17543 = (state_17662[(13)]);
var inst_17563__$1 = cljs.core.seq.call(null,inst_17543);
var state_17662__$1 = (function (){var statearr_17719 = state_17662;
(statearr_17719[(7)] = inst_17563__$1);

return statearr_17719;
})();
if(inst_17563__$1){
var statearr_17720_17786 = state_17662__$1;
(statearr_17720_17786[(1)] = (16));

} else {
var statearr_17721_17787 = state_17662__$1;
(statearr_17721_17787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (9))){
var inst_17591 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17722_17788 = state_17662__$1;
(statearr_17722_17788[(2)] = inst_17591);

(statearr_17722_17788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (5))){
var inst_17541 = cljs.core.deref.call(null,cs);
var inst_17542 = cljs.core.seq.call(null,inst_17541);
var inst_17543 = inst_17542;
var inst_17544 = null;
var inst_17545 = (0);
var inst_17546 = (0);
var state_17662__$1 = (function (){var statearr_17723 = state_17662;
(statearr_17723[(13)] = inst_17543);

(statearr_17723[(14)] = inst_17546);

(statearr_17723[(15)] = inst_17545);

(statearr_17723[(16)] = inst_17544);

return statearr_17723;
})();
var statearr_17724_17789 = state_17662__$1;
(statearr_17724_17789[(2)] = null);

(statearr_17724_17789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (14))){
var state_17662__$1 = state_17662;
var statearr_17725_17790 = state_17662__$1;
(statearr_17725_17790[(2)] = null);

(statearr_17725_17790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (45))){
var inst_17652 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17726_17791 = state_17662__$1;
(statearr_17726_17791[(2)] = inst_17652);

(statearr_17726_17791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (26))){
var inst_17594 = (state_17662[(29)]);
var inst_17648 = (state_17662[(2)]);
var inst_17649 = cljs.core.seq.call(null,inst_17594);
var state_17662__$1 = (function (){var statearr_17727 = state_17662;
(statearr_17727[(31)] = inst_17648);

return statearr_17727;
})();
if(inst_17649){
var statearr_17728_17792 = state_17662__$1;
(statearr_17728_17792[(1)] = (42));

} else {
var statearr_17729_17793 = state_17662__$1;
(statearr_17729_17793[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (16))){
var inst_17563 = (state_17662[(7)]);
var inst_17565 = cljs.core.chunked_seq_QMARK_.call(null,inst_17563);
var state_17662__$1 = state_17662;
if(inst_17565){
var statearr_17730_17794 = state_17662__$1;
(statearr_17730_17794[(1)] = (19));

} else {
var statearr_17731_17795 = state_17662__$1;
(statearr_17731_17795[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (38))){
var inst_17641 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17732_17796 = state_17662__$1;
(statearr_17732_17796[(2)] = inst_17641);

(statearr_17732_17796[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (30))){
var state_17662__$1 = state_17662;
var statearr_17733_17797 = state_17662__$1;
(statearr_17733_17797[(2)] = null);

(statearr_17733_17797[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (10))){
var inst_17546 = (state_17662[(14)]);
var inst_17544 = (state_17662[(16)]);
var inst_17552 = cljs.core._nth.call(null,inst_17544,inst_17546);
var inst_17553 = cljs.core.nth.call(null,inst_17552,(0),null);
var inst_17554 = cljs.core.nth.call(null,inst_17552,(1),null);
var state_17662__$1 = (function (){var statearr_17734 = state_17662;
(statearr_17734[(26)] = inst_17553);

return statearr_17734;
})();
if(cljs.core.truth_(inst_17554)){
var statearr_17735_17798 = state_17662__$1;
(statearr_17735_17798[(1)] = (13));

} else {
var statearr_17736_17799 = state_17662__$1;
(statearr_17736_17799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (18))){
var inst_17587 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17737_17800 = state_17662__$1;
(statearr_17737_17800[(2)] = inst_17587);

(statearr_17737_17800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (42))){
var state_17662__$1 = state_17662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17662__$1,(45),dchan);
} else {
if((state_val_17663 === (37))){
var inst_17630 = (state_17662[(23)]);
var inst_17534 = (state_17662[(12)]);
var inst_17621 = (state_17662[(25)]);
var inst_17630__$1 = cljs.core.first.call(null,inst_17621);
var inst_17631 = cljs.core.async.put_BANG_.call(null,inst_17630__$1,inst_17534,done);
var state_17662__$1 = (function (){var statearr_17738 = state_17662;
(statearr_17738[(23)] = inst_17630__$1);

return statearr_17738;
})();
if(cljs.core.truth_(inst_17631)){
var statearr_17739_17801 = state_17662__$1;
(statearr_17739_17801[(1)] = (39));

} else {
var statearr_17740_17802 = state_17662__$1;
(statearr_17740_17802[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (8))){
var inst_17546 = (state_17662[(14)]);
var inst_17545 = (state_17662[(15)]);
var inst_17548 = (inst_17546 < inst_17545);
var inst_17549 = inst_17548;
var state_17662__$1 = state_17662;
if(cljs.core.truth_(inst_17549)){
var statearr_17741_17803 = state_17662__$1;
(statearr_17741_17803[(1)] = (10));

} else {
var statearr_17742_17804 = state_17662__$1;
(statearr_17742_17804[(1)] = (11));

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
});})(c__6593__auto___17750,cs,m,dchan,dctr,done))
;
return ((function (switch__6537__auto__,c__6593__auto___17750,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_17746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17746[(0)] = state_machine__6538__auto__);

(statearr_17746[(1)] = (1));

return statearr_17746;
});
var state_machine__6538__auto____1 = (function (state_17662){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_17662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e17747){if((e17747 instanceof Object)){
var ex__6541__auto__ = e17747;
var statearr_17748_17805 = state_17662;
(statearr_17748_17805[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17806 = state_17662;
state_17662 = G__17806;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_17662){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_17662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___17750,cs,m,dchan,dctr,done))
})();
var state__6595__auto__ = (function (){var statearr_17749 = f__6594__auto__.call(null);
(statearr_17749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___17750);

return statearr_17749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___17750,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj17808 = {};
return obj17808;
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
return (function (){var or__3815__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return (function (){var or__3815__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return (function (){var or__3815__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17809){
var map__17814 = p__17809;
var map__17814__$1 = ((cljs.core.seq_QMARK_.call(null,map__17814))?cljs.core.apply.call(null,cljs.core.hash_map,map__17814):map__17814);
var opts = map__17814__$1;
var statearr_17815_17818 = state;
(statearr_17815_17818[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__17814,map__17814__$1,opts){
return (function (val){
var statearr_17816_17819 = state;
(statearr_17816_17819[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17814,map__17814__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_17817_17820 = state;
(statearr_17817_17820[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17809 = null;
if (arguments.length > 3) {
var G__17821__i = 0, G__17821__a = new Array(arguments.length -  3);
while (G__17821__i < G__17821__a.length) {G__17821__a[G__17821__i] = arguments[G__17821__i + 3]; ++G__17821__i;}
  p__17809 = new cljs.core.IndexedSeq(G__17821__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17809);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17822){
var state = cljs.core.first(arglist__17822);
arglist__17822 = cljs.core.next(arglist__17822);
var cont_block = cljs.core.first(arglist__17822);
arglist__17822 = cljs.core.next(arglist__17822);
var ports = cljs.core.first(arglist__17822);
var p__17809 = cljs.core.rest(arglist__17822);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17809);
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
if(typeof cljs.core.async.t17942 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17942 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17943){
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
this.meta17943 = meta17943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17942.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17942.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17942.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17942.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17942.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17942.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t17942.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17944){
var self__ = this;
var _17944__$1 = this;
return self__.meta17943;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17944,meta17943__$1){
var self__ = this;
var _17944__$1 = this;
return (new cljs.core.async.t17942(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17943__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17942.cljs$lang$type = true;

cljs.core.async.t17942.cljs$lang$ctorStr = "cljs.core.async/t17942";

cljs.core.async.t17942.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t17942");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17942 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17942(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17943){
return (new cljs.core.async.t17942(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17943));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17942(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6593__auto___18061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18014){
var state_val_18015 = (state_18014[(1)]);
if((state_val_18015 === (7))){
var inst_17958 = (state_18014[(7)]);
var inst_17963 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17958);
var state_18014__$1 = state_18014;
var statearr_18016_18062 = state_18014__$1;
(statearr_18016_18062[(2)] = inst_17963);

(statearr_18016_18062[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (20))){
var inst_17973 = (state_18014[(8)]);
var state_18014__$1 = state_18014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18014__$1,(23),out,inst_17973);
} else {
if((state_val_18015 === (1))){
var inst_17948 = (state_18014[(9)]);
var inst_17948__$1 = calc_state.call(null);
var inst_17949 = cljs.core.seq_QMARK_.call(null,inst_17948__$1);
var state_18014__$1 = (function (){var statearr_18017 = state_18014;
(statearr_18017[(9)] = inst_17948__$1);

return statearr_18017;
})();
if(inst_17949){
var statearr_18018_18063 = state_18014__$1;
(statearr_18018_18063[(1)] = (2));

} else {
var statearr_18019_18064 = state_18014__$1;
(statearr_18019_18064[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (24))){
var inst_17966 = (state_18014[(10)]);
var inst_17958 = inst_17966;
var state_18014__$1 = (function (){var statearr_18020 = state_18014;
(statearr_18020[(7)] = inst_17958);

return statearr_18020;
})();
var statearr_18021_18065 = state_18014__$1;
(statearr_18021_18065[(2)] = null);

(statearr_18021_18065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (4))){
var inst_17948 = (state_18014[(9)]);
var inst_17954 = (state_18014[(2)]);
var inst_17955 = cljs.core.get.call(null,inst_17954,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17956 = cljs.core.get.call(null,inst_17954,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17957 = cljs.core.get.call(null,inst_17954,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17958 = inst_17948;
var state_18014__$1 = (function (){var statearr_18022 = state_18014;
(statearr_18022[(7)] = inst_17958);

(statearr_18022[(11)] = inst_17957);

(statearr_18022[(12)] = inst_17955);

(statearr_18022[(13)] = inst_17956);

return statearr_18022;
})();
var statearr_18023_18066 = state_18014__$1;
(statearr_18023_18066[(2)] = null);

(statearr_18023_18066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (15))){
var state_18014__$1 = state_18014;
var statearr_18024_18067 = state_18014__$1;
(statearr_18024_18067[(2)] = null);

(statearr_18024_18067[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (21))){
var inst_17966 = (state_18014[(10)]);
var inst_17958 = inst_17966;
var state_18014__$1 = (function (){var statearr_18025 = state_18014;
(statearr_18025[(7)] = inst_17958);

return statearr_18025;
})();
var statearr_18026_18068 = state_18014__$1;
(statearr_18026_18068[(2)] = null);

(statearr_18026_18068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (13))){
var inst_18010 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
var statearr_18027_18069 = state_18014__$1;
(statearr_18027_18069[(2)] = inst_18010);

(statearr_18027_18069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (22))){
var inst_18008 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
var statearr_18028_18070 = state_18014__$1;
(statearr_18028_18070[(2)] = inst_18008);

(statearr_18028_18070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (6))){
var inst_18012 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18014__$1,inst_18012);
} else {
if((state_val_18015 === (25))){
var state_18014__$1 = state_18014;
var statearr_18029_18071 = state_18014__$1;
(statearr_18029_18071[(2)] = null);

(statearr_18029_18071[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (17))){
var inst_17988 = (state_18014[(14)]);
var state_18014__$1 = state_18014;
var statearr_18030_18072 = state_18014__$1;
(statearr_18030_18072[(2)] = inst_17988);

(statearr_18030_18072[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (3))){
var inst_17948 = (state_18014[(9)]);
var state_18014__$1 = state_18014;
var statearr_18031_18073 = state_18014__$1;
(statearr_18031_18073[(2)] = inst_17948);

(statearr_18031_18073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (12))){
var inst_17974 = (state_18014[(15)]);
var inst_17969 = (state_18014[(16)]);
var inst_17988 = (state_18014[(14)]);
var inst_17988__$1 = inst_17969.call(null,inst_17974);
var state_18014__$1 = (function (){var statearr_18032 = state_18014;
(statearr_18032[(14)] = inst_17988__$1);

return statearr_18032;
})();
if(cljs.core.truth_(inst_17988__$1)){
var statearr_18033_18074 = state_18014__$1;
(statearr_18033_18074[(1)] = (17));

} else {
var statearr_18034_18075 = state_18014__$1;
(statearr_18034_18075[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (2))){
var inst_17948 = (state_18014[(9)]);
var inst_17951 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17948);
var state_18014__$1 = state_18014;
var statearr_18035_18076 = state_18014__$1;
(statearr_18035_18076[(2)] = inst_17951);

(statearr_18035_18076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (23))){
var inst_17999 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
if(cljs.core.truth_(inst_17999)){
var statearr_18036_18077 = state_18014__$1;
(statearr_18036_18077[(1)] = (24));

} else {
var statearr_18037_18078 = state_18014__$1;
(statearr_18037_18078[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (19))){
var inst_17996 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
if(cljs.core.truth_(inst_17996)){
var statearr_18038_18079 = state_18014__$1;
(statearr_18038_18079[(1)] = (20));

} else {
var statearr_18039_18080 = state_18014__$1;
(statearr_18039_18080[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (11))){
var inst_17973 = (state_18014[(8)]);
var inst_17979 = (inst_17973 == null);
var state_18014__$1 = state_18014;
if(cljs.core.truth_(inst_17979)){
var statearr_18040_18081 = state_18014__$1;
(statearr_18040_18081[(1)] = (14));

} else {
var statearr_18041_18082 = state_18014__$1;
(statearr_18041_18082[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (9))){
var inst_17966 = (state_18014[(10)]);
var inst_17966__$1 = (state_18014[(2)]);
var inst_17967 = cljs.core.get.call(null,inst_17966__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17968 = cljs.core.get.call(null,inst_17966__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17969 = cljs.core.get.call(null,inst_17966__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18014__$1 = (function (){var statearr_18042 = state_18014;
(statearr_18042[(10)] = inst_17966__$1);

(statearr_18042[(16)] = inst_17969);

(statearr_18042[(17)] = inst_17968);

return statearr_18042;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18014__$1,(10),inst_17967);
} else {
if((state_val_18015 === (5))){
var inst_17958 = (state_18014[(7)]);
var inst_17961 = cljs.core.seq_QMARK_.call(null,inst_17958);
var state_18014__$1 = state_18014;
if(inst_17961){
var statearr_18043_18083 = state_18014__$1;
(statearr_18043_18083[(1)] = (7));

} else {
var statearr_18044_18084 = state_18014__$1;
(statearr_18044_18084[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (14))){
var inst_17974 = (state_18014[(15)]);
var inst_17981 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17974);
var state_18014__$1 = state_18014;
var statearr_18045_18085 = state_18014__$1;
(statearr_18045_18085[(2)] = inst_17981);

(statearr_18045_18085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (26))){
var inst_18004 = (state_18014[(2)]);
var state_18014__$1 = state_18014;
var statearr_18046_18086 = state_18014__$1;
(statearr_18046_18086[(2)] = inst_18004);

(statearr_18046_18086[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (16))){
var inst_17984 = (state_18014[(2)]);
var inst_17985 = calc_state.call(null);
var inst_17958 = inst_17985;
var state_18014__$1 = (function (){var statearr_18047 = state_18014;
(statearr_18047[(18)] = inst_17984);

(statearr_18047[(7)] = inst_17958);

return statearr_18047;
})();
var statearr_18048_18087 = state_18014__$1;
(statearr_18048_18087[(2)] = null);

(statearr_18048_18087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (10))){
var inst_17974 = (state_18014[(15)]);
var inst_17973 = (state_18014[(8)]);
var inst_17972 = (state_18014[(2)]);
var inst_17973__$1 = cljs.core.nth.call(null,inst_17972,(0),null);
var inst_17974__$1 = cljs.core.nth.call(null,inst_17972,(1),null);
var inst_17975 = (inst_17973__$1 == null);
var inst_17976 = cljs.core._EQ_.call(null,inst_17974__$1,change);
var inst_17977 = (inst_17975) || (inst_17976);
var state_18014__$1 = (function (){var statearr_18049 = state_18014;
(statearr_18049[(15)] = inst_17974__$1);

(statearr_18049[(8)] = inst_17973__$1);

return statearr_18049;
})();
if(cljs.core.truth_(inst_17977)){
var statearr_18050_18088 = state_18014__$1;
(statearr_18050_18088[(1)] = (11));

} else {
var statearr_18051_18089 = state_18014__$1;
(statearr_18051_18089[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (18))){
var inst_17974 = (state_18014[(15)]);
var inst_17969 = (state_18014[(16)]);
var inst_17968 = (state_18014[(17)]);
var inst_17991 = cljs.core.empty_QMARK_.call(null,inst_17969);
var inst_17992 = inst_17968.call(null,inst_17974);
var inst_17993 = cljs.core.not.call(null,inst_17992);
var inst_17994 = (inst_17991) && (inst_17993);
var state_18014__$1 = state_18014;
var statearr_18052_18090 = state_18014__$1;
(statearr_18052_18090[(2)] = inst_17994);

(statearr_18052_18090[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18015 === (8))){
var inst_17958 = (state_18014[(7)]);
var state_18014__$1 = state_18014;
var statearr_18053_18091 = state_18014__$1;
(statearr_18053_18091[(2)] = inst_17958);

(statearr_18053_18091[(1)] = (9));


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
});})(c__6593__auto___18061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6537__auto__,c__6593__auto___18061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18057[(0)] = state_machine__6538__auto__);

(statearr_18057[(1)] = (1));

return statearr_18057;
});
var state_machine__6538__auto____1 = (function (state_18014){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18058){if((e18058 instanceof Object)){
var ex__6541__auto__ = e18058;
var statearr_18059_18092 = state_18014;
(statearr_18059_18092[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18093 = state_18014;
state_18014 = G__18093;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18014){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6595__auto__ = (function (){var statearr_18060 = f__6594__auto__.call(null);
(statearr_18060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18061);

return statearr_18060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18095 = {};
return obj18095;
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
return (function (){var or__3815__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4459__auto__)]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
var or__3815__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3815__auto__,mults){
return (function (p1__18096_SHARP_){
if(cljs.core.truth_(p1__18096_SHARP_.call(null,topic))){
return p1__18096_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18096_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3815__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18219 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18219 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18220){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18220 = meta18220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18219.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18219.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18219.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18219.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18221){
var self__ = this;
var _18221__$1 = this;
return self__.meta18220;
});})(mults,ensure_mult))
;

cljs.core.async.t18219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18221,meta18220__$1){
var self__ = this;
var _18221__$1 = this;
return (new cljs.core.async.t18219(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18220__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18219.cljs$lang$type = true;

cljs.core.async.t18219.cljs$lang$ctorStr = "cljs.core.async/t18219";

cljs.core.async.t18219.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t18219");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18219 = ((function (mults,ensure_mult){
return (function __GT_t18219(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18220){
return (new cljs.core.async.t18219(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18220));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18219(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6593__auto___18341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18341,mults,ensure_mult,p){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18341,mults,ensure_mult,p){
return (function (state_18293){
var state_val_18294 = (state_18293[(1)]);
if((state_val_18294 === (7))){
var inst_18289 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
var statearr_18295_18342 = state_18293__$1;
(statearr_18295_18342[(2)] = inst_18289);

(statearr_18295_18342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (20))){
var state_18293__$1 = state_18293;
var statearr_18296_18343 = state_18293__$1;
(statearr_18296_18343[(2)] = null);

(statearr_18296_18343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (1))){
var state_18293__$1 = state_18293;
var statearr_18297_18344 = state_18293__$1;
(statearr_18297_18344[(2)] = null);

(statearr_18297_18344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (24))){
var inst_18272 = (state_18293[(7)]);
var inst_18281 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18272);
var state_18293__$1 = state_18293;
var statearr_18298_18345 = state_18293__$1;
(statearr_18298_18345[(2)] = inst_18281);

(statearr_18298_18345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (4))){
var inst_18224 = (state_18293[(8)]);
var inst_18224__$1 = (state_18293[(2)]);
var inst_18225 = (inst_18224__$1 == null);
var state_18293__$1 = (function (){var statearr_18299 = state_18293;
(statearr_18299[(8)] = inst_18224__$1);

return statearr_18299;
})();
if(cljs.core.truth_(inst_18225)){
var statearr_18300_18346 = state_18293__$1;
(statearr_18300_18346[(1)] = (5));

} else {
var statearr_18301_18347 = state_18293__$1;
(statearr_18301_18347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (15))){
var inst_18266 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
var statearr_18302_18348 = state_18293__$1;
(statearr_18302_18348[(2)] = inst_18266);

(statearr_18302_18348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (21))){
var inst_18286 = (state_18293[(2)]);
var state_18293__$1 = (function (){var statearr_18303 = state_18293;
(statearr_18303[(9)] = inst_18286);

return statearr_18303;
})();
var statearr_18304_18349 = state_18293__$1;
(statearr_18304_18349[(2)] = null);

(statearr_18304_18349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (13))){
var inst_18248 = (state_18293[(10)]);
var inst_18250 = cljs.core.chunked_seq_QMARK_.call(null,inst_18248);
var state_18293__$1 = state_18293;
if(inst_18250){
var statearr_18305_18350 = state_18293__$1;
(statearr_18305_18350[(1)] = (16));

} else {
var statearr_18306_18351 = state_18293__$1;
(statearr_18306_18351[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (22))){
var inst_18278 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
if(cljs.core.truth_(inst_18278)){
var statearr_18307_18352 = state_18293__$1;
(statearr_18307_18352[(1)] = (23));

} else {
var statearr_18308_18353 = state_18293__$1;
(statearr_18308_18353[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (6))){
var inst_18272 = (state_18293[(7)]);
var inst_18224 = (state_18293[(8)]);
var inst_18274 = (state_18293[(11)]);
var inst_18272__$1 = topic_fn.call(null,inst_18224);
var inst_18273 = cljs.core.deref.call(null,mults);
var inst_18274__$1 = cljs.core.get.call(null,inst_18273,inst_18272__$1);
var state_18293__$1 = (function (){var statearr_18309 = state_18293;
(statearr_18309[(7)] = inst_18272__$1);

(statearr_18309[(11)] = inst_18274__$1);

return statearr_18309;
})();
if(cljs.core.truth_(inst_18274__$1)){
var statearr_18310_18354 = state_18293__$1;
(statearr_18310_18354[(1)] = (19));

} else {
var statearr_18311_18355 = state_18293__$1;
(statearr_18311_18355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (25))){
var inst_18283 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
var statearr_18312_18356 = state_18293__$1;
(statearr_18312_18356[(2)] = inst_18283);

(statearr_18312_18356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (17))){
var inst_18248 = (state_18293[(10)]);
var inst_18257 = cljs.core.first.call(null,inst_18248);
var inst_18258 = cljs.core.async.muxch_STAR_.call(null,inst_18257);
var inst_18259 = cljs.core.async.close_BANG_.call(null,inst_18258);
var inst_18260 = cljs.core.next.call(null,inst_18248);
var inst_18234 = inst_18260;
var inst_18235 = null;
var inst_18236 = (0);
var inst_18237 = (0);
var state_18293__$1 = (function (){var statearr_18313 = state_18293;
(statearr_18313[(12)] = inst_18236);

(statearr_18313[(13)] = inst_18234);

(statearr_18313[(14)] = inst_18259);

(statearr_18313[(15)] = inst_18237);

(statearr_18313[(16)] = inst_18235);

return statearr_18313;
})();
var statearr_18314_18357 = state_18293__$1;
(statearr_18314_18357[(2)] = null);

(statearr_18314_18357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (3))){
var inst_18291 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18293__$1,inst_18291);
} else {
if((state_val_18294 === (12))){
var inst_18268 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
var statearr_18315_18358 = state_18293__$1;
(statearr_18315_18358[(2)] = inst_18268);

(statearr_18315_18358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (2))){
var state_18293__$1 = state_18293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18293__$1,(4),ch);
} else {
if((state_val_18294 === (23))){
var state_18293__$1 = state_18293;
var statearr_18316_18359 = state_18293__$1;
(statearr_18316_18359[(2)] = null);

(statearr_18316_18359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (19))){
var inst_18224 = (state_18293[(8)]);
var inst_18274 = (state_18293[(11)]);
var inst_18276 = cljs.core.async.muxch_STAR_.call(null,inst_18274);
var state_18293__$1 = state_18293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18293__$1,(22),inst_18276,inst_18224);
} else {
if((state_val_18294 === (11))){
var inst_18248 = (state_18293[(10)]);
var inst_18234 = (state_18293[(13)]);
var inst_18248__$1 = cljs.core.seq.call(null,inst_18234);
var state_18293__$1 = (function (){var statearr_18317 = state_18293;
(statearr_18317[(10)] = inst_18248__$1);

return statearr_18317;
})();
if(inst_18248__$1){
var statearr_18318_18360 = state_18293__$1;
(statearr_18318_18360[(1)] = (13));

} else {
var statearr_18319_18361 = state_18293__$1;
(statearr_18319_18361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (9))){
var inst_18270 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
var statearr_18320_18362 = state_18293__$1;
(statearr_18320_18362[(2)] = inst_18270);

(statearr_18320_18362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (5))){
var inst_18231 = cljs.core.deref.call(null,mults);
var inst_18232 = cljs.core.vals.call(null,inst_18231);
var inst_18233 = cljs.core.seq.call(null,inst_18232);
var inst_18234 = inst_18233;
var inst_18235 = null;
var inst_18236 = (0);
var inst_18237 = (0);
var state_18293__$1 = (function (){var statearr_18321 = state_18293;
(statearr_18321[(12)] = inst_18236);

(statearr_18321[(13)] = inst_18234);

(statearr_18321[(15)] = inst_18237);

(statearr_18321[(16)] = inst_18235);

return statearr_18321;
})();
var statearr_18322_18363 = state_18293__$1;
(statearr_18322_18363[(2)] = null);

(statearr_18322_18363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (14))){
var state_18293__$1 = state_18293;
var statearr_18326_18364 = state_18293__$1;
(statearr_18326_18364[(2)] = null);

(statearr_18326_18364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (16))){
var inst_18248 = (state_18293[(10)]);
var inst_18252 = cljs.core.chunk_first.call(null,inst_18248);
var inst_18253 = cljs.core.chunk_rest.call(null,inst_18248);
var inst_18254 = cljs.core.count.call(null,inst_18252);
var inst_18234 = inst_18253;
var inst_18235 = inst_18252;
var inst_18236 = inst_18254;
var inst_18237 = (0);
var state_18293__$1 = (function (){var statearr_18327 = state_18293;
(statearr_18327[(12)] = inst_18236);

(statearr_18327[(13)] = inst_18234);

(statearr_18327[(15)] = inst_18237);

(statearr_18327[(16)] = inst_18235);

return statearr_18327;
})();
var statearr_18328_18365 = state_18293__$1;
(statearr_18328_18365[(2)] = null);

(statearr_18328_18365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (10))){
var inst_18236 = (state_18293[(12)]);
var inst_18234 = (state_18293[(13)]);
var inst_18237 = (state_18293[(15)]);
var inst_18235 = (state_18293[(16)]);
var inst_18242 = cljs.core._nth.call(null,inst_18235,inst_18237);
var inst_18243 = cljs.core.async.muxch_STAR_.call(null,inst_18242);
var inst_18244 = cljs.core.async.close_BANG_.call(null,inst_18243);
var inst_18245 = (inst_18237 + (1));
var tmp18323 = inst_18236;
var tmp18324 = inst_18234;
var tmp18325 = inst_18235;
var inst_18234__$1 = tmp18324;
var inst_18235__$1 = tmp18325;
var inst_18236__$1 = tmp18323;
var inst_18237__$1 = inst_18245;
var state_18293__$1 = (function (){var statearr_18329 = state_18293;
(statearr_18329[(12)] = inst_18236__$1);

(statearr_18329[(17)] = inst_18244);

(statearr_18329[(13)] = inst_18234__$1);

(statearr_18329[(15)] = inst_18237__$1);

(statearr_18329[(16)] = inst_18235__$1);

return statearr_18329;
})();
var statearr_18330_18366 = state_18293__$1;
(statearr_18330_18366[(2)] = null);

(statearr_18330_18366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (18))){
var inst_18263 = (state_18293[(2)]);
var state_18293__$1 = state_18293;
var statearr_18331_18367 = state_18293__$1;
(statearr_18331_18367[(2)] = inst_18263);

(statearr_18331_18367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18294 === (8))){
var inst_18236 = (state_18293[(12)]);
var inst_18237 = (state_18293[(15)]);
var inst_18239 = (inst_18237 < inst_18236);
var inst_18240 = inst_18239;
var state_18293__$1 = state_18293;
if(cljs.core.truth_(inst_18240)){
var statearr_18332_18368 = state_18293__$1;
(statearr_18332_18368[(1)] = (10));

} else {
var statearr_18333_18369 = state_18293__$1;
(statearr_18333_18369[(1)] = (11));

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
});})(c__6593__auto___18341,mults,ensure_mult,p))
;
return ((function (switch__6537__auto__,c__6593__auto___18341,mults,ensure_mult,p){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18337[(0)] = state_machine__6538__auto__);

(statearr_18337[(1)] = (1));

return statearr_18337;
});
var state_machine__6538__auto____1 = (function (state_18293){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18338){if((e18338 instanceof Object)){
var ex__6541__auto__ = e18338;
var statearr_18339_18370 = state_18293;
(statearr_18339_18370[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18371 = state_18293;
state_18293 = G__18371;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18293){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18341,mults,ensure_mult,p))
})();
var state__6595__auto__ = (function (){var statearr_18340 = f__6594__auto__.call(null);
(statearr_18340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18341);

return statearr_18340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18341,mults,ensure_mult,p))
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
var c__6593__auto___18508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18478){
var state_val_18479 = (state_18478[(1)]);
if((state_val_18479 === (7))){
var state_18478__$1 = state_18478;
var statearr_18480_18509 = state_18478__$1;
(statearr_18480_18509[(2)] = null);

(statearr_18480_18509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (1))){
var state_18478__$1 = state_18478;
var statearr_18481_18510 = state_18478__$1;
(statearr_18481_18510[(2)] = null);

(statearr_18481_18510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (4))){
var inst_18442 = (state_18478[(7)]);
var inst_18444 = (inst_18442 < cnt);
var state_18478__$1 = state_18478;
if(cljs.core.truth_(inst_18444)){
var statearr_18482_18511 = state_18478__$1;
(statearr_18482_18511[(1)] = (6));

} else {
var statearr_18483_18512 = state_18478__$1;
(statearr_18483_18512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (15))){
var inst_18474 = (state_18478[(2)]);
var state_18478__$1 = state_18478;
var statearr_18484_18513 = state_18478__$1;
(statearr_18484_18513[(2)] = inst_18474);

(statearr_18484_18513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (13))){
var inst_18467 = cljs.core.async.close_BANG_.call(null,out);
var state_18478__$1 = state_18478;
var statearr_18485_18514 = state_18478__$1;
(statearr_18485_18514[(2)] = inst_18467);

(statearr_18485_18514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (6))){
var state_18478__$1 = state_18478;
var statearr_18486_18515 = state_18478__$1;
(statearr_18486_18515[(2)] = null);

(statearr_18486_18515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (3))){
var inst_18476 = (state_18478[(2)]);
var state_18478__$1 = state_18478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18478__$1,inst_18476);
} else {
if((state_val_18479 === (12))){
var inst_18464 = (state_18478[(8)]);
var inst_18464__$1 = (state_18478[(2)]);
var inst_18465 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18464__$1);
var state_18478__$1 = (function (){var statearr_18487 = state_18478;
(statearr_18487[(8)] = inst_18464__$1);

return statearr_18487;
})();
if(cljs.core.truth_(inst_18465)){
var statearr_18488_18516 = state_18478__$1;
(statearr_18488_18516[(1)] = (13));

} else {
var statearr_18489_18517 = state_18478__$1;
(statearr_18489_18517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (2))){
var inst_18441 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18442 = (0);
var state_18478__$1 = (function (){var statearr_18490 = state_18478;
(statearr_18490[(9)] = inst_18441);

(statearr_18490[(7)] = inst_18442);

return statearr_18490;
})();
var statearr_18491_18518 = state_18478__$1;
(statearr_18491_18518[(2)] = null);

(statearr_18491_18518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (11))){
var inst_18442 = (state_18478[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18478,(10),Object,null,(9));
var inst_18451 = chs__$1.call(null,inst_18442);
var inst_18452 = done.call(null,inst_18442);
var inst_18453 = cljs.core.async.take_BANG_.call(null,inst_18451,inst_18452);
var state_18478__$1 = state_18478;
var statearr_18492_18519 = state_18478__$1;
(statearr_18492_18519[(2)] = inst_18453);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18478__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (9))){
var inst_18442 = (state_18478[(7)]);
var inst_18455 = (state_18478[(2)]);
var inst_18456 = (inst_18442 + (1));
var inst_18442__$1 = inst_18456;
var state_18478__$1 = (function (){var statearr_18493 = state_18478;
(statearr_18493[(7)] = inst_18442__$1);

(statearr_18493[(10)] = inst_18455);

return statearr_18493;
})();
var statearr_18494_18520 = state_18478__$1;
(statearr_18494_18520[(2)] = null);

(statearr_18494_18520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (5))){
var inst_18462 = (state_18478[(2)]);
var state_18478__$1 = (function (){var statearr_18495 = state_18478;
(statearr_18495[(11)] = inst_18462);

return statearr_18495;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18478__$1,(12),dchan);
} else {
if((state_val_18479 === (14))){
var inst_18464 = (state_18478[(8)]);
var inst_18469 = cljs.core.apply.call(null,f,inst_18464);
var state_18478__$1 = state_18478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18478__$1,(16),out,inst_18469);
} else {
if((state_val_18479 === (16))){
var inst_18471 = (state_18478[(2)]);
var state_18478__$1 = (function (){var statearr_18496 = state_18478;
(statearr_18496[(12)] = inst_18471);

return statearr_18496;
})();
var statearr_18497_18521 = state_18478__$1;
(statearr_18497_18521[(2)] = null);

(statearr_18497_18521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (10))){
var inst_18446 = (state_18478[(2)]);
var inst_18447 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18478__$1 = (function (){var statearr_18498 = state_18478;
(statearr_18498[(13)] = inst_18446);

return statearr_18498;
})();
var statearr_18499_18522 = state_18478__$1;
(statearr_18499_18522[(2)] = inst_18447);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18478__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18479 === (8))){
var inst_18460 = (state_18478[(2)]);
var state_18478__$1 = state_18478;
var statearr_18500_18523 = state_18478__$1;
(statearr_18500_18523[(2)] = inst_18460);

(statearr_18500_18523[(1)] = (5));


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
});})(c__6593__auto___18508,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6537__auto__,c__6593__auto___18508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18504[(0)] = state_machine__6538__auto__);

(statearr_18504[(1)] = (1));

return statearr_18504;
});
var state_machine__6538__auto____1 = (function (state_18478){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18505){if((e18505 instanceof Object)){
var ex__6541__auto__ = e18505;
var statearr_18506_18524 = state_18478;
(statearr_18506_18524[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18525 = state_18478;
state_18478 = G__18525;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18478){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18508,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6595__auto__ = (function (){var statearr_18507 = f__6594__auto__.call(null);
(statearr_18507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18508);

return statearr_18507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18508,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6593__auto___18633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18633,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18633,out){
return (function (state_18609){
var state_val_18610 = (state_18609[(1)]);
if((state_val_18610 === (7))){
var inst_18589 = (state_18609[(7)]);
var inst_18588 = (state_18609[(8)]);
var inst_18588__$1 = (state_18609[(2)]);
var inst_18589__$1 = cljs.core.nth.call(null,inst_18588__$1,(0),null);
var inst_18590 = cljs.core.nth.call(null,inst_18588__$1,(1),null);
var inst_18591 = (inst_18589__$1 == null);
var state_18609__$1 = (function (){var statearr_18611 = state_18609;
(statearr_18611[(7)] = inst_18589__$1);

(statearr_18611[(8)] = inst_18588__$1);

(statearr_18611[(9)] = inst_18590);

return statearr_18611;
})();
if(cljs.core.truth_(inst_18591)){
var statearr_18612_18634 = state_18609__$1;
(statearr_18612_18634[(1)] = (8));

} else {
var statearr_18613_18635 = state_18609__$1;
(statearr_18613_18635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (1))){
var inst_18580 = cljs.core.vec.call(null,chs);
var inst_18581 = inst_18580;
var state_18609__$1 = (function (){var statearr_18614 = state_18609;
(statearr_18614[(10)] = inst_18581);

return statearr_18614;
})();
var statearr_18615_18636 = state_18609__$1;
(statearr_18615_18636[(2)] = null);

(statearr_18615_18636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (4))){
var inst_18581 = (state_18609[(10)]);
var state_18609__$1 = state_18609;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18609__$1,(7),inst_18581);
} else {
if((state_val_18610 === (6))){
var inst_18605 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18616_18637 = state_18609__$1;
(statearr_18616_18637[(2)] = inst_18605);

(statearr_18616_18637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (3))){
var inst_18607 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18609__$1,inst_18607);
} else {
if((state_val_18610 === (2))){
var inst_18581 = (state_18609[(10)]);
var inst_18583 = cljs.core.count.call(null,inst_18581);
var inst_18584 = (inst_18583 > (0));
var state_18609__$1 = state_18609;
if(cljs.core.truth_(inst_18584)){
var statearr_18618_18638 = state_18609__$1;
(statearr_18618_18638[(1)] = (4));

} else {
var statearr_18619_18639 = state_18609__$1;
(statearr_18619_18639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (11))){
var inst_18581 = (state_18609[(10)]);
var inst_18598 = (state_18609[(2)]);
var tmp18617 = inst_18581;
var inst_18581__$1 = tmp18617;
var state_18609__$1 = (function (){var statearr_18620 = state_18609;
(statearr_18620[(10)] = inst_18581__$1);

(statearr_18620[(11)] = inst_18598);

return statearr_18620;
})();
var statearr_18621_18640 = state_18609__$1;
(statearr_18621_18640[(2)] = null);

(statearr_18621_18640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (9))){
var inst_18589 = (state_18609[(7)]);
var state_18609__$1 = state_18609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18609__$1,(11),out,inst_18589);
} else {
if((state_val_18610 === (5))){
var inst_18603 = cljs.core.async.close_BANG_.call(null,out);
var state_18609__$1 = state_18609;
var statearr_18622_18641 = state_18609__$1;
(statearr_18622_18641[(2)] = inst_18603);

(statearr_18622_18641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (10))){
var inst_18601 = (state_18609[(2)]);
var state_18609__$1 = state_18609;
var statearr_18623_18642 = state_18609__$1;
(statearr_18623_18642[(2)] = inst_18601);

(statearr_18623_18642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18610 === (8))){
var inst_18581 = (state_18609[(10)]);
var inst_18589 = (state_18609[(7)]);
var inst_18588 = (state_18609[(8)]);
var inst_18590 = (state_18609[(9)]);
var inst_18593 = (function (){var c = inst_18590;
var v = inst_18589;
var vec__18586 = inst_18588;
var cs = inst_18581;
return ((function (c,v,vec__18586,cs,inst_18581,inst_18589,inst_18588,inst_18590,state_val_18610,c__6593__auto___18633,out){
return (function (p1__18526_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18526_SHARP_);
});
;})(c,v,vec__18586,cs,inst_18581,inst_18589,inst_18588,inst_18590,state_val_18610,c__6593__auto___18633,out))
})();
var inst_18594 = cljs.core.filterv.call(null,inst_18593,inst_18581);
var inst_18581__$1 = inst_18594;
var state_18609__$1 = (function (){var statearr_18624 = state_18609;
(statearr_18624[(10)] = inst_18581__$1);

return statearr_18624;
})();
var statearr_18625_18643 = state_18609__$1;
(statearr_18625_18643[(2)] = null);

(statearr_18625_18643[(1)] = (2));


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
});})(c__6593__auto___18633,out))
;
return ((function (switch__6537__auto__,c__6593__auto___18633,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18629 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18629[(0)] = state_machine__6538__auto__);

(statearr_18629[(1)] = (1));

return statearr_18629;
});
var state_machine__6538__auto____1 = (function (state_18609){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18630){if((e18630 instanceof Object)){
var ex__6541__auto__ = e18630;
var statearr_18631_18644 = state_18609;
(statearr_18631_18644[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18645 = state_18609;
state_18609 = G__18645;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18609){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18633,out))
})();
var state__6595__auto__ = (function (){var statearr_18632 = f__6594__auto__.call(null);
(statearr_18632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18633);

return statearr_18632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18633,out))
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
var c__6593__auto___18738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18738,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18738,out){
return (function (state_18715){
var state_val_18716 = (state_18715[(1)]);
if((state_val_18716 === (7))){
var inst_18697 = (state_18715[(7)]);
var inst_18697__$1 = (state_18715[(2)]);
var inst_18698 = (inst_18697__$1 == null);
var inst_18699 = cljs.core.not.call(null,inst_18698);
var state_18715__$1 = (function (){var statearr_18717 = state_18715;
(statearr_18717[(7)] = inst_18697__$1);

return statearr_18717;
})();
if(inst_18699){
var statearr_18718_18739 = state_18715__$1;
(statearr_18718_18739[(1)] = (8));

} else {
var statearr_18719_18740 = state_18715__$1;
(statearr_18719_18740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18716 === (1))){
var inst_18692 = (0);
var state_18715__$1 = (function (){var statearr_18720 = state_18715;
(statearr_18720[(8)] = inst_18692);

return statearr_18720;
})();
var statearr_18721_18741 = state_18715__$1;
(statearr_18721_18741[(2)] = null);

(statearr_18721_18741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18716 === (4))){
var state_18715__$1 = state_18715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18715__$1,(7),ch);
} else {
if((state_val_18716 === (6))){
var inst_18710 = (state_18715[(2)]);
var state_18715__$1 = state_18715;
var statearr_18722_18742 = state_18715__$1;
(statearr_18722_18742[(2)] = inst_18710);

(statearr_18722_18742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18716 === (3))){
var inst_18712 = (state_18715[(2)]);
var inst_18713 = cljs.core.async.close_BANG_.call(null,out);
var state_18715__$1 = (function (){var statearr_18723 = state_18715;
(statearr_18723[(9)] = inst_18712);

return statearr_18723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18715__$1,inst_18713);
} else {
if((state_val_18716 === (2))){
var inst_18692 = (state_18715[(8)]);
var inst_18694 = (inst_18692 < n);
var state_18715__$1 = state_18715;
if(cljs.core.truth_(inst_18694)){
var statearr_18724_18743 = state_18715__$1;
(statearr_18724_18743[(1)] = (4));

} else {
var statearr_18725_18744 = state_18715__$1;
(statearr_18725_18744[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18716 === (11))){
var inst_18692 = (state_18715[(8)]);
var inst_18702 = (state_18715[(2)]);
var inst_18703 = (inst_18692 + (1));
var inst_18692__$1 = inst_18703;
var state_18715__$1 = (function (){var statearr_18726 = state_18715;
(statearr_18726[(10)] = inst_18702);

(statearr_18726[(8)] = inst_18692__$1);

return statearr_18726;
})();
var statearr_18727_18745 = state_18715__$1;
(statearr_18727_18745[(2)] = null);

(statearr_18727_18745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18716 === (9))){
var state_18715__$1 = state_18715;
var statearr_18728_18746 = state_18715__$1;
(statearr_18728_18746[(2)] = null);

(statearr_18728_18746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18716 === (5))){
var state_18715__$1 = state_18715;
var statearr_18729_18747 = state_18715__$1;
(statearr_18729_18747[(2)] = null);

(statearr_18729_18747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18716 === (10))){
var inst_18707 = (state_18715[(2)]);
var state_18715__$1 = state_18715;
var statearr_18730_18748 = state_18715__$1;
(statearr_18730_18748[(2)] = inst_18707);

(statearr_18730_18748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18716 === (8))){
var inst_18697 = (state_18715[(7)]);
var state_18715__$1 = state_18715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18715__$1,(11),out,inst_18697);
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
});})(c__6593__auto___18738,out))
;
return ((function (switch__6537__auto__,c__6593__auto___18738,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18734[(0)] = state_machine__6538__auto__);

(statearr_18734[(1)] = (1));

return statearr_18734;
});
var state_machine__6538__auto____1 = (function (state_18715){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18735){if((e18735 instanceof Object)){
var ex__6541__auto__ = e18735;
var statearr_18736_18749 = state_18715;
(statearr_18736_18749[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18750 = state_18715;
state_18715 = G__18750;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18715){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18738,out))
})();
var state__6595__auto__ = (function (){var statearr_18737 = f__6594__auto__.call(null);
(statearr_18737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18738);

return statearr_18737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18738,out))
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
if(typeof cljs.core.async.t18758 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18758 = (function (ch,f,map_LT_,meta18759){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18759 = meta18759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18761 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18761 = (function (fn1,_,meta18759,map_LT_,f,ch,meta18762){
this.fn1 = fn1;
this._ = _;
this.meta18759 = meta18759;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18762 = meta18762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18761.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18751_SHARP_){
return f1.call(null,(((p1__18751_SHARP_ == null))?null:self__.f.call(null,p1__18751_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18763){
var self__ = this;
var _18763__$1 = this;
return self__.meta18762;
});})(___$1))
;

cljs.core.async.t18761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18763,meta18762__$1){
var self__ = this;
var _18763__$1 = this;
return (new cljs.core.async.t18761(self__.fn1,self__._,self__.meta18759,self__.map_LT_,self__.f,self__.ch,meta18762__$1));
});})(___$1))
;

cljs.core.async.t18761.cljs$lang$type = true;

cljs.core.async.t18761.cljs$lang$ctorStr = "cljs.core.async/t18761";

cljs.core.async.t18761.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t18761");
});})(___$1))
;

cljs.core.async.__GT_t18761 = ((function (___$1){
return (function __GT_t18761(fn1__$1,___$2,meta18759__$1,map_LT___$1,f__$1,ch__$1,meta18762){
return (new cljs.core.async.t18761(fn1__$1,___$2,meta18759__$1,map_LT___$1,f__$1,ch__$1,meta18762));
});})(___$1))
;

}

return (new cljs.core.async.t18761(fn1,___$1,self__.meta18759,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3803__auto__ = ret;
if(cljs.core.truth_(and__3803__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3803__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18758.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18760){
var self__ = this;
var _18760__$1 = this;
return self__.meta18759;
});

cljs.core.async.t18758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18760,meta18759__$1){
var self__ = this;
var _18760__$1 = this;
return (new cljs.core.async.t18758(self__.ch,self__.f,self__.map_LT_,meta18759__$1));
});

cljs.core.async.t18758.cljs$lang$type = true;

cljs.core.async.t18758.cljs$lang$ctorStr = "cljs.core.async/t18758";

cljs.core.async.t18758.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t18758");
});

cljs.core.async.__GT_t18758 = (function __GT_t18758(ch__$1,f__$1,map_LT___$1,meta18759){
return (new cljs.core.async.t18758(ch__$1,f__$1,map_LT___$1,meta18759));
});

}

return (new cljs.core.async.t18758(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t18767 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18767 = (function (ch,f,map_GT_,meta18768){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18768 = meta18768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18767.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t18767.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18767.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18769){
var self__ = this;
var _18769__$1 = this;
return self__.meta18768;
});

cljs.core.async.t18767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18769,meta18768__$1){
var self__ = this;
var _18769__$1 = this;
return (new cljs.core.async.t18767(self__.ch,self__.f,self__.map_GT_,meta18768__$1));
});

cljs.core.async.t18767.cljs$lang$type = true;

cljs.core.async.t18767.cljs$lang$ctorStr = "cljs.core.async/t18767";

cljs.core.async.t18767.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t18767");
});

cljs.core.async.__GT_t18767 = (function __GT_t18767(ch__$1,f__$1,map_GT___$1,meta18768){
return (new cljs.core.async.t18767(ch__$1,f__$1,map_GT___$1,meta18768));
});

}

return (new cljs.core.async.t18767(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t18773 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18773 = (function (ch,p,filter_GT_,meta18774){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18774 = meta18774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18773.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t18773.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18773.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18773.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18775){
var self__ = this;
var _18775__$1 = this;
return self__.meta18774;
});

cljs.core.async.t18773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18775,meta18774__$1){
var self__ = this;
var _18775__$1 = this;
return (new cljs.core.async.t18773(self__.ch,self__.p,self__.filter_GT_,meta18774__$1));
});

cljs.core.async.t18773.cljs$lang$type = true;

cljs.core.async.t18773.cljs$lang$ctorStr = "cljs.core.async/t18773";

cljs.core.async.t18773.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t18773");
});

cljs.core.async.__GT_t18773 = (function __GT_t18773(ch__$1,p__$1,filter_GT___$1,meta18774){
return (new cljs.core.async.t18773(ch__$1,p__$1,filter_GT___$1,meta18774));
});

}

return (new cljs.core.async.t18773(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6593__auto___18858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18858,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18858,out){
return (function (state_18837){
var state_val_18838 = (state_18837[(1)]);
if((state_val_18838 === (7))){
var inst_18833 = (state_18837[(2)]);
var state_18837__$1 = state_18837;
var statearr_18839_18859 = state_18837__$1;
(statearr_18839_18859[(2)] = inst_18833);

(statearr_18839_18859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18838 === (1))){
var state_18837__$1 = state_18837;
var statearr_18840_18860 = state_18837__$1;
(statearr_18840_18860[(2)] = null);

(statearr_18840_18860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18838 === (4))){
var inst_18819 = (state_18837[(7)]);
var inst_18819__$1 = (state_18837[(2)]);
var inst_18820 = (inst_18819__$1 == null);
var state_18837__$1 = (function (){var statearr_18841 = state_18837;
(statearr_18841[(7)] = inst_18819__$1);

return statearr_18841;
})();
if(cljs.core.truth_(inst_18820)){
var statearr_18842_18861 = state_18837__$1;
(statearr_18842_18861[(1)] = (5));

} else {
var statearr_18843_18862 = state_18837__$1;
(statearr_18843_18862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18838 === (6))){
var inst_18819 = (state_18837[(7)]);
var inst_18824 = p.call(null,inst_18819);
var state_18837__$1 = state_18837;
if(cljs.core.truth_(inst_18824)){
var statearr_18844_18863 = state_18837__$1;
(statearr_18844_18863[(1)] = (8));

} else {
var statearr_18845_18864 = state_18837__$1;
(statearr_18845_18864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18838 === (3))){
var inst_18835 = (state_18837[(2)]);
var state_18837__$1 = state_18837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18837__$1,inst_18835);
} else {
if((state_val_18838 === (2))){
var state_18837__$1 = state_18837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18837__$1,(4),ch);
} else {
if((state_val_18838 === (11))){
var inst_18827 = (state_18837[(2)]);
var state_18837__$1 = state_18837;
var statearr_18846_18865 = state_18837__$1;
(statearr_18846_18865[(2)] = inst_18827);

(statearr_18846_18865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18838 === (9))){
var state_18837__$1 = state_18837;
var statearr_18847_18866 = state_18837__$1;
(statearr_18847_18866[(2)] = null);

(statearr_18847_18866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18838 === (5))){
var inst_18822 = cljs.core.async.close_BANG_.call(null,out);
var state_18837__$1 = state_18837;
var statearr_18848_18867 = state_18837__$1;
(statearr_18848_18867[(2)] = inst_18822);

(statearr_18848_18867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18838 === (10))){
var inst_18830 = (state_18837[(2)]);
var state_18837__$1 = (function (){var statearr_18849 = state_18837;
(statearr_18849[(8)] = inst_18830);

return statearr_18849;
})();
var statearr_18850_18868 = state_18837__$1;
(statearr_18850_18868[(2)] = null);

(statearr_18850_18868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18838 === (8))){
var inst_18819 = (state_18837[(7)]);
var state_18837__$1 = state_18837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18837__$1,(11),out,inst_18819);
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
});})(c__6593__auto___18858,out))
;
return ((function (switch__6537__auto__,c__6593__auto___18858,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18854 = [null,null,null,null,null,null,null,null,null];
(statearr_18854[(0)] = state_machine__6538__auto__);

(statearr_18854[(1)] = (1));

return statearr_18854;
});
var state_machine__6538__auto____1 = (function (state_18837){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18855){if((e18855 instanceof Object)){
var ex__6541__auto__ = e18855;
var statearr_18856_18869 = state_18837;
(statearr_18856_18869[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18870 = state_18837;
state_18837 = G__18870;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18837){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18858,out))
})();
var state__6595__auto__ = (function (){var statearr_18857 = f__6594__auto__.call(null);
(statearr_18857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18858);

return statearr_18857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18858,out))
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
var c__6593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto__){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto__){
return (function (state_19036){
var state_val_19037 = (state_19036[(1)]);
if((state_val_19037 === (7))){
var inst_19032 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
var statearr_19038_19079 = state_19036__$1;
(statearr_19038_19079[(2)] = inst_19032);

(statearr_19038_19079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (20))){
var inst_19002 = (state_19036[(7)]);
var inst_19013 = (state_19036[(2)]);
var inst_19014 = cljs.core.next.call(null,inst_19002);
var inst_18988 = inst_19014;
var inst_18989 = null;
var inst_18990 = (0);
var inst_18991 = (0);
var state_19036__$1 = (function (){var statearr_19039 = state_19036;
(statearr_19039[(8)] = inst_18989);

(statearr_19039[(9)] = inst_18990);

(statearr_19039[(10)] = inst_18988);

(statearr_19039[(11)] = inst_18991);

(statearr_19039[(12)] = inst_19013);

return statearr_19039;
})();
var statearr_19040_19080 = state_19036__$1;
(statearr_19040_19080[(2)] = null);

(statearr_19040_19080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (1))){
var state_19036__$1 = state_19036;
var statearr_19041_19081 = state_19036__$1;
(statearr_19041_19081[(2)] = null);

(statearr_19041_19081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (4))){
var inst_18977 = (state_19036[(13)]);
var inst_18977__$1 = (state_19036[(2)]);
var inst_18978 = (inst_18977__$1 == null);
var state_19036__$1 = (function (){var statearr_19042 = state_19036;
(statearr_19042[(13)] = inst_18977__$1);

return statearr_19042;
})();
if(cljs.core.truth_(inst_18978)){
var statearr_19043_19082 = state_19036__$1;
(statearr_19043_19082[(1)] = (5));

} else {
var statearr_19044_19083 = state_19036__$1;
(statearr_19044_19083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (15))){
var state_19036__$1 = state_19036;
var statearr_19048_19084 = state_19036__$1;
(statearr_19048_19084[(2)] = null);

(statearr_19048_19084[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (21))){
var state_19036__$1 = state_19036;
var statearr_19049_19085 = state_19036__$1;
(statearr_19049_19085[(2)] = null);

(statearr_19049_19085[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (13))){
var inst_18989 = (state_19036[(8)]);
var inst_18990 = (state_19036[(9)]);
var inst_18988 = (state_19036[(10)]);
var inst_18991 = (state_19036[(11)]);
var inst_18998 = (state_19036[(2)]);
var inst_18999 = (inst_18991 + (1));
var tmp19045 = inst_18989;
var tmp19046 = inst_18990;
var tmp19047 = inst_18988;
var inst_18988__$1 = tmp19047;
var inst_18989__$1 = tmp19045;
var inst_18990__$1 = tmp19046;
var inst_18991__$1 = inst_18999;
var state_19036__$1 = (function (){var statearr_19050 = state_19036;
(statearr_19050[(8)] = inst_18989__$1);

(statearr_19050[(9)] = inst_18990__$1);

(statearr_19050[(10)] = inst_18988__$1);

(statearr_19050[(11)] = inst_18991__$1);

(statearr_19050[(14)] = inst_18998);

return statearr_19050;
})();
var statearr_19051_19086 = state_19036__$1;
(statearr_19051_19086[(2)] = null);

(statearr_19051_19086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (22))){
var state_19036__$1 = state_19036;
var statearr_19052_19087 = state_19036__$1;
(statearr_19052_19087[(2)] = null);

(statearr_19052_19087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (6))){
var inst_18977 = (state_19036[(13)]);
var inst_18986 = f.call(null,inst_18977);
var inst_18987 = cljs.core.seq.call(null,inst_18986);
var inst_18988 = inst_18987;
var inst_18989 = null;
var inst_18990 = (0);
var inst_18991 = (0);
var state_19036__$1 = (function (){var statearr_19053 = state_19036;
(statearr_19053[(8)] = inst_18989);

(statearr_19053[(9)] = inst_18990);

(statearr_19053[(10)] = inst_18988);

(statearr_19053[(11)] = inst_18991);

return statearr_19053;
})();
var statearr_19054_19088 = state_19036__$1;
(statearr_19054_19088[(2)] = null);

(statearr_19054_19088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (17))){
var inst_19002 = (state_19036[(7)]);
var inst_19006 = cljs.core.chunk_first.call(null,inst_19002);
var inst_19007 = cljs.core.chunk_rest.call(null,inst_19002);
var inst_19008 = cljs.core.count.call(null,inst_19006);
var inst_18988 = inst_19007;
var inst_18989 = inst_19006;
var inst_18990 = inst_19008;
var inst_18991 = (0);
var state_19036__$1 = (function (){var statearr_19055 = state_19036;
(statearr_19055[(8)] = inst_18989);

(statearr_19055[(9)] = inst_18990);

(statearr_19055[(10)] = inst_18988);

(statearr_19055[(11)] = inst_18991);

return statearr_19055;
})();
var statearr_19056_19089 = state_19036__$1;
(statearr_19056_19089[(2)] = null);

(statearr_19056_19089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (3))){
var inst_19034 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19036__$1,inst_19034);
} else {
if((state_val_19037 === (12))){
var inst_19022 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
var statearr_19057_19090 = state_19036__$1;
(statearr_19057_19090[(2)] = inst_19022);

(statearr_19057_19090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (2))){
var state_19036__$1 = state_19036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19036__$1,(4),in$);
} else {
if((state_val_19037 === (23))){
var inst_19030 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
var statearr_19058_19091 = state_19036__$1;
(statearr_19058_19091[(2)] = inst_19030);

(statearr_19058_19091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (19))){
var inst_19017 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
var statearr_19059_19092 = state_19036__$1;
(statearr_19059_19092[(2)] = inst_19017);

(statearr_19059_19092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (11))){
var inst_18988 = (state_19036[(10)]);
var inst_19002 = (state_19036[(7)]);
var inst_19002__$1 = cljs.core.seq.call(null,inst_18988);
var state_19036__$1 = (function (){var statearr_19060 = state_19036;
(statearr_19060[(7)] = inst_19002__$1);

return statearr_19060;
})();
if(inst_19002__$1){
var statearr_19061_19093 = state_19036__$1;
(statearr_19061_19093[(1)] = (14));

} else {
var statearr_19062_19094 = state_19036__$1;
(statearr_19062_19094[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (9))){
var inst_19024 = (state_19036[(2)]);
var inst_19025 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19036__$1 = (function (){var statearr_19063 = state_19036;
(statearr_19063[(15)] = inst_19024);

return statearr_19063;
})();
if(cljs.core.truth_(inst_19025)){
var statearr_19064_19095 = state_19036__$1;
(statearr_19064_19095[(1)] = (21));

} else {
var statearr_19065_19096 = state_19036__$1;
(statearr_19065_19096[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (5))){
var inst_18980 = cljs.core.async.close_BANG_.call(null,out);
var state_19036__$1 = state_19036;
var statearr_19066_19097 = state_19036__$1;
(statearr_19066_19097[(2)] = inst_18980);

(statearr_19066_19097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (14))){
var inst_19002 = (state_19036[(7)]);
var inst_19004 = cljs.core.chunked_seq_QMARK_.call(null,inst_19002);
var state_19036__$1 = state_19036;
if(inst_19004){
var statearr_19067_19098 = state_19036__$1;
(statearr_19067_19098[(1)] = (17));

} else {
var statearr_19068_19099 = state_19036__$1;
(statearr_19068_19099[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (16))){
var inst_19020 = (state_19036[(2)]);
var state_19036__$1 = state_19036;
var statearr_19069_19100 = state_19036__$1;
(statearr_19069_19100[(2)] = inst_19020);

(statearr_19069_19100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19037 === (10))){
var inst_18989 = (state_19036[(8)]);
var inst_18991 = (state_19036[(11)]);
var inst_18996 = cljs.core._nth.call(null,inst_18989,inst_18991);
var state_19036__$1 = state_19036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19036__$1,(13),out,inst_18996);
} else {
if((state_val_19037 === (18))){
var inst_19002 = (state_19036[(7)]);
var inst_19011 = cljs.core.first.call(null,inst_19002);
var state_19036__$1 = state_19036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19036__$1,(20),out,inst_19011);
} else {
if((state_val_19037 === (8))){
var inst_18990 = (state_19036[(9)]);
var inst_18991 = (state_19036[(11)]);
var inst_18993 = (inst_18991 < inst_18990);
var inst_18994 = inst_18993;
var state_19036__$1 = state_19036;
if(cljs.core.truth_(inst_18994)){
var statearr_19070_19101 = state_19036__$1;
(statearr_19070_19101[(1)] = (10));

} else {
var statearr_19071_19102 = state_19036__$1;
(statearr_19071_19102[(1)] = (11));

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
});})(c__6593__auto__))
;
return ((function (switch__6537__auto__,c__6593__auto__){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_19075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19075[(0)] = state_machine__6538__auto__);

(statearr_19075[(1)] = (1));

return statearr_19075;
});
var state_machine__6538__auto____1 = (function (state_19036){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_19036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e19076){if((e19076 instanceof Object)){
var ex__6541__auto__ = e19076;
var statearr_19077_19103 = state_19036;
(statearr_19077_19103[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19104 = state_19036;
state_19036 = G__19104;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_19036){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_19036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_19078 = f__6594__auto__.call(null);
(statearr_19078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_19078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto__))
);

return c__6593__auto__;
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
var c__6593__auto___19201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___19201,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___19201,out){
return (function (state_19176){
var state_val_19177 = (state_19176[(1)]);
if((state_val_19177 === (7))){
var inst_19171 = (state_19176[(2)]);
var state_19176__$1 = state_19176;
var statearr_19178_19202 = state_19176__$1;
(statearr_19178_19202[(2)] = inst_19171);

(statearr_19178_19202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19177 === (1))){
var inst_19153 = null;
var state_19176__$1 = (function (){var statearr_19179 = state_19176;
(statearr_19179[(7)] = inst_19153);

return statearr_19179;
})();
var statearr_19180_19203 = state_19176__$1;
(statearr_19180_19203[(2)] = null);

(statearr_19180_19203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19177 === (4))){
var inst_19156 = (state_19176[(8)]);
var inst_19156__$1 = (state_19176[(2)]);
var inst_19157 = (inst_19156__$1 == null);
var inst_19158 = cljs.core.not.call(null,inst_19157);
var state_19176__$1 = (function (){var statearr_19181 = state_19176;
(statearr_19181[(8)] = inst_19156__$1);

return statearr_19181;
})();
if(inst_19158){
var statearr_19182_19204 = state_19176__$1;
(statearr_19182_19204[(1)] = (5));

} else {
var statearr_19183_19205 = state_19176__$1;
(statearr_19183_19205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19177 === (6))){
var state_19176__$1 = state_19176;
var statearr_19184_19206 = state_19176__$1;
(statearr_19184_19206[(2)] = null);

(statearr_19184_19206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19177 === (3))){
var inst_19173 = (state_19176[(2)]);
var inst_19174 = cljs.core.async.close_BANG_.call(null,out);
var state_19176__$1 = (function (){var statearr_19185 = state_19176;
(statearr_19185[(9)] = inst_19173);

return statearr_19185;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19176__$1,inst_19174);
} else {
if((state_val_19177 === (2))){
var state_19176__$1 = state_19176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19176__$1,(4),ch);
} else {
if((state_val_19177 === (11))){
var inst_19156 = (state_19176[(8)]);
var inst_19165 = (state_19176[(2)]);
var inst_19153 = inst_19156;
var state_19176__$1 = (function (){var statearr_19186 = state_19176;
(statearr_19186[(7)] = inst_19153);

(statearr_19186[(10)] = inst_19165);

return statearr_19186;
})();
var statearr_19187_19207 = state_19176__$1;
(statearr_19187_19207[(2)] = null);

(statearr_19187_19207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19177 === (9))){
var inst_19156 = (state_19176[(8)]);
var state_19176__$1 = state_19176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19176__$1,(11),out,inst_19156);
} else {
if((state_val_19177 === (5))){
var inst_19153 = (state_19176[(7)]);
var inst_19156 = (state_19176[(8)]);
var inst_19160 = cljs.core._EQ_.call(null,inst_19156,inst_19153);
var state_19176__$1 = state_19176;
if(inst_19160){
var statearr_19189_19208 = state_19176__$1;
(statearr_19189_19208[(1)] = (8));

} else {
var statearr_19190_19209 = state_19176__$1;
(statearr_19190_19209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19177 === (10))){
var inst_19168 = (state_19176[(2)]);
var state_19176__$1 = state_19176;
var statearr_19191_19210 = state_19176__$1;
(statearr_19191_19210[(2)] = inst_19168);

(statearr_19191_19210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19177 === (8))){
var inst_19153 = (state_19176[(7)]);
var tmp19188 = inst_19153;
var inst_19153__$1 = tmp19188;
var state_19176__$1 = (function (){var statearr_19192 = state_19176;
(statearr_19192[(7)] = inst_19153__$1);

return statearr_19192;
})();
var statearr_19193_19211 = state_19176__$1;
(statearr_19193_19211[(2)] = null);

(statearr_19193_19211[(1)] = (2));


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
});})(c__6593__auto___19201,out))
;
return ((function (switch__6537__auto__,c__6593__auto___19201,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_19197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19197[(0)] = state_machine__6538__auto__);

(statearr_19197[(1)] = (1));

return statearr_19197;
});
var state_machine__6538__auto____1 = (function (state_19176){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_19176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e19198){if((e19198 instanceof Object)){
var ex__6541__auto__ = e19198;
var statearr_19199_19212 = state_19176;
(statearr_19199_19212[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19213 = state_19176;
state_19176 = G__19213;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_19176){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_19176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___19201,out))
})();
var state__6595__auto__ = (function (){var statearr_19200 = f__6594__auto__.call(null);
(statearr_19200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___19201);

return statearr_19200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___19201,out))
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
var c__6593__auto___19348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___19348,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___19348,out){
return (function (state_19318){
var state_val_19319 = (state_19318[(1)]);
if((state_val_19319 === (7))){
var inst_19314 = (state_19318[(2)]);
var state_19318__$1 = state_19318;
var statearr_19320_19349 = state_19318__$1;
(statearr_19320_19349[(2)] = inst_19314);

(statearr_19320_19349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (1))){
var inst_19281 = (new Array(n));
var inst_19282 = inst_19281;
var inst_19283 = (0);
var state_19318__$1 = (function (){var statearr_19321 = state_19318;
(statearr_19321[(7)] = inst_19282);

(statearr_19321[(8)] = inst_19283);

return statearr_19321;
})();
var statearr_19322_19350 = state_19318__$1;
(statearr_19322_19350[(2)] = null);

(statearr_19322_19350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (4))){
var inst_19286 = (state_19318[(9)]);
var inst_19286__$1 = (state_19318[(2)]);
var inst_19287 = (inst_19286__$1 == null);
var inst_19288 = cljs.core.not.call(null,inst_19287);
var state_19318__$1 = (function (){var statearr_19323 = state_19318;
(statearr_19323[(9)] = inst_19286__$1);

return statearr_19323;
})();
if(inst_19288){
var statearr_19324_19351 = state_19318__$1;
(statearr_19324_19351[(1)] = (5));

} else {
var statearr_19325_19352 = state_19318__$1;
(statearr_19325_19352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (15))){
var inst_19308 = (state_19318[(2)]);
var state_19318__$1 = state_19318;
var statearr_19326_19353 = state_19318__$1;
(statearr_19326_19353[(2)] = inst_19308);

(statearr_19326_19353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (13))){
var state_19318__$1 = state_19318;
var statearr_19327_19354 = state_19318__$1;
(statearr_19327_19354[(2)] = null);

(statearr_19327_19354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (6))){
var inst_19283 = (state_19318[(8)]);
var inst_19304 = (inst_19283 > (0));
var state_19318__$1 = state_19318;
if(cljs.core.truth_(inst_19304)){
var statearr_19328_19355 = state_19318__$1;
(statearr_19328_19355[(1)] = (12));

} else {
var statearr_19329_19356 = state_19318__$1;
(statearr_19329_19356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (3))){
var inst_19316 = (state_19318[(2)]);
var state_19318__$1 = state_19318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19318__$1,inst_19316);
} else {
if((state_val_19319 === (12))){
var inst_19282 = (state_19318[(7)]);
var inst_19306 = cljs.core.vec.call(null,inst_19282);
var state_19318__$1 = state_19318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19318__$1,(15),out,inst_19306);
} else {
if((state_val_19319 === (2))){
var state_19318__$1 = state_19318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19318__$1,(4),ch);
} else {
if((state_val_19319 === (11))){
var inst_19298 = (state_19318[(2)]);
var inst_19299 = (new Array(n));
var inst_19282 = inst_19299;
var inst_19283 = (0);
var state_19318__$1 = (function (){var statearr_19330 = state_19318;
(statearr_19330[(7)] = inst_19282);

(statearr_19330[(10)] = inst_19298);

(statearr_19330[(8)] = inst_19283);

return statearr_19330;
})();
var statearr_19331_19357 = state_19318__$1;
(statearr_19331_19357[(2)] = null);

(statearr_19331_19357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (9))){
var inst_19282 = (state_19318[(7)]);
var inst_19296 = cljs.core.vec.call(null,inst_19282);
var state_19318__$1 = state_19318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19318__$1,(11),out,inst_19296);
} else {
if((state_val_19319 === (5))){
var inst_19282 = (state_19318[(7)]);
var inst_19283 = (state_19318[(8)]);
var inst_19291 = (state_19318[(11)]);
var inst_19286 = (state_19318[(9)]);
var inst_19290 = (inst_19282[inst_19283] = inst_19286);
var inst_19291__$1 = (inst_19283 + (1));
var inst_19292 = (inst_19291__$1 < n);
var state_19318__$1 = (function (){var statearr_19332 = state_19318;
(statearr_19332[(12)] = inst_19290);

(statearr_19332[(11)] = inst_19291__$1);

return statearr_19332;
})();
if(cljs.core.truth_(inst_19292)){
var statearr_19333_19358 = state_19318__$1;
(statearr_19333_19358[(1)] = (8));

} else {
var statearr_19334_19359 = state_19318__$1;
(statearr_19334_19359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (14))){
var inst_19311 = (state_19318[(2)]);
var inst_19312 = cljs.core.async.close_BANG_.call(null,out);
var state_19318__$1 = (function (){var statearr_19336 = state_19318;
(statearr_19336[(13)] = inst_19311);

return statearr_19336;
})();
var statearr_19337_19360 = state_19318__$1;
(statearr_19337_19360[(2)] = inst_19312);

(statearr_19337_19360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (10))){
var inst_19302 = (state_19318[(2)]);
var state_19318__$1 = state_19318;
var statearr_19338_19361 = state_19318__$1;
(statearr_19338_19361[(2)] = inst_19302);

(statearr_19338_19361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19319 === (8))){
var inst_19282 = (state_19318[(7)]);
var inst_19291 = (state_19318[(11)]);
var tmp19335 = inst_19282;
var inst_19282__$1 = tmp19335;
var inst_19283 = inst_19291;
var state_19318__$1 = (function (){var statearr_19339 = state_19318;
(statearr_19339[(7)] = inst_19282__$1);

(statearr_19339[(8)] = inst_19283);

return statearr_19339;
})();
var statearr_19340_19362 = state_19318__$1;
(statearr_19340_19362[(2)] = null);

(statearr_19340_19362[(1)] = (2));


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
});})(c__6593__auto___19348,out))
;
return ((function (switch__6537__auto__,c__6593__auto___19348,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_19344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19344[(0)] = state_machine__6538__auto__);

(statearr_19344[(1)] = (1));

return statearr_19344;
});
var state_machine__6538__auto____1 = (function (state_19318){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_19318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e19345){if((e19345 instanceof Object)){
var ex__6541__auto__ = e19345;
var statearr_19346_19363 = state_19318;
(statearr_19346_19363[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19364 = state_19318;
state_19318 = G__19364;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_19318){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_19318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___19348,out))
})();
var state__6595__auto__ = (function (){var statearr_19347 = f__6594__auto__.call(null);
(statearr_19347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___19348);

return statearr_19347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___19348,out))
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
var c__6593__auto___19507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___19507,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___19507,out){
return (function (state_19477){
var state_val_19478 = (state_19477[(1)]);
if((state_val_19478 === (7))){
var inst_19473 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
var statearr_19479_19508 = state_19477__$1;
(statearr_19479_19508[(2)] = inst_19473);

(statearr_19479_19508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (1))){
var inst_19436 = [];
var inst_19437 = inst_19436;
var inst_19438 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19477__$1 = (function (){var statearr_19480 = state_19477;
(statearr_19480[(7)] = inst_19438);

(statearr_19480[(8)] = inst_19437);

return statearr_19480;
})();
var statearr_19481_19509 = state_19477__$1;
(statearr_19481_19509[(2)] = null);

(statearr_19481_19509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (4))){
var inst_19441 = (state_19477[(9)]);
var inst_19441__$1 = (state_19477[(2)]);
var inst_19442 = (inst_19441__$1 == null);
var inst_19443 = cljs.core.not.call(null,inst_19442);
var state_19477__$1 = (function (){var statearr_19482 = state_19477;
(statearr_19482[(9)] = inst_19441__$1);

return statearr_19482;
})();
if(inst_19443){
var statearr_19483_19510 = state_19477__$1;
(statearr_19483_19510[(1)] = (5));

} else {
var statearr_19484_19511 = state_19477__$1;
(statearr_19484_19511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (15))){
var inst_19467 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
var statearr_19485_19512 = state_19477__$1;
(statearr_19485_19512[(2)] = inst_19467);

(statearr_19485_19512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (13))){
var state_19477__$1 = state_19477;
var statearr_19486_19513 = state_19477__$1;
(statearr_19486_19513[(2)] = null);

(statearr_19486_19513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (6))){
var inst_19437 = (state_19477[(8)]);
var inst_19462 = inst_19437.length;
var inst_19463 = (inst_19462 > (0));
var state_19477__$1 = state_19477;
if(cljs.core.truth_(inst_19463)){
var statearr_19487_19514 = state_19477__$1;
(statearr_19487_19514[(1)] = (12));

} else {
var statearr_19488_19515 = state_19477__$1;
(statearr_19488_19515[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (3))){
var inst_19475 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19477__$1,inst_19475);
} else {
if((state_val_19478 === (12))){
var inst_19437 = (state_19477[(8)]);
var inst_19465 = cljs.core.vec.call(null,inst_19437);
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19477__$1,(15),out,inst_19465);
} else {
if((state_val_19478 === (2))){
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19477__$1,(4),ch);
} else {
if((state_val_19478 === (11))){
var inst_19441 = (state_19477[(9)]);
var inst_19445 = (state_19477[(10)]);
var inst_19455 = (state_19477[(2)]);
var inst_19456 = [];
var inst_19457 = inst_19456.push(inst_19441);
var inst_19437 = inst_19456;
var inst_19438 = inst_19445;
var state_19477__$1 = (function (){var statearr_19489 = state_19477;
(statearr_19489[(7)] = inst_19438);

(statearr_19489[(8)] = inst_19437);

(statearr_19489[(11)] = inst_19457);

(statearr_19489[(12)] = inst_19455);

return statearr_19489;
})();
var statearr_19490_19516 = state_19477__$1;
(statearr_19490_19516[(2)] = null);

(statearr_19490_19516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (9))){
var inst_19437 = (state_19477[(8)]);
var inst_19453 = cljs.core.vec.call(null,inst_19437);
var state_19477__$1 = state_19477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19477__$1,(11),out,inst_19453);
} else {
if((state_val_19478 === (5))){
var inst_19438 = (state_19477[(7)]);
var inst_19441 = (state_19477[(9)]);
var inst_19445 = (state_19477[(10)]);
var inst_19445__$1 = f.call(null,inst_19441);
var inst_19446 = cljs.core._EQ_.call(null,inst_19445__$1,inst_19438);
var inst_19447 = cljs.core.keyword_identical_QMARK_.call(null,inst_19438,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19448 = (inst_19446) || (inst_19447);
var state_19477__$1 = (function (){var statearr_19491 = state_19477;
(statearr_19491[(10)] = inst_19445__$1);

return statearr_19491;
})();
if(cljs.core.truth_(inst_19448)){
var statearr_19492_19517 = state_19477__$1;
(statearr_19492_19517[(1)] = (8));

} else {
var statearr_19493_19518 = state_19477__$1;
(statearr_19493_19518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (14))){
var inst_19470 = (state_19477[(2)]);
var inst_19471 = cljs.core.async.close_BANG_.call(null,out);
var state_19477__$1 = (function (){var statearr_19495 = state_19477;
(statearr_19495[(13)] = inst_19470);

return statearr_19495;
})();
var statearr_19496_19519 = state_19477__$1;
(statearr_19496_19519[(2)] = inst_19471);

(statearr_19496_19519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (10))){
var inst_19460 = (state_19477[(2)]);
var state_19477__$1 = state_19477;
var statearr_19497_19520 = state_19477__$1;
(statearr_19497_19520[(2)] = inst_19460);

(statearr_19497_19520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19478 === (8))){
var inst_19441 = (state_19477[(9)]);
var inst_19437 = (state_19477[(8)]);
var inst_19445 = (state_19477[(10)]);
var inst_19450 = inst_19437.push(inst_19441);
var tmp19494 = inst_19437;
var inst_19437__$1 = tmp19494;
var inst_19438 = inst_19445;
var state_19477__$1 = (function (){var statearr_19498 = state_19477;
(statearr_19498[(7)] = inst_19438);

(statearr_19498[(14)] = inst_19450);

(statearr_19498[(8)] = inst_19437__$1);

return statearr_19498;
})();
var statearr_19499_19521 = state_19477__$1;
(statearr_19499_19521[(2)] = null);

(statearr_19499_19521[(1)] = (2));


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
});})(c__6593__auto___19507,out))
;
return ((function (switch__6537__auto__,c__6593__auto___19507,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_19503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19503[(0)] = state_machine__6538__auto__);

(statearr_19503[(1)] = (1));

return statearr_19503;
});
var state_machine__6538__auto____1 = (function (state_19477){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_19477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e19504){if((e19504 instanceof Object)){
var ex__6541__auto__ = e19504;
var statearr_19505_19522 = state_19477;
(statearr_19505_19522[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19523 = state_19477;
state_19477 = G__19523;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_19477){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_19477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___19507,out))
})();
var state__6595__auto__ = (function (){var statearr_19506 = f__6594__auto__.call(null);
(statearr_19506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___19507);

return statearr_19506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___19507,out))
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

//# sourceMappingURL=async.js.map?rel=1435332573620