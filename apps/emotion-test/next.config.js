//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  compiler: {
    emotion: true,
    /*
     * I tried this, but it didn't work
     */
    // emotion: {
    //   sourceMap: true,
    //   importMap: {
    //     '@mui/material': {
    //       styled: {
    //         canonicalImport: ['@emotion/styled', 'default'],
    //         styledBaseImport: ['@mui/material', 'styled'],
    //       },
    //     },
    //     '@mui/material/styles': {
    //       styled: {
    //         canonicalImport: ['@emotion/styled', 'default'],
    //         styledBaseImport: ['@mui/material/styles', 'styled'],
    //       },
    //     },
    //   },
    // },
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
