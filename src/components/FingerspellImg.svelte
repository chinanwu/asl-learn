<script>
  import A from './alphabet/A.svelte'
  import B from './alphabet/B.svelte'
  import C from './alphabet/C.svelte'
  import D from './alphabet/D.svelte'

  // const alphabet = ["a", "b", "c", "d"]
  const alphabet = [
  	{ letter: 'a', component: A },
  	{ letter: 'b', component: B },
  	{ letter: 'c', component: C },
  	{ letter: 'd', component: D },
  ]

  // Images from https://web.stanford.edu/~dljaffe/Ralph/jrrd.html
  //   const letterNum = Math.floor(Math.random() * 26);
  const letterNum = Math.floor(Math.random() * 4);
  $: letter = alphabet[letterNum];
  $: src = `assets/alphabet/${letter}.png`;
</script>

<div class="FingerspellImg">
    <img {src} alt="Letter">
</div>

<svelte:component this={letter.component}/>
