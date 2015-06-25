// Compiled by ClojureScript 0.0-2850 {}
goog.provide('mail_system.core');
goog.require('cljs.core');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
mail_system.core.canvas = document.getElementById("canvas");
mail_system.core.context = mail_system.core.canvas.getContext("2d");
mail_system.core.width = mail_system.core.canvas.width;
mail_system.core.height = mail_system.core.canvas.height;
mail_system.core.background = "white";
mail_system.core.opacity = 1.0;
mail_system.core.step = (2);
mail_system.core.colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","pink","lightblue","green","lightgreen","orange","yellow"], null);
if(typeof mail_system.core.world !== 'undefined'){
} else {
mail_system.core.world = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mail_system.core.running = cljs.core.atom.call(null,false);
mail_system.core.mol_id_counter = cljs.core.atom.call(null,(0));

mail_system.core.setColor = (function setColor(context,color){
context.fillStyle = color;

return context.globalAlpha = mail_system.core.opacity;
});
mail_system.core.setText = (function setText(context,color,style){
context.fillStyle = color;

return context.font = style;
});
mail_system.core.setLoading = (function setLoading(context){
var G__22010 = context;
mail_system.core.setText.call(null,G__22010,"grey","bold 30px Arial");

G__22010.fillText("Ready?",(180),(250));

return G__22010;
});
mail_system.core.clear = (function clear(){
var G__22012 = mail_system.core.context;
mail_system.core.setColor.call(null,G__22012,mail_system.core.background);

G__22012.fillRect((0),(0),mail_system.core.width,mail_system.core.height);

return G__22012;
});
mail_system.core.draw_circle = (function draw_circle(context,color,diam,x,y){
var G__22014 = context;
mail_system.core.setColor.call(null,G__22014,color);

G__22014.beginPath();

G__22014.arc(x,y,diam,(0),((2) * Math.PI),true);

G__22014.closePath();

G__22014.fill();

return G__22014;
});
mail_system.core.draw_molecule = (function draw_molecule(p__22015){
var map__22018 = p__22015;
var map__22018__$1 = ((cljs.core.seq_QMARK_.call(null,map__22018))?cljs.core.apply.call(null,cljs.core.hash_map,map__22018):map__22018);
var args = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var val = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"val","val",128701612));
var d = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__22018__$1,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.truth_(val)){
var display_val = ((cljs.core.fn_QMARK_.call(null,val))?val.name:val);
mail_system.core.draw_circle.call(null,mail_system.core.context,color,d,x,y);

var G__22019 = mail_system.core.context;
mail_system.core.setText.call(null,G__22019,"black","bold 11px Courier");

G__22019.fillText([cljs.core.str(display_val)].join(''),(x - (cljs.core.count.call(null,display_val) * (3))),(y + (5)));

return G__22019;
} else {
return null;
}
});
mail_system.core.draw_molecules = (function draw_molecules(state){
return cljs.core.doall.call(null,cljs.core.map.call(null,mail_system.core.draw_molecule,state));
});
mail_system.core.adjust_collide_heading = (function adjust_collide_heading(h){
if((h > (0))){
var nh = (0.5 + cljs.core.rand_int.call(null,(3)));
return ((-1) * nh);
} else {
return ((-1) * h);
}
});
mail_system.core.move_molecule = (function move_molecule(p__22020,collide_QMARK_){
var map__22022 = p__22020;
var map__22022__$1 = ((cljs.core.seq_QMARK_.call(null,map__22022))?cljs.core.apply.call(null,cljs.core.hash_map,map__22022):map__22022);
var molecule = map__22022__$1;
var dy = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var dx = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var d = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__22022__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dx__$1 = (cljs.core.truth_(collide_QMARK_)?mail_system.core.adjust_collide_heading.call(null,dx):dx);
var dy__$1 = (cljs.core.truth_(collide_QMARK_)?mail_system.core.adjust_collide_heading.call(null,dy):dy);
var mx = ((dx__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int.call(null,d):mail_system.core.step)) + x);
var my = ((dy__$1 * (cljs.core.truth_(collide_QMARK_)?cljs.core.rand_int.call(null,d):mail_system.core.step)) + y);
var newx = ((((((2) * d) + mail_system.core.width) < mx))?(dx__$1 * mail_system.core.step):mx);
var newx__$1 = ((((- ((2) * d)) > newx))?(mail_system.core.width - mx):newx);
var newy = ((((((2) * d) + mail_system.core.height) < my))?(dy__$1 * mail_system.core.step):my);
var newy__$1 = ((((- ((2) * d)) > newy))?(mail_system.core.height - my):newy);
return cljs.core.merge.call(null,molecule,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),newx__$1,new cljs.core.Keyword(null,"y","y",-1757859776),newy__$1,new cljs.core.Keyword(null,"dx","dx",-381796732),dx__$1,new cljs.core.Keyword(null,"dy","dy",1719547243),dy__$1], null));
});
mail_system.core.rand_dx_dy = (function rand_dx_dy(){
var multiplier = (((0.5 > cljs.core.rand.call(null)))?(-1):(1));
var speed = cljs.core.rand.call(null);
return (multiplier * speed);
});
mail_system.core.collide_QMARK_ = (function collide_QMARK_(molecule,x,y,molecule_d){
var dx = Math.abs.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(molecule) - x));
var dy = Math.abs.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(molecule) - y));
return ((molecule_d > dx)) && ((molecule_d > dy));
});
mail_system.core.gen_molecule = (function gen_molecule(val){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,mail_system.core.width),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,mail_system.core.height),new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,mail_system.core.colors),new cljs.core.Keyword(null,"dx","dx",-381796732),((0.5 + cljs.core.rand_int.call(null,(3))) * mail_system.core.rand_dx_dy.call(null)),new cljs.core.Keyword(null,"dy","dy",1719547243),((0.5 + cljs.core.rand_int.call(null,(3))) * mail_system.core.rand_dx_dy.call(null)),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null);
});
mail_system.core.gen_molecules = (function gen_molecules(vals){
var n = cljs.core.count.call(null,vals);
return cljs.core.map.call(null,mail_system.core.gen_molecule,vals);
});
mail_system.core.find_collision = (function find_collision(molecule){
var rest_molecules = cljs.core.remove.call(null,(function (b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,mail_system.core.world)));
var collided_with = cljs.core.filter.call(null,((function (rest_molecules){
return (function (b){
return mail_system.core.collide_QMARK_.call(null,b,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(molecule),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(molecule));
});})(rest_molecules))
,rest_molecules);
return cljs.core.first.call(null,collided_with);
});
mail_system.core.react_fn_ready_to_eval_QMARK_ = (function react_fn_ready_to_eval_QMARK_(react_fn,arglist){
var react_fn_args_list = react_fn.length;
return cljs.core._EQ_.call(null,react_fn_args_list,cljs.core.count.call(null,arglist));
});
mail_system.core.gen_molecule_by_val = (function gen_molecule_by_val(val,x,y,d,move_direction){
if(cljs.core._EQ_.call(null,val,"inactive-server")){
return mail_system.core.gen_inactive_server_molecule.call(null,x,y);
} else {
if((cljs.core._EQ_.call(null,val,mail_system.core.server_b)) || (cljs.core._EQ_.call(null,val,mail_system.core.server_a))){
return mail_system.core.gen_server_molecule.call(null,x,y,val);
} else {
var G__22024 = (((move_direction instanceof cljs.core.Keyword))?move_direction.fqn:null);
switch (G__22024) {
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_mail_molecule.call(null,(x - d),y,val)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_mail_molecule.call(null,(x + d),y,val)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(move_direction)].join('')));

}

}
}
});
mail_system.core.higher_order_eval = (function higher_order_eval(fn_mol){
var react_fn = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_mol);
var result_vals = cljs.core.apply.call(null,react_fn,react_args);
var result_mols = cljs.core.flatten.call(null,cljs.core.mapv.call(null,((function (react_fn,react_args,result_vals){
return (function (m){
return mail_system.core.gen_molecule_by_val.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(m),(function (){var or__16145__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(fn_mol);
}
})(),(function (){var or__16145__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(fn_mol);
}
})(),(function (){var or__16145__auto__ = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16145__auto__)){
return or__16145__auto__;
} else {
return new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(fn_mol);
}
})(),new cljs.core.Keyword(null,"move-to","move-to",-127537048).cljs$core$IFn$_invoke$arity$1(m));
});})(react_fn,react_args,result_vals))
,result_vals));
return result_mols;
});
mail_system.core.higher_order_capture = (function higher_order_capture(fn_mol,val_mol){
var react_fn_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_fn = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(fn_mol);
var react_allowed_arg_fn = new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177).cljs$core$IFn$_invoke$arity$1(fn_mol);
if(cljs.core.truth_(react_allowed_arg_fn.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(val_mol)))){
if(mail_system.core.react_fn_ready_to_eval_QMARK_.call(null,react_fn,react_fn_args)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_mol,val_mol], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,fn_mol,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.conj.call(null,react_fn_args,val_mol)),cljs.core.assoc.call(null,val_mol,new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"destroy","destroy",-843660405))], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_mol,val_mol], null);
}
});
mail_system.core.higher_order_compare = (function higher_order_compare(mol1,mol2){
var allow_arg_fn_1 = new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177).cljs$core$IFn$_invoke$arity$1(mol1);
var allow_arg_fn_2 = new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177).cljs$core$IFn$_invoke$arity$1(mol2);
var mol2_as_arg_QMARK_ = allow_arg_fn_1.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol2));
var mol1_as_arg_QMARK_ = allow_arg_fn_2.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol1));
if(cljs.core.truth_(mol2_as_arg_QMARK_)){
return mail_system.core.higher_order_capture.call(null,mol1,mol2);
} else {
if(cljs.core.truth_(mol1_as_arg_QMARK_)){
return mail_system.core.higher_order_capture.call(null,mol2,mol1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mol1,mol2], null);

}
}
});
mail_system.core.higher_order_reaction = (function higher_order_reaction(mol1,mol2){
var v1 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol1);
var v2 = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol2);
if((cljs.core.fn_QMARK_.call(null,v1)) && (cljs.core.fn_QMARK_.call(null,v2))){
return mail_system.core.higher_order_compare.call(null,mol1,mol2);
} else {
if(cljs.core.fn_QMARK_.call(null,v1)){
return mail_system.core.higher_order_capture.call(null,mol1,mol2);
} else {
if(cljs.core.fn_QMARK_.call(null,v2)){
return mail_system.core.higher_order_capture.call(null,mol2,mol1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mol1,mol2], null);

}
}
}
});
mail_system.core.hatch_QMARK_ = (function hatch_QMARK_(mstate){
if(cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mstate))){
return mail_system.core.react_fn_ready_to_eval_QMARK_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mstate),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(mstate));
} else {
return null;
}
});
mail_system.core.hatch = (function hatch(mstate){
var result_mols = mail_system.core.higher_order_eval.call(null,mstate);
var clean_mstate = cljs.core.assoc.call(null,mstate,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY);
var one_shot_QMARK_ = new cljs.core.Keyword(null,"one-shot?","one-shot?",409278734).cljs$core$IFn$_invoke$arity$1(mstate);
if(cljs.core.truth_(one_shot_QMARK_)){
cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mstate));
} else {
cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mstate),mail_system.core.move_molecule.call(null,clean_mstate,true));
}

