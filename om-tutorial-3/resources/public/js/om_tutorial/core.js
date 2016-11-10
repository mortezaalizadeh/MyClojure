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

var x20186_20198 = om_tutorial.core.Post.prototype;
x20186_20198.componentWillUpdate = ((function (x20186_20198){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20199 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20200 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20199,next_ident__18954__auto___20200)){
var idxr__18955__auto___20201 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20201 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20201),((function (idxr__18955__auto___20201,ident__18953__auto___20199,next_ident__18954__auto___20200,this__18949__auto__,x20186_20198){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20199], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20200], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20201,ident__18953__auto___20199,next_ident__18954__auto___20200,this__18949__auto__,x20186_20198))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20186_20198))
;

x20186_20198.shouldComponentUpdate = ((function (x20186_20198){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20188 = next_props__18950__auto____$1;
var G__20188__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20188):G__20188);
return G__20188__$1;
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
});})(x20186_20198))
;

x20186_20198.componentWillUnmount = ((function (x20186_20198){
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
});})(x20186_20198))
;

x20186_20198.componentDidUpdate = ((function (x20186_20198){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20186_20198))
;

x20186_20198.isMounted = ((function (x20186_20198){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20186_20198))
;

x20186_20198.componentWillMount = ((function (x20186_20198){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20186_20198))
;

x20186_20198.render = ((function (x20186_20198){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20189 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20190 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20191 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20192 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20193 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20194 = om.next.props.call(null,this$);
var map__20194__$1 = ((((!((map__20194 == null)))?((((map__20194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20194):map__20194);
var props = map__20194__$1;
var title = cljs.core.get.call(null,map__20194__$1,new cljs.core.Keyword(null,"title","title",636505583));
var author = cljs.core.get.call(null,map__20194__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var content = cljs.core.get.call(null,map__20194__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.h4(null,om.util.force_children.call(null,author))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,content))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20193;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20192;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20191;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20190;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20189;
}});})(x20186_20198))
;


om_tutorial.core.Post.prototype.constructor = om_tutorial.core.Post;

om_tutorial.core.Post.prototype.constructor.displayName = "om-tutorial.core/Post";

om_tutorial.core.Post.prototype.om$isComponent = true;

var x20196_20202 = om_tutorial.core.Post;
x20196_20202.om$next$IQuery$ = true;

x20196_20202.om$next$IQuery$query$arity$1 = ((function (x20196_20202){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x20196_20202))
;


var x20197_20203 = om_tutorial.core.Post.prototype;
x20197_20203.om$next$IQuery$ = true;

x20197_20203.om$next$IQuery$query$arity$1 = ((function (x20197_20203){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"content","content",15833224)], null);
});})(x20197_20203))
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

var x20208_20220 = om_tutorial.core.Photo.prototype;
x20208_20220.componentWillUpdate = ((function (x20208_20220){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20221 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20222 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20221,next_ident__18954__auto___20222)){
var idxr__18955__auto___20223 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20223 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20223),((function (idxr__18955__auto___20223,ident__18953__auto___20221,next_ident__18954__auto___20222,this__18949__auto__,x20208_20220){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20221], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20222], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20223,ident__18953__auto___20221,next_ident__18954__auto___20222,this__18949__auto__,x20208_20220))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20208_20220))
;

x20208_20220.shouldComponentUpdate = ((function (x20208_20220){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20210 = next_props__18950__auto____$1;
var G__20210__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20210):G__20210);
return G__20210__$1;
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
});})(x20208_20220))
;

x20208_20220.componentWillUnmount = ((function (x20208_20220){
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
});})(x20208_20220))
;

