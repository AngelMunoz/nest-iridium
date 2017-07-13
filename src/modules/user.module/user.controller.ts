import { Controller, Get, Response, Param, HttpStatus, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private $uService: UserService) { }

  @Get()
  async getAllUsers( @Response() res) {
    const users = await this.$uService.find();
    res.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  async getUser( @Response() res, @Param('id') id) {
    const user = await this.$uService.findOne(id);
    res.status(HttpStatus.OK).json(user);
  }

  @Post()
  async addUser( @Response() res, @Body('user') user) {
    const msg = await this.$uService.create(user);
    res.status(HttpStatus.CREATED).json(msg);
  }
}