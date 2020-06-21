const db = firebase.firestore();

const ImageRow = document.querySelector('.row-img');


db.collection('Hospital').orderBy('ProductName').get().then(snapshot => {
    snapshot.docs.forEach((doc) => {
        Display(doc.data());
    });
}).catch(err => {
    console.log(err);
});
//<div>Name: ${location.name || location.FORMATTED} </div>
const Display = (details) => {
    let html = `
                <div class="col-lg-4 col-md-6 col-sm-6" >
                    <div class="single-grid-product mb-40">
                        <div class="product-image">
                            <a href="single-product.html">
                                <img src=${details.url} alt=${details.name} class="img-fluid zoom">
                            </a>
                        </div>
                    <div class="product-content">
                        <h3 class="title"> 
                        <a href="single-product.html">${details.ProductName}</a></h3>
                        <p class="product-price"><span
                            class="discounted-price">${details.ProductCode}</span>
                        </p>
                    </div>
                    </div>
                </div>
                
            `;
    //addImages(details.name);
    ImageRow.innerHTML += html;
}

/*
let divByname = document.querySelector('.' + refName[0] + refName[1])
var aTag = document.createElement('a');

aTag.innerHTML = `<img src=${url} alt"">`;
aTag.target = '_blank';
aTag.href = url;
aTag.title = 'Image'
console.log(aTag)
divByname.appendChild(aTag);
*/