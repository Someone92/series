<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model {
    
    protected $table = 'status';

	protected $fillable = [
		
	];

	// Return all shows with the specified status
	public function series() {
		return $this->belongsToMany('App\Series');
	}
}
