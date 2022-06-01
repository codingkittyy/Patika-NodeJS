const posts = [
  { post: 'Post 1', author: 'Teco' },
  { post: 'Post 2', author: ' Dyt.Niloya' },
  { post: 'Post 3', author: 'Elon Musk' },
  { post: 'Post 4', author: 'Jared Leto' },
  { post: 'Post 5', author: 'Rihanna' },
]

const listPosts = () => {
  posts.map((post) => console.log(post))
}

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost)
    resolve(posts)
    reject('An error occured')
  })

  return promise1
}

async function showPosts() {
  try {
    await addPost({ post: 'Post 6', author: 'Megan Fox' })
    listPosts()
  } catch (error) {
    console.log(error)
  }
}

showPosts()
