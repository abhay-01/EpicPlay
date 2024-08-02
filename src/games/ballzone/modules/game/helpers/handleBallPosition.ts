import {
    BALL_SIZE,
    MOVE,
    MOVE_BALL,
    PLAYER_SIZE,
    SHOOT_DISTANCE,
  } from '../../../common/constants/settings';
  import { Ball } from '../../../common/types/ball.type';
  import { Player } from '../../../common/types/player.type';
  
  import { makeBallPosition, makePosition } from './makePosition';
  
  export const handleBallPosition = (
    ball: Ball,
    players: Map<string, Player>,
    reverse: boolean,
    callback: () => void
  ): [Ball, Map<string, Player>] => {
    const newBall = ball;
    const newPlayers = new Map(players);
  
    const { velocity, position } = newBall;
  
    const decelerationX =
    velocity.x > 4 || velocity.x < -4
        ? MOVE_BALL.DECELERATION
        : MOVE_BALL.SMALL_DECELERATION;
  
    if (velocity.x > 0) {
      velocity.x = Math.max(velocity.x - decelerationX, 0);
    } else if (velocity.x < 0) {
      velocity.x = Math.min(velocity.x + decelerationX, 0);
    }
  
    const decelerationY =
    velocity.y > 3 || velocity.y < -3
        ? MOVE_BALL.DECELERATION
        : MOVE_BALL.SMALL_DECELERATION;
  
    if (velocity.y > 0) {
      velocity.y = Math.max(velocity.y - decelerationY, 0);
    } else if (velocity.y < 0) {
      velocity.y = Math.min(velocity.y + decelerationY, 0);
    }
  
    newBall.velocity = velocity;
  
    // eslint-disable-next-line prefer-const
    let [newPosition, multiplier] = makeBallPosition(
      position.x + velocity.x,
      position.y + velocity.y
    );
    newBall.velocity.x = velocity.x * multiplier.x;
    newBall.velocity.y = velocity.y * multiplier.y;
  
    const COLLISION_DISTANCE = PLAYER_SIZE + BALL_SIZE;
  
    const playersArr = [...newPlayers];
    if (reverse) playersArr.reverse();
  
    playersArr.forEach(([playerCollisionId, playerCollision]) => {
      const distanceX = newPosition.x - playerCollision.position.x;
      const distanceY = newPosition.y - playerCollision.position.y;
      const length = Math.sqrt(distanceX ** 2 + distanceY ** 2) || 1;
  
      if (
        playerCollision.shoot &&
        length < COLLISION_DISTANCE + SHOOT_DISTANCE + 1
      ) {
        callback();
        const unitX = distanceX / length;
        const unitY = distanceY / length;
  
        newBall.velocity = {
          x: unitX * 11,
          y: unitY * 11,
        };
      } else if (length < COLLISION_DISTANCE + 1) {
        callback();
        const unitX = distanceX / length;
        const unitY = distanceY / length;
  
        const playerSpeedX = Math.min(
          Math.abs(playerCollision.velocityVector.x * 2 || 1.5),
          MOVE.MAX_SPEED
        );
        const playerSpeedY = Math.min(
          Math.abs(playerCollision.velocityVector.y * 2 || 1.5),
          MOVE.MAX_SPEED
        );
  
        const vX = (velocity.x - unitX * playerSpeedX) / 10;
        const vY = (velocity.y - unitY * playerSpeedY) / 10;
  
        const newVX = velocity.x - vX;
        const newVY = velocity.y - vY;
  
        newBall.velocity = {
          x: newVX,
          y: newVY,
        };
  
        [newPosition] = makeBallPosition(
          playerCollision.position.x + (COLLISION_DISTANCE + 1) * unitX,
          playerCollision.position.y + (COLLISION_DISTANCE + 1) * unitY
        );
  
        newPlayers.set(playerCollisionId, {
          ...playerCollision,
          position: makePosition(
            playerCollision.position.x - unitX,
            playerCollision.position.y - unitY
          ),
        });
      }
    });
  
    newBall.position = newPosition;
  
    return [newBall, newPlayers];
  };