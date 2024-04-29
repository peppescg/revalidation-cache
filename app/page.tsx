import Todos from '@/components/todos'
import Users from '@/components/users'
import { Button } from '@/components/ui/button'

import { getColors, getUsers, revalidateAll } from '@/lib/actions'
import Colors from '@/components/colors'

export default async function Home() {
  const users = await getUsers()
  const colors = await getColors()
  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <h1 className='text-3xl font-bold'>On-demand Revalidation</h1>
          <h2 className='flex gap-2 font-light text-gray-700'>
            <pre>
              <code>revalidatePath</code>
            </pre>{' '}
            vs{' '}
            <pre>
              <code>revalidateTag</code>
            </pre>
          </h2>

          <form action={revalidateAll}>
            <Button size='sm' className='mt-3'>
              Revalidate the entire path
            </Button>
          </form>

          <Users users={users} />
          <Colors colors={colors} />
        </div>
      </div>
    </section>
  )
}
