document.addEventListener('DOMContentLoaded', () => {
// images
  const cardArray = [
    {
      name: 'blueberry',
      image: 'images/blueberry.jpg'
    },
    {
      name: 'blueberry',
      image: 'images/blueberry.jpg'
    },
    {
      name: 'apple',
      image: 'images/apple.jpg'
    },
    {
      name: 'apple',
      image: 'images/apple.jpg'
    },
    {
      name: 'avocado',
      image: 'images/avocado.jpg'
    },
    {
      name: 'figs',
      image: 'images/figs.jpg'
    },
    {
      name: 'figs',
      image: 'images/figs.jpg'
    },
    {
      name: 'lemons',
      image: 'images/lemons.jpg'
    },
    {
      name: 'lemons',
      image: 'images/lemons.jpg'
    },
    {
      name: 'oranges',
      image: 'images/oranges.jpg'
    },
    {
      name: 'oranges',
      image: 'images/oranges.jpg'
    },
    {
      name: 'pear',
      image: 'images/pear.jpg'
    },
    {
      name: 'pineapple',
      image: 'images/pineapple.jpg'
    },
    {
      name: 'pineapple',
      image: 'images/pineapple.jpg'
    },
    {
      name: 'watermelon',
      image: 'images/watermelon.jpg'
    },
    {
      name: 'watermelon',
      image: 'images/watermelon.jpg'
    }
  ]

  const grid = document.querySelector('.grid')

  function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'image/icon.jpg')
      card.setAttribute('data-id', i)
      // card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }
})