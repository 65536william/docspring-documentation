---
title: Generate a PDF Truncated Text
---

# Generate a PDF

- [Return to "Generate PDF" API docs](./index)

## `truncated_text`

If the full text can't fit in a field and the field's "Overflow" option is set to "Truncate", we will store any truncated text in the submission. This will be returned as a `truncated_text` object when you make a [Get Submission](./get-submission) API request:

```json
{
  "submission": {
    ...
    "truncated_text": {
      "title": ["text that could not fit in the field"]
    },
    ...
  }
}
```

Every key in the `truncated_text` object is a field name, and each value is an array of strings. Most of the time this will be an array with a single string. However, a template can contain multiple fields that share the same name. If your template has multiple fields that share the same name, then the array may contain multiple truncated strings for each individual field.

> If you will be relying on the returned `truncated_text`, then it would be a good idea to give all of your fields a unique name and send duplicate data for each field.

**Use-case:** Some government and immigration forms have an optional addendum page that can be attached if any text is too long to fit in one of the fields. You could check the `truncated_text` for each submission, and set up another template to generate any addendum pages when necessary. You can then use the [Combine PDFs](../combine-pdfs) API endpoint to merge the main PDF form and any addendum pages.
