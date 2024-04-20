import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaService } from "./categoria.service";
import { CategoriaController } from "../controllers/categoria.controller";
import { Categoria } from "../entities/categoria.entity";




@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [categoriaService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule]

})

export class CategoriaModule {}