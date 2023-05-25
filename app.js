
var btnParent = document.querySelector('.btns-container')
var menuParent = document.querySelector('.grid-div')


// console.log(btnParent)

var btnContent = ['All', 'BreakFast', 'Lunch', 'Shakes', 'Dinner']

var btnArray = []

var menuContent =[
  {
    img: 'item-1.jpeg',
    heading: 'Buttermilk Pancakes',
    price: '$15.99',
    para: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    category: 'BreakFast'
  },
  {
    img: 'item-2.jpeg',
    heading: 'Diner Double',
    price: '$13.99',
    para: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    category: 'Lunch',
  },
  {
    img: 'item-3.jpeg',
    heading: 'Godzilla Milkshake',
    price: '$6.99',
    para: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    category: 'Shakes',
  },
  {
    img: 'item-4.jpeg',
    heading: 'Country Delight',
    price: '$20.99',
    para: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    category: 'BreakFast',
  },
  {
    img: 'item-5.jpeg',
    heading: 'Egg Attack',
    price: '$22.99',
    para: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    category: 'Lunch',
  },
  {
    img: 'item-6.jpeg',
    heading: 'Oreo Dream',
    price: '$18.99',
    para: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    category: 'Shakes',
  },
  {
    img: 'item-7.jpeg',
    heading: 'Bacon Overflow',
    price: '$8.99',
    para: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    category: 'BreakFast',
  },
  {
    img: 'item-8.jpeg',
    heading: 'American Classic',
    price: '$12.99',
    para: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    category: 'Lunch',
  },
  {
    img: 'item-9.jpeg',
    heading: 'Quarantine Buddy',
    price: '$16.99',
    para: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    category: 'Shakes',
  },
  {
    img: 'item-10.jpeg',
    heading: 'Steak Dinner',
    price: '$39.99',
    para: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    category: 'Dinner',
  }
];

var menuArea = [];


// for(let i = 0; i < btnContent.length; i++){ 
//       var btn = `<button type="button" class="btns" >${btnContent[i]}</button>`
//       btnArray.push(btn)
//       btnParent.innerHTML = btnArray.join("")
//     }

btnContent.forEach((btnContent) => {
  var btn = `<button type="button" class="btns" onclick='filterFunction("${btnContent}")'>${btnContent}</button>`
             btnArray.push(btn)
             btnParent.innerHTML = btnArray.join("")
  // console.log(btnContent)
})
      

for(let i = 0; i < menuContent.length; i++){
  var menu = `<div class="inner-grid">
      <div class="innerGrid-item1">
          <img src="${menuContent[i].img}" alt="" class="innerGrid-img">
      </div>
      <div class="innerGrid-item2">
          <div class="innerGrid-child1">
              <h3 class="item-title">${menuContent[i].heading}</h3>
              <p id="price">${menuContent[i].price}</p>
          </div>
          <div class="innerGrid-child2">
              <p class="item-content">${menuContent[i].para}</p>
          </div>
      </div>
  </div>`
  
  menuArea.push(menu)
  menuParent.innerHTML = menuArea.join("")
}


                  // Code done by my own, with little bit help of online resources

