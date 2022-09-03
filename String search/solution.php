<?php 
// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution(array $dataset, array $query) {
    // Your code goes here
    $db_index = array_flip($dataset);
    $res = [];
    foreach($query as $v){
        if(isset($db_index[$v])){
            array_push($res,$db_index[$v]);
            continue;
        }
        
        array_push($res,-1);
    }
    return $res;
}