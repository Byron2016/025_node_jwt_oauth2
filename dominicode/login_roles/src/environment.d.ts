declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      SECRET: string;
      USERNAMEDC: string;
      PASSWORDDC: string;
      DBNAMEDC: string;
      DBPORTDC: string;
      DBHOSTDC: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
