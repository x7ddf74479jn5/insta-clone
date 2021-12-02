# Next.js starter template

- Next.js
- TypeScript
- ESLint
- Prettier
- Jest
- Storybook
- MSW
- Hygen
- Google Analytics

## Omit

- Jest

```shell
rm -rf jest jest.config.js
yarn remove @swc/core @swc/jest @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @types/jest @types/react-test-renderer @types/testing-library__react identity-obj-proxy jest jest-watch-typeahead react-test-renderer
sed -i -e '/jest/d' package.json
```

- Storybook

```shell
rm -rf .storybook .github/workflow/storybook.yml
yarn remove @storybook/addon-a11y @storybook/addon-a11y @storybook/react storybook-addon-performance @storybook/addon-interactions @storybook/testing-library
sed -i -e '/storybook/d' package.json
```

- MSW

```shell
rm -rf mocks/msw mockServiceWorker.js
yarn remove msw
```

- Hygen

```shell
rm -rf .hygen .hygen.js
yarn remove hygen
sed -i -e '/hygen/d' package.json
```

- Google Analytics

```shell
rm -rf src/lib/gtag.tsx src/types/gtm-evet.d.ts
yarn remove @types/gtag.js
```
