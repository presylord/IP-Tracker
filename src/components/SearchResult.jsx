import { useGlobalContext } from "./UseGlobalContext"

const SearchResult = () => {

    const { loading, result } = useGlobalContext()
    const { ip, city, region, country_code, org, timezone } = result





    return <div className="searchresult shadow-sm">
        {loading &&
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
        {!loading && ip && <div className="shadow-lg row border border-primary-subtle mx-auto p-4 ">
            {ip && <div className="col">
                <h6>IP Address</h6>
                <h4>{ip}</h4>
            </div>}
            {city && <div className="col">
                <h6>Location</h6>
                <h4>{`${city}, ${region}, ${country_code}`}</h4>
            </div>}

            {timezone && <div className="col">
                <h6>Timezone</h6>
                <h4>{timezone?.replace('_', ' ')}</h4>
            </div>}
            {org && <div className="col">
                <h6>ISP</h6>
                <h4>{org}</h4>
            </div>}
        </div>

        }
    </div >

}
export default SearchResult