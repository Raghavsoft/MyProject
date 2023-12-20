import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
//import Refexp from './Refexp';
//import Contextexp from './Contextexp';
//import child from './child';
import React, { useState, useEffect } from 'react';
import { getAllItems, createItem, updateItem, deleteItem } from './ItemService';


      


const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    // Fetch all items when the component mounts
    const fetchItems = async () => {
      const data = await getAllItems();
      setItems(data);
    };

    fetchItems();
  }, []);

  const handleAddItem = async () => {
    // Create a new item and update the state
    const createdItem = await createItem({ name: newItem });
    setItems([...items, createdItem]);
    setNewItem('');
  };

  const handleEditItem = async (id) => {
    // Set the editingItem state for the selected item
    const itemToEdit = items.find((item) => item.id === id);
    setEditingItem(itemToEdit.id);
  };

  const handleUpdateItem = async (id, updatedName) => {
    // Update the item and reset the editing state
    const updatedItem = await updateItem(id, { name: updatedName });
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    // Delete the item and update the state
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Item CRUD App</h1>
      <ol type='i'>
        {items.map((item) => (
          <li key={item.id}>
            {editingItem === item.id ? (
              <div>
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={() => handleUpdateItem(item.id, newItem)}>Update</button>
              </div>
            ) : (
              <div>
                {item.name}{' '}
                <button onClick={() => handleEditItem(item.id)}>Edit</button>{' '}
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ol>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

      
        
        
         
 

export default App;
