// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_datascript.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
goog.require('datascript.core');
cljs.core.enable_console_print_BANG_.call(null);
om_datascript.core.conn = datascript.core.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY);
datascript.core.transact_BANG_.call(null,om_datascript.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","title","app/title",636408784),"Hello, DataScript!",new cljs.core.Keyword("app","count","app/count",2145591446),(0)], null)], null));
if(typeof om_datascript.core.read !== 'undefined'){
} else {
om_datascript.core.read = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-datascript.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
})();
}
cljs.core._add_method.call(null,om_datascript.core.read,new cljs.core.Keyword("app","counter","app/counter",804038354),(function (p__23744,_,___$1){
var map__23745 = p__23744;
var map__23745__$1 = ((((!((map__23745 == null)))?((((map__23745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23745):map__23745);
var state = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__23745__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","title","app/title",636408784)], null)], null),datascript.core.db.call(null,state),query)], null);
}));
if(typeof om_datascript.core.mutate !== 'undefined'){
} else {
om_datascript.core.mutate = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-datascript.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
})();
}
cljs.core._add_method.call(null,om_datascript.core.mutate,new cljs.core.Symbol("app","increment","app/increment",81538792,null),(function (p__23747,_,entity){
var map__23748 = p__23747;
var map__23748__$1 = ((((!((map__23748 == null)))?((((map__23748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23748):map__23748);
var state = cljs.core.get.call(null,map__23748__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","counter","app/counter",804038354)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23748,map__23748__$1,state){
return (function (){
return datascript.core.transact_BANG_.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","count","app/count",2145591446)], null),cljs.core.inc)], null));
});})(map__23748,map__23748__$1,state))
], null);
}));
/**
 * @constructor
 */
om_datascript.core.Counter = (function om_datascript$core$Counter(){
var this__19915__auto__ = this;
React.Component.apply(this__19915__auto__,arguments);

if(!((this__19915__auto__.initLocalState == null))){
this__19915__auto__.state = this__19915__auto__.initLocalState();
} else {
this__19915__auto__.state = {};
}

return this__19915__auto__;
});

om_datascript.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x23754_23766 = om_datascript.core.Counter.prototype;
x23754_23766.componentWillUpdate = ((function (x23754_23766){
return (function (next_props__19851__auto__,next_state__19852__auto__){
var this__19850__auto__ = this;
if(((!((this__19850__auto__ == null)))?(((false) || (this__19850__auto__.om$next$Ident$))?true:false):false)){
var ident__19854__auto___23767 = om.next.ident.call(null,this__19850__auto__,om.next.props.call(null,this__19850__auto__));
var next_ident__19855__auto___23768 = om.next.ident.call(null,this__19850__auto__,om.next._next_props.call(null,next_props__19851__auto__,this__19850__auto__));
if(cljs.core.not_EQ_.call(null,ident__19854__auto___23767,next_ident__19855__auto___23768)){
var idxr__19856__auto___23769 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19850__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19856__auto___23769 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19856__auto___23769),((function (idxr__19856__auto___23769,ident__19854__auto___23767,next_ident__19855__auto___23768,this__19850__auto__,x23754_23766){
return (function (indexes__19857__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19857__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19854__auto___23767], null),cljs.core.disj,this__19850__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19855__auto___23768], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__19850__auto__);
});})(idxr__19856__auto___23769,ident__19854__auto___23767,next_ident__19855__auto___23768,this__19850__auto__,x23754_23766))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__19850__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19850__auto__);
});})(x23754_23766))
;

x23754_23766.shouldComponentUpdate = ((function (x23754_23766){
return (function (next_props__19851__auto__,next_state__19852__auto__){
var this__19850__auto__ = this;
var next_children__19853__auto__ = next_props__19851__auto__.children;
var next_props__19851__auto____$1 = goog.object.get(next_props__19851__auto__,"omcljs$value");
var next_props__19851__auto____$2 = (function (){var G__23756 = next_props__19851__auto____$1;
var G__23756__$1 = (((next_props__19851__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23756):G__23756);
return G__23756__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19850__auto__),next_props__19851__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__19850__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19850__auto__.state,"omcljs$state"),goog.object.get(next_state__19852__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__19850__auto__.props.children,next_children__19853__auto__);
}
}
});})(x23754_23766))
;

