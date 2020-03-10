<template>
    <div id="app">
        <my-head/>
        <home/>
    </div>
</template>

<script>
    import home from './views/home.vue'
    import MyHead from './components/myhead.vue'

    export default {
        name: 'App',
        components: {
            home, MyHead
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
