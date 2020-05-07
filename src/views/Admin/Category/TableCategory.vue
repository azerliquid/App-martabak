<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">{{title}}</h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">Tambah</base-button>
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
          <td class="budget">{{row.id_kategori}}</td>
          <td class="budget">{{row.nama_kategori}}</td>
          <td class="bugdet">
            <base-button size="sm" type="primary" icon="ni ni-active-40">Edit</base-button>
            <base-button size="sm" type="primary" icon="ni ni-fat-remove">Delete</base-button>
          </td>
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
import axios from "axios";
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
      // baseUrl: process.env.VUE_APP_BASE_URL
      tableData: []
    };
  },
  methods: {
    fetchCategory() {
      // let dataDum = [
      //   {
      //     id: 1,
      //     nama_kategori: "abc"
      //   },
      //   {
      //     id: 2,
      //     nama_kategori: "namam"
      //   }
      // ];
      // this.tableData = dataDum;
      // alert(this.dataKategori);
      // fetch("http://localhost:2000/martabak/kategori")
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
      // return {
      //   data
      // };

      axios.get("http://localhost:2000/martabak/kategori").then(response => {
        // response.data.Data.forEach(element => {
        // data.push(element);
        this.tableData = response.data.Data;
        // });
      });
      // console.log(data);

      // return {
      //   data
      // };
    }
  },
  beforeMount() {
    this.fetchCategory();
  }
};
</script>
<style>
</style>
