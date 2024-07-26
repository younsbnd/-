import { ArrowDownward,ArrowUpward } from "@mui/icons-material";

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
    name: "Mohammad Amin",
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
    name: "reza salari",
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

export { rechartsData, newMembers, features };
