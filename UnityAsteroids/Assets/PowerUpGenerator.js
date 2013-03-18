#pragma strict

var powerup:Rigidbody;

function Start () {
	//invoke repeating
	//wait 1 second before generating a powerup and then create a powerup every 5 seconds
	InvokeRepeating("createPowerup",1.0,5.0)

}
function createPowerup()
{
		//position of powerup
		Instantiate(powerup,Vector3(BorderController.rightmost,0,1),Quaternion.identity);

}
function Update () {

}