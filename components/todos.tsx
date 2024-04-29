import { Button } from '@/components/ui/button'

async function getTodos() {
  const endpoint = 'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/todos'
  const response = await fetch(endpoint, { next: { tags: ['todos'] } })
  return response.json()
}

export default async function Todos() {
  const todos = await getTodos()

  return (
    <section className='mt-16'>
      <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {todos.map((todo: any) => (
          <div key={todo.id} className='rounded bg-white p-4 shadow'>
            <h3 className='font-semibold'>{todo.title}</h3>
            <p className='text-sm text-gray-500'>
              {todo.completed ? 'Completed' : 'Pending'}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
