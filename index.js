(function(){"use strict";var u=function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("k-inside",[r("k-header",[e._v("Files")]),r("k-collection",{attrs:{empty:e.empty,items:e.items,layout:"list",pagination:e.files.pagination},on:{paginate:e.paginate}})],1)},d=[];function c(e,o,r,$,s,l,_,C){var n=typeof e=="function"?e.options:e;o&&(n.render=o,n.staticRenderFns=r,n._compiled=!0),$&&(n.functional=!0),l&&(n._scopeId="data-v-"+l);var i;if(_?(i=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!t&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(_)},n._ssrRegister=i):s&&(i=C?function(){s.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:s),i)if(n.functional){n._injectStyles=i;var y=n.render;n.render=function(k,p){return i.call(p),y(k,p)}}else{var f=n.beforeCreate;n.beforeCreate=f?[].concat(f,i):[i]}return{exports:e,options:n}}const h={props:{files:Object},computed:{empty(){return{icon:"files",text:this.$t("role.empty")}},items(){return this.files.data.map(e=>(e.options=this.$dropdown(e.link),e))}},methods:{paginate(e){this.$reload({query:{page:e.page}})}}},a={};var v=c(h,u,d,!1,m,null,null,null);function m(e){for(let o in a)this[o]=a[o]}var g=function(){return v.exports}();panel.plugin("texnixe/filesarea",{components:{"k-files-view":g}})})();