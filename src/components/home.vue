<template>
    <div>
        <h1>this is home page</h1>

        <p>Here is the list of users:</p>
        <ul>
            <li>
                <router-link to="/user/1">Anil</router-link>
            </li>
            <li>
                <router-link to="/user/2">Peter</router-link>
            </li>
            <li>
                <router-link to="/user/3">Bruce</router-link>
            </li>
            <li>
                <router-link to="/user/4">Alen</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'vueHome'
}
</script>

<style scoped>
ul {
    list-style: none;
    width: auto;
    height: 30px;
    margin: 10px;
    padding: 10px;
}

li {
    float: left;
    margin: 5px 30px 0px 30px;
}
</style>