import React from 'react';
import { useSelector } from 'react-redux';

import Smurf from './Smurf';

const SmurfList = () => {
    const { isLoading, smurfs } = useSelector(state => {
        return {
            smurfs: state.smurfs,
            isLoading: state.isLoading,
        }
    });

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="listContainer">
            {smurfs.map(smurf => <Smurf smurf={smurf} />)}
        </div>
    );
}

/*  I don't connect() because it's like this tiny little footnote that says:
    "Hey, the thing I'm exporting is completely different than the thing I just defined!"

    Plus I don't like the way you end up with actionCreators in the module scope, but you don't use them
    (IE: you've imported doThisThang(), but if you want to do that thang, you have to call props.doThisThang().
     The original doThisThang() just hangs around, cluttering the namespace, and doesn't actually do any thang
     at all.)

     So I'm a take it out.
*/
//export default connect(mapStateToProps)(SmurfList);
export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.