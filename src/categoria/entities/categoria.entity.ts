import { IsNotEmpty } from "class-validator";
import { Produto } from "src/Produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_categoria"})
export class Categoria{


    @PrimaryGeneratedColumn() //Chave Primaria e auto_increment
    id: number;

    @IsNotEmpty()
    @Column({length: 200, nullable: false})
    tipo: string;

    @OneToMany(() => Produto, (Produto) => Produto.categoria)
    Produto: Produto[] // Listar Todas as postagens associadas a um tema

}