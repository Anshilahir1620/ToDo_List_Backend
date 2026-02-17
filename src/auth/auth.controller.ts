
import {Body,Controller,Get,HttpCode,HttpStatus,Post,Request,UseGuards} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthDTo } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() AuthDTo: AuthDTo) {
    return this.authService.signIn(AuthDTo.username, AuthDTo.password);
  }

  // @UseGuards(AuthGuard)
  // @Get('users')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
