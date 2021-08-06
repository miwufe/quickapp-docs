# video

## Overview

Video player

## Child component

Not supported

## Attributes

Supports [common attributes](common-attributes.md)

| Name     | Type        | Default value | Required | Description                         |
| -------- | ----------- | ------------- | -------- | ----------------------------------- |
| src      | `<uri>`     | -             | No       | URI of the video play content       |
| autoplay | `<boolean>` | false         | No       | Whether to autoplay after rendering |
| poster   | `<uri>`     | -             | No       | Video preview poster                |

## Styles

Supports [common styles](common-styles.md)

## Events

Supports [common events](common-events.md)

| Name                    | Parameters                    | Description                              |
| ----------------------- | ----------------------------- | ---------------------------------------- |
| prepared                | -                             | Triggered when the video connects        |
| start                   | -                             | Triggered when the video starts          |
| pause                   | -                             | Triggered when paused                    |
| finish                  | -                             | Triggered when video finishes            |
| error                   | -                             | Triggered when video couldn't play       |
| seeking `101+`          | {currenttime: value(seconds)} | Triggered when play progress bar slides  |
| seeked `101+`           | {currenttime: value(seconds)} | Triggered when the play progress bar slide is released |
| timeupdate `101+`       | {currenttime: value(seconds)} | Triggered when the play progress bar changes, trigger frequency is 4HZ |
| fullscreenchange `101+` | {fullscreen: fullscreenValue} | Triggered when the video enters or exits full screen |

## Method

| Name                     | Parameters                    | Description                 |
| ------------------------ | ----------------------------- | --------------------------- |
| start                    | -                             | Start playing video         |
| pause                    | -                             | Pause playing video         |
| setCurrentTime `101+`    | {currenttime: value(seconds)} | Specify video play location |
| requestFullscreen `101+` | -                             | Video enters full screen    |
| exitFullscreen `101+`    | -                             | Video exits full screen     |
