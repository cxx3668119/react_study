import React from 'react'

import ProTypes from 'prop-types'

function ChildCpn(props) {
  let { name, age, height } = props
  return (
    <h2>子组件展示数据:{name + " " + age + " " + height}</h2>
  )
}

ChildCpn.proTypes = {
  name: ProTypes.string,
  age: ProTypes.number,

}

export default function App() {
  return (
    <div>
      <ChildCpn name="cxx" age="23" height="191" />
    </div>
  )
}
