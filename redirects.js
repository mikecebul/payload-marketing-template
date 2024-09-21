const redirects = async () => {
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header',
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }
  const additionalRedirects = [
    {
      source: '/home',
      destination: '/',
      permanent: true,
    },
  ]

  // Combine all redirects into a single array
  const redirects = [internetExplorerRedirect, ...additionalRedirects]

  return redirects
}

export default redirects
