---
title: Expire a Submission
---

# Expire a Submission

Deletes the generated PDF, clears data that was submitted in the API request, and deletes any images.
(Electronic signatures are retained for UETA and ESIGN compliance.)

> Note: This API call requires a **live** API token.

## HTTP Request

`DELETE https://api.docspring.com/api/v1/submissions/<SUBMISSION_ID>`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Example Code

### JavaScript

```javascript
var DocSpring = require('docspring')

var config = new DocSpring.Configuration()
config.apiTokenId = 'DOCSPRING_TOKEN_ID'
config.apiTokenSecret = 'DOCSPRING_TOKEN_SECRET'
client = new DocSpring.Client(config)

client.expireSubmission('YOUR_SUBMISSION_ID', function (error, submission) {
  if (error) throw error
  console.log(submission)
})
```

### Ruby

```ruby
require 'docspring'

DocSpring.configure do |c|
  c.username  = ENV['DOCSPRING_TOKEN_ID']
  c.password  = ENV['DOCSPRING_TOKEN_SECRET']
end

docspring = DocSpring::Client.new
response = docspring.expire_submission('YOUR_SUBMISSION_ID')
puts response
```

### Python

```python
import docspring

client = docspring.Client()
client.api_client.configuration.username = "DOCSPRING_TOKEN_ID"
client.api_client.configuration.password = "DOCSPRING_TOKEN_SECRET"

response = client.expire_submission('YOUR_SUBMISSION_ID')
puts response
```

### PHP

```php
<?php
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername("DOCSPRING_TOKEN_ID");
$docspring->getConfig()->setPassword("DOCSPRING_TOKEN_SECRET");

$response = $docspring->expireSubmission('YOUR_SUBMISSION_ID');
echo $response;
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
          Submission submission = apiInstance.ExpireSubmission(submissionId);
          Debug.WriteLine(submission);
        }
    }
}
```

### Bash

```bash
curl -s -X DELETE "https://api.docspring.com/api/v1/submissions/YOUR_SUBMISSION_ID" \
  -u "YOUR_API_TOKEN_ID:YOUR_API_TOKEN_SECRET"
```