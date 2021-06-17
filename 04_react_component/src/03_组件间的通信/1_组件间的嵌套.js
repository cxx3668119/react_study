import React, { Component } from 'react'

// Header
function Header() {
  return (
    <div>
      <h2>我是heaer组件</h2>
    </div>
  )
}


// Main
function Banner() {
  return <h3>我是轮播图</h3>
}
function ProductList() {
  return (
    <ul>
      我是商品列表
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
      <li>商品列表6</li>
    </ul>
  )
}

function Main() {
  return (
    <div>
      <Banner></Banner>
      <ProductList></ProductList>
    </div>
  )
}

// Footer
function Footer() {
  return (
    <div>
      我是footer组件
    </div>
  )
}


export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    )
  }
}
