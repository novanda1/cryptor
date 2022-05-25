module.exports = {
  basePath: '',
  images: {
    domains: ['images.unsplash.com'],
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
