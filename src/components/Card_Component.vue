<template>
  <div class="container">
    <div class="wrapper">
      <div class="image-container">
        <img :src="image" alt="image" />
      </div>
      <div class="text-container">
        <h3>{{ title }}</h3>
        <div class="price-button">
          <h2>{{ price }}</h2>
          <button>{{ buttonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    price: String,
    buttonText: String,
  },

  data() {
    return {}
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  border: 1px solid #9a9999;
  color: black;
  border-radius: 12px;
}

.image-container {
  width: 100%;
  height: 300px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.text-container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
}

.text-container h2,
.text-container h3 {
  font-family: Arial, Helvetica, sans-serif;
}

.text-container h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}

.price-button {
  display: grid;
  grid-auto-flow: column;
  gap: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.price-button h2 {
  font-size: 32px;
  font-weight: 800;
  margin: 0;
}

.price-button button {
  background-color: #000000;
  color: rgb(255, 255, 255);
  padding: 12px 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.3s ease;
}

@media (max-width: 416px) {
  .price-button button {
    padding: 6px 10px;
    font-size: 12px;
  }
  .price-button {
    gap: 20px;
  }
  .price-button h2 {
    font-size: 30px;
  }
  .text-container h3 {
    line-height: 1.5rem;
  }
}
.price-button button:hover {
  background-color: #333;
  color: #fff;
}
</style>
