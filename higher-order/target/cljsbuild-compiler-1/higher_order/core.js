// Compiled by ClojureScript 0.0-2850 {}
goog.provide('higher_order.core');
goog.require('cljs.core');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
higher_order.core.canvas = document.getElementById("higher-order-canvas");
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
higher_order.core.world = (function (){var G__15537 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15537) : cljs.core.atom.call(null,G__15537));
})();
}
higher_order.core.running = (function (){var G__15538 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15538) : cljs.core.atom.call(null,G__15538));
})();
higher_order.core.mol_id_counter = (function (){var G__15539 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15539) : cljs.core.atom.call(null,G__15539));
})();
higher_order.core.setColor = (function setColor(context,color){
context.fillStyle = color;

return context.globalAlpha = higher_order.core.opacity;
});
higher_order.core.setText = (function setText(context,color,style){
context.fillStyle = color;

return context.font = style;
});
higher_order.core.setLoading = (function setLoading(context){
var G__15541 = context;
higher_order.core.setText(G__15541,"grey","bold 30px Arial");

G__15541.fillText("Ready?",(180),(250));

return G__15541;
});
higher_order.core.clear = (function clear(){
var G__15543 = higher_order.core.context;
higher_order.core.setColor(G__15543,higher_order.core.background);

G__15543.fillRect((0),(0),higher_order.core.width,higher_order.core.height);

return G__15543;
});
higher_order.core.draw_circle = (function draw_circle(context,color,diam,x,y){
var G__15545 = context;
higher_order.core.setColor(G__15545,color);

G__15545.beginPath();

G__15545.arc(x,y,diam,(0),((2) * Math.PI),true);

G__15545.closePath();

G__15545.fill();

return G__15545;
});
higher_order.core.draw_molecule = (function draw_molecule(p__15546){
var map__15553 = p__15546;
var map__15553__$1 = ((cljs.core.seq_QMARK_(map__15553))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15553):map__15553);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15553__$1,cljs.core.constant$keyword$46);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15553__$1,cljs.core.constant$keyword$47);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15553__$1,cljs.core.constant$keyword$48);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15553__$1,cljs.core.constant$keyword$49);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15553__$1,cljs.core.constant$keyword$50);
if(cljs.core.truth_(val)){
var display_val = ((cljs.core.fn_QMARK_(val))?"fn":val);
if(cljs.core.fn_QMARK_(val)){
var seq__15554_15559 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))));
var chunk__15555_15560 = null;
var count__15556_15561 = (0);
var i__15557_15562 = (0);
while(true){
if((i__15557_15562 < count__15556_15561)){
var n_15563 = chunk__15555_15560.cljs$core$IIndexed$_nth$arity$2(null,i__15557_15562);
higher_order.core.draw_circle(higher_order.core.context,cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_15563,cljs.core.cycle(higher_order.core.colors))),((n_15563 * 1.5) * higher_order.core.d),x,y);

var G__15564 = seq__15554_15559;
var G__15565 = chunk__15555_15560;
var G__15566 = count__15556_15561;
var G__15567 = (i__15557_15562 + (1));
seq__15554_15559 = G__15564;
chunk__15555_15560 = G__15565;
count__15556_15561 = G__15566;
i__15557_15562 = G__15567;
continue;
} else {
var temp__4126__auto___15568 = cljs.core.seq(seq__15554_15559);
if(temp__4126__auto___15568){
var seq__15554_15569__$1 = temp__4126__auto___15568;
if(cljs.core.chunked_seq_QMARK_(seq__15554_15569__$1)){
var c__4602__auto___15570 = cljs.core.chunk_first(seq__15554_15569__$1);
var G__15571 = cljs.core.chunk_rest(seq__15554_15569__$1);
var G__15572 = c__4602__auto___15570;
var G__15573 = cljs.core.count(c__4602__auto___15570);
var G__15574 = (0);
seq__15554_15559 = G__15571;
chunk__15555_15560 = G__15572;
count__15556_15561 = G__15573;
i__15557_15562 = G__15574;
continue;
} else {
var n_15575 = cljs.core.first(seq__15554_15569__$1);
higher_order.core.draw_circle(higher_order.core.context,cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_15575,cljs.core.cycle(higher_order.core.colors))),((n_15575 * 1.5) * higher_order.core.d),x,y);

var G__15576 = cljs.core.next(seq__15554_15569__$1);
var G__15577 = null;
var G__15578 = (0);
var G__15579 = (0);
seq__15554_15559 = G__15576;
chunk__15555_15560 = G__15577;
count__15556_15561 = G__15578;
i__15557_15562 = G__15579;
continue;
}
} else {
}
}
break;
}
} else {
}

higher_order.core.draw_circle(higher_order.core.context,color,higher_order.core.d,x,y);

var G__15558 = higher_order.core.context;
higher_order.core.setText(G__15558,"black","bold 11px Courier");

G__15558.fillText([cljs.core.str(display_val)].join(''),(x - (7)),(y + (5)));

