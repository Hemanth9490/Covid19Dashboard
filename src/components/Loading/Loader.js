import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const CustomLoader = () => (
  <div>
    <div className="loader-component mt-5 mb-5">
      <Loader
        type="TailSpin"
        className="text-center"
        color="#00BFFF"
        height={50}
        width={50}
      />
    </div>
  </div>
)

export default CustomLoader
