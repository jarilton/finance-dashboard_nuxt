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
    <div>
      <h1 class="font-bold">Produtos</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>