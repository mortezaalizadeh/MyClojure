// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);
om_tutorial.core.init_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),new cljs.core.Keyword(null,"author","author",2111686192),"Laura Smith",new cljs.core.Keyword(null,"title","title",636505583),"A Post!",new cljs.core.Keyword(null,"content","content",15833224),"Lorem ipsum dolor sit amet, quem atomorum te quo",new cljs.core.Keyword(null,"favorites","favorites",1740773480),(0)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),new cljs.core.Keyword(null,"title","title",636505583),"A Photo!",new cljs.core.Keyword(null,"image","image",-58725096),"photo.jpg",new cljs.core.Keyword(null,"caption","caption",-855383902),"Lorem ipsum",new cljs.core.Keyword(null,"favorites","favorites",1740773480),(0)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),new cljs.core.Keyword(null,"author","author",2111686192),"Jim Jacobs",new cljs.core.Keyword(null,"title","title",636505583),"Another Post!",new cljs.core.Keyword(null,"content","content",15833224),"Lorem ipsum dolor sit amet, quem atomorum te quo",new cljs.core.Keyword(null,"favorites","favorites",1740773480),(0)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317),new cljs.core.Keyword(null,"title","title",636505583),"Charts and Stufff!",new cljs.core.Keyword(null,"image","image",-58725096),"chart.jpg",new cljs.core.Keyword(null,"favorites","favorites",1740773480),(0)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),new cljs.core.Keyword(null,"author","author",2111686192),"May Fields",new cljs.core.Keyword(null,"title","title",636505583),"Yet Another Post!",new cljs.core.Keyword(null,"content","content",15833224),"Lorem ipsum dolor sit amet, quem atomorum te quo",new cljs.core.Keyword(null,"favorites","favorites",1740773480),(0)], null)], null)], null);
/**
 * @constructor
 */
om_tutorial.core.Post = (function om_tutorial$core$Post(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

om_tutorial.core.Post.prototype = goog.object.clone(React.Component.prototype);

var x20414_20426 = om_tutorial.core.Post.prototype;
x20414_20426.componentWillUpdate = ((function (x20414_20426){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___20427 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___20428 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___20427,next_ident__18863__auto___20428)){
var idxr__18864__auto___20429 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___20429 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___20429),((function (idxr__18864__auto___20429,ident__18862__auto___20427,next_ident__18863__auto___20428,this__18858__auto__,x20414_20426){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___20427], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___20428], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___20429,ident__18862__auto___20427,next_ident__18863__auto___20428,this__18858__auto__,x20414_20426))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x20414_20426))
;

x20414_20426.shouldComponentUpdate = ((function (x20414_20426){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__20416 = next_props__18859__auto____$1;
var G__20416__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20416):G__20416);
return G__20416__$1;
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
});})(x20414_20426))
;

x20414_20426.componentWillUnmount = ((function (x20414_20426){
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
});})(x20414_20426))
;

x20414_20426.componentDidUpdate = ((function (x20414_20426){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x20414_20426))
;

x20414_20426.isMounted = ((function (x20414_20426){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20414_20426))
;

x20414_20426.componentWillMount = ((function (x20414_20426){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x20414_20426))
;

x20414_20426.render = ((function (x20414_20426){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_20417 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20418 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20419 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20420 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20421 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__20422 = om.next.props.call(null,this$);
var map__20422__$1 = ((((!((map__20422 == null)))?((((map__20422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20422):map__20422);
var props = map__20422__$1;
var title = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"title","title",636505583));
var author = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var content = cljs.core.get.call(null,map__20422__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,author))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,content))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20421;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20420;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20419;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20418;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20417;
}});})(x20414_20426))
;


om_tutorial.core.Post.prototype.constructor = om_tutorial.core.Post;

om_tutorial.core.Post.prototype.constructor.displayName = "om-tutorial.core/Post";

om_tutorial.core.Post.prototype.om$isComponent = true;

var x20424_20430 = om_tutorial.core.Post;
x20424_20430.om$next$IQuery$ = true;

