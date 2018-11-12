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
                'status_name' => $status->status_name,
                'status_slug' => $status->status_slug
            ]);
        }
    }
}
