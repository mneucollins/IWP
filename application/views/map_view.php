<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>International Writing Program</title>
	<meta name="generator" content="BBEdit 10.5" />
	<script src="<?php echo base_url(); ?>resources/noUiSlider/nouislider.min.js"></script>
	<script src="<?php echo base_url(); ?>resources/noUiSlider/wNumb.js"></script>
	<script>					
	
		function toggleTimeline() {
			
			var timelinecontainer = document.getElementById('timeline-container');
			var timelinebutton = document.getElementById('timeline-button');
			//alert (timelinecontainer.style.display);
			if(timelinecontainer.style.display=='none'){
				timelinecontainer.style.display='block';
				timelinebutton.innerHTML='Hide Timeline';
				document.getElementById('timeline_display').value = 'block';
				document.getElementById('map_parameters').submit();

			} else {
				timelinecontainer.style.display='none';
				timelinebutton.innerHTML='Show Timeline';
				document.getElementById('timeline_display').value = 'none';
				//empty timeline_start and timeline_end will revert to default values on reload
				document.getElementById('timeline_start').value = '';
				document.getElementById('timeline_end').value = '';
				document.getElementById('map_parameters').submit();
			
			}
		}	
		
	</script>

    <?php 
        echo link_tag('resources/css/style.css');
        echo link_tag('resources/noUiSlider/nouislider.css');
        echo link_tag('resources/noUiSlider/nouislider.tooltips.css');
    ?>
	        
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css" />       
        <!--[if lte IE 8]>
            <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.ie.css" />
        <![endif]-->
    <script src="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js"></script>

</head>
<body>
    <div id="container">
        <div id="contentwrapper">
            <div id="leftcolumn">
                <div class="innertube">
                	<a href="http://iwp.uiowa.edu/">
                    <?php
                     	echo '<img src="'.base_url("resources/img/iwp-main-logo.png").'" width="230">';
                    ?>
                	</a>
                    <h3>Search By...</h3>
                    <?php
                    	include ("common/map_parameters.incl");
                    ?>
					<br />
					<div class="centered">
					</div>
                    
                </div>
            </div>
            <div id="contentcolumn">
                <div id='map'></div>                        

			<!-- note inline style definition needed for javascript toggleTimeline function
			<div id="timeline-container" style = "display:none;"> -->
			<?php
				$timeline_display = $this->input->post('timeline_display');
				if (empty($timeline_display)) {
					echo "<div id='timeline-container' style = 'display:none;'>";
				} else {
					echo "<div id='timeline-container' style = 'display:".$timeline_display.";'>";
				}
			?>				

				<span class ="timeline-label">Residency Timeline:</span>
				<div id='timeline'>
					<?php
						$timeline_min = 1967;
						$timeline_max = date("Y");
						if (empty($timeline_start)) { $timeline_start =$timeline_min ; }
						if (empty($timeline_end)) {$timeline_end = $timeline_max; }
					?>
					<script>
						var stepSlider = document.getElementById('timeline');
						
						noUiSlider.create(stepSlider, {
							start: [ <?php echo $timeline_start.",".$timeline_end; ?> ],
							connect: true,
							step: 1,
							tooltips: true,
							range: {
								'min': [ <?php echo $timeline_min; ?> ],
								'max': [ <?php echo $timeline_max; ?> ]
							},
							format:wNumb({
								decimals: 0
							}) 
						});
						

						stepSlider.noUiSlider.on('change', function(){
							var values = stepSlider.noUiSlider.get();
 							//alert('changed begin:'+values[0]+" end:"+values[1]);
							document.getElementById('timeline_start').value = values[0];
							document.getElementById('timeline_end').value = values[1];
							document.getElementById('timeline_display').value = 'block';
							document.getElementById('map_parameters').submit();
						});


					</script>
				</div>
			</div>
			

	        <div class = "info">
		            
	            Navigation: use the +/- buttons to zoom, or hold the shift key then click and drag over area of interest. Click the "Apply/Reset" button to return to default world view.
	        </div>
            <div id="footer">
                <a href="http://iwp.uiowa.edu/">University of Iowa International Writing Program.</a> 
            </div>

            </div>
        </div>
    </div>

	<script>
		var map = L.map('map')
<?php if ($residency < 1976) : ?>
		var base = L.tileLayer.wms("http://dsph-dev.provost.uiowa.edu:8080/geoserver/IWP/wms?service=WMS", {
		    layers: 'IWP:cshapes_mollweide_042_landmass',
		    format: 'image/png',
		    transparent: true,
		    version: '1.1.0'
		});
<?php endif; ?>
		base.addTo(map);
	</script>


<!-- TODO: the layers should default to calculated max year rather than 2013 if residency is empty in script below -->
<script>
	var mywms = L.tileLayer.wms("http://dsph-dev.provost.uiowa.edu:8080/geoserver/IWP/wms?service=WMS", {
	    layers: '<?php echo !empty($residency)? "IWP:cshapes_mollweide_042_$residency" :"IWP:cshapes_mollweide_042_2013" ; ?>' ,    
	    format: 'image/png',
	    transparent: true,
	    version: '1.1.0',
	    attribution: "<a href='http://www.learnnc.org/lp/editions/mapping/6434'>mollweide projection</a>"
	});
	mywms.addTo(map);
		

	function onEachFeature(feature, layer) {
	    // does this feature have a property named popupContent?
	    if (feature.properties && feature.properties.popupContent) {
	        layer.bindPopup(feature.properties.popupContent,{maxHeight:150,minWidth:220});
	    }
	}
	
	//{minWidth:feature.properties,popupWidth;maxWidth:feature.properties.popupWidth;}
	//returned from PostGIS query "{"type":"Point","coordinates":[54.8885812055762,35.4287280157253]}"
	
	
	var markers = <?php echo $geojson; ?>;
	
	
	L.geoJson(markers, {
		style: function (feature) {
			return feature.properties && feature.properties.style;
		},
		onEachFeature: onEachFeature,
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
				radius: feature.radius,
				fillColor: "#711e0c",
				color: "#000",
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
			});
		}
	}).addTo(map);
	map.setView([15,10], 2.2);
	
	
	/* map.on('click', function(e) { alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng) })
	map.on('zoomend', function () {
		var zoomlvl = map.getZoom();
		alert("zoom:"+zoomlvl);
	});*/
	
</script>

</body>
</html>

