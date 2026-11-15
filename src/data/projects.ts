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
    number: '01', title: 'LogiaFun', category: 'Full-stack development', status: 'Deployed',
    description: 'My first full-fledged application: a complete shopping experience with a customer storefront and an administration workspace.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JavaScript'],
    highlights: ['Product and order management', 'Google authentication', 'Mock Razorpay payment integration', 'Delivery status, invoices & Excel reports'],
    story: 'Built over roughly three months, LogiaFun taught me how features connect across a real application. Shipping before planning the underlying structure led to significant refactoring; that experience changed how I approach data models, application flows, and implementation order.',
    repo: 'https://github.com/hishyx/logiafun-ecommerce', live: 'https://logiafun-ecommerce.onrender.com',
    image: '/images/logiafun.webp', visual: 'commerce', featured: true,
  },
  {
    number: '02', title: 'Inventory Management API', category: 'Backend engineering / Architecture', status: 'Completed study project',
    description: 'A backend application exploring clean architecture, SOLID principles, and repository-based design across an inventory workflow.',
    stack: ['Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'PostgreSQL', 'BullMQ'],
    highlights: ['ADMIN, MANAGER & STAFF roles', 'MongoDB Change Streams', 'Inventory item sync to PostgreSQL', 'BullMQ retries & backfill', 'Repository pattern & dependency injection'],
    story: 'This project pushed me past controller-first thinking. Separating responsibilities and reasoning through asynchronous synchronization made dependency direction and failure handling concrete. Synchronization is focused on inventory items.',
    repo: 'https://github.com/hishyx/Inventory-Management-API', visual: 'inventory', featured: true,
  },
  {
    number: '03', title: 'Pillarthree Productions', category: 'Client project / Website development', status: 'Live',
    description: 'My first real client project: a cinematic web presence for a production company to showcase its work.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Google Forms'],
    highlights: ['Designed around real client requirements', 'Project content connected to Google Forms', 'Ongoing feedback and bug fixes'],
    story: 'Instead of adding a custom backend for project updates, I connected the site to Google Forms so the client could submit information without managing an application. A small integration kept the workflow practical.',
    repo: 'https://github.com/hishyx/Pillarthree-Productions-Page', live: 'https://pillarthreeproductions.com/',
    image: '/images/pillarthree_desktop.webp', visual: 'production', featured: true,
  },
  {
    number: '04', title: 'Vehicle Rental System', category: 'Software architecture / SOLID', status: 'Educational project',
    description: 'A vehicle rental workflow developed to practise object-oriented design, domain entities, and SOLID principles.',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'EJS'],
    highlights: ['Booking logic', 'Domain-focused entities', 'Relational data with Prisma'],
    story: 'A supporting project where I worked through how business rules and domain responsibilities can be represented in a small application.',
    repo: 'https://github.com/hishyx/vehicle-rental-system-sql-SOLID', visual: 'rental',
  },
  {
    number: '05', title: 'User Management System', category: 'Full-stack development / MVC', status: 'Early practical project',
    description: 'An independently built application covering both sides of an MVC user management workflow.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Handlebars'],
    highlights: ['Registration and login', 'Admin and user panels', 'Create, edit & delete users', 'Session auth and role-protected routes'],
    story: 'An early practical project that helped me connect MVC structure with authentication and protected administration workflows.',
    repo: 'https://github.com/hishyx/user-management-node-mongo-js-fulldomain', visual: 'users',
  },
]

