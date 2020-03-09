var ok_backend='services.mindvalley.com';var the_domain='';if(typeof(joffrey_environment)!="undefined"&&joffrey_environment=='staging'){ok_backend='services.mvstg.com'}
function urldecode(str){return decodeURIComponent((str+'').replace(/\+/g,'%20'))}
function getURLParameter(name){return decodeURI((RegExp(name+'='+'(.+?)(&|$)').exec(location.search)||[,null])[1])}
function array_reverse(array,preserve_keys){var isArray=Object.prototype.toString.call(array)==="[object Array]",tmp_arr=preserve_keys?{}:[],key;if(isArray&&!preserve_keys){return array.slice(0).reverse()}
if(preserve_keys){var keys=[];for(key in array){keys.push(key)}
var i=keys.length;while(i--){key=keys[i];tmp_arr[key]=array[key]}}else{for(key in array){tmp_arr.unshift(array[key])}}
return tmp_arr}
function isGoogleSearch(){if($(document)[0].referrer=="")
return!1;var pattern=/^http[s]?:\/\/www\.google\..*\/url/i;var pattern2=/^http[s]?:\/\/www\.google\..*\/search/i;if(pattern.test($(document)[0].referrer)||pattern2.test($(document)[0].referrer)){return!0}else{return!1}}
function isYahooSearch(){if($(document)[0].referrer=="")
return!1;var pattern=/^http[s]?:\/\/.*[\.]?search.yahoo.com\/search/i;if(pattern.test($(document)[0].referrer)){return!0}else{return!1}}
function isBingSearch(){if($(document)[0].referrer=="")
return!1;var pattern=/^http[s]?:\/\/www.bing.com\/search/i;if(pattern.test($(document)[0].referrer)){return!0}else{return!1}}
function setTheCookie(){var cookie_input={'trafficsou_272':'utm_source','trafficmed_278':'utm_medium','trafficter_279':'utm_term','trafficcon_280':'utm_content','trafficcam_281':'utm_campaign','placement':'placement','keyword':'keyword','remarket':'rm','source':'keyword','aid':'aid','cid':'cid','eid':'eid','sourceApp':'sd','campaign':'ct','POSTAff2Cookie':'a_aid','POSTAff2Cookie':'m'};for(var name in cookie_input){if(jQuery.url().param(cookie_input[name])){jQuery.cookie(name,jQuery.url().param(cookie_input[name]),{path:'/',domain:'.'+the_domain})}}
if(jQuery(document)[0].referrer){jQuery.cookie('referrer',"",{path:'/',domain:'.'+the_domain})}
if(jQuery(document)[0].referrer){jQuery.cookie('keyphrase_271',jQuery.url(jQuery(document)[0].referrer).param('q'),{path:'/',domain:'.'+the_domain})}
if(!jQuery.cookie('first_touch')){var temp_str="";jQuery.cookie('first_touch',temp_str,{expires:365,path:'/',domain:'.'+the_domain})}
if(!jQuery.cookie('source')&&(jQuery.url().param('sr'))){jQuery.cookie('source',jQuery.url().param('sr'),{path:'/',domain:'.'+the_domain})}
if(isGoogleSearch()){jQuery.cookie('source',22);jQuery.cookie('google_referrer',"");jQuery.cookie('first_touch',"",{expires:365,path:'/',domain:'.'+the_domain})}else if(isYahooSearch()){jQuery.cookie('source',23);jQuery.cookie('yahoo_referrer',"");jQuery.cookie('first_touch',"",{expires:365,path:'/',domain:'.'+the_domain})}else if(isBingSearch()){jQuery.cookie('source',24);jQuery.cookie('bing_referrer',"");jQuery.cookie('first_touch',"",{expires:365,path:'/',domain:'.'+the_domain})}
if(jQuery.url().param('hop')){jQuery.cookie('hop',jQuery.url().param('hop'),{expires:60,path:'/',domain:'.'+the_domain})}
if((jQuery.url().param('cac'))){jQuery.cookie('cac',jQuery.url().param('cac'),{expires:90,path:'/',domain:'.'+the_domain});jQuery.cookie('affiliate_provider','DirectTrack',{expires:90,path:'/',domain:'.'+the_domain})}
if((jQuery.url().param('hot_id'))){jQuery.cookie('hot_id',jQuery.url().param('hot_id'),{expires:90,path:'/',domain:'.'+the_domain});jQuery.cookie('affiliate_provider','HasOffers',{expires:90,path:'/',domain:'.'+the_domain})}
if(jQuery.url().param('aff_id')){jQuery.cookie('uaff_id',jQuery.url().param('aff_id'),{expires:365*20,path:'/',domain:'.'+the_domain})}
if(jQuery.url().param('cake_aff_id')){jQuery.cookie('ucake_aff_id',jQuery.url().param('cake_aff_id'),{expires:365*20,path:'/',domain:'.'+the_domain})}
if(jQuery.url().param('aff_token')){jQuery.cookie('uaff_token',jQuery.url().param('aff_token'),{expires:365*20,path:'/',domain:'.'+the_domain})}
if(jQuery.url().param('email')){jQuery.cookie('oemail',jQuery.url().param('email'),{expires:365*20,path:'/',domain:'.'+the_domain})}
if((jQuery.url().param('otag'))){var otags=jQuery.url().param('otag').split(',');var date=new Date();var ddmmyyyy=date.getUTCDate()+'-'+(date.getUTCMonth()+1)+'-'+date.getUTCFullYear();var tags_count=otags.length
for(var i=0;i<tags_count;i++){otags.push(ddmmyyyy+'|'+otags[i])}
otags=otags.join(',');jQuery.cookie('otag',otags,{expires:365*99,path:'/',domain:'.'+the_domain})}
if(jQuery.url().param('adtag')){var temp_time=Number(jQuery.url().param('adtag_time'));var adtag_expire=temp_time?temp_time:2;jQuery.cookie('adtag',jQuery.url().param('adtag'),{expires:adtag_expire,path:'/',domain:'.'+the_domain})}
if(jQuery.url().param('aff_tags')){jQuery.cookie('aff_tags',jQuery.url().param('aff_tags'),{expires:7,path:'/',domain:'.'+the_domain})}
var expiry_period=jQuery.url().param('expiry')?jQuery.url().param('expiry'):30;if(jQuery.url().param('promo_tags')){jQuery.cookie('promo_tags',jQuery.url().param('promo_tags'),{expires:expiry_period,path:'/',domain:'.'+the_domain})}
if(jQuery.cookie('promo_tag_list'))
{var promo_tag_list=unserialize(jQuery.cookie('promo_tag_list'));for(var key in promo_tag_list)
{if(promo_tag_list.hasOwnProperty(key))
{if(promo_tag_list[key]<time())
{promo_tag_list.splice(key,1)}}}
if(jQuery.url().param('promo_tags'))
{if(!array_key_exists(jQuery.url().param('promo_tags'),promo_tag_list))
{promo_tag_list[jQuery.url().param('promo_tags')]=time()+(60*60*24)*90}}
$.cookie('promo_tag_list',serialize(promo_tag_list),{expires:365*10,path:'/',domain:'.'+the_domain})}
else{var promo_cookie=new Array();promo_cookie[jQuery.cookie('promo_tags')]=time()+((60*60*24)*90);$.cookie('promo_tag_list',serialize(promo_cookie),{expires:(60*60*24*365)*10,path:'/',domain:'.'+the_domain})}}
var the_form=jQuery('form[action^="http:\/\/'+ok_backend+'\/oap"]');the_form=the_form.length?the_form:jQuery('form[action^="https:\/\/'+ok_backend+'\/oap"]');function appendCookieItem(cookie_name,input_name){if(jQuery.cookie(cookie_name)&&the_form.children('input[name="'+input_name+'"]').length<1){the_form.append('<input type="hidden" name="'+input_name+'" value="'+jQuery.cookie(cookie_name)+'">')}}
function appendCookieToForm(){var cookie_input_pair={'keyphrase_271':"keyphrase_271",'trafficsou_272':"trafficsou_272",'trafficmed_278':"trafficmed_278",'trafficter_279':"trafficter_279",'trafficcon_280':"trafficcon_280",'trafficcam_281':"trafficcam_281",'placement':"placement",'keyword':"keyword",'remarket':"remarket",'source':"sourceid_126",'cid':"cid",'aid':"aid",'eid':"eid",'hop':"referralcb_304",'signupday':"signupday_333",'cac':"cac",'uaff_id':"uaff_id",'uaff_token':"uaff_token",'oemail':"oemail",'cake_aff_id':'cake_aff_id','cake_offer_id':'cake_offer_id','affiliate_provider':'affiliate_provider'};for(var cookie_name in cookie_input_pair){appendCookieItem(cookie_name,cookie_input_pair[cookie_name])}
var url_params=jQuery.url().param();for(var get_name in url_params){if(!cookie_input_pair[get_name]&&get_name!='uid'&&get_name!='email'&&get_name!='firstname'){the_form.append('<input type="hidden" name="'+get_name+'" value="'+url_params[get_name]+'">')}}
if(the_form.children('input[name="'+cookie_input_pair.signupday+'"]').length<1){the_form.append('<input type="hidden" name="'+cookie_input_pair.signupday+'" value="'+getDayString(new Date().getDay())+'">')}
if(jQuery.cookie('cac')&&the_form.children('input[name="'+cookie_input_pair.cac+'"]').length<1){the_form.append('<input type="hidden" name="'+cookie_input_pair.cac+'" value="'+decodeURIComponent(jQuery.cookie('cac'))+'">')}
if(the_form.children('input[name=current_url]').length<1){the_form.append('<input type="hidden" name="current_url" value="'+jQuery.url().attr('path')+'">')}}
function getDayString(val){switch(val){case 0:return'sunday';break;case 1:return'monday';break;case 2:return'tuesday';break;case 3:return'wednesday';break;case 4:return'thursday';break;case 5:return'friday';break;case 6:return'saturday';break;default:return'???';break}}
function setStickyDirectTrack(){if(jQuery.cookie('cac')&&jQuery.cookie('uaff_token')&&(jQuery.url().param('ltc')==1)){$.getJSON("https://"+ok_backend+"/directtrack/set?callback=?",{cac:jQuery.cookie('cac'),uaff_id:jQuery.cookie('uaff_id')?jQuery.cookie('uaff_id'):'',uaff_token:jQuery.cookie('uaff_token')},function(data){})}}
function stickyDirectTrack(){$.getJSON("https://"+ok_backend+"/directtrack/?callback=?",null,function(data){if(data.universal_aff_id){jQuery.cookie('uaff_id',data.universal_aff_id,{path:'/',domain:'.'+the_domain})}
if(data.universal_aff_token){jQuery.cookie('uaff_token',data.universal_aff_token,{path:'/',domain:'.'+the_domain})}
if(jQuery.cookie('uaff_id')&&jQuery.cookie('uaff_token')){jQuery('a[href*="https://'+ok_backend+'"]').each(function(){var href=jQuery(this).attr('href');var url=jQuery.url(href);queryparam=url.data.param.query;queryparam.affprovider='DirectTrack';queryparam.affdata=jQuery.cookie('cac');if(jQuery.cookie('uaff_id')&&jQuery.cookie('uaff_token')){queryparam.affdata+=';'+jQuery.cookie('uaff_id')+';'+jQuery.cookie('uaff_token')}
var newURL=url.attr('base')+url.attr('directory')+'?'+jQuery.param(queryparam);jQuery(this).attr('href',newURL)})}})}
function setStickyCake(){if(jQuery.cookie('uaff_token')&&(jQuery.url().param('ltc')==1)){$.getJSON("https://"+ok_backend+"/cake/set?callback=?",{ucake_aff_id:jQuery.cookie('ucake_aff_id')?jQuery.cookie('ucake_aff_id'):'',uaff_token:jQuery.cookie('uaff_token')},function(data){})}}
function stickyCake(){$.getJSON("https://"+ok_backend+"/cake/?callback=?",null,function(data){if(data.universal_cake_aff_id){jQuery.cookie('ucake_aff_id',data.universal_cake_aff_id,{path:'/',domain:'.'+the_domain})}
if(data.universal_aff_token){jQuery.cookie('uaff_token',data.universal_aff_token,{path:'/',domain:'.'+the_domain})}})}
function prepend_additional_tags(){if(jQuery.cookie('adtag')||jQuery.cookie('aff_tags')||jQuery.cookie('promo_tags')||jQuery.cookie('otag')){jQuery('a[href*="https://secure.mindvalley.com"]').each(function(){var href=jQuery(this).attr('href');var url=jQuery.url(href);queryparam=url.data.param.query;if(jQuery.cookie('affiliate_provider')){if(jQuery.cookie('cac')&&jQuery.cookie('affiliate_provider')=="DirectTrack"){queryparam.affprovider="DirectTrack";queryparam.affdata=jQuery.cookie('cac')}else if(jQuery.cookie('hot_id')&&jQuery.cookie('affiliate_provider')=="HasOffers"){queryparam.affprovider="HasOffers";queryparam.affdata=jQuery.cookie('hot_id')}}
if(jQuery.cookie('hop')){if(!queryparam.cbaff){queryparam.cbaff=jQuery.cookie('hop')}}
var tags_string='';if(jQuery.cookie('adtag'))
tags_string+=jQuery.cookie('adtag')+',';if(jQuery.cookie('otag'))
tags_string+=jQuery.cookie('otag')+',';tags_string+=queryparam.tags;unique_tags=jQuery.unique(tags_string.split(','));queryparam.tags=unique_tags.join();var aff_tags_string=''
if(jQuery.cookie('aff_tags'))
aff_tags_string+=jQuery.cookie('aff_tags')+','
aff_tags_string+=queryparam.aff_tags;queryparam.aff_tags=aff_tags_string;queryparam.promo_tags=urldecode(jQuery.cookie('promo_tags'));var newURL=url.attr('base')+url.attr('directory')+'?'+jQuery.param(queryparam);jQuery(this).attr('href',newURL)})}}
jQuery(document).ready(function(){the_form=jQuery('form[action^="http:\/\/'+ok_backend+'\/oap"]');the_form=the_form.length?the_form:jQuery('form[action^="https:\/\/'+ok_backend+'\/oap"]');if(jQuery.cookie&&jQuery.url&&(typeof serialize!=='undefined')){the_domain=jQuery.url().attr('host');setTheCookie();appendCookieToForm();setStickyDirectTrack();stickyDirectTrack();setStickyCake();stickyCake();prepend_additional_tags()}else{jQuery.getScript("https://"+ok_backend+"/javascripts/jquery.cookie.js",function(){jQuery.getScript("https://"+ok_backend+"/javascripts/jquery.url.js",function(){jQuery.getScript("https://"+ok_backend+"/javascripts/phpjs.js",function(){the_domain=jQuery.url().attr('host');setTheCookie();appendCookieToForm();setStickyDirectTrack();stickyDirectTrack();setStickyCake();stickyCake();prepend_additional_tags()})})})}
var oath_error=getURLParameter('oath_error');if(parseInt(oath_error)){var msg=new Array();var flag=array_reverse(parseInt(oath_error,10).toString(2).split(""));for(var i=0;i<flag.length;i++){if('1'==flag[i]){switch(i){case 0:msg.push('Your email address is required.');break;case 1:msg.push('The email format is invalid.');break;case 2:msg.push('Your email seems to be unreachable.');break;case 3:msg.push('The form\'s uid is missing.');break}}}
var error='';jQuery.each(msg,function(key,value){error+=(key+1)+'. '+value+'\n'});if(''!=error){alert(error)}}});if(typeof joffrey=='undefined'){var joffrey={}
joffrey.triggerEvent=function(the_project,the_event){var the_email=jQuery.cookie('email')?jQuery.cookie('email'):decodeURIComponent(getURLParameter('email'));var the_cid=decodeURIComponent(getURLParameter('contact_id'));var the_data={email:the_email,contact_id:the_cid,event:the_event,current_url:jQuery.url().attr('path'),project:the_project}
jQuery.ajax('https://'+ok_backend+'/events',{dataType:'jsonp',data:the_data,type:'GET'})}}