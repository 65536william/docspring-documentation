---
title: API Authentication
order: 3
parent: 121026
child_order: 3
---

# API Authentication

DocSpring uses API tokens for authentication. You must authenticate using HTTP basic authentication. Use your API token ID as the username,
and the API token secret as the password.

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

You can manage your API tokens on the [API Tokens page](https://app.docspring.com/api_tokens).

Our API includes an `/authentication` endpoint that you can use to make sure your API tokens are valid.

## Test Authentication

### JavaScript

```javascript
// This is a live example that you can run with Node

var DocSpring = require('docspring')

var config = new DocSpring.Configuration()
config.apiTokenId = 'yRaaR9JmTPtGX7EN'
config.apiTokenSecret = 'IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec'
client = new DocSpring.Client(config)

client.testAuthentication(function (error, response) {
  if (error) throw error
  console.log(response)
})
```

### Ruby

```ruby
require 'docspring'

ENV['DOCSPRING_TOKEN_ID'] = 'yRaaR9JmTPtGX7EN'
ENV['DOCSPRING_TOKEN_SECRET'] = 'IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec'

DocSpring.configure do |config|
  config.api_token_id = ENV['DOCSPRING_TOKEN_ID']
  config.api_token_secret = ENV['DOCSPRING_TOKEN_SECRET']
end

docspring = DocSpring::Client.new
docspring.test_authentication
# => #<DocSpring::InlineResponse200:0x012389abcdef @status="success">
```

### Python

```python
import docspring

client = docspring.Client()
client.api_client.configuration.api_token_id = "yRaaR9JmTPtGX7EN"
client.api_client.configuration.api_token_secret = "IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec"

client.test_authentication()
# => {'status': 'success'}
```

### PHP

```php
<?php
// This is a live example that you can run in the PHP interactive shell (php -a)
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername('yRaaR9JmTPtGX7EN');
$docspring->getConfig()->setPassword('IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec');

echo $docspring->testAuthentication();
# => { "status": "success" }
```

### C\#

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
          // Test Authentication
          AuthenticationSuccessResponse result = apiInstance.TestAuthentication();
          Debug.WriteLine(result);
        }
    }
}
```

### Bash

```bash
curl -u DOCSPRING_TOKEN_ID:DOCSPRING_TOKEN_SECRET -X GET https://api.docspring.com/api/v1/authentication

# Live example:
curl -u yRaaR9JmTPtGX7EN:IB3TRkSdm4f2BdtU_D3YgxjdMB7l-r2fOgvxD1Yzwec -X GET https://api.docspring.com/api/v1/authentication
```
