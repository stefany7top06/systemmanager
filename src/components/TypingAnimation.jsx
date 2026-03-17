import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const VARIATIONS = [
  'escalam o seu negócio',
  'facilitam a sua empresa',
  'organizam o seu comércio',
  'administram a sua loja',
  'transformam a sua produção',
  'automatizam seus processos',
  'aceleram seu crescimento',
  'otimizam suas conversões',
]

export default function TypingAnimation() {
  const typedElementRef = useRef(null)
  const typedInstanceRef = useRef(null)

  useEffect(() => {
    typedInstanceRef.current = new Typed(typedElementRef.current, {
      strings: VARIATIONS,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      smartBackspace: false,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: false,
    })

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy()
      }
    }
  }, [])

  return <span ref={typedElementRef} />
}
