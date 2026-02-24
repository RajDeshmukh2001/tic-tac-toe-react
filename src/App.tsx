import './App.css'
import Square from './components/Square'

function App() {
  return (
    <main className='w-full h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl text-purple-900 font-extrabold'>Tic Tac Toe - React</h1>

      <Square />
    </main>
  )
}

export default App
