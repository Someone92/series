<?php

use Illuminate\Database\Seeder;

class StatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $statuses = [
            [
                'name' => 'New series',
                'slug' => 'new-series'
            ],
            [
                'name' => 'Returning series',
                'slug' => 'returning-series'
            ],
            [
                'name' => 'Final season',
                'slug' => 'final-season'
            ],
            [
                'name' => 'Canceled series',
                'slug' => 'canceled-series'
            ]
        ];

        foreach($statuses as $status) {
            DB::table('status')->insert([
                'name' => $status['name'],
                'slug' => $status['slug']
            ]);
        }
    }
}
