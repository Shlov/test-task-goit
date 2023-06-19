import { TweetCard } from "components/TweetCard/TweetCard";
import { useEffect, useState } from "react";
import { fetchTweets } from "service/api";
import { TweetsList, Btn } from "./Tweets.styled";


export const Tweets = () => {
  
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idel');
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  // const [i, setI] = useState(true);
  // const [tagImg, setTagImg] = useState('');


  useEffect(() => {
    // if (i) {
    //   setI(false)
    //   return
    // }
    setStatus('pending');

    async function getTweets (page) {
      try {
        const response = await fetchTweets(page, 6)
        console.log(response)
        // setTweets(response.data)

        if (response.data.length < 6) {
          setStatus('end')
        } else {
          setStatus('resolved')
        }
        setTweets(state => [...state, ...response.data])
      } catch (err) {
        setError(err)
        setStatus('rejected')
      }
    }

    getTweets(page)

    // fetchTweets(page, 6)
    // .then(imgs =>  {
    //   if (!imgs.total) {
    //     return setStatus('absent')
    //   }
    //   setImgs(state => [...state, ...imgs.hits])
    //   setStatus( Math.ceil(imgs.totalHits / 12) === page ? 'end' : 'resolved')
    //   })
    // .catch(error => {
    //   setError(error);
    //   setStatus('rejected')}
    // )
  }, [page])

  const loadMore = () => {
    setPage(state => state + 1)
  }

  console.log(error)


  // const toggleModal = () => {
  //   setShowModal(state => !state)
  // }

  // const handelFormSubmit = (newTagImg) => {
  //   if (newTagImg === tagImg) {
  //     return toast.error('Це ми вже знайшли 🙃')
  //   }
  //   setTagImg(newTagImg)
  //   setPage(1)
  //   setImgs([])
  // }


  return(
    <div>
      Tweets
    <TweetsList>
      {tweets && tweets.map(tweet => <TweetCard key={tweet.id} tweet={tweet}/>)}
    </TweetsList>
    {status === 'resolved' && <Btn onClick={loadMore}>Load more</Btn>}
    </div>
  );
};