x20424_20430.om$next$IQuery$query$arity$1 = ((function (x20424_20430){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x20424_20430))
;


var x20425_20431 = om_tutorial.core.Post.prototype;
x20425_20431.om$next$IQuery$ = true;

x20425_20431.om$next$IQuery$query$arity$1 = ((function (x20425_20431){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x20425_20431))
;


om_tutorial.core.Post.cljs$lang$type = true;

om_tutorial.core.Post.cljs$lang$ctorStr = "om-tutorial.core/Post";

om_tutorial.core.Post.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/Post");
});
om_tutorial.core.post = om.next.factory.call(null,om_tutorial.core.Post);
/**
 * @constructor
 */
om_tutorial.core.Photo = (function om_tutorial$core$Photo(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

om_tutorial.core.Photo.prototype = goog.object.clone(React.Component.prototype);

var x20436_20448 = om_tutorial.core.Photo.prototype;
x20436_20448.componentWillUpdate = ((function (x20436_20448){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___20449 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___20450 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___20449,next_ident__18863__auto___20450)){
var idxr__18864__auto___20451 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___20451 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___20451),((function (idxr__18864__auto___20451,ident__18862__auto___20449,next_ident__18863__auto___20450,this__18858__auto__,x20436_20448){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___20449], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___20450], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___20451,ident__18862__auto___20449,next_ident__18863__auto___20450,this__18858__auto__,x20436_20448))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x20436_20448))
;

x20436_20448.shouldComponentUpdate = ((function (x20436_20448){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__20438 = next_props__18859__auto____$1;
var G__20438__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20438):G__20438);
return G__20438__$1;
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
});})(x20436_20448))
;

x20436_20448.componentWillUnmount = ((function (x20436_20448){
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
});})(x20436_20448))
;

x20436_20448.componentDidUpdate = ((function (x20436_20448){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x20436_20448))
;

x20436_20448.isMounted = ((function (x20436_20448){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20436_20448))
;

x20436_20448.componentWillMount = ((function (x20436_20448){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x20436_20448))
;

x20436_20448.render = ((function (x20436_20448){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_20439 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20440 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20441 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20442 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20443 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__20444 = om.next.props.call(null,this$);
var map__20444__$1 = ((((!((map__20444 == null)))?((((map__20444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20444):map__20444);
var title = cljs.core.get.call(null,map__20444__$1,new cljs.core.Keyword(null,"title","title",636505583));
var image = cljs.core.get.call(null,map__20444__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var caption = cljs.core.get.call(null,map__20444__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,[cljs.core.str("Photo: "),cljs.core.str(title)].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,image))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Caption: "),cljs.core.str(caption)].join('')))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20443;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20442;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20441;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20440;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20439;
}});})(x20436_20448))
;


om_tutorial.core.Photo.prototype.constructor = om_tutorial.core.Photo;

om_tutorial.core.Photo.prototype.constructor.displayName = "om-tutorial.core/Photo";

om_tutorial.core.Photo.prototype.om$isComponent = true;

var x20446_20452 = om_tutorial.core.Photo;
x20446_20452.om$next$IQuery$ = true;

x20446_20452.om$next$IQuery$query$arity$1 = ((function (x20446_20452){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"caption","caption",-855383902)], null);
});})(x20446_20452))
;


var x20447_20453 = om_tutorial.core.Photo.prototype;
x20447_20453.om$next$IQuery$ = true;

x20447_20453.om$next$IQuery$query$arity$1 = ((function (x20447_20453){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"caption","caption",-855383902)], null);
});})(x20447_20453))
;


om_tutorial.core.Photo.cljs$lang$type = true;

om_tutorial.core.Photo.cljs$lang$ctorStr = "om-tutorial.core/Photo";

om_tutorial.core.Photo.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/Photo");
});
om_tutorial.core.photo = om.next.factory.call(null,om_tutorial.core.Photo);
/**
 * @constructor
 */
om_tutorial.core.Graphic = (function om_tutorial$core$Graphic(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

om_tutorial.core.Graphic.prototype = goog.object.clone(React.Component.prototype);

var x20458_20470 = om_tutorial.core.Graphic.prototype;
x20458_20470.componentWillUpdate = ((function (x20458_20470){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___20471 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___20472 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___20471,next_ident__18863__auto___20472)){
var idxr__18864__auto___20473 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___20473 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___20473),((function (idxr__18864__auto___20473,ident__18862__auto___20471,next_ident__18863__auto___20472,this__18858__auto__,x20458_20470){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___20471], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___20472], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___20473,ident__18862__auto___20471,next_ident__18863__auto___20472,this__18858__auto__,x20458_20470))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x20458_20470))
;

