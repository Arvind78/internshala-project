// Create header element
document.addEventListener('DOMContentLoaded', function() {
  const header = document.createElement('header');
  // Create first-header div
  const firstHeaderDiv = document.createElement('div');
  firstHeaderDiv.classList.add('first-header');
  // Create search-option div
  const searchOptionDiv = document.createElement('div');
  searchOptionDiv.classList.add('search-option');
  searchOptionDiv.id = 'section1';
  // Create logo div
  const logoDiv = document.createElement('div');
  logoDiv.classList.add('logo');
  const logoLink = document.createElement('a');
  logoLink.href = '/';
  const appStoreIcon = document.createElement('i');
  appStoreIcon.classList.add('fa-brands', 'fa-app-store-ios');
  const spanText = document.createElement('span');
  spanText.textContent = 'E-commerce';
  logoLink.appendChild(appStoreIcon);
  logoLink.appendChild(spanText);
  logoDiv.appendChild(logoLink);
  // Create searchber div
  const searchberDiv = document.createElement('div');
  searchberDiv.classList.add('searchber');
  const inputField = document.createElement('input');
  inputField.setAttribute('id', 'searchInput');
  inputField.setAttribute('placeholder', 'Search product category name Ex. men - women - kid');
  const searchButton = document.createElement('button');
  searchButton.setAttribute('onclick', 'searchData()')
  searchButton.textContent = 'Search';
  searchberDiv.appendChild(inputField);
  searchberDiv.appendChild(searchButton);
  // Create login-cart div
  const loginCartDiv = document.createElement('div');
  loginCartDiv.classList.add('login-cart');
  const loginLink = document.createElement('a');
  loginLink.href = 'login.html';
  loginLink.id = 'login';
  loginLink.textContent = 'Login';
  const cartDiv = document.createElement('div');
  cartDiv.classList.add('cart');
  const cartLink = document.createElement('a');
  cartLink.href = 'cart.html';
  const cartIcon = document.createElement('i');
  cartIcon.classList.add('fa-solid', 'fa-cart-shopping');
  const spanCart = document.createElement('span');
  spanCart.textContent = `${(JSON.parse(localStorage.getItem("product")).length) || 0}`;
  cartLink.appendChild(cartIcon);
  cartLink.appendChild(spanCart);
  cartDiv.appendChild(cartLink);
  loginCartDiv.appendChild(loginLink);
  loginCartDiv.appendChild(cartDiv);
  searchOptionDiv.appendChild(logoDiv);
  searchOptionDiv.appendChild(searchberDiv);
  searchOptionDiv.appendChild(loginCartDiv);
  // Create toggle div
  const toggleDiv = document.createElement('div');
  toggleDiv.classList.add('toggle');
  const openIcon = document.createElement('i');
  openIcon.classList.add('fa-solid', 'fa-bars', 'open');
  openIcon.id = 'open';
  openIcon.setAttribute("onclick", 'toggleOpen()')
  // openIcon.onclick = ; // Assuming toggleOpen is defined somewhere
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-regular', 'fa-rectangle-xmark');
  closeIcon.id = 'close';
  closeIcon.setAttribute("onclick", 'toggleClose()')
  // closeIcon.onclick = 'toggleClose()'; // Assuming toggleClose is defined somewhere
  toggleDiv.appendChild(openIcon);
  toggleDiv.appendChild(closeIcon);
  firstHeaderDiv.appendChild(searchOptionDiv);
  firstHeaderDiv.appendChild(toggleDiv);
  // Create second-header div
  const secondHeaderDiv = document.createElement('div');
  secondHeaderDiv.classList.add('second-header');
  secondHeaderDiv.id = 'section2';
  const homeLink = document.createElement('a');
  homeLink.href = '/';
  homeLink.textContent = 'Home';
  const allProductsLink = document.createElement('a');
  allProductsLink.href = '/product.html';
  allProductsLink.textContent = 'All Products';
  // Add other elements similarly...
  secondHeaderDiv.appendChild(homeLink);
  secondHeaderDiv.appendChild(allProductsLink);
  // Append other child elements as needed...
  header.appendChild(firstHeaderDiv);
  header.appendChild(secondHeaderDiv);
  document.body.insertBefore(header, document.body.firstChild);
})
//section 2 remaining elements
document.addEventListener('DOMContentLoaded', function() {
  const secondHeaderDiv = document.getElementById('section2');

  function createDropdown(text, items) {
      const dropdown = document.createElement('div');
      dropdown.classList.add('dropdown');
      const toggle = document.createElement('a');
      toggle.classList.add('dropdown-toggle');
      toggle.href = '#';
      toggle.dataset.bsToggle = 'dropdown';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = text;
      const menu = document.createElement('ul');
      menu.classList.add('dropdown-menu', 'mt-2', 'p-0');
      menu.setAttribute('aria-labelledby', 'dropdownMenuLink');
      items.forEach(itemText => {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.classList.add('dropdown-item');
          link.href = `/product.html?category=${text}&subCategory=${itemText}`; // Replace with actual href if needed
          link.textContent = itemText;
          listItem.appendChild(link);
          menu.appendChild(listItem);
      });
      dropdown.appendChild(toggle);
      dropdown.appendChild(menu);
      return dropdown;
  }
  // Create dropdowns and append to the document
  const womenDropdown = createDropdown('Women', ['All product', 'Dresses', 'Pants', 'Skirts']);
  const menDropdown = createDropdown('Men', ['All product', 'Shirts', 'Pants', 'Hoodies']);
  const kidsLink = document.createElement('a');
  kidsLink.href = "/product.html?category=kid&subCategory=All product"; // Replace with actual href if needed
  kidsLink.textContent = 'Kids';
  const contactLink = document.createElement('a');
  contactLink.href = '/contact.html';
  contactLink.textContent = 'Contact';
  secondHeaderDiv.appendChild(womenDropdown)
  secondHeaderDiv.appendChild(menDropdown)
  secondHeaderDiv.appendChild(kidsLink)
  secondHeaderDiv.appendChild(contactLink)
})