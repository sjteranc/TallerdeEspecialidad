import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1713355448233 implements MigrationInterface {
    name = 'Init1713355448233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`cell_phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('CLIENT', 'ADMIN') NOT NULL, \`is_active\` tinyint NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
