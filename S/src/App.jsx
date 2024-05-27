import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const PassWordref = useRef(null);
  const [isNumberAllow, setNumberAllow] = useState(false);
  const [isSpecialAllow, setSpecialAllow] = useState(false);
  const [length, setLength] = useState(8);
  const [PassWord, setPassWord] = useState("");

  
  const PassWordGenerator = useCallback( () => {
    let str = "abcdefghijklmnpoqrstuvwxyz"
    let temp = ""
    if(isNumberAllow) str += "0123456789"
    if(isSpecialAllow) str += "~!@#$%^&*()_+}{:"
    for(let i=0; i<length; i++){
      temp += str.charAt(Math.floor(Math.random()*str.length + 1))
    }
    setPassWord(temp);
  }, [isNumberAllow, isSpecialAllow,length,setPassWord])

  const copyPassWord = useCallback(() => {
    PassWordref.current?.select();
    window.navigator.clipboard.writeText(PassWord)
  },[PassWord])
  useEffect(()=>{
    PassWordGenerator()
  },[length, isNumberAllow, isSpecialAllow, PassWordGenerator])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">PassWord generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          value={PassWord}
          readOnly
          ref={PassWordref}
        ></input>
        <button className="outline-none text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-5 py-0.5 shrink-0" onClick={copyPassWord}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumberAllow}
            id="numberInput"
            onChange={() => {
              setNumberAllow((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Add numbers</label>
        </div>
        <div className="flex item-center gap-x-1">
            <input type="checkbox" defaultChecked={isSpecialAllow} id="SpecialAllow" onChange={()=> setSpecialAllow(prev => !prev)}></input>
            <label>Add Special</label>
        </div>
      </div>
    </div>
  );
}

export default App;
