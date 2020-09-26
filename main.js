import { createElement, render, Component } from './toy-react'

// render(<div id="a" class="c">
//   <div>
//     456
//     <span>222</span>
//     <span></span>
//   </div>
// </div>)

class Wrapper extends Component {
  render() {
    return <div>my component</div>
  }
}

render((
  <div>
    4456
    <span>123</span>
    <span>123</span>
    <span>123</span>
    <span>123</span>
  </div>
), document.body)

render(<Wrapper />, document.body)