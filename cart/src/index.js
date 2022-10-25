import { faker } from '@faker-js/faker'

export const generateName = () => {
  return faker.name.fullName()
}

export const generateCart = () => {
  return Math.floor(Math.random() * 10)
}

export const createCartFragment = (d = document) => {
  const fragment = d.createDocumentFragment()
  const randomCartNumber = generateCart()
  const randomName = generateName()

  const h2Tag = d.createElement('h2')
  h2Tag.innerText = 'Cart'

  const p = d.createElement('p')
  p.innerText = `${randomName} have ${randomCartNumber} item in your cart`

  fragment.appendChild(h2Tag)
  fragment.appendChild(p)

  return fragment
}

export const mount = (element) => {
  const fragment = createCartFragment();
  element.appendChild(fragment);
};



