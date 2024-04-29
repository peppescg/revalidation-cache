'use client'
import { revalidateAll, revalidateColors } from '@/lib/actions'
import { Button } from '@/components/ui/button'

export default function Colors({ colors }: { colors: any }) {
  return (
    <section className='mt-16'>
      <form
        action={revalidateColors}
        className='flex items-center justify-between'
      >
        <h3 className='font-serif text-xl'>Colors</h3>
        <Button size='sm'>Revalidate colors</Button>
      </form>
      <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {colors.map((color: any) => (
          <div
            key={color.id}
            className='flex justify-between rounded bg-white p-4 shadow'
          >
            <h3 className='font-semibold'>{color.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
