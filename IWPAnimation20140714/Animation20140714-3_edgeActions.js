/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1967");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1968");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1969");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1970");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1971");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1972");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pause}", "click", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_begin}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1966");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_end}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2013");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-1156550");