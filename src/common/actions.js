const URL = 'https://jsonplaceholder.typicode.com/todos'

export default {
	async addTodo(todo) {
		try {
			const response = await fetch(
				URL,
				{
					method: 'POST',
					body: JSON.stringify(todo)
				}
			)
			const { id } = await response.json()

			return id
		} catch (error) {
			console.error(error)

			return null
		}
	},

	async deleteTodo(id) {
		try {
			const response = await fetch(
				`${URL}/${id}`,
				{ method: 'DELETE' }
			)

			response.json()
		} catch (error) {
			console.error(error)
		}
	},

	async getTodos({ limit = 5 } = {}) {
		try {
			const response = await fetch(`${URL}?_limit=${limit}`)
			return await response.json()
		} catch (error) {
			console.error(error)

			return []
		}
	}
}
