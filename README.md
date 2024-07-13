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

be-methodical allows for that to happen declaratively, in cases where the action can also be invoked by the user manually:

```html
<button commandfor="my-element" command="spin-widget">
  Spin the widget
</button>

<spin-widget id="my-element">
    #shadow
        <div>
            ...
            <button be-methodical="and do click on spin-widget command" onclick='
                getRootNode().host.style.transform = 'rotate(90deg)';
            '>
</spin-widget>
<script>
  customElements.define(
    "spin-widget",
    class extends HTMLElement {},
  );
</script>
```

