
var Hero = (function(elem) {

  // SVG Injector Options
  var injectorOptions = {
    evalScripts: 'once',
    pngFallback: 'img/hero.png',
    each: function (svg) {
      // Callback after each SVG is injected
      console.log('SVG injected: ' + svg.getAttribute('id'));
    }
  };

  SVGInjector(elem, injectorOptions, function (totalSVGsInjected) {
    // Callback after all SVGs are injected
    console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
  });

})(document.getElementById('hero__svg'));

