<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEpisodesSeasonsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('episodes_seasons', function (Blueprint $table) {
            $table->integer('episodes_id')->unsigned();
            $table->foreign('episodes_id')->references('id')->on('episodes');

            $table->integer('seasons_id')->unsigned();
            $table->foreign('seasons_id')->references('id')->on('seasons');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('episodes_seasons');
    }
}
