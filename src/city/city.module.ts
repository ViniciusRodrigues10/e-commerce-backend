import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Module({
  imports: [
    CacheModule.register({
      ttl: 90000000,
    }),
    TypeOrmModule.forFeature([CityEntity]),
  ],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
