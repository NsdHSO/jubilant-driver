module.exports = {
  name: 'driver',
  filename: "remoteEntry.js",
  exposes: {
    './Module': 'apps/driver/src/app/remote-entry/entry.module.ts',
  },
};
