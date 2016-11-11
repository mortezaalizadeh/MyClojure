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
var this__19014__auto__ = this;
React.Component.apply(this__19014__auto__,arguments);

if(!((this__19014__auto__.initLocalState == null))){
this__19014__auto__.state = this__19014__auto__.initLocalState();
} else {
this__19014__auto__.state = {};
}

return this__19014__auto__;
});

om_tutorial.core.Post.prototype = goog.object.clone(React.Component.prototype);

var x20188_20200 = om_tutorial.core.Post.prototype;
x20188_20200.componentWillUpdate = ((function (x20188_20200){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20201 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20202 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20201,next_ident__18954__auto___20202)){
var idxr__18955__auto___20203 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20203 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20203),((function (idxr__18955__auto___20203,ident__18953__auto___20201,next_ident__18954__auto___20202,this__18949__auto__,x20188_20200){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20201], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20202], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20203,ident__18953__auto___20201,next_ident__18954__auto___20202,this__18949__auto__,x20188_20200))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20188_20200))
;

x20188_20200.shouldComponentUpdate = ((function (x20188_20200){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20190 = next_props__18950__auto____$1;
var G__20190__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20190):G__20190);
return G__20190__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18949__auto__),next_props__18950__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18949__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18949__auto__.state,"omcljs$state"),goog.object.get(next_state__18951__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18949__auto__.props.children,next_children__18952__auto__);
}
}
});})(x20188_20200))
;

x20188_20200.componentWillUnmount = ((function (x20188_20200){
return (function (){
var this__18949__auto__ = this;
var r__18960__auto__ = om.next.get_reconciler.call(null,this__18949__auto__);
var cfg__18961__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18960__auto__);
var st__18962__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
var indexer__18959__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18962__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18962__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18949__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18962__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18949__auto__);
} else {
}

if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20188_20200))
;

x20188_20200.componentDidUpdate = ((function (x20188_20200){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20188_20200))
;

x20188_20200.isMounted = ((function (x20188_20200){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20188_20200))
;

x20188_20200.componentWillMount = ((function (x20188_20200){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20188_20200))
;

x20188_20200.render = ((function (x20188_20200){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20191 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20192 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20193 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20194 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20195 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20196 = om.next.props.call(null,this$);
var map__20196__$1 = ((((!((map__20196 == null)))?((((map__20196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20196):map__20196);
var props = map__20196__$1;
var title = cljs.core.get.call(null,map__20196__$1,new cljs.core.Keyword(null,"title","title",636505583));
var author = cljs.core.get.call(null,map__20196__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var content = cljs.core.get.call(null,map__20196__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,author))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,content))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20195;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20194;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20193;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20192;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20191;
}});})(x20188_20200))
;


om_tutorial.core.Post.prototype.constructor = om_tutorial.core.Post;

om_tutorial.core.Post.prototype.constructor.displayName = "om-tutorial.core/Post";

om_tutorial.core.Post.prototype.om$isComponent = true;

var x20198_20204 = om_tutorial.core.Post;
x20198_20204.om$next$IQuery$ = true;

x20198_20204.om$next$IQuery$query$arity$1 = ((function (x20198_20204){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x20198_20204))
;


var x20199_20205 = om_tutorial.core.Post.prototype;
x20199_20205.om$next$IQuery$ = true;

x20199_20205.om$next$IQuery$query$arity$1 = ((function (x20199_20205){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x20199_20205))
;


om_tutorial.core.Post.cljs$lang$type = true;

om_tutorial.core.Post.cljs$lang$ctorStr = "om-tutorial.core/Post";

om_tutorial.core.Post.cljs$lang$ctorPrWriter = (function (this__19016__auto__,writer__19017__auto__,opt__19018__auto__){
return cljs.core._write.call(null,writer__19017__auto__,"om-tutorial.core/Post");
});
om_tutorial.core.post = om.next.factory.call(null,om_tutorial.core.Post);
/**
 * @constructor
 */
om_tutorial.core.Photo = (function om_tutorial$core$Photo(){
var this__19014__auto__ = this;
React.Component.apply(this__19014__auto__,arguments);

if(!((this__19014__auto__.initLocalState == null))){
this__19014__auto__.state = this__19014__auto__.initLocalState();
} else {
this__19014__auto__.state = {};
}

return this__19014__auto__;
});

om_tutorial.core.Photo.prototype = goog.object.clone(React.Component.prototype);

var x20210_20222 = om_tutorial.core.Photo.prototype;
x20210_20222.componentWillUpdate = ((function (x20210_20222){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20223 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20224 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20223,next_ident__18954__auto___20224)){
var idxr__18955__auto___20225 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20225 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20225),((function (idxr__18955__auto___20225,ident__18953__auto___20223,next_ident__18954__auto___20224,this__18949__auto__,x20210_20222){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20223], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20224], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20225,ident__18953__auto___20223,next_ident__18954__auto___20224,this__18949__auto__,x20210_20222))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20210_20222))
;

x20210_20222.shouldComponentUpdate = ((function (x20210_20222){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20212 = next_props__18950__auto____$1;
var G__20212__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20212):G__20212);
return G__20212__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18949__auto__),next_props__18950__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18949__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18949__auto__.state,"omcljs$state"),goog.object.get(next_state__18951__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18949__auto__.props.children,next_children__18952__auto__);
}
}
});})(x20210_20222))
;

