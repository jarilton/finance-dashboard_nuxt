<template>
  <div>
    <h1 class="text-lg font-bold">Serviços</h1>
    <nuxt-link to="/servicos/desenvolvimento-de-sites">
      Desenvolvimento de sites
    </nuxt-link>
    <nuxt-link to="/servicos/marketing-digital"> Marketing Digital </nuxt-link>

    <br /><br />

    <pre>
      {{ $fetchState }}
    </pre>

    <div v-if="$fetchState.pending">Carregando...</div>

    <div v-else>
      <div
        v-for="service in services"
        :key="service.id"
        class="border-b border-gray-400 py-3"
      >
        {{ service.username }}
      </div>
    </div>

    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      services: [],
    };
  },

  async fetch() {
    this.services = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users?_limit=3"
    );
  },
};
</script>

<style>
</style>