cljs.core.mapv.call(null,((function (result_mols,clean_mstate,one_shot_QMARK_){
return (function (m){
return cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),mail_system.core.move_molecule.call(null,mail_system.core.move_molecule.call(null,m,true),false));
});})(result_mols,clean_mstate,one_shot_QMARK_))
,result_mols);

return cljs.core.mapv.call(null,((function (result_mols,clean_mstate,one_shot_QMARK_){
return (function (m){
return mail_system.core.molecule_reaction.call(null,m);
});})(result_mols,clean_mstate,one_shot_QMARK_))
,result_mols);
});
mail_system.core.collision_reaction = (function collision_reaction(mstate,collision_mol){
var new_mols = mail_system.core.higher_order_reaction.call(null,mstate,collision_mol);
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
return cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m));
});})(new_mols,mols_to_destroy,mols_to_bounce))
,mols_to_destroy);

return cljs.core.mapv.call(null,((function (new_mols,mols_to_destroy,mols_to_bounce){
return (function (m){
return cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),mail_system.core.move_molecule.call(null,mail_system.core.move_molecule.call(null,m,true),false));
});})(new_mols,mols_to_destroy,mols_to_bounce))
,mols_to_bounce);
});
mail_system.core.molecule_reaction = (function molecule_reaction(mol_state){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_22156){
var state_val_22157 = (state_22156[(1)]);
if((state_val_22157 === (7))){
var inst_22120 = cljs.core.async.timeout.call(null,(60));
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22156__$1,(10),inst_22120);
} else {
if((state_val_22157 === (20))){
var inst_22125 = (state_22156[(7)]);
var inst_22136 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_22137 = mail_system.core.move_molecule.call(null,inst_22125,false);
var inst_22138 = cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.assoc,inst_22136,inst_22137);
var state_22156__$1 = state_22156;
var statearr_22158_22194 = state_22156__$1;
(statearr_22158_22194[(2)] = inst_22138);

(statearr_22158_22194[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (1))){
var state_22156__$1 = state_22156;
var statearr_22159_22195 = state_22156__$1;
(statearr_22159_22195[(2)] = null);

(statearr_22159_22195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (4))){
var inst_22113 = cljs.core.deref.call(null,mail_system.core.world);
var inst_22114 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_22115 = cljs.core.get.call(null,inst_22113,inst_22114);
var state_22156__$1 = state_22156;
var statearr_22160_22196 = state_22156__$1;
(statearr_22160_22196[(2)] = inst_22115);

(statearr_22160_22196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (15))){
var state_22156__$1 = state_22156;
var statearr_22161_22197 = state_22156__$1;
(statearr_22161_22197[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (21))){
var state_22156__$1 = state_22156;
var statearr_22163_22198 = state_22156__$1;
(statearr_22163_22198[(2)] = null);

(statearr_22163_22198[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (13))){
var inst_22148 = (state_22156[(2)]);
var state_22156__$1 = (function (){var statearr_22164 = state_22156;
(statearr_22164[(8)] = inst_22148);

return statearr_22164;
})();
var statearr_22165_22199 = state_22156__$1;
(statearr_22165_22199[(2)] = null);

(statearr_22165_22199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (22))){
var inst_22141 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22166_22200 = state_22156__$1;
(statearr_22166_22200[(2)] = inst_22141);

(statearr_22166_22200[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (6))){
var inst_22118 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
if(cljs.core.truth_(inst_22118)){
var statearr_22167_22201 = state_22156__$1;
(statearr_22167_22201[(1)] = (7));

} else {
var statearr_22168_22202 = state_22156__$1;
(statearr_22168_22202[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (17))){
var inst_22125 = (state_22156[(7)]);
var state_22156__$1 = state_22156;
if(cljs.core.truth_(inst_22125)){
var statearr_22169_22203 = state_22156__$1;
(statearr_22169_22203[(1)] = (20));

} else {
var statearr_22170_22204 = state_22156__$1;
(statearr_22170_22204[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (3))){
var inst_22154 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22156__$1,inst_22154);
} else {
if((state_val_22157 === (12))){
var inst_22125 = (state_22156[(7)]);
var inst_22130 = mail_system.core.hatch_QMARK_.call(null,inst_22125);
var state_22156__$1 = state_22156;
if(cljs.core.truth_(inst_22130)){
var statearr_22171_22205 = state_22156__$1;
(statearr_22171_22205[(1)] = (14));

} else {
var statearr_22172_22206 = state_22156__$1;
(statearr_22172_22206[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (2))){
var inst_22111 = (state_22156[(9)]);
var inst_22111__$1 = cljs.core.deref.call(null,mail_system.core.running);
var state_22156__$1 = (function (){var statearr_22173 = state_22156;
(statearr_22173[(9)] = inst_22111__$1);

return statearr_22173;
})();
if(cljs.core.truth_(inst_22111__$1)){
var statearr_22174_22207 = state_22156__$1;
(statearr_22174_22207[(1)] = (4));

} else {
var statearr_22175_22208 = state_22156__$1;
(statearr_22175_22208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (19))){
var inst_22144 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22176_22209 = state_22156__$1;
(statearr_22176_22209[(2)] = inst_22144);

(statearr_22176_22209[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (11))){
var inst_22125 = (state_22156[(7)]);
var inst_22126 = (state_22156[(10)]);
var inst_22128 = mail_system.core.collision_reaction.call(null,inst_22125,inst_22126);
var state_22156__$1 = state_22156;
var statearr_22177_22210 = state_22156__$1;
(statearr_22177_22210[(2)] = inst_22128);

(statearr_22177_22210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (9))){
var inst_22152 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22178_22211 = state_22156__$1;
(statearr_22178_22211[(2)] = inst_22152);

(statearr_22178_22211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (5))){
var inst_22111 = (state_22156[(9)]);
var state_22156__$1 = state_22156;
var statearr_22179_22212 = state_22156__$1;
(statearr_22179_22212[(2)] = inst_22111);

(statearr_22179_22212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (14))){
var inst_22125 = (state_22156[(7)]);
var inst_22132 = mail_system.core.hatch.call(null,inst_22125);
var state_22156__$1 = state_22156;
var statearr_22180_22213 = state_22156__$1;
(statearr_22180_22213[(2)] = inst_22132);

(statearr_22180_22213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (16))){
var inst_22146 = (state_22156[(2)]);
var state_22156__$1 = state_22156;
var statearr_22181_22214 = state_22156__$1;
(statearr_22181_22214[(2)] = inst_22146);

(statearr_22181_22214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (10))){
var inst_22125 = (state_22156[(7)]);
var inst_22126 = (state_22156[(10)]);
var inst_22122 = (state_22156[(2)]);
var inst_22123 = cljs.core.deref.call(null,mail_system.core.world);
var inst_22124 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_22125__$1 = cljs.core.get.call(null,inst_22123,inst_22124);
var inst_22126__$1 = mail_system.core.find_collision.call(null,inst_22125__$1);
var state_22156__$1 = (function (){var statearr_22182 = state_22156;
(statearr_22182[(7)] = inst_22125__$1);

(statearr_22182[(11)] = inst_22122);

(statearr_22182[(10)] = inst_22126__$1);

return statearr_22182;
})();
if(cljs.core.truth_(inst_22126__$1)){
var statearr_22183_22215 = state_22156__$1;
(statearr_22183_22215[(1)] = (11));

} else {
var statearr_22184_22216 = state_22156__$1;
(statearr_22184_22216[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (18))){
var state_22156__$1 = state_22156;
var statearr_22185_22217 = state_22156__$1;
(statearr_22185_22217[(2)] = null);

(statearr_22185_22217[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22157 === (8))){
var state_22156__$1 = state_22156;
var statearr_22186_22218 = state_22156__$1;
(statearr_22186_22218[(2)] = null);

(statearr_22186_22218[(1)] = (9));


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
var statearr_22190 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22190[(0)] = state_machine__18563__auto__);

(statearr_22190[(1)] = (1));

return statearr_22190;
});
var state_machine__18563__auto____1 = (function (state_22156){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_22156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e22191){if((e22191 instanceof Object)){
var ex__18566__auto__ = e22191;
var statearr_22192_22219 = state_22156;
(statearr_22192_22219[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22220 = state_22156;
state_22156 = G__22220;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_22156){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_22156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_22193 = f__18619__auto__.call(null);
(statearr_22193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_22193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
mail_system.core.in_mailboxes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
mail_system.core.setup_mols = (function setup_mols(init_mols){
cljs.core.reset_BANG_.call(null,mail_system.core.in_mailboxes,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_.call(null,mail_system.core.world,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),init_mols),init_mols));

var seq__22225 = cljs.core.seq.call(null,init_mols);
var chunk__22226 = null;
var count__22227 = (0);
var i__22228 = (0);
while(true){
if((i__22228 < count__22227)){
var mol = cljs.core._nth.call(null,chunk__22226,i__22228);
mail_system.core.molecule_reaction.call(null,mol);

var G__22229 = seq__22225;
var G__22230 = chunk__22226;
var G__22231 = count__22227;
var G__22232 = (i__22228 + (1));
seq__22225 = G__22229;
chunk__22226 = G__22230;
count__22227 = G__22231;
i__22228 = G__22232;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22225);
if(temp__4126__auto__){
var seq__22225__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22225__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__22225__$1);
var G__22233 = cljs.core.chunk_rest.call(null,seq__22225__$1);
var G__22234 = c__16932__auto__;
var G__22235 = cljs.core.count.call(null,c__16932__auto__);
var G__22236 = (0);
seq__22225 = G__22233;
chunk__22226 = G__22234;
count__22227 = G__22235;
i__22228 = G__22236;
continue;
} else {
var mol = cljs.core.first.call(null,seq__22225__$1);
mail_system.core.molecule_reaction.call(null,mol);

var G__22237 = cljs.core.next.call(null,seq__22225__$1);
var G__22238 = null;
var G__22239 = (0);
var G__22240 = (0);
seq__22225 = G__22237;
chunk__22226 = G__22238;
count__22227 = G__22239;
i__22228 = G__22240;
continue;
}
} else {
return null;
}
}
break;
}
});
mail_system.core.measurement = (function measurement(){
return [cljs.core.str("INBOXES "),cljs.core.str(cljs.core.deref.call(null,mail_system.core.in_mailboxes))].join('');
});
mail_system.core.tick = (function tick(){
mail_system.core.clear.call(null);

if(cljs.core.truth_(cljs.core.deref.call(null,mail_system.core.running))){
mail_system.core.draw_molecules.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mail_system.core.world)));

var answer = mail_system.core.measurement.call(null);
return enfocus.core.at.call(null,"#answer",enfocus.core.content.call(null,[cljs.core.str(answer)].join('')));
} else {
return mail_system.core.setLoading.call(null,mail_system.core.context);
}
});
mail_system.core.time_loop = (function time_loop(){
var c__18618__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18618__auto__){
return (function (){
var f__18619__auto__ = (function (){var switch__18562__auto__ = ((function (c__18618__auto__){
return (function (state_22263){
var state_val_22264 = (state_22263[(1)]);
if((state_val_22264 === (2))){
var inst_22259 = (state_22263[(2)]);
var inst_22260 = mail_system.core.tick.call(null);
var inst_22261 = window.requestAnimationFrame(time_loop);
var state_22263__$1 = (function (){var statearr_22265 = state_22263;
(statearr_22265[(7)] = inst_22259);

(statearr_22265[(8)] = inst_22260);

return statearr_22265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22263__$1,inst_22261);
} else {
if((state_val_22264 === (1))){
var inst_22257 = cljs.core.async.timeout.call(null,(30));
var state_22263__$1 = state_22263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22263__$1,(2),inst_22257);
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
var statearr_22269 = [null,null,null,null,null,null,null,null,null];
(statearr_22269[(0)] = state_machine__18563__auto__);

(statearr_22269[(1)] = (1));

return statearr_22269;
});
var state_machine__18563__auto____1 = (function (state_22263){
while(true){
var ret_value__18564__auto__ = (function (){try{while(true){
var result__18565__auto__ = switch__18562__auto__.call(null,state_22263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18565__auto__;
}
break;
}
}catch (e22270){if((e22270 instanceof Object)){
var ex__18566__auto__ = e22270;
var statearr_22271_22273 = state_22263;
(statearr_22271_22273[(5)] = ex__18566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22274 = state_22263;
state_22263 = G__22274;
continue;
} else {
return ret_value__18564__auto__;
}
break;
}
});
state_machine__18563__auto__ = function(state_22263){
switch(arguments.length){
case 0:
return state_machine__18563__auto____0.call(this);
case 1:
return state_machine__18563__auto____1.call(this,state_22263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18563__auto____0;
state_machine__18563__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18563__auto____1;
return state_machine__18563__auto__;
})()
;})(switch__18562__auto__,c__18618__auto__))
})();
var state__18620__auto__ = (function (){var statearr_22272 = f__18619__auto__.call(null);
(statearr_22272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18618__auto__);

return statearr_22272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18620__auto__);
});})(c__18618__auto__))
);

return c__18618__auto__;
});
mail_system.core.run = (function run(){
return window.requestAnimationFrame((function (_){
return mail_system.core.time_loop.call(null);
}));
});
mail_system.core.start = (function start(){
return cljs.core.reset_BANG_.call(null,mail_system.core.running,true);
});
mail_system.core.stop = (function stop(){
return cljs.core.reset_BANG_.call(null,mail_system.core.running,false);
});
mail_system.core.server_a = (function server_a(mol){
var to_server = [cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)))].join('');
if(cljs.core._EQ_.call(null,to_server,"a")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
}
});
mail_system.core.server_b = (function server_b(mol){
var to_server = [cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)))].join('');
if(cljs.core._EQ_.call(null,to_server,"b")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
}
});
mail_system.core.network = (function network(mol){
var to_server = [cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)))].join('');
if(cljs.core._EQ_.call(null,to_server,"b")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
}
});
mail_system.core.in_mail_a1 = (function in_mail_a1(mol){
cljs.core.swap_BANG_.call(null,mail_system.core.in_mailboxes,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a1","a1",553780937)], null),cljs.core.inc);

return cljs.core.PersistentVector.EMPTY;
});
mail_system.core.in_mail_a2 = (function in_mail_a2(mol){
cljs.core.swap_BANG_.call(null,mail_system.core.in_mailboxes,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a2","a2",424956801)], null),cljs.core.inc);

return cljs.core.PersistentVector.EMPTY;
});
mail_system.core.in_mail_b1 = (function in_mail_b1(mol){
cljs.core.swap_BANG_.call(null,mail_system.core.in_mailboxes,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b1","b1",-1270036758)], null),cljs.core.inc);

return cljs.core.PersistentVector.EMPTY;
});
mail_system.core.in_mail_b2 = (function in_mail_b2(mol){
cljs.core.swap_BANG_.call(null,mail_system.core.in_mailboxes,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b2","b2",1108940514)], null),cljs.core.inc);

return cljs.core.PersistentVector.EMPTY;
});
mail_system.core.crash = (function crash(mol){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),"inactive-server",new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mol),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
});
mail_system.core.fixes = (function fixes(mol){
var server = (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mol) < (300)))?mail_system.core.server_a:mail_system.core.server_b);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),server,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mol),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
});
mail_system.core.gen_mail_molecule = (function gen_mail_molecule(x,y,val){
return cljs.core.assoc.call(null,mail_system.core.gen_molecule.call(null,val),new cljs.core.Keyword(null,"d","d",1972142424),(10),new cljs.core.Keyword(null,"color","color",1011675173),"pink",new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});
mail_system.core.gen_server_crash_molecule = (function gen_server_crash_molecule(x,y){
return cljs.core.assoc.call(null,mail_system.core.gen_molecule.call(null,cljs.core.val),new cljs.core.Keyword(null,"d","d",1972142424),(18),new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"val","val",128701612),mail_system.core.crash,new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),(function (v){
return (cljs.core._EQ_.call(null,v,mail_system.core.server_a)) || (cljs.core._EQ_.call(null,v,mail_system.core.server_b));
}),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"one-shot?","one-shot?",409278734),true);
});
mail_system.core.gen_server_fixes_molecule = (function gen_server_fixes_molecule(x,y){
return cljs.core.assoc.call(null,mail_system.core.gen_molecule.call(null,cljs.core.val),new cljs.core.Keyword(null,"d","d",1972142424),(18),new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"val","val",128701612),mail_system.core.fixes,new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),(function (v){
return cljs.core._EQ_.call(null,v,"inactive");
}),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY);
});
mail_system.core.gen_in_mailbox_molecule = (function gen_in_mailbox_molecule(x,y,val,mailbox_address){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,(function (v){
return cljs.core._EQ_.call(null,v,mailbox_address);
}),0.0,"wheat",0.0,val,cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),(40),x]);
});
mail_system.core.gen_network_molecule = (function gen_network_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,(function (v){
return true;
}),0.0,"lightgreen",0.0,mail_system.core.network,cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),(40),x]);
});
mail_system.core.gen_membrane_mol = (function gen_membrane_mol(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,(function (v){
return false;
}),0.0,"lightgray",0.0,"",cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),(20),x]);
});
mail_system.core.gen_server_molecule = (function gen_server_molecule(x,y,val){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,(function (v){
return typeof v === 'string';
}),0.0,"lightblue",0.0,val,cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),(35),x]);
});
mail_system.core.gen_inactive_server_molecule = (function gen_inactive_server_molecule(x,y){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"d","d",1972142424),(35),new cljs.core.Keyword(null,"val","val",128701612),"inactive",new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey",new cljs.core.Keyword(null,"dx","dx",-381796732),0.0,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null);
});
mail_system.core.gen_messages = (function gen_messages(to,n){
var G__22280 = to;
switch (G__22280) {
case "b1":
return cljs.core.mapv.call(null,((function (G__22280){
return (function (p1__22275_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__22275_SHARP_,(200),to);
});})(G__22280))
,cljs.core.repeatedly.call(null,n,((function (G__22280){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__22280))
));

break;
case "b2":
return cljs.core.mapv.call(null,((function (G__22280){
return (function (p1__22276_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__22276_SHARP_,(400),to);
});})(G__22280))
,cljs.core.repeatedly.call(null,n,((function (G__22280){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__22280))
));

break;
case "a1":
return cljs.core.mapv.call(null,((function (G__22280){
return (function (p1__22277_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__22277_SHARP_,(200),to);
});})(G__22280))
,cljs.core.repeatedly.call(null,n,((function (G__22280){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__22280))
));

break;
case "a2":
return cljs.core.mapv.call(null,((function (G__22280){
return (function (p1__22278_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__22278_SHARP_,(400),to);
});})(G__22280))
,cljs.core.repeatedly.call(null,n,((function (G__22280){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__22280))
));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(to)].join('')));

}
});
mail_system.core.gen_server_crash = (function gen_server_crash(to,n){
var G__22285 = to;
switch (G__22285) {
case "b":
return cljs.core.mapv.call(null,((function (G__22285){
return (function (p1__22282_SHARP_){
return mail_system.core.gen_server_crash_molecule.call(null,p1__22282_SHARP_,(300));
});})(G__22285))
,cljs.core.repeatedly.call(null,n,((function (G__22285){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__22285))
));

break;
case "a":
return cljs.core.mapv.call(null,((function (G__22285){
return (function (p1__22283_SHARP_){
return mail_system.core.gen_server_crash_molecule.call(null,p1__22283_SHARP_,(300));
});})(G__22285))
,cljs.core.repeatedly.call(null,n,((function (G__22285){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__22285))
));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(to)].join('')));

}
});
mail_system.core.gen_server_fixes = (function gen_server_fixes(to,n){
var G__22290 = to;
switch (G__22290) {
case "b":
return cljs.core.mapv.call(null,((function (G__22290){
return (function (p1__22287_SHARP_){
return mail_system.core.gen_server_fixes_molecule.call(null,p1__22287_SHARP_,(350));
});})(G__22290))
,cljs.core.repeatedly.call(null,n,((function (G__22290){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__22290))
));

break;
case "a":
return cljs.core.mapv.call(null,((function (G__22290){
return (function (p1__22288_SHARP_){
return mail_system.core.gen_server_fixes_molecule.call(null,p1__22288_SHARP_,(350));
});})(G__22290))
,cljs.core.repeatedly.call(null,n,((function (G__22290){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__22290))
));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(to)].join('')));

}
});
mail_system.core.mail_system_mols = cljs.core.concat.call(null,cljs.core.mapv.call(null,(function (p1__22292_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(300),p1__22292_SHARP_);
}),cljs.core.range.call(null,(0),(270),(40))),cljs.core.mapv.call(null,(function (p1__22293_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(300),p1__22293_SHARP_);
}),cljs.core.range.call(null,(350),(630),(40))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_network_molecule.call(null,(300),(300))], null),cljs.core.mapv.call(null,(function (p1__22294_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__22294_SHARP_);
}),cljs.core.range.call(null,(0),(170),(40))),cljs.core.mapv.call(null,(function (p1__22295_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__22295_SHARP_);
}),cljs.core.range.call(null,(250),(260),(40))),cljs.core.mapv.call(null,(function (p1__22296_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__22296_SHARP_);
}),cljs.core.range.call(null,(350),(390),(40))),cljs.core.mapv.call(null,(function (p1__22297_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__22297_SHARP_);
}),cljs.core.range.call(null,(450),(630),(40))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_server_molecule.call(null,(200),(200),mail_system.core.server_a),mail_system.core.gen_server_molecule.call(null,(200),(300),mail_system.core.server_a),mail_system.core.gen_server_molecule.call(null,(200),(400),mail_system.core.server_a)], null),cljs.core.mapv.call(null,(function (p1__22298_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__22298_SHARP_);
}),cljs.core.range.call(null,(0),(170),(40))),cljs.core.mapv.call(null,(function (p1__22299_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__22299_SHARP_);
}),cljs.core.range.call(null,(250),(260),(40))),cljs.core.mapv.call(null,(function (p1__22300_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__22300_SHARP_);
}),cljs.core.range.call(null,(350),(390),(40))),cljs.core.mapv.call(null,(function (p1__22301_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__22301_SHARP_);
}),cljs.core.range.call(null,(450),(630),(40))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_server_molecule.call(null,(400),(200),mail_system.core.server_b),mail_system.core.gen_server_molecule.call(null,(400),(300),mail_system.core.server_b),mail_system.core.gen_server_molecule.call(null,(400),(400),mail_system.core.server_b)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_in_mailbox_molecule.call(null,(60),(50),mail_system.core.in_mail_a1,"a1"),mail_system.core.gen_in_mailbox_molecule.call(null,(540),(50),mail_system.core.in_mail_b1,"b1")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_in_mailbox_molecule.call(null,(60),(550),mail_system.core.in_mail_a2,"a2"),mail_system.core.gen_in_mailbox_molecule.call(null,(540),(550),mail_system.core.in_mail_b2,"b2")], null),cljs.core.mapv.call(null,(function (p1__22302_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(0),p1__22302_SHARP_);
}),cljs.core.range.call(null,(0),(650),(40))),cljs.core.mapv.call(null,(function (p1__22303_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(600),p1__22303_SHARP_);
}),cljs.core.range.call(null,(0),(650),(40))),mail_system.core.gen_messages.call(null,"b1",(5)),mail_system.core.gen_messages.call(null,"b2",(5)),mail_system.core.gen_messages.call(null,"a1",(5)),mail_system.core.gen_messages.call(null,"a2",(5)),mail_system.core.gen_server_crash.call(null,"a",(2)),mail_system.core.gen_server_crash.call(null,"b",(2)),mail_system.core.gen_server_fixes.call(null,"a",(1)),mail_system.core.gen_server_fixes.call(null,"b",(1)));
mail_system.core.mail_system = (function mail_system__$1(){
return mail_system.core.setup_mols.call(null,mail_system.core.mail_system_mols);
});
mail_system.core.add_mols_to_system = (function add_mols_to_system(mols){
cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.merge,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),mols),mols));

