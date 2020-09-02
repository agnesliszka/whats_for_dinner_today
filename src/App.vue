<template>
  <v-app>
    <v-content>
      <PickADish/>
    </v-content>
  </v-app>
</template>

<script>
import PickADish from './components/PickADish';

export default {
  name: 'App',
  components: {
    PickADish,
  },
  data: () => ({
    //
  }),
};
</script>
