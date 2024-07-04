export const getCroppedImageUrl = (url: string) => {
  if (!url) return null

  // get the index after '/media' in the url
  const index = url.indexOf('media/') + 6 // 6 = '/media'.length
  // insert crop/600/400 at this index
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}
