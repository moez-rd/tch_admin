<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserProfile>
 */
class UserProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_number' => fake()->regexify('[0-9]{9}'),
            'institution' => fake()->word(),
            'gender' => fake()->numberBetween(1, 2),
            'whatsapp' => fake()->e164PhoneNumber(),
        ];
    }
}
