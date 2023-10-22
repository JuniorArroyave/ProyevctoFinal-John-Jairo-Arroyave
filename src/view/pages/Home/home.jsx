import { Carrusel } from '../../components/Carrusel/Carrusel'
import './home.css'

export const Home = () => {
  return (
    <>

      <div className='container'>
        <div className='content'>
          <h1 className='content__title'>!Aqui va un titulo¡</h1>
          <p className='content__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptas natus neque laudantium dignissimos quidem quis quaerat quisquam quo enim temporibus iure cupiditate eaque eos, excepturi, possimus repellendus odio numquam.</p>
        </div>

        <div className='carrusel'>
          <Carrusel />
        </div>
      </div>

    </>
  )
}