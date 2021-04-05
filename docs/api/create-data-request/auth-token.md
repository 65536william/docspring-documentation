---
title: Create Data Request Authentication Token
---

# Create Data Request Authentication Token

Generate an authentication token for a data request. This authentication token will expire in one hour, so you should wait until your user is ready to sign the form.

> See the [Data Requests](./index) documentation for more information.

## HTTP Request

`POST https://api.docspring.com/api/v1/data_requests/<DATA_REQUEST_ID>/tokens`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Example Response

```json
{
  "status": "success",
  "token": {
    "id": "TOKEN_ID",
    "secret": "TOKEN_SECRET",
    "expires_at": "TIMESTAMP",
    "data_request_url": "https://app.docspring.com/data_requests/<DATA_REQUEST_ID>?token_id=TOKEN_ID&token_secret=TOKEN_SECRET"
  }
}
```

## Example Code

<CodeSwitcher :languages="{javascript:'JavaScript', ruby:'Ruby', python:'Python', php:'PHP', csharp:'C#', bash:'bash'}">
<template v-slot:javascript>

```javascript
var DocSpring = require('docspring')

var config = new DocSpring.Configuration()
config.apiTokenId = 'DOCSPRING_TOKEN_ID'
config.apiTokenSecret = 'DOCSPRING_TOKEN_SECRET'
client = new DocSpring.Client(config)

client.createDataRequestToken('DATA_REQUEST_ID', function (error, token) {
  if (error) throw error
  console.log(token)
})
```

</template>
<template v-slot:ruby>

```ruby
require 'docspring'

DocSpring.configure do |c|
  c.username  = ENV['DOCSPRING_TOKEN_ID']
  c.password  = ENV['DOCSPRING_TOKEN_SECRET']
end

docspring = DocSpring::Client.new
response = docspring.create_data_request_token('DATA_REQUEST_ID')
puts response
```

</template>
<template v-slot:python>

```python
import docspring

client = docspring.Client()
client.api_client.configuration.username = "DOCSPRING_TOKEN_ID"
client.api_client.configuration.password = "DOCSPRING_TOKEN_SECRET"

response = client.create_data_request_token('DATA_REQUEST_ID')
puts response
```

</template>
<template v-slot:php>

```php
<?php
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername("DOCSPRING_TOKEN_ID");
$docspring->getConfig()->setPassword("DOCSPRING_TOKEN_SECRET");

$response = $docspring->createDataRequestToken('DATA_REQUEST_ID');
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
          Configuration.Default.Username = "DOCSPRING_TOKEN_ID";
          Configuration.Default.Password = "DOCSPRING_TOKEN_SECRET";

          var apiInstance = new PDFApi();
          string dataRequestId = "DATA_REQUEST_ID";
          DataRequestToken token = apiInstance.CreateDataRequestToken(dataRequestId);
          Debug.WriteLine(submission);
        }
    }
}
```

</template>
<template v-slot:bash>

```bash
curl -s -X POST "https://api.docspring.com/api/v1/submissions/DATA_REQUEST_ID" \
  -u "YOUR_API_TOKEN_ID:YOUR_API_TOKEN_SECRET"
```

</template>
</CodeSwitcher>