<?php

namespace App\Http\Controllers;


use App\Shows;
use App\Episodes;


use Illuminate\Http\Request;

class showsController extends Controller {

    public function monthRange($date) {
        $from = date('Y-m-01', strtotime($date));
        $to = date('Y-m-t',strtotime($date));


        $episodes = Episodes::whereBetween('air_date', [$from, $to])->get();

        return response($episodes, 200);

    }
    
}
