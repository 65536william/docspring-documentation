---
title: Simple Forms JS Library
---

# Simple Forms JS Library

This JS library allows you to embed a simple web form on your own website. Your users
can fill out this form to generate a PDF.

See: [Embedded Web Forms](../web-forms/embedded-forms)

## Latest Version:

- https://cdn.docspring.com/embed/simple_form.v2.4.0.js
- https://cdn.docspring.com/embed/simple_form.v2.4.0.css

## Release Notes

### 2.4.0 (May 12, 2020)

- Upgraded from Bootstrap 3 to Bootstrap 4

### 2.3.2 (May 1, 2020)

- Fixed bug where a value could not be selected in an optional select field

### 2.3.0 (Apr 25, 2020)

- Fixed crash for any browsers configured to block all cookies. Before this fix, the loading spinner
  would sometimes get stuck and the signing iframe would fail to load.
- Fixed saving/restoring data on page reload.

### 2.2.1 (Apr 17, 2020)

- Fixed bug where the form could not be submitted if a required checkbox was unchecked.

### 2.2.0 (Apr 15, 2020)

- Upgraded to latest version of underlying form library ([Alpaca Forms](http://www.alpacajs.org/)).
- Added better support for optional fields in template schema (`type: ['string', 'null']`)

### 2.0.0 (May 20, 2019)

- Renamed FormAPI to DocSpring
