# My Node Project

This is a Node.js project with a specific folder structure.

IMPORTANT INFO: This project does not import the node modu;es due to their size. Is indicated below into the point git.ignore

## Installation

Do the node project installation in the terminal. The parameters to follow are these

1. app. Folder with the code to be tested. You will have to export the functions and modify some of them (eg so that instead of console.log() they return)

2. __tests__. Folder with tests.

3. .gitignore file
### particularly be careful with node modules. if you dont put this folder on gitignore youll get crazy because you ll git thousands of files!!

4. Readme.md. Put the project description and installation and startup instructions here in Markdown format (take a look at the official Markdown guide if you have any questions)

5. package.json. Project description and configuration.

## Once you've created your project, upload it to GitHub.
### again: mind the git modules folder

## usage

The tests must be able to be run from the console using npm or npx, mind the format myTest.test.js

## Tests to be done:

Nivel 1

Create a file with the functions to add, subtract, multiply and divide two or more operands. Test the correct execution of these functions.

Create the corresponding tests to verify the operation of the two functions of the Exercise Promises and Callbacks N1 E2.

Create the corresponding tests to verify the operation of the functions of the exercise Promises and Callbacks N2 E1 and Promises and Callbacks N2 E2 (getEmployee() and getSalary()).

Create the corresponding tests to verify the operation of the Async / Await N1 E2 exercise.


Nivel2

Test the execution of the Async / Await N2 E1 exercise using Jest Fake Timers.

Create a mock that tests calls to the constructor of the Person class and its method. dirName() in the exercise Classes & Arrow Functions - N2 E2 and test that they work.

Verify through tests the creation of instances of the abstract class of the exercise Classes & Arrow Functions N3 E1.


Nivel3

Redo the Exercises Promises and Callbacks N2 E1 and Promises and Callbacks N2 E2 (getEmployee() and getSalary()) so that they access data from an external JSON file. Create tests that demonstrate the correct execution of the exercise by mocking the JSON file.

Using the Async / Await exercise as a base, create tests that force functional errors and verify that the errors thrown are the expected ones.
