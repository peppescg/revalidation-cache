'use client'
import { revalidateAll, revalidateUsers } from '@/lib/actions'
import { Button } from '@/components/ui/button'

export default function Users({ users }: { users: any }) {
  const handleClick = () => {
    revalidateAll()
  }

  return (
    <section className='mt-16'>
      <form
        action={revalidateUsers}
        className='flex items-center justify-between'
      >
        <h3 className='font-serif text-xl'>Users</h3>
        <Button size='sm'>Revalidate users</Button>
      </form>
      <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {users.map((user: any) => (
          <div
            key={user.id}
            className='flex justify-between rounded bg-white p-4 shadow'
          >
            <h3 className='font-semibold'>{user.name}</h3>
            <p className='text-sm text-gray-500'>{user.email}</p>
            <div className='cursor-pointer text-red-400' onClick={handleClick}>
              x
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
