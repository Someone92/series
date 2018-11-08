<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genres extends Model {

    protected $table = 'genres';

	protected $fillable = [
		
	];

	// Return all shows with the specified genre
	public function series() {
		return $this->belongsToMany('App\Shows');
	}
}
