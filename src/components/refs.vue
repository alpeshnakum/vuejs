<template>
    <div class="vueRefs">
        <input type="text" ref="username" name="username" id="username">
        <button @click="getData">Click Me!</button>
    </div>
</template>

<script>


export default {
    name: 'vueRefs',
    methods: {
        getData() { 
            this.$refs.username.focus();
            this.$refs.username.style.color = "red";
            console.log(this.$refs.username.value);
            this.$refs.username.value = '';
        }
    }
}
</script>

<style scoped>
.vueRefs {
    background-color: #ff000038;
    padding: 10px;
}
</style>