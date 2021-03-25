---
title: Field Schema
---

### Field Schema

When overriding a field property in a [Generate PDF](./generate_pdf.md) request (with `field_overrides`), or sending an [Add Field](./add_fields_to_template.md) request, the `field` objects must match the following JSON schema.

For the "Add Field" API endpoint, the only required properties are `name`, and `page` for PDF templates.

- Use [this JSON schema validator](https://www.jsonschemavalidator.net/s/XfqY2UXb) to ensure that your field objects are valid.
- See [Field Defaults](./field_defaults.md) to see the default values for each property.

```json
<%= pretty_json(API_SCHEMAS['v1']['templates']['add_fields_pdf']['properties']['fields']['items']['properties']) %>
```

### Validation Errors

If your `field` object does not match the above schema, your request will fail with some errors. Here is a response with some example errors:

```json
<%= pretty_json(OPEN_API_SCHEMA['paths']['/templates/{template_id}/add_fields']['put']['responses']['422']['examples']['application/json']) %>
```
