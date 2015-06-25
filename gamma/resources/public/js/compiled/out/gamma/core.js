// Compiled by ClojureScript 0.0-2850 {}
goog.provide('gamma.core');
goog.require('cljs.core');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
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
gamma.core.world = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
gamma.core.running = cljs.core.atom.call(null,false);
gamma.core.setColor = (function setColor(context,color){
context.fillStyle = color;

return context.globalAlpha = gamma.core.opacity;
});
gamma.core.setText = (function setText(context,color,style){
context.fillStyle = color;

return context.font = style;
});
gamma.core.setLoading = (function setLoading(context){
var G__10034 = context;
gamma.core.setText.call(null,G__10034,"grey","bold 30px Arial");

G__10034.fillText("Ready?",(180),(250));

return G__10034;
});
gamma.core.clear = (function clear(){
var G__10036 = gamma.core.context;
gamma.core.setColor.call(null,G__10036,gamma.core.background);

G__10036.fillRect((0),(0),gamma.core.width,gamma.core.height);

return G__10036;
});
gamma.core.draw_molecule = (function draw_molecule(p__10037){
var map__10041 = p__10037;
var map__10041__$1 = ((cljs.core.seq_QMARK_.call(null,map__10041))?cljs.core.apply.call(null,cljs.core.hash_map,map__10041):map__10041);
var color = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var val = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"val","val",128701612));
var y = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__10041__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var G__10042_10044 = gamma.core.context;
gamma.core.setColor.call(null,G__10042_10044,color);

G__10042_10044.beginPath();

G__10042_10044.arc(x,y,gamma.core.d,(0),((2) * Math.PI),true);

G__10042_10044.closePath();

G__10042_10044.fill();


var G__10043 = gamma.core.context;
gamma.core.setText.call(null,G__10043,"black","bold 11px Courier");

G__10043.fillText([cljs.core.str(val)].join(''),(x - (7)),(y + (5)));

return G__10043;
});
gamma.core.draw_molecules = (function draw_molecules(state){
return cljs.core.doall.call(null,cljs.core.map.call(null,gamma.core.draw_molecule,state));
});
gamma.core.move_molecule = (function move_molecule(p__10045,collide_QMARK_){
var map__10047 = p__10045;
var map__10047__$1 = ((cljs.core.seq_QMARK_.call(null,map__10047))?cljs.core.apply.call(null,cljs.core.hash_map,map__10047):map__10047);
var molecule = map__10047__$1;
var dy = cljs.core.get.call(null,map__10047__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var dx = cljs.core.get.call(null,map__10047__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var y = cljs.core.get.call(null,map__10047__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__10047__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dx__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dx):dx);
var dy__$1 = (cljs.core.truth_(collide_QMARK_)?((-1) * dy):dy);
var mx = ((dx__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int.call(null,gamma.core.d):gamma.core.step)) + x);
var my = ((dy__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int.call(null,gamma.core.d):gamma.core.step)) + y);
var newx = ((((((2) * gamma.core.d) + gamma.core.width) < mx))?(dx__$1 * gamma.core.step):mx);
var newx__$1 = ((((- ((2) * gamma.core.d)) > newx))?(gamma.core.width - mx):newx);
var newy = ((((((2) * gamma.core.d) + gamma.core.height) < my))?(dy__$1 * gamma.core.step):my);
var newy__$1 = ((((- ((2) * gamma.core.d)) > newy))?(gamma.core.height - my):newy);
return cljs.core.merge.call(null,molecule,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),newx__$1,new cljs.core.Keyword(null,"y","y",-1757859776),newy__$1,new cljs.core.Keyword(null,"dx","dx",-381796732),dx__$1,new cljs.core.Keyword(null,"dy","dy",1719547243),dy__$1], null));
});
gamma.core.pick_color = (function pick_color(){
return cljs.core.first.call(null,cljs.core.shuffle.call(null,gamma.core.colors));
});
gamma.core.rand_dx_dy = (function rand_dx_dy(){
var multiplier = (((0.5 > cljs.core.rand.call(null)))?(-1):(1));
var speed = cljs.core.rand.call(null);
return (multiplier * speed);
});
gamma.core.collide_QMARK_ = (function collide_QMARK_(molecule,x,y,molecule_d){
var dx = Math.abs.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(molecule) - x));
var dy = Math.abs.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(molecule) - y));
return ((molecule_d > dx)) && ((molecule_d > dy));
});
gamma.core.prime_reaction = (function prime_reaction(molecule_a,molecule_b){
var a = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(molecule_a);
var b = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(molecule_b);
if(((a > b)) && ((cljs.core.mod.call(null,a,b) === (0)))){
return cljs.core.assoc.call(null,molecule_a,new cljs.core.Keyword(null,"val","val",128701612),(a / b));
} else {
return molecule_a;
}
});
gamma.core.max_reaction = (function max_reaction(molecule_a,molecule_b){
var a = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(molecule_a);
var b = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(molecule_b);
cljs.core.println.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),a,new cljs.core.Keyword(null,"b","b",1482224470),b);

