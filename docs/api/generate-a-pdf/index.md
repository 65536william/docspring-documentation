---
title: Generate a PDF
---

# Generate a PDF

Create a new PDF job submission.

## HTTP Request

`POST https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>/submissions`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Parameters

The request body must be a JSON object with the following keys:

- `data` _(object)_: Data to fill in the fields. Must match the template schema.
- `metadata` _(object, optional)_: Any additional data, such as a user id.
  - `metadata` will be included in webhook requests.
  - You can set `pdf_filename` in the `metadata` to customize the PDF filename in the download URL (see below.)
- `test` _(boolean)_: `true` to generate a test PDF, `false` for a live PDF. Test PDFs are free, but watermarked. _Note: A test API key can only be used to generate test PDFs._
- `editable` _(boolean, optional)_: `true` to generate an editable PDF with fillable form fields. `false` to generate a static PDF with fixed text. _(Note: When no value is provided, we use the default setting from the template.)_
- `data_requests` _(array, optional)_: Request information or signatures from one or more people. (See the [Create Data Request](create_data_request.md) documentation for more info and examples.)
- `field_overrides` _(object, optional)_: Overrides field settings, such as `required`. The object for each field must match the [field schema](./field_schema.md). See below for a code example that includes `field_overrides`.

## Further Reading

