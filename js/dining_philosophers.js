if(typeof goog == "undefined") document.write('<script src="js/dp/compiled/out/goog/base.js"></script>');
document.write('<script src="js/dp/compiled/out/cljs_deps.js"></script>');
document.write('<script>if (typeof goog != "undefined") { goog.require("dining_philosophers.core"); } else { console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?"); };</script>');
