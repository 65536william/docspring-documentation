---
title: Data Requests
---

# Data Requests

## _Please Note: This is an alpha feature_

We have some customers who are using Data Requests in production, but it is still an alpha feature with some rough edges, missing features, unhandled edge-cases, and undocumented / lightly documented aspects.

Here are the features that we are still working on:

- [ ] Sending webhooks after each data request is completed. (We currently only send a single webhook once all data requests are complete and the PDF is generated).
- [ ] Supporting HTML templates. (We currently only support data requests for static PDF templates).
- [ ] Building an audit trail page appended to the signed PDF, that shows IP address and viewing/signing timestamps.
- [ ] Creating built-in emails with customizable templates. (You currently need to send the emails yourself).
- [ ] Hosting signing pages on our domain. (You currently need to host the embeddable JS SDK on your own website).
- [ ] Building support for SMS authentication.
- [ ] Supporting the use of multiple templates in a single data request, so you can sign multiple documents at the same time.
- [ ] Writing much better documentation and code examples, including example apps for Rails, Flask, Laravel, etc.

## Overview

Create a Data Request to collect UETA and ESIGN compliant electronic signatures.

When you make an API request to fill out a PDF, you can specify that some fields must be filled in by certain external people (including signature fields.) The PDF submission will be in a `pending` state until all of the data requests have been completed. You can send these people a link to fill in the form, or embed the form on your own website. When everyone has submitted it, the PDF will be generated, and we can send your server a webhook notification.

To collect UETA and ESIGN compliant electronic signatures, DocSpring must record an audit trail that includes user authentication. This means that you need to send us some details about how and when your users were authenticated.

## Release Notes

You can find the latest version and release notes here:

- [Release Notes for Data Requests JS Library](../../guides/embedded-library-releases/index)

## Steps

Here is an overview of how Data Requests work:

- Make an API request to create a new submission. Include one or more `data_requests`, with details about the people who will be filling out and signing the document. You must include their full name, email address, the fields they need to complete, and information about how they have been authenticated in your system (username/password, OAuth, 2FA, etc).
- DocSpring returns an array of `data_requests` with an ID for each request.
- Once your user is ready to sign the document, you make an API request to get an authentication token. (This token will expire in 60 minutes, so only generate it when the user is ready to sign).
  - If you are sending the user an email with a link, the token response will include a formatted URL that you can use.
  - If you are embedding the signing form on your own website, you can call `DocSpring.createVisualForm()` with the data request ID, the token ID, and the token secret.
- The user visits the signing form, completes all of the required fields, and submits the form.
- If this is the last pending data request, DocSpring generates the final PDF and can send your server a webhook notification.

This process ensures that DocSpring can build a comprehensive audit trail so that your user's electronic signatures are legally binding.

## Step-By-Step Guide

### 1) Create a Submission with a Data Request

> View the API documentation for: [Create Data Request](./create)

Your data request will include the following details:

- The user's full name
- The user's email address
- The fields that the user must fill out (including signature fields)
- Some optional metadata to save regarding this data request
- Details about how and when the user was authenticated.

While many of these authentication fields are optional, please provide as much detail as you can. This builds a more comprehensive audit trail, and ensures that the electronic signatures will be legally binding if they are ever contested in a court of law.

### 2) Get an authentication token for your Data Request

> View the API documentation for: [Create Data Request Authentication Token](./auth-token)

When you are ready to show the form to your user, you must create a one-time authentication token for your data request. This authentication token can only be used once, and will expire quickly in 60 minutes.

### 3) Ensure that the authentication details are up to date

> View the API documentation for: [Update Data Request](./update)

If there is a significant delay between creating the Data Request and showing the signing form to the user, then please ensure that the authentication details are accurate. You can make an API request to update these details if the user has signed in again. You cannot update a Data Request if it has already been viewed or completed.

### 4) Send your user a link to the form, or embed the form on your own website

