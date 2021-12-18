import React, { useEffect, useState } from 'react';
import './App.scss';

import { LandingPageComponent } from './components/LandingPageComponent';
import { TextComponent } from './components/TextComponent'

function App() {
  const [isVisable, setIsVisable] = useState(false)
  const [screenSize, setScreenSize] = useState<number>()
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    setScreenSize(window.innerWidth)
  }, [])

  useEffect(() => {
    if (textComp && header && textComp.top < header.bottom && !isVisable) {
      return setIsVisable(true)
    } else if (textComp && header && textComp.top > header.bottom && isVisable) {
      setIsVisable(false)
    }
    console.log("isVis: ", isVisable)
  }, [scroll])

  if (window.innerWidth !== screenSize) {
    console.log("window innerWidth: ", window.innerWidth, "State screenSize: ", screenSize)
  }

  const textComp = document.getElementById("textComponent")?.getBoundingClientRect()
  const header = document.getElementById("name")?.getBoundingClientRect()

  let myClass = isVisable ? "textComponent visable" : "textComponent"

  window.onscroll = () => { setScroll(prev => prev + 1) }

  return (
    <div className="App">
      <LandingPageComponent textIsVisable={isVisable} />
      <TextComponent />
    </div>
  );
}

export default App;
