<script>

import axios from 'axios';

export default {
    name: 'Projects',

    data() {
        return {
            projects: null,
            baseUrl: 'http://localhost:8000'
        }
    },

    methods: {
    },

    mounted() {
        axios.get(this.baseUrl + '/api/projects').then((response) => {
            console.log(response.data);
            this.projects = response.data.projects.data;
        }).catch((error) => {
            console.log(error);
        })
    },

    computed: {
    },

}


</script>

<template>

    <div class=" bg-dark">

        <template v-if="projects">
            <div class="cont d-flex flex-wrap justify-content-center">
                <div class="card m-3" v-for="project, index in projects">
                    <div class="card-header"><router-link :to="{ name: 'Project', params: { id: project.id } }"> {{
                        project.name }} </router-link></div>

                    <!-- SE L'IMMAGINE INIZIA CON HTTP -->
                    <!--  v-if="startsWhit(project.img, 'http')"-->
                    <img v-if="project.img.startsWith('http')" :src="project.img" alt="">
                    <!-- <img :src="project.img" alt=""> -->
                    <!-- SE L'IMMAGINE E' NELLO STORAGE DI LARAVEL -->
                    <img v-else :src="baseUrl + '/storage/' + project.img" alt="">
                </div>
            </div>
        </template>


    </div>

</template>

<style scoped></style>