x20208_20220.componentDidUpdate = ((function (x20208_20220){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20208_20220))
;

x20208_20220.isMounted = ((function (x20208_20220){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20208_20220))
;

x20208_20220.componentWillMount = ((function (x20208_20220){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20208_20220))
;

x20208_20220.render = ((function (x20208_20220){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20211 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20212 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20213 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20214 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20215 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20216 = om.next.props.call(null,this$);
var map__20216__$1 = ((((!((map__20216 == null)))?((((map__20216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20216):map__20216);
var title = cljs.core.get.call(null,map__20216__$1,new cljs.core.Keyword(null,"title","title",636505583));
var image = cljs.core.get.call(null,map__20216__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var caption = cljs.core.get.call(null,map__20216__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,[cljs.core.str("Photo: "),cljs.core.str(title)].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,image))),om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Caption: "),cljs.core.str(caption)].join('')))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20215;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20214;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20213;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20212;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20211;
}});})(x20208_20220))
;


om_tutorial.core.Photo.prototype.constructor = om_tutorial.core.Photo;

om_tutorial.core.Photo.prototype.constructor.displayName = "om-tutorial.core/Photo";

om_tutorial.core.Photo.prototype.om$isComponent = true;

var x20218_20224 = om_tutorial.core.Photo;
x20218_20224.om$next$IQuery$ = true;

x20218_20224.om$next$IQuery$query$arity$1 = ((function (x20218_20224){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"caption","caption",-855383902)], null);
});})(x20218_20224))
;


var x20219_20225 = om_tutorial.core.Photo.prototype;
x20219_20225.om$next$IQuery$ = true;

x20219_20225.om$next$IQuery$query$arity$1 = ((function (x20219_20225){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"caption","caption",-855383902)], null);
});})(x20219_20225))
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

var x20230_20242 = om_tutorial.core.Graphic.prototype;
x20230_20242.componentWillUpdate = ((function (x20230_20242){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20243 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20244 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20243,next_ident__18954__auto___20244)){
var idxr__18955__auto___20245 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20245 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20245),((function (idxr__18955__auto___20245,ident__18953__auto___20243,next_ident__18954__auto___20244,this__18949__auto__,x20230_20242){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20243], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20244], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20245,ident__18953__auto___20243,next_ident__18954__auto___20244,this__18949__auto__,x20230_20242))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20230_20242))
;

x20230_20242.shouldComponentUpdate = ((function (x20230_20242){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20232 = next_props__18950__auto____$1;
var G__20232__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20232):G__20232);
return G__20232__$1;
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
});})(x20230_20242))
;

x20230_20242.componentWillUnmount = ((function (x20230_20242){
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
});})(x20230_20242))
;

x20230_20242.componentDidUpdate = ((function (x20230_20242){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20230_20242))
;

x20230_20242.isMounted = ((function (x20230_20242){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20230_20242))
;

x20230_20242.componentWillMount = ((function (x20230_20242){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20230_20242))
;

x20230_20242.render = ((function (x20230_20242){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20233 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20234 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20235 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20236 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20237 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20238 = om.next.props.call(null,this$);
var map__20238__$1 = ((((!((map__20238 == null)))?((((map__20238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20238):map__20238);
var title = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"title","title",636505583));
var image = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h3(null,om.util.force_children.call(null,[cljs.core.str("Graphic: "),cljs.core.str(title)].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,image))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20237;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20236;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20235;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20234;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20233;
}});})(x20230_20242))
;


om_tutorial.core.Graphic.prototype.constructor = om_tutorial.core.Graphic;

om_tutorial.core.Graphic.prototype.constructor.displayName = "om-tutorial.core/Graphic";

om_tutorial.core.Graphic.prototype.om$isComponent = true;

var x20240_20246 = om_tutorial.core.Graphic;
x20240_20246.om$next$IQuery$ = true;

x20240_20246.om$next$IQuery$query$arity$1 = ((function (x20240_20246){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096)], null);
});})(x20240_20246))
;


var x20241_20247 = om_tutorial.core.Graphic.prototype;
x20241_20247.om$next$IQuery$ = true;

