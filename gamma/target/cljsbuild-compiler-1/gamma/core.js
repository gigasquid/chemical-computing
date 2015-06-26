// Compiled by ClojureScript 0.0-2850 {}
goog.provide('gamma.core');
goog.require('cljs.core');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
gamma.core.canvas = document.getElementById("canvas");
gamma.core.context = gamma.core.canvas.getContext("2d");
gamma.core.width = gamma.core.canvas.width;
gamma.core.height = gamma.core.canvas.height;
gamma.core.background = "white";
gamma.core.d = (10);
gamma.core.opacity = 1.0;
gamma.core.step = (2);
gamma.core.colors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","pink","lightgray","lightblue","green","lightgreen","orange","yellow"], null);
if(typeof gamma.core.world !== 'undefined'){
} else {
gamma.core.world = (function (){var G__15586 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15586) : cljs.core.atom.call(null,G__15586));
})();
}
gamma.core.running = (function (){var G__15587 = false;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15587) : cljs.core.atom.call(null,G__15587));
})();
gamma.core.setColor = (function setColor(context,color){
context.fillStyle = color;

return context.globalAlpha = gamma.core.opacity;
});
gamma.core.setText = (function setText(context,color,style){
context.fillStyle = color;

return context.font = style;
});
gamma.core.setLoading = (function setLoading(context){
var G__15589 = context;
gamma.core.setText(G__15589,"grey","bold 30px Arial");

G__15589.fillText("Ready?",(180),(250));

return G__15589;
});
gamma.core.clear = (function clear(){
var G__15591 = gamma.core.context;
gamma.core.setColor(G__15591,gamma.core.background);

G__15591.fillRect((0),(0),gamma.core.width,gamma.core.height);

return G__15591;
});
gamma.core.draw_molecule = (function draw_molecule(p__15592){
var map__15596 = p__15592;
var map__15596__$1 = ((cljs.core.seq_QMARK_(map__15596))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15596):map__15596);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.constant$keyword$46);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.constant$keyword$47);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.constant$keyword$48);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15596__$1,cljs.core.constant$keyword$49);
var G__15597_15599 = gamma.core.context;
gamma.core.setColor(G__15597_15599,color);

G__15597_15599.beginPath();

G__15597_15599.arc(x,y,gamma.core.d,(0),((2) * Math.PI),true);

G__15597_15599.closePath();

G__15597_15599.fill();


var G__15598 = gamma.core.context;
gamma.core.setText(G__15598,"black","bold 11px Courier");

G__15598.fillText([cljs.core.str(val)].join(''),(x - (7)),(y + (5)));

