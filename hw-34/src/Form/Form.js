import './Form.css';

const Form = ({ setTodoList }) => {

   const onSubmitHandler = (e) => {
      e.preventDefault();

      const todoText = e.target.elements.input.value;
      const todoId = new Date().getTime();

      setTodoList(prevTodoList => [...prevTodoList, { id: todoId, text: todoText }]);
      e.target.reset();
   }

   return (
      <form className="input-group" onSubmit={onSubmitHandler}>
         <div className='input-hold'>
            <input type="text" id="input" className="input" required autoComplete="off" name="input" />
            <label htmlFor="text" className="label">Enter task</label>
         </div>
         <div className='btn-hold'>
            <button className="btn btn-add" type="submit">Add</button>
         </div>
      </form>
   )
}

export default Form;