
<template>
  <div>
    <span v-if="ctx=='table'">
      <span v-if="value">
        &lt;Object&gt;
      </span>
    </span>
    <span v-if="ctx=='view'">
      <pre v-if="value"><code>{{ value }}</code></pre>
    </span>
    <span v-if="ctx=='form'">
      <codemirror
        ref="in"
        :mode="{ lineNumbers: true, mode: { name: 'javascript', json: true } }"
        :value="value"
        @input="update"
      />
    </span>
  </div>
</template>

<script>

import { codemirror } from 'vue-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js'

export default {
  components: { codemirror },
  props: ['ctx', 'schema', 'value'],
  methods: {
    update(newCode) {
      this.$emit('input', newCode);
    }
  }
};
</script>