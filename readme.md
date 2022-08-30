
development

```bash
npm install
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

| method | path         | action                       | return    |
| ------ | ------------ | ---------------------------- | --------- |
| GET    | /missions    | 全てのミッションを取得       | Mission[] |
| POST   | /missions    | ミッションを作成             | Message   |
| GET    | /mission/:id | idに合致するミッションを取得 | Mission   |
| GET    | /users       | 全てのユーザを取得           | User[]    |
| POST   | /users       | ユーザを作成                 | Message   |

```ts
interface Mission {
    id: number;
    title: string;
    description: string;
    point: number;
    createdAt: Date;
    updatedAt: Date;
}

interface Message {
    message: string;
}

interface User {
    id: number;
    name: string;
    pass: string;
    createdAt: Date;
    updatedAt: Date;
    rank?: number;
}

```
