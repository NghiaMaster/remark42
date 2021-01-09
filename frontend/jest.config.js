module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '\\.css': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/app/__stubs__/svg.tsx',
    '^react$': 'preact/compat',
    '^react-dom$': 'preact/compat',
    /**
     * "transformIgnorePatterns" just don't work for modules down below
     * If you know how to handle it better PR welcome
     */
    // '^@github/markdown-toolbar-element$': 'identity-obj-proxy',
    // '^@github/text-expander-element$': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: [
    '<rootDir>/app/__mocks__/localstorage.ts',
    '<rootDir>/app/__mocks__/fetch.ts',
    '<rootDir>/app/__stubs__/remark-config.ts',
    '<rootDir>/app/__stubs__/static-config.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(lodash-es|@github/markdown-toolbar-element|@github/text-expander-element)/)',
  ],
  collectCoverageFrom: ['!**/__mocks__/**', '!**/__stubs__/**', '!app/locales/**'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
