import { Html } from '@react-three/drei';

const CanvasLoader = () => {
  return (
    <Html center>
      <span className="canvas-loader"></span>
      <p style={{ color: '#F1F1F1', marginTop: 20 }}>
        Loading...
      </p>
    </Html>
  );
};

export default CanvasLoader;