---
title: Get Template Schema
---

# Get Template Schema

Fetch a template's JSON Schema.

## HTTP Request

`GET https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>/schema`

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

client.getTemplateSchema('YOUR_TEMPLATE_ID', function (error, schema) {
  if (error) throw error
  console.log(schema)
})
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
          Configuration.Default.Username = "DOCSPRING_TOKEN_ID";
          Configuration.Default.Password = "DOCSPRING_TOKEN_SECRET";

          var apiInstance = new PDFApi();
          string templateId = "tpl_000000000000000001";
          var schema = apiInstance.GetTemplateSchema(templateId);

          // schema is Dictionary<string, Object>
          // schema["properties"] is Newtonsoft.Json.Linq.JObject
          var properties = schema["properties"] as Newtonsoft.Json.Linq.JObject;
          Debug.WriteLine(properties);
        }
    }
}
```