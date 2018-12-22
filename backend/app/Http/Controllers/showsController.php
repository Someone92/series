<?php

namespace App\Http\Controllers;


use App\Shows;
use App\Episodes;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class showsController extends Controller {

    public function monthRange($date) {
        $from = date('Y-m-01', strtotime($date));
        $to = date('Y-m-t',strtotime($date));

        $from = date('Y-m-d', strtotime($from . "-7 days"));
        $to = date('Y-m-d', strtotime($to . '+7 days'));

        $test = DB::table('episodes')
        ->join('episodes_shows', 'episodes.id', '=', 'episodes_shows.episodes_id')
        ->join('shows', 'episodes_shows.shows_id', '=', 'shows.id')
        ->select('episodes.*', 'shows.title as show_title')->whereBetween('air_date', [$from, $to])->get();

        return response($test, 200);
    }
    
}
