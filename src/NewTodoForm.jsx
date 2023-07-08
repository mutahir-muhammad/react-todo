import { useState } from "react"

export function NewTodoForm({ onSubmit }){
    const [newItem , setNewItem] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        if(newItem === "") return
        onSubmit(newItem)
        setNewItem("")
      }


    return(
        <form onSubmit = {handleSubmit} className='new-item-form'>
          <div className="form-row">
            <label htmlFor = "item" id = "label">New Item</label>
            <input type = "text" id="item" value = {newItem} onChange = {e => setNewItem(e.target.value)}/>
          </div>
          <button className = "btn">Add New Item</button>
        </form>
    )
}