let url = args.urls

if (typeof url !== 'string') {
  url = url.toString()
}

if (url.length > 0 && url.includes('?')) {
  url = url.split('?')[0]
} else {
  let notification = new Notification()
  notification.title = 'No URL Found'
  notification.body = 'Please, add a URL'
  notification.schedule('no-url-found-notification')
}

Pasteboard.copyString(url)

ShareSheet.present([url])

let notification = new Notification()
notification.title = 'URL Cleaned'
notification.body = url
notification.schedule('cleaned-url-notification')

url
