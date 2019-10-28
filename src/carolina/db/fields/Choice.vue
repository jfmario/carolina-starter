
<template>
  <div>
    <span v-if="ctx=='table'||ctx=='view'">
      <span v-for="opt in schema.choices" v-if="opt.value==value">
        <i>{{ opt.name }}</i>
      </span>
    </span>
    <span v-if="ctx=='form'">
      <select class="form-control" ref="in" :value="value" @input="update()">
        <option v-for="opt in schema.choices" :value="opt.value">{{ opt.name }}</option>
      </select>
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