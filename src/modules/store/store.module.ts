import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreEntity } from './store.entity';
import { UsersByStoreModule } from '../users_by_store/users_by_store.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([StoreEntity]),
    UsersByStoreModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('ACCESS_TOKEN_SECRET'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
