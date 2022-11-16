<template>
	<div id="app">

		<b><u>This is vue routing file</u></b>
		<nav class="menu">
			<ul class="menu-list">
				<li class="menu-item">
					<router-link to="/">Home</router-link>
				</li>
				<li class="menu-item">
					<router-link to="/about">About</router-link>
				</li>
				<li class="menu-item">
					<router-link to="/contact">Contact</router-link>
				</li>
				<li class="menu-item">
					<router-link to="/settings">Settings</router-link>
				</li>
			</ul>
		</nav>
		<router-view></router-view>
		<hr>
		<!-- =============================== -->
		<h1><u>This is app.vue file</u></h1>
		<HelloWorld msg="This is HelloWold.vue file." />
		<hr>
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
		<hr>
		<!-- =============================== -->
		<b><u>This is submitForm.vue file</u></b>
		<br><br>
		<p><b>Test Form</b></p>
		<submitForm />
		<hr>
		<!-- =============================== -->
		<br>
		<b><u>This is vueFilter.vue file</u></b>
		<br><br>
		<vueFilter />
		<hr>
		<!-- =============================== -->
		<br>
		<b><u>This is lifeCycle.vue file</u></b>
		<h5>Open console first</h5>
		<div v-if="toggleFlag">
			<lifeCycle />
		</div>
		<button v-on:click="fn_toggle">Toggle</button>
		<hr>
		<!-- =============================== -->
		<br><br>
		<b><u>This is EmpList.vue file</u></b>
		<br><br>
		<vueEmpList />
		<hr>
		<!-- =============================== -->
		<br><br>
		<b><u>This is computed.vue file</u></b>
		<br><br>
		<vueComputed />
		<hr>
		<!-- =============================== -->
		<br><br>
		<b><u>This is watcher.vue file</u></b>
		<br><br>
		<vueWatcher />
		<hr>
		<!-- =============================== -->
		<br><br>
		<b><u>This is vueSlots.vue file</u></b>
		<br><br>
		<vueSlots>
			<h1>Slot1: vueSlots 1</h1>
		</vueSlots>
		<vueSlots>
			<p>Slot2: toggleFlag = {{ toggleFlag }}</p>
		</vueSlots>
		<vueSlots>
			<p>Slot3: new_msg = {{ new_msg }}</p>
		</vueSlots>
		<vueSlots>
			<p>Slot4: userData = {{ userData }}</p>
		</vueSlots>
		<vueSlots></vueSlots>
		<hr>
		<!-- =============================== -->
		<br><br>
		<b><u>This is vueSlotsWithName.vue file</u></b><br>
		<p>Use of slots with name (Multiple slots)</p>
		<br>
		<div class="products">
			<vueSlotsNames>
				<template v-slot:header>This is product Heading</template>
				<template v-slot:content>This is product Description</template>
				<template v-slot:footer><button>Buy Now!</button></template>
			</vueSlotsNames>
			<vueSlotsNames>
				<template v-slot:header></template>
				<template v-slot:content></template>
				<template v-slot:footer></template>
			</vueSlotsNames>
		</div>
		<hr>
		<!-- =============================== -->
		<br><br>
		<b><u>This is dynamicComponent.vue file</u></b>
		<br><br>
		<vueDynamicCompo />
		<hr>
		<!-- =============================== -->
		<br><br>
		<b><u>This is refs.vue file</u></b>
		<br><br>
		<vueRefs />
		<hr>
		<!-- =============================== -->
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import testComp from './components/testComp.vue';
import ifLoop from './components/ifLoop.vue';
import passProps from './components/passingProps.vue';
import submitForm from './components/submitForm.vue';
import vueFilter from './components/vueFilter.vue';
import lifeCycle from './components/lifeCycle.vue';
import vueEmpList from './components/EmpList.vue';
import vueComputed from './components/computed.vue';
import vueWatcher from './components/watcherVue.vue';
import vueSlots from './components/vueSlots.vue';
import vueSlotsNames from './components/slotsWithName.vue';
import vueDynamicCompo from './components/dynamicComponent.vue';
import vueRefs from './components/refs.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
		testComp,
		ifLoop,
		passProps,
		submitForm,
		vueFilter,
		lifeCycle,
		vueEmpList,
		vueComputed,
		vueWatcher,
		vueSlots,
		vueSlotsNames,
		vueDynamicCompo,
		vueRefs
	},


	// data() is used to pass variable array objects and it's data
	data() {
		return {

			toggleFlag: true,

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
		fn_toggle() {
			this.toggleFlag = !this.toggleFlag;
		},
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

.menu-list {
	list-style: none;
	width: auto;
	height: 30px;
	margin: 10px;
	padding: 10px;
}

.menu-item {
	float: left;
	margin: 5px 30px 0px 30px;
}
</style>
