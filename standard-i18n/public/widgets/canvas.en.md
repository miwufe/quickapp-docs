# canvas

## Overview

Canvas component; by using scripts in JavaScript, you can draw graphics on the canvas, make photos, create animations, etc.

## Child components

Not supported

## Attribute

Supports [common attributes](common-attributes.en.md)

## Styles

Supports [common styles](common-styles.en.md)

## Events

Supports [common events](common-events.en.md)

## Method

### canvas.toTempFilePath(Object object)

Export the content of the specified area of the current canvas to generate an image of the specified size.

#### Parameters

Object object

| Attribute  | Type     | Default value                  | Required | Description                                                                                                                        |
| ---------- | -------- | ------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| x          | number   | 0                              | No       | The horizontal axis of the upper left corner of the specified canvas area                                                          |
| y          | number   | 0                              | No       | The vertical axis of the upper left corner of the specified canvas area                                                            |
| width      | number   | canvas width-x                 | No       | The width of the specified canvas area                                                                                             |
| height     | number   | canvas height-y                | No       | The height of the specified canvas area                                                                                            |
| destWidth  | number   | width\*screen pixel density  | No       | The width of the output image                                                                                                      |
| destHeight | number   | height\*screen pixel density | No       | The height of the output image                                                                                                     |
| fileType   | string   | png                            | No       | Target file type                                                                                                                   |
| quality    | number   | 1.0                            | No       | The image quality is currently valid only for jpg.The value range is (0, 1]; if it is not in the range, it will be treated as 1.0. |
| success    | function |                                | No       | Callback function for successful interface call                                                                                    |
| fail       | function |                                | No       | Callback function for interface call failure                                                                                       |
| complete   | function |                                | No       | The callback function for the end of the interface call (The call will be executed whether the call succeeds or fails)             |

##### Legal value of object.fileType

| Value | Description |
| ----- | ----------- |
| jpg   | jpg image   |
| png   | png image   |

##### object.success callback function

###### Parameters

Object res

| Attribute        | Type   | Description                    | Notes                      |
| ---------------- | ------ | ------------------------------ | -------------------------- |
| uri `deprecated` | string | The path of the generated file | Use `tempFilePath` instead |
| tempFilePath     | string | The path of the generated file | -                          |

#### Sample code

```js
// ...
onShow() {
  this.$element('canvas').toTempFilePath({
    x: 50,
    y: 50,
    width: 350,
    height: 350,
    destWidth: 200,
    destHeight: 200,
    fileType: 'png',
    quality: 0.5,
    success: (res) => {
      this.imageUrl = res.tempFilePath
    },
    fail: (err, code) => {
      prompt.showToast({
        message: `Error reason: ${err}, error code: ${code}`
      })
    }
  })
}
// ...
```

### canvas.getContext()

Create canvas drawing context

#### Parameters

| Parameters  | Type             | Description                      |
| ----------- | ---------------- | -------------------------------- |
| contextType | `<string>` | Currently supports incoming '2d' |

#### Return value