x20210_20222.componentWillUnmount = ((function (x20210_20222){
return (function (){
var this__18949__auto__ = this;
var r__18960__auto__ = om.next.get_reconciler.call(null,this__18949__auto__);
var cfg__18961__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18960__auto__);
var st__18962__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
var indexer__18959__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18962__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18962__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18949__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18962__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18949__auto__);
} else {
}

if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20210_20222))
;

x20210_20222.componentDidUpdate = ((function (x20210_20222){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20210_20222))
;

x20210_20222.isMounted = ((function (x20210_20222){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20210_20222))
;

x20210_20222.componentWillMount = ((function (x20210_20222){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20210_20222))
;

x20210_20222.render = ((function (x20210_20222){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20213 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20214 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20215 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20216 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20217 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20218 = om.next.props.call(null,this$);
var map__20218__$1 = ((((!((map__20218 == null)))?((((map__20218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20218):map__20218);
var title = cljs.core.get.call(null,map__20218__$1,new cljs.core.Keyword(null,"title","title",636505583));
var image = cljs.core.get.call(null,map__20218__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var caption = cljs.core.get.call(null,map__20218__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,[cljs.core.str("Photo: "),cljs.core.str(title)].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,image))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Caption: "),cljs.core.str(caption)].join('')))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20217;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20216;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20215;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20214;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20213;
}});})(x20210_20222))
;


om_tutorial.core.Photo.prototype.constructor = om_tutorial.core.Photo;

om_tutorial.core.Photo.prototype.constructor.displayName = "om-tutorial.core/Photo";

om_tutorial.core.Photo.prototype.om$isComponent = true;

var x20220_20226 = om_tutorial.core.Photo;
x20220_20226.om$next$IQuery$ = true;

x20220_20226.om$next$IQuery$query$arity$1 = ((function (x20220_20226){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"caption","caption",-855383902)], null);
});})(x20220_20226))
;


var x20221_20227 = om_tutorial.core.Photo.prototype;
x20221_20227.om$next$IQuery$ = true;

x20221_20227.om$next$IQuery$query$arity$1 = ((function (x20221_20227){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"caption","caption",-855383902)], null);
});})(x20221_20227))
;


om_tutorial.core.Photo.cljs$lang$type = true;

om_tutorial.core.Photo.cljs$lang$ctorStr = "om-tutorial.core/Photo";

om_tutorial.core.Photo.cljs$lang$ctorPrWriter = (function (this__19016__auto__,writer__19017__auto__,opt__19018__auto__){
return cljs.core._write.call(null,writer__19017__auto__,"om-tutorial.core/Photo");
});
om_tutorial.core.photo = om.next.factory.call(null,om_tutorial.core.Photo);
/**
 * @constructor
 */
