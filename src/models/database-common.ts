import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories/users.repository';

const commonRepositories = [UserRepository];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(commonRepositories)],
  exports: [TypeOrmModule],
})
export class DatabaseCommonModule {}
