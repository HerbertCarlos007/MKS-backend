import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'T7DmftqVq+H3LLn3olyLD8P5uBqvtRRjiSS3LgCqbPI=',
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}