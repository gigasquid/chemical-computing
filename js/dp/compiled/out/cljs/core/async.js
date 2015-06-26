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
if(typeof cljs.core.async.t15756 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15756 = (function (f,fn_handler,meta15757){
this.f = f;
this.fn_handler = fn_handler;
this.meta15757 = meta15757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15756.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15758){
var self__ = this;
var _15758__$1 = this;
return self__.meta15757;
});

cljs.core.async.t15756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15758,meta15757__$1){
var self__ = this;
var _15758__$1 = this;
return (new cljs.core.async.t15756(self__.f,self__.fn_handler,meta15757__$1));
});

cljs.core.async.t15756.cljs$lang$type = true;

cljs.core.async.t15756.cljs$lang$ctorStr = "cljs.core.async/t15756";

cljs.core.async.t15756.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t15756");
});

cljs.core.async.__GT_t15756 = (function __GT_t15756(f__$1,fn_handler__$1,meta15757){
return (new cljs.core.async.t15756(f__$1,fn_handler__$1,meta15757));
});

}

return (new cljs.core.async.t15756(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15760 = buff;
if(G__15760){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__15760.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15760.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15760);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15760);
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
var val_15761 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15761);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15761,ret){
return (function (){
return fn1.call(null,val_15761);
});})(val_15761,ret))
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
var n__4702__auto___15762 = n;
var x_15763 = (0);
while(true){
if((x_15763 < n__4702__auto___15762)){
(a[x_15763] = (0));

var G__15764 = (x_15763 + (1));
x_15763 = G__15764;
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

var G__15765 = (i + (1));
i = G__15765;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15769 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15769 = (function (flag,alt_flag,meta15770){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15770 = meta15770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15769.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15771){
var self__ = this;
var _15771__$1 = this;
return self__.meta15770;
});})(flag))
;

cljs.core.async.t15769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15771,meta15770__$1){
var self__ = this;
var _15771__$1 = this;
return (new cljs.core.async.t15769(self__.flag,self__.alt_flag,meta15770__$1));
});})(flag))
;

cljs.core.async.t15769.cljs$lang$type = true;

cljs.core.async.t15769.cljs$lang$ctorStr = "cljs.core.async/t15769";

cljs.core.async.t15769.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t15769");
});})(flag))
;

cljs.core.async.__GT_t15769 = ((function (flag){
return (function __GT_t15769(flag__$1,alt_flag__$1,meta15770){
return (new cljs.core.async.t15769(flag__$1,alt_flag__$1,meta15770));
});})(flag))
;

}

return (new cljs.core.async.t15769(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t15775 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15775 = (function (cb,flag,alt_handler,meta15776){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15776 = meta15776;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15775.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15777){
var self__ = this;
var _15777__$1 = this;
return self__.meta15776;
});

cljs.core.async.t15775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15777,meta15776__$1){
var self__ = this;
var _15777__$1 = this;
return (new cljs.core.async.t15775(self__.cb,self__.flag,self__.alt_handler,meta15776__$1));
});

cljs.core.async.t15775.cljs$lang$type = true;

cljs.core.async.t15775.cljs$lang$ctorStr = "cljs.core.async/t15775";

cljs.core.async.t15775.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t15775");
});

cljs.core.async.__GT_t15775 = (function __GT_t15775(cb__$1,flag__$1,alt_handler__$1,meta15776){
return (new cljs.core.async.t15775(cb__$1,flag__$1,alt_handler__$1,meta15776));
});

}

