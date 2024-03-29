---
title: Liquid Filters
---

# Liquid Filters

[HTML/CSS Templates](./index) use the [Liquid markup language](https://shopify.github.io/liquid/basics/introduction/). You can use "filters" to format and modify any field values before inserting them into the page.

DocSpring supports most of the filters in [the Liquid documentation](https://shopify.github.io/liquid/). However, you may find some filters in [Shopify's Liquid documentation](https://shopify.dev/docs/themes/liquid/reference) that we don't currently support. Please [contact us](mailto:support@docspring.com) if you would like us to add a new filter.

## Tips

- Use the [`newline_to_br`](https://shopify.github.io/liquid/filters/newline_to_br/) filter to replace newline characters (`\n`) with HTML line breaks (`<br/>`). Otherwise, any multi-line strings will be displayed on a single line.

## DocSpring Liquid Filters

Listed below are some Liquid filters that are unique to DocSpring:

### `pluralize`

```
{{ count | pluralize: "<singular>" }}

{{ count | pluralize: "<singular>", "<plural>" }}
```

Pluralize a string based on the count.

**Parameters:**

- `singular` _(required)_ - String to use when count is 1
- `plural` - String to use when count is 0 or more than 1 (defaults to adding an “`s`” to singular)

**Examples:**

```liquid
{{ 1 | pluralize: "thing" }}
=> "thing"

{{ 2 | pluralize: "thing" }}
=> "things"

{{ 0 | pluralize: "city", "cities" }}
=> "cities"
```

---

### `delimited`

```
{{ number | delimited }}

{{ number | delimited: "<delimiter>", "<separator>" }}
```

Formats a number with grouped thousands (e.g. `12,324`.)

**Parameters:**

- `delimiter` - Sets the thousands delimiter (defaults to “`,`”).
- `separator` - Sets the separator between the fractional and integer digits (defaults to “`.`”).

**Examples:**

```liquid
{{ 1000 | delimited }}
=> "1,000"

{{ 1000000 | delimited }}
=> "1,000,000"

{{ 1000000 | delimited }}
=> "1,000,000"

{{ 1000 | delimited: " " }}
=> "1 000"

{{ 1000.45 | delimited: ".", "," }}
=> "1.000,45"
```

### `currency`

```
{{ number | currency }}

{{ number | currency: "<delimiter>", "<separator>", "<format>", "<negative_format>", "<precision>" }}
```

Formats a number as a currency, with grouped thousands and two decimal places (e.g. `$12,324.00`.)

**Parameters:**

- `unit` - Sets the denomination of the currency (defaults to “`$`”).
- `delimiter` - Sets the thousands delimiter (defaults to “`,`”).
- `separator` - Sets the separator between the fractional and integer digits (defaults to “`.`”).
- `format` - Sets the format for non-negative numbers (defaults to “`%u%n`”). Fields are `%u` for the currency, and `%n` for the number.
- `negative_format` - Sets the format for negative numbers (defaults to prepending a hyphen to the formatted number given by `format`). Accepts the same fields than `format`, except `%n` is here the absolute value of the number.
- `precision` - Sets the level of precision for decimal places (defaults to 2).

**Examples:**

```liquid
{{ 1 | currency }}
=> "$1.00"

{{ 1000 | currency }}
=> "$1,000.00"

{{ 1234.56 | currency: "€", ".", ","  }}
=> "€1.234,56"

{{ -1234567890.50 | currency: "$", ",", ".", "%u%n", "(%u%n)" }}
=> ($1,234,567,890.50)

{{ 1234567890.50 | currency: "R$", "", ",", "%n %u" }}
=> 1234567890,50 R$
```

### `in_time_zone`

```
{{ date | in_time_zone: "<timezone>" }}

{{ 'now' | in_time_zone: "<timezone>" }}
```

Convert a date into a specific timezone. You can also pass `'now'` or `'today'` to use the current time.

**Parameters:**

- `timezone` - [Here is the list of all available timezones.](./liquid-timezones)

**Examples:**

```liquid
{{ 'now' | in_time_zone: "America/New_York" | date: "%Y-%m-%d %H:%M" }}
=> "2020-04-30 04:04"

{{ 'now' | in_time_zone: "Asia/Kuala_Lumpur" | date: "%Y-%m-%d %H:%M" }}
=> "2020-04-30 16:04"
```
