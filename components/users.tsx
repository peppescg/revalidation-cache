'use client'
import { deleteUser, revalidateAll, revalidateUsers } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { useOptimistic, useTransition } from 'react'

export default function Users({ users }: { users: any }) {
  const [isPending, startTransition] = useTransition()
  const [optimisticUsers, updateUsers] = useOptimistic(
    users,
    (users, id: string) => users.filter((user: any) => user.id !== id)
  )

  const handleClick = async (id: string) => {
    updateUsers(id)

    await deleteUser(id)
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
        {optimisticUsers.map((user: any) => (
          <div
            key={user.id}
            className='flex justify-between rounded bg-white p-4 shadow'
          >
            <h3 className='font-semibold'>{user.name}</h3>
            <p className='text-sm text-gray-500'>{user.email}</p>
            <button
              disabled={isPending}
              className='cursor-pointer text-red-400'
              onClick={() => startTransition(() => handleClick(user.id))}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
