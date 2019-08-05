import request from 'superagent'

export const ALL_IMAGES = 'ALL_IMAGES'
export const NEW_IMAGE = 'NEW_IMAGE'
export const JWT = "JWT"

const baseUrl = 'http://localhost:4000'

function userLogin (payload) {
  return {
    type: JWT,
    payload
  }
}

function allImages (payload) {
  return {
    type: ALL_IMAGES,
    payload
  }
}

function newImage (payload) {
  return {
    type: NEW_IMAGE,
    payload
  }
}

export const createImage = data => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  
  request
    .post(`${baseUrl}/image`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

export const getImages = () => (dispatch, getState) => {
  const state = getState()
  const { images } = state

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}

export const login = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = userLogin(response.body)

      dispatch(action)
    })
    .catch(console.error)
}