# be-methodical (🔬)


An [up and coming proposal](https://open-ui.org/components/invokers.explainer/#invokers-and-custom-elements) provides a way for custom elements to be invoked:

```html
<button commandfor="my-element" command="spin-widget">
  Spin the widget
</button>

<spin-widget id="my-element"></spin-widget>
<script>
  customElements.define(
    "spin-widget",
    class extends HTMLElement {
      connectedCallback() {
        this.addEventListener("command", (e) => {
          if (e.action === "spin-widget") {
            this.spin();
          }
        });
      }
    },
  );
</script>
```

This enhancement makes it simple to add such methods to Mount based custom elements, and especially to declarative xtal-element generated custom elements:

## Example 1a

```html
<script nomodule be-methodical=mood-stone-base>({
  tellMeHowYouAreFeelingAboutToday: (targetElement, event) => {
      console.log({targetElement, event});
      return ({
        //gets assigned gingerly into targetElement
      })
  }
})</script>
...
<mood-stone itemscope>
    <xtal-element inherits=mood-stone-base></xtal-element>
</mood-stone>

<button command-for=mood-stone command="tellMeHowYouAreFeelingAboutToday">
```

## Example 1b  Specify alternative name for command [Untested]

```html
<script nomodule be-methodical=mood-stone-base>({
  tellMeHowYouAreFeelingAboutToday: ['--tell-me:How are you feeling about today?', (targetElement, event) => {
      console.log({targetElement, event});
      return ({
        //gets assigned gingerly into targetElement
      })
  }]
})</script>
...
<mood-stone itemscope>
    <xtal-element inherits=mood-stone-base></xtal-element>
</mood-stone>

<button command-for=mood-stone command="tellMeHowYouAreFeelingAboutToday">
```

## Viewing Demos Locally

Any web server that can serve static files will do, but...

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.js.
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:8000/demo/ in a modern browser.

## Running Tests

```
> npm run test
```

## Using from ESM Module:

```JavaScript
import 'be-methodical/be-methodical.js';
```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-methodical';
</script>
```

[or](https://generator.jspm.io)

```html
   <script type="importmap">
  {
    "imports": {
      "be-methodical": "https://ga.jspm.io/npm:be-methodical@0.0.1/be-methodical.js"
    },
    "scopes": {
      "https://ga.jspm.io/": {
        "be-enhanced/": "https://ga.jspm.io/npm:be-enhanced@0.0.163/",
        "mount-observer/MountObserver.js": "https://ga.jspm.io/npm:mount-observer@0.0.39/MountObserver.js",
        "trans-render/": "https://ga.jspm.io/npm:trans-render@0.0.876/"
      },
      "https://ga.jspm.io/npm:be-enhanced@0.0.163/": {
        "trans-render/positractions/dispatchEvent.js": "https://ga.jspm.io/npm:trans-render@0.0.876/positractions/dispatchEvent.js"
      },
      "https://ga.jspm.io/npm:trans-render@0.0.877/": {
        "trans-render/lib/assignGingerly.js": "https://ga.jspm.io/npm:trans-render@0.0.877/lib/assignGingerly.js"
      }
    }
  }
  </script>
```


