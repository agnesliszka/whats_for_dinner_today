<template>
  <div>
    <v-app>
      <v-content>
        <navbar></navbar>
        <router-view></router-view>
      </v-content>
  </v-app>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
export default {
  name:'App',
  components: {
    navbar,
  },
  data: () => ({
    
  }),
};
</script>