import { Injectable } from '@nestjs/common';

@Injectable()
export default abstract class AbstractEnvSettings<T> {
  protected getFullConfig(): any {
    return {
      presentation: {
        port: parseInt(process.env.API_PORT),
      },
      persistance: {
        mongoURI: process.env.MONGO_URI,
        swagger_API: process.env.SWAGGER_API,
        SSL: process.env.SSL,
      },
    };
  }

  public abstract get(): T;
}
