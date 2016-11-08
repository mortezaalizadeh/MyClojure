// Compiled by ClojureScript 1.7.170 {}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
goog.require('om.util');
om.next.impl.parser.expr__GT_ast;
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__18036){
var vec__18038 = p__18036;
var k = cljs.core.nth.call(null,vec__18038,(0),null);
var v = cljs.core.nth.call(null,vec__18038,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.union_entry__GT_ast),m)], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__18039){
var vec__18042 = p__18039;
var f = cljs.core.nth.call(null,vec__18042,(0),null);
var args = cljs.core.nth.call(null,vec__18042,(1),null);
var call = vec__18042;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.call(null,om.next.impl.parser.expr__GT_ast.call(null,args),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__16785__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,call));
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.call(null,om.next.impl.parser.expr__GT_ast.call(null,f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__16785__auto__ = args;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__18043 = ast;
var G__18043__$1 = (((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol))?cljs.core.assoc.call(null,G__18043,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866)):G__18043);
return G__18043__$1;
}
});
/**
 * Convert a query to its AST representation.
 */
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),query)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join));
var vec__18045 = cljs.core.first.call(null,join);
var k = cljs.core.nth.call(null,vec__18045,(0),null);
var v = cljs.core.nth.call(null,vec__18045,(1),null);
var ast = om.next.impl.parser.expr__GT_ast.call(null,k);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,ast,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"query","query",-1288509510),v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),(((typeof v === 'number') || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),v)))?null:((cljs.core.vector_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast.call(null,v)], null)], null):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid join, "),cljs.core.str(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
))));
});
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__18046){
var vec__18048 = p__18046;
var k = cljs.core.nth.call(null,vec__18048,(0),null);
var id = cljs.core.nth.call(null,vec__18048,(1),null);
var ref = vec__18048;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return om.next.impl.parser.join__GT_ast.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return om.next.impl.parser.ident__GT_ast.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return om.next.impl.parser.call__GT_ast.call(null,x);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta.call(null,(function (){var G__18050 = expr;
var G__18050__$1 = (((expr instanceof cljs.core.Keyword))?cljs.core._conj.call(null,cljs.core.List.EMPTY,G__18050):G__18050);
return G__18050__$1;
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var args18054 = [];
var len__17843__auto___18070 = arguments.length;
var i__17844__auto___18071 = (0);
while(true){
if((i__17844__auto___18071 < len__17843__auto___18070)){
args18054.push((arguments[i__17844__auto___18071]));

var G__18072 = (i__17844__auto___18071 + (1));
i__17844__auto___18071 = G__18072;
continue;
} else {
}
break;
}

var G__18056 = args18054.length;
switch (G__18056) {
case 1:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18054.length)].join('')));

}
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.call(null,ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__18057,unparse_QMARK_){
var map__18058 = p__18057;
var map__18058__$1 = ((((!((map__18058 == null)))?((((map__18058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18058):map__18058);
var ast = map__18058__$1;
var type = cljs.core.get.call(null,map__18058__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.call(null,map__18058__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__18060 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__18058,map__18058__$1,ast,type,component){
return (function (p1__18051_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__18051_SHARP_,unparse_QMARK_);
});})(map__18058,map__18058__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
var G__18060__$1 = ((!((component == null)))?cljs.core.with_meta.call(null,G__18060,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)):G__18060);
return G__18060__$1;
} else {
var map__18061 = ast;
var map__18061__$1 = ((((!((map__18061 == null)))?((((map__18061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18061):map__18061);
var key = cljs.core.get.call(null,map__18061__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.call(null,map__18061__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.call(null,map__18061__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.call(null,map__18061__$1,new cljs.core.Keyword(null,"params","params",710516235));
return om.next.impl.parser.wrap_expr.call(null,query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_.call(null,params))){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),expr);
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,expr);
}
})():((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),type))?(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && (!(typeof query === 'number')) && (unparse_QMARK_ === true))?(function (){var map__18063 = ast;
var map__18063__$1 = ((((!((map__18063 == null)))?((((map__18063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18063):map__18063);
var children = cljs.core.get.call(null,map__18063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if((((1) === cljs.core.count.call(null,children))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children))))){
return cljs.core.PersistentArrayMap.fromArray([key,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__18063,map__18063__$1,children,map__18061,map__18061__$1,key,query,query_root,params,map__18058,map__18058__$1,ast,type,component){
return (function (p__18065){
var map__18066 = p__18065;
var map__18066__$1 = ((((!((map__18066 == null)))?((((map__18066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18066):map__18066);
var union_key = cljs.core.get.call(null,map__18066__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.call(null,map__18066__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.call(null,map__18066__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__18068 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__18066,map__18066__$1,union_key,children__$1,component__$1,map__18063,map__18063__$1,children,map__18061,map__18061__$1,key,query,query_root,params,map__18058,map__18058__$1,ast,type,component){
return (function (p1__18052_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__18052_SHARP_,unparse_QMARK_);
});})(map__18066,map__18066__$1,union_key,children__$1,component__$1,map__18063,map__18063__$1,children,map__18061,map__18061__$1,key,query,query_root,params,map__18058,map__18058__$1,ast,type,component))
),children__$1);
var G__18068__$1 = ((!((component__$1 == null)))?cljs.core.with_meta.call(null,G__18068,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1], null)):G__18068);
return G__18068__$1;
})()], null);
});})(map__18063,map__18063__$1,children,map__18061,map__18061__$1,key,query,query_root,params,map__18058,map__18058__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children)))], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([key,(function (){var G__18069 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__18063,map__18063__$1,children,map__18061,map__18061__$1,key,query,query_root,params,map__18058,map__18058__$1,ast,type,component){
return (function (p1__18053_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__18053_SHARP_,unparse_QMARK_);
});})(map__18063,map__18063__$1,children,map__18061,map__18061__$1,key,query,query_root,params,map__18058,map__18058__$1,ast,type,component))
),children);
var G__18069__$1 = ((!((component == null)))?cljs.core.with_meta.call(null,G__18069,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)):G__18069);
return G__18069__$1;
})()], true, false);
}
})():cljs.core.PersistentArrayMap.fromArray([key,query], true, false)):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;
/**
 * Add path metadata to a data structure. data is the data to be worked on.
 * path is the current path into the data. query is the query used to
 * walk the data. union-expr tracks the last seen union query to be used
 * when it finds a recursive union.
 */
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(var_args){
var args18075 = [];
var len__17843__auto___18088 = arguments.length;
var i__17844__auto___18089 = (0);
while(true){
if((i__17844__auto___18089 < len__17843__auto___18088)){
args18075.push((arguments[i__17844__auto___18089]));

var G__18090 = (i__17844__auto___18089 + (1));
i__17844__auto___18089 = G__18090;
continue;
} else {
}
break;
}

var G__18077 = args18075.length;
switch (G__18077) {
case 3:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18075.length)].join('')));

}
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3 = (function (data,path,query){
return om.next.impl.parser.path_meta.call(null,data,path,query,null);
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4 = (function (data,path,query,union_expr){
var map__18078 = cljs.core.group_by.call(null,(function (p1__18074_SHARP_){
var or__16785__auto__ = om.util.join_QMARK_.call(null,p1__18074_SHARP_);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return om.util.ident_QMARK_.call(null,p1__18074_SHARP_);
}
}),query);
var map__18078__$1 = ((((!((map__18078 == null)))?((((map__18078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18078):map__18078);
var props = cljs.core.get.call(null,map__18078__$1,false);
var joins = cljs.core.get.call(null,map__18078__$1,true);
if((query == null)){
var G__18080 = data;
var G__18080__$1 = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || (data.cljs$core$IWithMeta$))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,data)))?cljs.core.vary_meta.call(null,G__18080,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path):G__18080);
return G__18080__$1;
} else {
if(cljs.core.sequential_QMARK_.call(null,data)){
return cljs.core.vary_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,((function (map__18078,map__18078__$1,props,joins){
return (function (idx,v){
return om.next.impl.parser.path_meta.call(null,v,cljs.core.conj.call(null,path,idx),query,union_expr);
});})(map__18078,map__18078__$1,props,joins))
),data),cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
if(cljs.core.vector_QMARK_.call(null,query)){
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = data;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__18083 = join;
var G__18083__$1 = ((om.util.ident_QMARK_.call(null,join))?cljs.core.PersistentHashMap.fromArrays([G__18083],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]):G__18083);
return G__18083__$1;
})();
var vec__18082 = om.util.join_entry.call(null,join__$1);
var key = cljs.core.nth.call(null,vec__18082,(0),null);
var sel = cljs.core.nth.call(null,vec__18082,(1),null);
var union_entry = ((om.util.union_QMARK_.call(null,join__$1))?sel:union_expr);
var sel__$1 = ((om.util.recursion_QMARK_.call(null,sel))?((!((union_expr == null)))?union_entry:query):sel);
var key__$1 = (function (){var G__18084 = key;
var G__18084__$1 = ((om.util.unique_ident_QMARK_.call(null,key))?cljs.core.first.call(null,G__18084):G__18084);
return G__18084__$1;
})();
var v = cljs.core.get.call(null,ret,key__$1);
var G__18092 = cljs.core.next.call(null,joins__$1);
var G__18093 = (function (){var G__18085 = ret;
var G__18085__$1 = ((cljs.core.contains_QMARK_.call(null,ret,key__$1))?cljs.core.assoc.call(null,G__18085,key__$1,om.next.impl.parser.path_meta.call(null,v,cljs.core.conj.call(null,path,key__$1),sel__$1,union_entry)):G__18085);
return G__18085__$1;
})();
joins__$1 = G__18092;
ret = G__18093;
continue;
} else {
var G__18086 = ret;
var G__18086__$1 = ((((!((ret == null)))?((((ret.cljs$lang$protocol_mask$partition0$ & (262144))) || (ret.cljs$core$IWithMeta$))?true:(((!ret.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,ret):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,ret)))?cljs.core.vary_meta.call(null,G__18086,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path):G__18086);
return G__18086__$1;
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,data)){
var dispatch_key = cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast);
var branches = cljs.core.vals.call(null,query);
var props__$1 = cljs.core.map.call(null,dispatch_key,cljs.core.keys.call(null,data));
var query__$1 = cljs.core.some.call(null,((function (dispatch_key,branches,props__$1,map__18078,map__18078__$1,props,joins){
return (function (q){
var query_props = cljs.core.map.call(null,dispatch_key,q);
if(cljs.core._EQ_.call(null,cljs.core.set.call(null,props__$1),cljs.core.set.call(null,query_props))){
return q;
} else {
return null;
}
});})(dispatch_key,branches,props__$1,map__18078,map__18078__$1,props,joins))
,branches);
return om.next.impl.parser.path_meta.call(null,data,path,query__$1,union_expr);
} else {
return data;
}

}
}
}
});

