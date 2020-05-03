<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8"></base-header>

    <div class="container-fluid mt--7">
      <div class="row mt-5">
        <div class="col">
          <table-category type="dark" title="Dark Table"></table-category>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TableCategory from "./Category/TableCategory";

export default {
  components: {
    TableCategory
  }
};
</script>
<style></style>
