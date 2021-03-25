---
title: Get Template
parent: 522775
child_order: 9
---

# Get Template

Fetch a Template.

## HTTP Request

`GET https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>`

## Parameters

The default API endpoint will only return a subset of the template data, including name, description, document data, and template settings.

You can append `?full=true` to the URL to retrieve all of the template data (including fields, html, scss, etc.)

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../../install-api-client/authentication) documentation for more information.

## Example Code

### JavaScript

```javascript
var DocSpring = require('docspring')

var config = new DocSpring.Configuration()
config.apiTokenId = 'DOCSPRING_TOKEN_ID'
config.apiTokenSecret = 'DOCSPRING_TOKEN_SECRET'
client = new DocSpring.Client(config)

client.getTemplate('YOUR_TEMPLATE_ID', function (error, template) {
  if (error) throw error
  console.log(template)
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
          var template = apiInstance.GetTemplate(templateId);
          Debug.WriteLine(template);
        }
    }
}
```