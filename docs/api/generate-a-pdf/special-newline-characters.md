---
title: Generate a PDF Special Newline Characters
---

# Generate a PDF

- [Return to "Generate PDF" API docs](./index)

## Special Newline Characters (`%%LF%%`)

If you are integrating with a service that makes it difficult to send literal [newline](https://en.wikipedia.org/wiki/Newline) characters (`\n`) in your Submission data, you can use this special sequence of characters: `%%LF%%`

Our system will automatically replace any instances of `%%LF%%` with a newline character (`\n`) in your submission data.

Please note that you will still see `%%LF%%` if you view the "Data" tab for a Submission, or in the API Request Logs. This is because the `%%LF%%` => `\n` substitution is made immediately before inserting the data into your PDF template.
