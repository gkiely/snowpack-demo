module.exports = {
  mount: {
    src: "/"
  },
  devOptions: {
    port: 8000
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    [
      "@snowpack/plugin-optimize", {
        preloadCSS: true
      }
    ],
    // TODO: not working for react-dom
    // [
    //   "snowpack-plugin-import-map",
    //   {
    //     imports: {
    //       "*": true
    //     }
    //   }
    // ]
    // TODO: fork repo and default to dependencies and version
    // Also add exclude/ignore field, ignore: ["server-framework"] 
    // And modules: ["react"]
    // Remote extensions
    // TODO: get pinned URL's working
    [
      "snowpack-plugin-skypack-replacer", {
        "modules": {
          "react-dom": "17.0.1",
          "react": "17.0.1"
        },
        "extensions": [".js", ".jsx"]
      }
    ]
  ]
}