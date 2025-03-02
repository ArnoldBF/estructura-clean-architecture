import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToOne,
    OneToMany,
} from "typeorm";

import { Person } from "../person/personModel";
import { Credential } from "../credential/credentialModel";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @CreateDateColumn({ type: "datetime2", default: () => "CURRENT_TIMESTAMP" })
    created_at!: Date;

    @UpdateDateColumn({ type: "datetime2", default: () => "CURRENT_TIMESTAMP" })
    updated_at!: Date;

    @OneToOne(() => Person, (person) => person.user)
    @JoinColumn({ name: "person_id" })
    person!: Person;

    @OneToMany(() => Credential, (credential) => credential.user)
    credentials!: Credential[];
}
