import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersByStoreModule } from '../users_by_store/users_by_store.module';
import { JwtauthService } from './jwtauth.service';

@Module({
  imports: [UsersByStoreModule, PassportModule],
  providers: [JwtauthService],
})
export class JwtauthModule {}
