RTL:- 
  React Testing Library is a library which allows us to test our application. It comes by default with create-react-app.
  
  IT PROVIDES VIRTUAL DOM FOR TEST. (i.e we can render a component on virtual dom using render method from RTL)
  It also provides a way to retrieve these components from virtual dom. (i.e we can retrieve components using screen api from RTL)
  It also provides a wat to interact with elements. (i.e we can click on element using RTL)

  It performs all the above things but it requires a test runner which will finds tests, runs them & determines whether the test is passed or failed.


  to install:- npm i @testing-library/react
  
  
Jest:-
  Jest is also a testing library which is a test runner that finds & runs the tests & determines whether the test is passed or failed.
  
  alternatives to jest can be mocha & Jasmine.
  
  if we check create-react-app, there is one test file "App.test.js".
  
  import { render, screen } from '@testing-library/react';
  
  here,
    render - render function actually renders a component on the testing dom.  (creates a virtual dom)
    screen - by using this we can select components to test  (access a virtual dom)
  
  jest test takes 2 args 
    1. string description of test
    2. a function which will check for test
    
    test('2 + 2 should be 4', () => {
      expect(2+2).toBe(4);           // this statement called as assertion 
    });


