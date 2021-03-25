---
title: Template Settings
parent: 683079
child_order: 9
---

# Template Settings

You can click the "Settings" button in the header to configure your template settings.

Configure default values for field options in the sidebar on the right.

## Expire Submissions

The _Expire Submissions_ setting allows you to configure a data retention policy for your submissions.

- If _Expire Submissions_ is **unchecked** (the default), we will store all submission data and generated PDFs indefinitely. (Nothing will ever be deleted automatically.)
- If _Expire Submissions_ is **checked**, we will automatically delete all submission data, generated PDFs, and any uploaded images after a certain period of time. The expiration time can be configured in the template settings (_5 minutes_, _24 hours_, _7 days_, etc.)

(Please note that electronic signatures and a SHA256 hash of the PDF are always retained for UETA and ESIGN compliance.)

You can also [make an API request](../../../api/generate-a-pdf/expire-submission.md) to immediately expire a submission.

## Allow Additional Properties

By default, the data that you submit must exactly match the JSON schema. Any additional properties will cause a validation error. This guarantees that you haven't forgotten to add any fields to your template, and it also guards against accidental field deletion.

When the **Allow Additional Properties in JSON Data** setting is enabled, additional properties in your data will be silently ignored. This can be useful when you you don't have full control over the JSON data (e.g. a webhook integration with a third-party service.)

## Online Form Privacy

Set this to **Public** to allow anyone to fill out the online form if they have the URL.

## Submission Privacy

Set this to **Public** to allow anyone to view submission data and download their PDF if they have the URL.

This is useful when you have added a [@@data_url QR code to the PDF](./field_names.md#special-field-names).
(`@@data_url` is a URL where the submission data can be viewed or downloaded.)

## Webhook URL

If you configure a Webhook URL, we'll send a POST request whenever a PDF is processed. We also send webhooks when a submission contains invalid data, or if there is a error while processing the submission.

Webhooks are sent for both live and test PDFs. Make sure you ignore test PDFs in production &mdash;<br/>
`data['submission']['test']` will be `true` for test PDFs.

> Note: You can also set a "Default Webhook URL" for every [API token](https://app.docspring.com/api_tokens), which will be used when the template webhook URL is blank. When you set the webhook URL for an API token, a webhook request will be sent for every PDF that is generated using that API token.

Webhook requests will include the following data:

```json
{
  "submission": {
    "id": "fkgYdAdaYJPPTp99",
    "state": "processed",
    "test": false,
    "expired": false,
    "expires_at": "2017-10-13T20:51:55.032Z",
    "data": {},
    "metadata": {},
    "source": "api",
    "download_url": "https://..."
  }
}
```

The `state` attribute will be one of the following:

- `pending`: The PDF is being generated.
- `processed`: The PDF is ready to download.
- `invalid_data`: Your API request contained invalid data.
- `error`: We experienced an internal server error, and will retry the job.
- `image_download_failed`: We could not download an image from the URL you provided.
- `image_processing_failed`: We experienced an error when trying to resize your image.

Your webhook handler must return a 200 status code, otherwise we will assume that the request has failed.
If the webhook fails, we will retry it 25 times over approximately 21 days.

> Note: When receiving a webhook, we recommend making an API request to fetch the submission by ID. This protects against spoofed webhook requests.

## Slack Webhook URL

[Configure an Incoming WebHook in Slack](https://my.slack.com/services/new/incoming-webhook/),
and paste the URL into this field. We'll send a message whenever a PDF is generated:

![Slack Message](./slack-message.png)

## Redirect URL

We'll redirect users to this URL whenever they fill out the online form to generate a PDF.
This applies to online forms hosted on [docspring.com](https://docspring.com),
and [embedded forms on your own website](../../web-forms/embedded-forms).
The submission ID, template ID, and template name will be appended to the URL as query params.