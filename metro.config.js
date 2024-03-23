const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const metroConfig = async () => {
  const baseConfig = await getDefaultConfig(__dirname);

  return mergeConfig(baseConfig, {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...baseConfig.resolver,
      assetExts: baseConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...baseConfig.resolver.sourceExts, 'svg'],
    },
  });
};

module.exports = metroConfig();
