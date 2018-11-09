<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSeasonsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('seasons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('imdbId', 70)->unique();
            $table->string('slug', 70)->unique();
            $table->string('title', 70)->index();
            $table->integer('number');
            $table->integer('year');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('seasons');
    }
}
