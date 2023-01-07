import md5 from 'spark-md5'

export function getName(pkg: any) {
  if (typeof pkg.author === 'string' && pkg.author) {
    return pkg.author
  } else {
    return pkg.author?.name || pkg.publisher.username
  }
}

export function isOfficial(pkg: any) {
  return ['vikiboss'].includes(pkg.publisher.username)
}

export function isHighQuality(pkg: any) {
  const niceAuthors = ['linxae', 'hezhihang', 'sioncovy', 'ginirohikocha']
  const nicePlugins = ['helper', 'listener', 'mmcard', 'forward', 'title']

  const isHQAuthor = niceAuthors.includes(pkg.publisher.username)
  const isHQPlugin = nicePlugins.includes(pkg.name.replace('kivibot-plugin-', ''))

  return isHQAuthor || isHQPlugin
}

export function getAvatar(email: string) {
  if (!email) {
    return 'http://beta.kivibot.com/dimo.png'
  }

  return `https://gravatar.deno.dev/avatar/${md5.hash(email)}?d=mp`
}
