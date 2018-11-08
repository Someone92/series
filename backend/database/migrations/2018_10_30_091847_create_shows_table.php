<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shows', function (Blueprint $table) {
            $table->increments('id');
            $table->string('imdbId', 70)->unique();
            $table->string('slug', 70)->unique();
            $table->string('title', 70)->index();
            $table->string('summary', 1500);
            $table->string('country', 60);
            $table->string('network', 60);
            $table->integer('year');
            $table->integer('runtime');
            $table->integer('status')->unsigned();
            $table->timestamps();

            $table->foreign('status')->references('id')->on('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shows');
    }
}
