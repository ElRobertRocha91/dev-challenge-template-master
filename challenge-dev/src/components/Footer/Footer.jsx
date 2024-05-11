function Footer() {
    return (
        <footer className='bg-green-500 text-center p-2'>
            <h2 className='text-2xl font-bold text-white pb-1'>My App Rick & Morty</h2>
            <div className="flex justify-center items-center space-x-3 m-2">
                <a href="https://github.com/ElRobertRocha91" target="_blank" rel="noopener noreferrer">
                    <span className="p-2 inline-flex items-center text-2xl rounded-full bg-green-900 text-white hover:bg-lime-950 hover:text-green-500">
                        <ion-icon name="logo-github"></ion-icon>
                    </span>
                </a>
                <p className="italic text-lime-950">
                    @Copyright Roberto Rocha
                </p>
                <a href="https://www.linkedin.com/in/roberto-esteban-rocha/" target="_blank" rel="noopener noreferrer">
                    <span className="p-2 inline-flex items-center text-2xl rounded-full bg-green-900 text-white hover:bg-lime-950 hover:text-green-500">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </span>
                </a>
            </div>
        </footer>
    )
}

export default Footer;