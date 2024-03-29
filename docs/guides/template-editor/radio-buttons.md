---
title: Radio Buttons
---

# Radio Buttons

Forms quite often have a list of checkboxes, where only one checkbox should be checked at once. To build this in DocSpring, you can use our powerful formatting logic to set up a radio button group. First set up multiple String fields, with the same name, that are displayed as checkboxes, and then set up an "Equals" condition so that checkboxes are displayed based on the field value.

Fields in our template editors have both a "Data" type and a "Display" type. Text (string) fields can be displayed as checkboxes or shapes, and boolean fields can be displayed as text. This flexibility allows you to set up very powerful logic in your PDF templates and web forms.

## Example: IRS Form W-9

Question 3 on the IRS W-9 form contains a group of checkboxes where you must only check one of them.

![W-9 Checkbox Options](./w9-pdf-options.png)

To set up these checkboxes as a radio button group in DocSpring, create fields for each of the checkboxes. Each field must have the same name (e.g. `tax_classification`.) Set the "Data Type" for these fields to `String`.

![W-9 String Field Type](./w9-field-type.png)

Instead of displaying these String fields as text, set the "Display Type" to "Check":

![W-9 Display Type](./w9-display-type.png)

Now the template editor will show how each field will be rendered as a check:

![W-9 Checkboxes](./w9-checkboxes.png)

Enter all of the "Field Options" (you will only need to do this once):

![W-9 String Field Type](./w9-field-options.png)

> If you will only be filling out PDFs with an API integration, then you could use shorter names for convenience as these don't print directly on the generated PDF. However, if you will be using our [automatically generated web forms](../web-forms), then you should use full human-readable names so that the form options are easier to understand for the person filling out the form.

Now scroll to the bottom of the options sidebar, set Conditions to "Equal", and choose the correct option for each checkbox field. (These will be automatically populated by the Field Options you just entered.)

![W-9 String Field Type](./w9-field-conditions.png)

In this IRS example, you set "Individual/sole proprietor..." as the condition for the first checkbox, "C Corporation" for the next checkbox, and so on.

That's it! Now you can send one of these `tax_classification` values in your API request, and only the corresponding checkbox will be checked. For example:

```json
{
  "data": {
    "tax_classification": "C Corporation"
  }
}
```

Only one of the fields has an "Equals" condition that matches the "C Corporation" value, so this is the only field that is checked on the generated PDF:

![W-9 Checked Option](./w9-one-checked.png)

All of the Field Options you added will be shown as a drop-down list in the [web forms](../web-forms):

![W-9 Form Options](./w9-form-options.png)
