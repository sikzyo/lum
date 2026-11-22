<script lang="ts">
  import favicon from '#lib/share/assets/favicon.svg';
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import '../styles/global.css';
  import type { LayoutProps } from './$types';

  let { children }: LayoutProps = $props();
  const queryClient = new QueryClient();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<QueryClientProvider client={queryClient}>
  <main class="flex h-dvh flex-col gap-8 p-4 md:gap-10 md:p-6 lg:gap-12 lg:p-8">
    {@render children()}
  </main>
</QueryClientProvider>
