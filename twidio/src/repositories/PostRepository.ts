import { EntityRepository, EntityManager } from 'typeorm'
import { Post } from '../entities/Post'

@EntityRepository(Post)
export class PostRepository {
  private manager: EntityManager;

  // eslint-disable-next-line space-before-function-paren
  constructor(manager: EntityManager) {
    this.manager = manager
  }

  getAll = async (): Promise<Array<Post>> => {
    const posts: Post[] = await this.manager.find(Post)
    return posts
  }

  save = async (post: Post): Promise<Post> => {
    const newPost: Post = await this.manager.save(post)
    return newPost
  }
}
