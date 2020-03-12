import { useState } from 'react';

function useForm(todoList) {

  const [ item, setItem ] = useState({});
  const [ showDetails, setShowDetails ] = useState(false);
  const [ details, setDetails ] = useState({});

  function handleInputChange(e) {
    setItem({...item, [e.target.name]: e.target.value,} );
  }

  function toggleDetails (id) {
    // setDetails(!showDetails);
    // setShowDetails(todoList.filter( item => item._id === id )[0] || {});
    let newDhowDetails = !showDetails;
    let newDetails = todoList.filter( item => item._id === id )[0] || {};
    setDetails(newDetails);
    setShowDetails(newDhowDetails);
  }

  return [item, handleInputChange, details, showDetails, toggleDetails];
}

export default useForm;
