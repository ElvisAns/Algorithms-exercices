<?php
	$str = "Hello Dear Goddd";
	
	function most_repeated_world(String $str):String{
	  $arr = str_split($str);
	  $count = [];
	  
	  foreach($arr as $key=>$value){
	    if(!isset($count[$value])) $count[$value]=1;
	    else $count[$value]=$count[$value]+1;
	  }
	 
	 arsort($count);
	 $values = array_keys($count);
	 
	 return $values[0];
	}
	
	echo most_repeated_world($str);