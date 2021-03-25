---
title: Create Custom File From Upload
---

# Create Custom File From Upload

Upload a new custom file. You can use custom files when [merging multiple PDFs together](./index).

Before calling this API endpoint, you must first request a presigned upload URL, and upload a file to our S3 bucket. (The example code includes this step.) You then pass the file key to this API endpoint to create a custom file record.

## HTTP Request

`POST https://api.docspring.com/api/v1/custom_files`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Parameters

The request body must be a JSON object with the following properties:

- `cache_id` _(string)_: The ID of the file you uploaded from a presigned URL

## Example Code

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

            // Request a presigned URL and upload a file to our S3 bucket
            // ----------------------------------------------------------
            string filePath = "path/to/your/document.pdf";

            var presignUrl = apiInstance.GetPresignUrl();
            var baseUrl = (string) presignUrlResponse["url"];
            var presignFields = (JObject) presignUrlResponse["fields"];

            var baseUri = new UriBuilder(baseUrl);
            var path = baseUri.Path;
            baseUri.Path = null;
            var client = new RestClient(baseUri.ToString());

            var request = new RestRequest(path, Method.POST);
            request.AddHeader("Content-Type", "multipart/form-data");
            request.AlwaysMultipartFormData = true;
            foreach (JProperty field in (JToken)presignFields)
            {
                request.AddParameter(field.Name, (string) field.Value);
            }
            request.AddFile("file", pdfFixturePath);

            var response = client.Execute(request);
            if (response.StatusCode != HttpStatusCode.NoContent) {
                // Handle file upload error
            }

            // Create a custom file record from your uploaded file
            // ----------------------------------------------------------

            var customFileResponse = apiInstance.CreateCustomFileFromUpload(
                new CreateCustomFileData(
                    cacheId: (string) presignFields["key"]
                )
            );

            if (customFileResponse.Status !=
                CreateCustomFileResponse.StatusEnum.Success)
            {
                // Could not create custom file
            }

            CreateCustomFileData customFileData = new CreateCustomFileData()

            // Get the custom file ID from: customFileData.Id
            // You can now use this custom file in a combinePdfs request.
            Debug.WriteLine(customFileData.Id);
        }
    }
}
```