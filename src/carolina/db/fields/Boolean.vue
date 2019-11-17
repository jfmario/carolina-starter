
<template>
  <div>
    <span v-if="ctx=='table'||ctx=='view'">
      <span class="text-success" v-if="value"><b>TRUE</b></span>
      <span class="text-danger" v-else><b>FALSE</b></span>
    </span>
    <div class="form-check" v-if="ctx=='form'">
      <input class="form-check-input" type="checkbox" ref="in" :checked="value" @change="update" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['ctx', 'schema', 'value'],
  methods: {
    update(e) {
      this.$emit('input', e.target.checked == true);
    }
  }
};
</script>