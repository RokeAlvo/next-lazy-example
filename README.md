# Lazy hydration and lazy chunks loading example

For cancel preloading async chunks add magic comment `DYNAMIC_IMPORT`:

```javascript
const Section1 = dynamic(() =>
    import(/*webpackChunkName: "Section1_DYNAMIC_IMPORT"*/'./Section1').then((module) => module.Section1)
)
```