return G__15598;
});
gamma.core.draw_molecules = (function draw_molecules(state){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(gamma.core.draw_molecule,state));
});
gamma.core.move_molecule = (function move_molecule(p__15600,collide_QMARK_){
var map__15602 = p__15600;
var map__15602__$1 = ((cljs.core.seq_QMARK_(map__15602))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15602):map__15602);
var molecule = map__15602__$1;
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,cljs.core.constant$keyword$50);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,cljs.core.constant$keyword$51);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,cljs.core.constant$keyword$48);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,cljs.core.constant$keyword$49);
var dx__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dx):dx);
var dy__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dy):dy);
var mx = ((dx__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int(gamma.core.d):gamma.core.step)) + x);
var my = ((dy__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int(gamma.core.d):gamma.core.step)) + y);
var newx = ((((((2) * gamma.core.d) + gamma.core.width) < mx))?(dx__$1 * gamma.core.step):mx);
var newx__$1 = ((((- ((2) * gamma.core.d)) > newx))?(gamma.core.width - mx):newx);
var newy = ((((((2) * gamma.core.d) + gamma.core.height) < my))?(dy__$1 * gamma.core.step):my);
var newy__$1 = ((((- ((2) * gamma.core.d)) > newy))?(gamma.core.height - my):newy);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([molecule,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$49,newx__$1,cljs.core.constant$keyword$48,newy__$1,cljs.core.constant$keyword$51,dx__$1,cljs.core.constant$keyword$50,dy__$1], null)], 0));
});
gamma.core.pick_color = (function pick_color(){
return cljs.core.first(cljs.core.shuffle(gamma.core.colors));
});
gamma.core.rand_dx_dy = (function rand_dx_dy(){
var multiplier = (((0.5 > cljs.core.rand.cljs$core$IFn$_invoke$arity$0()))?(-1):(1));
var speed = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return (multiplier * speed);
});
gamma.core.collide_QMARK_ = (function collide_QMARK_(molecule,x,y,molecule_d){
var dx = (function (){var G__15605 = (cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(molecule) - x);
return (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(G__15605) : Math.abs.call(null,G__15605));
})();
var dy = (function (){var G__15606 = (cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(molecule) - y);
return (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(G__15606) : Math.abs.call(null,G__15606));
})();
return ((molecule_d > dx)) && ((molecule_d > dy));
});
gamma.core.prime_reaction = (function prime_reaction(molecule_a,molecule_b){
var a = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(molecule_a);
var b = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(molecule_b);
if(((a > b)) && ((cljs.core.mod(a,b) === (0)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(molecule_a,cljs.core.constant$keyword$47,(a / b));
} else {
return molecule_a;
}
});
gamma.core.max_reaction = (function max_reaction(molecule_a,molecule_b){
var a = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(molecule_a);
var b = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(molecule_b);
if((b > a)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(molecule_a,cljs.core.constant$keyword$47,b);
} else {
return molecule_a;
}
});
gamma.core.gen_molecule = (function gen_molecule(id,val){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$37,id,cljs.core.constant$keyword$49,cljs.core.rand_int(gamma.core.width),cljs.core.constant$keyword$48,cljs.core.rand_int(gamma.core.height),cljs.core.constant$keyword$47,val,cljs.core.constant$keyword$46,cljs.core.rand_nth(gamma.core.colors),cljs.core.constant$keyword$51,((0.5 + cljs.core.rand_int((3))) * gamma.core.rand_dx_dy()),cljs.core.constant$keyword$50,((0.5 + cljs.core.rand_int((3))) * gamma.core.rand_dx_dy())], null);
});
gamma.core.gen_molecules = (function gen_molecules(vals){
var n = cljs.core.count(vals);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(gamma.core.gen_molecule,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n),vals);
});
gamma.core.find_collision = (function find_collision(molecule){
var rest_molecules = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(molecule),cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.vals((function (){var G__15608 = gamma.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15608) : cljs.core.deref.call(null,G__15608));
})()));
var collided_with = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (rest_molecules){
return (function (b){
return gamma.core.collide_QMARK_(b,cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(molecule),cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(molecule),gamma.core.d);
});})(rest_molecules))
,rest_molecules);
return cljs.core.first(collided_with);
});
gamma.core.molecule_reaction = (function molecule_reaction(mol_state,reaction_fn){
var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__){
return (function (state_15709){
var state_val_15710 = (state_15709[(1)]);
if((state_val_15710 === (7))){
var inst_15683 = (state_15709[(7)]);
var inst_15682 = (state_15709[(8)]);
var inst_15679 = (state_15709[(2)]);
var inst_15680 = (function (){var G__15711 = gamma.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15711) : cljs.core.deref.call(null,G__15711));
})();
var inst_15681 = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_15682__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15680,inst_15681);
var inst_15683__$1 = gamma.core.find_collision(inst_15682__$1);
var state_15709__$1 = (function (){var statearr_15712 = state_15709;
(statearr_15712[(7)] = inst_15683__$1);

(statearr_15712[(9)] = inst_15679);

(statearr_15712[(8)] = inst_15682__$1);

return statearr_15712;
})();
if(cljs.core.truth_(inst_15683__$1)){
var statearr_15713_15739 = state_15709__$1;
(statearr_15713_15739[(1)] = (8));

} else {
var statearr_15714_15740 = state_15709__$1;
(statearr_15714_15740[(1)] = (9));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (1))){
var state_15709__$1 = state_15709;
var statearr_15715_15741 = state_15709__$1;
(statearr_15715_15741[(2)] = null);

(statearr_15715_15741[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (4))){
var inst_15677 = cljs.core.async.timeout((60));
var state_15709__$1 = state_15709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15709__$1,(7),inst_15677);
} else {
if((state_val_15710 === (13))){
var inst_15701 = (state_15709[(2)]);
var state_15709__$1 = (function (){var statearr_15716 = state_15709;
(statearr_15716[(10)] = inst_15701);

return statearr_15716;
})();
var statearr_15717_15742 = state_15709__$1;
(statearr_15717_15742[(2)] = null);

(statearr_15717_15742[(1)] = (2));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (6))){
var inst_15705 = (state_15709[(2)]);
var state_15709__$1 = state_15709;
var statearr_15718_15743 = state_15709__$1;
(statearr_15718_15743[(2)] = inst_15705);

(statearr_15718_15743[(1)] = (3));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (3))){
var inst_15707 = (state_15709[(2)]);
var state_15709__$1 = state_15709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15709__$1,inst_15707);
} else {
if((state_val_15710 === (12))){
var state_15709__$1 = state_15709;
var statearr_15719_15744 = state_15709__$1;
(statearr_15719_15744[(2)] = null);

(statearr_15719_15744[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (2))){
var inst_15675 = (function (){var G__15720 = gamma.core.running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15720) : cljs.core.deref.call(null,G__15720));
})();
var state_15709__$1 = state_15709;
if(cljs.core.truth_(inst_15675)){
var statearr_15721_15745 = state_15709__$1;
(statearr_15721_15745[(1)] = (4));

} else {
var statearr_15722_15746 = state_15709__$1;
(statearr_15722_15746[(1)] = (5));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (11))){
var inst_15683 = (state_15709[(7)]);
var inst_15695 = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(inst_15683);
var inst_15696 = gamma.core.move_molecule(inst_15683,true);
var inst_15697 = gamma.core.move_molecule(inst_15696,false);
var inst_15698 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gamma.core.world,cljs.core.assoc,inst_15695,inst_15697);
var state_15709__$1 = state_15709;
var statearr_15723_15747 = state_15709__$1;
(statearr_15723_15747[(2)] = inst_15698);

