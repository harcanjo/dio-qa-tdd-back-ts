import { Request } from 'express'
import { getMockPost } from '../__mocks__/getMockPost'
import { makeMockResponse } from '../__mocks__/mockResponse'
import { SavePostController } from './SavePostController'

// eslint-disable-next-line prefer-const
let mockExecute = jest.fn()

jest.mock('../services/SavePostService', () => {
  return {
    SavePostService: jest.fn().mockImplementation(() => {
      return {
        execute: mockExecute
      }
    })
  }
})

describe('SavePostController', () => {
  it('Should return a status 200 when new post saved', async () => {
    const newPostMock = getMockPost()
    mockExecute = jest.fn().mockResolvedValue(newPostMock)

    const savePostController = new SavePostController()

    const request = {
      body: {
        author: newPostMock.author,
        content: newPostMock.content
      }
    } as Request

    const response = makeMockResponse()

    await savePostController.handle(request, response)

    expect(mockExecute).toHaveBeenCalled()
    expect(response.state.json).toMatchObject(newPostMock)
    expect(response.state.status).toBe(201)
  })
})
