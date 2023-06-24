import { TweetCard } from "components/TweetCard/TweetCard";
// import { TweetCard } from "components/TweetCard/TweetCard copy";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchUser, updateSubscriberCount } from "service/api";
import { TweetsList, Btn, Message, Wrapper, TitleWrapper, FilterWrapper } from "./Tweets.styled";
import { Loader } from "components/Loader/Loader";
import { Link } from "react-router-dom";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Skeleton } from "components/Skeleton/Skeleton";


export const Tweets = () => {
  
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idel');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [follow, setFollow] = useLocalStorage('follow',[]);
  // const [filter, setFilter] = useState('all');

  // const location = useLocation()
  // const btnBackHref = useRef(location.state?.from ?? "/")

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // або можна використати navigate('назва шляху') для конкретного маршруту
  };

  const getUsers = async(page) => {
    try {
      let limit = 6
      if (page > 1) {
        limit = 3
      }
      const response = await fetchUser(page, limit)
      if (response.data.length < 3) {
        setStatus('end')
      } else {
        setStatus('resolved')
      }
      setUsers(state => [...state, ...response.data])
    } catch (err) {
      setError(err)
      setStatus('rejected')
    }
  }

  const updateUserStateCount = (id, nextFollowers) => {
    setUsers(state => state.reduce((acc, user) => {
      if (user.id === id) {
        return [...acc, {...user, followers: nextFollowers}]
      }
      return [...acc, user]
    }, []));
  }

  const isFollowing = (id, followers) => {
    if (follow.includes(id)) {
      setFollow(follow.filter(item => item !== id));
      updateSubscriberCount(id, followers - 1);
      updateUserStateCount(id, followers - 1);
    } else {
      setFollow(state => [...state, id]);
      updateSubscriberCount(id, followers + 1);
      updateUserStateCount(id, followers + 1);
    };
  };

  useEffect(() => {
    setStatus('pending');
    getUsers(page);
  }, [page]);

  const loadMore = () => {
    setPage(state => state + 1);
  }


  return(
    <Wrapper>
      <TitleWrapper>
        <Link onClick={goBack}> ⬅️ go back</Link>
        <FilterWrapper>
          <label htmlFor="filter">Filter</label>
          <select id="filter" name="filter" defaultValue={'all'} disabled>
            <option value='all'>Show all</option>
            <option value='follow'>Follow</option>
            <option value='followings'>Followings</option>
          </select>
        </FilterWrapper>
      </TitleWrapper>
      <TweetsList>
        {users && users.map(user => <TweetCard key={user.id} user={user} isFollowing={isFollowing} isFollow={follow.includes(user.id)}/>)}
      </TweetsList>
      {status === 'pending' && <Skeleton/>}
      {status === 'pending' && <Loader/>}
      {status === 'resolved' && <Btn onClick={loadMore}>Load more</Btn>}
      {status === 'end' && <Message>That's all</Message>}
      {error && <Message>Error</Message>}
    </Wrapper>
  );
};