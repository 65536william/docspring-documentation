---
title: Field Display Types
parent: 683079
child_order: 5
---

# Field Display Types

"Display Types" determine how data is displayed on the PDF.

## Text

### Typeface (Font)

When you choose a "monospace" typeface, we will automatically calculate the maximum number
of characters that can fit in the field. This will be added to the API schema as a validation.

### Multiline

When "Multiline" is checked, the text will wrap across multiple lines.
When unchecked, the text will be displayed as a single line.

### Comb

When checked, the field is divided into equally spaced boxes, or "combs", and one character is placed in each comb. You can configure the number of comb cells.

<!-- <img src="../images/template_editor/comb-field.png" alt="Comb Field" style="width: 250px;" /> -->

DocSpring will display the lines that divide each cell:

![Three SSN Fields with Comb options](../../images/template_editor/three-ssn-fields-with-comb.png#margin=1rem)

DocSpring will display the lines that divide each cell, and these lines can be useful when you're not sure how many cells are in a field. For larger comb fields, continue incrementing the "Comb Cells" value until all of the lines match up.

> View the [SSN Fields](./ssn-fields) tutorial to see how you can use the "Comb Offset" option to format an SSN into three separate sections.

### Other Text Options

- Font Size
- Bold
- Uppercase
- Color
- Opacity
- Horizontal Alignment: _(Left, Center, Right)_
- Vertical Alignment: _(Bottom, Center, Top)_

## Check

You can configure the check character, color, and opacity.

![Check Options](../../images/template_editor/check-options.png#margin=1rem)

## Shape

You can configure a fill, border, or both. You can also configure the border width, and opacity.

![Shape Options](../../images/template_editor/shape-options.png#margin=1rem)

## Image

### Image Scaling

Images can be scaled to fit, scaled to fill, or stretched to fill the field dimensions.

![Image Scaling Options](../../images/template_editor/image-scaling-options.png#margin=1rem)

![Image Scaling Examples](../../images/template_editor/image-scaling-examples.jpg#margin=1rem)

### Scale Gravity

When you choose "scale to fit" or "scale to fill", you can configure the "gravity".
This lets you control the image position (for "fit"), or which part of the image is cropped (for "fill").

![Scale Gravity Options](../../images/template_editor/scale-gravity-options.png#margin=1rem)

![Scale Gravity Examples](../../images/template_editor/scale-gravity-examples.jpg#margin=1rem)

See the [Image Data Type](./field-data-types) section for information about images.

## QR Code

[_Strings_](./field-data-types),
[_Emails_](./field-data-types), and
[_URLs_](./field-data-types)
can be displayed as QR Codes.

![QR Code](../../images/template_editor/qr-code.png#margin=1rem)

## Barcode

The following field data types can be displayed as barcodes:
[_Barcode_](./field-data-types),
[_String_](./field-data-types),
[_Email_](./field-data-types), and
[_URL_](./field-data-types).

> Note that the _Barcode_ data type can also be displayed as plain text.

_Strings_, _Emails_, and _URLs_ use the `Code 128` symbology, which supports any ASCII character.

![Barcode](../../images/template_editor/barcode.png#margin=1rem)