import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import liveReload from 'vite-plugin-live-reload';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/css/custom.css', 'resources/js/app.js'],
            refresh: true,
        }),
        liveReload([
            'app/**/*.php',         // Watch for changes in controllers, models, etc.
            'routes/**/*.php',      // Watch for changes in route files
            'resources/views/**/*.blade.php', // Watch for changes in Blade views
        ]),
    ],
});
