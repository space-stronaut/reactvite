import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="flex">
            <Link to="/about" className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-700 focus:ring-blue-700">About</Link>
            Home
        </div>
    )
}