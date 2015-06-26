// Compiled by ClojureScript 0.0-2850 {}
goog.provide('dining_philosophers.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
dining_philosophers.core.canvas = document.getElementById("dp-canvas");
dining_philosophers.core.context = dining_philosophers.core.canvas.getContext("2d");
dining_philosophers.core.width = dining_philosophers.core.canvas.width;
dining_philosophers.core.height = dining_philosophers.core.canvas.height;
dining_philosophers.core.background = "white";
dining_philosophers.core.opacity = 1.0;
dining_philosophers.core.step = (2);
dining_philosophers.core.colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","pink","lightblue","green","lightgreen","orange","yellow"], null);
if(typeof dining_philosophers.core.world !== 'undefined'){
} else {
dining_philosophers.core.world = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
dining_philosophers.core.running = cljs.core.atom.call(null,false);
dining_philosophers.core.mol_id_counter = cljs.core.atom.call(null,(0));
dining_philosophers.core.setColor = (function setColor(context,color){
context.fillStyle = color;

return context.globalAlpha = dining_philosophers.core.opacity;
});
dining_philosophers.core.setText = (function setText(context,color,style){
context.fillStyle = color;

return context.font = style;
});
dining_philosophers.core.setLoading = (function setLoading(context){
var G__9350 = context;
dining_philosophers.core.setText.call(null,G__9350,"grey","bold 30px Arial");

G__9350.fillText("Ready?",(180),(250));

return G__9350;
});
dining_philosophers.core.clear = (function clear(){
var G__9352 = dining_philosophers.core.context;
dining_philosophers.core.setColor.call(null,G__9352,dining_philosophers.core.background);

G__9352.fillRect((0),(0),dining_philosophers.core.width,dining_philosophers.core.height);

return G__9352;
});
dining_philosophers.core.draw_circle = (function draw_circle(context,color,diam,x,y){
var G__9354 = context;
dining_philosophers.core.setColor.call(null,G__9354,color);

G__9354.beginPath();

G__9354.arc(x,y,diam,(0),((2) * Math.PI),true);

G__9354.closePath();

G__9354.fill();

return G__9354;
});
dining_philosophers.core.draw_molecule = (function draw_molecule(p__9355){
var map__9358 = p__9355;
var map__9358__$1 = ((cljs.core.seq_QMARK_.call(null,map__9358))?cljs.core.apply.call(null,cljs.core.hash_map,map__9358):map__9358);
var args = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var val = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"val","val",128701612));
var d = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.truth_(val)){
var display_val = ((cljs.core._EQ_.call(null,dining_philosophers.core.eat,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"eat","eat",1686757401)):((cljs.core._EQ_.call(null,dining_philosophers.core.think,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"think","think",1767447468)):cljs.core.name.call(null,val)
));
dining_philosophers.core.draw_circle.call(null,dining_philosophers.core.context,color,d,x,y);

var G__9359 = dining_philosophers.core.context;
dining_philosophers.core.setText.call(null,G__9359,"black","bold 11px Courier");

G__9359.fillText([cljs.core.str(display_val)].join(''),(x - (cljs.core.count.call(null,display_val) * (3))),(y + (5)));

return G__9359;
} else {
return null;
}
});
dining_philosophers.core.draw_molecules = (function draw_molecules(state){
return cljs.core.doall.call(null,cljs.core.map.call(null,dining_philosophers.core.draw_molecule,state));
});
dining_philosophers.core.move_molecule = (function move_molecule(p__9360,collide_QMARK_){
var map__9362 = p__9360;
var map__9362__$1 = ((cljs.core.seq_QMARK_.call(null,map__9362))?cljs.core.apply.call(null,cljs.core.hash_map,map__9362):map__9362);
var molecule = map__9362__$1;
var dy = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var dx = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var d = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dx__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dx):dx);
var dy__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dy):dy);
var mx = ((dx__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int.call(null,d):dining_philosophers.core.step)) + x);
var my = ((dy__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int.call(null,d):dining_philosophers.core.step)) + y);
var newx = ((((((2) * d) + dining_philosophers.core.width) < mx))?(dx__$1 * dining_philosophers.core.step):mx);
var newx__$1 = ((((- ((2) * d)) > newx))?(dining_philosophers.core.width - mx):newx);
var newy = ((((((2) * d) + dining_philosophers.core.height) < my))?(dy__$1 * dining_philosophers.core.step):my);
var newy__$1 = ((((- ((2) * d)) > newy))?(dining_philosophers.core.height - my):newy);
return cljs.core.merge.call(null,molecule,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),newx__$1,new cljs.core.Keyword(null,"y","y",-1757859776),newy__$1,new cljs.core.Keyword(null,"dx","dx",-381796732),dx__$1,new cljs.core.Keyword(null,"dy","dy",1719547243),dy__$1], null));
});
dining_philosophers.core.rand_dx_dy = (function rand_dx_dy(){
var multiplier = (((0.5 > cljs.core.rand.call(null)))?(-1):(1));
var speed = cljs.core.rand.call(null);
return (multiplier * speed);
});
dining_philosophers.core.collide_QMARK_ = (function collide_QMARK_(molecule,x,y,molecule_d){
var dx = Math.abs.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(molecule) - x));
var dy = Math.abs.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(molecule) - y));
return ((molecule_d > dx)) && ((molecule_d > dy));
});
dining_philosophers.core.max_reaction = (function max_reaction(molecule_a,molecule_b){
var a = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(molecule_a);
var b = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(molecule_b);
if((b > a)){
return cljs.core.assoc.call(null,molecule_a,new cljs.core.Keyword(null,"val","val",128701612),b);
} else {
return molecule_a;
}
});
dining_philosophers.core.gen_molecule = (function gen_molecule(val){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,dining_philosophers.core.width),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,dining_philosophers.core.height),new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,dining_philosophers.core.colors),new cljs.core.Keyword(null,"dx","dx",-381796732),((0.5 + cljs.core.rand_int.call(null,(3))) * dining_philosophers.core.rand_dx_dy.call(null)),new cljs.core.Keyword(null,"dy","dy",1719547243),((0.5 + cljs.core.rand_int.call(null,(3))) * dining_philosophers.core.rand_dx_dy.call(null)),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null);
});
dining_philosophers.core.gen_molecules = (function gen_molecules(vals){
var n = cljs.core.count.call(null,vals);
return cljs.core.map.call(null,dining_philosophers.core.gen_molecule,vals);
});
dining_philosophers.core.find_collision = (function find_collision(molecule){
var rest_molecules = cljs.core.remove.call(null,(function (b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,dining_philosophers.core.world)));
var collided_with = cljs.core.filter.call(null,((function (rest_molecules){
return (function (b){
return dining_philosophers.core.collide_QMARK_.call(null,b,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(molecule));
});})(rest_molecules))
,rest_molecules);
return cljs.core.first.call(null,collided_with);
});
dining_philosophers.core.react_fn_ready_to_eval_QMARK_ = (function react_fn_ready_to_eval_QMARK_(react_fn,arglist){
var react_fn_args_list = react_fn.length;
return cljs.core._EQ_.call(null,react_fn_args_list,cljs.core.count.call(null,arglist));
});
dining_philosophers.core.gen_molecule_by_val = (function gen_molecule_by_val(val,x){
var G__9364 = val;
switch (G__9364) {
case "two-forks and thinking-philosopher":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dining_philosophers.core.gen_fork_molecule.call(null,(x - (25)),(450)),dining_philosophers.core.gen_fork_molecule.call(null,(x + (25)),(450)),dining_philosophers.core.gen_think_philosopher_molecule.call(null,x,(450))], null);

break;
case "thinking-philosopher":
return dining_philosophers.core.gen_think_philosopher_molecule.call(null,x,(450));

break;
case "eating-philosopher":
return dining_philosophers.core.gen_eat_philosopher_molecule.call(null,x,(450));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(val)].join('')));

}
});
dining_philosophers.core.higher_order_eval = (function higher_order_eval(fn_mol){
var react_fn = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_mol);
var result_vals = cljs.core.apply.call(null,react_fn,react_args);
var result_mols = cljs.core.flatten.call(null,cljs.core.mapv.call(null,((function (react_fn,react_args,result_vals){
return (function (p1__9366_SHARP_){
return dining_philosophers.core.gen_molecule_by_val.call(null,p1__9366_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(fn_mol));
});})(react_fn,react_args,result_vals))
,result_vals));
return result_mols;
});
dining_philosophers.core.higher_order_capture = (function higher_order_capture(fn_mol,val_mol){
var react_fn_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_fn = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_allowed_arg_val = new cljs.core.Keyword(null,"allowed-arg-val","allowed-arg-val",1907742522).cljs$core$IFn$_invoke$arity$1(fn_mol);
if(cljs.core._EQ_.call(null,react_allowed_arg_val,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(val_mol))){
if(dining_philosophers.core.react_fn_ready_to_eval_QMARK_.call(null,react_fn,react_fn_args)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_mol,val_mol], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,fn_mol,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.conj.call(null,react_fn_args,val_mol)),cljs.core.assoc.call(null,val_mol,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"destroy","destroy",-843660405))], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_mol,val_mol], null);
}
});
dining_philosophers.core.higher_order_reaction = (function higher_order_reaction(mol1,mol2){
var v1 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol1);
var v2 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol2);
if((cljs.core.fn_QMARK_.call(null,v1)) && (cljs.core.fn_QMARK_.call(null,v2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mol1,mol2], null);
} else {
if(cljs.core.fn_QMARK_.call(null,v1)){
return dining_philosophers.core.higher_order_capture.call(null,mol1,mol2);
} else {
if(cljs.core.fn_QMARK_.call(null,v2)){
return dining_philosophers.core.higher_order_capture.call(null,mol2,mol1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mol1,mol2], null);

}
}
}
});
dining_philosophers.core.hatch_QMARK_ = (function hatch_QMARK_(mstate){
if(cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mstate))){
return dining_philosophers.core.react_fn_ready_to_eval_QMARK_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mstate),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(mstate));
} else {
return null;
}
});
dining_philosophers.core.hatch = (function hatch(mstate){
var result_mols = dining_philosophers.core.higher_order_eval.call(null,mstate);
var new_y = (((new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(mstate) < (0)))?(475):(425));
var clean_mstate = cljs.core.assoc.call(null,mstate,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"y","y",-1757859776),new_y);
cljs.core.swap_BANG_.call(null,dining_philosophers.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mstate),dining_philosophers.core.move_molecule.call(null,clean_mstate,true));

