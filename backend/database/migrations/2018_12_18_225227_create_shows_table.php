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
            $table->string('title', 70)->index();
            $table->string('slug', 70)->index();

            $table->integer('ids')->unsigned();
            $table->foreign('ids')->references('id')->on('ids');

            $table->string('summary', 1500)->nullable();

            $table->string('country', 70)->nullable();
            $table->string('language', 70)->nullable();
            $table->string('network', 70)->nullable();
            $table->date('first_aired')->nullable();

            $table->integer('runtime')->nullable();
            $table->string('status', 70)->nullable();

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
        Schema::dropIfExists('shows');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
}
