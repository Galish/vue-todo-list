<template>
	<div id="app">
		<Header />

		<AddTodo
			@add-todo="addTodo"
		/>

		<Todos
			v-bind:todos="todos"
			@delete-todo="deleteTodo"
		/>
	</div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Header from './components/Header.vue'
import Todos from './components/Todos.vue'

export default {
	name: 'App',
	components: {
		AddTodo,
		Header,
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
		addTodo(newTodo) {
			this.todos.push(newTodo)
		},
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
