
<template>
  <div>
    <span v-if="ctx=='table'||ctx=='view'">
      {{ value | friendlyDate }}
    </span>
    <span v-if="ctx=='form'">
      <Datetime input-class="form-control" type="datetime" ref="in" :value="value" @input="update()"/>
    </span>
  </div>
</template>

<script>

import { Datetime } from 'vue-datetime';

import moment from 'moment';

import 'vue-datetime/dist/vue-datetime.css';

export default {
  components: { Datetime },
  props: ['ctx', 'schema', 'value'],
  methods: {
    update() {
      this.$emit('input', moment(this.$refs.in.datetime.toJSDate()).format());
    }
  }
};
</script>