<template>
    <div class="Emplist">
        <h2>Employee List from API</h2>
        <table class="emp-table">
            <tr class="emp-heading">
                <td class="emp-col">ID</td>
                <td class="emp-col">First Name</td>
                <td class="emp-col">Last Name</td>
                <td class="emp-col">Email</td>
                <td class="emp-col">Image</td>
            </tr>
            <tr class="emp-row" v-for="data in empData" :key="data.id">
                <td class="emp-col">{{data.id}}</td>
                <td class="emp-col">{{data.first_name}}</td>
                <td class="emp-col">{{data.last_name}}</td>
                <td class="emp-col">{{data.email}}</td>
                <td class="emp-col"><img :src="data.avatar" /></td>
            </tr>
        </table>
    </div>
</template>

<script>
// import Vue from 'vue';
// import VueAxios from 'vue-axios';
import axios from 'axios';


export default {
    name: 'vueEmpList',
    data() { 
        return {
            empData: null
        }
    },
    mounted() { 
        axios.get('https://reqres.in/api/users?page=2').then(resp => { 
            this.empData = resp.data.data;
            console.warn(this.empData);
        })
    }
}
</script>


<style scoped>
.Emplist{
    background-color: #ff000038;
    padding: 10px;
}
.emp-table{
    width: 100%;
    border: 2px solid black;
}

.emp-col{
    border: 1px solid black;
}
</style>