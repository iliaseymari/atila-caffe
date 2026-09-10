/**
 * ATILA COFFEE — Master Catalog & Application Logic
 */

// 28 Verified Unique Products
const catalogProducts = [
  // ☕ COFFEE DRINKS (13 Items)
  {
    id: 'd1',
    category: 'coffee-drinks',
    featured: true,
    name: 'Single Espresso',
    price: 3.80,
    desc: 'Extracted from single-origin Ethiopian beans with fruit-forward notes.',
    img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd2',
    category: 'coffee-drinks',
    featured: false,
    name: 'Double Espresso',
    price: 4.50,
    desc: 'Double shot shot with rich crema and balanced dark cocoa undertones.',
    img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd3',
    category: 'coffee-drinks',
    featured: false,
    name: 'Caffè Americano',
    price: 4.80,
    desc: 'Espresso diluted with hot filtered water for a clean, nuanced cup.',
    img: 'https://i.pinimg.com/736x/0e/52/30/0e52308b27b6b9ea83aa371c0b01a5a8.jpg'
  },
  {
    id: 'd4',
    category: 'coffee-drinks',
    featured: true,
    name: 'Traditional Cappuccino',
    price: 5.40,
    desc: 'Equal parts espresso, steamed milk, and velvety microfoam.',
    img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd5',
    category: 'coffee-drinks',
    featured: false,
    name: 'Caffè Latte',
    price: 5.60,
    desc: 'Silky steamed milk poured over double espresso with subtle art.',
    img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd6',
    category: 'coffee-drinks',
    featured: false,
    name: 'Madagascar Vanilla Latte',
    price: 6.20,
    desc: 'Infused with real organic Madagascar vanilla bean syrup.',
    img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd7',
    category: 'coffee-drinks',
    featured: false,
    name: 'Salted Caramel Latte',
    price: 6.20,
    desc: 'House-made caramel with Maldon sea salt and espresso.',
    img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd8',
    category: 'coffee-drinks',
    featured: false,
    name: 'Valrhona Mocha',
    price: 6.50,
    desc: '70% Valrhona dark chocolate melted into espresso and steamed milk.',
    img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd9',
    category: 'coffee-drinks',
    featured: true,
    name: 'Flat White',
    price: 5.50,
    desc: 'Double ristretto with micro-textured milk for an intense coffee flavor.',
    img: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd10',
    category: 'coffee-drinks',
    featured: false,
    name: 'Spanish Cortado',
    price: 4.90,
    desc: 'Equal measure of espresso and warm milk to cut the acidity.',
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd11',
    category: 'coffee-drinks',
    featured: false,
    name: '20-Hour Cold Brew',
    price: 5.80,
    desc: 'Slow steeped Colombian beans served over clear slow-melting ice.',
    img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd12',
    category: 'coffee-drinks',
    featured: false,
    name: 'Iced Oat Milk Latte',
    price: 6.20,
    desc: 'Double espresso with chilled organic oat milk over ice.',
    img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'd13',
    category: 'coffee-drinks',
    featured: false,
    name: 'Hand Pour V60 Filter',
    price: 6.50,
    desc: 'Single-origin pour over highlighting delicate acidity and floral aromas.',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85'
  },

  // 🍰 BAKERY (8 Items)
  {
    id: 'b1',
    category: 'bakery',
    featured: true,
    name: 'Butter Croissant',
    price: 4.50,
    desc: 'Flaky French pastry baked daily with cultured Normandy butter.',
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'b2',
    category: 'bakery',
    featured: false,
    name: 'Pain au Chocolat',
    price: 5.00,
    desc: 'Layered croissant dough filled with dark Belgian chocolate bars.',
    img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'b3',
    category: 'bakery',
    featured: false,
    name: 'Cardamom Cinnamon Roll',
    price: 5.20,
    desc: 'Swedish-style brioche rolled with organic cinnamon and cardamom.',
    img: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'b4',
    category: 'bakery',
    featured: false,
    name: 'Blueberry Lemon Muffin',
    price: 4.20,
    desc: 'Packed with wild blueberries and topped with fresh lemon crumble.',
    img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'b5',
    category: 'bakery',
    featured: false,
    name: 'Basque Cheesecake',
    price: 7.00,
    desc: 'Caramelized burnt crust with a soft, custard-like center.',
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'b6',
    category: 'bakery',
    featured: false,
    name: 'Dark Chocolate Fudge Cake',
    price: 6.80,
    desc: '70% Valrhona cocoa sponge layer cake.',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'b7',
    category: 'bakery',
    featured: false,
    name: 'Classic Tiramisu',
    price: 7.20,
    desc: 'Espresso-soaked ladyfingers with whipped mascarpone cream.',
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'b8',
    category: 'bakery',
    featured: false,
    name: 'Sea Salt Chocolate Cookie',
    price: 3.80,
    desc: 'Chewy dark chocolate chip cookie sprinkled with flakey sea salt.',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85'
  },

  // 🫘 COFFEE PRODUCTS (7 Items)
  {
    id: 'p1',
    category: 'coffee-beans',
    featured: true,
    name: 'Ethiopia Yirgacheffe Beans (250g)',
    price: 22.00,
    desc: 'Washed Arabica process. Jasmine florals, peach, and citrus sweetness.',
    img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'p2',
    category: 'coffee-beans',
    featured: false,
    name: 'Guatemala Huehuetenango (250g)',
    price: 20.00,
    desc: 'Bourbon varietal with cocoa, green apple acidity, and smooth body.',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'p3',
    category: 'coffee-beans',
    featured: false,
    name: 'Atila Dark Roast Espresso Blend (500g)',
    price: 34.00,
    desc: 'Deep roasted blend featuring heavy dark chocolate and toasted walnut notes.',
    img: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'p4',
    category: 'coffee-beans',
    featured: false,
    name: 'Nordic Medium Roast Blend (250g)',
    price: 21.00,
    desc: 'Balanced everyday roast with berry sweetness and clean finish.',
    img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'p5',
    category: 'coffee-beans',
    featured: false,
    name: 'Fresh Ground Specialty Coffee (250g)',
    price: 19.50,
    desc: 'Ground to order for your specific home brewing equipment.',
    img: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'p6',
    category: 'coffee-beans',
    featured: false,
    name: 'Micro-Lot Instant Specialty Sticks',
    price: 18.00,
    desc: 'Freeze-dried single-origin coffee for instant specialty brew anywhere.',
    img: 'https://i.pinimg.com/736x/b9/48/f3/b948f30139da624f81b1fba75b386d81.jpg'
  },
  {
    id: 'p7',
    category: 'coffee-beans',
    featured: false,
    name: 'Atila Roaster Gift Box Set',
    price: 65.00,
    desc: 'Includes 3 sample bean bags (100g each) and custom ceramic tasting cup.',
    img: 'https://i.pinimg.com/736x/a9/36/35/a9363501c5b4ed7138d779972b3277f5.jpg'
  },

  // ⚙️ EQUIPMENT (ONLY Hardware & Tools - 7 Items)
  {
    id: 'e1',
    category: 'equipment',
    featured: true,
    name: 'Pro Dual-Boiler Espresso Machine',
    price: 1890.00,
    desc: 'Commercial-grade dual boiler with PID temperature stability and rotary pump.',
    img: 'https://i.pinimg.com/736x/48/38/2e/48382ecc526af348e3bff049d61383cd.jpg'
  },
  {
    id: 'e2',
    category: 'equipment',
    featured: false,
    name: 'Compact Home Espresso Machine',
    price: 680.00,
    desc: 'Precision thermocoil system with integrated steam wand for milk foam.',
    img: 'https://i.pinimg.com/736x/e0/6f/8d/e06f8dd4a0164fee183bae68d17207a7.jpg'
  },
  {
    id: 'e3',
    category: 'equipment',
    featured: false,
    name: 'Precision Flat Burr Coffee Grinder',
    price: 320.00,
    desc: '64mm hardened steel burrs with 250 micro-stepped grind settings.',
    img: 'https://i.pinimg.com/736x/6b/b6/13/6bb6138ff4602a7498af3b4d79086d57.jpg'
  },
  {
    id: 'e4',
    category: 'equipment',
    featured: false,
    name: 'Stainless Steel French Press (800ml)',
    price: 48.00,
    desc: 'Double-wall vacuum insulated body preserves water heat during brewing.',
    img: 'https://i.pinimg.com/1200x/0c/a8/13/0ca8132eb18346e7a7c79bc1973aac15.jpg'
  },
  {
    id: 'e5',
    category: 'equipment',
    featured: false,
    name: 'V60 Glass Dripper & Server Set',
    price: 52.00,
    desc: 'Borosilicate heatproof glass dripper with olive wood base ring.',
    img: 'https://i.pinimg.com/736x/eb/32/6d/eb326da7d592495e02a311b2cfcd62c4.jpg'
  },
  {
    id: 'e6',
    category: 'equipment',
    featured: false,
    name: 'Automatic Stainless Milk Frother',
    price: 65.00,
    desc: 'Induction heating frother for hot, cold, and dense milk foam.',
    img: 'https://i.pinimg.com/736x/c6/f2/06/c6f2061e0914654e48e87ab5a77daa33.jpg'
  },
  {
    id: 'e7',
    category: 'equipment',
    featured: false,
    name: 'Precision Coffee Scale with Timer',
    price: 42.00,
    desc: '0.1g accuracy sensor with integrated auto-brew timer.',
    img: 'https://i.pinimg.com/1200x/51/99/7f/51997fda5e368093805fc1048c3f0e71.jpg'
  }
];

