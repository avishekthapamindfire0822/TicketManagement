export interface EnvironmentInterface {
  SERVER_PORT: number;
  IP_ADDRESS : string;
}

const environment: EnvironmentInterface = {
  SERVER_PORT: parseInt(process.env.SERVER_PORT || "3000", 10),
  IP_ADDRESS: process.env.IP_ADDRESS || 'localhost',
  
};

export default environment;
