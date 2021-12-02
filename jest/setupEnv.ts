import { loadEnvConfig } from "@next/env";

const loadEnv = async () => {
  loadEnvConfig(process.env.PWD || process.cwd());
};

export default loadEnv;
