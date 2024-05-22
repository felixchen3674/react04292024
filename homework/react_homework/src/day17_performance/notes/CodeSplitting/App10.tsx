function App10(){
    return(
        <Routes>
            <Route path="/" element={<NavWrapper />}>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}

function NavWrapper(){
    return(
        <>
            <nav>
                <Link to="/"></Link>
                <Link to="/sotre">Store</Link>
                <Link to="/about">About</Link>
            </nav>
        </>
    )
}

default export App10