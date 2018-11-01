<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Series extends Model {

    protected $table = 'series';

	protected $fillable = [
		
	];

	// Return all genres associated with the show
	public function genre() {
		return $this->belongsToMany('App\Genres', 'series_genres');
	}
}
