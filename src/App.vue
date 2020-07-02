<template>
	<div id="app">
		<Header />

		<Navigation />

		<router-view />
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'

export default {
	name: 'App',
	components: {
		Header,
		Navigation
	}
}
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	line-height: 1.4;
}

h1 {
	text-align: center;
}

button {
	display: inline-block;
	border: none;
	background: #555;
	color: #fff;
	cursor: pointer;
}

button:hover {
	background: #666;
}
</style>
