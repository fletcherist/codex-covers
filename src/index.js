// @flow
import Button from './components/button'

const HeadlineButton = Button.bind(null, {
  id: 'headline-button',
  label: 'Headline'
})

const MainTextButton = Button.bind(null, {
  id: 'main-text-button',
  label: 'Main text'
})

const AttachImageButton = Button.bind(null, {
  id: 'attach-image-button',
  label: 'Image'
})

const App = () => `
    ${HeadlineButton().component}
    ${MainTextButton().component}
    ${AttachImageButton().component}
`

document.body.innerHTML = App()

const attachListener = (
  type: string,
  elementId: string,
  func: Function
) => document.getElementById(elementId).addEventListener(type, func)

const attachClickListener = attachListener.bind(null, 'click')

attachClickListener(HeadlineButton().id, () => console.log('im func'))
attachClickListener(MainTextButton().id, () => console.log('im another func'))
attachClickListener(AttachImageButton().id, () => console.log('im third func'))
