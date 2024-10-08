import startPicture from '@/assets/images/loading.gif'
import { ReactElement, useEffect, useRef } from 'react'

function Loading({ display }: { display: boolean }): ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    console.log(display)
    if (display) {
      if (ref.current) {
        ref.current.style.display = 'none'
      }
    }
  }, [display])
  return (
    <div
      className='fixed left-0 top-0 text-[26px] z-[100000000] w-full h-full bg-[#1a1a1c] text-center'
      ref={ref}>
      <div className='absolute w-[160px] h-[150px] text-[#324e93] left-1/2 top-1/2 -mt-[100px] -ml-[75px]'>
        <img
          src={startPicture}
          className='m-[10px_auto] block w-10'
          alt=''
        />{' '}
        页面加载中...
      </div>
    </div>
  )
}

export default Loading
// Loading
