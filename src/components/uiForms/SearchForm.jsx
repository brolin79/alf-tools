
export const SearchForm = ({ name, placeholder, value, onInputChange}) => {
    return (
        <div className="form-group">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onInputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-sm btn-primary" type="submit">
                        <i className="mdi mdi-magnify"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
