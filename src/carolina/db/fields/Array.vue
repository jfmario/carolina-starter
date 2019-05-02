
<template>
  <div>
    <span v-if="ctx=='table'">
      <span v-if="value">
        Array(length={{ value.length }})
      </span>
    </span>
    <span v-if="ctx=='view'">
      <pre v-if="value"><code>{{ value | stringifyJSON }}</code></pre>
    </span>
  </div>
</template>

<script>
export default {
  props: ['ctx', 'schema', 'value']
};
</script>