const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases (if you have any in tsconfig.json)
    '^components/(.*)$': '<rootDir>/components/$1',
    '^app/(.*)$': '<rootDir>/app/$1',
    // Handle CSS imports
    '\\.css$': 'identity-obj-proxy'
  },
  transform: {
    // Use SWC to transform JavaScript/TypeScript files
    '^.+\\.(js|jsx|ts|tsx)$': ['@swc/jest']
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleDirectories: ['node_modules', '<rootDir>']
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)