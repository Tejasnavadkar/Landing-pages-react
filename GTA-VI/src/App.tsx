import './App.css'

function App() {


  return (
    <>
      <div className='svg bg-black fixed top-0 left-0 z-[100] w-full h-screen flex justify-center items-center overflow-hidden '>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%" // x-axis
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"  // text is going to big from middle
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
               
              </g>
            </mask>
          </defs>
          <image
            href="../public/bg.png"  // this img will masked by id viMask (mask) vi appeare in upper side and img is behind the VI text
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
    </>
  )
}

export default App
