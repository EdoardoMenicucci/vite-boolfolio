<script>

import axios from 'axios';

export default {
    name: 'Home',

    data() {
        return {
            projects: [],
            baseUrl: 'http://localhost:8000'
        }
    },

    methods: {
    },

    mounted() {

    },

    computed: {
    },

}


</script>

<template>

    <div class="bg-dark">
        <div class="cont">
            <h1 class="text-center mt-2">Home Page Front-Office</h1>
            <div>
                <i class="fa-brands fa-laravel"></i>
                <i class="fa-solid fa-plus"></i>
                <i class="fa-brands fa-vuejs"></i>
            </div>
        </div>

    </div>

</template>

<style scoped>
i {
    font-size: 15rem;
    margin: 1rem;
}

.fa-plus {
    font-size: 5rem !important;
}

.cont {
    text-align: center;
}
</style>