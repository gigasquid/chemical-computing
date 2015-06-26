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
var G__9985 = context;
mail_system.core.setText.call(null,G__9985,"grey","bold 30px Arial");

G__9985.fillText("Ready?",(180),(250));

return G__9985;
});
mail_system.core.clear = (function clear(){
var G__9987 = mail_system.core.context;
mail_system.core.setColor.call(null,G__9987,mail_system.core.background);

G__9987.fillRect((0),(0),mail_system.core.width,mail_system.core.height);

return G__9987;
});
mail_system.core.draw_circle = (function draw_circle(context,color,diam,x,y){
var G__9989 = context;
mail_system.core.setColor.call(null,G__9989,color);

G__9989.beginPath();

G__9989.arc(x,y,diam,(0),((2) * Math.PI),true);

G__9989.closePath();

G__9989.fill();

return G__9989;
});
mail_system.core.draw_molecule = (function draw_molecule(p__9990){
var map__9993 = p__9990;
var map__9993__$1 = ((cljs.core.seq_QMARK_.call(null,map__9993))?cljs.core.apply.call(null,cljs.core.hash_map,map__9993):map__9993);
var args = cljs.core.get.call(null,map__9993__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var color = cljs.core.get.call(null,map__9993__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var val = cljs.core.get.call(null,map__9993__$1,new cljs.core.Keyword(null,"val","val",128701612));
var d = cljs.core.get.call(null,map__9993__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__9993__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__9993__$1,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.truth_(val)){
var display_val = ((cljs.core._EQ_.call(null,mail_system.core.server_a,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"server-a","server-a",1732785095)):((cljs.core._EQ_.call(null,mail_system.core.server_b,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"server-b","server-b",-1534725303)):((cljs.core._EQ_.call(null,mail_system.core.network,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"network","network",2050004697)):((cljs.core._EQ_.call(null,mail_system.core.in_mail_a1,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"in-mail-a1","in-mail-a1",113875827)):((cljs.core._EQ_.call(null,mail_system.core.in_mail_a2,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"in-mail-a2","in-mail-a2",1651150918)):((cljs.core._EQ_.call(null,mail_system.core.in_mail_b1,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"in-mail-b1","in-mail-b1",162896748)):((cljs.core._EQ_.call(null,mail_system.core.in_mail_b2,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"in-mail-b2","in-mail-b2",283593818)):((cljs.core._EQ_.call(null,mail_system.core.crash,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"crash","crash",-1024911330)):((cljs.core._EQ_.call(null,mail_system.core.fixes,val))?cljs.core.name.call(null,new cljs.core.Keyword(null,"fixes","fixes",-1313940430)):val.name
)))))))));
mail_system.core.draw_circle.call(null,mail_system.core.context,color,d,x,y);

var G__9994 = mail_system.core.context;
mail_system.core.setText.call(null,G__9994,"black","bold 11px Courier");

G__9994.fillText([cljs.core.str(display_val)].join(''),(x - (cljs.core.count.call(null,display_val) * (3))),(y + (5)));

return G__9994;
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
mail_system.core.move_molecule = (function move_molecule(p__9995,collide_QMARK_){
var map__9997 = p__9995;
var map__9997__$1 = ((cljs.core.seq_QMARK_.call(null,map__9997))?cljs.core.apply.call(null,cljs.core.hash_map,map__9997):map__9997);
var molecule = map__9997__$1;
var dy = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var dx = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var d = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var y = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__9997__$1,new cljs.core.Keyword(null,"x","x",2099068185));
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
var G__9999 = (((move_direction instanceof cljs.core.Keyword))?move_direction.fqn:null);
switch (G__9999) {
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
var c__6593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto__){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto__){
return (function (state_10131){
var state_val_10132 = (state_10131[(1)]);
if((state_val_10132 === (7))){
var inst_10095 = cljs.core.async.timeout.call(null,(60));
var state_10131__$1 = state_10131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10131__$1,(10),inst_10095);
} else {
if((state_val_10132 === (20))){
var inst_10100 = (state_10131[(7)]);
var inst_10111 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_10112 = mail_system.core.move_molecule.call(null,inst_10100,false);
var inst_10113 = cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.assoc,inst_10111,inst_10112);
var state_10131__$1 = state_10131;
var statearr_10133_10169 = state_10131__$1;
(statearr_10133_10169[(2)] = inst_10113);

(statearr_10133_10169[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (1))){
var state_10131__$1 = state_10131;
var statearr_10134_10170 = state_10131__$1;
(statearr_10134_10170[(2)] = null);

(statearr_10134_10170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (4))){
var inst_10088 = cljs.core.deref.call(null,mail_system.core.world);
var inst_10089 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_10090 = cljs.core.get.call(null,inst_10088,inst_10089);
var state_10131__$1 = state_10131;
var statearr_10135_10171 = state_10131__$1;
(statearr_10135_10171[(2)] = inst_10090);

(statearr_10135_10171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (15))){
var state_10131__$1 = state_10131;
var statearr_10136_10172 = state_10131__$1;
(statearr_10136_10172[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (21))){
var state_10131__$1 = state_10131;
var statearr_10138_10173 = state_10131__$1;
(statearr_10138_10173[(2)] = null);

(statearr_10138_10173[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (13))){
var inst_10123 = (state_10131[(2)]);
var state_10131__$1 = (function (){var statearr_10139 = state_10131;
(statearr_10139[(8)] = inst_10123);

return statearr_10139;
})();
var statearr_10140_10174 = state_10131__$1;
(statearr_10140_10174[(2)] = null);

(statearr_10140_10174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (22))){
var inst_10116 = (state_10131[(2)]);
var state_10131__$1 = state_10131;
var statearr_10141_10175 = state_10131__$1;
(statearr_10141_10175[(2)] = inst_10116);

(statearr_10141_10175[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (6))){
var inst_10093 = (state_10131[(2)]);
var state_10131__$1 = state_10131;
if(cljs.core.truth_(inst_10093)){
var statearr_10142_10176 = state_10131__$1;
(statearr_10142_10176[(1)] = (7));

} else {
var statearr_10143_10177 = state_10131__$1;
(statearr_10143_10177[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (17))){
var inst_10100 = (state_10131[(7)]);
var state_10131__$1 = state_10131;
if(cljs.core.truth_(inst_10100)){
var statearr_10144_10178 = state_10131__$1;
(statearr_10144_10178[(1)] = (20));

} else {
var statearr_10145_10179 = state_10131__$1;
(statearr_10145_10179[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (3))){
var inst_10129 = (state_10131[(2)]);
var state_10131__$1 = state_10131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10131__$1,inst_10129);
} else {
if((state_val_10132 === (12))){
var inst_10100 = (state_10131[(7)]);
var inst_10105 = mail_system.core.hatch_QMARK_.call(null,inst_10100);
var state_10131__$1 = state_10131;
if(cljs.core.truth_(inst_10105)){
var statearr_10146_10180 = state_10131__$1;
(statearr_10146_10180[(1)] = (14));

} else {
var statearr_10147_10181 = state_10131__$1;
(statearr_10147_10181[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (2))){
var inst_10086 = (state_10131[(9)]);
var inst_10086__$1 = cljs.core.deref.call(null,mail_system.core.running);
var state_10131__$1 = (function (){var statearr_10148 = state_10131;
(statearr_10148[(9)] = inst_10086__$1);

return statearr_10148;
})();
if(cljs.core.truth_(inst_10086__$1)){
var statearr_10149_10182 = state_10131__$1;
(statearr_10149_10182[(1)] = (4));

} else {
var statearr_10150_10183 = state_10131__$1;
(statearr_10150_10183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (19))){
var inst_10119 = (state_10131[(2)]);
var state_10131__$1 = state_10131;
var statearr_10151_10184 = state_10131__$1;
(statearr_10151_10184[(2)] = inst_10119);

(statearr_10151_10184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (11))){
var inst_10101 = (state_10131[(10)]);
var inst_10100 = (state_10131[(7)]);
var inst_10103 = mail_system.core.collision_reaction.call(null,inst_10100,inst_10101);
var state_10131__$1 = state_10131;
var statearr_10152_10185 = state_10131__$1;
(statearr_10152_10185[(2)] = inst_10103);

(statearr_10152_10185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (9))){
var inst_10127 = (state_10131[(2)]);
var state_10131__$1 = state_10131;
var statearr_10153_10186 = state_10131__$1;
(statearr_10153_10186[(2)] = inst_10127);

(statearr_10153_10186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (5))){
var inst_10086 = (state_10131[(9)]);
var state_10131__$1 = state_10131;
var statearr_10154_10187 = state_10131__$1;
(statearr_10154_10187[(2)] = inst_10086);

(statearr_10154_10187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (14))){
var inst_10100 = (state_10131[(7)]);
var inst_10107 = mail_system.core.hatch.call(null,inst_10100);
var state_10131__$1 = state_10131;
var statearr_10155_10188 = state_10131__$1;
(statearr_10155_10188[(2)] = inst_10107);

(statearr_10155_10188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (16))){
var inst_10121 = (state_10131[(2)]);
var state_10131__$1 = state_10131;
var statearr_10156_10189 = state_10131__$1;
(statearr_10156_10189[(2)] = inst_10121);

(statearr_10156_10189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (10))){
var inst_10101 = (state_10131[(10)]);
var inst_10100 = (state_10131[(7)]);
var inst_10097 = (state_10131[(2)]);
var inst_10098 = cljs.core.deref.call(null,mail_system.core.world);
var inst_10099 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mol_state);
var inst_10100__$1 = cljs.core.get.call(null,inst_10098,inst_10099);
var inst_10101__$1 = mail_system.core.find_collision.call(null,inst_10100__$1);
var state_10131__$1 = (function (){var statearr_10157 = state_10131;
(statearr_10157[(11)] = inst_10097);

(statearr_10157[(10)] = inst_10101__$1);

(statearr_10157[(7)] = inst_10100__$1);

return statearr_10157;
})();
if(cljs.core.truth_(inst_10101__$1)){
var statearr_10158_10190 = state_10131__$1;
(statearr_10158_10190[(1)] = (11));

} else {
var statearr_10159_10191 = state_10131__$1;
(statearr_10159_10191[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (18))){
var state_10131__$1 = state_10131;
var statearr_10160_10192 = state_10131__$1;
(statearr_10160_10192[(2)] = null);

(statearr_10160_10192[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10132 === (8))){
var state_10131__$1 = state_10131;
var statearr_10161_10193 = state_10131__$1;
(statearr_10161_10193[(2)] = null);

(statearr_10161_10193[(1)] = (9));


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
var statearr_10165 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10165[(0)] = state_machine__6538__auto__);

(statearr_10165[(1)] = (1));

return statearr_10165;
});
var state_machine__6538__auto____1 = (function (state_10131){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_10131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e10166){if((e10166 instanceof Object)){
var ex__6541__auto__ = e10166;
var statearr_10167_10194 = state_10131;
(statearr_10167_10194[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10195 = state_10131;
state_10131 = G__10195;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_10131){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_10131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_10168 = f__6594__auto__.call(null);
(statearr_10168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_10168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto__))
);

return c__6593__auto__;
});
mail_system.core.in_mailboxes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
mail_system.core.setup_mols = (function setup_mols(init_mols){
cljs.core.reset_BANG_.call(null,mail_system.core.in_mailboxes,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_.call(null,mail_system.core.world,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),init_mols),init_mols));

var seq__10200 = cljs.core.seq.call(null,init_mols);
var chunk__10201 = null;
var count__10202 = (0);
var i__10203 = (0);
while(true){
if((i__10203 < count__10202)){
var mol = cljs.core._nth.call(null,chunk__10201,i__10203);
mail_system.core.molecule_reaction.call(null,mol);

var G__10204 = seq__10200;
var G__10205 = chunk__10201;
var G__10206 = count__10202;
var G__10207 = (i__10203 + (1));
seq__10200 = G__10204;
chunk__10201 = G__10205;
count__10202 = G__10206;
i__10203 = G__10207;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10200);
if(temp__4126__auto__){
var seq__10200__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10200__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__10200__$1);
var G__10208 = cljs.core.chunk_rest.call(null,seq__10200__$1);
var G__10209 = c__4602__auto__;
var G__10210 = cljs.core.count.call(null,c__4602__auto__);
var G__10211 = (0);
seq__10200 = G__10208;
chunk__10201 = G__10209;
count__10202 = G__10210;
i__10203 = G__10211;
continue;
} else {
var mol = cljs.core.first.call(null,seq__10200__$1);
mail_system.core.molecule_reaction.call(null,mol);

var G__10212 = cljs.core.next.call(null,seq__10200__$1);
var G__10213 = null;
var G__10214 = (0);
var G__10215 = (0);
seq__10200 = G__10212;
chunk__10201 = G__10213;
count__10202 = G__10214;
i__10203 = G__10215;
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
var c__6593__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6593__auto__){
return (function (){
var f__6594__auto__ = (function (){var switch__6537__auto__ = ((function (c__6593__auto__){
return (function (state_10238){
var state_val_10239 = (state_10238[(1)]);
if((state_val_10239 === (2))){
var inst_10234 = (state_10238[(2)]);
var inst_10235 = mail_system.core.tick.call(null);
var inst_10236 = window.requestAnimationFrame(time_loop);
var state_10238__$1 = (function (){var statearr_10240 = state_10238;
(statearr_10240[(7)] = inst_10235);

(statearr_10240[(8)] = inst_10234);

return statearr_10240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10238__$1,inst_10236);
} else {
if((state_val_10239 === (1))){
var inst_10232 = cljs.core.async.timeout.call(null,(30));
var state_10238__$1 = state_10238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10238__$1,(2),inst_10232);
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
var statearr_10244 = [null,null,null,null,null,null,null,null,null];
(statearr_10244[(0)] = state_machine__6538__auto__);

(statearr_10244[(1)] = (1));

return statearr_10244;
});
var state_machine__6538__auto____1 = (function (state_10238){
while(true){
var ret_value__6539__auto__ = (function (){try{while(true){
var result__6540__auto__ = switch__6537__auto__.call(null,state_10238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6540__auto__;
}
break;
}
}catch (e10245){if((e10245 instanceof Object)){
var ex__6541__auto__ = e10245;
var statearr_10246_10248 = state_10238;
(statearr_10246_10248[(5)] = ex__6541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10249 = state_10238;
state_10238 = G__10249;
continue;
} else {
return ret_value__6539__auto__;
}
break;
}
});
state_machine__6538__auto__ = function(state_10238){
switch(arguments.length){
case 0:
return state_machine__6538__auto____0.call(this);
case 1:
return state_machine__6538__auto____1.call(this,state_10238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6538__auto____0;
state_machine__6538__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6538__auto____1;
return state_machine__6538__auto__;
})()
;})(switch__6537__auto__,c__6593__auto__))
})();
var state__6595__auto__ = (function (){var statearr_10247 = f__6594__auto__.call(null);
(statearr_10247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6593__auto__);

return statearr_10247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6595__auto__);
});})(c__6593__auto__))
);

return c__6593__auto__;
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
var G__10255 = (((to instanceof cljs.core.Keyword))?to.fqn:null);
switch (G__10255) {
case "a2":
return cljs.core.mapv.call(null,((function (G__10255){
return (function (p1__10253_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__10253_SHARP_,(400),to);
});})(G__10255))
,cljs.core.repeatedly.call(null,n,((function (G__10255){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__10255))
));

break;
case "a1":
return cljs.core.mapv.call(null,((function (G__10255){
return (function (p1__10252_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__10252_SHARP_,(200),to);
});})(G__10255))
,cljs.core.repeatedly.call(null,n,((function (G__10255){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__10255))
));

break;
case "b2":
return cljs.core.mapv.call(null,((function (G__10255){
return (function (p1__10251_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__10251_SHARP_,(400),to);
});})(G__10255))
,cljs.core.repeatedly.call(null,n,((function (G__10255){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__10255))
));

break;
case "b1":
return cljs.core.mapv.call(null,((function (G__10255){
return (function (p1__10250_SHARP_){
return mail_system.core.gen_mail_molecule.call(null,p1__10250_SHARP_,(200),to);
});})(G__10255))
,cljs.core.repeatedly.call(null,n,((function (G__10255){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__10255))
));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(to)].join('')));

}
});
mail_system.core.gen_server_crash = (function gen_server_crash(to,n){
var G__10260 = (((to instanceof cljs.core.Keyword))?to.fqn:null);
switch (G__10260) {
case "a":
return cljs.core.mapv.call(null,((function (G__10260){
return (function (p1__10258_SHARP_){
return mail_system.core.gen_server_crash_molecule.call(null,p1__10258_SHARP_,(300));
});})(G__10260))
,cljs.core.repeatedly.call(null,n,((function (G__10260){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__10260))
));

break;
case "b":
return cljs.core.mapv.call(null,((function (G__10260){
return (function (p1__10257_SHARP_){
return mail_system.core.gen_server_crash_molecule.call(null,p1__10257_SHARP_,(300));
});})(G__10260))
,cljs.core.repeatedly.call(null,n,((function (G__10260){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__10260))
));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(to)].join('')));

}
});
mail_system.core.gen_server_fixes = (function gen_server_fixes(to,n){
var G__10265 = (((to instanceof cljs.core.Keyword))?to.fqn:null);
switch (G__10265) {
case "a":
return cljs.core.mapv.call(null,((function (G__10265){
return (function (p1__10263_SHARP_){
return mail_system.core.gen_server_fixes_molecule.call(null,p1__10263_SHARP_,(350));
});})(G__10265))
,cljs.core.repeatedly.call(null,n,((function (G__10265){
return (function (){
return ((600) - cljs.core.rand_int.call(null,(200)));
});})(G__10265))
));

break;
case "b":
return cljs.core.mapv.call(null,((function (G__10265){
return (function (p1__10262_SHARP_){
return mail_system.core.gen_server_fixes_molecule.call(null,p1__10262_SHARP_,(350));
});})(G__10265))
,cljs.core.repeatedly.call(null,n,((function (G__10265){
return (function (){
return cljs.core.rand_int.call(null,(200));
});})(G__10265))
));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(to)].join('')));

}
});
mail_system.core.mail_system_mols = cljs.core.concat.call(null,cljs.core.mapv.call(null,(function (p1__10267_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(300),p1__10267_SHARP_);
}),cljs.core.range.call(null,(0),(270),(40))),cljs.core.mapv.call(null,(function (p1__10268_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(300),p1__10268_SHARP_);
}),cljs.core.range.call(null,(350),(630),(40))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_network_molecule.call(null,(300),(300))], null),cljs.core.mapv.call(null,(function (p1__10269_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__10269_SHARP_);
}),cljs.core.range.call(null,(0),(170),(40))),cljs.core.mapv.call(null,(function (p1__10270_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__10270_SHARP_);
}),cljs.core.range.call(null,(250),(260),(40))),cljs.core.mapv.call(null,(function (p1__10271_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__10271_SHARP_);
}),cljs.core.range.call(null,(350),(390),(40))),cljs.core.mapv.call(null,(function (p1__10272_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(200),p1__10272_SHARP_);
}),cljs.core.range.call(null,(450),(630),(40))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_server_molecule.call(null,(200),(200),mail_system.core.server_a),mail_system.core.gen_server_molecule.call(null,(200),(300),mail_system.core.server_a),mail_system.core.gen_server_molecule.call(null,(200),(400),mail_system.core.server_a)], null),cljs.core.mapv.call(null,(function (p1__10273_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__10273_SHARP_);
}),cljs.core.range.call(null,(0),(170),(40))),cljs.core.mapv.call(null,(function (p1__10274_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__10274_SHARP_);
}),cljs.core.range.call(null,(250),(260),(40))),cljs.core.mapv.call(null,(function (p1__10275_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__10275_SHARP_);
}),cljs.core.range.call(null,(350),(390),(40))),cljs.core.mapv.call(null,(function (p1__10276_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(400),p1__10276_SHARP_);
}),cljs.core.range.call(null,(450),(630),(40))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_server_molecule.call(null,(400),(200),mail_system.core.server_b),mail_system.core.gen_server_molecule.call(null,(400),(300),mail_system.core.server_b),mail_system.core.gen_server_molecule.call(null,(400),(400),mail_system.core.server_b)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_in_mailbox_molecule.call(null,(60),(50),mail_system.core.in_mail_a1,new cljs.core.Keyword(null,"a1","a1",553780937)),mail_system.core.gen_in_mailbox_molecule.call(null,(540),(50),mail_system.core.in_mail_b1,new cljs.core.Keyword(null,"b1","b1",-1270036758))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mail_system.core.gen_in_mailbox_molecule.call(null,(60),(550),mail_system.core.in_mail_a2,new cljs.core.Keyword(null,"a2","a2",424956801)),mail_system.core.gen_in_mailbox_molecule.call(null,(540),(550),mail_system.core.in_mail_b2,new cljs.core.Keyword(null,"b2","b2",1108940514))], null),cljs.core.mapv.call(null,(function (p1__10277_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(0),p1__10277_SHARP_);
}),cljs.core.range.call(null,(0),(650),(40))),cljs.core.mapv.call(null,(function (p1__10278_SHARP_){
return mail_system.core.gen_membrane_mol.call(null,(600),p1__10278_SHARP_);
}),cljs.core.range.call(null,(0),(650),(40))),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"b1","b1",-1270036758),(5)),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"b2","b2",1108940514),(5)),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"a1","a1",553780937),(5)),mail_system.core.gen_messages.call(null,new cljs.core.Keyword(null,"a2","a2",424956801),(5)),mail_system.core.gen_server_crash.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),(2)),mail_system.core.gen_server_crash.call(null,new cljs.core.Keyword(null,"b","b",1482224470),(2)),mail_system.core.gen_server_fixes.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),(1)),mail_system.core.gen_server_fixes.call(null,new cljs.core.Keyword(null,"b","b",1482224470),(1)));
mail_system.core.mail_system = (function mail_system__$1(){
return mail_system.core.setup_mols.call(null,mail_system.core.mail_system_mols);
});
mail_system.core.add_mols_to_system = (function add_mols_to_system(mols){
cljs.core.swap_BANG_.call(null,mail_system.core.world,cljs.core.merge,cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),mols),mols));

