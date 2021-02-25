
import { useEffect, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import Form from './components/Form'
import Headline from './components/Headline'
import loadFromLocal from './lib/loadFromLocal'
import ShowAllButton from './components/ShowAllButton'
import OpenItemsButton from './components/OpenItemsButton'
import ShoppingItem from './components/ShoppingItem'


import styled from 'styled-components'

import './Headline.css'


function App() {
  const LOCAL_STORAGE_KEY = 'hogwartsShoppingList'
  const [shoppingItems, setShoppingItems] = useState(loadFromLocal(LOCAL_STORAGE_KEY) ?? [])
  const [openItems, setOpenItems] = useState([])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shoppingItems))
  }, [shoppingItems])//[shoppingItems] = dependency Array




  function addShoppingItem(title) {
    const newShoppingItem = { title: title, isDone: false, id: uuid4() };
    setShoppingItems([...shoppingItems, newShoppingItem])

  }

  function toggleCheckbox(idToToggle) {
    console.log(idToToggle)
    const newItems = shoppingItems.map((item) => {
      if (item.id === idToToggle) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setShoppingItems(newItems)
  }

  function deleteShoppingItem(idToDelete) {
    const allRemainingItems = shoppingItems.filter(
      (item, id) => item.id !== idToDelete)
    setShoppingItems(allRemainingItems)
  }

  function deleteAll() {
    setShoppingItems([]);
  }

  function openWizardItems() {
    const uncheckedItems = shoppingItems.filter(
      (item) => item.isDone === false)
    setOpenItems(uncheckedItems)
    console.log(uncheckedItems)
  }
  const itemsToShow = openItems.length > 0 ? openItems : shoppingItems

  return (

    <Body className="App">
      <Headline name='Harry' />
      <Form onCreateShoppingItem={addShoppingItem} />
      {itemsToShow.map(({ title, isDone, id }) =>
        <ShoppingItem
          key={id}
          title={title}
          isDone={isDone}
          onToggleItem={() => toggleCheckbox(id)}
          onDeleteItem={() => deleteShoppingItem(id)} />
      )}


      <DeleteButton onClick={deleteAll}>Clear my Items!</DeleteButton>

      <OpenItemsButton filterItems={openWizardItems} />

      <ShowAllButton name='Show All' showAllItems={() => setOpenItems([])} />




    </Body>
  );
}


const DeleteButton = styled.button`
border: solid 2px #e3a000;
  font-family: sans-serif;
  color: var(--secondary);
  background: var(--primary);`

const Body = styled.div`
border: solid 2px #e3a000;
  font-family: sans-serif;
  color: var(--secondary);
  background: var(--primary);`

export default App;
