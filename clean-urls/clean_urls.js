let url = args.urls

if (typeof url !== 'string') {
  url = url.toString()
}

if (!isValidURL(url)) {
  let notification = new Notification()

  notification.title = 'No URL Found'
  notification.body = 'Please, add a URL'
  notification.schedule('no-url-found-notification')
} else if (url.length > 0 && !url.includes('?')) {
  let notification = new Notification()

  notification.title = 'Already clean'
  notification.body = 'The URL is already clean'
  notification.schedule('already-clean-notification')
} else if (url.length > 0 && url.includes('?')) {
  url = url.split('?')[0]

  let notification = new Notification()

  notification.title = 'URL Cleaned'
  notification.body = 'The URL has been cleaned and copied to the clipboard'
  notification.schedule('cleaned-url-notification')

  Pasteboard.copyString(url)
  ShareSheet.present([url])
}

function isValidURL(url) {
  let regex =
    /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i
  return regex.test(url)
}
