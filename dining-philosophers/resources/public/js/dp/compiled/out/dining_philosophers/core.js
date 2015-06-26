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
var G__6635 = context;
dining_philosophers.core.setText.call(null,G__6635,"grey","bold 30px Arial");

G__6635.fillText("Ready?",(180),(250));

return G__6635;
});
dining_philosophers.core.clear = (function clear(){
var G__6637 = dining_philosophers.core.context;
dining_philosophers.core.setColor.call(null,G__6637,dining_philosophers.core.background);

G__6637.fillRect((0),(0),dining_philosophers.core.width,dining_philosophers.core.height);

return G__6637;
});
dining_philosophers.core.draw_circle = (function draw_circle(context,color,diam,x,y){
var G__6639 = context;
dining_philosophers.core.setColor.call(null,G__6639,color);

G__6639.beginPath();

G__6639.arc(x,y,diam,(0),((2) * Math.PI),true);

G__6639.closePath();

G__6639.fill();

return G__6639;
});
dining_philosophers.core.draw_molecule = (function draw_molecule(p__6640){
var map__6643 = p__6640;
var map__6643__$1 = ((cljs.core.seq_QMARK_.call(null,map__6643))?cljs.core.apply.call(null,cljs.core.hash_map,map__6643):map__6643);
var args = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var val = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"val","val",128701612));
var d = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.truth_(val)){
var display_val = ((cljs.core._EQ_.call(null,dining_philosophers.core.eat,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"eat","eat",1686757401)):((cljs.core._EQ_.call(null,dining_philosophers.core.think,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"think","think",1767447468)):cljs.core.name.call(null,val)
));
dining_philosophers.core.draw_circle.call(null,dining_philosophers.core.context,color,d,x,y);

var G__6644 = dining_philosophers.core.context;
dining_philosophers.core.setText.call(null,G__6644,"black","bold 11px Courier");

G__6644.fillText([cljs.core.str(display_val)].join(''),(x - (cljs.core.count.call(null,display_val) * (3))),(y + (5)));

return G__6644;
} else {
return null;
}
});
dining_philosophers.core.draw_molecules = (function draw_molecules(state){
return cljs.core.doall.call(null,cljs.core.map.call(null,dining_philosophers.core.draw_molecule,state));
});
dining_philosophers.core.move_molecule = (function move_molecule(p__6645,collide_QMARK_){
var map__6647 = p__6645;
var map__6647__$1 = ((cljs.core.seq_QMARK_.call(null,map__6647))?cljs.core.apply.call(null,cljs.core.hash_map,map__6647):map__6647);
var molecule = map__6647__$1;
var dy = cljs.core.get.call(null,map__6647__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var dx = cljs.core.get.call(null,map__6647__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var d = cljs.core.get.call(null,map__6647__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__6647__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__6647__$1,new cljs.core.Keyword(null,"x","x",2099068185));
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
var G__6649 = val;
switch (G__6649) {
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
return (function (p1__6651_SHARP_){
return dining_philosophers.core.gen_molecule_by_val.call(null,p1__6651_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(fn_mol));
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
var c__6047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6047__auto__){
return (function (){
var f__6048__auto__ = (function (){var switch__6032__auto__ = ((function (c__6047__auto__){
return (function (state_6782){
var state_val_6783 = (state_6782[(1)]);
if((state_val_6783 === (7))){
var inst_6746 = cljs.core.async.timeout.call(null,(60));
var state_6782__$1 = state_6782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6782__$1,(10),inst_6746);
} else {
if((state_val_6783 === (20))){
var inst_6751 = (state_6782[(7)]);
var inst_6762 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_6763 = dining_philosophers.core.move_molecule.call(null,inst_6751,false);
var inst_6764 = cljs.core.swap_BANG_.call(null,dining_philosophers.core.world,cljs.core.assoc,inst_6762,inst_6763);
var state_6782__$1 = state_6782;
var statearr_6784_6820 = state_6782__$1;
(statearr_6784_6820[(2)] = inst_6764);

(statearr_6784_6820[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (1))){
var state_6782__$1 = state_6782;
var statearr_6785_6821 = state_6782__$1;
(statearr_6785_6821[(2)] = null);

(statearr_6785_6821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (4))){
var inst_6739 = cljs.core.deref.call(null,dining_philosophers.core.world);
var inst_6740 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_6741 = cljs.core.get.call(null,inst_6739,inst_6740);
var state_6782__$1 = state_6782;
var statearr_6786_6822 = state_6782__$1;
(statearr_6786_6822[(2)] = inst_6741);

(statearr_6786_6822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (15))){
var state_6782__$1 = state_6782;
var statearr_6787_6823 = state_6782__$1;
(statearr_6787_6823[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (21))){
var state_6782__$1 = state_6782;
var statearr_6789_6824 = state_6782__$1;
(statearr_6789_6824[(2)] = null);

(statearr_6789_6824[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (13))){
var inst_6774 = (state_6782[(2)]);
var state_6782__$1 = (function (){var statearr_6790 = state_6782;
(statearr_6790[(8)] = inst_6774);

return statearr_6790;
})();
var statearr_6791_6825 = state_6782__$1;
(statearr_6791_6825[(2)] = null);

(statearr_6791_6825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (22))){
var inst_6767 = (state_6782[(2)]);
var state_6782__$1 = state_6782;
var statearr_6792_6826 = state_6782__$1;
(statearr_6792_6826[(2)] = inst_6767);

(statearr_6792_6826[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (6))){
var inst_6744 = (state_6782[(2)]);
var state_6782__$1 = state_6782;
if(cljs.core.truth_(inst_6744)){
var statearr_6793_6827 = state_6782__$1;
(statearr_6793_6827[(1)] = (7));

} else {
var statearr_6794_6828 = state_6782__$1;
(statearr_6794_6828[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (17))){
var inst_6751 = (state_6782[(7)]);
var state_6782__$1 = state_6782;
if(cljs.core.truth_(inst_6751)){
var statearr_6795_6829 = state_6782__$1;
(statearr_6795_6829[(1)] = (20));

} else {
var statearr_6796_6830 = state_6782__$1;
(statearr_6796_6830[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (3))){
var inst_6780 = (state_6782[(2)]);
var state_6782__$1 = state_6782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6782__$1,inst_6780);
} else {
if((state_val_6783 === (12))){
var inst_6751 = (state_6782[(7)]);
var inst_6756 = dining_philosophers.core.hatch_QMARK_.call(null,inst_6751);
var state_6782__$1 = state_6782;
if(cljs.core.truth_(inst_6756)){
var statearr_6797_6831 = state_6782__$1;
(statearr_6797_6831[(1)] = (14));

} else {
var statearr_6798_6832 = state_6782__$1;
(statearr_6798_6832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (2))){
var inst_6737 = (state_6782[(9)]);
var inst_6737__$1 = cljs.core.deref.call(null,dining_philosophers.core.running);
var state_6782__$1 = (function (){var statearr_6799 = state_6782;
(statearr_6799[(9)] = inst_6737__$1);

return statearr_6799;
})();
if(cljs.core.truth_(inst_6737__$1)){
var statearr_6800_6833 = state_6782__$1;
(statearr_6800_6833[(1)] = (4));

} else {
var statearr_6801_6834 = state_6782__$1;
(statearr_6801_6834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (19))){
var inst_6770 = (state_6782[(2)]);
var state_6782__$1 = state_6782;
var statearr_6802_6835 = state_6782__$1;
(statearr_6802_6835[(2)] = inst_6770);

(statearr_6802_6835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (11))){
var inst_6752 = (state_6782[(10)]);
var inst_6751 = (state_6782[(7)]);
var inst_6754 = dining_philosophers.core.collision_reaction.call(null,inst_6751,inst_6752);
var state_6782__$1 = state_6782;
var statearr_6803_6836 = state_6782__$1;
(statearr_6803_6836[(2)] = inst_6754);

(statearr_6803_6836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (9))){
var inst_6778 = (state_6782[(2)]);
var state_6782__$1 = state_6782;
var statearr_6804_6837 = state_6782__$1;
(statearr_6804_6837[(2)] = inst_6778);

(statearr_6804_6837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (5))){
var inst_6737 = (state_6782[(9)]);
var state_6782__$1 = state_6782;
var statearr_6805_6838 = state_6782__$1;
(statearr_6805_6838[(2)] = inst_6737);

(statearr_6805_6838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (14))){
var inst_6751 = (state_6782[(7)]);
var inst_6758 = dining_philosophers.core.hatch.call(null,inst_6751);
var state_6782__$1 = state_6782;
var statearr_6806_6839 = state_6782__$1;
(statearr_6806_6839[(2)] = inst_6758);

(statearr_6806_6839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (16))){
var inst_6772 = (state_6782[(2)]);
var state_6782__$1 = state_6782;
var statearr_6807_6840 = state_6782__$1;
(statearr_6807_6840[(2)] = inst_6772);

(statearr_6807_6840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (10))){
var inst_6752 = (state_6782[(10)]);
var inst_6751 = (state_6782[(7)]);
var inst_6748 = (state_6782[(2)]);
var inst_6749 = cljs.core.deref.call(null,dining_philosophers.core.world);
var inst_6750 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_6751__$1 = cljs.core.get.call(null,inst_6749,inst_6750);
var inst_6752__$1 = dining_philosophers.core.find_collision.call(null,inst_6751__$1);
var state_6782__$1 = (function (){var statearr_6808 = state_6782;
(statearr_6808[(11)] = inst_6748);

(statearr_6808[(10)] = inst_6752__$1);

(statearr_6808[(7)] = inst_6751__$1);

return statearr_6808;
})();
if(cljs.core.truth_(inst_6752__$1)){
var statearr_6809_6841 = state_6782__$1;
(statearr_6809_6841[(1)] = (11));

} else {
var statearr_6810_6842 = state_6782__$1;
(statearr_6810_6842[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (18))){
var state_6782__$1 = state_6782;
var statearr_6811_6843 = state_6782__$1;
(statearr_6811_6843[(2)] = null);

(statearr_6811_6843[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6783 === (8))){
var state_6782__$1 = state_6782;
var statearr_6812_6844 = state_6782__$1;
(statearr_6812_6844[(2)] = null);

(statearr_6812_6844[(1)] = (9));


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
});})(c__6047__auto__))
;
return ((function (switch__6032__auto__,c__6047__auto__){
return (function() {
var state_machine__6033__auto__ = null;
var state_machine__6033__auto____0 = (function (){
var statearr_6816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6816[(0)] = state_machine__6033__auto__);

(statearr_6816[(1)] = (1));

return statearr_6816;
});
var state_machine__6033__auto____1 = (function (state_6782){
while(true){
var ret_value__6034__auto__ = (function (){try{while(true){
var result__6035__auto__ = switch__6032__auto__.call(null,state_6782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6035__auto__;
}
break;
}
}catch (e6817){if((e6817 instanceof Object)){
var ex__6036__auto__ = e6817;
var statearr_6818_6845 = state_6782;
(statearr_6818_6845[(5)] = ex__6036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6846 = state_6782;
state_6782 = G__6846;
continue;
} else {
return ret_value__6034__auto__;
}
break;
}
});
state_machine__6033__auto__ = function(state_6782){
switch(arguments.length){
case 0:
return state_machine__6033__auto____0.call(this);
case 1:
return state_machine__6033__auto____1.call(this,state_6782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6033__auto____0;
state_machine__6033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6033__auto____1;
return state_machine__6033__auto__;
})()
;})(switch__6032__auto__,c__6047__auto__))
})();
var state__6049__auto__ = (function (){var statearr_6819 = f__6048__auto__.call(null);
(statearr_6819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6047__auto__);

return statearr_6819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6049__auto__);
});})(c__6047__auto__))
);

return c__6047__auto__;
});
dining_philosophers.core.setup_mols = (function setup_mols(init_mols){
cljs.core.reset_BANG_.call(null,dining_philosophers.core.world,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),init_mols),init_mols));

var seq__6851 = cljs.core.seq.call(null,init_mols);
var chunk__6852 = null;
var count__6853 = (0);
var i__6854 = (0);
while(true){
if((i__6854 < count__6853)){
var mol = cljs.core._nth.call(null,chunk__6852,i__6854);
dining_philosophers.core.molecule_reaction.call(null,mol);

var G__6855 = seq__6851;
var G__6856 = chunk__6852;
var G__6857 = count__6853;
var G__6858 = (i__6854 + (1));
seq__6851 = G__6855;
chunk__6852 = G__6856;
count__6853 = G__6857;
i__6854 = G__6858;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6851);
if(temp__4126__auto__){
var seq__6851__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6851__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__6851__$1);
var G__6859 = cljs.core.chunk_rest.call(null,seq__6851__$1);
var G__6860 = c__4602__auto__;
var G__6861 = cljs.core.count.call(null,c__4602__auto__);
var G__6862 = (0);
seq__6851 = G__6859;
chunk__6852 = G__6860;
count__6853 = G__6861;
i__6854 = G__6862;
continue;
} else {
var mol = cljs.core.first.call(null,seq__6851__$1);
dining_philosophers.core.molecule_reaction.call(null,mol);

var G__6863 = cljs.core.next.call(null,seq__6851__$1);
var G__6864 = null;
var G__6865 = (0);
var G__6866 = (0);
seq__6851 = G__6863;
chunk__6852 = G__6864;
count__6853 = G__6865;
i__6854 = G__6866;
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
var c__6047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6047__auto__){
return (function (){
var f__6048__auto__ = (function (){var switch__6032__auto__ = ((function (c__6047__auto__){
return (function (state_6889){
var state_val_6890 = (state_6889[(1)]);
if((state_val_6890 === (2))){
var inst_6885 = (state_6889[(2)]);
var inst_6886 = dining_philosophers.core.tick.call(null);
var inst_6887 = window.requestAnimationFrame(time_loop);
var state_6889__$1 = (function (){var statearr_6891 = state_6889;
(statearr_6891[(7)] = inst_6885);

(statearr_6891[(8)] = inst_6886);

return statearr_6891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6889__$1,inst_6887);
} else {
if((state_val_6890 === (1))){
var inst_6883 = cljs.core.async.timeout.call(null,(30));
var state_6889__$1 = state_6889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6889__$1,(2),inst_6883);
} else {
return null;
}
}
});})(c__6047__auto__))
;
return ((function (switch__6032__auto__,c__6047__auto__){
return (function() {
var state_machine__6033__auto__ = null;
var state_machine__6033__auto____0 = (function (){
var statearr_6895 = [null,null,null,null,null,null,null,null,null];
(statearr_6895[(0)] = state_machine__6033__auto__);

(statearr_6895[(1)] = (1));

return statearr_6895;
});
var state_machine__6033__auto____1 = (function (state_6889){
while(true){
var ret_value__6034__auto__ = (function (){try{while(true){
var result__6035__auto__ = switch__6032__auto__.call(null,state_6889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6035__auto__;
}
break;
}
}catch (e6896){if((e6896 instanceof Object)){
var ex__6036__auto__ = e6896;
var statearr_6897_6899 = state_6889;
(statearr_6897_6899[(5)] = ex__6036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6900 = state_6889;
state_6889 = G__6900;
continue;
} else {
return ret_value__6034__auto__;
}
break;
}
});
state_machine__6033__auto__ = function(state_6889){
switch(arguments.length){
case 0:
return state_machine__6033__auto____0.call(this);
case 1:
return state_machine__6033__auto____1.call(this,state_6889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6033__auto____0;
state_machine__6033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6033__auto____1;
return state_machine__6033__auto__;
})()
;})(switch__6032__auto__,c__6047__auto__))
})();
var state__6049__auto__ = (function (){var statearr_6898 = f__6048__auto__.call(null);
(statearr_6898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6047__auto__);

return statearr_6898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6049__auto__);
});})(c__6047__auto__))
);

return c__6047__auto__;
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
return (cljs.core._EQ_.call(null,"f",new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(b))) && (dining_philosophers.core.collide_QMARK_.call(null,b,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tp),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(tp),diam));
});})(diam,rest_molecules))
,rest_molecules);
return collided_with;
});
dining_philosophers.core.eat = (function eat(mol){
var forks = dining_philosophers.core.get_forks.call(null,mol);
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,forks))){
var vec__6902 = forks;
var f1 = cljs.core.nth.call(null,vec__6902,(0),null);
var f2 = cljs.core.nth.call(null,vec__6902,(1),null);
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

//# sourceMappingURL=core.js.map?rel=1435341087329