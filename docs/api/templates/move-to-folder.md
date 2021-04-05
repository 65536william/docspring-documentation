---
title: Move Template to Folder
---

# Move to Folder

Move Template to another Folder

## HTTP Request

`POST https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>/move`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Parameters

The request body must be a JSON object with the following properties:

- `parent_folder_id` _(string, optional)_: The folder id to move the folder into. Omit this parameter to move to root folder

## Example Response

```json
{
  "id": "tpl_000000000000000001",
  "name": "Template 1",
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

<CodeSwitcher :languages="{javascript:'JavaScript', ruby:'Ruby', python:'Python', php:'PHP', csharp:'C#', bash:'bash'}">
<template v-slot:javascript>

```javascript
import DocSpring from 'docspring'

const config = new DocSpring.Configuration()
config.apiTokenId = 'API_TOKEN_ID'
config.apiTokenSecret = 'API_TOKEN_SECRET'
client = new DocSpring.Client(config)

var data = {
  parent_folder_id: 'fld_000000000000000002',
}

var templateId = 'tpl_000000000000000001'
client.moveTemplateToFolder(templateId, data, function (
  error,
  template,
  response
) {
  if (error) {
    console.log(response.body)
    return
  } else {
    console.log(template)
  }
})
```

</template>
<template v-slot:ruby>

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

response = docspring.move_template_to_folder(template_id,
  parent_folder_id: "fld_000000000000000002"
)
puts response
```

</template>
<template v-slot:python>

```python
import docspring

client = docspring.Client()
client.api_client.configuration.username = "API_TOKEN_ID"
client.api_client.configuration.password = "API_TOKEN_SECRET"

template_id = 'tpl_000000000000000001'
response = client.move_template_to_folder(template_id,
  {
    "parent_folder_id": "fld_000000000000000002"
  }
)

print(response)
```

</template>
<template v-slot:php>

```php
<?php
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername('YOUR_API_TOKEN_ID');
$docspring->getConfig()->setPassword('YOUR_API_TOKEN_SECRET');

$params = new DocSpring\Model\MoveTemplateData([
  "parent_folder_id" => "fld_000000000000000002"
]);

$template_id = 'fld_000000000000000001';
$template = $docspring->moveTemplateToFolder($template_id, $params);
echo $template;
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
          Configuration.Default.Username = "API_TOKEN_ID";
          Configuration.Default.Password = "API_TOKEN_SECRET";

          var apiInstance = new PDFApi();

          var moveTemplateData = new MoveTemplateData(
            parent_folder_id": "fld_000000000000000002"
          );

          var templateId = 'tpl_000000000000000001';
          var response = apiInstance.MoveTemplateToFolder(templateId, moveTemplateData);
          Debug.WriteLine(response);
        }
    }
}
```

</template>
<template v-slot:bash>

```bash
export API_TOKEN_ID="API_TOKEN_ID"
export API_TOKEN_SECRET="API_TOKEN_SECRET"

export TEMPLATE_ID="tpl_000000000000000001"

move_template_to_folder() {
  curl -s "https://api.docspring.com/api/v1/templates/$TEMPLATE_ID/move" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"parent_folder_id": "fld_000000000000000002"}'
}

RESPONSE=$(move_template_to_folder)
echo $RESPONSE
```

</template>
</CodeSwitcher>