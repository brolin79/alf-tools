import { MainLayout } from "../components/layout/MainLayout"
import { CardLight } from "../components/ui"
import { menuData, secciones } from "../data/menuSeeder"


export const HomePage = () => {

    return (

        <MainLayout>

            <div className="row">
                <CardLight>
                    Bienvenido a ALF Tools 🤖
                </CardLight>
            </div>

            {secciones.map(seccion => {
                const items = menuData.filter(item => item.seccion === seccion);
                const color = items[0].color;

                return (
                    <div key={seccion} className="col-md-12 grid-margin">
                        <h5 style={{
                            borderLeft: `4px solid ${color}`,
                            paddingLeft: '10px',
                            marginBottom: '1rem',
                        }}>
                            {seccion}
                        </h5>

                        <div className="row">
                            {items.map(item => (
                                <div key={item.enlace} className="col-xl-3 col-sm-6 grid-margin stretch-card">
                                    <a href={item.enlace} style={{ textDecoration: 'none', width: '100%' }}>
                                        <div
                                            className="card h-100"
                                            style={{
                                                borderTop: `3px solid ${item.color}`,
                                                cursor: 'pointer',
                                                transition: 'transform 0.15s, box-shadow 0.15s',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.transform = 'translateY(-3px)';
                                                e.currentTarget.style.boxShadow = `0 6px 16px rgba(0,0,0,0.12)`;
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '';
                                            }}
                                        >
                                            <div className="card-body text-center d-flex flex-column align-items-center justify-content-center py-4">
                                                <i
                                                    className={item.icono}
                                                    style={{ fontSize: '2.4rem', color: item.color }}
                                                ></i>
                                                <h6 className="mt-3 mb-1 font-weight-bold">{item.titulo}</h6>
                                                <p className="text-muted small mb-0">{item.descripcion}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}

        </MainLayout>
    )
}
