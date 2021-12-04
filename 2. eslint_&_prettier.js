ESLint  
  is a popular linter for JS.
  it analyzes static text (ie. analyzes code as its written & not what happens when actual code runs) & marks syntax that breaks rules.
  
  linting also catches errors in code. i.e using variable before defining, importing from non existing file
  
  installation:- Eslint comes with create-react-app.
  we can add plugins in our project.
      npm i --save-dev  eslint-plugin-testing-library   eslint-plugin-jest-dom        // these are npm pkgs which contains plugins for testing library & jest dom


  we need to create a .eslintrc file which will contain all settings related to eslint.
  
      {
        "plugins": [
            "testing-library",     // these are the plugins we have dwnloaded
            "jest-dom"
        ],
        "extends": [
            "react-app",           // this extends create-react-app settings
            "react-app/jest",
            "plugin:testing-library/recommended",          // these all are plugins that we have dnwloaed & extending rules from those 
            "plugin:testing-library/react",
            "plugin:jest-dom/recommended"
          ]
    }



 Prettier
  it automatically formats the code(indents & spacing)
  e.g 
    import {useState} from 'react';   // without prettier
    import { useState } from 'react;   // with prettier

    installtion:- 
      npm i --save-dev prettier
      
      we can create a .prettierrc.js file & inside of that can specify the rules.
         module.exports = {
            trailingComma: "all",
            singleQuote: true,
            tabWidth: 2,
            endOfLine: "auto"
        }
