import {SyncLoader} from 'react-spinners'

const LoaderComponent = () => (
  <div
    className="loader-container"
    data-testid="loader"
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <SyncLoader color="#4094EF" size={15} />
  </div>
)

export default LoaderComponent
