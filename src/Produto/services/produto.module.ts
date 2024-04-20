import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { ProdutoController } from "../controller/produto.controller";
import { ProdutoService } from "./produto.service";


@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule],
})

export class ProdutoModule { }