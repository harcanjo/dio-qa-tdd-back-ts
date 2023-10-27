/* eslint-disable space-before-function-paren */
import { getCustomRepository } from 'typeorm'
import { PostRepository } from './../repositories/PostRepository'
import { Post } from '../entities/Post'

interface ISavePostService {
  postRepository?: PostRepository
  author: string
  content: string

}
export class SavePostService {
  private postRepository: PostRepository
  private post: Post

  constructor({
    postRepository = getCustomRepository(PostRepository),
    author,
    content
  }: ISavePostService) {
    this.postRepository = postRepository
    this.post = new Post(author, content)
  }

  async execute(): Promise<Post> {
    return await this.postRepository.save(this.post)
  }
}
