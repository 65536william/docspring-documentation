---
title: Visual Forms JS Library
---

# Visual Forms JS Library

This JS library allows you to embed a visual form in your own website.

This is a low-level form library that renders the visual form directly on a page. It is used internally by the [Data Requests](../../api/create-data-request) library to show the signing form inside an iframe.

Please note: The visual forms library does not provide any security features or audit trail logging, so please use the data requests library if you need to collect legally binding signatures.

## Latest Version:

- https://cdn.docspring.com/visual_form.v2.4.2.js
- https://cdn.docspring.com/visual_form.v2.4.2.css

## Release Notes

### 2.4.2 (Jan 12, 2020)

- Added support for image uploads (click to select an image file)

### 2.4.1 (Dec 15, 2020)

- Fixed the "terms of service" link so that it opens in a new window. (Also removed the `X-Frame-Options` header from this page, so that it is possible to render inside an embedded iframe.)

### 2.4.0 (Nov 24, 2020)

- Fixed signature modal layout on various tablet and mobile screen sizes

### 2.3.12 (Oct 28, 2020)

- Added support for the "Invert Boolean Condition" field option, where a checkbox will show as checked when the value is false.
- Allow a checkbox to be unchecked if it is part of an optional "radio group" with string conditions.

### 2.3.11 (Oct 7, 2020)

- Added a new `skipAgreeToTermsOfService` option for visual forms. Setting `skipAgreeToTermsOfService: true` will skip the "Agree to Terms" step, so clicking the "Continue" button will immediately submit the data and generate a PDF. _NOTE: This option is only available for Visual Forms, and it is not available for Data Requests._

### 2.3.10 (Sep 27, 2020)

- Fixed issue where fields could be horizontally shifted on Windows and Linux when the form was rendered with a vertical scrollbar.

### 2.3.9 (Sep 24, 2020)

- Fixed vertical alignment for text in select dropdowns. Text should now be vertically centered properly.

### 2.3.8 (Sep 9, 2020)

- _For [Data Request](../../api/create-data-request) users:_ Added support for all `field_overrides` (from the [Generate PDF](../../api/generate-a-pdf) API requests), so that field options can be configured dynamically for each data request.

### 2.3.7 (Aug 7, 2020)

- Added a new `signatureLegalDisclaimerMessage` string option, added `formData` parameter for `agreeToTermsTitle` and `agreeToTermsMessage` string options. _(Only used with Data Requests.)_

### 2.3.6 (Aug 4, 2020)

- Added `agreeToTermsTitle` and `agreeToTermsMessage` string options. _(Only used with Data Requests.)_

### 2.3.5 (Jun 18, 2020)

- Added support for multiline fields so that users can enter text with multiple lines. Also added
  support for the "Number of Lines" option, which vertically divides the field into a fixed number of lines.

### 2.3.4 (Jun 6, 2020)

- Fixed bug with field_overrides option for submissions with data requests. If a field override is provided, fields will now be correctly marked as required or optional in visual forms.

### 2.3.3 (Jun 4, 2020)

- Fixed a bug where select dropdown menus were hidden behind other fields.

### 2.3.2 (Apr 28, 2020)

- Fixed error when opening the signature font drop-down and pressing backspace
- Added 'Type Signature' heading above the name input when typing a signature

### 2.3.1 (Apr 27, 2020)

- Made some internal changes for better error handling and debugging

### 2.3.0 (Apr 25, 2020)

- Fixed crash for any browsers configured to block all cookies. Before this fix, the loading spinner
  would sometimes get stuck and the signing iframe would fail to load.

### 2.2.1 (Apr 7, 2020)

- Increased legibility of tabs heading in the signature modal.

### 2.2.0 (Apr 2, 2020)

- Fixed bug where static form data could not be overridden after clearing a field

### 2.1.0 (Mar 1, 2020)

- Show all previous signatures and date fields for multiple data requests

### 2.0.3 (Jan 17, 2020)

- Allow past dates to be selected in date pickers

### 2.0.1 (Nov 25, 2019)

- Improve date picker styles
- Improve text rendering in fields

### 2.0.0 (May 20, 2019)

- Renamed FormAPI to DocSpring