om_tutorial.core.Graphic = (function om_tutorial$core$Graphic(){
var this__19014__auto__ = this;
React.Component.apply(this__19014__auto__,arguments);

if(!((this__19014__auto__.initLocalState == null))){
this__19014__auto__.state = this__19014__auto__.initLocalState();
} else {
this__19014__auto__.state = {};
}

return this__19014__auto__;
});

om_tutorial.core.Graphic.prototype = goog.object.clone(React.Component.prototype);

var x20232_20244 = om_tutorial.core.Graphic.prototype;
x20232_20244.componentWillUpdate = ((function (x20232_20244){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20245 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20246 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20245,next_ident__18954__auto___20246)){
var idxr__18955__auto___20247 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20247 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20247),((function (idxr__18955__auto___20247,ident__18953__auto___20245,next_ident__18954__auto___20246,this__18949__auto__,x20232_20244){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20245], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20246], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20247,ident__18953__auto___20245,next_ident__18954__auto___20246,this__18949__auto__,x20232_20244))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20232_20244))
;

x20232_20244.shouldComponentUpdate = ((function (x20232_20244){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20234 = next_props__18950__auto____$1;
var G__20234__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20234):G__20234);
return G__20234__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18949__auto__),next_props__18950__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18949__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18949__auto__.state,"omcljs$state"),goog.object.get(next_state__18951__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18949__auto__.props.children,next_children__18952__auto__);
}
}
});})(x20232_20244))
;

x20232_20244.componentWillUnmount = ((function (x20232_20244){
return (function (){
var this__18949__auto__ = this;
var r__18960__auto__ = om.next.get_reconciler.call(null,this__18949__auto__);
var cfg__18961__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18960__auto__);
var st__18962__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
var indexer__18959__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18962__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18962__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18949__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18962__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18949__auto__);
} else {
}

if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20232_20244))
;

x20232_20244.componentDidUpdate = ((function (x20232_20244){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20232_20244))
;

x20232_20244.isMounted = ((function (x20232_20244){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20232_20244))
;

x20232_20244.componentWillMount = ((function (x20232_20244){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20232_20244))
;

x20232_20244.render = ((function (x20232_20244){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20235 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20236 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20237 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20238 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20239 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20240 = om.next.props.call(null,this$);
var map__20240__$1 = ((((!((map__20240 == null)))?((((map__20240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20240):map__20240);
var title = cljs.core.get.call(null,map__20240__$1,new cljs.core.Keyword(null,"title","title",636505583));
var image = cljs.core.get.call(null,map__20240__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,[cljs.core.str("Graphic: "),cljs.core.str(title)].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,image))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20239;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20238;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20237;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20236;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20235;
}});})(x20232_20244))
;


om_tutorial.core.Graphic.prototype.constructor = om_tutorial.core.Graphic;

om_tutorial.core.Graphic.prototype.constructor.displayName = "om-tutorial.core/Graphic";

om_tutorial.core.Graphic.prototype.om$isComponent = true;

var x20242_20248 = om_tutorial.core.Graphic;
x20242_20248.om$next$IQuery$ = true;

x20242_20248.om$next$IQuery$query$arity$1 = ((function (x20242_20248){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096)], null);
});})(x20242_20248))
;


var x20243_20249 = om_tutorial.core.Graphic.prototype;
x20243_20249.om$next$IQuery$ = true;

x20243_20249.om$next$IQuery$query$arity$1 = ((function (x20243_20249){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096)], null);
});})(x20243_20249))
;


om_tutorial.core.Graphic.cljs$lang$type = true;

om_tutorial.core.Graphic.cljs$lang$ctorStr = "om-tutorial.core/Graphic";

om_tutorial.core.Graphic.cljs$lang$ctorPrWriter = (function (this__19016__auto__,writer__19017__auto__,opt__19018__auto__){
return cljs.core._write.call(null,writer__19017__auto__,"om-tutorial.core/Graphic");
});
om_tutorial.core.graphic = om.next.factory.call(null,om_tutorial.core.Graphic);
/**
 * @constructor
 */
