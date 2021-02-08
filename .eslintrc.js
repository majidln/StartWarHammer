module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".android.js",
          ".ios.js"
        ]
      },
      "babel-module": {
        "@src": "./src",
        "@assets": "./assets",
        "@screens": "./src/screens",
        "@navigation": "./src/navigation",
        "@services": "./src/services",
        "@hooks": "./src/hooks",
        "@components": "./src/components/",
      }
    }
  }
};
