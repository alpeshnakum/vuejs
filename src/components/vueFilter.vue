<template>
    <div class="vueFilters">
        <p>filter UpperCase : {{myname | flt_upperCase}}</p><br>
        ---------------------------------------------------------<br>
        Currency Converter<br>
        <input type="number" min="1" v-model="amt">
        <p>{{amt}} USD = {{amt | flt_toInr}} INR</p>
    </div>
</template>

<script>
export default {
    name: 'vueFilter',
    data() {
        return {
            myname: "alpesh nakum",
            amt: 1
        }
    }
}
</script>

<style>
.vueFilters {
    background-color: #ff000038;
    padding: 10px;
}
</style>