om_tutorial.core.DashboardItem = (function om_tutorial$core$DashboardItem(){
var this__19014__auto__ = this;
React.Component.apply(this__19014__auto__,arguments);

if(!((this__19014__auto__.initLocalState == null))){
this__19014__auto__.state = this__19014__auto__.initLocalState();
} else {
this__19014__auto__.state = {};
}

return this__19014__auto__;
});

om_tutorial.core.DashboardItem.prototype = goog.object.clone(React.Component.prototype);

var x20255_20273 = om_tutorial.core.DashboardItem.prototype;
x20255_20273.componentWillUpdate = ((function (x20255_20273){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20274 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20275 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20274,next_ident__18954__auto___20275)){
var idxr__18955__auto___20276 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20276 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20276),((function (idxr__18955__auto___20276,ident__18953__auto___20274,next_ident__18954__auto___20275,this__18949__auto__,x20255_20273){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20274], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20275], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20276,ident__18953__auto___20274,next_ident__18954__auto___20275,this__18949__auto__,x20255_20273))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20255_20273))
;

x20255_20273.shouldComponentUpdate = ((function (x20255_20273){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20257 = next_props__18950__auto____$1;
var G__20257__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20257):G__20257);
return G__20257__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18949__auto__),next_props__18950__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18949__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18949__auto__.state,"omcljs$state"),goog.object.get(next_state__18951__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18949__auto__.props.children,next_children__18952__auto__);
}
}
});})(x20255_20273))
;

x20255_20273.componentWillUnmount = ((function (x20255_20273){
return (function (){
var this__18949__auto__ = this;
var r__18960__auto__ = om.next.get_reconciler.call(null,this__18949__auto__);
var cfg__18961__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18960__auto__);
var st__18962__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
var indexer__18959__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18962__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18962__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18949__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18962__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18949__auto__);
} else {
}

if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20255_20273))
;

x20255_20273.componentDidUpdate = ((function (x20255_20273){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20255_20273))
;

x20255_20273.isMounted = ((function (x20255_20273){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20255_20273))
;

x20255_20273.componentWillMount = ((function (x20255_20273){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20255_20273))
;

x20255_20273.render = ((function (x20255_20273){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20258 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20259 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20260 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20261 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20262 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20263 = om.next.props.call(null,this$);
var map__20263__$1 = ((((!((map__20263 == null)))?((((map__20263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20263):map__20263);
var props = map__20263__$1;
var id = cljs.core.get.call(null,map__20263__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20263__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var favorites = cljs.core.get.call(null,map__20263__$1,new cljs.core.Keyword(null,"favorites","favorites",1740773480));
return React.DOM.li({"style": {"padding": (10), "borderBottom": "1px solid black"}},om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),om_tutorial.core.post,new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),om_tutorial.core.photo,new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317),om_tutorial.core.graphic], null).call(null,type).call(null,om.next.props.call(null,this$))))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Favorites: "),cljs.core.str(favorites)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20263,map__20263__$1,props,id,type,favorites,_STAR_reconciler_STAR_20258,_STAR_depth_STAR_20259,_STAR_shared_STAR_20260,_STAR_instrument_STAR_20261,_STAR_parent_STAR_20262,this$,this__18948__auto__,x20255_20273){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("dashboard","favorite","dashboard/favorite",1484455472,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref","ref",1289896967)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,type),cljs.core._conj.call(null,cljs.core.List.EMPTY,id))))))))))))))))))));
});})(map__20263,map__20263__$1,props,id,type,favorites,_STAR_reconciler_STAR_20258,_STAR_depth_STAR_20259,_STAR_shared_STAR_20260,_STAR_instrument_STAR_20261,_STAR_parent_STAR_20262,this$,this__18948__auto__,x20255_20273))
},om.util.force_children.call(null,"Favorite!"))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20262;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20261;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20260;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20259;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20258;
}});})(x20255_20273))
;


om_tutorial.core.DashboardItem.prototype.constructor = om_tutorial.core.DashboardItem;

om_tutorial.core.DashboardItem.prototype.constructor.displayName = "om-tutorial.core/DashboardItem";

om_tutorial.core.DashboardItem.prototype.om$isComponent = true;

var x20265_20277 = om_tutorial.core.DashboardItem;
x20265_20277.om$next$Ident$ = true;

