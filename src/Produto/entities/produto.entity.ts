import { IsNotEmpty, IsNumber } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_produtos"})
export class Produto{


    @PrimaryGeneratedColumn() //Chave Primaria e auto_increment
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @Column()
    foto: String

    @IsNotEmpty() // so funciona em string
    @Column({length: 1000, nullable: false})
    descricao: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    @IsNumber()
    preco: number;
    

    @ManyToOne(() => Categoria, (categoria) => categoria.Produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria //chave estrangeira


    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
 
}
     