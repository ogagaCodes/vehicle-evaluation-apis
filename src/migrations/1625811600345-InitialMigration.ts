import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1625811600345 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create Users Table
        await queryRunner.query(`
            CREATE TABLE users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Create Vehicles Table
        await queryRunner.query(`
            CREATE TABLE vehicles (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                vin VARCHAR(17) NOT NULL UNIQUE,
                make VARCHAR(255) NOT NULL,
                model VARCHAR(255) NOT NULL,
                year INTEGER NOT NULL,
                mileage INTEGER NOT NULL,
                userId INTEGER,
                FOREIGN KEY(userId) REFERENCES users(id),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Create Valuations Table
        await queryRunner.query(`
            CREATE TABLE valuations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                vehicleId INTEGER,
                estimatedValue DECIMAL(10, 2) NOT NULL,
                valuationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(vehicleId) REFERENCES vehicles(id)
            );
        `);

        // Create Loans Table
        await queryRunner.query(`
            CREATE TABLE loans (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                userId INTEGER,
                vehicleId INTEGER,
                amount DECIMAL(10, 2) NOT NULL,
                status VARCHAR(50) NOT NULL,
                creditScore INTEGER NOT NULL,
                vehicleYear INTEGER NOT NULL,
                vehicleValue DECIMAL(10, 2) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY(userId) REFERENCES users(id),
                FOREIGN KEY(vehicleId) REFERENCES vehicles(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop Loans Table
        await queryRunner.query(`DROP TABLE loans;`);

        // Drop Valuations Table
        await queryRunner.query(`DROP TABLE valuations;`);

        // Drop Vehicles Table
        await queryRunner.query(`DROP TABLE vehicles;`);

        // Drop Users Table
        await queryRunner.query(`DROP TABLE users;`);
    }
}
