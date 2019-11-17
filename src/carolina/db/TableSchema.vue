
<template>
  <tr>

    <td v-if="includeId">
      <b>{{ obj._label || obj._id }}</b>
    </td>

    <TableField
      v-for="(field, i) in fields"
      :key="i"
      ctx="table"
      :schema="schema[field]"
      :value="obj[field]"
    />
    
    <td v-if="includeActionButtons">
      <router-link class="btn btn-sm btn-secondary" :to="'../view/' + obj._id">
        View
      </router-link>
      <router-link class="btn btn-sm btn-info" :to="'../edit/' + obj._id">
        Edit
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  components: {
    TableField: () => import(/* webpackChunkName: "carolina.db.tablefield" */ './TableField.vue')
  },
  props: ['includeActionButtons', 'includeId', 'fields', 'obj', 'schema']
};
</script>