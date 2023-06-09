import { Link } from "react-router-dom";
import classes from "./MovieActorCreator.module.scss";
import { FormattedMessage } from "react-intl";

export interface MovieActorCreatorProps {
  id?: string;
  src?: string;
  alt?: string;
  name?: string;
  link?: string;
}

export const MovieActorCreator = ({
  id,
  src,
  alt,
  name,
  link,
}: MovieActorCreatorProps) => {
  return (
    <div className={classes.movieActorCreatorContainer}>
      <Link className={classes.linkContainer} to={link || "/actor/1"}>
        <div className={classes.movieActorCreatorImgContainer}>
          <img className={classes.movieActorCreatorImg} src={src} alt={alt} />
        </div>
        <div className={classes.movieActorCreatorName}>
          <p className={classes.movieActorCreatorName}>{name}</p>
          <p className={classes.actorOrCreator}>
            <FormattedMessage id={id || "Актер"} />
          </p>
        </div>
      </Link>
    </div>
  );
};
