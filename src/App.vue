<template>
	<div id="app">
		<Todos
			v-bind:todos="todos"
			@deleteTodo="deleteTodo"
		/>
	</div>
</template>

<script>
import Todos from './components/Todos.vue'

export default {
	name: 'App',
	components: {
		Todos
	},
	data() {
		return {
			todos: [
				{
					id: 1,
					title: 'Todo one',
					completed: false
				},
				{
					id: 2,
					title: 'Todo two',
					completed: true
				},
				{
					id: 3,
					title: 'Todo tree',
					completed: false
				}
			]
		}
	},
	methods: {
		deleteTodo(id) {
			this.todos = this.todos.filter(todo => todo.id !== id)
		}
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
</style>
