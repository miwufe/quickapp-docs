# Source file

App, the web page, and the custom components are compiled through the UX file. The UX file is composed of the [template](template.md), [style sheet](style-sheet.md), and [script](script.md). The following is a typical example of a UX file:

```
<template>
  <div class="container" onclick="press">
    <text class="{{title}}" style="font-size:14px;">Hello {{title}}</text>
  </div>
</template>

<style>
  .container{
    flex-direction: column;
    justify-items: center;
  }
  .title {
    color: red;
```

## app.ux

Don't delete the annotations from the `/**manifest**/`, because after compiling the current `app.ux`, it will contain the `manifest configuration information` (you can check the file content after `npm run build`).

You can import some public scripts into the `<script>` and reveal them on the current app's target as shown below. You can then visit it through `this.$app.util` in the ViewMode of the web page's UX file.

```
<script>
    import util from './util.js'

    module.exports = {
        /**manifest**/,
        util: util
    }
</script>
```