cljs.core.mapv.call(null,((function (result_mols,new_y,clean_mstate){
return (function (m){
return cljs.core.swap_BANG_.call(null,dining_philosophers.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),dining_philosophers.core.move_molecule.call(null,dining_philosophers.core.move_molecule.call(null,m,true),false));
});})(result_mols,new_y,clean_mstate))
,result_mols);

return cljs.core.mapv.call(null,((function (result_mols,new_y,clean_mstate){
return (function (m){
return dining_philosophers.core.molecule_reaction.call(null,m);
});})(result_mols,new_y,clean_mstate))
,result_mols);
});
dining_philosophers.core.collision_reaction = (function collision_reaction(mstate,collision_mol){
var new_mols = dining_philosophers.core.higher_order_reaction.call(null,mstate,collision_mol);
var mols_to_destroy = cljs.core.filter.call(null,((function (new_mols){
return (function (m){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"destroy","destroy",-843660405),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(m));
});})(new_mols))
,new_mols);
var mols_to_bounce = cljs.core.remove.call(null,((function (new_mols,mols_to_destroy){
return (function (m){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"destroy","destroy",-843660405),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(m));
});})(new_mols,mols_to_destroy))
,new_mols);
cljs.core.mapv.call(null,((function (new_mols,mols_to_destroy,mols_to_bounce){
return (function (m){
return cljs.core.swap_BANG_.call(null,dining_philosophers.core.world,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
});})(new_mols,mols_to_destroy,mols_to_bounce))
,mols_to_destroy);

return cljs.core.mapv.call(null,((function (new_mols,mols_to_destroy,mols_to_bounce){
return (function (m){
return cljs.core.swap_BANG_.call(null,dining_philosophers.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),dining_philosophers.core.move_molecule.call(null,dining_philosophers.core.move_molecule.call(null,m,true),false));
});})(new_mols,mols_to_destroy,mols_to_bounce))
,mols_to_bounce);
});
dining_philosophers.core.molecule_reaction = (function molecule_reaction(mol_state){
var c__6593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto__){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto__){
return (function (state_9497){
var state_val_9498 = (state_9497[(1)]);
if((state_val_9498 === (7))){
var inst_9461 = cljs.core.async.timeout.call(null,(60));
var state_9497__$1 = state_9497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9497__$1,(10),inst_9461);
} else {
if((state_val_9498 === (20))){
var inst_9466 = (state_9497[(7)]);
var inst_9477 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_9478 = dining_philosophers.core.move_molecule.call(null,inst_9466,false);
var inst_9479 = cljs.core.swap_BANG_.call(null,dining_philosophers.core.world,cljs.core.assoc,inst_9477,inst_9478);
var state_9497__$1 = state_9497;
var statearr_9499_9535 = state_9497__$1;
(statearr_9499_9535[(2)] = inst_9479);

(statearr_9499_9535[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (1))){
var state_9497__$1 = state_9497;
var statearr_9500_9536 = state_9497__$1;
(statearr_9500_9536[(2)] = null);

(statearr_9500_9536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (4))){
var inst_9454 = cljs.core.deref.call(null,dining_philosophers.core.world);
var inst_9455 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_9456 = cljs.core.get.call(null,inst_9454,inst_9455);
var state_9497__$1 = state_9497;
var statearr_9501_9537 = state_9497__$1;
(statearr_9501_9537[(2)] = inst_9456);

(statearr_9501_9537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (15))){
var state_9497__$1 = state_9497;
var statearr_9502_9538 = state_9497__$1;
(statearr_9502_9538[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (21))){
var state_9497__$1 = state_9497;
var statearr_9504_9539 = state_9497__$1;
(statearr_9504_9539[(2)] = null);

(statearr_9504_9539[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (13))){
var inst_9489 = (state_9497[(2)]);
var state_9497__$1 = (function (){var statearr_9505 = state_9497;
(statearr_9505[(8)] = inst_9489);

return statearr_9505;
})();
var statearr_9506_9540 = state_9497__$1;
(statearr_9506_9540[(2)] = null);

(statearr_9506_9540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (22))){
var inst_9482 = (state_9497[(2)]);
var state_9497__$1 = state_9497;
var statearr_9507_9541 = state_9497__$1;
(statearr_9507_9541[(2)] = inst_9482);

(statearr_9507_9541[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (6))){
var inst_9459 = (state_9497[(2)]);
var state_9497__$1 = state_9497;
if(cljs.core.truth_(inst_9459)){
var statearr_9508_9542 = state_9497__$1;
(statearr_9508_9542[(1)] = (7));

} else {
var statearr_9509_9543 = state_9497__$1;
(statearr_9509_9543[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (17))){
var inst_9466 = (state_9497[(7)]);
var state_9497__$1 = state_9497;
if(cljs.core.truth_(inst_9466)){
var statearr_9510_9544 = state_9497__$1;
(statearr_9510_9544[(1)] = (20));

} else {
var statearr_9511_9545 = state_9497__$1;
(statearr_9511_9545[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (3))){
var inst_9495 = (state_9497[(2)]);
var state_9497__$1 = state_9497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9497__$1,inst_9495);
} else {
if((state_val_9498 === (12))){
var inst_9466 = (state_9497[(7)]);
var inst_9471 = dining_philosophers.core.hatch_QMARK_.call(null,inst_9466);
var state_9497__$1 = state_9497;
if(cljs.core.truth_(inst_9471)){
var statearr_9512_9546 = state_9497__$1;
(statearr_9512_9546[(1)] = (14));

} else {
var statearr_9513_9547 = state_9497__$1;
(statearr_9513_9547[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (2))){
var inst_9452 = (state_9497[(9)]);
var inst_9452__$1 = cljs.core.deref.call(null,dining_philosophers.core.running);
var state_9497__$1 = (function (){var statearr_9514 = state_9497;
(statearr_9514[(9)] = inst_9452__$1);

return statearr_9514;
})();
if(cljs.core.truth_(inst_9452__$1)){
var statearr_9515_9548 = state_9497__$1;
(statearr_9515_9548[(1)] = (4));

} else {
var statearr_9516_9549 = state_9497__$1;
(statearr_9516_9549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (19))){
var inst_9485 = (state_9497[(2)]);
var state_9497__$1 = state_9497;
var statearr_9517_9550 = state_9497__$1;
(statearr_9517_9550[(2)] = inst_9485);

(statearr_9517_9550[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (11))){
var inst_9466 = (state_9497[(7)]);
var inst_9467 = (state_9497[(10)]);
var inst_9469 = dining_philosophers.core.collision_reaction.call(null,inst_9466,inst_9467);
var state_9497__$1 = state_9497;
var statearr_9518_9551 = state_9497__$1;
(statearr_9518_9551[(2)] = inst_9469);

(statearr_9518_9551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (9))){
var inst_9493 = (state_9497[(2)]);
var state_9497__$1 = state_9497;
var statearr_9519_9552 = state_9497__$1;
(statearr_9519_9552[(2)] = inst_9493);

(statearr_9519_9552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (5))){
var inst_9452 = (state_9497[(9)]);
var state_9497__$1 = state_9497;
var statearr_9520_9553 = state_9497__$1;
(statearr_9520_9553[(2)] = inst_9452);

(statearr_9520_9553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (14))){
var inst_9466 = (state_9497[(7)]);
var inst_9473 = dining_philosophers.core.hatch.call(null,inst_9466);
var state_9497__$1 = state_9497;
var statearr_9521_9554 = state_9497__$1;
(statearr_9521_9554[(2)] = inst_9473);

(statearr_9521_9554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (16))){
var inst_9487 = (state_9497[(2)]);
var state_9497__$1 = state_9497;
var statearr_9522_9555 = state_9497__$1;
(statearr_9522_9555[(2)] = inst_9487);

(statearr_9522_9555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (10))){
var inst_9466 = (state_9497[(7)]);
var inst_9467 = (state_9497[(10)]);
var inst_9463 = (state_9497[(2)]);
var inst_9464 = cljs.core.deref.call(null,dining_philosophers.core.world);
var inst_9465 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_9466__$1 = cljs.core.get.call(null,inst_9464,inst_9465);
var inst_9467__$1 = dining_philosophers.core.find_collision.call(null,inst_9466__$1);
var state_9497__$1 = (function (){var statearr_9523 = state_9497;
(statearr_9523[(11)] = inst_9463);

(statearr_9523[(7)] = inst_9466__$1);

(statearr_9523[(10)] = inst_9467__$1);

return statearr_9523;
})();
if(cljs.core.truth_(inst_9467__$1)){
var statearr_9524_9556 = state_9497__$1;
(statearr_9524_9556[(1)] = (11));

} else {
var statearr_9525_9557 = state_9497__$1;
(statearr_9525_9557[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (18))){
var state_9497__$1 = state_9497;
var statearr_9526_9558 = state_9497__$1;
(statearr_9526_9558[(2)] = null);

(statearr_9526_9558[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9498 === (8))){
var state_9497__$1 = state_9497;
var statearr_9527_9559 = state_9497__$1;
(statearr_9527_9559[(2)] = null);

(statearr_9527_9559[(1)] = (9));


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
});})(c__6593__auto__))
;
return ((function (switch__6537__auto__,c__6593__auto__){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_9531 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9531[(0)] = state_machine__6538__auto__);

(statearr_9531[(1)] = (1));

return statearr_9531;
});
var state_machine__6538__auto____1 = (function (state_9497){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_9497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e9532){if((e9532 instanceof Object)){
var ex__6541__auto__ = e9532;
var statearr_9533_9560 = state_9497;
(statearr_9533_9560[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9561 = state_9497;
state_9497 = G__9561;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_9497){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_9497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_9534 = f__6594__auto__.call(null);
(statearr_9534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_9534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto__))
);

return c__6593__auto__;
});
dining_philosophers.core.setup_mols = (function setup_mols(init_mols){
cljs.core.reset_BANG_.call(null,dining_philosophers.core.world,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),init_mols),init_mols));

var seq__9566 = cljs.core.seq.call(null,init_mols);
var chunk__9567 = null;
var count__9568 = (0);
var i__9569 = (0);
while(true){
if((i__9569 < count__9568)){
var mol = cljs.core._nth.call(null,chunk__9567,i__9569);
dining_philosophers.core.molecule_reaction.call(null,mol);

var G__9570 = seq__9566;
var G__9571 = chunk__9567;
var G__9572 = count__9568;
var G__9573 = (i__9569 + (1));
seq__9566 = G__9570;
chunk__9567 = G__9571;
count__9568 = G__9572;
i__9569 = G__9573;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9566);
if(temp__4126__auto__){
var seq__9566__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9566__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__9566__$1);
var G__9574 = cljs.core.chunk_rest.call(null,seq__9566__$1);
var G__9575 = c__4602__auto__;
var G__9576 = cljs.core.count.call(null,c__4602__auto__);
var G__9577 = (0);
seq__9566 = G__9574;
chunk__9567 = G__9575;
count__9568 = G__9576;
i__9569 = G__9577;
continue;
} else {
var mol = cljs.core.first.call(null,seq__9566__$1);
dining_philosophers.core.molecule_reaction.call(null,mol);

var G__9578 = cljs.core.next.call(null,seq__9566__$1);
var G__9579 = null;
var G__9580 = (0);
var G__9581 = (0);
seq__9566 = G__9578;
chunk__9567 = G__9579;
count__9568 = G__9580;
i__9569 = G__9581;
continue;
}
} else {
return null;
}
}
break;
}
});
dining_philosophers.core.tick = (function tick(){
dining_philosophers.core.clear.call(null);

if(cljs.core.truth_(cljs.core.deref.call(null,dining_philosophers.core.running))){
return dining_philosophers.core.draw_molecules.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,dining_philosophers.core.world)));
} else {
return dining_philosophers.core.setLoading.call(null,dining_philosophers.core.context);
}
});
dining_philosophers.core.time_loop = (function time_loop(){
var c__6593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto__){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto__){
return (function (state_9604){
var state_val_9605 = (state_9604[(1)]);
if((state_val_9605 === (2))){
var inst_9600 = (state_9604[(2)]);
var inst_9601 = dining_philosophers.core.tick.call(null);
var inst_9602 = window.requestAnimationFrame(time_loop);
var state_9604__$1 = (function (){var statearr_9606 = state_9604;
(statearr_9606[(7)] = inst_9600);

(statearr_9606[(8)] = inst_9601);

return statearr_9606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9604__$1,inst_9602);
} else {
if((state_val_9605 === (1))){
var inst_9598 = cljs.core.async.timeout.call(null,(30));
var state_9604__$1 = state_9604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9604__$1,(2),inst_9598);
} else {
return null;
}
}
});})(c__6593__auto__))
;
return ((function (switch__6537__auto__,c__6593__auto__){
return (function() {
var state_machine__6538__auto__ = null;
var state_machine__6538__auto____0 = (function (){
var statearr_9610 = [null,null,null,null,null,null,null,null,null];
(statearr_9610[(0)] = state_machine__6538__auto__);

(statearr_9610[(1)] = (1));

return statearr_9610;
});
var state_machine__6538__auto____1 = (function (state_9604){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_9604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e9611){if((e9611 instanceof Object)){
var ex__6541__auto__ = e9611;
var statearr_9612_9614 = state_9604;
(statearr_9612_9614[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9615 = state_9604;
state_9604 = G__9615;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_9604){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_9604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_9613 = f__6594__auto__.call(null);
(statearr_9613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_9613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto__))
);

return c__6593__auto__;
});
dining_philosophers.core.run = (function run(){
return window.requestAnimationFrame((function (_){
return dining_philosophers.core.time_loop.call(null);
}));
});
dining_philosophers.core.start = (function start(){
return cljs.core.reset_BANG_.call(null,dining_philosophers.core.running,true);
});
dining_philosophers.core.stop = (function stop(){
return cljs.core.reset_BANG_.call(null,dining_philosophers.core.running,false);
});
dining_philosophers.core.get_forks = (function get_forks(tp){
var diam = ((2) * new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(tp));
var rest_molecules = cljs.core.remove.call(null,((function (diam){
return (function (b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tp),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b));
});})(diam))
,cljs.core.vals.call(null,cljs.core.deref.call(null,dining_philosophers.core.world)));
var collided_with = cljs.core.filter.call(null,((function (diam,rest_molecules){
return (function (b){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(b))) && (dining_philosophers.core.collide_QMARK_.call(null,b,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tp),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tp),diam));
});})(diam,rest_molecules))
,rest_molecules);
return collided_with;
});
dining_philosophers.core.eat = (function eat(mol){
var forks = dining_philosophers.core.get_forks.call(null,mol);
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,forks))){
var vec__9617 = forks;
var f1 = cljs.core.nth.call(null,vec__9617,(0),null);
var f2 = cljs.core.nth.call(null,vec__9617,(1),null);
cljs.core.swap_BANG_.call(null,dining_philosophers.core.world,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f1),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f2));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eating-philosopher"], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["thinking-philosopher"], null);
}
});
dining_philosophers.core.think = (function think(mol){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["two-forks and thinking-philosopher"], null);
});
dining_philosophers.core.gen_fork_molecule = (function gen_fork_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,0.0,"pink",0.0,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(10),x]);
});
dining_philosophers.core.gen_think_philosopher_molecule = (function gen_think_philosopher_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,0.0,"lightblue",0.0,new cljs.core.Keyword(null,"TP","TP",163239233),cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(20),x]);
});
dining_philosophers.core.gen_eat_philosopher_molecule = (function gen_eat_philosopher_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,0.0,"yellow",0.0,new cljs.core.Keyword(null,"EP","EP",-349959499),cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(20),x]);
});
dining_philosophers.core.gen_eat_molecule = (function gen_eat_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"allowed-arg-val","allowed-arg-val",1907742522)],[y,cljs.core.PersistentVector.EMPTY,0.0,"lightgreen",(cljs.core.rand.call(null) + (1)),dining_philosophers.core.eat,cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(20),x,new cljs.core.Keyword(null,"TP","TP",163239233)]);
});
dining_philosophers.core.gen_think_molecule = (function gen_think_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"allowed-arg-val","allowed-arg-val",1907742522)],[y,cljs.core.PersistentVector.EMPTY,0.0,"orange",(cljs.core.rand.call(null) - (-1)),dining_philosophers.core.think,cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(20),x,new cljs.core.Keyword(null,"EP","EP",-349959499)]);
});
dining_philosophers.core.dining_mols = cljs.core.concat.call(null,cljs.core.mapv.call(null,dining_philosophers.core.gen_fork_molecule,cljs.core.range.call(null,(25),(500),(50)),cljs.core.repeat.call(null,(450))),cljs.core.mapv.call(null,dining_philosophers.core.gen_think_philosopher_molecule,cljs.core.range.call(null,(50),(500),(50)),cljs.core.repeat.call(null,(450))),cljs.core.mapv.call(null,dining_philosophers.core.gen_eat_molecule,cljs.core.range.call(null,(50),(500),(50)),cljs.core.repeat.call(null,(300))),cljs.core.mapv.call(null,dining_philosophers.core.gen_think_molecule,cljs.core.range.call(null,(50),(500),(50)),cljs.core.repeat.call(null,(100))));
dining_philosophers.core.dining_philosophers = (function dining_philosophers__$1(){
return dining_philosophers.core.setup_mols.call(null,dining_philosophers.core.dining_mols);
});
dining_philosophers.core.clear.call(null);
dining_philosophers.core.start.call(null);
dining_philosophers.core.run.call(null);
dining_philosophers.core.dining_philosophers.call(null);
