// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution($X, $B, $Z) {
    // write your code in PHP7.0
    $downloaded = array_sum($B);

    if($X - $downloaded==0) return 0; #downloaded byte are equal to the file size, download is done

    if($X < $downloaded OR empty($B)) return -1; #downloaded byte can't exceed the file size and 

    $sample = array_slice($B,-$Z);

    $sample_total = array_sum($sample);

    $avg = ($sample_total/count($sample));

    return $avg > 0 ? (int) ceil(($X-$downloaded)/$avg) : -1;
}
