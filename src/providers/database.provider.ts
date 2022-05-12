import { Feedback } from 'src/entity/feedback.entity';
import { createConnection } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'abul.db.elephantsql.com',
        port: 5432,
        username: 'vlewbdqb',
        password: 'u4DQj4YU358aBF1hNTj-4ry_FqA1Bcq9',
        database: 'vlewbdqb',
        entities: [Feedback],
        synchronize: true,
      }),
  },
];
