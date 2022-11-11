<template>
    <div class="testComp-child">
        <u><b>This is testComp.vue</b></u>
        <br><br>
        {{ text }}
        <br><br>

        <!-- show variable text on hover  -->
        <span v-bind:title="text"> 
            <b>Hover here...!</b>
        </span>
    </div>
</template>

<!-- =========================== -->
<script>
export default {
    name: 'testComp',
    props: {
        text: String
    }
}
</script>

<!-- =========================== -->
<style scoped>
.testComp-child {
    background-color: #ff000038;
    padding: 10px;
}
</style>