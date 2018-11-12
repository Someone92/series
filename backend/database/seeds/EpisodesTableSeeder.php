<?php

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

            $epi = Episodes::create([
                'episode_title'         => $episode->episode_title,
                'episode_slug'          => $episode->episode_slug,
                'episode_imdb_id'       => $episode->episode_imdb_id,
                'episode_season'        => $episode->episode_season,
                'episode_number'        => $episode->episode_number,
                'episode_summary'       => $episode->episode_summary,
                'episode_air_date'      => $episode->episode_air_date
            ]);

            $show = Shows::where('show_slug', $episode->show_slug)->first();

            $show->episode()->attach($epi->id);
        }
    }
}
