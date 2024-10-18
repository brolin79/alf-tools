
export const CardNews = ({ color, icon, titulo, texto, fecha, enlace }) => {
    return (
        <div className="preview-item border-bottom">
            <div className="preview-thumbnail">
                <div className={`preview-icon bg-${color}`}>
                    <i className={`mdi mdi-${icon}`}></i>
                </div>
            </div>
            <div className="preview-item-content d-sm-flex flex-grow">
                <div className="flex-grow">
                    <h6 className="preview-subject"><a href={ enlace }>{ titulo }</a></h6>
                    <p className="text-muted mb-0">{ texto }</p>
                </div>
                <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                    <p className="text-muted mb-0">{ fecha }</p>
                </div>
            </div>
        </div>
    )
}
