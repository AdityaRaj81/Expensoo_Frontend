import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({

  plugins: [

    react(),

    VitePWA({

      registerType: "prompt",

      injectRegister: "auto",

      includeAssets: [

        "favicon.ico",

        "robots.txt",

        "logos/logo_1.png"

      ],

      manifest: {

        name: "Expensoo",

        short_name: "Expensoo",

        description: "Personal Expense Tracker",

        theme_color: "#3B82F6",

        background_color: "#FFFFFF",

        display: "standalone",

        orientation: "portrait",

        scope: "/",

        start_url: "/",

        icons: [

          {

            src: "/icons/pwa-192x192.png",

            sizes: "192x192",

            type: "image/png"

          },

          {

            src: "/icons/pwa-512x512.png",

            sizes: "512x512",

            type: "image/png"

          },

          {

            src: "/icons/pwa-512x512.png",

            sizes: "512x512",

            type: "image/png",

            purpose: "maskable"

          }

        ]

      },

      workbox: {

        cleanupOutdatedCaches: true,

        clientsClaim: true,

        skipWaiting: true,

        globPatterns: [

          "**/*.{js,css,html,ico,png,svg,woff2}"

        ],

        runtimeCaching: [

          {

            urlPattern: ({ request }) =>

              request.destination === "image",

            handler: "CacheFirst",

            options: {

              cacheName: "expensoo-images",

              expiration: {

                maxEntries: 100,

                maxAgeSeconds: 60 * 60 * 24 * 30

              }

            }

          },

          {

            urlPattern: ({ request }) =>

              request.destination === "script" ||

              request.destination === "style",

            handler: "StaleWhileRevalidate",

            options: {

              cacheName: "expensoo-static"

            }

          },

          {

            urlPattern: /^https?:\/\/.*\/api\/.*/i,

            handler: "NetworkFirst",

            options: {

              cacheName: "expensoo-api",

              networkTimeoutSeconds: 10,

              expiration: {

                maxEntries: 100,

                maxAgeSeconds: 60 * 5

              }

            }

          }

        ]

      }

    })

  ],

  server: {

    port: 5173,

    open: true

  },

  preview: {

    port: 4173

  },

  test: {

    globals: true,

    environment: "jsdom",

    setupFiles: "./src/test/setup.js"

  }

});