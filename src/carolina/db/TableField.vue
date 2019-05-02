
<template>
  <td>
    <Array v-if="schema.type == 'Array'" :ctx='ctx' :value="value" />
    <BooleanField v-if="schema.type == 'Boolean'" :ctx='ctx' :value="value" />
    <DateField v-if="schema.type == 'Date'" :ctx='ctx' :value="value" />
    <EmailField v-if="schema.type == 'Email'" :ctx='ctx' :value="value" />
    <JsonField v-if="schema.type == 'Json'" :ctx='ctx' :value="value" />
    <NumberField v-if="schema.type == 'Number'||schema.type=='Integer'" :ctx='ctx' :value="value" />
    <RefField v-if="schema.type == 'Ref'" :ctx='ctx' :schema="schema" :value="value" />
    <StringField v-if="schema.type == 'String'||schema.type=='IPv4'" :ctx='ctx' :value="value" />
    <TextField v-if="schema.type == 'Text'" :ctx='ctx' :value="value" />
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
    RefField: () => import(/* webpackChunkName: "carolina.db.fields.ref" */ './fields/Ref.vue'),
    StringField: () => import(/* webpackChunkName: "carolina.db.fields.string" */ './fields/String.vue'),
    TextField: () => import(/* webpackChunkName: "carolina.db.fields.text" */ './fields/Text.vue')
  },
  props: ['ctx', 'schema', 'value']
};
</script>