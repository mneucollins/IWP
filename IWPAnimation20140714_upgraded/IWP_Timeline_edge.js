/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_1965',
                            display: 'block',
                            type: 'image',
                            rect: ['-23px', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1965.png",'0px','0px']
                        },
                        {
                            id: '_1966',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1966.png",'0px','0px']
                        },
                        {
                            id: '_1967',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1967.png",'0px','0px']
                        },
                        {
                            id: '_1968',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1968.png",'0px','0px']
                        },
                        {
                            id: '_1969',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1969.png",'0px','0px']
                        },
                        {
                            id: '_1970',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1970.png",'0px','0px']
                        },
                        {
                            id: '_1971',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1971.png",'0px','0px']
                        },
                        {
                            id: '_1972',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1972.png",'0px','0px']
                        },
                        {
                            id: '_1973',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1973.png",'0px','0px']
                        },
                        {
                            id: '_1974',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1974.png",'0px','0px']
                        },
                        {
                            id: '_1975',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1975.png",'0px','0px']
                        },
                        {
                            id: '_1976',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1976.png",'0px','0px']
                        },
                        {
                            id: '_1977',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1977.png",'0px','0px']
                        },
                        {
                            id: '_1978',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1978.png",'0px','0px']
                        },
                        {
                            id: '_1979',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1979.png",'0px','0px']
                        },
                        {
                            id: '_1980',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1980.png",'0px','0px']
                        },
                        {
                            id: '_1981',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1981.png",'0px','0px']
                        },
                        {
                            id: '_1982',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1982.png",'0px','0px']
                        },
                        {
                            id: '_1983',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1983.png",'0px','0px']
                        },
                        {
                            id: '_1984',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1984.png",'0px','0px']
                        },
                        {
                            id: '_1985',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1985.png",'0px','0px']
                        },
                        {
                            id: '_1986',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1986.png",'0px','0px']
                        },
                        {
                            id: '_1987',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1987.png",'0px','0px']
                        },
                        {
                            id: '_1988',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1988.png",'0px','0px']
                        },
                        {
                            id: '_1989',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1989.png",'0px','0px']
                        },
                        {
                            id: '_1990',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1990.png",'0px','0px']
                        },
                        {
                            id: '_1991',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1991.png",'0px','0px']
                        },
                        {
                            id: '_1992',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1992.png",'0px','0px']
                        },
                        {
                            id: '_1993',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1993.png",'0px','0px']
                        },
                        {
                            id: '_1994',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1994.png",'0px','0px']
                        },
                        {
                            id: '_1995',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1995.png",'0px','0px']
                        },
                        {
                            id: '_1996',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1996.png",'0px','0px']
                        },
                        {
                            id: '_1997',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1997.png",'0px','0px']
                        },
                        {
                            id: '_1998',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1998.png",'0px','0px']
                        },
                        {
                            id: '_1999',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"1999.png",'0px','0px']
                        },
                        {
                            id: '_2000',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2000.png",'0px','0px']
                        },
                        {
                            id: '_2001',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2001.png",'0px','0px']
                        },
                        {
                            id: '_2002',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2002.png",'0px','0px']
                        },
                        {
                            id: '_2003',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2003.png",'0px','0px']
                        },
                        {
                            id: '_2004',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2004.png",'0px','0px']
                        },
                        {
                            id: '_2005',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2005.png",'0px','0px']
                        },
                        {
                            id: '_2006',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2006.png",'0px','0px']
                        },
                        {
                            id: '_2007',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2007.png",'0px','0px']
                        },
                        {
                            id: '_2008',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2008.png",'0px','0px']
                        },
                        {
                            id: '_2009',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2009.png",'0px','0px']
                        },
                        {
                            id: '_2010',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2010.png",'0px','0px']
                        },
                        {
                            id: '_2011',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2011.png",'0px','0px']
                        },
                        {
                            id: '_2012',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2012.png",'0px','0px']
                        },
                        {
                            id: '_2013',
                            display: 'none',
                            type: 'image',
                            rect: ['-37', '12', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2013.png",'0px','0px']
                        },
                        {
                            id: '_2014',
                            display: 'none',
                            type: 'image',
                            rect: ['-37px', '12px', '1346px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"2014.png",'0px','0px']
                        },
                        {
                            id: 'legend-v2',
                            type: 'image',
                            rect: ['43', '301', '113px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"legend-v2.png",'0px','0px']
                        },
                        {
                            id: 'ResYear',
                            type: 'text',
                            rect: ['1055', '14', 'auto', '55', 'auto', 'auto'],
                            text: "1966",
                            align: "right",
                            font: ['Verdana, Geneva, sans-serif', [3.5, "em"], "rgba(139,127,90,1.00)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'iwp-main-logo',
                            type: 'image',
                            rect: ['16', '14', '258', '78', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"iwp-main-logo.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1967',
                            type: 'image',
                            rect: ['200', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1968',
                            type: 'image',
                            rect: ['217px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1969',
                            type: 'image',
                            rect: ['233', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1970',
                            type: 'image',
                            rect: ['250', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1971',
                            type: 'image',
                            rect: ['267', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1972',
                            type: 'image',
                            rect: ['283px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1973',
                            type: 'image',
                            rect: ['300px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1974',
                            type: 'image',
                            rect: ['317px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1975',
                            type: 'image',
                            rect: ['333px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1976',
                            type: 'image',
                            rect: ['350px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1977',
                            type: 'image',
                            rect: ['367px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1978',
                            type: 'image',
                            rect: ['383px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1979',
                            type: 'image',
                            rect: ['400px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1980',
                            type: 'image',
                            rect: ['417px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1981',
                            type: 'image',
                            rect: ['434px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1982',
                            type: 'image',
                            rect: ['450px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1983',
                            type: 'image',
                            rect: ['467px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1984',
                            type: 'image',
                            rect: ['484px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1985',
                            type: 'image',
                            rect: ['500px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1986',
                            type: 'image',
                            rect: ['517px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1987',
                            type: 'image',
                            rect: ['534px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1988',
                            type: 'image',
                            rect: ['550px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1989',
                            type: 'image',
                            rect: ['567px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1990',
                            type: 'image',
                            rect: ['584px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1991',
                            type: 'image',
                            rect: ['600px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1992',
                            type: 'image',
                            rect: ['617px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1993',
                            type: 'image',
                            rect: ['634px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1994',
                            type: 'image',
                            rect: ['650px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1995',
                            type: 'image',
                            rect: ['667px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1996',
                            type: 'image',
                            rect: ['684px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1997',
                            type: 'image',
                            rect: ['700px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1998',
                            type: 'image',
                            rect: ['717px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_1999',
                            type: 'image',
                            rect: ['734px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2000',
                            type: 'image',
                            rect: ['750px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2001',
                            type: 'image',
                            rect: ['767px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2002',
                            type: 'image',
                            rect: ['784px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2003',
                            type: 'image',
                            rect: ['801px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2004',
                            type: 'image',
                            rect: ['817px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2005',
                            type: 'image',
                            rect: ['834px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2006',
                            type: 'image',
                            rect: ['851px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2007',
                            type: 'image',
                            rect: ['867px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2008',
                            type: 'image',
                            rect: ['884px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2009',
                            type: 'image',
                            rect: ['901px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2010',
                            type: 'image',
                            rect: ['917px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2011',
                            type: 'image',
                            rect: ['934px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2012',
                            type: 'image',
                            rect: ['951px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2013',
                            type: 'image',
                            rect: ['967px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'time_marker_2014',
                            type: 'image',
                            rect: ['984px', '597', '11px', '32px', 'auto', 'auto'],
                            opacity: 0.5,
                            fill: ["rgba(0,0,0,0)",im+"time_marker.png",'0px','0px']
                        },
                        {
                            id: 'ControlBackground',
                            type: 'rect',
                            rect: ['46', '592', '84', '42', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,1)",[270,[['rgba(197,197,197,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [1,"rgb(130, 13, 12)","solid"]
                        },
                        {
                            id: 'SearchMapButton',
                            type: 'rect',
                            rect: ['1067', '592', '10.6%', '6.5%', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,1)",[270,[['rgba(197,197,197,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [1,"rgba(130,13,12,1.00)","solid"]
                        },
                        {
                            id: 'GotoSearchMap',
                            type: 'text',
                            rect: ['1078', '595', '113', 'auto', 'auto', 'auto'],
                            text: "Go To <br>Search Map",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [1, "em"], "rgba(0,0,0,1)", "700", "none", "", "break-word", ""],
                            textStyle: ["0em", "0em", "", "0%"]
                        },
                        {
                            id: 'end',
                            type: 'image',
                            rect: ['1003', '597', '32px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"end.png",'0px','0px']
                        },
                        {
                            id: 'begin',
                            type: 'image',
                            rect: ['160', '597', '32px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"begin.png",'0px','0px']
                        },
                        {
                            id: 'pause',
                            type: 'image',
                            rect: ['88', '597', '32px', '32px', 'auto', 'auto'],
                            title: 'Pause',
                            fill: ["rgba(0,0,0,0)",im+"pause.png",'0px','0px']
                        },
                        {
                            id: 'play',
                            type: 'image',
                            rect: ['52', '597', '32px', '32px', 'auto', 'auto'],
                            title: 'Play',
                            fill: ["rgba(0,0,0,0)",im+"play.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1230', '650', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 25000,
                    autoPlay: true,
                    labels: {
                        "Start": 250,
                        "1966": 750,
                        "1967": 1000,
                        "1968": 1500,
                        "1969": 2000,
                        "1970": 2500,
                        "1971": 3000,
                        "1972": 3500,
                        "1973": 4000,
                        "1974": 4500,
                        "1975": 5000,
                        "1976": 5500,
                        "1977": 6000,
                        "1978": 6500,
                        "1979": 7000,
                        "1980": 7500,
                        "1981": 8000,
                        "1982": 8500,
                        "1983": 9000,
                        "1984": 9500,
                        "1985": 10000,
                        "1986": 10500,
                        "1987": 11000,
                        "1988": 11500,
                        "1989": 12000,
                        "1990": 12500,
                        "1991": 13000,
                        "1992": 13500,
                        "1993": 14000,
                        "1994": 14500,
                        "1995": 15000,
                        "1996": 15500,
                        "1997": 16000,
                        "1998": 16500,
                        "1999": 17000,
                        "2000": 17500,
                        "2001": 18000,
                        "2002": 18500,
                        "2003": 19000,
                        "2004": 19500,
                        "2005": 20000,
                        "2006": 20500,
                        "2007": 21000,
                        "2008": 21500,
                        "2009": 22000,
                        "2010": 22500,
                        "2011": 23000,
                        "2012": 23355,
                        "2013": 24000,
                        "2014": 24500,
                        "End": 25000
                    },
                    data: [
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1969}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${_1969}",
                            'none',
                            'block'
                        ],
                        [
                            "eid58",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${_1969}",
                            'block',
                            'none'
                        ],
                        [
                            "eid254",
                            "left",
                            16750,
                            0,
                            "linear",
                            "${_1998}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid426",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2004}",
                            '817px',
                            '817px'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1980}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${_1980}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${_1980}",
                            'block',
                            'none'
                        ],
                        [
                            "eid440",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2001}",
                            '767px',
                            '767px'
                        ],
                        [
                            "eid34",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1986}",
                            'none',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${_1986}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${_1986}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1991}",
                            'none',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${_1991}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${_1991}",
                            'block',
                            'none'
                        ],
                        [
                            "eid242",
                            "left",
                            13750,
                            0,
                            "linear",
                            "${_1992}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1979}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${_1979}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${_1979}",
                            'block',
                            'none'
                        ],
                        [
                            "eid286",
                            "top",
                            24250,
                            0,
                            "linear",
                            "${_2013}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid30",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1990}",
                            'none',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${_1990}",
                            'none',
                            'block'
                        ],
                        [
                            "eid100",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${_1990}",
                            'block',
                            'none'
                        ],
                        [
                            "eid269",
                            "top",
                            20750,
                            0,
                            "linear",
                            "${_2006}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid181",
                            "top",
                            0,
                            0,
                            "linear",
                            "${_1965}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid285",
                            "left",
                            23750,
                            0,
                            "linear",
                            "${_2012}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid425",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1987}",
                            '534px',
                            '534px'
                        ],
                        [
                            "eid271",
                            "top",
                            21250,
                            0,
                            "linear",
                            "${_2007}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1992}",
                            'none',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${_1992}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${_1992}",
                            'block',
                            'none'
                        ],
                        [
                            "eid333",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1999}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid383",
                            "opacity",
                            17000,
                            0,
                            "easeInQuad",
                            "${time_marker_1999}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid319",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2013}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid397",
                            "opacity",
                            24000,
                            0,
                            "easeInQuad",
                            "${time_marker_2013}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid229",
                            "top",
                            10750,
                            0,
                            "linear",
                            "${_1986}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid218",
                            "left",
                            7750,
                            0,
                            "linear",
                            "${_1980}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid196",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${_1969}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid343",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1989}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid373",
                            "opacity",
                            12000,
                            0,
                            "easeInQuad",
                            "${time_marker_1989}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid268",
                            "left",
                            20250,
                            0,
                            "linear",
                            "${_2005}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid414",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1995}",
                            '667px',
                            '667px'
                        ],
                        [
                            "eid225",
                            "top",
                            9750,
                            0,
                            "linear",
                            "${_1984}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1984}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${_1984}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${_1984}",
                            'block',
                            'none'
                        ],
                        [
                            "eid197",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${_1970}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid345",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1987}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid371",
                            "opacity",
                            11000,
                            0,
                            "easeInQuad",
                            "${time_marker_1987}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid330",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2002}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid386",
                            "opacity",
                            18500,
                            0,
                            "easeInQuad",
                            "${time_marker_2002}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2009}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            22000,
                            0,
                            "linear",
                            "${_2009}",
                            'none',
                            'block'
                        ],
                        [
                            "eid138",
                            "display",
                            22500,
                            0,
                            "linear",
                            "${_2009}",
                            'block',
                            'none'
                        ],
                        [
                            "eid278",
                            "left",
                            22750,
                            0,
                            "linear",
                            "${_2010}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid279",
                            "top",
                            23250,
                            0,
                            "linear",
                            "${_2011}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid324",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2008}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid392",
                            "opacity",
                            21500,
                            0,
                            "easeInQuad",
                            "${time_marker_2008}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid248",
                            "left",
                            15250,
                            0,
                            "linear",
                            "${_1995}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid434",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2000}",
                            '750px',
                            '750px'
                        ],
                        [
                            "eid249",
                            "top",
                            15750,
                            0,
                            "linear",
                            "${_1996}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid313",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1975}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid359",
                            "opacity",
                            5000,
                            0,
                            "easeInQuad",
                            "${time_marker_1975}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid403",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2014}",
                            'none',
                            'none'
                        ],
                        [
                            "eid402",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${_2014}",
                            'none',
                            'block'
                        ],
                        [
                            "eid404",
                            "display",
                            25000,
                            0,
                            "linear",
                            "${_2014}",
                            'block',
                            'block'
                        ],
                        [
                            "eid439",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1976}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid277",
                            "top",
                            22750,
                            0,
                            "linear",
                            "${_2010}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid231",
                            "top",
                            11250,
                            0,
                            "linear",
                            "${_1987}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid456",
                            "left",
                            24000,
                            0,
                            "linear",
                            "${_2014}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid347",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1985}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid369",
                            "opacity",
                            10000,
                            0,
                            "easeInQuad",
                            "${time_marker_1985}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1978}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${_1978}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${_1978}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${_1969}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid445",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1990}",
                            '584px',
                            '584px'
                        ],
                        [
                            "eid246",
                            "left",
                            14750,
                            0,
                            "linear",
                            "${_1994}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid280",
                            "left",
                            23250,
                            0,
                            "linear",
                            "${_2011}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid346",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1986}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid370",
                            "opacity",
                            10500,
                            0,
                            "easeInQuad",
                            "${time_marker_1986}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid223",
                            "top",
                            9250,
                            0,
                            "linear",
                            "${_1983}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid236",
                            "left",
                            12250,
                            0,
                            "linear",
                            "${_1989}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid239",
                            "top",
                            13250,
                            0,
                            "linear",
                            "${_1991}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2011}",
                            'none',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${_2011}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            23500,
                            0,
                            "linear",
                            "${_2011}",
                            'block',
                            'none'
                        ],
                        [
                            "eid431",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2007}",
                            '867px',
                            '867px'
                        ],
                        [
                            "eid31",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1989}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${_1989}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            12500,
                            0,
                            "linear",
                            "${_1989}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${_1975}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid422",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1989}",
                            '567px',
                            '567px'
                        ],
                        [
                            "eid216",
                            "left",
                            7250,
                            0,
                            "linear",
                            "${_1979}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid310",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1978}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid362",
                            "opacity",
                            6500,
                            0,
                            "easeInQuad",
                            "${time_marker_1978}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid416",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1980}",
                            '417px',
                            '417px'
                        ],
                        [
                            "eid213",
                            "top",
                            6750,
                            0,
                            "linear",
                            "${_1978}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1970}",
                            'none',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${_1970}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${_1970}",
                            'block',
                            'none'
                        ],
                        [
                            "eid321",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2011}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid395",
                            "opacity",
                            23000,
                            0,
                            "easeInQuad",
                            "${time_marker_2011}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1966}",
                            'none',
                            'none'
                        ],
                        [
                            "eid455",
                            "display",
                            250,
                            0,
                            "linear",
                            "${_1966}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_1966}",
                            'block',
                            'none'
                        ],
                        [
                            "eid350",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1982}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid366",
                            "opacity",
                            8500,
                            0,
                            "easeInQuad",
                            "${time_marker_1982}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid21",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1999}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${_1999}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${_1999}",
                            'block',
                            'none'
                        ],
                        [
                            "eid328",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2004}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid388",
                            "opacity",
                            19500,
                            0,
                            "easeInQuad",
                            "${time_marker_2004}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid417",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1977}",
                            '367px',
                            '367px'
                        ],
                        [
                            "eid24",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1996}",
                            'none',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            15500,
                            0,
                            "linear",
                            "${_1996}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${_1996}",
                            'block',
                            'none'
                        ],
                        [
                            "eid332",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2000}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid384",
                            "opacity",
                            17500,
                            0,
                            "easeInQuad",
                            "${time_marker_2000}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid183",
                            "left",
                            750,
                            0,
                            "linear",
                            "${_1966}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid244",
                            "left",
                            14250,
                            0,
                            "linear",
                            "${_1993}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid329",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2003}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid387",
                            "opacity",
                            19000,
                            0,
                            "easeInQuad",
                            "${time_marker_2003}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid230",
                            "left",
                            10750,
                            0,
                            "linear",
                            "${_1986}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2010}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            22500,
                            0,
                            "linear",
                            "${_2010}",
                            'none',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${_2010}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "left",
                            3250,
                            0,
                            "linear",
                            "${_1971}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid341",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1991}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid375",
                            "opacity",
                            13000,
                            0,
                            "easeInQuad",
                            "${time_marker_1991}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1965}",
                            'block',
                            'block'
                        ],
                        [
                            "eid2",
                            "display",
                            25000,
                            0,
                            "linear",
                            "${_1965}",
                            'block',
                            'none'
                        ],
                        [
                            "eid311",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1977}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid361",
                            "opacity",
                            6000,
                            0,
                            "easeInQuad",
                            "${time_marker_1977}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid264",
                            "left",
                            19250,
                            0,
                            "linear",
                            "${_2003}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid203",
                            "top",
                            4250,
                            0,
                            "linear",
                            "${_1973}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid432",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1983}",
                            '467px',
                            '467px'
                        ],
                        [
                            "eid187",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${_1968}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid418",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1998}",
                            '717px',
                            '717px'
                        ],
                        [
                            "eid327",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2005}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid389",
                            "opacity",
                            20000,
                            0,
                            "easeInQuad",
                            "${time_marker_2005}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2002}",
                            'none',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            18500,
                            0,
                            "linear",
                            "${_2002}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${_2002}",
                            'block',
                            'none'
                        ],
                        [
                            "eid349",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1983}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid367",
                            "opacity",
                            9000,
                            0,
                            "easeInQuad",
                            "${time_marker_1983}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid259",
                            "top",
                            18250,
                            0,
                            "linear",
                            "${_2001}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid257",
                            "top",
                            17750,
                            0,
                            "linear",
                            "${_2000}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1976}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${_1976}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${_1976}",
                            'block',
                            'none'
                        ],
                        [
                            "eid210",
                            "left",
                            5750,
                            0,
                            "linear",
                            "${_1976}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid209",
                            "top",
                            5750,
                            0,
                            "linear",
                            "${_1976}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid251",
                            "top",
                            16250,
                            0,
                            "linear",
                            "${_1997}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2012}",
                            'none',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            23500,
                            0,
                            "linear",
                            "${_2012}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${_2012}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1998}",
                            'none',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${_1998}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${_1998}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2004}",
                            'none',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            19500,
                            0,
                            "linear",
                            "${_2004}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${_2004}",
                            'block',
                            'none'
                        ],
                        [
                            "eid442",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1997}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid260",
                            "left",
                            18250,
                            0,
                            "linear",
                            "${_2001}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid267",
                            "top",
                            20250,
                            0,
                            "linear",
                            "${_2005}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid276",
                            "left",
                            22250,
                            0,
                            "linear",
                            "${_2009}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1973}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${_1973}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${_1973}",
                            'block',
                            'none'
                        ],
                        [
                            "eid307",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1970}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid354",
                            "opacity",
                            2500,
                            0,
                            "easeInQuad",
                            "${time_marker_1970}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1995}",
                            'none',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${_1995}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            15500,
                            0,
                            "linear",
                            "${_1995}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1994}",
                            'none',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${_1994}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${_1994}",
                            'block',
                            'none'
                        ],
                        [
                            "eid428",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2009}",
                            '901px',
                            '901px'
                        ],
                        [
                            "eid270",
                            "left",
                            20750,
                            0,
                            "linear",
                            "${_2006}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid420",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1975}",
                            '333px',
                            '333px'
                        ],
                        [
                            "eid447",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1981}",
                            '434px',
                            '434px'
                        ],
                        [
                            "eid237",
                            "top",
                            12750,
                            0,
                            "linear",
                            "${_1990}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid198",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${_1970}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid219",
                            "top",
                            8250,
                            0,
                            "linear",
                            "${_1981}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid331",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2001}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid385",
                            "opacity",
                            18000,
                            0,
                            "easeInQuad",
                            "${time_marker_2001}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid336",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1996}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid380",
                            "opacity",
                            15500,
                            0,
                            "easeInQuad",
                            "${time_marker_1996}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid415",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1978}",
                            '383px',
                            '383px'
                        ],
                        [
                            "eid214",
                            "left",
                            6750,
                            0,
                            "linear",
                            "${_1978}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid220",
                            "left",
                            8250,
                            0,
                            "linear",
                            "${_1981}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid243",
                            "top",
                            14250,
                            0,
                            "linear",
                            "${_1993}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid221",
                            "top",
                            8750,
                            0,
                            "linear",
                            "${_1982}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid433",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2002}",
                            '784px',
                            '784px'
                        ],
                        [
                            "eid411",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2003}",
                            '801px',
                            '801px'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1981}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${_1981}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${_1981}",
                            'block',
                            'none'
                        ],
                        [
                            "eid441",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1985}",
                            '500px',
                            '500px'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1983}",
                            'none',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${_1983}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${_1983}",
                            'block',
                            'none'
                        ],
                        [
                            "eid273",
                            "top",
                            21750,
                            0,
                            "linear",
                            "${_2008}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid275",
                            "top",
                            22250,
                            0,
                            "linear",
                            "${_2009}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2005}",
                            'none',
                            'none'
                        ],
                        [
                            "eid129",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${_2005}",
                            'none',
                            'block'
                        ],
                        [
                            "eid130",
                            "display",
                            20500,
                            0,
                            "linear",
                            "${_2005}",
                            'block',
                            'none'
                        ],
                        [
                            "eid266",
                            "left",
                            19750,
                            0,
                            "linear",
                            "${_2004}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid262",
                            "left",
                            18750,
                            0,
                            "linear",
                            "${_2002}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid419",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2011}",
                            '934px',
                            '934px'
                        ],
                        [
                            "eid430",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2008}",
                            '884px',
                            '884px'
                        ],
                        [
                            "eid407",
                            "left",
                            25000,
                            0,
                            "linear",
                            "${time_marker_2014}",
                            '984px',
                            '984px'
                        ],
                        [
                            "eid232",
                            "left",
                            11250,
                            0,
                            "linear",
                            "${_1987}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid322",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2010}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid394",
                            "opacity",
                            22500,
                            0,
                            "easeInQuad",
                            "${time_marker_2010}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid314",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1974}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid358",
                            "opacity",
                            4500,
                            0,
                            "easeInQuad",
                            "${time_marker_1974}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid318",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1981}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid365",
                            "opacity",
                            8000,
                            0,
                            "easeInQuad",
                            "${time_marker_1981}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid265",
                            "top",
                            19750,
                            0,
                            "linear",
                            "${_2004}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid228",
                            "left",
                            10250,
                            0,
                            "linear",
                            "${_1985}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2001}",
                            'none',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            18000,
                            0,
                            "linear",
                            "${_2001}",
                            'none',
                            'block'
                        ],
                        [
                            "eid122",
                            "display",
                            18500,
                            0,
                            "linear",
                            "${_2001}",
                            'block',
                            'none'
                        ],
                        [
                            "eid204",
                            "left",
                            4250,
                            0,
                            "linear",
                            "${_1973}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid413",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1988}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid186",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${_1967}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid205",
                            "top",
                            4750,
                            0,
                            "linear",
                            "${_1974}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid339",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1993}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid377",
                            "opacity",
                            14000,
                            0,
                            "easeInQuad",
                            "${time_marker_1993}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid335",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1997}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid381",
                            "opacity",
                            16000,
                            0,
                            "easeInQuad",
                            "${time_marker_1997}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid423",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2010}",
                            '917px',
                            '917px'
                        ],
                        [
                            "eid296",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1967}",
                            '0.500000',
                            '0.500000'
                        ],
                        [
                            "eid352",
                            "opacity",
                            1000,
                            0,
                            "easeInQuad",
                            "${time_marker_1967}",
                            '0.500000',
                            '1'
                        ],
                        [
                            "eid338",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1994}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid378",
                            "opacity",
                            14500,
                            0,
                            "easeInQuad",
                            "${time_marker_1994}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid320",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2012}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid396",
                            "opacity",
                            23500,
                            0,
                            "easeInQuad",
                            "${time_marker_2012}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2007}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${_2007}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "display",
                            21500,
                            0,
                            "linear",
                            "${_2007}",
                            'block',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1993}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${_1993}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${_1993}",
                            'block',
                            'none'
                        ],
                        [
                            "eid253",
                            "top",
                            16750,
                            0,
                            "linear",
                            "${_1998}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid443",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1991}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid408",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2013}",
                            '967px',
                            '967px'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2008}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            21500,
                            0,
                            "linear",
                            "${_2008}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "display",
                            22000,
                            0,
                            "linear",
                            "${_2008}",
                            'block',
                            'none'
                        ],
                        [
                            "eid421",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1982}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid449",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1984}",
                            '484px',
                            '484px'
                        ],
                        [
                            "eid317",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1971}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid355",
                            "opacity",
                            3000,
                            0,
                            "easeInQuad",
                            "${time_marker_1971}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid448",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1973}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid435",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2006}",
                            '851px',
                            '851px'
                        ],
                        [
                            "eid326",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2006}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid390",
                            "opacity",
                            20500,
                            0,
                            "easeInQuad",
                            "${time_marker_2006}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid274",
                            "left",
                            21750,
                            0,
                            "linear",
                            "${_2008}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1988}",
                            'none',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${_1988}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            12000,
                            0,
                            "linear",
                            "${_1988}",
                            'block',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1997}",
                            'none',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${_1997}",
                            'none',
                            'block'
                        ],
                        [
                            "eid114",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${_1997}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "left",
                            4750,
                            0,
                            "linear",
                            "${_1974}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid201",
                            "top",
                            3750,
                            0,
                            "linear",
                            "${_1972}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1967}",
                            'none',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_1967}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${_1967}",
                            'block',
                            'none'
                        ],
                        [
                            "eid340",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1992}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid376",
                            "opacity",
                            13500,
                            0,
                            "easeInQuad",
                            "${time_marker_1992}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2006}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            20500,
                            0,
                            "linear",
                            "${_2006}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${_2006}",
                            'block',
                            'none'
                        ],
                        [
                            "eid348",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1984}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid368",
                            "opacity",
                            9500,
                            0,
                            "easeInQuad",
                            "${time_marker_1984}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid255",
                            "top",
                            17250,
                            0,
                            "linear",
                            "${_1999}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid234",
                            "left",
                            11750,
                            0,
                            "linear",
                            "${_1988}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid438",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2012}",
                            '951px',
                            '951px'
                        ],
                        [
                            "eid252",
                            "left",
                            16250,
                            0,
                            "linear",
                            "${_1997}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid450",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1979}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2000}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${_2000}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            18000,
                            0,
                            "linear",
                            "${_2000}",
                            'block',
                            'none'
                        ],
                        [
                            "eid444",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1996}",
                            '684px',
                            '684px'
                        ],
                        [
                            "eid312",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1976}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid360",
                            "opacity",
                            5500,
                            0,
                            "easeInQuad",
                            "${time_marker_1976}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid250",
                            "left",
                            15750,
                            0,
                            "linear",
                            "${_1996}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid226",
                            "left",
                            9750,
                            0,
                            "linear",
                            "${_1984}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid247",
                            "top",
                            15250,
                            0,
                            "linear",
                            "${_1995}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid272",
                            "left",
                            21250,
                            0,
                            "linear",
                            "${_2007}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid199",
                            "top",
                            3250,
                            0,
                            "linear",
                            "${_1971}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid208",
                            "left",
                            5250,
                            0,
                            "linear",
                            "${_1975}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid337",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1995}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid379",
                            "opacity",
                            15000,
                            0,
                            "easeInQuad",
                            "${time_marker_1995}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid245",
                            "top",
                            14750,
                            0,
                            "linear",
                            "${_1994}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid35",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1985}",
                            'none',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${_1985}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${_1985}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2003}",
                            'none',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${_2003}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            19500,
                            0,
                            "linear",
                            "${_2003}",
                            'block',
                            'none'
                        ],
                        [
                            "eid305",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1968}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid351",
                            "opacity",
                            1500,
                            0,
                            "easeInQuad",
                            "${time_marker_1968}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid309",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1979}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid363",
                            "opacity",
                            7000,
                            0,
                            "easeInQuad",
                            "${time_marker_1979}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid173",
                            "left",
                            0,
                            0,
                            "linear",
                            "${_1965}",
                            '-23px',
                            '-23px'
                        ],
                        [
                            "eid258",
                            "left",
                            17750,
                            0,
                            "linear",
                            "${_2000}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid215",
                            "top",
                            7250,
                            0,
                            "linear",
                            "${_1979}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid184",
                            "top",
                            750,
                            0,
                            "linear",
                            "${_1966}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1975}",
                            'none',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${_1975}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${_1975}",
                            'block',
                            'none'
                        ],
                        [
                            "eid202",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${_1972}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid238",
                            "left",
                            12750,
                            0,
                            "linear",
                            "${_1990}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid281",
                            "top",
                            23750,
                            0,
                            "linear",
                            "${_2012}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid316",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1972}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid356",
                            "opacity",
                            3500,
                            0,
                            "easeInQuad",
                            "${time_marker_1972}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1968}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${_1968}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${_1968}",
                            'block',
                            'none'
                        ],
                        [
                            "eid412",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1986}",
                            '517px',
                            '517px'
                        ],
                        [
                            "eid224",
                            "left",
                            9250,
                            0,
                            "linear",
                            "${_1983}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid436",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1992}",
                            '617px',
                            '617px'
                        ],
                        [
                            "eid227",
                            "top",
                            10250,
                            0,
                            "linear",
                            "${_1985}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1982}",
                            'none',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${_1982}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${_1982}",
                            'block',
                            'none'
                        ],
                        [
                            "eid344",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1988}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid372",
                            "opacity",
                            11500,
                            0,
                            "easeInQuad",
                            "${time_marker_1988}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid323",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2009}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid393",
                            "opacity",
                            22000,
                            0,
                            "easeInQuad",
                            "${time_marker_2009}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid452",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1999}",
                            '734px',
                            '734px'
                        ],
                        [
                            "eid185",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${_1967}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid342",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1990}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid374",
                            "opacity",
                            12500,
                            0,
                            "easeInQuad",
                            "${time_marker_1990}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid437",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_2005}",
                            '834px',
                            '834px'
                        ],
                        [
                            "eid222",
                            "left",
                            8750,
                            0,
                            "linear",
                            "${_1982}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid233",
                            "top",
                            11750,
                            0,
                            "linear",
                            "${_1988}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1972}",
                            'none',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${_1972}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${_1972}",
                            'block',
                            'none'
                        ],
                        [
                            "eid308",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1980}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid364",
                            "opacity",
                            7500,
                            0,
                            "easeInQuad",
                            "${time_marker_1980}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid33",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1987}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${_1987}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${_1987}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2013}",
                            'none',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${_2013}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            24500,
                            0,
                            "linear",
                            "${_2013}",
                            'block',
                            'none'
                        ],
                        [
                            "eid306",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1969}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid353",
                            "opacity",
                            2000,
                            0,
                            "easeInQuad",
                            "${time_marker_1969}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid325",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2007}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid391",
                            "opacity",
                            21000,
                            0,
                            "easeInQuad",
                            "${time_marker_2007}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid212",
                            "left",
                            6250,
                            0,
                            "linear",
                            "${_1977}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid263",
                            "top",
                            19250,
                            0,
                            "linear",
                            "${_2003}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid241",
                            "top",
                            13750,
                            0,
                            "linear",
                            "${_1992}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid217",
                            "top",
                            7750,
                            0,
                            "linear",
                            "${_1980}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid315",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1973}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid357",
                            "opacity",
                            4000,
                            0,
                            "easeInQuad",
                            "${time_marker_1973}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid451",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1968}",
                            '217px',
                            '217px'
                        ],
                        [
                            "eid211",
                            "top",
                            6250,
                            0,
                            "linear",
                            "${_1977}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid240",
                            "left",
                            13250,
                            0,
                            "linear",
                            "${_1991}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid446",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1994}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid235",
                            "top",
                            12250,
                            0,
                            "linear",
                            "${_1989}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid424",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1974}",
                            '317px',
                            '317px'
                        ],
                        [
                            "eid261",
                            "top",
                            18750,
                            0,
                            "linear",
                            "${_2002}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1977}",
                            'none',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${_1977}",
                            'none',
                            'block'
                        ],
                        [
                            "eid74",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${_1977}",
                            'block',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1974}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${_1974}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${_1974}",
                            'block',
                            'none'
                        ],
                        [
                            "eid287",
                            "left",
                            24250,
                            0,
                            "linear",
                            "${_2013}",
                            '-37px',
                            '-37px'
                        ],
                        [
                            "eid334",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_1998}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid382",
                            "opacity",
                            16500,
                            0,
                            "easeInQuad",
                            "${time_marker_1998}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid427",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1972}",
                            '283px',
                            '283px'
                        ],
                        [
                            "eid188",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${_1968}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1971}",
                            'none',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${_1971}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${_1971}",
                            'block',
                            'none'
                        ],
                        [
                            "eid405",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${time_marker_2014}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid406",
                            "opacity",
                            24500,
                            0,
                            "easeInQuad",
                            "${time_marker_2014}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid429",
                            "left",
                            24500,
                            0,
                            "linear",
                            "${time_marker_1993}",
                            '634px',
                            '634px'
                        ],
                        [
                            "eid256",
                            "left",
                            17250,
                            0,
                            "linear",
                            "${_1999}",
                            '-37px',
                            '-37px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("IWP_Timeline_edgeActions.js");
})("EDGE-1156550");
