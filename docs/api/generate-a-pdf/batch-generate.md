---
title: Batch Generate PDFs
---

# Batch Generate PDFs

Create up to a maximum of 50 PDFs in a single batch request.

## HTTP Request

`POST https://api.docspring.com/api/v1/submissions/batches`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Parameters

The request body must be a JSON object with the following keys:

- `template_id` _(object, optional)_: The default template ID for submissions. You can override this for each submission.
- `test` _(boolean, optional)_ _(default: `false`)_: The default test value for submissions. `true` to generate a test PDF (watermarked), `false` for a live PDF. You can override this for each submission.
- `metadata` _(object, optional)_: Any additional data, such as a user id. This will be saved on the submission batch job.
- `submissions` _(array)_: An array of submission objects.

The `submissions` property must be a JSON array of objects. Each object in the array must have the following keys:

- `template_id` _(string, optional)_: The template ID for this submission. If not provided, uses the `template_id` from the root object.
- `data` _(object)_: Data to fill in the fields. Must match the template schema.
- `metadata` _(object, optional)_: Any additional data, such as a user id. `metadata` will be included in webhook requests.
- `test` _(boolean, optional)_: `true` to generate a test PDF, `false` for a live PDF. Test PDFs are free, but watermarked. _Note: A test API token can only be used to generate test PDFs._

## Example Code

<CodeSwitcher :languages="{javascript:'JavaScript', ruby:'Ruby', python:'Python', php:'PHP', csharp:'C#', bash:'bash'}">
<template v-slot:javascript>

```javascript
// This is a live example that you can run with Node

var DocSpring = require("docspring");

var config = new DocSpring.Configuration();
config.apiTokenId = "yRaaR9JmTPtGX7EN";
config.apiTokenSecret = "IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec";
client = new DocSpring.Client(config);

var templateId = "6zz3dYRYM67fxMXA";
var submissionData = [
  {
    test: true,
    data: {
      first_name: "John",
      last_name: "Smith",
      favorite_color: "Blue",
    },
    metadata: {
      user_id: 123,
    },
  },
  {
    test: true,
    data: {
      first_name: "Jane",
      last_name: "Doe",
      favorite_color: "Red",
    },
  },
];
client.batchGeneratePDFs(templateId, submissionData, function(
  error,
  responses
) {
  if (error) throw error;
  console.log(responses);
});
```

</template>
<template v-slot:ruby>

```ruby
# This is a live example that you can run in IRB.

require 'docspring'

ENV['DOCSPRING_TOKEN_ID'] = "yRaaR9JmTPtGX7EN"
ENV['DOCSPRING_TOKEN_SECRET'] = "IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"
TEMPLATE_ID = "6zz3dYRYM67fxMXA"

DocSpring.configure do |c|
  c.username  = ENV['DOCSPRING_TOKEN_ID']
  c.password  = ENV['DOCSPRING_TOKEN_SECRET']
end

docspring = DocSpring::Client.new

responses = docspring.batch_generate_pdf(TEMPLATE_ID,
  create_submission_batch_body: [
    {
      test: true,
      data: {
        first_name: 'John',
        last_name: 'Smith',
        favorite_color: 'Blue',
      },
      metadata: {
        user_id: 123
      }
    },
    {
      test: true,
      data: {
        first_name: 'Jane',
        last_name: 'Doe',
        favorite_color: 'Red',
      },
    }
  ]
)
```

<!-- 23a664f3b2721d119d85e3351324a26be965202db0af1d113a7f3 -->

</template>
<template v-slot:python>

```python
# This is a live example that you can run in the Python interpreter
import docspring

client = docspring.Client()
client.api_client.configuration.username = "yRaaR9JmTPtGX7EN"
client.api_client.configuration.password = "IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"

template_id = '6zz3dYRYM67fxMXA'

response = client.batch_generate_pdfs({
    'template_id': template_id,
    'metadata': { 'batch_user_id': 123 },
    'test': True,
    'submissions': [
        {
            'data': {
                "first_name": "John",
                "last_name": "Smith",
                "favorite_color": "Green",
            },
            "metadata": { "user_id": 123 }
        },
        {
            'data': {
                "first_name": "Jane",
                "last_name": "Doe",
                "favorite_color": "Blue",
            },
            "metadata": { "user_id": 456 }
        }
    ]}, wait=True)

print(response.status)  # => 'success'
print(response.submission_batch.state) # => 'processed'
print(response.submission_batch.pending_count) # => 0
print(response.submissions)
```

If the `wait` argument is omitted or `True`, the method will wait for the batch to finish processing.

You can also pass `wait=False` to return immediately, and you will receive a pending batch job. You can call `get_submission_batch(response.submission_batch.id)` to fetch the current status of the batch.

If you want to generate multiple PDFs in a batch, and combine them into a single operation, you can do that with the `batch_generate_and_combine_pdfs` method. This takes the same arguments as `batch_generate_pdfs`, and returns a "combined submission" response.

</template>
<template v-slot:php>

```php
<?php
// This is a live example that you can run in the PHP interactive shell (php -a)
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername("yRaaR9JmTPtGX7EN");
$docspring->getConfig()->setPassword("IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec");

$template_id = '6zz3dYRYM67fxMXA';

$create_submission_batch_body = json_encode(array(
    [
      'data' => [
        "first_name" => 'John',
        "last_name" => 'Smith',
        "favorite_color" => 'Green'
      ]
    ],
    [
      'data' => [
        "first_name" => 'Jane',
        "last_name" => 'Doe',
        "favorite_color" => 'Blue'
      ]
    ]
  ));

$responses = $docspring->batchGeneratePDFs($template_id, $create_submission_batch_body);
print_r($responses);
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
          string templateId = "tpl_000000000000000001";

          var submissionBatchData = new SubmissionBatchData(
            test: false,
            templateId: templateId,
            submissions: new List<SubmissionDataBatchRequest>(
              new SubmissionDataBatchRequest[] {
                new SubmissionDataBatchRequest(
                  templateId: templateId,
                  test: false,
                  data: new {
                    title = "Test PDF",
                    description = "This PDF is great!"
                  }
                ),
                new SubmissionDataBatchRequest(
                  templateId: templateId,
                  test: false,
                  data: new {
                    title = "Test PDF 2",
                    description = "This PDF is also great!"
                  }
                )
              }
            )
          );

          CreateSubmissionBatchResponse response = instance.BatchGeneratePdfs(submissionBatchData);
          Debug.WriteLine(response);
        }
    }
}
```

</template>
<template v-slot:bash>

The following example waits for the PDF to be processed, then prints the download URL.

```bash
# This is a live example that you can run in your console.

export API_TOKEN_ID="yRaaR9JmTPtGX7EN"
export API_TOKEN_SECRET="IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"
export TEMPLATE_ID="6zz3dYRYM67fxMXA"

curl -s "https://api.docspring.com/api/v1/submissions/batches" \
  -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '[{"data":{"first_name": "John", "last_name": "Smith", "favorite_color": "Blue"}, "metadata": { "user_id": 123 }}]'
```

</template>
</CodeSwitcher>
