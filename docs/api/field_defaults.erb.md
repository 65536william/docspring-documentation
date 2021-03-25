---
title: Field Defaults
---

### Field Defaults

When sending an [Add Field](./add_fields_to_template.md) API request, the only required properties are `name`, and `page` for PDF templates.

Here is a field object where all of the properties have been set to the default values:

> See [Field Schema](./field_schema.md) to see all of the possible values for each property.

```json
<%= pretty_json(API_SCHEMAS['v1']['templates']['add_fields_default_field']) %>
```
