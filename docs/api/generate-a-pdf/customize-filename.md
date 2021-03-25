---
title: Generate a PDF Customize the PDF Filename
parent: 863724
child_order: 2
---

# Generate a PDF

- [Return to "Generate PDF" API docs](../../generate-a-pdf)

## Customize the PDF Filename in the Download URL

You can customize the PDF filename by setting the `pdf_filename` key in the metadata. (DocSpring will add the `.pdf` extension automatically.)

For example, if you set `pdf_filename` to `custom_pdf_file123`, the PDF URL will end with: `/submissions/<submission_id>/custom_pdf_file123.pdf`

(By default, the PDF URL will end with `/submissions/<submission_id>.pdf`)

> Custom PDF filenames have a maximum length of 128 characters, and can include the following characters:
> `0-9 A-Z a-z - _ .`. Any other characters will be replaced with an underscore.
