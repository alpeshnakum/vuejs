<template>
    <div>
        <h1>User id is {{userId}}</h1>
    </div>
</template>

<script>
export default {
    name: 'vueUser',
    data() { 
        return {
            userId: this.$route.params.id,
        }
    }
}
</script>