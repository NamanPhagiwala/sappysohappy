/**
 * Type declaration for frontend config.
 */
type Config = {
  environment?: "prod" | "stage" | "dev" | "local";
  url?: {
    host?: string;
    internal?: {
      backend?: string;
    };
  };
};

export type { Config };