x20458_20470.shouldComponentUpdate = ((function (x20458_20470){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__20460 = next_props__18859__auto____$1;
var G__20460__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20460):G__20460);
return G__20460__$1;
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
});})(x20458_20470))
;

x20458_20470.componentWillUnmount = ((function (x20458_20470){
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
});})(x20458_20470))
;

x20458_20470.componentDidUpdate = ((function (x20458_20470){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x20458_20470))
;

x20458_20470.isMounted = ((function (x20458_20470){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20458_20470))
;

x20458_20470.componentWillMount = ((function (x20458_20470){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x20458_20470))
;

x20458_20470.render = ((function (x20458_20470){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_20461 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20462 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20463 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20464 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20465 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__20466 = om.next.props.call(null,this$);
var map__20466__$1 = ((((!((map__20466 == null)))?((((map__20466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20466):map__20466);
var title = cljs.core.get.call(null,map__20466__$1,new cljs.core.Keyword(null,"title","title",636505583));
var image = cljs.core.get.call(null,map__20466__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,[cljs.core.str("Graphic: "),cljs.core.str(title)].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,image))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20465;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20464;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20463;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20462;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20461;
}});})(x20458_20470))
;


om_tutorial.core.Graphic.prototype.constructor = om_tutorial.core.Graphic;

om_tutorial.core.Graphic.prototype.constructor.displayName = "om-tutorial.core/Graphic";

om_tutorial.core.Graphic.prototype.om$isComponent = true;

var x20468_20474 = om_tutorial.core.Graphic;
x20468_20474.om$next$IQuery$ = true;

x20468_20474.om$next$IQuery$query$arity$1 = ((function (x20468_20474){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096)], null);
});})(x20468_20474))
;


var x20469_20475 = om_tutorial.core.Graphic.prototype;
x20469_20475.om$next$IQuery$ = true;

x20469_20475.om$next$IQuery$query$arity$1 = ((function (x20469_20475){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096)], null);
});})(x20469_20475))
;


om_tutorial.core.Graphic.cljs$lang$type = true;

om_tutorial.core.Graphic.cljs$lang$ctorStr = "om-tutorial.core/Graphic";

om_tutorial.core.Graphic.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/Graphic");
});
om_tutorial.core.graphic = om.next.factory.call(null,om_tutorial.core.Graphic);
/**
 * @constructor
 */
om_tutorial.core.DashboardItem = (function om_tutorial$core$DashboardItem(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

om_tutorial.core.DashboardItem.prototype = goog.object.clone(React.Component.prototype);

var x20481_20499 = om_tutorial.core.DashboardItem.prototype;
x20481_20499.componentWillUpdate = ((function (x20481_20499){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___20500 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___20501 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___20500,next_ident__18863__auto___20501)){
var idxr__18864__auto___20502 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___20502 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___20502),((function (idxr__18864__auto___20502,ident__18862__auto___20500,next_ident__18863__auto___20501,this__18858__auto__,x20481_20499){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___20500], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___20501], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___20502,ident__18862__auto___20500,next_ident__18863__auto___20501,this__18858__auto__,x20481_20499))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x20481_20499))
;

x20481_20499.shouldComponentUpdate = ((function (x20481_20499){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__20483 = next_props__18859__auto____$1;
var G__20483__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20483):G__20483);
return G__20483__$1;
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
});})(x20481_20499))
;

x20481_20499.componentWillUnmount = ((function (x20481_20499){
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
});})(x20481_20499))
;

