<template>
    <div class="testComp-child">
        <u><b>This is testComp.vue</b></u>
        <br><br>
        {{ text }}
        <br><br>

        
        <b>Use of v-html</b>
        <br>
        <div v-html="htmlcontent"></div>

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
        text: String,
    },
    data() {
        return {
            // used to pass html content
			htmlcontent: "<h1>this is htmlcontent variable details</h1>",
        }
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