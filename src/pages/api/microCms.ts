import { MicroCMSQueries } from 'microcms-js-sdk'
import { GetListDetailRequest, GetListRequest, MicroCMSListResponse } from 'microcms-js-sdk'

export type Blog = {
  id: string
  title: string
}

export async function getArticles(queries?: MicroCMSQueries): Promise<MicroCMSListResponse<Blog>> {
  const getListRequest: GetListRequest = {
    endpoint: 'blogs',
  }
  if (queries) {
    getListRequest.queries = queries
  }
  const res = await cmsClient.getList(getListRequest)
  return res
}

export async function getBlog(id: string, draftKey?: string): Promise<Blog> {
  const detailQueries: GetListDetailRequest = { endpoint: 'blogs', contentId: id }
  if (draftKey) {
    detailQueries.queries = { draftKey }
  }
  const res = await cmsClient.getListDetail(detailQueries)
  return res
}