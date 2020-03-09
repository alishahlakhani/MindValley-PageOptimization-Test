/*!
 * URI.js - Mutating URLs
 * URI Template Support - http://tools.ietf.org/html/rfc6570
 *
 * Version: 1.18.0
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

!function(e,t){"use strict";"object"==typeof exports?module.exports=t(require("./URI")):"function"==typeof blinkwebinars.define&&blinkwebinars.define.amd?blinkwebinars.define(["./URI"],t):e.URITemplate=t(e.URI,e)}(this,function(e,t){"use strict";function r(e){return r._cache[e]?r._cache[e]:this instanceof r?(this.expression=e,r._cache[e]=this,this):new r(e)}function n(e){this.data=e,this.cache={}}var a=t&&t.URITemplate,o=Object.prototype.hasOwnProperty,i=r.prototype,p={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};return r._cache={},r.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g,r.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/,r.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/,r.LITERAL_PATTERN=/[<>{}'"`^| \\]/,r.expand=function(e,t){var n,a,o,i=p[e.operator],s=i.named?"Named":"Unnamed",l=e.variables,c=[];for(o=0;a=l[o];o++)if(n=t.get(a.name),n.val.length){if(n.type>1&&a.maxlength)throw new Error('Invalid expression: Prefix modifier not applicable to variable "'+a.name+'"');c.push(r["expand"+s](n,i,a.explode,a.explode&&i.separator||",",a.maxlength,a.name))}else n.type&&c.push("");return c.length?i.prefix+c.join(i.separator):""},r.expandNamed=function(t,r,n,a,o,i){var p,s,l,c="",d=r.encode,h=r.empty_name_separator,u=!t[d].length,f=2===t.type?"":e[d](i);for(s=0,l=t.val.length;l>s;s++)o?(p=e[d](t.val[s][1].substring(0,o)),2===t.type&&(f=e[d](t.val[s][0].substring(0,o)))):u?(p=e[d](t.val[s][1]),2===t.type?(f=e[d](t.val[s][0]),t[d].push([f,p])):t[d].push([void 0,p])):(p=t[d][s][1],2===t.type&&(f=t[d][s][0])),c&&(c+=a),n?c+=f+(h||p?"=":"")+p:(s||(c+=e[d](i)+(h||p?"=":"")),2===t.type&&(c+=f+","),c+=p);return c},r.expandUnnamed=function(t,r,n,a,o){var i,p,s,l,c="",d=r.encode,h=r.empty_name_separator,u=!t[d].length;for(s=0,l=t.val.length;l>s;s++)o?p=e[d](t.val[s][1].substring(0,o)):u?(p=e[d](t.val[s][1]),t[d].push([2===t.type?e[d](t.val[s][0]):void 0,p])):p=t[d][s][1],c&&(c+=a),2===t.type&&(i=o?e[d](t.val[s][0].substring(0,o)):t[d][s][0],c+=i,c+=n?h||p?"=":"":","),c+=p;return c},r.noConflict=function(){return t.URITemplate===r&&(t.URITemplate=a),r},i.expand=function(e){var t="";this.parts&&this.parts.length||this.parse(),e instanceof n||(e=new n(e));for(var a=0,o=this.parts.length;o>a;a++)t+="string"==typeof this.parts[a]?this.parts[a]:r.expand(this.parts[a],e);return t},i.parse=function(){var e,t,n,a=this.expression,o=r.EXPRESSION_PATTERN,i=r.VARIABLE_PATTERN,s=r.VARIABLE_NAME_PATTERN,l=r.LITERAL_PATTERN,c=[],d=0,h=function(e){if(e.match(l))throw new Error('Invalid Literal "'+e+'"');return e};for(o.lastIndex=0;;){if(t=o.exec(a),null===t){c.push(h(a.substring(d)));break}if(c.push(h(a.substring(d,t.index))),d=t.index+t[0].length,!p[t[1]])throw new Error('Unknown Operator "'+t[1]+'" in "'+t[0]+'"');if(!t[3])throw new Error('Unclosed Expression "'+t[0]+'"');e=t[2].split(",");for(var u=0,f=e.length;f>u;u++){if(n=e[u].match(i),null===n)throw new Error('Invalid Variable "'+e[u]+'" in "'+t[0]+'"');if(n[1].match(s))throw new Error('Invalid Variable Name "'+n[1]+'" in "'+t[0]+'"');e[u]={name:n[1],explode:!!n[3],maxlength:n[4]&&parseInt(n[4],10)}}if(!e.length)throw new Error('Expression Missing Variable(s) "'+t[0]+'"');c.push({expression:t[0],operator:t[1],variables:e})}return c.length||c.push(h(a)),this.parts=c,this},n.prototype.get=function(e){var t,r,n,a=this.data,i={type:0,val:[],encode:[],encodeReserved:[]};if(void 0!==this.cache[e])return this.cache[e];if(this.cache[e]=i,n="[object Function]"===String(Object.prototype.toString.call(a))?a(e):"[object Function]"===String(Object.prototype.toString.call(a[e]))?a[e](e):a[e],void 0===n||null===n)return i;if("[object Array]"===String(Object.prototype.toString.call(n))){for(t=0,r=n.length;r>t;t++)void 0!==n[t]&&null!==n[t]&&i.val.push([void 0,String(n[t])]);i.val.length&&(i.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(n))){for(t in n)o.call(n,t)&&void 0!==n[t]&&null!==n[t]&&i.val.push([t,String(n[t])]);i.val.length&&(i.type=2)}else i.type=1,i.val.push([void 0,String(n)]);return i},e.expand=function(t,n){var a=new r(t),o=a.expand(n);return new e(o)},r});