
<template>
  <form @submit.prevent="handleSubmit">
    <div class="row my-2" v-for="(fieldSchema, fieldName) in schema" :key="fieldName">
      <div class="col-md-3">
        <b>{{ fieldSchema.name || fieldName }}</b>
      </div>
      <div class="col-md-9">
        <div v-if="enforceAdminEdit && fieldSchema.adminEdit == false">
          <TableField ctx="view" :schema="fieldSchema" :value="obj[fieldName]" />
        </div>
        <FormField v-else ctx="form" :schema="fieldSchema" :fName="fieldName" :value="obj[fieldName]" @input="handle"/>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-md-3"></div>
      <div class="col-md-9">
        <button class="btn btn-primary" type="submit">Submit</button>
        <router-link class="btn btn-secondary" v-if="backLink" :to="backLink">Back</router-link>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  components: {
    FormField: () => import(/* webpackChunkName: "carolina.db.formfield" */ './FormField.vue'),
    TableField: () => import(/* webpackChunkName: "carolina.db.tablefield" */ './TableField.vue')
  },
  props: ['backLink', 'obj', 'schema', 'enforceAdminEdit'],
  methods: {
    handle(v) {
      this.obj[v.field] = v.value;
      this.$forceUpdate();
    },
    handleSubmit() {
      this.$emit('submit', this.obj);
    }
  }
};
</script>