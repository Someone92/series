<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSeasonsShowsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('seasons_shows', function (Blueprint $table) {
            $table->integer('seasons_id')->unsigned();
            $table->foreign('seasons_id')->references('id')->on('seasons');

            $table->integer('shows_id')->unsigned();
            $table->foreign('shows_id')->references('id')->on('shows');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('seasons_shows');
    }
}
