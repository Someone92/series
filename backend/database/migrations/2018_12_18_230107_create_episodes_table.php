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
            $table->integer('season');
            $table->integer('number');

            $table->string('title', 70);
            $table->string('slug', 70);
            $table->integer('ids')->unsigned();
            $table->foreign('ids')->references('id')->on('ids');

            $table->string('summary', 1500);
            $table->date('air_date');

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
