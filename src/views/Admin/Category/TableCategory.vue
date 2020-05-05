<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">{{title}}</h3>
        </div>
        <div class="col text-right">
          <button-tambah type="primary" size="sm">Tambah</button-tambah>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark': ''"
        :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template slot="columns">
          <th>No</th>
          <th>Nama Kategory</th>
          <th>Action</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row"></th>
          <tr v-for="r in row" v-bind:key="r.id">
            <!-- <td>{{ r.id }}</td> -->
            <td class="budget">{{r.nama_kategori}}</td>
          </tr>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent': ''"
    >
      <base-pagination total="30"></base-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "table-category",
  props: {
    type: {
      type: String
    },
    title: String
  },
  data() {
    return {
      tableData: this.fetchCategory()
    };
  },
  methods: {
    fetchCategory() {
      let data = [
        {
          id: 1,
          nama_kategori: "abc"
        },
        {
          id: 2,
          nama_kategori: "namam"
        }
      ];
      // alert(this.dataKategori);
      // fetch("http://192.168.43.240:2000/martabak/kategori")
      //   .then(function(response) {
      //     return response.json();
      //   })
      //   .then(function(res) {
      //     // this.tableData = res.Data;
      //     // alert(res);
      //     data = res.Data;
      //     // tableData = data;
      //   })
      //   .catch(function(err) {
      //     alert(err);
      //   });
      // console.log("acak");
      // this.dataKategori = data;
      return {
        data
      };
    }
  },
  beforeMount() {
    // this.fetchCategory();
    // alert("ksdgfkg");
  }
};
</script>
<style>
</style>
