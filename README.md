# Uno Pollen

Use [Pollen's](pollen.style) CSS variables with [Uno CSS](https://github.com/unocss/unocss). Uses [colar](https://github.com/fchristant/colar) colors.


## Configuration

### Install deps

```sh
ni -D @unocss/core pollen-css @unocss/preset-icons @unocss/transformer-directives @unocss/vite sass @iconify-json
```

### (Optional) install fonts

```sh
ni @fontsource/montserrat @fontsource/inter @fontsource/fira-mono
```

### Copy over files

Copy `pollen.config.js`, `uno.config.ts`, the `uno` folder, and the `src/styles` folder to your project. Optionally copy the `.vscode` folder.

### Add to `vite.config.js`

```js
import Unocss from '@unocss/vite';
import unoConfig from './uno.config';

/** @type {import('vite').UserConfig} */
const config = {
  // ...
	plugins: [
    // UnoCSS must be at the top!
		Unocss({
			...unoConfig,
		}),
    // ...
	],
  // ...
};

export default config;
```

### Import styles

In your `main.js` or `main.ts` file, import the necessary styles.

```js
import 'src/styles/index.scss';
import 'uno.css';
```

## Usage

To rebuild styles, run `npx pollen`