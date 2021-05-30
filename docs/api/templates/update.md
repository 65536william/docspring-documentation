---
title: Update Template
---

# Update Template

Update an existing template.

You can use this API endpoint to change template settings, add or remove fields in a PDF template, or update the HTML/SCSS for an HTML template.

## HTTP Request

`PUT https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>`

## Parameters

All template properties must be nested inside a top-level `template` key. For example:

```json
{
  "template": {
    "name": "New Template Name"
  }
}
```

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Example Code

<CodeSwitcher :languages="{javascript:'JavaScript'}">
<template v-slot:javascript>

```javascript
// Find your API tokens here: https://app.docspring.com/api_tokens

import DocSpring from "docspring";

var config = new DocSpring.Configuration();
config.apiTokenId = "DOCSPRING_API_TOKEN_ID";
config.apiTokenSecret = "DOCSPRING_API_TOKEN_SECRET";
docspring = new DocSpring.Client(config);

var template_id = "tpl_000000000000000001";
var template_data = {
  template: {
    name: "New Template Name",
    html: "<html><body>New HTML</html></body>",
  },
};
docspring.updateTemplate(template_id, template_data, function(error, response) {
  if (error) throw error;
  console.log(response);
});
```

</template>
</CodeSwitcher>
