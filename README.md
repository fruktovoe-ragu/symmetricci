# `symmetricci component library`

## To rollup the project

```sh
npm run rollup
```

## To start the hot-reloading Storybook development server locally (on port 6006)

```sh
npm run storybook
```

## To run Style Dictionary configuratino

.json with tokens is recieved from Figma using plugin 'Variables to JSON' before processing have to be converted to DTCG here https://styledictionary.com/reference/tokens/ to add $ symbol for value and then placed in src/design-tokens/raw/initialTokens.json

After initialTokens.json is prepared, run commmand below to generate variables in src/design-tokens/colors.ts:

```bash
npx style-dictionary build --config ./sdconfig.js
```
