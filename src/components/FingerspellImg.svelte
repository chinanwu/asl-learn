<script>
  import A from './alphabet/A.svelte';
  import B from './alphabet/B.svelte';
  import C from './alphabet/C.svelte';
  import D from './alphabet/D.svelte';
  import E from './alphabet/E.svelte';
  import F from './alphabet/F.svelte';
  import G from './alphabet/G.svelte';
  import H from './alphabet/H.svelte';
  import I from './alphabet/I.svelte';
  import J from './alphabet/J.svelte';
  import K from './alphabet/K.svelte';
  import L from './alphabet/L.svelte';
  import M from './alphabet/M.svelte';
  import N from './alphabet/N.svelte';
  import O from './alphabet/O.svelte';
  import P from './alphabet/P.svelte';
  import Q from './alphabet/Q.svelte';
  import R from './alphabet/R.svelte';
  import S from './alphabet/S.svelte';
  import T from './alphabet/T.svelte';
  import U from './alphabet/U.svelte';
  import V from './alphabet/V.svelte';
  import W from './alphabet/W.svelte';
  import X from './alphabet/X.svelte';
  import Y from './alphabet/Y.svelte';
  import Z from './alphabet/Z.svelte';

  const alphabet = [
  	{ letter: 'a', component: A },
  	{ letter: 'b', component: B },
  	{ letter: 'c', component: C },
  	{ letter: 'd', component: D },
  	{ letter: 'e', component: E },
  	{ letter: 'f', component: F },
  	{ letter: 'g', component: G },
  	{ letter: 'h', component: H },
  	{ letter: 'i', component: I },
  	{ letter: 'j', component: J },
  	{ letter: 'k', component: K },
  	{ letter: 'l', component: L },
  	{ letter: 'm', component: M },
  	{ letter: 'n', component: N },
  	{ letter: 'o', component: O },
  	{ letter: 'p', component: P },
  	{ letter: 'q', component: Q },
  	{ letter: 'r', component: R },
  	{ letter: 's', component: S },
  	{ letter: 't', component: T },
  	{ letter: 'u', component: U },
  	{ letter: 'v', component: V },
  	{ letter: 'w', component: W },
  	{ letter: 'x', component: X },
  	{ letter: 'y', component: Y },
  	{ letter: 'z', component: Z },
  ]

  let letterNum = Math.floor(Math.random() * 26);
  $: letter = alphabet[letterNum];
  $: src = `assets/alphabet/${letter.letter}.png`;

  let guess = "";
  let isCorrectGuess = true;
  let combo = 0;

  const handleKeyDown = (event) => {
  	if (event?.key === "Enter") {
  		if (guess === letter.letter) {
				letterNum = Math.floor(Math.random() * 26);
				guess = "";
				isCorrectGuess = true;
				combo++;
			} else {
  			isCorrectGuess = false;
  			combo = 0;
			}
		}
	}
</script>

<style lang="less">
	.FingerspellImg {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.FingerspellImg__label {
    font-size: 2rem;
	}

  .FingerspellImg__input {
    border: none;
    width: 7.2rem;
    text-align: center;
		font-size: 6.4rem;
		border-bottom: 1px solid black;

		&:focus {
			outline: none;
		}
  }

	.FingerspellImg__input--wrong {
		border-color: red;
	}
</style>

<div class="FingerspellImg">
	<svelte:component this={letter.component}/>

	<input id="fingerspellGuess"
				 class="FingerspellImg__input"
				 type="text"
				 autofocus
				 maxlength="1"
				 bind:value={guess}
				 on:keydown={handleKeyDown}
	/>
	<label for="fingerspellGuess" class="FingerspellImg__label">Letter</label>

	{#if !isCorrectGuess}
		<p>Incorrect guess, try again!</p>
	{/if}
</div>
