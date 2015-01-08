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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1967");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1968");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1969");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1970");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1971");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1972");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${play}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pause}", "click", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${begin}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("Start");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${end}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("End");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1966");
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1973");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1974");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1975");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1976");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1977");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1978");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1979");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1980");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1981");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1982");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1983");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1984");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1985");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1986");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1987");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1988");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1989");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1990");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1991");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1992");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1993");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1994");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1995");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1996");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1997");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1998");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("1999");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2000");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2001");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2002");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2003");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2004");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2005");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2006");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2007");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2008");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2009");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2010");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2011");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2012");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2013");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1967}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1967");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1968}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1968");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1969}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1969");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1970}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1970");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1971}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1971");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1972}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1972");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1973}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1973");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1974}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1974");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1975}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1975");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1976}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1976");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1977}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1977");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1978}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1978");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1979}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1979");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1980}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1980");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1981}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1981");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1982}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1982");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1983}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1983");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1984}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1984");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1985}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1985");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1986}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1986");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1987}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1987");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1988}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1988");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1989}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1989");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1990}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1990");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1991}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1991");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1992}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1992");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1993}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1993");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1994}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1994");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1995}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1995");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1996}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1996");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1997}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1997");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1998}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1998");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_1999}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("1999");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2000}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2000");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2001}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2001");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2002}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2002");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2003}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2003");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2004}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2004");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2005}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2005");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2006}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2006");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2007}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2007");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2008}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2008");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2009}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2009");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2010}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2010");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2011}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2011");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2012}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2012");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2013}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2013");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${SearchMapButton}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://dsph-dev.provost.uiowa.edu/IWP/", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${GotoSearchMap}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://dsph-dev.provost.uiowa.edu/IWP/", "_self");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24500, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("ResYear").html("2014");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${time_marker_2014}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("2014");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1156550");