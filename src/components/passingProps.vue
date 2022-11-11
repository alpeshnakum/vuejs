<template>
    <div class="passingProps">
        {{userName}}
        <button @click="$emit('totalSize')">Click Me..!</button>
    </div>
</template>

<script>
export default{
    name: 'passProps',
    props: ['userName'], // whole template tag will repeat as many time loop will rotate in App.Vue file
    emits: ['totalSize'] // trigger events and pass data up the component heirarchy...
}
</script>

<style>
.passingProps{
    background-color: #ff000038;
    padding: 10px;
}
</style>