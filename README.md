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

---

Copyright 2018 Scott Tesler

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
