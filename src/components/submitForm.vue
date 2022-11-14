<template>
    <div class="submitForm">
        <h3 style="color: red;">total errors = {{errors.length}}</h3>
        <div v-if="errors.length">
            <b>Please check following detail(s)</b>
            <ul>
                <li v-for="err in errors" v-bind:key="err.index" style="color: red;">
                    {{ err }}
                </li>
            </ul>
        </div>
        <form @submit="fn_submitForm">
            <input type="text" name="username" v-model="username" placeholder="Enter User Name "><br>
            <input type="password" name="password" v-model="password" placeholder="Enter User Name "><br>
            <!-- <button @click="fn_submitForm">Submit</button> -->
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'submitForm',

    data() {
        return {
            // array of errors
            errors: [],

            username: null,
            password: null,
        }
    },

    methods: {
        fn_submitForm(e) {
            this.errors = [];
            // checks that fields are not empty
            if (this.username && this.password) {
                console.log("no error");
            } else {
                console.log("error found");
            }

            // if error found in user name
            if (!this.username) {
                this.errors.push("User name is required.");
            }
            // if error found in password
            if (!this.password) {
                this.errors.push("Password is required.");
            }


            e.preventDefault();
            console.log("fn_submitForm is working");
            // console.log("========== ", this.formname_submit);
        }
    }
}
</script>

<style>
.submitForm {
    background-color: #ff000038;
    padding: 10px;
}
</style>