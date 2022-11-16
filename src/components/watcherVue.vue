<template>
    <div class="vueWatcher">
        <h1>{{count}}</h1>
        <button @click="count++"> + </button> &nbsp; <button @click="count--"> - </button>
    </div>
</template>

<script>
export default {
    name: 'vueWatcher',
    data() {
        return {
            count: 0,
        }
    },
    watch: {
        count(val, prev) { 
            if (val > 5 && val > prev) { 
                alert('value must be < 5');
                this.count = 0;
            }
            if (val < 0 && val < prev) { 
                alert('value must be >= 0');
                this.count = 0;
            }
        }
    }
}
</script>

<style scoped>
.vueWatcher {
    background-color: #ff000038;
    padding: 10px;
}
</style>