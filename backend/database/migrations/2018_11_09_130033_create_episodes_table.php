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
            $table->string('episode_imdb_id', 70)->unique();

            $table->integer('episode_season');
            $table->integer('episode_number');

            $table->string('episode_title', 70);
            $table->string('episode_slug', 70)->unique();
            $table->string('episode_summary', 1500);
            $table->timestamp('episode_air_date')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('episodes');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
