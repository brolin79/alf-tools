import { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { Card, CardLight } from '../../components/ui';
import { Tooltip } from 'react-tooltip';


export const PasswordPage = () => {

    // datos iniciales
    const [token, setToken] = useState('');
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [length, setLength] = useState(64);

    // funciones
    const generateToken = () => {
        const characters = [];
        if (uppercase) characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        if (lowercase) characters.push(...'abcdefghijklmnopqrstuvwxyz');
        if (numbers) characters.push(...'0123456789');
        if (symbols) characters.push(...'!@#$*?-=');

        let token = '';
        for (let i = 0; i < length; i++) {
            token += characters[Math.floor(Math.random() * characters.length)];
        }
        setToken(token);
    };

    const generateUUID = () => {
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        setToken(uuid);
    };

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Generar contraseña / token 🔐
                </CardLight>

            </div>

            <div className="row">

                <div className='col-xl-2 col-sm-12 ml-3 form-check'>
                    <label className='form-check-label' htmlFor="uppercase">Mayúsculas (ABC...)
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="uppercase"
                            checked={uppercase}
                            onChange={() => setUppercase(!uppercase)}
                        />
                        <i className="input-helper"></i>
                    </label>
                </div>

                <div className='col-xl-2 col-sm-12 ml-3 form-check'>
                    <label className='form-check-label' htmlFor="lowercase">Minúsculas (abc...)
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="lowercase"
                            checked={lowercase}
                            onChange={() => setLowercase(!lowercase)}
                        />
                        <i className="input-helper"></i>
                    </label>
                </div>

                <div className='col-xl-2 col-sm-12 ml-3 form-check'>
                    <label className='form-check-label' htmlFor="numbers">Números (123...)
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="numbers"
                            checked={numbers}
                            onChange={() => setNumbers(!numbers)}
                        />
                        <i className="input-helper"></i>
                    </label>
                </div>

                <div className='col-xl-2 col-sm-12 ml-3 form-check'>
                    <label className='form-check-label' htmlFor="symbols">Simbolos (!-@...)
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="symbols"
                            checked={symbols}
                            onChange={() => setSymbols(!symbols)}
                        />
                        <i className="input-helper"></i>
                    </label>
                </div>

                <div className='col-xl-3 col-sm-12 form-inline'>
                    <label className='form-check-label mr-3' htmlFor="symbols">Tamaño</label>
                    <input
                        className="form-control"
                        type="number"
                        id="length"
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                    />
                </div>

                <div className='col-xl-12 col-sm-12 text-center mt-4'>
                    <button className="btn btn-primary" onClick={generateToken}>Generar Contraseña</button>
                    <button className="btn btn-secondary ml-3" onClick={generateUUID}>Generar UUID</button>
                </div>

                <div className="input-group col-xl-12 col-sm-12 mt-4">
                    <input className="form-control text-center" type="text" value={token} readOnly />
                    <div className="input-group-append">
                        <button className="btn btn-sm btn-primary anchor-tooltip" type="button" onClick={() => navigator.clipboard.writeText(token)}>
                            <i className="mdi mdi-content-copy"></i>
                        </button>
                    </div>
                </div>

                <Tooltip anchorSelect=".anchor-tooltip" style={{ backgroundColor: '#4178BC' }} content={"Copiado al portapapeles"} events={["click"]} />

            </div>

        </MainLayout>
    );
}