After you fetch an authentication token, the response will include an authenticated URL that you can provide to your user. Visiting this URL will take them to a signing form hosted on the [docspring.com](https://docspring.com) domain.

If you would like to embed the form on your own website, then copy the following code into your page, replacing `DATA_REQUEST_ID`, `TOKEN_ID`, and `TOKEN_SECRET`:

```html
<script
  type="text/javascript"
  src="https://cdn.docspring.com/embed/data_request.v<%= EMBED_JS_VERSIONS[:data_request] %>.js"
></script>

<script>
  DocSpring.createVisualForm({
    dataRequestId: "DATA_REQUEST_ID",
    tokenId: "TOKEN_ID",
    tokenSecret: "TOKEN_SECRET",
  });
</script>
```

This code will open the form in a modal overlay. You may also pass a CSS selector as the first argument, and the iframe element will be appended to that selector. (However, mobile browsers will alway use a full-screen overlay.)

We have built a more complex example that illustrates all the available options for `DocSpring.createVisualForm()`:

- [View HTML source](https://docspring.com/embed_data_request_example?view_source=true)
- [See the form](https://docspring.com/embed_data_request_example)

You can fill out this form to generate a new Data Request, and then we will show the signing form in a modal overlay.

## Simple Forms + Data Requests

The following example shows how you could use a simple form to gather information with text inputs. Then you can create a data request which is prefilled with the data from the simple form. The data request will show a preview of the PDF with the filled-in data before asking the user to sign the form.

- [View HTML source](https://docspring.com/embed_simple_plus_data_request_example?view_source=true)
- [See the form](https://docspring.com/embed_simple_plus_data_request_example)

In this example, we use the simple [embedded forms](./embedded_forms) library to show a form, but we hide the signature field in the `processTemplateSchema` callback by removing it from the template schema. We also cancel the PDF submission by returning `false` in the `onSubmit` callback. When the simple form is submitted, we send the data to our server, which makes an API call to create a prefilled data request. (You must also create the data request in your backend code, because you must never include your DocSpring API token in your front-end code.)

For the initial data collection step, you could use any form library that supports JSON schemas, such as [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form).

> You must always use a data request if you are collecting legally binding electronic signatures. If you only use a simple form with a signature field, the user could be signing a document that they haven't seen. DocSpring will also not be able to store any information about how the user was authenticated, so these signatures will not be legally binding.

## Zooming on Mobile

When an embedded form is displayed on a mobile device, it will always be shown in a full-screen modal overlay. The user can zoom in to enlarge the document and fields. You should use the following `viewport` meta tag in your HTML `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Do not use `maximum-scale=1` or `user-scalable=no` in this `viewport` meta tag, because this will prevent the user from zooming in.

## Redirect to a URL

After the user submits the form, you can redirect them to a different URL. The redirect URL can be configured in the [template settings](../../guides/template-editor/settings), or it can be passed as an option to `DocSpring.createVisualForm()` (The `createVisualForm` option will override the template's redirect URL.)

The submission ID, template ID, and template name will be appended to this URL as query params:<br/>
`https://example.com/?submission_id=sub_123&template_id=tpl_123&template_name=My%20Template`

When "Submission Privacy" is set to "Private", the user will be redirected as soon as the form has been saved.

When "Submission Privacy" is set to "Public", the user will be redirected after the PDF has finished processing. If you don't need to wait, you can set the `waitForPDF` option to `false` when calling `DocSpring.createVisualForm()`.

## JavaScript API

```
DocSpring.createVisualForm(cssSelector, optionsAndCallbacks = {})
```

Or:

```
DocSpring.createVisualForm(optionsAndCallbacks = {})
```

### Options

| Option                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dataRequestId`             | Your Data Request ID                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `tokenId`                   | Your Token ID                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `tokenSecret`               | Your Token Secret                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `defaultFormData`           | Default data to fill in the fields (can be modified by the user)                                                                                                                                                                                                                                                                                                                                                                     |
| `staticFormData`            | Static data to fill in the fields (_cannot_ be modified by the user)                                                                                                                                                                                                                                                                                                                                                                 |
| `redirectURL`               | Redirect to this URL after submitting the form _(Overrides the template's redirect URL)_                                                                                                                                                                                                                                                                                                                                             |
|                             |
| `redirectURLQueryParams`    | Automatically add `submission_id`, `template_id`, and `template_name` query params to the redirect URL. _(Default: `true`. Set to `false` to disable this behavior.)_                                                                                                                                                                                                                                                                |
| `waitForPDF`                | If a `redirectURL` is provided, set `waitForPDF` to `false` to redirect immediately, instead of waiting for the PDF to finish processing. If there is no `redirectURL`, then we will immediately show a "Thank you" message after submitting the form. _(NOTE: `waitForPDF` will always be false if "Submission Privacy" is set to "Private". In other words, we will always redirect or show the "thank you" message immediately.)_ |
| `domainVerification`        | Set this to `false` during development to disable domain verification.                                                                                                                                                                                                                                                                                                                                                               |
| `focusFirstFieldOnLoad`     | Automatically focus the first field after the form is loaded. _(Default: `false`)_                                                                                                                                                                                                                                                                                                                                                   |
| `showSignatureModalOnFocus` | Automatically open the signature popup when a signature field is focussed. _(Default: `false`)_                                                                                                                                                                                                                                                                                                                                      |
| `closeModalOnClickOverlay`  | Allow the user to close the form by clicking on the modal overlay. _(Default: `true`)_                                                                                                                                                                                                                                                                                                                                               |
| `showTermsOfServiceLink`    | Show a link to DocSpring's terms of service on the "Accept Terms" screen. (Overridden by `agreeToTermsMessage`, if provided.) _(Default: `true`)_                                                                                                                                                                                                                                                                                    |
| `downloadButtonLabel`       | Change the download button label. _(Default: "Download PDF")_                                                                                                                                                                                                                                                                                                                                                                        |
| `showPdfProcessingSpinner`  | Show a spinner while the PDF is being processed. _(Default: `true`)_                                                                                                                                                                                                                                                                                                                                                                 |

### String Options

Customize the titles and messages that are shown in the header.

> The following options can be either a plain string, or a function that returns a string.

| Option                            | Function Arguments                                         | Description                                                                                                                                                          |
| --------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `signatureLegalDisclaimerMessage` | `template` (object)                                        | Legal disclaimer text shown below the signature pad when signing. Default: 'I agree that this electronic signature is legally binding.'                              |
| `agreeToTermsTitle`               | `template` (object), `formData` (object)                   | Title for the "Agree to terms of service" step. Default: 'This Document Is Legally Binding'                                                                          |
| `agreeToTermsMessage`             | `template` (object), `formData` (object)                   | Message for the "Agree to terms of service" step. Default: 'By clicking "I Agree", I agree to be legally bound by this document and the DocSpring terms of service.' |
| `waitingForDataRequestsTitle`     | `remainingDataRequestsCount` (number), `template` (object) | Title when there are still some pending data requests to be filled in.                                                                                               |
| `waitingForDataRequestsMessage`   | `remainingDataRequestsCount` (number), `template` (object) | Message when there are still some pending data requests to be filled in.                                                                                             |
| `submittingTitle`                 | `template` (object)                                        | Title when the data is being submitted.                                                                                                                              |
| `submittingMessage`               | `template` (object)                                        | Message when the data is being submitted.                                                                                                                            |
| `pdfProcessingTitle`              | `template` (object)                                        | Title when the PDF is being processed                                                                                                                                |
| `pdfProcessingMessage`            | `template` (object)                                        | Message when the PDF is being processed                                                                                                                              |
| `completedTitle`                  | `template` (object), `downloadURL` (string)                | Title when the PDF has been processed.                                                                                                                               |
| `pdfProcessedMessage`             | `template` (object), `downloadURL` (string)                | Message when the PDF has been processed.                                                                                                                             |
| `completedTitleNoDownload`        | `template` (object)                                        | Title when the data has been saved, but the submission cannot be polled, so there is no download URL. (Used for private templates, or `waitForPDF: false`)           |

### Callbacks

| Callback                  | Parameters                           | Description                                                                                                               |
| ------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `onInitialize`            | -                                    | Called when the form has been initialized.                                                                                |
| `onLoad`                  | -                                    | Called when all form pages have been loaded.                                                                              |
| `onClearForm`             | -                                    | Called after the clear button is pressed and the form is cleared                                                          |
| `onFieldFocus`            | `{ id, name, value }`                | Called when a field gains focus                                                                                           |
| `onFieldBlur`             | `{ id, name, value }`                | Called when a field loses focus                                                                                           |
| `onFieldChange`           | `{ id, name, value, previousValue }` | Called when a field value changes                                                                                         |
| `onShowAcceptTerms`       | -                                    | Called when the user clicks "Continue" to show the final "Accept Terms" screen.                                           |
| `onSubmit`                | `formData`                           | Called when the submit button is pressed. Parameter is an object with all form data.                                      |
| `onSave`                  | `submissionId`                       | Called when the form has been saved. Parameter is an object containing the submission attributes, including `id`.         |
| `onProcessed`             | `{ submissionId, downloadUrl }`      | Called when the PDF has been processed. (Will only be called if "Submission Privacy" is set to "Public".)                 |
| `onRemainingDataRequests` | `remainingDataRequestsCount`         | Called when the form data has been saved, but other data requests still need to be filled in before the PDF is generated. |
| `onError`                 | `error`                              | Called if there is an error with the request. Parameter is the response from the AJAX request.                            |

### Debugging

You can set `DocSpring.DEBUG = true` to show some debugging log messages in the developer console. If you are experiencing any problems with your integration, please enable logging and include the console logs in your support request.
