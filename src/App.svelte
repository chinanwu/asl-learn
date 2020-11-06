<script>
	import Head from './components/Head.svelte';
	import FingerspellImg from './components/FingerspellImg.svelte';

	// let selected = "Read";
</script>

<style>
	.App__header {
			text-align: center;
	}

	.App__button {
			cursor: pointer;
	}
</style>

<Head />
<main>
	<h1 class="App__header">ASL-Learn</h1>
	<ul>
		<li><button class="App__button">Read</button></li>
		<li><button class="App__button">Fingerspell</button></li>
	</ul>

	<FingerspellImg />
</main>
