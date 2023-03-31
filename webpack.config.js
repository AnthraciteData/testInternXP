const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    context : path.join(__dirname,'src'),
    entry: {
        SignupLogin : './Signup-Login/UserFunctions.js',
        resetPassword :"./resetPassword/resetPassword.js",
        homepageElements : "./homePage/homePageElements.js",
        // fireBaseint: "/firebaseInitilization.js"
    },
    output:{

        path: path.resolve(__dirname,'dist'),
        filename : '[name].bundle.js'
        
    },

    watch : true


}