om.next.impl.parser.path_meta.cljs$lang$maxFixedArity = 4;
om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("om.next","abort","om.next/abort",-897542671),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__18094){
var map__18161 = p__18094;
var map__18161__$1 = ((((!((map__18161 == null)))?((((map__18161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18161):map__18161);
var config = map__18161__$1;
var read = cljs.core.get.call(null,map__18161__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__18161__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__18161,map__18161__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.call(null,env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config));
var map__18195 = (function (){var G__18196 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),om$next$impl$parser$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("om.next","root","om.next/root",-1714259778));
var G__18196__$1 = ((!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168))))?cljs.core.assoc.call(null,G__18196,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY):G__18196);
return G__18196__$1;
})();
var map__18195__$1 = ((((!((map__18195 == null)))?((((map__18195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18195):map__18195);
var env__$1 = map__18195__$1;
var path = cljs.core.get.call(null,map__18195__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__18195,map__18195__$1,env__$1,path,map__18161,map__18161__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__18219 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var map__18219__$1 = ((((!((map__18219 == null)))?((((map__18219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18219):map__18219);
var ast = map__18219__$1;
var query_SINGLEQUOTE_ = cljs.core.get.call(null,map__18219__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.call(null,map__18219__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dispatch_key = cljs.core.get.call(null,map__18219__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params = cljs.core.get.call(null,map__18219__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$2 = (function (){var G__18221 = cljs.core.merge.call(null,env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query_SINGLEQUOTE_], null));
var G__18221__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.call(null,G__18221,new cljs.core.Keyword(null,"query","query",-1288509510)):G__18221);
var G__18221__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE_))?cljs.core.assoc.call(null,G__18221__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query):G__18221__$1);
var G__18221__$3 = ((cljs.core.vector_QMARK_.call(null,key))?cljs.core.assoc.call(null,G__18221__$2,new cljs.core.Keyword(null,"query-root","query-root",359781888),key):G__18221__$2);
return G__18221__$3;
})();
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type);
var res = (function (){var G__18222 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18222) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"mutate","mutate",-1232016731,null)))].join('')));
}

return mutate.call(null,env__$2,dispatch_key,params);

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "join":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.call(null,res,target);
var G__18223 = ret;
var G__18223__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.call(null,G__18223,expr):G__18223);
var G__18223__$2 = ((cljs.core.map_QMARK_.call(null,ast_SINGLEQUOTE_))?cljs.core.conj.call(null,G__18223__$1,om.next.impl.parser.ast__GT_expr.call(null,ast_SINGLEQUOTE_)):G__18223__$1);
return G__18223__$2;
} else {
if(!((call_QMARK_) || ((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"value","value",305978217))))){
return ret;
} else {
var error = cljs.core.atom.call(null,null);
var mut_ret = cljs.core.atom.call(null,null);
if((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.reset_BANG_.call(null,mut_ret,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res).call(null));
}catch (e18224){var e_18228 = e18224;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_.call(null,e_18228))){
throw e_18228;
} else {
cljs.core.reset_BANG_.call(null,error,e_18228);
}
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_.call(null,value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(dispatch_key),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"value","value",1946509744,null)))))].join('')));
}
} else {
}

var G__18225 = ret;
var G__18225__$1 = ((!((value == null)))?cljs.core.assoc.call(null,G__18225,key,value):G__18225);
var G__18225__$2 = (cljs.core.truth_(cljs.core.deref.call(null,mut_ret))?cljs.core.assoc_in.call(null,G__18225__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"result","result",1415092211)], null),cljs.core.deref.call(null,mut_ret)):G__18225__$1);
var G__18225__$3 = (cljs.core.truth_(cljs.core.deref.call(null,error))?cljs.core.assoc.call(null,G__18225__$2,key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.next","error","om.next/error",-1841983205),cljs.core.deref.call(null,error)], null)):G__18225__$2);
return G__18225__$3;
}
}
});})(elide_paths_QMARK_,map__18195,map__18195__$1,env__$1,path,map__18161,map__18161__$1,config,read,mutate))
;
var G__18226 = cljs.core.reduce.call(null,step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
var G__18226__$1 = ((!((!((target == null))) || (elide_paths_QMARK_)))?om.next.impl.parser.path_meta.call(null,G__18226,path,query):G__18226);
return G__18226__$1;
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__18161,map__18161__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

//# sourceMappingURL=parser.js.map