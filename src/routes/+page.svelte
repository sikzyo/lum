<script lang="ts">
  import CitySearch from '#lib/features/CitySearch/CitySearch.svelte';
  import NoWeather from '#lib/features/WeatherCards/NoWeather.svelte';
</script>

<header class="font-manrope text-3xl font-bold">
  <h1>Ciudades</h1>
</header>
<section class="flex grow flex-col items-center justify-center">
  <NoWeather />
</section>
<footer class="flex justify-center">
  <CitySearch />
</footer>
