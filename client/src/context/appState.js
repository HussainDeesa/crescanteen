import React, { useState } from "react";
import appContext from "./appContext";

const MenuState = (props) => {

   // const host = 'http://localhost:5000/'
   const Initial = []
   const [menu, setMenu] = useState(Initial)
   const [cart, setCart] = useState(Initial)
   const [cartfood, setCartFood] = useState(Initial)
   const [Carts, setCarts] = useState(Initial)
   const [cartCount, setCartCount] = useState('')

   // Fetch All note
   // const getallnotes = async () => {
   //    // API Call
   //    // const response = await fetch(`${host}api/notes/fetchallnotes`, {
   //    const response = await fetch('api/notes/fetchallnotes', {
   //       method: 'GET',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'auth-token': localStorage.getItem('token')
   //       }
   //    });
   //    const json=await response.json()
   //    setMenu(json)
      
   // }
   const getallmenu = async () => {
      // API Call
      // const response = await fetch(`${host}api/notes/fetchallnotes`, {
      const response = await fetch('api/menu/fetchallmenu', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         }
      });
      const json=await response.json()
      setMenu(json)
      
   }
   const addToCart = async (id) => {
      // API Call
      // const response = await fetch(`${host}api/notes/fetchallnotes`, {
      const response = await fetch(`api/cart/addtocart/${id}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
         }
      });
      const json=await response.json()
      // setCart(json)
   }
   const getallcartitems = async () => {
      // API Call
      // const response = await fetch(`${host}api/notes/fetchallnotes`, {
      const response = await fetch('api/cart/fetchallcartitems', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
         }
      });
      const json=await response.json()
      setCartCount(json.cart_count)
      setCart(json.Food) 
      setCarts(json.Carts)
      setCartFood(json.Foods) 
   }
   // DELETE cart
   const deleteCart = async (id) => {
      // API Call
      const response = await fetch(`api/cart/deletecart/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
         },

      });
      const json = await response.json()
      await getallcartitems();

   }

   // ADD note
   // const addNote = async (title, description, tag) => {
      
   //    // API Call
   //    // const response = await fetch(`${host}api/notes/addnote`, {
   //    const response = await fetch('api/notes/addnote', {
   //       method: 'POST',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'auth-token': localStorage.getItem('token')
   //       },
   //       body: JSON.stringify({title, description, tag})
   //    });
   //    const note = await response.json()
   //    setNotes(notes.concat(note))
   // }

   // // DELETE note
   // const deleteNote = async (id) => {
   //    // API Call
   //    const response = await fetch(`api/notes/deletenote/${id}`, {
   //       method: 'DELETE',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'auth-token': localStorage.getItem('token')
   //       },

   //    });
   //    const json = await response.json()
      

   //    const newNote = notes.filter((note) => { return note._id !== id })
   //    setNotes(newNote)
   // }

   // // EDIT note

   // const editNote = async (id, title, description, tag) => {
   //    // API Call
   //    const response = await fetch(`api/notes/updatenote/${id}`, {
   //       method: 'PUT',
   //       headers: {
   //          'Content-Type': 'application/json',
   //          'auth-token': localStorage.getItem('token')
   //       },
   //       body: JSON.stringify({ title, description, tag })

   //    });
   //    const json =  response.json()
   //    let newNotes= JSON.parse(JSON.stringify(notes))
   //    for (let index = 0; index < newNotes.length; index++) {
   //       const element = newNotes[index];
   //       if (element._id === id) {
   //          newNotes[index].title = title;
   //          newNotes[index].description = description;
   //          newNotes[index].tag = tag;
   //          break;
   //       }
   //    }
   //     setNotes(newNotes)
   // }
   
   return (
      // <noteContext.Provider value={{ menu, addNote, deleteNote, editNote,getallnotes,getallmenu }}>
      <appContext.Provider value={{menu,getallmenu,addToCart,getallcartitems,cartCount,cart,cartfood,Carts,deleteCart }}>
         {props.children}
      </appContext.Provider>
   )
}

export default MenuState;