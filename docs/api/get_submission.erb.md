---
title: Get Submission
---

# Get Submission

Fetch a PDF job submission.

{% method %}

### HTTP Request

`GET https://api.docspring.com/api/v1/submissions/<SUBMISSION_ID>`

### Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](authentication.md) documentation for more information.

### Include Submission Data

The API response does not include any submission data by default. (This is because the data can be very large, and it can also contain sensitive information.)

If you do want to return the data that was submitted with your API request, you can use the `include_data` parameter. Either append the `?include_data=true` query parameter to the URL, or send this as an option in the JSON payload.

> All of our API client examples show how to use the `include_data` option, with the value set to false by default.

### Example Response

The following example API response includes details about an AWS S3 integration (under `actions`.)

```json
<%= pretty_json(OPEN_API_SCHEMA['paths']["/submissions/{submission_id}"]["get"]["responses"]["200"]["examples"]["application/json"]) %>
```

### Example Code

{% sample lang="javascript" -%}

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

{% sample lang="ruby" -%}

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

{% sample lang="python" -%}

```python
# This is a live example that you can run in the Python interpreter
import docspring

client = docspring.Client()
client.api_client.configuration.username = "yRaaR9JmTPtGX7EN"
client.api_client.configuration.password = "IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"

submission = client.get_submission("PLh644LApyMAD3p9", include_data=False)
print(submission)
```

{% sample lang="php" -%}

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

{% sample lang="csharp" -%}

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

{% sample lang="bash" -%}

```bash
# This is a live example that you can run in your console.

export API_TOKEN_ID="yRaaR9JmTPtGX7EN"
export API_TOKEN_SECRET="IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"
export SUBMISSION_ID="PLh644LApyMAD3p9"

curl -s "https://api.docspring.com/api/v1/submissions/$SUBMISSION_ID?include_data=false" \
  -u "$API_TOKEN_ID:$API_TOKEN_SECRET"
```

{% endmethod %}