| Parameters | Type                       | Description                                                                                                            |
| ---------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| '2d'       | `CanvasRenderingContext2D` | Return a CanvasRenderingContext2D object for 2D drawing; please refer to [CanvasRenderingContext2D](#context2d) object |

#### 示例

```
var canvas = this.$element('canvasid');
var ctx = canvas.getContext('2d');
```

---

# <span id="context2d"> CanvasRenderingContext2D <code>1020+</code></h1>

<h2 spaces-before="0">
  Overview
</h2>

<p spaces-before="0">
  You can draw rectangles, text, pictures and other objects on the canvas through CanvasRenderingContext2D.You can call getContext('2d') on the canvas to get the CanvasRenderingContext2D object.
</p>

<h2 spaces-before="0">
  Methods and properties
</h2>

<h3 spaces-before="0">
  <strong x-id="1">Draw rectangle</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.clearRect()
</h3>

<p spaces-before="0">
  Clear the content in the rectangular area on the canvas
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.clearRect(x, y, width, height);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the upper left corner of the rectangular area
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the upper left corner of the rectangular area
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The width of the rectangular area
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the rectangular area
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.fillRect()
</h3>

<p spaces-before="0">
  Fill a rectangle
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.fillRect(x, y, width, height);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the upper left corner of the rectangular path
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the upper left corner of the rectangular path
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The width of the rectangular path
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the rectangular path
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.strokeRect()
</h3>

<p spaces-before="0">
  Draw a non-filled rectangle
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.strokeRect(x, y, width, height);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the upper left corner of the rectangular path
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the upper left corner of the rectangular path
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The width of the rectangular path
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the rectangular path
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Draw text</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.fillText()
</h3>

<p spaces-before="0">
  Fill text
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.fillText(text, x, y)
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      text
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      Text output on the canvas
    </td>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate position of the upper left corner of the drawn text
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate position of the upper left corner of the drawn text
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.strokeText()
</h3>

<p spaces-before="0">
  The method of drawing text strokes at a given (x, y) position
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.strokeText(text, x, y);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      text
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      The text to be drawn
    </td>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x-axis coordinate of the text starting point
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y-axis coordinate of the text starting point
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.measureText()
</h3>

<p spaces-before="0">
  Returns a TextMetrics object that contains the specified font width in pixels
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.measureText(text);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      text
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      The text to be measured
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Return value
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      TextMetrics
    </td>
    
    <td>
      Returns a TextMetrics object that contains the specified font width in pixels.(TextMetrics.width to get the width)
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Line type</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.lineWidth
</h3>

<p spaces-before="0">
  Set the width of the line
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.lineWidth = lineWidth;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      lineWidth
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Line width
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.lineCap
</h3>

<p spaces-before="0">
  Set the end style of the line
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.lineCap = lineCap;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      lineCap
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      'butt' (default), 'round', 'square'
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.lineJoin
</h3>

<p spaces-before="0">
  Set the intersection style of the line
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.lineJoin = lineJoin;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      lineJoin
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      'bevel', 'round', 'miter' (Default)
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.miterLimit
</h3>

<p spaces-before="0">
  Set the maximum miter length. This refers to the distance between the inner and outer corners at the intersection of two lines
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.miterLimit = miterLimit;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      miterLimit
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The default value is 10
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Text style</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.font
</h3>

<p spaces-before="0">
  Set the attributes of the current font style
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.font = value;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      value
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      A DOMString string conforming to CSS font syntax.The default value is 10px sans-serif
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.textAlign
</h3>

<p spaces-before="0">
  Set the alignment of the text
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.textAlign = align;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      align
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      'start' (default), 'end', 'left', 'center', 'right'
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.textBaseline
</h3>

<p spaces-before="0">
  Set the horizontal alignment of the text
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.textBaseline = textBaseline;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      textBaseline
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      'alphabetic' (Default), 'middle', 'top', 'hanging', 'bottom', 'ideographic'
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Fill and stroke style</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.fillStyle
</h3>

<p spaces-before="0">
  Set fill color
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.fillStyle = color;
ctx.fillStyle = gradient;
ctx.fillStyle = pattern;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      color
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      CSS color
    </td>
  </tr>
  
  <tr>
    <td>
      gradient
    </td>
    
    <td>
      <code>CanvasGradient</code>
    </td>
    
    <td>
      Refer to the <a href="#canvasgradient">CanvasGradient</a> object, which can be created by the CanvasRenderingContext2D.createLinearGradient() method
    </td>
  </tr>
  
  <tr>
    <td>
      pattern
    </td>
    
    <td>
      <code>CanvasPattern</code>
    </td>
    
    <td>
      Created by the CanvasRenderingContext2D.createPattern() method
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.strokeStyle
</h3>

<p spaces-before="0">
  Set the border color
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.strokeStyle = color;
ctx.strokeStyle = gradient;
ctx.strokeStyle = pattern;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      color
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      CSS color
    </td>
  </tr>
  
  <tr>
    <td>
      gradient
    </td>
    
    <td>
      <code>CanvasGradient</code>
    </td>
    
    <td>
      Refer to the <a href="#canvasgradient">CanvasGradient</a> object, which can be created by the CanvasRenderingContext2D.createLinearGradient() method
    </td>
  </tr>
  
  <tr>
    <td>
      pattern
    </td>
    
    <td>
      <code>CanvasPattern</code>
    </td>
    
    <td>
      Created by the CanvasRenderingContext2D.createPattern() method
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Gradients and patterns</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.createLinearGradient()
</h3>

<p spaces-before="0">
  Create a linear gradient color
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.createLinearGradient(x0, y0, x1, y1);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x0
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the starting point
    </td>
  </tr>
  
  <tr>
    <td>
      y0
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the starting point
    </td>
  </tr>
  
  <tr>
    <td>
      x1
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the end point
    </td>
  </tr>
  
  <tr>
    <td>
      y1
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the end point
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.createPattern()
</h3>

<p spaces-before="0">
  The method of creating a pattern for a specified image, which can repeat the original image in the specified direction
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.createPattern(image, repetition);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      image
    </td>
    
    <td>
      <code>Image</code>
    </td>
    
    <td>
      Duplicate image source, refer to <a href="#image">Image</a> object
    </td>
  </tr>
  
  <tr>
    <td>
      repetition
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      Specify how to repeat the image, 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Path</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.beginPath()
</h3>

<p spaces-before="0">
  Start creating a new path
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.beginPath();
</code></pre>

<h3 spaces-before="0">
  CanvasRenderingContext2D.closePath()
</h3>

<p spaces-before="0">
  Close a path
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.closePath();
</code></pre>

<h3 spaces-before="0">
  CanvasRenderingContext2D.moveTo()
</h3>

<p spaces-before="0">
  Move the path to the specified point on the canvas
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.moveTo(x, y);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the target location
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the target location
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.lineTo()
</h3>

<p spaces-before="0">
  Use a straight line to connect the end point of the subpath to the x and y coordinates
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.lineTo(x, y);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the target location
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the target location
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.bezierCurveTo()
</h3>

<p spaces-before="0">
  Draw cubic Bezier curve path
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      cp1x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the first Bezier control point
    </td>
  </tr>
  
  <tr>
    <td>
      cp1y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the first Bezier control point
    </td>
  </tr>
  
  <tr>
    <td>
      cp2x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the second Bezier control point
    </td>
  </tr>
  
  <tr>
    <td>
      cp2y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the second Bezier control point
    </td>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the end point
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the end point
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.quadraticCurveTo()
</h3>

<p spaces-before="0">
  Create a quadratic Bezier path
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.quadraticCurveTo(cpx, cpy, x, y);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      cpx
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the Bezier control point
    </td>
  </tr>
  
  <tr>
    <td>
      cpy
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the Bezier control point
    </td>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the end point
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the end point
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.arc()
</h3>

<p spaces-before="0">
  Draw an arc
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the circle
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the circle
    </td>
  </tr>
  
  <tr>
    <td>
      radius
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The radius of the circle
    </td>
  </tr>
  
  <tr>
    <td>
      startAngle
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Starting radian; the x-axis direction begins to be calculated, and the unit is expressed as a radian.
    </td>
  </tr>
  
  <tr>
    <td>
      endAngle
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Ending arc
    </td>
  </tr>
  
  <tr>
    <td>
      anticlockwise
    </td>
    
    <td>
      Boolean
    </td>
    
    <td>
      Optional.If true, draw the circle counterclockwise. Otherwise, draw clockwise
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.arcTo()
</h3>

<p spaces-before="0">
  Draw an arc path based on control points and radius
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.arcTo(x1, y1, x2, y2, radius);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x1
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x-axis coordinate of the first control point
    </td>
  </tr>
  
  <tr>
    <td>
      y1
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y-axis coordinate of the first control point
    </td>
  </tr>
  
  <tr>
    <td>
      x2
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x-axis coordinate of the second control point
    </td>
  </tr>
  
  <tr>
    <td>
      y2
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y-axis coordinate of the second control point
    </td>
  </tr>
  
  <tr>
    <td>
      radius
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Radius of the arc
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.rect()
</h3>

<p spaces-before="0">
  Create a rectangle
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.rect(x, y, width, height);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The x coordinate of the upper left corner of the rectangular path
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The y coordinate of the upper left corner of the rectangular path
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The width of the rectangular path
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the rectangular path
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Draw a path</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.fill()
</h3>

<p spaces-before="0">
  Fill in the content in the current path
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.fill();
</code></pre>

<h3 spaces-before="0">
  CanvasRenderingContext2D.stroke()
</h3>

<p spaces-before="0">
  Draw the border of the current path
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.stroke();
</code></pre>

<h3 spaces-before="0">
  CanvasRenderingContext2D.clip()
</h3>

<p spaces-before="0">
  Set the currently created path as the current clipping path
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code> ctx.clip();
</code></pre>

<h3 spaces-before="0">
  <strong x-id="1">Transform</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.rotate()
</h3>

<p spaces-before="0">
  Rotate the current axis clockwise
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.rotate(angle);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      rotate
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The radian of the clockwise rotation.If you want to calculate by the angle value, you can use the formula: degree \* Math.PI / 180.The center of rotation is always the starting point of the canvas. If you want to change the center point, you can move the canvas through the translate() method.
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.scale()
</h3>

<p spaces-before="0">
  According to the x horizontal direction and the y vertical direction, a zoom transformation is added to the canvas unit.
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.scale(x, y);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Scale factor in the horizontal direction
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Vertical zoom factor
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.setTransform()
</h3>

<p spaces-before="0">
  Use the matrix to reset (overwrite) the current transformation method
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      scaleX
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Horizontal zoom
    </td>
  </tr>
  
  <tr>
    <td>
      skewX
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Horizontal tilt
    </td>
  </tr>
  
  <tr>
    <td>
      skewY
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Vertical tilt
    </td>
  </tr>
  
  <tr>
    <td>
      scaleY
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Vertical zoom
    </td>
  </tr>
  
  <tr>
    <td>
      translateX
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Move horizontally
    </td>
  </tr>
  
  <tr>
    <td>
      translateY
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Move vertically
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.transform()
</h3>

<p spaces-before="0">
  Use a matrix to overlay the current transformation multiple times
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.transform(scaleX, skewX, skewY, scaleY, translateX, translateY);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      scaleX
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Horizontal zoom
    </td>
  </tr>
  
  <tr>
    <td>
      skewX
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Horizontal tilt
    </td>
  </tr>
  
  <tr>
    <td>
      skewY
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Vertical tilt
    </td>
  </tr>
  
  <tr>
    <td>
      scaleY
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Vertical zoom
    </td>
  </tr>
  
  <tr>
    <td>
      translateX
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Move horizontally
    </td>
  </tr>
  
  <tr>
    <td>
      translateY
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Move vertically
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.translate()
</h3>

<p spaces-before="0">
  Transform the origin (0, 0) of the current coordinate system
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.translate(x, y);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      x
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Horizontal coordinate shift
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Vertical coordinate translation
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Synthesis</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.globalAlpha
</h3>

<p spaces-before="0">
  Set global brush transparency
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.globalAlpha = value;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      value
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The number is between 0.0 (fully transparent) and 1.0 (fully opaque).  The default value is 1.0
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Draw image</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.drawImage()
</h3>

<p spaces-before="0">
  Draw image on canvas
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.drawImage(image, dx, dy);
ctx.drawImage(image, dx, dy, dWidth, dHeight);
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      image
    </td>
    
    <td>
      <code>Image</code>
    </td>
    
    <td>
      The image resource to be drawn, refer to the <a href="#image">Image</a> object
    </td>
  </tr>
  
  <tr>
    <td>
      dx
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The position of the upper left corner of the image on the X axis of the target canvas
    </td>
  </tr>
  
  <tr>
    <td>
      dy
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The position of the upper left corner of the image on the y axis of the target canvas
    </td>
  </tr>
  
  <tr>
    <td>
      dWidth
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The width of the drawn image on the target canvas, allowing the drawn image to be scaled
    </td>
  </tr>
  
  <tr>
    <td>
      dHeigt
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the image drawn on the target canvas, allowing the drawn image to be scaled
    </td>
  </tr>
  
  <tr>
    <td>
      sx
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The X coordinate of the upper left corner of the rectangular selection box of the source image
    </td>
  </tr>
  
  <tr>
    <td>
      sy
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The Y coordinate of the upper left corner of the rectangular selection box of the source image
    </td>
  </tr>
  
  <tr>
    <td>
      sWidth
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the rectangular selection box of the source image
    </td>
  </tr>
  
  <tr>
    <td>
      sHeight
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the rectangular selection box of the source image
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  <strong x-id="1">Canvas status</strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.restore()
</h3>

<p spaces-before="0">
  Restore the previously saved drawing context
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.restore();
</code></pre>

<h3 spaces-before="0">
  CanvasRenderingContext2D.save()
</h3>

<p spaces-before="0">
  Save the current drawing context
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.save();
</code></pre>

<h3 spaces-before="0">
  <strong x-id="1">Pixel operation <code>1030+</code></strong>
</h3>

<h3 spaces-before="0">
  CanvasRenderingContext2D.createImageData()
</h3>

<p spaces-before="0">
  Create a new, blank, and specified size ImageData object, refer to <a href="#imagedata">ImageData</a>
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>imagedata = ctx.createImageData(width, height);
imagedata = ctx.createImageData(imagedata);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The width of the new ImageData object
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the new ImageData object
    </td>
  </tr>
  
  <tr>
    <td>
      imagedata
    </td>
    
    <td>
      <code>&lt;object&gt;</code>
    </td>
    
    <td>
      Copy an object with the same width and height from the existing ImageData object.The image itself may not be copied.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Return value
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;object&gt;</code>
    </td>
    
    <td>
      The new ImageData object with the specified width and height. The new object is filled with transparent pixels.
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.getImageData()
</h3>

<p spaces-before="0">
  Return an ImageData object to describe the pixel data hidden in the canvas area
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>imagedata = ctx.getImageData(sx, sy, sw, sh);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      sx
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The X coordinate of the upper left corner of the rectangular area of the image data to be extracted
    </td>
  </tr>
  
  <tr>
    <td>
      sy
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The Y coordinate of the upper left corner of the rectangular area of the image data to be extracted
    </td>
  </tr>
  
  <tr>
    <td>
      sw
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The width of the rectangular area of the image data to be extracted
    </td>
  </tr>
  
  <tr>
    <td>
      sh
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the rectangular area of the image data to be extracted
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Return value
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;object&gt;</code>
    </td>
    
    <td>
      An ImageData object containing the rectangular image data given by the canvas
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.putImageData()
</h3>

<p spaces-before="0">
  Use image pixel objects to draw rectangles
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.putImageData(imagedata, dx, dy);
ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      imagedata
    </td>
    
    <td>
      <code>&lt;object&gt;</code>
    </td>
    
    <td>
      An ImageData object, an array object containing pixel values
    </td>
  </tr>
  
  <tr>
    <td>
      dx
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The position offset of the source image data in the target canvas; the offset of the X axis direction
    </td>
  </tr>
  
  <tr>
    <td>
      dy
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The position offset of the source image data in the target canvas; the offset of the Y axis direction
    </td>
  </tr>
  
  <tr>
    <td>
      dirtyX
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The position of the upper left corner of the rectangular area in the source image data.The default is the X coordinate of the upper left corner of the entire image data
    </td>
  </tr>
  
  <tr>
    <td>
      dirtyY
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The position of the upper left corner of the rectangular area in the source image data.The default is the Y coordinate of the upper left corner of the entire image data
    </td>
  </tr>
  
  <tr>
    <td>
      dirtyWidth
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The width of the rectangular area in the source image data.The default is the width of the image data
    </td>
  </tr>
  
  <tr>
    <td>
      dirtyHeight
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The height of the rectangular area in the source image data.The default is the height of the image data
    </td>
  </tr>
</table>

<p spaces-before="0">
  Note: The starting position of the rectangle drawn by the <code>putImageData</code> method in Quick App is different from the online performance and developers should be aware of this.
</p>

<h3 spaces-before="0">
  CanvasRenderingContext2D.setLineDash() <code>1040+</code>
</h3>

<p spaces-before="0">
  How to set the dotted line style
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.setLineDash(segments);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      segments
    </td>
    
    <td>
      <code>&lt;Array&gt;</code>
    </td>
    
    <td>
      Numbers describing the length of alternate lines and gaps
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.getLineDash() <code>1040+</code>
</h3>

<p spaces-before="0">
  How to get the current line segment style
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.getLineDash();
</code></pre>

<h4 spaces-before="0">
  Return value
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      <code>&lt;Array&gt;</code>
    </td>
    
    <td>
      Returns an array, a set of numbers describing alternately drawn line segments and spacing length
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.lineDashOffset <code>1040+</code>
</h3>

<p spaces-before="0">
  Set the attributes of the dotted line offset
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.lineDashOffset = value;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      value
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The offset is a number with float precision. The initial value is 0.0
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.globalCompositeOperation <code>1040+</code>
</h3>

<p spaces-before="0">
  Set the type of compositing operation to be applied when drawing a new shape.
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>ctx.globalCompositeOperation = type;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      type
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      A string identifying the composition or mixed mode operation to be used
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Attribute value
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Value
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      source-over
    </td>
    
    <td>
      DefaultDisplay the source image on the target image.
    </td>
  </tr>
  
  <tr>
    <td>
      source-atop
    </td>
    
    <td>
      Display the source image above the target image.The part of the source image outside the target image is not visible.
    </td>
  </tr>
  
  <tr>
    <td>
      source-in
    </td>
    
    <td>
      Display the source image in the target image.Only the part of the source image within the target image will be displayed, and the target image will be transparent.
    </td>
  </tr>
  
  <tr>
    <td>
      source-out
    </td>
    
    <td>
      Display the source image outside of the target image.Only the part of the source image outside of the target image will be displayed, and the target image will be transparent.
    </td>
  </tr>
  
  <tr>
    <td>
      destination-over
    </td>
    
    <td>
      Display the target image on the source image.
    </td>
  </tr>
  
  <tr>
    <td>
      destination-atop
    </td>
    
    <td>
      Display the target image on top of the source image.The part of the target image outside of the source image will not be displayed.
    </td>
  </tr>
  
  <tr>
    <td>
      destination-in
    </td>
    
    <td>
      Display the target image in the source image.Only the part of the target image within the source image will be displayed, and the source image will be transparent.
    </td>
  </tr>
  
  <tr>
    <td>
      destination-out
    </td>
    
    <td>
      Display the target image outside of the source image.Only the part of the target image outside of the source image will be displayed, and the source image will be transparent.
    </td>
  </tr>
  
  <tr>
    <td>
      lighter
    </td>
    
    <td>
      Show source image + target image.
    </td>
  </tr>
  
  <tr>
    <td>
      copy
    </td>
    
    <td>
      Display the source image.Ignore the target image.
    </td>
  </tr>
  
  <tr>
    <td>
      xor
    </td>
    
    <td>
      Use the exclusive OR operation to combine the source and target images.
    </td>
  </tr>
</table>

<hr />

<h3 spaces-before="0">
  CanvasRenderingContext2D.shadowBlur <code>1060+</code>
</h3>

<p spaces-before="0">
  The blur level of the shadow; the larger the value, the more blurred. The default value is 0
</p>

<h3 spaces-before="0">
  Syntax
</h3>

<pre><code>ctx.shadowBlur = blur;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      blur
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      A value of float type describing the degree of blurring.The default value is 0。
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.shadowColor<code>1060+</code>
</h3>

<p spaces-before="0">
  Can be converted to CSS <color> The DOMString string of the value. The default value is fully-transparent black.
</p>

<h3 spaces-before="0">
  Syntax
</h3>

<pre><code>ctx.shadowColor = color;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      color
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      CSS color, fuzzy color
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.shadowOffsetX<code>1060+</code>
</h3>

<p spaces-before="0">
  The value of float type for the horizontal offset distance of the shadow.The default value is 0。
</p>

<h3 spaces-before="0">
  Syntax
</h3>

<pre><code>ctx.shadowOffsetX = offsetX;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      offsetX
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The offset of the shadow in the horizontal direction
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  CanvasRenderingContext2D.shadowOffsetY<code>1060+</code>
</h3>

<p spaces-before="0">
  The value of float type for the vertical offset distance of the shadow. The default value is 0。
</p>

<h3 spaces-before="0">
  Syntax
</h3>

<pre><code>ctx.shadowOffsetY = offsetY;
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      offsetY
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Offset of the shadow in the vertical direction
    </td>
  </tr>
</table>

<h1 spaces-before="0">
  <span id="image"> Image <code>1020+</code></h1>

<h2 spaces-before="0">
  Overview
</h2>

<p spaces-before="0">
  Image object, created by new Image()
</p>

<h2 spaces-before="0">
  Attribute
</h2>

<table spaces-before="0">
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Default value
    </th>
    
    <th>
      Required
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      src
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      ""
    </td>
    
    <td>
      Yes
    </td>
    
    <td>
      Network address or local resource.Support internal URI <code>1030+</code>
    </td>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    
    <td>
      <code>&lt;length&gt;</code>
    </td>
    
    <td>
      0px
    </td>
    
    <td>
      No
    </td>
    
    <td>
      Image height
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    
    <td>
      <code>&lt;length&gt;</code>
    </td>
    
    <td>
      0px
    </td>
    
    <td>
      No
    </td>
    
    <td>
      Image width
    </td>
  </tr>
</table>

<h2 spaces-before="0">
  Events
</h2>

<table spaces-before="0">
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Parameters
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      onload
    </td>
    
    <td>
      { type: 'load', target: image }
    </td>
    
    <td>
      src is invoked after the image is loaded successfully
    </td>
  </tr>
  
  <tr>
    <td>
      onerror
    </td>
    
    <td>
      { type: 'error', target: image }
    </td>
    
    <td>
      src is invoked after the image fails to load
    </td>
  </tr>
</table>

<hr />

<h1 spaces-before="0">
  <span id="canvasgradient"> CanvasGradient <code>1020+</code></h1>

<h2 spaces-before="0">
  Overview
</h2>

<p spaces-before="0">
  Gradient object, created by CanvasRenderingContext2D.createLinearGradient()
</p>

<h2 spaces-before="0">
  Syntax
</h2>

<pre><code>const gradient = ctx.createLinearGradient(0,0,200,0);
gradient.addColorStop(0,"green");
gradient.addColorStop(1,"white");
</code></pre>

<h2 spaces-before="0">
  Method
</h2>

<h3 spaces-before="0">
  CanvasGradient.addColorStop()
</h3>

<p spaces-before="0">
  This method adds a breakpoint specified by the offset value and the color value on the CanvasGradient object
</p>

<h4 spaces-before="0">
  Syntax
</h4>

<pre><code>gradient.addColorStop(offset, color);
</code></pre>

<h4 spaces-before="0">
  Parameters
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Parameters
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      offset
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      The value between <code>0</code> and <code>1</code>, which indicates the position of the gradient point in the start and end points
    </td>
  </tr>
  
  <tr>
    <td>
      color
    </td>
    
    <td>
      <code>&lt;string&gt;</code>
    </td>
    
    <td>
      CSS Color
    </td>
  </tr>
</table>

<hr />

<h1 spaces-before="0">
  <span id="imagedata"> ImageData <code>1030+</code></h1>

<h2 spaces-before="0">
  Overview
</h2>

<p spaces-before="0">
  The ImageData object is an ordinary object, which stores the real pixel data of the canvas object
</p>

<h2 spaces-before="0">
  Attribute
</h2>

<table spaces-before="0">
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      width
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Use pixels to describe the actual width of the ImageData
    </td>
  </tr>
  
  <tr>
    <td>
      height
    </td>
    
    <td>
      <code>&lt;number&gt;</code>
    </td>
    
    <td>
      Use pixels to describe the actual height of the ImageData
    </td>
  </tr>
  
  <tr>
    <td>
      data
    </td>
    
    <td>
      <code>&lt;Uint8ClampedArray&gt;</code>
    </td>
    
    <td>
      A one-dimensional array containing data in RGBA order, the data is represented by integers from 0 to 255 (inclusive)
    </td>
  </tr>
</table>

<h2 spaces-before="0">
  canvas &nbsp; Sample Code
</h2>

<p spaces-before="0">
  View <a href="https://github.com/quickappcn/sample/blob/master/src/component/media/canvas/index.ux">Sample Code</a>
</p>
