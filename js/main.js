//this is for get the window width and height
vpw = $(window).width();
vph = $(window).height();
$('.full-page').height(vph);
//waypoints
$(function() {
 
  // Do our DOM lookups beforehand
  var nav_container = $(".nav-container");
  var nav = $("nav");
 
  nav_container.waypoint({
    handler: function(event, direction) {
        nav.toggleClass('sticky', direction=='down');
    }
  });
 
});
// Init Skrollr
var s = skrollr.init({
    forceHeight: false,
    render: function(data){
            
                //Debugging - Log the current scroll position.
                //console.log(data.curTop);
            }
}); 
//text-rotate
$(document).ready(function(){
            $(".text .rotate").textrotator({
        animation: "flipUp",
        speed: 1000
        });
});
//piechart
$(function() {
        $('.chart').easyPieChart({
           scaleColor: false,
           lineWidth: 10,
           size: 180,
           lineCap: "square",
        });
});
//counter
var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.' 
}
var counter1 = new countUp("counter1", 24, 1194, 0, 4.7, options);
counter1.start();
var counter2 = new countUp("counter2", 24, 94, 0, 4.7, options);
counter2.start();
var counter3 = new countUp("counter3", 24, 2094, 0, 4.7, options);
counter3.start();
//isotope
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
});
 
$('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
        }); 
});
//ticker
(function(a){a.fn.airport=function(g,n){var b=a.extend({transition_speed:1000,loop:true,fill_space:false,colors:null},n),m=a(this),j=["a","b","c","d","e","f","g"," ","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-","1","2","3","4","5","6","7","8","9","0"],h,c,d=0,i=g.length,f=g.length;function e(p,o){return p+new Array(o-p.length+1).join(" ")}m.empty();while(i--){if(g[i].length>d){d=g[i].length}}while(f--){g[f]=e(g[f],d)}h=d;while(h--){var k=document.createElement("span");k.className="c"+h;m.prepend(k)}if(b.colors){c=b.colors.replace(/\s+/g,"").split(",")}function l(x,w,v,u){var q=m.find(".c"+x),r=g[v]?g[v].substring(u,u+1):null,p,s,o=g[v]?a.trim(g[v]).length:null,t=g[v-1]?a.trim(g[v-1]).length:a.trim(g[0]).length;if(v>=g.length){if(!b.loop){clearTimeout(p);return}p=setTimeout(function(){l(0,0,0,0)},10)}else{if(u>=d){p=setTimeout(function(){if(b.colors){s=c[~~(Math.random()*c.length)];m.css("color",s.substring(0,1)==="#"?s:"#"+s)}l(0,0,v+1,0)},b.transition_speed)}else{q.html((j[w]===" ")?"&nbsp;":j[w]);p=setTimeout(function(){if(w>j.length){l(x+1,0,v,u+1)}else{if(j[w]!==r.toLowerCase()){l(x,w+1,v,u)}else{q.html((r===" "&&b.fill_space)?"&nbsp;":r);if(o<t){if(x>o){for(x;x<t;x++){m.find(".c"+x).html("")}u=d}}l(x+1,0,v,u+1)}}},10)}}}l(0,0,0,0)}})(jQuery);

if( navigator.userAgent.match(/Android/i) || 
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) || 
    navigator.userAgent.match(/iPad/i)|| 
    navigator.userAgent.match(/iPod/i) || 
    navigator.userAgent.match(/BlackBerry/i)){
            $('.parallax').addClass('mobile');
        }
//terminal
document.getElementById("today").innerHTML=d;
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();

	var output = d.getFullYear() + '-' +
	    ((''+month).length<2 ? '0' : '') + month + '-' +
	    ((''+day).length<2 ? '0' : '') + day;
$('#term').terminal({
    
    cd: function(a) {
        this.echo(location.href ="http://"+a)
    },

    why_i_quit: function() {
        this.echo(location.href ="https://medium.com/what-i-learned-today/fa128509b99b")
    },

    what_is_flock: function() {
        this.echo(location.href ="https://medium.com/look-what-i-made/4e667ad7a098")
    },

    websites: function() {
        this.echo("Below are my favorite website:\nhttp://dribbble.com\nhttp://news.ycombinator.com\nhttp://unsplash.com")
    },
    
    work_history: function() {
        this.echo("Right out of school I worked for SunTrust Robinson Humphrey as an i-banking analyst.\nI helped Financial Services \&amp; Technology companies raise capital and execute M\&amp;A opps.")
    },

    terminal_color: function(a) {
        if (a == 'normal') {
          $(".term").css("background-color", '#33485D');
          $("#term").css("background-color", '#33485D');
        } else {
          $(".term,").css("background-color", a);
          $("#term").css("background-color", a);
        }
    },

    pwd: function() {
        this.echo("/Users/oscarmcm/code/personal_homepage")
    },

   '\n': function() {
        this.echo()
    },

    music: function() {
        this.echo("Below are some of my favorite bands:\nMichael Franti \&amp; Spearhead, Bruce Springsteen, Passion Pit, Vampire Weekend, Queen\nand all mashups")
    },

    ls: function() {
        this.echo("js\ncss\nimg\nlibs")
    },

    learn_to_code: function() {
        this.echo(location.href ="https://medium.com/on-coding/41fe6fc1b8df")  
    },

    hn: function() {
        this.echo("Thanks for all the awesome comments and suggestions! Check out the post below:\nhttps://news.ycombinator.com/item?id=5744558")
    },

    hello: function() {
        this.echo("hey! welcome to my site!" )
    },

    // font_color: function(a) {
    //    if (a == 'normal') {
    //      $(".terminal_font").css("color", '#19FE54');
    //      $(".terminal-output > div, .terminal .terminal-output div div, .terminal, .terminal-output, div.terminal-output, .cmd, .prompt, span.inverted, #today, .cursor, .inverted, .terminal-output > div").css("color", '#19FE54');
    //    } else {
    //      $("span, .terminal_font").css("color", a);
    //      $("span, .terminal-output > div, .terminal .terminal-output div div, .terminal, .terminal-output, div.terminal-output, .cmd, .prompt, span.inverted, #today, .cursor, .inverted, .terminal-output > div").css("color", a);
    //    }
    // },

    education: function() {
        this.echo("I went to Emory University in Atlanta, GA.  I studied Economics, Mathematics,\nand Philosophy and was a center defender on the varsity soccer team.")
    },

    books: function() {
        this.echo("Some of my favorite books:\nThe Omnivore's Dilemma, anything by Chuck Klosterman, The Fountainhead")
    },

    background_color: function(a) {
        if (a == 'normal')
          $("body").css("background-color", '#3498DB');
        else
          $("body").css("background-color", a);
    },

    '': function() {
        this.echo()
    },

}, { prompt: 'Oscar-Cortez-MacBook:~ $ ', greetings: false, tabcompletion: true });