import { Provider } from "react-redux"
import { AlfRouter } from "./router/AlfRouter"
import { store } from "./store/store"


export const AlfApp = () => {
    return (
        <>
            <Provider store={store}>
                <AlfRouter />
            </Provider>
        </>
    )
}
