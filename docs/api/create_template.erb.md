---
title: Create New Template
---

# Create New Template

Create a new template. You can use this API endpoint to upload a new PDF directly, create a new template from a previously uploaded PDF, or create a new HTML template.

{% method %}

### HTTP Request

`POST https://api.docspring.com/api/v1/templates`

### Parameters

#### Upload a PDF with a Form POST

You can create a new PDF template by making a `multipart/form-data` form post. The following form params are required:

- `template[document]` - Your PDF file data
- `template[name]` - The name of your new PDF template

The following form params are optional:

- `template[parent_folder_id]` - The folder id that you want PDF template to be created under

#### Create an HTML Template

You can create a new HTML template by sending a JSON object as the POST body. All properties must be nested under a `template` key:

- `template_type` _(string, required)_: Must be `"html"`.
- `name` _(string, required)_: The name of your template
- `html` _(string, required)_: HTML for your template
- `scss` _(string, optional)_: SCSS for your template
- `header_html` _(string, optional)_: HTML for the template header
- `footer_html` _(string, optional)_: HTML for the template footer

Example:

```json
{
  "template": {
    "template_type": "html",
    "name": "Example HTML Template",
    "html": "<html><body>Example HTML</body></html>",
    "scss": "Your CSS here",
    "header_html": "Example Header HTML",
    "footer_html": "Example Footer HTML"
  }
}
```

### Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](authentication.md) documentation for more information.

### Example Code

{% sample lang="javascript" -%}

```javascript
var DocSpring = require('docspring')

var config = new DocSpring.Configuration()
config.apiTokenId = 'DOCSPRING_TOKEN_ID'
config.apiTokenSecret = 'DOCSPRING_TOKEN_SECRET'
client = new DocSpring.Client(config)

var fs = require('fs')
var templateDocument = fs.createReadStream('path/to/your/pdf_document.pdf') // File |
var templateName = 'New Template Name' // String |
var parentFolderId = null
instance.createPDFTemplate(
  templateDocument,
  templateName,
  parentFolderId,
  function (error, template) {
    if (error) throw error
    console.log(template.id, template.name, template.document_url)
  }
)
```

<%= gitbook_example_for :php, :create_html_template, type: :original %>

<%= gitbook_example_for :java, :create_pdf_template, type: :original %>

{% sample lang="csharp" -%}

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
          Stream templateDocument = File.OpenRead("path/to/your/document.pdf");
          string templateName = "Your Template Name";
          var pendingTemplate = instance.CreatePDFTemplate(templateDocument, templateName);

          Debug.WriteLine(pendingTemplate.Id);
          Debug.WriteLine(pendingTemplate.Name);
        }
    }
}
```

{% endmethod %}
