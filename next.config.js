const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    locales: ['en', 'es'], // List of your locales
    defaultLocale: 'en',   // Default locale
  };
 
module.exports = withNextIntl(nextConfig);