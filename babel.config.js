module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    [
        "import",
        {
            libraryName: "antd",
            libraryDirectory: "lib",
            style: function (name) {
                // console.log(name);
                return `${name}/style/index.css`;
            },
        },
    ],
    [
        "import",
        {
            libraryName: "@ant-design/icons",
            libraryDirectory: "lib/icons",
            camel2DashComponentName: false,
        },
        "@ant-design/icons",
    ],
    ["@babel/plugin-proposal-class-properties"],
    ["@babel/plugin-proposal-private-methods", { "loose": false }]
  ],
};
