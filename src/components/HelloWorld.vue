<template>
    <div class="hello">
        <b><u><h3>{{ msg }}</h3></u></b>
        <h4>this is something</h4>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    background-color: #ff000038;
    padding: 10px;
}
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

h4 {
    color: red;
}
</style>
