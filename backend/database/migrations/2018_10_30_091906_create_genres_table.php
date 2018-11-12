<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenresTable extends Migration {
    
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('genres', function (Blueprint $table) {
            $table->increments('id');
            $table->string('genre_name', 40)->unique();
            $table->string('genre_slug', 40)->unique();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('genres');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
