module.exports = {
  basePath: '',
  images: {
    domains: ['images.unsplash.com', 'assets.coingecko.com'],
  },
  async redirects() {
    return [
      {
        source: '/api',
        destination: '/api',
        permanent: true,
      },
    ]
  },
};
