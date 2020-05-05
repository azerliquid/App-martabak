<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar :background-color="sidebarBackground" short-title="Argon" title="Argon">
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/'
          }"
        />

        <sidebar-item :link="{name: 'Category', icon: 'ni ni-app text-blue', path: '/category'}" />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <home-navbar></home-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <home-footer v-if="!$route.meta.hideFooter"></home-footer>
      </div>
    </div>
  </div>
</template>
<script>
import HomeNavbar from "./HomeNavbar";
import HomeFooter from "./HomeFooter";
import { FadeTransition } from "vue2-transitions";
export default {
  components: {
    HomeNavbar,
    HomeFooter,
    FadeTransition
  },
  data() {
    return {
      sidebarBackground: "vue" //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style lang="scss">
</style>