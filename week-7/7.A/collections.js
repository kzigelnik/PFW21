let vm = new Vue({
  el: '#myCollectionApp',
  data: {
    newConsoleObj: {
      name: '',
      type: '',
      image: '',
      sunRequirement: '',
      previouslyGrown: false
    },
    consoles: [
      {
        name: 'Ambrosia Hybrid',
        type: 'Corn',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Corncobs.jpg/320px-Corncobs.jpg',
        sunRequirement: 'Full Sun',
        previouslyGrown: false
      },
      {
        name: 'Cantaloupe',
        type: 'Melon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Cantaloupe_cut_and_whole.jpg/320px-Cantaloupe_cut_and_whole.jpg',
        sunRequirement: 'Full Sun',
        previouslyGrown: true
      },
      {
        name: 'Butternut Squash',
        type: 'Cucurbitaceae',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Cucurbita_moschata_Butternut.png/320px-Cucurbita_moschata_Butternut.png',
        sunRequirement: 'Full Sun',
        previouslyGrown: true
      },
      {
        name: 'Bok Choy',
        type: 'Mustards',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bok_Choy.JPG/320px-Bok_Choy.JPG',
        sunRequirement: 'Partial Shade',
        previouslyGrown: false
      },
      {
        name: 'Green Beans',
        type: 'Legumes',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/A_green_bean.jpg',
        sunRequirement: 'Full Sun',
        previouslyGrown: false
      }
    ]
  },
  methods: {
    submitHandler: () => {
      console.log('submitted');
      vm.consoles = vm.consoles.concat(vm.newConsoleObj);
    },
    resetForm: () => {
      vm.newConsoleObj = {
        name: '',
        type: '',
        image: '',
        sunRequirement: '',
        previouslyGrown: false
      };
    },
    deleteItem: item => {
      vm.consoles = vm.consoles.filter(console => {
        return console !== item;
      })
    }
  }
})
