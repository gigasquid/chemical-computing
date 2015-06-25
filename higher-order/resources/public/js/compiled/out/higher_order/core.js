// Compiled by ClojureScript 0.0-2850 {}
goog.provide('higher_order.core');
goog.require('cljs.core');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
higher_order.core.canvas = document.getElementById("canvas");
higher_order.core.context = higher_order.core.canvas.getContext("2d");
higher_order.core.width = higher_order.core.canvas.width;
higher_order.core.height = higher_order.core.canvas.height;
higher_order.core.background = "white";
higher_order.core.d = (10);
higher_order.core.opacity = 1.0;
higher_order.core.step = (2);
higher_order.core.colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","pink","lightblue","green","lightgreen","orange","yellow"], null);
if(typeof higher_order.core.world !== 'undefined'){
} else {
higher_order.core.world = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
higher_order.core.running = cljs.core.atom.call(null,false);
higher_order.core.mol_id_counter = cljs.core.atom.call(null,(0));
higher_order.core.setColor = (function setColor(context,color){
context.fillStyle = color;

return context.globalAlpha = higher_order.core.opacity;
});
higher_order.core.setText = (function setText(context,color,style){
context.fillStyle = color;

return context.font = style;
});
higher_order.core.setLoading = (function setLoading(context){
var G__36192 = context;
higher_order.core.setText.call(null,G__36192,"grey","bold 30px Arial");

G__36192.fillText("Ready?",(180),(250));

return G__36192;
});
higher_order.core.clear = (function clear(){
var G__36194 = higher_order.core.context;
higher_order.core.setColor.call(null,G__36194,higher_order.core.background);

G__36194.fillRect((0),(0),higher_order.core.width,higher_order.core.height);

return G__36194;
});
higher_order.core.draw_circle = (function draw_circle(context,color,diam,x,y){
var G__36196 = context;
higher_order.core.setColor.call(null,G__36196,color);

G__36196.beginPath();

G__36196.arc(x,y,diam,(0),((2) * Math.PI),true);

G__36196.closePath();

G__36196.fill();

return G__36196;
});
higher_order.core.draw_molecule = (function draw_molecule(p__36197){
var map__36204 = p__36197;
var map__36204__$1 = ((cljs.core.seq_QMARK_.call(null,map__36204))?cljs.core.apply.call(null,cljs.core.hash_map,map__36204):map__36204);
var args = cljs.core.get.call(null,map__36204__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.get.call(null,map__36204__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var val = cljs.core.get.call(null,map__36204__$1,new cljs.core.Keyword(null,"val","val",128701612));
var y = cljs.core.get.call(null,map__36204__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__36204__$1,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.truth_(val)){
var display_val = ((cljs.core.fn_QMARK_.call(null,val))?"fn":val);
if(cljs.core.fn_QMARK_.call(null,val)){
var seq__36205_36210 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))));
var chunk__36206_36211 = null;
var count__36207_36212 = (0);
var i__36208_36213 = (0);
while(true){
if((i__36208_36213 < count__36207_36212)){
var n_36214 = cljs.core._nth.call(null,chunk__36206_36211,i__36208_36213);
higher_order.core.draw_circle.call(null,higher_order.core.context,cljs.core.last.call(null,cljs.core.take.call(null,n_36214,cljs.core.cycle.call(null,higher_order.core.colors))),((n_36214 * 1.5) * higher_order.core.d),x,y);

var G__36215 = seq__36205_36210;
var G__36216 = chunk__36206_36211;
var G__36217 = count__36207_36212;
var G__36218 = (i__36208_36213 + (1));
seq__36205_36210 = G__36215;
chunk__36206_36211 = G__36216;
count__36207_36212 = G__36217;
i__36208_36213 = G__36218;
continue;
} else {
var temp__4126__auto___36219 = cljs.core.seq.call(null,seq__36205_36210);
if(temp__4126__auto___36219){
var seq__36205_36220__$1 = temp__4126__auto___36219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36205_36220__$1)){
var c__16932__auto___36221 = cljs.core.chunk_first.call(null,seq__36205_36220__$1);
var G__36222 = cljs.core.chunk_rest.call(null,seq__36205_36220__$1);
var G__36223 = c__16932__auto___36221;
var G__36224 = cljs.core.count.call(null,c__16932__auto___36221);
var G__36225 = (0);
seq__36205_36210 = G__36222;
chunk__36206_36211 = G__36223;
count__36207_36212 = G__36224;
i__36208_36213 = G__36225;
continue;
} else {
var n_36226 = cljs.core.first.call(null,seq__36205_36220__$1);
higher_order.core.draw_circle.call(null,higher_order.core.context,cljs.core.last.call(null,cljs.core.take.call(null,n_36226,cljs.core.cycle.call(null,higher_order.core.colors))),((n_36226 * 1.5) * higher_order.core.d),x,y);

var G__36227 = cljs.core.next.call(null,seq__36205_36220__$1);
var G__36228 = null;
var G__36229 = (0);
var G__36230 = (0);
seq__36205_36210 = G__36227;
chunk__36206_36211 = G__36228;
count__36207_36212 = G__36229;
i__36208_36213 = G__36230;
continue;
}
} else {
}
}
break;
}
} else {
}

higher_order.core.draw_circle.call(null,higher_order.core.context,color,higher_order.core.d,x,y);

var G__36209 = higher_order.core.context;
higher_order.core.setText.call(null,G__36209,"black","bold 11px Courier");

