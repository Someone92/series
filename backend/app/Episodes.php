<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Episodes extends Model {

    protected $table = 'episodes';

	protected $fillable = [
		
	];

	public function show() {
		return $this->hasOne('App\Shows');
	}
}
