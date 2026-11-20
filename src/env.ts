import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  GEOCODING_API: {
    public: true,
  },
});
