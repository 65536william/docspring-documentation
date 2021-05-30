# What is DocSpring?

DocSpring is a **speedy cloud service** which enables you to **generate PDFs automatically**. Our API inserts data (usually from a form) into your template and sends you the completed PDF within seconds.

## Get started

1. In our dashboard, upload or create the document that you want to be filled out. Empty documents are called _templates_, and we support two different types:

   - You can easily make a [PDF template](/guides/template-editor) from an existing file. Simply upload a `.pdf`, and drag and drop fields onto the page. If your file already has fillable fields, the editor will automatically import them.
   - Alternatively, build a dynamic [HTML template](/guides/html-css-templates) and style it with CSS. Since these templates rebuild on each API request, they are customisable and flexible.

2. Now you need to build the bridge between the data and the document. Depending on your use case, there are several options:

   - Install the [API client](/api/install-api-client) – we support all major languages. Then build a UI (often a form) which collects the data.
   - Skip the setup, and embed one of our forms in your website. We offer [simple forms](/guides/web-forms/embedded-forms) which contain basic input fields, or [visual forms](/api/create-data-request) which display your PDF 'in the background' with the fields editable on top.
   - We are expanding our integrations to make it even easier to generate PDFs. At present, we have a [bubble app](https://bubble.io/plugin/docspring---fill-and-generate-pdfs-1573478783306x235198545630593020).

3. Your user (perhaps a customer, perhaps an employee, perhaps you, perhaps a script) simply submits data to DocSpring via the API.

   - In the most popular workflow, a submission will be made when the user clicks 'Submit' on a form. But you can build other custom triggers too, such as when a new row is added to a SQL table.

4. DocSpring injects your PDF template with the data, saves the resulting PDF in the cloud, and returns a download link to you in the API response.
   - This is a very fast and efficient process, which will typically generate the PDF in seconds.
   - You can display the PDF in your app, email the link to the user, or save the file in any other way you like.

## Who uses DocSpring?

Most of our users take advantage of the API to automate their workflows and to make filling out documents less dull for their customers.

Imagine trying to get car insurance fifty years ago. An agent would need to handwrite your details onto a piece of paper, slowly going through each line. It's a waste of time all round, it's prone to errors, and the document only lives in some remote filing cabinet.

DocSpring revolutionises this bureaucratic process. Our users build elegant, easy forms for their customers. The PDFs are generated within seconds and are available worldwide in the cloud. Everything is automatic: no need for an agent any more.
