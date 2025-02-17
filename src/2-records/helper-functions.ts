type Config = {
  endpoint: string;
  timeout: number;
  secure: boolean;
};

type OptionalConfig = Partial<Config>;

type PartialConfig = Pick<Config, 'endpoint' | 'timeout'>;

type StrippedConfig = Omit<Config, 'endpoint'>;
