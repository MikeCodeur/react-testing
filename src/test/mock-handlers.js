import {rest} from 'msw'

const mockHandlers = [
  rest.post('https://example.com/api/login', async (req, res, ctx) => {
    if (!req.body.password) {
      return res(
        ctx.status(400),
        ctx.json({errorMessage: 'le password est obligatoire'}),
      )
    }
    if (!req.body.username) {
      return res(
        ctx.status(400),
        ctx.json({errorMessage: 'le username est obligatoire'}),
      )
    }
    return res(
      ctx.json({
        username: req.body.username,
        accessToken: '783c22ae-62c3-4238-a29a-300eb6aaeff9',
      }),
    )
  }),
]
export default mockHandlers
