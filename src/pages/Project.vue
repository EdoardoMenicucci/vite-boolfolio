<script>

import axios from 'axios';

export default {
    name: 'App',

    data() {
        return {
            project: '',
            baseUrl: 'http://localhost:8000'
        }
    },

    methods: {
    },

    mounted() {
        axios.get(this.baseUrl + '/api/projects/' + this.$route.params.id).then((response) => {
            console.log(response.data);
            this.project = response.data.project;
            // CONTROLLO IMMAGINE PER EVITARE PROBLEMI CON VUE
            if (this.project.img.startsWith('http')) {
                this.project.img = this.project.img
            } else {
                this.project.img = this.baseUrl + '/storage/' + this.project.img
            }
        })
    },

    computed: {
    },

}


</script>

<template>

    <div class=" bg-dark d-flex justify-content-center">
        <!-- if per evitare errori di delay della risposta -->
        <template v-if="project">
            <div class="card m-3 w-75">
                <div class="card-header text-center">{{ project.name }}</div>
                <!-- IMMAGINE -->
                <div class="d-flex justify-content-center">
                    <img :src="project.img" alt="">
                </div>

                <div class="card-body text-center">
                    <div>{{ project.description }}</div>
                    <div class="fw-bold">{{ project.type.name }}</div>
                    <div> {{ project.type.description }}</div>
                </div>
            </div>
        </template>


    </div>

</template>

<style scoped>
img {
    width: 500px !important;
}
</style>