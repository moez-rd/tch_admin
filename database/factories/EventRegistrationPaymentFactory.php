<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EventRegistrationPayment>
 */
class EventRegistrationPaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'status' => fake()->numberBetween(0, 2),
            'proof' => fake()->imageUrl(640, 480, 'animals', true),
        ];
    }
}
