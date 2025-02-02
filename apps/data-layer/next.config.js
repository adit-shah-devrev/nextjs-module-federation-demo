//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'data-layer',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './use-dl-get-names': './data/use-dl-get-names',
          './fetch-names': './data/fetch-names',
          './name': './components/name',
        },
        extraOptions: {},
        shared: {
          'react-query': {
            singleton: true,
          },
          '@nextjs-module-federation-demo/name-context': {
            singleton: true,
            requiredVersion: false,
          },
          'react/jsx-runtime': {
            requiredVersion: false,
          },
        },
        remotes: {},
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
