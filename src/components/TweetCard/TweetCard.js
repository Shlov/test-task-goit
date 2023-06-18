import { Btn, Card, Logo, Image, ImageWrapper, Avatar, AvatarWrapper, DescrWrapper, Txt } from "./TweetCard.styled";
import {ReactComponent as LogoSvg} from '../../images/svg/logo-goit.svg';
import picture from '../../images/tweet-card/picture-card.png';
import avatar from '../../images/tweet-card/boy-card-2x.png';



export const TweetCard = () => {

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
        <Txt>777 tweets</Txt>
        <Txt>100,500 Followers</Txt>
        <Btn>Follow</Btn>
      </DescrWrapper>
    </Card>
  );
};