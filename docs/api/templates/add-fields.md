---
title: Add Fields to Template
---

# Add Fields to Template

## HTTP Request

`PUT https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>/add_fields`

## Parameters

The request body must be a JSON object with a `fields` property, where the value is an array of field objects. The only required properties are `name`, and `page` for PDF templates. (`page` must be omitted for HTML templates.)

Here is a minimal example:

```json
{
  "fields": [
    {
      "name": "new_field",
      "page": 1
    }
  ]
}
```

- Refer to [the field object JSON schema](./field-schema) to see all possible values for field properties.
- [See the default values for field properties.](./field-defaults) (If you do not specify a property, we will use the default value.)
- DocSpring uses a numeric ID internally for each field. A new field ID will be assigned automatically if it is not provided.
- The `x`, `y`, `width`, and `height` properties are optional. If coordinates are not provided, DocSpring will
  assign some default coordinates for each field and will increment the `y` position for each field. However, it is likely you will want the field to appear in a certain position on your PDF template.

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Example Code

<CodeSwitcher :languages="{javascript:'JavaScript', ruby:'Ruby'}">
<template v-slot:javascript>

```javascript
// Find your API tokens here: https://app.docspring.com/api_tokens

import DocSpring from "docspring";

var config = new DocSpring.Configuration();
config.apiTokenId = "DOCSPRING_API_TOKEN_ID";
config.apiTokenSecret = "DOCSPRING_API_TOKEN_SECRET";
docspring = new DocSpring.Client(config);

var template_id = "tpl_000000000000000001";
var newFieldData = {
  fields: [
    {
      name: "new_field_1",
      page: 1,
      type: "string",
    },
    {
      name: "new_field_2",
      page: 1,
      type: "number",
      integer: true,
    },
  ],
};
docspring.addFieldsToTemplate(template_id, newFieldData, function(
  error,
  response
) {
  if (error) {
    console.log(response, error);
    throw error;
  }
  console.log(response);
});
```

</template>
<template v-slot:ruby>

```ruby
# Find your API tokens here: https://app.docspring.com/api_tokens

require 'docspring'

ENV['DOCSPRING_TOKEN_ID'] = "YOUR_API_TOKEN_ID"
ENV['DOCSPRING_TOKEN_SECRET'] = "YOUR_API_TOKEN_SECRET"

DocSpring.configure do |c|
  c.api_token_id = 'api_token123'
  c.api_token_secret = 'testsecret123'
end

client = DocSpring::Client.new
template_id = 'tpl_000000000000000001'

response = client.add_fields_to_template(
  template_id,
  fields: [
    {
      name: 'new_field1',
      page: 1,
      required: false,
    },
    {
      name: 'new_field2',
      type: 'number',
      page: 1,
      required: false,
    },
    {
      name: 'new_field3',
      type: 'date',
      page: 1,
      required: false,
      x: 300,
    },
  ]
)
puts response
# => {:new_field_ids=>[3, 4, 5], :status=>"success"}
```

</template>
</CodeSwitcher>
