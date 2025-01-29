import React from 'react'
import Header from './components/header/header'
import Section from './components/section/section'
import Service from './components/service/service'
import Product from './components/product/product'
import Eco from './components/eco/eco'
import Organic from './components/organic/organic'
import Input from './components/input/input'

function App() {
  return (
    <div>
      <Header></Header>
      <Section></Section>
      <Service></Service>
      <Product></Product>
      <Eco></Eco>
      <Organic></Organic>
      <Input></Input>
    </div>
  )
}

export default App