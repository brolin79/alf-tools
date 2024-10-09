
export const Card = ({ children, col }) => {
    return (

        <div className={`col-xl-${col} col-sm-12 grid-margin stretch-card`}>
            <div className="card">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>

    )
}
