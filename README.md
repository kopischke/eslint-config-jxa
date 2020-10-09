# eslint-config-jxa

An [ESLint Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) to extend ESLint’s awesome linting powers to macOS JavaScript for Automation (JXA) code.

## Installation

You'll first need to install [ESLint](https://eslint.org/docs/user-guide/getting-started#installation-and-usage), e.g.:

```sh
$ npm install eslint --save-dev
```

Next, install `eslint-config-jxa`, e.g.:

```sh
$ npm install eslint-config-jxa --save-dev
```

## Usage

Add the relevant configuration to your [_extends_](https://eslint.org/docs/user-guide/configuring#use-a-plugin) section. 

### Basic configuration

If you use standard JavaScript file extensions (i.e. `.js`) for your JXA source code, all you have to do is to add this to your `.eslintrc` file`:

```json
{
  "extends": [
    "jxa"
  ]
}
```

If you use the `.jxa` file extension, extend in an [_override_](https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns) instead:

```json
{
  "overrides": [
    {
      "files": ["*.jxa"],
      "extends": ["jxa"]
    }
  ]
}
```

### Additional configuration

Besides the default configuration, there are additional configurations available for some special JXA coding scenarios:
 
 - **objc**: for JXA source that uses the Objective C bridge.
 - **library**: for JXA files intended to be loaded via `Library()`.
 - **injection**: for JXA files intended as [JXA Infusion][jxa-infusion] injections.

Note these will only work in conjunction with the basic configuration. Because the additional configurations disable some ESLint rules, you should only include them in very specific overrides, e.g. (example taken from the [JXA Infusion][jxa-infusion] project):

```json
"overrides": [
  {
    "files": ["*.jxa"],
    "extends": ["jxa"]
  },
  {
    "files": ["Injections/**/*.jxa"],
    "extends": [
      "jxa/objc",
      "jxa/injection"
    ]
  },
  {
    "files": ["Libraries/*+/*.jxa"],
    "extends": [
      "jxa/objc",
      "jxa/library"
    ]
  }
]
```

### License

This config is shared under the [MIT License](https://github.com/kopischke/eslint-config-jxa/blob/main/LICENSE.md).

[jxa-infusion]: https://github.com/kopischke/JXA-Infusion