x20241_20247.om$next$IQuery$query$arity$1 = ((function (x20241_20247){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"image","image",-58725096)], null);
});})(x20241_20247))
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

var x20253_20271 = om_tutorial.core.DashboardItem.prototype;
x20253_20271.componentWillUpdate = ((function (x20253_20271){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20272 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20273 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20272,next_ident__18954__auto___20273)){
var idxr__18955__auto___20274 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20274 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20274),((function (idxr__18955__auto___20274,ident__18953__auto___20272,next_ident__18954__auto___20273,this__18949__auto__,x20253_20271){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20272], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20273], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20274,ident__18953__auto___20272,next_ident__18954__auto___20273,this__18949__auto__,x20253_20271))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20253_20271))
;

x20253_20271.shouldComponentUpdate = ((function (x20253_20271){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20255 = next_props__18950__auto____$1;
var G__20255__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20255):G__20255);
return G__20255__$1;
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
});})(x20253_20271))
;

x20253_20271.componentWillUnmount = ((function (x20253_20271){
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
});})(x20253_20271))
;

x20253_20271.componentDidUpdate = ((function (x20253_20271){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20253_20271))
;

x20253_20271.isMounted = ((function (x20253_20271){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20253_20271))
;

x20253_20271.componentWillMount = ((function (x20253_20271){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20253_20271))
;

x20253_20271.render = ((function (x20253_20271){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20256 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20257 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20258 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20259 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20260 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20261 = om.next.props.call(null,this$);
var map__20261__$1 = ((((!((map__20261 == null)))?((((map__20261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20261):map__20261);
var props = map__20261__$1;
var id = cljs.core.get.call(null,map__20261__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20261__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var favorites = cljs.core.get.call(null,map__20261__$1,new cljs.core.Keyword(null,"favorites","favorites",1740773480));
return React.DOM.li({"style": {"padding": (10), "borderBottom": "1px solid black"}},om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),om_tutorial.core.post,new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),om_tutorial.core.photo,new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317),om_tutorial.core.graphic], null).call(null,type).call(null,om.next.props.call(null,this$))))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.p(null,om.util.force_children.call(null,[cljs.core.str("Favorites: "),cljs.core.str(favorites)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20261,map__20261__$1,props,id,type,favorites,_STAR_reconciler_STAR_20256,_STAR_depth_STAR_20257,_STAR_shared_STAR_20258,_STAR_instrument_STAR_20259,_STAR_parent_STAR_20260,this$,this__18948__auto__,x20253_20271){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("dashboard","favorite","dashboard/favorite",1484455472,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref","ref",1289896967)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,type),cljs.core._conj.call(null,cljs.core.List.EMPTY,id))))))))))))))))))));
});})(map__20261,map__20261__$1,props,id,type,favorites,_STAR_reconciler_STAR_20256,_STAR_depth_STAR_20257,_STAR_shared_STAR_20258,_STAR_instrument_STAR_20259,_STAR_parent_STAR_20260,this$,this__18948__auto__,x20253_20271))
},om.util.force_children.call(null,"Favorite!"))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20260;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20259;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20258;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20257;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20256;
}});})(x20253_20271))
;


om_tutorial.core.DashboardItem.prototype.constructor = om_tutorial.core.DashboardItem;

om_tutorial.core.DashboardItem.prototype.constructor.displayName = "om-tutorial.core/DashboardItem";

om_tutorial.core.DashboardItem.prototype.om$isComponent = true;

var x20263_20275 = om_tutorial.core.DashboardItem;
x20263_20275.om$next$Ident$ = true;

