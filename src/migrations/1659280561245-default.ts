import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659280561245 implements MigrationInterface {
    name = 'default1659280561245'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
