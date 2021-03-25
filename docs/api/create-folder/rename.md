---
title: Rename Folder
---

# Rename Folder

Rename a Folder

## HTTP Request

`POST https://api.docspring.com/api/v1/folders/<FOLDER_ID>/rename`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Parameters

The request body must be a JSON object with the following properties:

- `folder` _(object, required)_: Object can have the following properties:
  - `name` _(string, required)_: The new folder name.

## Example Response

```json
{
  "id": "fld_000000000000000002",
  "name": "Renamed Folder 2",
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
    name: 'Renamed Folder 2',
  },
}

var folderId = 'fld_000000000000000002'
client.renameFolder(folderId, data, function (error, data, response) {
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

folder_id = "fld_000000000000000002"

response = docspring.rename_folder(folder_id,
  folder: {
    name: "Renamed Folder 2"
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

folder_id = 'fld_000000000000000002'
response = client.rename_folder(folder_id,
  {
    "folder": {
      "name": "Renamed Folder 2"
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

$params = new DocSpring\Model\RenameFolderData([
  "folder" => [
    "name" => "Renamed Folder 2"
  ],
]);

$folder_id = 'fld_000000000000000002';
$folder = $docspring->renameFolder($folder_id, $params);
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

          var renameFolderData = new RenameFolderData(
            folder: new {
              name = "Renamed Folder 2"
            }
          );

          var folderId = 'fld_000000000000000002';
          var response = apiInstance.RenameFolder(folderId, renameFolderData);
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

export FOLDER_ID="fld_000000000000000002"

rename_folder() {
  curl -s "https://api.docspring.com/api/v1/folders/$FOLDER_ID/rename" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"folder":{"name": "Renamed Folder 2"}}'
}

RESPONSE=$(rename_folder)
echo $RESPONSE
```