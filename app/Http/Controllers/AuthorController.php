<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthorRequest;
use Illuminate\Http\Request;
use App\Http\Resources\AuthorResource;
use App\Models\Author;

class AuthorController extends Controller
{
    public function index() {
        return AuthorResource::collection(Author::all());
    }

    public function store(StoreAuthorRequest $request) {
        $author = Author::create($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function update(StoreAuthorRequest $request, Author $author) {
        
        $author->update($request->validated());

        $authors = Author::all();
        return AuthorResource::collection($authors);
    }

    public function destroy(Author $author) {
        if ($author->books()->count() > 0) {
            return response()->json([
                'message' => 'Cannot delete author because they have books associated with them.',
                'error' => 'author_has_books'
            ], 422); // 422 Unprocessable Entity
        }

        $author->delete();
        return response()->json(['message' => 'Auteur succesvol verwijderd']);
    }
}
