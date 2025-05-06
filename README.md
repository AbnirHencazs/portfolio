# Frontend Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS. This portfolio is designed to showcase your frontend development skills and projects in a professional and engaging way.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎯 Smooth scrolling navigation
- 📝 Project showcase with detailed information
- 📬 Contact form
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

1. Update the profile information in `src/app/page.tsx`:
   - Profile image (replace `/profile.jpg`)
   - Name and title
   - About section content
   - Skills list

### Projects

1. Add your project images to the `public/projects` directory
2. Update the projects array in `src/app/page.tsx` with your project information:
   ```typescript
   const projects = [
     {
       title: 'Your Project',
       description: 'Project description',
       image: '/projects/your-project.jpg',
       technologies: ['React', 'Next.js', 'TypeScript'],
       demoUrl: 'https://your-project.com',
       githubUrl: 'https://github.com/yourusername/your-project',
     },
     // Add more projects...
   ]
   ```

### Styling

The portfolio uses Tailwind CSS for styling. You can customize the colors, spacing, and other design elements by modifying the Tailwind classes in the components.

## Deployment

The easiest way to deploy your portfolio is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
