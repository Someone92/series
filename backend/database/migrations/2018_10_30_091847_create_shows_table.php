<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShowsTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('shows', function (Blueprint $table) {
            $table->increments('id');
            $table->string('show_imdb_id', 70)->unique();
            $table->string('show_slug', 70)->unique();
            $table->string('show_title', 70)->index();
            $table->string('show_summary', 1500);
            $table->string('show_country', 60);
            $table->string('show_network', 60);
            $table->integer('show_year');
            $table->integer('show_status')->unsigned();
            $table->timestamps();

            $table->foreign('show_status')->references('id')->on('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('shows');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
