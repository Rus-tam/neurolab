import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: configService.getOrThrow('TYPEORM_HOST'),
    port: configService.getOrThrow('TYPEORM_PORT'),
    database: configService.getOrThrow('TYPEORM_DATABASE'),
    username: configService.getOrThrow('TYPEORM_USER'),
    password: configService.getOrThrow('TYPEORM_PASSWORD'),
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;