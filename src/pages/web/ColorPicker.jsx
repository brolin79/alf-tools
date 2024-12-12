import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { SketchPicker } from "react-color"
import { CopyForm } from "../../components/uiForms/CopyForm"


export const ColorPickerPage = () => {

    // datos iniciales
    const [colorHex, setColorHex] = useState('#fff');
    const [colorRgb, setColorRgb] = useState('255, 255, 255');


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Escoge tu color favorito 🎨
                </CardLight>

            </div>

            <div className="row mb-3">

                <div className="col-12 d-flex justify-content-center">

                    <SketchPicker
                        color={colorHex}
                        onChange={({ hex, rgb }) => {
                            setColorHex(hex);
                            setColorRgb(`${rgb.r}, ${rgb.g}, ${rgb.b}`);
                        }}
                    />

                </div>

                <div className="col-xl-4 col-sm-12 mt-3">
                    <span className="text-primary ml-1">Muestra:</span>
                    <input className="form-control mt-2" type="text" readOnly style={{ backgroundColor: colorHex }} />
                </div>

                <div className="col-xl-4 col-sm-12 mt-3">
                    <span className="text-primary ml-2">HEX:</span>
                    <CopyForm value={colorHex} name="colorHex" />
                </div>

                <div className="col-xl-4 col-sm-12 mt-3">
                    <span className="text-primary ml-2">RGB:</span>
                    <CopyForm value={colorRgb} name="colorRgb" />
                </div>
            </div>


            <div className="row" >




            </div>


        </MainLayout >
    )
}
