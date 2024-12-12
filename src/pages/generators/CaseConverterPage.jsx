import { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { Card, CardLight } from '../../components/ui';
import { CopyForm } from '../../components/uiForms/CopyForm';


export const CaseConverterPage = () => {

    const [inputString, setInputString] = useState('');
    const [lowercase, setLowercase] = useState('');
    const [uppercase, setUppercase] = useState('');
    const [camelcase, setCamelcase] = useState('');
    const [capitalcase, setCapitalcase] = useState('');
    const [dotcase, setDotcase] = useState('');
    const [paramcase, setParamcase] = useState('');
    const [pathcase, setPathcase] = useState('');
    const [snakecase, setSnakecase] = useState('');


    const handleInputChange = (event) => {
        setInputString(event.target.value);
        setLowercase(event.target.value.toLowerCase());
        setUppercase(event.target.value.toUpperCase());
        setCamelcase(
            event.target.value
                .split(/\s+/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join('')
        );
        setCapitalcase(
            event.target.value
                .split(/\s+/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
        );
        setDotcase(event.target.value.toLowerCase().replace(/\s/g, '.'));
        setParamcase(event.target.value.toLowerCase().replace(/\s/g, '-'));
        setPathcase(event.target.value.toLowerCase().replace(/\s/g, '/'));
        setSnakecase(event.target.value.toLowerCase().replace(/\s/g, '_'));
    };


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Cambia el formato de tu texto 🔠
                </CardLight>

            </div>

            <div className="row">


                <div className='col-xl-12 col-sm-12 mb-4 form-inline'>
                    <label className='form-check-label mr-3' htmlFor="symbols">Tu texto:</label>
                    <div className="input-group col-xl-12 col-sm-12 mt-2">
                        <input 
                            style={{ backgroundColor: '#375a7f' }} 
                            className="form-control text-center" 
                            type="text" 
                            value={inputString} 
                            id="inputString" 
                            onChange={handleInputChange}  
                        />
                    </div>
                </div>

                <div className='col-xl-6 col-sm-12 form-inline mb-1'>
                    <label htmlFor="lowercase">Minúsculas:</label>
                    <CopyForm value={lowercase} name="lowercase" />
                </div>

                <div className='col-xl-6 col-sm-12 form-inline mb-1'>
                    <label htmlFor="uppercase">Mayúsculas:</label>
                    <CopyForm value={uppercase} name="uppercase" />
                </div>

                <div className='col-xl-6 col-sm-12 form-inline mb-1'>
                    <label htmlFor="camelcase">Camelcase:</label>
                    <CopyForm value={camelcase} name="camelcase" />
                </div>

                <div className='col-xl-6 col-sm-12 form-inline mb-1'>
                    <label htmlFor="capitalcase">Capitalcase:</label>
                    <CopyForm value={capitalcase} name="capitalcase" />
                </div>

                <div className='col-xl-6 col-sm-12 form-inline mb-1'>
                    <label htmlFor="dotcase">Dotcase:</label>
                    <CopyForm value={dotcase} name="dotcase" />
                </div>

                <div className='col-xl-6 col-sm-12 form-inline mb-1'>
                    <label htmlFor="paramcase">Paramcase:</label>
                    <CopyForm value={paramcase} name="paramcase" />
                </div>

                <div className='col-xl-6 col-sm-12 form-inline mb-1'>
                    <label htmlFor="pathcase">Pathcase:</label>
                    <CopyForm value={pathcase} name="pathcase" />
                </div>

                <div className='col-xl-6 col-sm-12 form-inline mb-1'>
                    <label htmlFor="snakecase">Snakecase:</label>
                    <CopyForm value={snakecase} name="snakecase" />
                </div>

            </div>

        </MainLayout>
    );
}
