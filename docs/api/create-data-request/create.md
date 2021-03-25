---
title: Create Data Request
parent: 001372
child_order: 2
---

# Create Data Request

Create a new PDF job submission with pending data requests. This feature allows you to request
information or signatures from one or more people. When you have a pending data request,
you can then redirect your user to a form hosted on docspring.com, embed this form on your website, or send them a link via email.

Once all of the data requests have been completed, we will generate the final PDF, and DocSpring can send a webhook notification to your server.

> See the [Data Requests](./index) documentation for more information.

> Note: This uses the same API endpoint as a regular ["Generate PDF"](../generate-a-pdf) request, with an additional `data_requests` array.

## HTTP Request

`POST https://api.docspring.com/api/v1/templates/<TEMPLATE_ID>/submissions`

## Authentication

You must send an `Authorization` header with the value `Basic` followed by base 64 encoded `token_id:token_secret`.

For example: `Authorization: Basic dG9rZW5faWQ6dG9rZW5fc2VjcmV0Cg==`

> See the [Authentication](../install-api-client/authentication) documentation for more information.

## Parameters

The request body must be a JSON object with the following properties:

- `data` _(object, required)_: Data to fill in the fields. Must match the template schema.
- `metadata` _(object, optional)_: Any additional data, such as a user id. `metadata` will be included in webhook requests.
- `test` _(boolean, optional)_: `true` to generate a test PDF, `false` for a live PDF. Test PDFs are free, but watermarked. _Note: A test API key can only be used to generate test PDFs._
- `data_requests` _(array of objects, optional)_. Each object in the array can have the following properties:
  - `email` _(string, required)_: The user's email address.
  - `name` _(string, optional)_: The user's name.
  - `fields` _(array of field names, optional)_: The field names that the person must fill in.
    - If there is a single data request, then you can omit the `fields` property if you want to person to fill in all of the template's fields. If you provide a value in the submission `data`, then the user will not be asked to fill in that field.
    - If your submission includes multiple data requests, then you must specify the fields that each person should fill out.
  - `metadata` _(object, optional)_: Any additional data that you want to associate with this data request.
  - `auth_type` _(string, required)_: One of: `password`, `oauth`, `email_link`, `phone_number`, `ldap`, `saml`
    - Use `email_link` if you are sending an authenticated link in an email.
  - `auth_session_started_at` _(string, required)_: The timestamp when the user was authenticated.
    - We will set `auth_session_started_at` automatically when `auth_type` is `email_link`.
  - `auth_second_factor_type` _(string, optional)_: One of: `none`, `phone_number`, `totp`, `mobile_push`, `security_key`, `fingerprint`.
  - `auth_provider` _(string, optional)_: If `auth_type` is `oauth`, then please tell us the service (e.g. _google_, _facebook_, _twitter_)
  - `auth_session_id_hash` _(string, optional)_: SHA256 hash of (salt + session ID) _(if your application uses a session ID)_
  - `auth_user_id_hash` _(string, optional)_: User ID, or SHA256 hash of (salt + User ID)
  - `auth_username_hash` _(string, optional)_: Username, or SHA256 hash of (salt + username)
  - `auth_phone_number_hash` _(string, optional)_: Phone number, or SHA256 hash of (salt + phone number) _(if the user used their phone for authentication)_

> Please send us a message if you need a different `auth_type` or `auth_second_factor_type`.

Please note that is important to provide accurate authentication details,
in case an electronic signature is disputed.
You can send us SHA256 hashes if you don't want to disclose too much information about
your user accounts. (However, you must never send a plaintext session ID, because
this is very sensitive information.)
If your user ID column is an incrementing integer, then it
is important to use a salt to hide this information.
We recommend configuring a single salt that you use for all of your SHA256 hashes.
Alternatively, you can use a different salt for each user, and store this in
your database. But please make sure you never lose this salt, otherwise there is no way to
prove that the SHA256 hashes match the records in your database.

## Example Response

```json
{
  "id": "sub_000000000000000001",
  "state": "waiting_for_data_requests",
  "test": true,
  "expired": false,
  "expires_at": "2018-10-22T19:00:09Z",
  "metadata": {
    "user_id": 42
  },
  "processed_at": null,
  "batch_id": null,
  "data_requests": [
    {
      "id": "drq_000000000000000001",
      "name": "John Smith",
      "email": "jsmith@example.com",
      "fields": ["name", "signature"],
      "order": 0,
      "state": "pending",
      "viewed_at": null,
      "completed_at": null
    }
  ],
  "download_url": null,
  "permanent_download_url": null
}
```

## Example Code

### JavaScript

```javascript
import DocSpring from 'docspring'

const config = new DocSpring.Configuration()
config.apiTokenId = 'API_TOKEN_ID'
config.apiTokenSecret = 'API_TOKEN_SECRET'
client = new DocSpring.Client(config)

const templateId = 'TEMPLATE_ID'
const submissionData = {
  test: true,
  metadata: {
    batch_id: 123,
  },
  data_requests: [
    {
      name: 'John Smith',
      email: 'jsmith@example.com',
      fields: ['name_1', 'signature_1'],
      metadata: {
        user_id: 123,
      },
    },
  ],
}
client.generatePDF(templateId, submissionData, function (error, response) {
  if (error) throw error
  console.log(response)
})
```

