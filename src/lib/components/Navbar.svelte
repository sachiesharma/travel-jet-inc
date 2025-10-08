<script>
	//svelte logic of some kind
</script>

<header class="header">
	<h1>
		<button class="nav-button" aria-label="Go to Home">Travel Jet Inc.</button>
	</h1>
	<nav>
		<ul class="nav-links">
			<li><button class="nav-button">Home</button></li>
			<li><button class="nav-button"></button>About</li>
			<li><button class="nav-button"></button>Contact</li>
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

	.nav-links a {
		color: white;
		text-decoration: none;
	}

	.nav-links a:hover {
		text-decoration: underline;
	}
</style>
