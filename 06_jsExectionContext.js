// JavaScript Execution context: it explains how javascript executes your code.

// Execution context: is the environment where the js code is executed. Whenever js code runs it creates an execution environment.

/* Types of Execution context: 
    1. Global Execution context: created when js starts executing. this keyword refers to the gec.
    2. Function Execution context: created whenever a function is called.
    3. Eval Execution context: created whenever code executes eval.
*/

/* Global Execution Context:
    it has two major phases-

    1. Memory Creation phase: js allocates memory for variables and functions.

    (value stored at the time of creation)->
        variable -> undefined.
        funtion -> definition.


    2. Code Execution phase: js executes the code line by line.
    variables are assigned the value and the function gets called.
*/