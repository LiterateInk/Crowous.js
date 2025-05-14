<img alt="Crowous: A wrapper for the Crous Mobile internal API" src="https://raw.githubusercontent.com/LiterateInk/Crowous.js/main/.github/assets/banner.svg" width="100%" />

_This library **is not** affiliated with [&nearr;&nbsp;Les Crous](https://www.lescrous.fr/) in any way._

## What is "Les Crous" ?

[&nearr;&nbsp;Les Crous](https://www.lescrous.fr/) (or _Centres Régionaux des Œuvres Universitaires et Scolaires_) in France are regional organizations that provide various services to students to enhance their quality of life.

[&nearr;&nbsp;Les Crous' mobile app](https://play.google.com/store/apps/details?id=com.einden.crous.poitiers.android) facilitates student life by providing access to housing applications, meal plan management, scholarship information, and various support services directly from their smartphones.

## Installation

Use your favorite package manager to install this library from the npm registry.

```bash
# pnpm
pnpm add crowous

# Yarn
yarn add crowous

# npm
npm add crowous

# Bun
bun add crowous
```

## Quick Start

```typescript
import * as crous from "crowous";

// Note that you don't have to be authenticated to use this library.
const feeds = await crous.feeds();

// Let's list all the feeds !
for (const feed of feeds) {
  console.log(`${feed.name} (${feed.identifier})`);
}
```

You can find guides at [**&nearr;&nbsp;crowous.docs.literate.ink**](https://crowous.docs.literate.ink) and if it's not enough you can also take a look at the [**&nearr;&nbsp;examples** directory on the GitHub repository](https://github.com/LiterateInk/Crowous.js/tree/main/examples) for inspiration.

If none of those are helpful, you can always [&nearr;&nbsp;open an issue](https://github.com/LiterateInk/Crowous.js/issues) to ask for help or join the [&nearr;&nbsp;LiterateInk Discord server](https://literate.ink/discord).

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details.
