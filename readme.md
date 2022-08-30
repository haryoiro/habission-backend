
development

```bash
npm install
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

| method | path                                           | action                       | return    | error | success |
| ------ | ---------------------------------------------- | ---------------------------- | --------- | ----- | ------- |
| GET    | /missions                                      | 全てのミッションを取得       | Mission[] |       |         |
| POST   | /missions?title=str&description=desc&point=num | ミッションを作成             | Message   |       |         |
| GET    | /mission/:id                                   | idに合致するミッションを取得 | Mission   |       |         |
| GET    | /users                                         | 全てのユーザを取得           | User[]    |       |         |
| PATCH  | /users?user_id=num&mission_id=num              | タスクを完了させる           | Message   |       |         |
| GET    | /user/:id                                      | idに合致するユーザを取得     | User      |       |         |
| POST   | /register                                      | ユーザを作成                 | Message   |       |         |
| POST   | /login?id=1&pass=str                           | ログイン                     | Message   |       |         |

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
