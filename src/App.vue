<script>

import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },

  data() {
    return {
      // projects: [],
      // baseUrl: 'http://localhost:8000'
    }
  },

  methods: {
  },

  mounted() {
    // axios.get(this.baseUrl + '/api/projects').then((response) => {
    //   console.log(response.data);
    //   this.projects = response.data.projects.data;
    // })
  },

  computed: {
  },

}


</script>

<template>
  <AppHeader />
  <router-view />

</template>

<style>
.cont {
  width: 1400px;
  margin: 0 auto;
}

.fa-laravel {
  color: red;
}

.fa-vuejs {
  color: #41B883;
}
</style>



<!-- <div class="container-fluid bg-dark d-flex flex-wrap justify-content-center">
    <div class="card m-3" v-for="project in projects">
      <div class="card-header">{{ project.name }}</div> -->

<!-- SE L'IMMAGINE INIZIA CON HTTP -->
<!--  v-if="startsWhit(project.img, 'http')"-->
<!-- <img v-if="project.img.startsWith('http')" :src="project.img" alt=""> -->
<!-- <img :src="project.img" alt=""> -->
<!-- SE L'IMMAGINE E' NELLO STORAGE DI LARAVEL -->
<!-- <img v-else :src="baseUrl + '/storage/' + project.img" alt="">
    </div>
  </div> -->