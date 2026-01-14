# there aretwo types of export and import
 # 1St one :

# Default import / export with help of this we can export /import one object only form a time
    export default (component-name)
    import Component from "path"

# -Named export / import
    export const (component-name)
    import {component-name} from "path"

# react-hooks
(Normal js utility fucntions)
 - useState() - superpowerful state variables in react
    import { useState } from "react"; //Used to create the state variable . Its called the state variable because it maintains the state inside the component.
    # To create a state variable
    const [object name] = useState();

 - useEffect() - 





// Notes
# Reconciliation algorithm / the React fiber 
 for example , Our res container has 15 res cards
    My UI changes from filterning this 15 to 4 filtered cards
What the react do here is
It creates a virtual DOM of our UI(User interface).
# What is the virtual DOM
    Not an actual DOM
    Actual DOM IS the tags
    Virtual DOM is representation of the actual DOM.
    the virtual DOM is the React elements
    THe virtual DOM will print us the object

# the diff algorithm shows us the difference between old & new virtual DOM

