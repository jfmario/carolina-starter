
<template>
  <div>
    <BooleanField v-if="schema.type == 'Boolean'" ctx='form' :schema="schema" :value="value" @input="handle" />
    <DateField v-if="schema.type == 'Date'" ctx='form' :schema="schema" :value="value" @input="handle" />
    <EmailField v-if="schema.type == 'Email'" ctx='form' :schema="schema" :value="value" @input="handle" />
    <JsonField v-if="schema.type == 'Json'" ctx='form' :schema="schema" :value="value" @input="handle" />
    <NumberField v-if="schema.type == 'Number'||schema.type=='Integer'" ctx='form' :schema="schema" :value="value" @input="handle" />
    <RefField v-if="schema.type == 'Ref'" ctx='form' :schema="schema" :value="value" @input="handle" />
    <RegexField v-if="schema.type == 'Regex'" ctx='form' :schema="schema" :value="value" @input="handle" />
    <StringField v-if="schema.type == 'String'||schema.type=='IPv4'" ctx='form' :schema="schema" :value="value" @input="handle" />
    <TextField v-if="schema.type == 'Text'" ctx='form' :schema="schema" :value="value" @input="handle" />
  </div>
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
    RegexField: () => import(/* webpackChunkName: "carolina.db.fields.regex */ './fields.Regex.vue'),
    StringField: () => import(/* webpackChunkName: "carolina.db.fields.string" */ './fields/String.vue'),
    TextField: () => import(/* webpackChunkName: "carolina.db.fields.text" */ './fields/Text.vue')
  },
  props: ['ctx', 'fName', 'schema', 'value'],
  methods: {
    handle(v) {
      this.$emit('input', {
        field: this.fName,
        value: v
      });
    }
  }
};
</script>