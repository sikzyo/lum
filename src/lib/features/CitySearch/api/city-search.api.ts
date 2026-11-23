import { get } from '#lib/share/api/http.ts';
import { GEOCODING_API } from '$app/env/public';
import type { CityResponse, CitySearch } from '../schemas/city-search.schemas';
import { cityResponseSchema, citySearchSchema } from '../schemas/city-search.schemas';

const defaultOptions: CitySearch = {
  name: '',
  count: 5,
  language: 'es',
};

export async function getCities(cityName: string): Promise<CityResponse | []> {
  const currentOptions = { ...defaultOptions, name: cityName };

  const validateOptions = citySearchSchema.safeParse(currentOptions);
  if (!validateOptions.success) {
    return [];
  }

  const searchParams = new URLSearchParams(
    Object.entries(validateOptions.data).map(([key, value]) => [key, String(value)]),
  );

  const URL = `${GEOCODING_API}?${searchParams.toString()}`;

  const response = await get(URL);
  const validateResponse = cityResponseSchema.safeParse(response);

  if (!validateResponse.success) {
    throw new Error('Eror: ', validateResponse.error);
  }

  return validateResponse.data;
}
