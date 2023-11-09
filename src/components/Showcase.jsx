import backgroundImage from '../assets/showcase.png';
import Form from './Form';

const Showcase = () => {
  return (
    <div
      className="bg-cover h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        <h1 className='text-2xl font-bold pt-6 pl-9'>Explore the World!</h1>
        <p className='text-xl pl-12'>Discover countries with a simple name search.</p>
      </div>

      <Form />
    </div>
  )
}

export default Showcase;