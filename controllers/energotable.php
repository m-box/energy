<?php

			$run=file_get_contents("tpl/analizs6.html");

			$tpl=file_get_contents('tpl/index.html');
			$tpl=str_replace("{!content!}",$run,$tpl);	
			print_r($tpl);


?>