(statearr_15723_15747[(1)] = (13));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (9))){
var inst_15682 = (state_15709[(8)]);
var inst_15689 = gamma.core.move_molecule(inst_15682,false);
var state_15709__$1 = state_15709;
var statearr_15724_15748 = state_15709__$1;
(statearr_15724_15748[(2)] = inst_15689);

(statearr_15724_15748[(1)] = (10));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (5))){
var state_15709__$1 = state_15709;
var statearr_15725_15749 = state_15709__$1;
(statearr_15725_15749[(2)] = null);

(statearr_15725_15749[(1)] = (6));


return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (10))){
var inst_15683 = (state_15709[(7)]);
var inst_15691 = (state_15709[(2)]);
var inst_15692 = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_15693 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gamma.core.world,cljs.core.assoc,inst_15692,inst_15691);
var state_15709__$1 = (function (){var statearr_15726 = state_15709;
(statearr_15726[(11)] = inst_15693);

return statearr_15726;
})();
if(cljs.core.truth_(inst_15683)){
var statearr_15727_15750 = state_15709__$1;
(statearr_15727_15750[(1)] = (11));

} else {
var statearr_15728_15751 = state_15709__$1;
(statearr_15728_15751[(1)] = (12));

}

return cljs.core.constant$keyword$21;
} else {
if((state_val_15710 === (8))){
var inst_15683 = (state_15709[(7)]);
var inst_15682 = (state_15709[(8)]);
var inst_15685 = (function (){var G__15729 = inst_15682;
var G__15730 = inst_15683;
return (reaction_fn.cljs$core$IFn$_invoke$arity$2 ? reaction_fn.cljs$core$IFn$_invoke$arity$2(G__15729,G__15730) : reaction_fn.call(null,G__15729,G__15730));
})();
var inst_15686 = gamma.core.move_molecule(inst_15685,true);
var inst_15687 = gamma.core.move_molecule(inst_15686,false);
var state_15709__$1 = state_15709;
var statearr_15731_15752 = state_15709__$1;
(statearr_15731_15752[(2)] = inst_15687);

(statearr_15731_15752[(1)] = (10));


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
});})(c__11307__auto__))
;
return ((function (switch__11227__auto__,c__11307__auto__){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_15735 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15735[(0)] = state_machine__11228__auto__);

(statearr_15735[(1)] = (1));

return statearr_15735;
});
var state_machine__11228__auto____1 = (function (state_15709){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_15709);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e15736){if((e15736 instanceof Object)){
var ex__11231__auto__ = e15736;
var statearr_15737_15753 = state_15709;
(statearr_15737_15753[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15709);

return cljs.core.constant$keyword$21;
} else {
throw e15736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__15754 = state_15709;
state_15709 = G__15754;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_15709){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_15709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__))
})();
var state__11309__auto__ = (function (){var statearr_15738 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_15738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_15738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__))
);

