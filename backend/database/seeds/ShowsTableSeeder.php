<?php

use App\Shows;
use App\Status;
use App\Genres;
use Illuminate\Database\Seeder;

class ShowsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 3 Examples to test the database
        
        $showsArray = [
            [
                'imdbId' => 'tt0944947',
                'slug' => 'game-of-thrones',
                'title' => 'Game of Thrones',
                'summary' => "Seven noble families fight for control of the mythical land of Westeros. Political and sexual intrigue abound. The primary families are the Stark, Lannister, and Baratheon families. Robert Baratheon, King of Westeros, asks his old friend Eddard Stark to serve as his chief advisor. Eddard, suspecting that his predecessor had been murdered, accepts so that he can investigate further. It turns out more than one family is plotting to take the throne.
                The Queen's family, the Lannisters, may be hatching an incestuous plot to take control. Across the sea, the last surviving members of the previously deposed ruling family, the Targaryens, are also plotting a return to power. The conflict between these families and others, including the Greyjoys, the Tullys, the Arryns, and the Tyrells, leads to war. Meanwhile, in the north, an ancient evil awakens. Amidst war and the political confusion, a brotherhood of misfits, The Night's Watch, is all that stands between the realms of men and the horrors beyond.",
                'country' => 'United States',
                'network' => 'HBO',
                'year' => 2011,
                'runtime' => 60,
                'status-slug' => 'returning-series',

                // GENRES
                'genres' => [
                    array('slug' => 'action'),
                    array('slug' => 'adventure'),
                    array('slug' => 'drama')
                ]
            ],
            [
                'imdbId' => 'tt0460681',
                'slug' => 'supernatural',
                'title' => 'Supernatural',
                'summary' => "Sam Winchester is a college student bound for law school, determined to escape his family's past - unlike his older brother, Dean. Ever since they were little their father has been consumed with an obsession to find the evil forces that murdered his beloved wife, and recruited his two young sons to help them. They have grown up as hunters of the supernatural. Sam escaped this way of life after high school, and now has a happy life with his girlfriend, Jessica, and a promising future career. Dean, however, stayed behind with his father to join him in his hunting. After Dean arrives for Sams help when their father goes missing, Sam must join his brother to find him. His one weekend trip to search for the missing John Winchester becomes an ongoing quest after a horrible tragedy ruins any thought of a happy life for Sam.                The two brothers, bound by tragedy and blood to their mission, travel across the country encountering terrifying and dangerous forces most believe to be nothing but superstition and folklore, such as the Lady in White, the Indian beast known as the Wendigo, Phantom Travelers who cause plane crashes, Bloody Mary, and many more.",
                'country' => 'United States',
                'network' => 'The CW',
                'year' => 2005,
                'runtime' => 60,
                'status-slug' => 'returning-series',

                // GENRES
                'genres' => [
                    array('slug' => 'drama'),
                    array('slug' => 'fantasy'),
                    array('slug' => 'horror')
                ]
            ],
            [
                'imdbId' => 'tt0118480',
                'slug' => 'stargate-sg1',
                'title' => 'Stargate SG-1',
                'summary' => "Step through the Stargate with SG-1, a team of soldiers and scientists, as they travel instantaneously to other planets to explore, forge alliances, defuse crises, establish trade, investigate ancient mysteries and defend Earth from such hostile forces as the Goa'uld and the Replicators.
                For eight years, from their base at the U.S. Air Force's Stargate Command in the Rocky Mountains, Colonel Jack O'Neill, Dr. Daniel Jackson, Lt. Colonel Samantha Carter and alien warrior Teal'c have braved everything that the universe has thrown at them, from interstellar war and evil twins to death and ascension.
                But changes came to SG-1 as it began its ninth year of fearless service to Earth. New faces joined the team, as Lt. Col. Cameron Mitchell tries to fill the very big shoes of former SG-1 leader O'Neill, while General Hank Landry must adapt to the unique challenges of running Stargate Command, a posting unlike any other the military has to offer.
                Offworld, SG-1 might have new friends - or new foes - in Vala, a former Goa'uld host turned freedom-fighter; and Gerak, a Jaffa leader who vies with Teal'c for political control of the new Jaffa nation.",
                'country' => 'United States',
                'network' => 'Syfy',
                'year' => 1997,
                'runtime' => 60,
                'status-slug' => 'canceled-series',

                // GENRES
                'genres' => [
                    array('slug' => 'science-fiction'),
                    array('slug' => 'adventure'),
                    array('slug' => 'action')
                ]
            ]
        ];

        foreach($showsArray as $show) {

            $status = Status::where('slug', $show['status-slug'])->first();

            $shows = Shows::create([
                'imdbId' => $show['imdbId'],
                'slug' => $show['slug'],
                'title' => $show['title'],
                'summary' => $show['summary'],
                'country' => $show['country'],
                'network' => $show['network'],
                'year' => $show['year'],
                'runtime' => $show['runtime'],
                'status' => $status->id
            ]);

            // Attach genres
            foreach($show['genres'] as $genre) {
                // Seed shows_genres
                $full = Genres::where('slug', $genre['slug'])->first();

                $shows->genre()->attach($full->id);
            }
        }

    }
}
