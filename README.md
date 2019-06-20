# logurt 🍦

_Prettier logging_

[![npm version](https://badge.fury.io/js/logurt.svg)](https://badge.fury.io/js/logurt)
[![JavaScript Style Guide: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier "Prettier")
[![Dependencies](https://david-dm.org/scotttesler/logurt.svg)](https://david-dm.org/scotttesler/logurt "Dependencies")

## Installation

`npm i -S logurt`

## Usage

```js
const Logurt = require("logurt");

Logurt.error("An error occurred.");
Logurt.info("Here's some information.");
Logurt.success("Good job!");
Logurt.warning("Something doesn't look right . . .");
```

Outputs:

<img src="https://i.imgur.com/79LRRLK.png" alt="Image" width="400px" />
