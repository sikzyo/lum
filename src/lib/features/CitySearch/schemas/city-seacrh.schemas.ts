import z from 'zod';

export const citySearchSchema = z.object({
  name: z.string().min(2, 'La ciudad debe tener minimo dos caracteres').toLowerCase(),
  count: z.number().nonnegative(),
  language: z.string().max(2, 'El codigo no es valido').toLowerCase(),
});

export const cityItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  country: z.string(),
  admin1: z.string(),
});

export const cityResponseSchema = z.object({
  results: z.array(cityItemSchema),
});

export type CitySearch = z.infer<typeof citySearchSchema>;
export type CityItem = z.infer<typeof cityItemSchema>;
export type CityResponse = z.infer<typeof cityResponseSchema>;
