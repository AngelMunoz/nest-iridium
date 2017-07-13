import { Controller, Get, Response, Param, HttpStatus, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) { }

  @Get()
  async getAllUsers( @Response() res) {
    const users = await this.usersService.getAllUsers();
    res.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  async getUser( @Response() res, @Param('id') id) {
    const user = await this.usersService.getUser(+id);
    res.status(HttpStatus.OK).json(user);
  }

  @Post()
  async addUser( @Response() res, @Body('user') user) {
    const msg = await this.usersService.getUser(user);
    res.status(HttpStatus.CREATED).json(msg);
  }
}