<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shows extends Model {

    protected $table = 'shows';

	protected $fillable = [
		
	];

	// Return all genres associated with the show
	public function genre() {
		return $this->belongsToMany('App\Genres');
	}

	// Return status of the show
	public function status() {
		return $this->belongsTo('App\Status');
	}

	public function episode() {
		return $this->belongsToMany('App\Episodes');
	}

}
