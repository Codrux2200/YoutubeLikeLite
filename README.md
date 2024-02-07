# Getting Started with Youtube Like Main Page lite

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



## Add a Video

  To add a Video icon you must add a node to video.json file. a note is composed by:
```json
 {
        "id" : 2,
        "channel" : "Bein Sport fr",
        "title" : "France Maroc coupe du monde résumé",
        "icon" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7oS9_SRw59g4Y5z1I6w-5x0NEZL243yUMYVdi-TUdeA-T8rolxr_JJfooV5zGiUgbBg&usqp=CAU",
        "tag" : ["Football", "Equipe de france"],
        "vue" : 330000000,
        "time" : "Thu Jan 04 2024 12:31:24 GMT+0000"
    }
```
you must increment the id and give a real channel Name to the channel params if he don't find the channel he will display an Alert.
to check the available channels or add a new one you need to check or edit the channel.json file a node in this file is composed by:
```json
 {
        "id" : 1,
        "channel" : "Music Espagnol",
        "verified" : false,
        "icon" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPfkWkLBBhiNHrN23JcqF1lOtAgpNumRJig&usqp=CAU"
}
```
same thing here you must encrement the id. the channel name is the name that must me written in the channel props of video.json node's.

both video.json and channel.json are in src/file/json/

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
