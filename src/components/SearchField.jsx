import { useGlobalContext } from "./UseGlobalContext"

const SearchContainer = () => {

    const { handleSubmit } = useGlobalContext()

    return (
        <div className="search_header pt-5 " >
            <a href="/" className="text-decoration-none"><h1 className="pb-3 search_title">IP Address Tracker</h1></a>
            <div className="searchfield col-md-6 col-8  mx-auto  ">
                <form onSubmit={handleSubmit} >
                    <div className=" input-group mb-5 ">
                        <input type="text" className="form-control" name="ip" placeholder="Enter IP Address" aria-label="Enter IP Address" aria-describedby="button-addon2" required />
                        <button className="btn btn-dark" type="submit" id="button-addon2">
                            <i className="bi bi-caret-right-fill"></i>
                        </button>
                    </div>
                </form>

            </div>

        </div>

    )
}
export default SearchContainer