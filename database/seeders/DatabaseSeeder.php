<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Avatar;
use App\Models\Competition;
use App\Models\Event;
use App\Models\EventRegistration;
use App\Models\EventRegistrationPayment;
use App\Models\Faq;
use App\Models\Festival;
use App\Models\Seminar;
use App\Models\SeminarCast;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $festival_2023 = $this->createFestivals();
        $avatars = $this->createAvatars();
        $participants = $this->createParticipants($festival_2023, $avatars);
        $managers = $this->createManagers($festival_2023, $avatars);
        $admin = $this->createAdmin($festival_2023, $avatars);
        $this->createEvents($festival_2023, $admin, $participants);
        $this->createFaqs($festival_2023, $managers);
    }

    private function createFestivals()
    {
        $festival_2023 = Festival::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->create([
                'period' => '2024',
                'name' => 'Technology Festival #4',
                'theme' => 'Green Technologies: Changing the World with Digital Innovation',
                'description' => "Technology Festival atau yang biasa dikenal dengan Technofest adalah forum kompetitif berskala nasional yang mewadahi minat dan bakat kaum muda dalam dunia teknologi. Ajang kompetitif yang disediakan adalah lomba essay, poster, dan UI/UX. Technofest juga memberikan seminar untuk menyalurkan pengetahuan dan informasi yang berkembang pesat kepada generasi muda dengan tujuan untuk memotivasi kaum muda agar dapat berinovasi dan memajukan teknologi di Indonesia.",
                'start_date' => new Carbon('2023-08-07'),
                'end_date' => new Carbon('2023-09-16'),
                'is_active' => true,
            ]);

        // $festival_2024 = Festival::factory()
        //     ->hasContactPersons(4)
        //     ->hasMilestones(4)
        //     ->create([
        //         'period' => '2024',
        //         'name' => 'Technology Festival #5',
        //         'theme' => 'Black Technologies: Dark Web Access',
        //         'description' => fake()->paragraph(),
        //         'start_date' => new Carbon('2024-08-02'),
        //         'end_date' => new Carbon('2024-08-24'),
        //         'is_active' => false,
        //     ]);

        return $festival_2023;
    }

    public function createAvatars()
    {
        return Avatar::factory(20)->create();
    }

    public function createParticipants($festival, $avatars)
    {
        return User::factory(50)
            ->hasAttached($festival)
            ->hasUserProfile()
            ->create([
                'role' => config('constants.user_role.participant'),
                'avatar' => Avatar::inRandomOrder()->first()->image,
                'selected_festival' => $festival->id,
            ]);
    }

    public function createManagers($festival, $avatars)
    {
        return User::factory(10)
            ->hasAttached($festival)
            ->create([
                'role' => config('constants.user_role.manager'),
                'avatar' => $avatars->random()->image,
                'selected_festival' => $festival->id,
            ]);
    }

    public function createAdmin($festival, $avatars)
    {
        return User::factory()
            ->hasAttached($festival)
            ->create([
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'role' => config('constants.user_role.admin'),
                'password' => 'margarin029847q2',
                'avatar' => $avatars->random()->image,
                'selected_festival' => $festival->id,
            ]);
    }

    public function createEvents($festival, $admin, $participants): void
    {
        $event_uiux = Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                    ->hasAttached(
                        $participants->random(3),
                        ['role' => 2]
                    )
                    ->hasAttached(
                        $participants->random(),
                        ['role' => 1]
                    )
            )
            ->has(
                EventRegistration::factory()
                    ->has(EventRegistrationPayment::factory())
                    ->hasAttached(
                        $admin,
                        ['role' => 1]
                    )
            )
            ->for(Competition::factory()->create(['max_participants' => 4]), 'eventable')
            ->for($festival)
            ->create([
                'name' => 'UI/UX',
                'is_opened' => false,
                'price' => 40000,
                'image' => '/images/uiux.svg',
                'description' => fake()->sentence(10),
                'codename' => 'uiux',
            ]);

        $event_competitive_programming = Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                    ->hasAttached(
                        $participants->random(3),
                        ['role' => 2]
                    )
                    ->hasAttached(
                        $participants->random(),
                        ['role' => 1]
                    )
            )
            ->for(Competition::factory()->create(['max_participants' => 4]), 'eventable')
            ->for($festival)
            ->create([
                'name' => 'Competitive Programming',
                'is_opened' => false,
                'price' => 40000,
                'codename' => 'comprog'
            ]);

        $event_essay = Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                    ->hasAttached(
                        $participants->random(),
                        ['role' => 0]
                    )
            )
            ->for(Competition::factory()->create(['max_participants' => 1]), 'eventable')
            ->for($festival)
            ->create([
                'name' => 'Essay',
                'is_opened' => false,
                'price' => 1000000,
                'description' => fake()->sentence(10),
                'image' => '/images/essay.svg',
                'codename' => 'essay',
            ]);

        $event_poster = Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                    ->hasAttached(
                        $participants->random(),
                        ['role' => 0]
                    )
            )
            ->for(Competition::factory()->create(['max_participants' => 1]), 'eventable')
            ->for($festival)
            ->create([
                'name' => 'Poster',
                'is_opened' => false,
                'price' => 20000,
                'description' => fake()->sentence(10),
                'image' => '/images/poster.svg',
                'codename' => 'poster',
            ]);

        $seminar = Seminar::factory()
            ->create();

        Event::factory()
            ->hasContactPersons(4)
            ->hasMilestones(4)
            ->for($festival)
            ->for($seminar, 'eventable')
            ->has(
                EventRegistration::factory()
                    ->count(10)
                    ->has(EventRegistrationPayment::factory())
                    ->hasAttached(
                        $participants->random(),
                        ['role' => 0]
                    )
            )
            ->create([
                'name' => 'Seminar',
                'is_opened' => false,
                'description' => fake()->sentence(10),
                'price' => 40000,
                'codename' => 'seminar',
            ]);

        SeminarCast::factory()
            ->for($seminar)
            ->create([
                'name' => 'Gede Pradnyananda',
                'title' => 'IoT Engineer',
                'image' => '/images/speaker_1.svg',
                'role' => config('constants.seminar_cast_role.speaker'),
            ]);

        SeminarCast::factory()
            ->for($seminar)
            ->create([
                'name' => 'Edo Pratama',
                'title' => 'Network Engineer',
                'image' => '/images/speaker_2.svg',
                'role' => config('constants.seminar_cast_role.speaker'),
            ]);

        SeminarCast::factory()
            ->for($seminar)
            ->create([
                'name' => 'Toni',
                'title' => 'Anak Rumahan',
                'image' => '/images/moderator_1.svg',
                'role' => config('constants.seminar_cast_role.moderator'),
            ]);
    }

    public function createFaqs($festival, $managers)
    {
        Faq::factory(20)
            ->for($managers->random())
            ->for($festival)
            ->create();
    }
}
