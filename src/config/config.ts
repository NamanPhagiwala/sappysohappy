import { Config } from "./types";

/**
 * Get frontend config.
 */
const getConfig = (): Config => {
  // different from NODE_ENV, if NEXT_PUBLIC_ENVIRONMENT is set then use that otherwise set it to "local"
  const environment =
    (process.env.NEXT_PUBLIC_ENVIRONMENT as
      | "prod"
      | "stage"
      | "dev"
      | "local") ?? "local";
  const host = "www.xyz.com";
  const analyticsApiHost = process.env.NEXT_PUBLIC_ANALYTIC_LOGIN_DOMAIN;

  // config
  return {
    environment,
    url: {
      host: ``,
      internal: {
        backend: `https://xyz/api`,
      },
    },
  };
};
export { getConfig };
