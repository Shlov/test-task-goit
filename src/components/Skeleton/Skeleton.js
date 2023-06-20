import { SkeletonList, SkeletonItem } from "./Skeleton.styled";


export const Skeleton = () => {

  const arr = [1,2,3];

  return (
    <SkeletonList>
      {arr.map((item)=> <SkeletonItem key={item}/>)}
    </SkeletonList>
  );
};