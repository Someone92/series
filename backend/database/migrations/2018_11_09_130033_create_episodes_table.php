<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEpisodesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('episodes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('imdbId', 70)->unique();
            $table->string('slug', 70)->unique();
            $table->string('title', 70)->index();
            $table->integer('number');
            $table->string('summary', 1000);
            $table->timestamp('first_aired');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('episodes');
    }
}
