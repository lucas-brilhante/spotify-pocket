import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Loading } from '../../components';
import { authentication } from '../../actions';

import './Authorize.scss';

const Authorize = () => {
  const [fetching, setFetching] = useState(false);
  const location = useLocation();
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      const { access_token, expires_in, token_type } = queryString.parse(location.hash);
      try {
        const userInfo = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: 'Bearer ' + access_token
          }
        });

        if (userInfo.request.status === 200)
          dispatch(authentication(access_token, expires_in, token_type, true));
      } catch (error) {
        console.log(error)
      }
      setFetching(true);
    }
    getUserInfo();
  }, [dispatch, location])

  if (!fetching) {
    return (
      <div className="callback">
        <Loading text="Autenticando..." />
      </div>
    )
  }

  if (!auth.isLogged)
    return (
      <Redirect to="/" />
    )

  return (
    <Redirect to="/dashboard" />
  );
}

export default Authorize;