x20263_20275.om$next$Ident$ident$arity$2 = ((function (x20263_20275){
return (function (this$,p__20264){
var map__20265 = p__20264;
var map__20265__$1 = ((((!((map__20265 == null)))?((((map__20265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20265):map__20265);
var id = cljs.core.get.call(null,map__20265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20265__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x20263_20275))
;

x20263_20275.om$next$IQuery$ = true;

x20263_20275.om$next$IQuery$query$arity$1 = ((function (x20263_20275){
return (function (this$){
var this$__$1 = this;
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317)], null),cljs.core.map.call(null,((function (this$__$1,x20263_20275){
return (function (p1__20248_SHARP_){
return cljs.core.conj.call(null,p1__20248_SHARP_,new cljs.core.Keyword(null,"favorites","favorites",1740773480));
});})(this$__$1,x20263_20275))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_query.call(null,om_tutorial.core.Post),om.next.get_query.call(null,om_tutorial.core.Photo),om.next.get_query.call(null,om_tutorial.core.Graphic)], null)));
});})(x20263_20275))
;


var x20267_20276 = om_tutorial.core.DashboardItem.prototype;
x20267_20276.om$next$Ident$ = true;

x20267_20276.om$next$Ident$ident$arity$2 = ((function (x20267_20276){
return (function (this$,p__20268){
var map__20269 = p__20268;
var map__20269__$1 = ((((!((map__20269 == null)))?((((map__20269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20269):map__20269);
var id = cljs.core.get.call(null,map__20269__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__20269__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null);
});})(x20267_20276))
;

x20267_20276.om$next$IQuery$ = true;

x20267_20276.om$next$IQuery$query$arity$1 = ((function (x20267_20276){
return (function (this$){
var this$__$1 = this;
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dashboard","post","dashboard/post",1318886699),new cljs.core.Keyword("dashboard","photo","dashboard/photo",-1116959449),new cljs.core.Keyword("dashboard","graphic","dashboard/graphic",-818596317)], null),cljs.core.map.call(null,((function (this$__$1,x20267_20276){
return (function (p1__20248_SHARP_){
return cljs.core.conj.call(null,p1__20248_SHARP_,new cljs.core.Keyword(null,"favorites","favorites",1740773480));
});})(this$__$1,x20267_20276))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_query.call(null,om_tutorial.core.Post),om.next.get_query.call(null,om_tutorial.core.Photo),om.next.get_query.call(null,om_tutorial.core.Graphic)], null)));
});})(x20267_20276))
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

var x20281_20293 = om_tutorial.core.Dashboard.prototype;
x20281_20293.componentWillUpdate = ((function (x20281_20293){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
if(((!((this__18949__auto__ == null)))?(((false) || (this__18949__auto__.om$next$Ident$))?true:false):false)){
var ident__18953__auto___20294 = om.next.ident.call(null,this__18949__auto__,om.next.props.call(null,this__18949__auto__));
var next_ident__18954__auto___20295 = om.next.ident.call(null,this__18949__auto__,om.next._next_props.call(null,next_props__18950__auto__,this__18949__auto__));
if(cljs.core.not_EQ_.call(null,ident__18953__auto___20294,next_ident__18954__auto___20295)){
var idxr__18955__auto___20296 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18955__auto___20296 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18955__auto___20296),((function (idxr__18955__auto___20296,ident__18953__auto___20294,next_ident__18954__auto___20295,this__18949__auto__,x20281_20293){
return (function (indexes__18956__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18956__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18953__auto___20294], null),cljs.core.disj,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18954__auto___20295], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18949__auto__);
});})(idxr__18955__auto___20296,ident__18953__auto___20294,next_ident__18954__auto___20295,this__18949__auto__,x20281_20293))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18949__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18949__auto__);
});})(x20281_20293))
;

x20281_20293.shouldComponentUpdate = ((function (x20281_20293){
return (function (next_props__18950__auto__,next_state__18951__auto__){
var this__18949__auto__ = this;
var next_children__18952__auto__ = next_props__18950__auto__.children;
var next_props__18950__auto____$1 = goog.object.get(next_props__18950__auto__,"omcljs$value");
var next_props__18950__auto____$2 = (function (){var G__20283 = next_props__18950__auto____$1;
var G__20283__$1 = (((next_props__18950__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__20283):G__20283);
return G__20283__$1;
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
});})(x20281_20293))
;

x20281_20293.componentWillUnmount = ((function (x20281_20293){
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
});})(x20281_20293))
;

x20281_20293.componentDidUpdate = ((function (x20281_20293){
return (function (prev_props__18957__auto__,prev_state__18958__auto__){
var this__18949__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18949__auto__);
});})(x20281_20293))
;

