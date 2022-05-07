<template>
  <div class="mt-6 pb-6 flex items-center space-x-4 border-b border-gray-300">
    <div>
      <AppFormLabel>Descrição</AppFormLabel>
      <AppFormInput v-model="form.description" />
    </div>

    <div>
      <AppFormLabel>Categoria</AppFormLabel>
      <AppFormSelect v-model="form.categoryId" :options="categories" />
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash"
import AppFormInput from "~/components/UI/AppFormInput";
import AppFormLabel from "~/components/UI/AppFormLabel";
import AppFormSelect from "~/components/UI/AppFormSelect";

export default {
  name: "TransactionFilter",

  components: {
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
  },

  data() {
    return {
      form: {
        description: "",
        categoryId: "",
      },
      categories: [],
    };
  },

  watch: {
    form: {
      deep: true,
      handler() {
        this.onFilterDebounce();
      },
    },
  },

  methods: {
    onFilterDebounce: debounce(function() {
      this.onFilter()
    }, 300),
    onFilter() {
      this.$emit("filter", {
        description: this.form.description || undefined,
        categoryId: this.form.categoryId || undefined,
      });
    },
  },

  async fetch() {
    this.categories = await this.$store.dispatch("categories/getCategories");
  },
};
</script>

<style>
</style>