- [Customize the PDF filename using Submission metadata](./customize-filename)
- [Monitor the `truncated_text` property for any text that couldn't fit](./truncated-text)
- [Use `%%LF%%` for newline characters when you are unable to send `\n`](./special-newline-characters)

## Example Response

```json
{
  "status": "success",
  "submission": {
    "id": "sub_000000000000000001",
    "template_id": "tpl_000000000000000001",
    "batch_id": null,
    "state": "pending",
    "test": false,
    "editable": null,
    "expired": false,
    "expires_at": null,
    "json_schema_errors": [],
    "truncated_text": {},
    "metadata": {
      "foo": 123,
      "bar": "baz"
    },
    "processed_at": null,
    "data_requests": [],
    "pdf_hash": null,
    "download_url": null,
    "permanent_download_url": null,
    "actions": []
  }
}
```

## Example Code

### JavaScript

```javascript
// Find your API tokens here: https://app.docspring.com/api_tokens

import DocSpring from 'docspring'

var config = new DocSpring.Configuration()
config.apiTokenId = 'DOCSPRING_API_TOKEN_ID'
config.apiTokenSecret = 'DOCSPRING_API_TOKEN_SECRET'
docspring = new DocSpring.Client(config)

var template_id = 'tpl_000000000000000001'
var submission_data = {
  editable: false,
  data: {
    title: 'Test PDF',
    description: 'This PDF is great!',
  },
  metadata: {
    user_id: 123,
  },
  field_overrides: {
    title: {
      required: false,
    },
  },
  wait: true,
}
docspring.generatePDF(template_id, submission_data, function (
  error,
  response
) {
  if (error) {
    console.log(response, error)
    throw error
  }
  var submission = response.submission
  console.log('Download your PDF at:', submission.download_url)
})
```

### Ruby

```ruby
# Find your API tokens here: https://app.docspring.com/api_tokens

require 'docspring'

ENV['DOCSPRING_TOKEN_ID'] = "YOUR_API_TOKEN_ID"
ENV['DOCSPRING_TOKEN_SECRET'] = "YOUR_API_TOKEN_SECRET"

DocSpring.configure do |c|
  c.api_token_id = 'api_token123'
  c.api_token_secret = 'testsecret123'
end

client = DocSpring::Client.new
template_id = 'tpl_000000000000000001'

response = client.generate_pdf(
  template_id: template_id,
  data: {
    title: 'Test PDF',
    description: 'This PDF is great!',
  },
  field_overrides: {
    title: {
      required: false
    }
  }
)
submission = response.submission

puts "Download your PDF at: #{submission.download_url}"
```

<!-- 23a664f3b2721d119d85e3351324a26be965202db0af1d113a7f3 -->

### Python

```python
# This is a live example that you can run in the Python interpreter
import docspring

client = docspring.Client()
client.api_client.configuration.username = "yRaaR9JmTPtGX7EN"
client.api_client.configuration.password = "IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"

submission = client.generate_pdf(
  "6zz3dYRYM67fxMXA",  # ID of a template that you have configured
  {
    "test": True,                       # test documents are free but watermarked
    "data": {                           # Data to render in the template
      "first_name": "John",
      "last_name": "Smith",
      "favorite_color": "Green",
    },
    "metadata": {                     # Custom data to include in the request, for your own purposes
      "user_id": 123,
    },
    'field_overrides': {
      'first_name': {
        'required': False
      }
    }
  }
)

print("Download your PDF at: %s" % submission.download_url)
```

### PHP

```php
// You can run this example in the PHP interactive shell (php -a)
// Find your API tokens here: https://app.docspring.com/api_tokens

$docspring = new \DocSpring\Client();
$docspring->getConfig()
  ->setUsername("DOCSPRING_API_TOKEN_ID")
  ->setPassword("DOCSPRING_API_TOKEN_SECRET");

$template_id = 'tpl_000000000000000001'; // string |
$submission_data = new \DocSpring\Model\SubmissionData();
$submission_data->setData([
  "title" => 'Test PDF',
  "description" => 'This is a test PDF!',
]);
$submission_data->setTest(true);
$submission_data->setFieldOverrides([
  "title" => [
    "required" => false
  ]
]);
$submission = $docspring->generatePDF($template_id, $submission_data);

echo "Download your PDF at: " . $submission->getDownloadUrl();
```

### C#

```csharp
using System;
using System.Diagnostics;
using DocSpring.Client.Api;
using DocSpring.Client.Client;
using DocSpring.Client.Model;

namespace Example
{
    public class DocSpringExample
    {
        public void main()
        {
          Configuration.Default.Username = "yRaaR9JmTPtGX7EN";
          Configuration.Default.Password = "IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec";

          var apiInstance = new PDFApi();
          string templateId = "tpl_000000000000000001";
          var createSubmissionData = new CreateSubmissionData(
            false,  // true to generate a test PDF (watermarked)
            new {
              title = "Test PDF",
              description = "This PDF is great!"
            },
            fieldOverrides: new {
              title = new {
                required = false
              }
            }
          );
          var response = apiInstance.GeneratePDF(templateId, createSubmissionData);
          Debug.WriteLine(response);

          // The PDF will now be in the "pending" state until it is processed.
          // You may want to call GetSubmission once per second until
          // the state changes to "processed".
          // Alternatively, you can set up a webhook notification.
        }
    }
}
```

### Bash

The following example waits for the PDF to be processed, then prints the download URL.

```bash
# This is a live example that you can run in your console.

export API_TOKEN_ID="yRaaR9JmTPtGX7EN"
export API_TOKEN_SECRET="IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"
export TEMPLATE_ID="6zz3dYRYM67fxMXA"

generate_pdf() {
  curl -s "https://api.docspring.com/api/v1/templates/$TEMPLATE_ID/submissions" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"data":{"first_name": "John", "last_name": "Smith", "favorite_color": "Blue"}, "metadata": { "user_id": 123 }, "field_overrides": { "first_name": { "required": false }}}'
}

get_submission() {
  curl -s "https://api.docspring.com/api/v1/submissions/$1" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET"
}

get_json_value() {
  echo "$1" | sed -n 's/.*"'"$2"'":"\([^"]\+\)".*/\1/p'
}

RESPONSE=$(generate_pdf)
echo $RESPONSE
SUBMISSION_ID=$(get_json_value "$RESPONSE" id)
SUBMISSION_STATE=$(get_json_value "$RESPONSE" state)

echo "Waiting for PDF to be processed..."
while [[ "$SUBMISSION_STATE" = "pending" ]]; do
  sleep 1
  RESPONSE=$(get_submission "$SUBMISSION_ID")
  SUBMISSION_STATE=$(get_json_value "$RESPONSE" state)
done

echo "Download your PDF at:"
get_json_value "$RESPONSE" download_url
```