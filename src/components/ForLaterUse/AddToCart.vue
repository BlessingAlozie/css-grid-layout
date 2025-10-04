<template>
  <section class="product-grid">
    <main class="pt-5 pb-5">
      <div class="header">
        <!-- Toast -->
        <div class="toast" :class="{ active: toast.show }">
          {{ toast.message }}
        </div>

        <h2 class="center black pt-5 pb-1"><i>Faith & Coaching Essentials</i></h2>
        <p>Empower your journey with tools that inspire, guide, and uplift.</p>
      </div>

      <div class="grid" id="preyer-books">
        <div class="card" v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.title + ' image'" />
          <div class="info">
            <div class="title">
              <h3>{{ product.title }}</h3>
              <span class="price">{{ product.price }}</span>
            </div>

            <div class="controls">
              <div class="increment">
                <button @click="decrement(index)">−</button>
                <span>{{ quantities[index] }}</span>
                <button @click="increment(index)">+</button>
              </div>
              <div class="add">
                <button class="add-button" @click="addToCart(product, quantities[index])">
                  🛒 Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { title: 'EBook: EVOLVE Coaching Cards', price: '$17.97', image: '/book1.webp' },
        { title: 'Special Bundle Offer (3-in-1)', price: '$57.86', image: '/book2.webp' },
        { title: '50 Faith To Rise Prayer Cards', price: '$19.97', image: '/book3.webp' },
        {
          title: '30 Miraculous Prayer – Our Lady of Guadalupe',
          price: '$19.97',
          image: '/book4.webp',
        },
      ],
      quantities: [1, 1, 1, 1],
      toast: {
        message: '',
        show: false,
      },
    }
  },
  methods: {
    increment(index) {
      this.quantities[index]++
    },
    decrement(index) {
      if (this.quantities[index] > 1) this.quantities[index]--
    },
    addToCart(product, quantity) {
      this.toast.message = `${quantity} × ${product.title} added to cart!`
      this.toast.show = true

      setTimeout(() => {
        this.toast.show = false
      }, 3000)
    },
  },
}
</script>

<style scoped>
.product-grid {
  background: #f9f9f9;
  color: #222;
  padding: 40px 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Instrument Serif', serif;
}

.header p {
  font-size: 1.5em;
  color: #555;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  /* height: 85%; */
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 68%;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  border-radius: 8px 8px 0 0;
}

.info {
  padding: 20px;
  padding-bottom: 50px;
}

.info h3 {
  font-size: 1rem;
  margin-bottom: 30px;
  font-weight: 600;
  color: #333;
}

.info p {
  font-size: 1em;
  color: #666;
  margin-bottom: 10px;
}

.title {
  display: grid;
  grid-auto-flow: column;
  gap: 15px;
}

.price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #79dbae;
  display: block;
  margin-bottom: 20px;
}

.controls {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 12px;
}
.increment {
  /* background-color: red; */
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.increment button {
  background-color: transparent !important;
  border: 1px solid #79dbae !important;
}
.increment span {
  font-size: 1.2em;
  font-weight: bold;
  min-width: 24px;
  text-align: center;
}

.controls button {
  padding: 8px 14px;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid #79dbae;
  cursor: pointer;
}

.add-button {
  background-color: #d0f3e2 !important;
  color: black;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
}

.toast {
  position: fixed;
  top: 20px;
  left: -100%;
  background-color: #79dbae;
  color: #012d19;
  padding: 30px 20px;
  font-family: 'Inter', sans-serif;

  border-radius: 8px;
  font-weight: normal;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition:
    left 0.5s ease,
    opacity 0.5s ease;
  opacity: 0;
  z-index: 1000;
}

/* When active, slide in */
.toast.active {
  left: 20px;
  opacity: 1;
}
</style>
