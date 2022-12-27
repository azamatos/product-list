interface Rating {
  rate: number;
  count: number;
}

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

interface ProductSlice {
  products: Product[];
  bucketProducts: number[];
  favouriteProducts: boolean[];
}
