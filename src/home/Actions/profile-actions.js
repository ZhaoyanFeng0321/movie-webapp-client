import * as service from '../../services/auth-service';

export const CREATE_USER = 'CREATE_USER';
export const FIND_USER = 'FIND_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const createUser = async (dispatch, user) => {
    const newUser = await service.signup(user);
    dispatch({
                 type: CREATE_USER,
                 user
             });
}

export const updateUser = async (dispatch, user) => {
    const status = await service.update(user);
    dispatch({
                 type: UPDATE_USER,
                 user
             });
}

export const findUser = async (dispatch, userName) => {
    const user = await service.findUser(userName);
    dispatch({
                 type: FIND_USER,
                 user
             });
}

// export const deleteTuit = async (dispatch, tuit) => {
//     const response = await service.deleteTuit(tuit);
//     dispatch({
//                  type: DELETE_TUIT,
//                  tuit
//              })

