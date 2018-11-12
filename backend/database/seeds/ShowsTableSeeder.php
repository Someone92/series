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
            $status = Status::where('status_slug', $show->show_status)->first();

            $shows = Shows::create([
                'show_title'     => $show->show_title,
                'show_slug'      => $show->show_slug,
                'show_imdb_id'   => $show->show_imdb_id,
                'show_summary'   => $show->show_summary,
                'show_country'   => $show->show_country,
                'show_network'   => $show->show_network,
                'show_year'      => $show->show_year,
                'show_status'    => $status->id
            ]);
            // Attach genres
            foreach($show->show_genres as $genre) {
                $full = Genres::where('genre_slug', $genre->genre_slug)->first();
                $shows->genre()->attach($full->id);
            }
        }
    }
}
