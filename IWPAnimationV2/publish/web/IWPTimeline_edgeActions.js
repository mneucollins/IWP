
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_begin}","click",function(sym,e){sym.stop('1966');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_end}","click",function(sym,e){sym.stop('2013');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.$("YrText").html("1967");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.$("YrText").html("1968");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Marker1966'
(function(symbolName){})("Marker1966");
//Edge symbol end:'Marker1966'
})(jQuery,AdobeEdge,"EDGE-152640909");