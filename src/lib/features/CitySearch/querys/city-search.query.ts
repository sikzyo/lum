import { queryOptions } from '@tanstack/svelte-query';
import { getCities } from '../api/city-search.api';

export function citySearchQuery(cityName: string) {
  return queryOptions({
    queryKey: ['city_', cityName],
    queryFn: () => getCities(cityName),
    enabled: cityName.length > 1,
  });
}
