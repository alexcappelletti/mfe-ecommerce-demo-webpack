import { faker } from '@faker-js/faker'

export default function createProductFragment (d = document) {
  const fragment = d.createDocumentFragment()

  const h2 = d.createElement('h2')
  h2.innerText = 'Products for sale'

  const ul = d.createElement('ul')

  ;[
    faker.commerce.product(),
    faker.commerce.product(),
    faker.commerce.product()
  ].forEach(product => {
    const li = d.createElement('li')
    li.innerText = product
    ul.appendChild(li)
  })

  fragment.appendChild(h2)
  fragment.appendChild(ul)

  return fragment
}

// const fragment = createProductFragment(document)
// document.querySelector('#product-list').appendChild(fragment)

export const mount = (element) => {
  const fragment = createProductFragment()
  element.appendChild(fragment)
}
