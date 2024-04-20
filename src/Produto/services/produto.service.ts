import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "src/categoria/entities/categoria.entity";

@Injectable()
export class ProdutoService {
    constructor(
     @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({       
        relations: {
            categoria: true
        }
    });   
   
    } 

   
    async findById(id: number): Promise<Produto> {

        let Produto = await this.produtoRepository.findOne({
            where: {
                id
            },     
                relations: {
                    categoria: true
                }
            });    
           
        // checar se a postagem não foi encontrada
        if (!Produto)
            throw new HttpException('Produto nao encontrada!', HttpStatus.NOT_FOUND);
    
        // retorna a postagem caso ela exista
        return Produto;
    }
    
    async findByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
    
            },          
                relations: {
                    categoria: true
                }
            });   
    
        }      
    
      async create(Produto: Produto): Promise<Produto> {
        return await this.produtoRepository.save(Produto);
      }
    
      async update(Produto: Produto): Promise<Produto> {
    
        let buscaTema: Produto = await this.findById(Produto.id);
    
        if (!buscaTema || !Produto.id)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
    
        return await this.produtoRepository.save(Produto);
      }
    
    
      async delete(id: number): Promise<DeleteResult> {
     
        let buscaProduto = await this.findById(id);
    
        if (!buscaProduto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    
        return await this.produtoRepository.delete(id);
      }
    
    }
