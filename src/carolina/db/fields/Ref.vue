
<template>
  <div>
    <span v-if="ctx=='table'||ctx=='view'">
      <div v-if="refLink == null">
        {{ schema.model }}: {{ displayName || value }}
      </div>
      <div v-else>
        <router-link :to="refLink">
          {{ schema.model }}: {{ displayName || value }}
        </router-link>
      </div>
    </span>
    <span v-if="ctx=='form'">
      <input class="form-control" type="text" ref="in" :value="value" @input="update()" />
    </span>
  </div>
</template>

<script>
export default {
  props: ['ctx', 'schema', 'value'],
  data() {
    return {
      displayName: null,
      refLink: null
    };
  },
  mounted: async function() {
    
    let res = await fetch(`./api/admin-link`, {
      method: 'post',
      body: JSON.stringify({ model: this.schema.model, id: this.value }),
      headers: new Headers({ 'Content-Type': "application/json" })
    });
    let linkRes = await res.json();
    
    if (linkRes.link) {
      this.refLink = linkRes.link;
    };
    if (linkRes.name) {
      this.displayName = linkRes.name;
    }
  },
  methods: {
    update() {
      this.$emit('input', this.$refs.in.value);
    }
  }
};
</script>