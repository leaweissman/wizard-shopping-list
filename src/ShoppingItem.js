import PropTypes from 'prop-types';
import styled from 'styled-components'

export default function ShoppingItem({ title, isDone = false, onToggleItem, onDeleteItem }) {
    return (
        <section>
            <input type="checkbox" checked={isDone} onChange={onToggleItem} />
            {title}
            <DeleteIcon onClick={onDeleteItem}>&times;</DeleteIcon>
        </section>
    )
}

ShoppingItem.propTypes = {
    title: PropTypes.string,
    isDone: PropTypes.bool,
}

const DeleteIcon = styled.span`
color: var(--second);
padding-left: .3rem;`