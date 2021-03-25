---
title: Add Fields to Template
order: 1
---


# Add Fields to Template

{% method %}

### HTTP Request

`PUT https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>/add_fields`

### Parameters

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

- Refer to [the field object JSON schema](./field_schema.md) to see all possible values for field properties.
- [See the default values for field properties.](./field_defaults.md) (If you do not specify a property, we will use the default value.)
- DocSpring uses a numeric ID internally for each field. A new field ID will be assigned automatically if it is not provided.
- The `x`, `y`, `width`, and `height` properties are optional. If coordinates are not provided, DocSpring will
  assign some default coordinates for each field and will increment the `y` position for each field.

### Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](authentication.md) documentation for more information.

### Example Code

<%= gitbook_example_for :javascript, :add_fields_to_template, type: :wrapper %>

<%= gitbook_example_for :ruby, :add_fields_to_template, type: :wrapper %>

{% endmethod %}
