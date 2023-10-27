import { getCustomRepository } from 'typeorm'
import { PostRepository } from './../repositories/PostRepository'
import { Post } from '../entities/Post'

export class SavePostService {
  private postRepository: PostRepository

  // eslint-disable-next-line space-before-function-paren
  constructor(postRepository: PostRepository = getCustomRepository(PostRepository)) {
    this.postRepository = postRepository
  }

  async execute(post: Post): Promise<Post> {
    return await this.postRepository.save(post)
  }
}
