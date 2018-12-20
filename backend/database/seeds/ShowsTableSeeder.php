<?php

use App\Ids;
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

            $ids = Ids::create([
                'wiking'    => $show->ids->wiking,
                'tvdb'      => $show->ids->tvdb,
                'imdb'      => $show->ids->imdb
            ]);

            $shows = Shows::create([
                'title'         => $show->title,
                'slug'          => $show->slug,
                'summary'       => $show->summary,
                'network'       => $show->network,
                'status'        => $show->status,
                'runtime'       => $show->runtime,
                'first_aired'   => $show->first_aired,
                'airs'          => $show->airs,
                'ids'           => $ids->id
            ]);

            
            // Attach genres
            foreach($show->genres as $genre) {
                $full = Genres::where('genre_slug', $genre)->first();
                $shows->genre()->attach($full->id);
            }
        }
    }
}

