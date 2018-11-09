<?php

use App\Shows;
use App\Status;
use App\Genres;
use Illuminate\Database\Seeder;

class ShowsTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $json = File::get("database/seeds/data.json");
        $data = json_decode($json);

        foreach($data->shows as $show) {
            $status = Status::where('slug', $show->status)->first();

            $shows = Shows::create([
                'imdbId'    => $show->imdbId,
                'slug'      => $show->slug,
                'title'     => $show->title,
                'summary'   => $show->summary,
                'country'   => $show->country,
                'network'   => $show->network,
                'year'      => $show->year,
                'runtime'   => $show->runtime,
                'status'    => $status->id
            ]);

            // Attach genres
            foreach($show->genres as $genre) {
                $full = Genres::where('slug', $genre->slug)->first();
                $shows->genre()->attach($full->id);
            }
        }
    }
}
