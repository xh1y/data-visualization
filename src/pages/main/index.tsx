import { useEffect, useState } from 'react'
import Loading from '@/components/loading'
import './index.css'

function Main() {
  function AppendZero(obj: number) {
    if (obj < 10) return '0' + obj
    else return obj
  }

  const [display, setDisplay] = useState(true)
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  console.log(time)

  useEffect(() => {
    window.addEventListener('load', function () {
      // document.querySelector('.loading').style.display = 'none';
      setDisplay(false)
    })
    return window.removeEventListener('load', function () {
      // document.querySelector('.loading').style.display = 'none';
      setDisplay(false)
    })
  }, [])

  return (
    <>
      {<Loading display={display} />}
      <div className='head h-[1.05rem] bg-[url(@/assets/images/head_bg.png)] bg-no-repeat bg-[center_center] bg-[length:100%_100%] relative'>
        <h1 className='text-white text-center text-[.4rem] leading-[.8rem] -tracking-[1px]'>
          <a href='https://gitee.com/iGaoWei/big-data-view'>
            大数据可视化系统数据分析通用模版
          </a>
        </h1>

        <div
          className='time absolute right-[.15rem] top-0 leading-[.75em] text-[rgba(255,255,255,0.7)] text-[.3rem] pr-[.1em] font-[electronicFont] '
          id='showTime'>
          {new Date(time).getFullYear() +
            '/' +
            AppendZero(new Date(time).getMonth() + 1) +
            '/' +
            AppendZero(new Date(time).getDate()) +
            ' ' +
            AppendZero(new Date(time).getHours()) +
            ':' +
            AppendZero(new Date(time).getMinutes()) +
            ':' +
            AppendZero(new Date(time).getSeconds()) +
            ''}
        </div>
      </div>
      <div className='p-[0_.2rem_0_.2rem] h-[calc(100%-1.05rem)] [&>ul]:-ml-[.1rem] [&>ul]:-mr-[.1rem] [&>ul]:h-full [&>li]:[&>ul]:float-left [&>li]:[&>ul]:p-[0_.1rem] [&>li]:[&>ul]:h-full [&>li]:[&>ul]:w-[30%] [&>li:nth-child(2)]:[&>ul]:w-[40%] '>
        <ul className='after:table after:content-["_"] before:table before:content-["_"] after:clear-both  -ml-[.1rem] -mr-[.1rem] h-full [&>li]:float-left [&>li]:p-[0_.1rem] [&>li]:h-full [&>li]:w-[30%] [&>li:nth-child(2)]:w-[40%]'>
          <li className='float-left p-[0_.1rem] h-full w-[30%] [&>*:nth-child(2)]:w-[40%]'>
            <div
              className='p-[0_.2rem_.2rem_.2rem] bg-[rgba(6,48,109,.5)] relative mb-[.15rem] z-10 h-[calc(58%-.15rem)]'
              style={{ height: 'calc(58% - .15rem)' }}>
              <div className='text-[.2rem] text-white leading-[.5rem] relative pl-[.15rem] before:absolute before:h-[.2rem] before:w-1 before:bg-[#49bcf7] before:content-[""] before:left-0 before:top-1/2 before:-mt-[.1rem]'>
                标题名称
              </div>
              <div
                className='h-[calc(100%-.5rem)] '
                id='echarts4'></div>
            </div>
            <div
              className='p-[0_.2rem_.2rem_.2rem] bg-[rgba(6,48,109,.5)] relative mb-[.15rem] z-10'
              style={{ height: 'calc(42% - .15rem)' }}>
              <div className='text-[.2rem] text-white leading-[.5rem] relative pl-[.15rem] before:absolute before:h-[.2rem] before:w-1 before:bg-[#49bcf7] before:content-[""] before:left-0 before:top-1/2 before:-mt-[.1rem]'>
                标题名称
              </div>
              <div
                className='h-[calc(100%-.5rem)]'
                id='echarts3'></div>
            </div>{' '}
          </li>
          <li>
            <div
              className=' p-[0_.2rem_.2rem_.2rem] bg-[rgba(6,48,109,.5)] relative mb-[.15rem] z-10'
              style={{ height: 'calc(20% -.15rem)' }}>
              <ul className=' [&>li]:float-left [&>li]:h-full h-full after:table after:content-["_"] before:table before:content-["_"] after:clear-both'>
                <li className='w-1/2'>
                  <div className='sqzs mr-[.2rem] [&_p]:p-[.2rem_0_.1rem_0] [&_p]:text-[.22rem] h-full'>
                    <p>业绩总览</p>
                    <h1 className='h-[calc(100%-.65em)] border-b-[1px_solid_rgba(255,255,255,.1)] border-t-[1px_solid_rgba(255,255,255,.1)] flex items-center text-[#fef000] font-normal tracking-[2px] text-[.5rem] justify-center pb-[.05em]'>
                      <span className='text-[.8rem] text-[Impact,Haettenschweiler,"Arial_Narrow_Bol",sans-serif]'>
                        30500
                      </span>
                      万
                    </h1>
                  </div>{' '}
                </li>
                <li className='w-1/2'>
                  <ul className=' [&>li]:float-left [&>li]:h-full h-full after:table after:content-["_"] before:table before:content-["_"] after:clear-both'>
                    <li className='w-1/3'>
                      <div className='text-center text-white text-[.16rem] p-[.3rem_0_.02rem_0]'>
                        标题名称
                      </div>
                      <div
                        className='h-[calc(100%-.5rem)] relative '
                        id='pe01'></div>{' '}
                    </li>
                    <li className='w-1/3'>
                      <div className='text-center text-white text-[.16rem] p-[.3rem_0_.02rem_0]'>
                        标题名称
                      </div>
                      <div
                        className='h-[calc(100%-.5rem)] relative'
                        id='pe02'></div>{' '}
                    </li>
                    <li className='w-1/3'>
                      <div className='text-center text-white text-[.16rem] p-[.3rem_0_.02rem_0]'>
                        标题名称
                      </div>
                      <div
                        className='h-[calc(100%-.5rem)] relative'
                        id='pe03'></div>{' '}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              className=' p-[0_.2rem_.2rem_.2rem] bg-[rgba(6,48,109,.5)] relative mb-[.15rem] z-10'
              style={{ height: 'calc(38% - .15rem)' }}>
              <div className='text-[.2rem] text-white leading-[.5rem] relative pl-[.15rem] before:absolute before:h-[.2rem] before:w-1 before:bg-[#49bcf7] before:content-[""] before:left-0 before:top-1/2 before:-mt-[.1rem]'>
                标题名称
              </div>
              <div
                className='h-[calc(100%-.5rem)]'
                id='echarts1'></div>
            </div>
            <div
              className=' p-[0_.2rem_.2rem_.2rem] bg-[rgba(6,48,109,.5)] relative mb-[.15rem] z-10'
              style={{ height: 'calc(42% - .15rem)' }}>
              <div className='text-[.2rem] text-white leading-[.5rem] relative pl-[.15rem] before:absolute before:h-[.2rem] before:w-1 before:bg-[#49bcf7] before:content-[""] before:left-0 before:top-1/2 before:-mt-[.1rem]'>
                标题名称
              </div>
              <div
                className='h-[calc(100%-.5rem)]'
                id='echarts2'></div>
            </div>{' '}
          </li>
          <li>
            <div
              className=' p-[0_.2rem_.2rem_.2rem] bg-[rgba(6,48,109,.5)] relative mb-[.15rem] z-10'
              style={{ height: 'calc(33.333% - .15rem)' }}>
              <div className='text-[.2rem] text-white leading-[.5rem] relative pl-[.15rem] before:absolute before:h-[.2rem] before:w-1 before:bg-[#49bcf7] before:content-[""] before:left-0 before:top-1/2 before:-mt-[.1rem]'>
                标题名称
              </div>
              <div
                className='h-[calc(100%-.5rem)]'
                id='echarts5'></div>
            </div>
            <div
              className=' p-[0_.2rem_.2rem_.2rem] bg-[rgba(6,48,109,.5)] relative mb-[.15rem] z-10'
              style={{ height: 'calc(33.333% - .15rem)' }}>
              <div className='text-[.2rem] text-white leading-[.5rem] relative pl-[.15rem] before:absolute before:h-[.2rem] before:w-1 before:bg-[#49bcf7] before:content-[""] before:left-0 before:top-1/2 before:-mt-[.1rem]'>
                标题名称
              </div>
              <div
                className='h-[calc(100%-.5rem)]'
                id=''>
                <table
                  border={0}
                  cellSpacing={0}>
                  <tbody>
                    <tr>
                      <th></th>
                      <th>字段</th>
                      <th>字段</th>
                      <th>字段</th>
                      <th>字段</th>
                    </tr>
                    <tr>
                      <th>字段</th>
                      <td>8098</td>
                      <td>19.80%</td>
                      <td>22</td>
                      <td>368</td>
                    </tr>
                    <tr>
                      <th>字段</th>
                      <td>7506</td>
                      <td>6.70%</td>
                      <td>22</td>
                      <td>339</td>
                    </tr>
                    <tr>
                      <th>字段</th>
                      <td>3261</td>
                      <td>32.30%</td>
                      <td>10</td>
                      <td>325.7</td>
                    </tr>
                    <tr>
                      <th>字段</th>
                      <td>1993</td>
                      <td> 201%</td>
                      <td>10</td>
                      <td> 199</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className=' p-[0_.2rem_.2rem_.2rem] bg-[rgba(6,48,109,.5)] relative mb-[.15rem] z-10'
              style={{ height: 'calc(33.333% - .15rem)' }}>
              <div className='text-[.2rem] text-white leading-[.5rem] relative pl-[.15rem] before:absolute before:h-[.2rem] before:w-1 before:bg-[#49bcf7] before:content-[""] before:left-0 before:top-1/2 before:-mt-[.1rem]'>
                标题名称
              </div>
              <div
                className='h-[calc(100%-.5rem)]'
                id='echarts6'
                style={{ height: 'calc(100% - .3rem)' }}></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Main
// Main
