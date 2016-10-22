Scroll'N'Fix
==
A simple Vanilla JS plugin that fixes the background image of an element when it reaches the top of the browser.
Script
--
Insert script at the end of your document, before the `</body>` tag

```

<script type="text/javascript">
  scrollnfix.init();
</script>
```

HTML
--

**Optional** Wrap the `div` that contains the background image in a generic `div`

Add a `data-fix` attribute to the div that contains the background image.

E.g.

```
<div>
  <div id="#div1" data-fix></div>
  <div id="#div2" data-fix></div>
</div>
```

CSS
--
Set the initial `background-attachment` to `scroll` and the `position` to `relative`

Known issues
--
The background image _jumps_ when it fixes at the top of the screen. If ever you know a good fix, please pull a request.
