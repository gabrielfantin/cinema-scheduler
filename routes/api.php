<?php

use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;

Route::controller(MovieController::class)->group(function () {
    Route::get('movies', 'index');
    Route::post('movies', 'store');
    Route::get('movies/{movie}', 'show');
    Route::put('movies/{movie}', 'update');
    Route::delete('movies/{movie}', 'destroy');
});
