<template>
  <div class="wrapper">
    <!-- <main> -->
    <div class="contents mb-3">
      <h2>Blessing</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab earum aspernatur
        voluptates tenetur! Fugiat ex dolorum velit voluptatibus molestias eaque, atque officia
        repellat voluptates, doloribus fuga qui inventore nihil.
      </p>
      <div class="image">
        <img src="/work-station.jpg" alt="" class="pt-3" />
      </div>
    </div>
    <div class="contents">
      <h2>Blessing</h2>
      <div class="image mb-2">
        <img src="/work-station.jpg" alt="" class="pt-3" />
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab earum aspernatur
        voluptates tenetur! Fugiat ex dolorum velit voluptatibus molestias eaque, atque officia
        repellat voluptates, doloribus fuga qui inventore nihil.
      </p>
    </div>
    <div class="contents">
      <div class="image mb-2">
        <img src="/work-station.jpg" alt="" class="pt-3" />
      </div>
      <h2>Blessing</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab earum aspernatur
        voluptates tenetur! Fugiat ex dolorum velit voluptatibus molestias eaque, atque officia
        repellat voluptates, doloribus fuga qui inventore nihil.
      </p>
    </div>
    <!-- </main> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
p {
  color: var(--color-dark);
}
h2,
h2 {
  color: var(--color-light);
}
button {
  background-color: var(--color-primary) !important;
}
button:hover {
  background-color: var(--color-hover) !important;
}

.wrapper {
  display: grid;
  grid-auto-flow: column;
  width: 95%;
  margin: 20px auto;
  gap: 2rem;
}
@media (max-width: 768px) {
  .wrapper {
    grid-auto-flow: row;
  }
}
img {
  width: 100%;
  height: 100%;
}


</style>
