import { User } from '../types';

export const UserInfo = ({ user }: { user: User }) => {
  return (
    <>
      <li>UserName:{user.name}</li>
    </>
  );
};
