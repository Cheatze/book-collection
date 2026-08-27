<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Attaches 3 books to each existing author
        Author::all()->each(function ($author) {
            Book::factory()->count(3)->create([
                'author_id' => $author->id,
            ]);
        });
    }
}