document.addEventListener('DOMContentLoaded', () => {
  var btns = document.querySelectorAll('.btns');
  var gridItems = document.querySelectorAll('.inner-grid');

for(let i = 0; i < btnContent.length; i++){
  btns[i].addEventListener('click', ()=>{
    var menuArea = [];
    for(let j = 0; j < gridItems.length; j++){
      if(btns[i].innerHTML.toLowerCase() === 'all' || btns[i].innerHTML.toLowerCase() === menuContent[j].category.toLowerCase()){
                      var menu = `<div class="inner-grid">
                  <div class="innerGrid-item1">
                      <img src="${menuContent[j].img}" alt="" class="innerGrid-img">
                  </div>
                  <div class="innerGrid-item2">
                      <div class="innerGrid-child1">
                          <h3 class="item-title">${menuContent[j].heading}</h3>
                          <p id="price">${menuContent[j].price}</p>
                      </div>
                      <div class="innerGrid-child2">
                          <p class="item-content">${menuContent[j].para}</p>
                      </div>
                  </div>
              </div>`
  
              menuArea.push(menu)
  
              console.log(btns[i].innerHTML.toLowerCase() === menuContent[j].category.toLowerCase())
      }
      // else{
      //     var menu = `<div class="inner-grid">
      //             <div class="innerGrid-item1">
      //                 <img src="${menuContent[j].img}" alt="" class="innerGrid-img">
      //             </div>
      //             <div class="innerGrid-item2">
      //                 <div class="innerGrid-child1">
      //                     <h3 class="item-title">${menuContent[j].heading}</h3>
      //                     <p id="price">${menuContent[j].price}</p>
      //                 </div>
      //                 <div class="innerGrid-child2">
      //                     <p class="item-content">${menuContent[j].para}</p>
      //                 </div>
      //             </div>
      //         </div>`
  
      //         menuArea.push(menu)
      //         console.log(btns[i].innerHTML.toLowerCase() !== menuContent[j].category.toLowerCase())
      // }
    }    
        menuParent.innerHTML = menuArea.join("")
    })
  }
});



                            //Code By chatGPT

// document.addEventListener('DOMContentLoaded', () => {
//   var btns = document.querySelectorAll('.btns');
//   var gridItems = document.querySelectorAll('.inner-grid');

  // for (let i = 0; i < btnContent.length; i++) {
  //   btns[i].addEventListener('click', () => {
  //     var menuArea = [];

  //     for (let j = 0; j < gridItems.length; j++) {
  //       if (btns[i].innerHTML.toLowerCase() === 'all' || btns[i].innerHTML.toLowerCase() === menuContent[j].category.toLowerCase()) {
  //         menuArea.push(gridItems[j].outerHTML);
  //       }
  //       console.log(btns[i].innerHTML.toLowerCase() === 'all' || btns[i].innerHTML.toLowerCase() === menuContent[j].category.toLowerCase())
  //     }

  //     menuParent.innerHTML = menuArea.join('');
  //   });
  // }



                      // Practice of code established by Sir


// const menuArray = menuContent.map((menuContent) => {
//   var menu = `<div class="inner-grid">
//         <div class="innerGrid-item1">
//             <img src="${menuContent.img}" alt="" class="innerGrid-img">
//         </div>
//         <div class="innerGrid-item2">
//             <div class="innerGrid-child1">
//                 <h3 class="item-title">${menuContent.heading}</h3>
//                 <p id="price">${menuContent.price}</p>
//             </div>
//             <div class="innerGrid-child2">
//                 <p class="item-content">${menuContent.para}</p>
//             </div>
//         </div>
//     </div>`
    
//     menuArea.push(menu)
    
// })

// menuParent.innerHTML = menuArea.join('')


// const filterFunction = (filter) => {
//   console.log(filter)

//   if (filter === 'All') {
//       menuParent.innerHTML = menuArea.join("")
//   } else {
//       //true
//       const filteredArray = menuContent.filter((menu) => menu.category.toLowerCase() === filter.toLowerCase()).map((menu) => {
//           return `<div class="inner-grid">
//           <div class="innerGrid-item1">
//               <img src="${menu.img}" alt="" class="innerGrid-img">
//           </div>
//           <div class="innerGrid-item2">
//               <div class="innerGrid-child1">
//                   <h3 class="item-title">${menu.heading}</h3>
//                   <p id="price">${menu.price}</p>
//               </div>
//               <div class="innerGrid-child2">
//                   <p class="item-content">${menu.para}</p>
//               </div>
//           </div>
//       </div>`
//       })
//       console.log(filteredArray, "==>>filtered Array")
//       menuParent.innerHTML = filteredArray.join("")
//   }
// }
