import React, {useState} from "react";

function CreateArea(props) {

    const [inputText, setInputText] = useState({
        title: "",
        content:""
    })

    function handleChange(e){

        const {name, value} = e.target;

       setInputText(prevText => {
        if(name === "title"){
          return {
            ...prevText,
            title: value
          }
        }
        else{
          return {
            ...prevText,
            content: value
          }
        }
       })

    }

    function onAddNote(e){
      e.preventDefault();
      props.onAddNote(inputText);

      setInputText({
        title: "",
        content: ""
       })



    }
   
  return (
    <div>
      <form>
        <input 
        name="title" 
        placeholder="Title" 
        onChange={handleChange} 
        type="text"
        value={inputText.title}
        />

        <textarea 
        name="content" 
        placeholder="Take a note..." rows="3" 
        onChange={handleChange} 
        type="text"
        value={inputText.content}
        />
        <button onClick={onAddNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;