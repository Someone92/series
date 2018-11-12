<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenresShowsPivotTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('genres_shows', function (Blueprint $table) {
            $table->integer('genres_id')->unsigned();
            $table->foreign('genres_id')->references('id')->on('genres');

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
        Schema::dropIfExists('genres_shows');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
