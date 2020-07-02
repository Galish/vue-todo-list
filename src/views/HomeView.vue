<template>
	<div class="about">
		<h1>Home</h1>

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
import AddTodo from '../components/AddTodo.vue'
import Todos from '../components/Todos.vue'
import actions from '../common/actions'

export default {
	name: 'App',
	components: {
		AddTodo,
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
