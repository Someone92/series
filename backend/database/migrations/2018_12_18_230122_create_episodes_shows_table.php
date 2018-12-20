<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEpisodesShowsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('episodes_shows', function (Blueprint $table) {
            $table->integer('episodes_id')->unsigned();
            $table->foreign('episodes_id')->references('id')->on('episodes');

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
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('episodes_shows');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