return c__11307__auto__;
});
gamma.core.setup_mols = (function setup_mols(init_mols,reaction_fn){
var G__15761_15767 = gamma.core.world;
var G__15762_15768 = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$37,init_mols),init_mols);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15761_15767,G__15762_15768) : cljs.core.reset_BANG_.call(null,G__15761_15767,G__15762_15768));

var seq__15763 = cljs.core.seq(init_mols);
var chunk__15764 = null;
var count__15765 = (0);
var i__15766 = (0);
while(true){
if((i__15766 < count__15765)){
var mol = chunk__15764.cljs$core$IIndexed$_nth$arity$2(null,i__15766);
gamma.core.molecule_reaction(mol,reaction_fn);

var G__15769 = seq__15763;
var G__15770 = chunk__15764;
var G__15771 = count__15765;
var G__15772 = (i__15766 + (1));
seq__15763 = G__15769;
chunk__15764 = G__15770;
count__15765 = G__15771;
i__15766 = G__15772;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15763);
if(temp__4126__auto__){
var seq__15763__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15763__$1)){
var c__4651__auto__ = cljs.core.chunk_first(seq__15763__$1);
var G__15773 = cljs.core.chunk_rest(seq__15763__$1);
var G__15774 = c__4651__auto__;
var G__15775 = cljs.core.count(c__4651__auto__);
var G__15776 = (0);
seq__15763 = G__15773;
chunk__15764 = G__15774;
count__15765 = G__15775;
i__15766 = G__15776;
continue;
} else {
var mol = cljs.core.first(seq__15763__$1);
gamma.core.molecule_reaction(mol,reaction_fn);

var G__15777 = cljs.core.next(seq__15763__$1);
var G__15778 = null;
var G__15779 = (0);
var G__15780 = (0);
seq__15763 = G__15777;
chunk__15764 = G__15778;
count__15765 = G__15779;
i__15766 = G__15780;
continue;
}
} else {
return null;
}
}
break;
}
});
gamma.core.setup = (function setup(vals,reaction_fn){
var init_mols = gamma.core.gen_molecules(vals);
return gamma.core.setup_mols(init_mols,reaction_fn);
});
gamma.core.measurement = (function measurement(){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$47,cljs.core.vals((function (){var G__15782 = gamma.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15782) : cljs.core.deref.call(null,G__15782));
})()))));
});
gamma.core.tick = (function tick(){
gamma.core.clear();

if(cljs.core.truth_((function (){var G__15785 = gamma.core.running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15785) : cljs.core.deref.call(null,G__15785));
})())){
gamma.core.draw_molecules(cljs.core.vals((function (){var G__15786 = gamma.core.world;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15786) : cljs.core.deref.call(null,G__15786));
})()));

