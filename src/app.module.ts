import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './Produto/entities/produto.entity';
import { ProdutoModule } from './Produto/services/produto.module';
import { CategoriaModule } from './categoria/service/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojadegames',
      entities: [Produto, Categoria],
      synchronize: true,
      logging: true,
    }),
    ProdutoModule,
    CategoriaModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
