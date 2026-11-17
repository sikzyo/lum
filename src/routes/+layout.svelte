<script lang="ts">
  import favicon from '#lib/assets/favicon.svg';
  import type { LayoutProps } from './$types';
  import '../styles/global.css';

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<main class="flex h-dvh flex-col gap-8 p-4 md:gap-10 md:p-6 lg:gap-12 lg:p-8">
  {@render children()}
</main>
