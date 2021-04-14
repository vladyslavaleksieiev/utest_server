import { config } from 'dotenv';
import { connect } from 'mongoose';

export const setupDatabase = async (): Promise<void> => {
  config();
  try {
    await connect(process.env.DB_CONNECTION_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB CONNECTED');
  } catch (e) {
    console.error('DB CONNECTION ERROR ', e);
  }
};
