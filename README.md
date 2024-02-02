# Sanitize Persian Texts

Package to easily sanitize your Persian (Farsi) strings and numbers.

## Usage

```js
import sanitizePersian from "sanitize-persian";

console.log(sanitizePersian("۱ متن فارسی با كاراکترهای عربی")); // -> "متن فارسی با کاراکترهای عربی 1"

console.log(
    sanitizePersian(" 1 متن فارسی با كاراکترهای عربی ", {
        numbers: "toPersian",
    })
); // -> "۱ متن فارسی با کاراکترهای عربی"

console.log(
    sanitizePersian(" ۱1 متن فارسی با كاراکترهای عربی ", {
        numbers: false,
    })
); // -> "۱1 متن فارسی با کاراکترهای عربی"

console.log(
    sanitizePersian(" ۱ متن فارسی با كاراکترهای عربی ", {
        trim: false,
    })
); // -> " ۱ متن فارسی با كاراکترهای عربی "
```

### API

```js
sanitizePersian(str, options?)
```

| options | Description                                                                                | Values                                | Default       |
|---------|--------------------------------------------------------------------------------------------|---------------------------------------|---------------|
| numbers | Decide whether the numbers should be translated into Persian, English, or remain unchanged | `"toEnglish"`, `"toPersian"`, `false` | `"toEnglish"` |
| trim    | Decide if the string should be trimmed or not                                              | `true`, `false`                       | `true`        |