if((b > a)){
return cljs.core.assoc.call(null,molecule_a,new cljs.core.Keyword(null,"val","val",128701612),b);
} else {
return molecule_a;
}
});
gamma.core.gen_molecule = (function gen_molecule(id,val){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,gamma.core.width),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,gamma.core.height),new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,gamma.core.colors),new cljs.core.Keyword(null,"dx","dx",-381796732),((0.5 + cljs.core.rand_int.call(null,(3))) * gamma.core.rand_dx_dy.call(null)),new cljs.core.Keyword(null,"dy","dy",1719547243),((0.5 + cljs.core.rand_int.call(null,(3))) * gamma.core.rand_dx_dy.call(null))], null);
});
gamma.core.gen_molecules = (function gen_molecules(vals){
var n = cljs.core.count.call(null,vals);
return cljs.core.map.call(null,gamma.core.gen_molecule,cljs.core.range.call(null,n),vals);
});
gamma.core.find_collision = (function find_collision(molecule){
var rest_molecules = cljs.core.remove.call(null,(function (b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,gamma.core.world)));
var collided_with = cljs.core.filter.call(null,((function (rest_molecules){
return (function (b){
return gamma.core.collide_QMARK_.call(null,b,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(molecule),gamma.core.d);
});})(rest_molecules))
,rest_molecules);
return cljs.core.first.call(null,collided_with);
});
gamma.core.molecule_reaction = (function molecule_reaction(mol_state,reaction_fn){
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_10144){
var state_val_10145 = (state_10144[(1)]);
if((state_val_10145 === (7))){
var inst_10118 = (state_10144[(7)]);
var inst_10117 = (state_10144[(8)]);
var inst_10114 = (state_10144[(2)]);
var inst_10115 = cljs.core.deref.call(null,gamma.core.world);
var inst_10116 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_10117__$1 = cljs.core.get.call(null,inst_10115,inst_10116);
var inst_10118__$1 = gamma.core.find_collision.call(null,inst_10117__$1);
var state_10144__$1 = (function (){var statearr_10146 = state_10144;
(statearr_10146[(7)] = inst_10118__$1);

(statearr_10146[(9)] = inst_10114);

(statearr_10146[(8)] = inst_10117__$1);

return statearr_10146;
})();
if(cljs.core.truth_(inst_10118__$1)){
var statearr_10147_10170 = state_10144__$1;
(statearr_10147_10170[(1)] = (8));

} else {
var statearr_10148_10171 = state_10144__$1;
(statearr_10148_10171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (1))){
var state_10144__$1 = state_10144;
var statearr_10149_10172 = state_10144__$1;
(statearr_10149_10172[(2)] = null);

(statearr_10149_10172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (4))){
var inst_10112 = cljs.core.async.timeout.call(null,(60));
var state_10144__$1 = state_10144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10144__$1,(7),inst_10112);
} else {
if((state_val_10145 === (13))){
var inst_10136 = (state_10144[(2)]);
var state_10144__$1 = (function (){var statearr_10150 = state_10144;
(statearr_10150[(10)] = inst_10136);

return statearr_10150;
})();
var statearr_10151_10173 = state_10144__$1;
(statearr_10151_10173[(2)] = null);

(statearr_10151_10173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (6))){
var inst_10140 = (state_10144[(2)]);
var state_10144__$1 = state_10144;
var statearr_10152_10174 = state_10144__$1;
(statearr_10152_10174[(2)] = inst_10140);

(statearr_10152_10174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (3))){
var inst_10142 = (state_10144[(2)]);
var state_10144__$1 = state_10144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10144__$1,inst_10142);
} else {
if((state_val_10145 === (12))){
var state_10144__$1 = state_10144;
var statearr_10153_10175 = state_10144__$1;
(statearr_10153_10175[(2)] = null);

(statearr_10153_10175[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (2))){
var inst_10110 = cljs.core.deref.call(null,gamma.core.running);
var state_10144__$1 = state_10144;
if(cljs.core.truth_(inst_10110)){
var statearr_10154_10176 = state_10144__$1;
(statearr_10154_10176[(1)] = (4));

} else {
var statearr_10155_10177 = state_10144__$1;
(statearr_10155_10177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (11))){
var inst_10118 = (state_10144[(7)]);
var inst_10130 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_10118);
var inst_10131 = gamma.core.move_molecule.call(null,inst_10118,true);
var inst_10132 = gamma.core.move_molecule.call(null,inst_10131,false);
var inst_10133 = cljs.core.swap_BANG_.call(null,gamma.core.world,cljs.core.assoc,inst_10130,inst_10132);
var state_10144__$1 = state_10144;
var statearr_10156_10178 = state_10144__$1;
(statearr_10156_10178[(2)] = inst_10133);

(statearr_10156_10178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (9))){
var inst_10117 = (state_10144[(8)]);
var inst_10124 = gamma.core.move_molecule.call(null,inst_10117,false);
var state_10144__$1 = state_10144;
var statearr_10157_10179 = state_10144__$1;
(statearr_10157_10179[(2)] = inst_10124);

(statearr_10157_10179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (5))){
var state_10144__$1 = state_10144;
var statearr_10158_10180 = state_10144__$1;
(statearr_10158_10180[(2)] = null);

(statearr_10158_10180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (10))){
var inst_10118 = (state_10144[(7)]);
var inst_10126 = (state_10144[(2)]);
var inst_10127 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_10128 = cljs.core.swap_BANG_.call(null,gamma.core.world,cljs.core.assoc,inst_10127,inst_10126);
var state_10144__$1 = (function (){var statearr_10159 = state_10144;
(statearr_10159[(11)] = inst_10128);

return statearr_10159;
})();
if(cljs.core.truth_(inst_10118)){
var statearr_10160_10181 = state_10144__$1;
(statearr_10160_10181[(1)] = (11));

} else {
var statearr_10161_10182 = state_10144__$1;
(statearr_10161_10182[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10145 === (8))){
var inst_10118 = (state_10144[(7)]);
var inst_10117 = (state_10144[(8)]);
var inst_10120 = reaction_fn.call(null,inst_10117,inst_10118);
var inst_10121 = gamma.core.move_molecule.call(null,inst_10120,true);
var inst_10122 = gamma.core.move_molecule.call(null,inst_10121,false);
var state_10144__$1 = state_10144;
var statearr_10162_10183 = state_10144__$1;
(statearr_10162_10183[(2)] = inst_10122);

(statearr_10162_10183[(1)] = (10));


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
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_10166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10166[(0)] = state_machine__6587__auto__);

(statearr_10166[(1)] = (1));

return statearr_10166;
});
var state_machine__6587__auto____1 = (function (state_10144){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_10144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e10167){if((e10167 instanceof Object)){
var ex__6590__auto__ = e10167;
var statearr_10168_10184 = state_10144;
(statearr_10168_10184[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10185 = state_10144;
state_10144 = G__10185;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_10144){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_10144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_10169 = f__6643__auto__.call(null);
(statearr_10169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_10169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
});
gamma.core.setup_mols = (function setup_mols(init_mols,reaction_fn){
cljs.core.reset_BANG_.call(null,gamma.core.world,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),init_mols),init_mols));

var seq__10190 = cljs.core.seq.call(null,init_mols);
var chunk__10191 = null;
var count__10192 = (0);
var i__10193 = (0);
while(true){
if((i__10193 < count__10192)){
var mol = cljs.core._nth.call(null,chunk__10191,i__10193);
gamma.core.molecule_reaction.call(null,mol,reaction_fn);

var G__10194 = seq__10190;
var G__10195 = chunk__10191;
var G__10196 = count__10192;
var G__10197 = (i__10193 + (1));
seq__10190 = G__10194;
chunk__10191 = G__10195;
count__10192 = G__10196;
i__10193 = G__10197;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10190);
if(temp__4126__auto__){
var seq__10190__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10190__$1)){
var c__4651__auto__ = cljs.core.chunk_first.call(null,seq__10190__$1);
var G__10198 = cljs.core.chunk_rest.call(null,seq__10190__$1);
var G__10199 = c__4651__auto__;
var G__10200 = cljs.core.count.call(null,c__4651__auto__);
var G__10201 = (0);
seq__10190 = G__10198;
chunk__10191 = G__10199;
count__10192 = G__10200;
i__10193 = G__10201;
continue;
} else {
var mol = cljs.core.first.call(null,seq__10190__$1);
gamma.core.molecule_reaction.call(null,mol,reaction_fn);

var G__10202 = cljs.core.next.call(null,seq__10190__$1);
var G__10203 = null;
var G__10204 = (0);
var G__10205 = (0);
seq__10190 = G__10202;
chunk__10191 = G__10203;
count__10192 = G__10204;
i__10193 = G__10205;
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
var init_mols = gamma.core.gen_molecules.call(null,vals);
return gamma.core.setup_mols.call(null,init_mols,reaction_fn);
});
gamma.core.measurement = (function measurement(){
return cljs.core.sort.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.vals.call(null,cljs.core.deref.call(null,gamma.core.world)))));
});
gamma.core.tick = (function tick(){
gamma.core.clear.call(null);

if(cljs.core.truth_(cljs.core.deref.call(null,gamma.core.running))){
gamma.core.draw_molecules.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,gamma.core.world)));

var answer = gamma.core.measurement.call(null);
return enfocus.core.at.call(null,"#answer",enfocus.core.content.call(null,[cljs.core.str(answer)].join('')),"#not-primes",enfocus.core.content.call(null,[cljs.core.str(cljs.core.last.call(null,answer))].join('')));
} else {
return gamma.core.setLoading.call(null,gamma.core.context);
}
});
gamma.core.time_loop = (function time_loop(){
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_10228){
var state_val_10229 = (state_10228[(1)]);
if((state_val_10229 === (2))){
var inst_10224 = (state_10228[(2)]);
var inst_10225 = gamma.core.tick.call(null);
var inst_10226 = window.requestAnimationFrame(time_loop);
var state_10228__$1 = (function (){var statearr_10230 = state_10228;
(statearr_10230[(7)] = inst_10225);

(statearr_10230[(8)] = inst_10224);

return statearr_10230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10228__$1,inst_10226);
} else {
if((state_val_10229 === (1))){
var inst_10222 = cljs.core.async.timeout.call(null,(30));
var state_10228__$1 = state_10228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10228__$1,(2),inst_10222);
} else {
return null;
}
}
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_10234 = [null,null,null,null,null,null,null,null,null];
(statearr_10234[(0)] = state_machine__6587__auto__);

(statearr_10234[(1)] = (1));

return statearr_10234;
});
var state_machine__6587__auto____1 = (function (state_10228){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_10228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e10235){if((e10235 instanceof Object)){
var ex__6590__auto__ = e10235;
var statearr_10236_10238 = state_10228;
(statearr_10236_10238[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10239 = state_10228;
state_10228 = G__10239;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_10228){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_10228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_10237 = f__6643__auto__.call(null);
(statearr_10237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_10237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
});
gamma.core.run = (function run(){
return window.requestAnimationFrame((function (_){
return gamma.core.time_loop.call(null);
}));
});
gamma.core.start = (function start(){
return cljs.core.reset_BANG_.call(null,gamma.core.running,true);
});
gamma.core.stop = (function stop(){
return cljs.core.reset_BANG_.call(null,gamma.core.running,false);
});
gamma.core.restart = (function restart(){
gamma.core.clear.call(null);

return gamma.core.start.call(null);
});
gamma.core.example_primes_mols = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(3),new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"dx","dx",-381796732),-0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(18),new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen",new cljs.core.Keyword(null,"dx","dx",-381796732),0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null)], null);
gamma.core.example_maxs_mols = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(20),new cljs.core.Keyword(null,"color","color",1011675173),"lightblue",new cljs.core.Keyword(null,"dx","dx",-381796732),-0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"val","val",128701612),(2),new cljs.core.Keyword(null,"color","color",1011675173),"pink",new cljs.core.Keyword(null,"dx","dx",-381796732),0.5,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null)], null);
gamma.core.small_example_primes = (function small_example_primes(){
enfocus.core.at.call(null,"#gamma-experiment-title",enfocus.core.content.call(null,"Prime Example with Two Molecules"));

return gamma.core.setup_mols.call(null,gamma.core.example_primes_mols,gamma.core.prime_reaction);
});
gamma.core.primes_to_100 = (function primes_to_100(){
enfocus.core.at.call(null,"#gamma-experiment-title",enfocus.core.content.call(null,"Primes to 100"));

return gamma.core.setup.call(null,cljs.core.range.call(null,(2),(101)),gamma.core.prime_reaction);
});
gamma.core.small_example_max = (function small_example_max(){
enfocus.core.at.call(null,"#gamma-experiment-title",enfocus.core.content.call(null,"Max Example with Two Molecules"));

return gamma.core.setup_mols.call(null,gamma.core.example_maxs_mols,gamma.core.max_reaction);
});
gamma.core.max_to_99 = (function max_to_99(){
enfocus.core.at.call(null,"#gamma-experiment-title",enfocus.core.content.call(null,"Max to 99"));

return gamma.core.setup.call(null,cljs.core.range.call(null,(1),(100)),gamma.core.max_reaction);
});
gamma.core.clear.call(null);
gamma.core.start.call(null);
gamma.core.run.call(null);
gamma.core.small_example_primes.call(null);
enfocus.core.at.call(null,"#gamma-small-prime-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_10247){
var state_val_10248 = (state_10247[(1)]);
if((state_val_10248 === (2))){
var inst_10243 = (state_10247[(2)]);
var inst_10244 = gamma.core.restart.call(null);
var inst_10245 = gamma.core.small_example_primes.call(null);
var state_10247__$1 = (function (){var statearr_10249 = state_10247;
(statearr_10249[(7)] = inst_10243);

(statearr_10249[(8)] = inst_10244);

return statearr_10249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10247__$1,inst_10245);
} else {
if((state_val_10248 === (1))){
var inst_10240 = gamma.core.stop.call(null);
var inst_10241 = cljs.core.async.timeout.call(null,(1000));
var state_10247__$1 = (function (){var statearr_10250 = state_10247;
(statearr_10250[(9)] = inst_10240);

return statearr_10250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10247__$1,(2),inst_10241);
} else {
return null;
}
}
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_10254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10254[(0)] = state_machine__6587__auto__);

(statearr_10254[(1)] = (1));

return statearr_10254;
});
var state_machine__6587__auto____1 = (function (state_10247){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_10247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e10255){if((e10255 instanceof Object)){
var ex__6590__auto__ = e10255;
var statearr_10256_10312 = state_10247;
(statearr_10256_10312[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10313 = state_10247;
state_10247 = G__10313;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_10247){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_10247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_10257 = f__6643__auto__.call(null);
(statearr_10257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_10257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
})),"#gamma-prime-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_10265){
var state_val_10266 = (state_10265[(1)]);
if((state_val_10266 === (2))){
var inst_10261 = (state_10265[(2)]);
var inst_10262 = gamma.core.restart.call(null);
var inst_10263 = gamma.core.primes_to_100.call(null);
var state_10265__$1 = (function (){var statearr_10267 = state_10265;
(statearr_10267[(7)] = inst_10262);

(statearr_10267[(8)] = inst_10261);

return statearr_10267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10265__$1,inst_10263);
} else {
if((state_val_10266 === (1))){
var inst_10258 = gamma.core.stop.call(null);
var inst_10259 = cljs.core.async.timeout.call(null,(1000));
var state_10265__$1 = (function (){var statearr_10268 = state_10265;
(statearr_10268[(9)] = inst_10258);

return statearr_10268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10265__$1,(2),inst_10259);
} else {
return null;
}
}
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_10272 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10272[(0)] = state_machine__6587__auto__);

(statearr_10272[(1)] = (1));

return statearr_10272;
});
var state_machine__6587__auto____1 = (function (state_10265){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_10265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e10273){if((e10273 instanceof Object)){
var ex__6590__auto__ = e10273;
var statearr_10274_10314 = state_10265;
(statearr_10274_10314[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10315 = state_10265;
state_10265 = G__10315;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_10265){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_10265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_10275 = f__6643__auto__.call(null);
(statearr_10275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_10275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
})),"#gamma-small-max-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_10283){
var state_val_10284 = (state_10283[(1)]);
if((state_val_10284 === (2))){
var inst_10279 = (state_10283[(2)]);
var inst_10280 = gamma.core.restart.call(null);
var inst_10281 = gamma.core.small_example_max.call(null);
var state_10283__$1 = (function (){var statearr_10285 = state_10283;
(statearr_10285[(7)] = inst_10280);

(statearr_10285[(8)] = inst_10279);

return statearr_10285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10283__$1,inst_10281);
} else {
if((state_val_10284 === (1))){
var inst_10276 = gamma.core.stop.call(null);
var inst_10277 = cljs.core.async.timeout.call(null,(1000));
var state_10283__$1 = (function (){var statearr_10286 = state_10283;
(statearr_10286[(9)] = inst_10276);

return statearr_10286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10283__$1,(2),inst_10277);
} else {
return null;
}
}
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_10290 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10290[(0)] = state_machine__6587__auto__);

(statearr_10290[(1)] = (1));

return statearr_10290;
});
var state_machine__6587__auto____1 = (function (state_10283){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_10283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e10291){if((e10291 instanceof Object)){
var ex__6590__auto__ = e10291;
var statearr_10292_10316 = state_10283;
(statearr_10292_10316[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10317 = state_10283;
state_10283 = G__10317;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_10283){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_10283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_10293 = f__6643__auto__.call(null);
(statearr_10293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_10293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
})),"#gamma-max-button",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
var c__6642__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6642__auto__){
return (function (){
var f__6643__auto__ = (function (){var switch__6586__auto__ = ((function (c__6642__auto__){
return (function (state_10301){
var state_val_10302 = (state_10301[(1)]);
if((state_val_10302 === (2))){
var inst_10297 = (state_10301[(2)]);
var inst_10298 = gamma.core.restart.call(null);
var inst_10299 = gamma.core.max_to_99.call(null);
var state_10301__$1 = (function (){var statearr_10303 = state_10301;
(statearr_10303[(7)] = inst_10297);

(statearr_10303[(8)] = inst_10298);

return statearr_10303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10301__$1,inst_10299);
} else {
if((state_val_10302 === (1))){
var inst_10294 = gamma.core.stop.call(null);
var inst_10295 = cljs.core.async.timeout.call(null,(1000));
var state_10301__$1 = (function (){var statearr_10304 = state_10301;
(statearr_10304[(9)] = inst_10294);

return statearr_10304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10301__$1,(2),inst_10295);
} else {
return null;
}
}
});})(c__6642__auto__))
;
return ((function (switch__6586__auto__,c__6642__auto__){
return (function() {
var state_machine__6587__auto__ = null;
var state_machine__6587__auto____0 = (function (){
var statearr_10308 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10308[(0)] = state_machine__6587__auto__);

(statearr_10308[(1)] = (1));

return statearr_10308;
});
var state_machine__6587__auto____1 = (function (state_10301){
while(true){
var ret_value__6588__auto__ = (function (){try{while(true){
var result__6589__auto__ = switch__6586__auto__.call(null,state_10301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6589__auto__;
}
break;
}
}catch (e10309){if((e10309 instanceof Object)){
var ex__6590__auto__ = e10309;
var statearr_10310_10318 = state_10301;
(statearr_10310_10318[(5)] = ex__6590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10319 = state_10301;
state_10301 = G__10319;
continue;
} else {
return ret_value__6588__auto__;
}
break;
}
});
state_machine__6587__auto__ = function(state_10301){
switch(arguments.length){
case 0:
return state_machine__6587__auto____0.call(this);
case 1:
return state_machine__6587__auto____1.call(this,state_10301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6587__auto____0;
state_machine__6587__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6587__auto____1;
return state_machine__6587__auto__;
})()
;})(switch__6586__auto__,c__6642__auto__))
})();
var state__6644__auto__ = (function (){var statearr_10311 = f__6643__auto__.call(null);
(statearr_10311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6642__auto__);

return statearr_10311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6644__auto__);
});})(c__6642__auto__))
);

return c__6642__auto__;
})));

//# sourceMappingURL=core.js.map?rel=1435268439731