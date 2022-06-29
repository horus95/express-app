import { Injectable } from '@nestjs/common';
import { UsersByStoreService } from '../users_by_store/users_by_store.service';

@Injectable()
export class JwtauthService {
  constructor(private UsersByStoreService: UsersByStoreService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.UsersByStoreService.findOneByUsername(username);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
