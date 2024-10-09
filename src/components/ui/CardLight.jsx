
export const CardLight = ({ children }) => {
    return (

        <div className="col-xl-12 col-sm-12 grid-margin stretch-card">
            <div className="card corona-gradient-card">
                <div className="card-body py-0 px-0 px-sm-3">
                    <div className="row d-flex justify-content-center">
                        <h4 className="mb-2 mt-2 text-center">{children}</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}
