<template>
  <k-inside>
      <k-header>Files</k-header>
    <k-collection
        :empty="empty"
        :items="items"
        layout="list"
        :pagination="files.pagination"
        @paginate="paginate"
    />
  </k-inside>
</template>

<script>
export default {
  props: {
    files: Object,
  },
  computed: {
    empty() {
      return {
        icon: "files",
        text: this.$t("role.empty")
      };
    },
    items() {
      return this.files.data.map((file) => {
        file.options = this.$dropdown(file.link);
        return file;
      });
    },
  },
  methods: {
    paginate(pagination) {
      this.$reload({
        query: {
          page: pagination.page
        }
      });
    }
  }
};
</script>
