export default function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ];

  const plugins = [
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-transform-runtime", {
      "regenerator": true
    },
    [
      'module:react-dotenv',
      {
        path: '.env',
        allowUndefined: true,
      },
    ],]
  ];

  return {
    presets,
    plugins
  };
};