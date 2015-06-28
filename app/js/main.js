$(document).ready(function(){
console.log("Don't hesitate to take the code, he is open source and disordered :p");
console.log("SCSS is here:");
console.log("scss/style.scss");
console.log("scss/_normalize.scss");
console.log("scss/_sections.scss");
console.log("scss/_loader.scss");
console.log("scss/_font.scss");
console.log("scss/_animate.scss");

if (navigator.userAgent.match(/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi) || navigator.userAgent.match(/ipad/gi)) {
  $("html").addClass("mobile");
}


$("#right").click(function(e) {
  var sens = "droite";
  var action = $("body").attr("class");
  detectionDeOuf(sens, action);
  e.preventDefault();
});
$("#left").click(function(e) {
  var sens = "gauche";
  var action = $("body").attr("class");
  detectionDeOuf(sens, action);
  e.preventDefault();
});

delay=true;
window.setTimeout(function(){delay=false;}, 3000);
$(document).keydown(function (evenement){
  if(evenement.which == 39){ // Fleche droite
    var sens = "droite";
    var action = $("body").attr("class");
    detectionDeOuf(sens, action);
  }
  
  if(evenement.which == 37){ // Fleche gauche
    var sens = "gauche";
    var action = $("body").attr("class");
    detectionDeOuf(sens, action);
  }
  evenement.preventDefault();
});


$(window).mousewheel(function(event, delta) {
  if (delta > 0) {
    var sens = "gauche";
    var action = $("body").attr("class");
    detectionDeOuf(sens, action);
  } else {
    var sens = "droite";
    var action = $("body").attr("class");
    detectionDeOuf(sens, action);
  }
  event.preventDefault();
});

function detectionDeOuf(sens, action) {

  if(sens == "droite" && action == "home devant" && !delay){
    delay=true;
    homeToProfile();
    window.setTimeout(function(){delay=false;}, 2000);
  }

  if(sens == "gauche" && action.indexOf("profile") == 0 && !delay){
    delay=true;
    profileToHome();
    window.setTimeout(function(){delay=false;}, 2000);
  }

  if(sens == "droite" && action.indexOf("profile") == 0 && !delay){
    delay=true;
    profileToSavoirFaire();
    window.setTimeout(function(){delay=false;}, 2000);
  }

  if(sens == "gauche" && action == "savoir_faire devant" && !delay){
    delay=true;
    savoirFaireToProfile();
    window.setTimeout(function(){delay=false;}, 2500);
  }

  if(sens == "droite" && action == "savoir_faire devant" && !delay){
    delay=true;
    SavoirFaireToEducation();
    window.setTimeout(function(){delay=false;}, 3500);
  }

  if(sens == "gauche" && action == "education" && !delay){
    delay=true;
    EducationToSavoirFaire();
    window.setTimeout(function(){delay=false;}, 3500);
  }

  if(sens == "droite" && action == "education" && !delay){
    delay=true;
    EducationToRealisations();
    window.setTimeout(function(){delay=false;}, 3500);
  }

  if(sens == "gauche" && action.indexOf("realisations vinpaidone") == 0 && !delay){
    delay=true;
    RealisationsToEducation();
    window.setTimeout(function(){delay=false;}, 3500);
  }
}



  
  
  
// --------------------------------------
//               Chargement
// --------------------------------------  
  
$(window).load(function() {
  window.setTimeout(function(){
    home();

    var right = Snap("#right");
    var rightCircle = right.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var rightArrow = right.path("M16.07,14.475 c-1.638-1.551-2.66-2.467-4.15-4.07c-1.491-1.603,0.559-4.789,2.953-2.713c2.953,2.474,7.022,6.305,7.022,6.305s2.154,1.597,0,3.672 c-2.154,2.074-5.263,5.026-6.704,6.623c-1.44,1.596-5.107,0.319-3.271-2.474c4.479-4.7,4.479-4.7,4.479-4.7 S17.707,16.026,16.07,14.475z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    var bottom = Snap("#bottom");
    var bottomCircle = bottom.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var bottomArrow = bottom.path("M17.526,15.937 c1.551-1.638,2.467-2.661,4.07-4.151c1.603-1.491,4.788,0.559,2.713,2.953c-2.474,2.954-6.305,7.023-6.305,7.023 s-1.596,2.154-3.671,0c-2.074-2.154-5.026-5.263-6.623-6.704c-1.596-1.441-0.319-5.108,2.474-3.272c4.7,4.479,4.7,4.479,4.7,4.479 S15.976,17.573,17.526,15.937z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    var left = Snap("#left");
    var leftCircle = left.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var leftArrow = left.path("M16.063,17.524 c1.638,1.551,2.661,2.467,4.151,4.07c1.491,1.603-0.559,4.788-2.953,2.713c-2.954-2.474-7.023-6.305-7.023-6.305 s-2.154-1.596,0-3.671c2.154-2.074,5.263-5.026,6.704-6.623c1.441-1.596,5.108-0.319,3.272,2.474c-4.479,4.7-4.479,4.7-4.479,4.7 S14.426,15.974,16.063,17.524z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    var top = Snap("#top");
    var topCircle = top.circle("50%", "50%", 0).attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "3"
    });
    var topArrow = top.path("M14.476,16.062 c-1.551,1.639-2.467,2.661-4.07,4.151c-1.603,1.491-4.788-0.559-2.713-2.953c2.474-2.954,6.305-7.023,6.305-7.023 s1.596-2.154,3.671,0c2.074,2.154,5.026,5.263,6.623,6.704c1.596,1.441,0.319,5.108-2.474,3.272c-4.7-4.479-4.7-4.479-4.7-4.479 S16.026,14.425,14.476,16.062z").attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: "2"
    });

    rightCircle.animate({
      r: 15
    }, 500, mina.easeinout,  function() {
      bottomCircle.animate({
        r: 15
      }, 500, mina.easeinout,  function() {
        leftCircle.animate({
          r: 15
        }, 500, mina.easeinout,  function() {
          topCircle.animate({
            r: 15
          }, 500, mina.easeinout);
        });
      });
    });

    window.setTimeout(function(){
      $("#right").attr("class", "nav done enable");
    }, 500);
    window.setTimeout(function(){
      $("#bottom").attr("class", "nav done");
    }, 1000);
    window.setTimeout(function(){
      $("#left").attr("class", "nav done");
    }, 1500);
    window.setTimeout(function(){
      $("#top").attr("class", "nav done");
    }, 2000);
  }, 1000);
})
// --------------------------------------
//               Home
// --------------------------------------  
  
function home () {
  
var t1 = Snap("#home_animation");
var homeCircle1 = t1.circle("30%", "50%", 0);
var homeCircle2 = t1.circle("60%", "45%", 0);
var homeCircle3 = t1.circle("70%", "55%", 0);
var homeCircle4 = t1.circle("53%", "52%", 0);
var homeCircle5 = t1.circle("43%", "51%", 0);

window.setTimeout(function(){animate()}, 1000);
function animate() {
  homeCircle1.attr({
    opacity: 1,
    r: 0
  })
  homeCircle2.attr({
    opacity: 1,
    r: 0
  })
  homeCircle3.attr({
    opacity: 1,
    r: 0
  })
  homeCircle4.attr({
    opacity: 1,
    r: 0
  })
  homeCircle5.attr({
    opacity: 1,
    r: 0
  })
  window.setTimeout(function(){
    homeCircle1.attr({
      fill: "none",
      stroke: "#e8e8e0",
      strokeWidth: 4
    });
    homeCircle1.animate({
      r: 50
    }, 300, mina.easeout, function() {
      homeCircle1.animate({
        r: 55,
        opacity: 0
      }, 100, function() {


      homeCircle2.attr({
        fill: "none",
        stroke: "#e8e8e0",
        strokeWidth: 4
      });
      homeCircle2.animate({
        r: 60
      }, 300, mina.easeout, function() {
        homeCircle2.animate({
          r: 75,
          opacity: 0
        }, 100, function () {




          homeCircle3.attr({
            fill: "none",
            stroke: "#e8e8e0",
            strokeWidth: 4
          });
          homeCircle3.animate({
            r: 30
          }, 300, function() {
            homeCircle3.animate({
              r: 45,
              opacity: 0
            }, 100, function() {





              homeCircle4.attr({
                fill: "none",
                stroke: "#e8e8e0",
                strokeWidth: 4
              });
              homeCircle4.animate({
                r: 40
              }, 400, function() {
                homeCircle4.animate({
                  r: 55,
                  opacity: 0
                }, 100, function() {






                  window.setTimeout(function(){
                    homeCircle5.attr({
                      fill: "none",
                      stroke: "#e8e8e0",
                      strokeWidth: 4
                    });
                    homeCircle5.animate({
                      r: 20
                    }, 300, function() {
                      homeCircle5.animate({
                        r: 35,
                        opacity: 0
                      }, 100, function(){animate()})
                    });
                  }, 1000);
                })
              });

            })
          });

        })
      });

      })
    });
  }, 2000);
}


} // FIN home()
  

function homeToProfile() {
  var width = $(window).width();
  var t2 = Snap("#home_to_profile");
  var homeToProfileCircle1 = t2.circle("50%", "50%", 0).attr({
    fill: "none",
    stroke: "#e8e8e0",
    strokeWidth: 150
  });
  var homeToProfileCircle2 = t2.circle("50%", "50%", 0).attr({
    fill: "none",
    stroke: "#e8e8e0",
    strokeWidth: 150
  });
  var homeToProfileCircle3 = t2.circle("50%", "50%", 0).attr({
    fill: "#e8e8e0"
  });
  homeToProfileCircle1.animate({
    r: width
  }, 600, mina.easeout);
  window.setTimeout(function(){
    homeToProfileCircle2.animate({
      r: width
    }, 600, mina.easeout);
  }, 100);
  window.setTimeout(function(){
    homeToProfileCircle3.animate({
      r: width
    }, 600, mina.easeout);
    window.setTimeout(function(){
      $("nav").attr("id", "profile_nav");
      $("#left, #top").attr("class", "nav done enable");
    }, 200);
    profile()
  }, 200);
}// FIN homeToProfile()

  

  

  
// --------------------------------------
//                Profile
// --------------------------------------
  
  
  
function profileToHome() {
  var width = $(window).width();
  var PtHSnap = Snap("#profile_to_home");
  var profileToHomeCircle = PtHSnap.circle("50%", "50%", width).attr({
    fill: "none",
    stroke: "#353d48",
    strokeWidth: width
  });
  $("nav").attr("id", "");
  $("#left, #top, #bottom").attr("class", "nav done")
  profileToHomeCircle.animate({
    r: width/2
  }, 700, mina.easout, function() {
    $("body").removeClass().addClass("home devant");
    $("#profile").removeClass();
    $("html").removeClass();
    PtHSnap.clear();
    var exp = Snap("#experimenter");
    exp.clear();
    var profile = Snap("#profile_img");
    profile.clear();
    $(".sub_profile.experimenter .svg").removeClass("fait");
    window.setTimeout(function(){
      $("#home").addClass("done");
      home();
    }, 700);
  });
}// FIN profileToHome()
  
  
  
  
  
function profile() {
  $("body").removeClass("devant");
  var profile = Snap("#profile_img");
  var tete = profile.circle(60, 60, 0).attr({
    fill: "#F9D87C"
  });
  var masque = profile.rect(60, 0, 60, 120).attr({
    fill: "#EECF75"
  });
  var tete2 = profile.circle(60, 60, 0).attr({
    fill: "#EECF75",
    mask: masque
  });
  var oeil = profile.circle(40, 45, 0).attr({
    fill: "#675744"
  });
  var oeil2 = profile.circle(80, 45, 0).attr({
    fill: "#675744"
  });  
  var sourir = profile.path("M101.975,61.02c0,18.922-18.645,34.261-41.645,34.261 c-23,0-41.645-15.339-41.645-34.261").attr({
    fill: "none",
    strokeWidth: "8",
    stroke: "#fff",
    strokeDasharray: "18 18",
  });var lenB = sourir.getTotalLength();
  sourir.attr({
    "stroke-dasharray": lenB + " " + lenB,
    "stroke-dashoffset": lenB
  });
  tete.animate({
    r: 60
  }, 700, mina.easeinout);
  tete2.animate({
    r: 60
  }, 700, mina.easeinout, function() {
    $("body").removeClass().addClass("profile");
    $("#home").removeClass();
    $("#savoirfaire_to_profile").attr("class", "");
    var t2 = Snap("#home_to_profile");
    t2.clear();
    var t1 = Snap("#home_animation");
    t1.clear();
    sourir.animate({
      "stroke-dashoffset": 0
    }, 350, function() {
      oeil.animate({
        r: 6
      }, 1200, mina.elastic);
      oeil2.animate({
        r: 6
      }, 1200, mina.elastic);
      window.setTimeout(function(){
        $("#profile").addClass("done");
      }, 300);
      window.setTimeout(function(){
        $("#profile").addClass("done2");
        profileKey();
      }, 400);
    });
  });

}// FIN profile()    
function profileKey() {

$("#top").click(function(e) {
  var sens = "haut";
  var action = $("body").attr("class");
  detectionProfileDeOuf(sens, action);
  e.preventDefault();
});
$("#bottom").click(function(e) {
  var sens = "bas";
  var action = $("body").attr("class");
  detectionProfileDeOuf(sens, action);
  e.preventDefault();
});

$(document).keydown(function (evenement){
  if(evenement.which == 38){ // Fleche haut
    var sens = "haut";
    var action = $("body").attr("class");
    detectionProfileDeOuf(sens, action);
  }
  
  if(evenement.which == 40){ // Fleche bas
    var sens = "bas";
    var action = $("body").attr("class");
    detectionProfileDeOuf(sens, action);
  }
  evenement.preventDefault();
});

} // FIN profileKey()


function detectionProfileDeOuf(sens, action) {

  if(sens == "haut" && action == "profile" && !delay){
    delay=true;
    $("#profile").addClass("out");
    $("html").addClass("profileimgout");
    $("body").addClass("ecouter");
    $("#bottom").attr("class", "nav done enable");
    window.setTimeout(function(){delay=false;}, 1500);
  }

  if(sens == "haut" && action == "profile ecouter" && !delay){
    delay=true;
    $("body").removeClass("ecouter").addClass("experimenter");
    window.setTimeout(function(){
      expAnim()
    }, 1800);
    if (!$(".sub_profile.experimenter .svg").hasClass("fait")) {
      var exp = Snap("#experimenter");
      var fiole = exp.path("M124.837,115.088c0-0.459-0.009-0.914-0.022-1.369c-0.003-0.098-0.006-0.195-0.01-0.293 c-0.017-0.452-0.038-0.904-0.067-1.354c-0.003-0.035-0.006-0.069-0.008-0.104c-0.031-0.444-0.068-0.887-0.112-1.328 c-0.005-0.051-0.009-0.102-0.015-0.152c-0.048-0.477-0.104-0.95-0.167-1.421c-0.001-0.01-0.002-0.02-0.004-0.029 c-2.341-17.411-14.642-31.658-30.972-36.8c-0.04-0.013-0.081-0.025-0.121-0.038c-0.446-0.139-0.896-0.273-1.349-0.398 c-0.017-0.004-0.033-0.009-0.051-0.014c-0.243-0.067-0.486-0.133-0.73-0.196V5.614h2.803c1.547,0,2.803-1.257,2.803-2.807 C96.814,1.256,95.559,0,94.012,0H65.988c-1.548,0-2.802,1.256-2.802,2.807c0,1.55,1.254,2.807,2.802,2.807h2.802v65.977 c-0.248,0.064-0.495,0.131-0.741,0.199c-0.012,0.003-0.023,0.006-0.035,0.01c-0.457,0.126-0.909,0.261-1.36,0.401 c-0.036,0.011-0.071,0.022-0.107,0.034c-16.791,5.283-29.323,20.192-31.152,38.27c-0.003,0.034-0.007,0.069-0.01,0.104 c-0.046,0.463-0.085,0.929-0.117,1.396c-0.001,0.019-0.003,0.036-0.004,0.054c-0.031,0.46-0.053,0.922-0.07,1.385 c-0.003,0.085-0.005,0.17-0.008,0.255c-0.014,0.462-0.024,0.924-0.024,1.39c0,6.544,1.399,12.761,3.911,18.369 c6.266,13.984,19.465,24.177,35.216,26.182C76.159,159.877,78.065,160,80,160c1.935,0,3.84-0.123,5.711-0.361 C107.777,156.829,124.837,137.954,124.837,115.088z M48.3,146.841l0.001-0.002l0.001,0.002h0c0.088,0.088,0.173,0.178,0.262,0.266 L48.3,146.841z M80,157.193c-23.178,0-42.035-18.889-42.035-42.105c0-8.174,2.344-15.902,6.465-22.456h71.141 c4.121,6.554,6.465,14.282,6.465,22.456C122.035,138.305,103.178,157.193,80,157.193z").attr({
        fill: "#fff"
      });
      var fond_fiole_masque1 = exp.path("M115.57,92.632H44.43c-4.121,6.554-6.465,14.282-6.465,22.456c0,23.217,18.856,42.105,42.035,42.105 s42.036-18.889,42.036-42.105C122.035,106.914,119.691,99.186,115.57,92.632z").attr({
        fill: "#999"
      });
      var fond_fiole_masque2 = exp.path("M115.57,92.632H44.43c-4.121,6.554-6.465,14.282-6.465,22.456c0,23.217,18.856,42.105,42.035,42.105 s42.036-18.889,42.036-42.105C122.035,106.914,119.691,99.186,115.57,92.632z").attr({
        fill: "#999"
      });
      var fond_fiole_masque3 = exp.path("M115.57,92.632H44.43c-4.121,6.554-6.465,14.282-6.465,22.456c0,23.217,18.856,42.105,42.035,42.105 s42.036-18.889,42.036-42.105C122.035,106.914,119.691,99.186,115.57,92.632z").attr({
        fill: "#999"
      });
      var fond_fiole = exp.path("M115.57,92.632H44.43c-4.121,6.554-6.465,14.282-6.465,22.456c0,23.217,18.856,42.105,42.035,42.105 s42.036-18.889,42.036-42.105C122.035,106.914,119.691,99.186,115.57,92.632z").attr({
        fill: "#6EBEC4"
      }); 
      var bulle1 = exp.circle(70, 160, 3).attr({
        fill: "#fff",
        mask: fond_fiole_masque1
      });
      var bulle2 = exp.circle(85, 190, 0).attr({
        fill: "#fff",
        mask: fond_fiole_masque2
      });
      var bulle3 = exp.circle(85, 190, 0).attr({
        fill: "#fff",
        mask: fond_fiole_masque3
      });
      $(".sub_profile.experimenter .svg").addClass("fait");
    }
    function expAnim() {
      bulle1.attr({r: 0,cy: 160})
      bulle2.attr({r: 0,cy: 190})
      bulle3.attr({r: 0,cy: 190})
      bulle1.animate({
        r: 10,
        cy: 70
      }, 4000, mina.easeout);
      bulle2.animate({
        r: 8,
        cy: 70
      }, 4400, mina.easeout);
      window.setTimeout(function(){
        bulle3.animate({
          r: 7,
          cy: 70
        }, 5000, mina.easeout, function(){
          window.setTimeout(function(){
            expAnim()
          }, 4000);
        });
      }, 3300); 
    }
    window.setTimeout(function(){delay=false;}, 1500);
  }

  if(sens == "haut" && action == "profile experimenter" && !delay){
    delay=true;
    $("body").removeClass("experimenter").addClass("voyager");
    window.setTimeout(function(){delay=false;}, 1500);
  }



  if(sens == "bas" && action == "profile ecouter" && !delay){
    delay=true;
    $("#bottom").attr("class", "nav done");
    $("html").removeClass("profileimgout");
    $("body").removeClass("ecouter");
    window.setTimeout(function(){
      $("#profile").removeClass("out");
    }, 500);
    window.setTimeout(function(){delay=false;}, 1500);
  }

  if(sens == "bas" && action == "profile experimenter" && !delay){
    delay=true;
    $("body").removeClass("experimenter").addClass("ecouter");
    window.setTimeout(function(){delay=false;}, 1500);
  }

  if(sens == "bas" && action == "profile voyager" && !delay){
    delay=true;
    $("body").removeClass("voyager").addClass("experimenter");
    window.setTimeout(function(){delay=false;}, 1500);
  }
}
  
  

  
  
  
  

  
  
  
  
  
  
  
  
  
  

  
  
    
// --------------------------------------
//            Savoir Faire
// --------------------------------------
  
function savoirFaireToProfile () {
  var taille = ($(window).width()+$(window).height())/2;
  var SFtP = Snap("#savoirfaire_to_profile");
  $("#savoirfaire_to_profile").attr("class", "here");
  var savoirFaireToProfileCircle = SFtP.circle("50%", "50%", 0).attr({
    fill: "#e8e8e0",
  });
  savoirFaireToProfileCircle.animate({
    r: taille
  }, 1100, mina.easeinout, function() {
    SFtP.clear();
    var c1 = Snap("#big_circle");
    c1.clear();
    var PtSFSnap = Snap("#profile_to_savoirfaire");
    PtSFSnap.clear();
    SFtP.clear();
    Snap("#all").clear();
    Snap("#front").clear();
    Snap("#back").clear();
    Snap("#os").clear();
    Snap("#logiciels").clear();
  });
  window.setTimeout(function(){
    $("body").removeClass().addClass("profile");
    profile();
  }, 900);
  window.setTimeout(function(){
    $("nav").attr("id", "profile_nav");
    $("#top").attr("class", "nav done enable");
  }, 600);
} // FIN profileToSavoirFaire()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
function profileToSavoirFaire() {
  
  var PtSFSnap = Snap("#profile_to_savoirfaire");
  var cx= $(window).width()/2,
      cy= $(window).height()/2,
      width= $(window).width(),
      r= width/2;
  var profileToSavoirfaireCircle = PtSFSnap.path("M "+cx+" "+cy+" m "+ (-r) +", 0 a "+r+","+r+" 0 1,0 "+ r*2 +",0 a "+r+","+r+" 0 1,0 "+ (-r*2) +",0").attr({
    fill: "none",
    strokeWidth: width,
    stroke: "#ea9a9d",
    strokeDasharray: "18 18",
  });
  var taille = profileToSavoirfaireCircle.getTotalLength();
  profileToSavoirfaireCircle.attr({
    strokeDasharray: taille + " " + taille,
    strokeDashoffset: taille
  });
  profileToSavoirfaireCircle.animate({
    strokeDashoffset: 0
  }, 1400, mina.easeinout);
  profileToSavoirfaireCircle.animate( { transform: "r -90, "+cx+", "+cy}, 1 );
  profileToSavoirfaireCircle.animate( { transform: "r -180, "+cx+", "+cy}, 1400, function() {
    $("body").removeClass().addClass("savoir_faire devant");
    $("#profile").removeClass();
    $("html").removeClass();
    var profile = Snap("#profile_img");
    profile.clear();
    var exp = Snap("#experimenter");
    exp.clear();
    $(".sub_profile.experimenter .svg").removeClass("fait");
  });
  window.setTimeout(function(){
    $("nav").attr("id", "savoir_faire_nav");
    $("#bottom, #top").attr("class", "nav done");
  }, 800);
  savoir_faire(1200);

} // FIN profileToSavoirFaire()







function savoir_faire(delay) {  
  var c1 = Snap("#big_circle");
  var bigCircle = c1.circle(300, 300, 0).attr({
    cx: "50%",
    cy: "50%",
    fill: "#ea9a9d",
    stroke: "#e8e8e0",
    strokeWidth: 7
  });
  var bigCircle2 = c1.circle(300, 300, 0).attr({
    cx: "50%",
    cy: "50%",
    fill: "#e8e8e0"
  });

  bigCircle.animate({r: 110}, 2300, mina.elastic);
  bigCircle2.animate({r: 92}, 800, mina.easeout);

  //  Lines & Circles
  var all = Snap("#all");
  var front = Snap("#front");
  var back = Snap("#back");
  var os = Snap("#os");
  var logiciels = Snap("#logiciels");

  function fonction_de_fous_pour_creer_des_ronds(name, taille, x, y, numero) {
    var all = Snap("#all");
    var height0 = $(window).height()/2;
    var width0 = $(window).width()/2;
    var height = $(window).height();
    var width = $(window).width();
    var xp = (x*width)/100;
    var yp = (y*height)/100;
    var x = x + "%";
    var y = y + "%";
    var y1 = "50%"; 
    var x1 = "50%";
    var color = "#e8e8e0"
    if (numero) {var color="#e7c7c2"}
    if (numero == 2) {
      var all = front;
      var height0 = (30*height)/100;
      var width0 = (25*width)/100;
      var y1 = "30%";
      var x1 = "25%";
    } else if (numero == 3) {
      var all = back;
      var height0 = (25*height)/100;
      var width0 = (72*width)/100;
      var y1 = "25%"; 
      var x1 = "72%";
    } else if (numero == 4) {
      var all = os;
      var height0 = (75*height)/100;
      var width0 = (30*width)/100;
      var y1 = "75%"; 
      var x1 = "30%";
    } else if (numero == 5) {
      var all = logiciels;
      var height0 = (70*height)/100;
      var width0 = (75*width)/100;
      var y1 = "70%"; 
      var x1 = "75%";
    }

    var real = name;
    var nameline = name + "Line";
    var namesmall = name + "Small";  

    var nameline = all.line(width0, height0, width0, height0);
    nameline.attr({
      "stroke-linecap": "round",
      stroke: color,
      strokeWidth: 7
    });

    nameline.animate({
        x2: xp,
        y2: yp
    }, 300, mina.easeout, function () {
      var name = all.circle(300, 300, 0);
      name.attr({
        cx: x,
        cy: y,
        fill: "#ea9a9d",
        stroke: color,
        strokeWidth: 7
      });
      name.animate({r: taille}, 700, mina.elastic);

      var namesmall = all.circle(300, 300, 0);
      namesmall.attr({
        cx: x,
        cy: y,
        fill: "#e8e8e0"
      });
      namesmall.animate({r: taille*0.8}, 300, mina.easeout);
      if (!numero) {
        window.setTimeout(function(){
          moveYourBody()
        }, 1000);
        function moveYourBody() {
        var temps= Math.random()*4000+2000;
          window.setTimeout(function(){
            name.animate({r: taille*1.08}, 200, mina.easeout, function() {
              name.animate({r: taille}, 200, mina.easeout, function() {
                moveYourBody()
              });
            });
          }, temps);
        }
      }
      nameline.attr({
        x1: x1,
        y1: y1,
        x2: x,
        y2: y
      });

    });

  }



  //Animations
  window.setTimeout(function(){

    window.setTimeout(function(){
      fonction_de_fous_pour_creer_des_ronds("FrontEnd", 85, 25, 30);
    }, 300);

    window.setTimeout(function(){
      fonction_de_fous_pour_creer_des_ronds("BackEnd", 53, 72, 25);
    }, 900);

    window.setTimeout(function(){
      fonction_de_fous_pour_creer_des_ronds("OS", 60, 30, 75);
    }, 700);

    window.setTimeout(function(){
      fonction_de_fous_pour_creer_des_ronds("Logiciels", 70, 75, 70);
    }, 400);

  }, delay);





  //Animation Hover
  window.setTimeout(function(){
    front_end=true;
    $(".front-end").hover(FrontEnd_Hover, function(){return false;});

    function FrontEnd_Hover() {
      if (front_end) {
        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("css", 70, 34, 15, 2);
        });

        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("html", 60, 8, 22, 2);
        }, 100);

        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("js", 45, 16, 42, 2);
        }, 200);
      }
      front_end=false;
    }




    back_end=true;
    $(".back-end").hover(BackEnd_Hover, function(){return false;});

    function BackEnd_Hover() {
      if (back_end) {
        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("php", 37, 88, 32, 3);
        });

        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("cms", 42, 79, 13, 3);
        }, 100);
      }
      back_end=false;
    }

    Os=true;
    $(".os").hover(Os_Hover, function(){return false;});

    function Os_Hover() {
      if (Os) {
        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("Mac", 65, 32, 54, 4);
        });

        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("Windows", 45, 13, 86, 4);
        }, 100);

        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("IOS", 55, 19, 68, 4);
        }, 100);

        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("Android", 35, 38, 89, 4);
        }, 100);
      }
      Os=false;
    }

    Logiciels=true;
    $(".logiciels").hover(Logiciels_Hover, function(){return false;});

    function Logiciels_Hover() {
      if (Logiciels) {
        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("Photoshop", 65, 72, 50, 5);
        });

        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("Illustrator", 60, 89, 66, 5);
        }, 100);

        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("After_effect", 65, 83, 86, 5);
        }, 100);

        window.setTimeout(function(){
          fonction_de_fous_pour_creer_des_ronds("C4D", 48, 62, 79, 5);
        }, 100);
      }
      Logiciels=false;
    }
  }, 2100);

  
} // FIN savoir_faire()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// --------------------------------------
//            Education
// --------------------------------------
  
