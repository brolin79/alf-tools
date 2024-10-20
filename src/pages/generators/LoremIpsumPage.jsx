import { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { Card, CardLight } from '../../components/ui';
import { Tooltip } from 'react-tooltip';
import { textSample } from '../../data/loremipsumSeeder';


const paragraphsArray = textSample.split('\n');

export const LoremIpsumPage = () => {

    const [paragraphs, setParagraphs] = useState(1);

    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Generar Texto Lorem Ipsum 📝
                </CardLight>

            </div>

            <div className="row">

                <div>
                    <div className="mb-2 d-flex">
                        <label htmlFor="paragraphs" className="form-label">Parrafos: </label>
                        <input
                            type="range"
                            className="form-range ml-2"
                            id="paragraphs"
                            min="1"
                            max={paragraphsArray.length}
                            value={paragraphs}
                            onChange={(e) => setParagraphs(parseInt(e.target.value, 10))}
                        />
                        <span className="badge bg-primary ml-2">{paragraphs}</span>

                        <button 
                            className="btn btn-sm btn-primary anchor-tooltip ml-3" 
                            type="button" 
                            onClick={() => navigator.clipboard.writeText(paragraphsArray.slice(0, paragraphs).join('\n'))}>
                            <i className="mdi mdi-content-copy"></i>
                        </button>

                    </div>

                    {/* Mostrar los párrafos generados dinámicamente */}
                    <div style={{ border: '1px solid #336699', padding: '10px', borderRadius: '5px' }} id='lorem'>
                        {paragraphsArray.slice(0, paragraphs).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <Tooltip anchorSelect=".anchor-tooltip" style={{ backgroundColor: '#4178BC' }} content={"Copiado al portapapeles"} events={["click"]} />

            </div>

        </MainLayout>
    );
}
