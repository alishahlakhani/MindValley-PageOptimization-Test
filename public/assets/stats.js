!function(){"use strict";function t(t,e,n,i){function o(t){this.init(t)}var r={visit:"VISIT",signup:"SIGNUP",attendee:"ATTENDEE",sawFirstDelayedEvent:"SAW_FIRST_DELAYED_EVENT",sale:"SALE",replayAttendee:"REPLAY_ATTENDEE",replaySawFirstEvent:"REPLAY_SAW_FIRST_EVENT",replaySale:"REPLAY_SALE",viewedCountdown:"VIEWED_COUNTDOWN",watchedWebinar:"WATCHED_WEBINAR",primeInsertionPoint:"PRIME_INSERTION_POINT",reachedEndOfFile:"REACHED_END_OF_FILE",viewedAfterOver:"VIEWED_AFTER_OVER",watchingVideo:"WATCHING_VIDEO"};return o.prototype.init=function(t){var e=t.getUri({parent:!0}).search(!0);this.today=n(),this.webinar=t,this.tracking={source:e.utm_source,medium:e.utm_medium,term:e.utm_term,content:e.utm_content,campaign:e.utm_campaign}},o.prototype.newEvent=function(e,n){var i,o=this;if(n=t.extend({},n),r.hasOwnProperty(e)){if(this.webinar.isPreview())return void(n.onSuccess&&n.onSuccess());i=t.extend({event:r[e],utm_source:this.tracking.source,utm_campaign:this.tracking.campaign,webinar_id:this.webinar.id,attendee_id:n.aid},n),this.getEventCookie(e,i)||t.post(this.webinar.getApiStatsUrl(),i).promise().fail(function(){setTimeout(function(){o.newEvent(e,n)},1e3)}).done(function(){o.setEventCookie(e,i),n.onSuccess&&n.onSuccess()})}},o.prototype.track=function(){},o.prototype.alias=function(){},o.prototype.identify=function(){},o.prototype.peopleSet=function(){},o.prototype.buildStatsEventCookie=function(t,n){var i=[this.today.format("YYYY-MM-DD"),this.webinar.id,this.attendee.id,r[t],this.tracking.source,this.tracking.campaign];return i=i.concat(e.map(n||{},function(t,e){return(void 0===e?"-":e).toString()+"="+(void 0===t?"-":t).toString()})),i.join(":")},o.prototype.getEventCookie=function(t,e){var n,i=this.buildStatsEventCookie(t,e);try{n=localStorage.getItem(i)}catch(o){n=null}return null!==n},o.prototype.setEventCookie=function(t,e){var n=this.buildStatsEventCookie(t,e);try{localStorage.setItem(n,"done")}catch(i){}},o.prototype.gaEvent=function(t){window.dataLayer&&window.dataLayer.push(t)},o.prototype.gaVisit=function(){this.gaEvent({event:"masterclassEvent",action:"Visit",content_type:"Masterclass Landing",content_id:this.webinar.id,content_title:this.codename,content_language:this.webinar.lc,content_category:"Masterclass"})},o.prototype.visit=function(t){this.newEvent("visit",t),this.webinar.inIframe()||this.gaVisit()},o.prototype.signup=function(t){this.newEvent("signup",t)},o.prototype.attendee=function(t){this.newEvent("attendee",t)},o.prototype.sawFirstDelayedEvent=function(t){this.newEvent("sawFirstDelayedEvent",t)},o.prototype.sale=function(t){this.newEvent("sale",t)},o.prototype.replayAttendee=function(t){this.newEvent("replayAttendee",t)},o.prototype.replaySawFirstEvent=function(t){this.newEvent("replaySawFirstEvent",t)},o.prototype.replaySale=function(t){this.newEvent("replaySale",t)},o.prototype.viewedCountdown=function(t){this.newEvent("viewedCountdown",t)},o.prototype.watchedWebinar=function(t){this.newEvent("watchedWebinar",t)},o.prototype.primeInsertionPoint=function(t){this.newEvent("primeInsertionPoint",t)},o.prototype.reachedEndOfFile=function(t){this.newEvent("reachedEndOfFile",t)},o.prototype.viewedAfterOver=function(t){this.newEvent("viewedAfterOver",t)},o.prototype.watchingVideo=function(t){this.newEvent("watchingVideo",t)},o.prototype.setSalePixelCookie=function(t){var e={aid:t.aid,m:t.m,section:this.webinar.section};if(!this.webinar.isPreview()){try{e=JSON.stringify(e)}catch(n){return}try{localStorage.setItem(this.webinar.id,e)}catch(n){}try{i.set(this.webinar.id,e)}catch(n){}}},o.prototype.setLiveSalePixelCookie=function(e){this.setSalePixelCookie(t.extend(e,{m:"l"}))},o.prototype.setReplaySalePixelCookie=function(e){this.setSalePixelCookie(t.extend(e,{m:"r"}))},o.prototype.error=function(){},{Stats:o}}blinkwebinars.define(["jquery","underscore","moment","js.cookie"],t)}();