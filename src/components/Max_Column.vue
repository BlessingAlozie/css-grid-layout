<template>
  <div class="wrapper">
    <main class="pt-4 pb-4">
      <div class="content">
        <Card_Component
          v-for="(card_detail, value) in card_details"
          :key="value"
          :image="card_detail.image"
          :title="card_detail.title"
          :price="card_detail.price"
          :button-text="card_detail.button_text"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Card_Component from './Card_Component.vue'
export default {
  components: {
    Card_Component,
  },

  data() {
    return {
      card_details: [
        { image: '/red-perfume.jpg', title: 'Sweet Rose', price: '$40', button_text: 'Buy Now' },
        { image: '/red-perfume.jpg', title: 'Sweet Rose', price: '$40', button_text: 'Buy Now' },
        { image: '/red-perfume.jpg', title: 'Sweet Rose', price: '$40', button_text: 'Buy Now' },
        { image: '/red-perfume.jpg', title: 'Sweet Rose', price: '$40', button_text: 'Buy Now' },
        { image: '/red-perfume.jpg', title: 'Sweet Rose', price: '$40', button_text: 'Buy Now' },
        { image: '/red-perfume.jpg', title: 'Sweet Rose', price: '$40', button_text: 'Buy Now' },

      ],
    }
  },
}
</script>

<style scoped>
.wrapper {
  background-color: #ffffff;
}
.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(180px, calc(100% / 4), 1fr)));
  gap: 30px;
  margin: 0 auto;
  width: 100%;
}
</style>
