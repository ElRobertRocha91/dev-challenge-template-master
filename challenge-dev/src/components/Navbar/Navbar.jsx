import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='bg-green-500'>
            <div className='max-m-7xl mx-auto py-2 px-10 text-white'>
                <div className='flex items-center justify-between h-10'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <h1 className='text-2xl font-bold'>My App</h1>
                        </div>
                    </div>
                    <div className='block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <NavLink exact="true" to="/" className='text-lime-950 hover:text-lime-200'>Home</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;