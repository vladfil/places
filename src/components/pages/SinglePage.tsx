import {CircularProgress, Typography} from '@mui/material'
import axios from 'axios'
import {FC} from 'react'
import {useQuery} from 'react-query'
import {useParams} from 'react-router'
import {Response, PostResponse} from 'utils/types'

const fetchPost = async (id: string) => {
  const {data: respData} = await axios.get<Response<PostResponse>>(
    `/public-post/${id}`,
  )

  return respData
}

const SinglePage: FC = () => {
  const {id} = useParams<{id: string}>()
  const {data, isLoading, isSuccess} = useQuery(['post', id], () =>
    fetchPost(id),
  )

  if (isLoading) return <CircularProgress />

  if (isSuccess && data) {
    const {post_title, post_content} = data.data.post

    return (
      <>
        <Typography variant="h4" component="h1" align="center">
          {post_title}
        </Typography>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: post_content,
          }}
        />
      </>
    )
  }

  return null
}

export default SinglePage
