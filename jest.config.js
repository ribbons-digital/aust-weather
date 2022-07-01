const config = {
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};

module.exports = config;
