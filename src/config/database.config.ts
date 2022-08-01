import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export function databaseConfig(): TypeOrmModuleOptions {

    const type: any = process.env.DB_TYPE

    return {
        type,
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
    }
}