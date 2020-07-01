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

			<button
				class="button"
				type="submit"
			>
				Submit
			</button>
		</form>
	</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

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

			if (this.title) {
				return
			}

			const newTodo = {
				id: uuidv4(),
				title: this.title
			}

			this.$emit('add-todo', newTodo)
			this.title = ''
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
