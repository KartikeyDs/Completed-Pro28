function detectCollision(body1,body2)
{
  body1pos=body1.body.position;
  body2pos=body2.body.position;

  var distance=dist(body1pos.x,body1pos.y,body2pos.x,body2pos.y)
  if(distance<=body2.r+body1.r)
  {
    Matter.Body.setStatic(body2.body,false);
  }
}