return G__15558;
} else {
return null;
}
});
higher_order.core.draw_molecules = (function draw_molecules(state){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(higher_order.core.draw_molecule,state));
});
higher_order.core.move_molecule = (function move_molecule(p__15580,collide_QMARK_){
var map__15582 = p__15580;
var map__15582__$1 = ((cljs.core.seq_QMARK_(map__15582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15582):map__15582);
var molecule = map__15582__$1;
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15582__$1,cljs.core.constant$keyword$51);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15582__$1,cljs.core.constant$keyword$52);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15582__$1,cljs.core.constant$keyword$49);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15582__$1,cljs.core.constant$keyword$50);
var dx__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dx):dx);
var dy__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dy):dy);
var mx = ((dx__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int(higher_order.core.d):higher_order.core.step)) + x);
var my = ((dy__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int(higher_order.core.d):higher_order.core.step)) + y);
var newx = ((((((2) * higher_order.core.d) + higher_order.core.width) < mx))?(dx__$1 * higher_order.core.step):mx);
var newx__$1 = ((((- ((2) * higher_order.core.d)) > newx))?(higher_order.core.width - mx):newx);
var newy = ((((((2) * higher_order.core.d) + higher_order.core.height) < my))?(dy__$1 * higher_order.core.step):my);
var newy__$1 = ((((- ((2) * higher_order.core.d)) > newy))?(higher_order.core.height - my):newy);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([molecule,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$50,newx__$1,cljs.core.constant$keyword$49,newy__$1,cljs.core.constant$keyword$52,dx__$1,cljs.core.constant$keyword$51,dy__$1], null)], 0));
});
higher_order.core.pick_color = (function pick_color(){
return cljs.core.first(cljs.core.shuffle(higher_order.core.colors));
});
higher_order.core.rand_dx_dy = (function rand_dx_dy(){
var multiplier = (((0.5 > cljs.core.rand.cljs$core$IFn$_invoke$arity$0()))?(-1):(1));
var speed = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return (multiplier * speed);
});
higher_order.core.collide_QMARK_ = (function collide_QMARK_(molecule,x,y,molecule_d){
var dx = (function (){var G__15585 = (cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(molecule) - x);
return (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(G__15585) : Math.abs.call(null,G__15585));
})();
var dy = (function (){var G__15586 = (cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(molecule) - y);
return (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(G__15586) : Math.abs.call(null,G__15586));
})();
return ((molecule_d > dx)) && ((molecule_d > dy));
});
higher_order.core.gen_molecule = (function gen_molecule(val){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,cljs.core.rand_int(higher_order.core.width),cljs.core.constant$keyword$49,cljs.core.rand_int(higher_order.core.height),cljs.core.constant$keyword$48,val,cljs.core.constant$keyword$47,cljs.core.rand_nth(higher_order.core.colors),cljs.core.constant$keyword$52,((0.5 + cljs.core.rand_int((3))) * higher_order.core.rand_dx_dy()),cljs.core.constant$keyword$51,((0.5 + cljs.core.rand_int((3))) * higher_order.core.rand_dx_dy()),cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY], null);
});
higher_order.core.gen_molecules = (function gen_molecules(vals){
var n = cljs.core.count(vals);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(higher_order.core.gen_molecule,vals);
});
higher_order.core.find_collision = (function find_collision(molecule){
var rest_molecules = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(molecule),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.vals((function (){var G__15588 = higher_order.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15588) : cljs.core.deref.call(null,G__15588));
})()));
var collided_with = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (rest_molecules){
return (function (b){
return higher_order.core.collide_QMARK_(b,cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(molecule),cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(molecule),higher_order.core.d);
});})(rest_molecules))
,rest_molecules);
return cljs.core.first(collided_with);
});
higher_order.core.react_fn_ready_to_eval_QMARK_ = (function react_fn_ready_to_eval_QMARK_(react_fn,arglist){
var react_fn_args_list = react_fn.length;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(react_fn_args_list,cljs.core.count(arglist));
});
higher_order.core.higher_order_eval = (function higher_order_eval(fn_mol){
var react_fn = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_args = cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(fn_mol);
var result_vals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(react_fn,react_args);
var result_mols = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (react_fn,react_args,result_vals){
return (function (p1__15589_SHARP_){
return higher_order.core.gen_molecule(p1__15589_SHARP_);
});})(react_fn,react_args,result_vals))
,result_vals);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (react_fn,react_args,result_vals,result_mols){
return (function (p1__15590_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__15590_SHARP_,cljs.core.constant$keyword$50,(higher_order.core.d + cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(fn_mol)),cljs.core.array_seq([cljs.core.constant$keyword$49,(higher_order.core.d + cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(fn_mol))], 0));
});})(react_fn,react_args,result_vals,result_mols))
,result_mols);
});
higher_order.core.higher_order_capture = (function higher_order_capture(fn_mol,val_mol){
var react_fn_args = cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_fn = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(fn_mol);
if(higher_order.core.react_fn_ready_to_eval_QMARK_(react_fn,react_fn_args)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_mol,val_mol], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fn_mol,cljs.core.constant$keyword$46,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(react_fn_args,cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(val_mol))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(val_mol,cljs.core.constant$keyword$48,cljs.core.constant$keyword$53)], null);
}
});
higher_order.core.higher_order_arg_exchange = (function higher_order_arg_exchange(fn_mol1,fn_mol2){
var fn_args_1_want = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(fn_mol1).length;
var fn_args_1_has = cljs.core.count(cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(fn_mol1));
var will_take = (fn_args_1_want - fn_args_1_has);
var fn_args_2 = cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(fn_mol2);
var new_fn_args_1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(fn_mol1),cljs.core.take.cljs$core$IFn$_invoke$arity$2(will_take,fn_args_2)));
var new_fn_args_2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(will_take,fn_args_2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fn_mol1,cljs.core.constant$keyword$46,new_fn_args_1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fn_mol2,cljs.core.constant$keyword$46,new_fn_args_2)], null);
});
higher_order.core.higher_order_reaction = (function higher_order_reaction(mol1,mol2){
var v1 = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(mol1);
var v2 = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(mol2);
if((cljs.core.fn_QMARK_(v1)) && (cljs.core.fn_QMARK_(v2))){
return higher_order.core.higher_order_arg_exchange(mol1,mol2);
} else {
if(cljs.core.fn_QMARK_(v1)){
return higher_order.core.higher_order_capture(mol1,mol2);
} else {
if(cljs.core.fn_QMARK_(v2)){
return higher_order.core.higher_order_capture(mol2,mol1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mol1,mol2], null);

}
}
}
});
higher_order.core.hatch_QMARK_ = (function hatch_QMARK_(mstate){
if(cljs.core.fn_QMARK_(cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(mstate))){
return higher_order.core.react_fn_ready_to_eval_QMARK_(cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(mstate),cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(mstate));
} else {
return null;
}
});
higher_order.core.hatch = (function hatch(mstate){
var result_mols = higher_order.core.higher_order_eval(mstate);
var clean_mstate = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mstate,cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(higher_order.core.world,cljs.core.assoc,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(mstate),higher_order.core.move_molecule(higher_order.core.move_molecule(clean_mstate,true),false));

cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (result_mols,clean_mstate){
return (function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(higher_order.core.world,cljs.core.assoc,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(m),higher_order.core.move_molecule(higher_order.core.move_molecule(m,true),false));
});})(result_mols,clean_mstate))
,result_mols);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (result_mols,clean_mstate){
return (function (m){
var G__15592 = m;
return (higher_order.core.molecule_reaction.cljs$core$IFn$_invoke$arity$1 ? higher_order.core.molecule_reaction.cljs$core$IFn$_invoke$arity$1(G__15592) : higher_order.core.molecule_reaction.call(null,G__15592));
});})(result_mols,clean_mstate))
,result_mols);
});
higher_order.core.collision_reaction = (function collision_reaction(mstate,collision_mol){
var new_mols = higher_order.core.higher_order_reaction(mstate,collision_mol);
var mols_to_destroy = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (new_mols){
return (function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$53,cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(m));
});})(new_mols))
,new_mols);
var mols_to_bounce = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (new_mols,mols_to_destroy){
return (function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$53,cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(m));
});})(new_mols,mols_to_destroy))
,new_mols);
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_mols,mols_to_destroy,mols_to_bounce){
return (function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(higher_order.core.world,cljs.core.dissoc,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(m));
});})(new_mols,mols_to_destroy,mols_to_bounce))
,mols_to_destroy);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_mols,mols_to_destroy,mols_to_bounce){
return (function (m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(higher_order.core.world,cljs.core.assoc,cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(m),higher_order.core.move_molecule(higher_order.core.move_molecule(m,true),false));
});})(new_mols,mols_to_destroy,mols_to_bounce))
,mols_to_bounce);
});
higher_order.core.molecule_reaction = (function molecule_reaction(mol_state){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_15728){
var state_val_15729 = (state_15728[(1)]);
if((state_val_15729 === (7))){
var inst_15692 = cljs.core.async.timeout((60));
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15728__$1,(10),inst_15692);
} else {
if((state_val_15729 === (20))){
var inst_15697 = (state_15728[(7)]);
var inst_15708 = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_15709 = higher_order.core.move_molecule(inst_15697,false);
var inst_15710 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(higher_order.core.world,cljs.core.assoc,inst_15708,inst_15709);
var state_15728__$1 = state_15728;
var statearr_15730_15769 = state_15728__$1;
(statearr_15730_15769[(2)] = inst_15710);

(statearr_15730_15769[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (1))){
var state_15728__$1 = state_15728;
var statearr_15731_15770 = state_15728__$1;
(statearr_15731_15770[(2)] = null);

(statearr_15731_15770[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (4))){
var inst_15685 = (function (){var G__15732 = higher_order.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15732) : cljs.core.deref.call(null,G__15732));
})();
var inst_15686 = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_15687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15685,inst_15686);
var state_15728__$1 = state_15728;
var statearr_15733_15771 = state_15728__$1;
(statearr_15733_15771[(2)] = inst_15687);

(statearr_15733_15771[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (15))){
var state_15728__$1 = state_15728;
var statearr_15734_15772 = state_15728__$1;
(statearr_15734_15772[(1)] = (17));



return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (21))){
var state_15728__$1 = state_15728;
var statearr_15736_15773 = state_15728__$1;
(statearr_15736_15773[(2)] = null);

(statearr_15736_15773[(1)] = (22));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (13))){
var inst_15720 = (state_15728[(2)]);
var state_15728__$1 = (function (){var statearr_15737 = state_15728;
(statearr_15737[(8)] = inst_15720);

return statearr_15737;
})();
var statearr_15738_15774 = state_15728__$1;
(statearr_15738_15774[(2)] = null);

(statearr_15738_15774[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (22))){
var inst_15713 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15739_15775 = state_15728__$1;
(statearr_15739_15775[(2)] = inst_15713);

(statearr_15739_15775[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (6))){
var inst_15690 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
if(cljs.core.truth_(inst_15690)){
var statearr_15740_15776 = state_15728__$1;
(statearr_15740_15776[(1)] = (7));

} else {
var statearr_15741_15777 = state_15728__$1;
(statearr_15741_15777[(1)] = (8));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (17))){
var inst_15697 = (state_15728[(7)]);
var state_15728__$1 = state_15728;
if(cljs.core.truth_(inst_15697)){
var statearr_15742_15778 = state_15728__$1;
(statearr_15742_15778[(1)] = (20));

} else {
var statearr_15743_15779 = state_15728__$1;
(statearr_15743_15779[(1)] = (21));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (3))){
var inst_15726 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15728__$1,inst_15726);
} else {
if((state_val_15729 === (12))){
var inst_15697 = (state_15728[(7)]);
var inst_15702 = higher_order.core.hatch_QMARK_(inst_15697);
var state_15728__$1 = state_15728;
if(cljs.core.truth_(inst_15702)){
var statearr_15744_15780 = state_15728__$1;
(statearr_15744_15780[(1)] = (14));

} else {
var statearr_15745_15781 = state_15728__$1;
(statearr_15745_15781[(1)] = (15));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (2))){
var inst_15683 = (state_15728[(9)]);
var inst_15683__$1 = (function (){var G__15746 = higher_order.core.running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15746) : cljs.core.deref.call(null,G__15746));
})();
var state_15728__$1 = (function (){var statearr_15747 = state_15728;
(statearr_15747[(9)] = inst_15683__$1);

return statearr_15747;
})();
if(cljs.core.truth_(inst_15683__$1)){
var statearr_15748_15782 = state_15728__$1;
(statearr_15748_15782[(1)] = (4));

} else {
var statearr_15749_15783 = state_15728__$1;
(statearr_15749_15783[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (19))){
var inst_15716 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15750_15784 = state_15728__$1;
(statearr_15750_15784[(2)] = inst_15716);

(statearr_15750_15784[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (11))){
var inst_15697 = (state_15728[(7)]);
var inst_15698 = (state_15728[(10)]);
var inst_15700 = higher_order.core.collision_reaction(inst_15697,inst_15698);
var state_15728__$1 = state_15728;
var statearr_15751_15785 = state_15728__$1;
(statearr_15751_15785[(2)] = inst_15700);

(statearr_15751_15785[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (9))){
var inst_15724 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15752_15786 = state_15728__$1;
(statearr_15752_15786[(2)] = inst_15724);

(statearr_15752_15786[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (5))){
var inst_15683 = (state_15728[(9)]);
var state_15728__$1 = state_15728;
var statearr_15753_15787 = state_15728__$1;
(statearr_15753_15787[(2)] = inst_15683);

(statearr_15753_15787[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (14))){
var inst_15697 = (state_15728[(7)]);
var inst_15704 = higher_order.core.hatch(inst_15697);
var state_15728__$1 = state_15728;
var statearr_15754_15788 = state_15728__$1;
(statearr_15754_15788[(2)] = inst_15704);

(statearr_15754_15788[(1)] = (16));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (16))){
var inst_15718 = (state_15728[(2)]);
var state_15728__$1 = state_15728;
var statearr_15755_15789 = state_15728__$1;
(statearr_15755_15789[(2)] = inst_15718);

(statearr_15755_15789[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (10))){
var inst_15697 = (state_15728[(7)]);
var inst_15698 = (state_15728[(10)]);
var inst_15694 = (state_15728[(2)]);
var inst_15695 = (function (){var G__15756 = higher_order.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15756) : cljs.core.deref.call(null,G__15756));
})();
var inst_15696 = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_15697__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15695,inst_15696);
var inst_15698__$1 = higher_order.core.find_collision(inst_15697__$1);
var state_15728__$1 = (function (){var statearr_15757 = state_15728;
(statearr_15757[(11)] = inst_15694);

(statearr_15757[(7)] = inst_15697__$1);

(statearr_15757[(10)] = inst_15698__$1);

return statearr_15757;
})();
if(cljs.core.truth_(inst_15698__$1)){
var statearr_15758_15790 = state_15728__$1;
(statearr_15758_15790[(1)] = (11));

} else {
var statearr_15759_15791 = state_15728__$1;
(statearr_15759_15791[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (18))){
var state_15728__$1 = state_15728;
var statearr_15760_15792 = state_15728__$1;
(statearr_15760_15792[(2)] = null);

(statearr_15760_15792[(1)] = (19));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15729 === (8))){
var state_15728__$1 = state_15728;
var statearr_15761_15793 = state_15728__$1;
(statearr_15761_15793[(2)] = null);

(statearr_15761_15793[(1)] = (9));


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
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_15765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15765[(0)] = state_machine__11179__auto__);

(statearr_15765[(1)] = (1));

return statearr_15765;
});
var state_machine__11179__auto____1 = (function (state_15728){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_15728);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e15766){if((e15766 instanceof Object)){
var ex__11182__auto__ = e15766;
var statearr_15767_15794 = state_15728;
(statearr_15767_15794[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15728);

return cljs.core.constant$keyword$21;
} else {
throw e15766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__15795 = state_15728;
state_15728 = G__15795;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_15728){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_15728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_15768 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_15768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_15768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
});
higher_order.core.setup_mols = (function setup_mols(init_mols){
var G__15802_15808 = higher_order.core.world;
var G__15803_15809 = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37,init_mols),init_mols);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15802_15808,G__15803_15809) : cljs.core.reset_BANG_.call(null,G__15802_15808,G__15803_15809));

var seq__15804 = cljs.core.seq(init_mols);
var chunk__15805 = null;
var count__15806 = (0);
var i__15807 = (0);
while(true){
if((i__15807 < count__15806)){
var mol = chunk__15805.cljs$core$IIndexed$_nth$arity$2(null,i__15807);
higher_order.core.molecule_reaction(mol);

var G__15810 = seq__15804;
var G__15811 = chunk__15805;
var G__15812 = count__15806;
var G__15813 = (i__15807 + (1));
seq__15804 = G__15810;
chunk__15805 = G__15811;
count__15806 = G__15812;
i__15807 = G__15813;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15804);
if(temp__4126__auto__){
var seq__15804__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15804__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__15804__$1);
var G__15814 = cljs.core.chunk_rest(seq__15804__$1);
var G__15815 = c__4602__auto__;
var G__15816 = cljs.core.count(c__4602__auto__);
var G__15817 = (0);
seq__15804 = G__15814;
chunk__15805 = G__15815;
count__15806 = G__15816;
i__15807 = G__15817;
continue;
} else {
var mol = cljs.core.first(seq__15804__$1);
higher_order.core.molecule_reaction(mol);

var G__15818 = cljs.core.next(seq__15804__$1);
var G__15819 = null;
var G__15820 = (0);
var G__15821 = (0);
seq__15804 = G__15818;
chunk__15805 = G__15819;
count__15806 = G__15820;
i__15807 = G__15821;
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
var mvals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
var v = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(m);
if((v === (0))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zero! ",m], 0));
} else {
}

if(cljs.core.fn_QMARK_(v)){
return cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(m);
} else {
return v;
}
}),cljs.core.vals((function (){var G__15823 = higher_order.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15823) : cljs.core.deref.call(null,G__15823));
})()));
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(mvals))));
});
higher_order.core.tick = (function tick(){
higher_order.core.clear();

if(cljs.core.truth_((function (){var G__15826 = higher_order.core.running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15826) : cljs.core.deref.call(null,G__15826));
})())){
higher_order.core.draw_molecules(cljs.core.vals((function (){var G__15827 = higher_order.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15827) : cljs.core.deref.call(null,G__15827));
})()));