G__36209.fillText([cljs.core.str(display_val)].join(''),(x - (7)),(y + (5)));

return G__36209;
} else {
return null;
}
});
higher_order.core.draw_molecules = (function draw_molecules(state){
return cljs.core.doall.call(null,cljs.core.map.call(null,higher_order.core.draw_molecule,state));
});
higher_order.core.move_molecule = (function move_molecule(p__36231,collide_QMARK_){
var map__36233 = p__36231;
var map__36233__$1 = ((cljs.core.seq_QMARK_.call(null,map__36233))?cljs.core.apply.call(null,cljs.core.hash_map,map__36233):map__36233);
var molecule = map__36233__$1;
var dy = cljs.core.get.call(null,map__36233__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var dx = cljs.core.get.call(null,map__36233__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var y = cljs.core.get.call(null,map__36233__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__36233__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dx__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dx):dx);
var dy__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dy):dy);
var mx = ((dx__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int.call(null,higher_order.core.d):higher_order.core.step)) + x);
var my = ((dy__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int.call(null,higher_order.core.d):higher_order.core.step)) + y);
var newx = ((((((2) * higher_order.core.d) + higher_order.core.width) < mx))?(dx__$1 * higher_order.core.step):mx);
var newx__$1 = ((((- ((2) * higher_order.core.d)) > newx))?(higher_order.core.width - mx):newx);
var newy = ((((((2) * higher_order.core.d) + higher_order.core.height) < my))?(dy__$1 * higher_order.core.step):my);
var newy__$1 = ((((- ((2) * higher_order.core.d)) > newy))?(higher_order.core.height - my):newy);
return cljs.core.merge.call(null,molecule,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),newx__$1,new cljs.core.Keyword(null,"y","y",-1757859776),newy__$1,new cljs.core.Keyword(null,"dx","dx",-381796732),dx__$1,new cljs.core.Keyword(null,"dy","dy",1719547243),dy__$1], null));
});
higher_order.core.pick_color = (function pick_color(){
return cljs.core.first.call(null,cljs.core.shuffle.call(null,higher_order.core.colors));
});
higher_order.core.rand_dx_dy = (function rand_dx_dy(){
var multiplier = (((0.5 > cljs.core.rand.call(null)))?(-1):(1));
var speed = cljs.core.rand.call(null);
return (multiplier * speed);
});
higher_order.core.collide_QMARK_ = (function collide_QMARK_(molecule,x,y,molecule_d){
var dx = Math.abs.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(molecule) - x));
var dy = Math.abs.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(molecule) - y));
return ((molecule_d > dx)) && ((molecule_d > dy));
});
higher_order.core.gen_molecule = (function gen_molecule(val){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,higher_order.core.width),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,higher_order.core.height),new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,higher_order.core.colors),new cljs.core.Keyword(null,"dx","dx",-381796732),((0.5 + cljs.core.rand_int.call(null,(3))) * higher_order.core.rand_dx_dy.call(null)),new cljs.core.Keyword(null,"dy","dy",1719547243),((0.5 + cljs.core.rand_int.call(null,(3))) * higher_order.core.rand_dx_dy.call(null)),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null);
});
higher_order.core.gen_molecules = (function gen_molecules(vals){
var n = cljs.core.count.call(null,vals);
return cljs.core.map.call(null,higher_order.core.gen_molecule,vals);
});
higher_order.core.find_collision = (function find_collision(molecule){
var rest_molecules = cljs.core.remove.call(null,(function (b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,higher_order.core.world)));
var collided_with = cljs.core.filter.call(null,((function (rest_molecules){
return (function (b){
return higher_order.core.collide_QMARK_.call(null,b,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(molecule),higher_order.core.d);
});})(rest_molecules))
,rest_molecules);
return cljs.core.first.call(null,collided_with);
});
higher_order.core.react_fn_ready_to_eval_QMARK_ = (function react_fn_ready_to_eval_QMARK_(react_fn,arglist){
var react_fn_args_list = react_fn.length;
return cljs.core._EQ_.call(null,react_fn_args_list,cljs.core.count.call(null,arglist));
});
higher_order.core.higher_order_eval = (function higher_order_eval(fn_mol){
var react_fn = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_mol);
var result_vals = cljs.core.apply.call(null,react_fn,react_args);
var result_mols = cljs.core.mapv.call(null,((function (react_fn,react_args,result_vals){
return (function (p1__36234_SHARP_){
return higher_order.core.gen_molecule.call(null,p1__36234_SHARP_);
});})(react_fn,react_args,result_vals))
,result_vals);
return cljs.core.mapv.call(null,((function (react_fn,react_args,result_vals,result_mols){
return (function (p1__36235_SHARP_){
return cljs.core.assoc.call(null,p1__36235_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),(higher_order.core.d + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(fn_mol)),new cljs.core.Keyword(null,"y","y",-1757859776),(higher_order.core.d + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(fn_mol)));
});})(react_fn,react_args,result_vals,result_mols))
,result_mols);
});
higher_order.core.higher_order_capture = (function higher_order_capture(fn_mol,val_mol){
var react_fn_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_fn = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(fn_mol);
if(higher_order.core.react_fn_ready_to_eval_QMARK_.call(null,react_fn,react_fn_args)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_mol,val_mol], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,fn_mol,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.conj.call(null,react_fn_args,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(val_mol))),cljs.core.assoc.call(null,val_mol,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"destroy","destroy",-843660405))], null);
}
});
higher_order.core.higher_order_arg_exchange = (function higher_order_arg_exchange(fn_mol1,fn_mol2){
var fn_args_1_want = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(fn_mol1).length;
var fn_args_1_has = cljs.core.count.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_mol1));
var will_take = (fn_args_1_want - fn_args_1_has);
var fn_args_2 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_mol2);
var new_fn_args_1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_mol1),cljs.core.take.call(null,will_take,fn_args_2)));
var new_fn_args_2 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.drop.call(null,will_take,fn_args_2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,fn_mol1,new cljs.core.Keyword(null,"args","args",1315556576),new_fn_args_1),cljs.core.assoc.call(null,fn_mol2,new cljs.core.Keyword(null,"args","args",1315556576),new_fn_args_2)], null);
});
higher_order.core.higher_order_reaction = (function higher_order_reaction(mol1,mol2){
var v1 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol1);
var v2 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol2);
if((cljs.core.fn_QMARK_.call(null,v1)) && (cljs.core.fn_QMARK_.call(null,v2))){
return higher_order.core.higher_order_arg_exchange.call(null,mol1,mol2);
} else {
if(cljs.core.fn_QMARK_.call(null,v1)){
return higher_order.core.higher_order_capture.call(null,mol1,mol2);
} else {
if(cljs.core.fn_QMARK_.call(null,v2)){
return higher_order.core.higher_order_capture.call(null,mol2,mol1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mol1,mol2], null);

}
}
}
});
higher_order.core.hatch_QMARK_ = (function hatch_QMARK_(mstate){
if(cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mstate))){
return higher_order.core.react_fn_ready_to_eval_QMARK_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mstate),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(mstate));
} else {
return null;
}
});
higher_order.core.hatch = (function hatch(mstate){
var result_mols = higher_order.core.higher_order_eval.call(null,mstate);
var clean_mstate = cljs.core.assoc.call(null,mstate,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.call(null,higher_order.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mstate),higher_order.core.move_molecule.call(null,higher_order.core.move_molecule.call(null,clean_mstate,true),false));

cljs.core.mapv.call(null,((function (result_mols,clean_mstate){
return (function (m){
return cljs.core.swap_BANG_.call(null,higher_order.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),higher_order.core.move_molecule.call(null,higher_order.core.move_molecule.call(null,m,true),false));
});})(result_mols,clean_mstate))
,result_mols);

return cljs.core.mapv.call(null,((function (result_mols,clean_mstate){
return (function (m){
return higher_order.core.molecule_reaction.call(null,m);
});})(result_mols,clean_mstate))
,result_mols);
});
higher_order.core.collision_reaction = (function collision_reaction(mstate,collision_mol){
var new_mols = higher_order.core.higher_order_reaction.call(null,mstate,collision_mol);
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
return cljs.core.swap_BANG_.call(null,higher_order.core.world,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
});})(new_mols,mols_to_destroy,mols_to_bounce))
,mols_to_destroy);

