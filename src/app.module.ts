import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import type { RedisClientOptions } from 'redis';

import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      url: 'redis://localhost:6379',
      ttl: 120000,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
