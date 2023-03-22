import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('')
  const [note, setNote] = useState('')
  // const [data, setData] = useState([''])

  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    setNote(JSON.parse(window.localStorage.getItem('state') || '{}'));
  }, []);


  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value)
  }

  const onClickHandler = () => {
    setNote(text)
    // setData([text])
    localStorage.setItem('state', JSON.stringify(text));
    setText('')
  }

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value)
  }

  return (
    <div className="App">

      <div className={'note'}>
        <textarea
          className={'textarea'}
          name="note"
          id="note"
          cols={30}
          rows={10}
          onChange={onChangeHandler}
          value={text}
        ></textarea>
        <button onClick={onClickHandler}>save</button>
      </div>

      <div className={'search'}>
        <input type="text" onChange={searchHandler}/>
        <button>search</button>
      </div>

      <div className={'notesList'}>
        <div>{note}</div>
        {/*<div><p>{data.map((item, index) => (<li key={index}>{item}</li>))}</p></div>*/}
      </div>
    </div>
  );
}

export default App;
