import z from 'zod';

export const searchCitiesSchema = z.object({
  name: z.string().min(2, 'La ciudad debe tener minimo dos caracteres').toLowerCase(),
  count: z.number().nonnegative(),
  language: z.string().max(2, 'El codigo no es valido').toLowerCase(),
});

export type SearchCities = z.infer<typeof searchCitiesSchema>;
