angular.module("movielist.services.http",[]).service("HttpService",["$window",function(i){this.jsonp=function(e,n,t){var o="jsonp_"+(Math.random()*Math.random()).toString().replace(".","");i[o]=function(e){t(e),i.document.body.removeChild(c)};var r="";for(var a in n)r+=a+"="+n[a]+"&";e=(e=e+"?"+r)+"callback="+o;var c=i.document.createElement("script");c.src=e,i.document.body.appendChild(c)}}]);