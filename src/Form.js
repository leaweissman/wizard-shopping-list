import PropTypes from 'prop-types';
import styled from 'styled-components'

export default function Form({ onCreateShoppingItem }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const input = form.title; //the name attribute of the inputfield
        onCreateShoppingItem(input.value);
        form.reset();
        input.focus();

    }

    return (
        <ShoppingItemForm className="form" onSubmit={handleSubmit}>
            <h3>Add shopping Item</h3>
            <input
                name="title"
                type="text"
                placeholder="What else needs to be bought?"
            />
            <AddToListButton>Add to List</AddToListButton>
        </ShoppingItemForm>

    );
}

Form.propTypes = {
    onCreateShoppingItem: PropTypes.func,
};

const ShoppingItemForm = styled.form`
display: flex;
    flex-direction: column;
    margin: 1rem;`

const AddToListButton = styled.button`
   background: var(--primary);
    color: var(--secondary);
    border-radius: 4px;
    padding: .4rem .8rem;
    border: solid 2px var(--secondary);
    margin: 1rem;`