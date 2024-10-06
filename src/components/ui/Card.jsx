
export const Card = ({ children, col }) => {
    return (

        <div className={`col-${col} grid-margin stretch-card`}>
            <div className="card">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>

    )
}
