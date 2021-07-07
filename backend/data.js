import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Ala",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      /*_id: '1',*/
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      /*_id: '2',*/
      name: "Adidas Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 4,
      numReviews: 5,
      description: "high quality product",
    },
    {
      /* _id: '3',*/
      name: "Puma leggin",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 80,
      countInStock: 0,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      /*_id: '4',*/
      name: "Balenciaga sleeks",
      category: "Shoes",
      image: "/images/p4.jpg",
      price: 250,
      countInStock: 15,
      brand: "Balenciaga",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      /*_id: '5',*/
      name: "Gucci Slippers",
      category: "Slippers",
      image: "/images/p5.jpg",
      price: 300,
      countInStock: 50,
      brand: "Gucci",
      rating: 4.5,
      numReviews: 100,
      description: "high quality product",
    },
    {
      /*_id: '6',*/
      name: "GymShark stringer",
      category: "Shirts",
      image: "/images/p6.jpg",
      price: 45,
      countInStock: 0,
      brand: "GymShark",
      rating: 4.5,
      numReviews: 30,
      description: "high quality product",
    },
  ],
};
export default data;