return cljs.core.mapv.call(null,((function (new_mols,mols_to_destroy,mols_to_bounce){
return (function (m){
return cljs.core.swap_BANG_.call(null,higher_order.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),higher_order.core.move_molecule.call(null,higher_order.core.move_molecule.call(null,m,true),false));
});})(new_mols,mols_to_destroy,mols_to_bounce))
,mols_to_bounce);
});
higher_order.core.molecule_reaction = (function molecule_reaction(mol_state){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36366){
var state_val_36367 = (state_36366[(1)]);
if((state_val_36367 === (7))){
var inst_36330 = cljs.core.async.timeout.call(null,(60));
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36366__$1,(10),inst_36330);
} else {
if((state_val_36367 === (20))){
var inst_36335 = (state_36366[(7)]);
var inst_36346 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_36347 = higher_order.core.move_molecule.call(null,inst_36335,false);
var inst_36348 = cljs.core.swap_BANG_.call(null,higher_order.core.world,cljs.core.assoc,inst_36346,inst_36347);
var state_36366__$1 = state_36366;
var statearr_36368_36404 = state_36366__$1;
(statearr_36368_36404[(2)] = inst_36348);

(statearr_36368_36404[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (1))){
var state_36366__$1 = state_36366;
var statearr_36369_36405 = state_36366__$1;
(statearr_36369_36405[(2)] = null);

(statearr_36369_36405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (4))){
var inst_36323 = cljs.core.deref.call(null,higher_order.core.world);
var inst_36324 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_36325 = cljs.core.get.call(null,inst_36323,inst_36324);
var state_36366__$1 = state_36366;
var statearr_36370_36406 = state_36366__$1;
(statearr_36370_36406[(2)] = inst_36325);

(statearr_36370_36406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (15))){
var state_36366__$1 = state_36366;
var statearr_36371_36407 = state_36366__$1;
(statearr_36371_36407[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (21))){
var state_36366__$1 = state_36366;
var statearr_36373_36408 = state_36366__$1;
(statearr_36373_36408[(2)] = null);

(statearr_36373_36408[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (13))){
var inst_36358 = (state_36366[(2)]);
var state_36366__$1 = (function (){var statearr_36374 = state_36366;
(statearr_36374[(8)] = inst_36358);

return statearr_36374;
})();
var statearr_36375_36409 = state_36366__$1;
(statearr_36375_36409[(2)] = null);

(statearr_36375_36409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (22))){
var inst_36351 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36376_36410 = state_36366__$1;
(statearr_36376_36410[(2)] = inst_36351);

(statearr_36376_36410[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (6))){
var inst_36328 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
if(cljs.core.truth_(inst_36328)){
var statearr_36377_36411 = state_36366__$1;
(statearr_36377_36411[(1)] = (7));

} else {
var statearr_36378_36412 = state_36366__$1;
(statearr_36378_36412[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (17))){
var inst_36335 = (state_36366[(7)]);
var state_36366__$1 = state_36366;
if(cljs.core.truth_(inst_36335)){
var statearr_36379_36413 = state_36366__$1;
(statearr_36379_36413[(1)] = (20));

} else {
var statearr_36380_36414 = state_36366__$1;
(statearr_36380_36414[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (3))){
var inst_36364 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36366__$1,inst_36364);
} else {
if((state_val_36367 === (12))){
var inst_36335 = (state_36366[(7)]);
var inst_36340 = higher_order.core.hatch_QMARK_.call(null,inst_36335);
var state_36366__$1 = state_36366;
if(cljs.core.truth_(inst_36340)){
var statearr_36381_36415 = state_36366__$1;
(statearr_36381_36415[(1)] = (14));

} else {
var statearr_36382_36416 = state_36366__$1;
(statearr_36382_36416[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (2))){
var inst_36321 = (state_36366[(9)]);
var inst_36321__$1 = cljs.core.deref.call(null,higher_order.core.running);
var state_36366__$1 = (function (){var statearr_36383 = state_36366;
(statearr_36383[(9)] = inst_36321__$1);

return statearr_36383;
})();
if(cljs.core.truth_(inst_36321__$1)){
var statearr_36384_36417 = state_36366__$1;
(statearr_36384_36417[(1)] = (4));

} else {
var statearr_36385_36418 = state_36366__$1;
(statearr_36385_36418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (19))){
var inst_36354 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36386_36419 = state_36366__$1;
(statearr_36386_36419[(2)] = inst_36354);

(statearr_36386_36419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (11))){
var inst_36336 = (state_36366[(10)]);
var inst_36335 = (state_36366[(7)]);
var inst_36338 = higher_order.core.collision_reaction.call(null,inst_36335,inst_36336);
var state_36366__$1 = state_36366;
var statearr_36387_36420 = state_36366__$1;
(statearr_36387_36420[(2)] = inst_36338);

(statearr_36387_36420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (9))){
var inst_36362 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36388_36421 = state_36366__$1;
(statearr_36388_36421[(2)] = inst_36362);

(statearr_36388_36421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (5))){
var inst_36321 = (state_36366[(9)]);
var state_36366__$1 = state_36366;
var statearr_36389_36422 = state_36366__$1;
(statearr_36389_36422[(2)] = inst_36321);

(statearr_36389_36422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (14))){
var inst_36335 = (state_36366[(7)]);
var inst_36342 = higher_order.core.hatch.call(null,inst_36335);
var state_36366__$1 = state_36366;
var statearr_36390_36423 = state_36366__$1;
(statearr_36390_36423[(2)] = inst_36342);

(statearr_36390_36423[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (16))){
var inst_36356 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36391_36424 = state_36366__$1;
(statearr_36391_36424[(2)] = inst_36356);

(statearr_36391_36424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (10))){
var inst_36336 = (state_36366[(10)]);
var inst_36335 = (state_36366[(7)]);
var inst_36332 = (state_36366[(2)]);
var inst_36333 = cljs.core.deref.call(null,higher_order.core.world);
var inst_36334 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_36335__$1 = cljs.core.get.call(null,inst_36333,inst_36334);
var inst_36336__$1 = higher_order.core.find_collision.call(null,inst_36335__$1);
var state_36366__$1 = (function (){var statearr_36392 = state_36366;
(statearr_36392[(10)] = inst_36336__$1);

(statearr_36392[(11)] = inst_36332);

(statearr_36392[(7)] = inst_36335__$1);

return statearr_36392;
})();
if(cljs.core.truth_(inst_36336__$1)){
var statearr_36393_36425 = state_36366__$1;
(statearr_36393_36425[(1)] = (11));

} else {
var statearr_36394_36426 = state_36366__$1;
(statearr_36394_36426[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (18))){
var state_36366__$1 = state_36366;
var statearr_36395_36427 = state_36366__$1;
(statearr_36395_36427[(2)] = null);

(statearr_36395_36427[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (8))){
var state_36366__$1 = state_36366;
var statearr_36396_36428 = state_36366__$1;
(statearr_36396_36428[(2)] = null);

(statearr_36396_36428[(1)] = (9));


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
var statearr_36400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36400[(0)] = state_machine__18563__auto__);

(statearr_36400[(1)] = (1));

return statearr_36400;
});
var state_machine__18563__auto____1 = (function (state_36366){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36401){if((e36401 instanceof Object)){
var ex__18566__auto__ = e36401;
var statearr_36402_36429 = state_36366;
(statearr_36402_36429[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36430 = state_36366;
state_36366 = G__36430;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36366){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36403 = f__18619__auto__.call(null);
(statearr_36403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
higher_order.core.setup_mols = (function setup_mols(init_mols){
cljs.core.reset_BANG_.call(null,higher_order.core.world,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),init_mols),init_mols));

var seq__36435 = cljs.core.seq.call(null,init_mols);
var chunk__36436 = null;
var count__36437 = (0);
var i__36438 = (0);
while(true){
if((i__36438 < count__36437)){
var mol = cljs.core._nth.call(null,chunk__36436,i__36438);
higher_order.core.molecule_reaction.call(null,mol);

var G__36439 = seq__36435;
var G__36440 = chunk__36436;
var G__36441 = count__36437;
var G__36442 = (i__36438 + (1));
seq__36435 = G__36439;
chunk__36436 = G__36440;
count__36437 = G__36441;
i__36438 = G__36442;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__36435);
if(temp__4126__auto__){
var seq__36435__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36435__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__36435__$1);
var G__36443 = cljs.core.chunk_rest.call(null,seq__36435__$1);
var G__36444 = c__16932__auto__;
var G__36445 = cljs.core.count.call(null,c__16932__auto__);
var G__36446 = (0);
seq__36435 = G__36443;
chunk__36436 = G__36444;
count__36437 = G__36445;
i__36438 = G__36446;
continue;
} else {
var mol = cljs.core.first.call(null,seq__36435__$1);
higher_order.core.molecule_reaction.call(null,mol);

var G__36447 = cljs.core.next.call(null,seq__36435__$1);
var G__36448 = null;
var G__36449 = (0);
var G__36450 = (0);
seq__36435 = G__36447;
chunk__36436 = G__36448;
count__36437 = G__36449;
i__36438 = G__36450;
continue;
}
} else {
return null;
}
}
break;
}
});
higher_order.core.measurement = (function measurement(){
var mvals = cljs.core.map.call(null,(function (m){
var v = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(m);
if((v === (0))){
cljs.core.println.call(null,"zero! ",m);
} else {
}

if(cljs.core.fn_QMARK_.call(null,v)){
return new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
} else {
return v;
}
}),cljs.core.vals.call(null,cljs.core.deref.call(null,higher_order.core.world)));
return cljs.core.distinct.call(null,cljs.core.sort.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,mvals))));
});
higher_order.core.tick = (function tick(){
higher_order.core.clear.call(null);

if(cljs.core.truth_(cljs.core.deref.call(null,higher_order.core.running))){
higher_order.core.draw_molecules.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,higher_order.core.world)));

var answer = higher_order.core.measurement.call(null);
return enfocus.core.at.call(null,"#answer",enfocus.core.content.call(null,[cljs.core.str(answer)].join('')));
} else {
return higher_order.core.setLoading.call(null,higher_order.core.context);
}
});
higher_order.core.time_loop = (function time_loop(){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36473){
var state_val_36474 = (state_36473[(1)]);
if((state_val_36474 === (2))){
var inst_36469 = (state_36473[(2)]);
var inst_36470 = higher_order.core.tick.call(null);
var inst_36471 = window.requestAnimationFrame(time_loop);
var state_36473__$1 = (function (){var statearr_36475 = state_36473;
(statearr_36475[(7)] = inst_36470);

(statearr_36475[(8)] = inst_36469);

return statearr_36475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36473__$1,inst_36471);
} else {
if((state_val_36474 === (1))){
var inst_36467 = cljs.core.async.timeout.call(null,(30));
var state_36473__$1 = state_36473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36473__$1,(2),inst_36467);
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
var statearr_36479 = [null,null,null,null,null,null,null,null,null];
(statearr_36479[(0)] = state_machine__18563__auto__);

(statearr_36479[(1)] = (1));

return statearr_36479;
});
var state_machine__18563__auto____1 = (function (state_36473){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36480){if((e36480 instanceof Object)){
var ex__18566__auto__ = e36480;
var statearr_36481_36483 = state_36473;
(statearr_36481_36483[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36484 = state_36473;
state_36473 = G__36484;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36473){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36482 = f__18619__auto__.call(null);
(statearr_36482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
higher_order.core.run = (function run(){
return window.requestAnimationFrame((function (_){
return higher_order.core.time_loop.call(null);
}));
});
higher_order.core.start = (function start(){
return cljs.core.reset_BANG_.call(null,higher_order.core.running,true);
});
higher_order.core.stop = (function stop(){
return cljs.core.reset_BANG_.call(null,higher_order.core.running,false);
});
higher_order.core.restart = (function restart(){
higher_order.core.clear.call(null);

return higher_order.core.start.call(null);
});
higher_order.core.prime_reaction = (function prime_reaction(a,b){
if(((a > b)) && ((cljs.core.mod.call(null,a,b) === (0)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a / b),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
});
higher_order.core.prime_reaction_reducing = (function prime_reaction_reducing(a,b){
if(((a > b)) && ((cljs.core.mod.call(null,a,b) === (0)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
});
higher_order.core.max_reaction = (function max_reaction(a,b){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
});
higher_order.core.max_reaction_reducing = (function max_reaction_reducing(a,b){
if((a > b)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
});
higher_order.core.gen_function_molecule = (function gen_function_molecule(fn){
return cljs.core.assoc.call(null,higher_order.core.gen_molecule.call(null,fn),new cljs.core.Keyword(null,"color","color",1011675173),"lightgray");
});
higher_order.core.example_primes_mols = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(3),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"dx","dx",-381796732),-0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(18),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen",new cljs.core.Keyword(null,"dx","dx",-381796732),0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),higher_order.core.prime_reaction,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),"lightgray",new cljs.core.Keyword(null,"dx","dx",-381796732),0.3,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null)], null);
higher_order.core.example_primes_reducing_mols = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(3),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"dx","dx",-381796732),-0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(18),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen",new cljs.core.Keyword(null,"dx","dx",-381796732),0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),higher_order.core.prime_reaction_reducing,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),"lightgray",new cljs.core.Keyword(null,"dx","dx",-381796732),0.3,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null)], null);
higher_order.core.example_maxs_mols = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(2),new cljs.core.Keyword(null,"color","color",1011675173),"lightblue",new cljs.core.Keyword(null,"dx","dx",-381796732),-0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(20),new cljs.core.Keyword(null,"color","color",1011675173),"pink",new cljs.core.Keyword(null,"dx","dx",-381796732),0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),higher_order.core.max_reaction,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),"lightgray",new cljs.core.Keyword(null,"dx","dx",-381796732),0.3,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null)], null);
higher_order.core.example_maxs_reducing_mols = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(2),new cljs.core.Keyword(null,"color","color",1011675173),"lightblue",new cljs.core.Keyword(null,"dx","dx",-381796732),-0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(20),new cljs.core.Keyword(null,"color","color",1011675173),"pink",new cljs.core.Keyword(null,"dx","dx",-381796732),0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,higher_order.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),higher_order.core.max_reaction_reducing,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"color","color",1011675173),"lightgray",new cljs.core.Keyword(null,"dx","dx",-381796732),0.3,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null)], null);
higher_order.core.small_example_primes = (function small_example_primes(){
enfocus.core.at.call(null,"#experiment-title",enfocus.core.content.call(null,"Higher Order Prime Example with Two Molecules"));

return higher_order.core.setup_mols.call(null,higher_order.core.example_primes_mols);
});
higher_order.core.small_example_primes_reducing = (function small_example_primes_reducing(){
enfocus.core.at.call(null,"#experiment-title",enfocus.core.content.call(null,"Higher Order Reducing Prime Example with Two Molecules"));

return higher_order.core.setup_mols.call(null,higher_order.core.example_primes_reducing_mols);
});
higher_order.core.primes_to_50 = (function primes_to_50(){
enfocus.core.at.call(null,"#experiment-title",enfocus.core.content.call(null,"Primes to 50 with 25 Function Mols"));

return higher_order.core.setup_mols.call(null,cljs.core.concat.call(null,higher_order.core.gen_molecules.call(null,cljs.core.range.call(null,(2),(51))),cljs.core.repeatedly.call(null,(25),(function (){
return higher_order.core.gen_function_molecule.call(null,higher_order.core.prime_reaction);
}))));
});
higher_order.core.reducing_primes_to_50 = (function reducing_primes_to_50(){
enfocus.core.at.call(null,"#experiment-title",enfocus.core.content.call(null,"Reducing Primes to 50 with 25 Function Mols"));

return higher_order.core.setup_mols.call(null,cljs.core.concat.call(null,higher_order.core.gen_molecules.call(null,cljs.core.range.call(null,(2),(51))),cljs.core.repeatedly.call(null,(25),(function (){
return higher_order.core.gen_function_molecule.call(null,higher_order.core.prime_reaction_reducing);
}))));
});
higher_order.core.small_example_max = (function small_example_max(){
enfocus.core.at.call(null,"#experiment-title",enfocus.core.content.call(null,"Max Example with Two Molecules"));

return higher_order.core.setup_mols.call(null,higher_order.core.example_maxs_mols);
});
higher_order.core.max_to_50 = (function max_to_50(){
enfocus.core.at.call(null,"#experiment-title",enfocus.core.content.call(null,"Max to 50 with 25 Function Mols"));

return higher_order.core.setup_mols.call(null,cljs.core.concat.call(null,higher_order.core.gen_molecules.call(null,cljs.core.range.call(null,(1),(51))),cljs.core.repeatedly.call(null,(25),(function (){
return higher_order.core.gen_function_molecule.call(null,higher_order.core.max_reaction);
}))));
});
higher_order.core.small_example_max_reducing = (function small_example_max_reducing(){
enfocus.core.at.call(null,"#experiment-title",enfocus.core.content.call(null,"Reducing Max Example with Two Molecules"));

return higher_order.core.setup_mols.call(null,higher_order.core.example_maxs_reducing_mols);
});
higher_order.core.reducing_max_to_50 = (function reducing_max_to_50(){
enfocus.core.at.call(null,"#experiment-title",enfocus.core.content.call(null,"Reducing Max to 50 with 25 Function Mol"));

return higher_order.core.setup_mols.call(null,cljs.core.concat.call(null,higher_order.core.gen_molecules.call(null,cljs.core.range.call(null,(1),(51))),cljs.core.repeatedly.call(null,(25),(function (){
return higher_order.core.gen_function_molecule.call(null,higher_order.core.max_reaction_reducing);
}))));
});
higher_order.core.clear.call(null);
higher_order.core.start.call(null);
higher_order.core.run.call(null);
higher_order.core.small_example_primes.call(null);
enfocus.core.at.call(null,"#small-prime-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36492){
var state_val_36493 = (state_36492[(1)]);
if((state_val_36493 === (2))){
var inst_36488 = (state_36492[(2)]);
var inst_36489 = higher_order.core.restart.call(null);
var inst_36490 = higher_order.core.small_example_primes.call(null);
var state_36492__$1 = (function (){var statearr_36494 = state_36492;
(statearr_36494[(7)] = inst_36489);

(statearr_36494[(8)] = inst_36488);

return statearr_36494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36492__$1,inst_36490);
} else {
if((state_val_36493 === (1))){
var inst_36485 = higher_order.core.stop.call(null);
var inst_36486 = cljs.core.async.timeout.call(null,(1000));
var state_36492__$1 = (function (){var statearr_36495 = state_36492;
(statearr_36495[(9)] = inst_36485);

return statearr_36495;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36492__$1,(2),inst_36486);
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
var statearr_36499 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36499[(0)] = state_machine__18563__auto__);

(statearr_36499[(1)] = (1));

return statearr_36499;
});
var state_machine__18563__auto____1 = (function (state_36492){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36500){if((e36500 instanceof Object)){
var ex__18566__auto__ = e36500;
var statearr_36501_36629 = state_36492;
(statearr_36501_36629[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36630 = state_36492;
state_36492 = G__36630;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36492){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36502 = f__18619__auto__.call(null);
(statearr_36502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
})),"#small-prime-reducing-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36510){
var state_val_36511 = (state_36510[(1)]);
if((state_val_36511 === (2))){
var inst_36506 = (state_36510[(2)]);
var inst_36507 = higher_order.core.restart.call(null);
var inst_36508 = higher_order.core.small_example_primes_reducing.call(null);
var state_36510__$1 = (function (){var statearr_36512 = state_36510;
(statearr_36512[(7)] = inst_36507);

(statearr_36512[(8)] = inst_36506);

return statearr_36512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36510__$1,inst_36508);
} else {
if((state_val_36511 === (1))){
var inst_36503 = higher_order.core.stop.call(null);
var inst_36504 = cljs.core.async.timeout.call(null,(1000));
var state_36510__$1 = (function (){var statearr_36513 = state_36510;
(statearr_36513[(9)] = inst_36503);

return statearr_36513;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36510__$1,(2),inst_36504);
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
var statearr_36517 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36517[(0)] = state_machine__18563__auto__);

(statearr_36517[(1)] = (1));

return statearr_36517;
});
var state_machine__18563__auto____1 = (function (state_36510){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36518){if((e36518 instanceof Object)){
var ex__18566__auto__ = e36518;
var statearr_36519_36631 = state_36510;
(statearr_36519_36631[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36632 = state_36510;
state_36510 = G__36632;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36510){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36520 = f__18619__auto__.call(null);
(statearr_36520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
})),"#prime-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36528){
var state_val_36529 = (state_36528[(1)]);
if((state_val_36529 === (2))){
var inst_36524 = (state_36528[(2)]);
var inst_36525 = higher_order.core.restart.call(null);
var inst_36526 = higher_order.core.primes_to_50.call(null);
var state_36528__$1 = (function (){var statearr_36530 = state_36528;
(statearr_36530[(7)] = inst_36524);

(statearr_36530[(8)] = inst_36525);

return statearr_36530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36528__$1,inst_36526);
} else {
if((state_val_36529 === (1))){
var inst_36521 = higher_order.core.stop.call(null);
var inst_36522 = cljs.core.async.timeout.call(null,(1000));
var state_36528__$1 = (function (){var statearr_36531 = state_36528;
(statearr_36531[(9)] = inst_36521);

return statearr_36531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36528__$1,(2),inst_36522);
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
var statearr_36535 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36535[(0)] = state_machine__18563__auto__);

(statearr_36535[(1)] = (1));

return statearr_36535;
});
var state_machine__18563__auto____1 = (function (state_36528){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36536){if((e36536 instanceof Object)){
var ex__18566__auto__ = e36536;
var statearr_36537_36633 = state_36528;
(statearr_36537_36633[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36634 = state_36528;
state_36528 = G__36634;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36528){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36538 = f__18619__auto__.call(null);
(statearr_36538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
})),"#prime-reducing-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36546){
var state_val_36547 = (state_36546[(1)]);
if((state_val_36547 === (2))){
var inst_36542 = (state_36546[(2)]);
var inst_36543 = higher_order.core.restart.call(null);
var inst_36544 = higher_order.core.reducing_primes_to_50.call(null);
var state_36546__$1 = (function (){var statearr_36548 = state_36546;
(statearr_36548[(7)] = inst_36543);

(statearr_36548[(8)] = inst_36542);

return statearr_36548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36546__$1,inst_36544);
} else {
if((state_val_36547 === (1))){
var inst_36539 = higher_order.core.stop.call(null);
var inst_36540 = cljs.core.async.timeout.call(null,(1000));
var state_36546__$1 = (function (){var statearr_36549 = state_36546;
(statearr_36549[(9)] = inst_36539);

return statearr_36549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36546__$1,(2),inst_36540);
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
var statearr_36553 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36553[(0)] = state_machine__18563__auto__);

(statearr_36553[(1)] = (1));

return statearr_36553;
});
var state_machine__18563__auto____1 = (function (state_36546){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36554){if((e36554 instanceof Object)){
var ex__18566__auto__ = e36554;
var statearr_36555_36635 = state_36546;
(statearr_36555_36635[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36636 = state_36546;
state_36546 = G__36636;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36546){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36556 = f__18619__auto__.call(null);
(statearr_36556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
})),"#small-max-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36564){
var state_val_36565 = (state_36564[(1)]);
if((state_val_36565 === (2))){
var inst_36560 = (state_36564[(2)]);
var inst_36561 = higher_order.core.restart.call(null);
var inst_36562 = higher_order.core.small_example_max.call(null);
var state_36564__$1 = (function (){var statearr_36566 = state_36564;
(statearr_36566[(7)] = inst_36561);

(statearr_36566[(8)] = inst_36560);

return statearr_36566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36564__$1,inst_36562);
} else {
if((state_val_36565 === (1))){
var inst_36557 = higher_order.core.stop.call(null);
var inst_36558 = cljs.core.async.timeout.call(null,(1000));
var state_36564__$1 = (function (){var statearr_36567 = state_36564;
(statearr_36567[(9)] = inst_36557);

return statearr_36567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36564__$1,(2),inst_36558);
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
var statearr_36571 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36571[(0)] = state_machine__18563__auto__);

(statearr_36571[(1)] = (1));

return statearr_36571;
});
var state_machine__18563__auto____1 = (function (state_36564){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36572){if((e36572 instanceof Object)){
var ex__18566__auto__ = e36572;
var statearr_36573_36637 = state_36564;
(statearr_36573_36637[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36638 = state_36564;
state_36564 = G__36638;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36564){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36574 = f__18619__auto__.call(null);
(statearr_36574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
})),"#max-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36582){
var state_val_36583 = (state_36582[(1)]);
if((state_val_36583 === (2))){
var inst_36578 = (state_36582[(2)]);
var inst_36579 = higher_order.core.restart.call(null);
var inst_36580 = higher_order.core.max_to_50.call(null);
var state_36582__$1 = (function (){var statearr_36584 = state_36582;
(statearr_36584[(7)] = inst_36579);

(statearr_36584[(8)] = inst_36578);

return statearr_36584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36582__$1,inst_36580);
} else {
if((state_val_36583 === (1))){
var inst_36575 = higher_order.core.stop.call(null);
var inst_36576 = cljs.core.async.timeout.call(null,(1000));
var state_36582__$1 = (function (){var statearr_36585 = state_36582;
(statearr_36585[(9)] = inst_36575);

return statearr_36585;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36582__$1,(2),inst_36576);
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
var statearr_36589 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36589[(0)] = state_machine__18563__auto__);

(statearr_36589[(1)] = (1));

return statearr_36589;
});
var state_machine__18563__auto____1 = (function (state_36582){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36590){if((e36590 instanceof Object)){
var ex__18566__auto__ = e36590;
var statearr_36591_36639 = state_36582;
(statearr_36591_36639[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36640 = state_36582;
state_36582 = G__36640;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36582){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36592 = f__18619__auto__.call(null);
(statearr_36592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
})),"#small-max-reducing-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36600){
var state_val_36601 = (state_36600[(1)]);
if((state_val_36601 === (2))){
var inst_36596 = (state_36600[(2)]);
var inst_36597 = higher_order.core.restart.call(null);
var inst_36598 = higher_order.core.small_example_max_reducing.call(null);
var state_36600__$1 = (function (){var statearr_36602 = state_36600;
(statearr_36602[(7)] = inst_36596);

(statearr_36602[(8)] = inst_36597);

return statearr_36602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36600__$1,inst_36598);
} else {
if((state_val_36601 === (1))){
var inst_36593 = higher_order.core.stop.call(null);
var inst_36594 = cljs.core.async.timeout.call(null,(1000));
var state_36600__$1 = (function (){var statearr_36603 = state_36600;
(statearr_36603[(9)] = inst_36593);

return statearr_36603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36600__$1,(2),inst_36594);
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
var statearr_36607 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36607[(0)] = state_machine__18563__auto__);

(statearr_36607[(1)] = (1));

return statearr_36607;
});
var state_machine__18563__auto____1 = (function (state_36600){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36608){if((e36608 instanceof Object)){
var ex__18566__auto__ = e36608;
var statearr_36609_36641 = state_36600;
(statearr_36609_36641[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36642 = state_36600;
state_36600 = G__36642;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36600){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36610 = f__18619__auto__.call(null);
(statearr_36610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
})),"#max-reducing-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_36618){
var state_val_36619 = (state_36618[(1)]);
if((state_val_36619 === (2))){
var inst_36614 = (state_36618[(2)]);
var inst_36615 = higher_order.core.restart.call(null);
var inst_36616 = higher_order.core.reducing_max_to_50.call(null);
var state_36618__$1 = (function (){var statearr_36620 = state_36618;
(statearr_36620[(7)] = inst_36615);

(statearr_36620[(8)] = inst_36614);

return statearr_36620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36618__$1,inst_36616);
} else {
if((state_val_36619 === (1))){
var inst_36611 = higher_order.core.stop.call(null);
var inst_36612 = cljs.core.async.timeout.call(null,(1000));
var state_36618__$1 = (function (){var statearr_36621 = state_36618;
(statearr_36621[(9)] = inst_36611);

return statearr_36621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36618__$1,(2),inst_36612);
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
var statearr_36625 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36625[(0)] = state_machine__18563__auto__);

(statearr_36625[(1)] = (1));

return statearr_36625;
});
var state_machine__18563__auto____1 = (function (state_36618){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_36618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e36626){if((e36626 instanceof Object)){
var ex__18566__auto__ = e36626;
var statearr_36627_36643 = state_36618;
(statearr_36627_36643[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36644 = state_36618;
state_36618 = G__36644;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_36618){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_36618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_36628 = f__18619__auto__.call(null);
(statearr_36628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_36628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
})));

//# sourceMappingURL=core.js.map?rel=1435015658684