<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIdsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('ids', function (Blueprint $table) {
            $table->increments('id');
            $table->string('wiking', 50)->nullable();
            $table->string('imdb', 50)->nullable();
            $table->string('tmdb', 50)->nullable();
            $table->string('tvdb', 50)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('ids');
    }
}
