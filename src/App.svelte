<script>
	import Head from './components/Head.svelte';
	import FingerspellImg from './components/FingerspellImg.svelte';

	let selected = "read";
</script>

<style>
	.App__header {
			text-align: center;
	}

	.App__buttons {
			list-style: none;
			display: flex;
	}

	.App__button {
			cursor: pointer;
	}

	.App__button--active {
			background: red;
	}
</style>

<Head />
<main>
	<h1 class="App__header">ASL-Learn</h1>
	<ul class="App__buttons">
		<li><button class={"App__button" + (selected === "read" ? " App__button--active" : "")}>Read</button></li>
		<li><button class={"App__button" + (selected === "fingerspell" ? " App__button--active" : "")}>Fingerspell</button></li>
	</ul>

	<FingerspellImg />
</main>
