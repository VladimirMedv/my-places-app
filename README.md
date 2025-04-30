# My Places - Location Tracker App  

![App Preview](https://portfolio-v2-ivory-rho.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FW4sV5rq6%2Fmyplaces.png&w=1920&q=75)  

## 📍 О проекте  

**My Places** — мобильное приложение для сохранения и организации любимых мест. Отмечайте интересные локации, добавляйте фото, описания, рейтинги и комментарии. Делитесь местами с друзьями и сортируйте их по категориям.  

Идеально для:  
✅ Кофеен и ресторанов  
✅ Достопримечательностей  
✅ Полезных сервисов  
✅ Любых других важных мест  

## 🚀 Технологии  

- **Framework**: React Native  
- **Navigation**: Expo Router  
- **Authentication**: Clerk & clerk-expo  
- **Backend**: Firebase (Firestore, Storage)  
- **Language**: TypeScript  
- **Development**: Expo  

## 🔥 Ключевые особенности  

- 📌 Сохранение мест с фото и описанием  
- ⭐ Рейтинги и комментарии  
- 🗂️ Категории для удобной организации  
- 🔗 Поделиться в соцсетях и мессенджерах  
- 🔐 Безопасная аутентификация через Clerk  
- ☁️ Синхронизация данных через Firebase  

## 📱 Установка и запуск  

1. Клонируйте репозиторий:  
```bash
git clone https://github.com/VladimirMedv/dashboard.git
cd my-places
```

2. Установите зависимости:  
```bash
npm install
# или
yarn install
```

3. Настройте переменные окружения (`.env`):  
```env
CLERK_PUBLISHABLE_KEY=your_clerk_key
FIREBASE_API_KEY=your_firebase_key
# ... другие Firebase-ключи
```

4. Запустите приложение:  
```bash
expo start
```  

5. Откройте в эмуляторе или на устройстве через **Expo Go**.  

## 🛠️ Скрипты  

- `start`: Запуск Metro-сервера  
- `android`: Запуск на Android-эмуляторе  
- `ios`: Запуск на iOS-симуляторе  
- `web`: Запуск веб-версии  
- `lint`: Проверка кода ESLint  

## 🔗 Ссылки  

- [GitHub репозиторий](https://github.com/VladimirMedv/my-places-app.git)  
- [Expo документация](https://docs.expo.dev/)  
- [Clerk аутентификация](https://clerk.com/)

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
