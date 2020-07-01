<template>
	<div
		class="todo-item"
		v-bind:class="{ 'is-complete': todo.completed }"
	>
		<p>
			<input
				type="checkbox"
				v-model="todo.completed"
			/>

			<button
				class="deleteButton"
				@click="$emit('delete-todo')"
			>
				x
			</button>

			{{todo.title}}
		</p>
	</div>
</template>

<script>
export default {
	name: 'TodoItem',
	props: [ 'todo' ]
}
</script>

<style scoped>
	.todo-item {
		background: #f4f4f4;
		border-bottom: 1px dotted #ccc;
		padding: 10px;
	}
	.is-complete {
		text-decoration: line-through;
	}
	.deleteButton {
		background: #ff0000;
		color: #fff;
		border: none;
		padding: 5px 10px;
		border-radius: 50%;
		cursor: pointer;
		float: right;
		outline: none;
	}
</style>
