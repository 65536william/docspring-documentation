---
title: Field Defaults
---

# Field Defaults

When sending an [Add Field](./add-fields) API request, the only required properties are `name`, and `page` for PDF templates.

Here is a field object where all of the properties have been set to the default values:

> See [Field Schema](./field-schema) to see all of the possible values for each property.

```json
{
  "alignment": "left",
  "autoCalculateMaxLength": false,
  "backgroundColor": null,
  "backgroundColorFieldName": null,
  "backgroundColorFieldRequired": false,
  "barcodeSymbology": "code_128",
  "bold": false,
  "characterSpacing": 0,
  "checkCharacter": "&#10004;",
  "checkColor": null,
  "checkColorFieldName": null,
  "checkColorFieldRequired": false,
  "color": null,
  "colorFieldName": null,
  "colorFieldRequired": false,
  "comb": false,
  "combNumberOfCells": 2,
  "combValueOffset": 0,
  "combinedFieldFormat": "",
  "combinedFieldNames": "",
  "combinedFieldSeparator": " ",
  "combinedFieldType": "separator",
  "condition": null,
  "currency": false,
  "dateTimeFormat": null,
  "decimalPlaces": null,
  "default": null,
  "description": "",
  "displayType": "text",
  "exclusiveMaximum": false,
  "exclusiveMinimum": false,
  "falseText": null,
  "fontSize": null,
  "height": 55,
  "hidden": false,
  "imageGravity": "Center",
  "imageScaleType": "fit",
  "includeTime": null,
  "integer": false,
  "invertBooleanCondition": false,
  "maxLength": null,
  "maximum": null,
  "metadata": "",
  "minLength": 0,
  "minimum": null,
  "multiline": false,
  "multilineLines": null,
  "numberConditionRangeExclusiveMax": false,
  "numberConditionRangeExclusiveMin": false,
  "numberConditionRangeMax": null,
  "numberConditionRangeMin": null,
  "numberConditionType": "equals",
  "opacity": 1,
  "optionList": null,
  "overflow": "shrink_to_fit",
  "qrcodeColor": null,
  "qrcodeColorFieldName": null,
  "qrcodeColorFieldRequired": false,
  "required": true,
  "rotation": 0,
  "shapeBorderColor": "4A90E2",
  "shapeBorderColorFieldName": null,
  "shapeBorderColorFieldRequired": false,
  "shapeBorderWidth": 2,
  "shapeFillColor": null,
  "shapeFillColorFieldName": null,
  "shapeFillColorFieldRequired": false,
  "shapeType": "square",
  "signatureAllowDraw": true,
  "signatureAllowType": true,
  "static": false,
  "strikethrough": false,
  "stringConditionType": "equals",
  "title": "",
  "trueText": null,
  "type": "string",
  "typeface": null,
  "uppercase": false,
  "vAlignment": "bottom",
  "width": 300,
  "x": 0,
  "y": 0
}
```
