<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        $this->call(GenresTableSeeder::class);
        $this->call(StatusTableSeeder::class);
        $this->call(ShowsTableSeeder::class);
        $this->call(EpisodesTableSeeder::class);
    }
}
