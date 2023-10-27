/* eslint-disable space-before-function-paren */
import { Request, Response } from 'express'
import { SavePostService } from './../services/SavePostService'

export class SavePostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { author, content } = request.body

    if (content.length === 0) {
      return response.status(400).json({
        error: 'Content must not be empty'
      })
    }
    const savePostService = new SavePostService({ author, content })

    const newPost = await savePostService.execute()

    return response.status(201).json(newPost)
  }
}
