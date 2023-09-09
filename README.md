# Мировые часы

===

Наверняка вы видели в офисах многих компаний установленные часы, показывающие время в разных столицах мира:

* New York,
* Moscow,
* London,
* Tokyo.

![Watches](./assets/WorldClock.png)

Общая механика:

1. Вы заполняете поля «Название» и «Временная зона», указываете смещение в часах относительно Гринвича и нажимаете кнопку «Добавить».
2. Часы автоматически добавляются и, что самое важное, начинают тикать, то есть отсчитываются секунды, минуты и часы.
3. При нажатии на крестик рядом с часами часы автоматически удаляются, при этом все подписки такие как `setInterval` и другие — должны вычищаться в соответствующем методе жизненного цикла.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

