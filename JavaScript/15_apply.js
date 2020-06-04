obj = {name:"Suyash"};
function displayNameAndAsset(asset1, asset2){
    let totalAsset= asset1+asset2;
    console.log(`Name is ${this.name} and asset is ${totalAsset} `);
}

let assetArray = [1,2];
displayNameAndAsset.apply(obj,assetArray);

// Output :-
// Name is Suyash and asset is 3