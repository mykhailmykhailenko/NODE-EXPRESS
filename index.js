const express = require('express');
const app = express();
const http = require('http');
const bodyParser = express.json();
const yup = require('yup');
const PORT = 3000;

const server = http.createServer(app);

const USER_SCHEMA = yup.object({
    firstName: yup.string().required(),
   lastName: yup.string().required(),
   email: yup.string().required().email(),
   password: yup.string().required(),
   isSubscribed: yup.boolean()
})

const db = [];

app.post('/user', bodyParser, async (req, res, next) => {
   const {body} = req;
   try {
    const result = await USER_SCHEMA.validate(body);
    next();
   } catch (error) {
    res.status(400).send(error.message)
   } 
}, (req, res, next) => {
    const {body} = req;
    const user = {...body, id: db.length};
    db.push(user);
    delete user.password;
    res.status(201).send(user);
}); 


server.listen(PORT, ()=> {
    console.log(`App is started on port ${PORT}`)
});



/*
Реєстрація юзера
+1. Прийняти запит на сервер
+2. Распарсити (перетворити у об'єкт) дані з запиту
+3. Перевірити (провалідувати) отримані дані
+4. Зберегти юзера 
5. Надіслати у відповідь готовий об'єкт зареєстрованого юзера
*/