var answer = gamma.core.measurement();
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#answer",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(answer)].join('')], 0)),"#not-primes",enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.last(answer))].join('')], 0))], 0));
} else {
return gamma.core.setLoading(gamma.core.context);
}
});
gamma.core.time_loop = (function time_loop(){
var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__){
return (function (state_15809){
var state_val_15810 = (state_15809[(1)]);
if((state_val_15810 === (2))){
var inst_15805 = (state_15809[(2)]);
var inst_15806 = gamma.core.tick();
var inst_15807 = window.requestAnimationFrame(time_loop);
var state_15809__$1 = (function (){var statearr_15811 = state_15809;
(statearr_15811[(7)] = inst_15806);

(statearr_15811[(8)] = inst_15805);

return statearr_15811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15809__$1,inst_15807);
} else {
if((state_val_15810 === (1))){
var inst_15803 = cljs.core.async.timeout((30));
var state_15809__$1 = state_15809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15809__$1,(2),inst_15803);
} else {
return null;
}
}
});})(c__11307__auto__))
;
return ((function (switch__11227__auto__,c__11307__auto__){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_15815 = [null,null,null,null,null,null,null,null,null];
(statearr_15815[(0)] = state_machine__11228__auto__);

(statearr_15815[(1)] = (1));

return statearr_15815;
});
var state_machine__11228__auto____1 = (function (state_15809){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_15809);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e15816){if((e15816 instanceof Object)){
var ex__11231__auto__ = e15816;
var statearr_15817_15819 = state_15809;
(statearr_15817_15819[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15809);

return cljs.core.constant$keyword$21;
} else {
throw e15816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__15820 = state_15809;
state_15809 = G__15820;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_15809){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_15809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__))
})();
var state__11309__auto__ = (function (){var statearr_15818 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_15818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_15818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__))
);