let activeBag = [];

// Generate Card Markup
function generateCardHtml(item) {
  return `
    <div class="product-card" data-category="${item.category}">
      <div class="product-thumb-wrap">
        <img src="${item.img}" alt="${item.name}" class="product-thumb" loading="lazy">
      </div>
      <div class="product-info">
        <div class="product-header-row">
          <h3 class="product-title">${item.name}</h3>
          <span class="product-cost">$${item.price.toFixed(2)}</span>
        </div>
        <p class="product-text">${item.desc}</p>
        <button class="btn-add-cart" onclick="handleAddToCart('${item.id}')">Add to Order</button>
      </div>
    </div>
  `;
}

// Render Products into Grids
function initGrids() {
  const mainGrid = document.getElementById('mainCatalogGrid');
  const featuredGrid = document.getElementById('featuredGrid');

  if (mainGrid) {
    mainGrid.innerHTML = catalogProducts.map(p => generateCardHtml(p)).join('');
  }

  if (featuredGrid) {
    const featuredItems = catalogProducts.filter(p => p.featured);
    featuredGrid.innerHTML = featuredItems.map(p => generateCardHtml(p)).join('');
  }
}

// Category Filter Engine
function initFilterSystem() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetFilter = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('#mainCatalogGrid .product-card');

      cards.forEach(card => {
        if (targetFilter === 'all' || card.getAttribute('data-category') === targetFilter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Drawer Navigation System
function initNavigation() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navDrawer = document.getElementById('navDrawer');
  const navOverlay = document.getElementById('navOverlay');
  const closeNavBtn = document.getElementById('closeNavBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const header = document.querySelector('.header');

  function openNav() {
    navDrawer.classList.add('active');
    navOverlay.classList.add('active');
  }

  function closeNav() {
    navDrawer.classList.remove('active');
    navOverlay.classList.remove('active');
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openNav);
  if (closeNavBtn) closeNavBtn.addEventListener('click', closeNav);
  if (navOverlay) navOverlay.addEventListener('click', closeNav);

  drawerLinks.forEach(link => link.addEventListener('click', closeNav));

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Shopping Bag Mechanics
function handleAddToCart(id) {
  const product = catalogProducts.find(p => p.id === id);
  if (!product) return;

  const existing = activeBag.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    activeBag.push({ ...product, qty: 1 });
  }

  updateBagUI();
  openBagDrawer();
}

function updateQuantity(id, delta) {
  const item = activeBag.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    activeBag = activeBag.filter(i => i.id !== id);
  }

  updateBagUI();
}

function updateBagUI() {
  const container = document.getElementById('bagItemsContainer');
  const badgeCount = document.getElementById('cartCountBadge');
  const bagTotal = document.getElementById('bagTotal');

  const totalItemCount = activeBag.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = activeBag.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (badgeCount) badgeCount.textContent = totalItemCount;
  if (bagTotal) bagTotal.textContent = `$${totalPrice.toFixed(2)}`;

  if (container) {
    if (activeBag.length === 0) {
      container.innerHTML = '<p class="text-center" style="color:#BBAAA0; margin-top:40px;">Your bag is empty.</p>';
    } else {
      container.innerHTML = activeBag.map(item => `
        <div class="bag-item">
          <img src="${item.img}" alt="${item.name}" class="bag-item-img">
          <div class="bag-item-details">
            <h4 class="bag-item-title">${item.name}</h4>
            <span class="bag-item-price">$${(item.price * item.qty).toFixed(2)}</span>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

function openBagDrawer() {
  document.getElementById('bagDrawer').classList.add('active');
  document.getElementById('bagOverlay').classList.add('active');
}

function closeBagDrawer() {
  document.getElementById('bagDrawer').classList.remove('active');
  document.getElementById('bagOverlay').classList.remove('active');
}

function initBagListeners() {
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const closeBagBtn = document.getElementById('closeBagBtn');
  const bagOverlay = document.getElementById('bagOverlay');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openBagDrawer);
  if (closeBagBtn) closeBagBtn.addEventListener('click', closeBagDrawer);
  if (bagOverlay) bagOverlay.addEventListener('click', closeBagDrawer);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (activeBag.length === 0) {
        alert('Please select items before checking out.');
        return;
      }
      closeBagDrawer();
      
      const totalItemCount = activeBag.reduce((sum, item) => sum + item.qty, 0);
      const totalPrice = activeBag.reduce((sum, item) => sum + (item.price * item.qty), 0);
      
      document.getElementById('modalItemCount').textContent = totalItemCount;
      document.getElementById('modalTotalPrice').textContent = `$${totalPrice.toFixed(2)}`;
      
      checkoutModal.classList.add('active');
    });
  }

  if (closeCheckoutBtn) {
    closeCheckoutBtn.addEventListener('click', () => {
      checkoutModal.classList.remove('active');
    });
  }
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  alert('Thank you for your order. We have received your confirmation.');
  activeBag = [];
  updateBagUI();
  document.getElementById('checkoutModal').classList.remove('active');
}

// Scroll Reveal Observer
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
}

// Dismiss Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    if (preloader) preloader.classList.add('hidden');
  }, 400);
});

// DOM Load Init
document.addEventListener('DOMContentLoaded', () => {
  initGrids();
  initFilterSystem();
  initNavigation();
  initBagListeners();
  initScrollAnimations();
});