// Compiled by ClojureScript 0.0-2850 {}
goog.provide('dining_philosophers.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
dining_philosophers.core.canvas = document.getElementById("canvas");
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
var G__34739 = context;
dining_philosophers.core.setText.call(null,G__34739,"grey","bold 30px Arial");

G__34739.fillText("Ready?",(180),(250));

return G__34739;
});
dining_philosophers.core.clear = (function clear(){
var G__34741 = dining_philosophers.core.context;
dining_philosophers.core.setColor.call(null,G__34741,dining_philosophers.core.background);

G__34741.fillRect((0),(0),dining_philosophers.core.width,dining_philosophers.core.height);

return G__34741;
});
dining_philosophers.core.draw_circle = (function draw_circle(context,color,diam,x,y){
var G__34743 = context;
dining_philosophers.core.setColor.call(null,G__34743,color);

G__34743.beginPath();

G__34743.arc(x,y,diam,(0),((2) * Math.PI),true);

G__34743.closePath();

G__34743.fill();

return G__34743;
});
dining_philosophers.core.draw_molecule = (function draw_molecule(p__34744){
var map__34747 = p__34744;
var map__34747__$1 = ((cljs.core.seq_QMARK_.call(null,map__34747))?cljs.core.apply.call(null,cljs.core.hash_map,map__34747):map__34747);
var args = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var val = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"val","val",128701612));
var d = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.truth_(val)){
var display_val = ((cljs.core.fn_QMARK_.call(null,val))?val.name:val);
dining_philosophers.core.draw_circle.call(null,dining_philosophers.core.context,color,d,x,y);

var G__34748 = dining_philosophers.core.context;
dining_philosophers.core.setText.call(null,G__34748,"black","bold 11px Courier");

G__34748.fillText([cljs.core.str(display_val)].join(''),(x - (cljs.core.count.call(null,display_val) * (3))),(y + (5)));

return G__34748;
} else {
return null;
}
});
dining_philosophers.core.draw_molecules = (function draw_molecules(state){
return cljs.core.doall.call(null,cljs.core.map.call(null,dining_philosophers.core.draw_molecule,state));
});
dining_philosophers.core.move_molecule = (function move_molecule(p__34749,collide_QMARK_){
var map__34751 = p__34749;
var map__34751__$1 = ((cljs.core.seq_QMARK_.call(null,map__34751))?cljs.core.apply.call(null,cljs.core.hash_map,map__34751):map__34751);
var molecule = map__34751__$1;
var dy = cljs.core.get.call(null,map__34751__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var dx = cljs.core.get.call(null,map__34751__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var d = cljs.core.get.call(null,map__34751__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__34751__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__34751__$1,new cljs.core.Keyword(null,"x","x",2099068185));
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
var G__34753 = val;
switch (G__34753) {
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
return (function (p1__34755_SHARP_){
return dining_philosophers.core.gen_molecule_by_val.call(null,p1__34755_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(fn_mol));
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
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_34886){
var state_val_34887 = (state_34886[(1)]);
if((state_val_34887 === (7))){
var inst_34850 = cljs.core.async.timeout.call(null,(60));
var state_34886__$1 = state_34886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34886__$1,(10),inst_34850);
} else {
if((state_val_34887 === (20))){
var inst_34855 = (state_34886[(7)]);
var inst_34866 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_34867 = dining_philosophers.core.move_molecule.call(null,inst_34855,false);
var inst_34868 = cljs.core.swap_BANG_.call(null,dining_philosophers.core.world,cljs.core.assoc,inst_34866,inst_34867);
var state_34886__$1 = state_34886;
var statearr_34888_34924 = state_34886__$1;
(statearr_34888_34924[(2)] = inst_34868);

(statearr_34888_34924[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (1))){
var state_34886__$1 = state_34886;
var statearr_34889_34925 = state_34886__$1;
(statearr_34889_34925[(2)] = null);

(statearr_34889_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (4))){
var inst_34843 = cljs.core.deref.call(null,dining_philosophers.core.world);
var inst_34844 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_34845 = cljs.core.get.call(null,inst_34843,inst_34844);
var state_34886__$1 = state_34886;
var statearr_34890_34926 = state_34886__$1;
(statearr_34890_34926[(2)] = inst_34845);

(statearr_34890_34926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (15))){
var state_34886__$1 = state_34886;
var statearr_34891_34927 = state_34886__$1;
(statearr_34891_34927[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (21))){
var state_34886__$1 = state_34886;
var statearr_34893_34928 = state_34886__$1;
(statearr_34893_34928[(2)] = null);

(statearr_34893_34928[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (13))){
var inst_34878 = (state_34886[(2)]);
var state_34886__$1 = (function (){var statearr_34894 = state_34886;
(statearr_34894[(8)] = inst_34878);

return statearr_34894;
})();
var statearr_34895_34929 = state_34886__$1;
(statearr_34895_34929[(2)] = null);

(statearr_34895_34929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (22))){
var inst_34871 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
var statearr_34896_34930 = state_34886__$1;
(statearr_34896_34930[(2)] = inst_34871);

(statearr_34896_34930[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (6))){
var inst_34848 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
if(cljs.core.truth_(inst_34848)){
var statearr_34897_34931 = state_34886__$1;
(statearr_34897_34931[(1)] = (7));

} else {
var statearr_34898_34932 = state_34886__$1;
(statearr_34898_34932[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (17))){
var inst_34855 = (state_34886[(7)]);
var state_34886__$1 = state_34886;
if(cljs.core.truth_(inst_34855)){
var statearr_34899_34933 = state_34886__$1;
(statearr_34899_34933[(1)] = (20));

} else {
var statearr_34900_34934 = state_34886__$1;
(statearr_34900_34934[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (3))){
var inst_34884 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34886__$1,inst_34884);
} else {
if((state_val_34887 === (12))){
var inst_34855 = (state_34886[(7)]);
var inst_34860 = dining_philosophers.core.hatch_QMARK_.call(null,inst_34855);
var state_34886__$1 = state_34886;
if(cljs.core.truth_(inst_34860)){
var statearr_34901_34935 = state_34886__$1;
(statearr_34901_34935[(1)] = (14));

} else {
var statearr_34902_34936 = state_34886__$1;
(statearr_34902_34936[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (2))){
var inst_34841 = (state_34886[(9)]);
var inst_34841__$1 = cljs.core.deref.call(null,dining_philosophers.core.running);
var state_34886__$1 = (function (){var statearr_34903 = state_34886;
(statearr_34903[(9)] = inst_34841__$1);

return statearr_34903;
})();
if(cljs.core.truth_(inst_34841__$1)){
var statearr_34904_34937 = state_34886__$1;
(statearr_34904_34937[(1)] = (4));

} else {
var statearr_34905_34938 = state_34886__$1;
(statearr_34905_34938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (19))){
var inst_34874 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
var statearr_34906_34939 = state_34886__$1;
(statearr_34906_34939[(2)] = inst_34874);

(statearr_34906_34939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (11))){
var inst_34856 = (state_34886[(10)]);
var inst_34855 = (state_34886[(7)]);
var inst_34858 = dining_philosophers.core.collision_reaction.call(null,inst_34855,inst_34856);
var state_34886__$1 = state_34886;
var statearr_34907_34940 = state_34886__$1;
(statearr_34907_34940[(2)] = inst_34858);

(statearr_34907_34940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (9))){
var inst_34882 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
var statearr_34908_34941 = state_34886__$1;
(statearr_34908_34941[(2)] = inst_34882);

(statearr_34908_34941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (5))){
var inst_34841 = (state_34886[(9)]);
var state_34886__$1 = state_34886;
var statearr_34909_34942 = state_34886__$1;
(statearr_34909_34942[(2)] = inst_34841);

(statearr_34909_34942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (14))){
var inst_34855 = (state_34886[(7)]);
var inst_34862 = dining_philosophers.core.hatch.call(null,inst_34855);
var state_34886__$1 = state_34886;
var statearr_34910_34943 = state_34886__$1;
(statearr_34910_34943[(2)] = inst_34862);

(statearr_34910_34943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (16))){
var inst_34876 = (state_34886[(2)]);
var state_34886__$1 = state_34886;
var statearr_34911_34944 = state_34886__$1;
(statearr_34911_34944[(2)] = inst_34876);

(statearr_34911_34944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (10))){
var inst_34856 = (state_34886[(10)]);
var inst_34855 = (state_34886[(7)]);
var inst_34852 = (state_34886[(2)]);
var inst_34853 = cljs.core.deref.call(null,dining_philosophers.core.world);
var inst_34854 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_34855__$1 = cljs.core.get.call(null,inst_34853,inst_34854);
var inst_34856__$1 = dining_philosophers.core.find_collision.call(null,inst_34855__$1);
var state_34886__$1 = (function (){var statearr_34912 = state_34886;
(statearr_34912[(10)] = inst_34856__$1);

(statearr_34912[(11)] = inst_34852);

(statearr_34912[(7)] = inst_34855__$1);

return statearr_34912;
})();
if(cljs.core.truth_(inst_34856__$1)){
var statearr_34913_34945 = state_34886__$1;
(statearr_34913_34945[(1)] = (11));

} else {
var statearr_34914_34946 = state_34886__$1;
(statearr_34914_34946[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (18))){
var state_34886__$1 = state_34886;
var statearr_34915_34947 = state_34886__$1;
(statearr_34915_34947[(2)] = null);

(statearr_34915_34947[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34887 === (8))){
var state_34886__$1 = state_34886;
var statearr_34916_34948 = state_34886__$1;
(statearr_34916_34948[(2)] = null);

(statearr_34916_34948[(1)] = (9));


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
});})(c__18618__auto__))
;
return ((function (switch__18562__auto__,c__18618__auto__){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34920 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34920[(0)] = state_machine__18563__auto__);

(statearr_34920[(1)] = (1));

return statearr_34920;
});
var state_machine__18563__auto____1 = (function (state_34886){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e34921){if((e34921 instanceof Object)){
var ex__18566__auto__ = e34921;
var statearr_34922_34949 = state_34886;
(statearr_34922_34949[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34950 = state_34886;
state_34886 = G__34950;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34886){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_34923 = f__18619__auto__.call(null);
(statearr_34923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_34923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
dining_philosophers.core.setup_mols = (function setup_mols(init_mols){
cljs.core.reset_BANG_.call(null,dining_philosophers.core.world,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),init_mols),init_mols));

var seq__34955 = cljs.core.seq.call(null,init_mols);
var chunk__34956 = null;
var count__34957 = (0);
var i__34958 = (0);
while(true){
if((i__34958 < count__34957)){
var mol = cljs.core._nth.call(null,chunk__34956,i__34958);
dining_philosophers.core.molecule_reaction.call(null,mol);

var G__34959 = seq__34955;
var G__34960 = chunk__34956;
var G__34961 = count__34957;
var G__34962 = (i__34958 + (1));
seq__34955 = G__34959;
chunk__34956 = G__34960;
count__34957 = G__34961;
i__34958 = G__34962;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34955);
if(temp__4126__auto__){
var seq__34955__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34955__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__34955__$1);
var G__34963 = cljs.core.chunk_rest.call(null,seq__34955__$1);
var G__34964 = c__16932__auto__;
var G__34965 = cljs.core.count.call(null,c__16932__auto__);
var G__34966 = (0);
seq__34955 = G__34963;
chunk__34956 = G__34964;
count__34957 = G__34965;
i__34958 = G__34966;
continue;
} else {
var mol = cljs.core.first.call(null,seq__34955__$1);
dining_philosophers.core.molecule_reaction.call(null,mol);

var G__34967 = cljs.core.next.call(null,seq__34955__$1);
var G__34968 = null;
var G__34969 = (0);
var G__34970 = (0);
seq__34955 = G__34967;
chunk__34956 = G__34968;
count__34957 = G__34969;
i__34958 = G__34970;
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
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_34993){
var state_val_34994 = (state_34993[(1)]);
if((state_val_34994 === (2))){
var inst_34989 = (state_34993[(2)]);
var inst_34990 = dining_philosophers.core.tick.call(null);
var inst_34991 = window.requestAnimationFrame(time_loop);
var state_34993__$1 = (function (){var statearr_34995 = state_34993;
(statearr_34995[(7)] = inst_34990);

(statearr_34995[(8)] = inst_34989);

return statearr_34995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34993__$1,inst_34991);
} else {
if((state_val_34994 === (1))){
var inst_34987 = cljs.core.async.timeout.call(null,(30));
var state_34993__$1 = state_34993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34993__$1,(2),inst_34987);
} else {
return null;
}
}
});})(c__18618__auto__))
;
return ((function (switch__18562__auto__,c__18618__auto__){
return (function() {
var state_machine__18563__auto__ = null;
var state_machine__18563__auto____0 = (function (){
var statearr_34999 = [null,null,null,null,null,null,null,null,null];
(statearr_34999[(0)] = state_machine__18563__auto__);

(statearr_34999[(1)] = (1));

return statearr_34999;
});
var state_machine__18563__auto____1 = (function (state_34993){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_34993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e35000){if((e35000 instanceof Object)){
var ex__18566__auto__ = e35000;
var statearr_35001_35003 = state_34993;
(statearr_35001_35003[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35004 = state_34993;
state_34993 = G__35004;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_34993){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_34993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_35002 = f__18619__auto__.call(null);
(statearr_35002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_35002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
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
var vec__35006 = forks;
var f1 = cljs.core.nth.call(null,vec__35006,(0),null);
var f2 = cljs.core.nth.call(null,vec__35006,(1),null);
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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,0.0,"pink",0.0,"f",cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(10),x]);
});
dining_philosophers.core.gen_think_philosopher_molecule = (function gen_think_philosopher_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,0.0,"lightblue",0.0,"TP",cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(20),x]);
});
dining_philosophers.core.gen_eat_philosopher_molecule = (function gen_eat_philosopher_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,0.0,"yellow",0.0,"EP",cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(20),x]);
});
dining_philosophers.core.gen_eat_molecule = (function gen_eat_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"allowed-arg-val","allowed-arg-val",1907742522)],[y,cljs.core.PersistentVector.EMPTY,0.0,"lightgreen",(cljs.core.rand.call(null) + (1)),dining_philosophers.core.eat,cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(20),x,"TP"]);
});
dining_philosophers.core.gen_think_molecule = (function gen_think_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"allowed-arg-val","allowed-arg-val",1907742522)],[y,cljs.core.PersistentVector.EMPTY,0.0,"orange",(cljs.core.rand.call(null) - (-1)),dining_philosophers.core.think,cljs.core.swap_BANG_.call(null,dining_philosophers.core.mol_id_counter,cljs.core.inc),(20),x,"EP"]);
});
dining_philosophers.core.dining_mols = cljs.core.concat.call(null,cljs.core.mapv.call(null,dining_philosophers.core.gen_fork_molecule,cljs.core.range.call(null,(25),(500),(50)),cljs.core.repeat.call(null,(450))),cljs.core.mapv.call(null,dining_philosophers.core.gen_think_philosopher_molecule,cljs.core.range.call(null,(50),(500),(50)),cljs.core.repeat.call(null,(450))),cljs.core.mapv.call(null,dining_philosophers.core.gen_eat_molecule,cljs.core.range.call(null,(50),(500),(50)),cljs.core.repeat.call(null,(300))),cljs.core.mapv.call(null,dining_philosophers.core.gen_think_molecule,cljs.core.range.call(null,(50),(500),(50)),cljs.core.repeat.call(null,(100))));
dining_philosophers.core.dining_philosophers = (function dining_philosophers__$1(){
return dining_philosophers.core.setup_mols.call(null,dining_philosophers.core.dining_mols);
});
dining_philosophers.core.clear.call(null);
dining_philosophers.core.start.call(null);
dining_philosophers.core.run.call(null);
dining_philosophers.core.dining_philosophers.call(null);

//# sourceMappingURL=core.js.map?rel=1435016028294