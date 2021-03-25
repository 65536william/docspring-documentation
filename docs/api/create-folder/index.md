---
title: Create Folder
has_children: true
id: 271611
order: 6
child_order: 1
---

# Create Folder

Create a new Folder

## HTTP Request

`POST https://api.docspring.com/api/v1/folders`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../../install-api-client/authentication) documentation for more information.

## Parameters

The request body must be a JSON object with the following properties:

- `folder` _(object, required)_: Object can have the following properties:
  - `name` _(string, required)_: The folder name.
  - `parent_folder_id` _(string, optional)_: The id of folder you want this folder to be created under. Omit this parameter to move to root folder

## Example Response

```json
{
  "id": "fld_000000000000000002",
  "name": "Folder 2",
  "path": "/",
  "parent_folder_id": null
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
  folder: {
    name: 'Folder 2',
  },
}

client.createFolder(data, function (error, folder, response) {
  if (error) {
    console.log(response.body)
    return
  } else {
    console.log(folder)
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

response = docspring.create_folder(
  folder: {
    name: "Folder 2"
  }
)
puts response
```

### Python

```python
import docspring

client = docspring.Client()
client.api_client.configuration.username = "API_TOKEN_ID"
client.api_client.configuration.password = "API_TOKEN_SECRET"

response = client.create_folder(
  {
    "folder": {
      "name": "Folder 2"
    }
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

$params = new DocSpring\Model\CreateFolderData([
  "folder" => [
    "name" => "Folder 2"
  ],
]);

$folder = $docspring->createFolder($params);
echo $folder;
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

          var createFolderData = new CreateFolderData(
            folder: new {
              name = "Folder 1"
            }
          );

          var response = apiInstance.CreateFolder(createFolderData);
          Debug.WriteLine(response);
        }
    }
}
```

### Bash

The following example waits for the PDF to be processed, then prints the download URL.

```bash
export API_TOKEN_ID="API_TOKEN_ID"
export API_TOKEN_SECRET="API_TOKEN_SECRET"

create_folder() {
  curl -s "https://api.docspring.com/api/v1/folders" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"folder":{"name": "Folder 2"}}'
}

RESPONSE=$(create_folder)
echo $RESPONSE
```

{% endmethod %}
