<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Results</title>

	<?php echo link_tag('resources/css/IWPData.css'); ?>

</head>
<body>

<div id="container">
	<h1>Test DB</h1>

	<div id="body">
		<p>
			Return to <a href="<?php echo site_url('iwpdata') ?>">Main Menu</a>
		</p>

		<?php echo $results ?>

		<p>
			Return to <a href="<?php echo site_url('iwpdata') ?>">Main Menu</a>
		</p>

	</div>

</body>
</html>