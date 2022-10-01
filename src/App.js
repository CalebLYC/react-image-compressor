import './App.css';
import Compressor from './components/Compressor'

function App() {
    return (
        <div className='App'>
            <h1>Compresser vos images</h1>
            <Compressor />
            <p className='reference'>Fait par <a href="https://caleblyc.github.io/shopingCoin" target='_blank' rel='noreferrer'>Caleb Lyc</a></p>
        </div>
    )
}

export default App;