x20481_20499.componentDidUpdate = ((function (x20481_20499){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x20481_20499))
;

x20481_20499.isMounted = ((function (x20481_20499){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20481_20499))
;

x20481_20499.componentWillMount = ((function (x20481_20499){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x20481_20499))
;

x20481_20499.render = ((function (x20481_20499){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_20484 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20485 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20486 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20487 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20488 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__20489 = om.next.props.call(null,this$);
var map__20489__$1 = ((((!((map__20489 == null)))?((((map__20489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20489):map__20489);
var props = map__20489__$1;
var id = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var favorites = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"favorites","favorites",1740773480));
return React.DOM.li({"style": {"padding": (10), "borderBottom": "1px solid black"}},om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),om_tutorial.core.post,new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),om_tutorial.core.photo,new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317),om_tutorial.core.graphic], null).call(null,type).call(null,om.next.props.call(null,this$))))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Favorites: "),cljs.core.str(favorites)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20489,map__20489__$1,props,id,type,favorites,_STAR_reconciler_STAR_20484,_STAR_depth_STAR_20485,_STAR_shared_STAR_20486,_STAR_instrument_STAR_20487,_STAR_parent_STAR_20488,this$,this__18857__auto__,x20481_20499){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("dashboard","favorite","dashboard/favorite",1484455472,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref","ref",1289896967)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,type),cljs.core._conj.call(null,cljs.core.List.EMPTY,id))))))))))))))))))));
});})(map__20489,map__20489__$1,props,id,type,favorites,_STAR_reconciler_STAR_20484,_STAR_depth_STAR_20485,_STAR_shared_STAR_20486,_STAR_instrument_STAR_20487,_STAR_parent_STAR_20488,this$,this__18857__auto__,x20481_20499))
},om.util.force_children.call(null,"Favorite!"))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20488;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20487;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20486;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20485;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20484;
}});})(x20481_20499))
;


om_tutorial.core.DashboardItem.prototype.constructor = om_tutorial.core.DashboardItem;

om_tutorial.core.DashboardItem.prototype.constructor.displayName = "om-tutorial.core/DashboardItem";

om_tutorial.core.DashboardItem.prototype.om$isComponent = true;

var x20491_20503 = om_tutorial.core.DashboardItem;
x20491_20503.om$next$Ident$ = true;

x20491_20503.om$next$Ident$ident$arity$2 = ((function (x20491_20503){
return (function (this$,p__20492){
var map__20493 = p__20492;
var map__20493__$1 = ((((!((map__20493 == null)))?((((map__20493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20493):map__20493);
var id = cljs.core.get.call(null,map__20493__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20493__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x20491_20503))
;

x20491_20503.om$next$IQuery$ = true;

x20491_20503.om$next$IQuery$query$arity$1 = ((function (x20491_20503){
return (function (this$){
var this$__$1 = this;
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317)], null),cljs.core.map.call(null,((function (this$__$1,x20491_20503){
return (function (p1__20476_SHARP_){
return cljs.core.conj.call(null,p1__20476_SHARP_,new cljs.core.Keyword(null,"favorites","favorites",1740773480));
});})(this$__$1,x20491_20503))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_query.call(null,om_tutorial.core.Post),om.next.get_query.call(null,om_tutorial.core.Photo),om.next.get_query.call(null,om_tutorial.core.Graphic)], null)));
});})(x20491_20503))
;


var x20495_20504 = om_tutorial.core.DashboardItem.prototype;
x20495_20504.om$next$Ident$ = true;

x20495_20504.om$next$Ident$ident$arity$2 = ((function (x20495_20504){
return (function (this$,p__20496){
var map__20497 = p__20496;
var map__20497__$1 = ((((!((map__20497 == null)))?((((map__20497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20497):map__20497);
var id = cljs.core.get.call(null,map__20497__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20497__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x20495_20504))
;

x20495_20504.om$next$IQuery$ = true;

x20495_20504.om$next$IQuery$query$arity$1 = ((function (x20495_20504){
return (function (this$){
var this$__$1 = this;
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317)], null),cljs.core.map.call(null,((function (this$__$1,x20495_20504){
return (function (p1__20476_SHARP_){
return cljs.core.conj.call(null,p1__20476_SHARP_,new cljs.core.Keyword(null,"favorites","favorites",1740773480));
});})(this$__$1,x20495_20504))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_query.call(null,om_tutorial.core.Post),om.next.get_query.call(null,om_tutorial.core.Photo),om.next.get_query.call(null,om_tutorial.core.Graphic)], null)));
});})(x20495_20504))
;


om_tutorial.core.DashboardItem.cljs$lang$type = true;

om_tutorial.core.DashboardItem.cljs$lang$ctorStr = "om-tutorial.core/DashboardItem";

om_tutorial.core.DashboardItem.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/DashboardItem");
});
om_tutorial.core.dashboard_item = om.next.factory.call(null,om_tutorial.core.DashboardItem);
/**
 * @constructor
 */
om_tutorial.core.Dashboard = (function om_tutorial$core$Dashboard(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

om_tutorial.core.Dashboard.prototype = goog.object.clone(React.Component.prototype);

var x20509_20521 = om_tutorial.core.Dashboard.prototype;
x20509_20521.componentWillUpdate = ((function (x20509_20521){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___20522 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___20523 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___20522,next_ident__18863__auto___20523)){
var idxr__18864__auto___20524 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___20524 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___20524),((function (idxr__18864__auto___20524,ident__18862__auto___20522,next_ident__18863__auto___20523,this__18858__auto__,x20509_20521){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___20522], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___20523], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___20524,ident__18862__auto___20522,next_ident__18863__auto___20523,this__18858__auto__,x20509_20521))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x20509_20521))
;

x20509_20521.shouldComponentUpdate = ((function (x20509_20521){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__20511 = next_props__18859__auto____$1;
var G__20511__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20511):G__20511);
return G__20511__$1;
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
});})(x20509_20521))
;