x20265_20277.om$next$Ident$ident$arity$2 = ((function (x20265_20277){
return (function (this$,p__20266){
var map__20267 = p__20266;
var map__20267__$1 = ((((!((map__20267 == null)))?((((map__20267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20267):map__20267);
var id = cljs.core.get.call(null,map__20267__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20267__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x20265_20277))
;

x20265_20277.om$next$IQuery$ = true;

x20265_20277.om$next$IQuery$query$arity$1 = ((function (x20265_20277){
return (function (this$){
var this$__$1 = this;
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317)], null),cljs.core.map.call(null,((function (this$__$1,x20265_20277){
return (function (p1__20250_SHARP_){
return cljs.core.conj.call(null,p1__20250_SHARP_,new cljs.core.Keyword(null,"favorites","favorites",1740773480));
});})(this$__$1,x20265_20277))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_query.call(null,om_tutorial.core.Post),om.next.get_query.call(null,om_tutorial.core.Photo),om.next.get_query.call(null,om_tutorial.core.Graphic)], null)));
});})(x20265_20277))
;


var x20269_20278 = om_tutorial.core.DashboardItem.prototype;
x20269_20278.om$next$Ident$ = true;

x20269_20278.om$next$Ident$ident$arity$2 = ((function (x20269_20278){
return (function (this$,p__20270){
var map__20271 = p__20270;
var map__20271__$1 = ((((!((map__20271 == null)))?((((map__20271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20271):map__20271);
var id = cljs.core.get.call(null,map__20271__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20271__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x20269_20278))
;

x20269_20278.om$next$IQuery$ = true;

x20269_20278.om$next$IQuery$query$arity$1 = ((function (x20269_20278){
return (function (this$){
var this$__$1 = this;
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317)], null),cljs.core.map.call(null,((function (this$__$1,x20269_20278){
return (function (p1__20250_SHARP_){
return cljs.core.conj.call(null,p1__20250_SHARP_,new cljs.core.Keyword(null,"favorites","favorites",1740773480));
});})(this$__$1,x20269_20278))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_query.call(null,om_tutorial.core.Post),om.next.get_query.call(null,om_tutorial.core.Photo),om.next.get_query.call(null,om_tutorial.core.Graphic)], null)));
});})(x20269_20278))
;


om_tutorial.core.DashboardItem.cljs$lang$type = true;

om_tutorial.core.DashboardItem.cljs$lang$ctorStr = "om-tutorial.core/DashboardItem";

om_tutorial.core.DashboardItem.cljs$lang$ctorPrWriter = (function (this__19016__auto__,writer__19017__auto__,opt__19018__auto__){
return cljs.core._write.call(null,writer__19017__auto__,"om-tutorial.core/DashboardItem");
});
om_tutorial.core.dashboard_item = om.next.factory.call(null,om_tutorial.core.DashboardItem);
/**
 * @constructor
 */
om_tutorial.core.Dashboard = (function om_tutorial$core$Dashboard(){
var this__19014__auto__ = this;
React.Component.apply(this__19014__auto__,arguments);

if(!((this__19014__auto__.initLocalState == null))){
this__19014__auto__.state = this__19014__auto__.initLocalState();
} else {
this__19014__auto__.state = {};
}

return this__19014__auto__;
});

om_tutorial.core.Dashboard.prototype = goog.object.clone(React.Component.prototype);

var x20283_20295 = om_tutorial.core.Dashboard.prototype;
x20283_20295.componentWillUpdate = ((function (x20283_20295){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20296 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20297 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20296,next_ident__18954__auto___20297)){
var idxr__18955__auto___20298 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20298 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20298),((function (idxr__18955__auto___20298,ident__18953__auto___20296,next_ident__18954__auto___20297,this__18949__auto__,x20283_20295){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20296], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20297], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20298,ident__18953__auto___20296,next_ident__18954__auto___20297,this__18949__auto__,x20283_20295))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20283_20295))
;

x20283_20295.shouldComponentUpdate = ((function (x20283_20295){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20285 = next_props__18950__auto____$1;
var G__20285__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20285):G__20285);
return G__20285__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18949__auto__),next_props__18950__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18949__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18949__auto__.state,"omcljs$state"),goog.object.get(next_state__18951__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18949__auto__.props.children,next_children__18952__auto__);
}
}
});})(x20283_20295))
;

