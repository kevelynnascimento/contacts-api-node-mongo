import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserPayloadModel } from '../models/user-payload.model';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) { }

  public async generateToken(
    userId: string,
    username: string,
  ): Promise<string> {
    const payload: UserPayloadModel = {
      id: userId,
      username
    };

    const token = this.jwtService.sign(payload);

    return token;
  }
}
