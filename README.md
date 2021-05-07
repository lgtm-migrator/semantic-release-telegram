# semantic-release-telegram
[semantic-release][sr-url] plugin. Provides notifications to [Telegram][tg-url] chats.

[![Version][badge-vers]][npm]
[![Bundle size][npm-size-badge]][npm-size-url]
[![Downloads][npm-downloads-badge]][npm]

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Total alerts][lgtm-alerts-badge]][lgtm-alerts-url]
[![Language grade][lgtm-lg-badge]][lgtm-lg-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![License][badge-lic]][github]

## Table of Contents
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)

## Requirements
To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `6.0+`
* npm `3.0+`

## Installation

To install the library run the following command

```bash
  npm i --save semantic-release-telegram
```

## Usage
The plugin can be configured in the semantic-release [configuration file][sr-config]:

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [ "semantic-release-telegram", {
      "chats": [ 123456789, -987654321 ]
    } ]
  ]
}
```
This is a minimal usage sample with a default configuration. Next messages will be sent:

![Usage Sample](.docs/sample-default_templates.png)

### Configuration

if needed, the configuration can be extended:

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["semantic-release-heroku", {
      "name": "funny-app",
      "chats": [ 123456789 ],
      "templates": {
        "fail"    : "An error occured while trying to publish the new version of <b>{name}</b>.\n<pre><code class='language-javascript'>{error}</code></pre>",
        "success" : "A new version of <a href='{repository_url}'>{name}</a> has been released. Current version is <b>{version}</b>"
      }

    }]
  ]
}
```
Config attribute description:

| Option | Required | Type | Description | Default |
|----|---|---|------------------------------------|------------------------------------|
| `name`          | no | ```string```  | Heroku application name.    | name from package.json |
| `chats`    | yes | ```array``` | List of chats for sending. The bot should have access to each chat. |      |
| `templates.success`    | no |  ```string```  | HTML template, send in case of success. | [SUCCESS.html](templates/SUCCESS.html) |
| `templates.fail`    | no |  ```string```  | HTML template, send in case of fail. | [FAIL.html](templates/FAIL.html) |

Template variables:

| key | Templates | Description | Example |
|----|---|-----------------------|--------|
| `repository_url` | success, fail | The git repository URL. By default repository property in package.json or git origin url | https://github.com/pustovitDmytro/semantic-release-telegram
| `name` | success, fail | application name | funny-app
| `version` | success | new version | 1.0.0
| `release_notes` | success | generated notes |
| `release_type` | success | | minor
| `commit` | success | commit hash | 13b16914f2893fa09e9a39f1dcda78af1fff0dbd
| `branch` | success, fail | | master
| `error` | fail | thrown error | SemanticReleaseError: Cannot push to the Git repository

### Authentication
To use this package, you need to [register](https://core.telegram.org/bots#3-how-do-i-create-a-bot) a new telegram bot. Then pass the next environment variables:

```sh
  TELEGRAM_BOT_ID=123456 
  TELEGRAM_BOT_TOKEN=ABC-DEF1234ghIkl-zyx57W2v1u123ew11
```
[sr-url]: https://github.com/semantic-release/semantic-release
[sr-config]: https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration
[tg-url]: https://telegram.org/

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format:
```
  Tag: Message (fixes #1234)
```

The Tag is one of the following:
* **Fix** - for a bug fix.
* **Update** - for a backwards-compatible enhancement.
* **Breaking** - for a backwards-incompatible enhancement.
* **Docs** - changes to documentation only.
* **Build** - changes to build process only.
* **New** - implemented a new feature.
* **Upgrade** - for a dependency upgrade.
* **Chore** - for tests, refactor, style, etc.

The message summary should be a one-sentence description of the change. The issue number should be mentioned at the end.


[npm]: https://www.npmjs.com/package/semantic-release-telegram
[github]: https://github.com/pustovitDmytro/semantic-release-telegram
[travis]: https://travis-ci.org/pustovitDmytro/semantic-release-telegram
[coveralls]: https://coveralls.io/github/pustovitDmytro/semantic-release-telegram?branch=master
[badge-deps]: https://img.shields.io/david/pustovitDmytro/semantic-release-telegram.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/semantic-release-telegram.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/semantic-release-telegram.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/semantic-release-telegram.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/semantic-release-telegram/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/semantic-release-telegram?branch=master

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/semantic-release-telegram
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/semantic-release-telegram

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/semantic-release-telegram/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/semantic-release-telegram

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/semantic-release-telegram

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/semantic-release-telegram/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/semantic-release-telegram/?branch=master

[lgtm-lg-badge]: https://img.shields.io/lgtm/grade/javascript/g/pustovitDmytro/semantic-release-telegram.svg?logo=lgtm&logoWidth=18
[lgtm-lg-url]: https://lgtm.com/projects/g/pustovitDmytro/semantic-release-telegram/context:javascript

[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/g/pustovitDmytro/semantic-release-telegram.svg?logo=lgtm&logoWidth=18
[lgtm-alerts-url]: https://lgtm.com/projects/g/pustovitDmytro/semantic-release-telegram/alerts/

[codacy-badge]: https://app.codacy.com/project/badge/Grade/8667aa23afaa4725854f098c4b5e8890
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/semantic-release-telegram/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/semantic-release-telegram&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_semantic-release-telegram&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_semantic-release-telegram

[npm-downloads-badge]: https://img.shields.io/npm/dw/semantic-release-telegram
[npm-size-badge]: https://img.shields.io/bundlephobia/min/semantic-release-telegram
[npm-size-url]: https://bundlephobia.com/result?p=semantic-release-telegram
