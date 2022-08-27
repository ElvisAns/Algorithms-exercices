// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution($N) {
    // write your code in PHP7.0
    $bin = decbin($N);
    $pattern = "*1*";
    preg_match_all($pattern,$bin,$matches, PREG_OFFSET_CAPTURE);
    $n = 0;
    foreach($matches[0] as $k=>$v){
        $pos = $v[1];
        if(isset($matches[0][$k+1])){
            $chain_len = abs($matches[0][$k+1][1]-$pos);
            if($chain_len>1){
                $n = max($chain_len-1,$n);
            }
        }
    }

    return $n;
}
