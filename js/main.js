/**زبان سایت مطابق با زبان پلتفرم تنظیم میه اگه انگلیسی باشه انگلیسیه و اگه فارسی باشه فارسی میشه**/
const lang=navigator.language;
console.log(lang);


/*nav menu hambrgry* */
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
/**scroll nav */

window.onscroll = function() {
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
};
/**tabs menu* */
const tabs = document.querySelectorAll('.navtab');
const contents = document.querySelectorAll('.content');
const underline = document.querySelector('.underline');

function updateUnderline() {
  const activeTab = document.querySelector('.navtab.active');
  underline.style.width = `${activeTab.offsetWidth}px`;
  underline.style.left = `${activeTab.offsetLeft}px`;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    contents.forEach(content => {
      if (content.id === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    updateUnderline();
  });
});

window.addEventListener('resize', updateUnderline);
updateUnderline();


/*******Tabe-Specials********/
function showTab(collectionId) {
  const tabs = document.querySelectorAll('.tab-specials');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
      tab.classList.remove('active');
  });
  contents.forEach(content => {
      content.classList.add('hidden');
  });

  document.querySelector(`.tab-specials[onclick="showTab('${collectionId}')"]`).classList.add('active');
  document.getElementById(collectionId).classList.remove('hidden');
}
/**gallery modalbox**/
function openModal(src) {
  document.getElementById('modalImage').src = src;
  document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == document.getElementById('myModal')) {
      closeModal();
  }
} 
/**scroll button top*/
window.onscroll = function() {
  const btn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};

// عملکرد دکمه
document.getElementById("scrollBtn").onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};
/******Search Products*******/      
function searchProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const allProducts = document.querySelectorAll('.card-menu');

  allProducts.forEach(product => {
      const productName = product.querySelector('.card-title h4').innerText.toLowerCase();

      if (productName.includes(input)) {
          product.style.display = ''; 
      } else {
          product.style.display = 'none';
      }
  });
}

    /**Section menu products * */
    const products = {
      home: [
          { name: 'کیک هویج', price: '25000 تومان', img: './images/menu/cake.jpg' },
          { name: 'سالاد سزار', price: '35000 تومان', img: './images/menu/greek-salad.jpg' },
          { name: 'غذای دریایی', price: '65000 تومان', img: './images/menu/lobster-bisque.jpg' },
          { name: 'غذای دریایی', price: '65000 تومان', img: './images/menu/lobster-bisque.jpg' }

      ],
      'hot-drink': [
          { name: 'کاپوچینو', price: '15500 تومان', img: './images/menu/cafee2.jpg' },
          { name: 'لاته', price: '25000 تومان', img: './images/menu/Cafe-Au-Lait-004-735x919.webp' },
          { name: 'هات چاکلت', price: '12200 تومان', img: './images/menu/Hot-Chocolate-2-of-5.webp' },
          { name: 'هات چاکلت', price: '12200 تومان', img: './images/menu/Hot-Chocolate-2-of-5.webp' }
      ],
      'ice-drink': [
          { name: 'اسموتی توت فرنگی', price: '15500 تومان', img: './images/menu/smoty-tot.jpg' },
          { name: 'لاته', price: '25000 تومان', img: './images/menu/mohito.webp' },
          { name: 'اسموتی توت', price: '12200 تومان', img: './images/menu/Limeade11504_edit.webp' },
          { name: 'اسموتی توت', price: '12200 تومان', img: './images/menu/Limeade11504_edit.webp' }
      ],
      pizza: [
          { name: 'پپرونی', price: '15500 تومان', img: './images/menu/pizza1.jpg' },
          { name: 'قارچ و گوشت', price: '25000 تومان', img: './images/menu/pizza2.jpg' },
          { name: 'ژانبون', price: '12200 تومان', img: './images/menu/pizza3.jpg' },
          { name: 'ژانبون', price: '12200 تومان', img: './images/menu/pizza3.jpg' }
      ],
      fried: [
          { name: 'مرغ سخاری', price: '15500 تومان', img: './images/menu/fried1.jpeg' },
          { name: 'سیب زمینی سخاری', price: '25000 تومان', img: './images/menu/fried2.jpg' },
          { name: 'پیاز سخاری', price: '12200 تومان', img: './images/menu/fried3.jpg' },
          { name: 'پیاز سخاری', price: '12200 تومان', img: './images/menu/fried3.jpg' }
      ]
  };






  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const itemCount = document.getElementById('item-count'); // عنصر شمارش سبد خرید
  
  function addToCart(item) {
      const existingItem = cartItems.find(cartItem => cartItem.Title === item.Title);
      if (existingItem) {
          existingItem.NuNmber += 1; // اگر محصول وجود دارد، تعداد آن را افزایش دهید
      } else {
          cartItems.push({ ...item, NuNmber: 1 }); // محصول جدید را به سبد خرید اضافه کنید
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); // ذخیره در localStorage
      updateItemCount(); // به‌روزرسانی شمارش سبد خرید
  }
  
  function updateItemCount() {
      const totalCount = cartItems.reduce((sum, item) => sum + item.NuNmber, 0);
      itemCount.textContent = totalCount; // به‌روزرسانی شمارش در رابط کاربری
  }
  

  
    // دسته بندی محصولات
  function showCards(category) {
    // پنهان کردن همه محتوای قبلی
      const contents = document.querySelectorAll('.content');
      contents.forEach(content => {
          content.classList.remove('active');
      });
       // نمایش محتوای مربوط به دسته‌بندی انتخاب شده
      document.getElementById(category).classList.add('active');
      // غیرفعال کردن همه تب‌ها
      const navtabs = document.querySelectorAll('.navtab');
      navtabs.forEach(tab => {
          tab.classList.remove('active');
      });
      // فعال کردن تب مربوط به دسته‌بندی انتخاب شده
      document.querySelector(`.navtab[data-target="${category}"]`).classList.add('active');
      // پاک کردن محتوای قبلی در منوی محصولات
      const menuContainer = document.getElementById(`${category}-menu`);
      menuContainer.innerHTML = '';
     // ایجاد کارت‌های محصولات جدید
      products[category].forEach(product => {
          const card = document.createElement('div');
          card.className = 'card-menu';
          card.innerHTML = `
              <img src="${product.img}" alt="${product.name}" loading="lazy">
              <div class="card-title">
                  <h4>${product.name}</h4>
              </div>
              <div class="price">
                  <span>${product.price}</span>
              </div>
              <div class="btn-cart">
                  <a href="#" class="btn-addToCart">افزودن به سبد خرید</a>
              </div>
          `;
          menuContainer.appendChild(card);
      });
  
      // افزودن رویداد کلیک به دکمه‌های "افزودن به سبد خرید"
      menuContainer.querySelectorAll('.btn-addToCart').forEach(button => {
          button.addEventListener('click', function (event) {
              event.preventDefault(); // جلوگیری از رفتار پیش‌فرض
              const card = button.closest('.card-menu');
              const item = {
                  Images: card.querySelector('img').src,
                  Title: card.querySelector('.card-title h4').innerText,
                  Price: parseInt(card.querySelector('.price span').innerText)
              };
              addToCart(item); // تماس با تابع برای افزودن محصول به سبد خرید
          });
      });
  }
  
  // به‌روزرسانی شمارش سبد خرید در بارگذاری اولیه
  updateItemCount();
  showCards('home');
  


