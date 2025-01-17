import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {hashSync} from 'bcryptjs'

@Entity({name: 'users'})
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    password: string;
    
    @CreateDateColumn({name: 'created_at'})
    createdAt: string;
    
    @UpdateDateColumn({name: 'updated'})
    updatedAt: string;
    
    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: string;
    
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }
}