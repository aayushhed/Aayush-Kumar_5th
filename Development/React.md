


--------[SPREAD-OPERATOR]----
     
  [UNPACKING A BOX]

  COPYING AN ARRAY OR EXPANDING AN ARRAY[...]

 // COPYING
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1];
  console.log(arr2);

// EXPANDING
 const numbers = [10, 20, 30];
 console.log(...numbers);



-------[REST-OPERATOR]--------

   [PACKING IN A BOX]

DESTRUCTURE AND COLLECT ALL OTHER STYLES/SETTINGS

// COLLECTS ALL ARGUMENT IN AN ARRAY
    function sum(...numbers) {
        console.log(numbers);
    }
    sum(10, 20, 30, 40);

// ARRAY DESTRUCTURING
    const arr = [10,20,30,40,50];
    const [first, ...rest] = arr;
    console.log(first);
    console.log(rest);

**[REFER SPREAD.JSX FOR SPREAD OPERSATOR FOR UPDATING AGE IN USER ]**



-------------[HOOKS]----------------

SPECIAL FUNCTION THAT ADD EXTRA CAPABILITIES TO FUNCTIONAL COMPONENETS.  LAYMAN-IT ENABLE COMPONENTS TO USE REACT-FEATURES.
 [ DOM access, and performance optimization, without using class components. ]

*[import { hook_name } from "react";]*


FOR EXAMPLES--- useState, useReducer.

[useState] ->  const [state, setState] = useState(initialValue);
 
**[REFER TO USESTATE.JSX]**


[useReducer]  ->  const [state, dispatch] = useReducer(reducer, initialState);

**[REFER TO USEREDUCER.JSX]**

NOTE:->Use useReducer when:
                            State is complex.
                            There are many actions (add, remove, reset, etc.).
                            Multiple state values depend on each other.

THE RULES OF HOOK:
            1.CALL AT TOP OF THE FUNCTION NOT INSIDE ANY LOOP.
            2.CALL HOOKS FROM REACT FUNCTION.

            



