import { Btn, Card, Logo, Image, ImageWrapper, Avatar, AvatarWrapper, DescrWrapper, Txt } from "./TweetCard.styled";
import {ReactComponent as LogoSvg} from '../../images/svg/logo-goit.svg';
import picture from '../../images/tweet-card/picture-card.png';
import avatar from '../../images/tweet-card/boy-card-2x.png';
import { numberWithCommas } from "service/numberWithCommas";
import { useState } from "react";



export const TweetCard = ({user, isFollowing, isFollow}) => {

  const [animate, setAnimate] = useState(false)

  const animateButton = () => {
    setAnimate(false)
    setAnimate(true)
    setTimeout(function () {
      setAnimate(false)
    }, 700);
  };

  return(
    <Card>
      <ImageWrapper>
        <Logo>
          <LogoSvg/>
        </Logo>
        <Image alt='pic' src={picture}/>
      </ImageWrapper>
      <AvatarWrapper>
        <Avatar alt='pic' src={avatar}/>
      </AvatarWrapper>
      <DescrWrapper>
        <Txt>{`${numberWithCommas(user.tweets)} tweets`}</Txt>
        <Txt>{`${numberWithCommas(user.followers)} Followers`}</Txt>
        <Btn onClick={() => {isFollowing(user.id, user.followers); animateButton()}}  isFollow={isFollow}  animate={animate}>
          {isFollow ? 'Following' : 'Follow'}
        </Btn>
      </DescrWrapper>
    </Card>
  );
};