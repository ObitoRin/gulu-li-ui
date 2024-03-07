import { createVNode, render } from 'vue'
import Message from './Message.vue'

type Options = {
  type: 'success' | 'warning' | 'error';
  text: string;
  druation?: number;
}

const div: HTMLDivElement = document.createElement('div')
div.setAttribute('class', 'li-message-container')
document.body.appendChild(div)
let timer = null
export const message = ({ type, text, druation = 1500 }: Options) => {
  const vNode = createVNode(Message, { type, text })
  render(vNode, div)
  clearInterval(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, druation)
}
