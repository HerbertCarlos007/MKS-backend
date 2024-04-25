import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'movies'})
export class MovieEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    gender: string;
    
    @Column({name: 'release_year'})
    releaseYear: string;
  
    @CreateDateColumn({name: 'created_at'})
    createdAt: string;
    
    @UpdateDateColumn({name: 'updated'})
    updatedAt: string;
    
    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: string;
    

}