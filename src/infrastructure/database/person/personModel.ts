import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
} from "typeorm";
import { User } from "../user/userModel";
@Entity("persons")
export class Person {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    last_name!: string;

    @Column()
    phone!: string;

    @Column()
    email!: string;

    @Column()
    ci!: string;

    @CreateDateColumn({ type: "datetime2", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @UpdateDateColumn({ type: "datetime2", default: () => "CURRENT_TIMESTAMP" })
    updated_at!: Date;

    @OneToOne(() => User, (user) => user.person)
    user!: User;
}
