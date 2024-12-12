
import { Tooltip } from 'react-tooltip';

export const CopyForm = ({ value, name }) => {
    return (
        <div className="input-group col-xl-12 col-sm-12 mt-2">
            <input className="form-control text-center" type="text" value={value} name={name} id={name} readOnly />
            <div className="input-group-append">
                <button className="btn btn-sm btn-primary anchor-copy" type="button" onClick={() => navigator.clipboard.writeText(value)}>
                    <i className="mdi mdi-content-copy"></i>
                </button>
            </div>
            <Tooltip anchorSelect=".anchor-copy" style={{ backgroundColor: '#4178BC' }} content={"Copiado al portapapeles"} events={["click"]} />
        </div>
    )
}
