export type Project = {
  number: string
  title: string
  category: string
  status: string
  description: string
  stack: string[]
  highlights: string[]
  story: string
  repo: string
  live?: string
  image?: string
  visual: 'commerce' | 'inventory' | 'production' | 'rental' | 'users'
  featured?: boolean
}

export const projects: Project[] = [
  {
    number: '01', title: 'LogiaFun', category: 'Full-Stack Development', status: 'Deployed',
    description: 'A full-stack e-commerce application featuring customer shopping workflows and an administrative workspace for managing products, inventory and orders.',
    stack: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'EJS'],
    highlights: ['Customer and Google authentication', 'Product and inventory management', 'Order processing and tracking', 'Mock Razorpay checkout, invoices & Excel reports'],
    story: '',
    repo: 'https://github.com/hishyx/logiafun-ecommerce', live: 'https://logiafun-ecommerce.onrender.com',
    image: '/images/logiafun.webp', visual: 'commerce', featured: true,
  },
  {
    number: '02', title: 'Inventory Management API', category: 'Backend Engineering / Architecture', status: 'Completed Study Project',
    description: 'A backend inventory management API featuring role-based access control and asynchronous synchronization of inventory items between MongoDB and PostgreSQL.',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis', 'BullMQ'],
    highlights: ['JWT auth and ADMIN, MANAGER, STAFF roles', 'MongoDB Change Streams and BullMQ', 'Background workers, retries and backfill', 'Repository Pattern, DI and SOLID'],
    story: '',
    repo: 'https://github.com/hishyx/Inventory-Management-API', visual: 'inventory', featured: true,
  },
  {
    number: '03', title: 'Pillarthree Productions', category: 'Client Project / Website Development', status: 'Live',
    description: 'A cinematic website independently designed and delivered for a real production company, with integrated project inquiry submissions.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Google Forms'],
    highlights: ['Client-focused design', 'Google Forms integration', 'Post-delivery maintenance and updates'],
    story: '',
    repo: 'https://github.com/hishyx/Pillarthree-Productions-Page', live: 'https://pillarthreeproductions.com/',
    image: '/images/pillarthree_desktop.webp', visual: 'production', featured: true,
  },
  {
    number: '04', title: 'Vehicle Rental System', category: 'Software Architecture / SOLID', status: 'Study Project',
    description: 'A study project exploring relational booking workflows, domain modelling and SOLID principles.',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'EJS'],
    highlights: [],
    story: '',
    repo: 'https://github.com/hishyx/vehicle-rental-system-sql-SOLID', visual: 'rental',
  },
  {
    number: '05', title: 'User Management System', category: 'Full-Stack Development / MVC', status: 'Study Project',
    description: 'An MVC application featuring session authentication, role-protected routes and administrative CRUD operations.',
    stack: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Handlebars'],
    highlights: [],
    story: '',
    repo: 'https://github.com/hishyx/user-management-node-mongo-js-fulldomain', visual: 'users',
  },
]

