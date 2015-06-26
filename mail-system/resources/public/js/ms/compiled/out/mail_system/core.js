// Compiled by ClojureScript 0.0-2850 {}
goog.provide('mail_system.core');
goog.require('cljs.core');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
mail_system.core.canvas = document.getElementById("mail-canvas");
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
var G__8789 = context;
mail_system.core.setText.call(null,G__8789,"grey","bold 30px Arial");

G__8789.fillText("Ready?",(180),(250));

return G__8789;
});
mail_system.core.clear = (function clear(){
var G__8791 = mail_system.core.context;
mail_system.core.setColor.call(null,G__8791,mail_system.core.background);

G__8791.fillRect((0),(0),mail_system.core.width,mail_system.core.height);

return G__8791;
});
mail_system.core.draw_circle = (function draw_circle(context,color,diam,x,y){
var G__8793 = context;
mail_system.core.setColor.call(null,G__8793,color);

G__8793.beginPath();

G__8793.arc(x,y,diam,(0),((2) * Math.PI),true);

G__8793.closePath();

G__8793.fill();

return G__8793;
});
mail_system.core.draw_molecule = (function draw_molecule(p__8794){
var map__8797 = p__8794;
var map__8797__$1 = ((cljs.core.seq_QMARK_.call(null,map__8797))?cljs.core.apply.call(null,cljs.core.hash_map,map__8797):map__8797);
var args = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var val = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"val","val",128701612));
var d = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__8797__$1,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.truth_(val)){
var display_val = ((cljs.core._EQ_.call(null,mail_system.core.server_a,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"server-a","server-a",1732785095)):((cljs.core._EQ_.call(null,mail_system.core.server_b,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"server-b","server-b",-1534725303)):((cljs.core._EQ_.call(null,mail_system.core.network,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"network","network",2050004697)):((cljs.core._EQ_.call(null,mail_system.core.in_mail_a1,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"in-mail-a1","in-mail-a1",113875827)):((cljs.core._EQ_.call(null,mail_system.core.in_mail_a2,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"in-mail-a2","in-mail-a2",1651150918)):((cljs.core._EQ_.call(null,mail_system.core.in_mail_b1,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"in-mail-b1","in-mail-b1",162896748)):((cljs.core._EQ_.call(null,mail_system.core.in_mail_b2,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"in-mail-a1","in-mail-a1",113875827)):((cljs.core._EQ_.call(null,mail_system.core.crash,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"crash","crash",-1024911330)):((cljs.core._EQ_.call(null,mail_system.core.fixes,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"fixes","fixes",-1313940430)):val.name
)))))))));
mail_system.core.draw_circle.call(null,mail_system.core.context,color,d,x,y);

var G__8798 = mail_system.core.context;
mail_system.core.setText.call(null,G__8798,"black","bold 11px Courier");

G__8798.fillText([cljs.core.str(display_val)].join(''),(x - (cljs.core.count.call(null,display_val) * (3))),(y + (5)));

return G__8798;
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
mail_system.core.move_molecule = (function move_molecule(p__8799,collide_QMARK_){
var map__8801 = p__8799;
var map__8801__$1 = ((cljs.core.seq_QMARK_.call(null,map__8801))?cljs.core.apply.call(null,cljs.core.hash_map,map__8801):map__8801);
var molecule = map__8801__$1;
var dy = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var dx = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var d = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__8801__$1,new cljs.core.Keyword(null,"x","x",2099068185));
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
var G__8803 = (((move_direction instanceof cljs.core.Keyword))?move_direction.fqn:null);
switch (G__8803) {
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
return mail_system.core.gen_molecule_by_val.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(m),(function (){var or__3815__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(fn_mol);
}
})(),(function (){var or__3815__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(fn_mol);
}
})(),(function (){var or__3815__auto__ = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
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
var c__6047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6047__auto__){
return (function (){
var f__6048__auto__ = (function (){var switch__6032__auto__ = ((function (c__6047__auto__){
return (function (state_8935){
var state_val_8936 = (state_8935[(1)]);
if((state_val_8936 === (7))){
var inst_8899 = cljs.core.async.timeout.call(null,(60));
var state_8935__$1 = state_8935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8935__$1,(10),inst_8899);
} else {
if((state_val_8936 === (20))){
var inst_8904 = (state_8935[(7)]);
var inst_8915 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_8916 = mail_system.core.move_molecule.call(null,inst_8904,false);
var inst_8917 = cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.assoc,inst_8915,inst_8916);
var state_8935__$1 = state_8935;
var statearr_8937_8973 = state_8935__$1;
(statearr_8937_8973[(2)] = inst_8917);

(statearr_8937_8973[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (1))){
var state_8935__$1 = state_8935;
var statearr_8938_8974 = state_8935__$1;
(statearr_8938_8974[(2)] = null);

(statearr_8938_8974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (4))){
var inst_8892 = cljs.core.deref.call(null,mail_system.core.world);
var inst_8893 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_8894 = cljs.core.get.call(null,inst_8892,inst_8893);
var state_8935__$1 = state_8935;
var statearr_8939_8975 = state_8935__$1;
(statearr_8939_8975[(2)] = inst_8894);

(statearr_8939_8975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (15))){
var state_8935__$1 = state_8935;
var statearr_8940_8976 = state_8935__$1;
(statearr_8940_8976[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (21))){
var state_8935__$1 = state_8935;
var statearr_8942_8977 = state_8935__$1;
(statearr_8942_8977[(2)] = null);

(statearr_8942_8977[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (13))){
var inst_8927 = (state_8935[(2)]);
var state_8935__$1 = (function (){var statearr_8943 = state_8935;
(statearr_8943[(8)] = inst_8927);

return statearr_8943;
})();
var statearr_8944_8978 = state_8935__$1;
(statearr_8944_8978[(2)] = null);

(statearr_8944_8978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (22))){
var inst_8920 = (state_8935[(2)]);
var state_8935__$1 = state_8935;
var statearr_8945_8979 = state_8935__$1;
(statearr_8945_8979[(2)] = inst_8920);

(statearr_8945_8979[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (6))){
var inst_8897 = (state_8935[(2)]);
var state_8935__$1 = state_8935;
if(cljs.core.truth_(inst_8897)){
var statearr_8946_8980 = state_8935__$1;
(statearr_8946_8980[(1)] = (7));

} else {
var statearr_8947_8981 = state_8935__$1;
(statearr_8947_8981[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (17))){
var inst_8904 = (state_8935[(7)]);
var state_8935__$1 = state_8935;
if(cljs.core.truth_(inst_8904)){
var statearr_8948_8982 = state_8935__$1;
(statearr_8948_8982[(1)] = (20));

} else {
var statearr_8949_8983 = state_8935__$1;
(statearr_8949_8983[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (3))){
var inst_8933 = (state_8935[(2)]);
var state_8935__$1 = state_8935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8935__$1,inst_8933);
} else {
if((state_val_8936 === (12))){
var inst_8904 = (state_8935[(7)]);
var inst_8909 = mail_system.core.hatch_QMARK_.call(null,inst_8904);
var state_8935__$1 = state_8935;
if(cljs.core.truth_(inst_8909)){
var statearr_8950_8984 = state_8935__$1;
(statearr_8950_8984[(1)] = (14));

} else {
var statearr_8951_8985 = state_8935__$1;
(statearr_8951_8985[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (2))){
var inst_8890 = (state_8935[(9)]);
var inst_8890__$1 = cljs.core.deref.call(null,mail_system.core.running);
var state_8935__$1 = (function (){var statearr_8952 = state_8935;
(statearr_8952[(9)] = inst_8890__$1);

return statearr_8952;
})();
if(cljs.core.truth_(inst_8890__$1)){
var statearr_8953_8986 = state_8935__$1;
(statearr_8953_8986[(1)] = (4));

} else {
var statearr_8954_8987 = state_8935__$1;
(statearr_8954_8987[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (19))){
var inst_8923 = (state_8935[(2)]);
var state_8935__$1 = state_8935;
var statearr_8955_8988 = state_8935__$1;
(statearr_8955_8988[(2)] = inst_8923);

(statearr_8955_8988[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (11))){
var inst_8904 = (state_8935[(7)]);
var inst_8905 = (state_8935[(10)]);
var inst_8907 = mail_system.core.collision_reaction.call(null,inst_8904,inst_8905);
var state_8935__$1 = state_8935;
var statearr_8956_8989 = state_8935__$1;
(statearr_8956_8989[(2)] = inst_8907);

(statearr_8956_8989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (9))){
var inst_8931 = (state_8935[(2)]);
var state_8935__$1 = state_8935;
var statearr_8957_8990 = state_8935__$1;
(statearr_8957_8990[(2)] = inst_8931);

(statearr_8957_8990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (5))){
var inst_8890 = (state_8935[(9)]);
var state_8935__$1 = state_8935;
var statearr_8958_8991 = state_8935__$1;
(statearr_8958_8991[(2)] = inst_8890);

(statearr_8958_8991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (14))){
var inst_8904 = (state_8935[(7)]);
var inst_8911 = mail_system.core.hatch.call(null,inst_8904);
var state_8935__$1 = state_8935;
var statearr_8959_8992 = state_8935__$1;
(statearr_8959_8992[(2)] = inst_8911);

(statearr_8959_8992[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (16))){
var inst_8925 = (state_8935[(2)]);
var state_8935__$1 = state_8935;
var statearr_8960_8993 = state_8935__$1;
(statearr_8960_8993[(2)] = inst_8925);

(statearr_8960_8993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (10))){
var inst_8904 = (state_8935[(7)]);
var inst_8905 = (state_8935[(10)]);
var inst_8901 = (state_8935[(2)]);
var inst_8902 = cljs.core.deref.call(null,mail_system.core.world);
var inst_8903 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_8904__$1 = cljs.core.get.call(null,inst_8902,inst_8903);
var inst_8905__$1 = mail_system.core.find_collision.call(null,inst_8904__$1);
var state_8935__$1 = (function (){var statearr_8961 = state_8935;
(statearr_8961[(7)] = inst_8904__$1);

(statearr_8961[(11)] = inst_8901);

(statearr_8961[(10)] = inst_8905__$1);

return statearr_8961;
})();
if(cljs.core.truth_(inst_8905__$1)){
var statearr_8962_8994 = state_8935__$1;
(statearr_8962_8994[(1)] = (11));

} else {
var statearr_8963_8995 = state_8935__$1;
(statearr_8963_8995[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (18))){
var state_8935__$1 = state_8935;
var statearr_8964_8996 = state_8935__$1;
(statearr_8964_8996[(2)] = null);

(statearr_8964_8996[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8936 === (8))){
var state_8935__$1 = state_8935;
var statearr_8965_8997 = state_8935__$1;
(statearr_8965_8997[(2)] = null);

(statearr_8965_8997[(1)] = (9));


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
var statearr_8969 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8969[(0)] = state_machine__6033__auto__);

(statearr_8969[(1)] = (1));

return statearr_8969;
});
var state_machine__6033__auto____1 = (function (state_8935){
while(true){
var ret_value__6034__auto__ = (function (){try{while(true){
var result__6035__auto__ = switch__6032__auto__.call(null,state_8935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6035__auto__;
}
break;
}
}catch (e8970){if((e8970 instanceof Object)){
var ex__6036__auto__ = e8970;
var statearr_8971_8998 = state_8935;
(statearr_8971_8998[(5)] = ex__6036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8999 = state_8935;
state_8935 = G__8999;
continue;
} else {
return ret_value__6034__auto__;
}
break;
}
});
state_machine__6033__auto__ = function(state_8935){
switch(arguments.length){
case 0:
return state_machine__6033__auto____0.call(this);
case 1:
return state_machine__6033__auto____1.call(this,state_8935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6033__auto____0;
state_machine__6033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6033__auto____1;
return state_machine__6033__auto__;
})()
;})(switch__6032__auto__,c__6047__auto__))
})();
var state__6049__auto__ = (function (){var statearr_8972 = f__6048__auto__.call(null);
(statearr_8972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6047__auto__);

return statearr_8972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6049__auto__);
});})(c__6047__auto__))
);

return c__6047__auto__;
});
mail_system.core.in_mailboxes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
mail_system.core.setup_mols = (function setup_mols(init_mols){
cljs.core.reset_BANG_.call(null,mail_system.core.in_mailboxes,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_.call(null,mail_system.core.world,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),init_mols),init_mols));

var seq__9004 = cljs.core.seq.call(null,init_mols);
var chunk__9005 = null;
var count__9006 = (0);
var i__9007 = (0);
while(true){
if((i__9007 < count__9006)){
var mol = cljs.core._nth.call(null,chunk__9005,i__9007);
mail_system.core.molecule_reaction.call(null,mol);

var G__9008 = seq__9004;
var G__9009 = chunk__9005;
var G__9010 = count__9006;
var G__9011 = (i__9007 + (1));
seq__9004 = G__9008;
chunk__9005 = G__9009;
count__9006 = G__9010;
i__9007 = G__9011;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9004);
if(temp__4126__auto__){
var seq__9004__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9004__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__9004__$1);
var G__9012 = cljs.core.chunk_rest.call(null,seq__9004__$1);
var G__9013 = c__4602__auto__;
var G__9014 = cljs.core.count.call(null,c__4602__auto__);
var G__9015 = (0);
seq__9004 = G__9012;
chunk__9005 = G__9013;
count__9006 = G__9014;
i__9007 = G__9015;
continue;
} else {
var mol = cljs.core.first.call(null,seq__9004__$1);
mail_system.core.molecule_reaction.call(null,mol);

var G__9016 = cljs.core.next.call(null,seq__9004__$1);
var G__9017 = null;
var G__9018 = (0);
var G__9019 = (0);
seq__9004 = G__9016;
chunk__9005 = G__9017;
count__9006 = G__9018;
i__9007 = G__9019;
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
return enfocus.core.at.call(null,"#mail-answer",enfocus.core.content.call(null,[cljs.core.str(answer)].join('')));
} else {
return mail_system.core.setLoading.call(null,mail_system.core.context);
}
});
mail_system.core.time_loop = (function time_loop(){
var c__6047__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6047__auto__){
return (function (){
var f__6048__auto__ = (function (){var switch__6032__auto__ = ((function (c__6047__auto__){
return (function (state_9042){
var state_val_9043 = (state_9042[(1)]);
if((state_val_9043 === (2))){
var inst_9038 = (state_9042[(2)]);
var inst_9039 = mail_system.core.tick.call(null);
var inst_9040 = window.requestAnimationFrame(time_loop);
var state_9042__$1 = (function (){var statearr_9044 = state_9042;
(statearr_9044[(7)] = inst_9038);

(statearr_9044[(8)] = inst_9039);

return statearr_9044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9042__$1,inst_9040);
} else {
if((state_val_9043 === (1))){
var inst_9036 = cljs.core.async.timeout.call(null,(30));
var state_9042__$1 = state_9042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9042__$1,(2),inst_9036);
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
var statearr_9048 = [null,null,null,null,null,null,null,null,null];
(statearr_9048[(0)] = state_machine__6033__auto__);

(statearr_9048[(1)] = (1));

return statearr_9048;
});
var state_machine__6033__auto____1 = (function (state_9042){
while(true){
var ret_value__6034__auto__ = (function (){try{while(true){
var result__6035__auto__ = switch__6032__auto__.call(null,state_9042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6035__auto__;
}
break;
}
}catch (e9049){if((e9049 instanceof Object)){
var ex__6036__auto__ = e9049;
var statearr_9050_9052 = state_9042;
(statearr_9050_9052[(5)] = ex__6036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9053 = state_9042;
state_9042 = G__9053;
continue;
} else {
return ret_value__6034__auto__;
}
break;
}
});
state_machine__6033__auto__ = function(state_9042){
switch(arguments.length){
case 0:
return state_machine__6033__auto____0.call(this);
case 1:
return state_machine__6033__auto____1.call(this,state_9042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6033__auto____0;
state_machine__6033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6033__auto____1;
return state_machine__6033__auto__;
})()
;})(switch__6032__auto__,c__6047__auto__))
})();
var state__6049__auto__ = (function (){var statearr_9051 = f__6048__auto__.call(null);
(statearr_9051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6047__auto__);

return statearr_9051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6049__auto__);
});})(c__6047__auto__))
);

return c__6047__auto__;
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
var to_server = cljs.core.keyword.call(null,[cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol).name))].join(''));
if(cljs.core._EQ_.call(null,to_server,new cljs.core.Keyword(null,"a","a",-2123407586))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
}
});
mail_system.core.server_b = (function server_b(mol){
var to_server = cljs.core.keyword.call(null,[cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol).name))].join(''));
if(cljs.core._EQ_.call(null,to_server,new cljs.core.Keyword(null,"b","b",1482224470))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol)], null)], null);
}
});
mail_system.core.network = (function network(mol){
var to_server = cljs.core.keyword.call(null,[cljs.core.str(cljs.core.first.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(mol).name))].join(''));
if(cljs.core._EQ_.call(null,to_server,new cljs.core.Keyword(null,"b","b",1482224470))){
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
return cljs.core._EQ_.call(null,v,new cljs.core.Keyword(null,"inactive","inactive",-306247616));
}),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY);
});
mail_system.core.gen_in_mailbox_molecule = (function gen_in_mailbox_molecule(x,y,val,mailbox_address){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,(function (v){
return cljs.core._EQ_.call(null,v,mailbox_address);
}),0.0,"wheat",0.0,val,cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),(40),x]);
});
mail_system.core.gen_network_molecule = (function gen_network_molecule(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,(function (v){
return (v instanceof cljs.core.Keyword);
}),0.0,"lightgreen",0.0,mail_system.core.network,cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),(40),x]);
});
mail_system.core.gen_membrane_mol = (function gen_membrane_mol(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,(function (v){
return false;
}),0.0,"lightgray",0.0,"",cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),(20),x]);
});
mail_system.core.gen_server_molecule = (function gen_server_molecule(x,y,val){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"allowed-arg-fn","allowed-arg-fn",1264202177),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"x","x",2099068185)],[y,cljs.core.PersistentVector.EMPTY,(function (v){
return (v instanceof cljs.core.Keyword);
}),0.0,"lightblue",0.0,val,cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),(35),x]);
});
mail_system.core.gen_inactive_server_molecule = (function gen_inactive_server_molecule(x,y){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,mail_system.core.mol_id_counter,cljs.core.inc),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"d","d",1972142424),(35),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"inactive","inactive",-306247616),new cljs.core.Keyword(null,"color","color",1011675173),"lightgrey",new cljs.core.Keyword(null,"dx","dx",-381796732),0.0,new cljs.core.Keyword(null,"dy","dy",1719547243),0.0], null);
});
mail_system.core.gen_messages = (function gen_messages(to,n){
var G__9059 = (((to instanceof cljs.core.Keyword))?to.fqn:null);
switch (G__9059) {
case "a2":
return cljs.core.mapv.call(null,((function (G__9059){
return (function (p1__9057_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__9057_SHARP_,(400),to);
});})(G__9059))
,cljs.core.repeatedly.call(null,n,((function (G__9059){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__9059))
));

break;
case "a1":
return cljs.core.mapv.call(null,((function (G__9059){
return (function (p1__9056_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__9056_SHARP_,(200),to);
});})(G__9059))
,cljs.core.repeatedly.call(null,n,((function (G__9059){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__9059))
));

break;
case "b2":
return cljs.core.mapv.call(null,((function (G__9059){
return (function (p1__9055_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__9055_SHARP_,(400),to);
});})(G__9059))
,cljs.core.repeatedly.call(null,n,((function (G__9059){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__9059))
));

break;
case "b1":
return cljs.core.mapv.call(null,((function (G__9059){
return (function (p1__9054_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__9054_SHARP_,(200),to);
});})(G__9059))
,cljs.core.repeatedly.call(null,n,((function (G__9059){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__9059))
));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(to)].join('')));

}
});
mail_system.core.gen_server_crash = (function gen_server_crash(to,n){
var G__9064 = (((to instanceof cljs.core.Keyword))?to.fqn:null);
switch (G__9064) {
case "a":
return cljs.core.mapv.call(null,((function (G__9064){
return (function (p1__9062_SHARP_){
return mail_system.core.gen_server_crash_molecule.call(null,p1__9062_SHARP_,(300));
});})(G__9064))
,cljs.core.repeatedly.call(null,n,((function (G__9064){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__9064))
));

break;
case "b":
return cljs.core.mapv.call(null,((function (G__9064){
return (function (p1__9061_SHARP_){
return mail_system.core.gen_server_crash_molecule.call(null,p1__9061_SHARP_,(300));
});})(G__9064))
,cljs.core.repeatedly.call(null,n,((function (G__9064){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__9064))
));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(to)].join('')));

}
});
mail_system.core.gen_server_fixes = (function gen_server_fixes(to,n){
var G__9069 = (((to instanceof cljs.core.Keyword))?to.fqn:null);
switch (G__9069) {
case "a":
return cljs.core.mapv.call(null,((function (G__9069){
return (function (p1__9067_SHARP_){
return mail_system.core.gen_server_fixes_molecule.call(null,p1__9067_SHARP_,(350));
});})(G__9069))
,cljs.core.repeatedly.call(null,n,((function (G__9069){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__9069))
));

break;
case "b":
return cljs.core.mapv.call(null,((function (G__9069){
return (function (p1__9066_SHARP_){
return mail_system.core.gen_server_fixes_molecule.call(null,p1__9066_SHARP_,(350));
});})(G__9069))
,cljs.core.repeatedly.call(null,n,((function (G__9069){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__9069))
));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(to)].join('')));

}
});
mail_system.core.mail_system_mols = cljs.core.concat.call(null,cljs.core.mapv.call(null,(function (p1__9071_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(300),p1__9071_SHARP_);
}),cljs.core.range.call(null,(0),(270),(40))),cljs.core.mapv.call(null,(function (p1__9072_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(300),p1__9072_SHARP_);
}),cljs.core.range.call(null,(350),(630),(40))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_network_molecule.call(null,(300),(300))], null),cljs.core.mapv.call(null,(function (p1__9073_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__9073_SHARP_);
}),cljs.core.range.call(null,(0),(170),(40))),cljs.core.mapv.call(null,(function (p1__9074_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__9074_SHARP_);
}),cljs.core.range.call(null,(250),(260),(40))),cljs.core.mapv.call(null,(function (p1__9075_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__9075_SHARP_);
}),cljs.core.range.call(null,(350),(390),(40))),cljs.core.mapv.call(null,(function (p1__9076_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__9076_SHARP_);
}),cljs.core.range.call(null,(450),(630),(40))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_server_molecule.call(null,(200),(200),mail_system.core.server_a),mail_system.core.gen_server_molecule.call(null,(200),(300),mail_system.core.server_a),mail_system.core.gen_server_molecule.call(null,(200),(400),mail_system.core.server_a)], null),cljs.core.mapv.call(null,(function (p1__9077_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__9077_SHARP_);
}),cljs.core.range.call(null,(0),(170),(40))),cljs.core.mapv.call(null,(function (p1__9078_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__9078_SHARP_);
}),cljs.core.range.call(null,(250),(260),(40))),cljs.core.mapv.call(null,(function (p1__9079_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__9079_SHARP_);
}),cljs.core.range.call(null,(350),(390),(40))),cljs.core.mapv.call(null,(function (p1__9080_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__9080_SHARP_);
}),cljs.core.range.call(null,(450),(630),(40))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_server_molecule.call(null,(400),(200),mail_system.core.server_b),mail_system.core.gen_server_molecule.call(null,(400),(300),mail_system.core.server_b),mail_system.core.gen_server_molecule.call(null,(400),(400),mail_system.core.server_b)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_in_mailbox_molecule.call(null,(60),(50),mail_system.core.in_mail_a1,new cljs.core.Keyword(null,"a1","a1",553780937)),mail_system.core.gen_in_mailbox_molecule.call(null,(540),(50),mail_system.core.in_mail_b1,new cljs.core.Keyword(null,"b1","b1",-1270036758))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_in_mailbox_molecule.call(null,(60),(550),mail_system.core.in_mail_a2,new cljs.core.Keyword(null,"a2","a2",424956801)),mail_system.core.gen_in_mailbox_molecule.call(null,(540),(550),mail_system.core.in_mail_b2,new cljs.core.Keyword(null,"b2","b2",1108940514))], null),cljs.core.mapv.call(null,(function (p1__9081_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(0),p1__9081_SHARP_);
}),cljs.core.range.call(null,(0),(650),(40))),cljs.core.mapv.call(null,(function (p1__9082_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(600),p1__9082_SHARP_);
}),cljs.core.range.call(null,(0),(650),(40))),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"b1","b1",-1270036758),(5)),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"b2","b2",1108940514),(5)),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"a1","a1",553780937),(5)),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"a2","a2",424956801),(5)),mail_system.core.gen_server_crash.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),(2)),mail_system.core.gen_server_crash.call(null,new cljs.core.Keyword(null,"b","b",1482224470),(2)),mail_system.core.gen_server_fixes.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),(1)),mail_system.core.gen_server_fixes.call(null,new cljs.core.Keyword(null,"b","b",1482224470),(1)));
mail_system.core.mail_system = (function mail_system__$1(){
return mail_system.core.setup_mols.call(null,mail_system.core.mail_system_mols);
});
mail_system.core.add_mols_to_system = (function add_mols_to_system(mols){
cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.merge,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),mols),mols));

