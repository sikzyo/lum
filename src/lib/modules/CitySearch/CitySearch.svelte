<script lang="ts">
  import * as InputGroup from '#lib/share/components/ui/input-group/index.ts';
  import { Search } from '@lucide/svelte';
</script>

<InputGroup.Root class="md:max-w-150 lg:max-w-180">
  <InputGroup.Input placeholder="Buscar una ciudad..." />
  <InputGroup.Addon>
    <Search />
  </InputGroup.Addon>
</InputGroup.Root>
