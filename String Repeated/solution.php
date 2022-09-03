<?php
// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution(string $paragraph, int $y) {
    // Your code goes here
    $n = $y;
    $pattr = '/[^a-zA-Z ]/';
    $safe = preg_replace($pattr,"",strtolower($paragraph));
    $arr = explode(" ",$safe);
    $dupl = array_count_values($arr);

    $filt = array_filter($dupl,function($v) use ($y){
        if($v>=$y) return true;
        return false;
    });
    $sol = array_keys($filt);
    sort($sol);
    return $sol;
}