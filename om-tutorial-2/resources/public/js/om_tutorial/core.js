// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_tutorial.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","one","list/one",942123326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"John",new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"age","age",-604307804),(31)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bob",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null),new cljs.core.Keyword("list","two","list/two",521811255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"age","age",-604307804),(27)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Gwen",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jeff",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null)], null);
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
})();
}
om_tutorial.core.get_people = (function om_tutorial$core$get_people(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__21159_SHARP_){
return cljs.core.get_in.call(null,st,p1__21159_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","one","list/one",942123326),(function (p__21160,key,params){
var map__21161 = p__21160;
var map__21161__$1 = ((((!((map__21161 == null)))?((((map__21161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21161):map__21161);
var env = map__21161__$1;
var state = cljs.core.get.call(null,map__21161__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","two","list/two",521811255),(function (p__21163,key,params){
var map__21164 = p__21163;
var map__21164__$1 = ((((!((map__21164 == null)))?((((map__21164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21164):map__21164);
var env = map__21164__$1;
var state = cljs.core.get.call(null,map__21164__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
if(typeof om_tutorial.core.mutate !== 'undefined'){
} else {
om_tutorial.core.mutate = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","increment","points/increment",1315621678,null),(function (p__21166,_,p__21167){
var map__21168 = p__21166;
var map__21168__$1 = ((((!((map__21168 == null)))?((((map__21168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21168):map__21168);
var state = cljs.core.get.call(null,map__21168__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__21169 = p__21167;
var map__21169__$1 = ((((!((map__21169 == null)))?((((map__21169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21169):map__21169);
var name = cljs.core.get.call(null,map__21169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21168,map__21168__$1,state,map__21169,map__21169__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.inc);
});})(map__21168,map__21168__$1,state,map__21169,map__21169__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","incrementAge","points/incrementAge",-1618883486,null),(function (p__21172,_,p__21173){
var map__21174 = p__21172;
var map__21174__$1 = ((((!((map__21174 == null)))?((((map__21174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21174):map__21174);
var state = cljs.core.get.call(null,map__21174__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__21175 = p__21173;
var map__21175__$1 = ((((!((map__21175 == null)))?((((map__21175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21175):map__21175);
var name = cljs.core.get.call(null,map__21175__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21174,map__21174__$1,state,map__21175,map__21175__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"age","age",-604307804)], null),cljs.core.inc);
});})(map__21174,map__21174__$1,state,map__21175,map__21175__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null),(function (p__21179,_,p__21180){
var map__21181 = p__21179;
var map__21181__$1 = ((((!((map__21181 == null)))?((((map__21181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21181):map__21181);
var state = cljs.core.get.call(null,map__21181__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__21182 = p__21180;
var map__21182__$1 = ((((!((map__21182 == null)))?((((map__21182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21182):map__21182);
var name = cljs.core.get.call(null,map__21182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21181,map__21181__$1,state,map__21182,map__21182__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__21181,map__21181__$1,state,map__21182,map__21182__$1,name){
return (function (p1__21178_SHARP_){
var n = (p1__21178_SHARP_ - (1));
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__21181,map__21181__$1,state,map__21182,map__21182__$1,name))
);
});})(map__21181,map__21181__$1,state,map__21182,map__21182__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","decrementAge","points/decrementAge",-530206475,null),(function (p__21186,_,p__21187){
var map__21188 = p__21186;
var map__21188__$1 = ((((!((map__21188 == null)))?((((map__21188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21188):map__21188);
var state = cljs.core.get.call(null,map__21188__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__21189 = p__21187;
var map__21189__$1 = ((((!((map__21189 == null)))?((((map__21189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21189):map__21189);
var name = cljs.core.get.call(null,map__21189__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__21188,map__21188__$1,state,map__21189,map__21189__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"age","age",-604307804)], null),((function (map__21188,map__21188__$1,state,map__21189,map__21189__$1,name){
return (function (p1__21185_SHARP_){
var n = (p1__21185_SHARP_ - (1));
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__21188,map__21188__$1,state,map__21189,map__21189__$1,name))
);
});})(map__21188,map__21188__$1,state,map__21189,map__21189__$1,name))
], null);
}));
/**
 * @constructor
 */
om_tutorial.core.Person = (function om_tutorial$core$Person(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

om_tutorial.core.Person.prototype = goog.object.clone(React.Component.prototype);

var x21196_21214 = om_tutorial.core.Person.prototype;
x21196_21214.componentWillUpdate = ((function (x21196_21214){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___21215 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___21216 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___21215,next_ident__18863__auto___21216)){
var idxr__18864__auto___21217 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___21217 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___21217),((function (idxr__18864__auto___21217,ident__18862__auto___21215,next_ident__18863__auto___21216,this__18858__auto__,x21196_21214){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___21215], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___21216], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___21217,ident__18862__auto___21215,next_ident__18863__auto___21216,this__18858__auto__,x21196_21214))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x21196_21214))
;

x21196_21214.shouldComponentUpdate = ((function (x21196_21214){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__21198 = next_props__18859__auto____$1;
var G__21198__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__21198):G__21198);
return G__21198__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x21196_21214))
;

x21196_21214.componentWillUnmount = ((function (x21196_21214){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x21196_21214))
;

x21196_21214.componentDidUpdate = ((function (x21196_21214){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x21196_21214))
;

x21196_21214.isMounted = ((function (x21196_21214){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21196_21214))
;

x21196_21214.componentWillMount = ((function (x21196_21214){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x21196_21214))
;

x21196_21214.render = ((function (x21196_21214){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_21199 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21200 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21201 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21202 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21203 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{cljs.core.println.call(null,"Render Person",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));

var map__21204 = om.next.props.call(null,this$);
var map__21204__$1 = ((((!((map__21204 == null)))?((((map__21204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21204):map__21204);
var props = map__21204__$1;
var points = cljs.core.get.call(null,map__21204__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var name = cljs.core.get.call(null,map__21204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var age = cljs.core.get.call(null,map__21204__$1,new cljs.core.Keyword(null,"age","age",-604307804));
return React.DOM.li(null,om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,[cljs.core.str(name),cljs.core.str(", points: "),cljs.core.str(points),cljs.core.str(" age: "),cljs.core.str(age)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__21204,map__21204__$1,props,points,name,age,_STAR_reconciler_STAR_21199,_STAR_depth_STAR_21200,_STAR_shared_STAR_21201,_STAR_instrument_STAR_21202,_STAR_parent_STAR_21203,this$,this__18857__auto__,x21196_21214){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","increment","points/increment",1315621678,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__21204,map__21204__$1,props,points,name,age,_STAR_reconciler_STAR_21199,_STAR_depth_STAR_21200,_STAR_shared_STAR_21201,_STAR_instrument_STAR_21202,_STAR_parent_STAR_21203,this$,this__18857__auto__,x21196_21214))
},om.util.force_children.call(null,"+"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__21204,map__21204__$1,props,points,name,age,_STAR_reconciler_STAR_21199,_STAR_depth_STAR_21200,_STAR_shared_STAR_21201,_STAR_instrument_STAR_21202,_STAR_parent_STAR_21203,this$,this__18857__auto__,x21196_21214){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__21204,map__21204__$1,props,points,name,age,_STAR_reconciler_STAR_21199,_STAR_depth_STAR_21200,_STAR_shared_STAR_21201,_STAR_instrument_STAR_21202,_STAR_parent_STAR_21203,this$,this__18857__auto__,x21196_21214))
},om.util.force_children.call(null,"-"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__21204,map__21204__$1,props,points,name,age,_STAR_reconciler_STAR_21199,_STAR_depth_STAR_21200,_STAR_shared_STAR_21201,_STAR_instrument_STAR_21202,_STAR_parent_STAR_21203,this$,this__18857__auto__,x21196_21214){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","incrementAge","points/incrementAge",-1618883486,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__21204,map__21204__$1,props,points,name,age,_STAR_reconciler_STAR_21199,_STAR_depth_STAR_21200,_STAR_shared_STAR_21201,_STAR_instrument_STAR_21202,_STAR_parent_STAR_21203,this$,this__18857__auto__,x21196_21214))
},om.util.force_children.call(null,"+++"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__21204,map__21204__$1,props,points,name,age,_STAR_reconciler_STAR_21199,_STAR_depth_STAR_21200,_STAR_shared_STAR_21201,_STAR_instrument_STAR_21202,_STAR_parent_STAR_21203,this$,this__18857__auto__,x21196_21214){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","decrementAge","points/decrementAge",-530206475,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__21204,map__21204__$1,props,points,name,age,_STAR_reconciler_STAR_21199,_STAR_depth_STAR_21200,_STAR_shared_STAR_21201,_STAR_instrument_STAR_21202,_STAR_parent_STAR_21203,this$,this__18857__auto__,x21196_21214))
},om.util.force_children.call(null,"---"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21203;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21202;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21201;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21200;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21199;
}});})(x21196_21214))
;


om_tutorial.core.Person.prototype.constructor = om_tutorial.core.Person;

om_tutorial.core.Person.prototype.constructor.displayName = "om-tutorial.core/Person";

om_tutorial.core.Person.prototype.om$isComponent = true;

var x21206_21218 = om_tutorial.core.Person;
x21206_21218.om$next$Ident$ = true;

x21206_21218.om$next$Ident$ident$arity$2 = ((function (x21206_21218){
return (function (this$,p__21207){
var map__21208 = p__21207;
var map__21208__$1 = ((((!((map__21208 == null)))?((((map__21208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21208):map__21208);
var name = cljs.core.get.call(null,map__21208__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x21206_21218))
;

x21206_21218.om$next$IQuery$ = true;

x21206_21218.om$next$IQuery$query$arity$1 = ((function (x21206_21218){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"age","age",-604307804)], null);
});})(x21206_21218))
;


var x21210_21219 = om_tutorial.core.Person.prototype;
x21210_21219.om$next$Ident$ = true;

x21210_21219.om$next$Ident$ident$arity$2 = ((function (x21210_21219){
return (function (this$,p__21211){
var map__21212 = p__21211;
var map__21212__$1 = ((((!((map__21212 == null)))?((((map__21212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21212):map__21212);
var name = cljs.core.get.call(null,map__21212__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x21210_21219))
;

x21210_21219.om$next$IQuery$ = true;

x21210_21219.om$next$IQuery$query$arity$1 = ((function (x21210_21219){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"age","age",-604307804)], null);
});})(x21210_21219))
;


om_tutorial.core.Person.cljs$lang$type = true;

om_tutorial.core.Person.cljs$lang$ctorStr = "om-tutorial.core/Person";

om_tutorial.core.Person.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/Person");
});
om_tutorial.core.person = om.next.factory.call(null,om_tutorial.core.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"name","name",1843675177)], null));
/**
 * @constructor
 */
om_tutorial.core.ListView = (function om_tutorial$core$ListView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

om_tutorial.core.ListView.prototype = goog.object.clone(React.Component.prototype);

var x21224_21234 = om_tutorial.core.ListView.prototype;
x21224_21234.componentWillUpdate = ((function (x21224_21234){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___21235 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___21236 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___21235,next_ident__18863__auto___21236)){
var idxr__18864__auto___21237 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___21237 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___21237),((function (idxr__18864__auto___21237,ident__18862__auto___21235,next_ident__18863__auto___21236,this__18858__auto__,x21224_21234){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___21235], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___21236], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___21237,ident__18862__auto___21235,next_ident__18863__auto___21236,this__18858__auto__,x21224_21234))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x21224_21234))
;

x21224_21234.shouldComponentUpdate = ((function (x21224_21234){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__21226 = next_props__18859__auto____$1;
var G__21226__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__21226):G__21226);
return G__21226__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x21224_21234))
;

x21224_21234.componentWillUnmount = ((function (x21224_21234){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x21224_21234))
;

x21224_21234.componentDidUpdate = ((function (x21224_21234){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x21224_21234))
;

x21224_21234.isMounted = ((function (x21224_21234){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21224_21234))
;

x21224_21234.componentWillMount = ((function (x21224_21234){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x21224_21234))
;

x21224_21234.render = ((function (x21224_21234){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_21227 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21228 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21229 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21230 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21231 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{cljs.core.println.call(null,"Render ListView",cljs.core.first.call(null,om.next.path.call(null,this$)));

var list = om.next.props.call(null,this$);
return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,om_tutorial.core.person,list));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21231;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21230;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21229;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21228;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21227;
}});})(x21224_21234))
;


om_tutorial.core.ListView.prototype.constructor = om_tutorial.core.ListView;

om_tutorial.core.ListView.prototype.constructor.displayName = "om-tutorial.core/ListView";

om_tutorial.core.ListView.prototype.om$isComponent = true;

var x21232_21238 = om_tutorial.core.ListView;


var x21233_21239 = om_tutorial.core.ListView.prototype;


om_tutorial.core.ListView.cljs$lang$type = true;

om_tutorial.core.ListView.cljs$lang$ctorStr = "om-tutorial.core/ListView";

om_tutorial.core.ListView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/ListView");
});
om_tutorial.core.list_view = om.next.factory.call(null,om_tutorial.core.ListView);
/**
 * @constructor
 */
om_tutorial.core.RootView = (function om_tutorial$core$RootView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

om_tutorial.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x21244_21256 = om_tutorial.core.RootView.prototype;
x21244_21256.componentWillUpdate = ((function (x21244_21256){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___21257 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___21258 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___21257,next_ident__18863__auto___21258)){
var idxr__18864__auto___21259 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___21259 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___21259),((function (idxr__18864__auto___21259,ident__18862__auto___21257,next_ident__18863__auto___21258,this__18858__auto__,x21244_21256){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___21257], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___21258], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___21259,ident__18862__auto___21257,next_ident__18863__auto___21258,this__18858__auto__,x21244_21256))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x21244_21256))
;

x21244_21256.shouldComponentUpdate = ((function (x21244_21256){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__21246 = next_props__18859__auto____$1;
var G__21246__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__21246):G__21246);
return G__21246__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x21244_21256))
;

x21244_21256.componentWillUnmount = ((function (x21244_21256){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x21244_21256))
;

x21244_21256.componentDidUpdate = ((function (x21244_21256){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x21244_21256))
;

x21244_21256.isMounted = ((function (x21244_21256){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21244_21256))
;

x21244_21256.componentWillMount = ((function (x21244_21256){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x21244_21256))
;

x21244_21256.render = ((function (x21244_21256){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_21247 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21248 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21249 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21250 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21251 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{cljs.core.println.call(null,"Render RootView");

var map__21252 = om.next.props.call(null,this$);
var map__21252__$1 = ((((!((map__21252 == null)))?((((map__21252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21252):map__21252);
var one = cljs.core.get.call(null,map__21252__$1,new cljs.core.Keyword("list","one","list/one",942123326));
var two = cljs.core.get.call(null,map__21252__$1,new cljs.core.Keyword("list","two","list/two",521811255));
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h2(null,om.util.force_children.call(null,"List A")),om_tutorial.core.list_view.call(null,one),React.DOM.h2(null,om.util.force_children.call(null,"List B")),om_tutorial.core.list_view.call(null,two)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21251;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21250;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21249;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21248;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21247;
}});})(x21244_21256))
;


om_tutorial.core.RootView.prototype.constructor = om_tutorial.core.RootView;

om_tutorial.core.RootView.prototype.constructor.displayName = "om-tutorial.core/RootView";

om_tutorial.core.RootView.prototype.om$isComponent = true;

var x21254_21260 = om_tutorial.core.RootView;
x21254_21260.om$next$IQuery$ = true;

x21254_21260.om$next$IQuery$query$arity$1 = ((function (x21254_21260){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x21254_21260))
;


var x21255_21261 = om_tutorial.core.RootView.prototype;
x21255_21261.om$next$IQuery$ = true;

x21255_21261.om$next$IQuery$query$arity$1 = ((function (x21255_21261){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x21255_21261))
;


om_tutorial.core.RootView.cljs$lang$type = true;

om_tutorial.core.RootView.cljs$lang$ctorStr = "om-tutorial.core/RootView";

om_tutorial.core.RootView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/RootView");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.RootView,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map