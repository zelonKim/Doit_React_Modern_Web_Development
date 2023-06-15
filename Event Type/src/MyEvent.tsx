/* import React from "react"


document.getElementById('root')?.addEventListener('click', (e: Event)) => {
  const {isTrusted, target, bubbles} = e
  console.log('click occurs.', isTrusted, target, bubbles)
}

export default function MyEvent() {
  return <div>EventListener</div>
}
*/

//////////////////////

/* import type {SyntheticEvent} from 'react'

export default function ReactOnClick() {
  const onClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('click occurson button', isTrusted, target, bubbles)
  }
  return (
    <div>
      <p>ReactOnClick</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
} */

//////////////////////

/* export default function DispatchEvent() {
  const onCallDispatchEvent = () => {
    console.log('onCallDispatchEvent')
      document.getElementById('root')?.dispatchEvent(new Event('click', {bubbles: true})) }
  }
  const onCallClick = () => {
    console.log('onCallClick')
    document.getElementById('root')?.click()

  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
      <button onClick={onCallClick}>call click</button>
    </div>
  )
  }
 */

/////////////////////


import type {ChangeEvent} from 'react'

export default function onChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>)=> {
    e.stopPropagation()
    e.preventDefault()
    console.log('onChangeValue', e.target.value)
  }
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>)=> {
    e.stopPropagation()
    console.log('onChangeValue', e.target.checked)
  }
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>)=> {
    e.stopPropagation()
    console.log('onChangeValue', e.target.files)
  }

  return (
    <div>
      <p>OnChange</p>
      <input type="text" onChange={onChangeValue}
        placeholder="type some text" defaultValue="Hello"/>
      <input type="checkbox" onChange={onChangeChecked} defaultChecked />
      <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
    </div>
  )
}
