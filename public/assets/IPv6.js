/*!
 * URI.js - Mutating URLs
 * IPv6 Support
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

!function(e,t){"use strict";"object"==typeof exports?module.exports=t():"function"==typeof blinkwebinars.define&&blinkwebinars.define.amd?blinkwebinars.define(t):e.IPv6=t(e)}(this,function(e){"use strict";function t(e){var t=e.toLowerCase(),i=t.split(":"),n=i.length,r=8;""===i[0]&&""===i[1]&&""===i[2]?(i.shift(),i.shift()):""===i[0]&&""===i[1]?i.shift():""===i[n-1]&&""===i[n-2]&&i.pop(),n=i.length,-1!==i[n-1].indexOf(".")&&(r=7);var o;for(o=0;n>o&&""!==i[o];o++);if(r>o)for(i.splice(o,1,"0000");i.length<r;)i.splice(o,0,"0000");for(var s,f=0;r>f;f++){s=i[f].split("");for(var l=0;3>l&&("0"===s[0]&&s.length>1);l++)s.splice(0,1);i[f]=s.join("")}var c=-1,a=0,p=0,h=-1,u=!1;for(f=0;r>f;f++)u?"0"===i[f]?p+=1:(u=!1,p>a&&(c=h,a=p)):"0"===i[f]&&(u=!0,h=f,p=1);p>a&&(c=h,a=p),a>1&&i.splice(c,a,""),n=i.length;var v="";for(""===i[0]&&(v=":"),f=0;n>f&&(v+=i[f],f!==n-1);f++)v+=":";return""===i[n-1]&&(v+=":"),v}function i(){return e.IPv6===this&&(e.IPv6=n),this}var n=e&&e.IPv6;return{best:t,noConflict:i}});