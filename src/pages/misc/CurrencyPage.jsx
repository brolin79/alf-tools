import { useState, useEffect } from "react"
import { MainLayout } from "../../components/layout/MainLayout"
import { Card, CardLight } from "../../components/ui"
import { MiscClass } from "../../classes/miscClass"
import { Spinner, AutocompleteInput } from "../../components/ui"
import { currency } from "../../data/currency"

export const CurrencyPage = () => {

    const miscClass = new MiscClass();

    // datos iniciales
    const [info, setInfo] = useState([]);
    const [currencies, setCurrencies] = useState('');
    const [monedaFrom, setMonedaFrom] = useState('');
    const [monedaTo, setMonedaTo] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currency) {
            setCurrencies(currency);
        } else {
            setError(true);
        }
    }, []);

    // formulario
    const [formValues, setFormValues] = useState({
        from: '',
        to: '',
        amount: ''
    });

    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    // estados para el desplegable
    const handleSelectFrom = async (moneda) => {
        setMonedaFrom(moneda);
    };
    const handleSelectTo = async (moneda) => {
        setMonedaTo(moneda);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const { amount } = formValues;

        const from = monedaFrom.Code;
        const to = monedaTo.Code;

        if (amount < 1 || !from || !to) return;

        setLoading(true);

        try {
            const res = await miscClass.currency(from);
            if (res) {
                const conversion = parseFloat(res.conversion_rates[to].toFixed(2));
                const total = (amount * conversion).toFixed(2);
                setInfo({ from, to, amount, conversion, total });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

    }


    return (

        <MainLayout>

            <div className="row">

                <CardLight >
                    Convertir Monedas de paises 💰
                </CardLight>

            </div>

            <div className="row">

                <div className="col-xl-3 col-sm-12 mb-3">

                    <AutocompleteInput
                        placeholder="Moneda de la que convertir o Pais"
                        name="from"
                        data={currencies}
                        onSelect={handleSelectFrom}
                        displayKey="Name"
                        valueKey="Code"
                        filterFunction={(moneda, value) =>
                            moneda.Name.toLowerCase().includes(value.toLowerCase())
                        }
                    />

                </div>

                <div className="col-xl-3 col-sm-12 mb-3">


                    <AutocompleteInput
                        placeholder="Moneda a la que convertir o Pais"
                        name="to"
                        data={currencies}
                        onSelect={handleSelectTo}
                        displayKey="Name"
                        valueKey="Code"
                        filterFunction={(moneda, value) =>
                            moneda.Name.toLowerCase().includes(value.toLowerCase())
                        }
                    />

                </div>

                <div className="col-xl-2 col-sm-12 mb-3">
                    <input
                        placeholder="Cantidad a convertir"
                        className="form-control"
                        type="number"
                        id="amount"
                        name="amount"
                        onChange={onInputChange}
                    />
                </div>

                <div className="col-xl-1 col-sm-12 d-flex justify-content-center align-items-center mb-3">
                    <button className="btn btn-primary" onClick={onSubmit}>Convertir</button>
                </div>

            </div>

            {loading && <Spinner />}

            {info.total &&
                <div className="row">

                    <Card col={6} >

                        <div className="row align-items-center">
                            <div className="col-xl-5 col-sm-5">
                                <h2 className="text-primary">{info.amount} {info.from}</h2>
                            </div>
                            <div className="col-xl-2 col-sm-2">
                                <span className="mdi mdi-equal" style={{ fontSize: '4rem' }}></span>
                            </div>
                            <div className="col-xl-5 col-sm-5">
                                <h2 className="text-success">{info.total} {info.to}</h2>
                            </div>

                        </div>
                    </Card>

                </div>
            }

        </MainLayout >
    )
}
