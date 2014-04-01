/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Background',
                type: 'rect',
                rect: ['0px', '0px','960px','560px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)",[289,[['rgba(203,233,238,1.00)',0],['rgba(43,48,68,1.00)',100]]]],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Title',
                type: 'text',
                rect: ['285px', '20px','auto','auto','auto', 'auto'],
                text: "The International Writers Program",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 28, "rgba(246,216,123,1.00)", "500", "none", "normal"],
                textShadow: ["rgba(0,0,0,0.87)", 3, 3, 3]
            },
            {
                id: 'IWP2014_1',
                display: 'block',
                type: 'image',
                rect: ['-269px', '-75px','157.2%','143.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IWP2014_1.svg",'0%','0%','1509px','802px'],
                transform: [[],[],[],['0.75','0.75']]
            },
            {
                id: 'end',
                type: 'image',
                rect: ['837px', '520px','32px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dev_images/end.png",'0px','0px']
            },
            {
                id: 'play',
                type: 'image',
                rect: ['913px', '520px','32px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dev_images/play.png",'0px','0px']
            },
            {
                id: 'begin2',
                type: 'image',
                rect: ['24px', '520px','32px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dev_images/begin.png",'0px','0px']
            },
            {
                id: 'pause',
                type: 'image',
                rect: ['874px', '520px','32px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dev_images/pause.png",'0px','0px']
            },
            {
                id: 'YearMarker1966',
                type: 'ellipse',
                rect: ['60px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1967',
                type: 'ellipse',
                rect: ['76px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1968',
                type: 'ellipse',
                rect: ['92px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1969',
                type: 'ellipse',
                rect: ['108px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1970',
                type: 'ellipse',
                rect: ['124px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1971',
                type: 'ellipse',
                rect: ['140px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1972',
                type: 'ellipse',
                rect: ['156px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1973',
                type: 'ellipse',
                rect: ['172px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1974',
                type: 'ellipse',
                rect: ['188px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1975',
                type: 'ellipse',
                rect: ['204px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.49193343495935,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1976',
                type: 'ellipse',
                rect: ['219px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1977',
                type: 'ellipse',
                rect: ['235px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1978',
                type: 'ellipse',
                rect: ['251px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1979',
                type: 'ellipse',
                rect: ['267px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1980',
                type: 'ellipse',
                rect: ['283px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1981',
                type: 'ellipse',
                rect: ['299px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1982',
                type: 'ellipse',
                rect: ['315px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1983',
                type: 'ellipse',
                rect: ['331px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1984',
                type: 'ellipse',
                rect: ['347px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1985',
                type: 'ellipse',
                rect: ['363px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1986',
                type: 'ellipse',
                rect: ['379px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1987',
                type: 'ellipse',
                rect: ['395px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1988',
                type: 'ellipse',
                rect: ['411px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1989',
                type: 'ellipse',
                rect: ['427px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1990',
                type: 'ellipse',
                rect: ['443px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1991',
                type: 'ellipse',
                rect: ['459px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1992',
                type: 'ellipse',
                rect: ['475px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1993',
                type: 'ellipse',
                rect: ['491px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1994',
                type: 'ellipse',
                rect: ['507px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1995',
                type: 'ellipse',
                rect: ['522px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1996',
                type: 'ellipse',
                rect: ['538px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1997',
                type: 'ellipse',
                rect: ['554px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1998',
                type: 'ellipse',
                rect: ['570px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker1999',
                type: 'ellipse',
                rect: ['586px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2000',
                type: 'ellipse',
                rect: ['602px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2001',
                type: 'ellipse',
                rect: ['618px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2002',
                type: 'ellipse',
                rect: ['634px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2003',
                type: 'ellipse',
                rect: ['650px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2004',
                type: 'ellipse',
                rect: ['666px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2005',
                type: 'ellipse',
                rect: ['682px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2006',
                type: 'ellipse',
                rect: ['698px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2007',
                type: 'ellipse',
                rect: ['714px', '530px','12px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2008',
                type: 'ellipse',
                rect: ['729px', '530px','13px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2009',
                type: 'ellipse',
                rect: ['745px', '530px','13px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2010',
                type: 'ellipse',
                rect: ['761px', '530px','13px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2011',
                type: 'ellipse',
                rect: ['777px', '530px','13px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2012',
                type: 'ellipse',
                rect: ['793px', '530px','13px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'YearMarker2013',
                type: 'ellipse',
                rect: ['809px', '530px','13px','12px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                opacity: 0.35,
                fill: ["rgba(31,32,53,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_YearMarker1992}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '475px'],
                ["style", "width", '12px']
            ],
            "${_Title}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(246,216,123,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '285px'],
                ["style", "font-size", '28px'],
                ["style", "top", '20px'],
                ["style", "text-align", 'center'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.87)'],
                ["subproperty", "textShadow.offsetV", '3px']
            ],
            "${_YearMarker1978}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '251px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2011}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '777px'],
                ["style", "width", '13px']
            ],
            "${_YearMarker1974}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '188px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1971}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '140px'],
                ["style", "width", '12px']
            ],
            "${_IWP2014_1}": [
                ["style", "top", '-90px'],
                ["style", "height", '143.21%'],
                ["transform", "scaleY", '0.75'],
                ["style", "left", '-274px'],
                ["style", "display", 'block'],
                ["transform", "scaleX", '0.75'],
                ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "width", '157.19%']
            ],
            "${_YearMarker1995}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '522px'],
                ["style", "width", '12px']
            ],
            "${_pause}": [
                ["style", "left", '874px'],
                ["style", "top", '520px']
            ],
            "${_YearMarker2008}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '729px'],
                ["style", "width", '13px']
            ],
            "${_YearMarker1969}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '108px'],
                ["style", "width", '12px']
            ],
            "${_end}": [
                ["style", "top", '520px'],
                ["style", "left", '837px']
            ],
            "${_YearMarker1985}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '363px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1997}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '554px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1977}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '235px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1989}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '427px'],
                ["style", "width", '12px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '560px'],
                ["style", "width", '960px']
            ],
            "${_YearMarker2001}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '618px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2002}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '634px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1966}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '60px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1999}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '586px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2000}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '602px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1981}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '299px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1990}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '443px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1975}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '204px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2009}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '745px'],
                ["style", "width", '13px']
            ],
            "${_Text}": [
                ["style", "left", '481px'],
                ["style", "top", '47px']
            ],
            "${_YearMarker1973}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '172px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1976}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '219px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2006}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '698px'],
                ["style", "width", '12px']
            ],
            "${_begin2}": [
                ["style", "left", '24px'],
                ["style", "top", '520px']
            ],
            "${_YearMarker1987}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '395px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1983}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '331px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1968}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '92px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1994}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '507px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2012}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '793px'],
                ["style", "width", '13px']
            ],
            "${_YearMarker1972}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '156px'],
                ["style", "width", '12px']
            ],
            "${_play}": [
                ["style", "left", '913px'],
                ["style", "top", '520px']
            ],
            "${_YearMarker1986}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '379px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1993}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '491px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1988}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '411px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1967}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '76px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1970}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.36'],
                ["style", "left", '124px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2007}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '714px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1984}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '347px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2004}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '666px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1998}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '570px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1982}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '315px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2003}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '650px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1979}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '267px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2010}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '761px'],
                ["style", "width", '13px']
            ],
            "${_YearMarker1991}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.36'],
                ["style", "left", '459px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1980}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '283px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker1996}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '538px'],
                ["style", "width", '12px']
            ],
            "${_YearMarker2013}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '809px'],
                ["style", "width", '13px']
            ],
            "${_YearMarker2005}": [
                ["style", "top", '530px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.35'],
                ["style", "left", '682px'],
                ["style", "width", '12px']
            ],
            "${_Background}": [
                ["style", "top", '0px'],
                ["gradient", "background-image", [289,[['rgba(203,233,238,1.00)',0],['rgba(43,48,68,1.00)',100]]]],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: true,
            labels: {
                "1966": 500,
                "1967": 1000,
                "1968": 1500,
                "1969": 2000,
                "1970": 2500,
                "1971": 3000,
                "1972": 3500,
                "1973": 4000,
                "1974": 4500,
                "1975": 5000,
                "1976": 5500
            },
            timeline: [
                { id: "eid85", tween: [ "style", "${_YearMarker2011}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid64", tween: [ "style", "${_YearMarker1990}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid84", tween: [ "style", "${_YearMarker2010}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_IWP2014_1}", "background-position", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid62", tween: [ "style", "${_YearMarker1988}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid55", tween: [ "style", "${_YearMarker1981}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid80", tween: [ "style", "${_YearMarker2006}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid8", tween: [ "style", "${_IWP2014_1}", "left", '-274px', { fromValue: '-274px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid63", tween: [ "style", "${_YearMarker1989}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid60", tween: [ "style", "${_YearMarker1986}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid79", tween: [ "style", "${_YearMarker2005}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid70", tween: [ "style", "${_YearMarker1996}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid48", tween: [ "style", "${_YearMarker1974}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid38", tween: [ "style", "${_YearMarker1974}", "opacity", '1', { fromValue: '0.35'}], position: 4500, duration: 0, easing: "easeInQuad" },
                { id: "eid50", tween: [ "style", "${_YearMarker1976}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid88", tween: [ "style", "${_YearMarker1976}", "opacity", '1', { fromValue: '0.35'}], position: 5500, duration: 0, easing: "easeInQuad" },
                { id: "eid52", tween: [ "style", "${_YearMarker1978}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid87", tween: [ "style", "${_YearMarker2013}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid75", tween: [ "style", "${_YearMarker2001}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_IWP2014_1}", "top", '-90px', { fromValue: '-90px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid69", tween: [ "style", "${_YearMarker1995}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid57", tween: [ "style", "${_YearMarker1983}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid41", tween: [ "style", "${_YearMarker1967}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid31", tween: [ "style", "${_YearMarker1967}", "opacity", '1', { fromValue: '0.35'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid68", tween: [ "style", "${_YearMarker1994}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid49", tween: [ "style", "${_YearMarker1975}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid39", tween: [ "style", "${_YearMarker1975}", "opacity", '1', { fromValue: '0.35'}], position: 5000, duration: 0, easing: "easeInQuad" },
                { id: "eid65", tween: [ "style", "${_YearMarker1991}", "opacity", '0.36', { fromValue: '0.36'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid6", tween: [ "style", "${_IWP2014_1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid7", tween: [ "style", "${_IWP2014_1}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid76", tween: [ "style", "${_YearMarker2002}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid56", tween: [ "style", "${_YearMarker1982}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid58", tween: [ "style", "${_YearMarker1984}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid44", tween: [ "style", "${_YearMarker1970}", "opacity", '0.36', { fromValue: '0.36'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid34", tween: [ "style", "${_YearMarker1970}", "opacity", '1', { fromValue: '0.36'}], position: 2500, duration: 0, easing: "easeInQuad" },
                { id: "eid53", tween: [ "style", "${_YearMarker1979}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid61", tween: [ "style", "${_YearMarker1987}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid45", tween: [ "style", "${_YearMarker1971}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid35", tween: [ "style", "${_YearMarker1971}", "opacity", '1', { fromValue: '0.35'}], position: 3000, duration: 0, easing: "easeInQuad" },
                { id: "eid67", tween: [ "style", "${_YearMarker1993}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid72", tween: [ "style", "${_YearMarker1998}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid83", tween: [ "style", "${_YearMarker2009}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid74", tween: [ "style", "${_YearMarker2000}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid47", tween: [ "style", "${_YearMarker1973}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid37", tween: [ "style", "${_YearMarker1973}", "opacity", '1', { fromValue: '0.35'}], position: 4000, duration: 0, easing: "easeInQuad" },
                { id: "eid42", tween: [ "style", "${_YearMarker1968}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid32", tween: [ "style", "${_YearMarker1968}", "opacity", '1', { fromValue: '0.35'}], position: 1500, duration: 0, easing: "easeInQuad" },
                { id: "eid78", tween: [ "style", "${_YearMarker2004}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid51", tween: [ "style", "${_YearMarker1977}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid66", tween: [ "style", "${_YearMarker1992}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid73", tween: [ "style", "${_YearMarker1999}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid71", tween: [ "style", "${_YearMarker1997}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid82", tween: [ "style", "${_YearMarker2008}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid40", tween: [ "style", "${_YearMarker1966}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid30", tween: [ "style", "${_YearMarker1966}", "opacity", '1', { fromValue: '0.35'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid59", tween: [ "style", "${_YearMarker1985}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid43", tween: [ "style", "${_YearMarker1969}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid33", tween: [ "style", "${_YearMarker1969}", "opacity", '1', { fromValue: '0.35'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid46", tween: [ "style", "${_YearMarker1972}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid36", tween: [ "style", "${_YearMarker1972}", "opacity", '1', { fromValue: '0.35'}], position: 3500, duration: 0, easing: "easeInQuad" },
                { id: "eid81", tween: [ "style", "${_YearMarker2007}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid54", tween: [ "style", "${_YearMarker1980}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid86", tween: [ "style", "${_YearMarker2012}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid77", tween: [ "style", "${_YearMarker2003}", "opacity", '0.35', { fromValue: '0.35'}], position: 0, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"yearmarker": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'yearmarker',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(31,32,53,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_yearmarker}": [
                ["color", "background-color", 'rgba(31,32,53,1.00)'],
                ["style", "height", '12px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '12px'],
                ["style", "width", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"YearMarker": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    opacity: 0.5,
                    id: 'Ellipse3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(31,32,53,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '12px'],
                ["style", "width", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-73701011");
