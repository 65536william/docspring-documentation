---
title: Get Submission
---

# Get Submission

Fetch a PDF job submission.

## HTTP Request

`GET https://api.docspring.com/api/v1/submissions/<SUBMISSION_ID>`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Include Submission Data

The API response does not include any submission data by default. (This is because the data can be very large, and it can also contain sensitive information.)

If you do want to return the data that was submitted with your API request, you can use the `include_data` parameter. Either append the `?include_data=true` query parameter to the URL, or send this as an option in the JSON payload.

> All of our API client examples show how to use the `include_data` option, with the value set to false by default.

## Example Response

The following example API response includes details about an AWS S3 integration (under `actions`.)

```json
{
  "id": "sub_000000000000000001",
  "template_id": "tpl_000000000000000001",
  "batch_id": null,
  "state": "processed",
  "test": true,
  "editable": false,
  "expired": false,
  "expires_at": "2018-10-27T13:00:00Z",
  "json_schema_errors": [],
  "truncated_text": {
    "description": ["text that couldn't fit"]
  },
  "metadata": {
    "qux": "abc",
    "user_id": 42
  },
  "processed_at": "2020-05-14T02:00:00Z",
  "data_requests": [],
  "pdf_hash": "bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5",
  "download_url": "https://example.com/submissions/submission.pdf",
  "permanent_download_url": "http://app.docspring.local/submissions/sub_000000000000000001/download",
  "actions": [
    {
      "id": "sba_000000000000000001",
      "integration_id": "aci_000000000000000001",
      "state": "processed",
      "action_type": "aws_s3_upload",
      "action_category": "file_upload",
      "result_data": {
        "s3_key": "templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf",
        "s3_url": "https://docspring-custom-s3-test.s3.amazonaws.com/templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf",
        "s3_bucket": "docspring-custom-s3-test",
        "s3_region": "us-east-1"
      }
    }
  ],
  "source": "api",
  "referrer": null,
  "data": {
    "title": "Test PDF",
    "description": "This PDF is great!"
  }
}
```

## Example Code

### JavaScript

```javascript
// This is a live example that you can run with Node

var DocSpring = require('docspring')

var config = new DocSpring.Configuration()
config.apiTokenId = 'yRaaR9JmTPtGX7EN'
config.apiTokenSecret = 'IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec'
client = new DocSpring.Client(config)

client.getSubmission(
  'sub_ADPq6GNqNqpAZG9Yzb',
  { includeData: false },
  function (error, submission) {
    if (error) throw error
    console.log(submission)
  }
)
```

### Ruby

```ruby
# This is a live example that you can run in IRB.

require 'docspring'

ENV['DOCSPRING_TOKEN_ID'] = 'yRaaR9JmTPtGX7EN'
ENV['DOCSPRING_TOKEN_SECRET'] = 'IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec'
submission_id = 'PLh644LApyMAD3p9'

DocSpring.configure do |c|
  c.username  = ENV['DOCSPRING_TOKEN_ID']
  c.password  = ENV['DOCSPRING_TOKEN_SECRET']
end

docspring = DocSpring::Client.new

submission = docspring.get_submission(submission_id, include_data: false)
puts submission
```

### Python

```python
# This is a live example that you can run in the Python interpreter
import docspring

client = docspring.Client()
client.api_client.configuration.username = "yRaaR9JmTPtGX7EN"
client.api_client.configuration.password = "IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"

submission = client.get_submission("PLh644LApyMAD3p9", include_data=False)
print(submission)
```

### PHP

```php
<?php
// This is a live example that you can run in the PHP interactive shell (php -a)
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername('yRaaR9JmTPtGX7EN');
$docspring->getConfig()->setPassword('IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec');
$submission_id = 'PLh644LApyMAD3p9';

// Change to true to include the submission data
$submission = $docspring->getSubmission($submission_id, false);
echo $submission;
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
          string submissionId = "sub_000000000000000001";
          /// Change to true to include the submission data
          var submission = apiInstance.GetSubmission(submissionId, false);
          Debug.WriteLine(submission);
        }
    }
}
```

### Bash

```bash
# This is a live example that you can run in your console.

export API_TOKEN_ID="yRaaR9JmTPtGX7EN"
export API_TOKEN_SECRET="IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"
export SUBMISSION_ID="PLh644LApyMAD3p9"

curl -s "https://api.docspring.com/api/v1/submissions/$SUBMISSION_ID?include_data=false" \
  -u "$API_TOKEN_ID:$API_TOKEN_SECRET"
```
