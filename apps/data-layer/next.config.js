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
        },
        extraOptions: {},
        shared: {
          'react-query': {
            singleton: true,
          },
        },
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
