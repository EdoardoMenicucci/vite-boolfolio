<script>
export default {
  name: 'AppHeader',

  data() {
    return {
    }
  },

  methods: {
  },

  mounted() {
  },
}

</script>

<template>
  <header>
    <div class="cont">
      <div class="half-header">
        <i class="fa-brands fa-laravel fa-3x"></i>
        <i class="fa-solid fa-plus fa-2x"></i>
        <i class="fa-brands fa-vuejs fa-3x"></i>
      </div>
      <!-- Nella nav andranno i router link -->
      <div class="half-header">
        <nav>
          <router-link :to="{ name: 'Home' }">
            Home
          </router-link>
          <router-link :to="{ name: 'Projects' }">
            Projects
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 5rem;
  background-color: rgb(78, 78, 78);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cont {
  display: flex;
}

.half-header {
  width: 50%;
  display: flex;
  align-items: center;
}

i {
  margin: 0 1rem;
}

nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 700;
}
</style>
