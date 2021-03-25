---
title: Copy Template
---

# Copy Template

Create a new template as a copy of an existing template.

## HTTP Request

`POST https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>/copy`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Parameters

All parameters are optional and can be omitted. If provided, the request body must be a JSON object with the following properties:

- `parent_folder_id` _(string, optional)_: The folder id where you want to put the copied template. Omit this parameter to use the same folder as the existing template.
- `name` _(string, optional)_: The name for the copied template. If omitted, we will append `(1)` to the existing name.

## Example Response

We will return data for the copied template:

```json
{
  "id": "tpl_000000000000000001",
  "name": "Template 1 (1)",
  "public_web_form": false,
  "public_submissions": false,
  "template_type": "pdf",
  "document_state": "pending",
  "document_filename": "test-document.pdf",
  "document_processed": true,
  "expire_submissions": true,
  "expire_after": 7,
  "expiration_interval": "days",
  "allow_additional_properties": false,
  "editable_submissions": false,
  "page_count": 0,
  "page_dimensions": [[612, 792]],
  "webhook_url": null,
  "path": "/Folder 2",
  "slack_webhook_url": null,
  "redirect_url": null
}
```

## Example Code

### JavaScript

```javascript
import DocSpring from 'docspring'

const config = new DocSpring.Configuration()
config.apiTokenId = 'API_TOKEN_ID'
config.apiTokenSecret = 'API_TOKEN_SECRET'
client = new DocSpring.Client(config)

var data = {
  parent_folder_id: 'fld_000000000000000002',
  name: 'New Template Name',
}

var templateId = 'tpl_000000000000000001'
client.copyTemplate(templateId, data, function (error, template, response) {
  if (error) {
    console.log(response.body)
    return
  } else {
    console.log(template)
  }
})
```

### Ruby

```ruby
require 'docspring'

ENV['DOCSPRING_TOKEN_ID'] = "API_TOKEN_ID"
ENV['DOCSPRING_TOKEN_SECRET'] = "API_TOKEN_SECRET"

DocSpring.configure do |c|
  c.username  = ENV['DOCSPRING_TOKEN_ID']
  c.password  = ENV['DOCSPRING_TOKEN_SECRET']
end

docspring = DocSpring::Client.new

template_id = "tpl_000000000000000001"

response = docspring.copy_template(template_id,
  parent_folder_id: "fld_000000000000000002"
)
puts response
```

### Python

```python
import docspring

client = docspring.Client()
client.api_client.configuration.username = "API_TOKEN_ID"
client.api_client.configuration.password = "API_TOKEN_SECRET"

template_id = 'tpl_000000000000000001'
response = client.copy_template(template_id,
  {
    "parent_folder_id": "fld_000000000000000002"
  }
)

print(response)
```

### PHP

```php
<?php
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername('YOUR_API_TOKEN_ID');
$docspring->getConfig()->setPassword('YOUR_API_TOKEN_SECRET');

$params = new DocSpring\Model\CoveTemplateData([
  "parent_folder_id" => "fld_000000000000000002"
]);

$template_id = 'fld_000000000000000001';
$template = $docspring->copyTemplate($template_id, $params);
echo $template;
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
          Configuration.Default.Username = "API_TOKEN_ID";
          Configuration.Default.Password = "API_TOKEN_SECRET";

          var apiInstance = new PDFApi();

          var copyTemplateData = new CopyTemplateData(
            parent_folder_id": "fld_000000000000000002"
          );

          var templateId = 'tpl_000000000000000001';
          var response = apiInstance.CopyTemplate(templateId, copyTemplateData);
          Debug.WriteLine(response);
        }
    }
}
```

### Bash

```bash
export API_TOKEN_ID="API_TOKEN_ID"
export API_TOKEN_SECRET="API_TOKEN_SECRET"

export TEMPLATE_ID="tpl_000000000000000001"

copy_template() {
  curl -s "https://api.docspring.com/api/v1/templates/$TEMPLATE_ID/copy" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"parent_folder_id": "fld_000000000000000002"}'
}

RESPONSE=$(copy_template)
echo $RESPONSE
```