var answer = higher_order.core.measurement();
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#higher-order-answer",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(answer)].join('')], 0))], 0));
} else {
return higher_order.core.setLoading(higher_order.core.context);
}
});
higher_order.core.time_loop = (function time_loop(){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_15850){
var state_val_15851 = (state_15850[(1)]);
if((state_val_15851 === (2))){
var inst_15846 = (state_15850[(2)]);
var inst_15847 = higher_order.core.tick();
var inst_15848 = window.requestAnimationFrame(time_loop);
var state_15850__$1 = (function (){var statearr_15852 = state_15850;
(statearr_15852[(7)] = inst_15847);

(statearr_15852[(8)] = inst_15846);

return statearr_15852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15850__$1,inst_15848);
} else {
if((state_val_15851 === (1))){
var inst_15844 = cljs.core.async.timeout((30));
var state_15850__$1 = state_15850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15850__$1,(2),inst_15844);
} else {
return null;
}
}
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_15856 = [null,null,null,null,null,null,null,null,null];
(statearr_15856[(0)] = state_machine__11179__auto__);

(statearr_15856[(1)] = (1));

return statearr_15856;
});
var state_machine__11179__auto____1 = (function (state_15850){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_15850);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e15857){if((e15857 instanceof Object)){
var ex__11182__auto__ = e15857;
var statearr_15858_15860 = state_15850;
(statearr_15858_15860[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15850);

return cljs.core.constant$keyword$21;
} else {
throw e15857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__15861 = state_15850;
state_15850 = G__15861;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_15850){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_15850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_15859 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_15859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_15859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
});
higher_order.core.run = (function run(){
return window.requestAnimationFrame((function (_){
return higher_order.core.time_loop();
}));
});
higher_order.core.start = (function start(){
var G__15864 = higher_order.core.running;
var G__15865 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15864,G__15865) : cljs.core.reset_BANG_.call(null,G__15864,G__15865));
});
higher_order.core.stop = (function stop(){
var G__15868 = higher_order.core.running;
var G__15869 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15868,G__15869) : cljs.core.reset_BANG_.call(null,G__15868,G__15869));
});
higher_order.core.restart = (function restart(){
higher_order.core.clear();

return higher_order.core.start();
});
higher_order.core.prime_reaction = (function prime_reaction(a,b){
if(((a > b)) && ((cljs.core.mod(a,b) === (0)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a / b),b], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
});
higher_order.core.prime_reaction_reducing = (function prime_reaction_reducing(a,b){
if(((a > b)) && ((cljs.core.mod(a,b) === (0)))){
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(higher_order.core.gen_molecule(fn),cljs.core.constant$keyword$47,"lightgray");
});
higher_order.core.example_primes_mols = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(200),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(3),cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$47,"red",cljs.core.constant$keyword$52,-0.5,cljs.core.constant$keyword$51,0.0], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(100),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(18),cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$47,"lightgreen",cljs.core.constant$keyword$52,0.5,cljs.core.constant$keyword$51,0.0], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(300),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,higher_order.core.prime_reaction,cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$47,"lightgray",cljs.core.constant$keyword$52,0.3,cljs.core.constant$keyword$51,0.0], null)], null);
higher_order.core.example_primes_reducing_mols = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(200),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(3),cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$47,"red",cljs.core.constant$keyword$52,-0.5,cljs.core.constant$keyword$51,0.0], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(100),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(18),cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$47,"lightgreen",cljs.core.constant$keyword$52,0.5,cljs.core.constant$keyword$51,0.0], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(300),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,higher_order.core.prime_reaction_reducing,cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$47,"lightgray",cljs.core.constant$keyword$52,0.3,cljs.core.constant$keyword$51,0.0], null)], null);
higher_order.core.example_maxs_mols = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(200),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(2),cljs.core.constant$keyword$47,"lightblue",cljs.core.constant$keyword$52,-0.5,cljs.core.constant$keyword$51,0.0], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(100),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(20),cljs.core.constant$keyword$47,"pink",cljs.core.constant$keyword$52,0.5,cljs.core.constant$keyword$51,0.0], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(300),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,higher_order.core.max_reaction,cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$47,"lightgray",cljs.core.constant$keyword$52,0.3,cljs.core.constant$keyword$51,0.0], null)], null);
higher_order.core.example_maxs_reducing_mols = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$37,(1),cljs.core.constant$keyword$50,(200),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(2),cljs.core.constant$keyword$47,"lightblue",cljs.core.constant$keyword$52,-0.5,cljs.core.constant$keyword$51,0.0], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$37,(2),cljs.core.constant$keyword$50,(100),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(20),cljs.core.constant$keyword$47,"pink",cljs.core.constant$keyword$52,0.5,cljs.core.constant$keyword$51,0.0], null),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$37,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(higher_order.core.mol_id_counter,cljs.core.inc),cljs.core.constant$keyword$50,(300),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,higher_order.core.max_reaction_reducing,cljs.core.constant$keyword$46,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$47,"lightgray",cljs.core.constant$keyword$52,0.3,cljs.core.constant$keyword$51,0.0], null)], null);
higher_order.core.small_example_primes = (function small_example_primes(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Higher Order Prime Example with Two Molecules"], 0))], 0));

return higher_order.core.setup_mols(higher_order.core.example_primes_mols);
});
higher_order.core.small_example_primes_reducing = (function small_example_primes_reducing(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Higher Order Reducing Prime Example with Two Molecules"], 0))], 0));

return higher_order.core.setup_mols(higher_order.core.example_primes_reducing_mols);
});
higher_order.core.primes_to_50 = (function primes_to_50(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Primes to 50 with 25 Function Mols"], 0))], 0));

return higher_order.core.setup_mols(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(higher_order.core.gen_molecules(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),(51))),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((25),(function (){
return higher_order.core.gen_function_molecule(higher_order.core.prime_reaction);
}))));
});
higher_order.core.reducing_primes_to_50 = (function reducing_primes_to_50(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reducing Primes to 50 with 25 Function Mols"], 0))], 0));

return higher_order.core.setup_mols(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(higher_order.core.gen_molecules(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),(51))),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((25),(function (){
return higher_order.core.gen_function_molecule(higher_order.core.prime_reaction_reducing);
}))));
});
higher_order.core.small_example_max = (function small_example_max(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Max Example with Two Molecules"], 0))], 0));

return higher_order.core.setup_mols(higher_order.core.example_maxs_mols);
});
higher_order.core.max_to_50 = (function max_to_50(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Max to 50 with 25 Function Mols"], 0))], 0));

return higher_order.core.setup_mols(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(higher_order.core.gen_molecules(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(51))),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((25),(function (){
return higher_order.core.gen_function_molecule(higher_order.core.max_reaction);
}))));
});
higher_order.core.small_example_max_reducing = (function small_example_max_reducing(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reducing Max Example with Two Molecules"], 0))], 0));

return higher_order.core.setup_mols(higher_order.core.example_maxs_reducing_mols);
});
higher_order.core.reducing_max_to_50 = (function reducing_max_to_50(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Reducing Max to 50 with 25 Function Mol"], 0))], 0));

return higher_order.core.setup_mols(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(higher_order.core.gen_molecules(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(51))),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((25),(function (){
return higher_order.core.gen_function_molecule(higher_order.core.max_reaction_reducing);
}))));
});
higher_order.core.clear();
higher_order.core.start();
higher_order.core.run();
higher_order.core.small_example_primes();
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#small-prime-button",cljs.core.array_seq([enfocus.events.listen(cljs.core.constant$keyword$54,(function (){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_15877){
var state_val_15878 = (state_15877[(1)]);
if((state_val_15878 === (2))){
var inst_15873 = (state_15877[(2)]);
var inst_15874 = higher_order.core.restart();
var inst_15875 = higher_order.core.small_example_primes();
var state_15877__$1 = (function (){var statearr_15879 = state_15877;
(statearr_15879[(7)] = inst_15873);

(statearr_15879[(8)] = inst_15874);

return statearr_15879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15877__$1,inst_15875);
} else {
if((state_val_15878 === (1))){
var inst_15870 = higher_order.core.stop();
var inst_15871 = cljs.core.async.timeout((1000));
var state_15877__$1 = (function (){var statearr_15880 = state_15877;
(statearr_15880[(9)] = inst_15870);

return statearr_15880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15877__$1,(2),inst_15871);
} else {
return null;
}
}
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_15884 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15884[(0)] = state_machine__11179__auto__);

(statearr_15884[(1)] = (1));

return statearr_15884;
});
var state_machine__11179__auto____1 = (function (state_15877){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_15877);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e15885){if((e15885 instanceof Object)){
var ex__11182__auto__ = e15885;
var statearr_15886_16014 = state_15877;
(statearr_15886_16014[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15877);

return cljs.core.constant$keyword$21;
} else {
throw e15885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__16015 = state_15877;
state_15877 = G__16015;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_15877){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_15877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_15887 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_15887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_15887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
})),"#small-prime-reducing-button",enfocus.events.listen(cljs.core.constant$keyword$54,(function (){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_15895){
var state_val_15896 = (state_15895[(1)]);
if((state_val_15896 === (2))){
var inst_15891 = (state_15895[(2)]);
var inst_15892 = higher_order.core.restart();
var inst_15893 = higher_order.core.small_example_primes_reducing();
var state_15895__$1 = (function (){var statearr_15897 = state_15895;
(statearr_15897[(7)] = inst_15892);

(statearr_15897[(8)] = inst_15891);

return statearr_15897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15895__$1,inst_15893);
} else {
if((state_val_15896 === (1))){
var inst_15888 = higher_order.core.stop();
var inst_15889 = cljs.core.async.timeout((1000));
var state_15895__$1 = (function (){var statearr_15898 = state_15895;
(statearr_15898[(9)] = inst_15888);

return statearr_15898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15895__$1,(2),inst_15889);
} else {
return null;
}
}
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_15902 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15902[(0)] = state_machine__11179__auto__);

(statearr_15902[(1)] = (1));

return statearr_15902;
});
var state_machine__11179__auto____1 = (function (state_15895){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_15895);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e15903){if((e15903 instanceof Object)){
var ex__11182__auto__ = e15903;
var statearr_15904_16016 = state_15895;
(statearr_15904_16016[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15895);

return cljs.core.constant$keyword$21;
} else {
throw e15903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__16017 = state_15895;
state_15895 = G__16017;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_15895){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_15895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_15905 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_15905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_15905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
})),"#prime-button",enfocus.events.listen(cljs.core.constant$keyword$54,(function (){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_15913){
var state_val_15914 = (state_15913[(1)]);
if((state_val_15914 === (2))){
var inst_15909 = (state_15913[(2)]);
var inst_15910 = higher_order.core.restart();
var inst_15911 = higher_order.core.primes_to_50();
var state_15913__$1 = (function (){var statearr_15915 = state_15913;
(statearr_15915[(7)] = inst_15910);

(statearr_15915[(8)] = inst_15909);

return statearr_15915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15913__$1,inst_15911);
} else {
if((state_val_15914 === (1))){
var inst_15906 = higher_order.core.stop();
var inst_15907 = cljs.core.async.timeout((1000));
var state_15913__$1 = (function (){var statearr_15916 = state_15913;
(statearr_15916[(9)] = inst_15906);

return statearr_15916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15913__$1,(2),inst_15907);
} else {
return null;
}
}
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_15920 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15920[(0)] = state_machine__11179__auto__);

(statearr_15920[(1)] = (1));

return statearr_15920;
});
var state_machine__11179__auto____1 = (function (state_15913){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_15913);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e15921){if((e15921 instanceof Object)){
var ex__11182__auto__ = e15921;
var statearr_15922_16018 = state_15913;
(statearr_15922_16018[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15913);

return cljs.core.constant$keyword$21;
} else {
throw e15921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__16019 = state_15913;
state_15913 = G__16019;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_15913){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_15913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_15923 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_15923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_15923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
})),"#prime-reducing-button",enfocus.events.listen(cljs.core.constant$keyword$54,(function (){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_15931){
var state_val_15932 = (state_15931[(1)]);
if((state_val_15932 === (2))){
var inst_15927 = (state_15931[(2)]);
var inst_15928 = higher_order.core.restart();
var inst_15929 = higher_order.core.reducing_primes_to_50();
var state_15931__$1 = (function (){var statearr_15933 = state_15931;
(statearr_15933[(7)] = inst_15928);

(statearr_15933[(8)] = inst_15927);

return statearr_15933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15931__$1,inst_15929);
} else {
if((state_val_15932 === (1))){
var inst_15924 = higher_order.core.stop();
var inst_15925 = cljs.core.async.timeout((1000));
var state_15931__$1 = (function (){var statearr_15934 = state_15931;
(statearr_15934[(9)] = inst_15924);

return statearr_15934;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15931__$1,(2),inst_15925);
} else {
return null;
}
}
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_15938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15938[(0)] = state_machine__11179__auto__);

(statearr_15938[(1)] = (1));

return statearr_15938;
});
var state_machine__11179__auto____1 = (function (state_15931){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_15931);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e15939){if((e15939 instanceof Object)){
var ex__11182__auto__ = e15939;
var statearr_15940_16020 = state_15931;
(statearr_15940_16020[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15931);

return cljs.core.constant$keyword$21;
} else {
throw e15939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__16021 = state_15931;
state_15931 = G__16021;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_15931){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_15931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_15941 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_15941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_15941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
})),"#small-max-button",enfocus.events.listen(cljs.core.constant$keyword$54,(function (){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_15949){
var state_val_15950 = (state_15949[(1)]);
if((state_val_15950 === (2))){
var inst_15945 = (state_15949[(2)]);
var inst_15946 = higher_order.core.restart();
var inst_15947 = higher_order.core.small_example_max();
var state_15949__$1 = (function (){var statearr_15951 = state_15949;
(statearr_15951[(7)] = inst_15945);

(statearr_15951[(8)] = inst_15946);

return statearr_15951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15949__$1,inst_15947);
} else {
if((state_val_15950 === (1))){
var inst_15942 = higher_order.core.stop();
var inst_15943 = cljs.core.async.timeout((1000));
var state_15949__$1 = (function (){var statearr_15952 = state_15949;
(statearr_15952[(9)] = inst_15942);

return statearr_15952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15949__$1,(2),inst_15943);
} else {
return null;
}
}
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_15956 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15956[(0)] = state_machine__11179__auto__);

(statearr_15956[(1)] = (1));

return statearr_15956;
});
var state_machine__11179__auto____1 = (function (state_15949){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_15949);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e15957){if((e15957 instanceof Object)){
var ex__11182__auto__ = e15957;
var statearr_15958_16022 = state_15949;
(statearr_15958_16022[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15949);

return cljs.core.constant$keyword$21;
} else {
throw e15957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__16023 = state_15949;
state_15949 = G__16023;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_15949){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_15949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_15959 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_15959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_15959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
})),"#max-button",enfocus.events.listen(cljs.core.constant$keyword$54,(function (){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_15967){
var state_val_15968 = (state_15967[(1)]);
if((state_val_15968 === (2))){
var inst_15963 = (state_15967[(2)]);
var inst_15964 = higher_order.core.restart();
var inst_15965 = higher_order.core.max_to_50();
var state_15967__$1 = (function (){var statearr_15969 = state_15967;
(statearr_15969[(7)] = inst_15963);

(statearr_15969[(8)] = inst_15964);

return statearr_15969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15967__$1,inst_15965);
} else {
if((state_val_15968 === (1))){
var inst_15960 = higher_order.core.stop();
var inst_15961 = cljs.core.async.timeout((1000));
var state_15967__$1 = (function (){var statearr_15970 = state_15967;
(statearr_15970[(9)] = inst_15960);

return statearr_15970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15967__$1,(2),inst_15961);
} else {
return null;
}
}
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_15974 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15974[(0)] = state_machine__11179__auto__);

(statearr_15974[(1)] = (1));

return statearr_15974;
});
var state_machine__11179__auto____1 = (function (state_15967){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_15967);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e15975){if((e15975 instanceof Object)){
var ex__11182__auto__ = e15975;
var statearr_15976_16024 = state_15967;
(statearr_15976_16024[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15967);

return cljs.core.constant$keyword$21;
} else {
throw e15975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__16025 = state_15967;
state_15967 = G__16025;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_15967){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_15967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_15977 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_15977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_15977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
})),"#small-max-reducing-button",enfocus.events.listen(cljs.core.constant$keyword$54,(function (){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_15985){
var state_val_15986 = (state_15985[(1)]);
if((state_val_15986 === (2))){
var inst_15981 = (state_15985[(2)]);
var inst_15982 = higher_order.core.restart();
var inst_15983 = higher_order.core.small_example_max_reducing();
var state_15985__$1 = (function (){var statearr_15987 = state_15985;
(statearr_15987[(7)] = inst_15981);

(statearr_15987[(8)] = inst_15982);

return statearr_15987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15985__$1,inst_15983);
} else {
if((state_val_15986 === (1))){
var inst_15978 = higher_order.core.stop();
var inst_15979 = cljs.core.async.timeout((1000));
var state_15985__$1 = (function (){var statearr_15988 = state_15985;
(statearr_15988[(9)] = inst_15978);

return statearr_15988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15985__$1,(2),inst_15979);
} else {
return null;
}
}
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_15992 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15992[(0)] = state_machine__11179__auto__);

(statearr_15992[(1)] = (1));

return statearr_15992;
});
var state_machine__11179__auto____1 = (function (state_15985){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_15985);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e15993){if((e15993 instanceof Object)){
var ex__11182__auto__ = e15993;
var statearr_15994_16026 = state_15985;
(statearr_15994_16026[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15985);

return cljs.core.constant$keyword$21;
} else {
throw e15993;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__16027 = state_15985;
state_15985 = G__16027;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_15985){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_15985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_15995 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_15995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_15995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
})),"#max-reducing-button",enfocus.events.listen(cljs.core.constant$keyword$54,(function (){
var c__11258__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11258__auto__){
return (function (){
var f__11259__auto__ = (function (){var switch__11178__auto__ = ((function (c__11258__auto__){
return (function (state_16003){
var state_val_16004 = (state_16003[(1)]);
if((state_val_16004 === (2))){
var inst_15999 = (state_16003[(2)]);
var inst_16000 = higher_order.core.restart();
var inst_16001 = higher_order.core.reducing_max_to_50();
var state_16003__$1 = (function (){var statearr_16005 = state_16003;
(statearr_16005[(7)] = inst_15999);

(statearr_16005[(8)] = inst_16000);

return statearr_16005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16003__$1,inst_16001);
} else {
if((state_val_16004 === (1))){
var inst_15996 = higher_order.core.stop();
var inst_15997 = cljs.core.async.timeout((1000));
var state_16003__$1 = (function (){var statearr_16006 = state_16003;
(statearr_16006[(9)] = inst_15996);

return statearr_16006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16003__$1,(2),inst_15997);
} else {
return null;
}
}
});})(c__11258__auto__))
;
return ((function (switch__11178__auto__,c__11258__auto__){
return (function() {
var state_machine__11179__auto__ = null;
var state_machine__11179__auto____0 = (function (){
var statearr_16010 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16010[(0)] = state_machine__11179__auto__);

(statearr_16010[(1)] = (1));

return statearr_16010;
});
var state_machine__11179__auto____1 = (function (state_16003){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_16003);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e16011){if((e16011 instanceof Object)){
var ex__11182__auto__ = e16011;
var statearr_16012_16028 = state_16003;
(statearr_16012_16028[(5)] = ex__11182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16003);

return cljs.core.constant$keyword$21;
} else {
throw e16011;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,cljs.core.constant$keyword$21)){
var G__16029 = state_16003;
state_16003 = G__16029;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
state_machine__11179__auto__ = function(state_16003){
switch(arguments.length){
case 0:
return state_machine__11179__auto____0.call(this);
case 1:
return state_machine__11179__auto____1.call(this,state_16003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11179__auto____0;
state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11179__auto____1;
return state_machine__11179__auto__;
})()
;})(switch__11178__auto__,c__11258__auto__))
})();
var state__11260__auto__ = (function (){var statearr_16013 = (function (){return (f__11259__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11259__auto__.cljs$core$IFn$_invoke$arity$0() : f__11259__auto__.call(null));
})();
(statearr_16013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11258__auto__);

return statearr_16013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11260__auto__);
});})(c__11258__auto__))
);

return c__11258__auto__;
}))], 0));
