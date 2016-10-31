// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46474){
var map__46499 = p__46474;
var map__46499__$1 = ((((!((map__46499 == null)))?((((map__46499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46499):map__46499);
var m = map__46499__$1;
var n = cljs.core.get.call(null,map__46499__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46499__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46501_46523 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46502_46524 = null;
var count__46503_46525 = (0);
var i__46504_46526 = (0);
while(true){
if((i__46504_46526 < count__46503_46525)){
var f_46527 = cljs.core._nth.call(null,chunk__46502_46524,i__46504_46526);
cljs.core.println.call(null,"  ",f_46527);

var G__46528 = seq__46501_46523;
var G__46529 = chunk__46502_46524;
var G__46530 = count__46503_46525;
var G__46531 = (i__46504_46526 + (1));
seq__46501_46523 = G__46528;
chunk__46502_46524 = G__46529;
count__46503_46525 = G__46530;
i__46504_46526 = G__46531;
continue;
} else {
var temp__4657__auto___46532 = cljs.core.seq.call(null,seq__46501_46523);
if(temp__4657__auto___46532){
var seq__46501_46533__$1 = temp__4657__auto___46532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46501_46533__$1)){
var c__45004__auto___46534 = cljs.core.chunk_first.call(null,seq__46501_46533__$1);
var G__46535 = cljs.core.chunk_rest.call(null,seq__46501_46533__$1);
var G__46536 = c__45004__auto___46534;
var G__46537 = cljs.core.count.call(null,c__45004__auto___46534);
var G__46538 = (0);
seq__46501_46523 = G__46535;
chunk__46502_46524 = G__46536;
count__46503_46525 = G__46537;
i__46504_46526 = G__46538;
continue;
} else {
var f_46539 = cljs.core.first.call(null,seq__46501_46533__$1);
cljs.core.println.call(null,"  ",f_46539);

var G__46540 = cljs.core.next.call(null,seq__46501_46533__$1);
var G__46541 = null;
var G__46542 = (0);
var G__46543 = (0);
seq__46501_46523 = G__46540;
chunk__46502_46524 = G__46541;
count__46503_46525 = G__46542;
i__46504_46526 = G__46543;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46544 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44193__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44193__auto__)){
return or__44193__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46544);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46544)))?cljs.core.second.call(null,arglists_46544):arglists_46544));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46505_46545 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46506_46546 = null;
var count__46507_46547 = (0);
var i__46508_46548 = (0);
while(true){
if((i__46508_46548 < count__46507_46547)){
var vec__46509_46549 = cljs.core._nth.call(null,chunk__46506_46546,i__46508_46548);
var name_46550 = cljs.core.nth.call(null,vec__46509_46549,(0),null);
var map__46512_46551 = cljs.core.nth.call(null,vec__46509_46549,(1),null);
var map__46512_46552__$1 = ((((!((map__46512_46551 == null)))?((((map__46512_46551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46512_46551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46512_46551):map__46512_46551);
var doc_46553 = cljs.core.get.call(null,map__46512_46552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46554 = cljs.core.get.call(null,map__46512_46552__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46550);

cljs.core.println.call(null," ",arglists_46554);

if(cljs.core.truth_(doc_46553)){
cljs.core.println.call(null," ",doc_46553);
} else {
}

var G__46555 = seq__46505_46545;
var G__46556 = chunk__46506_46546;
var G__46557 = count__46507_46547;
var G__46558 = (i__46508_46548 + (1));
seq__46505_46545 = G__46555;
chunk__46506_46546 = G__46556;
count__46507_46547 = G__46557;
i__46508_46548 = G__46558;
continue;
} else {
var temp__4657__auto___46559 = cljs.core.seq.call(null,seq__46505_46545);
if(temp__4657__auto___46559){
var seq__46505_46560__$1 = temp__4657__auto___46559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46505_46560__$1)){
var c__45004__auto___46561 = cljs.core.chunk_first.call(null,seq__46505_46560__$1);
var G__46562 = cljs.core.chunk_rest.call(null,seq__46505_46560__$1);
var G__46563 = c__45004__auto___46561;
var G__46564 = cljs.core.count.call(null,c__45004__auto___46561);
var G__46565 = (0);
seq__46505_46545 = G__46562;
chunk__46506_46546 = G__46563;
count__46507_46547 = G__46564;
i__46508_46548 = G__46565;
continue;
} else {
var vec__46514_46566 = cljs.core.first.call(null,seq__46505_46560__$1);
var name_46567 = cljs.core.nth.call(null,vec__46514_46566,(0),null);
var map__46517_46568 = cljs.core.nth.call(null,vec__46514_46566,(1),null);
var map__46517_46569__$1 = ((((!((map__46517_46568 == null)))?((((map__46517_46568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46517_46568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46517_46568):map__46517_46568);
var doc_46570 = cljs.core.get.call(null,map__46517_46569__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46571 = cljs.core.get.call(null,map__46517_46569__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46567);

cljs.core.println.call(null," ",arglists_46571);

if(cljs.core.truth_(doc_46570)){
cljs.core.println.call(null," ",doc_46570);
} else {
}

var G__46572 = cljs.core.next.call(null,seq__46505_46560__$1);
var G__46573 = null;
var G__46574 = (0);
var G__46575 = (0);
seq__46505_46545 = G__46572;
chunk__46506_46546 = G__46573;
count__46507_46547 = G__46574;
i__46508_46548 = G__46575;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__46519 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46520 = null;
var count__46521 = (0);
var i__46522 = (0);
while(true){
if((i__46522 < count__46521)){
var role = cljs.core._nth.call(null,chunk__46520,i__46522);
var temp__4657__auto___46576__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46576__$1)){
var spec_46577 = temp__4657__auto___46576__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46577));
} else {
}

var G__46578 = seq__46519;
var G__46579 = chunk__46520;
var G__46580 = count__46521;
var G__46581 = (i__46522 + (1));
seq__46519 = G__46578;
chunk__46520 = G__46579;
count__46521 = G__46580;
i__46522 = G__46581;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__46519);
if(temp__4657__auto____$1){
var seq__46519__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46519__$1)){
var c__45004__auto__ = cljs.core.chunk_first.call(null,seq__46519__$1);
var G__46582 = cljs.core.chunk_rest.call(null,seq__46519__$1);
var G__46583 = c__45004__auto__;
var G__46584 = cljs.core.count.call(null,c__45004__auto__);
var G__46585 = (0);
seq__46519 = G__46582;
chunk__46520 = G__46583;
count__46521 = G__46584;
i__46522 = G__46585;
continue;
} else {
var role = cljs.core.first.call(null,seq__46519__$1);
var temp__4657__auto___46586__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46586__$2)){
var spec_46587 = temp__4657__auto___46586__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46587));
} else {
}

var G__46588 = cljs.core.next.call(null,seq__46519__$1);
var G__46589 = null;
var G__46590 = (0);
var G__46591 = (0);
seq__46519 = G__46588;
chunk__46520 = G__46589;
count__46521 = G__46590;
i__46522 = G__46591;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map