x23754_23766.componentWillUnmount = ((function (x23754_23766){
return (function (){
var this__19850__auto__ = this;
var r__19861__auto__ = om.next.get_reconciler.call(null,this__19850__auto__);
var cfg__19862__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19861__auto__);
var st__19863__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19862__auto__);
var indexer__19860__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19862__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__19863__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__19863__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__19850__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__19863__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19850__auto__);
} else {
}

if((indexer__19860__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19860__auto__,this__19850__auto__);
}
});})(x23754_23766))
;

x23754_23766.componentDidUpdate = ((function (x23754_23766){
return (function (prev_props__19858__auto__,prev_state__19859__auto__){
var this__19850__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19850__auto__);
});})(x23754_23766))
;

x23754_23766.isMounted = ((function (x23754_23766){
return (function (){
var this__19850__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19850__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23754_23766))
;

x23754_23766.componentWillMount = ((function (x23754_23766){
return (function (){
var this__19850__auto__ = this;
var indexer__19860__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19850__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19860__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19860__auto__,this__19850__auto__);
}
});})(x23754_23766))
;

x23754_23766.render = ((function (x23754_23766){
return (function (){
var this__19849__auto__ = this;
var this$ = this__19849__auto__;
var _STAR_reconciler_STAR_23757 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23758 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23759 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23760 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23761 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19849__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19849__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19849__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19849__auto__);

om.next._STAR_parent_STAR_ = this__19849__auto__;

try{var map__23762 = cljs.core.get_in.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","counter","app/counter",804038354),(0)], null));
var map__23762__$1 = ((((!((map__23762 == null)))?((((map__23762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23762):map__23762);
var entity = map__23762__$1;
var title = cljs.core.get.call(null,map__23762__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var count = cljs.core.get.call(null,map__23762__$1,new cljs.core.Keyword("app","count","app/count",2145591446));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__23762,map__23762__$1,entity,title,count,_STAR_reconciler_STAR_23757,_STAR_depth_STAR_23758,_STAR_shared_STAR_23759,_STAR_instrument_STAR_23760,_STAR_parent_STAR_23761,this$,this__19849__auto__,x23754_23766){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","increment","app/increment",81538792,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,entity))))))))));
});})(map__23762,map__23762__$1,entity,title,count,_STAR_reconciler_STAR_23757,_STAR_depth_STAR_23758,_STAR_shared_STAR_23759,_STAR_instrument_STAR_23760,_STAR_parent_STAR_23761,this$,this__19849__auto__,x23754_23766))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23761;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23760;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23759;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23758;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23757;
}});})(x23754_23766))
;


om_datascript.core.Counter.prototype.constructor = om_datascript.core.Counter;

om_datascript.core.Counter.prototype.constructor.displayName = "om-datascript.core/Counter";

om_datascript.core.Counter.prototype.om$isComponent = true;

var x23764_23770 = om_datascript.core.Counter;
x23764_23770.om$next$IQuery$ = true;

x23764_23770.om$next$IQuery$query$arity$1 = ((function (x23764_23770){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","counter","app/counter",804038354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword("app","count","app/count",2145591446)], null)], null)], null);
});})(x23764_23770))
;


var x23765_23771 = om_datascript.core.Counter.prototype;
x23765_23771.om$next$IQuery$ = true;

x23765_23771.om$next$IQuery$query$arity$1 = ((function (x23765_23771){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","counter","app/counter",804038354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword("app","count","app/count",2145591446)], null)], null)], null);
});})(x23765_23771))
;


om_datascript.core.Counter.cljs$lang$type = true;

om_datascript.core.Counter.cljs$lang$ctorStr = "om-datascript.core/Counter";

om_datascript.core.Counter.cljs$lang$ctorPrWriter = (function (this__19917__auto__,writer__19918__auto__,opt__19919__auto__){
return cljs.core._write.call(null,writer__19918__auto__,"om-datascript.core/Counter");
});
om_datascript.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_datascript.core.conn,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_datascript.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_datascript.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_datascript.core.reconciler,om_datascript.core.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map