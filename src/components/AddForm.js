import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import act from "../actions";

const initialFormState = {
    name: "",
    position: "",
    nickname: "",
    description: ""
}

const AddForm = () => {
    const [formState, setFormState] = useState(initialFormState);
    const dispatch = useDispatch();
    const errorMessage = useSelector(state => state.errorMessage);

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (formState.name === "" || formState.position === "" || formState.nickname === "") {
            dispatch(act.setError("Name, position and nickname fields are required."));
        }
        else {
            const newSmurf = { ...formState };
            dispatch(act.addSmurf(newSmurf))
            setFormState(initialFormState);
        }
    }

    return (<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br />
                <input onChange={handleChange} value={formState.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br />
                <input onChange={handleChange} value={formState.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br />
                <input onChange={handleChange} value={formState.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br />
                <textarea onChange={handleChange} value={formState.description} name="description" id="description" />
            </div>
            {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

export default AddForm;

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.