---
title: SSN Fields
parent: 683079
child_order: 7
---

# SSN Fields

Some government forms have an SSN (social security number) "comb" field that is split into three sections:

![SSN Comb Field](../../images/template_editor/ssn-comb.png#margin=1rem)

To fill out this SSN field, you can use DocSpring's "Comb" and "Comb Offset" feature.

First, create a new field for each SSN section. Give all of these fields the same name (e.g. `ssn`.)

![Three SSN Fields](../../images/template_editor/three-ssn-fields.png#margin=1rem)

Now scroll to the bottom of the options sidebar, and check the "Comb" checkbox for each of these `ssn` fields.

![Comb Options](../../images/template_editor/comb-options.png#margin=1rem)

Set the following options for the three fields:

- Cells: **3**, Offset: **0**
- Cells: **2**, Offset: **3**
- Cells: **4**, Offset: **5**

Now you can send a 9 character SSN as a single value in your data (e.g. `{ "data": { "ssn": "123456789" } }`), and this value will be split into `123` - `45` - `6789`. The SSN will be formatted correctly across the three SSN sections on the form.

![SSN Filled](../../images/template_editor/ssn-filled.png#margin=1rem)