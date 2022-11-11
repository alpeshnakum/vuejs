<template>
    <div class="ifLoop">
        <!-- ========================================= -->
        <b><u>This is ifLoop.vue file</u></b>
        <div class="if-condition">
            <br><br>
            <p><b>v-if * v-else-if * v-else</b></p>
            <div v-if="1 == 1"> This is if part. </div>
            <div v-else-if="2 == 2"> This is else-if part. </div>
            <div v-else> This is else part. </div>
        </div>
        <hr>

        <!-- ========================================= -->
        <div class="loop-condition">
            <p><b>Loop (v-for)</b></p>
            <ul class="array-list">
                <!-- <li v-for="arrData in arrayData" :key="arrData"> {{ arrData.name }}</li> -->
                <li v-for="(arrData, index) in arrayData" :key="index"> {{index}} {{ arrData.name }}</li>
            </ul>
        </div>
        <hr>

        <!-- ========================================= -->
        <div class="handling-user-input">
            <p><b>Handling user input (v-on Ex: v-on:click="function_name()")</b></p>
            <p>Text : {{ variableTest }}</p>
            <button v-on:click="fn_reverseMsg">Click me to reverse string</button><br>
            <!-- we can also use @click on place of v-on:click -->
            <button @dblclick="fn_reverseMsg">Double click me to reverse string</button><br>
            <button @auxclick="fn_reverseMsg">Click scroller or double right click</button><br>
            <button @click="counter++">Click me {{ counter }}</button>
        </div>
        <hr>

        <!-- ========================================= -->
        <div class="v-model-directives">
            <p><b>v-model Directive</b></p>
            <input type="text" v-model="yrName" placeholder="Enter something">
            <br><br>
            <div v-if="yrName == '' || yrName == null">
                Enter something in textbox and will appear here
            </div>
            <div v-else>
                {{yrName}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ifLoop',
    props: {
        arrayData: Array,
        variableTest: String,
        fn_reverseMsg: Function
    },
    data() {
        return {
            counter: 0,
            yrName: ''
        }
    }
}
</script>

<style scoped>
.ifLoop {
    background-color: #ff000038;
    padding: 10px;
}

.array-list {
    list-style: none;
    padding: 0px;
}
</style>