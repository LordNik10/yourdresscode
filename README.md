# YourDressCode

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Features](#features)
- [Library](#library)
- [ESLint](#eslint)

## General Info

This project is an e-commerce web site of a clothing company that allows customers to browse and purchase clothing products online. The website features an easy-to-use interface that allows customers to view products by category, search for specific items, and add items to their cart.

## Technologies

![](https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&color=61DAFB)
![](https://img.shields.io/badge/Code-Html-informational?style=flat&logo=html5&color=f06529)
![](https://img.shields.io/badge/Style-Css-informational?style=flat&logo=css3&color=2965f1)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&color=f7df1e)
![](https://img.shields.io/badge/Components-MUI-informational?style=flat&logo=mui&color=0081cb)

## Features

The e-commerce is formed by 3 pages:

- The Homepage
- The Products Page
- The Contact Page

## Homepage

On the homepage of our e-commerce site, visitors can find a variety of useful information and features. Firstly, the site's title is prominently displayed, allowing users to immediately know what the site is about. Additionally, there is a product preview section where users can scroll through and view some of our most popular items. In a separate section, the strengths of the company can be highlighted, as well as any current special offers or promotions.
Overall, the homepage is designed to provide a general overview of the site and allow users to easily navigate to the information or features of their interest.

## Products page

On the items page, we can see all the available items for purchase, users can view a wide range of products arranged in a clear and easy to navigate manner. The products can be filtered through various categories. Users can view images of the products, the names of the products, and the price. Overall, this page is designed to allow users to easily find the products of their interest and facilitate the purchasing process.

By clicking on a specific product, the specific page of that product will open where we can view the description, select the quantity of items, any sizes or colors for clothing items and add the product to the cart if we are logged in.

## Contacts page

The contact page is where users can reach out to the company for more information or to make specific requests. On this page, there is a contact form that users can fill out to send an email to the company. The form typically includes fields for the user's name, email address, and a message section where they can provide more details about their inquiry. Additionally, there could be a phone number. Overall, the contact page is designed to make it easy for users to get in touch with the company and get the information they need.

## Login

It is possible to log in through the appropriate login page. If a user is not yet registered, they can do so by clicking on "register," they will be taken to another page where they can create a new account with email and password.

## Firebase

The login page allows users to access their account by providing their email address and password. The authentication process is handled by Firebase, a platform that provides a variety of tools and services for mobile and web application development, including user authentication. When a user submits their login credentials, Firebase checks them against the information stored in its database to confirm that the user is who they claim to be. If the credentials match, Firebase grants the user access to their account. If the user does not have an account, they can register by providing their personal information, creating a new account that will be stored in Firebase's database, so that they can log in with that information next time. Firebase uses industry standard security protocols to ensure that user data is protected and that only authorized users can access the system.

Once the user is logged in, their session will last for 30 minutes. After this time, the user will be prompted to log in again. If the user refreshes the page during the session, the session will be maintained and the user will remain logged in.

## API

For the list of items, I am using the APIs of the website: https://fakestoreapi.com/

## Library

### Material UI

I am using Material-UI as the library for the design and layout of the website. Material-UI is a popular open-source framework that implements the Material Design guidelines developed by Google. It provides a wide range of pre-built components such as buttons, forms, and navigation menus that make it easy to create a visually appealing and user-friendly interface.

## ESLint

In this React project, I am using ESLint to ensure that the code follows a consistent style and adheres to best practices. ESLint is a popular open-source tool that checks JavaScript code for potential errors and warnings, as well as enforcing a specific code style. It can be configured to use a variety of popular style guides such as AirBnB, Google, or StandardJS, or a custom set of rules can be defined

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
