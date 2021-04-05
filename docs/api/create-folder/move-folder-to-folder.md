---
title: Move Folder to Folder
---

# Move to Folder

Move Folder to another Folder

## HTTP Request

`POST https://api.docspring.com/api/v1/folders/<FOLDER_ID>/move`

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
  "id": "fld_000000000000000001",
  "name": "Folder 1",
  "path": "/Folder 2",
  "parent_folder_id": "fld_000000000000000002"
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

var folderId = 'fld_000000000000000001'
client.moveFolderToFolder(folderId, data, function (error, folder, response) {
  if (error) {
    console.log(response.body)
    return
  } else {
    console.log(folder)
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

folder_id = "fld_000000000000000001"

response = docspring.move_folder_to_folder(folder_id,
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

folder_id = 'fld_000000000000000001'
response = client.move_folder_to_folder(folder_id,
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

$params = new DocSpring\Model\MoveFolderData([
  "parent_folder_id" => "fld_000000000000000002"
]);

$folder_id = 'fld_000000000000000001';
$folder = $docspring->moveFolderToFolder($folder_id, $params);
echo $folder;
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

          var moveFolderData = new MoveFolderData(
            parent_folder_id": "fld_000000000000000002"
          );

          var folderId = 'fld_000000000000000001';
          var response = apiInstance.MoveFolderToFolder(folderId, moveFolderData);
          Debug.WriteLine(response);
        }
    }
}
```

</template>
<template v-slot:bash>

The following example waits for the PDF to be processed, then prints the download URL.

```bash
export API_TOKEN_ID="API_TOKEN_ID"
export API_TOKEN_SECRET="API_TOKEN_SECRET"

export FOLDER_ID="fld_000000000000000001"

move_folder() {
  curl -s "https://api.docspring.com/api/v1/folders/$FOLDER_ID/move" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"parent_folder_id": "fld_000000000000000002"}'
}

RESPONSE=$(move_folder)
echo $RESPONSE
```

</template>
</CodeSwitcher>