---
title: Delete Folder
---

# Delete Folder

Delete a Folder

## HTTP Request

`DELETE https://api.docspring.com/api/v1/folders/<FOLDER_ID>`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

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

var folderId = 'fld_000000000000000002'
client.deleteFolder(folderId, function (error, folder, response) {
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

response = docspring.delete_folder(folder_id)
puts response
```

### Python

```python
import docspring

client = docspring.Client()
client.api_client.configuration.username = "API_TOKEN_ID"
client.api_client.configuration.password = "API_TOKEN_SECRET"

folder_id = 'fld_000000000000000002'
response = client.delete_folder(folder_id)

print(response)
```

### PHP

```php
<?php
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername('YOUR_API_TOKEN_ID');
$docspring->getConfig()->setPassword('YOUR_API_TOKEN_SECRET');

$folder_id = 'fld_000000000000000002';
$folder = $docspring->deleteFolder($folder_id);
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

          var folderId = 'fld_000000000000000002';
          var response = apiInstance.DeleteFolder(folderId);
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

delete_folder() {
  curl -s "https://api.docspring.com/api/v1/folders/$FOLDER_ID" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -X DELETE
}

RESPONSE=$(delete_folder)
echo $RESPONSE
```