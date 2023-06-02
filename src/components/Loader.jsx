import { loader } from '../assets';


const Loader = ({ title }) => ( // title is a prop
  <div className='w-full flex justify-center items-center flex-column'>
    <img src={loader} alt='loader' className='w-32 h-32 object-contain' />
    <h1 className='font-bold text-2xl text-white mt-2'>
      {/* the logic is  if there is no title prop given, it will render the second option */}
      {title || 'Loading...'}
    </h1>
  </div>
)


export default Loader;
