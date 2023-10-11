import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultPage } from './views'
import styles from './App.module.scss'

export const App = () => {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<DefaultPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
