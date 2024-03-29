---
title: Field Names
---

# Field Names

## JSON Pointers

DocSpring uses the [JSON Pointer](https://tools.ietf.org/html/rfc6901) syntax for field names, so you can describe the shape of your API by using a forward slash (`/`) to define object keys and array indexes. (Object keys and array indexes use the same syntax.)

Please note that fields names are **case sensitive**. As such, `firstName` and `firstname` will be treated as two separate fields.

> If you need to use `/` or `~` in your field names, then you can escape `/` as `~1`, and `~` as `~0`. (See the [JSON Pointer reference](https://tools.ietf.org/html/rfc6901#section-4).)

## Multiline Fields

To control line spacing and indentation, you can create multiple fields with the same name, and append `#n` to the field name, where `n` is the line index.

In the following example, `extension_reason` is a single field in the API request, but the text will automatically wrap across lines 0 to 5.

![Multiline Field Names](./multiline-name-example.jpg)

> Note: You can also create a simple multiline field by adjusting your field height to fit multiple lines, and checking `Multiline` in the field options:

![Multiline Checkbox](./multiline-checkbox.png)

There is no fixed limit to the number of lines.

## Duplicate Names

You can use the same field name more than once to have the value inserted in multiple positions on the PDF. For example, some forms have separate fields for month, day, and year. You can configure three fields that all share the name `date`, but use different format strings for each field: `%-m` for month, `%-d` for day, and `%Y` for year.

![Day/Month/Year example](./day-month-year.png)

Now you can send a single `date` value in your API request, and we will show a date picker on the online form.

## Special Field Names

DocSpring supports the following special field names:

### `@@data_url`

This field will display a URL where the submission data can be viewed or downloaded. This URL can be displayed as a QR code on the PDF.

You can append `.json`, `.xml`, `.csv`, and `.xlsx` to the URL to download your data in various formats.

> Note: You can enable unauthenticated access to submission data by setting Submission Privacy to "Public" in the [template settings](./settings). Otherwise, you must be signed in to view submission data.

### `@@date`

The date when this submission was created.

### `@@datetime`

The date and time when this submission was created.

## Special Field Names for Data Requests

### `@@data_requests/<index>/completed_at`

The date and time that the data request was completed (e.g. signed)

### `@@data_requests/<index>/viewed_at`

The date and time that the data request was most recently viewed before completion.

## Example Names

Given the following API request:

```json
{
  "parent_object": {
    "nested_object": {
      "foo": "bar"
    }
  },
  "array_of_strings": ["a", "b", "c"],
  "array_of_objects": [{ "color": "blue" }, { "color": "red" }],
  "multiline_field": "This text is so long that we need multiple lines."
}
```

These field names would have the following values:

| Field Name                      | Value                       |
| ------------------------------- | --------------------------- |
| parent_object/nested_object/foo | "bar"                       |
| array_of_strings/0              | "a"                         |
| array_of_strings/1              | "b"                         |
| array_of_strings/2              | "c"                         |
| array_of_objects/0/color        | "blue"                      |
| array_of_objects/1/color        | "red"                       |
| multiline_field#0               | "This text is so long that" |
| multiline_field#1               | "we need multiple lines."   |
