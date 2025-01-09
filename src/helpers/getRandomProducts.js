export function getRandomProducts(products, itemsToShow) {
    if (!products || products.length === 0) {
      return [];
    }

    const shuffledProducts = [...products];
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
    }

      return shuffledProducts.slice(0, Math.min(itemsToShow, shuffledProducts.length));
  }