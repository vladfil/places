import {CircularProgress, Pagination, Typography} from '@mui/material'
import axios from 'axios'
import {FC, useEffect, useState} from 'react'
import {useQuery, useQueryClient} from 'react-query'
import {Response, WpQueryResponse, Obj} from 'utils/types'
import {Link} from 'react-router-dom'

const fetchPosts = async (data: Obj) => {
  const params = new URLSearchParams(data)
  const {data: respData} = await axios.get<Response<WpQueryResponse>>(
    `/public-post?${params}`,
  )

  return respData
}

const Posts: FC = () => {
  const urlPage = new URLSearchParams(window.location.search).get('page')
  const [paged, setPaged] = useState(Number(urlPage) || 1)
  const queryClient = useQueryClient()
  const {data, isLoading, isSuccess} = useQuery(['posts', paged], () =>
    fetchPosts({paged}),
  )

  useEffect(() => {
    if (data && paged < data?.data.wp_query.max_num_pages) {
      queryClient.prefetchQuery(['posts', paged + 1], () =>
        fetchPosts({paged: paged + 1}),
      )
    }
  }, [data, paged, queryClient])

  if (isLoading) return <CircularProgress />

  if (isSuccess && data?.data) {
    return (
      <>
        {data.data.wp_query.posts.map(({ID, post_title}) => (
          <Typography variant="h4" component="h1" align="center" key={ID}>
            <Link to={`/posts/${ID}`}>{post_title}</Link>
          </Typography>
        ))}
        <Pagination
          count={data.data.wp_query.max_num_pages}
          page={paged}
          onChange={(e, page) => {
            setPaged(page)
            window.history.replaceState({page}, '', `/posts?page=${page}`)
          }}
          size="large"
        />
      </>
    )
  }

  return null
}

export default Posts
