<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class IsVerified
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if ($this->alreadyVerified()) {
            return redirect()->route('LaravelInstaller::welcome');
        }

        return $next($request);
    }

    /**
     * If application is already verified.
     *
     * @return bool
     */
    public function alreadyVerified()
    {
        return file_exists(storage_path('verified'));
    }
}
