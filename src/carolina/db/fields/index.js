
const EmailField = () => import(/* webpackChunkName: "carolina.db.fields.email" */ './Email.vue');
const StringField = () => import(/* webpackChunkName: "carolina.db.fields.string" */ './String.vue');

export {
  EmailField, StringField
};