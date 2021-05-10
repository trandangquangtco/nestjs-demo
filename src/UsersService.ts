import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './Users';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private Users: Repository<Users>) {}

  //====================CREATE====================
  async addNewUser(body) {
    const create = await this.Users.save(body);
    return create;
  }

  //====================GET LIST====================
  async findAllUser(body, limit, page) {
    const find = await this.Users.findAndCount({
      where: body,
      take: limit,
      skip: (page - 1) * limit,
    });
    return find;
  }

  //====================GET ONE====================
  async findOneUser(query) {
    const find = await this.Users.findOne(query);
    return find;
  }

  //====================UPDATE====================
  async fixUser(id, body) {
    const update = await this.Users.createQueryBuilder('u')
      .update(Users)
      .set(body)
      .where(`u.id = ${id}`)
      .execute();
    return update;
  }

  //====================DELETE====================
  async deleteUser(id) {
    const del = await this.Users.createQueryBuilder('u')
      .delete()
      .from(Users)
      .where(`id = ${id}`)
      .execute();
    return del;
  }
}
