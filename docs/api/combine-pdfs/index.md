---
title: Combine PDFs
---

# Combine PDFs

Combine multiple PDFs into a single PDF.

> This endpoint was originally called "combine submissions", but the API was extended to allow many different types of source PDFs (submissions, other combined PDFs, original template PDFs, custom uploaded files, and URLs).

## HTTP Request

`POST https://api.docspring.com/api/v1/combined_submissions`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Parameters

The request body must be a JSON object with the following keys:

- `source_pdfs` _(array)_: An array of source PDF objects containing `type` and `id` properties (or `url` for URLs). PDFs will be merged in the same order as this array.
  - Valid types: `submission`, `combined_submission`, `template`, `custom_file`, `url`
  - Examples:
    - `{ "type": "submission", "id": "sub_000000000000000001" }`
    - `{ "type": "combined_submission", "id": "com_000000000000000001" }`
    - `{ "type": "template", "id": "tpl_000000000000000001" }`
    - `{ "type": "custom_file", "id": "cfi_000000000000000001" }`
    - `{ "type": "url", "url": "http://example.com/test-pdf.pdf" }`
- `metadata` _(object, optional)_: Any additional data, such as a user id. `metadata` will be included in webhook requests.

To include a custom PDF, you can either [create a custom file](./create-custom-file) and pass the ID of this file, or pass a URL from which the PDF can be downloaded.

> Note: We have made this feature free to use, but any source submission PDFs will count towards your monthly usage.

## Customize the PDF Filename in the Download URL

You can customize the PDF filename by setting the `pdf_filename` key in the metadata. (The `.pdf` extension will be added automatically.)

For example, if you set `pdf_filename` to `custom_pdf_file123`, the PDF URL will end with: `/combined_submissions/<combined_submission_id>/custom_pdf_file123.pdf`

(By default, the PDF URL will end with `/submissions/<submission_id>.pdf`)

> Custom PDF filenames have a maximum length of 128 characters, and can include the following characters: `0-9 A-Z a-z - _ .`. Any other characters will be replaced with an underscore.

<CodeSwitcher :languages="{javascript:'JavaScript', ruby:'Ruby', python:'Python', php:'PHP', csharp:'C#', bash:'bash'}">
<template v-slot:javascript>

```javascript
// Find your API tokens here: https://app.docspring.com/api_tokens

import DocSpring from "docspring";

var config = new DocSpring.Configuration();
config.apiTokenId = "DOCSPRING_API_TOKEN_ID";
config.apiTokenSecret = "DOCSPRING_API_TOKEN_SECRET";
docspring = new DocSpring.Client(config);

var options = {
  test: false,
  source_pdfs: [
    { type: "submission", id: "sub_000000000000000001" },
    { type: "template", id: "tpl_000000000000000001" },
    { type: "submission", id: "sub_000000000000000002" },
  ],
  wait: true,
};

docspring.combinePdfs(options, function(error, response) {
  if (error) throw error;
  var combined_submission = response.combined_submission;

  console.log("Download your PDF at:", combined_submission.download_url);
});
```

</template>
<template v-slot:ruby>

```ruby
require 'docspring'

ENV['DOCSPRING_TOKEN_ID'] = "YOUR_API_TOKEN_ID"
ENV['DOCSPRING_TOKEN_SECRET'] = "YOUR_API_TOKEN_SECRET"

DocSpring.configure do |c|
  c.username  = ENV['DOCSPRING_TOKEN_ID']
  c.password  = ENV['DOCSPRING_TOKEN_SECRET']
end

docspring = DocSpring::Client.new

response = docspring.combine_pdfs(
  source_pdfs: [
    { type: "submission", id: "sub_000000000000000001" },
    { type: "submission", id: "sub_000000000000000002" },
  ],
  metadata: {
    user_id: 123
  }
)

puts "Download your combined PDF at: #{response.combined_submission.download_url}"
```

</template>
<template v-slot:python>

```python
# This is a live example that you can run in the Python interpreter
import docspring

client = docspring.Client()
client.api_client.configuration.username = "DOCSPRING_TOKEN_ID"
client.api_client.configuration.password = "DOCSPRING_TOKEN_SECRET"

combined_submission = client.combine_pdfs({
  "source_pdfs": [
    { "type": "submission", "id": "sub_000000000000000001" },
    { "type": "submission", "id": "sub_000000000000000002" },
  ],
  "metadata": {
    "user_id": 123,
  }
})

print("Download your combined PDF at: %s" % combined_submission.download_url)
```

</template>
<template v-slot:php>

```php
<?php
// This is a live example that you can run in the PHP interactive shell (php -a)
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername('YOUR_API_TOKEN_ID');
$docspring->getConfig()->setPassword('YOUR_API_TOKEN_SECRET');

$params = new DocSpring\Model\CreateCombinedSubmissionBody([
  "test" => false,
  "source_pdfs" => [
    [ "type" => "submission", "id" => "sub_000000000000000001" ],
    [ "type" => "submission", "id" => "sub_000000000000000002" ]
  ],
  "metadata" => [ "key" => "value" ]
])

$response = $docspring->combinePdfs($params);
echo $response;

echo "Download your combined PDF at: " . $response->getCombinedSubmission()->getDownloadUrl();
```

</template>
<template v-slot:csharp>

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
          var combinedSubmissionData = new CombinePdfsData(
            test: false,
            sourcePdfs: new List<Object>(new Object[] {
              new {
                type = "submission",
                id = "sub_000000000000000001",
              },
              new {
                type = "custom_file",
                id = "csi_000000000000000001",
              },
            })
          );

          var combinedSubmission = apiInstance.CombinePdfs(combinedSubmissionData);
          Debug.WriteLine(combinedSubmission);

          // The job will now be in the "pending" state until it is processed.
          // You may want to call GetCombinedSubmission once per second until
          // the state changes to "processed".
          // Alternatively, you can set up a webhook notification.
        }
    }
}
```

</template>
<template v-slot:bash>

The following example waits for the merged PDF to be processed, then prints the download URL.

```bash
# This is a live example that you can run in your console.

export API_TOKEN_ID="YOUR_API_TOKEN_ID"
export API_TOKEN_SECRET="YOUR_API_TOKEN_SECRET"

combine_submissions() {
  curl -s "https://api.docspring.com/api/v1/combined_submissions" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"source_pdfs":[{"type": "submission", "id": "SUBMISSION_1_ID"}, {"type": "submission", "id": "SUBMISSION_2_ID"}], "metadata": { "user_id": 123 }}'
}

get_combined_submission() {
  curl -s "https://api.docspring.com/api/v1/combined_submissions/$1" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET"
}

get_json_value() {
  echo "$1" | sed -n 's/.*"'"$2"'":"\([^"]\+\)".*/\1/p'
}

RESPONSE=$(combine_submissions)
echo $RESPONSE
SUBMISSION_ID=$(get_json_value "$RESPONSE" id)
SUBMISSION_STATE=$(get_json_value "$RESPONSE" state)

echo "Waiting for PDF to be processed..."
while [[ "$SUBMISSION_STATE" = "pending" ]]; do
  sleep 1
  RESPONSE=$(get_combined_submission "$SUBMISSION_ID")
  SUBMISSION_STATE=$(get_json_value "$RESPONSE" state)
done

echo "Download your combined PDF at:"
get_json_value "$RESPONSE" download_url
```

</template>
</CodeSwitcher>
