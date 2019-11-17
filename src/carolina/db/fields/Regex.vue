
<template>
  <div>
    <span v-if="ctx=='table'||ctx=='view'">
      <tt>{{ value }}</tt>
    </span>
    <span v-if="ctx=='form'">
      <input class="form-control" type="text" ref="in" :value="value" @input="update()" />
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