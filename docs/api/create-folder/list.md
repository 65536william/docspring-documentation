---
title: List Folders
---

# List Folders

List folders in your DocSpring template directory.

## HTTP Request

`GET https://api.docspring.com/api/v1/folders`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Example Response

```json
[
  {
    "id": "fld_000000000000000003",
    "name": "nested folder 3",
    "path": "/Folder 2",
    "parent_folder_id": "fld_000000000000000002"
  },
  {
    "id": "fld_000000000000000004",
    "name": "nested folder 4",
    "path": "/Folder 2",
    "parent_folder_id": "fld_000000000000000002"
  }
]
```

## Example Code

<CodeSwitcher :languages="{javascript:'JavaScript', ruby:'Ruby', python:'Python', php:'PHP', csharp:'C#', bash:'bash'}">
<template v-slot:javascript>

```javascript
import DocSpring from "docspring";

const config = new DocSpring.Configuration();
config.apiTokenId = "API_TOKEN_ID";
config.apiTokenSecret = "API_TOKEN_SECRET";
client = new DocSpring.Client(config);

var opts = {
  parent_folder_id: "fld_000000000000000002",
};

client.listFolders(opts, function(error, folders, response) {
  if (error) throw error;
  console.log(folders);
});
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

folders = docspring.list_folders(parent_folder_id: "fld_000000000000000002")
puts folders
```

</template>
<template v-slot:python>

```python
import docspring

client = docspring.Client()
client.api_client.configuration.username = "API_TOKEN_ID"
client.api_client.configuration.password = "API_TOKEN_SECRET"

folders = client.list_folders(parent_folder_id=1)
print(folders)
```

</template>
<template v-slot:php>

```php
<?php
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername('YOUR_API_TOKEN_ID');
$docspring->getConfig()->setPassword('YOUR_API_TOKEN_SECRET');

$parent_folder_id = "fld_000000000000000002"
$folder = $docspring->listFolders($parent_folder_id);
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

          var parentFolderId = "fld_000000000000000002";
          var folders = apiInstance.ListFolders(parentFolderId);
          Debug.WriteLine(folders);
        }
    }
}
```

</template>
<template v-slot:bash>

```bash
export API_TOKEN_ID="API_TOKEN_ID"
export API_TOKEN_SECRET="API_TOKEN_SECRET"

list_folders() {
  curl -s "https://api.docspring.com/api/v1/folders?parent_folder_id=fld_000000000000000002" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json"
}

RESPONSE=$(list_folders)
echo $RESPONSE
```

</template>
</CodeSwitcher>
