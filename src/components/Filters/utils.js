export const extractUniqueSizes = (products) => {
    const sizes = products.flatMap((product) => product.size);
    return [...new Set(sizes)];
  };