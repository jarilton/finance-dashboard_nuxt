<template>
  <div>
    <div>
      <h1 class="text-lg font-bold">Produtos</h1>
      <nuxt-link to="/produtos/produtoA"> Produto A </nuxt-link>
      <nuxt-link to="/produtos/produtoB"> Produto B </nuxt-link>
      <br /><br />
      <div
        v-for="post in posts"
        :key="post.id"
        class="border-b border-gray-400 py-3"
      >
        {{ post.title }}
      </div>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",

  head() {
    return {
      title: 'Produtos',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Descrição dos serviços",
        },
      ],
      bodyAttrs: {
        class: "bg-yellow-200",
      },
    };
  },

  data() {
    return {};
  },

  async asyncData({ $axios }) {
    const posts = await $axios.$get(
      "/posts?_limit=3"
    );
    return {
      posts,
    };
  },

  methods: {},
};
</script>

<style>
</style>