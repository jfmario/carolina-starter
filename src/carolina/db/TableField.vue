
<template>
  <td>
    <ChoiceField v-if="schema.hasOwnProperty('choices')" :ctx='ctx' :schema="schema" :value="value" />
    <ArrayField v-else-if="schema.type == 'Array'" :ctx='ctx' :value="value" />
    <BooleanField v-else-if="schema.type == 'Boolean'" :ctx='ctx' :value="value" />
    <DateField v-else-if="schema.type == 'Date'" :ctx='ctx' :value="value" />
    <EmailField v-else-if="schema.type == 'Email'" :ctx='ctx' :value="value" />
    <JsonField v-else-if="schema.type == 'Json'" :ctx='ctx' :value="value" />
    <NumberField v-else-if="schema.type == 'Number'||schema.type=='Integer'" :ctx='ctx' :value="value" />
    <RefField v-else-if="schema.type == 'Ref'" :ctx='ctx' :schema="schema" :value="value" />
    <RegexField v-else-if="schema.type == 'Regex'" :ctx='ctx' :schema="schema" :value="value" />
    <StringField v-else-if="schema.type == 'String'||schema.type=='IPv4'" :ctx='ctx' :value="value" />
    <TextField v-else-if="schema.type == 'Text'" :ctx='ctx' :value="value" />
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
    RefField: () => import(/* webpackChunkName: "carolina.db.fields.ref" */ './fields/Ref.vue'),
    RegexField: () => import(/* webpackChunkName: "carolina.db.fields.regex */ './fields/Regex.vue'),
    StringField: () => import(/* webpackChunkName: "carolina.db.fields.string" */ './fields/String.vue'),
    TextField: () => import(/* webpackChunkName: "carolina.db.fields.text" */ './fields/Text.vue')
  },
  props: ['ctx', 'schema', 'value']
};
</script>