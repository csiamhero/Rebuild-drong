#pragma strict

var speed = 20.0;
function Update()
{
if(Input.GetKey(KeyCode.A))
{
transform.Rotate(Vector3.up);
}
else if(Input.GetKey(KeyCode.D))
{
transform.Rotate(Vector3.down);
}
else if(Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.S))
{
var x = Input.GetAxis("Horizontal") * Time.deltaTime * speed;
var y = Input.GetAxis("Vertical") * Time.deltaTime * speed;
transform.Translate(x, 0, y);
//transform.Rotate(Vector3.left);
}
else if(Input.GetKey(KeyCode.S))
{
//transform.Rotate(Vector3.right);
}
}