var seq__10283 = cljs.core.seq.call(null,mols);
var chunk__10284 = null;
var count__10285 = (0);
var i__10286 = (0);
while(true){
if((i__10286 < count__10285)){
var mol = cljs.core._nth.call(null,chunk__10284,i__10286);
mail_system.core.molecule_reaction.call(null,mol);

var G__10287 = seq__10283;
var G__10288 = chunk__10284;
var G__10289 = count__10285;
var G__10290 = (i__10286 + (1));
seq__10283 = G__10287;
chunk__10284 = G__10288;
count__10285 = G__10289;
i__10286 = G__10290;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10283);
if(temp__4126__auto__){
var seq__10283__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10283__$1)){
var c__4602__auto__ = cljs.core.chunk_first.call(null,seq__10283__$1);
var G__10291 = cljs.core.chunk_rest.call(null,seq__10283__$1);
var G__10292 = c__4602__auto__;
var G__10293 = cljs.core.count.call(null,c__4602__auto__);
var G__10294 = (0);
seq__10283 = G__10291;
chunk__10284 = G__10292;
count__10285 = G__10293;
i__10286 = G__10294;
continue;
} else {
var mol = cljs.core.first.call(null,seq__10283__$1);
mail_system.core.molecule_reaction.call(null,mol);

var G__10295 = cljs.core.next.call(null,seq__10283__$1);
var G__10296 = null;
var G__10297 = (0);
var G__10298 = (0);
seq__10283 = G__10295;
chunk__10284 = G__10296;
count__10285 = G__10297;
i__10286 = G__10298;
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
