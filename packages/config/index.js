// Export all config files for easy importing
module.exports = {
  eslint: {
    base: require('./eslint/base'),
    nextjs: require('./eslint/nextjs'),
    react: require('./eslint/react'),
  },
  tailwind: {
    base: require('./tailwind/base'),
  },
};