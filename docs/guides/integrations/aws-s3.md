---
title: AWS S3
---

# AWS S3 Integration

Follow this guide to build an integration that will copy generated PDFs into your own AWS S3 account.

All templates, submissions, and combined submissions in your account will be copied over. (In the future we will add more fine-grained rules.)

You can choose which type of submissions will be uploaded to your S3 bucket:

- Only Live _(default)_
- Only Test
- Both Live and Test

You can also configure different paths for live and test submissions.

## Create an S3 Bucket

- [Sign into your AWS account](https://console.aws.amazon.com)
- Visit the [S3 service](https://s3.console.aws.amazon.com/s3/home)
- Click "Create bucket"
- Choose a bucket name and select the correct AWS region
- Click "Next", then configure your bucket options and permissions
- Click "Create bucket"

## Create An IAM Policy With Limited Permissions

- Visit the [IAM service](https://console.aws.amazon.com/iam/home)
- Click "Policies"
- Click "Create policy"
- Under "Service", choose "S3"
- Under "Actions", expand the "Write" section
  - Select the `PutObject` checkbox. _(DocSpring does not need any other permissions)_
- Under "Resources", choose "Specific". Then click "Add ARN".
  - Paste your bucket name into "Bucket name"
  - Check the "Any" checkbox for "Object name"
  - Click "Add"
- Click "Review policy"
- Set a name for the new policy, e.g. "DocSpringS3Uploads"
- Set a description, e.g. "Allows the DocSpring service to upload PDFs to our S3 bucket"
- Click "Create policy"

## Create An IAM User With Limited Permissions

- Visit the [IAM service](https://console.aws.amazon.com/iam/home)
- Click "Users"
- Click "Add user"
- Configure the username, e.g. "docspring-s3-uploads"
- Under "Access type", select "Programmatic access"
- Click "Next: Permissions"
- Click the "Attach existing policies directly" option.
- Find the policy you just created (use the Search box)
- Select this policy by clicking the checkbox
- Click "Next: Tags"
- Skip the Tags section. Click "Next: Review"
- Click "Create user"
- Click "Show" under the "Secret access key".
- Copy the Access key ID and Secret access key, and save these for later.

### Create the AWS S3 Integration in DocSpring

- Visit the [Account Integrations page](https://app.docspring.com/account_integrations)
- Click the "Create Integration" button at the top right
- Select "AWS S3" in the "Service" dropdown
- Paste your "Access key ID" into the "AWS Access Key ID" field
- Paste your "Secret access key" into the "AWS Secret Access Key" field
- Select the correct AWS Region from the dropdown list
- Enter your S3 bucket name
- Configure the "Path Template for Submissions"
  - Example: `{{ template_id }}/{{ submission_id }}.pdf` will upload your PDF to: `tpl_eGc5CmFbPnCCmerqsx/sub_Gbxesk7Xf52Pq3KgT9.pdf`
  - This path template uses the [Liquid](https://shopify.github.io/liquid/) syntax, which is similar to Handlebars or Mustache templates.
  - You can use any values from the `metadata` object.
    - Access values with `{{ metadata.<key> }}`
    - For example, to use the `user_id` from your metadata: `{{ metadata.user_id }}`
    - All invalid characters are replaced with an underscore.
      - Valid characters are: `0-9`, `a-z`, `A-Z`, `!-\_.\*'()` ([See the AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-key-guidelines-safe-characters).)
  - Available variables:
    - `account_id` _(Your DocSpring Account ID)_ - Example: `acc_X3gQR5GN6tS6tcYgJs`
    - `template_id` - Example: `tpl_eGc5CmFbPnCCmerqsx`
    - `template_name`
      - All invalid characters are replaced with an underscore. (See `metadata` above.)
    - `submission_id` - Example: `sub_Gbxesk7Xf52Pq3KgT9`
    - `timestamp` _(Time when the submission was processed)_ - Example: `20180509094531`
    - `date` - Example: `20180509`
    - `year` - Example: `2018`
    - `month` _(Not zero-padded)_ - Example: `5`
    - `day` _(Not zero-padded)_ - Example: `9` -->
- Configure the "Path Template for Combined PDFs"
  - Leave this blank if you will not be [combining any PDFs](../../api/combine-pdfs)
  - Example: `merged_pdfs/{{ combined_submission_id }}.pdf` will upload your PDF to: `merged_pdfs/com_Zbetd3ayK4EK3J4Hf4.pdf`
  - You can use any values from the `metadata` object.
    - Access values with `{{ metadata.<key> }}`
    - For example, to use the `user_id` from your metadata: `{{ metadata.user_id }}`
    - All invalid characters are replaced with an underscore.
      - Valid characters are: `0-9`, `a-z`, `A-Z`, `!-\_.\*'()` ([See the AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-key-guidelines-safe-characters).)
  - Available variables:
    - `account_id` _(Your DocSpring Account ID)_ - Example: `acc_X3gQR5GN6tS6tcYgJs`
    - `combined_submission_id` - Example: `com_Zbetd3ayK4EK3J4Hf4`
    - `timestamp` _(Time when the combined submission was processed)_ - Example: `20181029094531`
    - `date` - Example: `20181029`
    - `year` - Example: `2018`
    - `month` - Example: `10`
    - `day` - Example: `29`
- Click "Create"

Now that you've created an AWS S3 integration, we will upload any generated PDFs to your S3 bucket. You can test the integration by generating a new live PDF. (Test PDFs are skipped by default.)

When you view a submission or combined submission in the web interface, you will see the S3 upload status in the Actions section at the bottom of the page.

## FAQ

### Does DocSpring still keep a copy of the PDF?

Yes. This AWS S3 integration is just a one-way file upload, but DocSpring continues to store your template PDFs and generated PDFs. When you request a download URL from DocSpring, we serve the generated PDF as hosted on our own servers. We will also use our copy of the PDF when merging them into a "combined submission".

### Does DocSpring delete the PDF from my S3 bucket when a submission expires?

No. DocSpring will only delete our own copy of the PDF when a submission expires. We will never (and, if you followed this tutorial, we are unable to) delete a PDF in your custom S3 bucket.

### How can I tell when the PDF has been uploaded to my custom S3 bucket?

The submission state will change to processed as soon as our copy of the PDF is ready, but it might take a few seconds before the PDF is uploaded into your custom S3 bucket. The AWS integration upload happens after the initial processing is completed.

If you need to know when the PDF is available in your own S3 bucket, you can check the `actions` array in the API response. This array will be empty before the submission is processed. As soon as the the submission is processed, it will contain an entry for the `aws_s3_upload` action. This action's `state` will be `pending` until the file has been uploaded into your S3 bucket, and then it will change to `processed`.

For example, here's how you could wait for the PDF to be uploaded to your own S3 bucket (in JavaScript):

```js
const pdfHasBeenUploadedToS3Bucket = () => {
  if (submission["actions"].length === 0) return false;
  const action = submission["actions"].find(
    (a) => a.action_type === "aws_s3_upload"
  );
  return action && action.state === "processed";
};
```

> This code assumes that you only have a single `aws_s3_upload` action. It is possible to configure multiple AWS integrations, so you can store the PDF in multiple buckets.

Alternatively, you could set up an [AWS S3 event notification](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html). You could send a webhook to your server as soon as the PDF has been uploaded to your S3 bucket. This way, you wouldn't need to do any polling.

### What if my "path template" generates a duplicate key?

If a path template generates a duplicate key, any existing files will be overwritten with the new file. To prevent this from occurring, you should [enable "Versioning" for your S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html). This means that you will always be able to restore an original file in case it is accidentally overwritten with a duplicate key. Your path template should also use at least one variable that is guaranteed to be unique, such as `submission_id`.

> Note: Don't rely on the `timestamp` variable to provide unique filenames, because multiple PDFs can be processed in the same second.
