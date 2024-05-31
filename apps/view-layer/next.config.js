//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const getRemotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    'data-layer': `data-layer@http://localhost:4202/_next/static/${location}/remoteEntry.js`,
  };
};

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
        name: 'view-layer',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './names': './components/names',
        },
        extraOptions: {},
        remotes: getRemotes(options.isServer),
        shared: {
          'react-query': {
            singleton: true,
          },
          '@nextjs-module-federation-demo/name-context': {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
