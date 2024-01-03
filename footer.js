// Create a new footer element
document.addEventListener('DOMContentLoaded', function() {
setTimeout(()=>{
let footer = document.createElement("footer");
// Set the class attribute of the footer element
footer.setAttribute("class", "bg-dark text-white py-4");
// Create a new div element for the container
let container = document.createElement("div");
container.setAttribute("class", "container");
let row = document.createElement("div");
row.setAttribute("class", "row");
let col1 = document.createElement("div");
col1.setAttribute("class", "col-lg-3 col-md-6 mb-4 mb-lg-0");
// Set the innerHTML of the column element
col1.innerHTML = `
  <h5 class="text-uppercase">About Us</h5>
  <p class="font-small text-muted">We are a leading e-commerce website that offers a wide range of products for women, men, and kids.</p>
  <ul class="list-inline mt-4">
    <li class="list-inline-item"><a href="#" class="text-white"><i class="fab fa-facebook-f"></i></a></li>
    <li class="list-inline-item"><a href="#" class="text-white"><i class="fab fa-twitter"></i></a></li>
    <li class="list-inline-item"><a href="#" class="text-white"><i class="fab fa-instagram"></i></a></li>
    <li class="list-inline-item"><a href="#" class="text-white"><i class="fab fa-linkedin"></i></a></li>
  </ul>
`;
// Append the column element to the row element
row.appendChild(col1);
// Column 2: Women Section
let col2 = document.createElement("div");
col2.setAttribute("class", "col-lg-3 col-md-6 mb-4 mb-lg-0");
col2.innerHTML = `
  <h5 class="text-uppercase">Women</h5>
  <ul class="list-unstyled mb-0">
    <li class="mb-2"><a href="#" class="text-muted">Dresses</a></li>
    <li class="mb-2"><a href="#" class="text-muted">Tops</a></li>
    <li class="mb-2"><a href="#" class="text-muted">Skirts</a></li>
  </ul>
`;
row.appendChild(col2);
// Column 3: Men Section
let col3 = document.createElement("div");
col3.setAttribute("class", "col-lg-3 col-md-6 mb-4 mb-lg-0");
col3.innerHTML = `
  <h5 class="text-uppercase">Men</h5>
  <ul class="list-unstyled mb-0">
    <li class="mb-2"><a href="#" class="text-muted">Shirts</a></li>
    <li class="mb-2"><a href="#" class="text-muted">Pants</a></li>
    <li class="mb-2"><a href="#" class="text-muted">Hoodies</a></li>
  </ul>
`;
row.appendChild(col3);
// Column 4: Kids Section
let col4 = document.createElement("div");
col4.setAttribute("class", "col-lg-3 col-md-6 mb-4 mb-lg-0");
col4.innerHTML = `
  <h5 class="text-uppercase">Kids</h5>
  <ul class="list-unstyled mb-0">
    <li class="mb-2"><a href="#" class="text-muted">Shoes</a></li>
  </ul>
`;
row.appendChild(col4);
// Append the row element to the container element
container.appendChild(row);
let bottom = document.createElement("div");
bottom.setAttribute("class", "text-center py-3 border-top border-white");
bottom.innerHTML = `
  <p class="mb-0">© E-commerce 2020-23. All rights reserved.</p>
`;
container.appendChild(bottom);
footer.appendChild(container);
// Select the body element
let body = document.querySelector("body");
// Append the footer element to the body element
body.appendChild(footer);
},3000)
})