### Ruby

```ruby
require 'docspring'

ENV['DOCSPRING_TOKEN_ID'] = "API_TOKEN_ID"
ENV['DOCSPRING_TOKEN_SECRET'] = "API_TOKEN_SECRET"
template_id = "TEMPLATE_ID"

DocSpring.configure do |c|
  c.username  = ENV['DOCSPRING_TOKEN_ID']
  c.password  = ENV['DOCSPRING_TOKEN_SECRET']
end

docspring = DocSpring::Client.new

response = docspring.generate_pdf(
  template_id: template_id,
  test: true,
  data: {
    first_name: 'John',
    last_name: 'Smith',
    favorite_color: 'Blue'
  },
  data_requests: [
    {
      name: "John Smith",
      email: "jsmith@example.com",
      fields: ['name_1', 'signature_1'],
      metadata: {
        user_id: 123,
      }
    }
  ]
)
```

### Python

```python
import docspring

client = docspring.Client()
client.api_client.configuration.username = "API_TOKEN_ID"
client.api_client.configuration.password = "API_TOKEN_SECRET"

response = client.generate_pdf(
  "TEMPLATE_ID",       # ID of a template that you have configured
  {
    "test": True,                       # test documents are free but watermarked
    "data": {                           # Data to render in the template
      "first_name": "John",
      "last_name": "Smith",
      "favorite_color": "Green",
    },
    "data_requests": [
      {
        "name": "John Smith",
        "email": "jsmith@example.com",
        "fields": ['name_1', 'signature_1'],
        "metadata": {
          "user_id": 123,
        }
      }
    ]
  }
)

puts response.submission.data_requests.first
```

### PHP

```php
<?php
$docspring = new DocSpring\Client();
$docspring->getConfig()->setUsername("API_TOKEN_ID");
$docspring->getConfig()->setPassword("API_TOKEN_SECRET");

$template_id = 'TEMPLATE_ID';

$data = new DocSpring\Model\CreateSubmissionBody();
$data->setData([
  "first_name" => 'John',
  "last_name" => 'Smith',
  "favorite_color" => 'Green'
]);
$data->setTest(true);

$submission->setDataRequests(array(
  [
    "name" => 'John Smith',
    "email" => 'jsmith@example.com',
    "fields" => array('name', 'signature'),
    "metadata" => [
      "user_id" => 123
    ]
  ]
));

$response = $docspring->generatePDF($template_id, $data);
```

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
          Configuration.Default.Username = "API_TOKEN_ID";
          Configuration.Default.Password = "API_TOKEN_SECRET";

          var apiInstance = new PDFApi();
          string templateId = "tpl_000000000000000001";
          var createSubmissionData = new CreateSubmissionData(
            test: false,
            data: new {
              first_name = "John",
              last_name = "Smith",
              favorite_color = "Green"
            },
            dataRequests: new List<SubmissionDataRequestData>{
              new SubmissionDataRequestData(
                name: "John Smith",
                email: "jsmith@example.com",
                fields: new List<string>{ "name", "signature" },
                order: 1
              )
            }
          );

          var response = apiInstance.GeneratePDF(templateId, createSubmissionData);
          Debug.WriteLine(response);
        }
    }
}
```

### Bash

The following example waits for the PDF to be processed, then prints the download URL.

```bash
export API_TOKEN_ID="API_TOKEN_ID"
export API_TOKEN_SECRET="API_TOKEN_SECRET"
export TEMPLATE_ID="TEMPLATE_ID"

generate_pdf() {
  curl -s "https://api.docspring.com/api/v1/templates/$TEMPLATE_ID/submissions" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET" \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"data":{"first_name": "John", "last_name": "Smith", "favorite_color": "Blue"}, "metadata": { "user_id": 123 }}'
}

get_submission() {
  curl -s "https://api.docspring.com/api/v1/submissions/$1" \
    -u "$API_TOKEN_ID:$API_TOKEN_SECRET"
}

get_json_value() {
  echo "$1" | sed -n 's/.*"'"$2"'":"\([^"]\+\)".*/\1/p'
}

RESPONSE=$(generate_pdf)
echo $RESPONSE
SUBMISSION_ID=$(get_json_value "$RESPONSE" id)
SUBMISSION_STATE=$(get_json_value "$RESPONSE" state)

echo "Waiting for PDF to be processed..."
while [[ "$SUBMISSION_STATE" = "pending" ]]; do
  sleep 1
  RESPONSE=$(get_submission "$SUBMISSION_ID")
  SUBMISSION_STATE=$(get_json_value "$RESPONSE" state)
done

echo "Download your PDF at:"
get_json_value "$RESPONSE" download_url
```