function SavoirFaireToEducation() {
  var width = $(window).width();
  $("#savoirfaire_to_education").attr("class", "here");
  var SFtE = Snap("#savoirfaire_to_education");
  var educationRect1 = SFtE.rect(0, 0, 0, "100%").attr({
    fill: "#b6e7e6"
  });
  var educationRect2 = SFtE.rect(0, 0, 0, "100%").attr({
    fill: "#b0dedb"
  });
  var educationRect3 = SFtE.rect(0, 0, 0, "100%").attr({
    fill: "#a2cecd"
  });
  
  educationRect1.animate({
    width: width
  }, 1500, mina.easeinout)
  
  
  window.setTimeout(function(){
    educationRect2.animate({
      width: width
    }, 1100, mina.easeinout)
  }, 400);
  window.setTimeout(function(){
    educationRect3.animate({
      width: width
    }, 800, mina.easeinout, function() {
      var c1 = Snap("#big_circle");
      c1.clear();
      var PtSFSnap = Snap("#profile_to_savoirfaire");
      PtSFSnap.clear();
      Snap("#all").clear();
      Snap("#front").clear();
      Snap("#back").clear();
      Snap("#os").clear();
      Snap("#logiciels").clear();
      $("body").removeClass().addClass("education");
      SFtE.clear();
      education()
    })
  }, 700);
  window.setTimeout(function(){
    $("nav").attr("id", "education_nav");
  }, 100);
}
  
  
  
  
function education() {
  var education = Snap("#education_img");
  var CbasMask = education.circle(80, 0, 50).attr({
    fill: "#fff",
  });
  var Cbas = education.path("M114.311,101.769V75.173H45.725c0,0,0,23.007,0,26.595C44.177,114.858,109.691,121.193,114.311,101.769z").attr({
    fill: "#252C3C",
    mask: CbasMask
  });

  var Cbas2Mask = education.circle(80, 0, 50).attr({
    fill: "#fff",
  });
  var Cbas2 = education.path("M114.311,96.601V70.005H45.725c0,0,0,23.007,0,26.595C44.177,109.691,109.691,116.025,114.311,96.601z").attr({
    fill: "#2F4351",
    mask: Cbas2Mask
  });

  var ChautMask = education.circle(0, 0, 0).attr({
    fill: "#fff",
  });
  var Chaut = education.polygon("0,66.054 80.019,94.632 160.036,66.054 80.019,37.476").attr({
    fill: "#242c3c",
    mask: ChautMask
  });

  var CribbonMask = education.circle(40, 40, 0).attr({
    fill: "#fff",
  });
  var Cribbon = education.polygon("117.21,81.35 76.975,66.979 82.69,64.938 122.925,79.308").attr({
    fill: "#E36A5D",
    mask: CribbonMask
  });
  var Cribbon2Mask = education.circle(40, 40, 0).attr({
    fill: "#fff",
  });
  var Cribbon2 = education.polygon("117.21,81.35 117.21,117.422 120.067,113.542 122.925,115.381 122.925,79.308").attr({
    fill: "#E36A5D",
    mask: Cribbon2Mask
  });

  var ChautBoule = education.circle(80, 66, 0).attr({
    fill: "#2F4351",
  });

  Cbas2Mask.animate({
    r: 150
  }, 700);
  CbasMask.animate({
    r: 150
  }, 700);
  
  window.setTimeout(function(){
    ChautMask.animate({
      r: 200
    }, 1100, function() {
      ChautBoule.animate({
        r: 3,
      }, 100);
      CribbonMask.animate({
        r: 200
      }, 1800);
      Cribbon2Mask.animate({
        r: 200
      }, 1800);
      window.setTimeout(function(){
        $("#education").addClass("done");
      }, 1100);
      window.setTimeout(function(){
        $("#education").addClass("done2");
      }, 1200);
    });
  }, 200);
} // FIN education()
  
  
  
  
  
  
  
  
  
  
function EducationToSavoirFaire() {
  var width = $(window).width();
  var SFtE = Snap("#savoirfaire_to_education");
  $("#savoirfaire_to_education").attr("class", "here");
  var educationRect1 = SFtE.rect(width, 0, "100%", "100%").attr({
    fill: "#f1b8bb"
  });
  var educationRect2 = SFtE.rect(width, 0, "100%", "100%").attr({
    fill: "#efa7aa"
  });
  var educationRect3 = SFtE.rect(width, 0, "100%", "100%").attr({
    fill: "#ea9a9d"
  });
  
  educationRect1.animate({
    x: 0
  }, 1500, mina.easeinout)
  
  
  window.setTimeout(function(){
    educationRect2.animate({
      x: 0
    }, 1100, mina.easeinout)
  }, 400);
  window.setTimeout(function(){
    educationRect3.animate({
      x: 0
    }, 800, mina.easeinout, function() {
      $("body").removeClass().addClass("savoir_faire devant");
      SFtE.clear();
      savoir_faire(300);
      $("#education").removeClass();
      var education = Snap("#education_img");
      education.clear();
      $("#savoirfaire_to_education").attr("class", "");
    })
  }, 700);
  window.setTimeout(function(){
    $("nav").attr("id", "savoir_faire_nav");
  }, 1200);
}
  



































