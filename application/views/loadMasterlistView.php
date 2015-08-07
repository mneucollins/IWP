<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Import Masterlist</title>

<?php echo link_tag('resources/css/IWPData.css'); ?>

</head>

<body class="oneColFixCtrHdr">
<div id="container">
    <div id="header"  class = "in50">
    	<h2>Import Masterlist Excel Sheet</h2>
    </div> <!-- end #header -->
	<div id="mainContent" class="nobuttons">
		<div id="bodycolumn">

		<?php
		@ini_set('upload_max_size', '100M');
		@ini_set('post_max_size', '105M');
		?>

		<div class = "in50">	
			<?php
				if (!empty($msg)){
					echo "<h4 class='errorstr'>$msg</h4>";
				}
				$this->load->helper('form');
				echo form_open_multipart('iwpdata/importMasterList');
				echo form_open_multipart('iwpdata');
				//echo form_hidden ('MAX_FILE_SIZE', '1000000');
			?>
			<h3>"Browse" to find the Excel file to upload then "Upload": </h3>
			<ul><li> File must be in XLS OR XLSX format.</li>
			</ul>
			<div class="in1">
				<p>
					<input type="file" name="userfile" size="20" />
				<?php 
					//$data = array('name'=>'userfile', 'type'=>'file');
					//echo form_input($data);
				?>
				</p><p>
					<?php 
						echo form_submit('upload','Upload');
						echo form_close();
					?>
				</p><p>
					<?php
						echo form_open_multipart('iwpdata');
						echo form_submit('return','Return to Main Menu'); 
						echo form_close();
					?>
				</p>
			</div>
		<?php 
			echo form_close();
 		?>
		</div>
	
	</div> <!-- main -->

</div> <!-- container -->
</body>
</html>