
<template>
  <div>
    <div class="row" v-for="(fieldSchema, fieldName) in schema" :key="fieldName">
      <div class="col-md-3">
        <b>{{ fieldSchema.name || fieldName }}</b>
      </div>
      <div class="col-md-9">
        <TableField ctx="view" :schema="fieldSchema" :value="obj[fieldName]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TableField: () => import(/* webpackChunkName: "carolina.db.tablefield" */ './TableField.vue')
  },
  props: ['obj', 'schema']
};
</script>