return c__11307__auto__;
});
gamma.core.run = (function run(){
return window.requestAnimationFrame((function (_){
return gamma.core.time_loop();
}));
});
gamma.core.start = (function start(){
var G__15823 = gamma.core.running;
var G__15824 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15823,G__15824) : cljs.core.reset_BANG_.call(null,G__15823,G__15824));
});
gamma.core.stop = (function stop(){
var G__15827 = gamma.core.running;
var G__15828 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15827,G__15828) : cljs.core.reset_BANG_.call(null,G__15827,G__15828));
});
gamma.core.restart = (function restart(){
gamma.core.clear();

return gamma.core.start();
});
gamma.core.example_primes_mols = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$37,(1),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(200),cljs.core.constant$keyword$47,(3),cljs.core.constant$keyword$46,"red",cljs.core.constant$keyword$51,-0.5,cljs.core.constant$keyword$50,0.0], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$37,(2),cljs.core.constant$keyword$49,(100),cljs.core.constant$keyword$48,(200),cljs.core.constant$keyword$47,(18),cljs.core.constant$keyword$46,"lightgreen",cljs.core.constant$keyword$51,0.5,cljs.core.constant$keyword$50,0.0], null)], null);
gamma.core.example_maxs_mols = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$37,(1),cljs.core.constant$keyword$49,(200),cljs.core.constant$keyword$48,(200),cljs.core.constant$keyword$47,(20),cljs.core.constant$keyword$46,"lightblue",cljs.core.constant$keyword$51,-0.5,cljs.core.constant$keyword$50,0.0], null),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$37,(2),cljs.core.constant$keyword$49,(100),cljs.core.constant$keyword$48,(200),cljs.core.constant$keyword$47,(2),cljs.core.constant$keyword$46,"pink",cljs.core.constant$keyword$51,0.5,cljs.core.constant$keyword$50,0.0], null)], null);
gamma.core.small_example_primes = (function small_example_primes(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#gamma-experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Prime Example with Two Molecules"], 0))], 0));

return gamma.core.setup_mols(gamma.core.example_primes_mols,gamma.core.prime_reaction);
});
gamma.core.primes_to_100 = (function primes_to_100(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#gamma-experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Primes to 100"], 0))], 0));

return gamma.core.setup(cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),(101)),gamma.core.prime_reaction);
});
gamma.core.small_example_max = (function small_example_max(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#gamma-experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Max Example with Two Molecules"], 0))], 0));

return gamma.core.setup_mols(gamma.core.example_maxs_mols,gamma.core.max_reaction);
});
gamma.core.max_to_99 = (function max_to_99(){
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#gamma-experiment-title",cljs.core.array_seq([enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Max to 99"], 0))], 0));

return gamma.core.setup(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(100)),gamma.core.max_reaction);
});
gamma.core.clear();
gamma.core.start();
gamma.core.run();
gamma.core.small_example_primes();
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic("#gamma-small-prime-button",cljs.core.array_seq([enfocus.events.listen(cljs.core.constant$keyword$52,(function (){
var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__){
return (function (state_15836){
var state_val_15837 = (state_15836[(1)]);
if((state_val_15837 === (2))){
var inst_15832 = (state_15836[(2)]);
var inst_15833 = gamma.core.restart();
var inst_15834 = gamma.core.small_example_primes();
var state_15836__$1 = (function (){var statearr_15838 = state_15836;
(statearr_15838[(7)] = inst_15833);

(statearr_15838[(8)] = inst_15832);

return statearr_15838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15836__$1,inst_15834);
} else {
if((state_val_15837 === (1))){
var inst_15829 = gamma.core.stop();
var inst_15830 = cljs.core.async.timeout((1000));
var state_15836__$1 = (function (){var statearr_15839 = state_15836;
(statearr_15839[(9)] = inst_15829);

return statearr_15839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15836__$1,(2),inst_15830);
} else {
return null;
}
}
});})(c__11307__auto__))
;
return ((function (switch__11227__auto__,c__11307__auto__){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_15843 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15843[(0)] = state_machine__11228__auto__);

(statearr_15843[(1)] = (1));

return statearr_15843;
});
var state_machine__11228__auto____1 = (function (state_15836){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_15836);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e15844){if((e15844 instanceof Object)){
var ex__11231__auto__ = e15844;
var statearr_15845_15901 = state_15836;
(statearr_15845_15901[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15836);

return cljs.core.constant$keyword$21;
} else {
throw e15844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__15902 = state_15836;
state_15836 = G__15902;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_15836){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_15836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__))
})();
var state__11309__auto__ = (function (){var statearr_15846 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_15846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_15846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__))
);

return c__11307__auto__;
})),"#gamma-prime-button",enfocus.events.listen(cljs.core.constant$keyword$52,(function (){
var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__){
return (function (state_15854){
var state_val_15855 = (state_15854[(1)]);
if((state_val_15855 === (2))){
var inst_15850 = (state_15854[(2)]);
var inst_15851 = gamma.core.restart();
var inst_15852 = gamma.core.primes_to_100();
var state_15854__$1 = (function (){var statearr_15856 = state_15854;
(statearr_15856[(7)] = inst_15851);

(statearr_15856[(8)] = inst_15850);

return statearr_15856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15854__$1,inst_15852);
} else {
if((state_val_15855 === (1))){
var inst_15847 = gamma.core.stop();
var inst_15848 = cljs.core.async.timeout((1000));
var state_15854__$1 = (function (){var statearr_15857 = state_15854;
(statearr_15857[(9)] = inst_15847);

return statearr_15857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15854__$1,(2),inst_15848);
} else {
return null;
}
}
});})(c__11307__auto__))
;
return ((function (switch__11227__auto__,c__11307__auto__){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_15861 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15861[(0)] = state_machine__11228__auto__);

(statearr_15861[(1)] = (1));

return statearr_15861;
});
var state_machine__11228__auto____1 = (function (state_15854){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_15854);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e15862){if((e15862 instanceof Object)){
var ex__11231__auto__ = e15862;
var statearr_15863_15903 = state_15854;
(statearr_15863_15903[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15854);

return cljs.core.constant$keyword$21;
} else {
throw e15862;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__15904 = state_15854;
state_15854 = G__15904;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_15854){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_15854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__))
})();
var state__11309__auto__ = (function (){var statearr_15864 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_15864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_15864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__))
);

