// you can write to stdout for debugging purposes, e.g.
// print "this is a debug message\n";

function solution($X) {
    // write your code in PHP7.0
    $week = intval($X/60800);
    $days = intval(($X/86400)%7);
    $hours = intval(($X/3600)%24);
    $minutes =intval(($X/60)%60);
    $seconds =intval( $X%60);

    $str = [];
    $week>0?array_push($str,$week."w"):"";
    $days>0?array_push($str,$days."d"):""; 
    $hours>0?array_push($str,$hours."h"):""; 
    $minutes>0?array_push($str,$minutes."m"):""; 
    $seconds>0?array_push($str,$seconds."s"):"";

    $r = count($str); 

    if($r>2){
      switch ($r){
          case 3:
            unset($str[2]);
            $n = str_split($str[1]);
            $n[0] +=1;
            $str[1] = join($n,"");
          break;

          case 4:
            unset($str[3]);
            unset($str[2]);
            $n = str_split($str[1]);
            $n[0] +=1;
            $str[1] = join($n,"");
          break;
          case 5:
            unset($str[4]);
            unset($str[3]);
            unset($str[2]);
            $n = str_split($str[1]);
            $n[0] +=1;
            $str[1] = join($n,"");
          break;
      }
    }

    return join($str,""); 
}
