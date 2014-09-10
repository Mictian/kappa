{"filter":false,"title":"automataViewer.js","tooltip":"/demos/automataViewer/automataViewer.js","undoManager":{"mark":49,"position":49,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":65,"column":0},"end":{"row":65,"column":93}},"text":"        jQuery('#grammarShower').html(escapeHtml(grammar.toString()).replace(/\\n/g,'<br/>'));"},{"action":"removeLines","range":{"start":{"row":12,"column":0},"end":{"row":65,"column":0}},"nl":"\n","lines":["            automataGenerator = new k.parser.AutomataLALR1Generator({","                grammar: grammar","            }),","            automata = automataGenerator.generateAutomata({notValidate:true}),","            states = automata.states,","            indexedStates = {},","            graph = new Springy.Graph();","","        k.utils.obj.each(states, function(state)","        {","            indexedStates[state.getIdentity()] = new Springy.Node(state.getIdentity(), {","                lrState: state,","                //Each node text","                label: state.getIdentity() //getCondencedString() //toString()","            });","            graph.addNode(indexedStates[state.getIdentity()]);","","        });","","        k.utils.obj.each(states, function(state)","        {","            k.utils.obj.each(state.transitions, function(transition)","            {","                 graph.newEdge(indexedStates[state.getIdentity()], indexedStates[transition.state.getIdentity()], {","                     label: transition.symbol.toString(),","                     color: transition.state.isAcceptanceState ? '#FF0000' : undefined","                 });","            });","        });","","        //TODO FIX LOOP EDGES","","        jQuery('#springydemo').springy({","            graph: graph","        });","","        var entityMap = {","            \"&\": \"&amp;\",","            \"<\": \"&lt;\",","            \">\": \"&gt;\",","            '\"': '&quot;',","            \"'\": '&#39;',","            \"/\": '&#x2F;'","        };","","        function escapeHtml(string) {","            return String(string).replace(/[&<>\"'\\/]/g, function (s) {","                return entityMap[s];","            });","        }","","        // var gotoTable = automataGenerator.generateGOTOTable(automata);","        // var foo = gotoTable.toString();"]},{"action":"removeText","range":{"start":{"row":11,"column":7},"end":{"row":11,"column":62}},"text":" var grammar = sampleGrammars.arithmetic.g, //aPlusb.g,"},{"action":"removeText","range":{"start":{"row":11,"column":7},"end":{"row":12,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":1}},"text":"j"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":1},"end":{"row":1,"column":2}},"text":"Q"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":1},"end":{"row":1,"column":2}},"text":"Q"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":1}},"text":"j"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":1}},"text":"$"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":1},"end":{"row":1,"column":2}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":2},"end":{"row":1,"column":3}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":2},"end":{"row":1,"column":3}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":3},"end":{"row":1,"column":4}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":4},"end":{"row":1,"column":5}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":5},"end":{"row":1,"column":6}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":2},"end":{"row":1,"column":6}},"text":"docu"},{"action":"insertText","range":{"start":{"row":1,"column":2},"end":{"row":1,"column":10}},"text":"document"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":11},"end":{"row":1,"column":12}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":12},"end":{"row":1,"column":13}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":13},"end":{"row":1,"column":14}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":14},"end":{"row":1,"column":15}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":15},"end":{"row":1,"column":16}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":16},"end":{"row":1,"column":17}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":3},"end":{"row":15,"column":4}},"text":")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":15,"column":2},"end":{"row":15,"column":3}},"text":"("}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":7}},"text":"    });"},{"action":"removeLines","range":{"start":{"row":6,"column":0},"end":{"row":13,"column":0}},"nl":"\n","lines":["        baseUrl: '../../src'","    });","","    require(['./data/sampleGrammars', './parser/automataLALR1Generator'], function (sampleGrammars, k)","    {","       ",""]},{"action":"removeText","range":{"start":{"row":5,"column":3},"end":{"row":5,"column":20}},"text":" require.config({"},{"action":"removeText","range":{"start":{"row":5,"column":3},"end":{"row":6,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":5,"column":3},"end":{"row":5,"column":58}},"text":" var grammar = sampleGrammars.arithmetic.g, //aPlusb.g,"},{"action":"insertText","range":{"start":{"row":5,"column":58},"end":{"row":6,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":6,"column":0},"end":{"row":59,"column":0}},"lines":["            automataGenerator = new k.parser.AutomataLALR1Generator({","                grammar: grammar","            }),","            automata = automataGenerator.generateAutomata({notValidate:true}),","            states = automata.states,","            indexedStates = {},","            graph = new Springy.Graph();","","        k.utils.obj.each(states, function(state)","        {","            indexedStates[state.getIdentity()] = new Springy.Node(state.getIdentity(), {","                lrState: state,","                //Each node text","                label: state.getIdentity() //getCondencedString() //toString()","            });","            graph.addNode(indexedStates[state.getIdentity()]);","","        });","","        k.utils.obj.each(states, function(state)","        {","            k.utils.obj.each(state.transitions, function(transition)","            {","                 graph.newEdge(indexedStates[state.getIdentity()], indexedStates[transition.state.getIdentity()], {","                     label: transition.symbol.toString(),","                     color: transition.state.isAcceptanceState ? '#FF0000' : undefined","                 });","            });","        });","","        //TODO FIX LOOP EDGES","","        jQuery('#springydemo').springy({","            graph: graph","        });","","        var entityMap = {","            \"&\": \"&amp;\",","            \"<\": \"&lt;\",","            \">\": \"&gt;\",","            '\"': '&quot;',","            \"'\": '&#39;',","            \"/\": '&#x2F;'","        };","","        function escapeHtml(string) {","            return String(string).replace(/[&<>\"'\\/]/g, function (s) {","                return entityMap[s];","            });","        }","","        // var gotoTable = automataGenerator.generateGOTOTable(automata);","        // var foo = gotoTable.toString();"]},{"action":"insertText","range":{"start":{"row":59,"column":0},"end":{"row":59,"column":93}},"text":"        jQuery('#grammarShower').html(escapeHtml(grammar.toString()).replace(/\\n/g,'<br/>'));"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":18},"end":{"row":5,"column":19}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":19},"end":{"row":5,"column":20}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":20},"end":{"row":5,"column":21}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":21},"end":{"row":5,"column":22}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":22},"end":{"row":5,"column":23}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":23},"end":{"row":5,"column":24}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":24},"end":{"row":5,"column":25}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":25},"end":{"row":5,"column":26}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":26},"end":{"row":5,"column":27}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":27},"end":{"row":5,"column":28}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":5,"column":22},"end":{"row":5,"column":23}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":36},"end":{"row":6,"column":37}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":36},"end":{"row":6,"column":41}},"text":"kappa"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":14,"column":8},"end":{"row":14,"column":9}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":14,"column":8},"end":{"row":14,"column":13}},"text":"kappa"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":25,"column":8},"end":{"row":25,"column":9}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":25,"column":8},"end":{"row":25,"column":13}},"text":"kappa"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":12},"end":{"row":27,"column":13}},"text":"k"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":27,"column":12},"end":{"row":27,"column":17}},"text":"kappa"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":24}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":24},"end":{"row":0,"column":25}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":25},"end":{"row":0,"column":30}},"text":"kappa"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":30},"end":{"row":0,"column":31}},"text":":"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":31},"end":{"row":0,"column":32}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":32},"end":{"row":0,"column":33}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":33},"end":{"row":0,"column":34}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":34},"end":{"row":0,"column":35}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":35},"end":{"row":0,"column":36}},"text":"e"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":37},"end":{"row":10,"column":37},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1410313156498,"hash":"7d0b944deebecf205a86c74b8d8e495c9806e347"}