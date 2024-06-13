import { YamlConfig } from "@graphql-mesh/types";
import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [new transports.Console()],
});

logger.warn("This is a warning message using JSON formatting");

const config: YamlConfig.Config = {
  logger: logger,
  sources: [
    {
      name: "GitHub",
      handler: {
        graphql: {
          endpoint: "https://api.github.com/graphql",
        },
      },
    },
  ],
};

export default config;
