'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function revalidateUsers() {
  revalidateTag('users')
  redirect('/')
}

export async function revalidateColors() {
  revalidateTag('colors')
  redirect('/')
}

export async function revalidateAll() {
  revalidatePath('/')
}

export async function getUsers() {
  const endpoint = 'https://662f72cf43b6a7dce30f870c.mockapi.io/users'
  const response = await fetch(endpoint, { next: { tags: ['users'] } })
  return response.json()
}

export async function getColors() {
  const endpoint = 'https://662f72cf43b6a7dce30f870c.mockapi.io/colors'
  const response = await fetch(endpoint, { next: { tags: ['colors'] } })
  return response.json()
}
