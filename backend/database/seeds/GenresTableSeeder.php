<?php

use Illuminate\Database\Seeder;

class GenresTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $json = File::get("database/seeds/data.json");
        $data = json_decode($json);

        foreach($data->genres as $genre) {
            DB::table('genres')->insert([
                'name' => $genre->name,
                'slug' => $genre->slug
            ]);
        } 
    }
}