// --------------------------------------
//            Réalisations
// --------------------------------------


function EducationToRealisations() {
  $("#savoirfaire_to_education").attr("class", "");
  var width = $(window).width();
  var EtR = Snap("200%", "600%");
  EtR.attr({id: "education_to_realisations"});
  var realisationRect1 = EtR.rect(0, 0, 30, width*4).attr({
    fill: "#e8e8e0"
  });
  var realisationRect2 = EtR.rect(200, 0, 120, width*4).attr({
    fill: "#e8e8e0"
  });
  var realisationRect3 = EtR.rect(450, 0, 300, width*4).attr({
    fill: "#e8e8e0"
  });
  var realisationRect4 = EtR.rect(700, 0, width*2, width*4).attr({
    fill: "#e8e8e0"
  });

  window.setTimeout(function(){
    $("#education_to_realisations").attr("class", "done");
  }, 10);
  window.setTimeout(function(){
    $("body").removeClass().addClass("realisations");
    realisations()
    $("#education").removeClass();
    $("#education_to_realisations").attr("class", "");
    EtR.clear();
    var education = Snap("#education_img");
    education.clear();
  }, 1000);
  window.setTimeout(function(){
    $("nav").attr("id", "realisation_nav");
    $("#top").attr("class", "nav done enable");
    $("#right").attr("class", "nav done");
  }, 700);
}







