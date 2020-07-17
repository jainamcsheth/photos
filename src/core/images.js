function importAll(r) {
  return r.keys().map(r);
}

const mountainImages = importAll(require.context('../assets/images/Mountain/', false, /\.(png|jpe?g|svg)$/));
const birdImages = importAll(require.context('../assets/images/Bird/', false, /\.(png|jpe?g|svg)$/));
const beachImages = importAll(require.context('../assets/images/Beach/', false, /\.(png|jpe?g|svg)$/));
const foodImages = importAll(require.context('../assets/images/Food/', false, /\.(png|jpe?g|svg)$/));

export { mountainImages, birdImages, beachImages, foodImages };