var seq__22308 = cljs.core.seq.call(null,mols);
var chunk__22309 = null;
var count__22310 = (0);
var i__22311 = (0);
while(true){
if((i__22311 < count__22310)){
var mol = cljs.core._nth.call(null,chunk__22309,i__22311);
mail_system.core.molecule_reaction.call(null,mol);

var G__22312 = seq__22308;
var G__22313 = chunk__22309;
var G__22314 = count__22310;
var G__22315 = (i__22311 + (1));
seq__22308 = G__22312;
chunk__22309 = G__22313;
count__22310 = G__22314;
i__22311 = G__22315;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22308);
if(temp__4126__auto__){
var seq__22308__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22308__$1)){
var c__16932__auto__ = cljs.core.chunk_first.call(null,seq__22308__$1);
var G__22316 = cljs.core.chunk_rest.call(null,seq__22308__$1);
var G__22317 = c__16932__auto__;
var G__22318 = cljs.core.count.call(null,c__16932__auto__);
var G__22319 = (0);
seq__22308 = G__22316;
chunk__22309 = G__22317;
count__22310 = G__22318;
i__22311 = G__22319;
continue;
} else {
var mol = cljs.core.first.call(null,seq__22308__$1);
mail_system.core.molecule_reaction.call(null,mol);

var G__22320 = cljs.core.next.call(null,seq__22308__$1);
var G__22321 = null;
var G__22322 = (0);
var G__22323 = (0);
seq__22308 = G__22320;
chunk__22309 = G__22321;
count__22310 = G__22322;
i__22311 = G__22323;
continue;
}
} else {
return null;
}
}
break;
}
});
mail_system.core.more_mail = (function more_mail(){
var mols = cljs.core.concat.call(null,mail_system.core.gen_messages.call(null,"b1",(2)),mail_system.core.gen_messages.call(null,"b2",(2)),mail_system.core.gen_messages.call(null,"a1",(2)),mail_system.core.gen_messages.call(null,"a2",(2)));
return mail_system.core.add_mols_to_system.call(null,mols);
});
mail_system.core.more_server_crashes = (function more_server_crashes(){
var mols = cljs.core.concat.call(null,mail_system.core.gen_server_crash.call(null,"a",(1)),mail_system.core.gen_server_crash.call(null,"b",(1)));
return mail_system.core.add_mols_to_system.call(null,mols);
});
mail_system.core.clear.call(null);
mail_system.core.start.call(null);
mail_system.core.run.call(null);
mail_system.core.mail_system.call(null);
enfocus.core.at.call(null,"#more-mail",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return mail_system.core.add_mols_to_system.call(null,mail_system.core.more_mail.call(null));
})),"#more-server-crashes",enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return mail_system.core.add_mols_to_system.call(null,mail_system.core.more_server_crashes.call(null));
})));

//# sourceMappingURL=core.js.map?rel=1435014975876