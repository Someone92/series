<?php

use Illuminate\Database\Seeder;

class StatusTableSeeder extends Seeder {
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $json = File::get("database/seeds/data.json");
        $data = json_decode($json);

        foreach($data->status as $status) {
            DB::table('status')->insert([
                'name' => $status->name,
                'slug' => $status->slug
            ]);
        }
    }
}
