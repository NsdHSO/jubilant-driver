const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const config = require('./module-federation.config');

module.exports = withModuleFederationPlugin({

    name: 'driver',
    filename: "remoteEntry.js",
    exposes: {
      './Module': 'apps/driver/src/app/remote-entry/entry.module.ts',
    },
    remotes:{
      'frameDrawer':"https://thunderous-twilight-9bd73b.netlify.app/remoteEntry.js"
    },
    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },
    
  });
  