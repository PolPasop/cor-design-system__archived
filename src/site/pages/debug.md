---
layout: layouts/debug.njk
---


## What you get

-///

## Dynamic file list from gulp

This list of files is:

- Made by Gulp
- Gulp watches for file system changes
- On change it updates the list and tells 11ty to reload

<pre>
{{ fileList | dump(2) }}
</pre>

