<?php

use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;

Route::controller(MovieController::class)->group(function () {
    Route::get('movies', 'index');
    Route::post('movies', 'store');
});
