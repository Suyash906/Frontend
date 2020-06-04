obj = {name:"Suyash"};
function displayNameAndAsset(asset1, asset2){
    let totalAsset= asset1+asset2;
    console.log(`Name is ${this.name} and asset is ${totalAsset} `);
}

displayNameAndAsset.call(obj,1,2);

// Output :-
// Name is Suyash and asset is 3