var seq__9087 = cljs.core.seq.call(null,mols);
var chunk__9088 = null;
var count__9089 = (0);
var i__9090 = (0);
while(true){
if((i__9090 < count__9089)){
var mol = cljs.core._nth.call(null,chunk__9088,i__9090);
mail_system.core.molecule_reaction.call(null,mol);

var G__9091 = seq__9087;
var G__9092 = chunk__9088;
var G__9093 = count__9089;
var G__9094 = (i__9090 + (1));
seq__9087 = G__9091;
chunk__9088 = G__9092;
count__9089 = G__9093;
i__9090 = G__9094;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9087);
if(temp__4126__auto__){
var seq__9087__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9087__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__9087__$1);
var G__9095 = cljs.core.chunk_rest.call(null,seq__9087__$1);
var G__9096 = c__4602__auto__;
var G__9097 = cljs.core.count.call(null,c__4602__auto__);
var G__9098 = (0);
seq__9087 = G__9095;
chunk__9088 = G__9096;
count__9089 = G__9097;
i__9090 = G__9098;
continue;
} else {
var mol = cljs.core.first.call(null,seq__9087__$1);
mail_system.core.molecule_reaction.call(null,mol);

var G__9099 = cljs.core.next.call(null,seq__9087__$1);
var G__9100 = null;
var G__9101 = (0);
var G__9102 = (0);
seq__9087 = G__9099;
chunk__9088 = G__9100;
count__9089 = G__9101;
i__9090 = G__9102;
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
var mols = cljs.core.concat.call(null,mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"b1","b1",-1270036758),(2)),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"b2","b2",1108940514),(2)),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"a1","a1",553780937),(2)),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"a2","a2",424956801),(2)));
return mail_system.core.add_mols_to_system.call(null,mols);
});
mail_system.core.more_server_crashes = (function more_server_crashes(){
var mols = cljs.core.concat.call(null,mail_system.core.gen_server_crash.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),(1)),mail_system.core.gen_server_crash.call(null,new cljs.core.Keyword(null,"b","b",1482224470),(1)));
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

//# sourceMappingURL=core.js.map?rel=1435342577724