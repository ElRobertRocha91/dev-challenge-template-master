import NotFound from "../Error/NotFound";

function PageNotFound(){
    return (
        <div>
            <h1>Page Not found</h1>
            <NotFound />
        </div>
    )
}

export default PageNotFound;