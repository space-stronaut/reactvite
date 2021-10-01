import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../feature/counter'

export default function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="flex">
            <Link to="/about" className="bg-blue-400 text-white py-2 px-4 rounded hover:bg-blue-600 focus:bg-blue-700 focus:ring-blue-700">About</Link>
            <span>{count}</span>
            <button className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-600 focus:bg-red-800" onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}