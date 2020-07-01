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
import actions from './common/actions'

export default {
	name: 'App',
	components: {
		AddTodo,
		Header,
		Todos
	},
	data() {
		return {
			todos: []
		}
	},
	methods: {
		async addTodo(newTodo) {
			const id = await actions.addTodo(newTodo)
			const addItemToArray = array => item => id => (
				array.push({ ...item, id })
			)

			console.log({ newTodo, id });

			id !== null && addItemToArray(this.todos)(newTodo)(id)
		},
		deleteTodo(id) {
			actions.deleteTodo(id)
			this.todos = this.todos.filter(todo => todo.id !== id)
		}
	},
	async created() {
		const todos = await actions.getTodos()

		this.todos = todos
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
