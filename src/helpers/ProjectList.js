import ArtsMovies from '../assets/ArtsMovies.jpg'
import PrayersTimingApp from '../assets/Prayers-Timing-App.png'

export const projectList = [
    {
        image: ArtsMovies,
        name: 'ArtsMovies',
        description: 'ArtsMovies is a web application developed using Node.js, Express.js and MongoDB. It allows users to perform CRUD operations on movies or articles, providing a simple and intuitive interface for managing content.',
        githubLink: 'https://github.com/tahamario/artsMovies',
        demoLink: 'https://artsmovies.onrender.com/',
        skills: ['HTML', 'CSS', 'JavaScript', 'EJS', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB']
    }, {
        image: PrayersTimingApp,
        name: 'Prayers Timing App',
        description: 'This is a prayer timing web application developed using React.js, Vite, Material-UI, and the Aladhan API. It provides users with accurate prayer times based on their geographical location and selected calculation method.',
        githubLink: 'https://github.com/tahamario/prayers-timings-react',
        demoLink: 'https://prayers-timings-react.vercel.app/',
        skills: ['HTML', 'CSS', 'JavaScript', 'React.js', ' Vite', 'Moment.js', 'Material-UI', 'Aladhan API']
    },
]