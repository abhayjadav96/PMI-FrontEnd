function DisplayData(){

    fetch("http://localhost:8000/products")

    .then((response) =>  response.json())
    .then((data)=>{

        console.log(data)

        data.forEach((product,index) => {
            
            let tr=document.createElement("tr");

            let numTD=document.createElement("td");
            numTD.textContent=index+1;
            tr.appendChild(numTD);

            let nameTD=document.createElement("td");
            nameTD.textContent=product.name;
            tr.appendChild(nameTD);

            let priceTD=document.createElement("td");
            priceTD.textContent=product.price;
            tr.appendChild(priceTD);

            let quantityTD=document.createElement("td");
            quantityTD.textContent=product.Quantity;
            tr.appendChild(quantityTD);


            let iconTD=document.createElement("td");

            let editicon=document.createElement("i");
            editicon.className='fa-solid fa-pen-to-square';
            iconTD.appendChild(editicon);

            let rmicon=document.createElement("i");
            rmicon.className='fa-solid fa-trash';
            rmicon.addEventListener("click",function(){

                DeleteData(product.id);
            })            

            iconTD.appendChild(rmicon);
            

            tr.appendChild(iconTD);

            document.getElementById('products').appendChild(tr);

        });
    })
    .catch((err)=>{

        console.log(err)
    })
}

DisplayData();


function DeleteData(id){

    fetch("http://localhost:8000/products?id="+ id, {
    method:"DELETE"
})

    .then((response)=>response.json())

    .then((message)=>{

        console.log(message)
    })
    .catch((err)=>{
        console.log(err)
    })
}