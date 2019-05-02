
<template>
  <td>
    <Array v-if="schema.type == 'Array'" ctx='table' :value="value" />
    <BooleanField v-if="schema.type == 'Boolean'" ctx='table' :value="value" />
    <DateField v-if="schema.type == 'Date'" ctx='table' :value="value" />
    <EmailField v-if="schema.type == 'Email'" ctx='table' :value="value" />
    <JsonField v-if="schema.type == 'Json'" ctx='table' :value="value" />
    <NumberField v-if="schema.type == 'Number'||schema.type=='Integer'" ctx='table' :value="value" />
    <StringField v-if="schema.type == 'String'||schema.type=='IPv4'" ctx='table' :value="value" />
  </td>
</template>

<script>

export default {
  components: {
    ArrayField: () => import(/* webpackChunkName: "carolina.db.fields.array" */ './fields/Array.vue'),
    BooleanField: () => import(/* webpackChunkName: "carolina.db.fields.boolean" */ './fields/Boolean.vue'),
    DateField: () => import(/* webpackChunkName: "carolina.db.fields.date" */ './fields/Date.vue'),
    EmailField: () => import(/* webpackChunkName: "carolina.db.fields.email" */ './fields/Email.vue'),
    JsonField: () => import(/* webpackChunkName: "carolina.db.fields.json" */ './fields/Json.vue'),
    NumberField: () => import(/* webpackChunkName: "carolina.db.fields.number" */ './fields/Number.vue'),
    StringField: () => import(/* webpackChunkName: "carolina.db.fields.string" */ './fields/String.vue')
  },
  props: ['schema', 'value']
};
</script>