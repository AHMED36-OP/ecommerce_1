// export interface Proudect {
// _id: any|string;
//   imageCover:string;
//   title:string;
//   category:{name:string};
//   price:number;
//   ratingsAverage:number
//   description :string
//   name:string
// }

export interface Proudect {
  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  category: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  createdAt: string;
  description: string;
  id: string;
  imageCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  reviews: any[]; // You might want to replace 'any[]' with a more specific type for reviews
  slug: string;
  sold: number;
  subcategory: any[]; // You might want to replace 'any[]' with a more specific type for subcategory
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