function RealisationsToEducation() {
  var width = $(window).width();
  var RtE = Snap("#education_to_realisations");
  var realisationRect1 = RtE.rect(0, 0, 30, width*4).attr({
    fill: "#a2cecd"
  });
  var realisationRect2 = RtE.rect(200, 0, 120, width*4).attr({
    fill: "#a2cecd"
  });
  var realisationRect3 = RtE.rect(450, 0, 300, width*4).attr({
    fill: "#a2cecd"
  });
  var realisationRect4 = RtE.rect(700, 0, width*2, width*4).attr({
    fill: "#a2cecd"
  });

  window.setTimeout(function(){
    $("#education_to_realisations").attr("class", "done");
  }, 10);
  window.setTimeout(function(){
    $("body").removeClass().addClass("education");
    education()
    $(".site_imac.vinpai").removeClass("done");
    $("#macbook").removeClass();
    $("#education_to_realisations").attr("class", "");
    $("#education_to_realisations").remove();
    var imac = Snap("#imac");
    imac.clear();
  }, 1000);
  window.setTimeout(function(){
    $("nav").attr("id", "education_nav");
    $("#top, #bottom").attr("class", "nav done");
	$("#right").attr("class", "nav done enable");
  }, 700);
}
















function realisations () {
  var imac = Snap("#imac");
  var imacHautMask = imac.rect(180, 0, 0, 300).attr({
    fill: "#fff"
  });
  var imacHaut = imac.path("M347.797,0H12.198C5.563,0,0,4.879,0,11.514V216h360V11.514C360,4.879,354.434,0,347.797,0z").attr({
    fill: "#454D59",
    mask: imacHautMask
  });
  var imacMilieuMask = imac.rect(180, 0, 0, 300).attr({
    fill: "#fff"
  });
  var imacMilieu = imac.path("M0,243.484C0,250.12,5.563,256,12.198,256H134.4h91.195h122.201c6.637,0,12.203-5.88,12.203-12.516V216H0 V243.484z").attr({
    fill: "#E1E2E4",
    mask: imacMilieuMask
  });


  var imacBasMask = imac.rect(0, 255, 360, 0).attr({
    fill: "#fff"
  });
  var imacBas = imac.polygon("133.481,266 226.195,266 226.302,266 225.596,256 134.4,256").attr({
    fill: "#CACCCE",
    mask: imacBasMask
  });
  var imacBas2Mask = imac.rect(0, 255, 360, 0).attr({
    fill: "#fff"
  });
  var imacBas2 = imac.path("M133.375,266l-1.483,21.699c0,0,0.213,4.892-5.721,5.527c-11.656,3.179-11.656,2.773-11.656,2.773h130.754 l-11.231-2.626c0,0-5.722,0.3-5.934-5.845c-1.908-21.828-1.908-21.529-1.908-21.529h-92.714H133.375z").attr({
    fill: "#E1E2E4",
    mask: imacBas2Mask
  });
  var imacBas3 = imac.rect(115, 296, 130, 0).attr({
    fill: "#ECEDEE"
  });

  window.setTimeout(function(){
    $(".site_imac.vinpai").addClass("done");
  }, 10);
  imacHautMask.animate({
    width: 360,
    x: 0
  }, 1100);
  imacMilieuMask.animate({
    width: 360,
    x: 0
  }, 1100, function () {
    imacBasMask.animate({
      height: 100
    }, 1100, mina.easeinout);
    imacBas2Mask.animate({
      height: 100
    }, 1100, mina.easeinout);
    window.setTimeout(function(){
      imacBas3.animate({
        height: 4
      }, 100, mina.easeinout);
    }, 500);
  });
    
  window.setTimeout(function(){
    $("#macbook").addClass("done");
    $("body").addClass("vinpaidone");
    $("body").addClass("vinpai");
  }, 2100);
  window.setTimeout(function(){
    realisationsKey();
  }, 3000);
}




