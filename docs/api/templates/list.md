---
title: List Templates
parent: 522775
child_order: 8
---

# List Templates

List Templates.

## HTTP Request

`GET https://api.docspring.com/api/v1/templates`

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

var opts = {
  query: 'search by name',
  parent_folder_id: 'fld_000000000000000002',
  page: 1,
  per_page: 10,
}

client.listTemplates(opts, function (error, templates) {
  if (error) throw error
  console.log(templates)
})
```

### Ruby

```ruby
require 'docspring'

DocSpring.configure do |c|
  c.username  = ENV['DOCSPRING_TOKEN_ID']
  c.password  = ENV['DOCSPRING_TOKEN_SECRET']
end

docspring = DocSpring::Client.new

templates = docspring.list_templates(query: 'search by name', parent_folder_id: 'fld_000000000000000002', page: 1, per_page: 10)
puts templates
```

### Python

```python
import docspring

client = docspring.Client()
client.api_client.configuration.username = "DOCSPRING_TOKEN_ID"
client.api_client.configuration.password = "DOCSPRING_TOKEN_SECRET"

templates = client.list_templates(page=1, per_page=10, query="search by name")
print(templates)
```

### PHP

```php
<?php
// This is a live example that you can run in the PHP interactive shell (php -a)
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername('DOCSPRING_TOKEN_ID');
$docspring->getConfig()->setPassword('DOCSPRING_TOKEN_SECRET');

# Set $query to an empty string if you want to list all templates
$query = 'search by name'; # String | Search By Name
$parent_folder_id: "fld_000000000000000002";
$page = 1; // int | Default: 1
$per_page = 10; // int | Default: 50
$templates = $docspring->listTemplates($query, $parent_folder_id, $page, $per_page);
echo $templates;
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

          var query = "search by name";
          var parentFolderId = "fld_000000000000000002";
          var page = 2;
          var perPage = 1;

          var templates = apiInstance.ListTemplates(query, parentFolderId, page, perPage);
          Debug.WriteLine(templates);

          // Using named parameters:
          // var templates = apiInstance.ListTemplates(query: query, page: page, perPage: perPage);
        }
    }
}
```
