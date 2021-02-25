import styled from 'styled-components'

export default function ShowAllButton({ name, showAllItems }) {
    return <ButtonShowAll onClick={showAllItems} >{name}</ButtonShowAll>
}

const ButtonShowAll = styled.button`
border: solid 2px #e3a000;
  font-family: sans-serif;
  color: var(--secondary);
  background: var(--primary);`