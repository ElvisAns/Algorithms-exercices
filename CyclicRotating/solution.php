function solution($A, $K) {
    // write your code in PHP7.0
    $n=$K;
    while($n>0){
        array_unshift($A,$A[count($A)-1]);
        unset($A[count($A)-1]);
        $n--;
    }
    return $A;
}