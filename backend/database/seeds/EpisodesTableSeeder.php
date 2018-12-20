<?php

use App\Ids;
use App\Shows;
use App\Episodes;

use Illuminate\Database\Seeder;

class EpisodesTableSeeder extends Seeder {
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $json = File::get("database/seeds/data.json");
        $data = json_decode($json);

        foreach($data->episodes as $episode) {

            $ids = Ids::create([
                'wiking'    => $episode->ids->wiking,
                'tvdb'      => $episode->ids->tvdb,
                'imdb'      => $episode->ids->imdb
            ]);

            $epi = Episodes::create([
                'season'    => $episode->season,
                'number'    => $episode->number,
                'title'     => $episode->title,
                'slug'      => $episode->slug,
                'summary'   => $episode->summary,
                'air_date'  => $episode->air_date,
                'ids'       => $ids->id
            ]);

            $show = Shows::where('slug', $episode->show_slug)->first();
            $show->episode()->attach($epi->id);
        }
    }
}
