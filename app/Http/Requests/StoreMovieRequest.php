<?php

namespace App\Http\Requests;

use App\Enums\MovieGenre;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreMovieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }



    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|unique:movie',
            'poster_url' => 'url',
            'release_date' => 'required|date',
            'genre' => [
                Rule::enum(MovieGenre::class),
                'required',
            ]
        ];
    }
}
