obj = {name:"Suyash"};
function displayNameAndAsset(asset1, asset2){
    let totalAsset= asset1+asset2;
    console.log(`Name is ${this.name} and asset is ${totalAsset} `);
}

const bindmethod = displayNameAndAsset.bind(obj,1,2);

// console.dir(displayNameAndAsset.bind(obj));

bindmethod() // Name is Suyash and asset is 3



const book = {
    title: 'Brave New World',
    author: 'Aldous Huxley',
  }
  function summary() {
    console.log(`${this.title} was written by ${this.author}.`)
  }

  const braveNewWorldSummary = summary.bind(book)

  braveNewWorldSummary() // Brave New World was written by Aldous Huxley.
  
  const book2 = {
    title: '1984',
    author: 'George Orwell',
  }
  
  braveNewWorldSummary.bind(book2)
  
  braveNewWorldSummary() // Brave New World was written by Aldous Huxley.


/* Output :-

Name is Suyash and asset is 3 
Brave New World was written by Aldous Huxley.
Brave New World was written by Aldous Huxley.

*/