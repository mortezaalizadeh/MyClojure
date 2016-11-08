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
return (function (p1__20587_SHARP_){
return cljs.core.get_in.call(null,st,p1__20587_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","one","list/one",942123326),(function (p__20588,key,params){
var map__20589 = p__20588;
var map__20589__$1 = ((((!((map__20589 == null)))?((((map__20589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20589):map__20589);
var env = map__20589__$1;
var state = cljs.core.get.call(null,map__20589__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","two","list/two",521811255),(function (p__20591,key,params){
var map__20592 = p__20591;
var map__20592__$1 = ((((!((map__20592 == null)))?((((map__20592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20592):map__20592);
var env = map__20592__$1;
var state = cljs.core.get.call(null,map__20592__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
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
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","increment","points/increment",1315621678,null),(function (p__20594,_,p__20595){
var map__20596 = p__20594;
var map__20596__$1 = ((((!((map__20596 == null)))?((((map__20596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20596):map__20596);
var state = cljs.core.get.call(null,map__20596__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20597 = p__20595;
var map__20597__$1 = ((((!((map__20597 == null)))?((((map__20597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20597):map__20597);
var name = cljs.core.get.call(null,map__20597__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20596,map__20596__$1,state,map__20597,map__20597__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.inc);
});})(map__20596,map__20596__$1,state,map__20597,map__20597__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","incrementAge","points/incrementAge",-1618883486,null),(function (p__20600,_,p__20601){
var map__20602 = p__20600;
var map__20602__$1 = ((((!((map__20602 == null)))?((((map__20602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20602):map__20602);
var state = cljs.core.get.call(null,map__20602__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20603 = p__20601;
var map__20603__$1 = ((((!((map__20603 == null)))?((((map__20603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20603):map__20603);
var name = cljs.core.get.call(null,map__20603__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20602,map__20602__$1,state,map__20603,map__20603__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"age","age",-604307804)], null),cljs.core.inc);
});})(map__20602,map__20602__$1,state,map__20603,map__20603__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null),(function (p__20607,_,p__20608){
var map__20609 = p__20607;
var map__20609__$1 = ((((!((map__20609 == null)))?((((map__20609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20609):map__20609);
var state = cljs.core.get.call(null,map__20609__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20610 = p__20608;
var map__20610__$1 = ((((!((map__20610 == null)))?((((map__20610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20610):map__20610);
var name = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20609,map__20609__$1,state,map__20610,map__20610__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__20609,map__20609__$1,state,map__20610,map__20610__$1,name){
return (function (p1__20606_SHARP_){
var n = (p1__20606_SHARP_ - (1));
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__20609,map__20609__$1,state,map__20610,map__20610__$1,name))
);
});})(map__20609,map__20609__$1,state,map__20610,map__20610__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","decrementAge","points/decrementAge",-530206475,null),(function (p__20614,_,p__20615){
var map__20616 = p__20614;
var map__20616__$1 = ((((!((map__20616 == null)))?((((map__20616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20616):map__20616);
var state = cljs.core.get.call(null,map__20616__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20617 = p__20615;
var map__20617__$1 = ((((!((map__20617 == null)))?((((map__20617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20617):map__20617);
var name = cljs.core.get.call(null,map__20617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20616,map__20616__$1,state,map__20617,map__20617__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"age","age",-604307804)], null),((function (map__20616,map__20616__$1,state,map__20617,map__20617__$1,name){
return (function (p1__20613_SHARP_){
var n = (p1__20613_SHARP_ - (1));
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__20616,map__20616__$1,state,map__20617,map__20617__$1,name))
);
});})(map__20616,map__20616__$1,state,map__20617,map__20617__$1,name))
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

var x20624_20642 = om_tutorial.core.Person.prototype;
x20624_20642.componentWillUpdate = ((function (x20624_20642){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___20643 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___20644 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___20643,next_ident__18863__auto___20644)){
var idxr__18864__auto___20645 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___20645 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___20645),((function (idxr__18864__auto___20645,ident__18862__auto___20643,next_ident__18863__auto___20644,this__18858__auto__,x20624_20642){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___20643], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___20644], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___20645,ident__18862__auto___20643,next_ident__18863__auto___20644,this__18858__auto__,x20624_20642))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x20624_20642))
;

x20624_20642.shouldComponentUpdate = ((function (x20624_20642){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__20626 = next_props__18859__auto____$1;
var G__20626__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20626):G__20626);
return G__20626__$1;
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
});})(x20624_20642))
;

x20624_20642.componentWillUnmount = ((function (x20624_20642){
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
});})(x20624_20642))
;

x20624_20642.componentDidUpdate = ((function (x20624_20642){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x20624_20642))
;

x20624_20642.isMounted = ((function (x20624_20642){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20624_20642))
;

x20624_20642.componentWillMount = ((function (x20624_20642){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x20624_20642))
;

x20624_20642.render = ((function (x20624_20642){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_20627 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20628 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20629 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20630 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20631 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{cljs.core.println.call(null,"Render Person",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));

var map__20632 = om.next.props.call(null,this$);
var map__20632__$1 = ((((!((map__20632 == null)))?((((map__20632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20632):map__20632);
var props = map__20632__$1;
var points = cljs.core.get.call(null,map__20632__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var name = cljs.core.get.call(null,map__20632__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var age = cljs.core.get.call(null,map__20632__$1,new cljs.core.Keyword(null,"age","age",-604307804));
return React.DOM.li(null,om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,[cljs.core.str(name),cljs.core.str(", points: "),cljs.core.str(points),cljs.core.str(" age: "),cljs.core.str(age)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20632,map__20632__$1,props,points,name,age,_STAR_reconciler_STAR_20627,_STAR_depth_STAR_20628,_STAR_shared_STAR_20629,_STAR_instrument_STAR_20630,_STAR_parent_STAR_20631,this$,this__18857__auto__,x20624_20642){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","increment","points/increment",1315621678,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__20632,map__20632__$1,props,points,name,age,_STAR_reconciler_STAR_20627,_STAR_depth_STAR_20628,_STAR_shared_STAR_20629,_STAR_instrument_STAR_20630,_STAR_parent_STAR_20631,this$,this__18857__auto__,x20624_20642))
},om.util.force_children.call(null,"+"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20632,map__20632__$1,props,points,name,age,_STAR_reconciler_STAR_20627,_STAR_depth_STAR_20628,_STAR_shared_STAR_20629,_STAR_instrument_STAR_20630,_STAR_parent_STAR_20631,this$,this__18857__auto__,x20624_20642){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__20632,map__20632__$1,props,points,name,age,_STAR_reconciler_STAR_20627,_STAR_depth_STAR_20628,_STAR_shared_STAR_20629,_STAR_instrument_STAR_20630,_STAR_parent_STAR_20631,this$,this__18857__auto__,x20624_20642))
},om.util.force_children.call(null,"-"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20632,map__20632__$1,props,points,name,age,_STAR_reconciler_STAR_20627,_STAR_depth_STAR_20628,_STAR_shared_STAR_20629,_STAR_instrument_STAR_20630,_STAR_parent_STAR_20631,this$,this__18857__auto__,x20624_20642){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","incrementAge","points/incrementAge",-1618883486,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__20632,map__20632__$1,props,points,name,age,_STAR_reconciler_STAR_20627,_STAR_depth_STAR_20628,_STAR_shared_STAR_20629,_STAR_instrument_STAR_20630,_STAR_parent_STAR_20631,this$,this__18857__auto__,x20624_20642))
},om.util.force_children.call(null,"+++"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20632,map__20632__$1,props,points,name,age,_STAR_reconciler_STAR_20627,_STAR_depth_STAR_20628,_STAR_shared_STAR_20629,_STAR_instrument_STAR_20630,_STAR_parent_STAR_20631,this$,this__18857__auto__,x20624_20642){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","decrementAge","points/decrementAge",-530206475,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__20632,map__20632__$1,props,points,name,age,_STAR_reconciler_STAR_20627,_STAR_depth_STAR_20628,_STAR_shared_STAR_20629,_STAR_instrument_STAR_20630,_STAR_parent_STAR_20631,this$,this__18857__auto__,x20624_20642))
},om.util.force_children.call(null,"---"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20631;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20630;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20629;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20628;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20627;
}});})(x20624_20642))
;


om_tutorial.core.Person.prototype.constructor = om_tutorial.core.Person;

om_tutorial.core.Person.prototype.constructor.displayName = "om-tutorial.core/Person";

om_tutorial.core.Person.prototype.om$isComponent = true;

var x20634_20646 = om_tutorial.core.Person;
x20634_20646.om$next$Ident$ = true;

x20634_20646.om$next$Ident$ident$arity$2 = ((function (x20634_20646){
return (function (this$,p__20635){
var map__20636 = p__20635;
var map__20636__$1 = ((((!((map__20636 == null)))?((((map__20636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20636):map__20636);
var name = cljs.core.get.call(null,map__20636__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x20634_20646))
;

x20634_20646.om$next$IQuery$ = true;

x20634_20646.om$next$IQuery$query$arity$1 = ((function (x20634_20646){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"age","age",-604307804)], null);
});})(x20634_20646))
;


var x20638_20647 = om_tutorial.core.Person.prototype;
x20638_20647.om$next$Ident$ = true;

x20638_20647.om$next$Ident$ident$arity$2 = ((function (x20638_20647){
return (function (this$,p__20639){
var map__20640 = p__20639;
var map__20640__$1 = ((((!((map__20640 == null)))?((((map__20640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20640):map__20640);
var name = cljs.core.get.call(null,map__20640__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x20638_20647))
;

x20638_20647.om$next$IQuery$ = true;

x20638_20647.om$next$IQuery$query$arity$1 = ((function (x20638_20647){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"age","age",-604307804)], null);
});})(x20638_20647))
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

var x20652_20662 = om_tutorial.core.ListView.prototype;
x20652_20662.componentWillUpdate = ((function (x20652_20662){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___20663 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___20664 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___20663,next_ident__18863__auto___20664)){
var idxr__18864__auto___20665 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___20665 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___20665),((function (idxr__18864__auto___20665,ident__18862__auto___20663,next_ident__18863__auto___20664,this__18858__auto__,x20652_20662){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___20663], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___20664], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___20665,ident__18862__auto___20663,next_ident__18863__auto___20664,this__18858__auto__,x20652_20662))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x20652_20662))
;

x20652_20662.shouldComponentUpdate = ((function (x20652_20662){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__20654 = next_props__18859__auto____$1;
var G__20654__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20654):G__20654);
return G__20654__$1;
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
});})(x20652_20662))
;

x20652_20662.componentWillUnmount = ((function (x20652_20662){
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
});})(x20652_20662))
;

x20652_20662.componentDidUpdate = ((function (x20652_20662){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x20652_20662))
;

x20652_20662.isMounted = ((function (x20652_20662){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20652_20662))
;

x20652_20662.componentWillMount = ((function (x20652_20662){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x20652_20662))
;

x20652_20662.render = ((function (x20652_20662){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_20655 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20656 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20657 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20658 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20659 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{cljs.core.println.call(null,"Render ListView",cljs.core.first.call(null,om.next.path.call(null,this$)));

var list = om.next.props.call(null,this$);
return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,om_tutorial.core.person,list));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20659;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20658;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20657;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20656;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20655;
}});})(x20652_20662))
;


om_tutorial.core.ListView.prototype.constructor = om_tutorial.core.ListView;

om_tutorial.core.ListView.prototype.constructor.displayName = "om-tutorial.core/ListView";

om_tutorial.core.ListView.prototype.om$isComponent = true;

var x20660_20666 = om_tutorial.core.ListView;


var x20661_20667 = om_tutorial.core.ListView.prototype;


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

var x20672_20684 = om_tutorial.core.RootView.prototype;
x20672_20684.componentWillUpdate = ((function (x20672_20684){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___20685 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___20686 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___20685,next_ident__18863__auto___20686)){
var idxr__18864__auto___20687 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___20687 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___20687),((function (idxr__18864__auto___20687,ident__18862__auto___20685,next_ident__18863__auto___20686,this__18858__auto__,x20672_20684){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___20685], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___20686], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___20687,ident__18862__auto___20685,next_ident__18863__auto___20686,this__18858__auto__,x20672_20684))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x20672_20684))
;

x20672_20684.shouldComponentUpdate = ((function (x20672_20684){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__20674 = next_props__18859__auto____$1;
var G__20674__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20674):G__20674);
return G__20674__$1;
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
});})(x20672_20684))
;

x20672_20684.componentWillUnmount = ((function (x20672_20684){
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
});})(x20672_20684))
;

x20672_20684.componentDidUpdate = ((function (x20672_20684){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x20672_20684))
;

x20672_20684.isMounted = ((function (x20672_20684){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20672_20684))
;

x20672_20684.componentWillMount = ((function (x20672_20684){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x20672_20684))
;

x20672_20684.render = ((function (x20672_20684){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_20675 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20676 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20677 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20678 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20679 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{cljs.core.println.call(null,"Render RootView");

var map__20680 = om.next.props.call(null,this$);
var map__20680__$1 = ((((!((map__20680 == null)))?((((map__20680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20680):map__20680);
var one = cljs.core.get.call(null,map__20680__$1,new cljs.core.Keyword("list","one","list/one",942123326));
var two = cljs.core.get.call(null,map__20680__$1,new cljs.core.Keyword("list","two","list/two",521811255));
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h2(null,om.util.force_children.call(null,"List A")),om_tutorial.core.list_view.call(null,one),React.DOM.h2(null,om.util.force_children.call(null,"List B")),om_tutorial.core.list_view.call(null,two)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20679;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20678;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20677;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20676;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20675;
}});})(x20672_20684))
;


om_tutorial.core.RootView.prototype.constructor = om_tutorial.core.RootView;

om_tutorial.core.RootView.prototype.constructor.displayName = "om-tutorial.core/RootView";

om_tutorial.core.RootView.prototype.om$isComponent = true;

var x20682_20688 = om_tutorial.core.RootView;
x20682_20688.om$next$IQuery$ = true;

x20682_20688.om$next$IQuery$query$arity$1 = ((function (x20682_20688){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x20682_20688))
;


var x20683_20689 = om_tutorial.core.RootView.prototype;
x20683_20689.om$next$IQuery$ = true;

x20683_20689.om$next$IQuery$query$arity$1 = ((function (x20683_20689){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x20683_20689))
;


om_tutorial.core.RootView.cljs$lang$type = true;

om_tutorial.core.RootView.cljs$lang$ctorStr = "om-tutorial.core/RootView";

om_tutorial.core.RootView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/RootView");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.RootView,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map