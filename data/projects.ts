import { IProject } from '../interfaces';
import { PortfolioCategories } from '../interfaces/enums';

export const projects: Array<IProject> = [
  {
    id: 9,
    title: 'Hotel Booking Platform',
    technologies: ['Next.js', 'MongoDB', 'TailwindCSS'],
    image: '/hotel.png',
    types: [PortfolioCategories.NextJS],
    links: {
      demo: 'https://a-frame-hotel.vercel.app'
    },
    description: `Developed a modern hotel booking platform with a fully integrated admin dashboard for seamless 
    management. The website allows users to browse accommodations, check availability, make reservations, and order 
    additional services or gift cards. Key features include a real-time booking calendar, automated Telegram 
    notifications, and a customizable admin panel to manage bookings, orders, and site content. Optimized for 
    SEO and high performance, ensuring a smooth user experience and efficient operations.`,
    date: '2024'
  },
  {
    id: 4,
    title: 'Excel',
    technologies: ['Pure JavaScript'],
    image: '/excel.jpeg',
    types: [PortfolioCategories.PureJS],
    links: {
      repo: 'https://github.com/edward-dev26/excel',
      demo: 'https://edward-dev26.github.io/excel'
    },
    description: `This is replica on Google Sheets. That application allows create excel table and store it in
      local storage. Inside table user can format his text in cell and resize rows and columns if needed. Also 
      user can select multiple multiple cells if needed. And finally this app can calculate math expressions
      inside "formula" field.`,
    date: '2020'
  },
  {
    id: 3,
    title: 'Chat',
    technologies: ['NodeJS', 'Websocket', 'SocketIO', 'Express'],
    image: '/chat.jpeg',
    types: [PortfolioCategories.NodeJS],
    links: {
      repo: 'https://github.com/edward-dev26/chat-app'
    },
    description: `This is real time web application provides communication for users. User can create
      new room or he can join existing room by it name. Inside room user can send messages and everyone in
      that room will receive messages immediately. That feature provided by WebSockets. Also user can share
      his location to all users in room.`,
    date: '2021'
  },
  {
    id: 5,
    title: 'Task Manager API',
    technologies: ['NodeJS', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    image: '/task_manager.jpeg',
    types: [PortfolioCategories.NodeJS],
    links: {
      repo: 'https://github.com/edward-dev26/task-manager-api'
    },
    description: `This is my first backend project on NodeJS. That application allows user to create and
      manage his tasks. That service has great security provided by Json Web Token (JWT) technology. Also
      in this project implemented email sending provided by SendGrid service.`,
    date: '2021'
  },
  {
    id: 6,
    title: 'Whether',
    technologies: ['NodeJS', 'Express', 'Handlebars'],
    image: '/whether.jpeg',
    types: [PortfolioCategories.NodeJS],
    links: {
      repo: 'https://github.com/edward-dev26/weather'
    },
    description: `This is whether application allows users to know the weather in all places in the world. That 
      services uses MapBox service to process searched place and WhetherStack service to get whether forecast for
      needed place.`,
    date: '2021'
  },
  {
    id: 7,
    title: 'Posts',
    technologies: [
      'Angular',
      'NodeJS',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'MaterialUI'
    ],
    image: '/posts.jpeg',
    types: [PortfolioCategories.NodeJS, PortfolioCategories.Angular],
    links: {
      repo: 'https://github.com/edward-dev26/mean-course'
    },
    description: `That application developed on MEAN stack. That service allows users to see great posts. Also
      users can create and manage their own posts. All that functionality protected very reliable security system
      provided by Json Web Token (JWT) technology.`,
    date: '2021'
  },
  {
    id: 2,
    title: 'Social Network',
    technologies: [
      'React',
      'Redux',
      'TypeScript',
      'Formik',
      'Ant Design',
      'Axios',
      'Reselect'
    ],
    image: '/social_network.jpeg',
    types: [PortfolioCategories.React],
    links: {
      repo: 'https://github.com/edward-dev26/social-network',
      api: 'https://social-network.samuraijs.com/'
    },
    description: `This is my Social Network builded on SamuraiJS API. It is my first big project in my 
      role as Web developer. While I was developing this project I also studied programming. A lot of 
      time has passed since then, but I am constantly improving this project. So I want to show you how 
      it all began.`,
    date: '2019'
  },
  {
    id: 8,
    title: 'Good News',
    technologies: ['React', 'Redux', 'Redux Saga', 'Redux Form', 'FormatJS'],
    image: '/good_news.jpeg',
    types: [PortfolioCategories.React],
    links: {
      repo: 'https://github.com/edward-dev26/good-news'
    },
    description: `This is news feed. That application allows users to check news what happens around the word.
      Each user has his own account where he can chose subscription on that service. Also that application has 
      localization and supports two languages Russian and English.`,
    date: '2020'
  }
];
