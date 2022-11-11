<template>
	<div id="app">
		<!-- =============================== -->
		<h1><u>This is app.vue file</u></h1>
		<HelloWorld msg="This is HelloWold.vue file." />
		<!-- =============================== -->
		<h4>this is nothing from App.vue (remove scoped from style in HelloWorld.vue)</h4>
		<hr>
		<!-- =============================== -->
		<testComp :text="message" />
		<hr>
		<!-- =============================== -->
		<ifLoop :arrayData="arrayData" :variableTest="variableTest" :fn_reverseMsg="fn_reverseMsg" />
		<hr>
		<!-- =============================== -->
		<b><u>This is passingProps.vue file</u></b>
		<br><br>
		<p><b>Passing props</b></p>
		<div :style="{ fontSize: increaseSizeBy + 'em' }">
			<passProps v-for="singleUser in userData" :key="singleUser.id" :userName="singleUser.name"
				@totalSize="increaseSizeBy += 0.1" />
		</div>
		<!-- =============================== -->
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import testComp from './components/testComp.vue';
import ifLoop from './components/ifLoop.vue';
import passProps from './components/passingProps.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
		testComp,
		ifLoop,
		passProps
	},

	// data() is used to pass variable array objects and it's data
	data() {
		return {

			// it will pass current time and date
			message: new Date().toLocaleString(),

			variableTest: "This is my first project in vue.js",
			new_msg: "This is some text..!",

			// normal array
			arrayData: [
				{ name: 'name-1' },
				{ name: 'name-2' },
				{ name: 'name-3' },
				{ name: 'name-4' },
				{ name: 'name-5' },
				{ name: 'name-6' }
			],

			// array in key and value form
			userData: [
				{ id: 1, name: 'James' },
				{ id: 2, name: 'Robert' },
				{ id: 3, name: 'John' },
				{ id: 4, name: 'Michael' },
				{ id: 5, name: 'David' },
				{ id: 6, name: 'William' }
			],

			// variable to increase font size
			increaseSizeBy: 1,
		}
	},

	// mehtods are used to pass functions
	methods: {
		fn_reverseMsg: function () {
			this.variableTest = this.variableTest.split('').reverse().join('');
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background-color: #00000028;
	margin: 20px;
	padding: 20px;
}
</style>