x20283_20295.componentWillUnmount = ((function (x20283_20295){
return (function (){
var this__18949__auto__ = this;
var r__18960__auto__ = om.next.get_reconciler.call(null,this__18949__auto__);
var cfg__18961__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18960__auto__);
var st__18962__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
var indexer__18959__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18961__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18962__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18962__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18949__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18962__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18949__auto__);
} else {
}

if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20283_20295))
;

x20283_20295.componentDidUpdate = ((function (x20283_20295){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20283_20295))
;

x20283_20295.isMounted = ((function (x20283_20295){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20283_20295))
;

x20283_20295.componentWillMount = ((function (x20283_20295){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20283_20295))
;

x20283_20295.render = ((function (x20283_20295){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20286 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20287 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20288 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20289 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20290 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20291 = om.next.props.call(null,this$);
var map__20291__$1 = ((((!((map__20291 == null)))?((((map__20291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20291):map__20291);
var items = cljs.core.get.call(null,map__20291__$1,new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874));
return cljs.core.apply.call(null,om.dom.ul,{"style": {"padding": (0)}},cljs.core.map.call(null,om_tutorial.core.dashboard_item,items));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20290;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20289;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20288;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20287;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20286;
}});})(x20283_20295))
;


om_tutorial.core.Dashboard.prototype.constructor = om_tutorial.core.Dashboard;

om_tutorial.core.Dashboard.prototype.constructor.displayName = "om-tutorial.core/Dashboard";

om_tutorial.core.Dashboard.prototype.om$isComponent = true;

var x20293_20299 = om_tutorial.core.Dashboard;
x20293_20299.om$next$IQuery$ = true;

x20293_20299.om$next$IQuery$query$arity$1 = ((function (x20293_20299){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),om.next.get_query.call(null,om_tutorial.core.DashboardItem)], null)], null);
});})(x20293_20299))
;


var x20294_20300 = om_tutorial.core.Dashboard.prototype;
x20294_20300.om$next$IQuery$ = true;

x20294_20300.om$next$IQuery$query$arity$1 = ((function (x20294_20300){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),om.next.get_query.call(null,om_tutorial.core.DashboardItem)], null)], null);
});})(x20294_20300))
;


om_tutorial.core.Dashboard.cljs$lang$type = true;

om_tutorial.core.Dashboard.cljs$lang$ctorStr = "om-tutorial.core/Dashboard";

om_tutorial.core.Dashboard.cljs$lang$ctorPrWriter = (function (this__19016__auto__,writer__19017__auto__,opt__19018__auto__){
return cljs.core._write.call(null,writer__19017__auto__,"om-tutorial.core/Dashboard");
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
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),(function (p__20302,k,_){
var map__20303 = p__20302;
var map__20303__$1 = ((((!((map__20303 == null)))?((((map__20303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20303):map__20303);
var state = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st,map__20303,map__20303__$1,state){
return (function (p1__20301_SHARP_){
return cljs.core.get_in.call(null,st,p1__20301_SHARP_);
});})(st,map__20303,map__20303__$1,state))
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
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("dashboard","favorite","dashboard/favorite",1484455472,null),(function (p__20305,k,p__20306){
var map__20307 = p__20305;
var map__20307__$1 = ((((!((map__20307 == null)))?((((map__20307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20307):map__20307);
var state = cljs.core.get.call(null,map__20307__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20308 = p__20306;
var map__20308__$1 = ((((!((map__20308 == null)))?((((map__20308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20308):map__20308);
var ref = cljs.core.get.call(null,map__20308__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20307,map__20307__$1,state,map__20308,map__20308__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,new cljs.core.Keyword(null,"favorites","favorites",1740773480)),cljs.core.inc);
});})(map__20307,map__20307__$1,state,map__20308,map__20308__$1,ref))
], null);
}));
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.Dashboard,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map