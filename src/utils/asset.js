/**
 * Resolves a path relative to /assets/ using Vite's BASE_URL.
 * Works in both dev (base: '/uzh/') and production.
 *
 * Usage: asset('photos/foo.jpg') → '/uzh/assets/photos/foo.jpg'
 */
export const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`
