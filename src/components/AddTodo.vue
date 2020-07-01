<template>
	<div>
		<form @submit="addTodo">
			<input
				class="text-input"
				type="text"
				name="title"
				placeholder="Add todo..."
				v-model="title"
			/>

			<input
				class="button"
				type="submit"
			/>
		</form>
	</div>
</template>

<script>
import compose from 'compose-function'

export default {
	name: 'AddTodo',
	data() {
		return {
			title: ''
		}
	},
	methods: {
		addTodo(e) {
			e.preventDefault()

			const clearInput = () => this.title = ''
			const createTodo = title => ({ title, completed: false })
			const emit = todo => this.$emit('add-todo', todo)
			const trim = string => string.trim()

			const title = trim(this.title)
			title !== '' && compose(clearInput, emit, createTodo)(title)
		}
	}
}
</script>

<style scoped>
	form {
		display: flex;
	}
	.text-input {
		flex: 10;
		padding: 5px;
	}
	.button {
		flex: 2;
	}
</style>
