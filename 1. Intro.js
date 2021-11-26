RTL:- 
  React Testing Library is a library which allows us to test our application. It comes by default with create-react-app.
  
  IT PROVIDES VIRTUAL DOM FOR TESTS
  
  to install:- npm i @testing-library/react
  
  
Jest:-
  Jest is also a testing library which is a test runner that finds & runs the tests & determines whether the test is passed or failed.

  if we check create-react-app, there is one test file "App.test.js".
  
  import { render, screen } from '@testing-library/react';
  
  here,
    render - render function actually renders a component on the testing dom.
    screen - by using this we can select components to test
  
