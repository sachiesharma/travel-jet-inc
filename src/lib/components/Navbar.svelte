<script>
	//svelte logic of some kind
</script>

<header class="header">
	<h1>
		<a href="/" class="nav-button" aria-label="Go to Home">Travel Jet Inc.</a>
	</h1>
	<nav>
		<ul class="nav-links">
			<li><a href="#home" class="nav-button">Home</a></li>
			<li><a href="#about" class="nav-button">About</a></li>
			<li><a href="#contact" class="nav-button">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	.header {
		background-color: rgb(255, 255, 255);
		color: black;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-links {
		list-style: none;
		display: flex;
		gap: 3rem;
	}

	.nav-button {
		color: black;
		text-decoration: none;
		cursor: pointer;
		background: none;
		border: none;
		font-size: inherit;
		font-family: inherit;
	}

	.nav-button:hover {
		text-decoration: underline;
		color: rgb(37, 99, 235); /* blue-600 */
	}
</style>
