---
title: Embedded Forms
parent: 786704
child_order: 2
---

# Embedded Forms

You can embed our web forms on your own website, and users can fill out this form to generate a PDF. You can redirect users to a different page after they have filled out the form,
or run some code in a JavaScript callback.

Please see the [Web Forms documentation](../../web-forms) for more information.

## Release Notes

You can find the latest version and release notes here:

- [Release Notes for Embedded Forms JS Library](../../embedded-library-releases/simple-forms.md)

## Embed Code

Copy the following code into your page, replacing `TEMPLATE_ID` with your template id:

```html
<link
  rel="stylesheet"
  href="https://cdn.docspring.com/embed/simple_form.v2.4.0.css"
/>
<script
  type="text/javascript"
  src="https://cdn.docspring.com/embed/simple_form.v2.4.0.js"
></script>

<div class="dsp-form"></div>
<script>
  DocSpring.createSimpleForm('.dsp-form', 'TEMPLATE_ID')
</script>
```

Here is a more complex example that uses all of the options for `DocSpring.createSimpleForm()`:

- [View HTML source](https://docspring.com/embed_form_example?view_source=true)
- [See the form](https://docspring.com/embed_form_example)

## Redirect to a URL

After the user submits the form, you can redirect them to a different URL.
The redirect URL can be configured [in the template settings](../../template-editor/settings), or can be passed as an option to `DocSpring.createSimpleForm()` (The `createSimpleForm` option will override the template's redirect URL.)

The submission ID, template ID, and template name will be appended to this URL as query params:<br/>
`https://example.com/?submission_id=sub_123&template_id=tpl_123&template_name=My%20Template`

When "Submission Privacy" is set to "Private", the user will be redirected as soon
as the form has been saved.

When "Submission Privacy" is set to "Public", the user will be redirected after the PDF
has finished processing. If you don't need to wait, you can set the `waitForPDF` option to `false` when calling `DocSpring.createSimpleForm()`.

## JavaScript API

```
DocSpring.createSimpleForm(css_selector: string, template_id: string, options_and_callbacks = {})
```

### Options

| Option                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultData`                 | An object containing default data for the form fields.                                                                                                                                                                                                                                                                                                                                                                               |
| `showClearButton`             | Set to `false` to remove the "Clear" button                                                                                                                                                                                                                                                                                                                                                                                          |
| `clearButtonLabel`            | Clear button text _(Default: "Clear")_                                                                                                                                                                                                                                                                                                                                                                                               |
| `submitButtonLabel`           | Submit button text _(Default: "Submit Form")_                                                                                                                                                                                                                                                                                                                                                                                        |
| `submitButtonSavingLabel`     | Submit button text while saving _(Default: "Saving...")_                                                                                                                                                                                                                                                                                                                                                                             |
| `submitButtonProcessingLabel` | Submit button text while waiting for the PDF _(Default: "Generating PDF...")_                                                                                                                                                                                                                                                                                                                                                        |
| `redirectURL`                 | Redirect to this URL after submitting the form _(Overrides the template's redirect URL)_                                                                                                                                                                                                                                                                                                                                             |
| `waitForPDF`                  | If a `redirectURL` is provided, set `waitForPDF` to `false` to redirect immediately, instead of waiting for the PDF to finish processing. If there is no `redirectURL`, then we will immediately show a "Thank you" message after submitting the form. _(NOTE: `waitForPDF` will always be false if "Submission Privacy" is set to "Private". In other words, we will always redirect or show the "thank you" message immediately.)_ |

### Callbacks

| Callback                | Parameters             | Description                                                                                                                                                                                                              |
| ----------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `processTemplateSchema` | `jsonSchema` (mutable) | Modify the template schema before the form is rendered. You could use this to hide some fields by removing them from the schema.                                                                                         |
| `onClearForm`           | -                      | Called after the clear button is pressed                                                                                                                                                                                 |
| `onSubmit`              | `formData`             | Called when the submit button is pressed. Parameter is an object with all form data.                                                                                                                                     |
| `onSave`                | `submission`           | Called when the form has been saved. Parameter is an object containing the submission attributes, including `id`.                                                                                                        |
| `onProcessed`           | `submission`           | Called when the PDF has been processed. (Will only be called if "Submission Privacy" is set to "Public".) Parameter is an object containing the submission attributes, including `id`, `download_url`, and `expires_at`. |
| `onError`               | `response`             | Called if there is an error with the request. Parameter is the response from the AJAX request.                                                                                                                           |
