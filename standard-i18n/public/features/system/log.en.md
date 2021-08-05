# Log printing

## Interface declaration

No declaration required

## Import module

No import required

## Interface definition

### console.debug/log/info/warn/error(message)

Print a paragraph of text

#### Parameters:

| Parameter | Type   | Required | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| message   | String | Yes      | Text to be printed, it can also be formatted text, the rules are the same as the browser console's |

#### Example:

```
for (var i=0; i<5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
}
console.log("I want to print a number: %d", 123456);
```