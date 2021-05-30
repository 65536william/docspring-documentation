---
title: Data Requests JS Library
---

# Data Requests JS Library

This JS library allows you to embed a visual form with signing functionality in your own website.

See: [Data Requests (Electronic Signatures)](../../api/create-data-request)

## Latest Version:

- https://cdn.docspring.com/embed/data_request.v2.3.0.js

## Release Notes

### 2.3.0 (Apr 25, 2020)

- **For inline iframes:** Changed default `iframe` style to `display: block; min-height: 500px;`. (`display: block`
  removes any space at the bottom of inline iframes.)
- Added `iframeClass` and `iframeStyle` options, so that you can configure the `class=""` and `style=""` attributes
  on the `iframe` element. (Available for both modal and inline iframes.)

### 2.2.4 (Apr 25, 2020)

- Fixed crash for any browsers configured to block all cookies. Before this fix, the loading spinner
  would sometimes get stuck and the signing iframe would fail to load.

### 2.2.1 (Apr 24, 2020)

- Improved logging and error reporting to investigate iframe loading issues

### 2.2.0 (Apr 2, 2020)

- Fixed bug where static form data could not be overridden after clearing a field

### 2.0.0 (May 20, 2019)

- Renamed FormAPI to DocSpring
