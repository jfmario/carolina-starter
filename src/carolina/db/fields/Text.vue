
<template>
  <div>
    <span v-if="ctx=='table'||ctx=='view'">
      {{ value }}
    </span>
    <span v-if="ctx=='form'">
      <textarea class="form-control" type="text" rows="10" ref="in" :value="value" @input="update()" />
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