x20509_20521.componentWillUnmount = ((function (x20509_20521){
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
});})(x20509_20521))
;

x20509_20521.componentDidUpdate = ((function (x20509_20521){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x20509_20521))
;

x20509_20521.isMounted = ((function (x20509_20521){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20509_20521))
;

x20509_20521.componentWillMount = ((function (x20509_20521){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x20509_20521))
;

x20509_20521.render = ((function (x20509_20521){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_20512 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20513 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20514 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20515 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20516 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__20517 = om.next.props.call(null,this$);
var map__20517__$1 = ((((!((map__20517 == null)))?((((map__20517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20517):map__20517);
var items = cljs.core.get.call(null,map__20517__$1,new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874));
return cljs.core.apply.call(null,om.dom.ul,{"style": {"padding": (0)}},cljs.core.map.call(null,om_tutorial.core.dashboard_item,items));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20516;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20515;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20514;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20513;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20512;
}});})(x20509_20521))
;


om_tutorial.core.Dashboard.prototype.constructor = om_tutorial.core.Dashboard;

om_tutorial.core.Dashboard.prototype.constructor.displayName = "om-tutorial.core/Dashboard";

om_tutorial.core.Dashboard.prototype.om$isComponent = true;

var x20519_20525 = om_tutorial.core.Dashboard;
x20519_20525.om$next$IQuery$ = true;

x20519_20525.om$next$IQuery$query$arity$1 = ((function (x20519_20525){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),om.next.get_query.call(null,om_tutorial.core.DashboardItem)], null)], null);
});})(x20519_20525))
;


var x20520_20526 = om_tutorial.core.Dashboard.prototype;
x20520_20526.om$next$IQuery$ = true;

x20520_20526.om$next$IQuery$query$arity$1 = ((function (x20520_20526){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),om.next.get_query.call(null,om_tutorial.core.DashboardItem)], null)], null);
});})(x20520_20526))
;


om_tutorial.core.Dashboard.cljs$lang$type = true;

om_tutorial.core.Dashboard.cljs$lang$ctorStr = "om-tutorial.core/Dashboard";

om_tutorial.core.Dashboard.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"om-tutorial.core/Dashboard");
});
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
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),(function (p__20528,k,_){
var map__20529 = p__20528;
var map__20529__$1 = ((((!((map__20529 == null)))?((((map__20529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20529):map__20529);
var state = cljs.core.get.call(null,map__20529__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st,map__20529,map__20529__$1,state){
return (function (p1__20527_SHARP_){
return cljs.core.get_in.call(null,st,p1__20527_SHARP_);
});})(st,map__20529,map__20529__$1,state))
),cljs.core.get.call(null,st,k))], null);
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
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("dashboard","favorite","dashboard/favorite",1484455472,null),(function (p__20531,k,p__20532){
var map__20533 = p__20531;
var map__20533__$1 = ((((!((map__20533 == null)))?((((map__20533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20533):map__20533);
var state = cljs.core.get.call(null,map__20533__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20534 = p__20532;
var map__20534__$1 = ((((!((map__20534 == null)))?((((map__20534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20534):map__20534);
var ref = cljs.core.get.call(null,map__20534__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20533,map__20533__$1,state,map__20534,map__20534__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,new cljs.core.Keyword(null,"favorites","favorites",1740773480)),cljs.core.inc);
});})(map__20533,map__20533__$1,state,map__20534,map__20534__$1,ref))
], null);
}));
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.Dashboard,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map