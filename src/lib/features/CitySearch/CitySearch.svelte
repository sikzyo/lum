<script lang="ts">
  import CitiesInput from './components/CitiesInput.svelte';

  let cityName = $state('');
</script>

<CitiesInput bind:cityName />
