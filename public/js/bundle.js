var _;_={i:function(){return this.console=setInterval(this.detect.bind(this),200)},p:{offing:!1,offtime:0},turn:function(m,d,n){return null==d&&(d=!1),null==n&&(n=!1),m instanceof jQuery||(m=$(m)),d!==!1&&m.removeClass(d),n!==!1&&m.addClass(n),!0},off:function(m,d){null==d&&(d={}),d.offing&&d.offtime>0?(this.turn(m,!1,"offing"),setTimeout(function(){return this.turn(m,"offing",!1),this.turn(m,"on","off")},1e3*d.offtime+100)):this.turn(m,"on","off")},on:function(m,d){return this.turn(m,"off","on")},swap:function(m,d){m instanceof jQuery||(m=$(m)),m.hasClass("off")?this.on(m,d):this.off(m,d)},encode:function(m){return encodeURIComponent(m).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},t:function(m,d,n,o){return _gaq.push(["_trackEvent",m,d,n,o])},rand:function(m,d){return Math.floor(Math.random()*d)+m},llc:function(){var m;return m="\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.io/\n:: "+config.meta.repo,console.log(m,"color: grey; font-family: Menlo, monospace;")},detect:function(){if(window.outerHeight-window.innerHeight>100||window.outerWidth-window.innerWidth>100)return this.llc(),clearInterval(this.console)}},_.i();
var Global;Global={i:function(){return Global.handlers()},handlers:function(){return $(".email input").focus(Global.email),$(".burger").click(Global.mobile)},mobile:function(){return _.swap(".menu"),_.swap(".burger")},email:function(){var l;return l=$(".email > input"),l[0].setSelectionRange(0,l[0].value.length)}};
var Index;Index={i:function(){}};
var News;News={i:function(){var e;return this.handlers(),e=location.hash.replace("#",""),"press"===e?News.press():News.blog()},handlers:function(){return $(".newsummary > .smenu > .option").click(this.menuHandler)},menuHandler:function(){var e;return e=$(this).data("type"),_.off(".newsummary > .smenu > .option"),"blog"===e?News.blog():News.press(),!1},blog:function(){return _.on(".articles"),_.off(".presses"),_.on(".smenu > .option_blog")},press:function(){return _.on(".presses"),_.off(".articles"),_.on(".smenu > .option_press")}};