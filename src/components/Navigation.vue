<template>
	<div id="nav">
		<router-link to="/">
			Home
		</router-link>

		<router-link to="/about">
			About
		</router-link>
	</div>
</template>

<script>
</script>

<style scoped>
#nav {
	font-size: 18px;
	text-align: center;
	border-bottom: 10px solid #333;
	margin-bottom: 20px;
	padding: 10px;
}
#nav a {
	color: #666;
	text-decoration: none;
	margin-left: 20px;
}
#nav a:first-child {
	margin-left: 0;
}
#nav a:hover {
	text-decoration: underline;
}
</style>
