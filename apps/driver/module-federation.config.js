module.exports = {
  name: 'driver',
  filename: "remoteEntry.js",
  exposes: {
    './Module': 'apps/driver/src/app/remote-entry/entry.module.ts',
  },
  remotes:{
    'frameDrawer':"https://thunderous-twilight-9bd73b.netlify.app/remoteEntry.mjs"
  },
};
