---
title: Update Data Request
---

# Update Data Request

Update the metadata or authentication details of a pending Data Request.

Please note that you cannot update a Data Request that has already been viewed or completed.

> See the [Data Requests](./index) documentation for more information.

## HTTP Request

`PUT https://api.docspring.com/api/v1/data_requests/<DATA_REQUEST_ID>`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Example Response

```json
{
  "status": "success",
  "data_request": {
    "id": "drq_000000000000000001",
    "email": "jdoe@example.com",
    "name": "John Doe",
    "order": 1,
    "fields": ["description"],
    "metadata": {
      "user_id": 42
    },
    "state": "complete",
    "viewed_at": "2018-10-23T13:00:00Z",
    "completed_at": "2018-10-23T13:05:00Z"
  }
}
```

## Example Code

<CodeSwitcher :languages="{javascript:'JavaScript', ruby:'Ruby', python:'Python', php:'PHP', csharp:'C#', bash:'bash'}">
<template v-slot:javascript>

```javascript
var DocSpring = require("docspring");

client = new DocSpring.Client(config);

client.updateDataRequest(
  "drq_000000000000000001",
  {
    auth_type: "oauth",
    auth_provider: "google",
    auth_session_started_at: "2018-10-23T13:00:00Z",
  },
  function(error, dataRequest) {
    if (error) throw error;
    console.log(dataRequest);
  }
);
```

</template>
<template v-slot:ruby>

```ruby
require 'docspring'

docspring = DocSpring::Client.new

response = docspring.update_data_request(
  'drq_000000000000000001',
  auth_type: 'oauth',
  auth_provider: 'google',
  auth_session_started_at: '2018-10-23T13:00:00Z'
)
puts response
```

</template>
<template v-slot:python>

```python
import docspring

client = docspring.Client()
response = client.update_data_request(
  "drq_000000000000000001",
  {
    "auth_type": 'oauth',
    "auth_provider": 'google',
    "auth_session_started_at": '2018-10-23T13:00:00Z'
  }
)
print(response)
```

</template>
<template v-slot:php>

```php
<?php
$docspring = new DocSpring\Client();
$data_request_id = 'drq_000000000000000001';
$data = new DocSpring\Model\UpdateSubmissionDataRequestData();
$data->setAuthType('oauth');
$data->setAuthProvider('google');
$data->setAuthSessionStartedAt('2018-10-23T13:00:00Z');
$response = $docspring->updateDataRequest($data_request_id, $data);
echo $response;
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
          var apiInstance = new PDFApi();
          string dataRequestId = "drq_000000000000000001";
          UpdateSubmissionDataRequestData data = new UpdateSubmissionDataRequestData(
            authType: CreateSubmissionDataRequestData.AuthTypeEnum.Oauth,
            authProvider: "google",
            authSessionStartedAt: "2018-10-23T13:00:00Z"
          );
          var response = apiInstance.UpdateDataRequest(dataRequestId, data);
          Debug.WriteLine(response);
        }
    }
}
```

</template>
<template v-slot:bash>

```bash
export DATA_REQUEST_ID="drq_000000000000000001"

curl -s -X PUT "https://api.docspring.com/api/v1/data_requests/$DATA_REQUEST_ID" \
  -u "$API_TOKEN_ID:$API_TOKEN_SECRET" -d \
    '{ "auth_type": "oauth", "auth_provider": "google", "auth_session_started_at": "2018-10-23T13:00:00Z" }'
```

</template>
</CodeSwitcher>
