import './avatar.scss';
import { user } from '../../const';

function Avatar() {
    return (
      <>
        <img className="avatar" alt="avatar" src={user.imageUrl} style={{
          width: user.imageSize,
          height: user.imageSize
        }} />
      </>
    );
  }

  export default Avatar;