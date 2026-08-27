<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;
use App\Models\Review;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Attaches 3 reviews to each existing book
        Book::all()->each(function ($book) {
            Review::factory()->count(3)->create([
                'book_id' => $book->id,
            ]);
        });
    }
}
