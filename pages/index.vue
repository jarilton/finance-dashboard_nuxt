<template>
  <div>
    <VTooltip>
      <a>Sponsor me</a>

      <template #popper> Help me fund my Open Source work! </template>
    </VTooltip>

    <pre>
      {{ $store.state.user }}
    </pre>

    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "IndexPage",

  data() {
    return {};
  },

  mounted() {
    console.log(this.$name);
    console.log(this.$dayjs().format());
  },

  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
