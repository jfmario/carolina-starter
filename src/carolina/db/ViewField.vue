
<template>
  <td>
    <ChoiceField v-if="schema.hasOwnProperty('choices')" ctx='table' :schema="schema" :value="value" />
    <ArrayField v-else-if="schema.type == 'Array'" ctx='table' :value="value" />
    <BooleanField v-else-if="schema.type == 'Boolean'" ctx='table' :value="value" />
    <DateField v-else-if="schema.type == 'Date'" ctx='table' :value="value" />
    <EmailField v-else-if="schema.type == 'Email'" ctx='table' :value="value" />
    <JsonField v-else-if="schema.type == 'Json'" ctx='table' :value="value" />
    <NumberField v-else-if="schema.type == 'Number'||schema.type=='Integer'" ctx='table' :value="value" />
    <RegexField v-else-if="schema.type == 'Regex'" ctx='table' :value="value" />
    <StringField v-else-if="schema.type == 'String'||schema.type=='IPv4'" ctx='table' :value="value" />
  </td>
</template>

<script>

export default {
  components: {
    ArrayField: () => import(/* webpackChunkName: "carolina.db.fields.array" */ './fields/Array.vue'),
    BooleanField: () => import(/* webpackChunkName: "carolina.db.fields.boolean" */ './fields/Boolean.vue'),
    ChoiceField: () => import(/* webpackChunkName: "carolina.db.fields.choice" */ './fields/Choice.vue'),
    DateField: () => import(/* webpackChunkName: "carolina.db.fields.date" */ './fields/Date.vue'),
    EmailField: () => import(/* webpackChunkName: "carolina.db.fields.email" */ './fields/Email.vue'),
    JsonField: () => import(/* webpackChunkName: "carolina.db.fields.json" */ './fields/Json.vue'),
    NumberField: () => import(/* webpackChunkName: "carolina.db.fields.number" */ './fields/Number.vue'),
    RegexField: () => import(/* webpackChunkName: "carolina.db.fields.regex */ './fields/Regex.vue'),
    StringField: () => import(/* webpackChunkName: "carolina.db.fields.string" */ './fields/String.vue')
  },
  props: ['schema', 'value']
};
</script>