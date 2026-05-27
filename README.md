# Node.js + Express + MySQL with Sequelize (Migrations & Seeders)

## Introduction

Ye project Node.js, Express aur MySQL ka use karta hai jisme Sequelize ORM use hua hai.

Isme:

* Database migrations use ki gayi hain
* Seeders use kiye gaye hain
* Proper scalable structure follow kiya gaya hai

---

## Installation

```bash
npm init -y
npm install express mysql2 sequelize sequelize-cli dotenv
```

Optional (global install):

```bash
npm install -g sequelize-cli
```

---

## Sequelize Setup

```bash
npx sequelize-cli init
```

Ye folders create karega:

* models
* migrations
* seeders
* config

---

## Migration kya hota hai?

Migration ek tarika hai database structure ko version control karne ka.

Simple words me:
Migration = Database ka history system

---

## Migration Commands

### Create migration

```bash
npx sequelize-cli migration:generate --name create-users-table
```

### Run migration

```bash
npx sequelize-cli db:migrate
```

### Undo last migration

```bash
npx sequelize-cli db:migrate:undo
```

### Undo all migrations

```bash
npx sequelize-cli db:migrate:undo:all
```

---

## Migration kaise kaam karta hai?

Har migration file me 2 functions hote hain:

### up()

* Ye forward action hota hai
* Database me changes apply karta hai
* Example: table create karna, column add karna

### down()

* Ye reverse action hota hai
* Jo `up()` ne kiya usko undo karta hai
* Example: table delete karna, column remove karna

---

## Migration Rules (Best Practices)

* `up()` aur `down()` opposite hone chahiye
* Har migration reversible hona chahiye
* Ek migration me ek hi kaam hona chahiye
* Direct database me manual changes avoid karein
* Hamesha migrations ke through changes karein

---

## Seeder kya hota hai?

Seeder ka use initial ya dummy data insert karne ke liye hota hai.

---

## Seeder Commands

### Create seeder

```bash
npx sequelize-cli seed:generate --name demo-users
```

### Run seeders

```bash
npx sequelize-cli db:seed:all
```

### Undo last seeder

```bash
npx sequelize-cli db:seed:undo
```

### Undo all seeders

```bash
npx sequelize-cli db:seed:undo:all
```

---

## Seeder kaise kaam karta hai?

Seeder me bhi `up()` aur `down()` hote hain:

### up()

* Data insert karta hai database me

### down()

* Insert kiya gaya data delete karta hai

---

## Migration vs Seeder

| Feature | Migration           | Seeder      |
| ------- | ------------------- | ----------- |
| Purpose | Database structure  | Data insert |
| up()    | Table create/update | Data insert |
| down()  | Rollback structure  | Data delete |

---

## Project Structure

```
├── config/
├── migrations/
├── seeders/
├── models/
├── app.js
```

---

## Conclusion

Is project me:

* Migrations database structure ko manage karti hain
* Seeders initial data insert karte hain
* Ye approach scalable aur production-ready hai

---

## Note

Team me kaam karte waqt migrations ka use karna important hota hai.
Seeders testing aur demo ke liye useful hote hain