return (new cljs.core.async.t15775(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15778_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15778_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15779_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15779_SHARP_,port], null));
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
var G__15780 = (i + (1));
i = G__15780;
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
var alts_BANG___delegate = function (ports,p__15781){
var map__15783 = p__15781;
var map__15783__$1 = ((cljs.core.seq_QMARK_.call(null,map__15783))?cljs.core.apply.call(null,cljs.core.hash_map,map__15783):map__15783);
var opts = map__15783__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__15781 = null;
if (arguments.length > 1) {
var G__15784__i = 0, G__15784__a = new Array(arguments.length -  1);
while (G__15784__i < G__15784__a.length) {G__15784__a[G__15784__i] = arguments[G__15784__i + 1]; ++G__15784__i;}
  p__15781 = new cljs.core.IndexedSeq(G__15784__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__15781);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15785){
var ports = cljs.core.first(arglist__15785);
var p__15781 = cljs.core.rest(arglist__15785);
return alts_BANG___delegate(ports,p__15781);
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
var c__6593__auto___15880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___15880){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___15880){
return (function (state_15856){
var state_val_15857 = (state_15856[(1)]);
if((state_val_15857 === (7))){
var inst_15852 = (state_15856[(2)]);
var state_15856__$1 = state_15856;
var statearr_15858_15881 = state_15856__$1;
(statearr_15858_15881[(2)] = inst_15852);

(statearr_15858_15881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (1))){
var state_15856__$1 = state_15856;
var statearr_15859_15882 = state_15856__$1;
(statearr_15859_15882[(2)] = null);

(statearr_15859_15882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (4))){
var inst_15835 = (state_15856[(7)]);
var inst_15835__$1 = (state_15856[(2)]);
var inst_15836 = (inst_15835__$1 == null);
var state_15856__$1 = (function (){var statearr_15860 = state_15856;
(statearr_15860[(7)] = inst_15835__$1);

return statearr_15860;
})();
if(cljs.core.truth_(inst_15836)){
var statearr_15861_15883 = state_15856__$1;
(statearr_15861_15883[(1)] = (5));

} else {
var statearr_15862_15884 = state_15856__$1;
(statearr_15862_15884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (13))){
var state_15856__$1 = state_15856;
var statearr_15863_15885 = state_15856__$1;
(statearr_15863_15885[(2)] = null);

(statearr_15863_15885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (6))){
var inst_15835 = (state_15856[(7)]);
var state_15856__$1 = state_15856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15856__$1,(11),to,inst_15835);
} else {
if((state_val_15857 === (3))){
var inst_15854 = (state_15856[(2)]);
var state_15856__$1 = state_15856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15856__$1,inst_15854);
} else {
if((state_val_15857 === (12))){
var state_15856__$1 = state_15856;
var statearr_15864_15886 = state_15856__$1;
(statearr_15864_15886[(2)] = null);

(statearr_15864_15886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (2))){
var state_15856__$1 = state_15856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15856__$1,(4),from);
} else {
if((state_val_15857 === (11))){
var inst_15845 = (state_15856[(2)]);
var state_15856__$1 = state_15856;
if(cljs.core.truth_(inst_15845)){
var statearr_15865_15887 = state_15856__$1;
(statearr_15865_15887[(1)] = (12));

} else {
var statearr_15866_15888 = state_15856__$1;
(statearr_15866_15888[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (9))){
var state_15856__$1 = state_15856;
var statearr_15867_15889 = state_15856__$1;
(statearr_15867_15889[(2)] = null);

(statearr_15867_15889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (5))){
var state_15856__$1 = state_15856;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15868_15890 = state_15856__$1;
(statearr_15868_15890[(1)] = (8));

} else {
var statearr_15869_15891 = state_15856__$1;
(statearr_15869_15891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (14))){
var inst_15850 = (state_15856[(2)]);
var state_15856__$1 = state_15856;
var statearr_15870_15892 = state_15856__$1;
(statearr_15870_15892[(2)] = inst_15850);

(statearr_15870_15892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (10))){
var inst_15842 = (state_15856[(2)]);
var state_15856__$1 = state_15856;
var statearr_15871_15893 = state_15856__$1;
(statearr_15871_15893[(2)] = inst_15842);

(statearr_15871_15893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15857 === (8))){
var inst_15839 = cljs.core.async.close_BANG_.call(null,to);
var state_15856__$1 = state_15856;
var statearr_15872_15894 = state_15856__$1;
(statearr_15872_15894[(2)] = inst_15839);

(statearr_15872_15894[(1)] = (10));


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
});})(c__6593__auto___15880))
;
return ((function (switch__6537__auto__,c__6593__auto___15880){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_15876 = [null,null,null,null,null,null,null,null];
(statearr_15876[(0)] = state_machine__6538__auto__);

(statearr_15876[(1)] = (1));

return statearr_15876;
});
var state_machine__6538__auto____1 = (function (state_15856){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_15856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e15877){if((e15877 instanceof Object)){
var ex__6541__auto__ = e15877;
var statearr_15878_15895 = state_15856;
(statearr_15878_15895[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15896 = state_15856;
state_15856 = G__15896;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_15856){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_15856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___15880))
})();
var state__6595__auto__ = (function (){var statearr_15879 = f__6594__auto__.call(null);
(statearr_15879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___15880);

return statearr_15879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___15880))
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
return (function (p__16080){
var vec__16081 = p__16080;
var v = cljs.core.nth.call(null,vec__16081,(0),null);
var p = cljs.core.nth.call(null,vec__16081,(1),null);
var job = vec__16081;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6593__auto___16263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___16263,res,vec__16081,v,p,job,jobs,results){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___16263,res,vec__16081,v,p,job,jobs,results){
return (function (state_16086){
var state_val_16087 = (state_16086[(1)]);
if((state_val_16087 === (2))){
var inst_16083 = (state_16086[(2)]);
var inst_16084 = cljs.core.async.close_BANG_.call(null,res);
var state_16086__$1 = (function (){var statearr_16088 = state_16086;
(statearr_16088[(7)] = inst_16083);

return statearr_16088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16086__$1,inst_16084);
} else {
if((state_val_16087 === (1))){
var state_16086__$1 = state_16086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16086__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6593__auto___16263,res,vec__16081,v,p,job,jobs,results))
;
return ((function (switch__6537__auto__,c__6593__auto___16263,res,vec__16081,v,p,job,jobs,results){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16092 = [null,null,null,null,null,null,null,null];
(statearr_16092[(0)] = state_machine__6538__auto__);

(statearr_16092[(1)] = (1));

return statearr_16092;
});
var state_machine__6538__auto____1 = (function (state_16086){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16093){if((e16093 instanceof Object)){
var ex__6541__auto__ = e16093;
var statearr_16094_16264 = state_16086;
(statearr_16094_16264[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16265 = state_16086;
state_16086 = G__16265;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16086){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___16263,res,vec__16081,v,p,job,jobs,results))
})();
var state__6595__auto__ = (function (){var statearr_16095 = f__6594__auto__.call(null);
(statearr_16095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16263);

return statearr_16095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___16263,res,vec__16081,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16096){
var vec__16097 = p__16096;
var v = cljs.core.nth.call(null,vec__16097,(0),null);
var p = cljs.core.nth.call(null,vec__16097,(1),null);
var job = vec__16097;
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
var n__4702__auto___16266 = n;
var __16267 = (0);
while(true){
if((__16267 < n__4702__auto___16266)){
var G__16098_16268 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16098_16268) {
case "async":
var c__6593__auto___16270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16267,c__6593__auto___16270,G__16098_16268,n__4702__auto___16266,jobs,results,process,async){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (__16267,c__6593__auto___16270,G__16098_16268,n__4702__auto___16266,jobs,results,process,async){
return (function (state_16111){
var state_val_16112 = (state_16111[(1)]);
if((state_val_16112 === (7))){
var inst_16107 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
var statearr_16113_16271 = state_16111__$1;
(statearr_16113_16271[(2)] = inst_16107);

(statearr_16113_16271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (6))){
var state_16111__$1 = state_16111;
var statearr_16114_16272 = state_16111__$1;
(statearr_16114_16272[(2)] = null);

(statearr_16114_16272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (5))){
var state_16111__$1 = state_16111;
var statearr_16115_16273 = state_16111__$1;
(statearr_16115_16273[(2)] = null);

(statearr_16115_16273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (4))){
var inst_16101 = (state_16111[(2)]);
var inst_16102 = async.call(null,inst_16101);
var state_16111__$1 = state_16111;
if(cljs.core.truth_(inst_16102)){
var statearr_16116_16274 = state_16111__$1;
(statearr_16116_16274[(1)] = (5));

} else {
var statearr_16117_16275 = state_16111__$1;
(statearr_16117_16275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16112 === (3))){
var inst_16109 = (state_16111[(2)]);
var state_16111__$1 = state_16111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16111__$1,inst_16109);
} else {
if((state_val_16112 === (2))){
var state_16111__$1 = state_16111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16111__$1,(4),jobs);
} else {
if((state_val_16112 === (1))){
var state_16111__$1 = state_16111;
var statearr_16118_16276 = state_16111__$1;
(statearr_16118_16276[(2)] = null);

(statearr_16118_16276[(1)] = (2));


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
});})(__16267,c__6593__auto___16270,G__16098_16268,n__4702__auto___16266,jobs,results,process,async))
;
return ((function (__16267,switch__6537__auto__,c__6593__auto___16270,G__16098_16268,n__4702__auto___16266,jobs,results,process,async){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16122 = [null,null,null,null,null,null,null];
(statearr_16122[(0)] = state_machine__6538__auto__);

(statearr_16122[(1)] = (1));

return statearr_16122;
});
var state_machine__6538__auto____1 = (function (state_16111){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16123){if((e16123 instanceof Object)){
var ex__6541__auto__ = e16123;
var statearr_16124_16277 = state_16111;
(statearr_16124_16277[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16278 = state_16111;
state_16111 = G__16278;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16111){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(__16267,switch__6537__auto__,c__6593__auto___16270,G__16098_16268,n__4702__auto___16266,jobs,results,process,async))
})();
var state__6595__auto__ = (function (){var statearr_16125 = f__6594__auto__.call(null);
(statearr_16125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16270);

return statearr_16125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(__16267,c__6593__auto___16270,G__16098_16268,n__4702__auto___16266,jobs,results,process,async))
);


break;
case "compute":
var c__6593__auto___16279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16267,c__6593__auto___16279,G__16098_16268,n__4702__auto___16266,jobs,results,process,async){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (__16267,c__6593__auto___16279,G__16098_16268,n__4702__auto___16266,jobs,results,process,async){
return (function (state_16138){
var state_val_16139 = (state_16138[(1)]);
if((state_val_16139 === (7))){
var inst_16134 = (state_16138[(2)]);
var state_16138__$1 = state_16138;
var statearr_16140_16280 = state_16138__$1;
(statearr_16140_16280[(2)] = inst_16134);

(statearr_16140_16280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (6))){
var state_16138__$1 = state_16138;
var statearr_16141_16281 = state_16138__$1;
(statearr_16141_16281[(2)] = null);

(statearr_16141_16281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (5))){
var state_16138__$1 = state_16138;
var statearr_16142_16282 = state_16138__$1;
(statearr_16142_16282[(2)] = null);

(statearr_16142_16282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (4))){
var inst_16128 = (state_16138[(2)]);
var inst_16129 = process.call(null,inst_16128);
var state_16138__$1 = state_16138;
if(cljs.core.truth_(inst_16129)){
var statearr_16143_16283 = state_16138__$1;
(statearr_16143_16283[(1)] = (5));

} else {
var statearr_16144_16284 = state_16138__$1;
(statearr_16144_16284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (3))){
var inst_16136 = (state_16138[(2)]);
var state_16138__$1 = state_16138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16138__$1,inst_16136);
} else {
if((state_val_16139 === (2))){
var state_16138__$1 = state_16138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16138__$1,(4),jobs);
} else {
if((state_val_16139 === (1))){
var state_16138__$1 = state_16138;
var statearr_16145_16285 = state_16138__$1;
(statearr_16145_16285[(2)] = null);

(statearr_16145_16285[(1)] = (2));


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
});})(__16267,c__6593__auto___16279,G__16098_16268,n__4702__auto___16266,jobs,results,process,async))
;
return ((function (__16267,switch__6537__auto__,c__6593__auto___16279,G__16098_16268,n__4702__auto___16266,jobs,results,process,async){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16149 = [null,null,null,null,null,null,null];
(statearr_16149[(0)] = state_machine__6538__auto__);

(statearr_16149[(1)] = (1));

return statearr_16149;
});
var state_machine__6538__auto____1 = (function (state_16138){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16150){if((e16150 instanceof Object)){
var ex__6541__auto__ = e16150;
var statearr_16151_16286 = state_16138;
(statearr_16151_16286[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16287 = state_16138;
state_16138 = G__16287;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16138){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(__16267,switch__6537__auto__,c__6593__auto___16279,G__16098_16268,n__4702__auto___16266,jobs,results,process,async))
})();
var state__6595__auto__ = (function (){var statearr_16152 = f__6594__auto__.call(null);
(statearr_16152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16279);

return statearr_16152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(__16267,c__6593__auto___16279,G__16098_16268,n__4702__auto___16266,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16288 = (__16267 + (1));
__16267 = G__16288;
continue;
} else {
}
break;
}

var c__6593__auto___16289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___16289,jobs,results,process,async){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___16289,jobs,results,process,async){
return (function (state_16174){
var state_val_16175 = (state_16174[(1)]);
if((state_val_16175 === (9))){
var inst_16167 = (state_16174[(2)]);
var state_16174__$1 = (function (){var statearr_16176 = state_16174;
(statearr_16176[(7)] = inst_16167);

return statearr_16176;
})();
var statearr_16177_16290 = state_16174__$1;
(statearr_16177_16290[(2)] = null);

(statearr_16177_16290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (8))){
var inst_16160 = (state_16174[(8)]);
var inst_16165 = (state_16174[(2)]);
var state_16174__$1 = (function (){var statearr_16178 = state_16174;
(statearr_16178[(9)] = inst_16165);

return statearr_16178;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16174__$1,(9),results,inst_16160);
} else {
if((state_val_16175 === (7))){
var inst_16170 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
var statearr_16179_16291 = state_16174__$1;
(statearr_16179_16291[(2)] = inst_16170);

(statearr_16179_16291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (6))){
var inst_16155 = (state_16174[(10)]);
var inst_16160 = (state_16174[(8)]);
var inst_16160__$1 = cljs.core.async.chan.call(null,(1));
var inst_16161 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16162 = [inst_16155,inst_16160__$1];
var inst_16163 = (new cljs.core.PersistentVector(null,2,(5),inst_16161,inst_16162,null));
var state_16174__$1 = (function (){var statearr_16180 = state_16174;
(statearr_16180[(8)] = inst_16160__$1);

return statearr_16180;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16174__$1,(8),jobs,inst_16163);
} else {
if((state_val_16175 === (5))){
var inst_16158 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16174__$1 = state_16174;
var statearr_16181_16292 = state_16174__$1;
(statearr_16181_16292[(2)] = inst_16158);

(statearr_16181_16292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (4))){
var inst_16155 = (state_16174[(10)]);
var inst_16155__$1 = (state_16174[(2)]);
var inst_16156 = (inst_16155__$1 == null);
var state_16174__$1 = (function (){var statearr_16182 = state_16174;
(statearr_16182[(10)] = inst_16155__$1);

return statearr_16182;
})();
if(cljs.core.truth_(inst_16156)){
var statearr_16183_16293 = state_16174__$1;
(statearr_16183_16293[(1)] = (5));

} else {
var statearr_16184_16294 = state_16174__$1;
(statearr_16184_16294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16175 === (3))){
var inst_16172 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16174__$1,inst_16172);
} else {
if((state_val_16175 === (2))){
var state_16174__$1 = state_16174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16174__$1,(4),from);
} else {
if((state_val_16175 === (1))){
var state_16174__$1 = state_16174;
var statearr_16185_16295 = state_16174__$1;
(statearr_16185_16295[(2)] = null);

(statearr_16185_16295[(1)] = (2));


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
});})(c__6593__auto___16289,jobs,results,process,async))
;
return ((function (switch__6537__auto__,c__6593__auto___16289,jobs,results,process,async){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16189 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16189[(0)] = state_machine__6538__auto__);

(statearr_16189[(1)] = (1));

return statearr_16189;
});
var state_machine__6538__auto____1 = (function (state_16174){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16190){if((e16190 instanceof Object)){
var ex__6541__auto__ = e16190;
var statearr_16191_16296 = state_16174;
(statearr_16191_16296[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16297 = state_16174;
state_16174 = G__16297;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16174){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___16289,jobs,results,process,async))
})();
var state__6595__auto__ = (function (){var statearr_16192 = f__6594__auto__.call(null);
(statearr_16192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16289);

return statearr_16192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___16289,jobs,results,process,async))
);


var c__6593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto__,jobs,results,process,async){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto__,jobs,results,process,async){
return (function (state_16230){
var state_val_16231 = (state_16230[(1)]);
if((state_val_16231 === (7))){
var inst_16226 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
var statearr_16232_16298 = state_16230__$1;
(statearr_16232_16298[(2)] = inst_16226);

(statearr_16232_16298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (20))){
var state_16230__$1 = state_16230;
var statearr_16233_16299 = state_16230__$1;
(statearr_16233_16299[(2)] = null);

(statearr_16233_16299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (1))){
var state_16230__$1 = state_16230;
var statearr_16234_16300 = state_16230__$1;
(statearr_16234_16300[(2)] = null);

(statearr_16234_16300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (4))){
var inst_16195 = (state_16230[(7)]);
var inst_16195__$1 = (state_16230[(2)]);
var inst_16196 = (inst_16195__$1 == null);
var state_16230__$1 = (function (){var statearr_16235 = state_16230;
(statearr_16235[(7)] = inst_16195__$1);

return statearr_16235;
})();
if(cljs.core.truth_(inst_16196)){
var statearr_16236_16301 = state_16230__$1;
(statearr_16236_16301[(1)] = (5));

} else {
var statearr_16237_16302 = state_16230__$1;
(statearr_16237_16302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (15))){
var inst_16208 = (state_16230[(8)]);
var state_16230__$1 = state_16230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16230__$1,(18),to,inst_16208);
} else {
if((state_val_16231 === (21))){
var inst_16221 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
var statearr_16238_16303 = state_16230__$1;
(statearr_16238_16303[(2)] = inst_16221);

(statearr_16238_16303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (13))){
var inst_16223 = (state_16230[(2)]);
var state_16230__$1 = (function (){var statearr_16239 = state_16230;
(statearr_16239[(9)] = inst_16223);

return statearr_16239;
})();
var statearr_16240_16304 = state_16230__$1;
(statearr_16240_16304[(2)] = null);

(statearr_16240_16304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (6))){
var inst_16195 = (state_16230[(7)]);
var state_16230__$1 = state_16230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16230__$1,(11),inst_16195);
} else {
if((state_val_16231 === (17))){
var inst_16216 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
if(cljs.core.truth_(inst_16216)){
var statearr_16241_16305 = state_16230__$1;
(statearr_16241_16305[(1)] = (19));

} else {
var statearr_16242_16306 = state_16230__$1;
(statearr_16242_16306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (3))){
var inst_16228 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16230__$1,inst_16228);
} else {
if((state_val_16231 === (12))){
var inst_16205 = (state_16230[(10)]);
var state_16230__$1 = state_16230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16230__$1,(14),inst_16205);
} else {
if((state_val_16231 === (2))){
var state_16230__$1 = state_16230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16230__$1,(4),results);
} else {
if((state_val_16231 === (19))){
var state_16230__$1 = state_16230;
var statearr_16243_16307 = state_16230__$1;
(statearr_16243_16307[(2)] = null);

(statearr_16243_16307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (11))){
var inst_16205 = (state_16230[(2)]);
var state_16230__$1 = (function (){var statearr_16244 = state_16230;
(statearr_16244[(10)] = inst_16205);

return statearr_16244;
})();
var statearr_16245_16308 = state_16230__$1;
(statearr_16245_16308[(2)] = null);

(statearr_16245_16308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (9))){
var state_16230__$1 = state_16230;
var statearr_16246_16309 = state_16230__$1;
(statearr_16246_16309[(2)] = null);

(statearr_16246_16309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (5))){
var state_16230__$1 = state_16230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16247_16310 = state_16230__$1;
(statearr_16247_16310[(1)] = (8));

} else {
var statearr_16248_16311 = state_16230__$1;
(statearr_16248_16311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (14))){
var inst_16208 = (state_16230[(8)]);
var inst_16210 = (state_16230[(11)]);
var inst_16208__$1 = (state_16230[(2)]);
var inst_16209 = (inst_16208__$1 == null);
var inst_16210__$1 = cljs.core.not.call(null,inst_16209);
var state_16230__$1 = (function (){var statearr_16249 = state_16230;
(statearr_16249[(8)] = inst_16208__$1);

(statearr_16249[(11)] = inst_16210__$1);

return statearr_16249;
})();
if(inst_16210__$1){
var statearr_16250_16312 = state_16230__$1;
(statearr_16250_16312[(1)] = (15));

} else {
var statearr_16251_16313 = state_16230__$1;
(statearr_16251_16313[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (16))){
var inst_16210 = (state_16230[(11)]);
var state_16230__$1 = state_16230;
var statearr_16252_16314 = state_16230__$1;
(statearr_16252_16314[(2)] = inst_16210);

(statearr_16252_16314[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (10))){
var inst_16202 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
var statearr_16253_16315 = state_16230__$1;
(statearr_16253_16315[(2)] = inst_16202);

(statearr_16253_16315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (18))){
var inst_16213 = (state_16230[(2)]);
var state_16230__$1 = state_16230;
var statearr_16254_16316 = state_16230__$1;
(statearr_16254_16316[(2)] = inst_16213);

(statearr_16254_16316[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16231 === (8))){
var inst_16199 = cljs.core.async.close_BANG_.call(null,to);
var state_16230__$1 = state_16230;
var statearr_16255_16317 = state_16230__$1;
(statearr_16255_16317[(2)] = inst_16199);

(statearr_16255_16317[(1)] = (10));


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
var statearr_16259 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16259[(0)] = state_machine__6538__auto__);

(statearr_16259[(1)] = (1));

return statearr_16259;
});
var state_machine__6538__auto____1 = (function (state_16230){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16260){if((e16260 instanceof Object)){
var ex__6541__auto__ = e16260;
var statearr_16261_16318 = state_16230;
(statearr_16261_16318[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16319 = state_16230;
state_16230 = G__16319;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16230){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__,jobs,results,process,async))
})();
var state__6595__auto__ = (function (){var statearr_16262 = f__6594__auto__.call(null);
(statearr_16262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_16262;
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
var c__6593__auto___16420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___16420,tc,fc){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___16420,tc,fc){
return (function (state_16395){
var state_val_16396 = (state_16395[(1)]);
if((state_val_16396 === (7))){
var inst_16391 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16397_16421 = state_16395__$1;
(statearr_16397_16421[(2)] = inst_16391);

(statearr_16397_16421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (1))){
var state_16395__$1 = state_16395;
var statearr_16398_16422 = state_16395__$1;
(statearr_16398_16422[(2)] = null);

(statearr_16398_16422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (4))){
var inst_16372 = (state_16395[(7)]);
var inst_16372__$1 = (state_16395[(2)]);
var inst_16373 = (inst_16372__$1 == null);
var state_16395__$1 = (function (){var statearr_16399 = state_16395;
(statearr_16399[(7)] = inst_16372__$1);

return statearr_16399;
})();
if(cljs.core.truth_(inst_16373)){
var statearr_16400_16423 = state_16395__$1;
(statearr_16400_16423[(1)] = (5));

} else {
var statearr_16401_16424 = state_16395__$1;
(statearr_16401_16424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (13))){
var state_16395__$1 = state_16395;
var statearr_16402_16425 = state_16395__$1;
(statearr_16402_16425[(2)] = null);

(statearr_16402_16425[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (6))){
var inst_16372 = (state_16395[(7)]);
var inst_16378 = p.call(null,inst_16372);
var state_16395__$1 = state_16395;
if(cljs.core.truth_(inst_16378)){
var statearr_16403_16426 = state_16395__$1;
(statearr_16403_16426[(1)] = (9));

} else {
var statearr_16404_16427 = state_16395__$1;
(statearr_16404_16427[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (3))){
var inst_16393 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16395__$1,inst_16393);
} else {
if((state_val_16396 === (12))){
var state_16395__$1 = state_16395;
var statearr_16405_16428 = state_16395__$1;
(statearr_16405_16428[(2)] = null);

(statearr_16405_16428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (2))){
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16395__$1,(4),ch);
} else {
if((state_val_16396 === (11))){
var inst_16372 = (state_16395[(7)]);
var inst_16382 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16395__$1,(8),inst_16382,inst_16372);
} else {
if((state_val_16396 === (9))){
var state_16395__$1 = state_16395;
var statearr_16406_16429 = state_16395__$1;
(statearr_16406_16429[(2)] = tc);

(statearr_16406_16429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (5))){
var inst_16375 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16376 = cljs.core.async.close_BANG_.call(null,fc);
var state_16395__$1 = (function (){var statearr_16407 = state_16395;
(statearr_16407[(8)] = inst_16375);

return statearr_16407;
})();
var statearr_16408_16430 = state_16395__$1;
(statearr_16408_16430[(2)] = inst_16376);

(statearr_16408_16430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (14))){
var inst_16389 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16409_16431 = state_16395__$1;
(statearr_16409_16431[(2)] = inst_16389);

(statearr_16409_16431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (10))){
var state_16395__$1 = state_16395;
var statearr_16410_16432 = state_16395__$1;
(statearr_16410_16432[(2)] = fc);

(statearr_16410_16432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16396 === (8))){
var inst_16384 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
if(cljs.core.truth_(inst_16384)){
var statearr_16411_16433 = state_16395__$1;
(statearr_16411_16433[(1)] = (12));

} else {
var statearr_16412_16434 = state_16395__$1;
(statearr_16412_16434[(1)] = (13));

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
});})(c__6593__auto___16420,tc,fc))
;
return ((function (switch__6537__auto__,c__6593__auto___16420,tc,fc){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_16416 = [null,null,null,null,null,null,null,null,null];
(statearr_16416[(0)] = state_machine__6538__auto__);

(statearr_16416[(1)] = (1));

return statearr_16416;
});
var state_machine__6538__auto____1 = (function (state_16395){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16417){if((e16417 instanceof Object)){
var ex__6541__auto__ = e16417;
var statearr_16418_16435 = state_16395;
(statearr_16418_16435[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16436 = state_16395;
state_16395 = G__16436;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16395){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___16420,tc,fc))
})();
var state__6595__auto__ = (function (){var statearr_16419 = f__6594__auto__.call(null);
(statearr_16419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___16420);

return statearr_16419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___16420,tc,fc))
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
return (function (state_16483){
var state_val_16484 = (state_16483[(1)]);
if((state_val_16484 === (7))){
var inst_16479 = (state_16483[(2)]);
var state_16483__$1 = state_16483;
var statearr_16485_16501 = state_16483__$1;
(statearr_16485_16501[(2)] = inst_16479);

(statearr_16485_16501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (6))){
var inst_16469 = (state_16483[(7)]);
var inst_16472 = (state_16483[(8)]);
var inst_16476 = f.call(null,inst_16469,inst_16472);
var inst_16469__$1 = inst_16476;
var state_16483__$1 = (function (){var statearr_16486 = state_16483;
(statearr_16486[(7)] = inst_16469__$1);

return statearr_16486;
})();
var statearr_16487_16502 = state_16483__$1;
(statearr_16487_16502[(2)] = null);

(statearr_16487_16502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (5))){
var inst_16469 = (state_16483[(7)]);
var state_16483__$1 = state_16483;
var statearr_16488_16503 = state_16483__$1;
(statearr_16488_16503[(2)] = inst_16469);

(statearr_16488_16503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (4))){
var inst_16472 = (state_16483[(8)]);
var inst_16472__$1 = (state_16483[(2)]);
var inst_16473 = (inst_16472__$1 == null);
var state_16483__$1 = (function (){var statearr_16489 = state_16483;
(statearr_16489[(8)] = inst_16472__$1);

return statearr_16489;
})();
if(cljs.core.truth_(inst_16473)){
var statearr_16490_16504 = state_16483__$1;
(statearr_16490_16504[(1)] = (5));

} else {
var statearr_16491_16505 = state_16483__$1;
(statearr_16491_16505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16484 === (3))){
var inst_16481 = (state_16483[(2)]);
var state_16483__$1 = state_16483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16483__$1,inst_16481);
} else {
if((state_val_16484 === (2))){
var state_16483__$1 = state_16483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16483__$1,(4),ch);
} else {
if((state_val_16484 === (1))){
var inst_16469 = init;
var state_16483__$1 = (function (){var statearr_16492 = state_16483;
(statearr_16492[(7)] = inst_16469);

return statearr_16492;
})();
var statearr_16493_16506 = state_16483__$1;
(statearr_16493_16506[(2)] = null);

(statearr_16493_16506[(1)] = (2));


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
var statearr_16497 = [null,null,null,null,null,null,null,null,null];
(statearr_16497[(0)] = state_machine__6538__auto__);

(statearr_16497[(1)] = (1));

return statearr_16497;
});
var state_machine__6538__auto____1 = (function (state_16483){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16498){if((e16498 instanceof Object)){
var ex__6541__auto__ = e16498;
var statearr_16499_16507 = state_16483;
(statearr_16499_16507[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16508 = state_16483;
state_16483 = G__16508;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16483){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_16500 = f__6594__auto__.call(null);
(statearr_16500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_16500;
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
return (function (state_16582){
var state_val_16583 = (state_16582[(1)]);
if((state_val_16583 === (7))){
var inst_16564 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
var statearr_16584_16607 = state_16582__$1;
(statearr_16584_16607[(2)] = inst_16564);

(statearr_16584_16607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (1))){
var inst_16558 = cljs.core.seq.call(null,coll);
var inst_16559 = inst_16558;
var state_16582__$1 = (function (){var statearr_16585 = state_16582;
(statearr_16585[(7)] = inst_16559);

return statearr_16585;
})();
var statearr_16586_16608 = state_16582__$1;
(statearr_16586_16608[(2)] = null);

(statearr_16586_16608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (4))){
var inst_16559 = (state_16582[(7)]);
var inst_16562 = cljs.core.first.call(null,inst_16559);
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16582__$1,(7),ch,inst_16562);
} else {
if((state_val_16583 === (13))){
var inst_16576 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
var statearr_16587_16609 = state_16582__$1;
(statearr_16587_16609[(2)] = inst_16576);

(statearr_16587_16609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (6))){
var inst_16567 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
if(cljs.core.truth_(inst_16567)){
var statearr_16588_16610 = state_16582__$1;
(statearr_16588_16610[(1)] = (8));

} else {
var statearr_16589_16611 = state_16582__$1;
(statearr_16589_16611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (3))){
var inst_16580 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16582__$1,inst_16580);
} else {
if((state_val_16583 === (12))){
var state_16582__$1 = state_16582;
var statearr_16590_16612 = state_16582__$1;
(statearr_16590_16612[(2)] = null);

(statearr_16590_16612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (2))){
var inst_16559 = (state_16582[(7)]);
var state_16582__$1 = state_16582;
if(cljs.core.truth_(inst_16559)){
var statearr_16591_16613 = state_16582__$1;
(statearr_16591_16613[(1)] = (4));

} else {
var statearr_16592_16614 = state_16582__$1;
(statearr_16592_16614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (11))){
var inst_16573 = cljs.core.async.close_BANG_.call(null,ch);
var state_16582__$1 = state_16582;
var statearr_16593_16615 = state_16582__$1;
(statearr_16593_16615[(2)] = inst_16573);

(statearr_16593_16615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (9))){
var state_16582__$1 = state_16582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16594_16616 = state_16582__$1;
(statearr_16594_16616[(1)] = (11));

} else {
var statearr_16595_16617 = state_16582__$1;
(statearr_16595_16617[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (5))){
var inst_16559 = (state_16582[(7)]);
var state_16582__$1 = state_16582;
var statearr_16596_16618 = state_16582__$1;
(statearr_16596_16618[(2)] = inst_16559);

(statearr_16596_16618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (10))){
var inst_16578 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
var statearr_16597_16619 = state_16582__$1;
(statearr_16597_16619[(2)] = inst_16578);

(statearr_16597_16619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (8))){
var inst_16559 = (state_16582[(7)]);
var inst_16569 = cljs.core.next.call(null,inst_16559);
var inst_16559__$1 = inst_16569;
var state_16582__$1 = (function (){var statearr_16598 = state_16582;
(statearr_16598[(7)] = inst_16559__$1);

return statearr_16598;
})();
var statearr_16599_16620 = state_16582__$1;
(statearr_16599_16620[(2)] = null);

(statearr_16599_16620[(1)] = (2));


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
var statearr_16603 = [null,null,null,null,null,null,null,null];
(statearr_16603[(0)] = state_machine__6538__auto__);

(statearr_16603[(1)] = (1));

return statearr_16603;
});
var state_machine__6538__auto____1 = (function (state_16582){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e16604){if((e16604 instanceof Object)){
var ex__6541__auto__ = e16604;
var statearr_16605_16621 = state_16582;
(statearr_16605_16621[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16622 = state_16582;
state_16582 = G__16622;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16582){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_16606 = f__6594__auto__.call(null);
(statearr_16606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_16606;
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

cljs.core.async.Mux = (function (){var obj16624 = {};
return obj16624;
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


cljs.core.async.Mult = (function (){var obj16626 = {};
return obj16626;
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
if(typeof cljs.core.async.t16848 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16848 = (function (cs,ch,mult,meta16849){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16849 = meta16849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16848.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16848.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16848.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16848.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16848.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16850){
var self__ = this;
var _16850__$1 = this;
return self__.meta16849;
});})(cs))
;

cljs.core.async.t16848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16850,meta16849__$1){
var self__ = this;
var _16850__$1 = this;
return (new cljs.core.async.t16848(self__.cs,self__.ch,self__.mult,meta16849__$1));
});})(cs))
;

cljs.core.async.t16848.cljs$lang$type = true;

cljs.core.async.t16848.cljs$lang$ctorStr = "cljs.core.async/t16848";

cljs.core.async.t16848.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t16848");
});})(cs))
;

cljs.core.async.__GT_t16848 = ((function (cs){
return (function __GT_t16848(cs__$1,ch__$1,mult__$1,meta16849){
return (new cljs.core.async.t16848(cs__$1,ch__$1,mult__$1,meta16849));
});})(cs))
;

}

return (new cljs.core.async.t16848(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6593__auto___17069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___17069,cs,m,dchan,dctr,done){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___17069,cs,m,dchan,dctr,done){
return (function (state_16981){
var state_val_16982 = (state_16981[(1)]);
if((state_val_16982 === (7))){
var inst_16977 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_16983_17070 = state_16981__$1;
(statearr_16983_17070[(2)] = inst_16977);

(statearr_16983_17070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (20))){
var inst_16882 = (state_16981[(7)]);
var inst_16892 = cljs.core.first.call(null,inst_16882);
var inst_16893 = cljs.core.nth.call(null,inst_16892,(0),null);
var inst_16894 = cljs.core.nth.call(null,inst_16892,(1),null);
var state_16981__$1 = (function (){var statearr_16984 = state_16981;
(statearr_16984[(8)] = inst_16893);

return statearr_16984;
})();
if(cljs.core.truth_(inst_16894)){
var statearr_16985_17071 = state_16981__$1;
(statearr_16985_17071[(1)] = (22));

} else {
var statearr_16986_17072 = state_16981__$1;
(statearr_16986_17072[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (27))){
var inst_16924 = (state_16981[(9)]);
var inst_16853 = (state_16981[(10)]);
var inst_16922 = (state_16981[(11)]);
var inst_16929 = (state_16981[(12)]);
var inst_16929__$1 = cljs.core._nth.call(null,inst_16922,inst_16924);
var inst_16930 = cljs.core.async.put_BANG_.call(null,inst_16929__$1,inst_16853,done);
var state_16981__$1 = (function (){var statearr_16987 = state_16981;
(statearr_16987[(12)] = inst_16929__$1);

return statearr_16987;
})();
if(cljs.core.truth_(inst_16930)){
var statearr_16988_17073 = state_16981__$1;
(statearr_16988_17073[(1)] = (30));

} else {
var statearr_16989_17074 = state_16981__$1;
(statearr_16989_17074[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (1))){
var state_16981__$1 = state_16981;
var statearr_16990_17075 = state_16981__$1;
(statearr_16990_17075[(2)] = null);

(statearr_16990_17075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (24))){
var inst_16882 = (state_16981[(7)]);
var inst_16899 = (state_16981[(2)]);
var inst_16900 = cljs.core.next.call(null,inst_16882);
var inst_16862 = inst_16900;
var inst_16863 = null;
var inst_16864 = (0);
var inst_16865 = (0);
var state_16981__$1 = (function (){var statearr_16991 = state_16981;
(statearr_16991[(13)] = inst_16862);

(statearr_16991[(14)] = inst_16865);

(statearr_16991[(15)] = inst_16863);

(statearr_16991[(16)] = inst_16864);

(statearr_16991[(17)] = inst_16899);

return statearr_16991;
})();
var statearr_16992_17076 = state_16981__$1;
(statearr_16992_17076[(2)] = null);

(statearr_16992_17076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (39))){
var state_16981__$1 = state_16981;
var statearr_16996_17077 = state_16981__$1;
(statearr_16996_17077[(2)] = null);

(statearr_16996_17077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (4))){
var inst_16853 = (state_16981[(10)]);
var inst_16853__$1 = (state_16981[(2)]);
var inst_16854 = (inst_16853__$1 == null);
var state_16981__$1 = (function (){var statearr_16997 = state_16981;
(statearr_16997[(10)] = inst_16853__$1);

return statearr_16997;
})();
if(cljs.core.truth_(inst_16854)){
var statearr_16998_17078 = state_16981__$1;
(statearr_16998_17078[(1)] = (5));

} else {
var statearr_16999_17079 = state_16981__$1;
(statearr_16999_17079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (15))){
var inst_16862 = (state_16981[(13)]);
var inst_16865 = (state_16981[(14)]);
var inst_16863 = (state_16981[(15)]);
var inst_16864 = (state_16981[(16)]);
var inst_16878 = (state_16981[(2)]);
var inst_16879 = (inst_16865 + (1));
var tmp16993 = inst_16862;
var tmp16994 = inst_16863;
var tmp16995 = inst_16864;
var inst_16862__$1 = tmp16993;
var inst_16863__$1 = tmp16994;
var inst_16864__$1 = tmp16995;
var inst_16865__$1 = inst_16879;
var state_16981__$1 = (function (){var statearr_17000 = state_16981;
(statearr_17000[(13)] = inst_16862__$1);

(statearr_17000[(14)] = inst_16865__$1);

(statearr_17000[(15)] = inst_16863__$1);

(statearr_17000[(18)] = inst_16878);

(statearr_17000[(16)] = inst_16864__$1);

return statearr_17000;
})();
var statearr_17001_17080 = state_16981__$1;
(statearr_17001_17080[(2)] = null);

(statearr_17001_17080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (21))){
var inst_16903 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_17005_17081 = state_16981__$1;
(statearr_17005_17081[(2)] = inst_16903);

(statearr_17005_17081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (31))){
var inst_16929 = (state_16981[(12)]);
var inst_16933 = done.call(null,null);
var inst_16934 = cljs.core.async.untap_STAR_.call(null,m,inst_16929);
var state_16981__$1 = (function (){var statearr_17006 = state_16981;
(statearr_17006[(19)] = inst_16933);

return statearr_17006;
})();
var statearr_17007_17082 = state_16981__$1;
(statearr_17007_17082[(2)] = inst_16934);

(statearr_17007_17082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (32))){
var inst_16924 = (state_16981[(9)]);
var inst_16923 = (state_16981[(20)]);
var inst_16921 = (state_16981[(21)]);
var inst_16922 = (state_16981[(11)]);
var inst_16936 = (state_16981[(2)]);
var inst_16937 = (inst_16924 + (1));
var tmp17002 = inst_16923;
var tmp17003 = inst_16921;
var tmp17004 = inst_16922;
var inst_16921__$1 = tmp17003;
var inst_16922__$1 = tmp17004;
var inst_16923__$1 = tmp17002;
var inst_16924__$1 = inst_16937;
var state_16981__$1 = (function (){var statearr_17008 = state_16981;
(statearr_17008[(9)] = inst_16924__$1);

(statearr_17008[(22)] = inst_16936);

(statearr_17008[(20)] = inst_16923__$1);

(statearr_17008[(21)] = inst_16921__$1);

(statearr_17008[(11)] = inst_16922__$1);

return statearr_17008;
})();
var statearr_17009_17083 = state_16981__$1;
(statearr_17009_17083[(2)] = null);

(statearr_17009_17083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (40))){
var inst_16949 = (state_16981[(23)]);
var inst_16953 = done.call(null,null);
var inst_16954 = cljs.core.async.untap_STAR_.call(null,m,inst_16949);
var state_16981__$1 = (function (){var statearr_17010 = state_16981;
(statearr_17010[(24)] = inst_16953);

return statearr_17010;
})();
var statearr_17011_17084 = state_16981__$1;
(statearr_17011_17084[(2)] = inst_16954);

(statearr_17011_17084[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (33))){
var inst_16940 = (state_16981[(25)]);
var inst_16942 = cljs.core.chunked_seq_QMARK_.call(null,inst_16940);
var state_16981__$1 = state_16981;
if(inst_16942){
var statearr_17012_17085 = state_16981__$1;
(statearr_17012_17085[(1)] = (36));

} else {
var statearr_17013_17086 = state_16981__$1;
(statearr_17013_17086[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (13))){
var inst_16872 = (state_16981[(26)]);
var inst_16875 = cljs.core.async.close_BANG_.call(null,inst_16872);
var state_16981__$1 = state_16981;
var statearr_17014_17087 = state_16981__$1;
(statearr_17014_17087[(2)] = inst_16875);

(statearr_17014_17087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (22))){
var inst_16893 = (state_16981[(8)]);
var inst_16896 = cljs.core.async.close_BANG_.call(null,inst_16893);
var state_16981__$1 = state_16981;
var statearr_17015_17088 = state_16981__$1;
(statearr_17015_17088[(2)] = inst_16896);

(statearr_17015_17088[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (36))){
var inst_16940 = (state_16981[(25)]);
var inst_16944 = cljs.core.chunk_first.call(null,inst_16940);
var inst_16945 = cljs.core.chunk_rest.call(null,inst_16940);
var inst_16946 = cljs.core.count.call(null,inst_16944);
var inst_16921 = inst_16945;
var inst_16922 = inst_16944;
var inst_16923 = inst_16946;
var inst_16924 = (0);
var state_16981__$1 = (function (){var statearr_17016 = state_16981;
(statearr_17016[(9)] = inst_16924);

(statearr_17016[(20)] = inst_16923);

(statearr_17016[(21)] = inst_16921);

(statearr_17016[(11)] = inst_16922);

return statearr_17016;
})();
var statearr_17017_17089 = state_16981__$1;
(statearr_17017_17089[(2)] = null);

(statearr_17017_17089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (41))){
var inst_16940 = (state_16981[(25)]);
var inst_16956 = (state_16981[(2)]);
var inst_16957 = cljs.core.next.call(null,inst_16940);
var inst_16921 = inst_16957;
var inst_16922 = null;
var inst_16923 = (0);
var inst_16924 = (0);
var state_16981__$1 = (function (){var statearr_17018 = state_16981;
(statearr_17018[(9)] = inst_16924);

(statearr_17018[(20)] = inst_16923);

(statearr_17018[(27)] = inst_16956);

(statearr_17018[(21)] = inst_16921);

(statearr_17018[(11)] = inst_16922);

return statearr_17018;
})();
var statearr_17019_17090 = state_16981__$1;
(statearr_17019_17090[(2)] = null);

(statearr_17019_17090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (43))){
var state_16981__$1 = state_16981;
var statearr_17020_17091 = state_16981__$1;
(statearr_17020_17091[(2)] = null);

(statearr_17020_17091[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (29))){
var inst_16965 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_17021_17092 = state_16981__$1;
(statearr_17021_17092[(2)] = inst_16965);

(statearr_17021_17092[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (44))){
var inst_16974 = (state_16981[(2)]);
var state_16981__$1 = (function (){var statearr_17022 = state_16981;
(statearr_17022[(28)] = inst_16974);

return statearr_17022;
})();
var statearr_17023_17093 = state_16981__$1;
(statearr_17023_17093[(2)] = null);

(statearr_17023_17093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (6))){
var inst_16913 = (state_16981[(29)]);
var inst_16912 = cljs.core.deref.call(null,cs);
var inst_16913__$1 = cljs.core.keys.call(null,inst_16912);
var inst_16914 = cljs.core.count.call(null,inst_16913__$1);
var inst_16915 = cljs.core.reset_BANG_.call(null,dctr,inst_16914);
var inst_16920 = cljs.core.seq.call(null,inst_16913__$1);
var inst_16921 = inst_16920;
var inst_16922 = null;
var inst_16923 = (0);
var inst_16924 = (0);
var state_16981__$1 = (function (){var statearr_17024 = state_16981;
(statearr_17024[(9)] = inst_16924);

(statearr_17024[(29)] = inst_16913__$1);

(statearr_17024[(20)] = inst_16923);

(statearr_17024[(21)] = inst_16921);

(statearr_17024[(11)] = inst_16922);

(statearr_17024[(30)] = inst_16915);

return statearr_17024;
})();
var statearr_17025_17094 = state_16981__$1;
(statearr_17025_17094[(2)] = null);

(statearr_17025_17094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (28))){
var inst_16940 = (state_16981[(25)]);
var inst_16921 = (state_16981[(21)]);
var inst_16940__$1 = cljs.core.seq.call(null,inst_16921);
var state_16981__$1 = (function (){var statearr_17026 = state_16981;
(statearr_17026[(25)] = inst_16940__$1);

return statearr_17026;
})();
if(inst_16940__$1){
var statearr_17027_17095 = state_16981__$1;
(statearr_17027_17095[(1)] = (33));

} else {
var statearr_17028_17096 = state_16981__$1;
(statearr_17028_17096[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (25))){
var inst_16924 = (state_16981[(9)]);
var inst_16923 = (state_16981[(20)]);
var inst_16926 = (inst_16924 < inst_16923);
var inst_16927 = inst_16926;
var state_16981__$1 = state_16981;
if(cljs.core.truth_(inst_16927)){
var statearr_17029_17097 = state_16981__$1;
(statearr_17029_17097[(1)] = (27));

} else {
var statearr_17030_17098 = state_16981__$1;
(statearr_17030_17098[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (34))){
var state_16981__$1 = state_16981;
var statearr_17031_17099 = state_16981__$1;
(statearr_17031_17099[(2)] = null);

(statearr_17031_17099[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (17))){
var state_16981__$1 = state_16981;
var statearr_17032_17100 = state_16981__$1;
(statearr_17032_17100[(2)] = null);

(statearr_17032_17100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (3))){
var inst_16979 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16981__$1,inst_16979);
} else {
if((state_val_16982 === (12))){
var inst_16908 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_17033_17101 = state_16981__$1;
(statearr_17033_17101[(2)] = inst_16908);

(statearr_17033_17101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (2))){
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16981__$1,(4),ch);
} else {
if((state_val_16982 === (23))){
var state_16981__$1 = state_16981;
var statearr_17034_17102 = state_16981__$1;
(statearr_17034_17102[(2)] = null);

(statearr_17034_17102[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (35))){
var inst_16963 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_17035_17103 = state_16981__$1;
(statearr_17035_17103[(2)] = inst_16963);

(statearr_17035_17103[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (19))){
var inst_16882 = (state_16981[(7)]);
var inst_16886 = cljs.core.chunk_first.call(null,inst_16882);
var inst_16887 = cljs.core.chunk_rest.call(null,inst_16882);
var inst_16888 = cljs.core.count.call(null,inst_16886);
var inst_16862 = inst_16887;
var inst_16863 = inst_16886;
var inst_16864 = inst_16888;
var inst_16865 = (0);
var state_16981__$1 = (function (){var statearr_17036 = state_16981;
(statearr_17036[(13)] = inst_16862);

(statearr_17036[(14)] = inst_16865);

(statearr_17036[(15)] = inst_16863);

(statearr_17036[(16)] = inst_16864);

return statearr_17036;
})();
var statearr_17037_17104 = state_16981__$1;
(statearr_17037_17104[(2)] = null);

(statearr_17037_17104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (11))){
var inst_16862 = (state_16981[(13)]);
var inst_16882 = (state_16981[(7)]);
var inst_16882__$1 = cljs.core.seq.call(null,inst_16862);
var state_16981__$1 = (function (){var statearr_17038 = state_16981;
(statearr_17038[(7)] = inst_16882__$1);

return statearr_17038;
})();
if(inst_16882__$1){
var statearr_17039_17105 = state_16981__$1;
(statearr_17039_17105[(1)] = (16));

} else {
var statearr_17040_17106 = state_16981__$1;
(statearr_17040_17106[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (9))){
var inst_16910 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_17041_17107 = state_16981__$1;
(statearr_17041_17107[(2)] = inst_16910);

(statearr_17041_17107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (5))){
var inst_16860 = cljs.core.deref.call(null,cs);
var inst_16861 = cljs.core.seq.call(null,inst_16860);
var inst_16862 = inst_16861;
var inst_16863 = null;
var inst_16864 = (0);
var inst_16865 = (0);
var state_16981__$1 = (function (){var statearr_17042 = state_16981;
(statearr_17042[(13)] = inst_16862);

(statearr_17042[(14)] = inst_16865);

(statearr_17042[(15)] = inst_16863);

(statearr_17042[(16)] = inst_16864);

return statearr_17042;
})();
var statearr_17043_17108 = state_16981__$1;
(statearr_17043_17108[(2)] = null);

(statearr_17043_17108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (14))){
var state_16981__$1 = state_16981;
var statearr_17044_17109 = state_16981__$1;
(statearr_17044_17109[(2)] = null);

(statearr_17044_17109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (45))){
var inst_16971 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_17045_17110 = state_16981__$1;
(statearr_17045_17110[(2)] = inst_16971);

(statearr_17045_17110[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (26))){
var inst_16913 = (state_16981[(29)]);
var inst_16967 = (state_16981[(2)]);
var inst_16968 = cljs.core.seq.call(null,inst_16913);
var state_16981__$1 = (function (){var statearr_17046 = state_16981;
(statearr_17046[(31)] = inst_16967);

return statearr_17046;
})();
if(inst_16968){
var statearr_17047_17111 = state_16981__$1;
(statearr_17047_17111[(1)] = (42));

} else {
var statearr_17048_17112 = state_16981__$1;
(statearr_17048_17112[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (16))){
var inst_16882 = (state_16981[(7)]);
var inst_16884 = cljs.core.chunked_seq_QMARK_.call(null,inst_16882);
var state_16981__$1 = state_16981;
if(inst_16884){
var statearr_17049_17113 = state_16981__$1;
(statearr_17049_17113[(1)] = (19));

} else {
var statearr_17050_17114 = state_16981__$1;
(statearr_17050_17114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (38))){
var inst_16960 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_17051_17115 = state_16981__$1;
(statearr_17051_17115[(2)] = inst_16960);

(statearr_17051_17115[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (30))){
var state_16981__$1 = state_16981;
var statearr_17052_17116 = state_16981__$1;
(statearr_17052_17116[(2)] = null);

(statearr_17052_17116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (10))){
var inst_16865 = (state_16981[(14)]);
var inst_16863 = (state_16981[(15)]);
var inst_16871 = cljs.core._nth.call(null,inst_16863,inst_16865);
var inst_16872 = cljs.core.nth.call(null,inst_16871,(0),null);
var inst_16873 = cljs.core.nth.call(null,inst_16871,(1),null);
var state_16981__$1 = (function (){var statearr_17053 = state_16981;
(statearr_17053[(26)] = inst_16872);

return statearr_17053;
})();
if(cljs.core.truth_(inst_16873)){
var statearr_17054_17117 = state_16981__$1;
(statearr_17054_17117[(1)] = (13));

} else {
var statearr_17055_17118 = state_16981__$1;
(statearr_17055_17118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (18))){
var inst_16906 = (state_16981[(2)]);
var state_16981__$1 = state_16981;
var statearr_17056_17119 = state_16981__$1;
(statearr_17056_17119[(2)] = inst_16906);

(statearr_17056_17119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (42))){
var state_16981__$1 = state_16981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16981__$1,(45),dchan);
} else {
if((state_val_16982 === (37))){
var inst_16853 = (state_16981[(10)]);
var inst_16940 = (state_16981[(25)]);
var inst_16949 = (state_16981[(23)]);
var inst_16949__$1 = cljs.core.first.call(null,inst_16940);
var inst_16950 = cljs.core.async.put_BANG_.call(null,inst_16949__$1,inst_16853,done);
var state_16981__$1 = (function (){var statearr_17057 = state_16981;
(statearr_17057[(23)] = inst_16949__$1);

return statearr_17057;
})();
if(cljs.core.truth_(inst_16950)){
var statearr_17058_17120 = state_16981__$1;
(statearr_17058_17120[(1)] = (39));

} else {
var statearr_17059_17121 = state_16981__$1;
(statearr_17059_17121[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16982 === (8))){
var inst_16865 = (state_16981[(14)]);
var inst_16864 = (state_16981[(16)]);
var inst_16867 = (inst_16865 < inst_16864);
var inst_16868 = inst_16867;
var state_16981__$1 = state_16981;
if(cljs.core.truth_(inst_16868)){
var statearr_17060_17122 = state_16981__$1;
(statearr_17060_17122[(1)] = (10));

} else {
var statearr_17061_17123 = state_16981__$1;
(statearr_17061_17123[(1)] = (11));

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
});})(c__6593__auto___17069,cs,m,dchan,dctr,done))
;
return ((function (switch__6537__auto__,c__6593__auto___17069,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_17065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17065[(0)] = state_machine__6538__auto__);

(statearr_17065[(1)] = (1));

return statearr_17065;
});
var state_machine__6538__auto____1 = (function (state_16981){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_16981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e17066){if((e17066 instanceof Object)){
var ex__6541__auto__ = e17066;
var statearr_17067_17124 = state_16981;
(statearr_17067_17124[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17125 = state_16981;
state_16981 = G__17125;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_16981){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_16981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___17069,cs,m,dchan,dctr,done))
})();
var state__6595__auto__ = (function (){var statearr_17068 = f__6594__auto__.call(null);
(statearr_17068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___17069);

return statearr_17068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___17069,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj17127 = {};
return obj17127;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17128){
var map__17133 = p__17128;
var map__17133__$1 = ((cljs.core.seq_QMARK_.call(null,map__17133))?cljs.core.apply.call(null,cljs.core.hash_map,map__17133):map__17133);
var opts = map__17133__$1;
var statearr_17134_17137 = state;
(statearr_17134_17137[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__17133,map__17133__$1,opts){
return (function (val){
var statearr_17135_17138 = state;
(statearr_17135_17138[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17133,map__17133__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_17136_17139 = state;
(statearr_17136_17139[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17128 = null;
if (arguments.length > 3) {
var G__17140__i = 0, G__17140__a = new Array(arguments.length -  3);
while (G__17140__i < G__17140__a.length) {G__17140__a[G__17140__i] = arguments[G__17140__i + 3]; ++G__17140__i;}
  p__17128 = new cljs.core.IndexedSeq(G__17140__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17128);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17141){
var state = cljs.core.first(arglist__17141);
arglist__17141 = cljs.core.next(arglist__17141);
var cont_block = cljs.core.first(arglist__17141);
arglist__17141 = cljs.core.next(arglist__17141);
var ports = cljs.core.first(arglist__17141);
var p__17128 = cljs.core.rest(arglist__17141);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17128);
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
if(typeof cljs.core.async.t17261 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17261 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17262){
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
this.meta17262 = meta17262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17261.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17261.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17261.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17261.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17261.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17261.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t17261.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17263){
var self__ = this;
var _17263__$1 = this;
return self__.meta17262;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17263,meta17262__$1){
var self__ = this;
var _17263__$1 = this;
return (new cljs.core.async.t17261(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17262__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17261.cljs$lang$type = true;

cljs.core.async.t17261.cljs$lang$ctorStr = "cljs.core.async/t17261";

cljs.core.async.t17261.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t17261");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17261 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17261(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17262){
return (new cljs.core.async.t17261(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17262));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17261(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6593__auto___17380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___17380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___17380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17333){
var state_val_17334 = (state_17333[(1)]);
if((state_val_17334 === (7))){
var inst_17277 = (state_17333[(7)]);
var inst_17282 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17277);
var state_17333__$1 = state_17333;
var statearr_17335_17381 = state_17333__$1;
(statearr_17335_17381[(2)] = inst_17282);

(statearr_17335_17381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (20))){
var inst_17292 = (state_17333[(8)]);
var state_17333__$1 = state_17333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17333__$1,(23),out,inst_17292);
} else {
if((state_val_17334 === (1))){
var inst_17267 = (state_17333[(9)]);
var inst_17267__$1 = calc_state.call(null);
var inst_17268 = cljs.core.seq_QMARK_.call(null,inst_17267__$1);
var state_17333__$1 = (function (){var statearr_17336 = state_17333;
(statearr_17336[(9)] = inst_17267__$1);

return statearr_17336;
})();
if(inst_17268){
var statearr_17337_17382 = state_17333__$1;
(statearr_17337_17382[(1)] = (2));

} else {
var statearr_17338_17383 = state_17333__$1;
(statearr_17338_17383[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (24))){
var inst_17285 = (state_17333[(10)]);
var inst_17277 = inst_17285;
var state_17333__$1 = (function (){var statearr_17339 = state_17333;
(statearr_17339[(7)] = inst_17277);

return statearr_17339;
})();
var statearr_17340_17384 = state_17333__$1;
(statearr_17340_17384[(2)] = null);

(statearr_17340_17384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (4))){
var inst_17267 = (state_17333[(9)]);
var inst_17273 = (state_17333[(2)]);
var inst_17274 = cljs.core.get.call(null,inst_17273,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17275 = cljs.core.get.call(null,inst_17273,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17276 = cljs.core.get.call(null,inst_17273,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17277 = inst_17267;
var state_17333__$1 = (function (){var statearr_17341 = state_17333;
(statearr_17341[(7)] = inst_17277);

(statearr_17341[(11)] = inst_17274);

(statearr_17341[(12)] = inst_17276);

(statearr_17341[(13)] = inst_17275);

return statearr_17341;
})();
var statearr_17342_17385 = state_17333__$1;
(statearr_17342_17385[(2)] = null);

(statearr_17342_17385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (15))){
var state_17333__$1 = state_17333;
var statearr_17343_17386 = state_17333__$1;
(statearr_17343_17386[(2)] = null);

(statearr_17343_17386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (21))){
var inst_17285 = (state_17333[(10)]);
var inst_17277 = inst_17285;
var state_17333__$1 = (function (){var statearr_17344 = state_17333;
(statearr_17344[(7)] = inst_17277);

return statearr_17344;
})();
var statearr_17345_17387 = state_17333__$1;
(statearr_17345_17387[(2)] = null);

(statearr_17345_17387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (13))){
var inst_17329 = (state_17333[(2)]);
var state_17333__$1 = state_17333;
var statearr_17346_17388 = state_17333__$1;
(statearr_17346_17388[(2)] = inst_17329);

(statearr_17346_17388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (22))){
var inst_17327 = (state_17333[(2)]);
var state_17333__$1 = state_17333;
var statearr_17347_17389 = state_17333__$1;
(statearr_17347_17389[(2)] = inst_17327);

(statearr_17347_17389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (6))){
var inst_17331 = (state_17333[(2)]);
var state_17333__$1 = state_17333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17333__$1,inst_17331);
} else {
if((state_val_17334 === (25))){
var state_17333__$1 = state_17333;
var statearr_17348_17390 = state_17333__$1;
(statearr_17348_17390[(2)] = null);

(statearr_17348_17390[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (17))){
var inst_17307 = (state_17333[(14)]);
var state_17333__$1 = state_17333;
var statearr_17349_17391 = state_17333__$1;
(statearr_17349_17391[(2)] = inst_17307);

(statearr_17349_17391[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (3))){
var inst_17267 = (state_17333[(9)]);
var state_17333__$1 = state_17333;
var statearr_17350_17392 = state_17333__$1;
(statearr_17350_17392[(2)] = inst_17267);

(statearr_17350_17392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (12))){
var inst_17293 = (state_17333[(15)]);
var inst_17288 = (state_17333[(16)]);
var inst_17307 = (state_17333[(14)]);
var inst_17307__$1 = inst_17288.call(null,inst_17293);
var state_17333__$1 = (function (){var statearr_17351 = state_17333;
(statearr_17351[(14)] = inst_17307__$1);

return statearr_17351;
})();
if(cljs.core.truth_(inst_17307__$1)){
var statearr_17352_17393 = state_17333__$1;
(statearr_17352_17393[(1)] = (17));

} else {
var statearr_17353_17394 = state_17333__$1;
(statearr_17353_17394[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (2))){
var inst_17267 = (state_17333[(9)]);
var inst_17270 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17267);
var state_17333__$1 = state_17333;
var statearr_17354_17395 = state_17333__$1;
(statearr_17354_17395[(2)] = inst_17270);

(statearr_17354_17395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (23))){
var inst_17318 = (state_17333[(2)]);
var state_17333__$1 = state_17333;
if(cljs.core.truth_(inst_17318)){
var statearr_17355_17396 = state_17333__$1;
(statearr_17355_17396[(1)] = (24));

} else {
var statearr_17356_17397 = state_17333__$1;
(statearr_17356_17397[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (19))){
var inst_17315 = (state_17333[(2)]);
var state_17333__$1 = state_17333;
if(cljs.core.truth_(inst_17315)){
var statearr_17357_17398 = state_17333__$1;
(statearr_17357_17398[(1)] = (20));

} else {
var statearr_17358_17399 = state_17333__$1;
(statearr_17358_17399[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (11))){
var inst_17292 = (state_17333[(8)]);
var inst_17298 = (inst_17292 == null);
var state_17333__$1 = state_17333;
if(cljs.core.truth_(inst_17298)){
var statearr_17359_17400 = state_17333__$1;
(statearr_17359_17400[(1)] = (14));

} else {
var statearr_17360_17401 = state_17333__$1;
(statearr_17360_17401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (9))){
var inst_17285 = (state_17333[(10)]);
var inst_17285__$1 = (state_17333[(2)]);
var inst_17286 = cljs.core.get.call(null,inst_17285__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17287 = cljs.core.get.call(null,inst_17285__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17288 = cljs.core.get.call(null,inst_17285__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_17333__$1 = (function (){var statearr_17361 = state_17333;
(statearr_17361[(10)] = inst_17285__$1);

(statearr_17361[(16)] = inst_17288);

(statearr_17361[(17)] = inst_17287);

return statearr_17361;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17333__$1,(10),inst_17286);
} else {
if((state_val_17334 === (5))){
var inst_17277 = (state_17333[(7)]);
var inst_17280 = cljs.core.seq_QMARK_.call(null,inst_17277);
var state_17333__$1 = state_17333;
if(inst_17280){
var statearr_17362_17402 = state_17333__$1;
(statearr_17362_17402[(1)] = (7));

} else {
var statearr_17363_17403 = state_17333__$1;
(statearr_17363_17403[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (14))){
var inst_17293 = (state_17333[(15)]);
var inst_17300 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17293);
var state_17333__$1 = state_17333;
var statearr_17364_17404 = state_17333__$1;
(statearr_17364_17404[(2)] = inst_17300);

(statearr_17364_17404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (26))){
var inst_17323 = (state_17333[(2)]);
var state_17333__$1 = state_17333;
var statearr_17365_17405 = state_17333__$1;
(statearr_17365_17405[(2)] = inst_17323);

(statearr_17365_17405[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (16))){
var inst_17303 = (state_17333[(2)]);
var inst_17304 = calc_state.call(null);
var inst_17277 = inst_17304;
var state_17333__$1 = (function (){var statearr_17366 = state_17333;
(statearr_17366[(7)] = inst_17277);

(statearr_17366[(18)] = inst_17303);

return statearr_17366;
})();
var statearr_17367_17406 = state_17333__$1;
(statearr_17367_17406[(2)] = null);

(statearr_17367_17406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (10))){
var inst_17293 = (state_17333[(15)]);
var inst_17292 = (state_17333[(8)]);
var inst_17291 = (state_17333[(2)]);
var inst_17292__$1 = cljs.core.nth.call(null,inst_17291,(0),null);
var inst_17293__$1 = cljs.core.nth.call(null,inst_17291,(1),null);
var inst_17294 = (inst_17292__$1 == null);
var inst_17295 = cljs.core._EQ_.call(null,inst_17293__$1,change);
var inst_17296 = (inst_17294) || (inst_17295);
var state_17333__$1 = (function (){var statearr_17368 = state_17333;
(statearr_17368[(15)] = inst_17293__$1);

(statearr_17368[(8)] = inst_17292__$1);

return statearr_17368;
})();
if(cljs.core.truth_(inst_17296)){
var statearr_17369_17407 = state_17333__$1;
(statearr_17369_17407[(1)] = (11));

} else {
var statearr_17370_17408 = state_17333__$1;
(statearr_17370_17408[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (18))){
var inst_17293 = (state_17333[(15)]);
var inst_17288 = (state_17333[(16)]);
var inst_17287 = (state_17333[(17)]);
var inst_17310 = cljs.core.empty_QMARK_.call(null,inst_17288);
var inst_17311 = inst_17287.call(null,inst_17293);
var inst_17312 = cljs.core.not.call(null,inst_17311);
var inst_17313 = (inst_17310) && (inst_17312);
var state_17333__$1 = state_17333;
var statearr_17371_17409 = state_17333__$1;
(statearr_17371_17409[(2)] = inst_17313);

(statearr_17371_17409[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (8))){
var inst_17277 = (state_17333[(7)]);
var state_17333__$1 = state_17333;
var statearr_17372_17410 = state_17333__$1;
(statearr_17372_17410[(2)] = inst_17277);

(statearr_17372_17410[(1)] = (9));


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
});})(c__6593__auto___17380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6537__auto__,c__6593__auto___17380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_17376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17376[(0)] = state_machine__6538__auto__);

(statearr_17376[(1)] = (1));

return statearr_17376;
});
var state_machine__6538__auto____1 = (function (state_17333){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_17333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e17377){if((e17377 instanceof Object)){
var ex__6541__auto__ = e17377;
var statearr_17378_17411 = state_17333;
(statearr_17378_17411[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17412 = state_17333;
state_17333 = G__17412;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_17333){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_17333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___17380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6595__auto__ = (function (){var statearr_17379 = f__6594__auto__.call(null);
(statearr_17379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___17380);

return statearr_17379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___17380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj17414 = {};
return obj17414;
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
return (function (p1__17415_SHARP_){
if(cljs.core.truth_(p1__17415_SHARP_.call(null,topic))){
return p1__17415_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17415_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3815__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t17538 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17538 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17539){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17539 = meta17539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17538.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t17538.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t17538.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t17538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t17538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t17538.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t17538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17540){
var self__ = this;
var _17540__$1 = this;
return self__.meta17539;
});})(mults,ensure_mult))
;

cljs.core.async.t17538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17540,meta17539__$1){
var self__ = this;
var _17540__$1 = this;
return (new cljs.core.async.t17538(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17539__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t17538.cljs$lang$type = true;

cljs.core.async.t17538.cljs$lang$ctorStr = "cljs.core.async/t17538";

cljs.core.async.t17538.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t17538");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t17538 = ((function (mults,ensure_mult){
return (function __GT_t17538(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17539){
return (new cljs.core.async.t17538(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17539));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t17538(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6593__auto___17660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___17660,mults,ensure_mult,p){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___17660,mults,ensure_mult,p){
return (function (state_17612){
var state_val_17613 = (state_17612[(1)]);
if((state_val_17613 === (7))){
var inst_17608 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17614_17661 = state_17612__$1;
(statearr_17614_17661[(2)] = inst_17608);

(statearr_17614_17661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (20))){
var state_17612__$1 = state_17612;
var statearr_17615_17662 = state_17612__$1;
(statearr_17615_17662[(2)] = null);

(statearr_17615_17662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (1))){
var state_17612__$1 = state_17612;
var statearr_17616_17663 = state_17612__$1;
(statearr_17616_17663[(2)] = null);

(statearr_17616_17663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (24))){
var inst_17591 = (state_17612[(7)]);
var inst_17600 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17591);
var state_17612__$1 = state_17612;
var statearr_17617_17664 = state_17612__$1;
(statearr_17617_17664[(2)] = inst_17600);

(statearr_17617_17664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (4))){
var inst_17543 = (state_17612[(8)]);
var inst_17543__$1 = (state_17612[(2)]);
var inst_17544 = (inst_17543__$1 == null);
var state_17612__$1 = (function (){var statearr_17618 = state_17612;
(statearr_17618[(8)] = inst_17543__$1);

return statearr_17618;
})();
if(cljs.core.truth_(inst_17544)){
var statearr_17619_17665 = state_17612__$1;
(statearr_17619_17665[(1)] = (5));

} else {
var statearr_17620_17666 = state_17612__$1;
(statearr_17620_17666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (15))){
var inst_17585 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17621_17667 = state_17612__$1;
(statearr_17621_17667[(2)] = inst_17585);

(statearr_17621_17667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (21))){
var inst_17605 = (state_17612[(2)]);
var state_17612__$1 = (function (){var statearr_17622 = state_17612;
(statearr_17622[(9)] = inst_17605);

return statearr_17622;
})();
var statearr_17623_17668 = state_17612__$1;
(statearr_17623_17668[(2)] = null);

(statearr_17623_17668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (13))){
var inst_17567 = (state_17612[(10)]);
var inst_17569 = cljs.core.chunked_seq_QMARK_.call(null,inst_17567);
var state_17612__$1 = state_17612;
if(inst_17569){
var statearr_17624_17669 = state_17612__$1;
(statearr_17624_17669[(1)] = (16));

} else {
var statearr_17625_17670 = state_17612__$1;
(statearr_17625_17670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (22))){
var inst_17597 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
if(cljs.core.truth_(inst_17597)){
var statearr_17626_17671 = state_17612__$1;
(statearr_17626_17671[(1)] = (23));

} else {
var statearr_17627_17672 = state_17612__$1;
(statearr_17627_17672[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (6))){
var inst_17593 = (state_17612[(11)]);
var inst_17543 = (state_17612[(8)]);
var inst_17591 = (state_17612[(7)]);
var inst_17591__$1 = topic_fn.call(null,inst_17543);
var inst_17592 = cljs.core.deref.call(null,mults);
var inst_17593__$1 = cljs.core.get.call(null,inst_17592,inst_17591__$1);
var state_17612__$1 = (function (){var statearr_17628 = state_17612;
(statearr_17628[(11)] = inst_17593__$1);

(statearr_17628[(7)] = inst_17591__$1);

return statearr_17628;
})();
if(cljs.core.truth_(inst_17593__$1)){
var statearr_17629_17673 = state_17612__$1;
(statearr_17629_17673[(1)] = (19));

} else {
var statearr_17630_17674 = state_17612__$1;
(statearr_17630_17674[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (25))){
var inst_17602 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17631_17675 = state_17612__$1;
(statearr_17631_17675[(2)] = inst_17602);

(statearr_17631_17675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (17))){
var inst_17567 = (state_17612[(10)]);
var inst_17576 = cljs.core.first.call(null,inst_17567);
var inst_17577 = cljs.core.async.muxch_STAR_.call(null,inst_17576);
var inst_17578 = cljs.core.async.close_BANG_.call(null,inst_17577);
var inst_17579 = cljs.core.next.call(null,inst_17567);
var inst_17553 = inst_17579;
var inst_17554 = null;
var inst_17555 = (0);
var inst_17556 = (0);
var state_17612__$1 = (function (){var statearr_17632 = state_17612;
(statearr_17632[(12)] = inst_17554);

(statearr_17632[(13)] = inst_17555);

(statearr_17632[(14)] = inst_17553);

(statearr_17632[(15)] = inst_17578);

(statearr_17632[(16)] = inst_17556);

return statearr_17632;
})();
var statearr_17633_17676 = state_17612__$1;
(statearr_17633_17676[(2)] = null);

(statearr_17633_17676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (3))){
var inst_17610 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17612__$1,inst_17610);
} else {
if((state_val_17613 === (12))){
var inst_17587 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17634_17677 = state_17612__$1;
(statearr_17634_17677[(2)] = inst_17587);

(statearr_17634_17677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (2))){
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17612__$1,(4),ch);
} else {
if((state_val_17613 === (23))){
var state_17612__$1 = state_17612;
var statearr_17635_17678 = state_17612__$1;
(statearr_17635_17678[(2)] = null);

(statearr_17635_17678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (19))){
var inst_17593 = (state_17612[(11)]);
var inst_17543 = (state_17612[(8)]);
var inst_17595 = cljs.core.async.muxch_STAR_.call(null,inst_17593);
var state_17612__$1 = state_17612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17612__$1,(22),inst_17595,inst_17543);
} else {
if((state_val_17613 === (11))){
var inst_17567 = (state_17612[(10)]);
var inst_17553 = (state_17612[(14)]);
var inst_17567__$1 = cljs.core.seq.call(null,inst_17553);
var state_17612__$1 = (function (){var statearr_17636 = state_17612;
(statearr_17636[(10)] = inst_17567__$1);

return statearr_17636;
})();
if(inst_17567__$1){
var statearr_17637_17679 = state_17612__$1;
(statearr_17637_17679[(1)] = (13));

} else {
var statearr_17638_17680 = state_17612__$1;
(statearr_17638_17680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (9))){
var inst_17589 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17639_17681 = state_17612__$1;
(statearr_17639_17681[(2)] = inst_17589);

(statearr_17639_17681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (5))){
var inst_17550 = cljs.core.deref.call(null,mults);
var inst_17551 = cljs.core.vals.call(null,inst_17550);
var inst_17552 = cljs.core.seq.call(null,inst_17551);
var inst_17553 = inst_17552;
var inst_17554 = null;
var inst_17555 = (0);
var inst_17556 = (0);
var state_17612__$1 = (function (){var statearr_17640 = state_17612;
(statearr_17640[(12)] = inst_17554);

(statearr_17640[(13)] = inst_17555);

(statearr_17640[(14)] = inst_17553);

(statearr_17640[(16)] = inst_17556);

return statearr_17640;
})();
var statearr_17641_17682 = state_17612__$1;
(statearr_17641_17682[(2)] = null);

(statearr_17641_17682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (14))){
var state_17612__$1 = state_17612;
var statearr_17645_17683 = state_17612__$1;
(statearr_17645_17683[(2)] = null);

(statearr_17645_17683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (16))){
var inst_17567 = (state_17612[(10)]);
var inst_17571 = cljs.core.chunk_first.call(null,inst_17567);
var inst_17572 = cljs.core.chunk_rest.call(null,inst_17567);
var inst_17573 = cljs.core.count.call(null,inst_17571);
var inst_17553 = inst_17572;
var inst_17554 = inst_17571;
var inst_17555 = inst_17573;
var inst_17556 = (0);
var state_17612__$1 = (function (){var statearr_17646 = state_17612;
(statearr_17646[(12)] = inst_17554);

(statearr_17646[(13)] = inst_17555);

(statearr_17646[(14)] = inst_17553);

(statearr_17646[(16)] = inst_17556);

return statearr_17646;
})();
var statearr_17647_17684 = state_17612__$1;
(statearr_17647_17684[(2)] = null);

(statearr_17647_17684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (10))){
var inst_17554 = (state_17612[(12)]);
var inst_17555 = (state_17612[(13)]);
var inst_17553 = (state_17612[(14)]);
var inst_17556 = (state_17612[(16)]);
var inst_17561 = cljs.core._nth.call(null,inst_17554,inst_17556);
var inst_17562 = cljs.core.async.muxch_STAR_.call(null,inst_17561);
var inst_17563 = cljs.core.async.close_BANG_.call(null,inst_17562);
var inst_17564 = (inst_17556 + (1));
var tmp17642 = inst_17554;
var tmp17643 = inst_17555;
var tmp17644 = inst_17553;
var inst_17553__$1 = tmp17644;
var inst_17554__$1 = tmp17642;
var inst_17555__$1 = tmp17643;
var inst_17556__$1 = inst_17564;
var state_17612__$1 = (function (){var statearr_17648 = state_17612;
(statearr_17648[(17)] = inst_17563);

(statearr_17648[(12)] = inst_17554__$1);

(statearr_17648[(13)] = inst_17555__$1);

(statearr_17648[(14)] = inst_17553__$1);

(statearr_17648[(16)] = inst_17556__$1);

return statearr_17648;
})();
var statearr_17649_17685 = state_17612__$1;
(statearr_17649_17685[(2)] = null);

(statearr_17649_17685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (18))){
var inst_17582 = (state_17612[(2)]);
var state_17612__$1 = state_17612;
var statearr_17650_17686 = state_17612__$1;
(statearr_17650_17686[(2)] = inst_17582);

(statearr_17650_17686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17613 === (8))){
var inst_17555 = (state_17612[(13)]);
var inst_17556 = (state_17612[(16)]);
var inst_17558 = (inst_17556 < inst_17555);
var inst_17559 = inst_17558;
var state_17612__$1 = state_17612;
if(cljs.core.truth_(inst_17559)){
var statearr_17651_17687 = state_17612__$1;
(statearr_17651_17687[(1)] = (10));

} else {
var statearr_17652_17688 = state_17612__$1;
(statearr_17652_17688[(1)] = (11));

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
});})(c__6593__auto___17660,mults,ensure_mult,p))
;
return ((function (switch__6537__auto__,c__6593__auto___17660,mults,ensure_mult,p){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_17656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17656[(0)] = state_machine__6538__auto__);

(statearr_17656[(1)] = (1));

return statearr_17656;
});
var state_machine__6538__auto____1 = (function (state_17612){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_17612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e17657){if((e17657 instanceof Object)){
var ex__6541__auto__ = e17657;
var statearr_17658_17689 = state_17612;
(statearr_17658_17689[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17690 = state_17612;
state_17612 = G__17690;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_17612){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_17612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___17660,mults,ensure_mult,p))
})();
var state__6595__auto__ = (function (){var statearr_17659 = f__6594__auto__.call(null);
(statearr_17659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___17660);

return statearr_17659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___17660,mults,ensure_mult,p))
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
var c__6593__auto___17827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___17827,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___17827,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17797){
var state_val_17798 = (state_17797[(1)]);
if((state_val_17798 === (7))){
var state_17797__$1 = state_17797;
var statearr_17799_17828 = state_17797__$1;
(statearr_17799_17828[(2)] = null);

(statearr_17799_17828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (1))){
var state_17797__$1 = state_17797;
var statearr_17800_17829 = state_17797__$1;
(statearr_17800_17829[(2)] = null);

(statearr_17800_17829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (4))){
var inst_17761 = (state_17797[(7)]);
var inst_17763 = (inst_17761 < cnt);
var state_17797__$1 = state_17797;
if(cljs.core.truth_(inst_17763)){
var statearr_17801_17830 = state_17797__$1;
(statearr_17801_17830[(1)] = (6));

} else {
var statearr_17802_17831 = state_17797__$1;
(statearr_17802_17831[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (15))){
var inst_17793 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17803_17832 = state_17797__$1;
(statearr_17803_17832[(2)] = inst_17793);

(statearr_17803_17832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (13))){
var inst_17786 = cljs.core.async.close_BANG_.call(null,out);
var state_17797__$1 = state_17797;
var statearr_17804_17833 = state_17797__$1;
(statearr_17804_17833[(2)] = inst_17786);

(statearr_17804_17833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (6))){
var state_17797__$1 = state_17797;
var statearr_17805_17834 = state_17797__$1;
(statearr_17805_17834[(2)] = null);

(statearr_17805_17834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (3))){
var inst_17795 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17797__$1,inst_17795);
} else {
if((state_val_17798 === (12))){
var inst_17783 = (state_17797[(8)]);
var inst_17783__$1 = (state_17797[(2)]);
var inst_17784 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17783__$1);
var state_17797__$1 = (function (){var statearr_17806 = state_17797;
(statearr_17806[(8)] = inst_17783__$1);

return statearr_17806;
})();
if(cljs.core.truth_(inst_17784)){
var statearr_17807_17835 = state_17797__$1;
(statearr_17807_17835[(1)] = (13));

} else {
var statearr_17808_17836 = state_17797__$1;
(statearr_17808_17836[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (2))){
var inst_17760 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17761 = (0);
var state_17797__$1 = (function (){var statearr_17809 = state_17797;
(statearr_17809[(7)] = inst_17761);

(statearr_17809[(9)] = inst_17760);

return statearr_17809;
})();
var statearr_17810_17837 = state_17797__$1;
(statearr_17810_17837[(2)] = null);

(statearr_17810_17837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (11))){
var inst_17761 = (state_17797[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17797,(10),Object,null,(9));
var inst_17770 = chs__$1.call(null,inst_17761);
var inst_17771 = done.call(null,inst_17761);
var inst_17772 = cljs.core.async.take_BANG_.call(null,inst_17770,inst_17771);
var state_17797__$1 = state_17797;
var statearr_17811_17838 = state_17797__$1;
(statearr_17811_17838[(2)] = inst_17772);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (9))){
var inst_17761 = (state_17797[(7)]);
var inst_17774 = (state_17797[(2)]);
var inst_17775 = (inst_17761 + (1));
var inst_17761__$1 = inst_17775;
var state_17797__$1 = (function (){var statearr_17812 = state_17797;
(statearr_17812[(7)] = inst_17761__$1);

(statearr_17812[(10)] = inst_17774);

return statearr_17812;
})();
var statearr_17813_17839 = state_17797__$1;
(statearr_17813_17839[(2)] = null);

(statearr_17813_17839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (5))){
var inst_17781 = (state_17797[(2)]);
var state_17797__$1 = (function (){var statearr_17814 = state_17797;
(statearr_17814[(11)] = inst_17781);

return statearr_17814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17797__$1,(12),dchan);
} else {
if((state_val_17798 === (14))){
var inst_17783 = (state_17797[(8)]);
var inst_17788 = cljs.core.apply.call(null,f,inst_17783);
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17797__$1,(16),out,inst_17788);
} else {
if((state_val_17798 === (16))){
var inst_17790 = (state_17797[(2)]);
var state_17797__$1 = (function (){var statearr_17815 = state_17797;
(statearr_17815[(12)] = inst_17790);

return statearr_17815;
})();
var statearr_17816_17840 = state_17797__$1;
(statearr_17816_17840[(2)] = null);

(statearr_17816_17840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (10))){
var inst_17765 = (state_17797[(2)]);
var inst_17766 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17797__$1 = (function (){var statearr_17817 = state_17797;
(statearr_17817[(13)] = inst_17765);

return statearr_17817;
})();
var statearr_17818_17841 = state_17797__$1;
(statearr_17818_17841[(2)] = inst_17766);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17798 === (8))){
var inst_17779 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17819_17842 = state_17797__$1;
(statearr_17819_17842[(2)] = inst_17779);

(statearr_17819_17842[(1)] = (5));


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
});})(c__6593__auto___17827,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6537__auto__,c__6593__auto___17827,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_17823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17823[(0)] = state_machine__6538__auto__);

(statearr_17823[(1)] = (1));

return statearr_17823;
});
var state_machine__6538__auto____1 = (function (state_17797){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_17797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e17824){if((e17824 instanceof Object)){
var ex__6541__auto__ = e17824;
var statearr_17825_17843 = state_17797;
(statearr_17825_17843[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17844 = state_17797;
state_17797 = G__17844;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_17797){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_17797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___17827,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6595__auto__ = (function (){var statearr_17826 = f__6594__auto__.call(null);
(statearr_17826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___17827);

return statearr_17826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___17827,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6593__auto___17952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___17952,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___17952,out){
return (function (state_17928){
var state_val_17929 = (state_17928[(1)]);
if((state_val_17929 === (7))){
var inst_17908 = (state_17928[(7)]);
var inst_17907 = (state_17928[(8)]);
var inst_17907__$1 = (state_17928[(2)]);
var inst_17908__$1 = cljs.core.nth.call(null,inst_17907__$1,(0),null);
var inst_17909 = cljs.core.nth.call(null,inst_17907__$1,(1),null);
var inst_17910 = (inst_17908__$1 == null);
var state_17928__$1 = (function (){var statearr_17930 = state_17928;
(statearr_17930[(7)] = inst_17908__$1);

(statearr_17930[(8)] = inst_17907__$1);

(statearr_17930[(9)] = inst_17909);

return statearr_17930;
})();
if(cljs.core.truth_(inst_17910)){
var statearr_17931_17953 = state_17928__$1;
(statearr_17931_17953[(1)] = (8));

} else {
var statearr_17932_17954 = state_17928__$1;
(statearr_17932_17954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (1))){
var inst_17899 = cljs.core.vec.call(null,chs);
var inst_17900 = inst_17899;
var state_17928__$1 = (function (){var statearr_17933 = state_17928;
(statearr_17933[(10)] = inst_17900);

return statearr_17933;
})();
var statearr_17934_17955 = state_17928__$1;
(statearr_17934_17955[(2)] = null);

(statearr_17934_17955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (4))){
var inst_17900 = (state_17928[(10)]);
var state_17928__$1 = state_17928;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17928__$1,(7),inst_17900);
} else {
if((state_val_17929 === (6))){
var inst_17924 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
var statearr_17935_17956 = state_17928__$1;
(statearr_17935_17956[(2)] = inst_17924);

(statearr_17935_17956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (3))){
var inst_17926 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17928__$1,inst_17926);
} else {
if((state_val_17929 === (2))){
var inst_17900 = (state_17928[(10)]);
var inst_17902 = cljs.core.count.call(null,inst_17900);
var inst_17903 = (inst_17902 > (0));
var state_17928__$1 = state_17928;
if(cljs.core.truth_(inst_17903)){
var statearr_17937_17957 = state_17928__$1;
(statearr_17937_17957[(1)] = (4));

} else {
var statearr_17938_17958 = state_17928__$1;
(statearr_17938_17958[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (11))){
var inst_17900 = (state_17928[(10)]);
var inst_17917 = (state_17928[(2)]);
var tmp17936 = inst_17900;
var inst_17900__$1 = tmp17936;
var state_17928__$1 = (function (){var statearr_17939 = state_17928;
(statearr_17939[(10)] = inst_17900__$1);

(statearr_17939[(11)] = inst_17917);

return statearr_17939;
})();
var statearr_17940_17959 = state_17928__$1;
(statearr_17940_17959[(2)] = null);

(statearr_17940_17959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (9))){
var inst_17908 = (state_17928[(7)]);
var state_17928__$1 = state_17928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17928__$1,(11),out,inst_17908);
} else {
if((state_val_17929 === (5))){
var inst_17922 = cljs.core.async.close_BANG_.call(null,out);
var state_17928__$1 = state_17928;
var statearr_17941_17960 = state_17928__$1;
(statearr_17941_17960[(2)] = inst_17922);

(statearr_17941_17960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (10))){
var inst_17920 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
var statearr_17942_17961 = state_17928__$1;
(statearr_17942_17961[(2)] = inst_17920);

(statearr_17942_17961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17929 === (8))){
var inst_17908 = (state_17928[(7)]);
var inst_17900 = (state_17928[(10)]);
var inst_17907 = (state_17928[(8)]);
var inst_17909 = (state_17928[(9)]);
var inst_17912 = (function (){var c = inst_17909;
var v = inst_17908;
var vec__17905 = inst_17907;
var cs = inst_17900;
return ((function (c,v,vec__17905,cs,inst_17908,inst_17900,inst_17907,inst_17909,state_val_17929,c__6593__auto___17952,out){
return (function (p1__17845_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17845_SHARP_);
});
;})(c,v,vec__17905,cs,inst_17908,inst_17900,inst_17907,inst_17909,state_val_17929,c__6593__auto___17952,out))
})();
var inst_17913 = cljs.core.filterv.call(null,inst_17912,inst_17900);
var inst_17900__$1 = inst_17913;
var state_17928__$1 = (function (){var statearr_17943 = state_17928;
(statearr_17943[(10)] = inst_17900__$1);

return statearr_17943;
})();
var statearr_17944_17962 = state_17928__$1;
(statearr_17944_17962[(2)] = null);

(statearr_17944_17962[(1)] = (2));


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
});})(c__6593__auto___17952,out))
;
return ((function (switch__6537__auto__,c__6593__auto___17952,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_17948 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17948[(0)] = state_machine__6538__auto__);

(statearr_17948[(1)] = (1));

return statearr_17948;
});
var state_machine__6538__auto____1 = (function (state_17928){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_17928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e17949){if((e17949 instanceof Object)){
var ex__6541__auto__ = e17949;
var statearr_17950_17963 = state_17928;
(statearr_17950_17963[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17964 = state_17928;
state_17928 = G__17964;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_17928){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_17928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___17952,out))
})();
var state__6595__auto__ = (function (){var statearr_17951 = f__6594__auto__.call(null);
(statearr_17951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___17952);

return statearr_17951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___17952,out))
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
var c__6593__auto___18057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18057,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18057,out){
return (function (state_18034){
var state_val_18035 = (state_18034[(1)]);
if((state_val_18035 === (7))){
var inst_18016 = (state_18034[(7)]);
var inst_18016__$1 = (state_18034[(2)]);
var inst_18017 = (inst_18016__$1 == null);
var inst_18018 = cljs.core.not.call(null,inst_18017);
var state_18034__$1 = (function (){var statearr_18036 = state_18034;
(statearr_18036[(7)] = inst_18016__$1);

return statearr_18036;
})();
if(inst_18018){
var statearr_18037_18058 = state_18034__$1;
(statearr_18037_18058[(1)] = (8));

} else {
var statearr_18038_18059 = state_18034__$1;
(statearr_18038_18059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (1))){
var inst_18011 = (0);
var state_18034__$1 = (function (){var statearr_18039 = state_18034;
(statearr_18039[(8)] = inst_18011);

return statearr_18039;
})();
var statearr_18040_18060 = state_18034__$1;
(statearr_18040_18060[(2)] = null);

(statearr_18040_18060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (4))){
var state_18034__$1 = state_18034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18034__$1,(7),ch);
} else {
if((state_val_18035 === (6))){
var inst_18029 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
var statearr_18041_18061 = state_18034__$1;
(statearr_18041_18061[(2)] = inst_18029);

(statearr_18041_18061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (3))){
var inst_18031 = (state_18034[(2)]);
var inst_18032 = cljs.core.async.close_BANG_.call(null,out);
var state_18034__$1 = (function (){var statearr_18042 = state_18034;
(statearr_18042[(9)] = inst_18031);

return statearr_18042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18034__$1,inst_18032);
} else {
if((state_val_18035 === (2))){
var inst_18011 = (state_18034[(8)]);
var inst_18013 = (inst_18011 < n);
var state_18034__$1 = state_18034;
if(cljs.core.truth_(inst_18013)){
var statearr_18043_18062 = state_18034__$1;
(statearr_18043_18062[(1)] = (4));

} else {
var statearr_18044_18063 = state_18034__$1;
(statearr_18044_18063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (11))){
var inst_18011 = (state_18034[(8)]);
var inst_18021 = (state_18034[(2)]);
var inst_18022 = (inst_18011 + (1));
var inst_18011__$1 = inst_18022;
var state_18034__$1 = (function (){var statearr_18045 = state_18034;
(statearr_18045[(8)] = inst_18011__$1);

(statearr_18045[(10)] = inst_18021);

return statearr_18045;
})();
var statearr_18046_18064 = state_18034__$1;
(statearr_18046_18064[(2)] = null);

(statearr_18046_18064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (9))){
var state_18034__$1 = state_18034;
var statearr_18047_18065 = state_18034__$1;
(statearr_18047_18065[(2)] = null);

(statearr_18047_18065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (5))){
var state_18034__$1 = state_18034;
var statearr_18048_18066 = state_18034__$1;
(statearr_18048_18066[(2)] = null);

(statearr_18048_18066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (10))){
var inst_18026 = (state_18034[(2)]);
var state_18034__$1 = state_18034;
var statearr_18049_18067 = state_18034__$1;
(statearr_18049_18067[(2)] = inst_18026);

(statearr_18049_18067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18035 === (8))){
var inst_18016 = (state_18034[(7)]);
var state_18034__$1 = state_18034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18034__$1,(11),out,inst_18016);
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
});})(c__6593__auto___18057,out))
;
return ((function (switch__6537__auto__,c__6593__auto___18057,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18053[(0)] = state_machine__6538__auto__);

(statearr_18053[(1)] = (1));

return statearr_18053;
});
var state_machine__6538__auto____1 = (function (state_18034){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18054){if((e18054 instanceof Object)){
var ex__6541__auto__ = e18054;
var statearr_18055_18068 = state_18034;
(statearr_18055_18068[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18069 = state_18034;
state_18034 = G__18069;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18034){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18057,out))
})();
var state__6595__auto__ = (function (){var statearr_18056 = f__6594__auto__.call(null);
(statearr_18056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18057);

return statearr_18056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18057,out))
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
if(typeof cljs.core.async.t18077 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18077 = (function (ch,f,map_LT_,meta18078){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18078 = meta18078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18080 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18080 = (function (fn1,_,meta18078,map_LT_,f,ch,meta18081){
this.fn1 = fn1;
this._ = _;
this.meta18078 = meta18078;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18081 = meta18081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18080.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18070_SHARP_){
return f1.call(null,(((p1__18070_SHARP_ == null))?null:self__.f.call(null,p1__18070_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18082){
var self__ = this;
var _18082__$1 = this;
return self__.meta18081;
});})(___$1))
;

cljs.core.async.t18080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18082,meta18081__$1){
var self__ = this;
var _18082__$1 = this;
return (new cljs.core.async.t18080(self__.fn1,self__._,self__.meta18078,self__.map_LT_,self__.f,self__.ch,meta18081__$1));
});})(___$1))
;

cljs.core.async.t18080.cljs$lang$type = true;

cljs.core.async.t18080.cljs$lang$ctorStr = "cljs.core.async/t18080";

cljs.core.async.t18080.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t18080");
});})(___$1))
;

cljs.core.async.__GT_t18080 = ((function (___$1){
return (function __GT_t18080(fn1__$1,___$2,meta18078__$1,map_LT___$1,f__$1,ch__$1,meta18081){
return (new cljs.core.async.t18080(fn1__$1,___$2,meta18078__$1,map_LT___$1,f__$1,ch__$1,meta18081));
});})(___$1))
;

}

return (new cljs.core.async.t18080(fn1,___$1,self__.meta18078,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18079){
var self__ = this;
var _18079__$1 = this;
return self__.meta18078;
});

cljs.core.async.t18077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18079,meta18078__$1){
var self__ = this;
var _18079__$1 = this;
return (new cljs.core.async.t18077(self__.ch,self__.f,self__.map_LT_,meta18078__$1));
});

cljs.core.async.t18077.cljs$lang$type = true;

cljs.core.async.t18077.cljs$lang$ctorStr = "cljs.core.async/t18077";

cljs.core.async.t18077.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t18077");
});

cljs.core.async.__GT_t18077 = (function __GT_t18077(ch__$1,f__$1,map_LT___$1,meta18078){
return (new cljs.core.async.t18077(ch__$1,f__$1,map_LT___$1,meta18078));
});

}

return (new cljs.core.async.t18077(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t18086 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18086 = (function (ch,f,map_GT_,meta18087){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18087 = meta18087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18086.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t18086.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18086.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18088){
var self__ = this;
var _18088__$1 = this;
return self__.meta18087;
});

cljs.core.async.t18086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18088,meta18087__$1){
var self__ = this;
var _18088__$1 = this;
return (new cljs.core.async.t18086(self__.ch,self__.f,self__.map_GT_,meta18087__$1));
});

cljs.core.async.t18086.cljs$lang$type = true;

cljs.core.async.t18086.cljs$lang$ctorStr = "cljs.core.async/t18086";

cljs.core.async.t18086.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t18086");
});

cljs.core.async.__GT_t18086 = (function __GT_t18086(ch__$1,f__$1,map_GT___$1,meta18087){
return (new cljs.core.async.t18086(ch__$1,f__$1,map_GT___$1,meta18087));
});

}

return (new cljs.core.async.t18086(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t18092 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18092 = (function (ch,p,filter_GT_,meta18093){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18093 = meta18093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18092.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t18092.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18092.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18092.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18094){
var self__ = this;
var _18094__$1 = this;
return self__.meta18093;
});

cljs.core.async.t18092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18094,meta18093__$1){
var self__ = this;
var _18094__$1 = this;
return (new cljs.core.async.t18092(self__.ch,self__.p,self__.filter_GT_,meta18093__$1));
});

cljs.core.async.t18092.cljs$lang$type = true;

cljs.core.async.t18092.cljs$lang$ctorStr = "cljs.core.async/t18092";

cljs.core.async.t18092.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write.call(null,writer__4403__auto__,"cljs.core.async/t18092");
});

cljs.core.async.__GT_t18092 = (function __GT_t18092(ch__$1,p__$1,filter_GT___$1,meta18093){
return (new cljs.core.async.t18092(ch__$1,p__$1,filter_GT___$1,meta18093));
});

}

return (new cljs.core.async.t18092(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6593__auto___18177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18177,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18177,out){
return (function (state_18156){
var state_val_18157 = (state_18156[(1)]);
if((state_val_18157 === (7))){
var inst_18152 = (state_18156[(2)]);
var state_18156__$1 = state_18156;
var statearr_18158_18178 = state_18156__$1;
(statearr_18158_18178[(2)] = inst_18152);

(statearr_18158_18178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (1))){
var state_18156__$1 = state_18156;
var statearr_18159_18179 = state_18156__$1;
(statearr_18159_18179[(2)] = null);

(statearr_18159_18179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (4))){
var inst_18138 = (state_18156[(7)]);
var inst_18138__$1 = (state_18156[(2)]);
var inst_18139 = (inst_18138__$1 == null);
var state_18156__$1 = (function (){var statearr_18160 = state_18156;
(statearr_18160[(7)] = inst_18138__$1);

return statearr_18160;
})();
if(cljs.core.truth_(inst_18139)){
var statearr_18161_18180 = state_18156__$1;
(statearr_18161_18180[(1)] = (5));

} else {
var statearr_18162_18181 = state_18156__$1;
(statearr_18162_18181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (6))){
var inst_18138 = (state_18156[(7)]);
var inst_18143 = p.call(null,inst_18138);
var state_18156__$1 = state_18156;
if(cljs.core.truth_(inst_18143)){
var statearr_18163_18182 = state_18156__$1;
(statearr_18163_18182[(1)] = (8));

} else {
var statearr_18164_18183 = state_18156__$1;
(statearr_18164_18183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (3))){
var inst_18154 = (state_18156[(2)]);
var state_18156__$1 = state_18156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18156__$1,inst_18154);
} else {
if((state_val_18157 === (2))){
var state_18156__$1 = state_18156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18156__$1,(4),ch);
} else {
if((state_val_18157 === (11))){
var inst_18146 = (state_18156[(2)]);
var state_18156__$1 = state_18156;
var statearr_18165_18184 = state_18156__$1;
(statearr_18165_18184[(2)] = inst_18146);

(statearr_18165_18184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (9))){
var state_18156__$1 = state_18156;
var statearr_18166_18185 = state_18156__$1;
(statearr_18166_18185[(2)] = null);

(statearr_18166_18185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (5))){
var inst_18141 = cljs.core.async.close_BANG_.call(null,out);
var state_18156__$1 = state_18156;
var statearr_18167_18186 = state_18156__$1;
(statearr_18167_18186[(2)] = inst_18141);

(statearr_18167_18186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (10))){
var inst_18149 = (state_18156[(2)]);
var state_18156__$1 = (function (){var statearr_18168 = state_18156;
(statearr_18168[(8)] = inst_18149);

return statearr_18168;
})();
var statearr_18169_18187 = state_18156__$1;
(statearr_18169_18187[(2)] = null);

(statearr_18169_18187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18157 === (8))){
var inst_18138 = (state_18156[(7)]);
var state_18156__$1 = state_18156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18156__$1,(11),out,inst_18138);
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
});})(c__6593__auto___18177,out))
;
return ((function (switch__6537__auto__,c__6593__auto___18177,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18173 = [null,null,null,null,null,null,null,null,null];
(statearr_18173[(0)] = state_machine__6538__auto__);

(statearr_18173[(1)] = (1));

return statearr_18173;
});
var state_machine__6538__auto____1 = (function (state_18156){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18174){if((e18174 instanceof Object)){
var ex__6541__auto__ = e18174;
var statearr_18175_18188 = state_18156;
(statearr_18175_18188[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18189 = state_18156;
state_18156 = G__18189;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18156){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18177,out))
})();
var state__6595__auto__ = (function (){var statearr_18176 = f__6594__auto__.call(null);
(statearr_18176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18177);

return statearr_18176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18177,out))
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
return (function (state_18355){
var state_val_18356 = (state_18355[(1)]);
if((state_val_18356 === (7))){
var inst_18351 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
var statearr_18357_18398 = state_18355__$1;
(statearr_18357_18398[(2)] = inst_18351);

(statearr_18357_18398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (20))){
var inst_18321 = (state_18355[(7)]);
var inst_18332 = (state_18355[(2)]);
var inst_18333 = cljs.core.next.call(null,inst_18321);
var inst_18307 = inst_18333;
var inst_18308 = null;
var inst_18309 = (0);
var inst_18310 = (0);
var state_18355__$1 = (function (){var statearr_18358 = state_18355;
(statearr_18358[(8)] = inst_18308);

(statearr_18358[(9)] = inst_18309);

(statearr_18358[(10)] = inst_18310);

(statearr_18358[(11)] = inst_18332);

(statearr_18358[(12)] = inst_18307);

return statearr_18358;
})();
var statearr_18359_18399 = state_18355__$1;
(statearr_18359_18399[(2)] = null);

(statearr_18359_18399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (1))){
var state_18355__$1 = state_18355;
var statearr_18360_18400 = state_18355__$1;
(statearr_18360_18400[(2)] = null);

(statearr_18360_18400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (4))){
var inst_18296 = (state_18355[(13)]);
var inst_18296__$1 = (state_18355[(2)]);
var inst_18297 = (inst_18296__$1 == null);
var state_18355__$1 = (function (){var statearr_18361 = state_18355;
(statearr_18361[(13)] = inst_18296__$1);

return statearr_18361;
})();
if(cljs.core.truth_(inst_18297)){
var statearr_18362_18401 = state_18355__$1;
(statearr_18362_18401[(1)] = (5));

} else {
var statearr_18363_18402 = state_18355__$1;
(statearr_18363_18402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (15))){
var state_18355__$1 = state_18355;
var statearr_18367_18403 = state_18355__$1;
(statearr_18367_18403[(2)] = null);

(statearr_18367_18403[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (21))){
var state_18355__$1 = state_18355;
var statearr_18368_18404 = state_18355__$1;
(statearr_18368_18404[(2)] = null);

(statearr_18368_18404[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (13))){
var inst_18308 = (state_18355[(8)]);
var inst_18309 = (state_18355[(9)]);
var inst_18310 = (state_18355[(10)]);
var inst_18307 = (state_18355[(12)]);
var inst_18317 = (state_18355[(2)]);
var inst_18318 = (inst_18310 + (1));
var tmp18364 = inst_18308;
var tmp18365 = inst_18309;
var tmp18366 = inst_18307;
var inst_18307__$1 = tmp18366;
var inst_18308__$1 = tmp18364;
var inst_18309__$1 = tmp18365;
var inst_18310__$1 = inst_18318;
var state_18355__$1 = (function (){var statearr_18369 = state_18355;
(statearr_18369[(8)] = inst_18308__$1);

(statearr_18369[(9)] = inst_18309__$1);

(statearr_18369[(10)] = inst_18310__$1);

(statearr_18369[(14)] = inst_18317);

(statearr_18369[(12)] = inst_18307__$1);

return statearr_18369;
})();
var statearr_18370_18405 = state_18355__$1;
(statearr_18370_18405[(2)] = null);

(statearr_18370_18405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (22))){
var state_18355__$1 = state_18355;
var statearr_18371_18406 = state_18355__$1;
(statearr_18371_18406[(2)] = null);

(statearr_18371_18406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (6))){
var inst_18296 = (state_18355[(13)]);
var inst_18305 = f.call(null,inst_18296);
var inst_18306 = cljs.core.seq.call(null,inst_18305);
var inst_18307 = inst_18306;
var inst_18308 = null;
var inst_18309 = (0);
var inst_18310 = (0);
var state_18355__$1 = (function (){var statearr_18372 = state_18355;
(statearr_18372[(8)] = inst_18308);

(statearr_18372[(9)] = inst_18309);

(statearr_18372[(10)] = inst_18310);

(statearr_18372[(12)] = inst_18307);

return statearr_18372;
})();
var statearr_18373_18407 = state_18355__$1;
(statearr_18373_18407[(2)] = null);

(statearr_18373_18407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (17))){
var inst_18321 = (state_18355[(7)]);
var inst_18325 = cljs.core.chunk_first.call(null,inst_18321);
var inst_18326 = cljs.core.chunk_rest.call(null,inst_18321);
var inst_18327 = cljs.core.count.call(null,inst_18325);
var inst_18307 = inst_18326;
var inst_18308 = inst_18325;
var inst_18309 = inst_18327;
var inst_18310 = (0);
var state_18355__$1 = (function (){var statearr_18374 = state_18355;
(statearr_18374[(8)] = inst_18308);

(statearr_18374[(9)] = inst_18309);

(statearr_18374[(10)] = inst_18310);

(statearr_18374[(12)] = inst_18307);

return statearr_18374;
})();
var statearr_18375_18408 = state_18355__$1;
(statearr_18375_18408[(2)] = null);

(statearr_18375_18408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (3))){
var inst_18353 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18355__$1,inst_18353);
} else {
if((state_val_18356 === (12))){
var inst_18341 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
var statearr_18376_18409 = state_18355__$1;
(statearr_18376_18409[(2)] = inst_18341);

(statearr_18376_18409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (2))){
var state_18355__$1 = state_18355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18355__$1,(4),in$);
} else {
if((state_val_18356 === (23))){
var inst_18349 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
var statearr_18377_18410 = state_18355__$1;
(statearr_18377_18410[(2)] = inst_18349);

(statearr_18377_18410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (19))){
var inst_18336 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
var statearr_18378_18411 = state_18355__$1;
(statearr_18378_18411[(2)] = inst_18336);

(statearr_18378_18411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (11))){
var inst_18321 = (state_18355[(7)]);
var inst_18307 = (state_18355[(12)]);
var inst_18321__$1 = cljs.core.seq.call(null,inst_18307);
var state_18355__$1 = (function (){var statearr_18379 = state_18355;
(statearr_18379[(7)] = inst_18321__$1);

return statearr_18379;
})();
if(inst_18321__$1){
var statearr_18380_18412 = state_18355__$1;
(statearr_18380_18412[(1)] = (14));

} else {
var statearr_18381_18413 = state_18355__$1;
(statearr_18381_18413[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (9))){
var inst_18343 = (state_18355[(2)]);
var inst_18344 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18355__$1 = (function (){var statearr_18382 = state_18355;
(statearr_18382[(15)] = inst_18343);

return statearr_18382;
})();
if(cljs.core.truth_(inst_18344)){
var statearr_18383_18414 = state_18355__$1;
(statearr_18383_18414[(1)] = (21));

} else {
var statearr_18384_18415 = state_18355__$1;
(statearr_18384_18415[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (5))){
var inst_18299 = cljs.core.async.close_BANG_.call(null,out);
var state_18355__$1 = state_18355;
var statearr_18385_18416 = state_18355__$1;
(statearr_18385_18416[(2)] = inst_18299);

(statearr_18385_18416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (14))){
var inst_18321 = (state_18355[(7)]);
var inst_18323 = cljs.core.chunked_seq_QMARK_.call(null,inst_18321);
var state_18355__$1 = state_18355;
if(inst_18323){
var statearr_18386_18417 = state_18355__$1;
(statearr_18386_18417[(1)] = (17));

} else {
var statearr_18387_18418 = state_18355__$1;
(statearr_18387_18418[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (16))){
var inst_18339 = (state_18355[(2)]);
var state_18355__$1 = state_18355;
var statearr_18388_18419 = state_18355__$1;
(statearr_18388_18419[(2)] = inst_18339);

(statearr_18388_18419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18356 === (10))){
var inst_18308 = (state_18355[(8)]);
var inst_18310 = (state_18355[(10)]);
var inst_18315 = cljs.core._nth.call(null,inst_18308,inst_18310);
var state_18355__$1 = state_18355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18355__$1,(13),out,inst_18315);
} else {
if((state_val_18356 === (18))){
var inst_18321 = (state_18355[(7)]);
var inst_18330 = cljs.core.first.call(null,inst_18321);
var state_18355__$1 = state_18355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18355__$1,(20),out,inst_18330);
} else {
if((state_val_18356 === (8))){
var inst_18309 = (state_18355[(9)]);
var inst_18310 = (state_18355[(10)]);
var inst_18312 = (inst_18310 < inst_18309);
var inst_18313 = inst_18312;
var state_18355__$1 = state_18355;
if(cljs.core.truth_(inst_18313)){
var statearr_18389_18420 = state_18355__$1;
(statearr_18389_18420[(1)] = (10));

} else {
var statearr_18390_18421 = state_18355__$1;
(statearr_18390_18421[(1)] = (11));

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
var statearr_18394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18394[(0)] = state_machine__6538__auto__);

(statearr_18394[(1)] = (1));

return statearr_18394;
});
var state_machine__6538__auto____1 = (function (state_18355){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18395){if((e18395 instanceof Object)){
var ex__6541__auto__ = e18395;
var statearr_18396_18422 = state_18355;
(statearr_18396_18422[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18423 = state_18355;
state_18355 = G__18423;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18355){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_18397 = f__6594__auto__.call(null);
(statearr_18397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_18397;
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
var c__6593__auto___18520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18520,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18520,out){
return (function (state_18495){
var state_val_18496 = (state_18495[(1)]);
if((state_val_18496 === (7))){
var inst_18490 = (state_18495[(2)]);
var state_18495__$1 = state_18495;
var statearr_18497_18521 = state_18495__$1;
(statearr_18497_18521[(2)] = inst_18490);

(statearr_18497_18521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (1))){
var inst_18472 = null;
var state_18495__$1 = (function (){var statearr_18498 = state_18495;
(statearr_18498[(7)] = inst_18472);

return statearr_18498;
})();
var statearr_18499_18522 = state_18495__$1;
(statearr_18499_18522[(2)] = null);

(statearr_18499_18522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (4))){
var inst_18475 = (state_18495[(8)]);
var inst_18475__$1 = (state_18495[(2)]);
var inst_18476 = (inst_18475__$1 == null);
var inst_18477 = cljs.core.not.call(null,inst_18476);
var state_18495__$1 = (function (){var statearr_18500 = state_18495;
(statearr_18500[(8)] = inst_18475__$1);

return statearr_18500;
})();
if(inst_18477){
var statearr_18501_18523 = state_18495__$1;
(statearr_18501_18523[(1)] = (5));

} else {
var statearr_18502_18524 = state_18495__$1;
(statearr_18502_18524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (6))){
var state_18495__$1 = state_18495;
var statearr_18503_18525 = state_18495__$1;
(statearr_18503_18525[(2)] = null);

(statearr_18503_18525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (3))){
var inst_18492 = (state_18495[(2)]);
var inst_18493 = cljs.core.async.close_BANG_.call(null,out);
var state_18495__$1 = (function (){var statearr_18504 = state_18495;
(statearr_18504[(9)] = inst_18492);

return statearr_18504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18495__$1,inst_18493);
} else {
if((state_val_18496 === (2))){
var state_18495__$1 = state_18495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18495__$1,(4),ch);
} else {
if((state_val_18496 === (11))){
var inst_18475 = (state_18495[(8)]);
var inst_18484 = (state_18495[(2)]);
var inst_18472 = inst_18475;
var state_18495__$1 = (function (){var statearr_18505 = state_18495;
(statearr_18505[(10)] = inst_18484);

(statearr_18505[(7)] = inst_18472);

return statearr_18505;
})();
var statearr_18506_18526 = state_18495__$1;
(statearr_18506_18526[(2)] = null);

(statearr_18506_18526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (9))){
var inst_18475 = (state_18495[(8)]);
var state_18495__$1 = state_18495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18495__$1,(11),out,inst_18475);
} else {
if((state_val_18496 === (5))){
var inst_18472 = (state_18495[(7)]);
var inst_18475 = (state_18495[(8)]);
var inst_18479 = cljs.core._EQ_.call(null,inst_18475,inst_18472);
var state_18495__$1 = state_18495;
if(inst_18479){
var statearr_18508_18527 = state_18495__$1;
(statearr_18508_18527[(1)] = (8));

} else {
var statearr_18509_18528 = state_18495__$1;
(statearr_18509_18528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (10))){
var inst_18487 = (state_18495[(2)]);
var state_18495__$1 = state_18495;
var statearr_18510_18529 = state_18495__$1;
(statearr_18510_18529[(2)] = inst_18487);

(statearr_18510_18529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (8))){
var inst_18472 = (state_18495[(7)]);
var tmp18507 = inst_18472;
var inst_18472__$1 = tmp18507;
var state_18495__$1 = (function (){var statearr_18511 = state_18495;
(statearr_18511[(7)] = inst_18472__$1);

return statearr_18511;
})();
var statearr_18512_18530 = state_18495__$1;
(statearr_18512_18530[(2)] = null);

(statearr_18512_18530[(1)] = (2));


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
});})(c__6593__auto___18520,out))
;
return ((function (switch__6537__auto__,c__6593__auto___18520,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18516[(0)] = state_machine__6538__auto__);

(statearr_18516[(1)] = (1));

return statearr_18516;
});
var state_machine__6538__auto____1 = (function (state_18495){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18517){if((e18517 instanceof Object)){
var ex__6541__auto__ = e18517;
var statearr_18518_18531 = state_18495;
(statearr_18518_18531[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18532 = state_18495;
state_18495 = G__18532;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18495){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18520,out))
})();
var state__6595__auto__ = (function (){var statearr_18519 = f__6594__auto__.call(null);
(statearr_18519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18520);

return statearr_18519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18520,out))
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
var c__6593__auto___18667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18667,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18667,out){
return (function (state_18637){
var state_val_18638 = (state_18637[(1)]);
if((state_val_18638 === (7))){
var inst_18633 = (state_18637[(2)]);
var state_18637__$1 = state_18637;
var statearr_18639_18668 = state_18637__$1;
(statearr_18639_18668[(2)] = inst_18633);

(statearr_18639_18668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (1))){
var inst_18600 = (new Array(n));
var inst_18601 = inst_18600;
var inst_18602 = (0);
var state_18637__$1 = (function (){var statearr_18640 = state_18637;
(statearr_18640[(7)] = inst_18602);

(statearr_18640[(8)] = inst_18601);

return statearr_18640;
})();
var statearr_18641_18669 = state_18637__$1;
(statearr_18641_18669[(2)] = null);

(statearr_18641_18669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (4))){
var inst_18605 = (state_18637[(9)]);
var inst_18605__$1 = (state_18637[(2)]);
var inst_18606 = (inst_18605__$1 == null);
var inst_18607 = cljs.core.not.call(null,inst_18606);
var state_18637__$1 = (function (){var statearr_18642 = state_18637;
(statearr_18642[(9)] = inst_18605__$1);

return statearr_18642;
})();
if(inst_18607){
var statearr_18643_18670 = state_18637__$1;
(statearr_18643_18670[(1)] = (5));

} else {
var statearr_18644_18671 = state_18637__$1;
(statearr_18644_18671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (15))){
var inst_18627 = (state_18637[(2)]);
var state_18637__$1 = state_18637;
var statearr_18645_18672 = state_18637__$1;
(statearr_18645_18672[(2)] = inst_18627);

(statearr_18645_18672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (13))){
var state_18637__$1 = state_18637;
var statearr_18646_18673 = state_18637__$1;
(statearr_18646_18673[(2)] = null);

(statearr_18646_18673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (6))){
var inst_18602 = (state_18637[(7)]);
var inst_18623 = (inst_18602 > (0));
var state_18637__$1 = state_18637;
if(cljs.core.truth_(inst_18623)){
var statearr_18647_18674 = state_18637__$1;
(statearr_18647_18674[(1)] = (12));

} else {
var statearr_18648_18675 = state_18637__$1;
(statearr_18648_18675[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (3))){
var inst_18635 = (state_18637[(2)]);
var state_18637__$1 = state_18637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18637__$1,inst_18635);
} else {
if((state_val_18638 === (12))){
var inst_18601 = (state_18637[(8)]);
var inst_18625 = cljs.core.vec.call(null,inst_18601);
var state_18637__$1 = state_18637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18637__$1,(15),out,inst_18625);
} else {
if((state_val_18638 === (2))){
var state_18637__$1 = state_18637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18637__$1,(4),ch);
} else {
if((state_val_18638 === (11))){
var inst_18617 = (state_18637[(2)]);
var inst_18618 = (new Array(n));
var inst_18601 = inst_18618;
var inst_18602 = (0);
var state_18637__$1 = (function (){var statearr_18649 = state_18637;
(statearr_18649[(7)] = inst_18602);

(statearr_18649[(8)] = inst_18601);

(statearr_18649[(10)] = inst_18617);

return statearr_18649;
})();
var statearr_18650_18676 = state_18637__$1;
(statearr_18650_18676[(2)] = null);

(statearr_18650_18676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (9))){
var inst_18601 = (state_18637[(8)]);
var inst_18615 = cljs.core.vec.call(null,inst_18601);
var state_18637__$1 = state_18637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18637__$1,(11),out,inst_18615);
} else {
if((state_val_18638 === (5))){
var inst_18610 = (state_18637[(11)]);
var inst_18602 = (state_18637[(7)]);
var inst_18601 = (state_18637[(8)]);
var inst_18605 = (state_18637[(9)]);
var inst_18609 = (inst_18601[inst_18602] = inst_18605);
var inst_18610__$1 = (inst_18602 + (1));
var inst_18611 = (inst_18610__$1 < n);
var state_18637__$1 = (function (){var statearr_18651 = state_18637;
(statearr_18651[(11)] = inst_18610__$1);

(statearr_18651[(12)] = inst_18609);

return statearr_18651;
})();
if(cljs.core.truth_(inst_18611)){
var statearr_18652_18677 = state_18637__$1;
(statearr_18652_18677[(1)] = (8));

} else {
var statearr_18653_18678 = state_18637__$1;
(statearr_18653_18678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (14))){
var inst_18630 = (state_18637[(2)]);
var inst_18631 = cljs.core.async.close_BANG_.call(null,out);
var state_18637__$1 = (function (){var statearr_18655 = state_18637;
(statearr_18655[(13)] = inst_18630);

return statearr_18655;
})();
var statearr_18656_18679 = state_18637__$1;
(statearr_18656_18679[(2)] = inst_18631);

(statearr_18656_18679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (10))){
var inst_18621 = (state_18637[(2)]);
var state_18637__$1 = state_18637;
var statearr_18657_18680 = state_18637__$1;
(statearr_18657_18680[(2)] = inst_18621);

(statearr_18657_18680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18638 === (8))){
var inst_18610 = (state_18637[(11)]);
var inst_18601 = (state_18637[(8)]);
var tmp18654 = inst_18601;
var inst_18601__$1 = tmp18654;
var inst_18602 = inst_18610;
var state_18637__$1 = (function (){var statearr_18658 = state_18637;
(statearr_18658[(7)] = inst_18602);

(statearr_18658[(8)] = inst_18601__$1);

return statearr_18658;
})();
var statearr_18659_18681 = state_18637__$1;
(statearr_18659_18681[(2)] = null);

(statearr_18659_18681[(1)] = (2));


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
});})(c__6593__auto___18667,out))
;
return ((function (switch__6537__auto__,c__6593__auto___18667,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18663[(0)] = state_machine__6538__auto__);

(statearr_18663[(1)] = (1));

return statearr_18663;
});
var state_machine__6538__auto____1 = (function (state_18637){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18664){if((e18664 instanceof Object)){
var ex__6541__auto__ = e18664;
var statearr_18665_18682 = state_18637;
(statearr_18665_18682[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18683 = state_18637;
state_18637 = G__18683;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18637){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18667,out))
})();
var state__6595__auto__ = (function (){var statearr_18666 = f__6594__auto__.call(null);
(statearr_18666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18667);

return statearr_18666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18667,out))
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
var c__6593__auto___18826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto___18826,out){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto___18826,out){
return (function (state_18796){
var state_val_18797 = (state_18796[(1)]);
if((state_val_18797 === (7))){
var inst_18792 = (state_18796[(2)]);
var state_18796__$1 = state_18796;
var statearr_18798_18827 = state_18796__$1;
(statearr_18798_18827[(2)] = inst_18792);

(statearr_18798_18827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (1))){
var inst_18755 = [];
var inst_18756 = inst_18755;
var inst_18757 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18796__$1 = (function (){var statearr_18799 = state_18796;
(statearr_18799[(7)] = inst_18756);

(statearr_18799[(8)] = inst_18757);

return statearr_18799;
})();
var statearr_18800_18828 = state_18796__$1;
(statearr_18800_18828[(2)] = null);

(statearr_18800_18828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (4))){
var inst_18760 = (state_18796[(9)]);
var inst_18760__$1 = (state_18796[(2)]);
var inst_18761 = (inst_18760__$1 == null);
var inst_18762 = cljs.core.not.call(null,inst_18761);
var state_18796__$1 = (function (){var statearr_18801 = state_18796;
(statearr_18801[(9)] = inst_18760__$1);

return statearr_18801;
})();
if(inst_18762){
var statearr_18802_18829 = state_18796__$1;
(statearr_18802_18829[(1)] = (5));

} else {
var statearr_18803_18830 = state_18796__$1;
(statearr_18803_18830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (15))){
var inst_18786 = (state_18796[(2)]);
var state_18796__$1 = state_18796;
var statearr_18804_18831 = state_18796__$1;
(statearr_18804_18831[(2)] = inst_18786);

(statearr_18804_18831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (13))){
var state_18796__$1 = state_18796;
var statearr_18805_18832 = state_18796__$1;
(statearr_18805_18832[(2)] = null);

(statearr_18805_18832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (6))){
var inst_18756 = (state_18796[(7)]);
var inst_18781 = inst_18756.length;
var inst_18782 = (inst_18781 > (0));
var state_18796__$1 = state_18796;
if(cljs.core.truth_(inst_18782)){
var statearr_18806_18833 = state_18796__$1;
(statearr_18806_18833[(1)] = (12));

} else {
var statearr_18807_18834 = state_18796__$1;
(statearr_18807_18834[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (3))){
var inst_18794 = (state_18796[(2)]);
var state_18796__$1 = state_18796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18796__$1,inst_18794);
} else {
if((state_val_18797 === (12))){
var inst_18756 = (state_18796[(7)]);
var inst_18784 = cljs.core.vec.call(null,inst_18756);
var state_18796__$1 = state_18796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18796__$1,(15),out,inst_18784);
} else {
if((state_val_18797 === (2))){
var state_18796__$1 = state_18796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18796__$1,(4),ch);
} else {
if((state_val_18797 === (11))){
var inst_18764 = (state_18796[(10)]);
var inst_18760 = (state_18796[(9)]);
var inst_18774 = (state_18796[(2)]);
var inst_18775 = [];
var inst_18776 = inst_18775.push(inst_18760);
var inst_18756 = inst_18775;
var inst_18757 = inst_18764;
var state_18796__$1 = (function (){var statearr_18808 = state_18796;
(statearr_18808[(11)] = inst_18774);

(statearr_18808[(12)] = inst_18776);

(statearr_18808[(7)] = inst_18756);

(statearr_18808[(8)] = inst_18757);

return statearr_18808;
})();
var statearr_18809_18835 = state_18796__$1;
(statearr_18809_18835[(2)] = null);

(statearr_18809_18835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (9))){
var inst_18756 = (state_18796[(7)]);
var inst_18772 = cljs.core.vec.call(null,inst_18756);
var state_18796__$1 = state_18796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18796__$1,(11),out,inst_18772);
} else {
if((state_val_18797 === (5))){
var inst_18764 = (state_18796[(10)]);
var inst_18760 = (state_18796[(9)]);
var inst_18757 = (state_18796[(8)]);
var inst_18764__$1 = f.call(null,inst_18760);
var inst_18765 = cljs.core._EQ_.call(null,inst_18764__$1,inst_18757);
var inst_18766 = cljs.core.keyword_identical_QMARK_.call(null,inst_18757,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18767 = (inst_18765) || (inst_18766);
var state_18796__$1 = (function (){var statearr_18810 = state_18796;
(statearr_18810[(10)] = inst_18764__$1);

return statearr_18810;
})();
if(cljs.core.truth_(inst_18767)){
var statearr_18811_18836 = state_18796__$1;
(statearr_18811_18836[(1)] = (8));

} else {
var statearr_18812_18837 = state_18796__$1;
(statearr_18812_18837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (14))){
var inst_18789 = (state_18796[(2)]);
var inst_18790 = cljs.core.async.close_BANG_.call(null,out);
var state_18796__$1 = (function (){var statearr_18814 = state_18796;
(statearr_18814[(13)] = inst_18789);

return statearr_18814;
})();
var statearr_18815_18838 = state_18796__$1;
(statearr_18815_18838[(2)] = inst_18790);

(statearr_18815_18838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (10))){
var inst_18779 = (state_18796[(2)]);
var state_18796__$1 = state_18796;
var statearr_18816_18839 = state_18796__$1;
(statearr_18816_18839[(2)] = inst_18779);

(statearr_18816_18839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18797 === (8))){
var inst_18764 = (state_18796[(10)]);
var inst_18760 = (state_18796[(9)]);
var inst_18756 = (state_18796[(7)]);
var inst_18769 = inst_18756.push(inst_18760);
var tmp18813 = inst_18756;
var inst_18756__$1 = tmp18813;
var inst_18757 = inst_18764;
var state_18796__$1 = (function (){var statearr_18817 = state_18796;
(statearr_18817[(7)] = inst_18756__$1);

(statearr_18817[(14)] = inst_18769);

(statearr_18817[(8)] = inst_18757);

return statearr_18817;
})();
var statearr_18818_18840 = state_18796__$1;
(statearr_18818_18840[(2)] = null);

(statearr_18818_18840[(1)] = (2));


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
});})(c__6593__auto___18826,out))
;
return ((function (switch__6537__auto__,c__6593__auto___18826,out){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_18822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18822[(0)] = state_machine__6538__auto__);

(statearr_18822[(1)] = (1));

return statearr_18822;
});
var state_machine__6538__auto____1 = (function (state_18796){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_18796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e18823){if((e18823 instanceof Object)){
var ex__6541__auto__ = e18823;
var statearr_18824_18841 = state_18796;
(statearr_18824_18841[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18842 = state_18796;
state_18796 = G__18842;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_18796){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_18796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto___18826,out))
})();
var state__6595__auto__ = (function (){var statearr_18825 = f__6594__auto__.call(null);
(statearr_18825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto___18826);

return statearr_18825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto___18826,out))
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

//# sourceMappingURL=async.js.map?rel=1435333034893