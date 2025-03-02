import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from "typeorm";

import { User } from "../user/userModel";

@Entity("credentials")
export class Credential {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    plataforma!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @CreateDateColumn({ type: "datetime2", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;
    @UpdateDateColumn({ type: "datetime2", default: () => "CURRENT_TIMESTAMP" })
    updated_at!: Date;

    @ManyToOne(() => User, (user) => user.credentials, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user!: User;
}
