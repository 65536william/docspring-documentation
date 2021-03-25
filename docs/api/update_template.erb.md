---
title: Update Template
---

# Update Template

Update an existing template.

You can use this API endpoint to change template settings, add or remove fields in a PDF template,
or update the HTML/SCSS for an HTML template.

{% method %}

### HTTP Request

`PUT https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>`

### Parameters

All template properties must be nested inside a top-level `template` key. For example:

```json
{
  "template": {
    "name": "New Template Name"
  }
}
```

### Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](authentication.md) documentation for more information.

### Example Code

<%= gitbook_example_for :javascript, :update_template, type: :wrapper %>

{% endmethod %}
