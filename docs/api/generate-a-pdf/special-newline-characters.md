---
title: Generate a PDF Special Newline Characters
parent: 863724
child_order: 4
---

# Generate a PDF

- [Return to "Generate PDF" API docs](../../generate-a-pdf)

## Special Newline Characters (`%%LF%%`)

If you are integrating with a service that makes it difficult to send
literal [newline](https://en.wikipedia.org/wiki/Newline) characters (`\n`) in your Submission data,
you can use this special sequence of characters: `%%LF%%`

DocSpring will automatically replace any instances of `%%LF%%` with a newline character (`\n`) in your submission data.

Please note that you will still see `%%LF%%` if you view the "Data" tab for a Submission, or
in the API Request Logs. We will make the `%%LF%%` => `\n` substitution immediately before
inserting the data into your PDF template.
