---
title: Field Schema
---

# Field Schema

When overriding a field property in a [Generate PDF](../generate-a-pdf) request (with `field_overrides`), or sending an [Add Field](./add-fields) request, the `field` objects must match the following JSON schema.

For the "Add Field" API endpoint, the only required properties are `name`, and `page` for PDF templates.

- Use [this JSON schema validator](https://www.jsonschemavalidator.net/s/XfqY2UXb) to ensure that your field objects are valid.
- See [Field Defaults](./field-defaults) to see the default values for each property.

```json
{
  "alignment": {
    "enum": ["left", "center", "right"],
    "type": "string"
  },
  "autoCalculateMaxLength": {
    "type": "boolean"
  },
  "backgroundColor": {
    "type": "string"
  },
  "backgroundColorFieldName": {
    "type": "string"
  },
  "backgroundColorFieldRequired": {
    "type": "boolean"
  },
  "barcodeSymbology": {
    "type": "string"
  },
  "bold": {
    "type": "boolean"
  },
  "characterSpacing": {
    "type": "number"
  },
  "checkCharacter": {
    "enum": ["&#10003;", "&#10004;", "&#10006;", "&#10007;", "&#10008;"],
    "type": "string"
  },
  "checkColor": {
    "type": "string"
  },
  "checkColorFieldName": {
    "type": "string"
  },
  "checkColorFieldRequired": {
    "type": "boolean"
  },
  "color": {
    "type": "string"
  },
  "colorFieldName": {
    "type": "string"
  },
  "colorFieldRequired": {
    "type": "boolean"
  },
  "comb": {
    "type": "boolean"
  },
  "combNumberOfCells": {
    "minimum": 0,
    "type": "number"
  },
  "combValueOffset": {
    "type": "number"
  },
  "combinedFieldFormat": {
    "type": "string"
  },
  "combinedFieldNames": {
    "type": "string"
  },
  "combinedFieldSeparator": {
    "type": "string"
  },
  "combinedFieldType": {
    "type": "string"
  },
  "condition": {
    "type": "string"
  },
  "currency": {
    "type": "boolean"
  },
  "dateTimeFormat": {
    "type": "string"
  },
  "decimalPlaces": {
    "minimum": 0,
    "type": "number"
  },
  "default": {
    "type": "string"
  },
  "description": {
    "type": "string"
  },
  "displayType": {
    "enum": ["text", "check", "qrcode", "barcode", "image", "shape"],
    "type": "string"
  },
  "exclusiveMaximum": {
    "type": "boolean"
  },
  "exclusiveMinimum": {
    "type": "boolean"
  },
  "falseText": {
    "type": "string"
  },
  "fontSize": {
    "minimum": 0,
    "type": "number"
  },
  "height": {
    "minimum": 0,
    "type": "number"
  },
  "hidden": {
    "type": "boolean"
  },
  "id": {
    "minimum": 0,
    "type": "number"
  },
  "imageGravity": {
    "enum": [
      "NorthWest",
      "North",
      "NorthEast",
      "West",
      "Center",
      "East",
      "SouthWest",
      "South",
      "SouthEast"
    ],
    "type": "string"
  },
  "imageScaleType": {
    "enum": ["fit", "fill", "stretch"],
    "type": "string"
  },
  "includeTime": {
    "type": "boolean"
  },
  "integer": {
    "type": "boolean"
  },
  "invertBooleanCondition": {
    "type": "boolean"
  },
  "maxLength": {
    "type": "number"
  },
  "maximum": {
    "type": "number"
  },
  "metadata": {
    "type": "string"
  },
  "minLength": {
    "type": "number"
  },
  "minimum": {
    "type": "number"
  },
  "multiline": {
    "type": "boolean"
  },
  "multilineLines": {
    "minimum": 0,
    "type": "number"
  },
  "name": {
    "type": "string"
  },
  "numberConditionRangeExclusiveMax": {
    "type": "boolean"
  },
  "numberConditionRangeExclusiveMin": {
    "type": "boolean"
  },
  "numberConditionRangeMax": {
    "type": "number"
  },
  "numberConditionRangeMin": {
    "type": "number"
  },
  "numberConditionType": {
    "enum": ["equals", "range", "gte", "gt", "lte", "lt"],
    "type": "string"
  },
  "opacity": {
    "maximum": 1,
    "minimum": 0,
    "type": "number"
  },
  "optionList": {
    "type": "string"
  },
  "overflow": {
    "enum": ["shrink_to_fit", "truncate"],
    "type": "string"
  },
  "page": {
    "minimum": 1,
    "type": "number"
  },
  "qrcodeColor": {
    "type": "string"
  },
  "qrcodeColorFieldName": {
    "type": "string"
  },
  "qrcodeColorFieldRequired": {
    "type": "boolean"
  },
  "required": {
    "type": "boolean"
  },
  "rotation": {
    "maximum": 360,
    "minimum": 0,
    "type": "number"
  },
  "shapeBorderColor": {
    "type": "string"
  },
  "shapeBorderColorFieldName": {
    "type": "string"
  },
  "shapeBorderColorFieldRequired": {
    "type": "boolean"
  },
  "shapeBorderWidth": {
    "minimum": 0,
    "type": "number"
  },
  "shapeFillColor": {
    "type": "string"
  },
  "shapeFillColorFieldName": {
    "type": "string"
  },
  "shapeFillColorFieldRequired": {
    "type": "boolean"
  },
  "shapeType": {
    "enum": ["square", "rectangle", "circle", "ellipse"],
    "type": "string"
  },
  "signatureAllowDraw": {
    "type": "boolean"
  },
  "signatureAllowType": {
    "type": "boolean"
  },
  "static": {
    "type": "boolean"
  },
  "strikethrough": {
    "type": "boolean"
  },
  "stringConditionType": {
    "enum": ["equals", "contains", "starts_with", "ends_with", "regex"],
    "type": "string"
  },
  "title": {
    "type": "string"
  },
  "trueText": {
    "type": "string"
  },
  "type": {
    "enum": [
      "string",
      "number",
      "boolean",
      "date",
      "address",
      "country",
      "email",
      "url",
      "image",
      "signature",
      "barcode",
      "combined"
    ],
    "type": "string"
  },
  "typeface": {
    "type": "string"
  },
  "uppercase": {
    "type": "boolean"
  },
  "vAlignment": {
    "enum": ["bottom", "center", "top"],
    "type": "string"
  },
  "width": {
    "minimum": 0,
    "type": "number"
  },
  "x": {
    "minimum": 0,
    "type": "number"
  },
  "y": {
    "minimum": 0,
    "type": "number"
  }
}
```

## Validation Errors

If your `field` object does not match the above schema, your request will fail with some errors. Here is a response with some example errors:

```json
{
  "status": "error",
  "errors": [
    "The property '#/fields/0' did not contain a required property of 'page'",
    "The property '#/fields/1/page' did not have a minimum value of 1, inclusively",
    "The property '#/fields/5' contains additional properties [\"unknown_property\"] outside of the schema when none are allowed",
    "The property '#/fields/6/displayType' value \"unknown display type\" did not match one of the following values: text, check, qrcode, barcode, image, shape",
    "The property '#/fields/6/type' value \"unknown type\" did not match one of the following values: string, number, boolean, date, address, country, email, url, image, signature, barcode, combined",
    "The property '#/fields/6' did not contain a required property of 'page'",
    "The property '#/fields/7/width' of type string did not match the following type: number",
    "The property '#/fields/8/height' did not have a minimum value of 0, inclusively",
    "The property '#/fields/8/width' did not have a minimum value of 0, inclusively",
    "The property '#/fields/8/x' did not have a minimum value of 0, inclusively",
    "The property '#/fields/8/y' did not have a minimum value of 0, inclusively",
    "The property '#/fields/2/id' value \"1\" is already taken by another field",
    "The property '#/fields/2/page' value \"5\" did not have a maximum value of 3, inclusively (Template has 3 pages)",
    "The property '#/fields/3/page' value \"4\" did not have a maximum value of 3, inclusively (Template has 3 pages)"
  ]
}
```
