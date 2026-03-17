import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'

const makeSlot = (index, distX, distY, total) => ({
  x: index * distX,
  y: -index * distY,
  z: -index * distX * 1.5,
  zIndex: total - index,
})

const alphaForSlot = (slotIndex) => Math.max(0.58, 1 - slotIndex * 0.12)

const placeNow = (el, slot, skew, slotIndex) => {
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    autoAlpha: alphaForSlot(slotIndex),
    force3D: true,
  })
}

export default function CardSwap({
  cards,
  width = '100%',
  height = '100%',
  cardDistance = 42,
  verticalDistance = 44,
  delay = 4500,
  pauseOnHover = true,
  skewAmount = 4,
  easing = 'elastic',
  onCardClick,
}) {
  const cardElementsRef = useRef([])
  const order = useRef(Array.from({ length: cards.length }, (_, index) => index))
  const tlRef = useRef(null)
  const intervalRef = useRef(0)
  const containerRef = useRef(null)
  const clickSwapRef = useRef(() => {})

  const config = useMemo(
    () =>
      easing === 'elastic'
        ? {
            ease: 'elastic.out(0.6,0.9)',
            durDrop: 1.8,
            durMove: 1.8,
            durReturn: 1.8,
            promoteOverlap: 0.85,
            returnDelay: 0.06,
          }
        : {
            ease: 'power1.inOut',
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          },
    [easing]
  )

  useEffect(() => {
    const total = cards.length
    order.current = Array.from({ length: total }, (_, index) => index)
    cardElementsRef.current = Array.from({ length: total }, (_, index) => cardElementsRef.current[index] ?? null)

    const placeByOrder = () => {
      order.current.forEach((cardIndex, slotIndex) => {
        const el = cardElementsRef.current[cardIndex]
        if (!el) return
        placeNow(el, makeSlot(slotIndex, cardDistance, verticalDistance, total), skewAmount, slotIndex)
      })
    }

    placeByOrder()

    const swap = () => {
      if (order.current.length < 2) return

      const [front, ...rest] = order.current
      const elFront = cardElementsRef.current[front]
      if (!elFront) return

      const tl = gsap.timeline()
      tlRef.current = tl

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease,
      })

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`)
      rest.forEach((cardIndex, promotedIndex) => {
        const el = cardElementsRef.current[cardIndex]
        if (!el) return

        const slot = makeSlot(promotedIndex, cardDistance, verticalDistance, total)
        tl.set(el, { zIndex: slot.zIndex }, 'promote')
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            autoAlpha: alphaForSlot(promotedIndex),
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${promotedIndex * 0.15}`
        )
      })

      const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total)
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`)
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex })
        },
        undefined,
        'return'
      )

      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          autoAlpha: alphaForSlot(total - 1),
          duration: config.durReturn,
          ease: config.ease,
        },
        'return'
      )

      tl.call(() => {
        order.current = [...rest, front]
      })
    }

    const triggerSwapFromClick = (clickedIndex) => {
      if (tlRef.current?.isActive()) return

      const clickedPosition = order.current.indexOf(clickedIndex)
      if (clickedPosition > 0) {
        order.current = [...order.current.slice(clickedPosition), ...order.current.slice(0, clickedPosition)]
        placeByOrder()
      }

      swap()
    }

    clickSwapRef.current = triggerSwapFromClick

    const startInterval = () => {
      clearInterval(intervalRef.current)
      intervalRef.current = window.setInterval(swap, delay)
    }

    startInterval()

    if (pauseOnHover && containerRef.current) {
      const node = containerRef.current
      const pause = () => {
        tlRef.current?.pause()
        clearInterval(intervalRef.current)
      }
      const resume = () => {
        tlRef.current?.play()
        startInterval()
      }

      node.addEventListener('mouseenter', pause)
      node.addEventListener('mouseleave', resume)

      return () => {
        node.removeEventListener('mouseenter', pause)
        node.removeEventListener('mouseleave', resume)
        clearInterval(intervalRef.current)
        tlRef.current?.kill()
      }
    }

    return () => {
      clearInterval(intervalRef.current)
      tlRef.current?.kill()
    }
  }, [cards, cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, config])

  return (
    <div
      ref={containerRef}
      className="relative mx-auto perspective-[1200px] transform-gpu"
      style={{ width, height }}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={(node) => {
              cardElementsRef.current[index] = node
            }}
            className="skill-swap-card absolute top-1/2 left-1/2 p-6 sm:p-7 cursor-pointer overflow-hidden rounded-xl [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]"
            title="Clique para avançar"
            onClick={() => {
              clickSwapRef.current(index)
              onCardClick?.(index)
            }}
          >
            <div className="relative h-full flex flex-col">
              <div className="absolute -top-16 -right-12 w-40 h-40 rounded-full bg-violet-400/10 blur-3xl pointer-events-none" />
              <h3 className="skill-swap-title font-heading text-2xl sm:text-3xl mb-5 relative z-10">{card.title}</h3>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="skill-swap-chip inline-flex px-3 py-1.5 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
