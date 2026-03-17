import { useEffect, useRef, useState } from 'react'

const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`

export default function TubesBackground({ children, className = '', enableClickInteraction = true }) {
  const canvasRef = useRef(null)
  const tubesRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let mounted = true

    const init = async () => {
      if (!canvasRef.current) return

      try {
        const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
        if (!mounted) return

        const TubesCursor = module.default

        tubesRef.current = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ['#a78bfa', '#8b5cf6', '#d946ef'],
            lights: {
              intensity: 180,
              colors: ['#c4b5fd', '#a855f7', '#9333ea', '#e879f9'],
            },
          },
        })

        setIsLoaded(true)
      } catch (error) {
        console.error('Failed to load tubes background:', error)
      }
    }

    init()

    return () => {
      mounted = false
      tubesRef.current = null
    }
  }, [])

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current?.tubes) return

    const colors = [randomColor(), randomColor(), randomColor()]
    const lightColors = [randomColor(), randomColor(), randomColor(), randomColor()]

    tubesRef.current.tubes.setColors(colors)
    tubesRef.current.tubes.setLightsColors(lightColors)
  }

  return (
    <div
      className={`relative w-full h-full min-h-[560px] overflow-hidden ${className}`}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.22),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(217,70,239,0.18),transparent_45%),linear-gradient(160deg,#06040f_0%,#120a24_50%,#05030c_100%)]" />
      {!isLoaded && <div className="absolute inset-0 bg-[#080512]" />}

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}
