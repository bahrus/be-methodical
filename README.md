# be-methodical [TODO]


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

## Example 1a [TODO]

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

## Example 1b  Specify alternative name for command [TODO]

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

## Example 2c Specify source

```JavaScript
//File myScriptlet.js
export function tellMeHowYouAreFeelingAboutToday: (targetElement, event) => {
    console.log({targetElement, event});
}
```


```html
<script nomodule src="myScriptlet.js" be-methodical=mood-stone-base></script>
```

