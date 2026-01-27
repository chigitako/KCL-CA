'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/firebase/server'
export async function login(formData: FormData) {
  const auth = createClient()
  const idToken = formData.get('idToken') as string; //クライアントから送られたIDトークン
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    // 必要に応じて decodedToken.uid などでユーザー情報を処理
    revalidatePath('/', 'layout')
    redirect('/web')
  } catch (error) {
    redirect(`/login?error=${encodeURIComponent((error as Error).message)}`)
  }
}

export async function signup(formData: FormData) {
  const auth = await createClient()
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  try {
    await auth.createUser({
      email: data.email,
      password: data.password,
    });
    revalidatePath('/', 'layout')
    redirect('/web')
  } catch (error) {
    redirect('/error')
  }
}
