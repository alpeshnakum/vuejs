<template>
    <div class="vueComputed">
        This value is stored in computed memory (cache) :
        {{getAddition}}
    </div>
</template>

<script>
export default {
    name: 'vueComputed',
    data() {
        return {
            a: 10,
            b: 20
        }
    },
    computed: {
        getAddition() { 
            return this.a + this.b;
        }
    }
}
</script>

<style scoped>
.vueComputed {
    background-color: #ff000038;
    padding: 10px;
}
</style>