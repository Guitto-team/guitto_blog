export default function handler(req: any, res: any) {
  // 後々に記述するが、これらのqueryの名前は自分で決める。contentTypeが今回はページのpathになっている
  // pathが /articles/articleId の構成のサイトなら、 contentType = articles, contentId = articleId となる
  const contentType = req.query?.contentType
  const contentId = req.query?.contentId
  // draftKeyは下書き用のkey。後々出てくる
  const draftKey = req.query?.draftkey
  if (!contentType || !contentId || !draftKey) {
    return res.status(401).json({ message: 'Invalid params' })
  }
  res.setPreviewData({
    contentId,
    draftKey,
  })
  // ここは、ページ設計によるが、next+netlifyで作っていれば大体こうなるはず。
  res.writeHead(302, {
    Location: `/${contentType}/${contentId}`,
  })
  return res.status(200).json({ message: 'success' })
}