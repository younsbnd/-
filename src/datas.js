import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { render } from "@testing-library/react";
import "./App.scss";

let rechartsData = [
  {
    name: "Jan",
    sales: 4000,
  },
  {
    name: "Feb",
    sales: 3000,
  },
  {
    name: "Mar",
    sales: 2000,
  },
  {
    name: "Apr",
    sales: 2780,
  },
  {
    name: "May",
    sales: 1890,
  },
  {
    name: "Jun",
    sales: 2390,
  },
  {
    name: "Jul",
    sales: 3490,
  },
  {
    name: "Aug",
    sales: 3690,
  },
  {
    name: "Sep",
    sales: 3000,
  },
  {
    name: "Oct",
    sales: 3190,
  },
  {
    name: "Nov",
    sales: 4490,
  },
  {
    name: "Dec",
    sales: 5000,
  },
];

let newMembers = [
  {
    id: 1,
    name: "younes dadipoor",
    job: "Software Engineer",
    img: "./images/younes.jpg",
  },
  {
    id: 2,
    name: "ali zaimkar",
    job: "Web Developer",
    img: "./images/Mohammad.jpg",
  },
  {
    id: 3,
    name: "javad najafi",
    job: "detailer",
    img: "./images/javad.jpg",
  },
  {
    id: 4,
    name: "emad salari",
    job: "SEO Expert",
    img: "./images/reza.jpg",
  },
];

let features = [
  {
    id: 1,
    title: "Analytics",
    money: "$2,000",
    rate: "-2.3",
    icon: <ArrowDownward color="error" />,
    caption: "Compared to last month",
  },
  {
    id: 2,
    title: "Sales",
    money: "$3,000",
    rate: "-1.3",
    icon: <ArrowDownward color="error" />,
    caption: "Compared to last month",
  },
  {
    id: 3,
    title: "Cost",
    money: "$4,000",
    rate: "+2.3",
    icon: <ArrowUpward color="success" />,
    caption: "Compared to last month",
  },
];

const transactions = [
  {
    id: 1,
    name: "emad salari",
    date: "12 May 2024",
    amount: "$122.00",
    status: "Approved",
    img: "./images/reza.jpg",
  },
  {
    id: 2,
    name: "javad najafi",
    date: "24 jun 2023",
    amount: "$103.00",
    status: "Declined",
    img: "./images/javad.jpg",
  },
  {
    id: 3,
    name: "ali zaimkar",
    date: "2 Feb 2023",
    amount: "$112.00",
    status: "Pending",
    img: "./images/Mohammad.jpg",
  },
  {
    id: 4,
    name: "younes dadipoor",
    date: "2 jun 2021",
    amount: "$96.00",
    status: "Approved",
    img: "./images/younes.jpg",
  },
];

const userRows = [
  {
    id: 1,
    username: "younes dadipoor",
    email: "younes@yahoo.com",
    avatar: "./images/javad.jpg",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Ali Zaimkar",
    email: "ali@yahoo.com",
    avatar: "./images/Mohammad.jpg",
    status: "active",
    transaction: "$190.00",
  },
  {
    id: 3,
    username: "Emad Salari",
    email: "emad@yahoo.com",
    avatar: "./images/reza.jpg",
    status: "active",
    transaction: "$320.00",
  },
];

const productsData = [
  {
    id: 1,
    name: "Apple Airpods",
    img: "./images/airpods.jpg",
    price: "$89.99",
    stock: "7"
  },
  {
    id: 2,
    name: "Apple Watch",
    img: "./images/watch.jpg",
    price: "$599.99",
    stock: "7"
  },
  {
    id: 3,
    name: "Iphone",
    img: "./images/iphone.jpg",
    price: "$999.99",
    stock: "7"
  },
  {
    id: 4,
    name: "Macbook",
    img: "./images/macbook.jpg",
    price: "$1999.99",
    stock: "7"
  },
  {
    id: 5,
    name: "Apple Airpods",
    img: "./images/airpods.jpg",
    price: "$89.99",
    stock: "7"
  },
  {
    id: 6,
    name: "Apple Watch",
    img: "./images/watch.jpg",
    price: "$599.99",
    stock: "7"
  },
  {
    id: 7,
    name: "Iphone",
    img: "./images/iphone.jpg",
    price: "$999.99",
    stock: "7"
  },
  {
    id: 8,
    name: "Macbook",
    img: "./images/macbook.jpg",
    price: "$1999.99",
    stock: "7"
  },
  {
    id: 9,
    name: "Apple Airpods",
    img: "./images/airpods.jpg",
    price: "$89.99",
    stock: "7"
  },
  {
    id: 10,
    name: "Apple Watch",
    img: "./images/watch.jpg",
    price: "$599.99",
    stock: "7"
  },
  {
    id: 11,
    name: "Iphone",
    img: "./images/iphone.jpg",
    price: "$999.99",
    stock: "7"
  },
  {
    id: 12,
    name: "Macbook",
    img: "./images/macbook.jpg",
    price: "$1999.99",
    stock: "7"
  },
];

export {
  rechartsData,
  newMembers,
  features,
  transactions,
  userRows,
  productsData,
};
