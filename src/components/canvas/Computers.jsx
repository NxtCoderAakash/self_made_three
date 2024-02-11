import React,{Suspense,useEffect,useState,useRef, Fragment} from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader"


const Computers = ({isMobile}) => {
  const computer=useGLTF("./desktop_pc/scene.gltf")
  const computerRef = React.useRef();
  const [rotationY,setRotationY]=useState(0.005)
  const lastTimeRef = useRef(0);
  const [flagReverse,setFlagReverse]=useState(false)
  
  useFrame((state) => {
    
    const currentTime = state.clock.getElapsedTime();
    const deltaTime = currentTime - lastTimeRef.current;
    if (deltaTime >= 0.05) {
      setRotationY((prevRotationY) => {
        if(prevRotationY>0.5){
          setFlagReverse(true)
        }
        else if(prevRotationY<-0.5){
          setFlagReverse(false)
        }
        if(flagReverse){
          return prevRotationY - 0.05
        }
        return prevRotationY + 0.05 }
        );
      console.log("inside")

      // Update the last time reference
      lastTimeRef.current = currentTime;
      computerRef.current.rotation.y = rotationY;
    }
  });
  return (
    <Fragment className="">
    <mesh ref={computerRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.5 : 0.75}
      position={[0,-3.25,-1.5]}
      rotation={[-0.01,0.01,-0.1]}
      />
    </mesh>
    </Fragment>
  )
}

const ComputersCanvas=()=>{
  const [isMobile,setIsMobile]=useState(false)
  useEffect(()=>{
   const mediaQuery=window.matchMedia(`(max-width:500px)`);
   setIsMobile(mediaQuery.matches) 

   const handleMediaQueryChange=(event)=>{
    setIsMobile(event.matches)
   }
   mediaQuery.addEventListener("change",handleMediaQueryChange)

   return ()=>{
    mediaQuery.removeEventListener("change",handleMediaQueryChange)
   }
  },[])


  return(
    <Canvas 
    frameloop='always' 
    shadows 
    camera={{position:[20,3,5],fov:25}}
    gl={{preserverDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all/>


    </Canvas>
  )
}

export default ComputersCanvas