<script>
	let mobileMenuOpen = false;

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="header">
	<div class="container">
		<a href="/" class="logo" aria-label="Go to Home">
			<span class="logo-travel">TRAVEL</span>
			<span class="logo-jet">JET</span>
		</a>

		<!-- Hamburger button -->
		<button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
			<span class:open={mobileMenuOpen}></span>
			<span class:open={mobileMenuOpen}></span>
			<span class:open={mobileMenuOpen}></span>
		</button>

		<nav class="desktop-nav">
			<ul class="nav-links">
				<li><a href="#home" class="nav-button">Home</a></li>
				<li><a href="#about" class="nav-button">About</a></li>
				<li><a href="#destinations" class="nav-button">Destinations</a></li>
				<li><a href="#contact" class="nav-button">Contact</a></li>
			</ul>
		</nav>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<nav class="mobile-nav">
			<ul class="mobile-nav-links">
				<li><a href="#home" class="nav-button" on:click={closeMenu}>Home</a></li>
				<li><a href="#about" class="nav-button" on:click={closeMenu}>About</a></li>
				<li><a href="#destinations" class="nav-button" on:click={closeMenu}>Destinations</a></li>
				<li><a href="#contact" class="nav-button" on:click={closeMenu}>Contact</a></li>
			</ul>
		</nav>
	{/if}
</header>

<style>
	.header {
		background-color: #fff6ef;
		padding: 1.5rem 2rem;
		border-bottom: 1px solid rgba(29, 14, 3, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 300;
		text-decoration: none;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		z-index: 101;
	}

	.logo-travel {
		color: #014b3f;
		font-family: 'Avenir', system-ui, sans-serif;
		font-weight: 300;
		letter-spacing: 0.1em;
	}

	.logo-jet {
		color: #ff5e1a;
		font-family: 'Avenir', system-ui, sans-serif;
		font-weight: 300;
		letter-spacing: 0.1em;
	}

	/* Hamburger menu */
	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		z-index: 101;
	}

	.hamburger span {
		width: 25px;
		height: 3px;
		background-color: #1d0e03;
		transition: all 0.3s ease;
		border-radius: 3px;
	}

	.hamburger span.open:nth-child(1) {
		transform: rotate(45deg) translate(7px, 7px);
	}

	.hamburger span.open:nth-child(2) {
		opacity: 0;
	}

	.hamburger span.open:nth-child(3) {
		transform: rotate(-45deg) translate(7px, -7px);
	}

	/* Desktop navigation */
	.desktop-nav {
		display: block;
	}

	.nav-links {
		list-style: none;
		display: flex;
		gap: 3rem;
		margin: 0;
		padding: 0;
	}

	/* Mobile navigation */
	.mobile-nav {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background-color: #fff6ef;
		border-bottom: 1px solid rgba(29, 14, 3, 0.1);
		padding: 1rem 2rem 2rem;
	}

	.mobile-nav-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin: 0;
		padding: 0;
	}

	.nav-button {
		color: #1d0e03;
		text-decoration: none;
		cursor: pointer;
		background: none;
		border: none;
		font-size: 1rem;
		font-family: 'Questrial', sans-serif;
		font-weight: 400;
		transition: color 0.3s ease;
		position: relative;
		display: block;
	}

	.nav-button:hover {
		color: #ff5e1a;
	}

	.nav-button::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 2px;
		background-color: #ff5e1a;
		transition: width 0.3s ease;
	}

	.nav-button:hover::after {
		width: 100%;
	}

	/* Mobile styles */
	@media (max-width: 768px) {
		.header {
			padding: 1rem 1.5rem;
		}

		.hamburger {
			display: flex;
		}

		.desktop-nav {
			display: none;
		}

		.mobile-nav {
			display: block;
		}

		.logo {
			font-size: 1.2rem;
		}

		.mobile-nav-links .nav-button {
			font-size: 1.1rem;
			padding: 0.5rem 0;
		}
	}

	/* Tablet styles */
	@media (max-width: 1024px) and (min-width: 769px) {
		.nav-links {
			gap: 2rem;
		}
	}
</style>
