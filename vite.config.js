import { defineConfig, splitVendorChunkPlugin } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'

export default defineConfig({
    plugins: [
        splitVendorChunkPlugin(),
        laravel({
            input: ['resources/sass/app.scss', 'resources/js/app.js'],
            refresh: true
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        vueI18n({
            include: path.resolve(__dirname, 'resources/js/locales/**')
        })
    ],
    resolve: {
        alias: {
            '@': '/resources/js'
        }
    }
});
