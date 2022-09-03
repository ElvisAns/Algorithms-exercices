<?php
// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution(array $numbers, int $Y) {
    // Your code goes here
    $rank = array_count_values($numbers);
    asort($rank);
    $r=array_keys($rank);
    $ans = array_slice($r,-$Y);
    rsort($ans);
    return $ans;
}