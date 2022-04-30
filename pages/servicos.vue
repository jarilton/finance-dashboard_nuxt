<template>
  <div class="container">
    <div
      class="
        bg-gray-100
        mx-auto
        items-center
        flex
        mb-10
        space-x-4
        h-full
        w-full
      "
    >
      <nuxt-link :to="{ name: 'empresa' }">Empresa</nuxt-link>
      <nuxt-link to="/servicos">Serviços</nuxt-link>
      <nuxt-link to="/produtos">Produtos</nuxt-link>
    </div>

    <div class="container mx-auto">
      <h1 class="text-lg font-bold">Serviços</h1>
      <nuxt-link to="/servicos/desenvolvimento-de-sites">
        Desenvolvimento de sites
      </nuxt-link>
      <nuxt-link to="/servicos/marketing-digital">
        Marketing Digital
      </nuxt-link>
    </div>
    <div>
      <br /><br />

      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>