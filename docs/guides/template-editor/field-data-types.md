---
title: Field Data Types
parent: 683079
child_order: 4
---

# Field Data Types

"Data Types" are the type of data that you send in your API request.

## String

### Field Options

If you add some Field Options, then the value must be one of those options. A select list will be displayed on online forms.

![Field Options](.img/template_editor/field-options.png#margin=1rem)

### Conditions

When a _String_ field is displayed as a _Check_ or _Shape_, you can define a Condition. The field will only be displayed when the value matches the condition. The condition predicate can be one of: _Equals_, _Contains_, _Starts With_, _Ends With_, or _Regex_.

![Conditions](.img/template_editor/conditions.png#margin=1rem)

### Available Display Types

- [Text](./field_display_types.md#text)
- [Check](./field_display_types.md#check)
- [Shape](./field_display_types.md#shape)
- [QR Code](./field_display_types.md#qrcode)
- [Barcode](./field_display_types.md#barcode)

## Number

A _Number_ field can be an integer or a float. When _Integer_ is checked, the value must be an integer. (No decimal places.)

### Validations

You can define a Minimum and Maximum value. You can check the "Exclusive" checkboxes to exclude the given value from the range. For example:

- When "Exclusive Minimum" is checked: `value > Minimum`
- When "Exclusive Minimum" is not checked: `value >= Minimum`

In the following example, the value must be an integer. The value must be greater than `0`, and less than or equal to `1000`.

![Number Options](.img/template_editor/number-options.png#margin=1rem)

### Formulas

A _Number_ field can be a formula that performs a calculation. Formulas can reference other _Number_ fields.
View the [Formula documentation](./formulas) for more information about formula syntax, operators, and functions.

![Formulas](.img/template_editor/formulas.png#margin=1rem)

### Conditions

When a _Number_ field is displayed as a _Check_ or _Shape_, you can define a Condition. The field will only be displayed when the value matches the condition. The condition predicate can be one of: _Equals_, _Greater or Equal_, _Greater_, _Less or Equal_, _Less_, or _In Range_.

![Number Conditions](.img/template_editor/number-condition-range.png#margin=1rem)

### Available Display Types

- [Text](./field_display_types.md#text)
- [Check](./field_display_types.md#check)
- [Shape](./field_display_types.md#shape)

## Boolean

A _Boolean_ value must be either `true` or `false`.

### Text

When a _Boolean_ field is displayed as _Text_, the text will be either "Yes" or "No". These strings can be configured for each field. You can also set default values in the template settings.

![Boolean Text](.img/template_editor/boolean-text.png#margin=1rem)

### Check or Shape

When a _Boolean_ field is displayed as a _Check_ or _Shape_, the field will only be displayed when the value is `true`.

### Available Display Types

- [Text](./field_display_types.md#text)
- [Check](./field_display_types.md#check)
- [Shape](./field_display_types.md#shape)

## Date

_Date_ values must be a string formatted as: `YYYY-MM-DD`.

When _Include Time_ is checked, the value must be a timestamp formatted as: `YYYY-MM-DDThh:mm:ss.fffZ`.

A _Date_ field can be formatted using a format string. DocSpring supports the [`strftime` format directives from the Ruby programming language](https://apidock.com/ruby/DateTime/strftime).

![Date Options](.img/template_editor/date-options.png#margin=1rem)

### Example

Some forms may have separate fields for month, day, and year. You could configure three fields that all share the name `date`, but use different format strings for each field:

- `%-m` for month
- `%-d` for day
- `%Y` for year

![Date Formats](.img/template_editor/day-month-year.png#margin=1rem)

### Available Display Types

- [Text](./field-display-types)

## Address

The _Address_ type can be used to show a text input that autocompletes an address.
Address autocompletion is powered by Google Maps.

The address is currently formatted as a single string.
We are working to improve this so that you can render the
address parts as separate fields.

If you need this ability now, you should create separate text fields for each
part (e.g. street, city, state, zip, country.)

### Available Display Types

- [Text](./field-display-types)

## Country

The _Country_ type can be used to show a dropdown list of countries in the online form.
Otherwise, it is just a _String_ field that can accept any value.

### Available Display Types

- [Text](./field-display-types)
- [Check](./field-display-types)
- [Shape](./field-display-types)

## Email

An _Email_ value must be a valid email address.

### Available Display Types

- [Text](./field-display-types)
- [QR Code](./field-display-types)
- [Barcode](./field-display-types)

## URL

A _URL_ value must be a valid URL.

### Available Display Types

- [Text](./field_display_types.md#text)
- [QR Code](./field_display_types.md#qrcode)
- [Barcode](./field_display_types.md#barcode)

## Image

An _Image_ value can be a Base64 encoded image, or a URL where the image can be downloaded.

_(Support for direct image uploads is coming soon.)_

- Request with a Base64 encoded image:

```json
"photo": {
  "base64": "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGB ..."
}
```

- Request with an image URL:

```json
"photo": {
  "url": "https://source.unsplash.com/random"
}
```

See the [Image Display Type](./field-display-types) section for information about resizing and cropping images.

### Available Display Types

- [Image](./field-display-types)

## Signature

A _Signature_ field adds a signature pad to the online form:

![Signature Field](.img/template_editor/signature_field.jpg#margin=1rem)

The online form will submit the signature as a Base64 encoded image.

When you are generating a PDF via an API request, the _Signature_ type is a subset of the Image type: You can submit a Base64 encoded image (`base64`), or a URL where the image can be downloaded (`url`).

> When requesting signatures from your users, we recommend using the [signature_pad](https://github.com/szimek/signature_pad) library. You can generate a PNG image with `signaturePad.toDataURL()`

You can also ask the user to type their full name. Then submit a `text` object with the user's name and their choice of typeface:

```json
"signature": {
  "text": {
    "name": "John Smith",
    "typeface": "Dancing Script"
  },
}
```

- `name` must be the user's full name.
- `typeface` must be one of the following Google Fonts:
  - [Dancing Script](https://fonts.google.com/specimen/Dancing%20Script)
  - [Satisfy](https://fonts.google.com/specimen/Satisfy)
  - [Cookie](https://fonts.google.com/specimen/Cookie)
  - [Great Vibes](https://fonts.google.com/specimen/Great%20Vibes)
  - [Caveat](https://fonts.google.com/specimen/Caveat)
  - [Sunshiney](https://fonts.google.com/specimen/Sunshiney)
  - [Sedgwick Ave](https://fonts.google.com/specimen/Sedgwick%20Ave)
  - [Sacramento](https://fonts.google.com/specimen/Sacramento)

> ([Let us know](https://docspring.com/contact) if you want us to add a new font.)

### Available Display Types

- [Image](./field-display-types) _(used internally)_

## Barcode

A _Barcode_ data type ensures that you submit a valid barcode.
The value can be rendered as a barcode image or as a string.

You must configure the correct barcode [symbology](https://en.wikipedia.org/wiki/Barcode#Symbologies) (type).
DocSpring supports the following symbologies:

- [EAN-13](https://en.wikipedia.org/wiki/International_Article_Number)
  - 12 digits _(a checksum digit is added)_
  - _Pattern:_ `/^[0-9]{12}$/`
- [EAN-8](https://en.wikipedia.org/wiki/EAN-8)
  - 7 digits _(a checksum digit is added)_
  - _Pattern:_ `/^[0-9]{7}$/`
- [UPC-A](https://en.wikipedia.org/wiki/Universal_Product_Code)
  - 11 digits _(DocSpring adds the leading zero)_
  - _Pattern:_ `/^[0-9]{11}$/`
- [PDF417](https://en.wikipedia.org/wiki/PDF417)
  - Any ASCII character
  - _(No validation)_
- [Code 128](https://en.wikipedia.org/wiki/Code_128)
  - Any ASCII character
  - _(No validation)_
- [Code 93](https://en.wikipedia.org/wiki/Code_93)
  - Uppercase letters, digits, `- . $ / + % SPACE`
  - _Pattern:_ `/^[A-Z0-9\-\.\$\/\+% ]+$/`
- [Code 39](https://en.wikipedia.org/wiki/Code_39)
  - Uppercase letters, digits, `- . $ / + % SPACE`
  - _Pattern:_ `/^[A-Z0-9\-\.\$\/\+% ]+$/`
- [Code 25](https://en.wikipedia.org/wiki/Code_25)
  - Digits
  - _Pattern:_ `/^[0-9]+$/`

> Please contact support@docspring.com if you need a different symbology.

### Available Display Types

- [Text](./field-display-types)
- [Barcode](./field-display-types)

## Combined

_Combined_ fields allow you to combine multiple field values into a single string.

For example, you could combine `first_name` and `last_name` fields into a single `full_name` field:

![Combined Field Names](.img/template_editor/combined-fields.png#margin=1rem)

The _Separator_ value can be any string (including an empty string.)

### Available Display Types

- [Text](./field-display-types)