x20281_20293.isMounted = ((function (x20281_20293){
return (function (){
var this__18949__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18949__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20281_20293))
;

x20281_20293.componentWillMount = ((function (x20281_20293){
return (function (){
var this__18949__auto__ = this;
var indexer__18959__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18949__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18959__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18959__auto__,this__18949__auto__);
}
});})(x20281_20293))
;

x20281_20293.render = ((function (x20281_20293){
return (function (){
var this__18948__auto__ = this;
var this$ = this__18948__auto__;
var _STAR_reconciler_STAR_20284 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20285 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20286 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20287 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20288 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18948__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18948__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18948__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18948__auto__);

om.next._STAR_parent_STAR_ = this__18948__auto__;

try{var map__20289 = om.next.props.call(null,this$);
var map__20289__$1 = ((((!((map__20289 == null)))?((((map__20289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20289):map__20289);
var items = cljs.core.get.call(null,map__20289__$1,new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874));
return cljs.core.apply.call(null,om.dom.ul,{"style": {"padding": (0)}},cljs.core.map.call(null,om_tutorial.core.dashboard_item,items));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20288;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20287;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20286;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20285;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20284;
}});})(x20281_20293))
;


om_tutorial.core.Dashboard.prototype.constructor = om_tutorial.core.Dashboard;

om_tutorial.core.Dashboard.prototype.constructor.displayName = "om-tutorial.core/Dashboard";

om_tutorial.core.Dashboard.prototype.om$isComponent = true;

var x20291_20297 = om_tutorial.core.Dashboard;
x20291_20297.om$next$IQuery$ = true;

x20291_20297.om$next$IQuery$query$arity$1 = ((function (x20291_20297){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),om.next.get_query.call(null,om_tutorial.core.DashboardItem)], null)], null);
});})(x20291_20297))
;


var x20292_20298 = om_tutorial.core.Dashboard.prototype;
x20292_20298.om$next$IQuery$ = true;

x20292_20298.om$next$IQuery$query$arity$1 = ((function (x20292_20298){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),om.next.get_query.call(null,om_tutorial.core.DashboardItem)], null)], null);
});})(x20292_20298))
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
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("dashboard","items","dashboard/items",-67158874),(function (p__20300,k,_){
var map__20301 = p__20300;
var map__20301__$1 = ((((!((map__20301 == null)))?((((map__20301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20301):map__20301);
var state = cljs.core.get.call(null,map__20301__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st,map__20301,map__20301__$1,state){
return (function (p1__20299_SHARP_){
return cljs.core.get_in.call(null,st,p1__20299_SHARP_);
});})(st,map__20301,map__20301__$1,state))
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
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("dashboard","favorite","dashboard/favorite",1484455472,null),(function (p__20303,k,p__20304){
var map__20305 = p__20303;
var map__20305__$1 = ((((!((map__20305 == null)))?((((map__20305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20305):map__20305);
var state = cljs.core.get.call(null,map__20305__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20306 = p__20304;
var map__20306__$1 = ((((!((map__20306 == null)))?((((map__20306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20306):map__20306);
var ref = cljs.core.get.call(null,map__20306__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20305,map__20305__$1,state,map__20306,map__20306__$1,ref){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,cljs.core.conj.call(null,ref,new cljs.core.Keyword(null,"favorites","favorites",1740773480)),cljs.core.inc);
});})(map__20305,map__20305__$1,state,map__20306,map__20306__$1,ref))
], null);
}));
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.Dashboard,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map