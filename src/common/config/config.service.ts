import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config(); // Load environment variables from .env file

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string | undefined };

  constructor() {
    const rootDir = path.resolve(__dirname, '../../');
    const envFilePath = path.join(rootDir, '.env');

    console.log("ENV PATH ===", envFilePath)
    dotenv.config({ path: envFilePath });
    this.envConfig = process.env;
  }

  get(key: string): string {
    const value = this.envConfig[key];
    if (value === undefined) {
      throw new Error(`Config error - missing environment variable: ${key}`);
    }
    return value;
  }

  getNumber(key: string): number {
    const value = this.get(key);
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      throw new Error(`Config error - environment variable ${key} is not a number`);
    }
    return numberValue;
  }

  getBoolean(key: string): boolean {
    const value = this.get(key);
    return value === 'true';
  }
}