return c__11307__auto__;
})),"#gamma-small-max-button",enfocus.events.listen(cljs.core.constant$keyword$52,(function (){
var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__){
return (function (state_15872){
var state_val_15873 = (state_15872[(1)]);
if((state_val_15873 === (2))){
var inst_15868 = (state_15872[(2)]);
var inst_15869 = gamma.core.restart();
var inst_15870 = gamma.core.small_example_max();
var state_15872__$1 = (function (){var statearr_15874 = state_15872;
(statearr_15874[(7)] = inst_15869);

(statearr_15874[(8)] = inst_15868);

return statearr_15874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15872__$1,inst_15870);
} else {
if((state_val_15873 === (1))){
var inst_15865 = gamma.core.stop();
var inst_15866 = cljs.core.async.timeout((1000));
var state_15872__$1 = (function (){var statearr_15875 = state_15872;
(statearr_15875[(9)] = inst_15865);

return statearr_15875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15872__$1,(2),inst_15866);
} else {
return null;
}
}
});})(c__11307__auto__))
;
return ((function (switch__11227__auto__,c__11307__auto__){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_15879 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15879[(0)] = state_machine__11228__auto__);

(statearr_15879[(1)] = (1));

return statearr_15879;
});
var state_machine__11228__auto____1 = (function (state_15872){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_15872);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e15880){if((e15880 instanceof Object)){
var ex__11231__auto__ = e15880;
var statearr_15881_15905 = state_15872;
(statearr_15881_15905[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15872);

return cljs.core.constant$keyword$21;
} else {
throw e15880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__15906 = state_15872;
state_15872 = G__15906;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_15872){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_15872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__))
})();
var state__11309__auto__ = (function (){var statearr_15882 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_15882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_15882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__))
);

return c__11307__auto__;
})),"#gamma-max-button",enfocus.events.listen(cljs.core.constant$keyword$52,(function (){
var c__11307__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11307__auto__){
return (function (){
var f__11308__auto__ = (function (){var switch__11227__auto__ = ((function (c__11307__auto__){
return (function (state_15890){
var state_val_15891 = (state_15890[(1)]);
if((state_val_15891 === (2))){
var inst_15886 = (state_15890[(2)]);
var inst_15887 = gamma.core.restart();
var inst_15888 = gamma.core.max_to_99();
var state_15890__$1 = (function (){var statearr_15892 = state_15890;
(statearr_15892[(7)] = inst_15887);

(statearr_15892[(8)] = inst_15886);

return statearr_15892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15890__$1,inst_15888);
} else {
if((state_val_15891 === (1))){
var inst_15883 = gamma.core.stop();
var inst_15884 = cljs.core.async.timeout((1000));
var state_15890__$1 = (function (){var statearr_15893 = state_15890;
(statearr_15893[(9)] = inst_15883);

return statearr_15893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15890__$1,(2),inst_15884);
} else {
return null;
}
}
});})(c__11307__auto__))
;
return ((function (switch__11227__auto__,c__11307__auto__){
return (function() {
var state_machine__11228__auto__ = null;
var state_machine__11228__auto____0 = (function (){
var statearr_15897 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15897[(0)] = state_machine__11228__auto__);

(statearr_15897[(1)] = (1));

return statearr_15897;
});
var state_machine__11228__auto____1 = (function (state_15890){
while(true){
var ret_value__11229__auto__ = (function (){try{while(true){
var result__11230__auto__ = switch__11227__auto__(state_15890);
if(cljs.core.keyword_identical_QMARK_(result__11230__auto__,cljs.core.constant$keyword$21)){
continue;
} else {
return result__11230__auto__;
}
break;
}
}catch (e15898){if((e15898 instanceof Object)){
var ex__11231__auto__ = e15898;
var statearr_15899_15907 = state_15890;
(statearr_15899_15907[(5)] = ex__11231__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15890);

return cljs.core.constant$keyword$21;
} else {
throw e15898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11229__auto__,cljs.core.constant$keyword$21)){
var G__15908 = state_15890;
state_15890 = G__15908;
continue;
} else {
return ret_value__11229__auto__;
}
break;
}
});
state_machine__11228__auto__ = function(state_15890){
switch(arguments.length){
case 0:
return state_machine__11228__auto____0.call(this);
case 1:
return state_machine__11228__auto____1.call(this,state_15890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11228__auto____0;
state_machine__11228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11228__auto____1;
return state_machine__11228__auto__;
})()
;})(switch__11227__auto__,c__11307__auto__))
})();
var state__11309__auto__ = (function (){var statearr_15900 = (function (){return (f__11308__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11308__auto__.cljs$core$IFn$_invoke$arity$0() : f__11308__auto__.call(null));
})();
(statearr_15900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11307__auto__);

return statearr_15900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11309__auto__);
});})(c__11307__auto__))
);

return c__11307__auto__;
}))], 0));
