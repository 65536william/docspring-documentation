---
title: Get Data Request
---

# Get Data Request

Fetch a data request to check its status.

## HTTP Request

`GET https://api.docspring.com/api/v1/data_requests/<DATA_REQUEST_ID>`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Example Response

```json
{
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
```

## Example Code

<CodeSwitcher :languages="{javascript:'JavaScript', ruby:'Ruby', python:'Python', php:'PHP', csharp:'C#', bash:'bash'}">
<template v-slot:javascript>

```javascript
var DocSpring = require("docspring");

client = new DocSpring.Client(config);

client.getDataRequest("drq_000000000000000001", function(error, dataRequest) {
  if (error) throw error;
  console.log(dataRequest);
});
```

</template>
<template v-slot:ruby>

```ruby
require 'docspring'

docspring = DocSpring::Client.new

data_request = docspring.get_data_request('drq_000000000000000001')
puts data_request
```

</template>
<template v-slot:python>

```python
import docspring

client = docspring.Client()
data_request = client.get_data_request("drq_000000000000000001")
print(data_request)
```

</template>
<template v-slot:php>

```php
<?php
$docspring = new DocSpring\Client();
$data_request_id = 'drq_000000000000000001';
$data_request = $docspring->getDataRequest($data_request_id);
echo $data_request;
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
          var data_request = apiInstance.GetDataRequest(dataRequestId);
          Debug.WriteLine(data_request);
        }
    }
}
```

</template>
<template v-slot:bash>

```bash
export DATA_REQUEST_ID="drq_000000000000000001"

curl -s "https://api.docspring.com/api/v1/data_requests/$DATA_REQUEST_ID" \
  -u "$API_TOKEN_ID:$API_TOKEN_SECRET"
```

</template>
</CodeSwitcher>
