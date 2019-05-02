
<template>
  <div>
    <span v-if="ctx=='table'||ctx=='view'">
      <span class="text-danger" v-if="value < 0">{{ value }}</span>
      <span v-else-if="value==0">{{ value }}</span>
      <span class="text-success" v-else>{{ value }}</span>
    </span>
    <span v-if="ctx=='form'">
      <input
        class="form-control"
        type="number"
        :min="schema.min"
        :max="schema.max"
        ref="in"
        :value="value"
        @input="update()"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: ['ctx', 'schema', 'value'],
  methods: {
    update() {
      this.$emit('input', this.$refs.in.value);
    }
  }
};
</script>