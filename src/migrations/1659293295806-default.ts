import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659293295806 implements MigrationInterface {
    name = 'default1659293295806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "PK_d7281c63c176e152e4c531594a8"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "PK_d7281c63c176e152e4c531594a8"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id")`);
    }

}
