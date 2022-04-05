# Vue ref eslint bug

```vue
<script setup lang="ts">
const a = $ref(0);
console.log(a + 1);
</script>
```

Running `npm lint` on the above code:

![error](error.png)
