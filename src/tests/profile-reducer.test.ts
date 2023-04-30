import {v1} from 'uuid';
import {addPost, deletePost, ProfilePageType, profileReducer} from '../redux/profile-reducer';


let initialState: ProfilePageType = {
  posts: [
    {id: v1(), message: 'Hello!', likesCount: 3},
    {id: v1(), message: 'What a nice day!', likesCount: 5},
    {id: '322', message: 'Today I\'m playing guitar!', likesCount: 6},
  ],
  profile: null,
  status: ''
}

test('count of posts should be incremented', () => {
  const action = addPost('All gonna be awesome')

  let newState = profileReducer(initialState, action)

  expect(newState.posts.length).toBe(4)
})

test('new post text should be "All gonna be awesome"', () => {
  const action = addPost('All gonna be awesome')

  let newState = profileReducer(initialState, action)

  expect(newState.posts[3].message).toBe('All gonna be awesome')
})

test('likes count of new post should be 0', () => {
  const action = addPost('All gonna be awesome')

  let newState = profileReducer(initialState, action)

  expect(newState.posts[3].likesCount).toBe(0)
})

test('last post should be deleted; count of posts should be decremented', () => {
  const action = deletePost('322')

  let newState = profileReducer(initialState, action)

  expect(newState.posts.length).toBe(2)
})