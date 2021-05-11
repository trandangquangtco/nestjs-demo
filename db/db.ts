const db: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest_demo',
  autoLoadEntities: true,
  synchronize: true,
};

export { db };
