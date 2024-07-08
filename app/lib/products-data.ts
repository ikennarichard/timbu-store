export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: "micronized creatine",
    price: 250,
    image: "/images/micronized-creatine.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed perferendis. Ullam id nobis quaerat impedit, rem ipsum vitae necessitatibus.",
    category: "creatine",
  },
  {
    id: '2',
    name: "creatine hcl",
    price: 150,
    image: "/images/creatine-hcl.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed perferendis. Ullam id nobis quaerat impedit, rem ipsum vitae necessitatibus.",
    category: "creatine",
  },
  {
    id: '3',
    name: "creatine monohydrate",
    price: 300,
    image: "/images/creatine-monohydrate.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed perferendis. Ullam id nobis quaerat impedit, rem ipsum vitae necessitatibus.",
    category: "creatine",
  },
  {
    id: '4',
    name: "muscletech",
    price: 199,
    image: "/images/muscle-tech.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed perferendis. Ullam id nobis quaerat impedit, rem ipsum vitae necessitatibus.",
    category: "creatine",
  },
  {
    id: '5',
    name: "pro test",
    price: 250,
    image: "/images/pro-test.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed perferendis. Ullam id nobis quaerat impedit, rem ipsum vitae necessitatibus.",
    category: "creatine",
  },
  {
    id: '6',
    name: "whey",
    price: 250,
    image: "/images/whey.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed perferendis. Ullam id nobis quaerat impedit, rem ipsum vitae necessitatibus.",
    category: "protein",
  },
  {
    id: '7',
    name: "mass gainer",
    price: 250,
    image: "/images/mass-gainer.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed perferendis. Ullam id nobis quaerat impedit, rem ipsum vitae necessitatibus.",
    category: "protein",
  },
  {
    id: '8',
    name: "your brand",
    price: 250,
    image: "/images/your-brand.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed perferendis. Ullam id nobis quaerat impedit, rem ipsum vitae necessitatibus.",
    category: "protein",
  },
  
];
