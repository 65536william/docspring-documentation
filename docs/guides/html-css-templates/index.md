---
title: HTML/CSS Templates
has_children: true
id: 607583
order: 2
child_order: 1
---

# HTML/CSS Templates

In addition to uploading an existing PDF, you can create a new template using HTML and CSS.

## SASS

DocSpring uses a CSS extension called [SASS](http://sass-lang.com/).
SASS comes in two flavors, but we use the one that is compatible with standard CSS (SCSS).

This means that you can paste in any CSS, and it will Just Work&trade;.
SCSS also supports some powerful features, including variables and nested rules.
Take a look at the [SASS Guide](http://sass-lang.com/guide#topic-2) to learn more.

## Liquid

HTML templates use the [Liquid markup language](https://shopify.github.io/liquid/basics/introduction/).
This allows you to insert field values into your HTML. You can also add advanced logic,
such as [conditions](https://shopify.github.io/liquid/tags/control-flow/) and
[loops](https://shopify.github.io/liquid/tags/iteration/).

[Learn more about Liquid](https://shopify.github.io/liquid/basics/introduction/).

### Referencing Fields

Use the `{{ }}` syntax to insert a field value in your template.

If you have a field called "name", you can render that value in your template like this:

```html
<h2>{{ name }}</h2>
```

Use a dot to access nested fields, and square brackets for arrays:

```html
<h2>{{ person.name }}</h2>
<h2>{{ names[2] }}</h2>
```

### Liquid Filters

When you upload an existing PDF, our template editor includes features such as date formatting,
formulas for numbers, "uppercase" for text fields, etc. These features have been removed from our HTML template editor,
because these can be achieved by using Liquid "filters".

For example, you can use the `upcase` filter to convert text to uppercase:

```html
<h2>{{ full_name | upcase }}</h2>
```

[See the Liquid Filters page for more information about available filters.](./liquid-filters)

Please [contact us](mailto:support@docspring.com) if you would like us to add a new Liquid filter.

> Note: DocSpring supports most of the Liquid filters that you can find in [the Liquid documentation](https://shopify.github.io/liquid/). However, you may find some third-party articles and documentation that reference filters that we don't support. For example, [Shopify](https://shopify.dev/docs/themes/liquid/reference) provides some custom liquid filters that are specific to Shopify stores.

### Signatures

You must use the `{% signature %}` Liquid tag to render signatures in your HTML template.
Signatures can be provided as either an image, or text (e.g. the user typed their name and selected a font). The `signature` tag will handle both of these cases:

```html
{% signature signature_field %}
```

Behind the scenes, image signatures will be rendered in an `<img>` element with a `signature-image` class:

```html
<img class="signature-image" src="data:image/png;base64,..." />
```

Text signatures will import the required typeface, and render the `name` inside an `<span>` element with a `signature-text` class:

```html
<link
  href="https://fonts.googleapis.com/css?family=Dancing+Script"
  rel="stylesheet"
/>
...
<span
  class="signature-text"
  style="color: black; font-size: 16px; font-weight: normal; display: inline-block; font-family: 'Dancing Script';"
>
  John Smith
</span>
```

You can pass the following options to the `signature` tag, to control the width and height of image signatures, or the font size and weight of text signatures. (These options are added as inline CSS styles.)

| Option        | Signature Type | Default Value  |
| ------------- | -------------- | -------------- |
| `width`       | Image          | `(from image)` |
| `height`      | Image          | `(from image)` |
| `font-size`   | Text           | `normal`       |
| `font-weight` | Text           | `16px`         |
| `color`       | Text           | `black`        |

There is also a `preview_type` option, which allows you to control the type of signature that is shown in preview PDFs. We show a image signature by default. Use `preview_type: text` to show a text signature.

Examples:

```html
{% signature signature_field, width: 300px %}
```

```html
{% signature signature_field, preview_type: text, font-size: 24px, color: #333
%}
```

### Images

You can upload static images under the "Images" tab. Use the `template_image_url` tag to get
the image URL:

```html
<img src="{% template_image_url IMAGE_ID %}" />
```

To include an image or signature field (i.e. submitted in an API request),
you can use the field value as the `src` attribute for an `img` tag.
This will refer to an internal URL for the image:

```html
<img src="{{ photograph }}" />
```

If you have an optional image field, you should use a condition in case the image was not provided:

```html
{% if photograph %} <img src="{{ photograph }}" /> {% endif %}
```

### Dates

You can use the `date` filter to format a date field:

```html
<h2>{{ date | date: "%B %-d, %Y" }}</h2>
```

You can use the special `"now"` string to get the current date and time:

```html
<h2>{{ "now" | date: "%B %-d, %Y" }}</h2>
```

We also support an `in_time_zone` filter that allows you to convert dates and times into different timezones:

```html
<h2>{{ "now" | in_time_zone: "America/New_York" | date: "%B %-d, %Y" }}</h2>
```

[Here is a list of all timezones that you can use with the `in_time_zone` filter.](./liquid-timezones)

## Page Breaks

You can force content to start on a new page by using the `page-break-before` CSS property.

> CSS:

```css
.new-page {
  page-break-before: always;
}
```

> HTML:

```html
<p class="new-page">This paragraph will start on a new page.</p>
```

[View documentation for the page-break-before, page-break-after, and page-break-inside properties](https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before).

## Headers and Footers

You can add a header or footer to each page in the
"Header HTML" and "Footer HTML" tabs. CSS from the _SCSS_ tab also applies
to headers and footers.

You can use the `pageNumber` and `totalPages` classes to show the current page number and total pages. The following example shows how to add a footer with page numbers
(e.g.&nbsp;_Page&nbsp;1&nbsp;of&nbsp;2_):

```html
<footer
  id="footer"
  style="display: block; margin: 0 40px; padding-top: 3px; width: calc(100% - 80px); border-top: 1px solid #aaa; color: #aaa; text-align: right;"
>
  <div>
    Page&nbsp;<span class="pageNumber"></span>&nbsp;of&nbsp;<span
      class="totalPages"
    ></span>
  </div>
</footer>
```

Here's how the footer will look at the bottom of the PDF:


![Footer Example](../../images/html_templates/footer-example.png#margin=1rem)

## Generating PDFs

Once you've set up your template and added your fields, you can generate a PDF by either filling out the [web form](../../web-forms/), or [making an API request](../../../api/generate-a-pdf).