import Image from 'next/image'

type ErrorProps = {
  children: React.ReactNode
}

export default function ErrorMessage({ children }: ErrorProps) {
  return (
    <div className='rounded-md bg-red-50 p-4 dark:bg-red-900'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <Image
            src='/x-circle.svg'
            alt='X Circle'
            width={20}
            height={20}
            aria-hidden='true'
          />
        </div>
        <div className='ml-3'>
          <h3 className='text-sm font-medium text-red-800 dark:text-red-300'>
            {children}
          </h3>
          <div className='mt-2 text-sm text-red-700 dark:text-red-400'>
            <ul role='list' className='list-disc pl-5 space-y-1'>
              <li>Country code is 2 characters long</li>
              <li>Country code can only contain letters</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