function realisationsKey() {

  $("#top").click(function(e) {
    var sens = "haut";
    var action = $("body").attr("class");
    detectionRealisationDeOuf(sens, action);
    e.preventDefault();
  });
  $("#bottom").click(function(e) {
    var sens = "bas";
    var action = $("body").attr("class");
    detectionRealisationDeOuf(sens, action);
    e.preventDefault();
  });

  $(document).keydown(function (evenement){
    if(evenement.which == 38){ // Fleche haut
      var sens = "haut";
      var action = $("body").attr("class");
      detectionRealisationDeOuf(sens, action);
    }
    
    if(evenement.which == 40){ // Fleche bas
      var sens = "bas";
      var action = $("body").attr("class");
      detectionRealisationDeOuf(sens, action);
    }
    evenement.preventDefault();
  });
} // FIN realisationsKey()


function detectionRealisationDeOuf(sens, action) {

  if(sens == "haut" && action == "realisations vinpaidone vinpai" && !delay){
    delay=true;
    $("#bottom").attr("class", "nav done enable");
    $("body").removeClass("vinpai").addClass("v1");
    window.setTimeout(function(){delay=false;}, 500);
  }

  if(sens == "haut" && action == "realisations vinpaidone v1" && !delay){
    delay=true;
    $("#top").attr("class", "nav done");
    $("body").removeClass("v1").addClass("herbak");
    window.setTimeout(function(){delay=false;}, 500);
  }



  if(sens == "bas" && action == "realisations vinpaidone v1" && !delay){
    delay=true;
    $("#bottom").attr("class", "nav done");
    $("body").removeClass("v1").addClass("vinpai");
    window.setTimeout(function(){delay=false;}, 500);
  }

  if(sens == "bas" && action == "realisations vinpaidone herbak" && !delay){
    delay=true;
    $("#top").attr("class", "nav done enable");
    $("body").removeClass("herbak").addClass("v1");
    window.setTimeout(function(){delay=false;}, 500);
  }
}

});

