import React from 'react'
import Sets from "../components/Sets/Sets";
import News from "../components/News/News";
import SetCards from "../components/SetCards/SetCards";
import Cared from '../components/Cared/Cared';

const Main = () => {
  return (
    <main>
      <SetCards/>
      <Sets/>
      <News />
      <Cared/>
    </main>
  )
}

export default Main